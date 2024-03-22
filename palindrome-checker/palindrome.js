const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

const checkPalindrome = () => {
    let inputValue = textInput.value.toLowerCase().replace(/\s/g, '');
  if (inputValue === "") {
    alert("Please input a value");
  } else if (inputValue.length === 1 && /[A-Z][a-z]/) {
    document.getElementById(
      "result"
    ).innerHTML = `${textInput.value} is a palindrome`;
  } else if (inputValue.length > 1) {
    // Variable to store the reversed value of the input
    let reverse = inputValue.replace(/\s/g, '').split("").reverse().join("");
    console.log(reverse);
    if (inputValue === reverse) {
      document.getElementById(
        "result"
      ).innerHTML = `${textInput.value} is a palindrome`;
    } else {
      document.getElementById(
        "result"
      ).innerHTML = `${textInput.value} is not a palindrome`;
    }
  }
};
checkBtn.addEventListener("click", checkPalindrome);
