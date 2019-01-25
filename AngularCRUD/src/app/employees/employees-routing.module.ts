import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  declarations: [ListEmployeesComponent,CreateEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),FormsModule
  ],
  exports:[RouterModule]
})
export class EmployeesRoutingModule { }
