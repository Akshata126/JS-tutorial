//Higher order function- It get function as parameter and return function 


function calculate(a,b,fn){
 fn(a,b)
}

let sum=function(a,b){
    console.log(a+b);
     
}

let mult=function(a,b){
    console.log(a*b)
}

// calculate(10,20,mult);


//HOF examples-map,filter,reduce
function display(){
  
    let arr=[10,20,30,40,50,60];
// for(let i=0;i<arr.length;i++){
    let result=arr.map(num=>num*5)
// }
console.log("result",result);

return result
}

display()


function showResult(){
    let arr=[2,3,5,6,7,8,9,10]
    let res=arr.map(num=>num*2).filter(num=>num%4==0)
    console.log("res----",res);
    
    return res;
}

showResult()


function reduceCall(){
    let arr1=[2,3,4,5,6,7,8,8,9]
    let sum=arr1.reduce(function(acc,curr){
        return acc + curr;
    },0)
console.log("Sum is----",sum);

    return sum
}

reduceCall()