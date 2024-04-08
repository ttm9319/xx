import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Observable } from 'rxjs';
import { BasketItem } from '../models/basket';


@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent  {
  //basket$: Observable<Basket>;
  @Output() addItem= new EventEmitter<BasketItem>();
  @Output() removeItem = new EventEmitter<{id:number, quantity: number}>();
 // @Output() remove: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();
  @Input() isBasket = true;

  constructor(public basketService: BasketService) { }

  /*(ngOnInit() {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasketItem) {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.increment.emit(item);
  }*/

  addBasketItem(item: BasketItem) {
    this.addItem.emit(item);
  }
  removeBasketItem(id:number, quantity=1) {
    this.removeItem.emit({id, quantity})
  }
}