const validateGrade = (grade, errorBox) => {
  isNaN(grade)
    ? (errorBox.innerText = "Please enter valid number")
    : (errorBox.innerText = "");

  if (errorBox.innerText == "") return true;
};

const main = () => {
  const gradeField = document.querySelector("input[name='grade']");
  const gradeButton = document.querySelector("button");
  const errorBox = document.querySelector("span");

  gradeButton.addEventListener("click", () => {
    const grade = parseInt(gradeField.value);
    if (validateGrade(grade, errorBox)) {
      let gradeValuepoint;
      switch (true) {
        case 90 <= grade && grade <= 100:
          gradeValuepoint = "A";
          break;
        case 80 <= grade && grade <= 89.9:
          gradeValuepoint = "B";
          break;
        case 70 <= grade && grade <= 79.9:
          gradeValuepoint = "C";
          break;
        case 60 <= grade && grade <= 69.9:
          gradeValuepoint = "D";
          break;
        case 0 <= grade && grade <= 59.9:
          gradeValuepoint = "F";
          break;
        default:
          gradeValuepoint = "Please enter grade between 0 and 100";
      }
      gradeButton.nextElementSibling.innerHTML = `
          <div> Grade: ${gradeValuepoint} </div>
          `;
    }
  });
};

main();
