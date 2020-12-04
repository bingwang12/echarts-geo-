//缩放拖拽 geo和series Map的监听    这里面的  center2是echart的实例
center2.on('georoam', function(params) {
	//获取option
	var optionTemp = center2.getOption();
	//判断此时是缩放还是拖拽
	if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
		if (params.componentType == "series") {
			//判断此时是series里面  map的缩放
			//将geo的缩放比例换成map的缩放比例
			optionTemp.geo[0].zoom = optionTemp.series[0].zoom * (1.2 / 1.01);
			//将geo的中心变成map的中心
			optionTemp.geo[0].center = optionTemp.series[0].center;
		}
	} else { //否则则是拖拽
		if (params.componentType == "series") {
			//判断此时是series里面  map的缩放
			//将geo的中心变成map的中心
			optionTemp.geo[0].center = optionTemp.series[0].center;
		}
	}
	//把地图重新绘制一下
	center2.setOption(optionTemp);
});


/**
 * 这下面是中国地图的绘制
 */

//注册地图文件
echarts.registerMap('chinaMapOutline', chinaMapOutline);
var option = {
	//背景颜色
	backgroundColor: 'transparent',
	tooltip: {
		triggerOn: "onmousemove",
	},
	legend: {
		show: false
	},

	geo: {
		map: 'china',
		//调整以下3个配置项与页面地图重合
		// aspectScale: 1,			//echarts地图的长宽比（就是胖瘦）
		// center: [104.29, 35.8], //设置可见中心坐标，以此坐标来放大和缩小
		zoom: 1.2, //放大级别
		roam: false,
		label: {
			show: false
		},
		itemStyle: {
			normal: {
				areaColor: '#043585',
				borderWidth: 2, //设置外层边框
				borderColor: '#4b9cc4',
			},
			emphasis: {
				areaColor: 'rgba(23,30,59,0.8)',
				borderWidth: 0.8, //设置外层边框
				borderColor: '#223055',
			}
		},
		emphasis: {
			label: {
				show: false,
			}
		},
		data: []
	},
	series: [{
		name: 'outsideborder',
		map: 'chinaMapOutline',
		type: 'map',
		roam: true,
		show: true,
		zoom: 1.01, //放大级别
		//调整以下3个配置项与页面地图重合
		// aspectScale: 1,			//echarts地图的长宽比（就是胖瘦）
		center: [104.4, 28.5], //设置可见中心坐标，以此坐标来放大和缩小
		// zoom: 1, //放大级别
		tooltip: {
			show: false
		},
		label: {
			show: false
		},
		itemStyle: {
			normal: {
				areaColor: 'rgba(20,30,64,0)',
				borderWidth: 3, //设置外层边框
				borderColor: '#b9e8f8',
				shadowBlur: 20,
				shadowColor: 'white',
			},
		},
		emphasis: {
			label: {
				show: false,
			}
		},
		silent: true
	}]
};
