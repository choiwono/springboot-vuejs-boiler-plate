import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
//Vue.prototype.$http = axios
Vue.use(BootstrapVue)
Vue.use(VueAxios,axios)
Vue.axios.defaults.baseURL = '/api/'
Vue.router = router

Vue.use(require('@websanova/vue-auth'),{
  refreshData: {
    enable:false,
    interval: 0
  },
  auth: require('@websanova/vue-auth/drivers/auth/bearer'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    let index = error.response.data.indexOf('InvalidToken')
    if((error.response.status === 401) && (index > -1)){
        console.log('error')
        Vue.auth.options.logoutProcess.call(Vue.auth, {},{})
    }
    return Promise.reject(error)
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
