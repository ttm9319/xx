import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  // Method to fetch orders from the service
  getOrders() {
    this.orderService.getOrdersForUser().subscribe({
      next: orders => this.orders = orders,
      error: err => console.error('Error fetching orders:', err) // Handle error if needed
    });
  }
}
