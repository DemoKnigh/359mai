//头部的js

//鼠标移入超链接变色
$("#header-nav-list a,#header-bottom-navright a,#header-searchbox-bottom a:not(.header-searchbox-bot-color)").hover(
function(){
	$(this).css({"color" : "blue"});
},function(){
	$(this).css({"color" : "black"});
});

//我的小量二级菜单
$("#littleliang-parent,#mylittleliang").hover(function(){
	$("#mylittleliang").css({'display' : "block"});
},function(){
	$("#mylittleliang").css({'display' : "none"});
});

//二维码
$("#header-wxCodeBox,#header-coverCode,#header-wxCode").hover(function(){
	$("#header-coverCode,#header-wxCode").css({"display" : "block"});
},function(){
	$("#header-coverCode,#header-wxCode").css({"display" : "none"});
})

//购物车预览
$("#header-cartbox,#cart-perview").hover(function(){
	$("#cart-preview").css({"display" : "block"});
},function(){
	$("#cart-preview").css({"display" : "none"});
})

//蓝导航详情页事件
$("#bluebar-details").hover(function(){
	$("#bluebar-details").css({'display' : "block"});
},function(){
	$("#bluebar-details").css({'display' : "none"});
})

// //蓝导航自身事件
// $('#header-bottom-navleft,#navleft-bluebar,#bluebar-details').hover(function(){
// 	$('#navleft-bluebar').css("display","block");
// },function(){
// 	$('#navleft-bluebar').css("display","none");
// })



//尾部

//给跳动logo加动作
$("#footer-animateBox a").each(function(){
	var that = this;
	$(this).mouseenter(function(){
		
		$(that).children(".footer-animateLogo").css({"position" : "relative"})
		$(that).children(".footer-animateLogo").delay(0).animate({"top" : "-7px"},200,function(){
			$(that).children(".footer-animateLogo").delay(0).animate({"top" : 0},50)
		});
	});
})