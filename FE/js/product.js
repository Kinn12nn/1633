const productDIV = document.getElementById('product-list');


getProducts();


async function getProducts(){
  const response = await fetch('https://localhost:3000/products', {method: 'GET' });
  const data = await response.json();

  if (response.ok){
    showProduct(data);
  }else {
    console.error('Error fetching products:', data.error);
  }
}

function showProduct(products) {
  for (let product of products) {
    productDIV.innerHTML += `
        <div class="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl m-1 border-0">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body text-center">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text text-danger">$${product.price}</p>
              <a href="#" class="btn btn-success" id = "add-cart-${product.id}">Add cart</a>
            </div>
          </div>
    `;
  }
  const addCartBTNs = document.querySelectorAll('a[id^="add-cart-"]');
  addCartBTNs.forEach(button => button.addEventListener('click', addCart));
}

function addCart(event){
  const id = event.target.id;
  const productId = id.split('-')[2];

  let carts = JSON.parse(localStorage.getItem('carts')) || [];

  const cartItem = carts.find(item => item.productId == productId);

  if (cartItem) {
    cartItem.quantity++;
    } else {
      carts.push({productId, quantity: 1});
}
  localStorage.setItem('carts', JSON.stringify(carts));
}