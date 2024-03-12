const billInput = document.querySelector(".money-amount");
const percents = Array.from(document.querySelectorAll(".btn"));
const peopleAmount = document.querySelector(".people-amount");
let bill;
let percent;
let people;
billInput.addEventListener("input", () => {
  bill = Number(billInput.value);
});

peopleAmount.addEventListener("input", () => {
  people = Number(peopleAmount.value);
});
for (let i = 0; i < percents.length; i++) {
  percents[i].addEventListener("click", () => {
    percent = parseFloat(percents[i].textContent);
  });
}

function calc() {
  let tipAmount = (bill * percent) / 100;
  let totalBill = bill + tipAmount;
  let billPerPerson = totalBill / people; //tip = bill*percent /100
}
function sum() {
  (bill + tip) / peopleAmount;
}

// const tenPercent = document.querySelector(".ten");
// const fifteenPercent = document.querySelector(".fifteen");
// const twentyFivePercent = document.querySelector(".twenty-five");
// const fiftyPercent = document.querySelector(".fifty");
// const tipAmount = document.querySelector(".tip-amount-money");
// const totalMoney = document.querySelector(".total-money-class ");

// const bill = billInput.value;
// console.log(bill);
// fivePercent.addEventListener("click", () => {
//   console.log("Ten");
// });
