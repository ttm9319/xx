import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Order } from '../shared/models/order';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Method to get the list of orders for the current user
  getOrdersForUser() {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }

  // Method to get details of a single order by its ID
  getOrderDetailed(id: number) {
    return this.http.get<Order>(this.baseUrl + 'orders/' + id);
  }
}
