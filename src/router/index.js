import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lay-out',
    component: layout
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
