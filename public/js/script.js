// user
var user_Boolean = false;
var password_Boolean = false;
var varconfirm_Boolean = false;
var emaile_Boolean = false;
var Mobile_Boolean = false;
var imgVer_Boolean=false;
$('.reg_user').blur(function(){
  if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user").val())){
    $('.user_hint').html("✔").css("color","green");
    user_Boolean = true;
  }else {
    $('.user_hint').html("*所输入的用户名格式不符").css("color","red");
    user_Boolean = false;
  }
});
// password
$('.reg_password').blur(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())){
    $('.password_hint').html("✔").css("color","green");
    password_Boolean = true;
  }else {
    $('.password_hint').html("*密码不符，请重新输入").css("color","red");
    password_Boolean = false;
  }
});


// password_confirm
$('.reg_confirm').blur(function(){
  if (($(".reg_password").val())==($(".reg_confirm").val())){
    $('.confirm_hint').html("✔").css("color","green");
    varconfirm_Boolean = true;
  }else {
    $('.confirm_hint').html("*密码两次输入不一致").css("color","red");
    varconfirm_Boolean = false;
  }
});

//

// Email
$('.reg_email').blur(function(){
  if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".reg_email").val())){
    $('.email_hint').html("✔").css("color","green");
    emaile_Boolean = true;
  }else {
    $('.email_hint').html("*请输入正确的邮箱地址").css("color","red");
    emaile_Boolean = false;
  }
});

// card 
$('.reg_card').blur(function(){
  if ((/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test($(".reg_card").val())){
    $('.card_hint').html("✔").css("color","green");
    card_Boolean = true;
  }else {
    $('.card_hint').html("*请输入正确的身份证号").css("color","red");
    card_Boolean = false;
  }
});


// Mobile
$('.reg_phone').blur(function(){
  if ((/^1[34578]\d{9}$/).test($(".reg_phone").val())){
    $('.mobile_hint').html("✔").css("color","green");
    Mobile_Boolean = true;
  }else {
    $('.mobile_hint').html("*请输入正确的手机号").css("color","red");
    Mobile_Boolean = false;
  }
});


// click
$('.red_button').click(function(e){
  if(user_Boolean && password_Boolean && varconfirm_Boolean && emaile_Boolean && Mobile_Boolean && imgVer_Boolean==false){
     alert("注册未成功 请检查输入内容格式是否有误");
     return;
  }
	$.ajax({       //用ajax来实现不刷新网页的基础上更新数据
		type:"post", //请求方式
		url:"http://127.0.0.1:3000/register", //路径
		data:{
		uname:$("input[name=uname]").val(),  //获取input中name为username的值
		upwd:$("input[name=pwd]").val(), //获取input中name为pwd的值
		email:$("input[name=email]").val(),
		phone:$("input[name=phone]").val(),
		card:$("input[name=idcard]").val()
    },
    success:function(){
      alert("注册成功");
      window.location ="http://www.baidu.com";  //注册成功后跳转
    }
	});   
});


//header slidedown
$('.header li').hover(
  function() {
	  $('ul', this).stop().slideDown(200);
  },
	function() {
    $('ul', this).stop().slideUp(200);
  }
);






