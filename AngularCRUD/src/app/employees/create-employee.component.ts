import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeSharedService } from '../employee-shared.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email:null,
    phoneNumber:null,
    contactPreference: null,
    dateOfBirth: new Date,
    department: null,
    IsActive: null,
    photoPath: null
  };

  constructor(public _EmployeeSharedService: EmployeeSharedService) { }

  ngOnInit() {   
  }

  public saveEmployee(emp: Employee):void{    
   this._EmployeeSharedService.setEmployee(this.employee);
  }

}
