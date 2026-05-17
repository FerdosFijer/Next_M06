//! Type Assertion

//* any type e anything. e kono suggestin dibe na
let anything : any;
anything = "Mezba";
(anything as string).at //string define koray suggestion dibe dot er por

//* Example 01:

const kgToGMConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};

const result1 = kgToGMConverter(2) as number;
console.log({ result1 });

const result2 = kgToGMConverter("2 kg") as string;
console.log({ result2 });

//* Type script er theke better type define er example: Example 02:

type CustomError = {
  meesage: string;
};

try {
} catch (err) {
  console.log((err as CustomError).meesage);
}
