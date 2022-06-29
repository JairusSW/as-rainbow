export namespace rainbow {
    // COLORS
    // @ts-ignore
    @inline
    export function black(text: string): string {
        return colorText([30, 39], text)
    }
    // @ts-ignore
    @inline
    export function red(text: string): string {
        return colorText([31, 39], text)
    }
    // @ts-ignore
    @inline
    export function green(text: string): string {
        return colorText([32, 39], text)
    }
    // @ts-ignore
    @inline
    export function yellow(text: string): string {
        return colorText([33, 39], text)
    }
    // @ts-ignore
    @inline
    export function blue(text: string): string {
        return colorText([34, 39], text)
    }
    // @ts-ignore
    @inline
    export function magenta(text: string): string {
        return colorText([35, 39], text)
    }
    // @ts-ignore
    @inline
    export function cyan(text: string): string {
        return colorText([36, 39], text)
    }
    // @ts-ignore
    @inline
    export function white(text: string): string {
        return colorText([37, 39], text)
    }
    // @ts-ignore
    @inline
    export function blackBright(text: string): string {
        return colorText([90, 39], text)
    }
    // @ts-ignore
    @inline
    export function redBright(text: string): string {
        return colorText([91, 39], text)
    }
    // @ts-ignore
    @inline
    export function greenBright(text: string): string {
        return colorText([92, 39], text)
    }
    // @ts-ignore
    @inline
    export function yellowBright(text: string): string {
        return colorText([92, 39], text)
    }
    // @ts-ignore
    @inline
    export function blueBright(text: string): string {
        return colorText([94, 39], text)
    }
    // @ts-ignore
    @inline
    export function magentaBright(text: string): string {
        return colorText([95, 39], text)
    }
    // @ts-ignore
    @inline
    export function cyanBright(text: string): string {
        return colorText([96, 39], text)
    }
    // @ts-ignore
    @inline
    export function whiteBright(text: string): string {
        return colorText([97, 39], text)
    }
    // MARKINGS
    // @ts-ignore
    @inline
    export function resetMk(text: string): string {
        return colorText([0, 0], text)
    }
    // @ts-ignore
    @inline
    export function boldMk(text: string): string {
        return colorText([1, 22], text)
    }
    // @ts-ignore
    @inline
    export function dimMk(text: string): string {
        return colorText([2, 22], text)
    }
    // @ts-ignore
    @inline
    export function italicMk(text: string): string {
        return colorText([3, 23], text)
    }
    // @ts-ignore
    @inline
    export function underlineMk(text: string): string {
        return colorText([4, 24], text)
    }
    // @ts-ignore
    @inline
    export function overlineMk(text: string): string {
        return colorText([53, 55], text)
    }
    // @ts-ignore
    @inline
    export function inverseMk(text: string): string {
        return colorText([7, 27], text)
    }
    // @ts-ignore
    @inline
    export function hiddenMk(text: string): string {
        return colorText([8, 28], text)
    }
    // @ts-ignore
    @inline
    export function strikethroughMk(text: string): string {
        return colorText([9, 29], text)
    }
    // BACKGROUND
    // @ts-ignore
    @inline
    export function bgBlack(text: string): string {
        return colorText([40, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgRed(text: string): string {
        return colorText([41, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgGreen(text: string): string {
        return colorText([42, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgYellow(text: string): string {
        return colorText([43, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgBlue(text: string): string {
        return colorText([44, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgMagenta(text: string): string {
        return colorText([45, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgCyan(text: string): string {
        return colorText([46, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgWhite(text: string): string {
        return colorText([47, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgBlackBright(text: string): string {
        return colorText([100, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgRedBright(text: string): string {
        return colorText([101, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgGreenBright(text: string): string {
        return colorText([102, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgYellowBright(text: string): string {
        return colorText([103, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgBlueBright(text: string): string {
        return colorText([104, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgMagentaBright(text: string): string {
        return colorText([105, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgCyanBright(text: string): string {
        return colorText([106, 49], text)
    }
    // @ts-ignore
    @inline
    export function bgWhiteBright(text: string): string {
        return colorText([107, 49], text)
    }
}

// @ts-ignore
@inline
function colorText(format: i32[], text: string): string {
    return `\u001b[${format[0].toString()}m${text}\u001b[${format[1].toString()}m`
}