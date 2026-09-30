// 1. Echo Function with Generics
function echo(input) {
    return input;
}
const echoString = echo("hello"); // T = string
const echoNumber = echo(42); // T = number
const echoArray = echo([1, 2, 3]); // T = number[]
const echoObject = echo({ id: 1, name: "Ahmed" }); // T = { id: number; name: string }
console.log(echoString.toUpperCase());
console.log(echoNumber.toFixed(2));
console.log(echoArray.map((n) => n * 2));
console.log(echoObject.name);
const messageResult = {
    status: "success",
    data: "User created",
};
const userResult = {
    status: "success",
    data: { id: 1, name: "Aisha" },
};
console.log(messageResult.status, messageResult.data);
console.log(userResult.status, userResult.data.name);
// 3
function first(items) {
    return items[0];
}
const firstNumber = first([10, 20, 30]); // number
const firstString = first(["apple", "banana", "cherry"]); // string
const firstUser = first([
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Aisha" },
]); // { id: number; name: string }
console.log(firstNumber);
console.log(firstString);
console.log(firstUser.name);
export {};
