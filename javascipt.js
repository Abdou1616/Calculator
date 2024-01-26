const buttons = document.querySelectorAll(".btn");
const delet = document.querySelector(".del");
const moins = document.querySelector("#moins");
const division = document.querySelector("#division");
const reset = document.querySelector("#reset");
const equal = document.querySelector("#equal");
const display = document.querySelector(".display");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");
const currentText = current.textContent;
const previousText = previous.textContent;
const operand = document.querySelectorAll(".operand");
let opperation;

const slectedOperation = (opperate) => {
  opperation = opperate;
};
const Calculator = () => {
  let result;
  switch (opperation) {
    case "+":
      result = previousText + currentText;
      break;
    case "-":
      result = previousText - currentText;
      break;
    case "*":
      result = previousText * currentText;
      break;
    case "/":
      result = previousText / currentText;
      break;
    default:
      break;
  }
};

equal.addEventListener("click", () => {
  Calculator();
});

operand.forEach((op) => {
  op.addEventListener("click", () => {
    slectedOperation(op.textContent);
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    slectedOperation(btn.textContent);
    showDisplay(btn);
  });
});

const showDisplay = (btn) => {
  current.textContent = btn.textContent;
};
