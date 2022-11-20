import {colorToRgbaArray, rgbaToCssString, isLightColor, colorLuminance} from '../src/color-detect.js';
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

describe('colorLuminance', function () {
    it('should return the luminance of orange', function () {
        let yellowRgba = colorToRgbaArray('orange');
        assert.strictEqual(colorLuminance(yellowRgba), 0.48170267036309633);
    });
});

describe('isLightColor', function () {
    it('should detect red as light', function () {
        let rgba = colorToRgbaArray('red');
        assert.strictEqual(isLightColor(rgba), true);
    });

    it('should detect purple as dark', function () {
        let rgba = colorToRgbaArray('#663399');
        assert.strictEqual(isLightColor(rgba), false);
    });

    it('should detect yellow as light', function () {
        let rgba = colorToRgbaArray('yellow');
        assert.strictEqual(isLightColor(rgba), true);
    });

    it('should detect off-yellow as light', function () {
        let rgba = colorToRgbaArray('#D6B508');
        assert.strictEqual(isLightColor(rgba), true);
    });

    it('should detect lime as light', function () {
        let rgba = colorToRgbaArray('lime');
        assert.strictEqual(isLightColor(rgba), true);
    });

    it('should detect green as dark', function () {
        let rgba = colorToRgbaArray('green');
        assert.strictEqual(isLightColor(rgba), false);
    });
});
