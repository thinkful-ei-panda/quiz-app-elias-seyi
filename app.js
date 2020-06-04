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
 
</form>
 */

function generateForm() {
  $('main').html(
    '<main class="mainClass"><p class="answers"></p></main>'
  );
  console.log('`generateForm` ran');
}

function generateAnswerChoices() {
  let questionNumber = store.questions[store.questionNumber];
  return `
    <input type="radio" id="answerChoice1" name="quizAnswer" value="a"> 
    <label for="answerChoice1">${questionNumber.answer[1]}</label>

    <input type="radio" id="answerChoice2" name="quizAnswer" value="b">
    <label for="answerChoice2">${questionNumber.answer[2]}</label>

    <input type="radio" id="answerChoice3" name="quizAnswer" value="c">
    <label for="answerChoice3">${questionNumber.answer[3]}</label>

    <input type="radio" id="answerChoice4" name="quizAnswer" value="d">
    <label for="answerChoice4">${questionNumber.answer[4]}</label>
    </div>
  `;
}

function generateQuestionTemplate() {
  let questionNumber = store.questions[store.questionNumber];
  return ` 
    <form id="questionsForm" class="questionsForm">
    <fieldset>
      <div class="questionTemplate"> 
        <legend>${questionNumber.question}</legend>
      </div>
      <div class="optional">
        <div class="answerChoices">
        ${generateAnswerChoices};
        </div>
      </div>
      <button type="submit"> Submit </button>
      <button type="button"> Next &gt;> </button>
    '
  `;
  console.log('`generateFieldset` ran');
}

function generateUserFeedback() {
  
  console.log('`generateH1` ran');
}

function generateCorrectAnswer(){
  return `
    <div class="resultsScreen">
      <form id="restart-quiz">`;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

//renders the quiz
function renderQuiz() {
  //uses the generateHTML() function based on which question the user is at.
  let html = '';

  if (store.quizStarted === false) {
    $('main').html(generateForm());
  }
  else if(store.questionNumber >= 0 && store.questionNumber < store.questions.length) {
    html = generateUserFeedback();
    html += generateQuestionTemplate();
    $('main').html(html);
  }
  else {
    $('main').html(generateCorrectAnswer);
  }
  console.log('`renderQuiz` ran');
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStartButton() {
  console.log('`handleStartBUtton` ran');
}

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

function handleNextQuestion() {
  console.log('`handleNextQuestion` ran');
}

function handleNewQuiz() {
  //handles the last button after the score of the quiz is presented and all the questions have been answered.
  console.log('`handleNewQuiz` ran');
}

/**********************ACTUAL APP FUNCTIONS ************ */


function handleQuizApp() {
  renderQuestion();
  generateForm();
  handleAnswerSubmission();
}

$(handleQuizApp);

