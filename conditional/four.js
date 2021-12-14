const ps= require("prompt-sync");
const prompt=ps();
const i=prompt("enter values: ");
if(i>=100&&i<=999){
    console.log("three digit number")
}
else{
    console.log("not a three digit number")
}