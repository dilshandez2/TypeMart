"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
// Store the name of the product the user is trying to find.
const productName = 'shirt';
// Find product by its name from our list of products
const product = products_1.default.filter(product => {
    if (product.name !== productName) {
        return false;
    }
    return product;
});
// Verify we found the correct product
console.log(product);
