//抽取QVD中的数据
oldTable:
LOAD
*
FROM [lib://data/data.qvd]
(qvd);

//找到最后插入数据的时间戳，或者自增主键
//Resident 从已加载的数据表中加载数据
maxKeyTab:
load 
//注意：如果时间戳，要在这里进行格式化 date('time','YYYY-MM-DD hh:mm:ss')
Max(key) as MaxKey
Resident oldTable;

//将最后的时间戳，或者主键存成变量
/**
 * Peek函数官方解释：
 * Peek() 用于在表格中查找已经加载或内部内存中存在的行的字段值,可以将行号指定为表格。
 * 
 * 语法：
 * Peek(field_name[, row_no[, table_name ] ])
 */
	
Let v_maxValue  = Peek('MaxKey',0,'maxKeyTab');

/**
 * 1、删除已经没用的表，避免冗余数据对sense造成压力
 * 2、如果不清理这个表，后面的新表会继承这个表名！！
 */
Drop table oldTable;

/**
 * 增量加载数据部分
 */
//利用where条件，筛选出新增加的数据集
newTable:
LOAD  
*
FROM [lib://data/data.xlsx] 
/**
 * 注意：如果是时间戳，sql中也需要格式化 
 * where time > to_date('$(v_maxValue)','yyyy-mm-dd hh24:mi:ss');
 */
where key > '$(v_maxValue)';
	 
//拼接全量抽取的qvd
Concatenate
LOAD 
*
Resident oldTable;

//将抽取好的增量数据存入QVD
store * from newTable into [lib://data/data.qvd](qvd);

Drop table maxKeyTab;
/**
 * 删除增量抽取的数据集
 * 注：这里删除的原因是因为 ETL 和 OLAP 分开执行！
 */
Drop table newTable;
