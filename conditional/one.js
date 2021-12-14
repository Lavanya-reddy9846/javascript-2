const ps = require ("prompt-sync");
const prompt = ps();
const number= prompt("enter value:  ");
if(number%7==0){
    console.log("divisible");
}
else{
    console.log("not");
}