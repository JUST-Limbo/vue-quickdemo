import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test from '../views/test.vue'
import father from '../views/father.vue'
import player from '../views/player.vue'
import routerParams from '../views/routerParams.vue'
import testlazycascader from '../views/testlazycascader.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/father',
		name: 'father',
		component: father
	},
	{
		path: '/player',
		name: 'player',
		component: player
	},
	{
		path: '/test',
		name: 'test',
		component: test
	},
	{
		path: '/routerParams/:a/:b?/:c',
		name: 'routerParams',
		component: routerParams
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
		component: testlazycascader
	}
]

const router = new VueRouter({
	routes
})

export default router
