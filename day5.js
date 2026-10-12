// A function is reusable block of codes that perform the particular task
// syntax function function name {
    // code
// }
// function greet(){
//     console.log("Hello anusuya");
// }
// greet();
// - function — declares a function.
// - greet — the function's name.
// - { } — contains the code to execute.
// - greet() — calls the function, so its code runs.
// Important: Defining a function does not execute it automatically. You need to call it using greet().
// function greet(name){
//     console.log("Hello", name);
// }
// greet("anusuya");
// greet("Maran");

function multiply(a , b){
    return a * b ;
}
let result = multiply(5 , 4);
console.log("multiply", result);
