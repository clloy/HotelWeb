<template>
    <div class="register">
      <h2>酒店管理系统 - 注册</h2>
      <form @submit.prevent="handleRegister">
        <div>
          <label for="username">用户名</label>
          <input v-model="username" id="username" type="text" required />
        </div>
        <div>
          <label for="password">密码</label>
          <input v-model="password" id="password" type="password" required />
        </div>
        <div>
          <label for="confirmPassword">确认密码</label>
          <input v-model="confirmPassword" id="confirmPassword" type="password" required />
        </div>
        <button type="submit">注册</button>
        <p>已有账号？ <router-link to="/login">登录</router-link></p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert('密码不一致，请重新输入')
          return
        }
        // 在此进行注册请求
        // 假设注册成功后跳转到登录界面
        this.$router.push('/login')
      }
    }
  }
  </script>
  
  <style scoped>
  /* 添加一些样式 */
  .register {
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
  