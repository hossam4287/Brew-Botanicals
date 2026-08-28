// =========================================================
// Shopping Cart Functionality
// =========================================================

let cart = [];

/**
 * Add item to cart
 */
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  renderCart();

  // Animation للزر
  const buttons = document.querySelectorAll(".add-btn");
  const button = [...buttons].find(btn => btn.getAttribute("onclick")?.includes(name));

  if (button) {
    const oldText = button.textContent;
    button.textContent = "Added!";
    button.classList.add("added");

    setTimeout(() => {
      button.textContent = oldText;
      button.classList.remove("added");
    }, 900);
  }
}

/**
 * Remove item from cart
 */
function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  renderCart();
}

/**
 * Render cart items
 */
function renderCart() {
  const container = document.getElementById("cart-items");
  const empty = document.getElementById("empty-cart");

  container.innerHTML = "";

  if (cart.length === 0) {
    container.appendChild(empty);
  } else {
    cart.forEach(item => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <small>Qty: ${item.qty}</small>
        </div>
        <div class="cart-right">
          <strong>$${(item.price * item.qty).toFixed(2)}</strong>
          <button onclick="removeFromCart('${item.name}')">Remove</button>
        </div>
      `;
      container.appendChild(row);
    });
  }

  // Update totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById("subtotal-val").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("total-val").textContent = `$${subtotal.toFixed(2)}`;
}