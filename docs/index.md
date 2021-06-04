![Image](https://i.ibb.co/pwNWHcM/p2-vscode-diff.png)

```
{
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


}
```


```
{
8f83e017834bcefb631e1c06ecee9b7b2d4a79c5 Added getSortedString()
c2c1aee8e84e8b203f60e4d4c83f068ebd4b0f34 Added getRandomString()
874b77f9db153d0cfdfa0463e5b63d5796b4c646 Added getRandomLetter()
c0bbc4f6a9de7cf31cdaa494ee5b2931e910f482 First commit
}
```


```
{
/*
    CIT 281 Project 2
    Name: Mehak Dedmari
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
}

console.log(result);

//Returns a random letter between min (inclusive) and max (exclusive)
function getRandomLetter() {
    return alphabet[getRandomInteger(0,25)];
}
console.log(getRandomLetter()); 

// Returns a random number string min (inclusive) and max (exclusive)
function getRandomString(minLength, maxLength) {
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
}
return result;
}
console.log(getRandomString(10,20));

// Return a string in ascending order

function getSortedString(stringToSort) {
    return stringToSort.split("").sort().join("");
}

console.log(getSortedString("bcdea"));

}
```
