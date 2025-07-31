import { config as baseConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    capabilities: [{
        browserName: 'safari',
        platformName: 'macOS',
        'safari.options': {
            // Add Safari-specific options here if needed
        }
    }],

    services: ['safaridriver'],

    // Optional: override or extend other settings
    maxInstances: 1,
    logLevel: 'info',
};
