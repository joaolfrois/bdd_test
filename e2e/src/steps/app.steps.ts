import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { MainPage } from '../pages/app.po';

let page: MainPage;

Before(() => {
  page = new MainPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the button with a text$/, async () => {
  expect(await page.getButtonText()).equal('Show Alert');
});
