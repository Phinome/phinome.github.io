// 使用
require(
	[
		'echarts',
		'echarts/chart/line'
	],
	function (ec) {
		// 基于准备好的dom，初始化echarts图表
		var mychart = ec.init(document.getElementById('main'), 'macarons');
		var option = {
			tooltip: {
				trigger: 'axis',
				formatter: '{c}‰'
			},
			grid: {
				x: 2,
				y: 2,
				x2: 2,
				y2: 2,
				backgroundColor: 'rgba(255,255,255,1)'
			},
			legend: {
				show: true,
				data: ['CTR']
			},
			xAxis: [
				{
					type: 'category',
					axisTick: { show: false },
					axisLine: { show: false, onZero: false },
					axisLabel: { show: false },
					splitLine: { show: false },
					splitArea: { show: false },
					data: ['1', '2', '3', '4', '5', '6', '7',
						'8', '9', '10', '11', '12'],
				},
				{
					type: 'category',
					axisLine: { show: false },
					axisTick: { show: false },
					axisLabel: { show: false },
					splitArea: { show: false },
					splitLine: { show: false },
					data: ['1', '2', '3', '4', '5', '6', '7',
						'8', '9', '10', '11', '12']
				}
			],
			yAxis: [

				{
					type: 'value',
					//name : 'CTR',
					boundaryGap: [0.1, 0.1],
					scale: true,
					axisLine: { show: false },
					axisTick: { show: false },
					axisLabel: { show: false },
					splitArea: { show: false },
					splitLine: { show: false },
				}
			],
			series: [
				{
					name: 'CTR',
					type: 'line',
					barCategoryGap: '30%',
					itemStyle: { normal: { color: 'rgba(51,102,255,0.75)' } },
					//itemStyle: {normal: {color:'rgba(193,35,43,1)', label:{show:true}}},
					data: [0.35, 0.33, 0.34, 0.30, 0.31, 0.32, 0.36, 0.35, 0.23, 0.242, 0.42, 0.53, 0.43],
				}
			]
		};
							                    
		// 为echarts对象加载数据 
		mychart.setOption(option);
	}
	);