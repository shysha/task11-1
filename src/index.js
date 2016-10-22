// 搜索框点击动作
$(function(){
  $(".ser-text").on("focus",function(){
  	$(".hot-words").fadeOut();
  }).on("blur",function(){
  	$(".hot-words").fadeIn()
  })

})





// 中间自动轮播图
$(function() {
    var i = 0;
    var clone = $(".mimg .mimg-img li").first().clone();
    $(".mimg .mimg-img").append(clone);
    var size = $(".mimg .mimg-img li ").size();

    for (var j = 0; j < size - 1; j++) {
        $(".mimg .num").append("<li></li>");
    }
    $(".mimg .num li").first().addClass("on");
    // 鼠标划入下部按钮
    $(".mimg .num li").hover(function() {
        var index = $(this).index();
        i = index;
        $(".mimg .mimg-img").stop().animate({
            left: -index * 560
        }, 500)
        $(this).addClass("on").siblings().removeClass("on")
    });
    // 自动轮播 定时器
    var t = setInterval(function() {
            i++;
            move()
        }, 2000)
        // 对定时器进行操作
    $(".mimg").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(function() {
                i++;
                move()
            }, 2000)
        })
        // 向左的按钮
    $(".btn-l").click(function() {
            i++;
            move();
        })
        // 向右的按钮
    $(".btn-r").click(function() {
            i--;
            move();
        })
        // 运动函数
    function move() {
        if (i == size) {
            $(".mimg .mimg-img").css({
                left: 0
            })
            i = 1;
        }
        if (i == -1) {
            $(".mimg .mimg-img").css({
                left: -(size - 1) * 560
            })
            i = size - 2;
        }
        $(".mimg .mimg-img").stop().animate({
            left: -i * 560
        }, 500)
        if (i == size - 1) {
            $(".mimg .num li").eq(0).addClass("on").siblings().removeClass("on")
        } else {
            $(".mimg .num li").eq(i).addClass("on").siblings().removeClass("on")
        }
    }




})
// 中间栏下小图手动轮播
$(function() {
    var x = 1;

    var xsize = $(".xtu .xtul ").size();
// 向左
    $(".xtbtn-l").click(function() {
            (function() {

                x++;
                if (x >= 3) {
                    $(".xtu .xtul").stop().animate({
                        left: -558
                    }, 500)
                    x = 2;
                } else {
                    $(".xtu .xtul").stop().animate({
                        left: -(x) * 186
                    }, 500)

                }
            })();

        })
        // 向右的按钮
    $(".xtbtn-r").click(function() {



        (function() {

            x--;
            if (x <= -1) {

                $(".xtu .xtul").stop().animate({
                    left: 0
                }, 500)
                x = 0
            } else {

                $(".xtu .xtul").stop().animate({
                    left: -(x) * 186
                }, 500)
            }

        })();

    })

})

// 点击切换标签页
$(document).ready(function() {
    $(".news-n").each(function(index) {
        $(this).mouseover(function() {
            // 移除样式
            $(" .xianshi").removeClass("xianshi");
            $(".xianshi2").removeClass("xianshi2")
                // 添加样式
            $(" .yiyang").eq(index).addClass("xianshi");
            $(".news-n").eq(index).addClass("xianshi2");
        })
    });

})


// 合作企业
$(function() {
    var h = 3;

    var hsize = $(".lun .bo ").size();

    $(".jiantou-l").click(function() {
            (function() {

                h++;
                if (h >= 7) {
                    $(".lun .bo").stop().animate({
                        left: -960
                    }, 500)
                    h = 6;
                } else {
                    $(".lun .bo").stop().animate({
                        left: -(h) * 160
                    }, 500)

                }
            })();

        })
        // 向右的按钮
    $(".jiantou-r").click(function() {



        (function() {

            h--;
            if (h <= -1) {

                $(".lun .bo").stop().animate({
                    left: 0
                }, 500)
                h = 0
            } else {

                $(".lun .bo").stop().animate({
                    left: -(h) * 160
                }, 500)
            }

        })();

    })

})
 
// 合作企业的箭头显影
$(function(){
	
	$(".strategy").hover(function(){
		$(".jiantou").css("display","block")
	},function(){
		$(".jiantou").css("display","none")
	})
});
 // 媒体报道
 $(function() {
    var m = 3;

    var msize = $(".lun2 .bo2 ").size();

    $(".jiantou2-l").click(function() {
            (function() {

                m++;
                if (m >= 7) {
                    $(".lun2 .bo2").stop().animate({
                        left: -960
                    }, 500)
                    m = 6;
                } else {
                    $(".lun2 .bo2").stop().animate({
                        left: -(m) * 160
                    }, 500)

                }
            })();

        })
        // 向右的按钮
    $(".jiantou2-r").click(function() {



        (function() {

            m--;
            if (m <= -1) {

                $(".lun2 .bo2").stop().animate({
                    left: 0
                }, 500)
                m = 0
            } else {

                $(".lun2 .bo2").stop().animate({
                    left: -(m) * 160
                }, 500)
            }

        })();

    })

})
 // 媒体报道的箭头显影
$(function(){
	
	$(".lun2").hover(function(){
		$(".jiantou2").css("display","block")
	},function(){
		$(".jiantou2").css("display","none")
	})
});
// 返回顶部


$(function(){  
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>100){  
                    $("#back-to-top").fadeIn(1500);  
                }  
                else  
                {  
                    $("#back-to-top").fadeOut(1500);  
                }  
            });  
  
            //当点击跳转链接后，回到页面顶部位置  
  
            $("#back-to-top").click(function(){  
                $('body,html').animate({scrollTop:0},1000);  
                return false;  
            });  
        }); 
      //返回顶部的hover
      // $("#back-to-top").hover(function() {
            //  $("#back-to-top").css("backgroud"," red")
            // }) ;

    });  
                
