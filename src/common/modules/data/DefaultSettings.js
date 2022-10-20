/**
 * Specifies the default settings of the add-on.
 *
 * @module data/DefaultSettings
 */

/**
 * An object of all default settings.
 *
 * @private
 * @const
 * @type {Object}
 */
const defaultSettings = {
    randomTips: {
        tips: {}
    },
    autocorrect: {
        enabled: false,
        autocorrectSymbols: true,
        autocorrectUnicodeQuotes: true,
        autocorrectUnicodeFracts: true
    },
    unicodeFont: {
        changeFont: true,
        changeCase: true,
        showReadableText: false,
        livePreview: false
    },
    notifications: {
        send: true
    }
};

// freeze the inner objects, this is strongly recommend
Object.values(defaultSettings).map(Object.freeze);

/**
 * Export the default settings to be used.
 *
 * @public
 * @const
 * @type {Object}
 */
export const DEFAULT_SETTINGS = Object.freeze(defaultSettings);
