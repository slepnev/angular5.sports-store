import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductTableComponent } from './product-table/product-table.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { AuthGuard } from '../shared/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard],
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTableComponent,
    OrderTableComponent,
    ProductEditorComponent
  ]
})
export class AdminModule { }
