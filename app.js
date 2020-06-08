const store = {
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


function generateForm() {
  console.log('`generateForm` ran');
  $('main').html(`
    <main class="group">
      <div class="start-page">
        <h1>Elias' and Seyi's SCIENCE QUIZ</h1>
        
        <h2>Let us begin. </h2>
        <button id = "start" type = "submit">Begin</button>
      </div>
      
    </main>
  `);
}


function generateQuestion() {
  console.log('`renderQuestion` ran');
  $('main').html(`
    <main class="group">
      <div class="start-page">
        <form >
          Your score ${store.score} out of 5 <br/>
          Question ${store.questionNumber + 1} <br/> <br/>

          <fieldset> <legend>${store.questions[store.questionNumber].question}</legend>
          <input type="radio" id="${store.questions[store.questionNumber].answers[0]}" name="Choice" value="${store.questions[store.questionNumber].answers[0]}">
          <label id="answer-choices" for="Choice1">${store.questions[store.questionNumber].answers[0]}</label><br/>
          <input type="radio" id="${store.questions[store.questionNumber].answers[1]}" name="Choice" value="${store.questions[store.questionNumber].answers[1]}">
          <label id="answer-choices" for="Choice2">${store.questions[store.questionNumber].answers[1]}</label><br/>
          <input type="radio" id="${store.questions[store.questionNumber].answers[2]}" name="Choice" value="${store.questions[store.questionNumber].answers[2]}">
          <label id="answer-choices" for="Choice3">${store.questions[store.questionNumber].answers[2]}</label><br/>
          <input type="radio" id="${store.questions[store.questionNumber].answers[3]}" name="Choice" value="${store.questions[store.questionNumber].answers[3]}">
          <label id="answer-choices" for="Choice4">${store.questions[store.questionNumber].answers[3]}</label><br/>
          <button id="submitForm">Submit</button>
          </fieldset>
        </form>
      </div>
    </main>`
  );
}


function generateCorrect() {
  
  
  if (store.questionNumber  < store.questions.length - 1) {
    store.score += 1;
    store.questionNumber += 1;
    $('main').html(
      `<main class="group"><div class="start-page"><p>Correct! Your current score is ${store.score} out of 5</p>
      <button type = "submit" id = "next">Continue</button></main>`);
    
      
    
  } else {
    store.score += 1;
    store.questionNumber += 1;
    $('main').html(
      `<main class="group"><div class="start-page"><p>Correct! Your current score is ${store.score} out of 5</p> 
      <button type = "submit" id = "finish">Complete</button></main>
      `);
  }

}

function generateWrong() {
  const correct = store.questions[store.questionNumber].correctAnswer;
  let answer = $('input[name = Choice]:checked').val();
  
  if (store.questionNumber < store.questions.length - 1) {
    store.questionNumber += 1;

    $('main').html(`
    <main class="group"><div class="start-page"><h1>You current score ${store.score} out of 5</h1><br/>
    <p>Incorrect.  Your answer was ${answer} while the correct answer was ${correct}. </p> 
    <button type = "submit" id ="next" >Continue</button></main>
    `);



  } else {
    store.questionNumber += 1;

    $('main').html(`
    <main class="group">
    <div class="start-page"><p>You current score ${store.score} out of 5</p><br/>
    <p>Incorrect.  Your answer was ${answer} while the correct answer was ${correct}. </p> 
    <button type="submit" id="finish">Complete</button></main>
    `);
  }
  //store.questionNumber ++;
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

    $('header').html(`
      <h1>You're done!</h1>
    `);
    $('main').html(`
      <p>You scored a ${store.score} out of 5</p><br/>
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

