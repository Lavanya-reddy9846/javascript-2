const ps = require ("prompt-sync")
const prompt = ps();
const a=prompt("enter a: ");
const b=prompt("enter b: ");
const c=prompt("enter c: ");
if((a>b)&&(a>c)){
    console.log("a is greater");
}
if((b>a)&&(b>c)){
    console.log("b is greater");
}
if((c>a)&&(c>b)){
    console.log("c is greater");
}
