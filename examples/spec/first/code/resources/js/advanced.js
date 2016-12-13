$(function() {
    $('#expandModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        // modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body .expand-img').attr('src', recipient)
    })


    Highcharts.chart('container1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '高:中:低<br><span style="font-size: 12px;color: #c8c8c8">3:1:1</span>',
            align: 'center',
            verticalAlign: 'middle',
            style: {
                fontSize: 16,
                color: '#418cd3'
            },
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: 10,
                    style: {
                        fontWeight: 'normal',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 270,
                center: ['50%', '60%']
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: '漏洞',
            innerSize: '60%',
           
            // dataLabels:[{color: 'red'},{color: 'green'},{color: 'blue'}],
            data: [{
                name: '高危问题',
                y: 10.38,
                color: '#e60012',
                dataLabels: {
                    color: '#e60012'
                }
            }, {
                name: '中危问题',
                y: 56.33,
                color: '#ff7800',
                dataLabels: {
                    color: '#ff7800'
                }
            }, {
                name: '高危问题',
                y: 24.03,
                color: '#fec80f',
                dataLabels: {
                    color: '#fec80f'
                }
            }]
        }]
    });
});