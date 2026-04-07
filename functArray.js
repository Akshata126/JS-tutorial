// function---it is the block of code.it return logic..It is used for reusabily of code 

function getData(){
    console.log("Hello");
    

}

let getVal= function(){
    console.log("Hello All");
    
}

getData()
getVal()

let student=['Akshata','Aarya','Amit','Daksha']
for(let data in student){
    console.log(student[data]);
    
}

let newStud=[...student]
newStud.push("ABC")
for(let data in newStud){
    console.log(newStud[data]);
    
}

function calculator(a,b,name){
    let ans=0;
    console.log("Name is---",name);
    
    if(name==='sum'){
      ans=a+b;
    }else if(name==='sub'){
        ans=a-b;
    }else if(name==='mult'){
        ans= a*b;
    }else if(name==='diff'){
        ans= a/b;
    }
    console.log("answer is ",ans);
    
   

}


calculator(10,3,'sum');
calculator(20,23,'mult');
calculator(25,5,'sub')


