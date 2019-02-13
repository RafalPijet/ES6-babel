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
average(1,2,3,4,5);
average(...numbers);

console.log("Task_4 -------------------:");
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);

console.log("Task_5 -------------------:");

const data = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstname, , lastname] = data;

console.log(`Name: ${firstname} ${lastname}`);