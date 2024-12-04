<template>
    <div class="login">
      <h2>酒店管理系统 - 登录</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">用户名</label>
          <input v-model="username" id="username" type="text" required />
        </div>
        <div>
          <label for="password">密码</label>
          <input v-model="password" id="password" type="password" required />
        </div>
        <button type="submit">登录</button>
        <p>没有账号？ <router-link to="/register">注册</router-link></p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleLogin() {
        // 在此进行登录请求
        // 假设登录成功后跳转到主界面
        this.$router.push('/dashboard')
      }
    }
  }
  </script>
  
  <style scoped>
  /* 添加一些样式 */
  .login {
    width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
  }
  </style>
  