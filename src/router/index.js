import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import myProject from '@/components/myProject'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/myProject',
      name: 'myProject',
      component: myProject
    },
    {
      path: '/News',
      name: 'News',
      component: News
    }
  ]
})
