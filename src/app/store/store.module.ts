import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { CartDetailsComponent } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule],
  exports: [StoreComponent],
  declarations: [CartDetailsComponent, StoreComponent, CartSummaryComponent]
})
export class StoreModule { }
