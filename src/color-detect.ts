export type RgbaArray = [number, number, number, number];

/**
 * Returns true if the color is light, and false if it is dark.
 */
export function isLightColor(rgba: RgbaArray): boolean {
    // based on https://stackoverflow.com/a/3943023/1170489
    return colorLuminance(rgba) > Math.sqrt(1.05 * 0.05) - 0.05;
}

/**
 * Uses the W3C suggested algorithm to determine a color's relative luminance.
 */
export function colorLuminance(rgba: RgbaArray): number {
    // per https://www.w3.org/TR/WCAG20/#relativeluminancedef
    let c = rgba.map(v => v / 255);

    for (let i = 0; i < c.length; i++) {
        if (c[i] <= 0.03928) {
            c[i] = c[i] / 12.92;
        } else {
            c[i] = Math.pow((c[i] + 0.055) / 1.055, 2.4);
        }
    }

    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

var canvas: HTMLCanvasElement, context: CanvasRenderingContext2D | null;

/**
 * Turns any valid canvas fillStyle into an array with values for R, G, B, and A.
 * Returns [0, 0, 0, 0] for invalid colors.
 */
export function colorToRgbaArray(color: string): RgbaArray {
    // based on https://gist.github.com/njvack/02ad8efcb0d552b0230d

    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        context = canvas.getContext('2d');
    }

    if (!context) {
        throw new Error('Missing canvas 2D context');
    }

    // this won't change when setting an invalid fillStyle
    context.fillStyle = 'rgba(0, 0, 0, 0)';

    // fill with predictable value since the canvas is being reused
    context.clearRect(0, 0, 1, 1);
    context.fillStyle = color;
    context.fillRect(0, 0, 1, 1);
    let a = context.getImageData(0, 0, 1, 1).data;
    return [a[0], a[1], a[2], a[3]];
}

/**
 * Turns an rgba array into an rgba() CSS string.
 */
export function rgbaToCssString(a: RgbaArray): string {
    return `rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3] / 255})`;
}
