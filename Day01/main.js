/**
 * var
 * -------------------------------
 *  = reassign with defernent datatype
 *  = Redeclare
 *  = Hoisting
 *  = added to window object
 *  = function scope
 *
 */

// function showData() {
// 	for (var i = 0; i < 3; i++) {
// 		console.log(i);
// 	}
// 	console.log("i outside loop is :", i);
// }

// showData();

// added to window Object
// var fname = "mona";

// console.log(window.fname); //mona
// console.log(fname); // [window] optional

// Hoisting
// console.log(fname);
// var fname = "mona";
// console.log(fname);
/**
 * let
 * -------------------------------
 *  = reassign with defernent datatype
 *  = can't Redeclare
 *  = can't Hoisting
 *  = not added to window object
 *  = block scope
 * ---------------------------------
 * const
 * -------------------------------
 *  = can't ressign
 *  = can't Redeclare
 *  = can't Hoisting
 *  = not added to window object
 *  = block scope
 *
 */

// console.log(PI)//Error
// const PI = 3.14;
// console.log(window.PI);

// const PI = 34;
// PI = 2; // reassign change value

// console.log(PI);

// function showData() {
// 	let trackName = "mearn";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(trackName); //
// 	}
// 	//console.log("i outside loop is : ", i);
// }

// showData();
// let fname = "ahmed";

// console.log(window.fname);

// let person = { fname: "ali" };

// console.log(person.fname); //ali

// console.log(person.color); //undefined
// let fname;
// console.log(fname);
// fname = "ali";
// console.log(fname);

// console.log(fname); // undefined -- Error
// let fname = "mona";
// 1- reassign
// let fname = "ali";
// fname = "alaa";
// fname = 10;
// fname = true;
// console.log(fname);
//
//3- Hoisting
// console.log(fname);
// // let fname = "ali"; // TDZ
// console.log(fname);
//

//
// const arr = [];

// arr = []; // Error Change New Address Memory
// // Primitive Datatype VS Refernce Datatype

// arr.push("ali"); // Error -- push

// console.log(arr);
// destructring
// let arr = [10, "mona", 20, true];

// let [, , z] = arr;

// console.log(z);
// let [x, y] = [10, 40, 60];

// console.log(x);
// console.log(y);
// object
// destructuring
// let x = person.fname;
// let y = person.color; //key

// console.log(x);
// let person = {
// 	fname: "ahmed",
// 	age: 25,
// 	color: "red",
// 	products: [10, 20, 40],
// };

// // let { fname: fname, color: color } = person;
// let { fname, color, products } = person; // syntax suger

// console.log(fname);
// console.log(color);
// console.log(products);
///////////////////////////////////
// Spread Operator
// let arr1 = [10, 30, "mona", "ahmed"];
// let arr2 = [...arr1];

// arr1.push("new Value");
// console.log("arr1 :", arr1);
// console.log("arr2 :", arr2);
// let arr1 = [10, 30, "mona", "ahmed"];
// let arr2 = [1, 2, 3, 4, 5, ...arr1, ["hello", "PD"]];

// console.log("arr1 :", arr1);
// console.log("arr2 :", arr2);

// let arr = [10, 20, 4, 5, 60, 80];

// console.log(Math.max(...arr));
// rest params
// function showData(x, y, ...z) {
// 	console.log("x", x);
// 	console.log("y", y);
// 	console.log("z ", z);
// }

// showData(20, 50, "mona", "Ahmed");

// let [x, ...y] = ["hello", 10, "mona", "ahmed"];

// console.log(x);
// console.log(y);
// default values
// function showData(x = 0, y = 0) {
// 	console.log(x + y);
// }

// showData(2, 4); //
var fname = "ali";
var myKey = "age";
let person = {
	fname, //key:value fname:fname
	[myKey]: 25,
	display() {
		console.log("Hello display");
	},
};
person.display();

// // function statement or declaration
// function sum(x, y) {
// 	console.log(x + y);
// }

// // function expression

// var add = function (x, y) {
// 	console.log(x + y);
// };

// arrow function

// var sum = (x = 0, y = 0) => {
// 	console.log(x + y);
// };

// sum();
// sum(5, 6);
// var sayHello = () => "ITI";

// let result = sayHello();

// console.log(result);
// var sum = (x, y) => {
// 	console.log("First");
// 	return x + y;
// };

// let result = sum(4, 6);

// console.log(result);

// let square = (x) => x * x;

// console.log(square(5));
// this -- caller -- that pattern
// call bind apply --
// bind
// var fname = "mona";

// let person = {
// 	fname: "Ali",
// 	display: function () {
// 		var that = this; // that pattern
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };
// // this -- refere to caller
// person.display(); // person
// this - window
// var fname = "mona";

// let person = {
// 	fname: "Ali",
// 	display: () => {
// 		// this -- person
// 		setTimeout(() => {
// 			console.log(this.fname); // person.fname
// 		}, 2000); // window
// 	},
// };
// //this -- caller
// person.display(); // person
// arrow function will be binded fromouter context
// let fname = "      mona      ";
// let str = "hello from iti";

// console.log(str.startsWith("h"));
// console.log(str.endsWith("iti"));
// console.log(str.includes("FROM"));
/**
  String API
      trim()
      trimStart
      trimEnd
      includes
      startsWith
      endsWith
 */
// console.log(`
//         ${fname} hello ${fname}

//         hello mearn track
//                 Welcome
// `);

// string

// console.log(`${fname.trim()} hello`);
// console.log(`${fname.trimStart()} hello`);
// console.log(`${fname.trimEnd()} hello`);
