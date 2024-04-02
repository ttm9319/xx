import { Component } from '@angular/core';
import { BasketService } from './basket.service';
import { BasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor(public basketservice: BasketService){}
  
  incrementQuantity(item:BasketItem){
    this.basketservice.addItemToBasket(item);
  }
  removeItem(id:number, quantity:number){
    this.basketservice.removeItemFromBasket(id, quantity);
  }

}
