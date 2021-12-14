const ps = require("prompt-sync");
const prompt = ps();
const number=prompt("enter values");
if(number%2==0){
    console.log("even");
}
else{
    console.log("odd");
}