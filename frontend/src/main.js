import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

// As we haven't written our backend yet, let's temporarily comment out the Wails runtime parts of frontend/src/main.js
// import * as Wails from '@wailsapp/runtime';

// Wails.Init(() => {
	new Vue({
		render: h => h(App)
	}).$mount('#app');
// });
