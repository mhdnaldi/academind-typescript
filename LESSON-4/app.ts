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
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// AUTO ASSIGNMENT
const person = {
  name: "Naldi",
  age: 24,
  hobbies: ["Play Guitar", "Watch Movies"],
  role: Role.ADMIN,
};

console.log(person);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) console.log("is admin");

const arr: any[] = ["1", 2, [3, 4]]; // ANY
console.log(arr);
