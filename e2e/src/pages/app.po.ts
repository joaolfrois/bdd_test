import { browser, by, element } from 'protractor';

export class MainPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getButton() {
    return element(by.css('button'));
  }

  getButtonText() {
    return element(by.css('button')).getText() as Promise<string>;
  }
}
