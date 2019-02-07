var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/allData.html',
			controller:'empController'
		})
		.when('/employeedetails', {
			templateUrl:'templates/getEmployeeDetails.html',
			controller:'empDetailsController'
		})
		.when('/employeedetailandsalary', {
			templateUrl:'templates/getEmployeeAndSalaryDetails.html',
			controller:'empController'
		})
		.when('/employeesalary', {
			templateUrl:'templates/getSalaryDetails.html',
			controller:'empController'
		})
});
