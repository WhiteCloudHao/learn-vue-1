import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AuthenticationForm from '@/component/authForm/AuthenticationForm.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: AuthenticationForm,
    name: 'home',
    children: [
      {
       
        path: '/register',
        component: () => import('@/component/authForm/RegisterForm.vue'),
        name: 'register',
      },
      {
        path: '/login',
        component: () => import('@/component/authForm/LoginForm.vue'),
        name: 'login'
      },
    ]
  },
  {
    path: '/home',
    component: () => import('@/view/HomePage.vue'),
    name: 'homePage'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
