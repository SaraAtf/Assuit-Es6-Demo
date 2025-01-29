// Symbol
// let x = Symbol("age"); // unique
// let y = Symbol("age"); // unique

// console.log(x == y);

// console.log(x);

// person[Symbol.iterator]();
// console.log(Object.keys(person));
// console.log(person[key]());
// console.log(person[x]);
// let x = "age";
// let person = {
// 	fname: "ali",
// 	[x]: function () {
// 		console.log("Hello");
// 		return { trackName: "mearn" };
// 	},
// };

// console.log(person[x]);
// console.log(person["age"]);
//let iter = arr[Symbol.iterator](); // valuess

// for (let value of arr) {
// 	console.log(value);
// }
// console.log(iter.next()); // {value:"mona",done:false}
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
/**---------------------- */

// let arr2 = {
// 	name: "book",
// 	[symbol.iterator]: function () {
// 		console.log("hello discount");
// 	},
// };

// arr2[symbol.iterator] = function () {
// 	console.log("discount override");
// };
// product.discount();

// for of -- iterable -- iter.next() -- values
//// iterable
/**

	function (){
	
	
		return {
		
			next:function(){
				return {value:'',done:false}
			}
		}
	}
 */
// let person = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// };

// // first step to convert not iterable object to iterable object
// person[Symbol.iterator] = function () {};
// console.log(arr); //Symbol.iterator
// console.log(person); // not found
// not iteratable
// for in -- object
// for (let i in person) {
// 	console.log(i); // key
// }
// for of
// console.log("---------------");
// // object iterable
// for (let value of person) {
// 	console.log(value);
// }
// console.log(y);
// let arr = ["mona", "ahmed", 10]; // arr Object iterable
// function generateEvenNumbers() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step > 10) {
// 				return { value: undefined, done: true };
// 			} else {
// 				return { value: step, done: false };
// 			}
// 		},
// 	};
// }
// arr[Symbol.iterator] = generateEvenNumbers;

// for (let i of arr) {
// 	console.log(i);
// }
function generateEvenNumbers() {
	let step = 0;
	return {
		next: function () {
			step += 2;
			if (step > 10) {
				return { value: undefined, done: true };
			} else {
				return { value: step, done: false };
			}
		},
	};
}

let person2 = {
	fname: "Ali",
	age: 20,
	color: "red",
};

person2[Symbol.iterator] = generateEvenNumbers;

for (let i of person2) {
	console.log(i);
}
// generator function
function* getEven() {
	for (let i = 0; i <= 10; i += 2) {
		yield i;
	}
}
/**--------------------- */
function generateEvenNumbers() {
	let step = 0;
	return {
		next: function () {
			step += 2;
			if (step > 10) {
				return { value: undefined, done: true };
			} else {
				return { value: step, done: false };
			}
		},
	};
}

// generator function
function* handelteration() {
	for (let key in this) {
		yield `{${key}:${this[key]}}`;
	}
}

let person = {
	fname: "Ali",
	age: 20,
	color: "red",
};

let product = {
	name: "book",
	price: 200,
};
person[Symbol.iterator] = handelteration;
product[Symbol.iterator] = handelteration;

for (let i of person) {
	console.log(i);
}
console.log("----------------");
for (let i of product) {
	console.log(i);
}

let arr = ["mona", "ali", 20, "hello"];

arr[Symbol.iterator] = function () {
	let count = 0;
	// this --- arr
	return {
		next: () => {
			if (count == this.length) {
				return { value: undefined, done: true };
			} else {
				return { value: this[count++], done: false };
			}
		},
	};
};

// for (let value of arr) {
// 	console.log(value); //
// }

/**------------------------- OOP ---------- */

function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.display = function () {}; // shared to instances
// Superclass or parentClass
class Person {
	// overloading -- default values
	constructor(name = "", age = "") {
		this.name = name;
		this.age = age;
	}
	display() {
		console.log(`${this.name} ${this.age}`);
	}
}
// subClass - child Class
// inheritance

class User extends Person {
	constructor(name, age, password = "") {
		super(name, age);
		this.password = password;
	}

	// polymorphism -- override overload
	// override to display
	display() {
		super.display();
		console.log(`${this.password}`);
	}
	generatePassword() {
		console.log(this.password.toUpperCase() + "#$%");
	}
}

let user1 = new User("ahmed", 33, "Ahmed123");

user1.display();
user1.generatePassword();
console.log(user1);
/**------------------------ */
// Abstract Class
class Product {
	constructor() {
		if (this.constructor == Product) {
			throw "can not take an object form abstract class";
		}
	}

	discount() {
		throw "Method not implemented";
	}
}

class Phone extends Product {
	constructor() {
		super();
	}
	//override
	discount() {
		console.log("this is discount");
	}
}

let t1 = new Phone();

t1.discount();
/**---------------------------- */
class Employee {
	#salary;
	constructor(name, salary) {
		this.name = name;
		this.#salary = salary;
	}
	//getter

	get getSalary() {
		return this.#salary;
	}

	// setter
	set setSalary(value) {
		this.#salary = value;
	}
}

let emp1 = new Employee("ali", 3000);

emp1.setSalary = 6000; // set
console.log(emp1.getSalary); //get

// //public
// console.log(emp1.name); // get
// emp1.name = "Ahmed"; // set
