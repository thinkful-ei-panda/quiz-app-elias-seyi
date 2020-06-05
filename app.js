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


function generateCorrect() {
  
  
  console.log(store.questionNumber)

  if (store.questionNumber  < store.questions.length) {
    store.score += 1;
    store.questionNumber += 1;
    $('main').html(
      `<p>Correct! Your current score is ${store.score} out of 5</p>
      <button type = "submit" id = "next">Continue</button>`);
    
      
    
  } else {
    store.score += 1;
    store.questionNumber += 1;
    $('main').html(
      `<p>Correct! Your current score is ${store.score} out of 5</p> 
      <button type = "submit" id = "finish">Complete</button>
      `);
  }

}

function generateWrong() {
  

  console.log(store.questionNumber)

  const correct = store.questions[store.questionNumber].correctAnswer;
  let answer = $(`input[name = Choice]:checked`).val();
  
  if (store.questionNumber < store.questions.length) {
    store.questionNumber += 1;

    $('main').html(`
    <h1>You current score ${store.score} out of 5</h1><br/>
    <p>Incorrect.  Your answer was ${answer} while the correct answer was ${correct}. </p> 
    <button type = "submit" id = "next">Continue</button>
    `);



  } else {
    store.questionNumber += 1;

    $('main').html(`
    <p>You current score ${store.score} out of 5</p><br/>
    <p>Incorrect.  Your answer was ${answer} while the correct answer was ${correct}. </p> 
    <button type="submit" id="finish">Complete</button>`);

  }
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
    $('header').html('<h2></h2>');
  }));
}

function handleAnswerChoice() {
  // this will have to do with the radio buttons that will have to be first rendered to then select from.
  console.log('`generateUserFeedback` ran');
  $('main').on('click', '#submitForm', event => {
    event.preventDefault();

    const correct = store.questions[store.questionNumber].correctAnswer;

    let answer = $('input[name = Choice]:checked').val();

    if (answer === correct) {
      generateCorrect();
    } else if ((answer !== undefined) && (answer !== correct)) {
      generateWrong();
    } else {
      renderQuestion();
    }
  });
  console.log('`handleAnswerChoice` ran');


  // $('#js-answer-choices').submit( event => {
  // event.preventDefault();
  // const answerChoice1 = $(event.currentTarget).find('input[name="question1"]').val();
  // });
 
}


function handleNextQuestion() {
  console.log('`handleNextQuestion` ran');

  $('main').on('click', '#next', event => {
    event.preventDefault();
    renderQuestion();
  });
  
}

function handleEndQuiz() {
  //handles the last button after the score of the quiz is presented and all the questions have been answered.
  //Basically works as a try again
  $('main').on('click', '#finish', (event => {
    event.preventDefault();

    $('header.html').html(`
      <h1>You're done!</h1>
      <p>Your score is a ${store.score} out of 5</p> 
      <button type = "submit" id = "start">Try again?</button>
    `);

    store.score = 0;
    store.questionNumber = 0;
    console.log('`handleEndQuiz` ran');

  }));
  
}



/**********************ACTUAL APP FUNCTIONS ************ */


function handleQuizApp() {
  renderStart();
  startQuiz();
  handleAnswerChoice();
  handleNextQuestion();
  handleEndQuiz();
}

$(handleQuizApp);

