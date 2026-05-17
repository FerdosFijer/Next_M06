"use strict";
//! Explore Enum 
const canEdit1 = (role) => {
    if (role === "Admin" || role === "Editor") {
        return true;
    }
    else
        return false;
};
const isEditPermissable1 = canEdit1("Admin");
console.log(isEditPermissable1);


//*  Example 02  with Enum use:
var UserRoles2;
(function (UserRoles2) {
    UserRoles2["Admin"] = "Admin";
    UserRoles2["Editor"] = "Editor";
    UserRoles2["Viewer"] = "Viewer";
})(UserRoles2 || (UserRoles2 = {}));
const canEdit = (role) => {
    if (role === UserRoles2.Admin || role === UserRoles2.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable2 = canEdit(UserRoles2.Admin);
console.log(isEditPermissable2);
//! node --experimental-transform-types .\src\M06V08.ts 
//! the flag --experimental-transform-types was added to enable TypeScript-only syntax that requires transformation, like enums and namespace.
