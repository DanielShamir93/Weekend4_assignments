let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter usage
const getDividedBy3WithFilter = (numbers) => {
    return numbers.filter((number) => {
        if (number % 3 === 0) {
            return number;
        }
    })
}

// console.log(getDividedBy3WithFilter(numbers));

// forEach usage
const getDividedBy3WithForEach = (numbers) => {
    let result = [];
    numbers.forEach((number) => {
        if (number % 3 === 0) {
            result.push(number);
        }
    })
    return result;
}

// console.log(getDividedBy3WithForEach(numbers));

// map usage
const getDividedBy3WithMap = (numbers) => {
    return mappedNumbers = numbers.map((number) => {
        if (number % 3 === 0) {
            return number;
        } else {
            return '';
        }
    }).join('').split('');
}

console.log(getDividedBy3WithMap(numbers));
