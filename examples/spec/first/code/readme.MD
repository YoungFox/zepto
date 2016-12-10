#前端代码说明

1. 全部是静态资源，服务端联调时，可以提取公用模板，数据动态化。
2. 上线时根据需要可以压缩JS，CSS。图片已经做过无损压缩。
3. 图表部分，可以直接在JS中更改参数，api地址：http://api.highcharts.com/highcharts。
4. 由于使用了HTML5的一些新特性，以及SVG等技术，所以不兼容IE10以下的低级浏览器，请用chrome，firefox等打开。