//PROGRAM STRUCTURE - Chapter 2

//1 - EXPRESSIONS AND STATEMENTS
//A fragment of code that produces a value is called an EXPRESSION.
//Every value that is written literally is an EXPRESSION
//The simplest type of statement is an expression with a semicolon after it.
//for example

//1;
//!false;

//These are useless programs as they display nothing.

//The above expressions does not hold any value. To hold values, JavaScript provides a thing called a BINDING or VARIABLE.
//Here is an example

//let caught = 5 * 5;

//After a binding has been defined, its name can be used as an expression.
//Here is an example

//let ten = 10;
//console.log(ten * ten)

/*Note that when a binding points at at value, That does not mean it is tied to that value forever. The = operator can be used at
any time on existing bindings to disconnect them fromm their current value and have them point to a new one.
*/

//Here is an example:
//let mood = "light"
//console.log(mood);

//let mood = "dark"
//console.log(mood);

//Let's consider an example of a program to help remember the number of dollars that Luigi still owes you.

//let luigisDebt = 140;
//luigisDebt = luigisDebt - 35;
//console.log(luigisDebt);

//A single LET statement may define multiple bindings

//let one = 1, two = 2;
//console.log(one + two);

//We can also use the words VAR and CONST to create bindings.
//var name = "Ayda";
//const greeting = "Hello ";
//console.log(greeting + name);

//the VAR stands for VARIABLE while the CONST stands CONSTANT.

// - 3 BINDING NAMES
//Binding names can be anyword. But the name must noth start with a digit
//Words like LET and CONST are called KEYWORDS
/* break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
*/

// - 4 THE ENVIRONMENT
//The collection of bindings and their values that exist at a givem time is called the ENVIROMENT

// - 5 FUNCTIONS
// A lot of the values provided in the default environment have the type FUNCTION
// A FUNCTION is a piece of program wrapped in a value
// for example: In a browser environment, the binding prompt holds a function that shows a little dialog box asking for user input.
//prompt("Enter passcode");

// Executing a function is called INVOKING, CALLING, or APPLYING it.

//Values given to functions are called ARGUMENTS
/*The prompt function isn't used much in modern web programming, mostly because you have no control over the way
the resulting dialog looks, but it can be helpful in toy programs and experiments
*/

// - 6 The CONSOLE.LOG FUNCTION
//console.log function  is provided by many web browsers and node.js, it writes out arguments to some text output device.
/* Although binding names cannot contain period characters, console.log does have one.
This is because console.log isn't a simple binding. It is actually an expression that retrieves the log property from the value held by the CONSOLE binding.
*/

// - 7 RETURN VALUES
// Showing a dialog box or writing text to the screen is a side effect.
//A lot of functions are useful because of the side effect they produce.
//Function may also produce values, in which case they don't need to have a side effect to be useful.
// The function Math.max takes any amount of numbers and returns the greatest
//Here:
//console.log(Math.max(2, 4));

//When A function produce a value, it is said to return that value.

// - 8 CONTROL FLOW
// When your program contains more than one statement, the statements are executed as if they  are a story, from top to bottom.
//Here is a sample program

//let theNumber = Number(prompt("Pick a number"));
//console.log("Your number is the square root of " + theNumber * theNumber);

/*
// Prompt the user to enter a number
let userInput = prompt("Please enter a number:");

// Convert the user input to a number
let userNumber = parseFloat(userInput);

// Check if the input is a valid number
if (!isNaN(userNumber)) {
    // Calculate the square of the input number
    let square = userNumber * userNumber;

    // Display the result to the user
    console.log("The square of your number is: " + square);
} else {
    // Inform the user if the input is not a valid number
    console.log("Invalid input. Please enter a valid number.");
}
*/

//the prompt function above will only work on a browser not on Node.js
//But this works


/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a number: ', (userInput) => {
  // Convert the user input to a number
  let userNumber = parseFloat(userInput);

  // Check if the input is a valid number
  if (!isNaN(userNumber)) {
      // Calculate the square of the input number
      let square = userNumber * userNumber;

      // Display the result to the user
      console.log("The square of your number is: " + square);
  } else {
      // Inform the user if the input is not a valid number
      console.log("Invalid input. Please enter a valid number.");
  }

  rl.close();
});
*/


// 9 - Conditional Execution
// Conditinal execution is created with the IF keyword in JavaScript.
//In simple case, we want some code to be executed if, and only if, a certain condition holds.
//We might for example show the square of the input only if the input is actually a number.

/*
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) { 
    console.log("Your number is the square root of " + theNumber * theNumber);
}
*/

//to add a response whem a number is not inputted:
/*
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) { 
    console.log("Your number is the square root of " + theNumber * theNumber);
}
else {
    console.log("Hey. Why didn't you give me a number?")
}
*/
// 10 - while and do Lopps
//Consider a program that outputs all even numbers from 0 to 12
//Here is a code to achieve that

/*
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
*/

//A statement starting with the keyword WHILE creates a loop. the word WHILE is followed by an expression in parenthese and then a statement, much like IF.

//Now lets create a program that calculates the value of 2 to the power of 10

/*
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
*/

//The DO loop is a control structure similar to a WHILE loop. It differs only because a DO loop always executes its body
//at least once, and it starts testing whether it should stop only after that first execution.

/*
let yourName;
do { 
    yourName = prompt("Who are you?");
    while (!yourName);
}
console.log(yourName);
*/

// 11 - INDENTING CODE
// The role of indenting our code in javascript is to ensure that the structure of the code stand out.
//With proper indentation, the visua shape of a program corresponds to the shape pf the blocks inside it.

// 12 - FOR LOOPS
/* Many loops follow the pattern shown in the WHILE examples. First a "counter" binding is created to track the progress of the loop.
Then comes a WHILE loop, usually a test expression that checks whether the counter has reached its end value.
At the end of the loop body, the counter is updated to track progress.
*/

/*
for (let number = 0; number <= 12; number + 2) {
    console.log(number);
}
*/

//the code below computes 2^10 using FOR instead of WHILE
/*
let result = 1;
for (let counter = 0; counter < 10; counter = counter ++) {
    result = result * 2;
}
console.log(result);
*/

//OR by using BIGINT, as the previous code is slow and requires more compute power.
/*
let result = BigInt(2) ** BigInt(100);
console.log(result.toString());
*/


// 13 - BREAKING OUT OF A LOOP
// There is a statement called break that has the effect of immediately jumping out of the enclosing loop
//Below is a program that illustrtes the break statement. It finds the first number that is both greater than or equal to 20 and divisible by 7.

/*
for (let current = 20; ; current = current ++) { 
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
*/


/*
for (let current = 20; ; current++) { // Or you can use `++current`
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
*/


// 14 - UPDATING BINDINGS SUCCINCTLY
//When looping a program needs to "update" a binding to hold a value based on that binding's previous value.
//Here is an example;
/*
 for (let number = 0; number <= 100; number += 5) {
    console.log(number);
 }
*/

// 15 - DISPATCHING ON A VALUE WITH SWITCH
// There is a construct called SWITCH that is intended to express such a "dis-patch" in a more direct way.
//The syntax JavaScript uses for this SWITCH and CASE
//Here is an example
/*
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.")
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.")
        break;
        default:
            console.log("Unknown weather type!");
            break;
}
*/

// 15 - CAPITALIZATION
//Binding names may not contain spaces. Yet it is often helpful to use multiple words to clearly describe what the
//binding repesents. These are pretty much your choices for writing a binding name with several words in it.
//This is the default style for JavaScript programmers fuzzyLittleTurtle

// 16 - COMMENTS
//Often, raw code does not convey all the information you want a program to convey to human readers, or it conveys it in such a cryptic way that
//people might not understand it. At other times, you might just want to include some related thoughts as part of your program. This is what COMMENTS are for.
//A comment is a piece of text that is part of a program but is completely ignored by the computer.

/*
let accountBalance = calculateBalance(account);
accountBalance.adjust();
let report = new Report();
addToReport(accountBalance, report);
*/

//EXERCISE ONE : Write a loop that makes seven calls to console.log to output the following triangle:
/*
#
##
###
####
#####
######
#######
*/

//Solution:

/*
let hashSymbol = ("");
let counter = 0;
while (counter <= 6) {
    hashSymbol = "#" + hashSymbol;
    counter = counter + 1;
    console.log(hashSymbol);
}
*/

/*
let hashSymbol = "#";
let counter = 0;
while (counter <= 7){
    hashSymbol = hashSymbol + "#";
    counter = counter + 1;
    console.log(hashSymbol);
}
*/

//this confirms the length of the hashSymbol which ought to return 7
//console.log(hashSymbol.length);

/*EXERCISE TWO: Write a program that uses CONSOLE.LOG to print all the numbers from
1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
and for the numbers divisible by 5 (and not 3), print "Buzz" instead.  When you have that working,
modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).
//this is actually an interview question that has been claimed to weed out a significant percentage of programmer
candidates. So if you solved it, your labour market value just went up.)
*/

//Solution :


/*
function FizzBuzz() {
    for (let n = 1; n < 100; n++) {
        if (n % 15 === 0) {
            console.log("FizzBuzz");
        } else if (n % 3 === 0) {
            console.log("Fizz");
        } else if (n % 5 === 0) {
            console.log("Buzz");
        } 
        else {
            console.log(n);
        }
    }
}

FizzBuzz();
*/



/*EXERCISE THREE: Write a program that creates a string that represents an 8 * 8 grid, using new-line
characters to separate lines. At each position of the grid there is either a space or a # character. The character
should form a chessboard. Passing this string to CONSOLE.LOG should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have the program generate this pattern, define a binding SIZE = 8 and change the program so that it works for any
SIZE, outputting a grid of the given width and height. */

//SOLUTION : 
/*Pseudo: 
function generateChessboard(size) {
The first line defines a function named " generateChessboard" which takes one parameter "size",
representing the dimensions of the chessboard (both width and height).

let board = " ";
This initializes an empty string called "board", which will store the pattern of the chessboard as it is generated

for (let row = 0; row < size; row++) {
This starts a loop that iterates over each row of the chessboard. It initializes a variable "row" to 0 and continues
looping until "row" is less than "size".

for (let col = 0; col < size; col++) {
Within each row, this line starts another loop that iterates over each columnof the chessboard. It initializes a variable "col"
to 0 and continues looping until "col" is less than "size".

if ((row + col) % 2 === 0) {
This condition checks whether the sum of the current "row" and "col" indices is even. If it is, it
means the position on the chessboard should be filled with "#".

board += "#";
If the condition is met, it adds a "#" charactre to the "board" string.

} else {
If the conditions "(row + col) % 2 === 0" is not met, it means the position on the chessboard should be filled with a space.

board += ' ';
In this case, it adds a space character to the "board" string

board += "\n";
After each row is filled with '#' and spaces, it adds a newline character to move to the next row in the "board" string.
*/
/*
function generateChessboard(size) {
    let board = '';
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            // Alternate between '#' and ' ' based on row and column indices
            if ((row + col) % 2 === 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
        // Add newline character after each row
        board += '\n';
    }
    console.log(board);
}

// Example usage: generate a 8x8 chessboard
generateChessboard(50);
*/

