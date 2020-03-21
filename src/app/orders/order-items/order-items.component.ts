import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/shared/order-item.class';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {
  formData:OrderItem

  constructor() { }

  ngOnInit() {
    this.formData={
      Id:null,
      Name:'',
      Orderid:0,
      Price:0,
      Total:0,
      Quantity:0,
      ItemId:0
    }
  }

}
