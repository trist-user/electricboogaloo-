// TODO: Define constants for the form and the result display area
const formStuff = document.getElementById("form");
const userInput = document.getElementById("userIn");
const stufHappen = document.getElementById("result");
// TODO: Add the first line of the event listener to handle form submission
formStuff.addEventListener ("submit", function(){
    event.preventDefault();
    let x = userInput.value
    userInput.value= x
    y = Number(userInput.value)
    let output;
    if (y % 3 == 0 && y % 5 == 0){
        output = "FizzBuzz"
    }else if(y % 3 == 0){
        output = "Fizz"
    }else if(y % 5 == 0){
        output = "Buzz"
    }else if (y + 2 == Number(y) + 2 ){
        output = y
    }else {
        output = "how dare you try to break MY code, not kewl man"
}
result.textContent = output;
})
    // Prevent the form from refreshing the page

// TODO: Get the number from the form input

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page
