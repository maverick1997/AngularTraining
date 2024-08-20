import { NgModule } from '@angular/core';

import { ProductRepository } from './product.repository';
import { RestApiService } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { CouponRepository } from './coupon.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [ // register & launch services(injectables)
    StaticDataSource,
    ProductRepository,
    {provide: StaticDataSource , useClass: RestApiService},
    OrderRepository,
    Order,
    Cart,
    CouponRepository
  ],
})
export class ModelModule { }
