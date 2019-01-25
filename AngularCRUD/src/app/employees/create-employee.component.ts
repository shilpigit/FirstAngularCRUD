import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public saveEmployee(emp: NgForm):void{
    alert(emp.name);
  }

}
