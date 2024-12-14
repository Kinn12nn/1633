const cartDIV = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');

function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem('carts'));

    if (cartItems) {
        let total = 0;

        cartDIV.innerHTML = '';

        for (item of cartItems) {

            const product = prodcuts.find(p => p.id == item.id);

            const amount = product.price * item.quantity;
            total += amount;

            cartDIV.innerHTML = `
        <td>${product.name}</td>
        <td class="text-end">$${product.price}</td>
        <td class="text-center">${item.quantity}</td>
        <td class="text-end">$${product.price * item.quantity}</td>
      `;

            cartTotal.innerHTML = `$${total}`;
        }
    }
}

loadCart();
