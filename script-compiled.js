"use strict";

console.log("Task_1 -------------------:");
var first_word = "Hello";
var second_word = "World";

console.log(first_word + " " + second_word);

function say(first, second) {
    console.log(first + " " + second);
}
say(first_word, second_word);

var show = function show(first, second) {
    return console.log(first + " " + second);
};
show(first_word, second_word);

console.log("Task_2 -------------------:");
var multiply = function multiply(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return console.log("Result " + x + " * " + y + " = " + x * y);
};

multiply(2, 5);
multiply(6, 6);
multiply(9);

console.log("Task_3 -------------------:");

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var result = 0;
    args.forEach(function (arg) {
        return result += arg;
    });
    console.log("Result = " + result / args.length);
};
var numbers = [5, 6, 7, 8, 9, 20, 56, 23, 98];

average(1);
average(1, 3);
average(1, 3, 6, 6);
average(1, 2, 3, 4, 5);
average.apply(undefined, numbers);

console.log("Task_4 -------------------:");
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

console.log("Task_5 -------------------:");

var data = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = data[2],
    lastname = data[4];


console.log("Name: " + firstname + " " + lastname);
