///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
console.log(`------------Problem 1------------`)

const pizza = {
    name: "Super Supreme", // => name (string)
    price: 28, // => price (number)
    category: "entree", // => category (string)
    populartiy: 80, // => popularity (number)
    rating: 4, // => rating (number)
    tags: ['gluten-free', 'delicous', 'multi-toppings', 'adults', 'vegetables-meats'] // => tags (array of strings)
}

console.log(pizza)

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(`------------Problem 2------------`)
console.log(pizza.populartiy) // => dot notation to grab popularity of object pizza

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(`------------Problem 2 part2------------`)
console.log(pizza.tags[1])// => dot notation to grab 2nd item in tag array of object pizza

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
console.log(`------------Problem 2 part3------------`)
let {price : pizzaPrice} = pizza // => destructure to create variable pricePizza from pizza
console.log(pizzaPrice) // =>printing new variable pizzaPrice


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
console.log(`------------Problem 2 part4------------`)
let {category: pizzaCategory} = pizza // => destructure to create variable categoryPizza from pizza
console.log(pizzaCategory) // =>printing new variable categoryPizza

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
console.log(`------------Problem 3------------`)
const foodArr = [{
    name: "Some Soup", // => name (string)
    price: 10, // => price (number)
    category: "entree", // => category (string)
    populartiy: 70, // => popularity (number)
    rating: 3, // => rating (number)
    tags: ['juicy soup', 'simple', 'vegetables', 'seniors', 'healthy'] // => tags (array of strings)
},
{
    name: "burger", // => name (string)
    price: 15, // => price (number)
    category: "entree", // => category (string)
    populartiy: 85, // => popularity (number)
    rating: 5, // => rating (number)
    tags: ['meaty', 'deluxe', 'bread', 'kids', 'fresh'] // => tags (array of strings)
},
{
    name: "Marinated Baby Octopus", // => name (string)
    price: 11, // => price (number)
    category: "appetizer", // => category (string)
    populartiy: 92, // => popularity (number)
    rating: 3, // => rating (number)
    tags: ['olive oil', 'healthy', 'grilled', 'adults', 'seafood'] // => tags (array of strings)
},
{
    name: "burrito", // => name (string)
    price: 17, // => price (number)
    category: "entree", // => category (string)
    populartiy: 67, // => popularity (number)
    rating: 2, // => rating (number)
    tags: ['loaded', 'crunchy', 'Taco Bell', 'kids', 'multi-topping'] // => tags (array of strings)
},
{
    name: "Shrimp Coctel", // => name (string)
    price: 9, // => price (number)
    category: "appetizer", // => category (string)
    populartiy: 88, // => popularity (number)
    rating: 5, // => rating (number)
    tags: ['seafood', 'vegetables', 'delicious', 'adults', 'small portion'] // => tags (array of strings)
}
]
console.log(foodArr)


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
console.log(`------------Problem 4------------`)
//filtering to get objects that have 'adults' in tags array
const filteredFood = foodArr.filter(element => element.tags.includes("adults"))
console.log(filteredFood) // => printing filteredfood


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
console.log(`------------Problem 5------------`)
//function called `filterByProperty` that takes in three arguments: 
// `property`(string of rating, popularity, or price) 
// `number` (number that you will compare against)
// `type` (boolean - 'above' or 'below')
function filterByProperty( property, number, type){
        //if condition to ensure arguments match requirements
        if( (property.toLowerCase() === 'rating' || property.toLowerCase() === 'popularity'|| property.toLowerCase() === 'price') && !isNaN(number) && (type.toLowerCase() === 'above' || type.toLowerCase() === 'below'))
        {
            //if arguments match parameter requirement, checking which rule to apply
            if(type.toLowerCase() === 'above'  ){
                //assigning filtered array for above requirement
                const filteredFoodArray = foodArr.filter(element => element[property.toLowerCase()] > number)
                return filteredFoodArray
            }else if (type.toLowerCase() === 'below'){
                 //assigning filtered array for below requirement
                const filteredFoodArray = foodArr.filter(element => element[property.toLowerCase()] < number)
                return filteredFoodArray
        }
        }else 
        //message to user to put correct arguments in function
        return `Property should be: rating or popularity or price \nNumber should be: an integer \nType should be: above or below`
    }

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
//invoking filterByProperty
console.log(filterByProperty('rating', 3, 'above'))