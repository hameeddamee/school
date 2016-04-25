angular.module('schoolApp.controllers',[]).
controller('noticeboardController', function($scope) {
	$scope.msg = "This is notice board";
	
	$scope.notice = [];
	
	$scope.add = function(){
		var obj = {
			date: $scope.noticedate,
			subject: $scope.noticesubject,
			postedby: $scope.noticePostedBy,
			detail: $scope.noticetextarea
		};
		
		$scope.notice.push(obj);
		
		$scope.noticedata = "";
		$scope.noticesubject = "";
		$scope.noticePostedBy = "";
		$scope.noticetextarea = "";
		console.log("$$$$$$$$");
		console.log($scope.notice);
		
	}
}).

controller('addStudentController',function($scope){
	$scope.students="have to create";
}).

controller('editStudentController',function($scope){
	$scope.edit="edit/delete students here";
}).

controller('showStudentController',function($scope){
	$scope.show="show all students here";
}).

controller('addTeachersController',function($scope){
	$scope.teachers="have to add teachers";
}).

controller('editTeachersController', function($scope){
	$scope.edit="have to edit here";
}).

controller('showTeachersController', function($scope){
	$scope.show = "show the teachers";
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
