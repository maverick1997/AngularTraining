import { Injectable } from '@angular/core';
import { Coupon } from './coupon.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class CouponRepository {

  private coupons: Coupon[] = [];

  constructor(private dataSource: StaticDataSource) {

    dataSource.getCoupons().subscribe( data => {
      this.coupons = data
    });
  }

      getCoupons(): Coupon[] {
      //auto - fire
      return this.coupons;
    }

}
