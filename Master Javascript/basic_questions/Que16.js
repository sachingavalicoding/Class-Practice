// reaverse number 

let num  = 123;
while(num > 0){
  let rem = num % 10;
  console.log(rem);
  num = Math.floor(num  / 10);
}