import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
    component: () => import('../views/Home.vue')
	},
	{
		path: '/father',
		name: 'father',
    component: () => import('../views/father.vue')
	},
	{
		path: '/player',
		name: 'player',
		component: () => import('../views/player.vue')
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('../views/test.vue')
	},
	{
		path: '/routerParams/:a/:b?/:c',
		name: 'routerParams',
		component: () => import('../views/routerParams.vue')
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/testlazycascader',
		name: 'testlazycascader',
		component: () => import('../views/testlazycascader.vue')
	},
  {
    path:'/pushsameroute/:time?',
    name:'pushsameroute',
    component: () => import('../views/pushsameroute.vue')
  },
  {
    path:'/dialog',
    name:'dialog',
    component:()=>import('../views/dialog.vue')
  }
]

const router = new VueRouter({
	routes
})

export default router
