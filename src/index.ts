import products from "./products";

// Store the name of the product the user is trying to find.
const productName: string = 'shirt';

// Find product by its name from our list of products
const product = products.filter(product=>{
    if(product.name !== productName) {
        return false;
    }
    return product;
})

// Verify we found the correct product
console.log(product);