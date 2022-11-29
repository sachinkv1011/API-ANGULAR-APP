import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private api:ApiService){
    api.product().subscribe(
      (response)=>{
        this.shop=response
      }
    )
  }
   
  shop:any={}

}
