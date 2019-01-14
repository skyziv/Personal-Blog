import Vue from 'vue'
import Router from 'vue-router'
import contact from '../components/contact'
import show from '../components/show'
import home from '../components/home'

Vue.use(Router)


export default new Router({
  routes: [
     {path:'/', name: 'home', component: home},
     {path:'/contact', name: 'contact', component: contact},
     {path:'/show', name: 'show', component: show}
  ],
  mode: 'history'
})
