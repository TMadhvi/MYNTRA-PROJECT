let orders =
JSON.parse(localStorage.getItem("orders"))
|| [];

setTimeout(() => {

orders[orders.length-1].status =
"🚚 Shipped";

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

},5000);

setTimeout(() => {

orders[orders.length-1].status =
"✅ Delivered";

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

},10000);

let ordersList =
document.getElementById("ordersList");

if(orders.length === 0){

ordersList.innerHTML =
"<h3>No Orders Yet</h3>";

}else{

orders.forEach(order => {

ordersList.innerHTML += `

<div class="order-card">

<h3>${order.name}</h3>

<p>Price : ₹${order.price}</p>

<p>Status : ${order.status}</p>
</div>

`;

});

}