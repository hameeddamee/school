angular.module('schoolApp.controllers',[]).
controller('noticeboardController', function($scope) {
	$scope.msg = "This is notice board";
}).

controller('studentsController',function($scope){
	$scope.students="have to create";
}).

controller('teachersController',function($scope){
	$scope.teachers="have to add teachers";
}).

controller('feesController',function($scope){
	$scope.fees = "have to add fee details";
}).

controller('certificatesController',function($scope){
	$scope.certificates = "have to issue certificates like study certificate and transfer certiicate here";
}).

controller('resultsController', function($scope){
	$scope.results = "have to create results";
}).

controller('syllabusController',function($scope){
	$scope.syllabus = "have to create syllabus";
}).

controller('questionsController', function($scope){
	$scope.questions = "have to create questions";
}).

controller('studentsSectionController', function($scope){
	$scope.studentsSection = "have to create student section";
}).

controller('activitiesController', function($scope){
	$scope.activities = "have to create activities";
}).

controller('updatesController', function($scope){
	$scope.updates = "have to display the updates";
});
