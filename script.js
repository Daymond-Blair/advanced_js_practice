// Higher Order Functions - accepting a function as input
/*var years = [2001, 1925, 1601, 095, 2014];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

// Callback functions
function calculateAge(element) {
  return 2019 - element;
}

var ages = arrayCalc(years, calculateAge);
console.log("Here are your athletes' ages.");

console.log(ages);

// 220 - age
function calculateMaxBpm(age) {
  return 220 - age;
}

var bpm = arrayCalc(ages, calculateMaxBpm);
console.log("Here are your athletes' maximum working bpm.");

console.log(bpm);
// vo2 max = 15 x (hrmax/hrrest)
function calculateVmax(bpm) {
  return 15 * (bpm / 80);
}

var vmax = arrayCalc(bpm, calculateVmax);
console.log("Here are your athletes' VO2 maxes.");
console.log(vmax);
// Higher Order Functions - returning a function

function interviewQuestions(job) {
  if (job === "designer") {
    return function(name) {
      console.log("Hey " + name + " what are the principles of UX Design?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + " How do you reach these keedz???");
    };
  } else {
    return function(name) {
      console.log("You ain't got no job " + name + "!!!");
    };
  }
}

var designerQuestion = interviewQuestions("designer");

var teacherQuestion = interviewQuestions("teacher");

var myQuestion = interviewQuestions("");
teacherQuestion("Margaret");
designerQuestion("Krystal");
myQuestion("Tommy");

interviewQuestions(" ")("Tommy");

// IIFE - immediately invoked function expressions

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

// write an annonymous function inside of parenthesis
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})(); // add second set of parenthesis to invoke/call it

(function(goodluck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5); // pass in arguments here

// IIFE can only be called once since its not assigned to a variable
// we use the function to create a scope hidden from the outside where we can have data privacy
// this is not for reusable code only a one time private data function call

// CLOSURES

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGerman = retirement(67);
var retirementFrance = retirement(55);
retirementUS(1990);

retirement(66)(1990);

/* closures are pretty cool, not only can you return a function
since these are higher order, you can actually assign the outerfunction to a variable,
call it with some input, and then call that variable with input for its return function.
the variable will still have access so everything in the outside scope from the initial creation.
the inner scope always has a reference to any outer function.
*/
/*
    FREESTYLE
var ages = [1, 2, 3];
function buildFunctions(ages) {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(ages[i]);
  }

  return function(isCollege) {
    var ageCheck = isCollege;
    if (ageCheck >= 18) {
      console.log("Yaaain college dude?");
    } else {
      console.log("Oh ohhhh yababy??");
    }
  };
}

function buildFunctions() {
  var arr = [];
  // create and add 3 functions to the array
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions();

// invoke the 3 functions
fs[0]();
fs[1]();
fs[2]();

// these all return 3, why not 0, 1, 2?
// the inside of the loop isn't actually running, nothing calls
// the annonymous function that prints i
// when the return runs - the for loop has finished which means i is 3 and arr holds 3 annon functions

function buildFunctions2() {
  var arr = [];

  for (i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

//fs2[0]();
//fs2[1]();
//fs2[2]();

function interviewQuestions(job) {
  if (job === "designer") {
    return function(name) {
      console.log("Hey " + name + " what are the principles of UX Design?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + " How do you reach these keedz???");
    };
  } else {
    return function(name) {
      console.log("You ain't got no job " + name + "!!!");
    };
  }
}

function interviewPrep(jobTitle) {
  role = jobTitle;
  return function(name) {
    role === "designer"
      ? console.log(name + " what are the principles of UX design?")
      : null;
    role === "teacher"
      ? console.log(name + " how to you reach these kids?")
      : null;
    role !== "designer" && job !== "teacher"
      ? console.log("You ain't got no job " + name + "!!!")
      : null;
  };
}

var designJob = interviewPrep("designer");

designJob("james");*/

// Bind, Call, and Apply

var blair = {
  name: "Blair",
  age: 31,
  job: "programmer",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " goobs and goobers! I'm " +
          this.name +
          " and my age is " +
          this.age +
          "." +
          " I work as a " +
          this.job +
          "..."
      );
    } else if (style === "friendly") {
      console.log(
        "Crucial " +
          timeOfDay +
          " my glib globs! I'm " +
          this.name +
          " and I'm " +
          this.age +
          "." +
          " My hustle is as a " +
          this.job +
          " though.."
      );
    }
  }
};

blair.presentation("formal", "morning");
blair.presentation("friendly", "afternoon");

var brianna = {
  name: "Brianna",
  age: "30",
  job: "tech recruiter"
};

// how can we give obj brianna the presentation method from obj blair?
// you guessed it buddy, the call method

// CALL method (this, argument)lets an object replace itself with another object in its 'this' context
// this is called method borrowing
blair.presentation.call(brianna, "formal", "evening");

// APPLY method is same as call but it accepts the arguments as an array (this, array[])
// so its used to borrow methods that accept an array as input

// of course this won't work since blair.presentation doesn't accept arrays -> blair.presentation.apply(brianna, ['formal', 'evening']);

// BIND method is very similar to call as well. It allows us to set the this variable
// the difference is that it doesn't call the function but instead, it makes a copy and stores it.

var blairFriendly = blair.presentation.bind(blair, "friendly");

blairFriendly("morning");
blairFriendly("night");

var prestonFormal = blair.presentation.bind(preston, "formal");
