//FUNCTIONS ARE THE BREAD AND BUTTER OF JAVASCRIPT PROGRAMMING
/*The concept of wrapping a piece of program in a value has many uses. It gives us a wat to structure larger programs,
to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other */

// 1 - DEFINING A FUNCTION

//A function definition is a regular binding where the value of the binding is a function.

//for example

/*
const square = function(x) {
    return x * x;
};
console.log(square(12));
*/
//the code above prints the square of 12

// A function is created with an expression that starts with the keyword "function".
// Functions have a set of "parameters" and "a body", which contains the statements that are
// to be executed when the function is called. The function body of a function created must always
// be in braces. Just like the example below\.  

/*
const makeNoise = function() {
    console.log("Pling!");
};
makeNoise();
*/
//this prints "Pling!"

/*
const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));
*/

// 2 - BINDINGS AND SCOPES
// Each binding has a scope, which is the part of the program in which the binding is visible.
// For bindings defined outside of any function or block, the scope is the whole program--you can refer to such bindings
// wherever you want. These are called GLOBAL.

//But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known
//as LOCAL bindings.
// Bindings declared with "let" and "const" are in fact local to the "block" that they are declared in.

/*
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
// y is not visible here
console.log(x + z);
*/

/*Each scope cqn "look out" into the scope around it, so x is visible inside the block in the example.
The exception is when multiple bindings have the ssame name - in that case, code can see only the innermost one. For
example, when the code inside the HALVE function refers to n, it is seeing its own n, not the global n.
*/

/*
const halve = function(n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));
---50
console.log(n);
---10
*/

// 3 - NESTED SCOPE
/* JavaScript distinguishes not just GLOBAL and LOCAL bindings. Blocks and functions cam be created inside
other blocks and functions, producing multiple degrees of locality
For EXAMPLE, this function --- which outputs the ingredients needed to make a batch of hummus --- has another function inside it:*/

/* For clarity on nested functions let's ask chatgpt
Alright, let's talk about nested scope!

Imagine you have a set of building blocks, and inside one of those blocks, you find another set of building blocks. That's kind of like nested scope in programming.

In simpler terms, nested scope is when you have one thing inside another thing, 
like a box inside a bigger box. Each box has its own space and things inside 
it that can only be seen or used from within that box.

Now, let's break down the code you provided:

1. **Defining the `hummus` function**: The `hummus` function is like a big box. 
Inside this function, there's another smaller box (the `ingredient` function) and some instructions to make hummus.

2. **Defining the `ingredient` function inside `hummus`**: Inside the `hummus` function, there's a smaller box called `ingredient`. 
This `ingredient` box has its own instructions to calculate ingredient amounts and print them out.

3. **Using the `ingredient` function**: Inside the `hummus` function, we use the `ingredient` function multiple 
times to calculate and print out ingredient amounts for making hummus.

4. **Accessing variables**: The `ingredient` function can access variables from its containing scope (the `hummus` function). 
For example, it can access the `factor` variable defined in the `hummus` function and use it to calculate ingredient amounts.

So, in summary, nested scope in this code means that the `ingredient` function is defined inside the `hummus` function, 
and it can access variables from the `hummus` function's scope. It's like having smaller boxes inside bigger boxes, each with its own set of instructions and things inside it.
/*
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
            console.log(`${ingredientAmount} ${unit} ${name}`);
        };
        ingredient(1, "can", "chickpeas");
        ingredient(0.25, "cup", "tahini");
        ingredient(0.25, "cup", "lemon juice");
        ingredient(1, "clove", "garlic");
        ingredient(2, "tablespoon", "olive oil");
        ingredient(0.5, "teaspoon", "cumin");
};
console.log(hummus(3));
*/
// But what if I want the console to request for the values from me?
/*
const hummus = function(factor) {
    const ingredient = function() {
        // Ask the user for input
        let amount = parseFloat(prompt("Enter the amount:"));
        let unit = prompt("Enter the unit:");
        let name = prompt("Enter the name:");

        // Calculate the ingredient amount based on the factor
        let ingredientAmount = amount * factor;

        // Adjust the unit if the amount is greater than 1
        if (ingredientAmount > 1) {
            unit += "s";
        }

        // Print the ingredient information
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    // Call the ingredient function for each ingredient
    ingredient();
    ingredient();
    ingredient();
    ingredient();
    ingredient();
    ingredient();
};

// Call the hummus function with a factor of 3
hummus(3);
*/

// 4 - FUNCTIONS AS VALUES

/* A function binding usually just acts as a nmae for a specific piece of the program. Such a binding is defined
once and never changed. This makes it easy to confuse the function and its name.
But the two are differnt. A function value can do all the things that other values can do---you  can use it in arbitrary expressions,
not just call it. It is possible to store a function value in a new binding, pass it as am argument to a function, and so on.
Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, like so:
*/

/*
let launchMissiles = function() {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function() {/* do nothing */


/*
This code snippet defines a function called `launchMissiles`. Let's break down what each part of the code does:

1. `let launchMissiles = function() { ... };`:
   This line declares a variable named `launchMissiles` and assigns it an anonymous function expression. The function is defined to launch missiles by calling a `launch` method on a `missileSystem` object, passing "now" as an argument.

2. `if (safeMode) { ... }`:
   This line introduces a conditional statement that checks the value of a variable named `safeMode`. If `safeMode` evaluates to a truthy value (such as `true`), the code inside the curly braces `{ ... }` executes.

3. `launchMissiles = function() ...
Inside the conditional block, a new function expression is assigned to the `launchMissiles` variable. However, this function is defined as an empty function that does nothing, indicated by the comment "do nothing"

In summary, the code defines a function `launchMissiles` initially intended to launch missiles using a `missileSystem` object. 
However, if the `safeMode` variable is truthy, the function is redefined to do nothing. This pattern allows for dynamically 
changing the behavior of the `launchMissiles` function based on the value of `safeMode`, providing a mechanism to control 
whether missiles are launched or not based on a safety condition.
*/

// 5 - Declaration Notation

//There is a slightly shorter way to create a function binding. When the function keyword is used at the start 
//of a statement, it works differently.
/*
function square(x) {
    return x * x;
}
*/
/*
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}
*/
/*
The code above works, even though the function is defined below thwe code that uses it.
Finction declarations are not part of the regular top-to-buttom flow of control. They are conceptuall moved 
to the top of their scope and can be used by all the code in that scope. This is useful because
it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions
before they are used.
*/

// 6 - Arrow Functions
/* There is a third notation for functions, which looks very different from the others. Instead of the
"function" keyword, it uses an arrow(=>) made up of an equal sign and a greater-than character (not to be confused
with the greater-than-or-equal operator, which is written >=). Here is a sample use.
*/

/*
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

// Call the power function with base and exponent values
const base = 2;
const exponent = 3;
const result = power(base, exponent);

// Print the result to the console
console.log(`The result of ${base} raised to the power of ${exponent} is: ${result}`);
*/

// The arrow comes after the list of parameters and is followed by the function's body.
// It expresses something like "this input (the parameters) produces this result (the body)"
// When there is only one parameter name, you can omit the parentheses around the parameter list. If the
// boddy is a single expression, rather than a block in braces, that expression will be returned from the function.
// So, these two definitiond of square do the same thing:
/*
const square1 = (x) => { return x * x; }; //first one
const square2 = x => x * x; // does the same with this
*/

// When the arrow function has no parameters at all, its parameter list is just an
// empty set of parentheses.
/*
const horn = () => {
    console.log("Toot");
};

console.log(horn);
*/

//But let's give it some parameters
/*
const horn = (sound) => {
    console.log(sound);
};

horn ("Toot");
*/

// We can modify this code to be more functional by giving it a list of random sounds to make.
/*
const horn = (...sounds) => {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    console.log(sounds[randomIndex]);
};

horn("Toot", "Honk", "Beep");
*/

/*
- The `horn` function now uses the rest parameter syntax (`...sounds`) to accept an arbitrary number of sounds as arguments.
- Inside the function body, we generate a random index using `Math.random()` 
multiplied by the length of the `sounds` array. This index will be used to randomly select one of the sounds.
- We then log the randomly selected sound to the console.

Now, when you call the `horn` function with multiple sounds, it will randomly choose one 
of them to play. For example, `horn("Toot", "Honk", "Beep")` could output "Toot", "Honk",
 or "Beep" depending on which sound is randomly selected.

This modification makes the `horn` function more flexible and adds an element of 
randomness to it, which can be useful in certain scenarios, such as creating a more 
dynamic user experience in a game or application.
*/

// Now lets repurpose it into a password generator.
/*
const generatePassword = (length = 8) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};

console.log(generatePassword(30));
*/


// 7 - The Call Stack
// The way control flows through functions is somewhat involved. Let's take a closer look at it. Here is a simple program that makes a few function calls:
/*
function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
*/
/* Here is a quick run through the program,
1. The call to "greet" causes control to jump to the start of that function (line 2). Tthe function calls "console.log",
which takes control, does its job, and then returns control to the line 2.
2. At line 2 it reaches the end of the "greet" function, so it returns to the place that caled it, which is the line 4.
3. The line after that calls "console.log" again. After that returns, the program reaches its end.

Because a function has to jump back to the place that called it when it returns, the computer must remenber the context from which
the call happenedd. In one case, "console.log" has to return to the "greet" function when it is done. In the other case. it returns to the
end of the program.
---The place where the computer stores this context is the "call stack". 
Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the
stack and uses that context to continue execution.
Storing this stack requires space in the computer's memory. When the stack grows too big, the computer will fail with a message like "out of stack space"
or "too much recursion."  The following code illustrates this by asking the computer a really hard question that causes an infinite back-and-forth between
two functions. Rather, it would be infinite, if te computeer had an infinite stack. As it is, we will run out of space, or "blow the stack."
*/
/*
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first.");
*/
// This code runs and then returns "Maximum call stack size exceeded".


// 8 - Optional Arguments
// The following code is allowed and runs without any problem:

// function square(x) { return x * x; }
// console.log(square(4, true, "hedgehog"));

/* Looking at the code, one would realize that we defined "square" with only one parameter. Yet when we call it with
three paramenters, the language doesn't complain. It ignores the extra arguments and computes the square of the first one.
In JavaScript, if you pass too many arguments than required, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value "undefined".
The downside of this is that it is possible - likely, even - that you'll accidentally pass the wrong number of arguments to functions. And no one will tell you about it.
The upside is that this behaviour can be used to allow a function to be called with different numbers of arguments. For example, the following "minus function tries to imitate 
the " - " operator by acting on either one or two arguments:
function minus(a, b) {
    if (b === underfined) return -a;
    else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));
---> -10
---> 5
*/

/*
If you write an " = " operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.
For example, this version of "power" makes its second argument optional. If you don't provide it or pass the value "undefined", it will default to two, and 
the function will behave like "square".
*/

/*
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4));
console.log(power(2, 6));
---> 16
---> 64
*/

// 9 - Closure

/*
The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an
interesting question. What happens to local bindings when the function call that createdd them is no longer active?
The following code shows an example of this. It defines a function, "wrapValue", that creates a local binding.
*/

/*
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

---> 1
---> 2

The code above is allowed and works as you'd hope -- both instances of the binding can still be accessed. This situation is a good demostration of the
fact that local bindings are created anew for every call, and different calls can't trample on one another's local bindings.
This feature -- being able to reference a specific instance of a local binding in an enclosing scope -- is called CLOSURE. A function that references bindings from 
local scopes around it is called a CLOSURE. This behaviour not only frees you from having to worry about lifetimes of bindings but also makes it possible to use function
values in some creative ways.
With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitrary amount.
*/

/*
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
*/

/* The explicit "local" binding from the "wrapValue" example isn't really needed since a parameter is itself a local binding.
Thinking about programs like this takes some practise. A good mental model is to think of function values as containing both the code in their body and the
environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called.
In the example, "multiplier" is called and creates an environment in which its "factor" parameter is bound to 2. The function value it returns, which is stored in "twice",
remembers this environment. So when that is called, it multiplies its argument by 2.
*/

// 10 - Recursion
/* It is okay for a function to call itself, As long as it doesn't do it so often that it overflows the stack.
A function that calls itself is called "RECURSIVE". Recursion allows some functions to be written in a different style. Take, for example, this alternative
implementation of "power" in the example below.
*/

/*
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));

---> 8
*/

/* The example above is rather close to the way mathematicians define exponentiation and arguably describes the concept more clearly than the looping variant.
The function calls itself multiple times with ever smaller exponents to achieve the repeated multiplication.
But this implementation has one problem: in typical Javascript implementations, it's about three times slower than the looping version.
Running through a simple loop is generally cheaper than calling a function multiple times...

Recursion is not always just an inefficient alternative to looping. Some problems really are easier to solve with recursion than with loops. Most often these are problems that
require exploring or processing several "branches", each of which might branch out again into even more branches.

Consider this puzzle:
"By starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, 
tries to find a sequence of such additions and multiplications that produces that number?"
*/

//Here is the solution to the problem
/*
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                    find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(36));
*/

/*
Note that the program above doesn't necessarily find the shortest sequence of operations. It is satisfied when it finds any sequence at all.
Here is how the code works.
The inner function "find" does the actual recursing. It takes two arguments: the current number and a string that records how we reached this number.
If it  finds a solution, it returns a string that shows how to get to the target. If no solution can be found starting from this number, it returns "null".
To do this, the function performs one of three actions. If the current number is the target number, the current history is a way to reach that target, so it is returned. 
If the current number is greater than the target, there's no sense in further exploring this branch because both adding and multiplying will only make the number bigger, so it returns "null".
Finally, if we're still below the target number, the function tries both possible paths that start from the current number by calling itself twice, once for addition and once for multiplication. If the first call
returns something that is not null, it is returned. Otherwise, the second call is returned, regardless of whether it produces a string or "null".
*/

// 11 - Growing Functions

/*
There are two more or less natural ways for functions to be introduced into programs.
The first is that you find yourself writing similar code multiple times. You'd prefer not to do that. Having more code mens more space for mistakes to hide and more material to
read for people trying to understand the program. So you take the repeated functionality, find a good name for it, and put it into a function.
The second way is that you find you need some functionality that you haven't written yet and that sounds like it deserves its own function. You'll start by naming the function, and then you'll write its body.
You might even start writing code that uses the function before you actually define the function itself.
How difficult it is to find a god name for a function is a good indication of how clear a concept it is you're trying t o wrap. Let's go through an example.

We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words "Cows" and "Chickens" after them and "zeros" padded before numbers so that they are always three digits long.

This asks for a function of two arguments-the number of cows and the number of chickens. Let's get coding.

*/

/*
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);        
}
printFarmInventory(7, 11);
*/

/*
Writing ".lenght" after a string expression will give us the length of that string. Thus, the "while" loops keep adding zeros in front of the number strings until they at least three characters long.
Mission accomplished! But just as we are about to send the faarmer the code (along with a hefty invoice), she calls and tells us she's also started keeping pigs, and couldn't we please extend the software to also print pigs?
We sure can. But just as we're in the process of copying and pasting those four lines one more time, we stop and reconsider. There has to be a better way. Here's a first attempt:
*/
/*
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
*/

/*
It works! But that name, "printZeroPaddedWithLabel", is a little awkward. It conflates three things-printing, zero-padding, and adding a label-into a single function.
Instead of lifting out the repeated part of our program wholesale, let's try to pick out a single "concept".
*/

/*
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}
function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
*/


/*
A function with a nice, obvious name like "zeroPad" makes it easier for someone who reads the code to figure out what it does. And such a function is useful in more situations than just this specific program.
For example, you could use it to help print nicely aligned table of numbers.

A useful principle is to not add cleverness unless you are absolutely sure you're going to need it. It can be tempting to write general "frameworks" for every bit of functionality you come across. Resist that urge.
You won't get any real work done-you'll just be writing code that you never use.
*/

// 12 - Functions and Side Effects
/*
Functions can be roughly divided into those that are called for their side effects and those that are called for their return value. (Though it is definitely also possible to both have side effects and return a value.)
The first helper function in the farm example, printZerPaddedWithLabel, is called for its side effect: it prints a line. The second version, zerPad, is called for its return value. It is no coincidence that the second is useful
in more situations than the first. Functions that create values are easier to combine in new ways than functions that directly perform side effects.
A pure function is a specific kind of value-producing function that not only has no side effects but also doesn't rely on side effects from other code-for example, it doesn't read global bindingz whose value might change.
A pure function has the pleasant property that, when called with the same arguments, it always produces that same value (and doesn't do anything else). A call to such a function can be sustituted by its return value without changing the meaning of the code.
When you are not sure that a pure function is working correctly, you can test it by simply calling it and know that if it works in that context, it will work in any context. Nonpure functions tend to require more scaffolding to test.
*/

// 13 - Summary
/*
This chapter taught you how to write your own functions. The "function" keyword, when used as an expression, can create a function "value". When used as a statement, it can be used to declare a binding and give it a function as its value.
Arrow functions are yet another way to create functions.

//Define f to hold a function value
>>>const f = function(a) {
    console.log(a + 2);
};
// Declare g to be a function
>>>function g(a, b) {
    return a * b 3.5;
}
// A less verbose function value
>>>let h = a => a % 3;

*/

//EXERCISES

/*
 one (Minimum) {
    Chapter 2 introduced that standard function Math.min, which returns its smallest argument (see "Return VAlues" on page 27). We can build something like that now. Write a function "min" that takes two arguments and returns their minimum.
}

two (Recursion) {
    We've seen that % (the remainder operator) can be used to test whether a number is even or odd by using "% 2" to see whether it's divisible by two.
    Here's another way to define whether a positive whole number is even or odd:
    - Zero is even
    - One is odd
    - For any other number N, its evenness is the same as N-2
    Define a recursive function "isEven" corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
    Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
}

three (Bean Counting)  {
    You can get the Nth character, or letter, from a string by writing "string" [N]. The returned value will bw a string containing only one character (for example, "b"). The first character has postion 0, which causes the last one to be found at position string.length - 1.
    In other words, a two-character string has length 2, and its characters have positions 0 and 1.
    Write a function "countBs" that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in the string.
    Next, write a function called "countChar" that behaves like "countBs", except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). Rewrite "countBs" to make use of this new function.
}

