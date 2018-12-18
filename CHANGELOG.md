# 1.0.0 (2018-12-18)


### Bug Fixes

* **alert:** Replaced inline svg with dtIcons ([***REMOVED***](***REMOVED***/***REMOVED***))
* **autocomplete:** fixes dynamically changing autocompletes ([***REMOVED***](***REMOVED***/***REMOVED***))
* **breadcrumb:** remove router dependency ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** fixes removes theming capabilities for main active theme color on button ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** fixes button active issue in IE11+ ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** fixes icon container change detection issue ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** fixes icon size in buttons ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** fixes missing styles on anchor ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** fixes nested button background issue ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** fixes existing icon container when icon has been removed ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** fixes superscript issue ([***REMOVED***](***REMOVED***/***REMOVED***))
* **card:** fixes wrong spacing on icon
* **card:** removes outer spacing (margin) ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** added correct font
* **chart:** added default global options ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** Added loading text to make it i18n compatible ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** fixes issue that options where mutated instead of cloned
* **chart:** corrected easing functions overshoot ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** fixed chart area icon 
* **chart:** fixed chart blue theme ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** fixed legend overrides 
* **chart:** fixed legend sizing, coloring, disabled 
* **chart:** fixed no options/series passed 
* **chart:** fixed reflow issue
* **chart:** fixes for pie chart coloring ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** fixes missing legendicons when building an app with the prod flag ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** fixes tooltip not being wrapped when changing options at runtime ([***REMOVED***](***REMOVED***/***REMOVED***)) 
* **chart:** remove all change-detection cycles that were triggered by highcharts events 
* **chart:** fixes subscription cleanup on destroy ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** update chart selection model ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** use lodash merge function to deeply mergeClone options ([***REMOVED***](***REMOVED***/***REMOVED***))
* **checkbox:** disable animation timing in IE ([***REMOVED***](***REMOVED***/***REMOVED***))
* **checkbox:** fixes container size issue in non border-box environments ([***REMOVED***](***REMOVED***/***REMOVED***))
* **context-dialog:** added spacing for closing btn, improved focus management
* **context-dialog:** fixes issue where context-dialog does not close on blur ([***REMOVED***](***REMOVED***/***REMOVED***))
* **core:** rename log level name for consistency ([***REMOVED***](***REMOVED***/***REMOVED***))
* **expandable-section, expandable-panel:** Changed inline svg to dtIcon ([***REMOVED***](***REMOVED***/***REMOVED***))
* **expandable-section, expandable-panel:** fixes issue where openedChange does not fire when opened property is set
* **expandable-section, expandable-panel:** fixes issue where openedChange subscription is not unsubscribed
* **filter-field:** fixes broken nested button override ([***REMOVED***](***REMOVED***/***REMOVED***))
* **filter-field:** handle input keyup only on free text ([***REMOVED***](***REMOVED***/***REMOVED***))
* **filter-field:** node removal on backspace ([***REMOVED***](***REMOVED***/***REMOVED***))
* **formatters:** added chaining capabilities ([***REMOVED***](***REMOVED***/***REMOVED***))
* **formatters:** make pipes more resilient to strange input ([***REMOVED***](***REMOVED***/***REMOVED***))
* **form-field:** fixes spacing of error messages ([***REMOVED***](***REMOVED***/***REMOVED***))
* **form-field:** fixes issue where error element is overlapped ([***REMOVED***](***REMOVED***/***REMOVED***))
* **form-field:** fixes multiple styling issues with icons and buttons 
* **icon:** fixes issue where icons are loaded multiple times ([***REMOVED***](***REMOVED***/***REMOVED***))
* **icon:** changed icon color to white on darkthemes
* **icon:** add escaping inside icon registry ([***REMOVED***](***REMOVED***/***REMOVED***)) 
* **inline-editor:** fixes edit icon 
* **inline-editor:** fixes IE issue ([***REMOVED***](***REMOVED***/***REMOVED***))
* **inline-editor:** model now updates only when save is pressed 
* **inline-editor:** fixes issue when dt-errors are not passed to form-field ([***REMOVED***](***REMOVED***/***REMOVED***))
* **input:** fixes red outline in firefox ([***REMOVED***](***REMOVED***/***REMOVED***))
* **input:** fixes disabled background color 
* **input:** fixes design issues ([***REMOVED***](***REMOVED***/***REMOVED***))
* **input:** fixes ie issue ([***REMOVED***](***REMOVED***/***REMOVED***))
* **loading-distractor:** added spinner
* **loading-spinner:** fixes animation when only spinner is used 
* **loading-spinner:** fixes xml namespace issue for svg in angular core 
* **progress-bar:** Fixes IE11 issue ([***REMOVED***](***REMOVED***/***REMOVED***))
* **progress-circle:** fix path not being drawn correctly in IE ([***REMOVED***](***REMOVED***/***REMOVED***))
* **progress-circle:** fixed getter calling setter and emitting event ([***REMOVED***](***REMOVED***/***REMOVED***))
* **progress-circle:** scales icons in progress-circle ([***REMOVED***](***REMOVED***/***REMOVED***))
* **radio:** fixes issue when setting disabled directly ([***REMOVED***](***REMOVED***/***REMOVED***))
* **select:** fixes valueChange emitting undefined when value zero has been set ([***REMOVED***](***REMOVED***/***REMOVED***))
* **select:** removes themeable arrow icon in select ([***REMOVED***](***REMOVED***/***REMOVED***))
* **select:** fixes multiline issue ([***REMOVED***](***REMOVED***/***REMOVED***))
* **table:** fix chart in expandable table not being hidden correctly ([***REMOVED***](***REMOVED***/***REMOVED***))
* **table:** fixed sort icon direction ([***REMOVED***](***REMOVED***/***REMOVED***))
* **tag:** removed outside spacing ([***REMOVED***](***REMOVED***/***REMOVED***))
* **theming:** add missing blue colors ([***REMOVED***](***REMOVED***/***REMOVED***))
* **theming:** fixes issue where theme did not unsubscribe from parent properly
* **theming:** fixes theme inheritance ([***REMOVED***](***REMOVED***/***REMOVED***))
* **theming:** fixes issue when getting an error if there is no parent theme 


### Features

* **alert:** added alert component
* **autocomplete:** added autocomplete ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** added button component
* **button:** added loading spinner for button ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** added nested variant ([***REMOVED***](***REMOVED***/***REMOVED***))
* **button:** added icon button ([***REMOVED***](***REMOVED***/***REMOVED***))
* **card:** added card component 
* **chart:** added chart component 
* **chart:** added heatfield & overload prevention capabilities ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** added axis defaults for font size ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** added support for area range ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** added custom legend icons 
* **chart:** added loading distractor to the chart 
* **chart:** handles visibility without data ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** handles empty points inside tooltip ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** added new color strategy and colors ([***REMOVED***](***REMOVED***/***REMOVED***))
* **chart:** added support for series and options as observables
* **chart:** added support for tooltip 
* **cta-card:** added CTA card component
* **checkbox:** added checkbox component ([***REMOVED***](***REMOVED***/***REMOVED***))
* **checkbox:** added dark theme ([***REMOVED***](***REMOVED***/***REMOVED***))
* **context-dialog:** added context dialog component
* **filter-field:** added filter-field ([***REMOVED***](***REMOVED***/***REMOVED***))
* **form-field:** added form-field component 
* **icon:** added icon component and registry ([***REMOVED***](***REMOVED***/***REMOVED***))
* **icon:** added dt-iconpack support ([***REMOVED***](***REMOVED***/***REMOVED***))
* **icon:** added dt-iconpack integration ([***REMOVED***](***REMOVED***/***REMOVED***))
* **indicator:** added indicator component ([***REMOVED***](***REMOVED***/***REMOVED***))
* **input:** added input directive
* **input, form-field:** added autofill monitor ([***REMOVED***](***REMOVED***/***REMOVED***))
* **loading-distractor:** added loading-distractor component
* **option:** added option component; to be used in other components such as select ([***REMOVED***](***REMOVED***/***REMOVED***))
* **overlay:** added overlay component ([***REMOVED***](***REMOVED***/***REMOVED***))
* **progress-circle:** added progress-circle ([***REMOVED***](***REMOVED***/***REMOVED***))
* **radio:** added radio ([***REMOVED***](***REMOVED***/***REMOVED***))
* **select:** added select component ([***REMOVED***](***REMOVED***/***REMOVED***))
* **selection-area:** added selection-area ([***REMOVED***](***REMOVED***/***REMOVED***))
* **table:** added table component
* **table:** added problem indicator capabilities ([***REMOVED***](***REMOVED***/***REMOVED***))
* **table:** added sorting capabilities ([***REMOVED***](***REMOVED***/***REMOVED***))
* **table:** added sticky header ([***REMOVED***](***REMOVED***/***REMOVED***))
* **tabs:** added tabs ([***REMOVED***](***REMOVED***/***REMOVED***))
* **theming:** added theming ([***REMOVED***](***REMOVED***/***REMOVED***))
* **tile:** added tile component
* **tile:** added icons to tile ([***REMOVED***](***REMOVED***/***REMOVED***))
* **toast:** added toast component ([***REMOVED***](***REMOVED***/***REMOVED***))
* **viewport-resizer:** added viewport resizer 