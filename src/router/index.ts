
import LoginPage from '@/modules/auth/pages/LoginPage.vue';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/',
    name: 'landing',
    component:()=> import ('@/modules/landing/layouts/LandingLayouts.vue'),
    children:[
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
        path: '/pokemon/:id',
        name: 'pokemon',
        props:(route)=>{
           const id = Number(route.params.id);
           return isNaN(id)? {id:1}: {id}
        },
        component: () => import('@/modules/pokemons/pages/PokemonsPage.vue'),
      },
    ],
   }
    ,
    // auth
    {
      path: '/auth',
      redirect: {name:'login'},
      name: 'auth',
      component: () => import('@/modules/auth/layouts/AuthLayouts.vue'),
      children:[
        {
          path:'login',
          name:'login',
          component: ()=>import ('@/modules/auth/pages/LoginPage.vue')
        },
        {
          path:'register',
          name:'register',
          component: ()=>import ('@/modules/auth/pages/RegisterPage.vue')
        

        }
      ]
    },
    { 
      path: '/:pathMatch(.*)*', 
      component: NotFound404 
    },
  ],
});
export default router;
