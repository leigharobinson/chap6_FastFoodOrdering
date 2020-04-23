console.log("Bob Burgers Quote");
// You need to write code to represent the process of ordering food at a fast food joint. 
// Your restaurant is Bob's Burgers, and you have some starter code below. 
// The object will have two behaviors that you must define.

// 1.The object should have a property named orders that is an array. 
// You will need to define this.
// 2.Define a function to represent the behavior of placing an order.
//  It should accept one argument named meal. This argument will be an object. There is starter code provided.
// 3. Define a function to represent the behavior of getting all orders. 
// It should return the order property (hint: this). You will need to define this.
// 4. Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.



const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
       for(key in meal)
        this.orders.push(key + ": " + meal[key]);
    }
};

const chickenComboMeal = {
   sandwichType: "chicken sandwitch",
   fries: true,
   drinkSize: "medium" 
}

// Place an order
restaurant.placeOrder(chickenComboMeal);

// Invoke the function to return the list of all orders
console.log(restaurant.orders.toString());

// Output all orders to the console using console.table()

console.table(restaurant.orders)