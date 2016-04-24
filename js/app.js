angular.module('schoolApp', [
  'schoolApp.controllers','ngRoute','ngResource'
])

.config(function($routeProvider){
	$routeProvider.
	
	when('/',{templateUrl:'/partials/noticeboard.html', controller:"noticeboardController"}).
	
	when('/students',{templateUrl:'/partials/students.html',controller:'studentsController'}).
	
	when('/teachers',{templateUrl:'/partials/teachers.html',controller:'teachersController'}).
	
	
  otherwise({redirectTo:'/'})
});