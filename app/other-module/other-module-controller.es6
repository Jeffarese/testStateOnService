(() => {
	'use strict';

	class OtherModuleCtrl {
		constructor() {
			let vm = this;
			vm.ctrlName = 'OtherModuleCtrl';
		}
	}

	/**
	 * @ngdoc object
	 * @name otherModule.controller:OtherModuleCtrl
	 *
	 * @description
	 *
	 */
	angular
		.module('otherModule')
		.controller('OtherModuleCtrl', OtherModuleCtrl);
}()
)
;
