import Vue from 'vue'
import VueRouter from 'vue-router'

//测试案例
import Header from '../testing/Header.vue';
import Button from '../testing/Button.vue';
import Field from '../testing/Field.vue';
import Navbar from '../testing/Navbar.vue';
import Cart from '../testing/Cart.vue';
import Me from '../testing/Me.vue';
import Swiper from '../testing/Swiper.vue';
import Infinite from '../testing/Infinite.vue';
//项目实践
import Home from '../views/Home.vue'
import Article from '../views/Article.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter)
const routes = [
  {
    path:'/infinite',
    component:Infinite
  },
  {
    path:'/cart',
    component:Cart
  },

  {
    path:'/swiper',
    component:Swiper
  },
  {
    path:'/me',
    component:Me
  },
  {
    path:'/navbar',
    component:Navbar
  },
  {
    path:'/header',
    component:Header
  },
  {
    path:'/button' ,
    component:Button
  },
  {
    path:'/field',
    component:Field
  },
  {
    path: '/',
    component: Home
  },
  {
    // 后面要改的
    path:'/article/:id',
    component:Article
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
