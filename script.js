"use strict"

for(let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}👍`);
}

const cloudArray = [
    'Idris',
    'Musa',
    2024 - 2000,
    'Front-end Developer',
    ['Basith', 'Zarah', 'Sultan'],
    true
]; 

const typesOf = [];

typesOf[0] = 'string';

for (let i = 0; i < cloudArray.length; i++) {

    if(typeof cloudArray[i] !== 'number') continue;

    typesOf.push(typeof cloudArray[i])
    // typesOf[i] = typeof cloudArray[i]
}


console.log(typesOf)


const birthYears = [1997, 2000, 2002, 2005, 2010];
const currentYear = 2024
const eachAge = []

const calcAge = function (birthYears) {
   return currentYear - birthYears
}

for (let i = 0; i < birthYears.length; i++) {
    eachAge.push(calcAge(birthYears[i]))
}

console.log(eachAge)

// looping backwards

const siblingsBirthYears = {
    Lawal: 1997,
    Idris: 2000,
    Saidat: 2002,
    Mariam: 2005,
    Zainab: 2010
}

const presentAge = {}

// CAN ONLY BE USED FOR ARRAYS

const siblingNames = []

for (let sibling in siblingsBirthYears ) {
    siblingNames.push(sibling);
}

for (let i = siblingNames.length -1; i >= 0; i--){
    const sibling = siblingNames[i];
    presentAge[sibling] = calcAge(siblingsBirthYears[sibling])
}

console.log(siblingNames)

for (let i in siblingsBirthYears) {
    presentAge[i] = (calcAge(siblingsBirthYears[i]));
}

console.log(presentAge)

const mySiblingsBirthYears = [1997, 2000, 2002, 2005, 2010]
const mySiblingsCurrentAge = [];

for (let i in mySiblingsBirthYears) {
    mySiblingsCurrentAge.push(calcAge(mySiblingsBirthYears[i]))
}

// for(let i = 0; i < mySiblingsBirthYears.length; i++) {
//     mySiblingsCurrentAge.push(calcAge(mySiblingsBirthYears[i]))
// }

console.log(mySiblingsCurrentAge)


// LOOPING BACKWARDS

// for (let i = mySiblingsBirthYears.length -1; i >= 0; i--) {
//     mySiblingsCurrentAge.push(calcAge(mySiblingsBirthYears[i]))
// }
// console.log(mySiblingsCurrentAge)


// CREATING A LOOP INSIDE A LOOP 

for (let i = 1; i <= 2; i++) {
    console.log(`----Training Day ${i}`)

    for(let rep = 1; rep <= 3; rep++) {
        console.log(`Day ${rep} Bicycle Crunches `)
    }
}

const exercises = [
    ['Bicycle Crunches', 'Bicycle Crunches', 'Bicycle Crunches'],
    ['Sit-ups', 'Sit-ups', 'Sit-ups']
];

console.log(exercises.length)

for (let i = 0; i < exercises.length; i++) {
    console.log(`----Training Day ${i + 1}`);

    for (let rep = 0; rep < exercises[i].length; rep++) {
        console.log(`Day ${rep + 1} ${exercises[i][rep]}`);
    }
}

// WHILE LOOP

let i = 0;
while (i < exercises.length) {
    console.log(`-----Training Day ${i + 1}`)
    i++;
}

let dice = Math.floor(Math.random() * 6)
console.log(dice)
