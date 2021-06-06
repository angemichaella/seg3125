	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli (lactosefree nutfree organic)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread (lactosefree)",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon (nutfree organic)",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Almond Milk (nutfree organic)",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 5.00
	},
	{
		name: "Avocado (organic)",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 7.49
	},
	{
		name: "Organic (milk organic)",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 15.99
	},
	{
		name: "Cucumber (lactosefree nutfree organic)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 5.49
	},
	{
		name: "Tomato (organic)",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 10.49
	},
	{
		name: "Banana (organic)",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 8.49
	},
	{
		name: "Soy Milk (lactosefree organic)",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 7.99
	},
	{
		name: "Potato (nutfree organic)",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 25.49
	},
	{
		name: "Apple (lactosefree organic)",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 9.99
	},
	{
		name: "Cashew (lactosefree organic)",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 4.49
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	let product_names_prices = [];
	for (let i=0; i<prods.length; i+=1) {

		if ((restrictions.lactoseFree && (prods[i].lactoseFree == false)) || 
			(restrictions.nutFree && (prods[i].nutFree == false)) || 
			(restrictions.organic && (prods[i].organic == false))) {

		} else {
			product_names_prices.push([prods[i].name, prods[i].price]);
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
