import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/AccountLogin/Login'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login/',
      meta: {
        auth:false
      },
      name: '로그인',
      component: Login
    },
    {
      path: '/account',
      meta: {
        auth:true
      },
      name: 'account',
      component: HelloWorld
    }
  ]
})
