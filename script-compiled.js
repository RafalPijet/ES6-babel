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

console.log("Additional Task_1 --------:");

function songDecoder(song) {
    var djText = "WUB";
    var textQuantity = "";
    var count = 0;
    var result = "";

    for (var j = 0; j < song.length; j++) {

        while (count == 0) {
            count = Math.floor(Math.random() * 10);
        }

        for (var i = 0; i < count; i++) {
            textQuantity += djText;
        }
        song = song.replace(" ", textQuantity);
    }

    count = Math.floor(Math.random() * 10);
    textQuantity = "";

    for (var _i = 0; _i < count; _i++) {
        textQuantity += djText;
    }

    result = "" + textQuantity + song + textQuantity;

    return result;
}

console.log(songDecoder("--wow-- --more-- --next--"));

console.log("Additional Task_2 --------:");

function shuffleIt(arr) {

    var result = arr;

    for (var _len2 = arguments.length, arrayTwoPosition = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        arrayTwoPosition[_key2 - 1] = arguments[_key2];
    }

    arrayTwoPosition.forEach(function (array) {
        var first = arr[array[1]];
        var second = arr[array[0]];
        result[array[0]] = first;
        result[array[1]] = second;
    });

    return result;
}

var arrayIn = [1, 2, 3, 4, 5];
var arrayChange_1 = [0, 1];
var arrayChange_2 = [1, 2];
var arrayChange_3 = [2, 3];
var result = shuffleIt(arrayIn, arrayChange_1, arrayChange_2, arrayChange_3);
console.log("Array before change --> [" + arrayIn + "], and after change --> [" + result + "]");

console.log("Additional Task_3 --------:");

var arrayNumbers_1 = [65, 44, 12, 4];
var arrayNumbers_2 = [136, 82, 72, 15];

function sum(array) {
    return array.reduce(function (total, num) {
        return total + num;
    });
}

console.log("Sum numbers in array: [" + arrayNumbers_1 + "] equals: " + sum(arrayNumbers_1));
console.log("Sum numbers in array: [" + arrayNumbers_2 + "] equals: " + sum(arrayNumbers_2));

console.log("Additional Task_4 --------:");

function sumNumbers(newArray) {
    var result = 0;
    newArray.forEach(function (element) {
        result += element;
    });
    return result;
}

function spread(func, args) {
    return func(args);
}

var exampleArray_1 = [1, 2, 3, 4, 5, 6, 7];
var exampleArray_2 = [6, 7, 8, 9, 2, 5, 8];
console.log("Effect: " + spread(sumNumbers, exampleArray_1));
console.log("Effect: " + spread(sumNumbers, exampleArray_2));
