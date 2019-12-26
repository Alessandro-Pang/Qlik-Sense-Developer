define( [
 	"qlik",
 	"jquery",
 	"./echarts"
],
function ( qlik, $ ,echarts) {

	"use strict"
	
	return {

		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions"
				},
				measures: {
					uses: "measures"
				},
				sorting: {
					uses: "sorting"
				},
				addons: {
                    uses: "addons",
                    items: {
                        dataHandling: {
                            uses: "dataHandling"
                        }
                    }
                },
				appearance: {
					uses: "settings",
					//component: "expandable-items", //可扩展的组件
					//label: "外观",	
					items: {       //自定义文本框
						titleBox:{
							ref:"titleBox",
							label:"标题栏设置",
							type:"items",
							items:{
								selectionTitle:{
									ref: "selectionTitle",
							        label:"标题开关",
							        component: "switch",//标题选择器
							        type: "boolean",  
							        trueOption: {
								        value: true,
								        translation: "properties.on" ,//下面提示目前状态为：开
								    },
								    falseOption: {
								        value: false,
								        translation: "properties.off" //下面提示目前状态为：关
								    }

								},
								myTitle:{
									component: "items", //可扩展的组件
									label: "标题栏",	
									items:{
										mainTitle: {       			//文本框
											ref: "mainTitle", 		//用于引用属性的名称或ID。
											label: "主标题栏",		//用于定义属性面板中显示的标签。
											type: "string",		    //用于所有自定义属性类型定义。可以是字符串，整数，数字或布尔值
											expression: "optional"  //增加fx表达式按钮
										},				
										subTitle: {       	
											ref: "subTitle", 		
											label: "子标题栏",		  
											type: "string",		   
											expression: "optional"
										},			
									},
									show: function (layout) { //接受开关返回值，作为是否显示该栏的条件
		                                    return layout.selectionTitle;
		                            }
								},
							}
						},

						echartsToolBox:{
							ref: "echartsToolBox",
					        label:"Echarts工具栏",
					        component: "items",//工具栏选择器
					        type: "string",  
					        items:{
					        	selectionToolBox :{
							        ref: "selectionToolBox",
							        label:"工具栏开关",
							        component: "switch",	
							        type: "boolean",  
							        trueOption: {
								        value: true,
								        translation: "properties.on" ,
								    },
								    falseOption: {
								        value: false,
								        translation: "properties.off" 	
								    }
							    },
							    selectionDataView :{
							        ref: "selectionDataView",
							        label:"数据视图开关",
							        component: "switch",//工具栏选择器
							        type: "boolean",  
							        trueOption: {
								        value: true,
								        translation: "properties.on" ,	
								    },
								    falseOption: {
								        value: false,
								        translation: "properties.off" 	
								    },
								    show: function (layout) { //接受开关返回值，作为是否显示该栏的条件
		                                    return layout.selectionToolBox;
		                            }
							    },
							    selectionRestore :{
							        ref: "selectionRestore",
							        label:"还原键开关",
							        component: "switch",
							        type: "boolean",  
							        trueOption: {
								        value: true,
								        translation: "properties.on" ,
								    },
								    falseOption: {
								        value: false,
								        translation: "properties.off" 
								    },
								    show: function (layout) { 
		                                    return layout.selectionToolBox;
		                            }								    
							    },
							    selectionSaveAsImage :{
							        ref: "selectionSaveAsImage",
							        label:"保存图片开关",
							        component: "switch",
							        type: "boolean",  
							        trueOption: {
								        value: true,
								        translation: "properties.on" ,
								    },
								    falseOption: {
								        value: false,
								        translation: "properties.off" 
								    },
								    show: function (layout) { 
		                                    return layout.selectionToolBox;
		                            }
							    },
					        }
						},

					    myToolBox:{
					        ref: "myToolBox",
					        label:"颜色和图例",
					        component: "items",
					        type: "string",  
					    	items:{
					    		selectionLegend:{
							    	ref: "selectionLegend",
							        label:"图例",
							        component: "switch",
							        type: "boolean",  
							        trueOption: {
								        value: true,
								        translation: "properties.on" ,
								    },
								    falseOption: {
								        value: false,
								        translation: "properties.off" 
								    }
							    },

							    selectionSeriesLable:{
							    	ref: "selectionSeriesLable",
							        label:"值标签开关",
							        component: "switch",
							        type: "boolean",  
							        trueOption: {
								        value: true,
								        translation: "properties.on" ,
								    },
								    falseOption: {
								        value: false,
								        translation: "properties.off" 
								    }

							    },
							    selectionLabel:{
							    	ref: "selectionLabel",
							        label:"值标签",
							        component: "dropdown",//图例选择器
							        options:[
							        {
									 	value:"outer",
									 	label:"图外标签"
									},
							        {
							        	value:"inner",
							        	label:"图内标签"
									},
									 ],
									 show : function (layout){
									 	return layout.selectionSeriesLable;
									 }
							    },
							    selectionLabelLine:{
							    	ref: "selectionLabelLine",
							        label:"值标签指示线开关",
							        component: "switch",
							        type: "boolean",  
							        trueOption: {
								        value: true,
								        translation: "properties.on" ,
								    },
								    falseOption: {
								        value: false,
								        translation: "properties.off" 
								    },
								    show : function (layout){
								    	var getLabel = layout.selectionLabel;
								    	return getLabel=="outer" ? true : false;
									}							    	
							    },
							    innerLabelColors:{
							    	ref:"innerLabelColors",
							    	type:"string",
							    	label:"标签颜色",
							    	expression: "optional",
							    	show : function (layout){
									 	return layout.selectionSeriesLable;
									 }
							    },
							    selectionDataFormat:{
							    	ref: "selectionDataFormat",
							        label:"数值格式",
							        component: "dropdown",//图例选择器
							        options:[
							        {
									 	value:"{b}",
									 	label:"维度标签"
									},
							        {
							        	value:"{c}",
							        	label:"度量值"
									},
									{
										value:"{d}%",
										label:"百分比"
									}
									],
									 show : function (layout){
									 	return layout.selectionSeriesLable;
									}
							    },
							    colors : { //颜色下拉框，固定颜色
								    ref: "colors",
								    component: "dropdown",
								    label: "调色板",
								    options: [
									        {
									            value: ["#3C52A1", "#3A82C4", "#69ACDE", "#9FD0F1", "#CFEAFA", "#EEDCC5", "#F4AA73", "#E67A56", "#CD473E", "#AE1C3E"],
									            label: "Qlik Sense Diverging"
										}, {
									            value: ["#AE1C3E", "#CD473E", "#E67A56", "#F4AA73", "#EEDCC5", "#CFEAFA", "#9FD0F1", "#69ACDE", "#3A82C4", "#3C52A1"],
									            label: "Qlik Sense Diverging (Reverse)"
										}, {
									            value: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
									            label: "Sequencial"
										}, {
									            value: ["#662506", "#993404", "#cc4c02", "#ec7014", "#fe9929", "#fec44f", "#fee391", "#fff7bc", "#ffffe5"],
									            label: "Sequencial (Reverse)"
										}, {
									            value: ["#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4"],
									            label: "Diverging RdYlBu"
										}, {
									            value: ["#4575b4", "#74add1", "#abd9e9", "#e0f3f8", "#ffffbf", "#fee090", "#fdae61", "#f46d43", "#d73027"],
									            label: "Diverging BuYlRd (Reverse)"
										}, {
									            value: ["#d73027", "#fdae61", "#ffffbf", "#abd9e9", "#4575b4"],
									            label: "Diverging BuYlRd 5 values"
										}, {
									            value: ["#4575b4", "#abd9e9", "#ffffbf", "#fdae61", "#d73027"],
									            label: "Diverging BuYlRd 5 values (Reverse)"
										}, {
									            value: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
									            label: "Blues"
										}, {
									            value: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
									            label: "Reds"
										}, {
									            value: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
									            label: "YlGnBu"
										}
									],
								}
					    	},
					    },
					}
				}
			},
		},	

		support : {		//额外支持
			snapshot: true,
			export: true,
			exportData : true
		},

		//初始化数据属性
		initialProperties: {
		qHyperCubeDef: {
			qDimensions: [],
			qMeasures: [],
			qInitialDataFetch: [
				{	//乘积不能大于1w
					qWidth: 10,
					qHeight: 1000
					}
				]
			},
			selectionMode : "CONFIRM"
		},
		paint: function ($element,layout) {
			//add your rendering code here
			$element.html( "Echarts_pie" );

			//获取数据对象
			//var hc = layout.qHyperCube;
			//	console.log( 'Data returned: ', hc );
			var dimensionName=layout.qHyperCube.qDimensionInfo[0].qFallbackTitle;
			var	mainTitle = layout.mainTitle;
			var	subTitle = layout.subTitle;	
			var toolBox = layout.selectionToolBox;
 			var legend = layout.selectionLegend;
			var title = layout.selectionTitle;
			var colors = layout.colors;
			var label = layout.selectionLabel;
			var labelColors = layout.innerLabelColors;
			var dataView = layout.selectionDataView;
			var restore = layout.selectionRestore;
			var saveAsImage = layout.selectionSaveAsImage;
			var seriesLable = layout.selectionSeriesLable;
			var dataFormat = layout.selectionDataFormat;
			var labelLine = layout.selectionLabelLine;


			/*
			jquery 遍历JSON方法
			$.each()是对数组，json和dom结构等的遍历
			两个参数，第一个参数key表示遍历的数组的下标，第二个参数value表示下标对应的值！
			*/
			var i = 0;
			var data = new Array();
			$.each(layout.qHyperCube.qDataPages[0].qMatrix, function(key, value) {
				data[i] = new Array();
				data[i][0]=value[0].qText;
				data[i][1]=(Number(value[1].qText)).toFixed(2);
				i++;
			});
			
			var tName = new Array();
			var tValue = new Array();
			var tData = new Array();
			for(var i=0;i<data.length;i++){
				 tName[i] = data[i][0];
				 tValue[i] = data[i][1];
				 tData[i]={value:tValue[i],name:tName[i]};
			}
			

			//每次拖拽会重新渲染，在此避免重复渲染多个						
             $element.empty();

            // 设置图表对象的宽度
            var width = $element.width(); 
            // 设置图表对象的高度
            var height = $element.height();
            // 创建图表对象的id
            var id = "container_" + layout.qInfo.qId;

            function myId$(id){
            	return document.getElementById(id);
            } 

            // 检查图表元素是否已经创建
            if (myId$(id)) {
                // 如果已经创建了它，清空它的内容，这样就可以重新绘制图表
                $("#" + id).empty();
            } else {
                //如果还没有创建它，请使用适当的id和大小创建它
                $element.append($('<div />').attr({
                    "id": id  //使用$element对象创建div节点
                }).css({
                    height: height,
                    width: width,
                    overflow: 'auto'
                }))
            }
    
			//-----------------echarts部分--------------------------
            var myChart = echarts.init(myId$(id));

                var option = {
                		//设置背景颜色为透明，避免出现不兼容现象
                		backgroundColor: "rgba(0,0,0,0)",

					    title : {
					    	show:title,
					        text: mainTitle,
					        subtext: subTitle,
					        x:'center'
					    },
					    tooltip : {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					    	show : legend,
					        orient : 'vertical',
					        x : 'left',
					        data:tName
					    },
					    toolbox: {
					        show : toolBox,
					        feature : {
					            dataView : {
					            	show: dataView,
					            	readOnly: true  //改效果Sense无法实现，避免兼容性问题
					            },
					            restore : {show: restore},//恢复原样
					            saveAsImage : {show: saveAsImage}//保存Ecahrts图例
					        }
					    },
					    calculable : false, //该效果sense不支持，避免兼容性问题
					    series : [{//值域设置
					        
				            name:dimensionName,
				            type:'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:tData,
				            color:colors,
	        				label:{
		            			position:label,
		            			formatter:dataFormat,
		            			show:seriesLable,
		            			color:labelColors		            			
	            			},
		            		labelLine:{//设置值域指向线
								show:labelLine			            			
		            		}	
			            	
					    }]
					};

                    
            // 将刚绘制的图表和配置插入到画布中。
            myChart.setOption(option);
            //-----------------echarts部分--------------------------
		
			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );

