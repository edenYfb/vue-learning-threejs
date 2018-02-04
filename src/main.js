// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import * as THREE from 'three';
import * as dat from 'dat.gui';

window.dat = dat;
window.t = THREE;

Vue.config.productionTip = false
import store from './store/index.js'
Object.keys(store).forEach(item=>window[item] = store[item]);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
