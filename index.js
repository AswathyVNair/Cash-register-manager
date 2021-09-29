const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const visibility = document.querySelector("#input-visibility");
const nextButton = document.querySelector("#next-button");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
visibility.style.display = "none";
nextButton.addEventListener("click", function validateBillAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    visibility.style.display = "block";
  } else {
    showMessage("Invalid  Bill Amount");
  }
});

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountToBeReturned =
        Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(amountToBeReturned);
    } else {
      showMessage(
        "The cash provided should atleast be equal to the bill amount"
      );
    }
  } else {
    showMessage("Invalid  Bill Amount");
  }
});

function hideMessage() {
  message.style.display = "none";
}

function showMessage(messageGiven) {
  message.style.display = "block";
  message.innerText = messageGiven;
}

function calculateChange(amountToBeReturned) {
  if (amountToBeReturned == 0) {
    showMessage("No cash to return");
  } else {
    for (let i = 0; i < availableNotes.length; i++) {
      const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

      amountToBeReturned = amountToBeReturned % availableNotes[i];
      noOfNotes[i].innerText = numberOfNotes;
      console.log(numberOfNotes);
    }
  }
}
