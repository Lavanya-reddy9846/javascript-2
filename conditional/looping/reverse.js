let r=0;
let num=149;
let d;
while(num!=0){
    d=num%10;
    r=(r*10)+d;
    num= Math.floor(num/10);
}
console.log("the reverse of a number is %d",+r);