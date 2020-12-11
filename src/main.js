// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTyperPlugin from 'vue-typer'
import vbclass from 'vue-body-class'
import VueTimeline from "@growthbunker/vuetimeline";


Vue.config.productionTip = false
Vue.use(VueTyperPlugin)
Vue.use(vbclass,router)
Vue.use(VueTimeline, { theme: 'dark' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
})
