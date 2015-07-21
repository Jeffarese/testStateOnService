(() => {
	'use strict';

	class LoginCtrl {
		constructor() {
			let vm = this;
			vm.ctrlName = 'LoginCtrl';
		}
	}

	/**
	 * @ngdoc object
	 * @name login.controller:LoginCtrl
	 *
	 * @description
	 *
	 */
	angular
		.module('login')
		.controller('LoginCtrl', LoginCtrl);
}()
)
;
