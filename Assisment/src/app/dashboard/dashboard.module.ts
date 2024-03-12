import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FeesformComponent } from '../feesform/feesform.component';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { UpdatefeeComponent } from '../updatefee/updatefee.component';


const routes:Routes=[{
  path:'',
  component:DashboardComponent
},
]

@NgModule({
  declarations: [
    DashboardComponent,
   
    
  ],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    CardModule,
    SidebarModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
