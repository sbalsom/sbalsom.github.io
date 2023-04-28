import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PoetryView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/poetry',
      name: 'poetry',
      component: () => import('../views/PoetryView.vue')
    },
    {
      path: '/poem',
      name: 'poem',
      component: () => import('../views/PoemView.vue')
    }
  ]
})

export default router
