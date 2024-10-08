import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = []; // -- data aware states
    private categories: any[] = []; //   -- data aware states

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
          this.products = data;
          this.categories = data.map(p => p.category)
              .filter((c, index, array) => array.indexOf(c) == index)
              .sort();
        });
    }

    // getProducts(): Product[] {
    //   //auto - fire
    //   return this.products;
    // }

    getProducts(category?: string): Product[] {
        return this.products
            .filter(p => category == null || category == p.category);
    }

    /* getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    } */

    getCategories(): string[] {
      //auto - fire
      return this.categories;
    }
}
