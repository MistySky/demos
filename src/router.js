module.exports = function(router){
	// router.transitionOnLoad = true;
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
	});
};
