import {colorToRgba, rgbaToCssString, isLightColor, colorLuminance} from '../src/color-detect.js';

import { describe, it, assert } from 'vitest';

describe('colorToRgba', function () {
    it('should be able to parse a named color', function () {
        let rgba = colorToRgba('red');
        assert.deepStrictEqual(rgba, [255, 0, 0, 255]);
    });

    it('should be able to parse a hex color', function () {
        let rgba = colorToRgba('#001122');
        assert.deepStrictEqual(rgba, [0, 17, 34, 255]);
    });

    it('should be able to parse a short hex color', function () {
        let rgba = colorToRgba('#123');
        assert.deepStrictEqual(rgba, [17, 34, 51, 255]);
    });

    it('should be able to parse an RGB color', function () {
        let rgba = colorToRgba('rgb(80, 160, 240)');
        assert.deepStrictEqual(rgba, [80, 160, 240, 255]);
    });
});

describe('rgbaToCssString', function () {
    it('should be able to output chocolate', function () {
        let chocolateRgb = colorToRgba('chocolate');
        assert.strictEqual(rgbaToCssString(chocolateRgb), 'rgba(210, 105, 30, 1)');
    });
});

describe('colorLuminance', function () {
    it('should return the luminance of orange', function () {
        const orangeRgba = colorToRgba('orange');
        const luminance = colorLuminance(orangeRgba);
        // avoid test error due to extra decimal in Firefox
        assert.strictEqual(luminance.toFixed(16), "0.4817026703630963");
    });
});

describe('isLightColor', function () {
    it('should detect red as light', function () {
        let rgba = colorToRgba('red');
        assert.strictEqual(isLightColor(rgba), true);
    });

    it('should detect purple as dark', function () {
        let rgba = colorToRgba('#663399');
        assert.strictEqual(isLightColor(rgba), false);
    });

    it('should detect yellow as light', function () {
        let rgba = colorToRgba('yellow');
        assert.strictEqual(isLightColor(rgba), true);
    });

    it('should detect off-yellow as light', function () {
        let rgba = colorToRgba('#D6B508');
        assert.strictEqual(isLightColor(rgba), true);
    });

    it('should detect teal as dark', function () {
        let rgba = colorToRgba('teal');
        assert.strictEqual(isLightColor(rgba), false);
    });

    it('should detect aqua as light', function () {
        let rgba = colorToRgba('aqua');
        assert.strictEqual(isLightColor(rgba), true);
    });

    it('should detect lime as light', function () {
        let rgba = colorToRgba('lime');
        assert.strictEqual(isLightColor(rgba), true);
    });

    it('should detect green as dark', function () {
        let rgba = colorToRgba('green');
        assert.strictEqual(isLightColor(rgba), false);
    });
});
