import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: 'main', component: AdminComponent},
  { path: '**', redirectTo: 'auth'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class AdminRoutingModule { }
