import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path:'/postcard/:id',
        name: 'postcard',
      component: () => import('../views/postcard.vue')
      }
    ]
  },
  {
    path: '/Aboutpostcards',
    name: 'Aboutpostcards',
    component: () => import('../views/Aboutpostcards.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
