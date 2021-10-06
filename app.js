import { outcome, getRandomIndx, randomIndx } from './answers.js';
//const outcomes = ['maybe', 'no', 'ummmmm nah', 'of course', 'yes'];
const userInput = document.getElementById('questionInput');
const getFourtune = document.getElementById('getAnswer');
const textResults = document.getElementById('questionResults');



// initialize global state






//const randomIndex = Math.floor(Math.random() * outcomes.length);


// set event listeners
getFourtune.addEventListener('click', ()=> {
    textResults.textContent = outcome[randomIndx];
//console.log('hello');

});




//getFourtune.addEventListener('click', ()=>{

//});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
