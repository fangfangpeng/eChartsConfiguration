const option = {
    xAxis: {
        show: true,
        name: '日期', // 坐标轴名称
        nameLocation: 'end', // 坐标轴名称显示位置 start/middle/end
        nameGap: 10, // 坐标轴名称与轴线之间的距离
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            show: true, // 是否显示坐标轴轴线
            symbol: 'none', // 轴线两边的箭头 arrow/none
            symbolSize: [10, 15], //轴线两边的箭头的大
            lineStyle: {
                color: '#ff0000', // 坐标轴线线的颜色。
                width: 1, // 坐标轴线线宽
                type: 'solid', // 坐标轴线线的类型
            }
        },
        nameTextStyle: {
            color: '#3089dc', // 坐标轴名称的颜色
            fontStyle: 'italic', // 文字字体的风格
            fontWeight: 400, // 文字字体的粗细
            fontFamily: 'Microsoft YaHei',
            fontSize: 12,
        }
    },
    yAxis: {
        show: true,
        type: 'value',
        position: 'left',
        name: '销售额(元)', // 坐标轴名称
        nameLocation: 'end', // 坐标轴名称显示位置 start/middle/end
        nameGap: 10, // 坐标轴名称与轴线之间的距离
        nameRotate: 0, //坐标轴名字旋转，角度值
        inverse: false, // 是否反向坐标轴
        min: 0, // 坐标轴最小刻度
        max: null, // 坐标轴最大刻度
        // splitNumber: 10, // 坐标轴的分割段数
        //interval: 200, // 强制设置坐标轴分割间隔。
        triggerEvent: true, // 坐标轴的标签是否响应和触发鼠标事件，默认不响应
        axisLabel: {
            inside: false, // 刻度标签是否朝内，默认朝外
            rotate: 0, // 刻度标签旋转的角度
            margin: 20, // 刻度标签与轴线之间的距离
            formatter: function (value, index) {
                return  `${value}`;
            },
            color: '#000', // 刻度标签文字的颜色
            fontStyle: 'italic', // 文字字体的风格
            fontWeight: 400, // 文字字体的粗细
            fontFamily: 'Microsoft YaHei',
            fontSize: 12,
            // align: 'right',
            verticalAlign: 'middle', // 文字垂直对齐方式，默认自动。
            backgroundColor: 'transparent', // 文字块背景色
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis', // tooltip出发类型, 'item'：标记出发;'axis': 坐标轴触发
        axisPointer: { // 指示器类型
            type: 'line', // 'cross':十字准星指示器;'shadow': 阴影指示器; 'line':直线指示器
            axis: 'x', // 指示器的坐标轴
            snap: true,
            label: {
                show: true, // 是否显示文本标签
                margin: 100, // label 距离轴的距离。
                color: '#00ff00',
                fontStyle: 'italic',
                fontWeight: 700,
                fontFamily: 'Microsoft YaHei',
                fontSize: 12,
                backgroundColor: '#ccc'
            },
            crossStyle: { // axisPointer.type 为 'cross' 时有效
                color: '#000', // 线的颜色
                width: 2,
                type: 'dashed',
                shadowColor: 'rgba(0, 0, 0, 1)',
                shadowBlur: 10
            },
        },
        //showDelay: 100,// 浮层显示的延迟
        //hideDelay: 100, // 浮层隐藏的延迟
        enterable: true, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true
        confine: false, // 是否将 tooltip 框限制在图表的区域内
        transitionDuration: 0.6, // 提示框浮层的移动动画过渡时间，单位是 s
    },
    grid: {
        show: false, //是否显示直角坐标系网格
        width: 'auto',
        height: 'auto',
        containLabel: false, // grid 区域是否包含坐标轴的刻度标签。
        backgroundColor: 'rgba(0,0,0,0.5)', // 网格背景色，默认透明.生效的前提是show为true
        borderColor: '#ff0000', // 边框颜色，生效的前提是show为true
        top: '10%',
        left: '10%',
        bottom: '10%',
        right: '10%'
    },
    legend: {
        show: true,
        left: '10%',
        top: '2%',
        width: 320, //图例组件的宽度
        height: 20, //图例组件的高度
        orient: 'horizontal', // 设置图例列表的布局朝向
        align: 'left', // 图例标记和文本的对齐
        padding: [10, 10, 5, 5],
        itemGap: 20, // 图例与每项之间的间隔
        itemWidth: 40, // 图例标记的图形宽度。
        itemHeight: 20, // 图例标记的图形高度。
        selectedMode: true, // 图例选择的模式,是否可选
        inactiveColor: '#ccc', // 图例关闭时的颜色
        selected: {
            '德农': true, // 图例选中状态表。
            '德农1': true, // 图例选中状态表。
        },
        backgroundColor: '#fff', // 图例背景色
        borderColor: '#ccc', //图例边框颜色
        borderWidth: 2, // 图例边框宽度
        borderRadius: 5, // 图例边框圆角
        //shadowColor: 'rgba(0, 0, 0, 0.5)', // 图形阴影的模糊大小
        //shadowBlur: 2
    },
    series: [{
        data: [{name: 'demo1', value: 320},
                {name: 'demo1', value: 972},
                {name: 'demo1', value: 972},
                {name: 'demo1', value: 901},
                {name: 'demo1', value: undefined},
                {name: 'demo1', value: 1290},
                {name: 'demo1', value: 1330},
                {name: 'demo1', value: 1320}],
        type: 'line',
        name: '德农',
        lineStyle: {
            width: 2, //设置线宽
            color: '#000',
            type: 'solid',
            shadowColor: 'rgba(0, 0, 0, 0.5)', // 图形阴影的模糊大小
            shadowBlur: 10
        },
        coordinateSystem: 'cartesian2d',
        symbol: 'roundRect', // 标记的图形
        symbolSize: 10, // 标记的大小，可以是单纯的数字，或者分别指定宽高：[20, 10]
        symbolRotate: 30, // 标记的旋转角度
        symbolOffset: [0, 0], // 标记的偏移
        showSymbol: true, // 是否显示标记
        // showAllSymbol: false,
        hoverAnimation: true, // 是否开启 hover 在拐点标志上的提示动画效果
        legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
        cursor: 'pointer',
        connectNulls: true, //是否连接空数据
        step: false, // 是否是阶梯图形
        smooth: true, // 是否平滑曲线显示
        smoothMonotone: 'x',
        silent: false, // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件
        animation: true, // 是否开启动画
        animationEasing: 'leaner', // 动画的缓动效果
        position: [10, 10],
        tooltip: { // 本系列特定的 tooltip 设定
            // position: [10, 10], // 绝对位置，相对于容器左侧 10px, 上侧 10 px
            // position: ['50%', '50%'], //  相对位置，放置在容器正中间
            backgroundColor: '#ccc',
            borderColor: '#ff0000',
            borderWidth: 1,
            textStyle: {
                color: '#3089dc', // 字体颜色
                fontStyle: 'italic', //字体风格
                fontWeight: 700, // 字体粗细
                fontSize:12, // 字体大小
                
            },
            extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);' // 额外附加到浮层的 css 样式
        }
    },
    {
        data: [{name: 'demo1', value: 234, symbol: 'circle'},
                {name: 'demo1', value: 344},
                {name: 'demo1', value: 456},
                {name: 'demo1', value: 124},
                {name: 'demo1', value: undefined},
                {name: 'demo1', value: 356},
                {name: 'demo1', value: 343},
                {name: 'demo1', value: 654}],
        type: 'line',
        name: '德农1',
        lineStyle: {
            width: 2, //设置线宽
            color: '#000',
            type: 'solid',
            shadowColor: 'rgba(0, 0, 0, 0.5)', // 图形阴影的模糊大小
            shadowBlur: 10
        },
        emphasis: {
            label: {
                show: false
            }
        },
        coordinateSystem: 'cartesian2d',
        symbol: 'roundRect',
        symbolSize: 10,
        symbolRotate: 30,
        symbolOffset: [0, 0],
        showSymbol: true,
        showAllSymbol: false,
        hoverAnimation: true, //
        legendHoverLink: true, //
        cursor: 'help',
        connectNulls: true, //是否连接空数据
        step: false, // 是否是阶梯图形
        smooth: true, // 是否平滑曲线显示
        smoothMonotone: 'x',
        silent: false, // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件
        animation: true, // 是否开启动画
        animationEasing: 'leaner', // 动画的缓动效果
        position: [10, 10]
    }]
};
const chart = echarts.init(document.getElementById('charts'));
chart.setOption(option);
