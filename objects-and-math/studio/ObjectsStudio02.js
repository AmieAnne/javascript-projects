// Code your orbitCircumference function here:
let orbitCircumference = function (radius) {
  return  Math.round(2 * Math.PI * radius) 
}
// Code your missionDuration function here:
let missionDuration = function (orbitNum, orbitRadius = 2000, orbitalSpeed = 28000) {
let circumference = orbitCircumference (orbitRadius) 
let time = circumference / orbitalSpeed  
return Math.round(time * orbitNum * 100) / 100
}
// Copy/paste your selectRandomEntry function here:
let selectRandomEntry = function(idNumbers) {
  let i = Math.floor(Math.random() * 6)
  return idNumbers[i]
  }
// Code your oxygenExpended function here:
let oxygenExpended = function(candidate,orbitRadius,orbitalSpeed) {
  let spaceWalktime = missionDuration(3,orbitRadius,orbitalSpeed) 
  let o2Used = Math.round(candidate.o2Used(spaceWalktime) * 1000) / 1000
  return candidate.name + " will perform the spacewalk, which will last " + spaceWalktime + " hours and require " + o2Used + " kg of oxygen."
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let radius = 3500
 console.log("The mission will travel " + orbitCircumference(radius) + " km around the planet, and it will take " + missionDuration(1200,radius) + " hours to complete.")
 console.log(oxygenExpended(candidateA,radius,2400))
