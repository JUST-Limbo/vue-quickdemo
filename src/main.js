import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
import hls from 'videojs-contrib-hls'
//  const hls = require('videojs-contrib-hls')
Vue.use(hls)

import toastReg from './components/toast/toast'
Vue.use(toastReg)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
