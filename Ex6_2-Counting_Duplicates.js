const countDuplicates = (str) => {
    const duplicates = {}
    let result = 0;
    str = str.toLowerCase();
    for(letter of str) {
        if (str.lastIndexOf(letter) !== str.indexOf(letter)) {
            if (!duplicates.hasOwnProperty(letter)) {
                duplicates[letter] = 1;
                result++;
            }
        }
    }
    return result;
}

// console.log(countDuplicates('aabBcde'))