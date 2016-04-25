angular.module('schoolApp', [
  'schoolApp.controllers','ngRoute','ngResource'
])

.config(function($routeProvider){
	$routeProvider.
	
	when('/',{templateUrl:'/partials/noticeboard.html', controller:"noticeboardController"}).
	
	when('/addStudent',{templateUrl:'/partials/addstudent.html',controller:'addStudentController'}).
	
	when('/editStudent',{templateUrl:'/partials/editstudent.html',controller:'editStudentController'}).
	
	when('/showStudent',{templateUrl:'/partials/showstudents.html',controller:'showStudentController'}).
	
	when('/addTeacher',{templateUrl:'/partials/addteachers.html',controller:'addTeachersController'}).
	
	when('/editTeacher',{templateUrl:'/partials/editteachers.html',controller:'editTeachersController'}).
	
	when('/showTeachers',{templateUrl:'/partials/showteachers.html',controller:'showTeachersController'}).
	
	when('/fees',{templateUrl:'/partials/fees.html', controller:'feesController'}).
	
	when('/certificates',{templateUrl:'/partials/certificates.html', controller:'certificatesController'}).
	
	when('/results',{templateUrl:'/partials/results.html', controller:'resultsController'}).
	
	when('/syllabus',{templateUrl:'/partials/syllabus.html', controller:'syllabusController'}).
	
	when('/questions',{templateUrl:'/partials/questions.html', controller:'questionsController'}).
	
	when('/studentsSection',{templateUrl:'/partials/studentsSection.html', controller:'studentsSectionController'}).
	
	when('/activities',{templateUrl:'/partials/activities.html', controller:'activitiesController'}).
	
	when('/updates', {templateUrl:'/partials/updates.html', controller:'updatesController'}).
	
  otherwise({redirectTo:'/'})
});