import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSharedService {
  
  public emp: Employee[] = [];

  constructor() { }
 
  public setEmployee(employee: Employee): void {
    this.emp.push(employee);
  }

  public getEmployee(): Employee[]{
    return this.emp;
  }
}
