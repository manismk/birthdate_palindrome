var birthdateForm = document.querySelector("#birtdateForm");

var birthDate = document.querySelector("#birthdate");
var resultDiv = document.querySelector(".result");

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

// birthDate.addEventListener("oninvalid", (e) => {
//   if (birthDate.validity.rangeOverflow) {
//     e.target.setCustomValidity("Birthdate can't be future date");
//   }
// });

today = yyyy + "-" + mm + "-" + dd;
if (birthDate) {
  birthDate.setAttribute("max", today);
}

if (birthdateForm) {
  birthdateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var date = birthDate.value;
    var [yyyy, mm, dd] = date.split("-");
    var yy = yyyy.toString().slice(2);

    isPalindrome(dd + mm + yyyy);
    isPalindrome(mm + dd + yyyy);
    isPalindrome(mm + dd + yy);
    isPalindrome(dd + mm + yy);
  });
}

function isPalindrome(dateGiven) {
  var reverseDate = dateGiven.split("").reverse().join("");
  if (dateGiven === reverseDate) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
  console.log(dateGiven, reverseDate);
}

function showResult(result) {
  resultDiv.classList.remove("hidden");
  var imgResult = document.querySelector(".imgResult");
  var txtResult = document.querySelector(".txtResult");
  if (result === "happy") {
    imgResult.setAttribute("src", "image/happy.svg");
    txtResult.innerText = "Your birthdate is lucky!";
  } else if ((result = "sad")) {
    imgResult.setAttribute("src", "image/sad.svg");
    txtResult.innerText = "Oops! Your birthdate isn't lucky!";
  }
}
