//coupon code
const couponBtn = document.getElementById("coupon-button");
const couponInput = document.getElementById("coupon-input");
couponInput.addEventListener("keyup", function () {
  const value = couponInput.value;
  if (value == "SELL200") {
    couponBtn.removeAttribute("disabled");
  } else {
    couponBtn.setAttribute("disabled", "disabled");
  }
});

//congratulations card
const makePurchase = document.getElementById("purchase-button");
const congratulationCard = document.getElementById("congratulation-card");
const congratulationShadow = document.getElementById("congratulation-shadow");

makePurchase.addEventListener("click", function () {
  congratulationCard.style.display = "block";
});
congratulationShadow.addEventListener("click", function () {
  congratulationCard.style.removeProperty("display");
});

// input
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputString = inputField.value;
  const input = parseFloat(inputString);
  return input;
}

// element
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  //const elementNumber = parseFloat(elementString);
  return elementString;
}
//price
function getPriceValueById(priceId) {
  const price = document.getElementById(priceId);
  const priceString = price.innerText;
  const priceNumber = parseFloat(priceString);
  return priceNumber;
}

// set value
function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
//purchase history
/*
const purchaseHistory = document.getElementById("purchase-history");
const div = document.createElement("div");
div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. Triangle</p>
                    <p class="w-20 p-2">${result}cm</p>
                    <button class="text-white text-base  p-2 rounded-lg bg-blue">Convert to m<sup>2</sup></button>
                </div>
  `;
purchaseHistory.appendChild(div);
*/

// code starts from here

//card 1
function card1() {
  const card1Price = getPriceValueById("card-1-price");
  const totalPrice = getPriceValueById("total-price");
  const newTotalPrice = totalPrice + card1Price;
  if (newTotalPrice > 200) {
    const discountPrice = (totalPrice * 20) / 100;
  } else {
    discountPrice = "00";
  }
  const netPrice = newTotalPrice - discountPrice;
  setValue("total-price", newTotalPrice);
  setValue("discount", discountPrice);
  setValue("total", netPrice);
  //purchase history
  const purchaseHistory = document.getElementById("purchase-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. K. Accessories </p>
                </div> `;
  purchaseHistory.appendChild(div);
}
//card 2
function cardTwo() {
  const card2Price = getPriceValueById("card-2-price");
  const totalPrice = getPriceValueById("total-price");
  const newTotalPrice = totalPrice + card2Price;
  if (newTotalPrice > 200) {
    const discountPrice = (totalPrice * 20) / 100;
  } else {
    discountPrice = "00";
  }
  const netPrice = newTotalPrice - discountPrice;
  setValue("total-price", newTotalPrice);
  setValue("discount", discountPrice);
  setValue("total", netPrice);
  //purchase history
  const purchaseHistory = document.getElementById("purchase-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. K. Accessories 2</p>
                </div> `;
  purchaseHistory.appendChild(div);
}
//card three
function cardThree() {
  const card3Price = getPriceValueById("card-3-price");
  const totalPrice = getPriceValueById("total-price");
  const newTotalPrice = totalPrice + card3Price;
  if (newTotalPrice > 200) {
    const discountPrice = (totalPrice * 20) / 100;
  } else {
    discountPrice = "00";
  }
  const netPrice = newTotalPrice - discountPrice;
  setValue("total-price", newTotalPrice);
  setValue("discount", discountPrice);
  setValue("total", netPrice);
  //purchase history
  const purchaseHistory = document.getElementById("purchase-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. Home Cooker </p>
                </div> `;
  purchaseHistory.appendChild(div);
}
//card four
function cardFour() {
  const card4Price = getPriceValueById("card-4-price");
  const totalPrice = getPriceValueById("total-price");
  const newTotalPrice = totalPrice + card4Price;
  if (newTotalPrice > 200) {
    const discountPrice = (totalPrice * 20) / 100;
  } else {
    discountPrice = "00";
  }
  const netPrice = newTotalPrice - discountPrice;
  setValue("total-price", newTotalPrice);
  setValue("discount", discountPrice);
  setValue("total", netPrice);
  //purchase history
  const purchaseHistory = document.getElementById("purchase-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. 
Sports Cap  </p>
                </div> `;
  purchaseHistory.appendChild(div);
}
//card five
function cardFive() {
  const card5Price = getPriceValueById("card-5-price");
  const totalPrice = getPriceValueById("total-price");
  const newTotalPrice = totalPrice + card5Price;
  if (newTotalPrice > 200) {
    const discountPrice = (totalPrice * 20) / 100;
  } else {
    discountPrice = "00";
  }
  const netPrice = newTotalPrice - discountPrice;
  setValue("total-price", newTotalPrice);
  setValue("discount", discountPrice);
  setValue("total", netPrice);
  //purchase history
  const purchaseHistory = document.getElementById("purchase-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. Full Jersey Set  </p>
                </div> `;
  purchaseHistory.appendChild(div);
}
//card six
function cardSix() {
  const card6Price = getPriceValueById("card-6-price");
  const totalPrice = getPriceValueById("total-price");
  const newTotalPrice = totalPrice + card6Price;
  if (newTotalPrice > 200) {
    const discountPrice = (totalPrice * 20) / 100;
  } else {
    discountPrice = "00";
  }
  const netPrice = newTotalPrice - discountPrice;
  setValue("total-price", newTotalPrice);
  setValue("discount", discountPrice);
  setValue("total", netPrice);
  //purchase history
  const purchaseHistory = document.getElementById("purchase-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. 
Sports keds   </p>
                </div> `;
  purchaseHistory.appendChild(div);
}
//card seven
function cardSeven() {
  const card7Price = getPriceValueById("card-7-price");
  const totalPrice = getPriceValueById("total-price");
  const newTotalPrice = totalPrice + card7Price;
  if (newTotalPrice > 200) {
    const discountPrice = (totalPrice * 20) / 100;
  } else {
    discountPrice = "00";
  }
  const netPrice = newTotalPrice - discountPrice;
  setValue("total-price", newTotalPrice);
  setValue("discount", discountPrice);
  setValue("total", netPrice);
  //purchase history
  const purchaseHistory = document.getElementById("purchase-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. 
Single Relax Chair   </p>
                </div> `;
  purchaseHistory.appendChild(div);
}
//card eight
function cardEight() {
  const card8Price = getPriceValueById("card-8-price");
  const totalPrice = getPriceValueById("total-price");
  const newTotalPrice = totalPrice + card8Price;
  if (newTotalPrice > 200) {
    const discountPrice = (totalPrice * 20) / 100;
  } else {
    discountPrice = "00";
  }
  const netPrice = newTotalPrice - discountPrice;
  setValue("total-price", newTotalPrice);
  setValue("discount", discountPrice);
  setValue("total", netPrice);
  //purchase history
  const purchaseHistory = document.getElementById("purchase-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. Children play </p>
                </div> `;
  purchaseHistory.appendChild(div);
}
//card nine
function cardNine() {
  const card9Price = getPriceValueById("card-9-price");
  const totalPrice = getPriceValueById("total-price");
  const newTotalPrice = totalPrice + card9Price;
  if (newTotalPrice > 200) {
    const discountPrice = (totalPrice * 20) / 100;
  } else {
    discountPrice = "00";
  }
  const netPrice = newTotalPrice - discountPrice;
  setValue("total-price", newTotalPrice);
  setValue("discount", discountPrice);
  setValue("total", netPrice);
  //purchase history
  const purchaseHistory = document.getElementById("purchase-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      purchaseHistory.childElementCount + 1
                    }. 

Flexible Sofa    </p>
                </div> `;
  purchaseHistory.appendChild(div);
}
