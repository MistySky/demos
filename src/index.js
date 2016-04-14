import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './views/app'


//Router
Vue.use(VueRouter)
const router = new VueRouter({
	history: true
})
router.map({
	'/': {
		component: require('./views/index'),
	},
	'/page1': {
		component: require('./views/page1')
	},
	'/page2': {
		component: require('./views/page2')
	},
	'/page3': {
		component: require('./views/page3')
	},
})

router.start(app, '#app')
