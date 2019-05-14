import {NgModule} from '@angular/core';
import {CheckoutComponent} from './checkout.component';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ButtonModule, DialogModule, PanelModule} from 'primeng/primeng';

@NgModule({
  declarations:
    [
      CheckoutComponent
    ],
  imports:
    [
      CommonModule,
      ReactiveFormsModule,
      NgxSpinnerModule,
      RouterModule,
      CheckoutRoutingModule,
      PanelModule,
      DialogModule,
      ButtonModule,
    ],
  exports: [
    RouterModule
  ]
})

export class CheckoutModule
{
  
}


