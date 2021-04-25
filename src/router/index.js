import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Yoga from '../views/Yoga.vue'
import Login from '@/views/Login.vue'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/workouts',
      name: 'Yoga', 
      component: Yoga
  },
  {
    path: '/Login',
    name: 'Login', 
    component: Login
},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]})


router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});



export default router
