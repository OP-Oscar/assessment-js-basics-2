///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
console.log(`------------Problem 1------------`)
const summedPrice = cart.reduce((acc, curr) => acc + curr.price,0 )
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
console.log(`------------Problem 2------------`)
//function taking 3 parameters
function calcFinalPrice (cartTotal, couponValue, tax){
    //cart total + tax - coupon
    return (cartTotal * (1+ tax)) - couponValue
}
console.log('Function caclFinalPrice was created through expression method')

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/
console.log(`------------Problem 3------------`)
console.log(`Answer in lines 88 to 97`)
/*
    TEXT ANSWER HERE
For a cart page, properties of teh customer object I would include would consist of: customerName, userName, itemName, itemCode, itemQuantity, price, deliveryCost and taxRate. Reason for these properties is because I would need to know who the order belongs to and since names may repeat there would have to be a unique username. In regards to items purchased, I would need to know the name of the item and the itemCode is included to identify subproducts. In example, what if the product is sold in varying color or sizes. Lastly we would need the cost, quantity, and tax rate for customer's region. The cost and quantity would help get a sub-total and present this to the customer. The tax rate and delivery costs could be used to present a final cost to the customer, assuming products are being shipped since it is being purchased online. Data types for each of the properties would be as follows:

customerName - string
userName - string
itemName - string 
itemCode -string
itemQuantity - Number 
price - Number
deliveryCost - Number
taxRate - Number
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
console.log(`------------Problem 3 part2------------`)
class Customer {
    constructor(userName, itemName, itemCode, itemQuantity, price, deliveryCost, taxRate){
    this.userName = userName,
    this.itemName = itemName,
    this.itemCode = itemCode,
    this.itemQuantity = itemQuantity,
    this.price = price,
    this.deliveryCost = deliveryCost,
    this.taxRate = taxRate
}
}
console.log(`class Customer created`)