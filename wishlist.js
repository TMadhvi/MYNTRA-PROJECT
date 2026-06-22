let wishlist =

JSON.parse(
localStorage.getItem("wishlist")
)

|| [];

const container =

document.getElementById(
"wishlistContainer"
);

function loadWishlist(){

container.innerHTML = "";

if(wishlist.length===0){

container.innerHTML =

"<h2>No Items In Wishlist ❤️</h2>";

return;

}

wishlist.forEach((item,index)=>{

container.innerHTML += `

<div class="card">

<div class="card-content">

<h3>${item}</h3>

<p class="price">
Saved Product
</p>

<button
onclick="removeWishlist(${index})">

Remove

</button>

</div>

</div>

`;

});

}

function removeWishlist(index){

wishlist.splice(index,1);

localStorage.setItem(

"wishlist",

JSON.stringify(wishlist)

);

loadWishlist();

}

loadWishlist();
