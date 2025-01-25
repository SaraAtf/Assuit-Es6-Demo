let person = {
	address: {
		city: "benha",
		code: 123,
		stree: "mohamed ali str",
	},
};

//[fname,age,color]
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);
let result = entries.map((prop) => {
	return { [prop[0]]: prop[1] };
});

console.log(result);
/** Object Assign */
let person1 = {
	fname: "ali",
	color: "red",
};

let person2 = {
	color: "green",
};

// let result = Object.assign(person1, person2, { test: "mearn" });
// let result = Object.assign({}, person1, person2);
Object.assign(person1, person2);

console.log("person1", person1);
console.log("person2", person2);
// use Object.assign to write a clean code
function showData(options = {}) {
	let defaultValues = {
		fname: "default fname",
		age: "default age",
		address: "default address",
	};
	Object.assign(defaultValues, options);
	console.log(`fname = ${defaultValues.fname}
        age = ${defaultValues.age}
        address = ${defaultValues.address}
    `);
}

showData({ fname: "ali", age: 25, address: "alex" });
showData({ fname: "ali" });
showData({ fname: "ali" });
showData();
//async code execution in memory
function first() {
	console.log("first");
	second();
	console.log("End");
}
function second() {
	setTimeout(() => {
		console.log("second");
	}, 2000);
	console.log("after settimeout");
}

first();
//
setTimeout(() => {
	console.log("first");
}, 0);

console.log("Second");

console.log("End");
var x;

setTimeout(() => {
	x = 10;
	console.log(x);
}, 1000);
// call back function
function greet(myFn) {
	myFn(
		function () {
			console.log("Inner fun1");
		},
		function () {
			console.log("Fn2");
		}
	);
}

greet((x, y) => {
	x();
	y();
});
// callback function
//pending --
// fulfilled -- success
// rejected -- error
var myPromise = new Promise(function (x, y) {
	//x({ id: 1, name: "ali" });
	y("Connection error");
});

myPromise
	.then((data) => {
		console.log(data);
		console.log("Hello Success");
	})
	.catch((error) => {
		console.log(error);
		console.log("Error occures :(");
	});
