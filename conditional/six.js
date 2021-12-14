const ps = require("prompt-sync");
const prompt=ps();
const a=prompt("enter a: ");
const b=prompt("enter b: ");
if(a>b){
    console.log("a is greatest number");
}
else{
    console.log("b is greatest number");
}