import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeaturesView from '@/views/FeaturesView.vue'
import TeamView from '@/views/TeamView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/',
      name: 'features',
      component: FeaturesView,
    },
    {
      path: '/comunicate',
      name: 'comunicate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComunicateView.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestimonialsView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
  ],
})

export default router
