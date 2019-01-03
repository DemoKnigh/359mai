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
});
//登录
//登录按钮点击事件
$('#login-button').click(function(){
	//用户名为空
	if($('#log-name').val() == ''){
		alert("请输入用户名");
		return;
	};
	//密码为空
	if($('#log-pwd').val() == ''){
		alert("请输入密码");
		return;
	};
	//验证码为空
	if($('.verification-Code').val() == ''){
		alert("请输入验证码");
		return;
	};
	//验证码错误
	if($('.verification-Code').val() != '0333'){
		alert("请输入正确的验证码");
		return;
	};
	//用户名不存在
	if(!$.cookie($('#log-name').val())){
		alert("用户名不存在");
		return;
	};
	//用户名存在，但密码错误
	if($('#log-pwd').val() != $.cookie($('#log-name').val())){
		alert('您输入的密码有误');
		return;
	};
	//成功登录
	if($('#log-pwd').val() == $.cookie($('#log-name').val())){
		alert("登陆成功！");
		window.location.assign("index.html");
	};
})

