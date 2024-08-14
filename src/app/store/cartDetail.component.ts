import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cartDetail.component.html'
})

export class CartDetailsComponent {

  constructor(public cart: Cart) {

  }


}
