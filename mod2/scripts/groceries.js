	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "almond milk",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 5.00
	},
	{
		name: "avocado",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 7.49
	},
	{
		name: "organic milk",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 15.99
	},
	{
		name: "cucumber",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 5.49
	},
	{
		name: "tomato",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 10.49
	},
	{
		name: "banana",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 8.49
	},
	{
		name: "soy milk",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 7.99
	},
	{
		name: "potato",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 25.49
	},
	{
		name: "apple",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 9.99
	},
	{
		name: "cashew",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 4.49
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_names_prices.push([prods[i].name, prods[i].price, prods[i].organic]);
		}
		else if ((restriction == "nutFree") && (prods[i].nutFree == true)){
			product_names_prices.push([prods[i].name, prods[i].price, prods[i].organic]);
		}
		else if (restriction == "None"){
			product_names_prices.push([prods[i].name, prods[i].price, prods[i].organic]);
		}

	}
	return product_names_prices;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		for (let j=0; j<products.length; j+=1) {
			if (chosenProducts[i] == products[j].name) {
				totalPrice += products[j].price;
			} 
		}
	}
	return totalPrice;
}
