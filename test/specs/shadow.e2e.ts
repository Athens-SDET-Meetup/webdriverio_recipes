import { expect } from '@wdio/globals'
import ShadowPage from '../pageobjects/shadow.page'

describe('My Shadow application', () => {
    before(async () => {
        await ShadowPage.navigate()
    })
    it('should locate shadow element', async () => {
        await ShadowPage.highlightElement()
        await expect(ShadowPage.shadowElement).toBeExisting()
        await expect(ShadowPage.shadowElement).toHaveText(
            expect.stringContaining('This button is inside a Shadow DOM.'))
    })

    it('should locate shadow element with execute', async () => {
        await ShadowPage.highlightElementExecute()
        await expect(ShadowPage.shadowElement).toBeExisting()
        await expect(ShadowPage.shadowElement).toHaveText(
            expect.stringContaining('This button is inside a Shadow DOM.'))
    })
})
