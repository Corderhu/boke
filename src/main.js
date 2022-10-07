import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/common.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
