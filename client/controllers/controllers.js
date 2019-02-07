myApp.controller('empController', function($scope,$route,$routeParams,$http,EmpService){

	$scope.getEmployeesDetails = function(){
			var employeedetails = EmpService.getEmpDetails()
			employeedetails.then(function (msg) {
				console.log("msg===<",msg)
				if (msg.data != "False") {
					$scope.employeedetailsData = msg.data;
				}
			}, function () {
				// alert('Error in updating record');
			});
	};

	$scope.getEmployeeSalary = function(){
		$http.get('/api/employees/employeesalary/').then(function(response){
			$scope.employeessalary = response.data;
		});
	};
	
	$scope.getEmployeeDetailsAndSalary = function(){
		$http.get('/api/employees/employeedetailandsalary/').then(function(response){
			$scope.employeesdetailsandsalary = response.data;
		});
	};
});

myApp.service('EmpService', function ($http) {
    this.getEmpDetails = function () {
        var response = $http({
            method: "get",
            url: "/api/employees/employeedetails/",
            dataType: "json"
        });
        return response;
	}
})