import Vue from 'vue'
import Router from 'vue-router'
import StudyMember from './components/StudyMember.vue'
import StudyRoom from './components/StudyRoom.vue'
import MyPage from './components/MyPage.vue'
import NewMember from './components/NewMember.vue'
import Login from './components/Login.vue'
import store from './store'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  if (store.state.accessToken) return next()
  next('/login?returnPath=mypage')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'studymember',
      component: StudyMember
    },
    {
      path: '/studyroom',
      name: 'studyroom',
      component: StudyRoom
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
      beforeEnter: requireAuth()
    },
    {
      path: '/join',
      name: 'newmember',
      component: NewMember
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})