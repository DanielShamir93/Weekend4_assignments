const accum = (str) => {
    return Array.from(str).map((letter, index) => {
        return letter.toUpperCase() + letter.repeat(index);
    }).join('-');
}

console.log(accum('abcd'));