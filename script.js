// Bill Amount

const billAmount = document.querySelector(".bill-amount");
const tipAmount = document.getElementById("tip-amount");
const totalBillAmount = document.getElementById("total-amount");
let billValue = 0;

billAmount.addEventListener("input", setbillValue);

function setbillValue() {
  billValue = parseFloat(billAmount.value);
}

// number of people

const numOfPeople = document.querySelector(".number-of-people");
let numofPeopleValue = 0;

numOfPeople.addEventListener("input", setNumOfPeople, cantBeZero);

function setNumOfPeople() {
  numofPeopleValue = parseFloat(numOfPeople.value);
}

function cantBeZero() {
  const numOfPeople = document.querySelector(".number-of-people").value;
  if (numOfPeople == "0") {
    document.getElementById("error").textContent = "can`t be zero";
    iniTialize(tipAmount);
    document.getElementById("total-amount").textContent = "$0.00";
  }
}

function iniTialize(strHTML) {
  strHTML.textContent = "$0.00";
}

// PercentValues

const fivePercent = document.getElementById("five-percent");
const tenPercent = document.getElementById("ten-percent");
const fifteenPercent = document.getElementById("fifteen-percent");
const twentyFivePercent = document.getElementById("twenty-five-percent");
const fiftyPercent = document.getElementById("fifty-percent");
const customPercent = document.getElementById("custom-percent");
let percentValue = 0;

fivePercent.addEventListener("click", setFivePercentValue);
tenPercent.addEventListener("click", setTenPercentValue);
fifteenPercent.addEventListener("click", setFifteenPercentValue);
twentyFivePercent.addEventListener("click", setTwentyFivePercentValue);
fiftyPercent.addEventListener("click", setFiftyPercentValue);
customPercent.addEventListener("input", customPercentCalc);

function setFivePercentValue() {
  percentValue = fivePercent.value;
}

function setTenPercentValue() {
  percentValue = tenPercent.value;
}
function setFifteenPercentValue() {
  percentValue = fifteenPercent.value;
}

function setTwentyFivePercentValue() {
  percentValue = twentyFivePercent.value;
}

function setFiftyPercentValue() {
  percentValue = fiftyPercent.value;
}

function customPercentCalc() {
  percentValue = customPercent.value;
}

function clearResult() {
  document.getElementById("bill-amount").value = "";
  document.getElementById("number-of-people").value = "";
  document.getElementById("error").textContent = "";
  document.getElementById("total-amount").textContent = "$0.00";
  iniTialize(tipAmount);
}

numOfPeople.addEventListener("input", calculateAll);

function calculateAll() {
  let calculatePercentage = (billValue / 100) * parseFloat(percentValue);
  let calculateTotalBill = billValue + calculatePercentage;
  let eachPersonBill = calculateTotalBill / numofPeopleValue;
  let eachPersonTip = calculatePercentage / numofPeopleValue;

  tipAmount.innerHTML = "$" + eachPersonTip.toFixed(2);
  totalBillAmount.innerHTML = "$" + eachPersonBill.toFixed(2);
  cantBeZero();
}

//function keepActive() {
//  document
//    .querySelector(".tip-percentage")
//    .addEventListener("click", function () {
//      if (this.classList.contains("active")) {
//        this.classList.remove("active");
//      } else this.classList.add("active");
//    });
//}

iniTialize(tipAmount);
document.getElementById("total-amount").textContent = "$0.00";

totalBillAmount.style.color = "hsl(172, 67%, 45%)";
tipAmount.style.color = "hsl(172, 67%, 45%)";
