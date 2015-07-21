(() => {
	'use strict';

	angular
		.module('testApp')
		.config(config);

	function config($urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
	}
}()
)
;
