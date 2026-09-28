

// 1
let productName: string = "Laptop";
let price: number = 999;
let discountAvailable: boolean = true;

productName = "Phone";
price = 499;
discountAvailable = false;

console.log(productName, price, discountAvailable);

// 2
function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(100, 0.2));

// 3
function printLengthUnsafe(x: any) {
  console.log(x.length);
}
printLengthUnsafe("Hello");
printLengthUnsafe(123);

function printLength(x: unknown) {
  if (typeof x === "string") {
    console.log(x.length);
  } else {
    console.log("Value has no length");
  }
}
printLength("Hello");
printLength(123);
