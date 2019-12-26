/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	var app = qlik.openApp('Oracle_data.qvf', config);

        //1、层级树图
	app.createCube({
				qDimensions : [{
					qDef : {
						qFieldDefs : ["ENAME"]
					}
				}],
				qMeasures : [{
					qDef : {
						qDef : "=sum(SAL)"
					}
				}],
				qInitialDataFetch : [{
					qTop : 0,
					qLeft : 0,
					qHeight : 5000,
					qWidth : 2
				}]
			}, function(reply) {
				var data = new Array();
				var i = 0;
				$.each(reply.qHyperCube.qDataPages[0].qMatrix, function(key, value) {
					data[i] = new Array();
					data[i][0]=value[0].qText;
					data[i][1]=(Number(value[1].qText)).toFixed(2);
					i++;
				});
				var data_w = new Array();
				var data_v1 = new Array();

				for(var i=0;i<data.length;i++){
					 data_w[i] = data[i][0];
					 data_v1[i] = data[i][1];
				}

			  var ba = echarts.init(document.getElementById('QV01'));

			option = {
    title : {
        text: '冰桶挑战'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'树图',
            type:'tree',
            orient: 'horizontal',  // vertical horizontal
            rootLocation: {x: 100,y: 230}, // 根节点位置  {x: 100, y: 'center'}
            nodePadding: 8,
            layerPadding: 200,
            hoverable: false,
            roam: true,
            symbolSize: 6,
            itemStyle: {
                normal: {
                    color: '#4883b4',
                    label: {
                        show: true,
                        position: 'right',
                        formatter: "{b}",
                        textStyle: {
                            color: '#000',
                            fontSize: 5
                        }
                    },
                    lineStyle: {
                        color: '#ccc',
                        type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

                    }
                },
                emphasis: {
                    color: '#4883b4',
                    label: {
                        show: false
                    },
                    borderWidth: 0
                }
            },
            
            data: [
                {"name":"冰桶挑战","children":[{"name":"刘作虎","children":[{"name":"周鸿祎","children":[{"name":"马化腾"},{"name":"徐小平","children":[{"name":"牛文文","children":[{"name":"姚劲波","children":[{"name":"蔡文胜"},{"name":"蔡明"},{"name":"汪小菲"}]},{"name":"杨守彬","children":[{"name":"所有的创业者"},{"name":"所有的投资人"},{"name":"所有的创业服务机构"}]},{"name":"蒲易"}]},{"name":"罗振宇","children":[{"name":"罗辑思维25000名会员"}]},{"name":"黄西"}]},{"name":"黄章"}]},{"name":"罗永浩"},{"name":"刘江峰","children":[{"name":"何刚","children":[{"name":"谢清江"},{"name":"王翔"},{"name":"艾伟"}]},{"name":"王煜磊"}]}]},{"name":"雷军","children":[{"name":"刘德华","children":[{"name":"朗朗"},{"name":"苏桦伟"},{"name":"周杰伦","children":[{"name":"方文山","children":[{"name":"九把刀"},{"name":"柯有伦"}]},{"name":"五月天","children":[{"name":"谢金燕","children":[{"name":"赵慧仙"},{"name":"张菲","children":[{"name":"小S"}]},{"name":"郭富城"}]},{"name":"张震"},{"name":"金城武"}]}]}]},{"name":"李彦宏","children":[{"name":"俞敏洪"},{"name":"潘石屹","children":[{"name":"任志强"}]},{"name":"田亮","children":[{"name":"王岳伦"},{"name":"小沈阳"},{"name":"李小鹏"}]}]},{"name":"郭台铭","children":[{"name":"孙正义","children":[{"name":"宫坂学"}]},{"name":"谢晓亮"},{"name":"林志玲"}]}]},{"name":"古永锵","children":[{"name":"马云"},{"name":"王长田","children":[{"name":"邓超","children":[{"name":"俞白眉","children":[{"name":"姚晨","children":[{"name":"吴秀波"},{"name":"吴彦祖"},{"name":"孙红雷"}]},{"name":"朱芳雨","children":[{"name":"王仕鹏","children":[{"name":"易建联"}]}]},{"name":"梁超"}]}]},{"name":"刘亦菲"},{"name":"刘同"}]}]},{"name":"朱挺","children":[{"name":"张耀坤","children":[{"name":"姜宁"},{"name":"唐淼"}]},{"name":"周海滨","children":[{"name":"汪嵩","children":[{"name":"蔡贇"},{"name":"李易峰"},{"name":"王弢 "}]},{"name":"邵佳一"},{"name":"高迪","children":[{"name":"莫雷诺"},{"name":"恩里克"},{"name":"保罗"}]}]},{"name":"阎小闯"}]},{"name":"郑璐","children":[{"name":"于嘉","children":[{"name":"董成鹏","children":[{"name":"伊一","children":[{"name":"许嵩"},{"name":"付辛博"},{"name":"洪辰"}]},{"name":"王祖蓝","children":[{"name":"王菀之"},{"name":"李亚男","children":[{"name":"宋熙年"},{"name":"钟嘉欣"},{"name":"陈美诗"}]},{"name":"贾玲"}]},{"name":"白客","children":[{"name":"盛宇","children":[{"name":"邪童 "},{"name":"杜海涛"},{"name":"汪涵"}]},{"name":"派克特"},{"name":"谢帝","children":[{"name":"C-BLOCK小胖"},{"name":"范元成"},{"name":"隋凯","children":[{"name":"高以翔"},{"name":"马楚成"}]}]}]}]},{"name":"易建联、李艾、江映蓉"}]},{"name":"Kevin Han"}]},{"name":"舒德伟","children":[{"name":"姚明"},{"name":"NBA中国全体员工"}]},{"name":"叶丙成","children":[{"name":"翟本乔"},{"name":"嵇晓华","children":[{"name":"王思聪","children":[{"name":"易振兴","children":[{"name":"徐磊"},{"name":"佟大为","children":[{"name":"孟非","children":[{"name":"郭德纲","children":[{"name":"于谦"}]},{"name":"黄健翔","children":[{"name":"张琳芃","children":[{"name":"黄博文"},{"name":"李帅"}]},{"name":"郜林","children":[{"name":"刘建宏"},{"name":"李玮峰"}]}]}]},{"name":"陈坤"},{"name":"AKB48"}]},{"name":"吴欣鸿","children":[{"name":"贾乃亮"},{"name":"李小璐"},{"name":"angelababy"}]}]},{"name":"林更新","children":[{"name":"赵又廷"},{"name":"佟丽娅"},{"name":"AngelaBaby"}]},{"name":"刘军"}]},{"name":"魏坤琳","children":[{"name":"迟毓凯"},{"name":"李淼"},{"name":"姜振宇"}]},{"name":"刘成城","children":[{"name":"张颖"},{"name":"王自如","children":[{"name":"刘翔"},{"name":"吴海"},{"name":"傅盛"}]},{"name":"汪峰"}]}]}]},{"name":"萧上农","children":[{"name":"林之晨","children":[{"name":"柯文哲","children":[{"name":"赵少康"},{"name":"魏德圣"},{"name":"郭子乾"}]},{"name":"连胜文","children":[{"name":"郝龙斌","children":[{"name":"卢贝松"},{"name":"胡志强"},{"name":"邱文达"}]},{"name":"朱立伦"},{"name":"吴思华"}]},{"name":"管中闵","children":[{"name":"杜紫军"},{"name":"陈保基"},{"name":"杨泮池"}]}]},{"name":"陈素兰","children":[{"name":"颜漏有","children":[{"name":"詹宏志","children":[{"name":"钮承泽"},{"name":"李宗盛"},{"name":"何飞鹏"}]},{"name":"陈清祥","children":[{"name":"黄日灿"},{"name":"黄胜华"},{"name":"吴升奇"}]}]}]},{"name":"蔡牧民"}]},{"name":"林书豪","children":[{"name":"兰德里-菲尔兹"},{"name":"帕森斯"}]},{"name":"王猛","children":[{"name":"杨毅"},{"name":"柯凡"},{"name":"StephonMarbury"}]},{"name":"叶璇","children":[{"name":"李晨"},{"name":"苏芒","children":[{"name":"黄晓明","children":[{"name":"范冰冰"},{"name":"李冰冰","children":[{"name":"王中军"},{"name":"新浪娱乐"}]}]}]},{"name":"陈欧"}]},{"name":"章子怡","children":[{"name":"TFBoys","children":[{"name":"尚格云顿"}]},{"name":"韩庚","children":[{"name":"迈克尔·贝"},{"name":"何炅"},{"name":"那英"}]},{"name":"苏菲玛索"}]},{"name":"张靓颖","children":[{"name":"张杰","children":[{"name":"快乐家族"},{"name":"李宇春"},{"name":"萧敬腾"}]},{"name":"王铮亮","children":[{"name":"天天兄弟"},{"name":"武艺","children":[{"name":"卓文萱","children":[{"name":"廖俊杰","children":[{"name":"连晨翔","children":[{"name":"马振桓"},{"name":"萧煌奇"},{"name":"诗安"}]}]}]},{"name":"阿纬"},{"name":"洪卓立"}]},{"name":"DJ小强"}]},{"name":"Timbaland"}]},{"name":"邓紫棋","children":[{"name":"李蕴","children":[{"name":"何超莲","children":[{"name":"吴克群","children":[{"name":" 何猷啟"},{"name":"陈泽杉"}]},{"name":"卡提娜"},{"name":"jw_amusic "}]},{"name":"诗雅"},{"name":"陈静"}]},{"name":"蔡卓妍","children":[{"name":"钟欣桐","children":[{"name":"乔振宇","children":[{"name":"马天宇"},{"name":"陈伟霆","children":[{"name":"霍汶希"}]},{"name":"高伟光"}]},{"name":" 周汤豪"},{"name":"黃鴻升"}]},{"name":"谢娜"},{"name":"詹瑞文"}]},{"name":"茜拉","children":[{"name":"EXO-M"},{"name":"巫启贤"}]}]},{"name":"卫诗雅","children":[{"name":"吴君如"},{"name":"邹凯光"},{"name":"钟舒漫"}]},{"name":"容祖儿","children":[{"name":"梁家辉"},{"name":"黄伟文"}]},{"name":"蔡一智","children":[{"name":"陈奕迅","children":[{"name":"谢霆锋","children":[{"name":"桂纶镁","children":[{"name":"舒淇"},{"name":"张惠妹"},{"name":"孙燕姿"}]},{"name":"林丹"},{"name":"李云迪"}]},{"name":"范晓萱"},{"name":"张一白","children":[{"name":"彭于晏","children":[{"name":"林超贤"}]},{"name":"魏晨","children":[{"name":"秦凯","children":[{"name":"孙杨","children":[{"name":"张学友"},{"name":"华少"}]},{"name":"吴敏霞"},{"name":"陈一冰"}]}]},{"name":"张嘉佳"}]}]},{"name":"葛民辉"},{"name":"郑伊健","children":[{"name":"陈小春"},{"name":"谢天华"}]}]},{"name":"林俊杰","children":[{"name":"王力宏"},{"name":"蔡依林"}]},{"name":"徐峥","children":[{"name":"李连杰"},{"name":"韩寒"},{"name":"赵薇"}]},{"name":"刘循子墨","children":[{"name":"薛之谦"},{"name":"杨姗姗"}]},{"name":"王自健","children":[{"name":"郑凯"},{"name":"刘江"},{"name":"刘涛"}]},{"name":"罗震环","children":[{"name":"邹凯","children":[{"name":"许嵩 "},{"name":"张成龙"},{"name":"邹市明 "}]},{"name":"林琪雪","children":[{"name":"禹景曦","children":[{"name":"张翔玲","children":[{"name":"PLU小米"},{"name":"高地平"}]},{"name":"戴士","children":[{"name":"杨丰智"},{"name":"李鑫"},{"name":"卢本伟","children":[{"name":"孙亚龙"},{"name":"瞿申图"},{"name":"朱永权"}]}]},{"name":"裴乐","children":[{"name":"沈伟荣","children":[{"name":"金亦波"},{"name":"卞正伟"}]},{"name":"李君"}]}]},{"name":"孔连顺","children":[{"name":"老湿","children":[{"name":"至尊玉"},{"name":"马俊"},{"name":"颜土豆avi"}]},{"name":"小爱"},{"name":"马诗歌","children":[{"name":"张本煜"}]}]},{"name":"孙博文","children":[{"name":"陈剑书"},{"name":"陈琦栋"},{"name":"滕林季"}]}]},{"name":"沈建宏","children":[{"name":"陈奕","children":[{"name":"炎亚纶"},{"name":"张榕容"},{"name":"刘希平"}]},{"name":"何润东","children":[{"name":"俞永福","children":[{"name":"曹国伟"},{"name":"余承东"},{"name":"金池","children":[{"name":"曹格"},{"name":"魏雪漫"},{"name":"曾一鸣 "}]}]},{"name":"郭品超"},{"name":"霍建华 "}]},{"name":"张根硕"}]}]},{"name":"涂松岩","children":[{"name":"海清"},{"name":"张韵艺"},{"name":"王媛可"}]},{"name":"陈嘉上","children":[{"name":"包贝尔","children":[{"name":"陈赫"},{"name":"杨子姗"}]}]},{"name":"留几手","children":[{"name":"夏河"},{"name":"陆琪","children":[{"name":"贝志诚"},{"name":"孙杰"}]},{"name":"张辛苑","children":[{"name":"黄轩"},{"name":"古川雄辉"},{"name":"蒋劲夫"}]}]},{"name":"郑希怡","children":[{"name":"古巨基","children":[{"name":"崔始源","children":[{"name":"朴正洙"},{"name":"金希澈"}]},{"name":"黄子华"}]}]},{"name":"宁浩","children":[{"name":"徐铮"},{"name":"黄渤"},{"name":"雷佳音"}]},{"name":"鈕承澤","children":[{"name":"陈意涵","children":[{"name":"张钧甯"},{"name":"陈柏霖","children":[{"name":"冯绍峰"},{"name":"高华阳","children":[{"name":"王志鹏"},{"name":"李东霖"},{"name":"夏青"}]}]},{"name":"池珍熙"}]},{"name":"阮经天"}]},{"name":"周显扬","children":[{"name":"王珞丹"},{"name":"井柏然"},{"name":"张晋"}]},{"name":"徐熙娣","children":[{"name":"蔡康永"}]},{"name":"刘俊纬","children":[{"name":"杨奇煜","children":[{"name":"曾志伟"},{"name":"张艾亚","children":[{"name":"房思瑜"}]}]},{"name":"林峰"}]},{"name":"周汤豪","children":[{"name":"庄濠全","children":[{"name":"罗志祥"},{"name":"簡愷樂"}]},{"name":"林暐恒"},{"name":"王雪娥","children":[{"name":"洪炜宁"}]}]},{"name":"杨颖","children":[{"name":"倪妮"}]},{"name":"董子健","children":[{"name":"郭京飞","children":[{"name":"袁咏仪"},{"name":"钱芳"}]},{"name":"陆毅"},{"name":"关锦鹏"}]}]}
            ]
        }
    ]
};
		  ba.setOption(option);	  
		  });

//2、散点图
app.createCube({
				qDimensions : [{
					qDef : {
						qFieldDefs : ["ENAME"]
					}
				}],
				qMeasures : [{
					qDef : {
						qDef : "=sum(SAL)"
					}
				}],
				qInitialDataFetch : [{
					qTop : 0,
					qLeft : 0,
					qHeight : 5000,
					qWidth : 2
				}]
			}, function(reply) {
				var data = new Array();
				var i = 0;
				$.each(reply.qHyperCube.qDataPages[0].qMatrix, function(key, value) {
					data[i] = new Array();
					data[i][0]=value[0].qText;
					data[i][1]=(Number(value[1].qText)).toFixed(2);
					i++;
				});
				data.sort();
				var data_w = new Array();
				var data_v1 = new Array();

				for(var i=0;i<data.length;i++){
					 data_w[i] = data[i][0];
					 data_v1[i] = data[i][1];
				}

			  var ba = echarts.init(document.getElementById('QV02'));

			function random(){
    var r = Math.round(Math.random() * 100);
    return (r * (r % 2 == 0 ? 1 : -1));
}

function randomDataArray() {
    var d = [];
    var len = 100;
    while (len--) {
        d.push([
            random(),
            random(),
            Math.abs(random()),
        ]);
    }
    return d;
}

option = {
    tooltip : {
        trigger: 'axis',
        showDelay : 0,
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    legend: {
        data:['scatter1','scatter2']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'value',
            splitNumber: 4,
            scale: true
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitNumber: 4,
            scale: true
        }
    ],
    series : [
        {
            name:'scatter1',
            type:'scatter',
            symbolSize: function (value){
                return Math.round(value[2] / 5);
            },
            data: randomDataArray()
        },
        {
            name:'scatter2',
            type:'scatter',
            symbolSize: function (value){
                return Math.round(value[2] / 5);
            },
            data: randomDataArray()
        }
    ]
};
                    
		  ba.setOption(option);	  
		  });
		  
//3、关系图
//alert("test")
	app.createCube({
				qDimensions : [{
					qDef : {
						qFieldDefs : ["ENAME"]
					}
				}],
				qMeasures : [{
					qDef : {
						qDef : "=sum(SAL)"
					}
				}],
				qInitialDataFetch : [{
					qTop : 0,
					qLeft : 0,
					qHeight : 5000,
					qWidth : 2
				}]
			}, function(reply) {
				var data = new Array();
				var i = 0;
				$.each(reply.qHyperCube.qDataPages[0].qMatrix, function(key, value) {
					data[i] = new Array();
					data[i][0]=value[0].qText;
					data[i][1]=(Number(value[1].qText)).toFixed(2);
					i++;
				});
				data.sort();
				var data_w = new Array();
				var data_v1 = new Array();

				for(var i=0;i<data.length;i++){
					 data_w[i] = data[i][0];
					 data_v1[i] = data[i][1];
				}

			  var ba = echarts.init(document.getElementById('QV03'));
option = {
    title : {
        text: '人物关系：乔布斯',
        subtext: '数据来自人立方',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: '{a} : {b}'
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'left',
        data:['家人','朋友']
    },
    series : [
        {
            type:'force',
            name : "人物关系",
            ribbonType: false,
            categories : [
                {
                    name: '人物'
                },
                {
                    name: '家人'
                },
                {
                    name:'朋友'
                }
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#333'
                        }
                    },
                    nodeStyle : {
                        brushType : 'both',
                        borderColor : 'rgba(255,215,0,0.4)',
                        borderWidth : 1
                    },
                    linkStyle: {
                        type: 'curve'
                    }
                },
                emphasis: {
                    label: {
                        show: false
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    nodeStyle : {
                        //r: 30
                    },
                    linkStyle : {}
                }
            },
            useWorker: false,
            minRadius : 15,
            maxRadius : 25,
            gravity: 1.1,
            scaling: 1.1,
            roam: 'move',
            nodes:[
                {category:0, name: '乔布斯', value : 10, label: '乔布斯\n（主要）'},
                {category:1, name: '丽萨-乔布斯',value : 2},
                {category:1, name: '保罗-乔布斯',value : 3},
                {category:1, name: '克拉拉-乔布斯',value : 3},
                {category:1, name: '劳伦-鲍威尔',value : 7},
                {category:2, name: '史蒂夫-沃兹尼艾克',value : 5},
                {category:2, name: '奥巴马',value : 8},
                {category:2, name: '比尔-盖茨',value : 9},
                {category:2, name: '乔纳森-艾夫',value : 4},
                {category:2, name: '蒂姆-库克',value : 4},
                {category:2, name: '龙-韦恩',value : 1},
            ],
            links : [
                {source : '丽萨-乔布斯', target : '乔布斯', weight : 1, name: '女儿'},
                {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲'},
                {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1, name: '母亲'},
                {source : '劳伦-鲍威尔', target : '乔布斯', weight : 2},
                {source : '史蒂夫-沃兹尼艾克', target : '乔布斯', weight : 3, name: '合伙人'},
                {source : '奥巴马', target : '乔布斯', weight : 1},
                {source : '比尔-盖茨', target : '乔布斯', weight : 6, name: '竞争对手'},
                {source : '乔纳森-艾夫', target : '乔布斯', weight : 1, name: '爱将'},
                {source : '蒂姆-库克', target : '乔布斯', weight : 1},
                {source : '龙-韦恩', target : '乔布斯', weight : 1},
                {source : '克拉拉-乔布斯', target : '保罗-乔布斯', weight : 1},
                {source : '奥巴马', target : '保罗-乔布斯', weight : 1},
                {source : '奥巴马', target : '克拉拉-乔布斯', weight : 1},
                {source : '奥巴马', target : '劳伦-鲍威尔', weight : 1},
                {source : '奥巴马', target : '史蒂夫-沃兹尼艾克', weight : 1},
                {source : '比尔-盖茨', target : '奥巴马', weight : 6},
                {source : '比尔-盖茨', target : '克拉拉-乔布斯', weight : 1},
                {source : '蒂姆-库克', target : '奥巴马', weight : 1}
            ]
        }
    ]
};
		  ba.setOption(option);	  
		  });	

		  
//4、树状关系网络图
	app.createCube({
				qDimensions : [{
					qDef : {
						qFieldDefs : ["ENAME"]
					}
				}],
				qMeasures : [{
					qDef : {
						qDef : "=sum(SAL)"
					}
				}],
				qInitialDataFetch : [{
					qTop : 0,
					qLeft : 0,
					qHeight : 5000,
					qWidth : 2
				}]
			}, function(reply) {
				var data = new Array();
				var i = 0;
				$.each(reply.qHyperCube.qDataPages[0].qMatrix, function(key, value) {
					data[i] = new Array();
					data[i][0]=value[0].qText;
					data[i][1]=(Number(value[1].qText)).toFixed(2);
					i++;
				});
				data.sort();
				var data_w = new Array();
				var data_v1 = new Array();

				for(var i=0;i<data.length;i++){
					 data_w[i] = data[i][0];
					 data_v1[i] = data[i][1];
				}

			  var ba = echarts.init(document.getElementById('QV04'));

option2 = {
    title : {
        text: 'webkit内核依赖',
        subtext: '数据来自网络',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter : "{b}"
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {
                show: true,
                type: ['force', 'chord'],
                option: {
                    chord: {
                        minRadius : 2,
                        maxRadius : 10,
                        ribbonType: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    rotate: true
                                },
                                chordStyle: {
                                    opacity: 0.2
                                }
                            }
                        }
                    },
                    force: {
                        minRadius : 5,
                        maxRadius : 8,
                        itemStyle : {
                            normal : {
                                label: {
                                    show: false
                                },
                                linkStyle : {
                                    opacity : 0.5
                                }
                            }
                        }
                    }
                }
            },
            saveAsImage : {show: true}
        }
    },
    legend : {
        data : ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other'],
        orient : 'vertical',
        x : 'left'
    },
    noDataEffect: 'none',
    series :[{
        //FIXME No data
        type: 'force',
    }],
};

$.ajax({
    url: 'data/webkit-dep.json',
    dataType: 'json',
    success: function (data) {
        option2.series[0] = {
            type: 'force',
            name: 'webkit-dep',
            itemStyle: {
                normal : {
                    linkStyle : {
                        opacity : 0.5
                    }
                }
            },
            categories: data.categories,
            nodes: data.nodes,
            links: data.links,
            minRadius: 5,
            maxRadius: 8,
            gravity: 1.1,
            scaling: 1.1,
            steps: 20,
            large: true,
            useWorker: true,
            coolDown: 0.995,
            ribbonType: false
        };
  		                    
		ba.setOption(option2);	  
    }
});

		  });	
		  
//5、千层饼图
	app.createCube({
				qDimensions : [{
					qDef : {
						qFieldDefs : ["ENAME"]
					}
				}],
				qMeasures : [{
					qDef : {
						qDef : "=sum(SAL)"
					}
				}],
				qInitialDataFetch : [{
					qTop : 0,
					qLeft : 0,
					qHeight : 5000,
					qWidth : 2
				}]
			}, function(reply) {
				var data = new Array();
				var i = 0;
				$.each(reply.qHyperCube.qDataPages[0].qMatrix, function(key, value) {
					data[i] = new Array();
					data[i][0]=value[0].qText;
					data[i][1]=(Number(value[1].qText)).toFixed(2);
					i++;
				});
				data.sort();
				var data_w = new Array();
				var data_v1 = new Array();

				for(var i=0;i<data.length;i++){
					 data_w[i] = data[i][0];
					 data_v1[i] = data[i][1];
				}

			  var ba = echarts.init(document.getElementById('QV05'));

option = {
    title : {
        text: '浏览器占比变化',
        subtext: '纯属虚构',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['Chrome','Firefox','Safari','IE9+','IE8-']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : (function (){
        var series = [];
        for (var i = 0; i < 30; i++) {
            series.push({
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                itemStyle : {normal : {
                    label : {show : i > 28},
                    labelLine : {show : i > 28, length:20}
                }},
                radius : [i * 4 + 40, i * 4 + 43],
                data:[
                    {value: i * 128 + 80,  name:'Chrome'},
                    {value: i * 64  + 160,  name:'Firefox'},
                    {value: i * 32  + 320,  name:'Safari'},
                    {value: i * 16  + 640,  name:'IE9+'},
                    {value: i * 8  + 1280, name:'IE8-'}
                ]
            })
        }
        series[0].markPoint = {
            symbol:'emptyCircle',
            symbolSize:series[0].radius[0],
            effect:{show:true,scaleSize:12,color:'rgba(250,225,50,0.8)',shadowBlur:10,period:30},
            data:[{x:'50%',y:'50%'}]
        };
        return series;
    })()
};
                  
		  ba.setOption(option);	  
		  });
		  
//6、雷达图
	app.createCube({
				qDimensions : [{
					qDef : {
						qFieldDefs : ["ENAME"]
					}
				}],
				qMeasures : [{
					qDef : {
						qDef : "=sum(SAL)"
					}
				}],
				qInitialDataFetch : [{
					qTop : 0,
					qLeft : 0,
					qHeight : 5000,
					qWidth : 2
				}]
			}, function(reply) {
				var data = new Array();
				var i = 0;
				$.each(reply.qHyperCube.qDataPages[0].qMatrix, function(key, value) {
					data[i] = new Array();
					data[i][0]=value[0].qText;
					data[i][1]=(Number(value[1].qText)).toFixed(2);
					i++;
				});
				data.sort();
				var data_w = new Array();
				var data_v1 = new Array();

				for(var i=0;i<data.length;i++){
					 data_w[i] = data[i][0];
					 data_v1[i] = data[i][1];
				}

			  var ba = echarts.init(document.getElementById('QV06'));


option = {
    title : {
        text: '预算 vs 开销（Budget vs spending）',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        orient : 'vertical',
        x : 'right',
        y : 'bottom',
        data:['预算分配（Allocated Budget）','实际开销（Actual Spending）']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    polar : [
       {
           indicator : [
               { text: '销售（sales）', max: 6000},
               { text: '管理（Administration）', max: 16000},
               { text: '信息技术（Information Techology）', max: 30000},
               { text: '客服（Customer Support）', max: 38000},
               { text: '研发（Development）', max: 52000},
               { text: '市场（Marketing）', max: 25000}
            ]
        }
    ],
    calculable : true,
    series : [
        {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配（Allocated Budget）'
                },
                 {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '实际开销（Actual Spending）'
                }
            ]
        }
    ]
};
                    
		  ba.setOption(option);	  
		  });		
		  
//7、

	app.createCube({
				qDimensions : [{
					qDef : {
						qFieldDefs : ["ENAME"]
					}
				}],
				qMeasures : [{
					qDef : {
						qDef : "=sum(SAL)"
					}
				}],
				qInitialDataFetch : [{
					qTop : 0,
					qLeft : 0,
					qHeight : 5000,
					qWidth : 2
				}]
			}, function(reply) {
				var data = new Array();
				var i = 0;
				$.each(reply.qHyperCube.qDataPages[0].qMatrix, function(key, value) {
					data[i] = new Array();
					data[i][0]=value[0].qText;
					data[i][1]=(Number(value[1].qText)).toFixed(2);
					i++;
				});
				data.sort();
				var data_w = new Array();
				var data_v1 = new Array();

				for(var i=0;i<data.length;i++){
					 data_w[i] = data[i][0];
					 data_v1[i] = data[i][1];
				}
alert("test2")
			  var ba = echarts.init(document.getElementById('QV07'));

option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'业务指标',
            type:'gauge',
            startAngle: 180,
            endAngle: 0,
            center : ['50%', '90%'],    // 默认全局居中
            radius : 320,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 200
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 10,   // 每份split细分多少段
                length :12,        // 属性length控制线长
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                formatter: function(v){
                    switch (v+''){
                        case '10': return '低';
                        case '50': return '中';
                        case '90': return '高';
                        default: return '';
                    }
                },
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 'bolder'
                }
            },
            pointer: {
                width:50,
                length: '90%',
                color: 'rgba(255, 255, 255, 0.8)'
            },
            title : {
                show : true,
                offsetCenter: [0, '-60%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 30
                }
            },
            detail : {
                show : true,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#ccc',
                width: 100,
                height: 40,
                offsetCenter: [0, -40],       // x, y，单位px
                formatter:'{value}%',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize : 50
                }
            },
            data:[{value: 50, name: '完成率'}]
        }
    ]
};
//clearInterval(timeTicket);
timeTicket = setInterval(function (){
    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    //myChart.setOption(option,true);
	 ba.setOption(option,true);	  
},2000)
                  
		  });		
} );

	
	
	
	
