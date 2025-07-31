import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('My Login application', () => {
    it('🔧should pause after login', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        browser.pause(5000); // Waits 5 seconds regardless of app state

        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })

    it('🔧should waitFor after login', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')

        //This waits up to 5 seconds, but continues as soon as the element appears — faster and more reliable.
        await SecurePage.flashAlert.waitForDisplayed({ timeout: 5000 });

        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})
