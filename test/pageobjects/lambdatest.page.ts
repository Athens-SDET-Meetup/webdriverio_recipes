import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LambdaTestPage extends Page {

    /**
     * define selectors using getter methods
     */
    public get myAccount() {
        return $("#widget-navbar-217834 a[href='https://ecommerce-playground.lambdatest.io/index.php?route=account/account']");
    }

    public get loginAccount() {
        return $("#widget-navbar-217834 a[href='https://ecommerce-playground.lambdatest.io/index.php?route=account/login']");
    }

    public get dashboardAccount() {
        return $("(//a[@href='https://ecommerce-playground.lambdatest.io/index.php?route=account/account'])[3]");
    }

    public get inputUsername() {
        return $('input[name=email]');
    }

    public get inputPassword() {
        return $('input[name=password]');
    }

    public get btnSubmit() {
        return $('input[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string) {
        await this.myAccount.moveTo();
        await this.loginAccount.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * a method to open a new window and apply session to it
     */
    public async setSession() {
        const cookies = await browser.getCookies();
        await browser.newWindow('https://ecommerce-playground.lambdatest.io/');
        for (const cookie of cookies) {
            if (typeof cookie.expiry === 'undefined') {
                await browser.setCookies(cookie);
            }
        }
        await browser.refresh();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async open() {
        await browser.url('https://ecommerce-playground.lambdatest.io/');
    }

    /**
      * Waits for an element to contain specific text.
      * @param {string} selector - The selector of the element.
      * @param {string} expectedText - The text to wait for.
      * @param {number} [timeout=5000] - Optional timeout in milliseconds.
      */
    public async waitForText(selector: string, expectedText: string, timeout = 5000) {
        await browser.waitUntil(
            async () => (await $(selector).getText()).includes(expectedText),
            {
                timeout,
                timeoutMsg: `Expected text "${expectedText}" not found in element ${selector} after ${timeout}ms`,
            }
        );
    }
}

export default new LambdaTestPage();
