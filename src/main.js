import Vue from 'vue';
import App from './App.vue';

import './plugins/boostrap';
import './plugins/vue-instantsearch';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
