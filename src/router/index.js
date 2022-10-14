import Vue from 'vue'
import Router from 'vue-router'
import Encoder from '@/components/Encoder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: 'hash',
      path: '/',
      name: 'Encoder',
      component: Encoder
    }
  ]
})
