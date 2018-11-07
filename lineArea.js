const option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'red' // 0% 处的颜色
                }, {
                    offset: 1, color: '#fff' // 100% 处的颜色
                }],
                globalCoord: false  // 缺省为 false
            }
            // color: {
            //     type: 'radial',
            //     x: 0.5,
            //     y: 0.5,
            //     r: 0.5,
            //     colorStops: [{
            //         offset: 0, color: 'red' // 0% 处的颜色
            //     }, {
            //         offset: 1, color: 'blue' // 100% 处的颜色
            //     }],
            //     globalCoord: false // 缺省为 false
            // }
            // color: {
            //     image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
            //     repeat: 'repeat' // 是否平铺, 可以是 'repeat-x', 'repeat-y', 'no-repeat'
            // }
        },
        smooth: true, // 是否平滑曲线显示。
        smoothMonotone: 'x' //折线平滑后是否在一个维度上保持单调性，可以设置成'x', 'y'来指明是在 x 轴或者 y 轴上保持单调性。
    }]
};
const charts = echarts.init(document.getElementById('chart'));
charts.setOption(option);
