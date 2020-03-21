import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  constructor(public service: OrderService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form = null)
      this.resetForm();
    this.service.formData = {
      Id: null,
      OrderNo: Math.floor(10000 + Math.random() * 900000),
      CustomerId: 0,
      PaymentMethod: "",
      GrandeTotal: 0
    }
    this.service.orderItems=[];
  }


}
