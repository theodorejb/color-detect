import {colorToRgbaArray, rgbaToCssString, isLightColor} from '../src/color-detect.js';
const assert = chai.assert;

describe('colorToRgbaArray', function () {
    it('should be able to parse a named color', function () {
        let rgba = colorToRgbaArray('red');
        assert.deepStrictEqual(rgba, [255, 0, 0, 255]);
    });

    it('should be able to parse a hex color', function () {
        let rgba = colorToRgbaArray('#001122');
        assert.deepStrictEqual(rgba, [0, 17, 34, 255]);
    });

    it('should be able to parse a short hex color', function () {
        let rgba = colorToRgbaArray('#123');
        assert.deepStrictEqual(rgba, [17, 34, 51, 255]);
    });

    it('should be able to parse an RGB color', function () {
        let rgba = colorToRgbaArray('rgb(80, 160, 240)');
        assert.deepStrictEqual(rgba, [80, 160, 240, 255]);
    });
});

describe('rgbaToCssString', function () {
    it('should be able to output chocolate', function () {
        let chocolateRgb = colorToRgbaArray('chocolate');
        assert.strictEqual(rgbaToCssString(chocolateRgb), 'rgba(210, 105, 30, 1)');
    });
});

describe('isLightColor', function () {
    it('should be able to detect whether a color is light or dark', function () {
        let examples: [string, boolean][] = [
            ['red', false],
            ['#663399', false],
            ['yellow', true],
            ['lime', true],
            ['green', false],
        ];

        examples.forEach(function (example) {
            let rgba = colorToRgbaArray(example[0]);
            assert.strictEqual(isLightColor(rgba), example[1]);
        });
    });
});
