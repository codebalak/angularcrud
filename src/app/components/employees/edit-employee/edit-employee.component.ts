import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.models';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employeeDetails: Employee  ={ 

    id:'',
    name:'',
    email:'',
    phone: 0,
    salary:0,
    department:''

  }

  constructor(private route: ActivatedRoute,private employeeService: EmployeesService){}

  ngOnIt():void{

      this.route.paramMap.subscribe({
        next: (params) =>
        {
          const id = params.get('id');


            if(id)
            {
              //call api

              this.employeeService.getEmployee(id)
              .subscribe({

                next:(employee) =>
                {
                  this.employeeDetails = employee;
                  console.log(employee);
                },
                error:(response) =>
                {
                  console.log(response);
                }


              });
            }
            
          }

      })

  }

}
