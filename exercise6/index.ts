export {};

// 1
enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

console.log(UserRole.SuperAdmin, canEdit(UserRole.SuperAdmin)); 
console.log(UserRole.Moderator, canEdit(UserRole.Moderator)); 
console.log(UserRole.Viewer, canEdit(UserRole.Viewer));

// 2

const button = document.querySelector("button") as HTMLButtonElement;
button.disabled = true;
