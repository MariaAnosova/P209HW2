
document.getElementById("submitForm").addEventListener("click", displayTotalPrice);

function displayTotalPrice (){
  let pizzaPrice;
  let toppingPrice;
  let totalPrice;
  let displayTotal = document.getElementById("displayPrice");
  if(document.getElementById("small").checked) {
    pizzaPrice = 7; 
  }else if(document.getElementById("medium").checked) {
    pizzaPrice = 10;
  }else if(document.getElementById("large").checked) {
    pizzaPrice = 14;
  }

  let topping = document.getElementById("topp");
  if (topping.selectedIndex == 0) {
    toppingPrice = 0;
  } else if (topping.selectedIndex == 1) {
    toppingPrice = 2;
  } else if (topping.selectedIndex == 2) {
    toppingPrice = 3;
  }

  totalPrice = pizzaPrice + toppingPrice;
  document.getElementById("displayPrice").value = totalPrice;

}
