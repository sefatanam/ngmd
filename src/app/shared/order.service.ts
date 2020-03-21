import { Injectable } from '@angular/core';
import { OrderItem } from './order-item.class';
import { Order } from './order.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData:Order;
  orderItems:OrderItem[];

  constructor() { }
}
