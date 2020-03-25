import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Item } from './item.class';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(public http: HttpClient) { }

  // readonly apiURL ="https://localhost:44334/api";
  // getItemList():Observable<Item[]> {
  //   return this.http.get<Item[]>(this.apiURL+'/Items');
  // }

  getItemList(){
    var datalist =this.http.get(environment.apiURL+'/Items').toPromise();
    return datalist;
  }

  //   getItemList(){
  //   var datalist= this.http.get(environment.apiURL+'/Employees').toPromise();
  //   return datalist;
  // }

  //   getItemList(){
  //   return this.http.get(environment.apiURL+'/Departments').toPromise();
  // }

  

}
