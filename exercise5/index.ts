export {};

// 1
function echo<T>(input: T): T {
  return input;
}

const echoString = echo("hello"); 
const echoNumber = echo(42); 
const echoArray = echo([1, 2, 3]); 
const echoObject = echo({ id: 1, name: "Ahmed" });

console.log(echoString.toUpperCase());
console.log(echoNumber.toFixed(2));
console.log(echoArray.map((n) => n * 2));
console.log(echoObject.name);

// 2
interface ApiResult<T> {
  status: string;
  data: T;
}

const messageResult: ApiResult<string> = {
  status: "success",
  data: "User created",
};

const userResult: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: { id: 1, name: "Aisha" },
};

console.log(messageResult.status, messageResult.data);
console.log(userResult.status, userResult.data.name);

// 3
function first<T>(items: T[]): T {
  return items[0];
}

const firstNumber = first([10, 20, 30]); 
const firstString = first(["apple", "banana", "cherry"]);
const firstUser = first([
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Aisha" },
]);

console.log(firstNumber);
console.log(firstString);
console.log(firstUser.name);
