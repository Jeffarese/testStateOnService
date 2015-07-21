(() => {
	'use strict';

	class HomeCtrl {
		constructor(UserManager) {
			let vm = this;
			vm.UserManager = UserManager;
		}
	}

	/**
	 * @ngdoc object
	 * @name home.controller:HomeCtrl
	 *
	 * @description
	 *
	 */
	angular
		.module('home')
		.controller('HomeCtrl', HomeCtrl);
	HomeCtrl.$inject = ['UserManager'];
}()
)
;
