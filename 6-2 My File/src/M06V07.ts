//! applying constrain use by keyof operator

//* what is keyof operator : Type operator

type RichPeoplesVehicle = {
    car: string; // key: value
    bike: string;
    cng: string;
};
type MyVehicle1 = "bike" | "car" | "cng";
const myVehicle1: MyVehicle1 = "bike";

// MyVehicle1 eta same vabe union er jonno likte pari Myvehicle2 example keyof
type MyVehicle2 = keyof RichPeoplesVehicle;
const myVehicle2: MyVehicle2 = "car";

//* what is constrain 

const user0 = {
    id: 222, // key: value
    name: "Fijer",
    address: {
        city: "Dinajpur",
    },
};
// const myId = user.id; // This is called dot notation
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];
// console.log({ myId, myName, address });

const getPropertyFromObj1 = (obj: object, key: string) => {
    return obj[key];
}; //eikan e obj[key] red hoye ache cz user e ki same value ache ki na seta bujtei partese na typescript : emni pataisi jeta bujte partese na

const result0 = getPropertyFromObj1(user0, "name");
console.log(result0);


//* red mark theke solution pawar upay :::::
//* Example: 01
// Prptome type define korbo
type User = {
    id: number;
    name: string;
    address: {
        city: string;
    };
};
// type ta user2 e use korbo
const user2: User = {
    id: 222, // key: value
    name: "Mezba",
    address: {
        city: "ctg",
    },
};
const getPropertyFromObj2 = (obj: User, key: "id" | "name" | "address") => {
    return obj[key];
}; // Now red mark cole gese but onek obj ki eivabe likha jay?? Tai solution: 

const getPropertyFromObjMain = <X>(obj: X, key: keyof X) => {
  return obj[key];
};
const result1 = getPropertyFromObjMain(user0, "name");
console.log(result1);

//* Example: 02 and 03

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result2 = getPropertyFromObjMain(product, "brand");
const result3 = getPropertyFromObjMain(student, "id");
