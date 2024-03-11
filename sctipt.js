const billInput = document.querySelector(".money-amount");
const percents = document.querySelectorAll(".btn");
const peopleAmount = document.querySelector(".people-amount");
billInput.addEventListener("input", () => {
  console.log(billInput.value);
});
peopleAmount.addEventListener("input", () => {
  console.log(peopleAmount.value);
});
percents.addEventListener("click", () => {});

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
