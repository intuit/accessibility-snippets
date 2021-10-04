<div align="center">
  <img src="./media/hand-intuit-logo.png" alt="Accessibility snippets logo" width="100"/>
  <h1>accessibility-snippets</h1>
  
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

  <p>VScode Snippets created to help developers write accessible code.</p>
</div>

## Features

### CSS snippet

| Snippet        |  Description  | Note  |
| :-------------| :---------------|:---------------|
| reduced motion     |  Adds a reduced motion snippet with prefix `transition` | N/A|
| less-contrast    |  Adds less contrast media snippet with prefix `less-contrast` | 🚨 Safari Only Queries  🚨  |
| more-contrast    |  Adds more contrast media snippet with prefix `more-contrast` | 🚨 Safari Only Queries  🚨  |
| dark-color-scheme      |  Adds dark prefers-color-scheme snippet with prefix `darkColorScheme` | N/A |
| light-color-scheme     |  Adds light prefers-color-scheme snippet with prefix `lightColorScheme`| N/A |

### React Aria Snippets

| Snippet        | Role           | Description  |
| :-------------:  |:-------------: | :------------|
| **AlertAria**      | role='alert' | Add `role='alert'` to a node containing an alert message. Setting role='alert' automatically sets aria-live="assertive" and aria-atomic="true". |
| **AlertDialogAria**      | role='alertDialog' | Add `role='alertDialog'` when an alert is urgent and demands immediate attention. Only use alertDialog when the alert message has associated interactive controls. |
| **ArticleAria**      | role='article' | Add `role='article'` to a node that can easily stand on its own separate from the main content of the page. An example is a newspaper article or a forum post. Use `aria-posinset` to indicate of the article within the feed. Use `aria-setsize` to indicate how many articles are in the feed. |
| **BannerAria**     | role='banner'      |   Add `role='banner'` to define a banner landmark to assistive technologies. A banner landmark is informative content frequently placed at the beginning of the page. |
| **ButtonAria** | role='button'      |    Add `role='button'` on a clickable element that triggers a response when activated by a user. Add `aria-pressed` when a button can toggle 'on' or 'off'. Add `aria-expanded` if a button triggers another node to expand or collapse. |
| **CheckboxAria** | role='checkbox'      |    Add `role='checkbox'` to a checkable interactive control. Add `aria-checked` to indicate the state of the checkbox.|
| **ComboboxAria** | role='combobox'      |    Add `role='combobox'` to a composite widget containing a single-line textbox and another element such as listbox. Add `aria-haspopup` if the combobox contains a popup. Add `aria-expanded` if the combobox expands or collapses a node. Add `aria-owns` to indicate which elements the combobox owns.|
| **DialogAria** | role='dialog'| Add `role='dialog'` to a window separate from the rest of the webpage like a modal.|
| **DocumentAria** | role='document'      |    Add `role='document'` to application or other interactive widget role to switch to browse or read mode. Add `aria-expanded` to indicate whether the document is currently expanded or collapsed if the document element is collapsible.|
| **FeedAria** | role='feed'      |    Add `role='feed'` to a dynamic list of articles. Add `aria-busy` if articles are being loaded or have been removed from the feed.|
| **FigureAria** | role='figure' | Add `role='figure'` to identify a figure inside page content where appropriate semantics do not already exist. Add `aria-labelledby` when the text is a concise label. Add `aria-describedby` when the text is a longer description. Add `aria-label` if there is no element containing text that could serve as a label.|
| **ImageAria** | role='img'      |    Add `role='img'` to identify a set of content as a single image that has multiple elements. Elements can be images, text, emojis or other content that delivers information visually. Add `aria-label` for descriptive alt text for the image. `aria-label` can be replaced with `aria-labelledby` if descriptive text is provide in another element within the role.|
| **LinkAria** | role='link'      |    Add `role='link'` to elements that act as hyperlinks. Ensure the link can be navigated to via the keyboard. If the link role is added to an image add `alt` text. Add an `aria-label` if the link does not provide a descriptive text label.|
| **MeterAria** | role='meter' | Add `role='meter'` to identify an element being used as a meter. A meter is a graphical display of a numeric value within a defined range. Each element must have either an `aria-label` or `aria-labelledby`. Add `aria-labelledby` to point to an element with text that describes the meter. Add `aria-valuenow` to indicate the current value of the meter, which is between the `aria-valuemin` and `aria-valuemax`. Add `aria-valuetext` to make the meter value understandable. Add `aria-valuemin` to indicate the minimum value, which is less than `aria-valuemax`. Add `aria-valuemax` to indicate the maximum value, which is greater than `aria-valuemin`.|
| **LoadingAria** | role='status'      |    Add `role='status'` and `aria-live='polite'` to element wrapping a loading spinner or indicator. The live region must be present in the DOM before the loading indicator has rendered. Add `aria-label='Loading'` to loading indicator if no other text element or content is passed.|
| **RadioAria** | role='radio'      |    Add `role='radio'` to a checkable interactive control. Use radio in place of checkbox if only one item in a group can be checked. Add `aria-checked` to indicate the state of the checkbox.|
| **SeperatorAria** | role='separator' | Add `role='separator'` to a HR tag.Add `aria-valuemin` to indicate the minimum value. Add `aria-valuemax` to indicate the maximum value. Add `aria-valuenow` to indicate the current value. There are set default values 0. 100 and 50 respectively and can be modified. Setting `aria-seperator` automatically sets aria-orientation = 'horizontal'.|
| **SearchboxAria** | role='searchbox'      |    Add `role='searchbox'` to a textbox intended for specifying search criteria. Add `aria-activedescendant` to indicate the current active child (for example if the textbox has an autocomplete popup and the focus changes to the popup). Add `aria-autocomplete` to indicate if the textbox will display a list of suggestions. Use `aria-multiline` if the textbox can contain multiple lines of input. Add `aria-placeholder` to give users a hint of what the input should contain. Add `aria-readonly` if the user cannot modify the value. Add `aria-required` if the field is required.|
| **SliderAria** | role='slider'      |    Add `role='slider'` to allow users to select from a certain range. Add `aria-orientation` to indicate what direction the slider is oriented in. Add `aria-valuemin` to indicate the minimum value. Add `aria-valuemax` to indicate the maximum value. Add `aria-valuenow` to indicate the current value. If the value is not represented by a number add `aria-valuetext` in place of aria-valuenow.|
| **SwitchAria** | role='switch'      |    Use `role='switch'` on checkboxes that represent an 'on' or 'off' state. Add `aria-checked` to indicate whether component is on or off. Add `aria-required` if the field is required.|
| **TextboxAria** | role='textbox'      |    Add `role='slider'` to allow users to select from a certain range. Add `aria-orientation` to indicate what direction the slider is oriented in. Add `aria-valuemin` to indicate the minimum value. Add `aria-valuemax` to indicate the maximum value. Add `aria-valuenow` to indicate the current value. If the value is not represented by a number add `aria-valuetext` in place of aria-valuenow.|
| **TabPanelAria** | role='tabpanel'      |    "Use `role='tabpanel'` on elements that contains the content associated with a tab. Add `aria-controls` identifies the element (or elements) whose contents or presence are controlled by the current element (For example a tab controls the display of its associated tab panel). Add `aria-labelledby` Identifies the element (or elements) that labels the current element. Add `aria-details to identify the element that provides a detailed, extended description for the object. Add `aria-haspopup` Indicates the availability and type of interactive popup element, such as menu or dialog. Add `aria-readonly` if the user cannot modify the value. Add `aria-keyshortcuts` Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.|
| **TimerAria** | role='timer'      |    Add `role='timer'` to indicate to assistive technologies that an element is a numerical counter listing the amount of elapsed time from a starting point or the remaining time until an end point. Add `aria-label` to provide the name of the timer. Add `aria-live` to explicitly denote a live region (Elements with the role timer have an implicit aria-live value of off). Add `aria-describedby` to indicate the idref of an element that contains additional instructions for navigating or operating this element. Add `aria-roledescription` o give the timer a more descriptive role text for screen readers to speak. Add `aria-atomic` to set whether or not the screen reader should always present the live region as a whole, even if only part of the region changes.|
| **SliderAria** | role='slider'      |    Use `role='textbox'` on elements that allow input of free-form text. Add `aria-activedescendant` to indicate the current active child (for example if the textbox has an autocomplete popup and the focus changes to the popup). Add `aria-autocomplete` to indicate if the textbox will display a list of suggestions. Use `aria-multiline` if the textbox can contain multiple lines of input. Add `aria-placeholder` to give users a hint of what the input should contain. Add `aria-readonly` if the user cannot modify the value. Add `aria-required` if the field is required.|
| **CellAria** | role='cell'      |    Adds `role='cell'` aria attributes for a cell. A cell is identified as an element in a tabular container that does not contain column or row header information. “cells” are only valid within a construct that simulates a standard data table.|

## Rules of ARIA

- The **first rule** of ARIA is try to `use native HTML elements` instead of aria attributes whenever possible.

- The **second rule** of ARIA is do not change native HTML semantics, unless you really have to.

  Avoid:

  ```
  <h2 role=tab>heading tab</h2>
  ```

  Instead:

  ```
  <div role=tab><h2>heading tab</h2></div>
  ```

- The **third rule** of ARIA all aria controls must be usable by the keyboard.

- The **fourth rule** of ARIA do not use role='presentation' and aria-hidden='true' on focusable elements.

- The **fifth rule** of ARIA all interactive elements must have accessible names.

## Installation

- Please follow the VSCode instructions to install accessibility-snippets in your editor:

  ```
  https://code.visualstudio.com/docs/editor/userdefinedsnippets#_install-snippets-from-the-marketplace
  ```

- Once installed Navigate to Settings in vscode's preferences menu and toggle **on** `Editor: Accept Suggestion On Enter`
  > Controls whether suggestions should be accepted on Enter, in addition to Tab. Helps to avoid ambiguity between inserting new lines or accepting suggestions.

## Testing

- Run `yarn test` from the project root to run the unit test suites.

## Contributing

Contributions are welcome! If you encounter problems or have a feature suggestion we'd love to hear about it. Open an issue in the GitHub issue tracker and we will do our best to provide support. Thank you!

## License

`accessibility-snippets` is provided under the MIT license.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kendallgassner"><img src="https://avatars3.githubusercontent.com/u/15275462?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kendall Gassner</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=kendallgassner" title="Code">💻</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=kendallgassner" title="Documentation">📖</a> <a href="#ideas-kendallgassner" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-kendallgassner" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/kharrop"><img src="https://avatars.githubusercontent.com/u/24794756?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kelly Harrop</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=kharrop" title="Documentation">📖</a></td>
    <td align="center"><a href="https://digantakrbanik.codes/"><img src="https://avatars.githubusercontent.com/u/65999534?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Diganta Kr Banik</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=developer-diganta" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/raych2"><img src="https://avatars.githubusercontent.com/u/21354238?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rachel Tongco</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=raych2" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/aylinmarie"><img src="https://avatars.githubusercontent.com/u/17627376?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aylin</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=aylinmarie" title="Documentation">📖</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=aylinmarie" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jeffreyclu"><img src="https://avatars.githubusercontent.com/u/55211974?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeffrey Lu</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=jeffreyclu" title="Documentation">📖</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=jeffreyclu" title="Code">💻</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=jeffreyclu" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Saran51"><img src="https://avatars.githubusercontent.com/u/20996426?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Saran51</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=Saran51" title="Documentation">📖</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=Saran51" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/tomarviii88"><img src="https://avatars.githubusercontent.com/u/43980170?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ritika Tomar</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=tomarviii88" title="Documentation">📖</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=tomarviii88" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/simin4950"><img src="https://avatars.githubusercontent.com/u/38788938?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Simin Savani</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=simin4950" title="Documentation">📖</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=simin4950" title="Code">💻</a></td>
    <td align="center"><a href="https://syedareehaquasar.github.io/Portfolio/"><img src="https://avatars.githubusercontent.com/u/56428237?v=4?s=100" width="100px;" alt=""/><br /><sub><b>reeha</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=syedareehaquasar" title="Documentation">📖</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=syedareehaquasar" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/boluwatifeomosowon/"><img src="https://avatars.githubusercontent.com/u/59070723?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Boluwatife Omosowon</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=bolu-tife" title="Documentation">📖</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=bolu-tife" title="Code">💻</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=bolu-tife" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Pamelachristina"><img src="https://avatars.githubusercontent.com/u/46354272?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pamelachristina</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=Pamelachristina" title="Documentation">📖</a></td>
    <td align="center"><a href="https://radhikadhaipule.wordpress.com/"><img src="https://avatars.githubusercontent.com/u/10150263?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Radhika Dhaipule</b></sub></a><br /><a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=RadhikaHD" title="Documentation">📖</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=RadhikaHD" title="Code">💻</a> <a href="https://github.com/kendall Gassner/accessibility-snippets/commits?author=RadhikaHD" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
