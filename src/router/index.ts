import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AuthenticationForm from '@/component/LoginForm/AuthenticationForm.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: AuthenticationForm,
    name: 'home',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
