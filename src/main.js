import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue)


import routes from './router/routes';
import './quasar'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

