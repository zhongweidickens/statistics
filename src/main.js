import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Element from 'element-ui'
import echarts from 'echarts'
import axios from 'axios'
Vue.use(Element)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
import 'element-ui/lib/theme-chalk/index.css'

import '@/style/index.less'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
