var exampleArray = [2,-5,10,5,4,-10,0];
var sum = 0, index = 0; index2 = 0

function processs(array) {
	var results = []
	var index_results = []
	while (index < array.length) {
	  while (index2 < array.length) {
	    if (array[index]+array[index2] === 0 ) {
	    	if (contains(index_results, index) === false) {
	    		index_results.push(index,index2);
	    		results.push([index,index2]);
	    	}
	    }
	  	index2++;
	  }
	  index2 = 0
	  index++;
	}
	return results;
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

var results = processs(exampleArray);
console.log(results);


var numbers = "80:70:90:100";	
function average(numbers) {
	var strings_array = numbers.split(":");
	var numbers_array = strings_array.map(function (x) {return parseInt(x)})
	var total = numbers_array.reduce(function (sum, number){
		return sum += number;
	});
	return (total/numbers_array.length)
}
console.log (average(numbers));
