const accum = (str) => {
    return Array.from(str).map((letter, index) => {
        return letter.toUpperCase() + letter.repeat(index).toLowerCase();
    }).join('-');
}

// console.log(accum('RqaEzty'));