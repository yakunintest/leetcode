/**
 * Implement strStr().
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    if (needle.length === 0) return 0;
    if (haystack.length === 0) return -1;
    if (needle.length > haystack.length) return -1;
    if (needle.length === haystack.length) return haystack === needle ? 0 : -1;
    let i = 0;
    let j = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            if (j === needle.length - 1) return i - j;
            i++;
            j++;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    return -1;
};

console.log(strStr("hello", "ll"));
