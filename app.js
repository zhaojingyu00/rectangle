var username = document.getElementById('username');
var hint = document.getElementById('hint');
var phone = document.getElementById('phone');
var phoneHint = document.getElementById('phone-hint');
var num = document.getElementById('num');
var numHint = document.getElementById('num-hint');
var yanzheng =document.getElementById('yanzheng');
var yanzhengHint = document.getElementById('yanzheng-hint');
var click = document.getElementById('click');
var clickHint = document.getElementById('clickHint');


username.onblur = function(){
    var name = username.value;
    var regName = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
    var regNum = /^[0-9]*$/;
    if(regNum.test(name)){
        console.log("shibai");
        hint.innerHTML='用户名格式不正确';
    }
    else{
        if(regName.test(name)){
            hint.innerHTML='';
            console.log("成功");
        }
        else{
            hint.innerHTML='用户名格式不正确';
            console.log("失败");
        }
    }
    
}


phone.onblur = function(){
    var tel = phone.value;
    var regMobile=/^1[3,5,8]\d{9}$/;
    if(regMobile.test(tel)){
        phoneHint.innerHTML='';
        console.log("成功");
    }
    else{
        phoneHint.innerHTML='手机号格式不正确';
        console.log("失败");
    }
}


num.onblur = function(){
    var Nu = num.value;
    if(Nu.length > 6 && Nu !=''){
        numHint.innerHTML='';
        console.log("成功");
    }
    else{
        numHint.innerHTML='密码设置不符合要求';
        console.log("失败");
    }
}

var clock='';
var nums = 10;
var btn;
function sendCode(thisBtn){
    btn = thisBtn;
    btn.disabled = true;
    btn.value = nums+'秒后可重新获取';
    clock = setInterval(doLoop,1000);
}
function doLoop() {
    nums--;
    if(nums > 0){
        btn.value = nums+'秒后可重新获取';
    }
    else{
        clearInterval(clock);
        btn.disabled=false;
        btn.value = '点击发送验证码';
        nums=10;
    }
  }
  click.onclick=function(){
    var name = username.value;
    var tel = phone.value;
    var Nu = num.value;
      if(name =='' || tel=='' || Nu==''){
          if(name==''){
            hint.innerHTML='用户名不能为空';
          }
          if(tel==''){
              phoneHint.innerHTML='手机号不能为空';
          }
          if(Nu==''){
            numHint.innerHTML='密码不能为空';
          }
        
      }
  }