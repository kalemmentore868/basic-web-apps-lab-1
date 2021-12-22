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
      const weightInLbs = (weight * 2.2).toFixed(2);
      convertButton.nextElementSibling.innerHTML = `
        <divx>Weight in lbs: ${weightInLbs} </div>
        `;
    }
  });
};

main();
