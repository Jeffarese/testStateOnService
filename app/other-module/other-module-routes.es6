(() => {
	'use strict';

	angular
		.module('otherModule')
		.config(config);

	function config($stateProvider) {
		$stateProvider
			.state('otherModule', {
				url: '/other-module',
				templateUrl: 'other-module/other-module.tpl.html',
				controller: 'OtherModuleCtrl',
				controllerAs: 'otherModule'
			});
	}
}()
)
;
