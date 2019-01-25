import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSharedService {

  constructor() { }
  public emp: any;
  public setEmployee(employee: any): void {
    this.emp.push(employee);
  }

  public getEmployee(): any{
    return this.emp;
  }
}
