var app = angular.module('laskin',[]);

app.service('operators', function() {
    this.showResult = function(y,x,z) { //calculates the result and returns it 
	

		if(isNaN(parseFloat(y))) throw "ERROR";  
		if(isNaN(parseFloat(x))) throw "ERROR";

		var calcresult = 0.0000000;
		
		if (z == '+') {
			calcresult = parseFloat(y) + parseFloat(x);
		}

		else if (z == '-') {
			calcresult = parseFloat(y) - parseFloat(x);
		}

		else if (z == '*') {
			calcresult = parseFloat(y) * parseFloat(x);
		}

		else if (z == '/') {
			calcresult = parseFloat(y) / parseFloat(x);
		}

	
		else {
			calcresult = '';
		}

		return calcresult;
	}
    
});

app.controller('laskinController', ['$scope', 'operators', function($scope, operators) {
	
$scope.screenLower = '';
$scope.screenUpper = '';	

$scope.inputKey = function(x) { //prints numbers and decimals to screen

	$scope.screenLower = $scope.screenLower + x;

}

$scope.calculate = function(x) {  //moves the user input to upper screen and clears the lower screen
	$scope.screenUpper = '';	 
	$scope.screenUpper = $scope.screenLower + x;
	$scope.screenLower = '';

}

$scope.chooseOperator = function(operator) { 
	try {
			//splits the string into first number (y) second number(x) and operator (z)
			var y = $scope.screenUpper.substring(0, $scope.screenUpper.length-1);
			var x = $scope.screenLower;	
			var z = $scope.screenUpper.charAt($scope.screenUpper.length-1);
		
			if (operator == '=') { //printing out the result
	
				if(!(isNaN(parseFloat(z)))) throw "ERROR"; //stops weirdness if = is pressed several times in a row
				
				$scope.screenUpper = y + z + x;
				$scope.screenLower = operators.showResult(y,x,z);
			}
	
			else {  
				
				if ($scope.screenUpper != '') { //continuing the calculation from existing result

					$scope.screenLower = x; 
					$scope.calculate(operator);
				}
		
				else  { //preparing the string for calculation
					$scope.calculate(operator);
				}
		
			}
		}
	
	catch (err) {
		$scope.screenLower = err; //in case the user clicks on things he is not supposed to
	}
}	


$scope.clearScreen = function() {  //Clear the whole screen
	$scope.screenUpper = '';
	$scope.screenLower = '';
}

$scope.clearLast = function() {
	//Clear only the last character
	var view = $scope.screenLower.toString();
	console.log(view);
	$scope.screenLower = view.substring(0, view.length -1);
}

}
])