const mySumElements = list => new Promise((resolve, reject) => {   //TODO example use the Promise
    let sum = 0;
    list.forEach(data => sum += data);

    if (sum === 12835) {
        resolve(sum);
    } else {
        reject("error")
    }

});
const listCorrectly = [787, 323, 423, 4545, 6757];
const listNotCorrectly = [787, 323, 423, 4545, 675];
const testNumbers = numbersList => {
    mySumElements(numbersList)
        .then(result => console.log(`from Promise: ${result}`))
        .catch(error => console.log(`from Promise: ${error}`));
};
testNumbers(listCorrectly);
testNumbers(listNotCorrectly);


const url = "http://api.icndb.com/jokes/random";
const getHttp = url => new Promise((resolve, reject) => {   //TODO next example use the Promise with XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {

        if (xhr.status === 200) {
            let response = JSON.parse(xhr.response);
            resolve(response.value.joke)
        } else {
            reject(xhr.status)
        }
    };
    xhr.onerror = error => {
        reject(`XMLHttpError ${error}`)
    };
    xhr.open("GET", url);
    xhr.send();
});

getHttp(url)
    .then(content => console.log(`Content: ${content}`))
    .catch(error => console.log(`Something was wrong: ${error}`));

const myDelay =  ms => new Promise(resolve =>   //TODO next example use the Promise as delay function
    setTimeout(resolve, ms)
);

myDelay(2000)
    .then(() => console.log("Wow"));

myDelay(3000)
    .then(() => console.log("Next"));

const getData1 = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            status: "OK",
            data: {
                message: "Testing message 1"
            }
        })
    }, 1000)
});

const getData2 = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            status: "OK",
            data: {
                message: "Testing message 2"
            }
        })
    }, 2000);
});

Promise.all([getData1(), getData2()])       //TODO example use Promise.all and Promise.race
    .then(resp => {
        console.log(resp);
        console.log(resp[0]);
        console.log(resp[1]);
    });
Promise.race([getData1(), getData2()])
    .then(resp => console.log(resp));

class Point {                   //TODO simple example use class and subclass ES6 JS
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    toString() {
        return (`${this._x}, ${this._y}`)
    }
    static print(text) {
        console.log(`Example use static method: ${text}`)
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
}

const point = new Point(25, 76);
console.log(point.toString());
Point.print("print");
console.log(point.x);
point.x = 66;
console.log(point.toString());

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this._color = color
    }
    toString() {
        return super.toString() + ' in ' + this._color;
    }
}

const colorPoint = new ColorPoint(34, 56, "red");
console.log(colorPoint.toString());

const returnArray = list => {           //it same: const returnArray = list => list.map(item => item + 1) TODO without return
    return list.map(item => item + 1)
};
const list = [1, 2, 3, 4, 5];
const [first, second, , fourth, fifth] = returnArray(list);
console.log(`Result --> ${first}:${second}:${fourth}:${fifth}`);

const returnObject = (x, y, z) => {     //it same: const returnObject = (x, y, z) => ({x: x + 1, y: y + 2, z: z + 3}) TODO without return
    return {x: x + 1, y: y + 2, z: z + 3}
};
const {x, y, z} = returnObject(5, 6, 7);
console.log(`Object elements --> ${x}:${y}:${z}`);

const testDefaultParametr = (text = "Default") => console.log(`Your parametr --> ${text}`);
testDefaultParametr("something");
testDefaultParametr();

const randomQuantityOfParameters = (...arg) => arg.forEach((item, i) => console.log(`${i + 1}: ${item}`)); // TODO unspecified number of arguments
randomQuantityOfParameters(4, list, false, 8, "wow");
randomQuantityOfParameters(undefined, NaN, true);

const names = ['Jan', 'Zosia', 'Zbyszek', 'Kacper', 'Tomek', 'Magda'];
const [firstName, secondName, ...rest] = names;
console.log(firstName, secondName, rest);
let newName = ['Roman', ...names];
console.log(newName);
newName = [...names, "Gienek"];
console.log(newName);
const anotherName = [...names, ...list];
console.log(anotherName);

const myaverage = (...args) => {
    let sum = 0;
    args.forEach(arg => sum += arg);
    return (sum / args.length).toFixed(2)
};

console.log(myaverage(1, 2, 3, 4, 5));
console.log(myaverage(12, 23, 31, 445, 578));
console.log(myaverage(...list));

const strange = [1, 4, 'Iwona', false, 'Nowak'];
const [, , fir, , sec] = strange;
console.log(`${fir} <--> ${sec}`);

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

console.log("Additional Task_1 --------:");/*TODO*/

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

const arrayNumbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNumbers_2 = [136, 82, 72, 15];

let sum = (array) => {
    return array.reduce((total, num) => total + num);
};

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

function spread(func, ...args) {
    return func(...args);
}

const exampleArray_1 = [1, 2, 3, 4, 5, 6, 7];
const exampleArray_2 = [6, 7, 2, 5];
console.log(`Effect: ${spread(sumNumbers, exampleArray_1)}`);
console.log(`Effect: ${spread(sumNumbers, exampleArray_2)}`);

console.log("Tests ---------------------:");

let points = (games) => {
    let result = 0;

    games.map((game) => {
        let x = game.substring(0, 1);
        let y = game.substring(2, 3);

        if (x > y) {
            result += 3;
        } else if (x === y) {
            result += 1;
        }
    });
    return result;
};

const one = ['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'];

console.log(points(one));

console.log("Tests ---------------------:");

let countSquares = (cuts) => {
    return (cuts !== 0) ? 4 * (cuts + 1) * cuts + 2 * (cuts - 1) * (cuts - 1) : 1
};

console.log(countSquares(0));
console.log("Tests ---------------------:");

const arrayNewNew = ["az", "toto", "picaro", "zone", "kiwi"];

let partlist = (arr) => {
    let result = [];
    let first = [];
    let second = [];
    let twoPosition = [];
    let temp = "";

    for (let i = 0; i < arr.length; i++) {
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
