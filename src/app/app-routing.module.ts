import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './layouts/pagenotfound/pagenotfound.component';
import {HomeComponent} from './layouts/home/home.component';
import {UserAuthGuard} from './guards/user-auth.guard';

const routes: Routes=[
  {
    path: '',
    component: HomeComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'category',
    loadChildren: './api/category/category.module#CategoryModule'
  },
  {
    path: 'manufacturer',
    loadChildren: './api/manufacturer/manufacturer.module#ManufacturerModule'
  },
  {
    path: 'product',
    loadChildren: './api/product/product.module#ProductModule'
  },
  {
    path: 'order',
    loadChildren: './api/order/order.module#OrderModule'
  },
  {
    path: 'cart',
    loadChildren: './api/cart/cart.module#CartModule'
  },
  {
    path: 'checkout',
    loadChildren: './api/checkout/checkout.module#CheckoutModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule( {
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
} )
export class AppRoutingModule
{
}
