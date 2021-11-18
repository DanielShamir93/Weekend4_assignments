const countDuplicates = (str) => {
    const duplicates = {}
    let result = 0;
    str = str.toLowerCase();
    for(letter of str) {
        if (str.indexOf(letter) !== str.lastIndexOf(letter)) {
            if (!duplicates.hasOwnProperty(letter)) {
                duplicates[letter] = '';
                result++;
            }
        }
    }
    return result;
}

// console.log(countDuplicates('aabBcde'))