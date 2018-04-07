var app = angular.module('laskin',[]);

app.service('operators', function() {
    this.showResult = function(y,x,z) {
	

		if(isNaN(parseFloat(y))) throw "ERROR";
		if(isNaN(parseFloat(x))) throw "ERROR";

		var calcresult = 0;
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

$scope.inputKey = function(x) {

$scope.screenLower = $scope.screenLower + x;

}

$scope.calculate = function(x) {
$scope.screenUpper = '';	
$scope.screenUpper = $scope.screenLower + x;
$scope.screenLower = '';

}

$scope.chooseOperator = function(operator) { 
	try
		{
			var y = $scope.screenUpper.substring(0, $scope.screenUpper.length-1);
			var x = $scope.screenLower;	
			var z = $scope.screenUpper.charAt($scope.screenUpper.length-1);
		
	if (operator == '=') {
	
	    $scope.screenUpper = y + z + x;
		$scope.screenLower = operators.showResult(y,x,z);
	}
	
	else
	{
		if ($scope.screenUpper != '')
		{	
			$scope.screenLower = operators.showResult(y,x,z);
			$scope.calculate(operator);
		}
		
		else 
		{
			$scope.calculate(operator);
		}
		
	}
	}
	
	catch (err)
	{
		$scope.screenLower = err;
	}
}	


//Clear the whole screen
$scope.clearScreen = function() {
	$scope.screenUpper = '';
	$scope.screenLower = '';
}
//Clear only the last character
$scope.clearLast = function() {
	var view = $scope.screenLower;
	
	$scope.screenLower = view.substring(0, view.length -1);
}

}
])