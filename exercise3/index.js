// 1
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Ahmed", "Ali"));
// 2
function registerUser(username, isAdmin, language = "en") {
    console.log("Username:", username);
    console.log("Is admin:", isAdmin ?? false);
    console.log("Language:", language);
}
registerUser("Ahmed");
registerUser("Aisha", true);
registerUser("Ali", false, "so");
// 3
function average(...scores) {
    if (scores.length === 0) {
        return 0;
    }
    let total = 0;
    for (const score of scores) {
        total += score;
    }
    return total / scores.length;
}
console.log(average(90, 85, 77));
console.log(average(60, 70, 80, 90, 100));
export {};
