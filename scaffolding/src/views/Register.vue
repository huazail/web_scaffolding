<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端,到学问">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link slot="right" to="/login">登录</router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div>
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        type="text"
        v-model="username"
        :state="usernameState"
        @blur.native.capture="checkUsername"
      >
      </mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        @blur.native.capture="checkPassword"
      >
      </mt-field>
      <mt-field
        label="确认密码"
        placeholder="请再次输入密码"
        type="password"
        v-model="conpassword"
        @blur.native.capture="checkConpassword"
      >
      </mt-field>
      <mt-button type="primary" size="large" @click="handle"
        >免费注册</mt-button
      >
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      //用户名、密码及确认密码的变量
      username: "",
      password: "",
      conpassword: "",
      //用户名、密码及确认密码的状态
      usernameState: "",
    };
  },
  methods: {
    //单击免费注册按钮时校验表单
    handle() {
      //会引发短路现象
      if (
        this.checkUsername() &&
        this.checkPassword() &&
        this.checkConpassword()
      ) {
        //现在要发送相关的用户名、密码到WEB服务器
        // 创建用户输入对象
        let object = {
          username: this.username,
          password: this.password,
        };
        // console.log(this.qs.stringify(object));
        // 使用qs模块简洁拼接字符串
        this.axios.post("/register", this.qs.stringify(object)).then((res) => {
          // 发送请求到服务器进行数据库查询
          // 判断如果data对象中code为0则数据库中不存在此用户
          if (res.data.code == 0) {
            this.$router.push("/");
          } else {
            // 弹出提示框
            this.$messagebox("提示信息", "用户已存在");
          }
        });
      }
    },
    //检测用户名
    // 正则表达式前台验证用户名格式
    checkUsername() {
      let username = this.username;
      let usernameReg = /^[0-9a-zA-Z]{6,12}$/;
      if (usernameReg.test(username)) {
        // 修改用户名的状态
        this.usernameState = "success";
        return true;
      } else {
        // 显示短消息提示框(简捷写法)
        // this.$toast("用户名格式或内容错误");
        // 显示短消息提示框(标准写法)
        this.$toast({
          message: "用户名格式或内容错误",
          position: "top",
          duration: 5000,
        });
        this.usernameState = "error";
        //终止函数的执行
        return false;
      }
    },
    //检测密码
    checkPassword() {
      let password = this.password;
      let passwordReg = /^[0-9A-Za-z\.\-_]{8,15}$/;
      if (passwordReg.test(password)) {
        return true;
      } else {
        this.$toast({
          message: "密码错误",
          position: "middle",
          duration: 5000,
        });
        return false;
      }
    },
    //检测两次密码是否一致
    checkConpassword() {
      //校验两次密码是否一致
      let password = this.password;
      let conpassword = this.conpassword;
      if (password == conpassword) {
        return true;
      } else {
        this.$toast({
          message: "两次密码不一致",
          position: "middle",
          duration: 4000,
        });
        return false;
      }
    },
  },
};
</script>