
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import iview from 'iview'
import 'iview/dist/styles/iview.css'



Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(iview)


/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
