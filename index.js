// console.log(Number("1+2"))
let displayContent = "";
let display = document.getElementById("display");

const updateDisplay = (num) => {
  if (displayContent != "Syntax error" && displayContent != "Infinity") {
    displayContent += `${num}`;
    display.textContent = displayContent;
    console.log(displayContent);
  } else {
    displayContent = `${num}`;
    display.textContent = displayContent;
  }
};
const clearDisplay = () => {
  displayContent = "";
  display.textContent = displayContent;
  console.log("cleared");
};
const calc = () => {
  try {
    displayContent = eval(displayContent);
    display.textContent = displayContent;
  } catch (error) {
    console.log(error);
    displayContent = "Syntax error";
    display.textContent = displayContent;
  }
};
document.getElementById("clear").onclick = () => {
  clearDisplay();
};
document.getElementById("num1").onclick = () => {
  updateDisplay(1);
};
document.getElementById("num2").onclick = () => {
  updateDisplay(2);
};
document.getElementById("num3").onclick = () => {
  updateDisplay(3);
};
document.getElementById("num4").onclick = () => {
  updateDisplay(4);
};
document.getElementById("num5").onclick = () => {
  updateDisplay(5);
};
document.getElementById("num6").onclick = () => {
  updateDisplay(6);
};
document.getElementById("num7").onclick = () => {
  updateDisplay(7);
};
document.getElementById("num8").onclick = () => {
  updateDisplay(8);
};
document.getElementById("num9").onclick = () => {
  updateDisplay(9);
};
document.getElementById("num0").onclick = () => {
  updateDisplay(0);
};
document.getElementById("add").onclick = () => {
  updateDisplay("+");
};
document.getElementById("subtract").onclick = () => {
  updateDisplay("-");
};
document.getElementById("multiply").onclick = () => {
  updateDisplay("*");
};
document.getElementById("divide").onclick = () => {
  updateDisplay("/");
};
document.getElementById("equals").onclick = () => {
  calc();
};
