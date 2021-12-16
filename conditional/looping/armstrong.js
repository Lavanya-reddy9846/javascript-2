let s=0;
const ps = require ("prompt-sync");
const prompt = ps();
const number= prompt("enter value:  ");
let n;
let temp=n;
let d;
while(temp>0){
    d=temp%10;
    s=s+(d*d*d);
    temp=parseInt(temp/10);
}
if(s==n)
console.log("ARMSTRONG");
else
console.log("NOT ARMSTRONG");