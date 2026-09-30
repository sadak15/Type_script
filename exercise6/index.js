// 1
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
console.log(UserRole.SuperAdmin, canEdit(UserRole.SuperAdmin)); // true
console.log(UserRole.Moderator, canEdit(UserRole.Moderator)); // true
console.log(UserRole.Viewer, canEdit(UserRole.Viewer)); // false
// 2
// const button = document.querySelector("button");
// button.disabled = true;
// 'button' is possibly 'null'.
const button = document.querySelector("button");
button.disabled = true;
export {};
