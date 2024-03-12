const billInput = document.querySelector(".money-amount");
const percents = Array.from(document.querySelectorAll(".btn"));
const peopleAmount = document.querySelector(".people-amount");
const tipAmountToShowPerPerson = document.querySelector(".tip-amount-money");
const totalBillPerPerson = document.querySelector(".total-money-class");
const alert = document.querySelector(".hiden");
const reset = document.querySelector(".reset-buton");
const custom = document.querySelector(".custom ");

let bill;
let percent;
let people;
custom.addEventListener("input", (event) => {
  percent = Number(event.target.value);
  calc();
});
billInput.addEventListener("input", () => {
  bill = Number(billInput.value);
  calc();
});
peopleAmount.addEventListener("input", () => {
  if (Number(peopleAmount.value) === 0) {
    alert.style.display = "block";
  }
  people = Number(peopleAmount.value);
  calc();
});
for (let i = 0; i < percents.length; i++) {
  percents[i].addEventListener("click", () => {
    percent = parseFloat(percents[i].textContent);
    calc();
  });
}

function calc() {
  if (bill && percent && people) {
    let tipAmount = (bill * percent) / 100;
    let totalBill = bill + tipAmount;
    let billPerPerson = totalBill / people; //tip = bill*percent /100
    tipAmountToShowPerPerson.textContent = (
      (bill * percent) /
      100 /
      people
    ).toFixed(2);
    totalBillPerPerson.textContent = ((bill + tipAmount) / people).toFixed(2);
  }
}

reset.addEventListener("click", () => {
  custom.value = "";
  billInput.value = "";
  peopleAmount.value = "";
  tipAmountToShowPerPerson.textContent = "";
  totalBillPerPerson.textContent = "";
});
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
