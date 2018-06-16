/*路由器模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Welfare from '../pages/Welfare/Welfare.vue'
import Cart from '../pages/Cart/Cart.vue'
import Person from '../pages/Person/Person.vue'


//声明使用插件
Vue.use(VueRouter)


export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/welfare',
      component:Welfare
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

