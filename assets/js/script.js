/* Using Logical Operators */

var exp1 = true;
var exp2 = false;

// Using Logical And "&&"": Returns True if both conditions are met
var matchIt = function() {
    if (exp1 && exp2) {
        alert("Both expressions are true!");
    }

// Using Logical Or "||": Compares if whether one value fulfills criteria
var matchIt = function() {
if (exp1 || exp2) {
        alert("One of these expressions is true!");
    }
}

// Using Logical Not "!": Returns criteria contrary to what has been assigned
var matchIt = function() {
if (exp1 && !exp2) {
    alert("Both expressions are true!");
    }
}

matchIt();