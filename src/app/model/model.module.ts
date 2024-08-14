import { NgModule } from '@angular/core';

import { ProductRepository } from './product.repository';
import { RestApiService } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';

@NgModule({
  imports: [HttpClientModule],
  providers: [ // register & launch services(injectables)
    StaticDataSource,
    ProductRepository,
    {provide: StaticDataSource , useClass: RestApiService},
    Cart
  ],
})
export class ModelModule { }
