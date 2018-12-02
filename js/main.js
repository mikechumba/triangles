
function triangleType() {
	
	let x, y, z;

	x = parseInt(document.getElementById("sideA").value);
	y = parseInt(document.getElementById("sideB").value);
	z = parseInt(document.getElementById("sideC").value);


	var sides = [];

	sides.push(x, y, z);

	function checkProperty(propName) {
		return !isNaN(propName)
	}

	var isNumber = sides.every(checkProperty);

	let a, b, c;

	a = x;
	b = y;
	c = z;

	var isTriangle = ((a + c > b) && (a + b > c) && (b + c > a) );
	
	
	let answer, invalidInput, smiley;
	


	if ((isNumber)) {
		if (isTriangle) {
			smiley = ": )"
			if ((a === b) && (b === c) && (c === a)) {
				answer = "That will make an Equilateral Triangle, <br> because all sides are equal."
			} else if (a == b || a == c || b == c){
				answer = "That will make an Isosceles Triangle, <br>  because two sides are equal."
			} else {
				answer = "That is a Scalene Triangle. <br> No sides are equal."
			}
		} else {
			smiley = ": ("
			answer = "Too bad! Those dimensions won't make any kind of triangle."
		}
	} else {
		invalidInput = "Sorry! Enter only valid numbers."
	}
	
	// return answer;

	if (!(isNumber)) {
		document.getElementById("invalid").innerHTML = invalidInput;
	} else {
		document.getElementById("results").innerHTML = answer;
		document.getElementById("smiley").innerHTML = smiley;
	}
} 

function displayResults() {
	document.getElementById("results").innerHTML = triangleType();
}


function resetFields() {
	location.reload();
}