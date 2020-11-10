<template>
  <div>
    <mt-field 
      type="text" 
      label="用户名"
      placeholder="请输入用户名"
      state="success"
      :attr="{maxlength:12}"
      disableClear
      v-model="username"></mt-field>
    <mt-field 
      type="password" 
      label="密码"
      placeholder="请输入密码"
      :attr="{maxlength:15,autocomplete:'off'}"
      state="error"
      v-model="password"></mt-field>  
    <mt-field 
      type="password" 
      label="确认密码"
      placeholder="请再次输入密码"
      v-model="conpassword"
      state="warning"></mt-field>  
    <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      conpassword:''
    }
  },
  methods:{
    handle(){
      //分别获取出用户名、密码及确认密码
      let username = this.username;
      let password = this.password;
      let conpassword = this.conpassword;
      //校验用户名
      let usernameReg = /^[0-9a-zA-Z]{6,12}$/;
      if(usernameReg.test(username)){
        console.log('用户名可以使用');
      } else {
        // 显示短消息提示框(简捷写法)
        // this.$toast("用户名格式或内容错误");
        // 显示短消息提示框(标准写法)
        this.$toast({
          message:"用户名格式或内容错误",
          position:"top",
          duration:5000
        });
        //终止函数的执行
        return false;
      }
      //校验密码
      let passwordReg = /^[0-9A-Za-z\.\-_]{8,15}$/;
      if(passwordReg.test(password)){
        console.log('密码可以使用');
      } else {
        this.$toast({
          message:"密码错误",
          position:"middle",
          duration:5000
        });
        return false;
      }
      //校验两次密码是否一致 
      if(password == conpassword){
        console.log('两次密码一致');
      } else {
        this.$toast({
          message:"两次密码不一致",
          position:"middle",
          duration:4000
        });
        return false;
      }
    }
  }
}
</script>