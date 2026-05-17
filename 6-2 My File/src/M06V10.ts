//! Conditional type :  je type condition er upor nirvorsheel
//* Exapmle: 01

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

// C er types ta only depends kortese A and B er upore

//* Exapmle: 02
type RichPeoplesVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

type HasBike = CheckVehicle<"ship">;
