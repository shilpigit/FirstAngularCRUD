import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  // selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor() { 
    this.employees = [{
      id:1, name:'Shilpi',gender:'Female',email:'shilpi@pineangular.com',phoneNumber:1234567891, contactPreference:'Email',dateOfBirth:new Date('14/04/1980'),department:'Development', IsActive:true, photoPath:'assets/images/Employee-2.jpg'
      
    },
    {
      id:2, name:'Naval',gender:'Male',email:'naval@pineangular.com',phoneNumber:9968486144, contactPreference:'Phone',dateOfBirth:new Date('01/07/1990'),department:'R&D', IsActive:true, photoPath:'assets/images/Employee-3.jpg'
    },
    {
      id:2, name:'Aakash',gender:'Male',email:'aakash@pineangular.com',phoneNumber:9868639871, contactPreference:'Phone',dateOfBirth:new Date('08/12/1990'),department:'Sales', IsActive:true, photoPath:'assets/images/Employee-1.jpg'
    }
];
  }
  ngOnInit() {
  }

}
