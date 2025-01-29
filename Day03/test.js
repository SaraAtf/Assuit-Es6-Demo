function add(x, y) {
	console.log(x + y);
}
function square(x) {
	console.log(x);
}
export default function sayHello() {
	console.log("Hello mearn track");
}

function handelOperation() {
	add(4, 5);
	square();
	sayHello();
}
let trackName = "mearn";

export { add, square, handelOperation, trackName };
