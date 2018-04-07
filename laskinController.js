var laskin = angular.module('laskin',[]);

laskin.controller('laskinController', ['$scope', function($scope) {
	
$scope.screenLower = '';	
var operators = ['+','-','*','/'];

$scope.inputKey = function(x) {

$scope.screenLower = $scope.screenLower + x;

}

$scope.calculate = function(x) {
$scope.screenUpper = '';	
$scope.screenUpper = $scope.screenLower + x;
$scope.screenLower = '';

}

$scope.showResult = function() {
var y = $scope.screenUpper.substring(0, $scope.screenUpper.length-1);
var x = $scope.screenLower;	
var z = $scope.screenUpper.charAt($scope.screenUpper.length-1);

$scope.screenUpper = y + z + x;
if (z == '+') {
$scope.screenLower = parseFloat(y) + parseFloat(x);
}

else if (z == '-') {
$scope.screenLower = parseFloat(y) - parseFloat(x);
}

else if (z == '*') {
$scope.screenLower = parseFloat(y) * parseFloat(x);
}

else if (z == '/') {
$scope.screenLower = parseFloat(y) / parseFloat(x);
}

	
else {
	$scope.screenLower = x;
}
}

$scope.chooseOperator = function(x)
{
	if (x == '=')
	{
		$scope.showResult();
	}
	
	else
	{
		$scope.calculate(x);
		
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