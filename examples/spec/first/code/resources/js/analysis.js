$(function () {
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
            fontSize: '20'
            // y: 20
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
                center: ['50%', '50%']
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'score',
            innerSize: '90%',
            data: [
                {name: 'Score',  y: 9, color: '#80c269'},
               
                {name: 'else',  y: 1, color: '#e5e5e5'}
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
});

