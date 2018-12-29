import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import collect from '@/components/collect'
import tips from '@/components/tips'
import update from '@/components/update'
Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      name: '/',
      component: index
    },
    {
      path: '/collect',
      name: 'collect',
      component: collect
    },
    {
      path: '/tips',
      name: 'tips',
      component: tips
    },
    {
      path: '/update/:index',
      name: 'update',
      component: update
    },
  ],
  // scrollBehavior (to, from, savedPosition) {
  //   return {x:0,y:0}
  // }
  
})
