import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../shared/auth.guard';
import { ProductTableComponent } from './product-table/product-table.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';


const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {
    path: 'main', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      {path: 'products/:mode/:id', component: ProductEditorComponent},
      {path: 'products/:mode', component: ProductEditorComponent},
      {path: 'products', component: ProductTableComponent},
      {path: 'orders', component: OrderTableComponent},
      {path: '**', redirectTo: 'products'}
    ]
  },
  {path: '**', redirectTo: 'auth'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class AdminRoutingModule {
}
