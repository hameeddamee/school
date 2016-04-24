angular.module('schoolApp', [
  'schoolApp.controllers','ngRoute','ngResource'
])

.config(function($routeProvider){
	$routeProvider.
	
	when('/',{templateUrl:'/partials/noticeboard.html', controller:"noticeboardController"}).
	
	when('/students',{templateUrl:'/partials/students.html',controller:'studentsController'}).
	
	when('/teachers',{templateUrl:'/partials/teachers.html',controller:'teachersController'}).
	
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