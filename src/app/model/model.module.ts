import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  providers: [
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    RestDataSource,
    {provide: StaticDataSource, useClass: RestDataSource},
    AuthService
  ],
  declarations: [],
  exports: [],
  imports: [HttpClientModule]
})
export class ModelModule {
}
