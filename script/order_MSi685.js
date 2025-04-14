window.onload = function () {
  var cart = [];
  var discount = false;
  var couponMsg;

  // Applying the Coupon
  var couponBtn = document.getElementById("applyCoupon");
  couponBtn.addEventListener("click", function () {
    var input = document.getElementById("couponInput").value;
    var couponPortion = document.getElementById("coupon");

    if (input  === "LESS20" && !discount) {
      couponMsg = document.createElement("p");
      couponMsg.style.color = "#305418";
      couponMsg.textContent = "✅You will get 20% discount on this order.";
      couponMsg.style.fontWeight = "bold";
      couponMsg.style.marginLeft = "10px";
      couponPortion.appendChild(couponMsg);
      discount = true;
    } else if (discount) {
      alert("Coupon has been already applied.");
    } else {
      alert("Invalid/Empty coupon code.");
    }
  });

  // Adding the items to Cart
  var items = document.querySelectorAll("#productSection .item");
  for (var i = 0; i < items.length; i++) {
    (function (itemDiv) {
      var addBtn = itemDiv.querySelector("input[type='button']");
      var title = itemDiv.querySelector(".title").textContent;
      var priceText = itemDiv.querySelector(".price").textContent;
      var price = parseFloat(priceText.replace("🏷️Price: $", ""));

      addBtn.addEventListener("click", function () {
        var existing = null;
        for (var j = 0; j < cart.length; j++) {
          if (cart[j].title === title) {
            existing = cart[j];
            break;
          }
        }

        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({ title: title, price: price, quantity: 1 });
        }

        alert(
          "✅ " + title + " added to cart.\nQuantity: " +
          (existing ? existing.quantity : 1) +
          "\nPrice per item: $" + price.toFixed(2)
        );
      });
    })(items[i]);
  }

  // Placing the Order
  var placeOrderButton = document.querySelector("#orderPlacement input");
  placeOrderButton.addEventListener("click", function () {
    if (cart.length === 0) {
      alert("🛒 Cart is empty. Please add some items first.");
      return;
    }

    var orderPlacementDiv = document.getElementById("orderPlacement");
    orderPlacementDiv.innerHTML = ""; // clear the Place Order button

    // Creating the order summary
    var summaryDiv = document.createElement("div");
    summaryDiv.id = "orderSummary";
    summaryDiv.innerHTML = "<h2>🧾 Order Summary</h2>";
    summaryDiv.style.padding = "20px";
    summaryDiv.style.fontSize="20px";
    summaryDiv.style.borderTop = "2px solid #ccc";

    var total = 0;
    var summaryList = document.createElement("ul");
    summaryList.style.listStyle ="none";
    

    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      var itemTotal = item.price * item.quantity;
      total += itemTotal;

      var li = document.createElement("li");
      li.textContent = item.title + " - Quantity: " + item.quantity + " - $" + itemTotal.toFixed(2);
      summaryList.appendChild(li);
    }

    summaryDiv.appendChild(summaryList);

    if (discount) {
      summaryDiv.innerHTML += "<p><strong>Discount Applied:</strong> 20% off</p>";
      summaryDiv.innerHTML += "<p><strong>Total after discount:</strong> $" + (total * 0.8).toFixed(2) + "</p>";
    } else {
      summaryDiv.innerHTML += "<p><strong>Total:</strong> $" + total.toFixed(2) + "</p>";
    }

    // Creating the form which will display on screen below the order summary after the Place Order button is clicked
    var form = document.createElement("form");
    form.id = "detailsForm";
    form.id="personDetails";
    form.innerHTML = `
    <fieldset id = 'detailsForm'>
      <legend>📝 Enter Your Details</legend>
      <label>Name: </label>
      <input type="text" class="person" id="name" required>
      <br>
      <br>
      <label>Contact No: </label>
     <input type="text" class="person" id="contactNo" maxlength="12" name="contactno" id="contactno" placeholder="+12345678901"required>
      <br>
      <br>
      <label>Complete Delivery Address: </label>
      <textarea id="personAdd" required></textarea>
      <br>
      <br>
      <label>Payment Mode:
      </label>
      <select class="person" name="modePayment" required>
          <option value="">--Select--</option>
          <option value="cod">Cash on Delivery</option>
          <option value="card">Credit/Debit on Delivery</option>
        </select>
      
      </fieldset>
      <br>
      <div id="detailSubmit">
      <input type="submit" value="Complete Order"/>
      </div>
    `;
    form.elements["contactno"].pattern="^\\+1\\d{10}$";

 
form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Clear items from the cart and reset it
      cart = [];
      discount = false;
      document.getElementById("couponInput").value = "";
      if (couponMsg) {
            couponMsg.remove();
         }


      // Clear the form and order summary, then add confirmation message and "Order Again" button
      orderPlacementDiv.innerHTML = "";

      var finalMessage = document.createElement("h2");
      finalMessage.style.color = "#305418";
      finalMessage.innerHTML = "✅ Order successfully placed. Thanks for ordering from us.";

      var newOrderButton = document.createElement("input");
      
      newOrderButton.value = "Order Again";
      newOrderButton.type="button";
      newOrderButton.id = "OrderAgain";
      newOrderButton.style.marginTop = "20px";
      newOrderButton.style.fontSize = "25px";
      newOrderButton.style.padding = "10px";
      newOrderButton.style.backgroundColor = "aquamarine";
      newOrderButton.style.border = "2px solid black";
      newOrderButton.style.cursor = "pointer";

      newOrderButton.addEventListener("click", function () {
        orderPlacementDiv.innerHTML = `<input type="button" value="Place Order" />`;
        document.querySelector("#orderPlacement input").addEventListener("click", placeOrderBtnClick);
      });

      orderPlacementDiv.appendChild(finalMessage);
      orderPlacementDiv.appendChild(newOrderButton);
    });
  

    summaryDiv.appendChild(form);
    orderPlacementDiv.appendChild(summaryDiv);
  });

  function placeOrderBtnClick() {
    placeOrderButton.click(); // "Place Order" button again
  }
};
