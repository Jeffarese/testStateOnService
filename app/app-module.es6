(() => {
	'use strict';

	/* @ngdoc object
	 * @name testApp
	 * @description
	 *
	 */
	angular
		.module('testApp', [
			'ui.router',
			'home',
			'login',
			'otherModule'
		]);
}()
)
;
