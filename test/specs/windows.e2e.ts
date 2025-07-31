describe('Multiple Windows Test', () => {
    it('should switch to a new window and verify content', async () => {
        // Navigate to the test site
        await browser.url('https://the-internet.herokuapp.com/windows');

        // Store the current window handle
        const originalWindow = await browser.getWindowHandle();

        // Click the link that opens a new window
        await $('=Click Here').click();

        // Wait for the new window to open
        await browser.waitUntil(async () => {
            const handles = await browser.getWindowHandles();
            return handles.length > 1;
        }, {
            timeout: 5000,
            timeoutMsg: 'Expected a new window to open'
        });

        // Get all window handles
        const allWindows = await browser.getWindowHandles();

        // Switch to the new window
        for (const handle of allWindows) {
            if (handle !== originalWindow) {
                await browser.switchToWindow(handle);
                break;
            }
        }

        // Verify the new window content
        const header = await $('h3').getText();
        expect(header).toEqual('New Window');

        // Close the new window
        await browser.closeWindow();

        // Switch back to the original window
        await browser.switchToWindow(originalWindow);
    });
});
