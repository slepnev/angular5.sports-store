import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '../../model/order.model';
import { OrderRepository } from '../../model/order.repository';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit, OnDestroy {

  public includeShipped = false;

  constructor(private repository: OrderRepository) {
  }

  getOrders(): Order[] {
    return this.repository.getOrders().filter(o => this.includeShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }


  ngOnInit() {
    this.getOrders();
  }


  ngOnDestroy() {
    this.repository.resetLoad();
  }

}
