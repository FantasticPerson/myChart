;define(function (require) {
	'use strict';
	var $=require('jquery'),
		echart=require('echart');
	
	function app(){}
	app.prototype={
		init:function(){
			var that = this;
			//this.pageSize = this.getPageSize();
			
			//获取数据
			var jsonObj = {
				Data:[
					{"徐州市":[
						 {time:"201509",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[20.10,0.23,0.30,125.12]}
						,{time:"201510",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[21.32,0.18,0.35,122.30]}
						,{time:"201511",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[20.57,0.19,0.36,124.56]}
						,{time:"201512",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[21.74,0.17,0.28,122.24]}
						,{time:"201601",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[22.89,0.22,0.27,121.13]}
						,{time:"201602",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[26.36,0.27,0.25,120.27]}
						,{time:"201603",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[22.42,0.26,0.32,124.44]}
						,{time:"201604",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[20.64,0.24,0.36,126.86]}
						,{time:"201605",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[23.16,0.18,0.38,125.27]}
						,{time:"201606",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[24.55,0.19,0.30,122.75]}
						,{time:"201607",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[22.17,0.24,0.20,129.88]}
						,{time:"201608",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[23.25,0.27,0.19,121.10]}
						,{time:"201609",num:4,name:["当月总量","累计增幅","当月增幅","累计总量"],type:['bar','line','line','bar'],value:[22.22,0.25,0.24,123.21]}
					]}
				]
				,Success:true
				,Error:null
			};
			
			if(jsonObj.Success && jsonObj.Error==null){
				var data = jsonObj.Data;
				//模拟出其他城市的随机数据
				var areas = ['徐州市','南京市','常州市','苏州市','南通市','连云港市','盐城市','扬州市','镇江市','泰州市'];//
				var areas2 = ['市区','崇川区','港闸区','开发区','通州区','县（市）','海安','如东','启东','如皋'];
				var areas3 = ['沿海前沿区域','沿海乡镇','市级中心镇','沿江乡2镇','市级中心镇2','沿江乡镇1','市级中心镇3','沿江乡镇6'];
				data = that.getRandomData(data,areas);
				var data2 = that.getRandomData(data,areas2);
				var data3 = that.getRandomData(data,areas3);
				
				//table1
				var $wrap1 = $('#chart1');
				var $table = $wrap1.find('table');
				var $chart1 = $wrap1.find('.chart');
				
				that.dataToTable($table,data);
				
				$('#toChart').off('click').on('click',function(){
					var height = $table.height();
					$wrap1.css({'min-height':height+'px'});
					$chart1.css({'min-height':height+'px'});
					$table.hide();
					$chart1.removeClass('hidden').show();
					that.dataToChart($chart1,data);
				})
				$('#toChart').trigger('click');
				$('#toTable').off('click').on('click',function(){
					var height = $table.height();
					$wrap1.css({'min-height':height+'px'});
					$chart1.css({'min-height':height+'px'});
					$chart1.hide();
					$table.show();
					that.dataToTable($table,data);
				})
				
				//table2
				var $wrap2 = $('#chart2');
				var $table2 = $wrap2.find('table');
				var $chart2 = $wrap2.find('.chart');
				
				that.dataToTable($table2,data2);
				
				$('#toChart2').off('click').on('click',function(){
					var height = $table2.height();
					$wrap2.css({'min-height':height+'px'});
					$chart2.css({'min-height':height+'px'});
					$table2.hide();
					$chart2.removeClass('hidden').show();
					that.dataToChart($chart2,data2);
				})
				$('#toChart2').trigger('click');
				$('#toTable2').off('click').on('click',function(){
					var height = $table2.height();
					$wrap2.css({'min-height':height+'px'});
					$chart2.css({'min-height':height+'px'});
					$chart2.hide();
					$table2.show();
					that.dataToTable($table2,data2);
				})
				//console.log(jsonObj.Data, data);
				
				//table3
				var $wrap3 = $('#chart3');
				var $table3 = $wrap3.find('table');
				var $chart3 = $wrap3.find('.chart');
				
				that.dataToTable($table3,data3);
				
				$('#toChart3').off('click').on('click',function(){
					var height = $table3.height();
					$wrap3.css({'min-height':height+'px'});
					$chart3.css({'min-height':height+'px'});
					$table3.hide();
					$chart3.removeClass('hidden').show();
					that.dataToChart($chart3,data3);
				})
				$('#toChart3').trigger('click');
				$('#toTable3').off('click').on('click',function(){
					var height = $table3.height();
					$wrap3.css({'min-height':height+'px'});
					$chart3.css({'min-height':height+'px'});
					$chart3.hide();
					$table3.show();
					that.dataToTable($table3,data3);
				})
			}
			
			//返回顶部
			$('#arrow_up').on('click',function(){
				var speed=250;//滑动的速度
		        $('body,html').animate({ scrollTop: 0 }, speed);
		        return false;
			})
			
			//loading
			setTimeout(function(){
				$('.jQ_loaing').fadeOut();
			},500);
		}
		
		,dataToTable:function($dom,data){
			//console.log(data);
			var xAxis = [];
			var series = [];
			var num=0;
			var name=[];
			var type=[];
			var sData=[];
			$.each(data[0], function(i,e) {//循环每个地区
				xAxis.push(i);
				var numHe=[];
				$.each(e, function(j,f) {//循环12个月
					num = f.num;
					name = f.name;
					type = f.type;
					for(var x=0;x<num;x++){
						if(!numHe[x]){
							numHe[x]=0;
						}
						numHe[x] = (parseFloat(numHe[x]) + parseFloat(f.value[x])).toFixed(2);
					}
				});
				sData.push(numHe);
			});
			//console.log(name);
			var th = '<tr><th>&nbsp;</th>';
			$.each(name, function(i,e) {
				th = th + '<th>'+e+'</th>';
			});
			th = th + '</tr>';
			//console.log(xAxis);
			//console.log(sData);
			$.each(xAxis, function(i,e) {
				//<tr><td>徐州市</td><td>241.17</td><td>9.5</td><td>10.5</td><td>1976.97</td></tr>
				var td = '<tr>';
				td = td + '<td>'+e+'</td>';
				$.each(name, function(j,f) {
					td = td + '<td>'+sData[i][j]+'</td>';
				});
				td = td + '</tr>';
				th = th + td;
			});
			$dom.find('tbody').empty().append(th);
		}
		
		//数据配置图表
		,dataToChart:function($dom,data){
			var xAxis = [];
			var series = [];
			var num=0;
			var name=[];
			var type=[];
			var sData=[];
			$.each(data[0], function(i,e) {//循环每个地区
				xAxis.push(i);
				var numHe=[];
				$.each(e, function(j,f) {//循环12个月
					num = f.num;
					name = f.name;
					type = f.type;
					for(var x=0;x<num;x++){
						if(!numHe[x]){
							numHe[x]=0;
						}
						numHe[x] = (parseFloat(numHe[x]) + parseFloat(f.value[x])).toFixed(2);
					}
				});
				sData.push(numHe);
			});
			for(var x=0;x<num;x++){
				var td=[];
				$.each(sData, function(k,g) {
					td.push(g[x]);
				});
				var tmp = {
					name:name[x],
		            type:type[x],
		            barWidth:'40%',
		            lineStyle:{
		            	normal:{
		            		width:2
		            	}
		            },
		            symbolSize:5,
		            data:td,
		            yAxisIndex:type[x]=='line'?1:0
				};
				series.push(tmp);
			}
			//console.log(series);
			//console.log(xAxis);
			var option = {
			    color: ['#3398DB','#fcc513','#93a700','#c3188a'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {
			            type : 'shadow'
			        }
			    },
			    legend:{
			    	show:true,
			    	data:name
			    },
			    grid: {
			        left:   '2%',
			        right:  '2%',
			        bottom: '2%',
			        top:    30,
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : xAxis,
			            axisTick: {
			                alignWithLabel: true
			            },
			            splitLine :{
			            	interval :0
			            }
			        }
			    ],
			    yAxis : [
			    
			        {
			            type : 'value',
			            scale:true
			        },
			        {
			            type : 'value',
			            splitLine :{
			            	show:false
			            },
			            scale:true
			        }
			    ],
			    series : series
			};
			var mychart = echart.init($dom[0]);
			mychart.setOption(option);
		}
		
		//生成随机数据
		,getRandomData:function(data,areas){
			var ta = ['201509','201510','201511','201512'
			,'201601','201602','201603','201604','201605','201606','201607','201608','201609'];
			var that=this,
				tempObj={},
				endArr=[];
			$.each(areas, function(j,f) {
				var city = f;
				var tmpa = [];
				$.each(ta, function(k,g) {
					var tmpo = {time:"",num:2,name:["当月总量","当月增幅"],type:['bar','line'],value:[]};
					tmpo.time = g;
					tmpo.value = [
						that.getRandomNum(20,26,2),
						that.getRandomNum(0.1,0.3,2)
					];
					tmpa.push(tmpo);
				});
				tempObj[city] = tmpa;
			});
			endArr.push(tempObj);
			return endArr;
		}
		
		,getPageSize:function(){var xScroll,yScroll;if(window.innerHeight&&window.scrollMaxY){xScroll=window.innerWidth+window.scrollMaxX;yScroll=window.innerHeight+window.scrollMaxY}else{if(document.body.scrollHeight>document.body.offsetHeight){xScroll=document.body.scrollWidth;yScroll=document.body.scrollHeight}else{xScroll=document.body.offsetWidth;yScroll=document.body.offsetHeight}}var windowWidth,windowHeight;if(self.innerHeight){if(document.documentElement.clientWidth){windowWidth=document.documentElement.clientWidth}else{windowWidth=self.innerWidth}windowHeight=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){windowWidth=document.documentElement.clientWidth;windowHeight=document.documentElement.clientHeight}else{if(document.body){windowWidth=document.body.clientWidth;windowHeight=document.body.clientHeight}}}if(yScroll<windowHeight){var pageHeight=windowHeight}else{var pageHeight=yScroll}if(xScroll<windowWidth){var pageWidth=xScroll}else{var pageWidth=windowWidth}var arrayPageSize=new Array(pageWidth,pageHeight,windowWidth,windowHeight);return arrayPageSize}
		
		,getRandomNum:function(a,b,n){
			return (a + Math.random()*(b-a) ).toFixed(n);
		}
	}
	return app;
})

