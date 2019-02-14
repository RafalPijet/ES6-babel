console.log("Task_1 -------------------:");
const first_word = "Hello";
const second_word = "World";

console.log(`${first_word} ${second_word}`);

function say(first, second) {
    console.log(`${first} ${second}`);

}

say(first_word, second_word);

const show = (first, second) => console.log(first + " " + second);
show(first_word, second_word);

console.log("Task_2 -------------------:");
const multiply = (x, y = 1) => console.log(`Result ${x} * ${y} = ${x * y}`);

multiply(2, 5);
multiply(6, 6);
multiply(9);

console.log("Task_3 -------------------:");

const average = (...args) => {
    let result = 0;
    args.forEach(arg => result += arg);
    console.log(`Result = ${result / args.length}`);
};
const numbers = [5, 6, 7, 8, 9, 20, 56, 23, 98];

average(1);
average(1, 3);
average(1, 3, 6, 6);
average(1, 2, 3, 4, 5);
average(...numbers);

console.log("Task_4 -------------------:");
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);

console.log("Task_5 -------------------:");
const data = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstname, , lastname] = data;

console.log(`Name: ${firstname} ${lastname}`);

console.log("Additional Task_1 --------:");

function songDecoder(song) {
    const djText = "WUB";
    let textQuantity = "";
    let count = 0;
    let result = "";

    for (let j = 0; j < song.length; j++) {

        while (count == 0) {
            count = Math.floor(Math.random() * 10);
        }

        for (let i = 0; i < count; i++) {
            textQuantity += djText;
        }
        song = song.replace(" ", textQuantity);
    }

    count = Math.floor(Math.random() * 10);
    textQuantity = "";

    for (let i = 0; i < count; i++) {
        textQuantity += djText;
    }

    result = `${textQuantity}${song}${textQuantity}`;

    return result;
}

console.log(songDecoder("--wow-- --more-- --next--"));

console.log("Additional Task_2 --------:");

function shuffleIt(arr, ...arrayTwoPosition) {

    let result = arr;
    arrayTwoPosition.forEach(array => {
        let first = arr[array[1]];
        let second = arr[array[0]];
        result[array[0]] = first;
        result[array[1]] = second;
    });

    return result;
}

const arrayIn = [1, 2, 3, 4, 5];
const arrayChange_1 = [0, 1];
const arrayChange_2 = [1, 2];
const arrayChange_3 = [2, 3];
let result = shuffleIt(arrayIn, arrayChange_1, arrayChange_2, arrayChange_3);
console.log(`Array before change --> [${arrayIn}], and after change --> [${result}]`);

console.log("Additional Task_3 --------:");

const arrayNumbers_1 = [65, 44, 12, 4];
const arrayNumbers_2 = [136, 82, 72, 15];

function sum(array) {
    return array.reduce((total, num) => total + num);
}

console.log(`Sum numbers in array: [${arrayNumbers_1}] equals: ${sum(arrayNumbers_1)}`);
console.log(`Sum numbers in array: [${arrayNumbers_2}] equals: ${sum(arrayNumbers_2)}`);

console.log("Additional Task_4 --------:");

function sumNumbers(newArray) {
    let result = 0;
    newArray.forEach(element => {
        result += element;
    });
    return result
}

function spread(func, args) {
    return func(args);
}

const exampleArray_1 = [1, 2, 3, 4, 5, 6, 7];
const exampleArray_2 = [6, 7, 8, 9, 2, 5, 8];
console.log(`Effect: ${spread(sumNumbers, exampleArray_1)}`);
console.log(`Effect: ${spread(sumNumbers, exampleArray_2)}`);
