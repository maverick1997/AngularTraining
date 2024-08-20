import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { CartDetailsComponent } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
import { RouterModule } from '@angular/router';
import { CheckOutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';
import { CouponComponent } from './coupon.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
  exports: [StoreComponent],
  declarations: [CartDetailsComponent, StoreComponent, CartSummaryComponent, CheckOutComponent, CouponComponent]
})
export class StoreModule { }
