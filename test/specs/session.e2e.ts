import LambdaTestPage from '../pageobjects/lambdatest.page'
import * as dotenv from 'dotenv';

// Load the .env file
dotenv.config();

describe('My Session Management application', () => {
    it('should keep session data', async () => {
        await LambdaTestPage.open();
        await LambdaTestPage.login(process.env.LAMBDATEST_USERNAME!, process.env.LAMBDATEST_PASSWORD!)
        await LambdaTestPage.setSession();
        await LambdaTestPage.myAccount.moveTo();
        await expect(LambdaTestPage.dashboardAccount).toHaveText("Dashboard");
    })
})
