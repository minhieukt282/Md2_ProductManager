"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
        this.listproduct = [];
    }
    Object.defineProperty(Manager.prototype, "showlistProduct", {
        get: function () {
            return this.listproduct;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Manager.prototype, "addProduct", {
        set: function (product) {
            this.listproduct.push(product);
        },
        enumerable: false,
        configurable: true
    });
    Manager.prototype.add = function (product) {
        this.listproduct.push(product);
    };
    return Manager;
}());
exports.Manager = Manager;
