export default class AbstractPage {
  open(path: string) {
    return browser.url(path);
  }

  openNewWindow(url: string) {
    browser.newWindow(url);
  }

  private timing: number = 110000;
  private tries: number = 0;

  pause(milliseconds: number) {
    browser.pause(milliseconds);
  }

  getTitle() {
    this.waitForPageLoaded();
    return browser.getTitle();
  }

  isClickable(selector: string) {
    this.waitForPageLoaded();
    try {
      return $(selector).waitForClickable({
        reverse: false,
        timeout: 5000,
        interval: 5,
      });
    } catch (e) {
      console.log(
        e + " Element " + selector + " is not clickable, continue test ...",
      );
      return false;
    }
  }

  click(locator: string) {
    this.waitForPageLoaded();
    browser.setTimeout({ implicit: this.timing });
    try {
      let element = $(locator);
      element.waitForExist({ timeout: this.timing, interval: this.tries });
      element.waitForDisplayed({ timeout: this.timing, interval: this.tries });
      element.waitForClickable({ timeout: this.timing, interval: this.tries });
      element.click();
      console.log("Element " + locator + " is clicked");
    } catch (e) {
      console.log(e + " Element " + locator + " is not clicked");
    }
  }

  type(locator: string, text: string, log: boolean = true) {
    this.waitForPageLoaded();
    browser.setTimeout({ implicit: this.timing });
    try {
      let element = $(locator);
      element.waitForExist({ timeout: this.timing, interval: this.tries });
      element.waitForDisplayed({ timeout: this.timing, interval: this.tries });
      element.waitForClickable({ timeout: this.timing, interval: this.tries });
      element.setValue(text);
      if (log === true)
        console.log("Typig " + text + " into element" + locator);
    } catch (e) {
      console.log(e + "Could not type " + text + "into element" + locator);
    }
    return text;
  }

  waitForPageLoaded() {
    try {
      browser.setTimeout({ pageLoad: this.timing });
      const state = browser.execute("return document.readyState");
      browser.waitUntil(() => state === "complete", {
        timeout: this.timing,
        interval: this.tries,
      });
    } catch (e) {
      console.log(
        e +
          " Page is not loaded completely or timeout is reached " +
          this.timing +
          "secs ... ",
      );
    }
  }

  waitForUrlToBe(url: string) {
    browser.setTimeout({ implicit: this.timing, pageLoad: this.timing });
    browser.waitUntil(() => browser.getUrl() === url, {
      timeout: this.timing,
      interval: this.tries,
    });
  }

  findElement(selector: string) {
    this.waitForPageLoaded();
    let elem;
    try {
      elem = $(selector);
    } catch (e) {
      console.log(e + " " + selector + " element not found");
    }
    return elem;
  }

  isDisplayed(selector: string) {
    this.waitForPageLoaded();
    let elem = this.findElement(selector);
    try {
      let status = elem.waitForClickable({
        reverse: false,
        timeout: 5000,
        interval: 3,
      });
      // console.log("status = " + status);
      if (elem.isClickable() && status === true) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(
        e + " Element " + selector + " is not clickable, continue test ...",
      );
      return false;
    }
  }

  select(selector: string, visibleText: string) {
    this.waitForPageLoaded();
    try {
      let element = $(selector);
      element.selectByVisibleText(visibleText);
      console.log(
        "Element " + selector + " is selected by text " + visibleText,
      );
    } catch (e) {
      console.log(
        e + "Element " + selector + " is not selected by " + visibleText,
      );
    }
  }
}
