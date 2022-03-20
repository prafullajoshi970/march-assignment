// assignment-1 -addition,subtraction, multiplication,division.

function sum(num1,num2){
    let sumOfResult=num1 + num2 

    return sumOfResult
}
let result=sum(4,5);
console.log(result)


function sub(num1,num2){
    let sumOfResult=num1 - num2 
   
    return sumOfResult
}
let result1=sub(4,5);
console.log(result1)

function mul(num1,num2){
    let sumOfResult=num1 * num2 
  
    return sumOfResult
}
let result2=mul(4,5);
console.log(result2)


function div(num1,num2){
    let sumOfResult=num1 / num2 
  
    return sumOfResult
}
let result3=div(4,5);
console.log(result3)

// assignment-2 (a+b)^2

function ab(a,b){
    let aSquareB=(a*a)+(b*b)+2*(a*b)
    return aSquareB
}
let result4=ab(3,4)
console.log(result4)

//assignment-3 fabonacii series

function fibonacii(num){
    let num1=0,num2=1,num3,i
    console.log("fibonacii:")
    console.log(num1)
    for(i=2;i<num;++i)
    {
        num3=num1+num2;
    console.log(num3)
    num1=num2;
    num2=num3;
}
}
   fibonacii(100);