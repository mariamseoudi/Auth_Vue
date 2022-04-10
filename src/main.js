/* eslint-disable */ 
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Users from './components/Users';
import Signup from './components/Signup';
import Login from './components/Login';
Vue.use(VueRouter);
const routes = [
  { path: '/', component: Signup },
  { path: '/Users', component: Users},
  { path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  el:'#app',
  router,
  render: h => {
    return h(App)
  }
});