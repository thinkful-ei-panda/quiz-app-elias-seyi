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
  answerKey: ['The atmostphere','Milky Way','Ammeter','True','H2O',]
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


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

//renders the quiz
function renderQuiz() {
  console.log('`renderQuiz` ran');
}

//renders the question
function renderQuestion() {
  console.log('`renderQuestion` ran');
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)