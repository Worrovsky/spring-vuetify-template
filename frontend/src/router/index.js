import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeDisplay from '../components/HomeDisplay'
import SettingsDisplay from '../components/SettingsDisplay'
import AboutDisplay from '../components/AboutDisplay'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeDisplay,
  },

  {
    path: '/settings',
    name: 'settings',
    component: SettingsDisplay,
  },

  {
    path: '/about',
    name: 'about',
    component: AboutDisplay,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
