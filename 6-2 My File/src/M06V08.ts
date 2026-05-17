//! Explore Enum 

// set of fixed string leteral k ek jaigai rakhe 
// fixed value success, pending, rejected, onek jaygay use kori type and value both hisebe jeta  type and value both hisebe use korte parbo amra
//*  Example 01  without Enum
 type UserRoles1 = "Admin" | "Editor" | "Viewer";

 const canEdit1 = (role: UserRoles1) => {
    if(role === "Admin" || role === "Editor") {
    return true;
  } else return false;
 };

 const isEditPermissable1 = canEdit1("Admin");
console.log(isEditPermissable1);

 //*  Example 02  with Enum use:

 enum UserRoles2 {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles2) => {
  if (role === UserRoles2.Admin || role === UserRoles2.Editor) {
    return true;
  } else return false;
};

const isEditPermissable2 = canEdit(UserRoles2.Admin);
console.log(isEditPermissable2);

//! node --experimental-transform-types .\src\M06V08.ts 
//! the flag --experimental-transform-types was added to enable TypeScript-only syntax that requires transformation, like enums and namespace.