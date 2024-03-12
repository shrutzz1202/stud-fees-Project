import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeesformComponent } from './feesform.component';
import { UpdatefeeComponent } from '../updatefee/updatefee.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

const routes:Routes=[{
  
    path:'',
    component:FeesformComponent
},
{
  path:'update',
  component:UpdatefeeComponent
}
]
@NgModule({
  declarations: [
   FeesformComponent,
   UpdatefeeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    SidebarModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class FeesformModule { }
