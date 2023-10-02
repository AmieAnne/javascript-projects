let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 3
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 4
};

let Beagle = {
   name: "Lestat",
   species: "Beagle",
   mass: 14,
   age: 1.5,
   astronautID: 1
}
let Tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 2,
   astronautID: 5
}


// After you have created the other object literals, add the astronautID property to each one.
// Add a Method
Beagle ["move"] = function() {
   return Math.round(Math.random()*10)
}
salamander ["move"] = function() {
  return Math.round(Math.random()*10)
}
superChimpOne ["move"] = function() {
   return Math.round(Math.random()*10)
}
superChimpTwo ["move"] = function() {
   return Math.round(Math.random()*10)
}
Tardigrade ["move"] = function() {
   return Math.round(Math.random()*10)
}
console.log(Tardigrade.move())
// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, Beagle, Tardigrade];
// Print out the relevant information about each animal.
let crewReports = function(animal) {
   return animal.name + " is a " + animal.species + ". They are " + animal.age + " years old and " + animal.mass + " kilograms. Their ID is " + animal.astronautID + "."
}
for(i=0; i < crew.length; i++) {
   console.log(crewReports(crew[i]))
}

   // Start an animal race!
   function fitnessTest(candidates){
      let results = [], numSteps, turns;
      for (let i = 0; i < candidates.length; i++){
          numSteps = 0;
          turns = 0;
          while(numSteps < 20){
          numSteps += candidates[i].move();
          turns++;
          }
          results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
      }
      return results;
     }
let results = fitnessTest(crew)
for (let i = 0; i < results.length; i++)  {
   console.log(results[i])
}
