let number = 20;
if (number >= 20) {
    console.log(`This number is greater than ${number} or exactly ${number}`)
} else {
    console.log(`This number is ${number}`)
};

console.log('------------------');

function numbers(num) {
    if (num >= 20) {
        return(`This number is greater than ${num} or exactly ${num}`)
    } else {
        return(`This number is ${num}`)
    };

}

console.log(numbers(19))

