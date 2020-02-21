import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { MainPage } from '../pages/app.po';
import { browser } from 'protractor';

let page: MainPage;
// tslint:disable-next-line: deprecation
browser.ignoreSynchronization = true;
Before(() => {
  page = new MainPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the button with a text$/, async () => {
  const text = await page.getButtonText();
  expect(text).equal('Show Alert');
});

When(/^I click the button$/, async () => {
  await page.getButton().click();
});

Then(/^The button's text should change$/, async () => {
  expect(await page.getButtonText()).not.equal('Show Alert');
});


