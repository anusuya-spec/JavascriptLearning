// Only pass the specific true or false it throws out anything don't have pass.
let scores = [45, 85, 30, 92, 60, 25];
const passedScore = scores.filter((score) => {
    return score >= 50 ;
});
console.log("PassedScore",passedScore );

let animals = ["cat", "elephant", "dog", "hippopotamus", "ant"];
const bigAnimal = animals.filter((animal) => {
    return animal.length > 3;
});
console.log("Big animal", bigAnimal);