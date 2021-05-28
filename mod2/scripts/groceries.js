	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutFree: false,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "almond milk",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_names_prices.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "nutFree") && (prods[i].nutFree == true)){
			product_names_prices.push([prods[i].name, prods[i].price]);
		}
		else if (restriction == "None"){
			product_names_prices.push([prods[i].name, prods[i].price]);
		}
	}
	return product_names_prices;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
