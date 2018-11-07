option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: '50', //图例组件离容器左侧的距离。
        top: 50, // 图例组件离容器上方的距离。
        orient: 'vertical',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            legendHoverLink: true, // 是否启用图例 hover 时的联动高亮
            hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果
            hoverOffset: 20, // 高亮扇区的偏移距离。
            selectedMode: false, // single/multiple。选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。          selectedOffset: 50, // 选中时的偏移距离, selectedMode为true的时候生效
            startAngle: 90, // 起始角度，支持范围[0, 360]。
            minAngle: 1, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互。
            roseType: 'area', // 是否展示成南丁格尔图，通过半径区分数据大小。 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
            avoidLabelOverlap: true, // 是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。
            stillShowZeroSum: true, // 是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区。
            cursor: 'pointer', // 鼠标悬浮时在图形元素上时鼠标的样式是什么
            label: {
                show: true, // 是否显示引导线及标题
                position: 'outside', //标签的位置。default: outside. inside/inner/center
                color: '#000', //文字颜色
                fontStyle: 'normal', // normal/italic/oblique, default: 'normal'
                fontWeight: 'normal', //default: normal  normal bold bolder lighter
                fontFamily: 'sans-serif', // 文字的字体系列
                fontSize: 14, // 文字大小。 default: 12
                align: 'left', //文字水平对齐方式，默认自动。
                verticalAlign: 'bottom', // 文字垂直对齐方式，默认自动
                //lineHeight:14, // 行高。
                backgroundColor: '#fff', // 文字区域背景颜色
                borderColor: '#ff0000',  // 文字块边框颜色。
                // borderWidth: 50,
                // borderRadius: 10,
                shadowColor: '#ccc'
            },
            labelLine: {
                show: true, //是否显示视觉引导线。
                length: 50, // 视觉引导线第一段的长度。
                length2: 20, // 视觉引导项第二段的长度。
                smooth: false, // 是否平滑视觉引导线，默认不平滑，可以设置成 true 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。
                lineStyle: {
                    // color: '#ff0000', // 线的颜色，不指定时默认和图例颜色相对应
                    width: 1, // 引导线线宽
                    type: 'solid', //线的类型。solid dotted dashed  default: solid
                    shadowColor: 'rgba(0, 0, 0, 0.5)', // 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                    shadowBlur: 10,
                    // shadowColor: '#ff0000', //阴影颜色
                    shadowOffsetX: 2, // 阴影水平方向上的偏移距离。
                    shadowOffsetY: 2, // 阴影垂直方向上的偏移距离。
                    opacity: 0.4, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                },
                emphasis: {
                    show: true, // 高亮下是否显示引导线
                    lineStyle: {
                        color: '#00ff00', // 高亮下引导线颜色
                        width: 5, // 高亮下线宽
                        type: 'solid', //高亮下线的类型。solid dotted dashed  default: solid
                        shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮下图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                        shadowBlur: 10,
                        // shadowColor: '#ff0000', //高亮下阴影颜色
                        shadowOffsetX: 2, // 高亮下阴影水平方向上的偏移距离。
                        shadowOffsetY: 2, // 高亮下阴影垂直方向上的偏移距离。
                        opacity: 1, // 高亮下图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    }
                }
            },
            center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
            radius: '40%', // 饼图的半径:number：直接指定外半径值。string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
            // markPoint: {
            //     symbol: 'arrow',
            //     symbolSize: 50
            // }
            markLine: {
                silent: true, //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                symbol: 'arrow'
            },
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
            tooltip: {
                // position: [10, 10],// 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。
                backgroundColor: '#ccc', //提示框浮层的背景颜色。
                borderColor: '#00f',// 提示框浮层的边框颜色。
                borderWidth: 1, // 提示框浮层的边框宽。
                padding: 10, //提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
                textStyle: {
                    color: '#3089dc', //文字的颜色。
                    fontStyle: 'italic', // 文字字体的风格'normal'/'italic'/'oblique'
                    fontWeight: 'normal', //default: normal  normal bold bolder lighter
                    fontFamily: 'sans-serif', // 文字的字体系列
                    fontSize: 14, // 文字大小。 default: 12
                    // textBorderColor: '#0000ff',
                    // textBorderWidth: 2
                }
            }
        }
    ]
};
