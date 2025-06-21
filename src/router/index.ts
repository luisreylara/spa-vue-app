
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/modules/landing/pages/PricingPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modules/landing/pages/ContactPage.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/modules/auth/pages/LoginPage.vue'),
    },
    
  ],
});
export default router;
