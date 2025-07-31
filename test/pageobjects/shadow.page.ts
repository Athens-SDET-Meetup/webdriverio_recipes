import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShadowPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get shadowRootElement() {
        return $('#shadow-host');
    }

    public get shadowElement() {
        return this.shadowRootElement.shadow$('#my-btn');
    }


    /**
     * a method to highlight shadow element
     */
    public async highlightElement() {
        await this.shadowElement.click();
    }

    /**
    * a method to highlight shadow element
    */
    public async highlightElementExecute() {
        const shadowInput = await browser.execute(() => {
            const shadowHost = document.querySelector('#shadow-host')
            const shadowRoot = shadowHost?.shadowRoot
            return shadowRoot?.querySelector('#my-btn');
        });
        if (shadowInput) {
            await browser.execute((el) => (el as HTMLElement).click(), shadowInput);
        } else {
            throw new Error('Shadow input element not found');
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public navigate() {
        return browser.url(`https://practice.expandtesting.com/shadowdom`);
    }
}

export default new ShadowPage();
