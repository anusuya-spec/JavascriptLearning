let age = 25;
let hasId = true;

console.log(age >= 18 && hasId === true);
console.log(age < 18 || hasId === false);
console.log(!hasId);
//== — Loose equality: compares values and may convert their data types before comparing.
//=== — Strict equality: compares both the value and the data type, without converting types.