/**
 * Example store structure
 */
'use strict';
const store = {

  // 5 or more questions are required

  //create answers array and answer key array
  questions: [
    {
      question: 'Why is the sky blue?',
      answers: [
        'The atmosphere',
        'Smurfs',
        'Rasberry Big Gulps',
        'Trees'
      ],
      correctAnswer: 'The atmosphere'
    },
    {
      question: 'Earth is located in which galaxy?',
      answers: [
        'Andromeda',
        'Milky Way',
        'ESO 325-G004',
        'M101'
      ],
      correctAnswer: 'Milky Way'
    },
    {
      question: 'What measures electric currents?',
      answers: [
        'Spoon',
        'Fork',
        'Ammeter',
        'Grass'
      ],
      correctAnswer: 'Ammeter'
    },

    {
      question: 'True or False? Iron is attracted by magnets.',
      answers: [
        'True',
        'False',
      ],
      correctAnswer: 'True'
    },

    {
      question: 'What is the chemical formula for water?',
      answers: [
        'H2O',
        'CO2',
        'NaCl',
        'C6-H12-O6'
      ],
      correctAnswer: 'H2O'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  answerKey: ['The atmosphere','Milky Way','Ammeter','True','H2O',]
};



/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/*
<form> 
  <p>Please select your preferred contact method:</p>
  <div>
    <input type="radio" id="contactChoice1"
           name="contact" value="email">
    <label for="contactChoice1">Email</label>
    <input type="radio" id="contactChoice2"
           name="contact" value="phone">
    <label for="contactChoice2">Phone</label>
    <input type="radio" id="contactChoice3"
           name="contact" value="mail">
    <label for="contactChoice3">Mail</label>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
 */

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function generateHTML() {
  //  so this generates the html sections like <form> <ul> <li> <a> <h1> <h2> <p> 
  console.log('`generateHTML` ran');
}
//renders the quiz
function renderQuiz() {
  //uses the generateHTML() function based on which question the user is at.
  console.log('`renderQuiz` ran');
}

//renders the question
function renderQuestion() {
  //this will have to use the generateHTML() function to renderQuestions which will come from the store.
  // $(')
  console.log('`renderQuestion` ran');
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleAnswerChoice() {
  // this will have to do with the radio buttons that will have to be first rendered to then select from.
  
  // $('#js-answer-choices').submit( event => {
  // event.preventDefault();
  // const answerChoice1 = $(event.currentTarget).find('input[name="question1"]').val();
  // });
  console.log('`handleAnswerChoice` ran');
}

function handleAnswerSubmission() {
  // This will handle the submisison forms that have a click event on the "Final Answer?" button.
  
  //$('#js-answer-choices').click( event => {
  //  event.preventDefault();
  //  const firstSubmit = $(event.currentTarget).find()..
  //});
  console.log('`handleAnswerSubmission` ran'); 
}

function handleIncorrectSubmission() {
  //somehow will have to verify the selected choice is the correct answer the question.
  console.log('`handleIncorrectSubmission` ran')
}

function handleNewQuiz() {
  //handles the last button after the score of the quiz is presented and all the questions have been answered.
  console.log('`handleNewQuiz` ran');
}