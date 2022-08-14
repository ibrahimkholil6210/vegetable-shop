import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductsView.vue')
  },
  {
    path: '/past-orders',
    name: 'past-orders',
    component: () => import(/* webpackChunkName: "product" */ '../views/PastOrdersView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
