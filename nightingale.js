const option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
            hoverOffset: 20, // 高亮扇区的偏移距离。
            startAngle: 90, // 起始角度，支持范围[0, 360]
            minAngle: 0, // 最小扇形角度
            roseType: 'radius', // 是否展示成南丁格尔图
            stillShowZeroSum: true, // 是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区。
            cursor: 'pointer', // 鼠标悬浮时在图形元素上时鼠标的样式是什么
            center: ['50%','50%'],
            radius: ['40%', '60%'],
            markPoint: {
                symbol: 'roundRect',
                symbolSize: 50
            },
            label: {
                show: true,
                position: 'outside', // 标签的位置。
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold',
                        fontStyle: 'normal'
                    }
                },
                color: '#ff0000', // 字体颜色
                fontSize: 14, // 字体大小
                fontWeight: 400, // 字体粗细
                fontFamily: 'Courier New', // 字体系列
                // align: 'right',
                // verticalAlign: 'middle',
                backgroundColor: '#ccc',
                borderColor: '#ff0000', // 边框颜色
                borderWidth: 1, // 边框宽度
                borderRadius: 5, // 边框圆角
            },
            labelLine: {
                show: true, // 是否显示引导线
                length: 10, // 第一段线长
                length2: 40 // 第二段线长
            },
            data:[
                {value:30, name:'直接访问'},
                {value:10, name:'邮件营销'},
                {value:03, name:'联盟广告'},
                {value:022, name:'视频广告'},
                {value:044, name:'搜索引擎'}
            ]
        }
    ]
};
const charts = echarts.init(document.getElementById('chart'));
charts.setOption(option);
