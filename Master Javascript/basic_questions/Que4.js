function getCube(a){
    return ` ${6 * (a * a ) }  ${a * a * a }  `; // 600  1000
}

let ans = getCube(10);
let ans1 = getCube(9);
console.log(ans);
console.log(ans1);