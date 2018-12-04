import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import VeeValidate from 'vee-validate';  // Add this
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)
Vue.use(VeeValidate); 
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$hostname = 'http://192.168.0.56:8002/v1'

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
