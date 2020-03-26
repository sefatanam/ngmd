import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  constructor(public service: OrderService,
    public matdialog:MatDialog) { }

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


  AddOrEditItem(OrderItemIndex,OrderId){
    const dialofConfig = new MatDialogConfig();
    dialofConfig.autoFocus=true;
    dialofConfig.disableClose=true;
    dialofConfig.width="50%";
    dialofConfig.data={OrderItemIndex,OrderId};
    this.matdialog.open(OrderItemsComponent,dialofConfig);

  }


  OnDeleteItem(ItemId:number,i:number){
    this.service.orderItems.splice(i,1);
  }

  
  


}
