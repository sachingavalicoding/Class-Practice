// Given a two-digit number n, print both the digits of the number.

let digit = 123;
let n = 123;
while(n  > 0 ){
    let rem  = n % 10 ; 
    console.log(rem);
    n = Math.floor(n / 10);
}