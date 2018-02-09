import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { OrderModel } from './order.model';
import { OrderRepository } from './order.repository';

@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart, OrderModel, OrderRepository],
  declarations: [],
  exports: []
})
export class ModelModule {
}
