"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
// Store the name of the product the user is trying to find.
const productName = 'shirt';
const shippingAddress = '4 Privet Drive, Little Whinging, Surrey';
let shipping = 10;
let taxPercent = 4;
const taxTotal = 5;
const total = 35;
// Free shipping
if (total > 25) {
    shipping = 0;
    console.log("You'll get FREE shipping!\n");
}
// NY Tax
if (shippingAddress.match('New York')) {
    taxPercent += 10;
}
const product = products_1.default.filter(product => {
    if (product.name !== productName) {
        return false;
    }
    return product;
});
// Verify we found the correct product
console.log(product);
// Notify preorder shipping status
if (product[0].preOrder == 'true') {
    console.log("We'll notify you when the product is being shipped.");
}
// Print the bill
console.log(`
    Product name: ${productName}
    Shipping address: ${shippingAddress}
    Price of the product: ${product.length > 0 ? product[0].price : 'N/A'}
    Tax total: ${taxTotal}
    Shipping: ${shipping}
    Total amount: ${total}
`);
