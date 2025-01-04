import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign_in',
      component: SignInView,
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignUpView
    },
  ],
})

export default router
