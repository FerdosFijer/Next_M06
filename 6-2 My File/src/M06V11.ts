//! Mapped types
//* map

//* Example: 01
const arrayOfNum: number[] = [1, 4, 6];

const arrayOfstring: string[] = ["1", "4", "6"]; //instead of this line we can use next line for big number array

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

//* Example: 02
type AreaOfNum = {
    height: number;
    width: number;
};
// type height = AreaOfNum["height"]; // amra eivabe look up kore niye aste pari

/* type AreaOfStringNormal = {
  height: string;
  width: string;
}; */
//instead of this line we can use map line (map) for big number array


type Area<T> = {
    // [key in "height" | "width"] : string; // keyof operator use korbo
    // [key in keyof AreaOfNum] : string;   // Generic use korbo <T> 
    [key in keyof T]: T[key];

    // key >> height >> string
    // key >> width >> number
}

// T >>>   { height: string; width: number }
  
// {  height: string; width: number }['height']: number
//"height" |"width"

const area1: Area<{ height: string; width: boolean }> = {
    height: "50",
    width: false,
};