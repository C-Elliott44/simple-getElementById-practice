// Create cariables for the welcome message
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';
// Concatenate the three variables above to create the welcome messge
var welcome = greeting + name + message;

// Create cariables to hold details about the sign
var sign = 'Contague House';
var tiles = sign.length;
var tilePrice = 5;
var subTotal = tiles * tilePrice;
var shippingPrice = 7;
var grandTotal = subTotal + shippingPrice;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// Get the element that has id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shippingPrice;

// Get the element that has id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal;