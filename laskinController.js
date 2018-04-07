var laskin = angular.module('laskin',[]);

laskin.controller('laskinController', ['$scope', function($scope) {
	
$scope.screenLower = '';
$scope.screenUpper = '';	
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
	
try {	
var y = $scope.screenUpper.substring(0, $scope.screenUpper.length-1);
var x = $scope.screenLower;	
var z = $scope.screenUpper.charAt($scope.screenUpper.length-1);

if(isNaN(parseFloat(y))) throw "ERROR";
if(isNaN(parseFloat(x))) throw "ERROR";

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

catch (err)
{
	$scope.screenLower = err;
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
		if ($scope.screenUpper != '')
		{	$scope.showResult();
			console.log('plus is already there!');
			$scope.calculate(x);
		}
		
		else 
		{
		
        $scope.calculate(x);
		console.log('noplus');
		}
		
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