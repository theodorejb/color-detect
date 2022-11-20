# color-detect
[![npm version](https://badge.fury.io/js/%40theodorejb%2Fcolor-detect.svg)](https://badge.fury.io/js/%40theodorejb%2Fcolor-detect)

Convert color strings to an RGBA array, and determine if the color is light or dark.

* Includes TypeScript definitions
* No dependencies
* Native ES module compatible with modern browsers and build tools

## Installation

`npm install @theodorejb/color-detect --save`

## Usage

```javascript
import {colorToRgba, isLightColor, rgbaToCssString} from '@theodorejb/color-detect';

// convert CSS colors to an RGBA array
colorToRgba('red'); // [255, 0, 0, 255]
colorToRgba('#123'); // [17, 34, 51, 255]
colorToRgba('rgb(80, 160, 240)'); // [80, 160, 240, 255]

// detect whether a color is light or dark
isLightColor(colorToRgba('red')); // true
isLightColor(colorToRgba('#663399')); // false
isLightColor(colorToRgba('yellow')); // true
isLightColor(colorToRgba('lime')); // true
isLightColor(colorToRgba('green')); // false

// convert an RGBA array to CSS color string
let chocolateRgb = colorToRgba('chocolate');
rgbaToCssString(chocolateRgb); // "rgba(210, 105, 30, 1)"
```

## Author

Theodore Brown  
<https://theodorejb.me>

## License

MIT
