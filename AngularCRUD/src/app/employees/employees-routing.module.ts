import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeesComponent } from './list-employees.component';
import { CreateEmployeeComponent } from './create-employee.component';


const routes: Routes = [ 
  {path:'employee', children:[
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create' , component: CreateEmployeeComponent},
  {path: '' , redirectTo : 'list', pathMatch : 'full'}
]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class EmployeesRoutingModule { }
