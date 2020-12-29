import Vue from 'vue'
import Router from 'vue-router'

import UsersApp from '../components/users-todo/UsersApp.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: UsersApp,
    },
    {
      path: '/banned',
      component: () => import("../components/users-todo/BannedUsers.vue")
    },
    {
      path: '/add',
      component: () => import("../components/users-todo/CreatorNewUser.vue")
    }
  ]
})