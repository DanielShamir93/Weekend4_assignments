const organizeStrings = (s1, s2) => {
    return Array.from(s1 + s2).sort().join('').replace(/(\w).+\1/g, '$1');
}

// console.log(organizeStrings('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));