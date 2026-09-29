function login(user) {
    console.log("Logging in:", user.username);
    if (user.email) {
        console.log("Email:", user.email);
    }
    else {
        console.log("No email provided");
    }
}
// 1
const user1 = { id: 1, username: "Ahmed", password: "secret123" };
login(user1);
// 2
const user2 = { id: 2, username: "Aisha", password: "pass456", email: "aisha@example.com" };
login(user2);
export {};
// 3
// user1.id = 5;
//Cannot assign to 'id' because it is a read-only property.
