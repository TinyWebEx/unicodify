/**
 * Helper functions useful for ensuring browser compatibility.
 *
 * @public
 * @module BrowserCompat
 */

/**
 * Returns a value based on what browser this is running in.
 *
 * @private
 * @param  {Object.<string, string>} switchBrowser an object with values to return per browser
 * @returns {Promise<string>}
 */
export async function getBrowserValue(switchBrowser) {
    if (browser.runtime.getBrowserInfo) {
        const browserInfo = await browser.runtime.getBrowserInfo();

        if (browserInfo.name === "Thunderbird") {
            return switchBrowser.thunderbird;
        }
        return switchBrowser.firefox;

    }
    return switchBrowser.chrome;

}
