# Unicodify – Text transformer <img align="right" height="425" width="365" src="assets/screencasts/example.gif">

[![Mozilla Add-on version](https://img.shields.io/amo/v/unicodify-text-transformer.svg)](https://addons.mozilla.org/firefox/addon/unicodify-text-transformer/?src=external-github-shield-downloads)  
[![Mozilla Add-on downloads](https://img.shields.io/amo/d/unicodify-text-transformer.svg)](https://addons.mozilla.org/firefox/addon/unicodify-text-transformer/?src=external-github-shield-downloads)
[![Mozilla Add-on users](https://img.shields.io/amo/users/unicodify-text-transformer.svg)](https://addons.mozilla.org/firefox/addon/unicodify-text-transformer/)
[![Mozilla Add-on stars](https://img.shields.io/amo/stars/unicodify-text-transformer.svg)](https://addons.mozilla.org/firefox/addon/unicodify-text-transformer/reviews/)

<img height="200" width="200" src="assets/header.svg">

This is a (Firefox and Thunderbird) add-on (WebExtension) that allows you to autocorrect common text sequences and convert text characters to a look like a special font.
For instance, it converts quotes like `"these"` to `“these”`, which are typographically correct.

Additionally, you can convert text into more than 20 different font styles and casing changes.
You can enable and disable any features in the options and adjust more settings regarding the behavior of the add-on.

This extension only works with modern Firefox and Thunderbird v78 or higher.

## Download

**[![Get it for Firefox!](https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png)](https://addons.mozilla.org/firefox/addon/unicodify-text-transformer/?src=external-github-download)**

## In action…

![what shows this screencast description in alt text](assets/screencasts/someThing.gif)

See:
* [More screencasts](assets/screencasts)
* [More screenshots](assets/screenshots)

## Features
* Unicode autocorrection as you type:
    * Autocorrect [Unicode symbols](https://en.wikipedia.org/wiki/Miscellaneous_Symbols) (i.e. hyphens `--` with –, fractions `1/4` with ¼, etc.). Supports more than 85 symbols.
    * Use Unicode smart quotes ('single quotes' with ‘Unicode single quotes’ and "double quotes" with “Unicode double quotes”)
    * Convert [fractions](https://en.wikipedia.org/wiki/Number_Forms) and [mathematical constants](https://en.wikipedia.org/wiki/Mathematical_constant) to Unicode characters (i.e. `1234.25` with 1234¼, etc.). Supports all Unicode fraction characters, Pi and e constants.
    * Supports undoing autocorrections
* Context menu with selected/highlighted text:
    * [Unicode font](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) conversion (i.e. ꜱᴍᴀʟʟ ᴄᴀᴘꜱ, 𝒮𝒸𝓇𝒾𝓅𝓉, 𝔉𝔯𝔞𝔨𝔱𝔲𝔯, etc.). Supports more than 20 fonts.
    * Change [casing](https://en.wikipedia.org/wiki/Letter_case#Case_styles) (i.e. UPPER CASE, lower case, tOGGLE, cASE, etc.). Supports all locales.
    * Optionally show a live preview.
    * Useful on websites that do not support changing the font or text formatting.
* Support websites as best as possible by providing website-specific possibles, if needed. ([if there is a problem, please report it](https://github.com/rugk/unicodify/issues))
* Very fast, even when typing on large documents.
* Supports the light/dark mode of your system automatically.
* Settings automatically synced between all browser instances and devices (Firefox and Chrome only).
* Follows the [Firefox](https://design.firefox.com/photon) and [Thunderbird](https://style.thunderbird.net/) Photon Design.
* Puts your privacy first and does not send data anywhere.
* Compatible with Firefox for Android.
* Translated into several languages. [Contribute your own language!](./CONTRIBUTING.md#Translations)
* Settings can be managed by your administrator.
