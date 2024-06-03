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
let btns = document.querySelectorAll("button");

btns.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    screenView = screenView.textContent = e.target.innerHTML;
    console.log(screenView);
  });
});
