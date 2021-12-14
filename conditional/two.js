const ps = require("prompt-sync");
const prompt = ps();
const number=prompt("enter values");
if(number%3==0){
    console.log("multiple of 3");
}
else{
    console.log("not");
}