import LambdaTestPage from '../pageobjects/lambdatest.page'

describe('My Wait application', () => {
    it('should wait explicitly', async () => {
        await LambdaTestPage.open()
        await LambdaTestPage.myAccount.moveTo();
        await LambdaTestPage.waitForText("#widget-navbar-217834 a[href='https://ecommerce-playground.lambdatest.io/index.php?route=account/login']", "Login");
    })

    it('should wait implicitly', async () => {
        await LambdaTestPage.open()
        await LambdaTestPage.myAccount.click();
        await browser.setTimeout({ implicit: 5000 }); // Waiting for 5 seconds
    })
})
