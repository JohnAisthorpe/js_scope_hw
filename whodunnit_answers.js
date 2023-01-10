// episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// The murderer is Miss Scarlet. This is because the scenario with the key "murderer" is a const and is not within a function so is visible to(within scope of) the declareMurderer function.

// episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//There will be an error because we are trying to reasign a value to a constant.

// episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
//We are going to get two verdicts. The first is Mrs. Peacock because the declareMurderer function is called first. It uses the let variable within the function and therfore ignores the variable with the same name outside the function. The second verdict is Professor Plum because this is the only variable within the scope of this constant. It cannot see the other which is inside a function.

// episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
//When declareAllSuspects is called and the result logged we will see that suspect three is no Mrs. Peacock as might expected. This is because within the function we have renamed this variable. The others will appear as expected beacause they have only been declared once and outside the function. When suspect three is logged sepparate from the function it will be Mrs. Peacock instead of Colonel Mustard because Colonel Mustard is not within it's scope since it is within a function.

// episode 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.name = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);
  //This will log that the weapon is the Revolver. In this case the const is an object. The object cannot be change because it is a constant but the key:value pairs can be changed.

//   episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//The verdict will be Mrs. White. This is because with in the changeMurderer function which is called there is a plotTwist function wich is called. This plotTwist function changes the murderer again, to Mrs. White. if the function was not called anthe variable "murderer" was logged instead, the murderer would be Colonel Mustard because the reassignments inside the functions are outwith the scope/not visible.

// episdoe 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//This will not be able to change the murderer to Colonel Mustard with the function plotTwist because you cannot re-declare a variable. I don't understand why this is not giving an error though.
