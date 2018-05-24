import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

/* eslint-disable */
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
