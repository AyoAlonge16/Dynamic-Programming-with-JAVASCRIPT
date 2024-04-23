
new_line = "This is the first \nand this is the second line"
console.log(new_line)

adding_special_char = "A newline character is written like \"\\n\"."
console.log(adding_special_char)

//strings
//the plus sign can be used to concatenate
add_strings = "con" + "cat" + "e" + "nate"
console.log(add_strings)
print_in_line = `half of 600 is ${600 / 2}`
console.log(print_in_line)

//These are unary operators
console.log(typeof 4.5)
console.log(typeof "x")

// solving for a negated response
console.log(-(10 - 2))

//let's generate boolean values
//comparison

console.log(3 > 2)
console.log(3 < 2)
//we can compare strings too
console.log('Aardvark' < "Zoroaster")

//Automatic Type Conversion: Sometimes JavaScript goes out of its way to accept almost any program it is given
//When an operator is applied to the wrong type of value, Javascript will quietly convert that value to the type it needs, using a set of rules that often aren't what you want or expect
//this is called TYPE COERCION
//Here are examples
console.log(8 * null)
console.log("5" - 1)
console.log("5" + 1)
console.log("five" * 2)
console.log(false == 0)

//I'm wondering what this will give me
console.log("8" * "null")

//there are some additional operators like === and !==

//Short-Circuiting of Logical Operators
console.log(null || "user")
console.log("Agnes" || "user")

