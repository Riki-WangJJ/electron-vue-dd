import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'home',
      component: _ => import('./home/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: _ => import('./home/index.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
