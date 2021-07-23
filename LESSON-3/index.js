console.log("CORE TYPES");
function add(n1, n2, showResult) {
    if (showResult)
        return n1 + n2;
    throw new Error("RESULT IS CONFIDENTIAL");
}
var showResult = false;
var result = add(20, 25, showResult);
console.log(result);
