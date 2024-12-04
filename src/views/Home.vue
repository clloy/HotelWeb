<template>
    <div class="home">
      <!-- 顶部导航栏 -->
      <header class="header">
        <div class="logo">酒店官网</div>
        <button class="login-btn" @click="showLoginDialog = true">登录</button>
      </header>
  
      <!-- 酒店照片轮播 -->
      <div class="carousel">
        <img :src="carouselImages[currentImageIndex]" alt="酒店照片" class="carousel-image" />
        <button class="prev" @click="prevImage">❮</button>
        <button class="next" @click="nextImage">❯</button>
      </div>
  
      <!-- 酒店介绍 -->
      <section class="hotel-info">
        <h2>欢迎来到我们酒店</h2>
        <p>这里是酒店的简介，提供舒适的住宿和高质量的服务。</p>
        <div class="hotel-gallery">
          <img src="https://via.placeholder.com/300" alt="酒店图片" class="gallery-image" />
          <img src="https://via.placeholder.com/300" alt="酒店图片" class="gallery-image" />
          <img src="https://via.placeholder.com/300" alt="酒店图片" class="gallery-image" />
        </div>
      </section>
  
      <!-- 登录弹窗 -->
      <div v-if="showLoginDialog" class="modal-overlay" @click.self="showLoginDialog = false">
        <div class="modal">
          <h3>登录</h3>
          <form @submit.prevent="handleLogin">
            <div class="form-item">
              <label for="login-username">用户名</label>
              <input
                v-model="loginForm.username"
                id="login-username"
                type="text"
                placeholder="请输入用户名"
                required
              />
            </div>
            <div class="form-item">
              <label for="login-password">密码</label>
              <input
                v-model="loginForm.password"
                id="login-password"
                type="password"
                placeholder="请输入密码"
                required
              />
            </div>
            <button type="submit" class="primary-btn">登录</button>
          </form>
          <p class="register-link">没有账号？ <a href="javascript:void(0);" @click="showRegisterDialog = true">点击注册</a></p>
          <button class="close-btn" @click="showLoginDialog = false">×</button>
        </div>
      </div>
  
      <!-- 注册弹窗 -->
      <div v-if="showRegisterDialog" class="modal-overlay" @click.self="showRegisterDialog = false">
        <div class="modal">
          <h3>注册</h3>
          <form @submit.prevent="handleRegister">
            <div class="form-item">
              <label for="register-username">用户名</label>
              <input
                v-model="registerForm.username"
                id="register-username"
                type="text"
                placeholder="请输入用户名"
                required
              />
            </div>
            <div class="form-item">
              <label for="register-password">密码</label>
              <input
                v-model="registerForm.password"
                id="register-password"
                type="password"
                placeholder="请输入密码"
                required
              />
            </div>
            <div class="form-item">
              <label for="register-confirm-password">确认密码</label>
              <input
                v-model="registerForm.confirmPassword"
                id="register-confirm-password"
                type="password"
                placeholder="确认密码"
                required
              />
            </div>
            <button type="submit" class="primary-btn">注册</button>
          </form>
          <button class="close-btn" @click="showRegisterDialog = false">×</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showLoginDialog: false,
        showRegisterDialog: false,
        loginForm: {
          username: '',
          password: ''
        },
        registerForm: {
          username: '',
          password: '',
          confirmPassword: ''
        },
        carouselImages: [
          'https://via.placeholder.com/1200x400/4CAF50/ffffff?text=Hotel+Image+1',
          'https://via.placeholder.com/1200x400/FF6347/ffffff?text=Hotel+Image+2',
          'https://via.placeholder.com/1200x400/4682B4/ffffff?text=Hotel+Image+3',
        ],
        currentImageIndex: 0,
      };
    },
    methods: {
      prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
      },
      nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
      },
      handleLogin() {
        if (!this.loginForm.username || !this.loginForm.password) {
          alert('请输入用户名和密码');
          return;
        }
        alert('登录成功');
        this.showLoginDialog = false;
      },
      handleRegister() {
        if (
          !this.registerForm.username ||
          !this.registerForm.password ||
          !this.registerForm.confirmPassword
        ) {
          alert('请填写所有字段');
          return;
        }
        if (this.registerForm.password !== this.registerForm.confirmPassword) {
          alert('密码不一致');
          return;
        }
        alert('注册成功');
        this.showRegisterDialog = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* 基本样式 */
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    background: #f4f4f9;
    min-height: 100vh;
  }
  
  /* 顶部导航栏 */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
  }
  
  .logo {
    font-size: 32px;
    font-weight: bold;
    color: #4CAF50;
  }
  
  .login-btn {
    background-color: #4CAF50;
    color: white;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 16px;
    transition: all 0.3s;
    border: none;
  }
  
  .login-btn:hover {
    background-color: #45a049;
  }
  
  /* 酒店照片轮播 */
  .carousel {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin-top: 30px;
  }
  
  .carousel-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 36px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .prev {
    left: 10px;
  }
  
  .next {
    right: 10px;
  }
  
  /* 酒店信息部分 */
  .hotel-info {
    text-align: center;
    margin-top: 40px;
    font-size: 18px;
    color: #333;
    max-width: 800px;
  }
  
  .hotel-gallery {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .gallery-image {
    width: 30%;
    height: auto;
    border-radius: 10px;
  }
  
  /* 弹窗遮罩 */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  /* 弹窗 */
  .modal {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  
  .modal h3 {
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .form-item {
    margin-bottom: 20px;
  }
  
  .form-item label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-item input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
  }
  
  .primary-btn {
    width: 100%;
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
  }
  
  .primary-btn:hover {
    background-color: #45a049;
  }
  
  .register-link {
    text-align: center;
    margin-top: 10px;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
  }
  
  .close-btn:hover {
    color: red;
  }
  </style>
  