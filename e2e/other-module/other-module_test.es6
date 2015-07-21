/*global describe, beforeEach, it, browser, expect */
'use strict';

import OtherModulePage from './other-module.po';

describe('Other module page', () => {
  let otherModulePage;

  beforeEach(() => {
    otherModulePage = new OtherModulePage();
    browser.get('/#/other-module');
  });

  it('should say OtherModuleCtrl', () => {
    expect(otherModulePage.heading.getText()).toEqual('otherModule');
    expect(otherModulePage.text.getText()).toEqual('OtherModuleCtrl');
  });
});
