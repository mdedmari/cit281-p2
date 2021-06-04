/*
    CIT 281 Project 2
    Name: Mehak Dedmari
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger= function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//Returns a random letter between min (inclusive) and max (exclusive)
const getRandomLetter= function () {
    return alphabet[getRandomInteger(0,25)];
}
console.log(getRandomLetter()); 

// Returns a random number string min (inclusive) and max (exclusive)
const getRandomString= function (minLength, maxLength) {
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
}
return result;
}
console.log(getRandomString(10,20));

// Return a string in ascending order

const getSortedString= function (stringToSort) {
    return stringToSort.split("").sort().join("");
}

console.log(getSortedString("bcdea"));

