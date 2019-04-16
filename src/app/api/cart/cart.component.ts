import {Component, OnInit} from '@angular/core';
import {CartService} from './service/cart.service';
import {CART_API_URL, SERVER_URL} from '../../app.constants';
import {Cart} from './model/cart';
import {AuthService} from '../../core/auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit
{
  cart: Cart;

  constructor(private cartService:CartService,
              private authService:AuthService)
  {

  }

  ngOnInit()
  {
    this.getMyCart();
  }


  private getMyCart()
  {
    let user=this.authService.currentUserValue;

    const cartUrl=SERVER_URL+CART_API_URL+'find/user/'+user.id;
    this.cart=this.cartService.getMyCart(cartUrl);
  }
}
