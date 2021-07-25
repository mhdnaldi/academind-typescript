// TYPE ALIASES
type Combinable = string | number | boolean; // UNION TYPES
type Literal = "as-number" | "as-text"; // LITERAL

// TYPE ALIASES ALSO WORK ON OBJECTS
type IsObject = { name: Combinable; age: any };

const newObject: IsObject = {
  name: "Muhammad Naldi",
  age: 24,
};

// UNION TYPES
function combine(
  input1: Combinable,
  input2: Combinable,
  typeConversion: Literal // LITERAL TYPES
): Combinable {
  let result;
  if (typeConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}
let combineNumber = combine(1, 2, "as-number"),
  combineName = combine("Muhammad", "Naldi", "as-text"),
  combineNumberText = combine("1", "2", "as-number");
console.log({ combineNumber, combineName, combineNumberText, newObject });

// VOID DOESNT RETURN ANYTHING
function printResult(num: number): void {
  console.log("Number: " + num);
  // return num; // <- this is error
}
printResult(20);

// FUNCTION AS TYPE
let newFunc: (a: number) => void;
newFunc = printResult;
newFunc(21);
