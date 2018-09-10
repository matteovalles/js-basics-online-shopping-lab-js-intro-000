var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 99 + 1)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    var contents = `In your cart, you have ${cart[i].itemName at cart[i].itemPrice}`
  }
  for (let i = 0; i < cart.length; i++) {
    if (i === cart.length - 1) {
      contents = `${contents} and ${cart[i].itemName} at ${cart[i].itemPrice}.`
    } else {
      contents = `${contents}, ${cart[i].itemName} at ${cart[i].itemPrice}.`
    }
  }
  return contents
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
