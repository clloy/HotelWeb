<!-- 员工预订页面 -->
<template>
    <div id="app">
      <aside class="sidebar">
        <div class="sidebar-header">
          <img src="../assets/images/酒店管理系统.png" alt="Logo" class="sidebar-logo"/>
        </div>
        <nav>
          <ul>
            <li><img src="../assets/icons/首页.png" alt="首页"> 首页</li>
            <li class="active"><img src="../assets/icons/预定.png" alt="预定"> 预定</li>
            <li><img src="../assets/icons/入住.png" alt="入住"> 入住</li>
            <li><img src="../assets/icons/周流水.png" alt="周流水"> 周流水</li>
            <li><img src="../assets/icons/客户管理.png" alt="客户管理"> 客户管理</li>
            <li><img src="../assets/icons/员工管理.png" alt="员工管理"> 员工管理</li>
            <li><img src="../assets/icons/房间管理.png" alt="房间管理"> 房间管理</li>
          </ul>
        </nav>
      </aside>
  
      <main class="content">
        <header>
          <h3>预定<img src="../assets/icons/箭头.png" alt="首页"></h3>
          <div class="user-info"><img src="../assets/icons/用户照片.png" id="userphoto">用户1213867832425235<img src="../assets/icons/下箭头.png" id="arrow"></div>
        </header>
  
        <!-- 当 showNewReservation 为 false 时显示预定列表 -->
        <section v-if="!showNewReservation" class="reservation-list">
          <div class="actions">
            <button @click="createNewReservation">新建预订单</button>
            <input type="text" placeholder="联系电话" v-model="searchPhone" />
            <select v-model="orderStatus">
              <option value="">预订单状态</option>
              <option value="1">待办理</option>
              <option value="2">已入住</option>
              <option value="3">已取消</option>
            </select>
            <select v-model="roomType">
              <option value="">房间类型</option>
              <option value="luxurybig">豪华大床房</option>
              <option value="big">大床房</option>
              <option value="standard">标间</option>
              <option value="parental">亲子房</option>
            </select>
            <button @click="search">查询</button>
          </div>
  
          <table>
            <thead>
              <tr>
                <th>预订单编号</th>
                <th>身份证号</th>
                <th>房间类型</th>
                <th>入住人数</th>
                <th>预计入住时间</th>
                <th>预计离开时间</th>
                <th>预订单状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td>{{ order.id }}</td>
                <td>{{ order.idCard }}</td>
                <td>{{ order.roomType }}</td>
                <td>{{ order.guestCount }}</td>
                <td>{{ order.checkIn }}</td>
                <td>{{ order.checkOut }}</td>
                <td>{{ order.status }}</td>
                <td>
                  <button @click="handleCheckIn(order.id)">办理入住</button>
                  <button @click="cancelOrder(order.id)">取消订单</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
  
        <!-- 当 showNewReservation 为 true 时显示新建预订单 -->
        <section v-if="showNewReservation" class="new-reservation">
          <header>
            <button @click="closeNewReservation">返回</button>
          </header>
  
          <form @submit.prevent="saveReservation">
            <div class="form-group">
              <h3>新建预订单</h3>
              <label>姓名：</label>
              <input v-model="newReservation.name" type="text" required />
  
              <label>身份证号：</label>
              <input v-model="newReservation.idCard" type="text" required />
  
              <label>性别：</label>
              <select v-model="newReservation.gender" required>
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </div>
  
            <div class="form-group">
              <label>地址：</label>
              <input v-model="newReservation.address" type="text" required />
  
              <label>联系电话：</label>
              <input v-model="newReservation.phone" type="text" required />
  
              <label>会员等级：</label>
              <select v-model="newReservation.memberLevel" required>
                <option value="1">普通</option>
                <option value="2">高级</option>
                <option value="3">VIP</option>
              </select>
            </div>
  
            <div class="form-group">
              <label>房间类型：</label>
              <select v-model="newReservation.roomType" required>
                <option value="luxurybig">豪华大床房</option>
                <option value="big">大床房</option>
                <option value="standard">标间</option>
                <option value="parental">亲子房</option>
              </select>
  
              <label>房间数量：</label>
              <input v-model="newReservation.roomCount" type="number" min="1" required />
  
              <label>预计入住时间：</label>
              <input v-model="newReservation.checkIn" type="datetime-local" required />
  
              <label>预计离开时间：</label>
              <input v-model="newReservation.checkOut" type="datetime-local" required />
            </div>
  
            <button type="submit">确定</button>
          </form>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchPhone: "",
        orderStatus: "",
        roomType: "",
        orders: [], // 示例数据，实际应用中需要从后端获取
        showNewReservation: false, // 控制显示新建预订单的表单
        newReservation: {
          name: "",
          idCard: "",
          gender: "",
          address: "",
          phone: "",
          memberLevel: "",
          roomType: "",
          roomCount: 1,
          checkIn: "",
          checkOut: "",
        },
      };
    },
    methods: {
      search() {
        console.log("Searching...");
        // 这里你可以实现查询逻辑，可能需要向后端发送请求
      },
      createNewReservation() {
        this.showNewReservation = true; // 点击新建预订单时显示新建表单
      },
      closeNewReservation() {
        this.showNewReservation = false; // 关闭新建预订单表单
      },
      saveReservation() {
        console.log("Saving reservation", this.newReservation);
        // 实现保存预订单的逻辑，可能需要向后端发送请求
      },
      handleCheckIn(id) {
        console.log("Checking in order", id);
        // 实现办理入住逻辑
      },
      cancelOrder(id) {
        console.log("Cancelling order", id);
        // 实现取消订单的逻辑
      },
    },
  };
  </script>
  
  <style scoped>
  /* 确保页面填满整个屏幕 */
  html, body, #app {
    margin: 0;
    padding: 0;
    height: 100%;
    width: auto;
    color: #969696;
    display: flex;
    flex-direction: row;
    background: #F5F6FA;
  }
  
  #app {
    display: flex;
    width: 100%;
    height: 100%;
  }
  
  .sidebar {
    width: 15rem;
    background: #fff;
    padding: 0.5rem;
    height: 100%;
    position: fixed; /* 使侧边栏固定 */
    top: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0.1rem 0 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 1.7rem; /* 可选的圆角效果 */
  }

  /* 侧边栏头部图片样式 */
.sidebar-header {
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1.2rem; /* 图片与下面内容之间的间距 */
}

.sidebar-logo {
  width: 80%; /* 设置图片宽度为侧边栏的100% */
  max-width: 14rem; /* 图片的最大宽度 */
  height: auto; /* 保持图片的纵横比例 */
  border-radius: 0.5rem; /* 可选的圆角效果 */
}
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    display: flex;
    align-items: center;
    margin: 1.5rem 0.9rem;
    color: #969696;
    cursor: pointer;

  }

  /* 设置图标的大小 */
  .sidebar li img {
    width: 1.4rem;  /* 图标宽度 */
    height: 1.4rem; /* 图标高度 */
    margin-top: 0.2rem;
    margin-left: 1.2rem;
    margin-right: 0.9rem; /* 图标和文本之间的间隔 */
  }
  
  .sidebar .active {
    font-weight: bold;
    background-color: #D9EDFF;
  }
  
  /* 主内容区域 */
.content {
  margin-left: 3rem; /* 避开侧边栏 */
  background-color: #F5F6FA; /* 主内容区背景色 */
  min-height: 100vh; /* 确保背景色占满页面高度 */
  width: 81rem;
}

  .content header h3{
    display: flex; /* 使用Flexbox布局 */
    flex-direction: row;
    padding: 1rem;
    color: #515050;
    font-size: 1.1rem;
    margin-left: 16rem; /* 确保主内容区不被侧边栏遮挡 */
    width: auto;
    overflow-y: auto; /* 保证内容区域可以滚动 */
  }

    .content header h3 img{
        width: 1.3rem;  /* 图标宽度 */
        height: 1.3rem; /* 图标高度 */
        margin-top: 0.3rem;
        margin-left: 0rem;
        margin-right: 0.3rem; /* 图标和文本之间的间隔 */
    }

  .content header .user-info{
    display: flex;
    align-items: center;
    padding: 0.3rem;
    margin-left: 0rem; /* 确保主内容区不被侧边栏遮挡 */
    width: auto;
    overflow-y: auto; /* 保证内容区域可以滚动 */
    background: #fff;
    border-radius: 1.3rem; /* 可选的圆角效果 */
    box-shadow: 0.2re  0 0.3rem rgba(0, 0, 0, 0.1);
  }

  #userphoto{
        width: 2rem;  /* 图标宽度 */
        height: 2rem; /* 图标高度 */
        margin-top: 0.1rem;
        margin-left: 0.2rem;
        margin-right: 0.7rem; /* 图标和文本之间的间隔 */
  }

  #arrow{
        width: 13px;  /* 图标宽度 */
        height: 13px; /* 图标高度 */
        margin-top: 5px;
        margin-left: 14px;
        margin-right: 10px; /* 图标和文本之间的间隔 */
  }

  .reservation-list{
    margin-left: 250px; /* 确保主内容区不被侧边栏遮挡 */
    margin-right: 250px;
    padding: 40px;
    height: 100%;
    width: 950px;
    overflow-y: auto; /* 保证内容区域可以滚动 */
    background: #fff;
    border-radius: 15px; /* 可选的圆角效果 */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  
  header {
    display: flex;
    justify-content: space-between;
    margin-right: 100px;
    align-items: center;
  }
  
  .reservation-list .actions {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table th,
  table td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  .new-reservation{
    margin-left: 250px; /* 确保主内容区不被侧边栏遮挡 */
    margin-right: 250px;
    padding: 40px;
    height: 100%;
    width: 950px;
    overflow-y: auto; /* 保证内容区域可以滚动 */
    background: #fff;
    border-radius: 15px; /* 可选的圆角效果 */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .new-reservation .form-group {
    display: flex;
    gap: 7px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  
  input[type="text"],
  select,
  input[type="number"],
  input[type="datetime-local"] {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 10px;
    background: #CCEAFF;
    color: #7b7b7b;
    border: none;
    cursor: pointer;
    margin: 5px 0;
    margin-top: 0px;
    border-radius: 12px; /* 可选的圆角效果 */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    width: 380px;
  }

  .new-reservation button{
    width: 80px;
  }
  
  button:hover {
    background: #2d92da;
  }
  </style>
  