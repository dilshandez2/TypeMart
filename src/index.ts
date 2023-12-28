import products from "./products";

// Store the name of the product the user is trying to find.
const productName: string = 'shirt';
const shippingAddress: string = '4 Privet Drive, Little Whinging, Surrey';
let shipping: number = 10;
let taxPercent: number = 4;
const taxTotal: number = 5;
const total: number = 35;

// Free shipping
if(total>25) {
    shipping = 0;
    console.log("You'll get FREE shipping!\n")
}

// NY Tax
if (shippingAddress.match('New York')) {
    taxPercent += 10;
}

// Find product by its name from our list of products
interface product {
  name: string;
  price: string;
  preOrder: string;
}

const product = products.filter(product=>{
    if(product.name !== productName) {
        return false;
    }
    return product;
})

// Verify we found the correct product
console.log(product);

// Notify preorder shipping status
if(product[0].preOrder == 'true') {
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