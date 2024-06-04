let num1;
let num2;
let operator;
let result;

function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  }
  if (operator === "-") {
    return num1 - num2;
  }
  if (operator === "*") {
    return num1 * num2;
  }
  if (operator === "/") {
    return num1 / num2;
  }
}

function operate(num1, num2, operator) {
  return calculator(num1, num2, operator);
}

let screenView = document.querySelector(".screen-view");
let btns = document.querySelectorAll("button");

btns.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    screenView.textContent = e.target.innerHTML;
    console.log(screenView.textContent);
    if (screenView.innerHTML >= 0 && screenView.innerHTML < 10) {
      num1 = parseInt(screenView.innerHTML);
      num2 = parseInt(screenView.innerHTML);
      while (num1 != num2) {
        result = num1.innerHTML + num2.innerHTML;
        console.log(result);
      }
    }
  });
});
