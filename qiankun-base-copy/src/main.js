import Vue from 'vue'
import App from './App.vue'
import router from "./routes";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueRouter from "vue-router";
import startQiankun from "./micro";

Vue.config.productionTip = false;

Vue.use(ViewUI);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

startQiankun();
