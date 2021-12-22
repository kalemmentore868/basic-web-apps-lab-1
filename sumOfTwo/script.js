const calculateSum = (n1, n2) => n1 + n2;

const validateNumbers = (n1, n2, errorBoxes) => {
  isNaN(n1)
    ? (errorBoxes[0].innerText = "Please enter valid number")
    : (errorBoxes[0].innerText = "");
  isNaN(n2)
    ? (errorBoxes[1].innerText = "Please enter valid number")
    : (errorBoxes[1].innerText = "");

  if (errorBoxes[0].innerText == "" && errorBoxes[1].innerText == "")
    return true;
};

const main = () => {
  const textFields = document.querySelectorAll("input");
  const addButton = document.querySelector("button");
  const errorBoxes = document.querySelectorAll("span");

  addButton.addEventListener("click", () => {
    const num1 = parseInt(textFields[0].value);
    const num2 = parseInt(textFields[1].value);

    if (validateNumbers(num1, num2, errorBoxes)) {
      alert(`${calculateSum(num1, num2)}`);
      textFields[0].value = "";
      textFields[1].value = "";
      textFields[0].focus();
    }
  });
};

main();
