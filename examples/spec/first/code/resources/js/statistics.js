$(function() {
	Highcharts.chart('container1', {
		chart: {
			type: 'pie'
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br>占比: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				}
			}
		},
		credits: {
			enabled: false
		},
		series: [{
			name: '数量',
			colorByPoint: true,
			// allowPointSelect: true,
			point: {
				events: {
					mouseOver: function() {
						// this.hide();
						this.select(true);
						// console.log(this);
					}
				}
			},
			data: [{
				name: 'IE',
				y: 56.33
			}, {
				name: 'Chrome',
				y: 24.03,
				sliced: true,
				selected: true
			}, {
				name: 'Firefox',
				y: 10.38
			}, {
				name: 'Safari',
				y: 4.77
			}, {
				name: 'Opera',
				y: 0.91
			}, {
				name: 'else',
				y: 0.2
			}]
		}]
	});

	Highcharts.chart('container2', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br>占比: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				}
			}
		},
		credits: {
			enabled: false
		},
		series: [{
			name: '数量/占比',
			colorByPoint: true,
			point: {
				events: {
					mouseOver: function() {
						// this.hide();
						this.select(true);
						// console.log(this);
					}
				}
			},
			data: [{
				name: 'IE',
				y: 56.33
			}, {
				name: 'Chrome',
				y: 24.03,
				sliced: true,
				selected: true
			}, {
				name: 'Firefox',
				y: 10.38
			}, {
				name: 'Safari',
				y: 4.77
			}, {
				name: 'Opera',
				y: 0.91
			}, {
				name: 'else',
				y: 0.2
			}]
		}]
	});

	Highcharts.chart('container3', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br>占比: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				}
			}
		},
		credits: {
			enabled: false
		},
		series: [{
			name: '数量/占比',
			colorByPoint: true,
			point: {
				events: {
					mouseOver: function() {
						// this.hide();
						this.select(true);
						// console.log(this);
					}
				}
			},
			data: [{
				name: 'IE',
				y: 56.33
			}, {
				name: 'Chrome',
				y: 24.03,
				sliced: true,
				selected: true
			}, {
				name: 'Firefox',
				y: 10.38
			}, {
				name: 'Safari',
				y: 4.77
			}, {
				name: 'Opera',
				y: 0.91
			}, {
				name: 'else',
				y: 0.2
			}]
		}]
	});

	Highcharts.chart('container4', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			type: 'category',
			labels: {
				rotation: -45,
				style: {
					fontSize: '12px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '数量'
			}
		},
		legend: {
			enabled: false
		},
		tooltip: {
			pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
		},
		credits: {
			enabled: false
		},
		series: [{
			name: 'Population',
			data: [
				['Shanghai', 23.7],
				['Lagos', 16.1],
				['Istanbul', 14.2],
				['Karachi', 14.0],
				['Mumbai', 12.5],
				['Moscow', 12.1],
				['São Paulo', 11.8],
				['Beijing', 11.7],
				['Guangzhou', 11.1]

			],
			dataLabels: {
				enabled: true,
				rotation: -90,
				color: '#FFFFFF',
				align: 'right',
				format: '{point.y:.1f}', // one decimal
				y: 10, // 10 pixels down from the top
				style: {
					fontSize: '12px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		}]
	});

	Highcharts.chart('container5', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			type: 'category',
			labels: {
				rotation: -45,
				style: {
					fontSize: '12px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '数量'
			}
		},
		legend: {
			enabled: false
		},
		tooltip: {
			pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
		},
		credits: {
			enabled: false
		},
		series: [{
			name: 'Population',
			data: [
				['Shanghai', 23.7],
				['Lagos', 16.1],
				['Istanbul', 14.2],
				['Karachi', 14.0],
				['Mumbai', 12.5],
				['Moscow', 12.1],
				['São Paulo', 11.8],
				['Beijing', 11.7],
				['Guangzhou', 11.1]

			],
			dataLabels: {
				enabled: true,
				rotation: -90,
				color: '#FFFFFF',
				align: 'right',
				format: '{point.y:.1f}', // one decimal
				y: 10, // 10 pixels down from the top
				style: {
					fontSize: '12px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		}]
	});


	Highcharts.chart('container6', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			type: 'category',
			labels: {
				rotation: -45,
				style: {
					fontSize: '12px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '数量'
			}
		},
		legend: {
			enabled: false
		},
		tooltip: {
			pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
		},
		credits: {
			enabled: false
		},
		series: [{
			name: 'Population',
			data: [
				['Shanghai', 23.7],
				['Lagos', 16.1],
				['Istanbul', 14.2],
				['Karachi', 14.0],
				['Mumbai', 12.5],
				['Moscow', 12.1],
				['São Paulo', 11.8],
				['Beijing', 11.7],
				['Guangzhou', 11.1]

			],
			dataLabels: {
				enabled: true,
				rotation: -90,
				color: '#FFFFFF',
				align: 'right',
				format: '{point.y:.1f}', // one decimal
				y: 10, // 10 pixels down from the top
				style: {
					fontSize: '12px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		}]
	});
});