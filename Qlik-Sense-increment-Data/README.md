# Qlik-Sense-Increment-Data-Script 

### QlikSense 增量数据加载脚本及自动增量加载

*你可能疑惑我为什么使用JS作为文件后缀，但这不是重点，使用JS后缀完全是为了好看一点！*

#### ***增量脚本思路***
```
  1、数据表中，必须有一个时间戳，或自增长主键

  2、先创建一个全量抽取的qvd

  3、从qvd中获取最后插入的数据

  4、将这个值转成变量

  5、从数据库中抽取数据，做where条件，时间戳>变量

  6、通过Contencat合并已经抽取好的qvd数据

  7、加载新数据集到qvd;

  8、在qmc中设置定时任务，形成定时增量抽取
```

#### ***Qmc设置定时任务***
```
  1、打开qmc，左侧栏找到Tasks

  2、进入Tasks，点击Create new

  3、设置任务
    Step.1 设置任务名称
    Step.2 选择执行任务的app
    Step.3 勾选为启用任务
    Step.4 任务会话超时，时长
    Step.5 重试最大次数
    Step.6 点击Actions

  4、创建触发器

  5、我们在这里创建一个每日触发器，双击进入编辑
    1、Step.1 设置触发器名称
    2、Step.2 勾选为启用任务
    3、Step.3 选择时区

    注意：这里不改你的触发器触发事件会晚8个小时
    4、Step.4 选择触发器开始执行的时间
    5、Step.5 最后确认选择触发机制
    6、Step.6 选择每几天出发一次任务
    7、Step.7 任务结束时间，可以默认，不用时手动关闭！
    8、点击Ok完成触发器设置

    7、在Eidt reload Tasks页面点击Apply应用
    8、退回到Tasks页面 查看新增的任务

```