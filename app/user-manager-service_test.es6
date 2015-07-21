/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UserManager', () => {
	let service;

	beforeEach(module('testApp'));

	beforeEach(inject((UserManager) => {
		service = UserManager;
	}));

	it('should equal UserManager', () => {
		expect(service.get()).toEqual('UserManager');
	});
});
