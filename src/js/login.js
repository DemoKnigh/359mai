//导入头部
$('header').load("HeaderTpl.html");
//导入尾部
$('footer').load("FooterTpl.html");
//超链接鼠标移入移出事件
$('#login-changePic,#login-forgetPwd').hover(function(){
	$(this).css({"color":"blue"});
},function(){
	$(this).css({"color":"black"});
})
//登录按钮移入变暗
$('#login-button').hover(function(){
	$(this).css("background","#db4707");
},function(){
	$(this).css("background","#FC560D");
});
//注册按钮移入变色
$('#login-registBtn').hover(function(){
	$(this).css({'background' : "#ECECEC",'color':"blue"});
},function(){
	$(this).css({'background' : "#FAFAFA",'color':"black"});
})
