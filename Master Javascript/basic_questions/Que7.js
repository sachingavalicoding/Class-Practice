const PI = 3.14;
function milkman(radius , height ){
   return (PI * (radius * radius) * height) / 1000 ;
}

let ans = milkman(5 , 24);
console.log(ans * 40);