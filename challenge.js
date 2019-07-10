// Coding Challenge
/*
[x] Build a function constructor called Question to describe a question.
    [x] quiz question
    [x] answer pool - choose appropriate data structure
    [x] correct answer - represented by numbers
[x] Create questions using the constructor
[x] Store questions inside an array
[x] Select random question to log to the console with possible answers - each question should have a number - write method for question objects
[x] Use the prompt function to ask user for correct answer. User should input the number to choose
[x] Check if the answer is correct and print to the console right or wrong - use a new method
[x] Suppose this code would be a plugin for other programmers - make sure that all code is private
*/
/*
// make code private with IIFE - immediately invoked function expression
(function() {
  // FUNCTION CONSTRUCTOR PATTERN - use this to instantiate new objects
  function Question(question, answer, correct) {
    // quiz question - string
    this.question = question;
    // answer pool - array
    this.answer = answer;
    // correct answer - number
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ": " + this.answer[i]);
    }
  };

  Question.prototype.checkAnswer = function(getAnswer) {
    if (this.correct === getAnswer) {
      console.log("Right!");
    } else {
      console.log("Wrong!");
    }
  };
  // create 3 questions using the Question constructor
  // remember this takes question, answer, and correct
  var q1 = new Question("is six afraid of seven?", ["Yes", "No"], 0);
  // question is a string, for answer I chose to hold them in an array, and correct is the index of the answer array
  var q2 = new Question(
    "how many fingers am I holding?",
    ["1", "2", "you have no arms!"],
    2
  );
  // the new keyword creates an object form the Question constructor then the 'this' variable is set equal to the new object's data which is then stored in the q2 variable which doesn't actually hold it but rather points to the place in memory where the object exists
  var q3 = new Question(
    "whats the meaning of life?",
    ["Love", "Happiness", "Keaneau"],
    2
  );

  // store created questions from Question constructor inside an array
  var questionBank = [q1, q2, q3];

  // generate random number from length of Question array
  var num = Math.floor(Math.random() * questionBank.length);

  questionBank[num].displayQuestion();
  var getAnswer = parseInt(prompt("Take your guess!"));
  // use generated random number to pass into Question array to select a question with the display function
  questionBank[num].checkAnswer(getAnswer);
})();
*/
// EXPERT LEVEL CHALLENGE
// make code private with IIFE - immediately invoked function expression
(function() {
  // FUNCTION CONSTRUCTOR PATTERN - use this to instantiate new objects
  function Question(question, answer, correct) {
    // quiz question - string
    this.question = question;
    // answer pool - array
    this.answer = answer;
    // correct answer - number
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ": " + this.answer[i]);
    }
  };

  Question.prototype.checkAnswer = function(getAnswer, callback) {
    var sc;
    if (getAnswer === this.correct) {
      console.log("Right!");
      sc = callback(true);
    } else {
      console.log("Wrong!");
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your current score is: " + score);
    console.log("--------------------------------");
  };
  // create 3 questions using the Question constructor
  // remember this takes question, answer, and correct
  var q1 = new Question("is six afraid of seven?", ["Yes", "No"], 0);
  // question is a string, for answer I chose to hold them in an array, and correct is the index of the answer array
  var q2 = new Question(
    "how many fingers am I holding?",
    ["1", "2", "you have no arms!"],
    2
  );
  // the new keyword creates an object form the Question constructor then the 'this' variable is set equal to the new object's data which is then stored in the q2 variable which doesn't actually hold it but rather points to the place in memory where the object exists
  var q3 = new Question(
    "whats the meaning of life?",
    ["Love", "Happiness", "Keaneau"],
    2
  );

  // store created questions from Question constructor inside an array
  var questionBank = [q1, q2, q3];

  function keepScore() {
    var score = 0;
    return function(correct) {
      if (correct) {
        score++;
      }
      return score;
    };
  }

  var gameScore = keepScore();
  function playGame() {
    // generate random number from length of Question array
    var num = Math.floor(Math.random() * questionBank.length);

    questionBank[num].displayQuestion();
    var getAnswer = prompt("Take your guess!");
    if (getAnswer !== "exit") {
      questionBank[num].checkAnswer(parseInt(getAnswer), gameScore);

      playGame();
    }
  }
  playGame();
  // use generated random number to pass into Question array to select a question with the display function
})();
