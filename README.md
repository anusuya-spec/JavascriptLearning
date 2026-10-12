# My Full-Stack Learning Notes
## let and const
- let → value can be changed.
- Example: `let age = 10;`
           `age = 13;`
- const → value cannot be reassigned.
- Example: `const country = "India"; `
              `country = ''USA;`
## Datatype
- String, number, boolean, undefined, null
## Day 6: Arrow Functions
- Arrow functions are a shorter way to write functions.
- Example: `const add = (a, b) => a + b;`

## Day 8 & 9: Array Methods
- `.map()`: Changes every item and makes a new array.
- `.filter()`: Keeps only items that pass a true/false test.
## Object
- Arrays are great for lists, but what if you want to store a single entity with lots of details—like a user profile.
- An object stores data in key-value pairs using curly braces `{ }`.
`let user = {`
    `name : "Anusuya",`
   ` age : 32,`
   ` isLearning : true`

`}`
`console.log(user);`
### Dot notation
-   You don't want to print whole object; jou just want specific piece of information you can use that.
## Destructing
-   Destructuring is a shortcut that lets you "unpack" properties from an object and turn them into regular variables in one single line.
## Spread operator
-   The spread operator is written as three dots (...). Its job is to "unpack" or "spread out" the contents of an array or an object into a new one. Think of it like pouring the contents of one box into a brand new box.