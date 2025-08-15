document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "product 1", price: 29.99 },
    { id: 2, name: "product 2", price: 30.99 },
    { id: 3, name: "product 3", price: 23.4 },
  ];
  const cart = [];
  const productList = document.getElementById("productList");
  const cartitem = document.getElementById("cartitem");
  const emptycart = document.getElementById("emptycart");
  const carttotal = document.getElementById("carttotal");
  const totalbill = document.getElementById("totalbill");
  const checkout = document.getElementById("checkout");

  products.forEach((product) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center p-2 rounded-md bg-slate-700";
    li.innerHTML = `
    <span>${product.name} - $${product.price}</span>
    <button id ="${product.id}" class="bg-blue-700 px-3 py-1 rounded-md">Add to Cart</button>
    `;
    productList.appendChild(li);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("id"));
      const productspecific = products.find((p) => p.id === productId);
      console.log(productspecific);
      ProductaddCart(productspecific);
    }
  });

  function ProductaddCart(productspecific) {
    cart.push(productspecific);
    console.log(cart);
    renderCart();
  }

  function renderCart() {
    let totalPrize = 0;
    emptycart.classList.add("hidden");
  }
});
