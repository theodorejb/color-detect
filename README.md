# color-detect
[![npm version](https://badge.fury.io/js/%40theodorejb%2Fcolor-detect.svg)](https://badge.fury.io/js/%40theodorejb%2Fcolor-detect)

Convert color strings to an RGBA array, and determine if the color is light or dark.

* Includes TypeScript definitions
* No dependencies
* ES6 module compatible with modern browsers and build tools

## Installation

`npm install @theodorejb/color-detect --save`

## Usage

```javascript
import {colorToRgbaArray, isLightColor, rgbaToCssString} from '@theodorejb/color-detect';

// convert CSS colors to an RGBA array
colorToRgbaArray('red'); // [255, 0, 0, 255]
colorToRgbaArray('#123'); // [17, 34, 51, 255]
colorToRgbaArray('rgb(80, 160, 240)'); // [80, 160, 240, 255]

// detect whether a color is light or dark
isLightColor(colorToRgbaArray('red')); // true
isLightColor(colorToRgbaArray('#663399')); // false
isLightColor(colorToRgbaArray('yellow')); // true
isLightColor(colorToRgbaArray('lime')); // true
isLightColor(colorToRgbaArray('green')); // false

// convert an RGBA array to CSS color string
let chocolateRgb = colorToRgbaArray('chocolate');
rgbaToCssString(chocolateRgb); // "rgba(210, 105, 30, 1)"
```

## Author

Theodore Brown  
<https://theodorejb.me>

## License

MIT
