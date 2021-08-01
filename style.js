'use strict'

// const weekDaysService = {
//     days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
//     getDay(day) {
//         day = String(day).toLowerCase();
//         const index = this.days.indexOf(day);
//         if (index === -1) return 'invalid day';
//         return this.days[index];
//     },
// };

// const isWeekDay = (day) => {
//     switch (weekDaysService.getDay(1)) {
//         case weekDaysService.getDay('monday'):
//         case weekDaysService.getDay('tuesday'):
//         case weekDaysService.getDay('wednesday'):
//         case weekDaysService.getDay('thursday'):
//         case weekDaysService.getDay('friday'):
//         case weekDaysService.getDay('saturday'):
//         case weekDaysService.getDay('sunday'):
//             return true;
//         default:
//             return false;
//     }
// };
// console.log(isWeekDay('Sunday'));

// for (let i = 0, input; i < weekDaysService.days.length; input === 'next' ? i++ : i = weekDaysService.days.length) {
//     console.log(weekDaysService.days[i]);
//     input = prompt('Enter text:');
// }

// const set = new Set(['hello', 'world']);
// for (const elem of weekDaysService) {
//     console.log(elem);
// }

// for (const [index, ele] of weekDaysService.days.entries()) {
//     console.log(`[ ${index}, ${ele} ]`);
// }

// function throwError() {
//     throw { error: 'Warning' };
// }
// try {
//     throwError();
//     console.log('AB');
// } catch (errObj) {
//     console.log(errObj);
// } finally {
//     console.log('finally block');
// }

// function add(x, y) {
//     return x + y;
// }

// const functionCall = add(2, 3);
// const obj = { addAsMethod: add, name: 'Nam Truong' };
// const methodCall = obj.addAsMethod(5, 5);
// const inst = new add();
// console.log(inst(1,2));

// const obj = {
//     name: 'Nam Truong',
//     myMethod() {
//         console.log(this);
//         console.log(this.name);
//     },
//     myMethod1: function () {
//         console.log(this);
//         console.log(this.name);
//     },
// };
// obj.myMethod();
// obj.myMethod1();

// function ordinaryFunc(data) {
//     console.log(this, data);
// }
// ordinaryFunc({a: 1});

// function add(x, y = 0, z) {
//     console.log(`This : ${this}`);
//     console.log(`x: ${x} - y: ${y}`);
//     console.log(z);
//     return x + y;
// }

// const add8 = add.bind(undefined, 8);
// console.log(add8());

// console.log((() => { }) instanceof Function); //arrow function is categorized as function
// console.log({ method() { } }.method instanceof Function); //method
// console.log((class SomeClass {}) instanceof Function); // class

// const obj = {
//     name: 'Nam Truong',
//     age: 24,
//     someMethod() {
//         function ordinaryFunc1() {
//             console.log(`OrdinaryFunc1 tries to access 'this' : ${this.name}`);
//         }
//         ordinaryFunc1.call(this);
//         const ordinaryFunc2 = function () {
//             console.log(`OrdinaryFunc2 tries to access 'this': ${this.name}`);
//         }
//         ordinaryFunc2.call(this);
//         const arrowFunc = () => {
//             console.log(`Arrowfunc tries to access 'this': ${this.name} `);
//         };
//         arrowFunc();
//     }
// };
// obj.someMethod();

/*   4 kinds of FUNCTIONS AND METHODS
    - Synchronous Functions -> return (1 value)
        + function f() {} -> function declaration
        + f = function() {} -> anonymous function expression
        + f = function f1() {} -> named function expression
        + f = () => {} -> arrow function
    - Synchronous Method -> return (1 value)
        + { method() {} }
    - Synchronous generator functions -> return iterable (0+ value)
        + function* f() {}
        + f = function* () {}
        + f = function* f1() {}
    - Synchronous generator method -> return iterable (0+ value)
        + { * method() {} }
    - Asynchronous functions -> return promise ( 1 value )
        + async function f() {}
        + f = async function () {}
        + f = async function f1() {}
        + f = async () => {}
    - Asynchronous method -> return promise ( 1 value )
        + { async method() {} }
    - Asynchronous generator functions -> return asynchronus iterable (0+ value)
        + async function* () {}
        + f = async function* () {}
        + f = async function* f1() {}
    - Asynchronous generator method -> return async iterable (0+ value)
        + { async * method() {} }
*/

// function selectEntries({ name = 'No name', age = 'No age' } = {}) { // simulating named parameter
//     //abbreviation for { name: name='No name, age: age='No age' }
//     return console.log(`${name} - ${age}`);
// }
// selectEntries({ name: 'Nam Truong', age: 24 });
// selectEntries();

// import { sq, ls, inCounter, counter } from './my-math.js'; //importing
// import * as myMath from './my-math.js';
// import test from './my-math.js';

// // const square = require('./my-math.js'); //destructuring

// console.log(sq(5));
// console.log(myMath.sq(123));
// console.log(myMath.ls);
// console.log(test);
// console.log(myMath.default);
// console.log(myMath.counter);
// console.log(myMath.inCounter());
// console.log(myMath.counter);
// console.log(counter);
// console.log(inCounter());
// console.log(counter);
// console.log(myMath.counter);

// const dir = './';
// const moudleSpecifer = `${dir}my-math.js`;

// function callFuncSquare(num) {
//     return import(moudleSpecifer).then(myMath => {
//         return myMath.square(num);
//     });
// }
// async function callFuncSquare1(num) {
//     const myMath = await import(moudleSpecifer);
//     return myMath.square(num);
// }

// callFuncSquare(5).then(result => console.log(result));
// callFuncSquare1(10).then(result => console.log(result));

// console.log(import.meta.url);
// const urlOfData = new URL('index.html', import.meta.url);
// console.log(urlOfData);


// import obj from './test1.js'; // default import
// import { helloWorld, DISTANCE } from './test2.js'; //named import
// import * as test2 from './test2.js'; // namespace import
// import { getCounter, setCounter } from './test3.js';
// import * as test3 from './test3.js'; // namespace import

// console.log(obj);
// helloWorld();
// console.log(DISTANCE);
// console.log(test2);
// console.log(getCounter());
// setCounter(50);
// setCounter(1)
// console.log(getCounter());
// console.log(test3.getCounter());
// test3.setCounter(9);
// console.log(getCounter());
// console.log(test3.getCounter());

// const getSecretInfor = async () => {
//     const test4 = await import('./test4.js');
//     return test4;
// };

// async function getSecretInfo1() {
//     return import('./test4.js');
// }

// getSecretInfor().then(test4 => console.log(test4.AGE));
// getSecretInfo1().then(test4 => console.log(test4.SECRET_KEY));

// console.log({ a: 1, b: 2, a: 55 });

// const jane = {
//     first: 'Jane',
//     says(text) {
//         return `${this.first} says "${text}"`
//     },
// };
// console.log(jane.says('Card'));
// const func = jane.says.bind(jane);
// console.log(func('hello'));
// const func1 = text => jane.says(text);
// console.log(func1('VCL'));

// console.log(...{ a: 1, b: 2 });

// const person = [
//     {
//         surname: 'Zoe',
//         address: {
//             street: {
//                 name: 'Sesame Street',
//                 number: '123'
//             }
//         },
//     },
//     {
//         surname: 'Zoe',
//     },
//     {
//         surname: 'Zoe',
//         address: {
//         },
//     },
//     {
//         surname: 'Zoe',
//         address: {
//             street: {
//             },
//         },
//     },
// ];

// const streetNames = person.map(p => p.address?.street?.name ?? '( no name )');
// console.log(streetNames);
// console.log(person?.name);

// const address = {
//     street: 'Evergreen Terrace',
//     number: '742',
//     city: 'Springfield',
//     state: 'NT',
//     zip: '49007',
//     toString: function () {
//         return `${this.street} - ${this.number}`;
//     },
//     valueOf() { return this.zip },
// };
// function pick(object, ...keys) {
//     const filteredEntries = Object.entries(object).filter(([key, _value]) => keys.includes(key));
//     return Object.fromEntries(filteredEntries);
// }
// console.log(pick(address, 'state', 'zip'));

// function invert(object) {
//     const reservedEntries = Object.entries(object).map(([key, value]) => [value, key]);
//     return Object.fromEntries(reservedEntries);
// }

// console.log(invert(address));

// function fakeFromEntries(iterable) {
//     const result = {};
//     iterable.forEach(([key, value]) => {
//         let coercedKey = key;
//         coercedKey = typeof key === 'string' || typeof key === 'symbol' ? key : String(key);
//         result[coercedKey] = value;
//     });
//     return result;
// }
// console.log(Object.keys(fakeFromEntries(Object.entries(address))));

// console.log(String(address));
// console.log(Number(address));

// const obj = { a: 1, b: 2, c: 3 };
// Object.defineProperty(obj, 'a', { enumerable: false });
// console.log(obj.a);

// const objA = {
//     companyName: 'FPT Software',
//     companyAddress: '206 Nguyen Thai Son',
// };

// const objB = {
//     __proto__: objA,
//     name: 'Nam Truong'
// };

// objB.companyName = 'Home';

// console.log(objB);

// const personProto = {
//     describe() {
//         return `Person named ${this.name}`
//     },
// };

// const nam = {
//     __proto__: personProto,
//     name: 'Nam Truong',
// };

// const jane = {
//     __proto__: nam,
//     name: 'Jane'
// };

// console.log(nam.describe());
// console.log(jane.describe());

// console.log(personProto.isPrototypeOf(nam));
// console.log(nam.isPrototypeOf(jane));
// console.log(personProto.isPrototypeOf(personProto));

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     describe() {
//         console.log(`${this.name} - ${this.age}`);
//     }
//     get getFullName() {
//         return `Name: ${this.name} - Age: ${this.age}`;
//     }
//     static get getFullName() {
//         return `Name: ${this?.name ?? '(no name)'} - Age: ${this?.age ?? '(no age)'}`;
//     }
// }

// const nam = new Person('Nam Truong', 24);
// console.log('describe' in nam, nam);

// const _counter = new WeakMap();
// const _action = new WeakMap();

// class Countdown {
//     constructor(counter, action) {
//         _counter.set(this, counter);
//         _action.set(this, action);
//     }
//     dec() {
//         let counter = _counter.get(this);
//         counter--;
//         _counter.set(this, counter);
//         if (counter === 0) {
//             _action.get(this);
//         }
//     }
// }

// console.log(Object.keys(new Countdown()));

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     describe() {
//         return `Person named ${this.name}`;
//     }
//     static logNames(persons) {
//         for (const person of persons) {
//             console.log(person.name);
//         }
//     }
// }

// class Employee extends Person {
//     constructor(name, title) {
//         super(name);
//         this.title = title;
//     }
//     describe() {
//         return `${super.describe()} - ${this.title}`
//     }
// }

// const nam = new Employee('Nam Truong', 'Javascript dev');
// console.log(nam.describe());
// console.log(Employee.prototype.describe.call({name: 'HUHU', title: 'DEV'}));
// console.log(nam);
// console.log('logNames' in Employee);

// console.log(Employee instanceof Person);

// const p = Object.getPrototypeOf.bind(Object);

// console.log(p({}) === Object.prototype);
// console.log(p(p({})) === null);


// console.log(p([]) === Array.prototype);
// console.log(p(p([])) === Object.prototype);
// console.log(p(p(p([]))) === null);

// console.log(p(function () { }) === Function.prototype);
// console.log(p(p(function () { })) === Object.prototype);
// console.log(p(p(p(function () { }))) === null);

// console.log(nam instanceof Person);


// const ahihi = { foo: 123, hasOwnProperty: true };
// console.log(Object.prototype.hasOwnProperty.call(ahihi, 'foo'));
// console.log({}.hasOwnProperty.call(ahihi, 'hasOwnProperty'));

// const Branded = (Sup) => class extends Sup {
//     setBrand(brand = 'no brand') {
//         this._brand = brand;
//         return this;
//     }
//     getBrand() {
//         return this._brand ?? '(no brand)';
//     }
// };

// const Price = (Sup) => class extends Sup {
//     setPrice(price = 0) {
//         this._price = price;
//         return this;
//     }
//     getPrice() {
//         return this._price ?? '(no price)';
//     }
// };

// class Car extends Price(Branded(Function)) {
//     constructor(model) {
//         super();
//         this._model = model;
//     }
//     toString() {
//         return `${this.getBrand()} - ${this._model} - ${this.getPrice()}`;
//     }
// }

// const toyota = new Car('Limissssted').setBrand().setPrice(100_000_000);
// console.log(typeof toyota, toyota);
// console.log(toyota.toString());

// const trunk = { __proto__: Car.prototype, _model: 'Champion' };
// console.log(trunk.setBrand('Trunk').setPrice().toString());
// console.log(typeof trunk, trunk);
// console.log(Object.getPrototypeOf(Object) === Function.prototype);
// console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));
// console.log(toyota instanceof Object);
// console.log(Object.getPrototypeOf({}) === Object.prototype);
// console.log(Object.getPrototypeOf(function () { }) === Object.prototype);
// console.log((function () { }) instanceof Object);
// console.log(Object.prototype.isPrototypeOf([]));

// const text = document.getElementById('test');
// console.log(text);

// const fake = {
//     signal: 'It is fake object',
//     addEventListerner(event, callback) {
//         if (event === 'click') return callback.call(this, { altKey: false, button: 0 });
//     },
// };

// fake.addEventListerner('click', function (event) {
//     console.log(this?.signal ?? '(No value for this)');
//     console.log(event);
// });

// function forEach(arrEles, callback, thisArg) {
//     for (let i = 0; i < arrEles.length; i++) {
//         callback.apply(thisArg, [arrEles[i], i, arrEles])
//     }
// }

// let name = '';

// forEach(['n', 'a', 'm'], function (val, index, arr) {
//     name += val;
//     if (index === arr.length - 1) name += ` ${this}`;
// }, 'Truong')

// console.log(name);

// let name1 = '';

// ['n', 'a', 'm'].forEach(function (val, index, arr) {
//     name1 += val;
//     if (index === arr.length - 1) name1 += ` ${this}`;
// }, 'Truong')
// console.log(name1);

// let name2 = '';
// [].forEach.call(['n', 'a', 'm'], function (val, index, arr) {
//     name2 += val;
//     if (index === arr.length - 1) name2 += ` ${this}`;
// }, 'Truong')
// console.log(name2);

// let name3 = '';
// Array.prototype.forEach.call(['n', 'a', 'm'], function (val, index, arr) {
//     name3 += val;
//     if (index === arr.length - 1) name3 += ` ${this}`;
// }, 'Truong')
// console.log(name3);

// console.log(p([]) === Array.prototype);

// const obj = { foo: 1 };
// console.log(typeof obj.toString);

// const proto1 = {};
// const proto2 = {};

// const obj = Object.create(proto1);
// console.log(Object.getPrototypeOf(obj) === proto1);
// Object.setPrototypeOf(obj, proto2);
// console.log(Object.getPrototypeOf(obj) === proto2);

// const a = {};
// const b = { __proto__: a };
// const c = { __proto__: b };

// console.log(c.isPrototypeOf(a));

// const personProto = {
//     describe() {
//         console.log(`Person named ${this.name}`);
//     },
// };

// const nam0 = {
//     __proto__: personProto,
//     name: 'Nam Truong'
// };

// const nam1 = {
//     __proto__: personProto,
//     name: 'Nam Truong1'
// };

// nam0.describe();
// nam1.describe();

// console.log(Object.getPrototypeOf(nam0) === personProto);

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     describe() {
//         console.log(`Person named ${this.name}`);
//     }
// }

// const nam = new Person('NamTruong');

// console.log(Person.prototype);
// console.log(Object.getPrototypeOf(nam) === Person.prototype);
// console.log(nam.constructor.name);

// const NameServices = Sup => class extends Sup {
//     setName(name = '( no name )') {
//         this._name = name;
//         return this;
//     }
// };
// const AgeServices = Sup => class extends Sup {
//     setAge(age = '( no age )') {
//         this._age = age;
//         return this;
//     }
// };

// class Person extends NameServices(AgeServices(Object)) {
//     constructor(title = '( no title )') {
//         super();
//         this._title = title;
//     }
//     getFullInformation() {
//         console.log(`${this._name ?? '( no name )'} - ${this._age ?? '( no age )'} - ${this._title ?? '( no title )'}`);
//     }
// }

// const nam = new Person('Js dev').setName('Nam').setAge(24);
// nam.getFullInformation();
// console.log(nam);
// const instanceOfPerson = new (Object.create(Person.prototype)).constructor('JAVA').setName().setAge();
// console.log(instanceOfPerson);
// const instanceOfPerson1 = { __proto__: Person.prototype, _title: 'Python' }.setAge(21).setName('CC');
// console.log(instanceOfPerson1);

// const iterable = ['a', 'b']; // an object whose contents can be traversed sequentially
// const iterator = iterable[Symbol.iterator](); // a pointer used for the traversal
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function logAll(iterable) {
//     const iterator = iterable[Symbol.iterator]();
//     while (true) {
//         const { value, done } = iterator.next();
//         if (done) break;
//         console.log(value);
//     }
// }
// const [first, second, third] = iterable; // destructuring via array using iteration under the hood
// console.log(first, second, third);

// const mySet = new Set().add('a').add('@@').add('CC');
// for (const ele of mySet) console.log(ele);
// const { a, CC } = mySet;
// console.log(a, CC);
// const [x, y] = mySet;
// console.log(x, y);

// const obj = {
//     name: 'Nam Truong',
//     age: 24,
//     title: 'Javascript searcher',
// };

// Object.keys(obj).forEach((val) => {
//     console.log(obj[val]);
// });
// Object.entries(obj).forEach(([key, val]) => console.log(val));

// function test(...para) {
//     console.log(para);
// }
// test(...'Nam Truong');
// console.log([...'Javascript']);

// const arr = ['a', 'b'];
// console.log(...arr.keys());

// const arrayLikeObject = {
//     length: 2,
//     0: 'Nam Truong',
//     1: 'Javascript Researcher',
// };

// console.log(Array.from(arrayLikeObject));

// const domCollection = document.querySelectorAll('a');
// console.log('map' in domCollection);
// const copyDomCollection = [...domCollection];
// console.log(copyDomCollection.map(x => x.href));
// console.log(Array.from(new Set([1, 2, 3, 4, 5])));
// console.log(Array.from({ length: 2, 0: 'Nam', 1: 'Truong' }));

// console.log(Array.from([1, 2, 3], x => x + 1));

// const test1 = new Array(3).fill(1);
// console.log(test1);

// const test2 = new Array(3).fill({});
// test2[0].prop = true;
// console.log(test2);

// const test3 = Array.from(new Array(3), () => ({}));
// test3[0].pro = true;
// console.log(test3.entries());

// const test4 = Array.from({ length: 1000 }, () => ({ zip: Math.floor(Math.random() * 100) }));
// console.log(test4);

// const denseArray = [1, 2, 3]; // Dense Array
// const sparseArray = [1, , 3]; // Sparse Array

// const listPersons = [
//     {
//         id: 2,
//         name: 'NaM1'
//     },
//     {
//         id: 1,
//         name: 'Nam'
//     },
//     {
//         id: 3,
//         name: 'Nam3'
//     }
// ];

// const findedPerson = { ...listPersons.find(val => val.id === 1) };
// const findedIndex = listPersons.findIndex(({ id }) => id === 3);
// const resultOfMapFunc = listPersons.map((value, index, arr) => ({ ...value, name: value.name + '@' }));
// const resultsOfFlatMapFunc = listPersons.flatMap((value, index, array) => [value, { ...value, name: value.name + 'Copy' }]);
// const resultOfProcessArray = processArray([1, -5, 6], throwIfNegative);
// const filteredValues = resultOfProcessArray.flatMap((ele, index, array) => ele.value ? [ele.value] : []);
// const filteredErrors = resultOfProcessArray.flatMap((ele, index, array) => ele.error ? [ele.error] : []);
// const resultOfFilterMethod = listPersons.filter((value, index, arr) => value.id > 1);
// const resultOfIndexOf = listPersons.indexOf(findedPerson, 1);
// console.log(resultOfIndexOf);
// console.log(fakeIndexOfByUsingReduceMethod(listPersons, findedPerson, 1));

// function fakedFind(array, callback, thisArg = undefined) {
//     for (const [index, val] of array.entries()) {
//         if (callback.call(thisArg, val, index, array)) return val;
//     }
//     return undefined;
// }

// function fakedFindIndex(array, callback, thisArg = undefined) {
//     for (const [index, val] of array.entries()) {
//         if (callback.call(thisArg, val, index, array)) return index;
//     }
//     return -1;
// }

// function fakedMap(array, callback, thisArg = undefined) {
//     const result = [];
//     for (const [index, value] of array.entries()) {
//         result.push(callback.call(thisArg, value, index, array));
//     }
//     return result;
// }

// function fakedFlatMap(array, callback, thisArg = undefined) {
//     if (!Array.isArray(array)) throw new Error('Invalid Array');

//     const result = [];

//     for (const [index, value] of array.entries()) {
//         const resultOfCallback = callback.call(thisArg, value, index, array);
//         Array.isArray(resultOfCallback) ? result.push(...resultOfCallback) : result.push(resultOfCallback);
//     }

//     return result;
// }

// function processArray(array, callback) {
//     return array.map(x => {
//         try {
//             return { value: callback(x) };
//         } catch (error) {
//             return { error }
//         }
//     });
// }

// function throwIfNegative(value) {
//     if (value < 0) throw new Error(`Illegal value: ${value}`);
//     return value;
// }

// function fakedFilter(array, callback, thisArg = undefined) {
//     if (!Array.isArray(array)) throw new Error('Illegal array');
//     const result = [];
//     for (const [index, value] of array.entries()) {
//         if (callback.call(this, value, index, array)) result.push(value);
//     }
//     return result;
// }

// function addAll(arr) {
//     const startSum = 0;
//     const callback = (sum, ele, index, array) => sum + ele;
//     return arr.reduce(callback, startSum);
// }

// function fakeIndexOfByUsingReduceMethod(array, searchValue, fromIndex = 0) {
//     const notFound = -1;
//     return array.reduce((accumulator, ele, index, array) => {
//         return index < fromIndex ? notFound : (accumulator !== notFound ? accumulator : (ele.id === searchValue.id ? index : notFound));
//     }, notFound);
// }

// function destructiveDouble(arr) {
//     return arr.reduce((accumulator, ele, index, arr) => {
//         accumulator.push(ele * 2);
//         return accumulator;
//     }, []);
// }

// function nonDestructiveDouble(arr) {
//     return arr.reduce((accumulator, ele, index, arr) => [...accumulator, ele * 2], []);
// }

// function flatArray(array) {
//     if (!Array.isArray(array)) throw new Error('Illegal array');
//     const result = [];
//     array.forEach((val, index, array) => {
//         if (!Array.isArray(val)) {
//             result.push(val);
//         } else {
//             while (val.some(ele => Array.isArray(ele))) {
//                 val = val.flat();
//             }
//             result.push(...val);
//         }
//     });
//     return result;
// }

// // Pratice CRUD elements in Array -> Non-destructive

// const listObjs = [
//     { id: 1, name: 'Nam' },
//     { id: 2, name: 'Nam1' },
//     { id: 3, name: 'Nam2' },
//     { id: 4, name: 'Nam3' },
//     { id: 5, name: 'Nam4' },
// ];


// const firstElement = { ...listObjs.find((val, index, arr) => val.id === 1) };
// const firstIndex = listObjs.findIndex((val, index, arr) => val.id === firstElement.id);
// const removeFirstEle = listObjs.slice(firstIndex + 1);

// const lastElement = { ...listObjs.find((val, index, array) => val.id === 5) };
// const lastIndex = listObjs.findIndex(val => val.id === lastElement.id);
// const removelastEle = listObjs.slice(0, lastIndex);

// const arbitraryElement = { ...listObjs.find(val => val.id === 3) };
// const arbitraryIndex = listObjs.findIndex(val => val.id === arbitraryElement.id);
// const removeArbitraryEle = [...listObjs.slice(0, arbitraryIndex), ...listObjs.slice(arbitraryIndex + 1)];

// const addFirstElement = [{ id: 6, name: 'Nam5' }, ...listObjs];
// const addLastElement = [...listObjs, { id: 6, name: 'Name5' }];
// const addArbitraryEle = [...listObjs.slice(0, arbitraryIndex + 1), { id: 6, name: 'Name5' }, ...listObjs.slice(arbitraryIndex + 1)];

// const editArbitraryEle = [...listObjs.slice(0, arbitraryIndex), { ...arbitraryElement, name: 'Edited Name' }, ...listObjs.slice(arbitraryIndex + 1)];

// const filterElement = listObjs.filter((val, index, arr) => val.id > 3);

// const filterElementByName = listObjs.filter(val => val.name.toLowerCase().includes('nam4'));

// const sortElementByDescendingId = [...listObjs].sort((a, b) => b.id - a.id);

// console.log(listObjs);
// console.log(sortElementByDescendingId);

// for (const ele of [...'String'].join('@')) {
//     console.log(ele);
// }

// const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 1, 2, 3, 4, 5, 6, 7, 234, 123];
// const arrObjs = [
//     {
//         id: 1,
//         name: 'Nam1'
//     },
//     {
//         id: 1,
//         name: 'Nam1'
//     },
//     {
//         id: 1,
//         name: 'Nam1'
//     },
//     {
//         id: 2,
//         name: 'Nam2'
//     },
//     {
//         id: 2,
//         name: 'Nam2'
//     },
//     {
//         id: 3,
//         name: 'Nam3'
//     },
//     {
//         id: 3,
//         name: 'Nam3'
//     },
//     {
//         id: 3,
//         name: 'Nam3'
//     },
//     {
//         id: 4,
//         name: 'Nam4'
//     },
//     {
//         id: 4,
//         name: 'Nam4'
//     },
//     {
//         id: 4,
//         name: 'Nam4'
//     },
//     {
//         id: 4,
//         name: 'Nam4'
//     },
//     {
//         id: 4,
//         name: 'Nam4'
//     },
//     {
//         id: 4,
//         name: 'Nam4'
//     },
// ];
// const obj = {
//     id: 123,
//     name: 'Nam Truong',
//     title: 'Js researcher',
//     age: 24
// };

// function countChars(chars) {
//     const map = new Map();
//     for (let char of chars) {
//         char = char.toLowerCase();
//         const preCount = map.get(char) ?? 0;
//         map.set(char, preCount + 1);
//     }
//     return Object.fromEntries(map);
// }

// const map = new Map(arrObjs.entries());

// const mappedMap = new Map([...map].map(([index, { id, name }]) => [`id@${id}`, `name@${name}`]));
// const filteredMap = new Map([...map].filter(([index, { id, name }]) => id >= 3).map(([index, { id, name }]) => [`id@${id}`, `name@${name}`]));
// console.log([...mappedMap]);
// console.log([...filteredMap]);
// const combinedMap = new Map([...mappedMap, ...filteredMap, [[1, 2, 3], 'value']]);
// console.log([...combinedMap]);

// console.log([...arrNumbers.entries()])
// const testMap = new Map(Array.from(arrNumbers.entries()).map(([key, val]) => [val, val]));
// console.log([...testMap.keys()]);


// function processDuplicateElementsForArray(arr) {
//     const map = new Map();
//     for (const ele of arr) {
//         if (!map.has(ele.id)) {
//             map.set(ele.id, ele);
//         }
//     }
//     return [...map.values()];
// }

// function countedObject(arr) {
//     const arrId = arr.map(val => val.id);
//     const map = new Map();
//     for (const id of arrId) {
//         const findedElement = arr.find(val => val.id === id);
//         const preCount = map.get(findedElement) ?? 0;
//         map.set(findedElement, preCount + 1);
//     }
//     return [...map].map(([val, counted]) => ({ ...val, counted }));
// }

// console.log(countedObject(arrObjs));

// import { CountDown } from './count-down-services.js';
// import { Person } from './person-service.js';

// const cache = new WeakMap();
// function countOwnKeys(obj) {
//     const setCache = () => {
//         const count = Object.keys(obj).length;
//         cache.set(obj, count);
//         return [count, 'computed'];
//     };
//     return cache.has(obj) ? [cache.get(obj), 'cached'] : setCache();
// }
// const obj = { id: 1, name: 'Nam Truong', age: 24 };
// console.log(countOwnKeys(obj));
// console.log(countOwnKeys(obj));

// const countDown = new CountDown(2, () => console.log('Boom!'));
// console.log(Object.entries(countDown));
// countDown.dec();
// console.log(countDown.getPrivateCounter);
// countDown.dec();
// console.log(countDown.getPrivateCounter);
// countDown.dec();
// console.log(countDown.getPrivateCounter);

// const person = new Person('Nam Truong', 24);
// console.log(String(person));
// console.log(Object.keys(person));

// const person1 = { __proto__: Person.prototype };
// console.log(Object.keys(person1));
// console.log(person1.toString());
// console.log(Object.entries(Person.prototype));

// const tesObj = {
//     name: 'Nam@#@',
//     func: function (...args) {
//         console.log(args);
//     },
// };
// tesObj.func.call(tesObj, ...[1,2,3])

const str = 'Mã Sinh Nhật của tôi LOLTTYS2TMHCS. Nhập mã này để tích Bóng Bay đổi thưởng nhé! Chưa hết, nhớ vào Liên Minh Huyền Thoại ngày 8/8 để nhận phần quà bất ngờ nhé! #SinhNhat9Tuoi #LMHT'
const index = str.indexOf('LOL');
console.log(str.slice(21, 34));