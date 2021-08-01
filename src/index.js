var birthdateForm = document.querySelector("#birtdateForm");

var birthDate = document.querySelector("#birthdate");
var resultDiv = document.querySelector(".result");

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;
if (birthDate) {
  birthDate.setAttribute("max", today);
}

if (birthdateForm) {
  birthdateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    resultDiv.classList.add("hidden");
    var date = birthDate.value;
    var [yyyy, mm, dd] = date.split("-");
    var yy = yyyy.toString().slice(2);

    if (isPalindrome(dd + mm + yyyy)) {
      showResult("happy", `Yes! palindrome in ${dd}-${mm}-${yyyy} format`);
    } else if (isPalindrome(mm + dd + yyyy)) {
      showResult("happy", `Yes! palindrome in ${mm}-${dd}-${yyyy} format`);
    } else if (isPalindrome(mm + dd + yy)) {
      showResult("happy", `Yes! palindrome in ${mm}-${dd}-${yy} format`);
    } else if (isPalindrome(dd + mm + yy)) {
      showResult("happy", `Yes! palindrome in ${dd}-${mm}-${yy} format`);
    } else {
      generateNextPalindrome(date);
    }
  });
}

function isPalindrome(dateGiven) {
  var reverseDate = dateGiven.split("").reverse().join("");
  //console.log(dateGiven, reverseDate);

  if (dateGiven === reverseDate) {
    return true;
  } else {
    return false;
  }
}

function generateNextPalindrome(getDate) {
  const givenDate = new Date(getDate);
  for (
    const intialDate = new Date(getDate);
    ;
    intialDate.setDate(intialDate.getDate() + 1)
  ) {
    var dd = String(intialDate.getDate()).padStart(2, "0");
    var mm = String(intialDate.getMonth() + 1).padStart(2, "0");
    var yyyy = intialDate.getFullYear();
    var yy = yyyy.toString().slice(2);
    if (isPalindrome(dd + mm + yyyy)) {
      showResult(
        "sad",
        `OOPS not a palindrome. Next palindrome is ${dd}-${mm}-${yyyy}. you missed it by ${differeceFinder(
          givenDate,
          intialDate
        )} days
        `
      );
      break;
    } else if (isPalindrome(mm + dd + yyyy)) {
      showResult(
        "sad",
        `OOPS not a palindrome.Next palindrome is ${mm}-${dd}-${yyyy}. you missed it by ${differeceFinder(
          givenDate,
          intialDate
        )} days
        `
      );
      break;
    } else if (isPalindrome(mm + dd + yy)) {
      showResult(
        "sad",
        `OOPS not a palindrome.Next palindrome is ${mm}-${dd}-${yy}. you missed it by ${differeceFinder(
          givenDate,
          intialDate
        )} days
        `
      );
      break;
    } else if (isPalindrome(dd + mm + yy)) {
      showResult(
        "sad",
        `OOPS not a palindrome.Next palindrome is ${dd}-${mm}-${yy}. you missed it by ${differeceFinder(
          givenDate,
          intialDate
        )} days
        `
      );
      break;
    }
  }
}

function differeceFinder(givenDate, intialDate) {
  const diffTime = Math.abs(givenDate - intialDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
function showResult(result, message) {
  var imgResult = document.querySelector(".imgResult");
  var txtResult = document.querySelector(".txtResult");
  var loadder = document.querySelector(".loader");
  loadder.classList.remove("hidden");
  if (result === "happy") {
    imgResult.setAttribute("src", "image/happy.svg");
    txtResult.innerText = message;
  } else if ((result = "sad")) {
    imgResult.setAttribute("src", "image/sad.svg");
    txtResult.innerText = message;
  }

  setTimeout(function () {
    loadder.classList.add("hidden");
    resultDiv.classList.remove("hidden");
  }, 3000);
}
