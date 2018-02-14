import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductTableComponent } from './product-table.component';
import { OrderTableComponent } from './order-table.component';
import { ProductEditorComponent } from './product-editor.component';
import { AuthGuard } from './auth.guard';

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
