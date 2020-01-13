// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Fragment from 'vue-fragment'
import './assets/css/main.scss'
import App from './App'
import router from './router'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.js' //變成 main 的路徑
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Fragment.Plugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
