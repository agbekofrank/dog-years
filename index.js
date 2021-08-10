// my age
const myAge = 38;

// early tears

let earlyYears = 2;
earlyYears = earlyYears * 10.5;
// later years
let laterYears = myAge - 2;
// Account for my age later
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// My age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// my name in lower case letters

const myName = 'Frank'.toLowerCase();

// My statements

console.log(`
My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`);

