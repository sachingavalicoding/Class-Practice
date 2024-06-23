let arr = [40.75 , 45.2 , 55.3 , 49.5 , 43.3 , 54.1 , 38.4 ,  63.8 ,  45.2 ,  58.25];
let avg = 0; 

 arr.map((ele) => {
     avg += ele;
})

console.log((avg / 10).toFixed(6));