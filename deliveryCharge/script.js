const validateNumber = (n1, errorBox) => {
  isNaN(n1)
    ? (errorBox.innerText = "Please enter valid number")
    : (errorBox.innerText = "");

  if (errorBox.innerText == "") return true;
};

const main = () => {
  const weightField = document.querySelector("input[name='weight']");
  const convertButton = document.querySelector("button");
  const errorBox = document.querySelector("span");

  convertButton.addEventListener("click", () => {
    const weight = parseInt(weightField.value);
    if (validateNumber(weight, errorBox)) {
      let result;
      switch (true) {
        case weight < 2.5:
          result = 3.5 * weight;
          break;
        case weight > 2.5 && weight < 5:
          result = 2.85 * weight;
          break;
        case weight > 5 && weight < 7:
          result = 2.45 * weight;
          break;
        case weight > 7:
          result = 3.25 * weight;
          break;
      }
      weightField.value = "";

      convertButton.nextElementSibling.innerHTML = `
          <div> Delivery Charge: $${result} </div>
          `;
    }
  });
};

main();
