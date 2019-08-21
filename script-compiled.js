"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var returnArray = function returnArray(list) {
    //it same: const returnArray = list => list.map(item => item + 1) TODO without return
    return list.map(function (item) {
        return item + 1;
    });
};
var list = [1, 2, 3, 4, 5];

var _returnArray = returnArray(list),
    _returnArray2 = _slicedToArray(_returnArray, 5),
    first = _returnArray2[0],
    second = _returnArray2[1],
    fourth = _returnArray2[3],
    fifth = _returnArray2[4];

console.log("Result --> " + first + ":" + second + ":" + fourth + ":" + fifth);

var returnObject = function returnObject(x, y, z) {
    //it same: const returnObject = (x, y, z) => ({x: x + 1, y: y + 2, z: z + 3}) TODO without return
    return { x: x + 1, y: y + 2, z: z + 3 };
};

var _returnObject = returnObject(5, 6, 7),
    x = _returnObject.x,
    y = _returnObject.y,
    z = _returnObject.z;

console.log("Object elements --> " + x + ":" + y + ":" + z);

var testDefaultParametr = function testDefaultParametr() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Default";
    return console.log("Your parametr --> " + text);
};
testDefaultParametr("something");
testDefaultParametr();

var randomQuantityOfParameters = function randomQuantityOfParameters() {
    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
    }

    return arg.forEach(function (item, i) {
        return console.log(i + 1 + ": " + item);
    });
}; // TODO unspecified number of arguments
randomQuantityOfParameters(4, list, false, 8, "wow");
randomQuantityOfParameters(undefined, NaN, true);

var names = ['Jan', 'Zosia', 'Zbyszek', 'Kacper', 'Tomek', 'Magda'];
var firstName = names[0],
    secondName = names[1],
    rest = names.slice(2);

console.log(firstName, secondName, rest);
var newName = ['Roman'].concat(names);
console.log(newName);
newName = [].concat(names, ["Gienek"]);
console.log(newName);
var anotherName = [].concat(names, list);
console.log(anotherName);

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
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
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

console.log("Additional Task_1 --------:"); /*TODO*/

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

    for (var _len3 = arguments.length, arrayTwoPosition = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        arrayTwoPosition[_key3 - 1] = arguments[_key3];
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

var arrayNumbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayNumbers_2 = [136, 82, 72, 15];

var sum = function sum(array) {
    return array.reduce(function (total, num) {
        return total + num;
    });
};

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

function spread(func) {
    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
    }

    return func.apply(undefined, args);
}

var exampleArray_1 = [1, 2, 3, 4, 5, 6, 7];
var exampleArray_2 = [6, 7, 2, 5];
console.log("Effect: " + spread(sumNumbers, exampleArray_1));
console.log("Effect: " + spread(sumNumbers, exampleArray_2));

console.log("Tests ---------------------:");

var points = function points(games) {
    var result = 0;

    games.map(function (game) {
        var x = game.substring(0, 1);
        var y = game.substring(2, 3);

        if (x > y) {
            result += 3;
        } else if (x === y) {
            result += 1;
        }
    });
    return result;
};

var one = ['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'];

console.log(points(one));

console.log("Tests ---------------------:");

var countSquares = function countSquares(cuts) {
    return cuts !== 0 ? 4 * (cuts + 1) * cuts + 2 * (cuts - 1) * (cuts - 1) : 1;
};

console.log(countSquares(0));
console.log("Tests ---------------------:");

var arrayNewNew = ["az", "toto", "picaro", "zone", "kiwi"];

var partlist = function partlist(arr) {
    var result = [];
    var first = [];
    var second = [];
    var twoPosition = [];
    var temp = "";

    for (var i = 0; i < arr.length; i++) {
        temp = arr[i];
        first = arr.slice(i, i + 1);
        twoPosition.push(first);
        second = arr.slice(i + 1, arr.length);
        twoPosition.push(second);
        result.push(twoPosition);
        twoPosition = [];
    }
    return result;
};

console.log(partlist(arrayNewNew));
