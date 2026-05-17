//! Instead of Enum we use As Const for better use:
//* as const assertion

/* enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
} */

const UserRoles2 = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
} as const;

/* readyonly ta bose jay modifier hisebe::::
{ 
  readonly Admin: "Admin",
  readonly Editor: "Editor",
  readonly Viewer: "Viewer",
--------------------------------------------------------
value k type hisebe use korar jonno ei 2 ta lagbe:::::
1. typeof operator
2. keyof operator 
--------------------------------------------------------
const user= {
 id: 222,
 name:'Fijer'
}
1. typeof user; // eta likhle behind the seen e next 4 line toiri korbe jeta invisible::::

type user {
id: number;
name:string
}

2. user['id'] hisebe access korar try kori tahole value 222 ans hisebe pabo
--------------------------------------------------------
Now amra jodi ::::::: 1. er moto ::::::
typeof UserRoles2 // eta likhle behind the seen e next 4 line toiri korbe jeta invisible ::::
{ 
   Admin: "Admin",
   Editor: "Editor",
   Viewer: "Viewer",
}
keyof typeof UserRoles // keyof dile | eta diye toiri hoy
'Admin'| 'Editor' | 'Viewer'
--------------------------------------------------------
Now amra jodi ::::::: 2. er moto ::::::
'ADMIN' |'EDITOR |'VIEWER'

UserRoles['Admin']  >>> 'ADMIN'
  typeof UserRoles[keyof typeof UserRoles]

} */


const canEdit = (role: (typeof UserRoles2) [keyof typeof UserRoles2]) => {
    if (role === UserRoles2.Admin || role === UserRoles2.Editor) {
        return true;
    } else return false;
};

const isEditPermissable2 = canEdit(UserRoles2.Admin);
console.log(isEditPermissable2);
