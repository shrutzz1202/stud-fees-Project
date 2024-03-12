import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatefeeComponent } from './updatefee/updatefee.component';


const routes: Routes = [{
  path:'',
  loadChildren:()=>import('./dashboard/dashboard.module').then(m => m.DashboardModule)
},
{
  path:'fees',
 loadChildren:()=>import('./feesform/feesform.module').then(m => m.FeesformModule)
},
{
  path:'update',
   component:UpdatefeeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
