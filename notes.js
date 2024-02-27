myName = Hansi //sets myName to Hansi
myName == Hansi //checks to see if myName is Hansi

var myArray = [true, 21, fish] // can pull specific values out of this array [0,1,2] zero index value
myArray[0] // will return "true"
myArray[1] // will return "21"
myArray.length // will return 3; total number of items in array
myArray[1]=19 // change second value to 19
myArray[3]=19 // adds a fourth value to array to become myArray = [true, 19, fish, 19]

var person = {
    name: "Brendan",
    age: 41,
    gender: "M"
} // person is now defined with these three values
person.age //will return 41, the age value of person

function calculator(num1, num2){
    var sum = num1 + num2;
    console.log(sum)
} // function is to find the sum of the two numbers once plugged into calculator function
calculator(1,2); // will return 3; use parens to execute a function


for (i = 1; i < 10; i++) { // add 1 to a number until i is above 10
    var output = i+2; // the output will be whatever var is, plus 2
    console.log(output);
} // for loop = does over and over again until some condiiton is met

function blackjack() {
    if (score == 21) {console.log("blackjack!");
    } else {
        console.log("you lose");
    }
}
