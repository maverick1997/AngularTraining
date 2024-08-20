import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";
import { Coupon } from "./coupon.model";

@Injectable()
export class StaticDataSource {

    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
        new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
        new Product(5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
        new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
        new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
        new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
        new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
        new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
        new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
        new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
        new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
        new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
    ];

    getProducts(): Observable<Product[]> {
      //publish...
      return from([this.products]); // state changes..
    }

    saveOrder(order: Order): Observable<Order> {
      console.log(JSON.stringify(order));
      return from([order]);
    }

    private coupons: Coupon[] = [
      new Coupon(1, "FLAT10", "Avail a flat 10% off on orders above 100$", 10),
      new Coupon(2, "FLAT20", "Avail a flat 10% off on orders above 500$", 20),
      new Coupon(3, "FREEBIE30", "Avail a flat 10% off on orders above 1000$", 30)
  ];

  getCoupons(): Observable<Coupon[]> {
    //publish...
    return from([this.coupons]); // state changes..
  }


}
