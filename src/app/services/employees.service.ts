import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee.models';
import { Observable } from 'rxjs';

type NewType = Employee[];

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employee');
  }

  addEmployee(addEmployeeRequest: Employee):Observable<Employee> {
    addEmployeeRequest.id = "00000000-0000-0000-0000-000000000000";
     return this.http.post<Employee>(this.baseApiUrl + '/api/employee',addEmployeeRequest)
  }

  getEmployee(id: string): Observable<Employee>{
      return this.http.get<Employee>(this.baseApiUrl + "/api/Employee/" + id)
  }

}
