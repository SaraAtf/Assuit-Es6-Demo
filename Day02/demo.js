// Send Requent to API
// x time -- get response
// delay setimout
// callback hell -- clean code
// promises -- send request -- response
// send request to api
// connect front end with your api
// connections --- promises
// extract data from promises
// connect jsonserver
// fetch -- promise -- then catch -- asynct await
// my request -- my api --

// promises -- extract data
var products;

setTimeout(() => {
	products = [100, 200, 300];
	var product;
	setTimeout(() => {
		product = {
			id: products[0],
			name: "Book",
			price: 200,
		};
		// third
		setTimeout(() => {
			var price = product.price;
			// console.log(price);
		}, 500);
	}, 1000);
}, 2000);
/**--------promises------- */
// return promise
function getAllProducts() {
	return new Promise((resolve, reject) => {
		var products;
		setTimeout(() => {
			products = [100, 200, 400];
			products ? resolve(products) : reject("Error on getting Products list");
		}, 2000);
	});
}

function getProduct(productId) {
	var myPromise = new Promise((resolve, reject) => {
		var product = {
			id: productId,
			name: "book",
			price: 2000,
		};

		product ? resolve(product) : reject("Error on getting product deatails");
	});

	return myPromise;
}

function getPrice(product) {
	var myPromise = new Promise((resolve, reject) => {
		var price = product.price;
		price ? resolve(price) : reject("Error on Price");
	});
	return myPromise;
}

// async function execute() {
// 	try {
// 		const products = await getAllProducts();
// 		const product = await getProduct(products[1]);
// 		const price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
// First Request

// getAllProducts()
// 	.then((products) => {
// 		return getProduct(products[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
/**======================== */
// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

async function fetchUsers() {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/users");
		let data = await response.json();
		for (let i = 0; i < data.length; i++) {
			document.writeln(`<h1>${data[i].name}</h1>`);
		}
	} catch (error) {
		console.log(error);
	}
}

fetchUsers();
