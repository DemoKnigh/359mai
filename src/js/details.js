//导入头部
$('header').load("HeaderTpl.html");
//导入尾部
$('footer').load("FooterTpl.html");
//小图伪轮播(点击换图)
$('.ltpiccase img').click(function(){
	var $indexNow = $('.ltpiccase img').index(this);
	$('.ltpiccase img').removeClass('SmallpicforNow');
	$(this).addClass('SmallpicforNow')
	$(".details-ltmidpicBox img").removeClass('BigpicforNow');
	$(".details-ltmidpicBox img").eq($indexNow).addClass('BigpicforNow');
	$(".largepart img").removeClass('LargepicforNow');
	$(".largepart img").eq($indexNow).addClass('LargepicforNow');
});
//放大镜
$('#mark').hover(function(){
	$('#largepart,#slidecube').css("display","block");
},function(){
	$('#largepart,#slidecube').css("display","none");
});
//鼠标移动事件
$("#mark").mousemove(function(evt){
	var left = evt.pageX - 37 - 250 / 2;
	var top = evt.offsetY - 125;
	//边界
	//边界
	if(left <= 0){
		left = 0;
	}else if(left >= 99){
		left = 99;
	}
	if(top <= 0){
		top = 0;
	}else if(top >= 99){
		top = 99;
	}
	$('#slidecube').css({"left" : left,"top" : top});
	
	//大图移动
	var pX = left / 100;
	var pY = top / 100;
	$(".largepart img").css({"left" : - pX*70 , "top" : - pY*70})
	
});
//手机颜色选择
$('.good-color').click(function(){
	$('.good-color').removeClass('wantbuycolor');
	$(this).addClass('wantbuycolor');
});
//手机容量选择
$('.good-insidesize').click(function(){
	$('.good-insidesize').removeClass('wantbuysize');
	$(this).addClass('wantbuysize')
})
//购买数量
$('#jia').click(function(){
	if(Math.floor($('.good-number input').val()) >= 20){
		return;
	}else{
		var $add = Math.floor($('.good-number input').val()) + 1;
		$('.good-number input').val($add);
	};
});
$('#jian').click(function(){
	if(Math.floor($('.good-number input').val()) <= 1){
		return;
	}else{
		var $min = Math.floor($('.good-number input').val()) - 1;
		$('.good-number input').val($min);
	};
});
//分享收藏按钮效果
$('.details-tellothers,.details-notbuyNow').hover(function(){
	$(this).css("color","blue")
},function(){
	$(this).css("color","#655a54")
})
//选项卡
$('.good-tab').click(function(){
	$('.good-tab').removeClass('good-tabNow');
	$(this).addClass('good-tabNow')
})