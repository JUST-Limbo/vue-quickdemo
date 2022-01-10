import Vue from 'vue'
import Toast from './toast.vue'

console.log(Toast)
const ToastConstructor = Vue.extend(Toast)
console.log(ToastConstructor)

function showToast(text, dur=2000) {
	const toastDom = new ToastConstructor({
		el: document.createElement('div'),
		data() {
			return {
				show: true,
				text: '弹窗内容'
			}
		}
	})

  console.log(toastDom)
  document.body.appendChild(toastDom.$el)

	setTimeout(() => (toastDom.show = false), dur)
}

function toastReg(){
  Vue.prototype.$toast = showToast
}

export default toastReg
