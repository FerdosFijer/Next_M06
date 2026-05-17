//! Interface in typescript (which same as Type Alias in ts)

//* Type Alias abar shiktesi (intersection and, or use korbo)
//* Example 01
type User = {
  name: string;
  age: number;
};
type Role = {
  role2: "admin2" | "user2";
};
type UserWithRole = User & Role;

const user1: UserWithRole  = {
  name: "Mr.X",
  age: 100,
  role2: "admin2",
};

const user2: User = {
  name: "Mr. Y",
  age: 102,
};

//* Example 02
type IsAdmin = boolean;
const isAdmin: IsAdmin = false;

//* interface : object type: array, object , function
//* Example 03

interface IUser {
  name: string;
  age: number;
}
interface IUserWithRole extends IUser {
    role: "admin" | "user";
}
const User03: IUserWithRole = {
    name: "Mr. Z",
    age: 104,
    role: "admin",
}
const user4: IUser = {
  name: "Mr. ZZ",
  age: 106,
};

//* Type Alias for function again
type AddFunc = (num1: number, num2: number) => number;
const add1: AddFunc = (num1, num2) => num1 + num2;

// function
//* Example 04  

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];

interface IFriends {
  [index: number]: string;
}

const freinds: IFriends = ["A", "B", "C"];
