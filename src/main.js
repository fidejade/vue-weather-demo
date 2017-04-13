// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//导入vue
import VueRouter from 'vue-router'//导入路由
import vueResource from 'vue-resource'//导入vue http请求模块
import Vuex from 'vuex' //导入vue状态管理模块


//引入静态资源
require("./assets/css/animate.css")
require("./assets/css/style.css")
//引入组件
import App from './App'
import BasicInfo from './components/BasicInfo.vue'
import ForecastInfo from './components/ForecastInfo.vue'
//定义vue路由/http请求//状态管理
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.use(Vuex);
// Vue.config.productionTip = false
/* eslint-disable no-new */
//Vuex默认数据
const store=new Vuex.Store({
  state:{
    defUrl: 'https://free-api.heweather.com/v5',
    key: 'd88adc07ebae43c481b1462ad4a5c086',
    forecast: null,
    now: null,
    hourly: null,
    suggestion: null,
    basic: null,
    city: null
  },
  mutations:{},
  getters:{},
  actions:{}
})
//vue路由数据
const routes=[
  {
    path:'/',
    name:'index',
    component:App,
    redirect:'/forecastInfo',
    children:[
      {
        path:'basicInfo',
        component:BasicInfo
      },
      {
        path:'forecastInfo',
        component:ForecastInfo
      },
    ]
  },{
  path:'*',
    redirect:'/'
  }
];
const router=new VueRouter({
  routes
})
const routerApp=new Vue({
  router,
  store

}).$mount("#app")
//导出路由
export default routerApp
