var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var button = document.getElementById("btn");
var multiply = function (a, b) {
    return a * b;
};
button.addEventListener("click", function () {
    console.log(multiply(parseInt(num1.value), parseInt(num2.value)));
});
