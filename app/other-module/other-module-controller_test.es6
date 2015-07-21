/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('OtherModuleCtrl', () => {
	let ctrl;

	beforeEach(module('otherModule'));

	beforeEach(inject(($rootScope, $controller) => {
		ctrl = $controller('OtherModuleCtrl');
	}));

	it('should have ctrlName as OtherModuleCtrl', () => {
		expect(ctrl.ctrlName).toEqual('OtherModuleCtrl');
	});
});
