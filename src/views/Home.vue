<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="logo">酒店官网</div>
      <button class="login-btn" @click="showLoginDialog = true">登录</button>
    </header>

    <!-- 酒店照片轮播 -->
    <div class="carousel_reserveLink">
  <div class="carousel">
    <img :src="carouselImages[currentImageIndex]" alt="酒店照片" class="carousel-image" />
    <div class="reserveLink">
      <div class="reserve-options">
        <div class="reserve-option">
          <label for="check-in-date">入住时间</label>
          <input type="date" id="check-in-date" v-model="checkInDate" />
        </div>
        <div class="reserve-option">
          <label for="check-out-date">离开时间</label>
          <input type="date" id="check-out-date" v-model="checkOutDate" />
        </div>
        <div class="reserve-option">
          <label for="room-type">客房类型</label>
          <select id="room-type" v-model="roomType">
            <option value="single">单人间</option>
            <option value="double">双人间</option>
            <option value="suite">套房</option>
          </select>
        </div>
        <div class="reserve-option">
          <label for="room-quantity">客房数量</label>
          <input type="number" id="room-quantity" v-model="roomQuantity" min="1" />
        </div>
      </div>
      <router-link to="/reserve" class="reserve-link">立即预定</router-link>
    </div>
  </div>
</div>



    <!-- 酒店介绍 -->
  <section class="hotel-info">
    <div class="title-bold" style="font-size: 25px;">
      <h2>欢迎来到我们酒店</h2>
      <p>这里是酒店的简介，提供舒适的住宿和高质量的服务。</p>
      <router-link to="/join-vip" class="addToVIP-link">加入会员</router-link>
    </div>
    <div class="with-scroll-wrapper ">
        <div class="dlp-general" id="dlp-tab-">
            <div class="with-scroll-wrapper ">
                <div class="home-card-group">
                    <div class="card-group-wrapper">
                        <div class="title-group">
                            <div class="title title-regular">
                                <p>美好的冬日假期即将开启</p>
                            </div>
                            <div class="subtitle">
                                <div>
                                    <div class="dlp-rich-text ">
                                        放慢脚步，让一段旅程带您沉浸冬日独有的魅力。邂逅冰雪奇境，饱览北国壮丽风光；沐浴南方暖阳，体验悠闲冬日的别样精彩；漫步古韵街巷，聆听历史的悠远回响；让欢欣愉悦围绕着您和家人，编织一段温馨的假日回忆。即刻预订，乐享2晚连住优惠，开启难忘的冬季之旅。
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="home-card-container">
                            <div class="home-card">
                                <div class="home-card-content">
                                    <div class="home-card-image-wrapper">
                                        <div class="image-container no-shadow">
                                            <div class="card-image"><img
                                                    src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/Corporate/dlp/2024winter/2024winter_Block1_Icy-wonderland_1140x760.jpg?h=760&amp;iar=0&amp;w=1140&amp;hash=CD069A38B80E70D21FE8362A7D1F98EF" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="home-card-detail no-shadow">
                                        <div>
                                            <div
                                                class="home-card-grid home-card-detail-title title-regular">
                                                <p>冰雪纵情游</p>
                                            </div>
                                            <div class="home-card-grid home-card-detail-content">
                                                <div>
                                                    <div class="dlp-rich-text ">
                                                        <p><a href="https://www.shangri-la.com/cn/harbin/shangrila/offer-detail/rooms-suites/horizon-club-room-winter-offer"
                                                                target="_blank">&bull; 哈尔滨香格里拉 I
                                                                玩酷冰城客房套餐</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/harbin/songbeishangrila/offer-detail/rooms-suites/horizon-club-room-winter-offer"
                                                                target="_blank">&bull; 哈尔滨松北香格里拉 I
                                                                玩酷冰城客房套餐</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/shenyang/shangrila/offer-detail/rooms-suites/winter-offer-2024"
                                                                target="_blank">&bull; 沈阳香格里拉 I
                                                                连住2晚即享8折优惠</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/changchun/shangrila/offer-detail/rooms-suites/horizon-club-winter-offer-with-two-nights"
                                                                target="_blank">&bull; 长春香格里拉 I 暖冬特惠
                                                                2晚套餐</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/beijing/chinaworldsummitwing/offer-detail/rooms-suites/2024-winter-two-night-getaway"
                                                                target="_blank">&bull; 北京国贸大酒店 I
                                                                超豪华客房连住2晚套餐</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/beijing/shangrila/offer-detail/rooms-suites/2024-winter-campaign"
                                                                target="_blank">&bull; 北京香格里拉 I
                                                                新阁超豪华客房连住2晚含早75折优惠</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/huhhot/shangrila/offer-detail/rooms-suites/two-night-stay-winter-room-offer"
                                                                target="_blank">&bull; 呼和浩特香格里拉 I 雪舞飞扬
                                                                2晚连住套餐</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/hotels/jen/beijing/centraldistrict/deals/details/stay/Twice-the-Fun"
                                                                target="_blank">&bull; JEN北京新国贸饭店 I 2晚连住
                                                                双倍享受
                                                            </a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/tianjin/shangrila/offer-detail/rooms-suites/2024-winter/"
                                                                target="_blank">&bull; 天津香格里拉 I
                                                                "豪华河景客房含早，
                                                                连住2晚享豪华阁待遇 </a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="home-card-grid button-container"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-card">
                                <div class="home-card-content reverse">
                                    <div class="home-card-image-wrapper">
                                        <div class="image-container no-shadow">
                                            <div class="card-image"><img
                                                    src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/Corporate/dlp/2024winter/2024winter_Block2_Southern-sun_1140x760.jpg?h=760&amp;iar=0&amp;w=1140&amp;hash=90E74726FA815B741353DFA1B8E7B276" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="home-card-detail no-shadow">
                                        <div>
                                            <div
                                                class="home-card-grid home-card-detail-title title-regular">
                                                <p>暖冬逍遥游</p>
                                            </div>
                                            <div class="home-card-grid home-card-detail-content">
                                                <div>
                                                    <div class="dlp-rich-text ">
                                                        <p><a href="https://www.shangri-la.com/cn/hotels/jen/kunming/panlongdistrict/deals/details/stay/winter-exploration-with-seagulls"
                                                                target="_blank">&bull; 昆明JEN酒店 I 冬季观鸥
                                                                2晚连住套餐</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/xiamen/shangrila/offer-detail/rooms-suites/winter-exploration-room-package"
                                                                target="_blank">&bull; 厦门香格里拉 I
                                                                暖阳冬日，山海奇遇</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/offer-detail/hotel/fuzhou/shangrila/rooms-suites/stay-longer-and-save-more"
                                                                target="_blank">&bull; 福州香格里拉 I
                                                                豪华客房2晚连住优惠</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/nanning/shangrila/offer-detail/rooms-suites/2024winter"
                                                                target="_blank">&bull; 南宁香格里拉 I
                                                                "【冬游南宁】臻选豪华客房连住两晚送餐饮抵用券600元"</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/shenzhen/nanshanshangrila/offer-detail/rooms-suites/Winter%20Room%20Campaign/"
                                                                target="_blank">&bull; 深圳南山香格里拉 I 乐享云端
                                                                悠然南山 连住2晚优惠</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/guangzhou/shangrila/offer-detail/rooms-suites/consecutive-2-nights-stay"
                                                                target="_blank">&bull; 广州香格里拉 I 连住2晚礼遇
                                                            </a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/beihai/shangrila/offer-detail/rooms-suites/super-selection-package-sea-view"
                                                                target="_blank">&bull; 北海香格里拉 I
                                                                高级海景房连住2晚优惠</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/putian/shangrila/offer-detail/rooms-suites/Winter%20Joy%20Hot%20Spring%20Package/?"
                                                                target="_blank">&bull; 莆田香格里拉 I
                                                                暖冬愉悦汤泉豪华客房2晚连住 </a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/hongkong/islandshangrila/offer-detail/rooms-suites/isl-3-day-winter-urban-getaway/"
                                                                target="_blank">&bull; 港岛香格里拉 I
                                                                冬日惬意三天兩晚住宿假期 </a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/hongkong/kerry/offer-detail/rooms-suites/khhk-3-day-slowcation-in-winter/"
                                                                target="_blank">&bull; 香港嘉里酒店 I
                                                                冬日三天兩晚慢漫游</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="home-card-grid button-container"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-card">
                                <div class="home-card-content">
                                    <div class="home-card-image-wrapper">
                                        <div class="image-container no-shadow">
                                            <div class="card-image"><img
                                                    src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/Corporate/dlp/2024winter/2024winter_Block3_Family-odyssey_1140x760.jpg?h=760&amp;iar=0&amp;w=1140&amp;hash=4EB506D41A97424E133966A8B0C2352C" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="home-card-detail no-shadow">
                                        <div>
                                            <div
                                                class="home-card-grid home-card-detail-title title-regular">
                                                <p>亲子家庭游</p>
                                            </div>
                                            <div class="home-card-grid home-card-detail-content">
                                                <div>
                                                    <div class="dlp-rich-text ">
                                                        <p><a href="https://www.shangri-la.com/cn/beijing/shangrilashougangpark/offer-detail/rooms-suites/2024-winter-campaign"
                                                                target="_blank">&bull; 北京首钢园香格里拉 I
                                                                豪华客房连住2晚折扣优惠</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/shanghai/kerryhotelpudong/offer-detail/rooms-suites/stay2nights"
                                                                target="_blank">&bull; 上海浦东嘉里大酒店 I
                                                                连住2晚即享85折优惠</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/qinhuangdao/shangrila/offer-detail/rooms-suites/winter-room-campaign"
                                                                target="_blank">&bull; 秦皇岛香格里拉 I
                                                                豪华海景客房2晚连住优惠</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/shanghai/pudongshangrila/offer-detail/rooms-suites/suite-celebration"
                                                                target="_blank">&bull; 上海浦东香格里拉 I
                                                                2晚豪华阁或套房尊享8折</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/suzhou/jinjilakeshangrila/offer-detail/rooms-suites/stay-2-nights-and-get-25-off"
                                                                target="_blank">&bull; 苏州园区香格里拉 I
                                                                豪华阁连住2晚75折</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/ningbo/shangrila/offer-detail/rooms-suites/2024_winter_roomoffer"
                                                                target="_blank">&bull; 宁波香格里拉 I
                                                                豪华阁连住2晚8折</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/dalian/shangrila/offer-detail/rooms-suites/2024winter"
                                                                target="_blank">&bull; 大连香格里拉 I
                                                                豪华阁连住2晚85折优惠</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/guilin/shangrila/offer-detail/rooms-suites/family-time-package-3"
                                                                target="_blank">&bull; 桂林香格里拉 I
                                                                全家童乐3天2晚套餐</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/hangzhou/midtownshangrila/offer-detail/rooms-suites/Q3-campaign-2024"
                                                                target="_blank">&bull; 杭州城中香格里拉 I
                                                                连住2晚享至多85折优惠 </a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="home-card-grid button-container"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-card">
                                <div class="home-card-content reverse">
                                    <div class="home-card-image-wrapper">
                                        <div class="image-container no-shadow">
                                            <div class="card-image"><img
                                                    src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/Corporate/dlp/2024winter/2024winter_Block4_China-allure_1140x760.jpg?h=760&amp;iar=0&amp;w=1140&amp;hash=0147DC054C9407D33DF1F9E94A2A0EE9" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="home-card-detail no-shadow">
                                        <div>
                                            <div
                                                class="home-card-grid home-card-detail-title title-regular">
                                                <p>古风文化游</p>
                                            </div>
                                            <div class="home-card-grid home-card-detail-content">
                                                <div>
                                                    <div class="dlp-rich-text ">
                                                        <p><a href="https://www.shangri-la.com/cn/qufu/shangrila/offer-detail/rooms-suites/winter-room-campaign-package"
                                                                target="_blank">&bull; 曲阜香格里拉 I 暖冬钜惠
                                                                2晚套餐</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/xian/shangrila/offer-detail/rooms-suites/exploring-changan-2024"
                                                                target="_blank">&bull; 西安香格里拉 I
                                                                探长安豪华阁入住礼遇</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/suzhou/shangrila/offer-detail/rooms-suites/explore-summer-suzhou-city-3-days-2nights-package/"
                                                                target="_blank">&bull; 苏州香格里拉 I
                                                                云端天际·冬日漫游 豪华阁双夜探索之旅</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/hangzhou/shangrila/offer-detail/rooms-suites/stay-2-save-up-to-15off/"
                                                                target="_blank">&bull; 杭州香格里拉 I
                                                                连住2晚至多85折</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/wuhan/shangrila/offer-detail/rooms-suites/winter-limited-time-special-offer"
                                                                target="_blank">&bull; 武汉香格里拉 I
                                                                豪华阁客房及套房连住2晚85折</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/chengdu/shangrila/offer-detail/rooms-suites/2024winter-15off"
                                                                target="_blank">&bull; 成都香格里拉 I
                                                                豪华阁客房连住2晚享85折</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/nanjing/shangrila/offer-detail/rooms-suites/horizon-suite-package-consecutive-2-nights-stay"
                                                                target="_blank">&bull; 南京香格里拉 I
                                                                豪华阁客房及套房连住2晚享8折</a></p>
                                                        <p><a href="https://www.shangri-la.com/cn/beijing/chinaworld/offer-detail/rooms-suites/stay-more-pay-less-2-days"
                                                                target="_blank">&bull; 北京中国大饭店 I
                                                                2晚连住享优惠房价</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="home-card-grid button-container"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>


    <!-- 登录弹窗 -->
    <div v-if="showLoginDialog" class="modal-overlay" @click.self="showLoginDialog = false">
      <div class="modal">
        <h3>登录</h3>
        <form @submit.prevent="handleLogin">
          <div class="form-item">
            <label for="login-username">用户名</label>
            <input v-model="loginForm.username" id="login-username" type="text" placeholder="请输入用户名" required />
          </div>
          <div class="form-item">
            <label for="login-password">密码</label>
            <input v-model="loginForm.password" id="login-password" type="password" placeholder="请输入密码" required />
          </div>
          <button type="submit" class="primary-btn">登录</button>
        </form>
        <p class="register-link">没有账号？ <a href="javascript:void(0);" @click="showRegisterDialog = true" style="color: rgba(224, 170, 20, 1);">点击注册</a></p>
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
            <input v-model="registerForm.username" id="register-username" type="text" placeholder="请输入用户名" required />
          </div>
          <div class="form-item">
            <label for="register-password">密码</label>
            <input v-model="registerForm.password" id="register-password" type="password" placeholder="请输入密码"
              required />
          </div>
          <div class="form-item">
            <label for="register-confirm-password">确认密码</label>
            <input v-model="registerForm.confirmPassword" id="register-confirm-password" type="password"
              placeholder="确认密码" required />
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
      carouselInterval: null, // 用于保存定时器ID
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
      this.$router.push({name:'ReserveEmp'})
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
    },
    startAutoCarousel() {
      this.carouselInterval = setInterval(() => {
        this.nextImage();
      }, 5000); // 每3秒自动切换图片
    },
    stopAutoCarousel() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval);
      }
    }
  },
  mounted() {
    this.startAutoCarousel(); // 页面加载时启动自动轮播
  },
  beforeDestroy() {
    this.stopAutoCarousel(); // 清理定时器
  }
};
</script>

<style scoped>
/* 基本样式 */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

/* 顶部导航栏 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8); /* 半透明背景 */
  z-index: 999;
}

.logo {
  font-size: 32px;
  font-weight: bold;
  color: rgba(224, 170, 20, 1);
}

.login-btn {
  background-color: rgba(224, 170, 20, 0.6);
  color: white;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  transition: all 0.3s;
  border: none;
}

.login-btn:hover {
  background-color: rgba(224, 170, 20, 1);
}

/* 酒店照片轮播 */
/* 容器样式 */
.carousel_reserveLink {
  position: relative; /* 为了将子元素绝对定位于该容器 */
  width: 100%;
}

/* 轮播图 */
.carousel {
  position: relative;
  width: 100%;
  margin-top: 30px;
}

img.carousel-image {
    width: 100%;
}

/* 预定部分样式 */
.reserveLink {
  position: absolute;
  bottom: 30px; /* 距离底部的距离 */
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 使元素水平完全居中 */
  z-index: 2; /* 确保按钮在图片之上 */
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 0.55rem;
  background-color: rgba(255, 255, 255, 0.8);
}

/* 四个选择项的样式 */
.reserve-options {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* 每个选项之间的间距 */
  width: 100%;
  max-width: 1000px; /* 最大宽度，防止过宽 */
}

.reserve-option {
  flex: 1; /* 每个选项占相等宽度 */
  display: flex;
  flex-direction: column;
}

.reserve-option label {
  margin-bottom: 5px;
  font-weight: bold;
}

.reserve-option input,
.reserve-option select {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* 立即预定按钮样式 */
.reserve-link {
  padding: 12px 24px;
  background-color: rgba(224, 170, 20, 0.7); /* 半透明绿色 */
  color: white;
  font-size: 18px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  text-align: center;
  width: 150px;
}

.reserve-link:hover {
  background-color: rgba(224, 170, 20, 1); /* 悬停时不透明 */
}



/* 隐藏箭头按钮 */
.prev,
.next {
  display: none;
}

/* 酒店信息部分 */
.hotel-info {
  text-align: center;
  margin-top: 40px;
  font-size: 18px;
  color: #333;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}

.addToVIP-link {
  margin-top: 20px;
  display: inline-block;
  padding: 12px 24px;
  background-color: rgba(224, 170, 20, 0.7); /* 半透明绿色 */
  color: white;
  font-size: 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.addToVIP-link:hover {
  background-color: rgba(224, 170, 20, 1); /* 悬停时不透明 */
}

/* 样式调整 */
.with-scroll-wrapper {
    overflow-x: hidden;
}

.home-card-group .title {
    font-size: 40px;
    color: #000;
    letter-spacing: 0;
    text-align: center;
    line-height: 38px;
    margin: 0 0 30px;
}

.subtitle {
  padding: 1.5% 20%;
}

/* 酒店画廊部分 */
/* 酒店信息部分 */
.dlp-general {
    margin-top: 40px;
    font-size: 18px;
    color: #333;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}

/* 照片和文字排列 */
.home-card-container {
    display: flex;
    flex-direction: column; /* 竖排 */
    align-items: flex-start;
}

.home-card-content {
    display: flex;
    gap: 50px;
}

.home-card {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.home-card-content.reverse {
    flex-direction: row-reverse;
}

.home-card-image-wrapper {
    width: 100%;
}

.card-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.home-card-detail {
    width: 1000px;
    padding: 15px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 内容部分 */
.home-card-grid {
    box-shadow: none;
    width: 100%;
    text-align: left;
}

.home-card-detail-title {
    color: #333;
    font-size: 30px;
    letter-spacing: 0;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    max-height: 56px;
    position: relative;
    padding-left: 13px;
}

.home-card-detail-title:before {
    content: " ";
    background: #5e514d;
    width: 3px;
    height: 30px;
    position: absolute;
    top: 4px;
    left: 0;
}

.home-card-detail-title p {
    margin: 0;
    font-weight: bold;
}

.dlp-rich-text p {
    margin: 5px 0;
}

.dlp-rich-text a {
    color: #e0aa14;
    font-weight: 700;
}

.dlp-rich-text a:hover {
    text-decoration: underline;
}

/* 右对齐的图片 */
.home-card-container .home-card:nth-child(odd) .card-image img {
    align-self: flex-start; /* 左对齐 */
}

.home-card-container .home-card:nth-child(even) .card-image img {
    align-self: flex-end; /* 右对齐 */
}

/* 每张图片下的链接部分，居中显示 */
.home-card-detail-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.home-card-detail-content p {
    margin: 5px 0;
}

/* 各张卡片之间的间距 */
.home-card {
    margin-bottom: 30px; /* 卡片之间的间距 */
}

@media (max-width: 768px) {
    .home-card-detail-title p {
        font-size: 18px;
    }
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
  max-width: 500px;
  height: 500px;
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
  background-color: rgba(224, 170, 20, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

.primary-btn:hover {
  background-color: rgba(224, 170, 20, 1);
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