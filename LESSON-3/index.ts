console.log("CORE TYPES");

function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) return n1 + n2;
  throw new Error("RESULT IS CONFIDENTIAL");
}
const showResult: boolean = false;
const result = add(20, 25, showResult);

console.log(result);
