import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Home from '../views/ReserveEmp.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 其他路由配置
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
