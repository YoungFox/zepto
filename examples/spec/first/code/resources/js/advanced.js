$(function() {
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '9.0',
            align: 'center',
            verticalAlign: 'middle',
            style: {
                    fontSize: '20px'
                },
            y: -20
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        // fontWeight: 'normal',
                        color: 'white'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '30%']
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'score',
            innerSize: '90%',
            size: '75%',
            data: [{
                    name: 'Score',
                    y: 9,
                    color: '#80c269'
                },

                {
                    name: 'else',
                    y: 1,
                    color: '#e5e5e5'
                }
                // {
                //     name: 'Proprietary or Undetectable',
                //     y: 0.2,
                //     dataLabels: {
                //         enabled: false
                //     }
                // }
            ]
        }]
    });


Highcharts.chart('container1', {
chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
},
title: {
    text: '高:中:低<br><span style="font-size: 12px;color: #333">3:1:1</span>',
    align: 'center',
    verticalAlign: 'middle',
    style:{
        fontSize: 18
    }
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
plotOptions: {
    pie: {
        dataLabels: {
            enabled: true,
            distance: 5,
            style: {
                fontWeight: 'bold',
                color: 'white'
            }
        },
        startAngle: -90,
        endAngle: 270,
        center: ['50%', '50%']
    }
},
credits: {
    enabled: false
},
series: [{
    type: 'pie',
    name: '漏洞',
    innerSize: '50%',
    data: [
        {name: '高危', y: 10.38, color: '#ed462f'},
        {name: '中危', y: 56.33, color: '#365cd1'},
        {name: '高危', y: 24.03, color: '#60cb6d'}
    ]
}]
});
});