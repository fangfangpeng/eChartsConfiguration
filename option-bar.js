option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
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
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        legendHoverLink: false,
        label: {
            show: true, //是否显示标签 ，默认false
            position: 'top', // 标签的位置。
            distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
            rotate: 0, // 标签旋转。从 -90 度到 90 度。正值是逆时针。
            offset: [3, 4], // 是否对文字进行偏移。默认不偏移
            color: "#3089dc", // 文字的颜色。
            fontStyle: 'bold', //文字字体的风格
            fontWeight: 'normal', // 文字字体的粗细
            fontFamily: 'sans-serif', // 文字的字体系列
            fontSize: 14, // 文字大小
            align: 'right', // 文字水平对齐方式，默认自动。
            verticalAlign: 'middle', // 文字垂直对齐方式，默认自动。
            lineHeight: 14,// 行高
            backgroundColor: '#ccc', // 背景色
            borderColor: '#000', // 边框颜色
            borderWidth: 1, // 边框宽度
            borderRadius: 2, // 边框圆角
            padding: 2, // 内边距
            shadowColor: '#ff0000', //文字块的背景阴影颜色。
            shadowBlur: 5, // 文字块的背景阴影长度。
            shadowOffsetX: 5, //文字块的背景阴影 X 偏移。
            shadowOffsetY: 5, //文字块的背景阴影 Y 偏移。
            // width: 100,
            // height: 5,
        },
        itemStyle: {
            color: '#ddd', //柱条的颜色。  默认从全局调色盘 option.color 获取颜色
            borderColor: '#000', //柱条的描边颜色。
            borderWidth: 2, //柱条的描边宽度，默认不描边。
            borderType: 'dashed', // 柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
            barBorderRadius: 5, //圆角半径
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10,
            shadowOffsetX: 5, //阴影水平方向上的偏移距离。
            shadowOffsetY: 5, //阴影垂直方向上的偏移距离。
            opacity: 1, // 图形透明度。
        },
        emphasis: {
            itemStyle: {
                color: '#ff0000', //柱条高亮时的颜色
            },
            label: {
                color: "#0f0", // 文字高亮时的颜色。
                fontStyle: 700, //文字字体高亮时的风格
            }
        },
        cursor: 'pointer', // 鼠标悬浮时在图形元素上时鼠标的样式是什么
        barWidth: 50, // 柱条的宽度，不设时自适应。支持设置成相对于类目宽度的百分比。
        barMaxWidth: 100, // 柱条的最大宽度
        barMinHeight: 1, //柱条最小高度，可用于防止某数据项的值过小而影响交互。
        barGap: 10, //不同系列的柱间距离
        barCategoryGap: '20%', // 同一系列的柱间距离，默认为类目间距的20%，
        large: true, // 是否开启大数据量优化，在数据图形特别多而出现卡顿时候可以开启。
        silent: false, // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
        animation: true,
        animationType: 'scale',// 初始动画效果，可选.'expansion' 默认研圆弧展开的效果。'scale' 缩放效果，配合设置 animationEasing='elasticOut' 可以做成 popup 的效果。
        animationEasing: 'bounceOut', // 初始动画的缓动效果. 参见http://www.echartsjs.com/gallery/editor.html?c=line-easing
        animationDuration: 2000, // 初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果
        // animationDuration: function(idx) {
        //     return idx * 1000;
        // },
        animationDelay: 0, // 初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。
        // animationDelay: function (idx) {
        //     // 越往后的数据延迟越大
        //     return idx * 1000;
        // },
        // animationDurationUpdate: 5000, //数据更新动画的时长。支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果：
    }]
};
