# color-detect
[![NPM version](https://img.shields.io/npm/v/@theodorejb/color-detect.svg)](https://www.npmjs.org/package/@theodorejb/color-detect)

Convert color strings to an RGBA array, and determine if the color is light or dark.

* Includes TypeScript definitions
* Works with Webpack and Rollup module bundlers, as well as modern browsers
* No dependencies

## Installation

`npm install @theodorejb/color-detect --save`

## Usage

```javascript
import {colorToRgbaArray, isLightColor, rgbaToCssString} from '@theodorejb/color-detect';

// convert CSS colors to RGBA
colorToRgbaArray('red'); // [255, 0, 0, 255]
colorToRgbaArray('#123'); // [17, 34, 51, 255]
colorToRgbaArray('rgb(80, 160, 240)'); // [80, 160, 240, 255]

// convert an RGBA array to CSS color string
rgbaToCssString(colorToRgbaArray('blue')); // rgba(0, 0, 255, 1)

// detect whether a color is light or dark
isLightColor(colorToRgbaArray('red')); // false
isLightColor(colorToRgbaArray('#663399')); // false
isLightColor(colorToRgbaArray('yellow')); // true
isLightColor(colorToRgbaArray('lime')); // true
isLightColor(colorToRgbaArray('green')); // false
```

## Author

Theodore Brown  
<https://theodorejb.me>

## License

MIT
