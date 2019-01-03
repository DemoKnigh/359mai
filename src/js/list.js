//导入头部
$('header').load("HeaderTpl.html");
//导入尾部
$('footer').load("FooterTpl.html");
//导入左侧模块
$('.list-leftPart').load("details.html .details-rightPart")
//页面跳转
$('.huaweihonor .shangpin,img').click(function(){
	window.location = "details.html"
})
//品牌价格选择
$('.pinpai').click(function(){
	$('.pinpai').removeClass('part1tailchecked');
	$(this).addClass('part1tailchecked');
});
$('.jiage').click(function(){
	$('.jiage').removeClass('part1tailchecked');
	$(this).addClass('part1tailchecked');
})
//重置筛选项
$('.list-part1title').click(function(){
	$('.pinpai').removeClass('part1tailchecked');
	$('.jiage').removeClass('part1tailchecked');
	$('.chushi').addClass('part1tailchecked')
})