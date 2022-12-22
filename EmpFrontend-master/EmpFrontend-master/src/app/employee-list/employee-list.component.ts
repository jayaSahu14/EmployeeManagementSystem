import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService,
    private router: Router,  ){}

  ngOnInit(): void {
    this.getEmployees();
    // this.employees=[{"id":1, "firstName":"jaya","lastName":"sahu","emailId":"jaya@gamil.com" }]
    
  }
  
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

   employeeDetails(id: any){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number| undefined){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: any){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }


}
