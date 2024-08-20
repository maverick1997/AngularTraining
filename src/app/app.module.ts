import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailsComponent } from './store/cartDetail.component';
import { StoreFirstGuard } from './storeFirstGaurd';
import { CheckOutComponent } from './store/checkout.component';
import { CouponComponent } from './store/coupon.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart",
        component: CartDetailsComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout",
        component: CheckOutComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/store" },
    ]),
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
