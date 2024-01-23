// Prime number: A number is whole number greater than. A number which is divided by one and itself

let num = 7;
var isPrime = true;

for (let i = 2; i< num ;  i++)
{
    if(num % i == 0)
    {
        isPrime = false;
    }
}

if(isPrime == true)
{
    console.log("Prime number")
}
else
{
    console.log("Not a prime number");
}