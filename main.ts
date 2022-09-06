import {Product} from "./product";
import {Manager} from "./manager";

let product1 = new Product("a1", 20)
let product2 = new Product("a2", 30)
let product3 = new Product("a3", 40)

let manager = new Manager()
manager.addProduct = product1
manager.addProduct = product2
manager.add(product3)
console.log(manager.showlistProduct)