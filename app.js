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
        'A and B',
        'All of the Above'
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

 //shows the page before we start quiz
function generateForm() {
  console.log('`generateForm` ran');
  $("header").html(
    `<div id = "start-page">
      <h1>Elias' and Seyi's SCIENCE QUIZ</h1>
      <h2>Let us begin. </h2>
  </div>`);

  $("main").html(`
  <button id = "start" type = "submit">Begin</button>`);
}


function generateQuestion() {
  console.log('`renderQuestion` ran');
  $('main').html(
    `<form>
      Your score ${store.score} out of 5 <br/>
      Question ${store.questionNumber + 1} <br/> <br/>

      <fieldset> <legend>${store.questions[store.questionNumber].question}</legend>
      <input type="radio" id="${store.questions[store.questionNumber].answers[0]}" name="Choice" value="${store.questions[store.questionNumber].answers[0]}">
      <label for="Choice1">${store.questions[store.questionNumber].answers[0]}</label><br/>
      <input type="radio" id="${store.questions[store.questionNumber].answers[1]}" name="Choice" value="${store.questions[store.questionNumber].answers[1]}">
      <label for="Choice2">${store.questions[store.questionNumber].answers[1]}</label><br/>
      <input type="radio" id="${store.questions[store.questionNumber].answers[2]}" name="Choice" value="${store.questions[store.questionNumber].answers[2]}">
      <label for="Choice3">${store.questions[store.questionNumber].answers[2]}</label><br/>
      <input type="radio" id="${store.questions[store.questionNumber].answers[3]}" name="Choice" value="${store.questions[store.questionNumber].answers[3]}">
      <label for="Choice4">${store.questions[store.questionNumber].answers[3]}</label><br/>
      <button id="submitForm">Submit</button>
      </fieldset>

    </form>`
  );
}

function generateUserFeedback() {
  
  console.log('`generateH1` ran');
}

function generateCorrectAnswer(){
  $('p.answers').html(
    '<p class="answers"> QUESTION 1 ANSWERS</p>'
  );
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

//renders the quiz
function renderStart() {
  console.log('`renderStart` ran');
  $('.js-quiz-app').html(generateForm());
}

function renderQuestion() {
  console.log('Rendering Question');
  $('.js-quiz-app').html(generateQuestion());
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function startQuiz() {
  //uses the generateHTML() function based on which question the user is at.
  console.log('`startQuiz` ran');

  $('main').on('click', '#start', (event => {
    event.preventDefault();
    renderQuestion();
  }));
}

function handleAnswerChoice() {
  // this will have to do with the radio buttons that will have to be first rendered to then select from.
  
  console.log('`handleAnswerChoice` ran');


  // $('#js-answer-choices').submit( event => {
  // event.preventDefault();
  // const answerChoice1 = $(event.currentTarget).find('input[name="question1"]').val();
  // });
 
}


function handleNextQuestion() {
  console.log('`handleNextQuestion` ran');
}

function handleEndQuiz() {
  //handles the last button after the score of the quiz is presented and all the questions have been answered.
  //Basically works as a try again

  
  console.log('`handleEndQuiz` ran');
}

/**********************ACTUAL APP FUNCTIONS ************ */


function handleQuizApp() {
  renderStart();
  startQuiz();
  handleNextQuestion();
  handleAnswerChoice();
  handleEndQuiz();
}

$(handleQuizApp);

