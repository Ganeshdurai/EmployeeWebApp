myApp.controller('empDetailsController', function($scope,$rootScope,$route,$routeParams,$http,EmpService){

	$scope.getEmployeesDetails = function(){
		// $http.get('/api/employees/employeedetailandsalary/').then(function(response){
			var employeedetails = EmpService.getEmpDetails();
			employeedetails.then(function (msg) {
				console.log("msg===<",msg)
				if (msg.data != "False") {
					$scope.employeedetailsData = msg.data;
				}
			}, function () {
				// alert('Error in updating record');
			});
			console.log("$scope.employeedetails",$scope.employeedetails);
	};

});