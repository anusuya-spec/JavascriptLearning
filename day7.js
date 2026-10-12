// // An array store multiple values in single variable
// let fruits = ["apple", "Banana", "orange", "Mango"];
// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]);
// // console.log(fruits[3]);
// fruits.push("Pineapple");
// console.log("after push", fruits);
// fruits.pop();
// console.log("after pop", fruits);

let numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => {
    return num * 2;
});
console.log("originale",numbers);

console.log("doubled",doubled);
let fruits = ["Apple", "Banana", "Mango"];
const yummyFruits = fruits.map((yummy) => {
        // console.log("yummyFruits", yummy[]);
        return yummy+ " is yummy";

});
        console.log("yummyFruits",yummyFruits);

let prices = [50, 75, 100, 125];
const discountedPrices = prices.map((price) => {
    return price - 10;
});
console.log("discountedPrices", discountedPrices)