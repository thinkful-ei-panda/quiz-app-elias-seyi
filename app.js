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

function generateQuestionTemplate() {
  console.log('`generateFieldset` ran');
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
  $('h1').html(
    '<h1>THIS IS QUESTION 1 of 5 and your score is 0 correct 0 incorrect'
  );
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
function renderQuiz() {
  //uses the generateHTML() function based on which question the user is at.
  console.log('`renderQuiz` ran');
  $(`.js-quiz-app`).html(generateForm());
  
}

function renderScore() {
  console.log('`renderScore` ran');
}

//renders the question
function renderQuestion() {
  //this will have to use the generateHTML() function to renderQuestions which will come from the store.
  // $(')
  console.log('`renderQuestion` ran');
}

function renderAnswer() {
  //somehow will have to verify the selected choice is the correct answer the question.
  console.log('`renderAnswer` ran');
}

function renderCompletedQuiz() {
  console.log('`renderCompletedQuiz` ran');
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
  //Basically works as a try again

  
  console.log('`handleNewQuiz` ran');
}

/**********************ACTUAL APP FUNCTIONS ************ */

function handleQuiz() {
  renderQuiz();
}

function quizQuestions() {
  generateForm();
  generateQuestionTemplate();
  generateUserFeedback();
  generateCorrectAnswer();
  renderQuestion();
  handleStartButton();
  renderQuestion();
  renderScore();
  handleAnswerChoice();
  handleAnswerSubmission();
}

function quizAnswers() {
  generateHTML();
  renderAnswer();
  handleNextQuestion();
}

function endQuiz() {
  renderCompletedQuiz();
  handleNewQuiz();
}

$(handleQuiz);
