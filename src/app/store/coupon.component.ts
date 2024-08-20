import { Component } from '@angular/core';
import { Coupon } from '../model/coupon.model';
import { CouponRepository } from '../model/coupon.repository';

@Component({
  selector: 'coupons',
  templateUrl: 'coupon.component.html',
  styleUrls: ['coupon.component.css']
})

export class CouponComponent {

  isVisible: boolean = true;

  showPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }


  constructor(private repository: CouponRepository) { }

  get coupons(): Coupon[] {
    return this.repository.getCoupons();
  }

}
