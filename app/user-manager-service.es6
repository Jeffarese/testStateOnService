(() => {
	'use strict';

	class UserManager {
		constructor($state) {
			this.isLoggedIn = false;
			this.$state = $state;
			this.checkLogin();
		}


		checkLogin() {
			if (!this.isLoggedIn) {
				console.log('Going to login');
				this.$state.go('login')
			}
		}
	}

	/**
	 * @ngdoc service
	 * @name testApp.service:UserManager
	 *
	 * @description
	 *
	 */
	angular
		.module('testApp')
		.service('UserManager', UserManager);
	UserManager.$inject = ['$state'];
}()
)
;
