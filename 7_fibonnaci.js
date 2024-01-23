// Fibonnaci Series: It is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.   Ex: 0,1,1,2,3,5,8,13....

let a = 0;
let b = 1;
let num=5;
let temp;                   // temporary number

console.log(a);
console.log(b);
for(let i=0; i< num; i++)
{
    temp= a + b;            // 0 + 1
    console.log(temp);
    a=b;
    b=temp;
    
}