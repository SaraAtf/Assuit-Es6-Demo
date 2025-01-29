import sayHello, { add, square } from "./test.js";

// import * as all from "./test.js";

// all.add(3, 4);
// all.square(5);
// all.default();

/**
 ====== export
     -- Naming
      -- Default
 
 */
// proxy

// let person = { age: 20, fname: "ali" };

// let handler = {
// 	get: function (target, prop, proxy) {
// 		return target[prop];
// 	},
// 	set: function (target, prop, value, proxy) {
// 		if (value <= 0) {
// 			throw "can not set age prop with negative value";
// 		} else {
// 			target[prop] = value;
// 		}
// 		return true;
// 	},
// };

// let myProxy = new Proxy(person, handler);

// myProxy.age = 60;
