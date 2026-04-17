const products = [
  {name:"Men Shirt", price:499, img:"./men.jpg"},
  {name:"Women Dress", price:799, img:"./women.jpg"},
  {name:"Shoes", price:999, img:"./shose.jpg"},
  {name:"Watch", price:1499, img:"./watch.jpg"},
  {name:"Kurti", price:699, img:"./kurti.jpg"},
  {name:"Jeans", price:899, img:"./jens.jpg"}
];
 
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = [];
 
const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
 
function displayProducts(list){
  productList.innerHTML="";
  list.forEach((p,i) => {
    productList.innerHTML += `
      <div class="card">
        <div class="wishlist" onclick="addWishlist('${p.name}')">❤️</div>
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p class="price">₹${p.price}</p>
        <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
      </div>
    `;
  });
}
 
displayProducts(products);
 
function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}
 
function updateCart(){
  cartItems.innerHTML="";
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });
  document.getElementById("count").innerText = cart.length;
  document.getElementById("total").innerText = "Total: ₹" + total;
}
 
updateCart();
 
function toggleCart(){
  document.getElementById("cart").classList.toggle("active");
}
 
function addWishlist(name){
  alert(name + " added to wishlist ❤️");
}
 
function showLogin(){
  document.getElementById("loginBox").style.display="block";
}
 
function closeLogin(){
  document.getElementById("loginBox").style.display="none";
}
 
// Search
 
document.getElementById("search").addEventListener("keyup", function(){
  let value = this.value.toLowerCase();
  let filtered = products.filter(p => p.name.toLowerCase().includes(value));
  displayProducts(filtered);
});
