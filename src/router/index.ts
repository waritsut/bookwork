import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookDetail from '@/modules/books/components/book-detail.vue'
import BookEdit from '@/modules/books/components/book-edit.vue'
import BookDelete from '@/modules/books/components/book-delete.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/modules/books/components/book-create.vue')
  },
  {
    path: '/books/:id',
    name: 'book-detail',
    component: BookDetail
  },
  {
    path: '/books/edit/:id',
    name: 'book-edit',
    component: BookEdit
  },
  {
    path: '/books/delete/:id',
    name: 'book-delete',
    component: BookDelete
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
