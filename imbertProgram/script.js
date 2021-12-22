const validateNumber = (n1, errorBox) => {
  isNaN(n1)
    ? (errorBox.innerText = "Please enter valid number")
    : (errorBox.innerText = "");

  if (errorBox.innerText == "") return true;
};

const main = () => {
  const incomeField = document.querySelector("input[name='income']");
  const convertButton = document.querySelector("button");
  const errorBox = document.querySelector("span");

  convertButton.addEventListener("click", () => {
    const income = parseInt(incomeField.value);
    if (validateNumber(income, errorBox)) {
      let tax;
      switch (true) {
        case income <= 4461.99:
          tax = 0;
          break;
        case income >= 4462 && income <= 17893.99:
          tax = (income - 4462) * 0.3;
          break;
        case income >= 17894 && income <= 29499.99:
          tax = (income - 17894) * 0.35 + 4119;
          break;
        case income >= 29500 && income <= 45787.99:
          tax = (income - 29500) * 0.46 + 8656;
          break;
        case income >= 45788:
          tax = (income - 45788) * 0.6 + 11179;
          break;
      }
      incomeField.value = "";

      convertButton.nextElementSibling.innerHTML = `
            <div> tax payable: $${tax.toFixed(2)} </div>
            `;
    }
  });
};

main();
