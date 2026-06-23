const products = [

{
name:"Men Shirt",
price:499,
rating:4.2,
category:"Men",
img:"men.jpg"
},

{
name:"Women Dress",
price:799,
rating:4.1,
category:"Women Dress",
img:"women dress.jpg"
},

{
name:"Kids Wear",
price:599,
rating:4.3,
category:"Kids Wear",
img:"kids.jpg"
},

{
name:"Running Shoes",
price:1299,
rating:4.4,
category:"Shoes",
img:"shose.jpg"
},

{
name:"Luxury Watch",
price:1499,
rating:4.0,
category:"Watch",
img:"watch.jpg"
},

{
name:"Kurti",
price:699,
rating:4.5,
category:"Kurti",
img:"kurti copy.jpg"
},

{
name:"Blue Jeans",
price:899,
rating:4.4,
category:"Blue Jeans",
img:"blue jens.jpg"
},

{
name:"Beauty Kit",
price:999,
rating:4.1,
category:"Beauty Kit",
img:"beauty kit.jpg"
},

{
name:"Hand Bag",
price:1199,
rating:4.4,
category:"Hand bag",
img:"hand bag.jpg"
},

{
name:"Saree",
price:1599,
rating:4.2,
category:"Saree",
img:"saree.jpg"
},

{
name:"T-Shirt",
price:499,
rating:4.5,
category:"T-Shirt",
img:"Tshirt.jpg"
},

{
name:"Hoodie",
price:999,
rating:4.3,
category:"Hoodies",
img:"hoodies.jpg"
},

{
name:"Jacket",
price:1899,
rating:4.2,
category:"Jacket",
img:"jecket.jpg"
},

{
name:"Accessories",
price:699,
rating:4.5,
category:"Accessories",
img:"accessories.jpg"
}

];

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

const productList =
document.getElementById("productList");

const cartItems =
document.getElementById("cartItems");

function displayProducts(list){

productList.innerHTML="";

list.forEach((p,index)=>{

productList.innerHTML += `

<div class="card">

<div class="wishlist"
onclick="addWishlist('${p.name}')">
❤️
</div>

<img src="${p.img}"
alt="${p.name}"
onclick="showProductDetails(${index})">

<div class="card-content">

<h3>${p.name}</h3>

<div class="rating">
⭐ ${p.rating}
</div>

<p class="price">₹${p.price}</p>

<button onclick="addToCart('${p.name}',${p.price})">
Add To Cart
</button>

<button onclick="buyNow('${p.name}',${p.price})">
Buy Now
</button>

</div>
</div>

`;

});

}

displayProducts(products);

function addToCart(name, price){

let existingItem = cart.find(
item => item.name === name
);

if(existingItem){

existingItem.qty++;

}else{

cart.push({
name,
price,
qty:1
});

}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();

showToast(name + " Added To Cart 🛒");

}
function updateCart(){

cartItems.innerHTML="";

let total = 0;

cart.forEach((item,index)=>{

total += item.price * item.qty;

cartItems.innerHTML += `

<div style="margin-bottom:15px">

<h4>${item.name}</h4>

<button onclick="decreaseQty(${index})">
-
</button>

<span style="padding:0 10px">
${item.qty}
</span>

<button onclick="increaseQty(${index})">
+
</button>

<p>
₹${item.price * item.qty}
</p>

<button onclick="removeCart(${index})">
Remove
</button>

</div>

`;

});

document.getElementById("count")
.innerText = cart.length;

document.getElementById("total")
.innerText = "Total : ₹" + total;

}
function increaseQty(index){

cart[index].qty++;

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();

}

function decreaseQty(index){

if(cart[index].qty > 1){

cart[index].qty--;

}else{

cart.splice(index,1);

}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();

}
function removeCart(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();

}

updateCart();

function toggleCart(){

document
.getElementById("cart")
.classList
.toggle("active");

}

function addWishlist(name){

let wishlist =
JSON.parse(
localStorage.getItem("wishlist")
)
|| [];

wishlist.push(name);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

showToast(name + " Added To Wishlist ❤️");

}

function updateWishlistCount(){

let wishlist =
JSON.parse(localStorage.getItem("wishlist"))
|| [];

document.getElementById("wishCount")
.innerText = wishlist.length;

}

updateWishlistCount();

function showToast(message){

const toast =
document.getElementById("toast");

toast.innerText = message;

toast.style.display = "block";

setTimeout(() => {
toast.style.display = "none";
},2000);

}

document.getElementById("search").addEventListener("keyup", function () {
    
    console.log("Search Working");

    let value = this.value.toLowerCase();

    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
});
function filterProducts(category){

if(category==="All"){
displayProducts(products);
return;
}

const filteredProducts =
products.filter(product =>
product.category === category
);

displayProducts(filteredProducts);

}

function scrollToProducts(){
    document.getElementById("productList")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function buyNow(name,price){

localStorage.setItem(
"checkoutProduct",
JSON.stringify({
name:name,
price:price
})
);

window.location.href =
"checkout.html";

}

function subscribeUser(){

    let email =
    document.getElementById("emailInput").value;

    let msg =
    document.getElementById("subscribeMsg");

    if(email === ""){
        msg.innerHTML =
        "❌ Please enter your email";
        return;
    }

    if(!email.includes("@")){
        msg.innerHTML =
        "❌ Invalid email address";
        return;
    }

    localStorage.setItem(
        "subscriberEmail",
        email
    );

    msg.innerHTML =
    "✅ Successfully Subscribed!";

    document.getElementById(
        "emailInput"
    ).value = "";
}

function showLogin(){

document.getElementById(
"loginModal"
).style.display="flex";

}

function closeLogin(){

document.getElementById(
"loginModal"
).style.display="none";

}

function loginUser(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

if(email==="" || password===""){

showToast("Fill all fields");

return;

}

localStorage.setItem(
"userEmail",
email
);

showToast("Login Successful ✅");

closeLogin();

}
const banners = [
"image.jpg",
"banner1.jpg",
"menbanner.jpg",
"accessoriesbannner.jpg"
];

let currentBanner = 0;

setInterval(()=>{

currentBanner++;

if(currentBanner >= banners.length){
    currentBanner = 0;
}

document.getElementById("sliderImage")
.src = banners[currentBanner];

},3000);

function showProductDetails(index){

let p = products[index];

document.getElementById("productDetails").innerHTML = `

<img src="${p.img}">

<h2>${p.name}</h2>

<h3>₹${p.price}</h3>

<p>Premium Fashion Product</p>

<button onclick="addToCart('${p.name}',${p.price})">
Add To Cart
</button>

<button onclick="buyNow('${p.name}',${p.price})">
Buy Now
</button>

`;

document.getElementById("productModal").style.display = "flex";

}

function closeProductModal(){

document.getElementById("productModal").style.display = "none";

}

function toggleDarkMode(){

document.body.classList.toggle(
"dark-mode"
);

localStorage.setItem(
"darkMode",
document.body.classList.contains(
"dark-mode"
)
);

}

if(
localStorage.getItem("darkMode")
=== "true"
){

document.body.classList.add(
"dark-mode"
);

}

let user = localStorage.getItem("userEmail");

let profileBtn = document.getElementById("profileBtn");

if(user && profileBtn){

profileBtn.innerText = "👤 Profile";

}
