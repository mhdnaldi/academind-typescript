var newObject = {
    name: "Muhammad Naldi",
    age: 24
};
// UNION TYPES
function combine(input1, input2, typeConversion // LITERAL TYPES
) {
    var result;
    if (typeConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var combineNumber = combine(1, 2, "as-number"), combineName = combine("Muhammad", "Naldi", "as-text"), combineNumberText = combine("1", "2", "as-number");
console.log({ combineNumber: combineNumber, combineName: combineName, combineNumberText: combineNumberText, newObject: newObject });
// VOID DOESNT RETURN ANYTHING
function printResult(num) {
    console.log("Number: " + num);
    // return num; // <- this is error
}
printResult(20);
// FUNCTION AS TYPE
var newFunc;
newFunc = printResult;
newFunc(21);
