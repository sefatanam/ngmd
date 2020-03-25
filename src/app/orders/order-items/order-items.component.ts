import { Component, OnInit, Inject } from '@angular/core';
import { OrderItem } from 'src/app/shared/order-item.class';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.class';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {
  formData:OrderItem;
  itemList:Item[];

  constructor(
    @Inject(MAT_DIALOG_DATA)public data,
    public dialogRef:MatDialogRef<OrderItemsComponent>,
    private itemService:ItemService,
    private orderService:OrderService) { }

  ngOnInit() {
    this.itemService.getItemList().then(res=>this.itemList=res as Item[]);
    this.formData={
      Id:null,
      Name:'',
      Orderid:this.data.Id,
      Price:0,
      Total:0,
      Quantity:0,
      ItemId:0
    }
  }

  updateItemPrice(ctrl){
    if(ctrl.selectedIndex==0){
      this.formData.Price=0;
     this.formData.Name='';
    }else{

      this.formData.Price=this.itemList[ctrl.selectedIndex-1].Price;
      this.formData.Name=this.itemList[ctrl.selectedIndex-1].Name;
      
    }
  }


  updateTotal(){
    this.formData.Total=parseFloat((this.formData.Price*this.formData.Quantity).toFixed(2));
  }

  onSubmit(form?:NgForm){
    var d = this.formData;
    this.orderService.orderItems.push(d);
    this.dialogRef.close();
  }

 

}
