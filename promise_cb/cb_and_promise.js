const fs=require("fs")


console.log("Before");

let data=fs.promises.readFile("file1.txt","utf-8")
console.log("File 1 data",data);

let data2= fs.promises.readFile("file2.txt","utf-8")
console.log("File 2 data",data2);


data.then(function(val){
    console.log(val);
    
}).catch(function(err){
    console.log("error",err);
    
})


data2.then(function(val){
    console.log(val);
    
}).catch(function(err){
    console.log("error",err);
    
})
console.log("After");




///create new promise

let stud={
    no:'1',
    name:"Akshata",
    City:"Satara"
}

const showData=new Promise(function(resolve,reject){
    let flag=true
    if(flag){
resolve(JSON.stringify(stud))

    }else{
        reject(err)
    }
})
    
showData.then(function(data){
    console.log("Student data",JSON.parse(data));
    
}).catch(function(err){
    console.log(err);
    
})



//Call back hell means nested call back..


fs.readFile('file1.txt',function(err,res){
    if(err){
        console.log(err)
    }
    console.log("File one data---",res.toString());
    fs.readFile('file2.txt',function(err,res){
         if(err){
        console.log(err)
    }
    console.log("File two data---",res.toString());
    fs.readFile('file3.txt',function(err,res){
          if(err){
        console.log(err)
    }
    console.log("File three data---",res.toString());

    })
        
    })
    
})


// By using promise we see 

let file1Data=fs.promises.readFile('file1.txt')

file1Data.then(function(data){
    console.log("Using prom file1 data",data.toString());
    
    let file2Data=fs.promises.readFile('file2.txt')
    return file2Data
}).then(function(data){
      console.log("Using prom file2 data",data.toString());
    
    let file3Data=fs.promises.readFile('file3.txt')
    return file3Data
}).then(function(data){
     console.log("Using prom file3 data",data.toString());
}).catch((err)=>{
    console.log(err);
    
})
