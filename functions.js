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
Running through a simple loop is generally cheaper than calling a function multiple times..

