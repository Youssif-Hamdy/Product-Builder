/**
 * Slices a given text to a specified maximum length and appends ellipses if the text exceeds that length.
 * 
 * @param {string} txt - The text to be sliced.
 * @param {number} [max=50] - The maximum length of the text after slicing. Default is 50.
 * @returns {string} The sliced text with ellipses appended if the original text exceeds the maximum length.
 */
export function txtSlicer(txt:string, max:number=50):string {
    if(txt.length >= max) return `${txt.slice(0, max)}.....`;
    return txt;
}
