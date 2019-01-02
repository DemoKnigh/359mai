//导入头部
$('header').load("HeaderTpl.html");
//导入尾部
$('footer').load("FooterTpl.html");
//超链接移入变色事件
$('#registor-changePic,#memberAgreement,#privacy-protection-policy').hover(function(){
	$(this).css('color','#07A9EB');
},function(){
	$(this).css('color','blue');
});
//红按钮移入移出事件
$('#registor-goLoginBtn').hover(function(){
	$(this).css('background','#F7212C')
},function(){
	$(this).css('background','#D31C26')
});
//注册按钮移入事件
$('#registor-registBtn').hover(function(){
	$(this).css('background','#E14C0A')
},function(){
	$(this).css('background','#FC540C')
});
//表单验证
// 姓名失焦事件
$('#logName').blur(function(){
	if(!/^.{4,}$/.test($(this).val())){
		$(this).parent().append(function(){
			$('#logNameWarn').remove();
			return $('<span style="color : red" id="logNameWarn">您输入的名称有误！</span>');
		});
	}else{
		$('#logNameWarn').remove();
	};
	if($(this).val() == ''){
		$(this).parent().append(function(){
			$('#logNameWarn').remove();
			return $('<span style="color : red" id="logNameWarn">输入的账号名不能为空！</span>');
		});
	};
});
//密码失焦事件
$('#logPwd').blur(function(){
	if(!/^.{6,20}$/.test($(this).val())){
		$(this).parent().append(function(){
			$('#logPwdWarn').remove();
			return $('<span style="color : red" id="logPwdWarn">您输入的密码有误！</span>');
		});
	}else{
		$('#logPwdWarn').remove();
	};
	if($(this).val() == ''){
		$(this).parent().append(function(){
			$('#logPwdWarn').remove();
			return $('<span style="color : red" id="logPwdWarn">输入的密码不能为空！</span>');
		});
	};
});
//确认密码失焦事件
$('#logPwd2').blur(function(){
	if(!($('#logPwd2').val() == $('#logPwd').val())){
		$(this).parent().append(function(){
			$('#logPwd2Warn').remove();
			return $('<span style="color : red" id="logPwd2Warn">您输入的密码与上次不符！</span>');
		});
	}else{
		$('#logPwd2Warn').remove();
	};
	if($(this).val() == ''){
			$('#logPwd2Warn').remove();
	};
});
//会员名失焦事件
$('#logNickname').blur(function(){
	if($(this).val() == ''){
		$(this).parent().append(function(){
			$('#logNicknameWarn').remove();
			return $('<span style="color : red" id="logNicknameWarn">会员名不能为空！</span>');
		});
	}else{
		$('#logNicknameWarn').remove();
	}
});
//地区失焦事件
$('#logPlace').blur(function(){
	if($(this).children(':checked').val() == '请选择'){
		$(this).parent().append(function(){
			$('#logPlaceWarn').remove();
			return $('<span style="color : red" id="logPlaceWarn">所在地区不能为空！</span>');
		});
	}else{
		$('#logPlaceWarn').remove();
	};
});
//手机号失焦事件
$('#logNumber').blur(function(){
	if(!/^\d{11}$/.test($(this).val())){
		$(this).parent().append(function(){
			$('#logNumberWarn').remove();
			return $('<span style="color : red" id="logNumberWarn">您输入的手机号有误！</span>');
		});
	}else{
		$('#logNumberWarn').remove();
	};
	if($(this).val() == ''){
		$(this).parent().append(function(){
			$('#logNumberWarn').remove();
			return $('<span style="color : red" id="logNumberWarn">输入的手机号不能为空！</span>');
		});
	};
})
//qq失焦事件
$('#logQQ').blur(function(){
	if(!/^\d{5,10}$/.test($(this).val())){
		$(this).parent().append(function(){
			$('#logQQWarn').remove();
			return $('<span style="color : red" id="logQQWarn">您输入的QQ有误！</span>');
		});
	}else{
		$('#logQQWarn').remove();
	};
	if($(this).val() == ''){
		$(this).parent().append(function(){
			$('#logQQWarn').remove();
			return $('<span style="color : red" id="logQQWarn">输入的QQ号不能为空！</span>');
		});
	};
})
//验证码失焦事件
// $('#logCode').blur(function(){
// 	if(!/^(0333)$/.test($(this).val())){
// 		console.log(1);
// 	};
// })
