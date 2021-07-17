const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("btn");

const multiply = (a: number, b: number) => {
  return a * b;
};

button.addEventListener("click", () => {
  console.log(multiply(parseInt(num1.value), parseInt(num2.value)));
});
