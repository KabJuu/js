var i;
var iChange = "" ;
for (i=0; i<7; i++) {;
		if (i<7) {
			iChange = iChange + "#"
			console.log (iChange)
		}
}


var result = 0;
var i = 1;
for (i; i<101; i++) {
		if ((i%15) === 0) {
			result = "FizzBuzz";
		} else if (i%5 == 0) {
			result = "Buzz";
		}	else if (i%3 == 0) {
			result = "Fizz";
		}	else result = i;
	console.log (result);
}
 
var myString = "# # # # ";
var result;
var i=1;
for (i; i<9; i++) {
	if (i%2 == 0) {
		result = " "+ myString; 
	} else {
		result = myString;
	}
	console.log (result);
}

function min_result (a, b){
	var a, b;
	if (Math.min(a, b) == a) {
		return a;
	} else {
		return b;
	}
}
	