var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employees');
var EmployeeSalary = mongoose.model('EmployeeSalary', mongoose.Schema({
	name:String,
	empId: String,
	salary: String
}));
var Employees = mongoose.model('Employees', mongoose.Schema({
	firstName:String,
	lastName:String,
	empId: String
	
}));
var EmployeeDetailsAndSalary = mongoose.model('EmployeeSalaryDetails', mongoose.Schema({
	empId: String,
	salary: String,
	fullName: String
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/employees/employeedetails', function(req, res){
	Employees.find(function(err, employees){
		console.log("employeeDetails",employees)
		if(err)
			res.send(err);
		res.json(employees);
	});
});

app.get('/api/employees/employeedetailandsalary', function(req, res){
	EmployeeDetailsAndSalary.find(function(err, employees){
		if(err)
			res.send(err);
		res.json(employees);
	});
});

app.get('/api/employees/employeesalary', function(req, res){
	EmployeeSalary.find(function(err, employees){
		if(err)
			res.send(err);
		res.json(employees);
	});
});

app.post('/api/employees/employeedetails', function(req, res){
	Employees.create( req.body, function(err, employees){
		if(err)
			res.send(err);
		res.json(employees);
	});
});
app.post('/api/employees/employeesalary', function(req, res){
	EmployeeSalary.create( req.body, function(err, employees){
		if(err)
			res.send(err);
		res.json(employees);
	});
});
app.post('/api/employees/employeedetailandsalary', function(req, res){
	EmployeeDetailsAndSalary.create( req.body, function(err, employees){
		if(err)
			res.send(err);
		res.json(employees);
	});
});

// app.delete('/api/employees/:id', function(req, res){
// 	Employee.findOneAndRemove({_id:req.params.id}, function(err, employee){
// 		if(err)
// 			res.send(err);
// 		res.json(employee);
// 	});
// });
// app.put('/api/employees/:id', function(req, res){
// 	var query = {
// 		name:req.body.name,
// 		dept:req.body.dept,
// 		area:req.body.area,
// 		status:req.body.status,
// 		contact:req.body.contact,
// 		salary:req.body.salary
// 	};
// 	Employee.findOneAndUpdate({_id:req.params.id}, query, function(err, employee){
// 		if(err)
// 			res.send(err);
// 		res.json(employee);
// 	});
// });
app.listen(3000, function(){
	console.log('server is running on port 3000..');
});