const ps= require("prompt-sync");
const prompt=ps();
const i=prompt("enter values: ");
if(i>0){
    console.log("positive");
}
else{
    console.log("negative");
}