const isIsogram = (str) => {
    let arr = new Array(26).fill(false);
    for (let i = 0; i < str.length; i++) {
        // value of current char in ascii
        let charCode = str.toLowerCase().charCodeAt(i);
        // char already exists
        if (arr[charCode] === true) {
            return false;
        } else {
            arr[charCode] = true;
        }
    }
    return true;
}

// console.log(isIsogram('Dermatolgyphics'));