import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

const PROTOCOL = 'http';
const PORT = 3500;


@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.request('post', this.baseUrl + 'login', {body: {name: user, password: pass}})
      .map(response => {
        const r = response.json();
        this.auth_token = r.success ? r.token : null;
        return r.success;
      });
  }

  getProducts(): Observable<Product[]> {
    return this.sendRequest('get', 'products');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.sendRequest('post', 'orders', order);
  }

  private sendRequest(method: string, url: string, body?: Product | Order, auth: boolean = false): Observable<Product | Order> {
    const options: any = {body: body};
    if (auth && this.auth_token != null) {
      options['headers'] = {'Authorization': `Bearer<${this.auth_token}>`};
    }
    return this.http.request(method, this.baseUrl + url, options);
  }
}
