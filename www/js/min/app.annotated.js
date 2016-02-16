var controllers = angular.module('controllers', []);
var app = angular.module('ProgressBarApp', ['controllers']);
controllers.controller('MainController', ['$scope', function ($scope) {
	
	$scope.selected = 0;

	$scope.progressBars = [
		{
			name: 'Progressbar 1',
			progress: 25,
		},
		{
			name: 'Progressbar 2',
			progress: 50
		},
		{
			name: 'Progressbar 3',
			progress: 75
		}
	];

	$scope.add = function(amount) {
		$scope.progressBars[$scope.selected].progress += amount;

		if ($scope.progressBars[$scope.selected].progress > 100) {
			$scope.progressBars[$scope.selected].outOfRange = true;
		}
	}

	$scope.subtract = function(amount) {
		$scope.progressBars[$scope.selected].progress -= amount;

		if ($scope.progressBars[$scope.selected].progress < 0) {
			$scope.progressBars[$scope.selected].progress = 0;
		}

		if ($scope.progressBars[$scope.selected].progress <= 100) {
			$scope.progressBars[$scope.selected].outOfRange = false;
		}
	}

}]);