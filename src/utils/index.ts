export const isValidCssColor = (color: string) => {
    const isValidCssColor = CSS.supports('color', color)
    return isValidCssColor;
} 