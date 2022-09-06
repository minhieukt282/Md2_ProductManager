import {Product} from "./product";

export class Manager {
    listproduct: Product[] = []

    constructor() {
    }

    get showlistProduct(): Product[] {
        return this.listproduct
    }

    set addProduct(product: Product) {
        this.listproduct.push(product)
    }
    add(product: Product){
        this.listproduct.push(product)
    }


}