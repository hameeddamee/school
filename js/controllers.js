angular.module('schoolApp.controllers',[]).
controller('noticeboardController', function($scope) {
	$scope.msg = "This is notice board";
}).

controller('studentsController',function($scope){
	$scope.students="have to create";
}).

controller('teachersController',function($scope){
	$scope.teachers="have to add teachers";
});