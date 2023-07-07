//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let word = 0; word < dog_string.length; word++){
        if(dog_string.includes(dog_names[word])){
            console.log("Matched " + dog_names)
        }
    else {
        console.log('No matches')
    }
}}

//Call method here with parameters
console.log(findWords())



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */



function replaceEvens(arr){
    //code goes here
    let string = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
    for(let i = 0; i < string.length; i ++){
        if(i % 2 == 0){
            string.splice(i, 1, 'even index')
        }
    }
    return string
}
console.log(replaceEvens())

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//codewars
// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
//8 kyu Convert a String to a Number!

const stringToNumber = function(str){
    // put your code here
    return parseFloat(str)
  }


//codewars
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(arr) {
    return (arr.reduce(
        (accumulator, currentValue) => 
        accumulator + currentValue, 0) % 2 === 0) ? "even" : "odd";
  }
  