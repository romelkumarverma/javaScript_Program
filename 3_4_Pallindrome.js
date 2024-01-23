// Pallindrome: A number is same from left or Right . Ex 121, 323, jahaj, radar,level


// Program to find number is pallindrome or not

let data = 124;

function numPallin() {
    let numRev = data.toString().split('').reverse().join('');
    let rev = data.toString();

    if(rev == numRev)
    {
        console.log(`Number is pallindrome: ${data}`);
    }
    else
    {
        console.log(`Number is not pallindrome: ${data}`);
    }
}
numPallin();