import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueQrcodeReader from "vue-qrcode-reader";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
Vue.use(VueQrcodeReader);
