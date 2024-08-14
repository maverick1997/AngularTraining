import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailsComponent } from './store/cartDetail.component';

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
        component: StoreComponent
      },
      {
        path: "cart",
        component: CartDetailsComponent
      },
      { path: "**", redirectTo: "/store" },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
