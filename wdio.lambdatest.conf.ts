import { config as baseConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,

    services: [
        ['lambdatest', {
            tunnel: false
        }],
    ],

    // Optional: override or extend other settings
    maxInstances: 1,
    logLevel: 'info',
};
