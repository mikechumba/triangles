
let dimensions = {
	x: document.getElementById('sideA').value,
	y: document.getElementById('sideA').value,
	z: document.getElementById('sideA').value
};

let sides = [];

sides.push(dimensions.x, dimensions.y, dimensions.z);

function checkProperty(propName) {
	return !isNaN(propName)
}

let isNumber = sides.every(checkProperty);

let a, b, c;

a = parseInt(sides[0]);
b = parseInt(sides[1]);
c = parseInt(sides[2]);

var checkCondition = [];

checkCondition.push(((a + b) > c), ((b + c) > a), ((c + a) > b));

function checkTriangle(element) {
	return element;
}

let isTriangle = checkCondition.every(checkTriangle)
/* let isTriangle = checkCondition.every(); */

/* alert(isTriangle); */



function triangleType() {
	let answer;
	
	if (!(isNumber)) {
		answer = 'Please enter only valid number values!';
	} else {
		if (isTriangle && (a === b && b === c)) {
			answer = 'It is an Equilateral Triangle';
		} else if (isTriangle && (a == b || b == c || c == a)) {
			answer = 'It is an Isosceles Triangle';
		} else if (isTriangle) {
			answer = 'It is a Scalene Triangle';
		} else {
			answer = 'That is in no way a Triangle';
		}
	}
	
	return answer;
}

alert(triangleType());

