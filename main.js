let num1;
let num2;

function addNums(num1, num2) {
  return num1 + num2;
}

function subtractNums(num1, num2) {
  return num1 - num2;
}

function multNums(num1, num2) {
  return num1 * num2;
}

function divideNums(num1, num2) {
  return num1 / num2;
}

let screenView = document.querySelector(".screen-view");
let btn = document.querySelectorAll("button");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (btn[i] === "+") {
      screenView.textContent = addNums(num1, num2);
    }
  });
}
