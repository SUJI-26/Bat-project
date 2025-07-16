  let cartCount = 0;

  function animateOnLoad() {
    const title = document.querySelector('.home-section h1');
    const button = document.querySelector('.home-section .btn');
    title.classList.add('animate__animated', 'animate__bounceInDown');
    button.classList.add('animate__animated', 'animate__pulse');
  }

  function addToCart(productName) {
    const cartList = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn';
    li.innerHTML = `${productName} <button class="btn btn-sm btn-danger" onclick="removeItem(this)">Remove</button>`;
    cartList.appendChild(li);
    cartCount++;
    document.getElementById('cart-counter').innerText = cartCount;
  }

  function removeItem(button) {
    button.parentElement.remove();
    cartCount--;
    document.getElementById('cart-counter').innerText = cartCount;
  }

  function addToCart(productName) {
  const cartList = document.getElementById('cart-items');
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center animate__animated animate__lightSpeedInRight';
  li.innerHTML = `${productName} <button class="btn btn-sm btn-danger" onclick="removeItem(this)">Remove</button>`;
  cartList.appendChild(li);
  cartCount++;
  document.getElementById('cart-counter').innerText = cartCount;
}
