// A Positive number and ad reverse together => palindrome
// 139 + 931 = 1070 => 1070 + 0701 = 1771

const reverseNumber = number => parseInt(number.toString().split("").reverse().join(""));

const isOdd = length => (length % 2 >= 1) ? true : false;

// 7 - 1 = 6/2 = 3 => Ex: editOddLengths(1234321) => 123321
const editOddLengths = num => {
    const splitted = String(num).split("");
    const length = splitted.length;

    if (length == 1) throw new Error('Error while parsing the number')

    if (isOdd(length)) {
        // deleting middle one and converting to even length
        splitted.splice((length - 1) / 2, 1)
        return splitted;
    }
}

const getCopyOfArray = arr => [...arr]

const isPalindromeNumber = number => {
    let splitted = String(number).split("");
    let sumLength = splitted.length;
    
    if (isOdd(sumLength)) splitted = editOddLengths(number);

    let part1 = getCopyOfArray(splitted).splice(0, (sumLength / 2)).join("")
    let part2 = reverseNumber(getCopyOfArray(splitted).splice(sumLength / 2, sumLength).join(""))

    if (part1 == part2) return true;
}

const calculateNumber = num => {
    let result;
    let reverse;

    reverse = reverseNumber(num);
    result = num + reverse;
    
    let steps = 1;

    while (!isPalindromeNumber(result)) {
        result = result + reverseNumber(result);
        steps++;
        console.log(`${num} : | steps: ${steps} | result: ${result}`) // can be removed to having less logs
    }
    
    return console.log(`${num} took ${steps} steps to reach ${result} and be knows as a palindrome`);
}

console.log(calculateNumber(89))