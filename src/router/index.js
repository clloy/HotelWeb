import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReserveEmp from '../views/ReserveEmp.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/',
    name:'ReserveEmp',
    component: ReserveEmp
  }
  // 其他路由配置
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
