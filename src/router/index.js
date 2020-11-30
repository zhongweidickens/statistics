import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/views/layout'

const routes = [
  {
    path: '/login',
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'statistics',
    children: [
      {
        path: 'statistics',
        component: (resolve) => require(['@/views/statistics'], resolve),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
]

const router = new Router({
  // mode: 'history',
  routes
})

// 登陆陆由守卫
router.beforeEach((to, from, next) => {
  next()
})
export default router;