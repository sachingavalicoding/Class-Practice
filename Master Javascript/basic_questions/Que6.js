
function equlCandies(candies , cos){
    if(candies % cos == 0 ){
        return " Yes ";
    }
    else{
        return " No ";
    }
}

let ans = equlCandies(35 , 5);
console.log(ans);