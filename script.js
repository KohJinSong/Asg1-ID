
function selectProduct(id) {
    localStorage.setItem('selectedProduct', String(id));
    window.location.href = 'cart.html';
}

function handleCartRedirect() {
    const selected = localStorage.getItem('selectedProduct');

    if (selected === '1') {
    window.location.href = 'cart_item1.html';
    } 
    else if (selected === '2') {
    window.location.href = 'cart_item2.html';
    } 
}

function clearSelectedProduct() {
  localStorage.removeItem('selectedProduct');
}

document.addEventListener('DOMContentLoaded', () => {
  const minusBtn = document.getElementById('remove-item');
  if (minusBtn) {
    minusBtn.addEventListener('click', clearSelectedProduct);
  }
});