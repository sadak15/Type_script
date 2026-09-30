// 1
let productName = "Laptop";
let price = 999;
let discountAvailable = true;
productName = "Phone";
price = 499;
discountAvailable = false;
console.log(productName, price, discountAvailable);
// 2
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(getDiscount(100, 0.2));
// 3
function printLengthUnsafe(x) {
    console.log(x.length);
}
printLengthUnsafe("Hello");
printLengthUnsafe(123);
function printLength(x) {
    if (typeof x === "string") {
        console.log(x.length);
    }
    else {
        console.log("Value has no length");
    }
}
printLength("Hello");
printLength(123);
export {};
