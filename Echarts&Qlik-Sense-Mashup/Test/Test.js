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

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Oracle_data.qvf', config);

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
			  // alert("test2")
			  var ba= echarts.init(document.getElementById('QV01'));
var size = 60;
var size1 = 30;
var yy = 200;
var yy1 = 250;
option = {
    title: {
        text: "中国传媒大学教学单位分支图（制作人：展浩博201501213011）",
        top: "top",
        left: "left",
        textStyle: {
            color: '#f7f7f7'
        }
    },
    tooltip: {
        formatter: '{b}'
    },
    toolbox: {
        show: true,
        feature: {
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    backgroundColor: '#337ab7',
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '知识体系',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 60,
            gravity: 0.1,
            edgeLength: 30,
            layoutAnimation: true,
        },
        data: [{
            "name": "中国传媒大学",
            x: 0,
            y: yy,
            "symbolSize": 100,
            "category": "中国传媒大学",
            "draggable": "true"
        }, {
            "name": "经管学部",
            x: 10,
            y: yy1,
            "symbolSize": size,
            "category": "经管学部",
            "draggable": "true"

        }, {
            "name": "商学院",
            x: 20,
            y: yy,
            "symbolSize": size1,
            "category": "经管学部",
            "draggable": "true"
        }, {
            x: 30,
            y: yy1,
            "name": "文化发展研究所",
            "symbolSize": size1,
            "category": "经管学部",
            "draggable": "true"
        }, {
            x: 40,
            y: yy,
            "name": "经济与管理学院",
            "symbolSize": size1,
            "category": "经管学部",
            "draggable": "true",
            "value": 1
        }, {
            x: 50,
            y: yy1,
            "name": "雄安新区发展研究院",
            "symbolSize": size1,
            "category": "雄安新区发展研究院",
            "draggable": "true"
        }, {
            x: 80,
            y: yy,
            "name": "文法学部",
            "symbolSize": size,
            "category": "文法学部",
            "draggable": "true"
        }, {
            x: 90,
            y: yy1,
            "name": "汉语国际教育专业",
            "symbolSize": size1,
            "category": "文法学部",
            "draggable": "true"
        }, {
            x: 100,
            y: yy,
            "name": "文学院",
            "symbolSize": size1,
            "category": "文法学部",
            "draggable": "true"
        }, {
            x: 110,
            y: yy1,
            "name": "政治与法律学院",
            "symbolSize": size1,
            "category": "文法学部",
            "draggable": "true"
        }, {
            x: 120,
            y: yy,
            "name": "直属学院（机构）",
            "symbolSize": size,
            "category": "直属学院（机构）",
            "draggable": "true"
        }, {
            x: 130,
            y: yy1,
            "name": "协同创新中心",
            "symbolSize": size,
            "category": "协同创新中心",
            "draggable": "true"
        }, {
            x: 140,
            y: yy,
            "name": "新媒体研究院",
            "symbolSize": size1,
            "category": "协同创新中心",
            "draggable": "true"
        }, {
            x: 150,
            y: yy1,
            "name": "传媒科学研究所",
            "symbolSize": size1,
            "category": "协同创新中心",
            "draggable": "true"
        }, {
            x: 170,
            y: yy1,
            "name": "新闻传播学部",
            "symbolSize": size,
            "category": "新闻传播学部",
            "draggable": "true"
        }, {
            x: 180,
            y: yy,
            "name": "新闻学院",
            "symbolSize": size1,
            "category": "新闻传播学部",
            "draggable": "true"
        }, {
            x: 190,
            y: yy1,
            "name": "传播研究院",
            "symbolSize": size1,
            "category": "新闻传播学部",
            "draggable": "true"
        }, {
            x: 200,
            y: yy,
            "name": "电视学院",
            "symbolSize": size1,
            "category": "新闻传播学部",
            "draggable": "true"
        }, {
            x: 210,
            y: yy1,
            "name": "理工学部",
            "symbolSize": size,
            "category": "理工学部",
            "draggable": "true"
        }, {
            x: 220,
            y: yy,
            "name": "信息工程学院",
            "symbolSize": size1,
            "category": "理工学部",
            "draggable": "true"
        }, {
            x: 230,
            y: yy1,
            "name": "实验教学中心",
            "symbolSize": size1,
            "category": "理工学部",
            "draggable": "true"
        }, {
            x: 240,
            y: yy,
            "name": "理学院",
            "symbolSize": size1,
            "category": "理工学部",
            "draggable": "true"
        }, {
            x: 250,
            y: yy1,
            "name": "计算机学院",
            "symbolSize": size1,
            "category": "理工学部",
            "draggable": "true"
        }, {
            x: 260,
            y: yy,
            "name": "艺术学部",
            "symbolSize": size,
            "category": "艺术学部",
            "draggable": "true"
        }, {
            x: 280,
            y: yy,
            "name": "戏剧影视学院",
            "symbolSize": size1,
            "category": "艺术学部",
            "draggable": "true"
        }, {
            x: 290,
            y: yy1,
            "name": "艺术教育中心",
            "symbolSize": size1,
            "category": "艺术学部",
            "draggable": "true"
        }, {
            x: 300,
            y: yy,
            "name": "动画与艺术学院",
            "symbolSize": size1,
            "category": "艺术学部",
            "draggable": "true"
        }, {
            x: 310,
            y: yy1,
            "name": "艺术研究院",
            "symbolSize": size1,
            "category": "艺术学部",
            "draggable": "true"
        }, {
            x: 320,
            y: yy,
            "name": "音乐与录音艺术学院",
            "symbolSize": size1,
            "category": "艺术学部",
            "draggable": "true"
        }],
        links: [{
            "source": "中国传媒大学",
            "target": "经管学部"
        }, {
            "source": "中国传媒大学",
            "target": "文法学部"
        }, {
            "source": "中国传媒大学",
            "target": "直属学院（机构）"
        }, {
            "source": "中国传媒大学",
            "target": "协同创新中心"
        }, {
            "source": "中国传媒大学",
            "target": "新闻传播学部"
        }, {
            "source": "中国传媒大学",
            "target": "理工学部"
        }, {
            "source": "中国传媒大学",
            "target": "艺术学部"
        }, {
            "source": "经管学部",
            "target": "商学院"
        }, {
            "source": "经管学部",
            "target": "经济与管理学院"
        }, {
            "source": "经管学部",
            "target": "文化发展研究所"
        }, {
            "source": "经管学部",
            "target": "雄安新区发展研究院"
        }, {
            "source": "文法学部",
            "target": "汉语国际教育专业"
        }, {
            "source": "文法学部",
            "target": "文学院"
        }, {
            "source": "文法学部",
            "target": "政治与法律学院"
        }, {
            "source": "协同创新中心",
            "target": "新媒体研究院"
        }, {
            "source": "协同创新中心",
            "target": "传媒科学研究所"
        }, {
            "source": "新闻传播学部",
            "target": "新闻学院"
        }, {
            "source": "新闻传播学部",
            "target": "传播研究院"
        }, {
            "source": "新闻传播学部",
            "target": "电视学院"
        }, {
            "source": "理工学部",
            "target": "信息工程学院"
        }, {
            "source": "理工学部",
            "target": "实验教学中心"
        }, {
            "source": "理工学部",
            "target": "理学院"
        }, {
            "source": "理工学部",
            "target": "计算机学院"
        }, {
            "source": "艺术学部",
            "target": "戏剧影视学院"
        }, {
            "source": "艺术学部",
            "target": "艺术教育中心"
        }, {
            "source": "艺术学部",
            "target": "动画与艺术学院"
        }, {
            "source": "艺术学部",
            "target": "艺术研究院"
        }, {
            "source": "艺术学部",
            "target": "音乐与录音艺术学院"
        }],
        categories: [{
            'name': '中国传媒大学'
        }, {
            'name': '经管学部'
        }, {
            'name': '雄安新区发展研究院'
        }, {
            'name': '文法学部'
        }, {
            'name': '直属学院（机构）'
        }, {
            'name': '协同创新中心'
        }, {
            'name': '新闻传播学部'
        }, {
            'name': '理工学部'
        }, {
            'name': '艺术学部'
        }],
        roam: false,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{b}',
                fontSize: 16,
                fontStyle: '600',
            }
        },
        lineStyle: {
            normal: {
                width: 6,
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};
					 ba.setOption(option,true);	  
				
						  });
	//---------------------------------------------------------------------------------
	//---------------------------------------------------------------------------------
						  
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
			  var myChart = echarts.init(document.getElementById('QV02'));
		  
var myGraphData = [
        { "parentNode":"张三", "childNodes":["小明", "小华", "小杰", "小婷","小妍","小飞"]},
        { "parentNode":"小明", "childNodes":[ "小王", "小赵", "小钱" ] },
        { "parentNode":"小华", "childNodes":[ "小孙", "小李", "小周" ] },
        { "parentNode":"小杰", "childNodes":[ "小吴", "小郑" ] },
        { "parentNode":"小婷", "childNodes":[ "小谢", "小潘" ] },
        { "parentNode":"小妍", "childNodes":[ "小苏", "小陈" ] },
        { "parentNode":"小飞", "childNodes":[ "小郭", "小彭" ] }
        
    ];
        
function setNodeData(arr, m, n ,listdata) {
    var size = 33;
    for(var i=0; i<arr.length; i++){
        listdata.push({
            id : m++,
            category: n,
            name: arr[i],
            symbolSize: size,
            draggable: "true"
        });
    }
}
        
function setLinkData(sourceList, m, links) {
    for(var i=0; i<sourceList.length; i++){
        links.push({
            "source": sourceList[i],
            "target": m,
            lineStyle: {
                normal: {
                    color: 'source',
                }
            }
        })
    }
}    

var listdata = [];
var linksdata = [];     

var nodeData = myGraphData;
var m = 0;
var source = [];
for(var i=1; i < nodeData.length; i++){
    var node = nodeData[i].parentNode;
    var tx = [node];
    setNodeData( tx, m, 1, listdata);
    source.push(m);

    var Data = nodeData[i].childNodes;
    setNodeData( Data, m+1, 2, listdata);

    var sourceList = [];
    for(var n = m+1; n < m + Data.length + 1; n++){
        sourceList.push(n);
    }
    setLinkData( sourceList, m, linksdata);
    m = m + Data.length + 1;
}
        
var tx7 = [];
tx7.push(nodeData[0].parentNode);
setNodeData(tx7, m, 0, listdata);
setLinkData(source, m, linksdata);

option = {
    title: {
        text: "张三的朋友和他朋友的朋友",
        top: "top",
        left: "left",
        textStyle: {
            color: '#292421'
        }
    },
    tooltip: {
        formatter: '{b}'
    },
    backgroundColor: '#FFFFFF',
    legend: {
        show : true,
        data : [ {
            name : '父节点',             
            icon : 'rect'
        },
        {
            name : '层级二',             
            icon : 'roundRect'
        }, {
            name : '层级三',              
            icon : 'circle'
        } ],
        textStyle: {
            color: '#292421'
        },
        icon: 'circle',
        type: 'scroll',
        orient: 'horizontal',
        left: 10,
        top: 20,
        bottom: 20,
        itemWidth: 10,
        itemHeight: 10
    },
    animationDuration: 0,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '知识图谱',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 300,
            gravity: 0.1,
            edgeLength: 15,
            layoutAnimation: true,
        },
        data: listdata,
        links: linksdata,
        categories:[ 
            {
                name : '父节点',
                symbol : 'rect',
                label : {
                }
            }, {
                name : '层级二',
                symbol : 'rect'
            }, {
                name : '层级三',
                symbol : 'roundRect'
            }],
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                formatter: '{b}',
                fontSize: 10,
                fontStyle: '600',
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1.5,
                curveness: 0
            }
        }
    }]
};					 
myChart.setOption(option,true);	  

})
//--------------------------------------------------------------------------
//-----------------------------------------------------------------------------
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
			  var myChart = echarts.init(document.getElementById('QV03'));
		  
option = {
    title: {
        text: '浏览器占比变化',
        subtext: '纯属虚构',
        top: 10,
        left: 10
    },
    tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    legend: {
        type: 'scroll',
        bottom: 10,
        data: (function (){
            var list = [];
            for (var i = 1; i <=28; i++) {
                list.push(i + 2000 + '');
            }
            return list;
        })()
    },
    visualMap: {
        top: 'middle',
        right: 10,
        color: ['red', 'yellow'],
        calculable: true
    },
    radar: {
       indicator : [
           { text: 'IE8-', max: 400},
           { text: 'IE9+', max: 400},
           { text: 'Safari', max: 400},
           { text: 'Firefox', max: 400},
           { text: 'Chrome', max: 400}
        ]
    },
    series : (function (){
        var series = [];
        for (var i = 1; i <= 28; i++) {
            series.push({
                name:'浏览器（数据纯属虚构）',
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                    width: 1
                },
                emphasis: {
                    areaStyle: {
                        color: 'rgba(0,250,0,0.3)'
                    }
                },
                data:[
                  {
                    value:[
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 10,
                        i * 9,
                        i * i /2
                    ],
                    name: i + 2000 + ''
                  }
                ]
            });
        }
        return series;
    })()
};			 
myChart.setOption(option,true);	  

})
//--------------------------------------------------------------------------
//-----------------------------------------------------------------------------
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
			  var myChart = echarts.init(document.getElementById('QV04'));
		  
option = {
    backgroundColor: '#174B78',
     
     grid:{
            x:0,
            x2:0,
            y:0,
            y2:0
        },  
        
    title: {
        text: "",
        subtext: "",
        textStyle: {
            color: "#fff",
            fontSize: 18
        },
        top: "top",
        left: "center"
    },
    tooltip: {},
    legend: {},
    toolbox: {
        show: false,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '市容管理主题视图',
        type: 'graph',
        layout: 'force',

        force: {
           // initLayout: 'circular',
            repulsion: 160,
            gravity: 0.2,
            edgeLength: 90
        },

        data: [{
            "name": "市容管理主题",
            // "x": 0,
            // y: 0,
            "symbolSize": 24,
            "draggable": "true",
            "value": 1

        }, {
            "name": "组织能力指标",
            "symbolSize": 10,
            "category": "类目",
            "draggable": "true",
            "value": 1
        }, {
            "name": "地区工作能力情况",
            "symbolSize": 8,
            "category": "地区工作能力情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "工作人员数量",
            "symbolSize": 6,
            "category": "地区工作能力情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "指挥中心城管工作人数",
            "symbolSize": 4,
            "category": "地区工作能力情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "二级平台城管工作人数",
            "symbolSize": 4,
            "category": "地区工作能力情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "责任单位数量",
            "symbolSize": 6,
            "category": "地区工作能力情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "区级责任单位数量",
            "symbolSize": 4,
            "category": "地区工作能力情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "区属责任单位数量",
            "symbolSize": 4,
            "category": "地区工作能力情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "地区网格分布情况",
            "symbolSize": 8,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "万米网格数量",
            "symbolSize": 6,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "南市街道网格数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "繁华地区网格数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "新兴街道网格数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "小白楼街道网格数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "体育馆街道网格数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "劝业场街道网格数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "南营门街道网格数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "城区部件数量",
            "symbolSize": 6,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "公共设施类部件数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "市容环境类部件数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "园林绿化类部件数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "房屋土地类类部件数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "道路交通类部件数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "其他设施类部件数量",
            "symbolSize": 4,
            "category": "地区网格分布情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "业务能力指标",
            "symbolSize": 10,
            "category": "类目",
            "draggable": "true",
            "value": 1
        }, {
            "name": "日常工作动态情况",
            "symbolSize": 8,
            "category": "日常工作动态情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "业务事件环比增长",
            "symbolSize": 6,
            "category": "日常工作动态情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "业务事件总数量",
            "symbolSize": 4,
            "category": "日常工作动态情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "常发事件环比增长",
            "symbolSize": 6,
            "category": "日常工作动态情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "常发事件类别情况",
            "symbolSize": 4,
            "category": "日常工作动态情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "偶发事件环比增长",
            "symbolSize": 6,
            "category": "日常工作动态情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "偶发事件类别情况",
            "symbolSize": 4,
            "category": "日常工作动态情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "上报事件来源情况",
            "symbolSize": 8,
            "category": "上报事件来源情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "主要来源环比增长",
            "symbolSize": 6,
            "category": "上报事件来源情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "主要来源类别情况",
            "symbolSize": 4,
            "category": "上报事件来源情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "次要来源环比增长",
            "symbolSize": 6,
            "category": "上报事件来源情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "次要来源类别情况",
            "symbolSize": 4,
            "category": "上报事件来源情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件部件关联情况",
            "symbolSize": 8,
            "category": "事件部件关联情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "关联部件事件数量环比增长",
            "symbolSize": 6,
            "category": "事件部件关联情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "关联部件事件类别情况",
            "symbolSize": 4,
            "category": "事件部件关联情况",
            "draggable": "true",
            "value": 1
        }, {
            "name": "工作态势指标",
            "symbolSize": 10,
            "category": "类目",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件流转态势",
            "symbolSize": 8,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "上报中事件占比",
            "symbolSize": 6,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "上报中事件数量",
            "symbolSize": 4,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "受理中事件占比",
            "symbolSize": 6,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "受理中事件数量",
            "symbolSize": 4,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "立案派遣中事件占比",
            "symbolSize": 6,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "立案派遣中事件数量",
            "symbolSize": 4,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "处理中事件占比",
            "symbolSize": 6,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "处理中事件数量",
            "symbolSize": 4,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "核查中事件占比",
            "symbolSize": 6,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "核查中事件数量",
            "symbolSize": 4,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "已结案事件占比",
            "symbolSize": 6,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "已结案事件数量",
            "symbolSize": 4,
            "category": "事件流转态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "部件故障态势",
            "symbolSize": 8,
            "category": "部件故障态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "部件损坏类事件占比",
            "symbolSize": 6,
            "category": "部件故障态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "部件损坏类事件数量",
            "symbolSize": 4,
            "category": "部件故障态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "部件丢失类事件占比",
            "symbolSize": 6,
            "category": "部件故障态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "部件丢失类事件数量",
            "symbolSize": 4,
            "category": "部件故障态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "部件被圈占类事件占比",
            "symbolSize": 6,
            "category": "部件故障态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "部件被圈占类事件数量",
            "symbolSize": 4,
            "category": "部件故障态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "人员工作态势",
            "symbolSize": 8,
            "category": "人员工作态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "在岗人员占比",
            "symbolSize": 6,
            "category": "人员工作态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "在岗人员数",
            "symbolSize": 4,
            "category": "人员工作态势",
            "draggable": "true",
            "value": 1
        }, {
            "name": "效能考核指标",
            "symbolSize": 10,
            "category": "类目",
            "draggable": "true",
            "value": 1
        }, {
            "name": "总体工作效能评价",
            "symbolSize": 8,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件立案数环比增长",
            "symbolSize": 6,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件立案数",
            "symbolSize": 4,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件立案率",
            "symbolSize": 4,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件结案率环比增长",
            "symbolSize": 6,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件结案数",
            "symbolSize": 4,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件结案率",
            "symbolSize": 4,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件按期结案率环比增长",
            "symbolSize": 6,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件按期结案数",
            "symbolSize": 4,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "事件按期结案率",
            "symbolSize": 4,
            "category": "总体工作效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "监督员工作能力评价",
            "symbolSize": 8,
            "category": "监督员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "监督员上报数量环比增长",
            "symbolSize": 6,
            "category": "监督员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "监督员上报数",
            "symbolSize": 4,
            "category": "监督员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "监督员上报准确率环比增长",
            "symbolSize": 6,
            "category": "监督员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "监督员有效上报数",
            "symbolSize": 4,
            "category": "监督员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "巡检员工作能力评价",
            "symbolSize": 8,
            "category": "巡检员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "巡检员上报数量环比增长",
            "symbolSize": 6,
            "category": "巡检员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "巡检员上报数",
            "symbolSize": 4,
            "category": "巡检员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "巡检员上报准确率环比增长",
            "symbolSize": 6,
            "category": "巡检员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "巡检员有效上报数",
            "symbolSize": 4,
            "category": "巡检员工作能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "值班室任务量评价",
            "symbolSize": 8,
            "category": "值班室任务量评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "值班室任务量环比增长",
            "symbolSize": 6,
            "category": "值班室任务量评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "值班室工作任务类别",
            "symbolSize": 4,
            "category": "值班室任务量评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "街道核查能力评价",
            "symbolSize": 8,
            "category": "街道核查能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "街道事件核查数环比增长",
            "symbolSize": 6,
            "category": "街道核查能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "街道应核查数",
            "symbolSize": 4,
            "category": "街道核查能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "街道事件核查率环比增长",
            "symbolSize": 6,
            "category": "街道核查能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "街道核查数",
            "symbolSize": 4,
            "category": "街道核查能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "街道事件按期核查率环比增长",
            "symbolSize": 6,
            "category": "街道核查能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "街道超期核查数",
            "symbolSize": 4,
            "category": "街道核查能力评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "万米网格管理效能评价",
            "symbolSize": 8,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "A类等级网格数量环比增长",
            "symbolSize": 6,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "A类等级网格数量",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "A类等级立案分数均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "A类等级综合指标均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "B类等级网格数量环比增长",
            "symbolSize": 6,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "B类等级网格数量",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "B类等级立案分数均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "B类等级综合指标均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "C类等级网格数量环比增长",
            "symbolSize": 6,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "C类等级网格数量",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "C类等级立案分数均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "C类等级综合指标均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "D类等级网格数量环比增长",
            "symbolSize": 6,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "D类等级网格数量",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "D类等级立案分数均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "D类等级综合指标均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "E类等级网格数量环比增长",
            "symbolSize": 6,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "E类等级网格数量",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "E类等级立案分数均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "E类等级综合指标均值",
            "symbolSize": 4,
            "category": "万米网格管理效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "责任单位效能评价",
            "symbolSize": 8,
            "category": "责任单位效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "责任单位事件应处置数环比增长",
            "symbolSize": 6,
            "category": "责任单位效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "责任单位应处置数",
            "symbolSize": 4,
            "category": "责任单位效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "责任单位事件处置率环比增长",
            "symbolSize": 6,
            "category": "责任单位效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "责任单位处置数",
            "symbolSize": 4,
            "category": "责任单位效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "责任单位事件按期处置率环比增长",
            "symbolSize": 6,
            "category": "责任单位效能评价",
            "draggable": "true",
            "value": 1
        }, {
            "name": "责任单位按期处置数",
            "symbolSize": 4,
            "category": "责任单位效能评价",
            "draggable": "true",
            "value": 1
        }],
        links: [{
            "source": "市容管理主题",
            "target": "组织能力指标"
        }, {
            "source": "组织能力指标",
            "target": "地区工作能力情况"
        }, {
            "source": "地区工作能力情况",
            "target": "工作人员数量"
        }, {
            "source": "工作人员数量",
            "target": "指挥中心城管工作人数"
        }, {
            "source": "工作人员数量",
            "target": "二级平台城管工作人数"
        }, {
            "source": "地区工作能力情况",
            "target": "责任单位数量"
        }, {
            "source": "责任单位数量",
            "target": "区级责任单位数量"
        }, {
            "source": "责任单位数量",
            "target": "区属责任单位数量"
        }, {
            "source": "组织能力指标",
            "target": "地区网格分布情况"
        }, {
            "source": "地区部件分布情况",
            "target": "万米网格数量"
        }, {
            "source": "万米网格数量",
            "target": "南市街道网格数量"
        }, {
            "source": "万米网格数量",
            "target": "繁华地区网格数量"
        }, {
            "source": "万米网格数量",
            "target": "新兴街道网格数量"
        }, {
            "source": "万米网格数量",
            "target": "小白楼街道网格数量"
        }, {
            "source": "万米网格数量",
            "target": "体育馆街道网格数量"
        }, {
            "source": "万米网格数量",
            "target": "劝业场街道网格数量"
        }, {
            "source": "万米网格数量",
            "target": "南营门街道网格数量"
        }, {
            "source": "地区部件分布情况",
            "target": "城区部件数量"
        }, {
            "source": "城区部件数量",
            "target": "公共设施类部件数量"
        }, {
            "source": "城区部件数量",
            "target": "市容环境类部件数量"
        }, {
            "source": "城区部件数量",
            "target": "园林绿化类部件数量"
        }, {
            "source": "城区部件数量",
            "target": "房屋土地类类部件数量"
        }, {
            "source": "城区部件数量",
            "target": "道路交通类部件数量"
        }, {
            "source": "城区部件数量",
            "target": "其他设施类部件数量"
        }, {
            "source": "市容管理主题",
            "target": "业务能力指标"
        }, {
            "source": "业务能力指标",
            "target": "日常工作动态情况"
        }, {
            "source": "日常工作动态情况",
            "target": "业务事件环比增长"
        }, {
            "source": "业务事件环比增长",
            "target": "业务事件总数量"
        }, {
            "source": "日常工作动态情况",
            "target": "常发事件环比增长"
        }, {
            "source": "常发事件环比增长",
            "target": "常发事件类别情况"
        }, {
            "source": "日常工作动态情况",
            "target": "偶发事件环比增长"
        }, {
            "source": "偶发事件环比增长",
            "target": "偶发事件类别情况"
        }, {
            "source": "业务能力指标",
            "target": "上报事件来源情况"
        }, {
            "source": "上报事件来源情况",
            "target": "主要来源环比增长"
        }, {
            "source": "主要来源环比增长",
            "target": "主要来源类别情况"
        }, {
            "source": "上报事件来源情况",
            "target": "次要来源环比增长"
        }, {
            "source": "次要来源环比增长",
            "target": "次要来源类别情况"
        }, {
            "source": "业务能力指标",
            "target": "事件部件关联情况"
        }, {
            "source": "事件部件关联情况",
            "target": "关联部件事件数量环比增长"
        }, {
            "source": "关联部件事件数量环比增长",
            "target": "关联部件事件类别情况"
        }, {
            "source": "市容管理主题",
            "target": "工作态势指标"
        }, {
            "source": "工作态势指标",
            "target": "事件流转态势"
        }, {
            "source": "事件流转态势",
            "target": "上报中事件占比"
        }, {
            "source": "上报中事件占比",
            "target": "上报中事件数量"
        }, {
            "source": "事件流转态势",
            "target": "受理中事件占比"
        }, {
            "source": "受理中事件占比",
            "target": "受理中事件数量"
        }, {
            "source": "事件流转态势",
            "target": "立案派遣中事件占比"
        }, {
            "source": "立案派遣中事件占比",
            "target": "立案派遣中事件数量"
        }, {
            "source": "事件流转态势",
            "target": "处理中事件占比"
        }, {
            "source": "处理中事件占比",
            "target": "处理中事件数量"
        }, {
            "source": "事件流转态势",
            "target": "核查中事件占比"
        }, {
            "source": "核查中事件占比",
            "target": "核查中事件数量"
        }, {
            "source": "事件流转态势",
            "target": "已结案事件占比"
        }, {
            "source": "已结案事件占比",
            "target": "已结案事件数量"
        }, {
            "source": "工作态势指标",
            "target": "部件故障态势"
        }, {
            "source": "部件故障态势",
            "target": "部件损坏类事件占比"
        }, {
            "source": "部件损坏类事件占比",
            "target": "部件损坏类事件数量"
        }, {
            "source": "部件故障态势",
            "target": "部件丢失类事件占比"
        }, {
            "source": "部件丢失类事件占比",
            "target": "部件丢失类事件数量"
        }, {
            "source": "部件故障态势",
            "target": "部件被圈占类事件占比"
        }, {
            "source": "部件被圈占类事件占比",
            "target": "部件被圈占类事件数量"
        }, {
            "source": "工作态势指标",
            "target": "人员工作态势"
        }, {
            "source": "工作人员在岗态势",
            "target": "在岗人员占比"
        }, {
            "source": "在岗人员占比",
            "target": "在岗人员数"
        }, {
            "source": "市容管理主题",
            "target": "效能考核指标"
        }, {
            "source": "效能考核指标",
            "target": "总体工作效能评价"
        }, {
            "source": "总体工作效能评价",
            "target": "事件立案数环比增长"
        }, {
            "source": "事件立案数环比增长",
            "target": "事件立案数"
        }, {
            "source": "事件立案数环比增长",
            "target": "事件立案率"
        }, {
            "source": "总体工作效能评价",
            "target": "事件结案率环比增长"
        }, {
            "source": "事件结案率环比增长",
            "target": "事件结案数"
        }, {
            "source": "事件结案率环比增长",
            "target": "事件结案率"
        }, {
            "source": "总体工作效能评价",
            "target": "事件按期结案率环比增长"
        }, {
            "source": "事件按期结案率环比增长",
            "target": "事件按期结案数"
        }, {
            "source": "事件按期结案率环比增长",
            "target": "事件按期结案率"
        }, {
            "source": "效能考核指标",
            "target": "监督员工作能力评价"
        }, {
            "source": "监督员工作能力评价",
            "target": "监督员上报数量环比增长"
        }, {
            "source": "监督员上报数量环比增长",
            "target": "监督员上报数"
        }, {
            "source": "监督员工作能力评价",
            "target": "监督员上报准确率环比增长"
        }, {
            "source": "监督员上报准确率环比增长",
            "target": "监督员有效上报数"
        }, {
            "source": "效能考核指标",
            "target": "巡检员工作能力评价"
        }, {
            "source": "巡检员工作能力评价",
            "target": "巡检员上报数量环比增长"
        }, {
            "source": "巡检员上报数量环比增长",
            "target": "巡检员上报数"
        }, {
            "source": "巡检员工作能力评价",
            "target": "巡检员上报准确率环比增长"
        }, {
            "source": "巡检员上报准确率环比增长",
            "target": "巡检员有效上报数"
        }, {
            "source": "效能考核指标",
            "target": "值班室任务量评价"
        }, {
            "source": "值班室任务量评价",
            "target": "值班室任务量环比增长"
        }, {
            "source": "值班室任务量环比增长",
            "target": "值班室工作任务类别"
        }, {
            "source": "效能考核指标",
            "target": "街道核查能力评价"
        }, {
            "source": "街道核查能力评价",
            "target": "街道事件核查数环比增长"
        }, {
            "source": "街道事件核查数环比增长",
            "target": "街道应核查数"
        }, {
            "source": "街道核查能力评价",
            "target": "街道事件核查率环比增长"
        }, {
            "source": "街道事件核查率环比增长",
            "target": "街道核查数"
        }, {
            "source": "街道核查能力评价",
            "target": "街道事件按期核查率环比增长"
        }, {
            "source": "街道事件按期核查率环比增长",
            "target": "街道超期核查数"
        }, {
            "source": "效能考核指标",
            "target": "万米网格管理效能评价"
        }, {
            "source": "万米网格管理效能评价",
            "target": "A类等级网格数量环比增长"
        }, {
            "source": "A类等级网格数量环比增长",
            "target": "A类等级网格数量"
        }, {
            "source": "A类等级网格数量环比增长",
            "target": "A类等级立案分数均值"
        }, {
            "source": "A类等级网格数量环比增长",
            "target": "A类等级综合指标均值"
        }, {
            "source": "万米网格管理效能评价",
            "target": "B类等级网格数量环比增长"
        }, {
            "source": "B类等级网格数量环比增长",
            "target": "B类等级网格数量"
        }, {
            "source": "B类等级网格数量环比增长",
            "target": "B类等级立案分数均值"
        }, {
            "source": "B类等级网格数量环比增长",
            "target": "B类等级综合指标均值"
        }, {
            "source": "万米网格管理效能评价",
            "target": "C类等级网格数量环比增长"
        }, {
            "source": "C类等级网格数量环比增长",
            "target": "C类等级网格数量"
        }, {
            "source": "C类等级网格数量环比增长",
            "target": "C类等级立案分数均值"
        }, {
            "source": "C类等级网格数量环比增长",
            "target": "C类等级综合指标均值"
        }, {
            "source": "万米网格管理效能评价",
            "target": "D类等级网格数量环比增长"
        }, {
            "source": "D类等级网格数量环比增长",
            "target": "D类等级网格数量"
        }, {
            "source": "D类等级网格数量环比增长",
            "target": "D类等级立案分数均值"
        }, {
            "source": "D类等级网格数量环比增长",
            "target": "D类等级综合指标均值"
        }, {
            "source": "万米网格管理效能评价",
            "target": "E类等级网格数量环比增长"
        }, {
            "source": "E类等级网格数量环比增长",
            "target": "E类等级网格数量"
        }, {
            "source": "E类等级网格数量环比增长",
            "target": "E类等级立案分数均值"
        }, {
            "source": "E类等级网格数量环比增长",
            "target": "E类等级综合指标均值"
        }, {
            "source": "效能考核指标",
            "target": "责任单位效能评价"
        }, {
            "source": "责任单位效能评价",
            "target": "责任单位事件应处置数环比增长"
        }, {
            "source": "责任单位事件应处置数环比增长",
            "target": "责任单位应处置数"
        }, {
            "source": "责任单位效能评价",
            "target": "责任单位事件处置率环比增长"
        }, {
            "source": "责任单位事件处置率环比增长",
            "target": "责任单位处置数"
        }, {
            "source": "责任单位效能评价",
            "target": "责任单位事件按期处置率环比增长"
        }, {
            "source": "责任单位事件按期处置率环比增长",
            "target": "责任单位按期处置数"
        }],
        categories: [{
            "name": "类目"
        }, {
            "name": "地区工作能力情况"
        }, {
            "name": "地区网格分布情况"
        }, {
            "name": "日常工作动态情况"
        }, {
            "name": "上报事件来源情况"
        }, {
            "name": "事件部件关联情况"
        }, {
            "name": "事件流转态势"
        }, {
            "name": "部件故障态势"
        }, {
            "name": "人员工作态势"
        }, {
            "name": "总体工作效能评价"
        }, {
            "name": "监督员工作能力评价"
        }, {
            "name": "巡检员工作能力评价"
        }, {
            "name": "值班室任务量评价"
        }, {
            "name": "街道核查能力评价"
        }, {
            "name": "万米网格管理效能评价"
        }, {
            "name": "责任单位效能评价"
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',
                 textStyle: {
                     fontSize: 14
                    }

            }
        },
        
        
        
        lineStyle: {
            normal: {
               color: 'source',
                curveness: 0
               // type: "solid"
            }
        }
    }]
};
myChart.setOption(option,true);	  

})
//--------------------------------------------------------------------------
//-----------------------------------------------------------------------------
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
			  var myChart = echarts.init(document.getElementById('QV05'));
		  
				var chinaGeoCoordMap = {
						'黑龙江': [127.9688, 45.368],
						'内蒙古': [110.3467, 41.4899],
						"吉林": [125.8154, 44.2584],
						'北京市': [116.4551, 40.2539],
						"辽宁": [123.1238, 42.1216],
						"河北": [114.4995, 38.1006],
						"天津": [117.4219, 39.4189],
						"山西": [112.3352, 37.9413],
						"陕西": [109.1162, 34.2004],
						"甘肃": [103.5901, 36.3043],
						"宁夏": [106.3586, 38.1775],
						"青海": [101.4038, 36.8207],
						"新疆": [87.9236, 43.5883],
						"西藏": [91.11, 29.97],
						"四川": [103.9526, 30.7617],
						"重庆": [108.384366, 30.439702],
						"山东": [117.1582, 36.8701],
						"河南": [113.4668, 34.6234],
						"江苏": [118.8062, 31.9208],
						"安徽": [117.29, 32.0581],
						"湖北": [114.3896, 30.6628],
						"浙江": [119.5313, 29.8773],
						"福建": [119.4543, 25.9222],
						"江西": [116.0046, 28.6633],
						"湖南": [113.0823, 28.2568],
						"贵州": [106.6992, 26.7682],
						"云南": [102.9199, 25.4663],
						"广东": [113.12244, 23.009505],
						"广西": [108.479, 23.1152],
						"海南": [110.3893, 19.8516],
						'上海': [121.4648, 31.2891]
					};
					var chinaDatas = [
						[{
							name: '黑龙江',
							value: 0
						}],	[{
							name: '内蒙古',
							value: 0
						}],	[{
							name: '吉林',
							value: 0
						}],	[{
							name: '辽宁',
							value: 0
						}],	[{
							name: '河北',
							value: 0
						}],	[{
							name: '天津',
							value: 0
						}],	[{
							name: '山西',
							value: 0
						}],	[{
							name: '陕西',
							value: 0
						}],	[{
							name: '甘肃',
							value: 0
						}],	[{
							name: '宁夏',
							value: 0
						}],	[{
							name: '青海',
							value: 0
						}],	[{
							name: '新疆',
							value: 0
						}],[{
							name: '西藏',
							value: 0
						}],	[{
							name: '四川',
							value: 0
						}],	[{
							name: '重庆',
							value: 0
						}],	[{
							name: '山东',
							value: 0
						}],	[{
							name: '河南',
							value: 0
						}],	[{
							name: '江苏',
							value: 0
						}],	[{
							name: '安徽',
							value: 0
						}],	[{	
							name: '湖北',
							value: 0
						}],	[{
							name: '浙江',
							value: 0
						}],	[{
							name: '福建',
							value: 0
						}],	[{
							name: '江西',
							value: 0
						}],	[{
							name: '湖南',
							value: 0
						}],	[{
							name: '贵州',
							value: 0
						}],[{
							name: '广西',
							value: 0
						}],	[{
							name: '海南',
							value: 0
						}],	[{
							name: '上海',
							value: 1
						}]
					];

					var convertData = function(data) {
						var res = [];
						for(var i = 0; i < data.length; i++) {
							var dataItem = data[i];
							var fromCoord = chinaGeoCoordMap[dataItem[0].name];
							var toCoord = [116.4551,40.2539];
							if(fromCoord && toCoord) {
								res.push([{
									coord: fromCoord,
									value: dataItem[0].value
								}, {
									coord: toCoord,
								}]);
							}
						}
						return res;
					};
					var series = [];
					[['北京市', chinaDatas]].forEach(function(item, i) {
						console.log(item)
						series.push({
								type: 'lines',
								zlevel: 2,
								effect: {
									show: true,
									period: 4, //箭头指向速度，值越小速度越快
									trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
									symbol: 'arrow', //箭头图标
									symbolSize: 5, //图标大小
								},
								lineStyle: {
									normal: {
										width: 1, //尾迹线条宽度
										opacity: 1, //尾迹线条透明度
										curveness: .3 //尾迹线条曲直度
									}
								},
								data: convertData(item[1])
							}, {
								type: 'effectScatter',
								coordinateSystem: 'geo',
								zlevel: 2,
								rippleEffect: { //涟漪特效
									period: 4, //动画时间，值越小速度越快
									brushType: 'stroke', //波纹绘制方式 stroke, fill
									scale: 4 //波纹圆环最大限制，值越大波纹越大
								},
								label: {
									normal: {
										show: true,
										position: 'right', //显示位置
										offset: [5, 0], //偏移设置
										formatter: function(params){//圆环显示文字
											return params.data.name;
										},
										fontSize: 13
									},
									emphasis: {
										show: true
									}
								},
								symbol: 'circle',
								symbolSize: function(val) {
									return 5+ val[2] * 5; //圆环大小
								},
								itemStyle: {
									normal: {
										show: false,
										color: '#f00'
									}
								},
								data: item[1].map(function(dataItem) {
									return {
										name: dataItem[0].name,
										value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
									};
								}),
							},
							//被攻击点
							{
								type: 'scatter',
								coordinateSystem: 'geo',
								zlevel: 2,
								rippleEffect: {
									period: 4,
									brushType: 'stroke',
									scale: 4
								},
								label: {
									normal: {
										show: true,
										position: 'right',
										//offset:[5, 0],
										color: '#0f0',
										formatter: '{b}',
										textStyle: {
											color: "#0f0"
										}
									},
									emphasis: {
										show: true,
										color: "#f60"
									}
								},
								symbol: 'pin',
								symbolSize: 50,
								data: [{
									name: item[0],
									value: chinaGeoCoordMap[item[0]].concat([10]),
								}],
							}
						);
					});

					option = {
						tooltip: {
							trigger: 'item',
							backgroundColor: 'rgba(166, 200, 76, 0.82)',
							borderColor: '#FFFFCC',
							showDelay: 0,
							hideDelay: 0,
							enterable: true,
							transitionDuration: 0,
							extraCssText: 'z-index:100',
							formatter: function(params, ticket, callback) {
								//根据业务自己拓展要显示的内容
								var res = "";
								var name = params.name;
								var value = params.value[params.seriesIndex + 1];
								res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
								return res;
							}
						},
						backgroundColor:"#013954",
						visualMap: { //图例值控制
							min: 0,
							max: 1,
							calculable: true,
							show: true,
							color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
							textStyle: {
								color: '#fff'
							}
						},
						geo: {
							map: 'china',
							zoom: 1.2,
							label: {
								emphasis: {
									show: false
								}
							},
							roam: true, //是否允许缩放
							itemStyle: {
								normal: {
									color: 'rgba(51, 69, 89, .5)', //地图背景色
									borderColor: '#516a89', //省市边界线00fcff 516a89
									borderWidth: 1
								},
								emphasis: {
									color: 'rgba(37, 43, 61, .5)' //悬浮背景
								}
							}
						},
						series: series
					};
				myChart.setOption(option);	  
				});
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//-----------------------------------------------------------------------------
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
			  var myChart = echarts.init(document.getElementById('QV06'));
		  
		 var geoCoordMap = {
     '上海': [121.4648, 31.2891],
     '东莞': [113.8953, 22.901],
     '东营': [118.7073, 37.5513],
     '中山': [113.4229, 22.478],
     '临汾': [111.4783, 36.1615],
     '临沂': [118.3118, 35.2936],
     '丹东': [124.541, 40.4242],
     '丽水': [119.5642, 28.1854],
     '新疆': [86.9236, 41.5883],
     '佛山': [112.8955, 23.1097],
     '保定': [115.0488, 39.0948],
     '甘肃': [103.9901, 36.3043],
     '北京': [116.4551, 40.4539],
     '北海': [109.314, 21.6211],
     '江苏': [120.2062, 32.9208],
     '广西': [108.479, 24.1152],
     '江西': [116.0046, 28.6633],
     '南通': [121.1023, 32.1625],
     '厦门': [118.1689, 24.6478],
     '台州': [121.1353, 28.6688],
     '安徽': [117.29, 32.0581],
     '内蒙古': [111.4124, 41.4901],
     '咸阳': [108.4131, 34.8706],
     '黑龙江': [127.9688, 46.868],
     '唐山': [118.4766, 39.6826],
     '嘉兴': [120.9155, 30.6354],
     '大同': [113.7854, 39.8035],
     '天津': [117.4219, 39.4189],
     '山西': [112.3352, 37.9413],
     '威海': [121.9482, 37.1393],
     '宁波': [121.5967, 29.6466],
     '宝鸡': [107.1826, 34.3433],
     '宿迁': [118.5535, 33.7775],
     // '江苏': [119.3000,31.5582],
     '广东': [114.5107, 23.8196],
     '廊坊': [116.521, 39.0509],
     '延安': [109.1052, 36.4252],
     '张家口': [115.1477, 40.8527],
     '徐州': [117.5208, 34.3268],
     '德州': [116.6858, 37.2107],
     '惠州': [114.6204, 23.1647],
     '四川': [103.9526, 30.7617],
     '扬州': [119.4653, 32.8162],
     '承德': [117.5757, 41.4075],
     '西藏': [91.1865, 30.1465],
     '无锡': [120.3442, 31.5527],
     '日照': [119.2786, 35.5023],
     '云南': [101.9199, 25.0663],
     '浙江': [119.5313, 29.8773],
     '枣庄': [117.323, 34.8926],
     '柳州': [109.3799, 24.9774],
     '株洲': [113.5327, 27.0319],
     '湖北': [113.0896, 31.3628],
     '汕头': [117.1692, 23.3405],
     '江门': [112.6318, 22.1484],
     '辽宁': [123.1238, 42.1216],
     '沧州': [116.8286, 38.2104],
     '河源': [114.917, 23.9722],
     '泉州': [118.3228, 25.1147],
     '泰安': [117.0264, 36.0516],
     '泰州': [120.0586, 32.5525],
     '山东': [117.1582, 36.8701],
     '济宁': [116.8286, 35.3375],
     '海口': [110.3893, 19.8516],
     '淄博': [118.0371, 36.6064],
     '淮安': [118.927, 33.4039],
     '深圳': [114.5435, 22.5439],
     '清远': [112.9175, 24.3292],
     '温州': [120.498, 27.8119],
     '渭南': [109.7864, 35.0299],
     '湖州': [119.8608, 30.7782],
     '湘潭': [112.5439, 27.7075],
     '滨州': [117.8174, 37.4963],
     '潍坊': [119.0918, 36.524],
     '烟台': [120.7397, 37.5128],
     '玉溪': [101.9312, 23.8898],
     '珠海': [113.7305, 22.1155],
     '盐城': [120.2234, 33.5577],
     '盘锦': [121.9482, 41.0449],
     '河北': [115.4995, 38.6006],
     '福建': [118.0543, 26.5222],
     '秦皇岛': [119.2126, 40.0232],
     '绍兴': [120.564, 29.7565],
     '聊城': [115.9167, 36.4032],
     '肇庆': [112.1265, 23.5822],
     '舟山': [122.2559, 30.2234],
     '苏州': [120.6519, 31.3989],
     '莱芜': [117.6526, 36.2714],
     '菏泽': [115.6201, 35.2057],
     '营口': [122.4316, 40.4297],
     '葫芦岛': [120.1575, 40.578],
     '衡水': [115.8838, 37.7161],
     '衢州': [118.6853, 28.8666],
     '青海': [97.4038, 35.8207],
     '陕西': [109.1162, 34.2004],
     '贵州': [106.6992, 26.7682],
     '连云港': [119.1248, 34.552],
     '邢台': [114.8071, 37.2821],
     '邯郸': [114.4775, 36.535],
     '河南': [113.4668, 34.6234],
     '鄂尔多斯': [108.9734, 39.2487],
     '重庆': [107.7539, 30.1904],
     '金华': [120.0037, 29.1028],
     '铜川': [109.0393, 35.1947],
     '宁夏': [106.3586, 38.1775],
     '镇江': [119.4763, 31.9702],
     '吉林': [125.8154, 44.2584],
     '湖南': [111.8823, 28.2568],
     '长治': [112.8625, 36.4746],
     '阳泉': [113.4778, 38.0951],
     '青岛': [120.4651, 36.3373],
     '韶关': [113.7964, 24.7028],
     '海南': [109.8500, 19.7028],
     '台湾': [120.7964, 24.1528],
 };

 var BJData = [
     [{
         name: '海南'
     }],
     [{
         name: '台湾'
     }],
     [{
         name: '河北'
     }],
     [{
         name: '青海'
     }],
     [{
         name: '西藏'
     }],
     [{
         name: '山东'
     }],
     [{
         name: '宁夏'
     }],
     [{
         name: '山西'
     }],
     [{
         name: '陕西'
     }],
     [{
         name: '安徽'
     }],
     [{
         name: '江西'
     }],
     [{
         name: '广东'
     }],
     [{
         name: '黑龙江'
     }],
     [{
         name: '吉林'
     }],
     [{
         name: '辽宁'
     }],
     [{
         name: '湖北'
     }],
     [{
         name: '浙江'
     }],
     [{
         name: '福建'
     }],
     [{
         name: '重庆'
     }],
     [{
         name: '宁夏'
     }],
     [{
         name: '贵州'
     }],
     [{
         name: '湖南'
     }],
     [{
         name: '甘肃'
     }],
     [{
         name: '四川'
     }],
     [{
         name: '云南'
     }],
     [{
         name: '江苏'
     }],

     [{
         name: '北京',
         value: randomData()
     }, {
         name: '上海'
     }],
     [{
         name: '新疆',
         value: randomData()
     }, {
         name: '浙江'
     }],
     [{
         name: '新疆',
         value: randomData()
     }, {
         name: '安徽'
     }],
     [{
         name: '新疆',
         value: randomData()
     }, {
         name: '青海'
     }],
     [{
         name: '河南',
         value: randomData()
     }, {
         name: '江苏'
     }],

     [{
         name: '上海',
         value: randomData()
     }, {
         name: '江西'
     }],
     [{
         name: '上海',
         value: randomData()
     }, {
         name: '四川'
     }],
     [{
         name: '北京',
         value: randomData()
     }, {
         name: '广东'
     }],
     [{
         name: '上海',
         value: randomData()
     }, {
         name: '江苏'
     }],
     [{
         name: '广西',
         value: randomData()
     }, {
         name: '上海'
     }],

     [{
         name: '北京',
         value: randomData()
     }, {
         name: '四川'
     }],
     [{
         name: '内蒙古',
         value: randomData()
     }, {
         name: '江苏'
     }]
 ];

 function randomData() {
     return Math.round(Math.random() * 300);
 }
 var series = [{
     name: '接通率',
     type: "map",
     map: "china",
     zoom: 1.152,
     // top: '30',
     zlevel: 1,
     left: 'center',
     align: 'right',
     label: {
         normal: {
             show: false
         },
         emphasis: {
             show: false
         },
     },
     itemStyle: {
         normal: {
             borderColor: "#112b3b", //省市边界线
             borderColor: "#a7e4e6", //省市边界线
             shadowColor: 'rgba(166, 230, 236, 0.6)',
             shadowOffsetX: 0,
             shadowOffsetY: 0,
             shadowBlur: 120
         },
         emphasis: {
             areaColor:"#4aafde",
             borderColor: "red"
         },
     },
     data: [{
             name: "北京",
             value: 400,
         },
         {
             name: "上海",
             value: 350
         }, {
             name: "天津",
             value: 300
         }, {
             name: "重庆",
             value: 200
         }, {
             name: "广东",
             value: 300
         }, {
             name: "广西",
             value: 10
         }, {
             name: "湖南",
             value: 200
         }, {
             name: "湖北",
             value: 300
         }, {
             name: "河南",
             value: 129
         }, {
             name: "河北",
             value: 390
         }, {
             name: "山东",
             value: 200
         }, {
             name: "山西",
             value: 60
         }, {
             name: "黑龙江",
             value: 400
         }, {
             name: "吉林",
             value: 201
         }, {
             name: "辽宁",
             value: 30
         }, {
             name: "内蒙古",
             value: 490
         }, {
             name: "新疆",
             value: 200
         }, {
             name: "西藏",
             value: 30
         }, {
             name: "宁夏",
             value: 50
         }, {
             name: "甘肃",
             value: 30
         }, {
             name: "云南",
             value: 30
         }, {
             name: "陕西",
             value: 30
         }, {
             name: "青海",
             value: 30
         }, {
             name: "贵州",
             value: 30
         }, {
             name: "福建",
             value: 220
         }, {
             name: "江西",
             value: 30
         }, {
             name: "四川",
             value: 210
         }, {
             name: "江苏",
             value: 140
         }, {
             name: "安徽",
             value: 30
         }, {
             name: "浙江",
             value: 333
         }, {
             name: "海南",
             value: 500
         }, {
             name: "台湾",
             value: 30
         }, {
             name: "南海诸岛",
             value: 0
         },
     ]
 }];
 BJData.forEach(function(item, i) {
     if (item.length === 1) {
         series.push({
             type: "effectScatter",
             coordinateSystem: "geo",
             zlevel: 2,
             label: {
                 normal: {
                     show: true,
                     position: "bottom", //显示位置
                     offset: [0, 0], //偏移设置
                     color: "#fff",
                     formatter: "{b}", //圆环显示文字
                     fontWeight: "lighter",
                     fontSize: 10
                 },
                 emphasis: {
                     show: true
                 },
             },
             symbol: "circle",
             symbolSize: function(val) {
                 return 0.0001 //圆环大小
             },
             itemStyle: {
                 normal: {
                     color: "#fff",
                     show: false,

                 },
                 emphasis: {
                     show: false,

                 }
             },
             data: [{
                 name: item[0].name,
                 value: geoCoordMap[item[0].name]
             }]
         })
     } else {
         series.push({
                 name: '上海-广州',
                 type: "lines",
                 zlevel: 2,
                 animationDuration: function(idx) {
                     // 越往后的数据延迟越大
                     return idx * 400;
                 },
                 animationDelay: function(idx) {
                     // 越往后的数据延迟越大
                     return idx * 100;
                 },
                 effect: {
                     show: true,
                     color: "#fff",
                     period: 2, //箭头指向速度，值越小速度越快
                     trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
                     symbol: "circle", //箭头图标
                     symbolSize: 2, //图标大小
                     loop: true, //是否循环
                     delay: function(idx) {
                         console.log(idx)
                         return Math.round(Math.random() * 3000);
                     }
                 },
                 lineStyle: {
                     normal: {
                         color: 'red',
                         width: 0, //尾迹线条宽度
                         opacity: 0, //尾迹线条透明度
                         curveness: 0.4 //尾迹线条曲直度
                     }
                 },
                 data: [
                     [{
                             coord: geoCoordMap[item[0].name],
                             value: item[0].value
                         },
                         {
                             coord: geoCoordMap[item[1].name]
                         }
                     ]
                 ]
             }, {
                 type: "effectScatter",
                 coordinateSystem: "geo",
                 name: item[0].name,
                 zlevel: 5,
                 rippleEffect: {
                     //涟漪特效
                     period: 4, //动画时间，值越小速度越快
                     brushType: "stroke", //波纹绘制方式 stroke, fill
                     scale: 4 //波纹圆环最大限制，值越大波纹越大
                 },
                 label: {
                     normal: {
                         show: true,
                         position: "bottom", //显示位置
                         offset: [0, 4], //偏移设置
                         fontWeight: "lighter",
                         fontSize: 10,
                         color: "#fff",
                         formatter: "{b}" //圆环显示文字
                     },
                     emphasis: {
                         show: false
                     },
                 },
                 symbol: "circle",
                 symbolSize: function(val) {
                     return 6 + val[2] / 2000; //圆环大小
                 },
                 itemStyle: {
                     normal: {
                         color: "#f00",
                         show: true,

                     },
                     emphasis: {
                         show: true,

                     }
                 },
                 data: [{
                     name: item[0].name,
                     value: geoCoordMap[item[0].name].concat([item[0].value])
                 }]
             },

         );
     }

 });

 option = {
     title : {
        text: '智能语音机器人实时数据',
        subtext: '数据纯属虚构',
        left: 'center',
        top: '40px',
        textStyle : {
            color: '#fff'
        }
     },
     backgroundColor: '#0e2832',
     tooltip: {
         trigger: "item",
         backgroundColor: "#0e2832",
         borderColor: "#071e21",
         showDelay: 0,
         hideDelay: 0,
         enterable: true,
         transitionDuration: 0,
         extraCssText: "z-index:100",
         // formatter: function(params, ticket, callback) {
         //     //根据业务自己拓展要显示的内容
         //     var res = "";
         //     var name = params.name;
         //     var value = params.value[params.seriesIndex + 1];
         //     res =
         //         "<span style='color:#fff;'>" +
         //         name +
         //         "</span><br/>数据：" +
         //         value;
         //     return res;
         // }
     },
     visualMap: {
         //图例值控制
         show: false,
         type: 'piecewise',
         seriesIndex: 0,
         pieces: [{
                 min: 401
             }, // 不指定 max，表示 max 为无限大（Infinity）。
             {
                 min: 301,
                 max: 400
             },
             {
                 min: 201,
                 max: 300
             },
             {
                 min: 101,
                 max: 200
             },
             {
                 max: 100
             }
         ],
         inRange: {
             color: ['#124754', '#4ed9f0']
         },
         showLabel: false,
         calculable: true,
     },
     geo: {
         map: "china",
         show: false,
         roam: false, //是否允许缩放
         layoutCenter: ["50%", "50%"], //地图位置
         layoutSize: "120%",
         itemStyle: {
             normal: {
                 show: 'true',
                 color: "#0e2832", //地图背景色
                 borderWidth: 2,
                 borderColor: "#a7e4e6", //省市边界线
                 shadowColor: 'rgba(166, 230, 236, 0.6)',
                 shadowOffsetX: 0,
                 shadowOffsetY: 0,
                 shadowBlur: 120
             },
             emphasis: {
                 show: 'true',
                 color: "rgba(255, 43, 61, .9)" //悬浮背景
             }
         }
     },
     // legend: {
     //     orient: 'vertical',
     //     top: '30',
     //     left: 'center',
     //     align: 'right',
     //     data: [
     //     ],
     //     textStyle: {
     //         color: '#fff',
     //         fontSize: 20,
     //     },
     //     itemWidth: 50,
     //     itemHeight: 30,
     //     selectedMode: 'multiple'
     // },
     series: series
 };
				myChart.setOption(option);	  
				});
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//-----------------------------------------------------------------------------
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
			  var myChart = echarts.init(document.getElementById('QV06'));
		  
option = {

    tooltip: {
        show: true
    },
    series: [{
        type: "wordCloud",
        gridSize:6,
        shape:'diamond',
        sizeRange: [12, 50],
        width:800,
        height:500,
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
                name: " 没有",
                value: 30,
            },
            {
                name: " 屏幕",
                value: 24
            },
            {
                name: " 不错",
                value: 21
            },
            {
                name: " 可以",
                value: 19
            },
            {
                name: " 发货",
                value: 18
            },
            {
                name: " 这个",
                value: 18
            },
            {
                name: " 什么",
                value: 17
            },
            {
                name: " 一个",
                value: 12
            },
            {
                name: " 不好",
                value: 12
            },
            {
                name: " 质量",
                value: 11
            },
            {
                name: " 快递",
                value: 11
            },
            {
                name: " 问题",
                value: 10
            },
            {
                name: " 物流",
                value: 9
            },
            {
                name: " 几天",
                value: 9
            },
            {
                name: " 一般",
                value: 9
            },
            {
                name: " 就是",
                value: 9
            },
            {
                name: " 使用",
                value: 8
            },
            {
                name: " 怎么",
                value: 8
            },
            {
                name: " 电池",
                value: 8
            },
            {
                name: " 不能",
                value: 8
            },
            {
                name: " 速度",
                value: 8
            },
            {
                name: " 客服",
                value: 8
            },
            {
                name: " 一星",
                value: 8
            },
            {
                name: " 拍照",
                value: 8
            },
            {
                name: " 摄像头",
                value: 7
            },
            {
                name: " 外观",
                value: 7
            },
            {
                name: " 包装",
                value: 7
            },
            {
                name: " 到货",
                value: 7
            },
            {
                name: " 有点",
                value: 7
            },
            {
                name: " 抢购",
                value: 6
            },
            {
                name: " 这样",
                value: 6
            },
            {
                name: " 性价比",
                value: 6
            },
            {
                name: " 一般般",
                value: 6
            },
            {
                name: " 出现",
                value: 6
            },
            {
                name: " 以前",
                value: 6
            },
            {
                name: " 知道",
                value: 6
            },
            {
                name: " 一次",
                value: 6
            },
            {
                name: " 真的",
                value: 6
            },
            {
                name: " 收到",
                value: 6
            },
            {
                name: " 其他",
                value: 6
            },
            {
                name: " 电量",
                value: 6
            },
            {
                name: " 还是",
                value: 6
            },
            {
                name: " 不行",
                value: 6
            },
            {
                name: " 红米",
                value: 6
            },
            {
                name: " 那么",
                value: 6
            },
            {
                name: " 挺快",
                value: 5
            },
            {
                name: " 现在",
                value: 5
            },
            {
                name: " 服务",
                value: 5
            },
            {
                name: " 充电",
                value: 5
            },
            {
                name: " 流畅",
                value: 5
            },
            {
                name: " 系统",
                value: 5
            },
            {
                name: " 非常",
                value: 5
            },
            {
                name: " 满意",
                value: 5
            },
            {
                name: " 购物",
                value: 5
            },
            {
                name: " 玩游戏",
                value: 5
            },
            {
                name: " 信号",
                value: 5
            },
            {
                name: " 不了",
                value: 5
            },
            {
                name: " 别人",
                value: 5
            },
            {
                name: " 死机",
                value: 5
            },
            {
                name: " 耗电",
                value: 5
            },
            {
                name: " 一直",
                value: 5
            },
            {
                name: " 像素",
                value: 5
            },
            {
                name: " 第一次",
                value: 5
            },
            {
                name: " 广告",
                value: 5
            },
            {
                name: " 买个",
                value: 5
            },
            {
                name: " 黑屏",
                value: 5
            },
            {
                name: " 为什么",
                value: 4
            },
            {
                name: " 猴王",
                value: 4
            },
            {
                name: " 视频",
                value: 4
            },
            {
                name: " 体验",
                value: 4
            },
            {
                name: " 好评",
                value: 4
            },
            {
                name: " 闪屏",
                value: 4
            },
            {
                name: " 价格",
                value: 4
            },
            {
                name: " 饥饿",
                value: 4
            },
            {
                name: " 营销",
                value: 4
            },
            {
                name: " 发热",
                value: 4
            },
            {
                name: " 还行",
                value: 4
            },
            {
                name: " 一天",
                value: 4
            },
            {
                name: " 需要",
                value: 4
            },
            {
                name: " 特别",
                value: 4
            },
            {
                name: " 而且",
                value: 4
            },
            {
                name: " 运行",
                value: 4
            },
            {
                name: " 等到",
                value: 4
            },
            {
                name: " 手机卡",
                value: 4
            },
            {
                name: " 呵呵",
                value: 4
            },
            {
                name: " 时候",
                value: 4
            },
            {
                name: " 东西",
                value: 4
            },
            {
                name: " 感觉",
                value: 4
            },
            {
                name: " 卡机",
                value: 4
            },
            {
                name: " 没什么",
                value: 4
            },
            {
                name: " 大家",
                value: 4
            },
            {
                name: " 没货",
                value: 4
            },
            {
                name: " 售后",
                value: 4
            },
            {
                name: " 比较",
                value: 4
            },
            {
                name: " 退货",
                value: 4
            },
            {
                name: " 加价",
                value: 3
            },
            {
                name: " 耳机",
                value: 3
            },
            {
                name: " 呜呜",
                value: 3
            },
            {
                name: " 一分钱",
                value: 3
            },
            {
                name: " 一分货",
                value: 3
            },
            {
                name: " 默认",
                value: 3
            },
            {
                name: " 说好",
                value: 3
            },
            {
                name: " 你们",
                value: 3
            },
            {
                name: " 一点",
                value: 3
            },
            {
                name: " 超级",
                value: 3
            },
            {
                name: " 耐用",
                value: 3
            },
            {
                name: " 很快",
                value: 3
            },
            {
                name: " 断流",
                value: 3
            },
            {
                name: " 套装",
                value: 3
            },
            {
                name: " 一样",
                value: 3
            },
            {
                name: " 发票",
                value: 3
            },
            {
                name: " 买回来",
                value: 3
            },
            {
                name: " 软件",
                value: 3
            },
            {
                name: " 还好",
                value: 3
            },
            {
                name: " 以后",
                value: 3
            },
            {
                name: " 下单",
                value: 3
            },
            {
                name: " 打游戏",
                value: 3
            },
            {
                name: " 我们",
                value: 3
            },
            {
                name: " 但是",
                value: 3
            },
            {
                name: " 一部",
                value: 3
            },
            {
                name: " 王者",
                value: 3
            },
            {
                name: " 不怎么样",
                value: 3
            },
            {
                name: " 看看",
                value: 3
            },
            {
                name: " 自己",
                value: 3
            },
            {
                name: " 里面",
                value: 3
            },
            {
                name: " 边框",
                value: 3
            },
            {
                name: " 看着",
                value: 3
            },
            {
                name: " 要死",
                value: 3
            },
            {
                name: " 原因",
                value: 3
            },
            {
                name: " 新机",
                value: 3
            },
            {
                name: " 不如",
                value: 3
            },
            {
                name: " 老是",
                value: 3
            },
            {
                name: " 购买",
                value: 3
            },
            {
                name: " 更好",
                value: 3
            },
            {
                name: " 相机",
                value: 3
            },
            {
                name: " 竟然",
                value: 3
            },
            {
                name: " 一分",
                value: 3
            },
            {
                name: " 天才",
                value: 3
            },
            {
                name: " 荣耀",
                value: 3
            },
            {
                name: " 正常",
                value: 3
            },
            {
                name: " 回复",
                value: 3
            },
            {
                name: " 联系",
                value: 3
            },
            {
                name: " 总体",
                value: 3
            },
            {
                name: " 反应",
                value: 3
            },
            {
                name: " 老爸",
                value: 3
            },
            {
                name: " 星期",
                value: 3
            },
            {
                name: " 半个",
                value: 3
            },
            {
                name: " 打电话",
                value: 3
            },
            {
                name: " 不是",
                value: 3
            },
            {
                name: " 保护膜",
                value: 3
            },
            {
                name: " 充电器",
                value: 3
            },
            {
                name: " 买不到",
                value: 2
            },
            {
                name: " 老子",
                value: 2
            },
            {
                name: " 差评",
                value: 2
            },
            {
                name: " 这么",
                value: 2
            },
            {
                name: " 真香",
                value: 2
            },
            {
                name: " 真是",
                value: 2
            },
            {
                name: " 三天",
                value: 2
            },
            {
                name: " 填写内容",
                value: 2
            },
            {
                name: " 帮别人",
                value: 2
            },
            {
                name: " 终于",
                value: 2
            },
            {
                name: " 有时候",
                value: 2
            },
            {
                name: " 极致",
                value: 2
            },
            {
                name: " 还有",
                value: 2
            },
            {
                name: " 希望",
                value: 2
            },
            {
                name: " 必须",
                value: 2
            },
            {
                name: " 好像",
                value: 2
            },
            {
                name: " 严重",
                value: 2
            },
            {
                name: " 反应速度",
                value: 2
            },
            {
                name: " 后面",
                value: 2
            },
            {
                name: " 音乐",
                value: 2
            },
            {
                name: " 商品",
                value: 2
            },
            {
                name: " 哈哈",
                value: 2
            },
            {
                name: " 垃圾",
                value: 2
            },
            {
                name: " 好用",
                value: 2
            },
            {
                name: " 突出",
                value: 2
            },
            {
                name: " 价钱",
                value: 2
            },
            {
                name: " 耍猴",
                value: 2
            },
            {
                name: " 磕碰",
                value: 2
            },
            {
                name: " 几次",
                value: 2
            },
            {
                name: " 失灵",
                value: 2
            },
            {
                name: " 支持",
                value: 2
            },
            {
                name: " 快充",
                value: 2
            },
            {
                name: " 意思",
                value: 2
            },
            {
                name: " 失败",
                value: 2
            },
            {
                name: " 整整",
                value: 2
            },
            {
                name: " 没收",
                value: 2
            },
            {
                name: " 已经",
                value: 2
            },
            {
                name: " 无法",
                value: 2
            },
            {
                name: " 方面",
                value: 2
            },
            {
                name: " 为啥",
                value: 2
            },
            {
                name: " 喜欢",
                value: 2
            },
            {
                name: " 套餐",
                value: 2
            },
            {
                name: " 完全",
                value: 2
            },
            {
                name: " 专业",
                value: 2
            },
            {
                name: " 选择",
                value: 2
            },
            {
                name: " 48mp",
                value: 2
            },
            {
                name: " 无线",
                value: 2
            },
            {
                name: " 一个月",
                value: 2
            },
            {
                name: " 不过",
                value: 2
            },
            {
                name: " ldquo",
                value: "-"
            },
            {
                name: " rdquo",
                value: "-"
            },
            {
                name: " 这种",
                value: 2
            },
            {
                name: " 送货",
                value: 2
            },
            {
                name: " 卡死",
                value: 2
            },
            {
                name: " 来看",
                value: 2
            },
            {
                name: " 糊弄人",
                value: 2
            },
            {
                name: " note7",
                value: 2
            },
            {
                name: " 时间",
                value: 2
            },
            {
                name: " 短信",
                value: 2
            },
            {
                name: " 滑落",
                value: 2
            },
            {
                name: " 那样",
                value: 2
            },
            {
                name: " vivo",
                value: 2
            },
            {
                name: " 防水",
                value: 2
            },
            {
                name: " 等待",
                value: 2
            },
            {
                name: " 直播",
                value: 2
            },
            {
                name: " 难受",
                value: 2
            },
            {
                name: " 四个",
                value: 2
            },
            {
                name: " 到手",
                value: 2
            },
            {
                name: " 发现",
                value: 2
            },
            {
                name: " 掉电",
                value: 2
            },
            {
                name: " 华为",
                value: 2
            },
            {
                name: " 再也",
                value: 2
            },
            {
                name: " 不用",
                value: 2
            },
            {
                name: " 给力",
                value: 2
            },
            {
                name: " 两天",
                value: 2
            },
            {
                name: " 立马",
                value: 2
            },
            {
                name: " 两周",
                value: 2
            },
            {
                name: " 处理器",
                value: 2
            },
            {
                name: " 关机",
                value: 2
            },
            {
                name: " 要么",
                value: 2
            },
            {
                name: " 满血",
                value: 2
            },
            {
                name: " 不会",
                value: 2
            },
            {
                name: " 定金",
                value: 2
            },
            {
                name: " 付款",
                value: 2
            },
            {
                name: " 心情",
                value: 2
            },
            {
                name: " 另外",
                value: 2
            },
            {
                name: " 游戏",
                value: 2
            },
            {
                name: " 公司",
                value: 2
            },
            {
                name: " 按键",
                value: 2
            },
            {
                name: " 卡顿",
                value: 2
            },
            {
                name: " 晚上",
                value: 2
            },
            {
                name: " 百分之",
                value: 2
            },
            {
                name: " 手机信号",
                value: 2
            },
            {
                name: " 一下",
                value: 2
            },
            {
                name: " 开学",
                value: 2
            },
            {
                name: " 上班",
                value: 2
            },
            {
                name: " 上天",
                value: 2
            },
            {
                name: " 配送",
                value: 2
            },
            {
                name: " 最后",
                value: 2
            },
            {
                name: " 太慢",
                value: 2
            },
            {
                name: " 手机套",
                value: 2
            },
            {
                name: " 笨重",
                value: 2
            },
            {
                name: " 半年",
                value: 2
            },
            {
                name: " 屏险",
                value: 2
            },
            {
                name: " 先发",
                value: 2
            },
            {
                name: " 不灵敏",
                value: 2
            },
            {
                name: " 硬度",
                value: 2
            },
            {
                name: " 这次",
                value: 2
            },
            {
                name: " 性能",
                value: 2
            },
            {
                name: " 介绍",
                value: 2
            },
            {
                name: " 卡针",
                value: 2
            },
            {
                name: " 不理",
                value: 2
            },
            {
                name: " 这是",
                value: 2
            },
            {
                name: " 买来",
                value: 2
            },
            {
                name: " 两次",
                value: 2
            },
            {
                name: " 网络",
                value: 2
            },
            {
                name: " 就裂",
                value: 2
            },
            {
                name: " 没用",
                value: 2
            },
            {
                name: " 多次",
                value: 2
            },
            {
                name: " 钢化",
                value: 2
            },
            {
                name: " 一星怪",
                value: 1
            },
            {
                name: " 新款",
                value: 1
            },
            {
                name: " 你行",
                value: 1
            },
            {
                name: " 没送",
                value: 1
            },
            {
                name: " 一个多",
                value: 1
            },
            {
                name: " 礼拜",
                value: 1
            },
            {
                name: " 只能",
                value: 1
            },
            {
                name: " 价位",
                value: 1
            },
            {
                name: " 闪退",
                value: 1
            },
            {
                name: " 抢到",
                value: 1
            },
            {
                name: " 其它",
                value: 1
            },
            {
                name: " 便宜",
                value: 1
            },
            {
                name: " 两百",
                value: 1
            },
            {
                name: " 盈利",
                value: 1
            },
            {
                name: " 机智",
                value: 1
            },
            {
                name: " 更新换代",
                value: 1
            },
            {
                name: " 太乱",
                value: 1
            },
            {
                name: " 赔付",
                value: 1
            },
            {
                name: " 自营",
                value: 1
            },
            {
                name: " 产品",
                value: 1
            },
            {
                name: " 手持",
                value: 1
            },
            {
                name: " 夜景",
                value: 1
            },
            {
                name: " 机子",
                value: 1
            },
            {
                name: " 拆过",
                value: 1
            }
        ],
    }]

};
				myChart.setOption(option);	  
				});
} );

	//get objects -- inserted here --
	
	
