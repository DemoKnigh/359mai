//导入头部
$('header').load("HeaderTpl.html");
//导入尾部
$('footer').load("FooterTpl.html");
//商品数量加减
$('#cart-goodAdd').click(function(){
	if(Math.floor($('.cart-goodCount input').val()) >= 20){
		return;
	}else{
		var $add = Math.floor($('.cart-goodCount input').val()) + 1;
		$('.cart-goodCount input').val($add);
	};
	var $points = $('.cart-goodCount input').val() * 4299;
	$('.cart-points span').html($points);
	$('.cart-littleSum span').html("￥"+$points+".00");
	$('.alltag span:last').html("￥"+$points+".00");
	$('.cart-allPrice b').html($points);
	$('.cart-allPrice span:last').html("￥"+$points+".00");
});
$('#cart-goodMinus').click(function(){
	if(Math.floor($('.cart-goodCount input').val()) <= 1){
		return;
	}else{
		var $min = Math.floor($('.cart-goodCount input').val()) - 1;
		$('.cart-goodCount input').val($min);
	};
	var $points = $('.cart-goodCount input').val() * 4299;
	$('.cart-points span').html($points);
	$('.cart-littleSum span').html("￥"+$points+".00");
	$('.alltag span:last').html("￥"+$points+".00");
	$('.cart-allPrice b').html($points);
	$('.cart-allPrice span:last').html("￥"+$points+".00");
});