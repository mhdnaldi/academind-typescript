// OBJECT TYPE
// MANUAL ASSIGNMENT
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // TUPLES
// } = {
//   name: "Muhammad Naldi",
//   age: 24,
//   hobbies: ["Play Guitar", "Watch Movies"],
//   role: [0, "admin"], // TUPLES
// };
// ENUM: ENUM OFTEN USE UPPERCASE, START FROM 0
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// AUTO ASSIGNMENT
var person = {
    name: "Naldi",
    age: 24,
    hobbies: ["Play Guitar", "Watch Movies"],
    role: Role.ADMIN
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN)
    console.log("is admin");
var arr = ["1", 2, [3, 4]]; // ANY
console.log(arr);
