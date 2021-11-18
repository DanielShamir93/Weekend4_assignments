const organizeStrings = (s1, s2) => {
    return Array.from(s1 + s2).sort().join('').replace(/([A-Za-z]).+\1/gi, '$1');
}

// console.log(organizeStrings('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));