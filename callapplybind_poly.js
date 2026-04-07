let Company={
    Cname:"XYZ",
    founderName:"Akshata",
    address:'Delhi',
    empNo:'30000',
    getOwnerDetails:function(...founderName){
        console.log("Copmany name :",this.Cname);
        console.log("founderName",founderName);
        
        // console.log("Founder Name :",this.founderName);
        // console.log("Year :",year);
        
        
        
    }
}

var employee={
    Cname:"pqr",
  empNo:'30000'
}


//same code is used for call and apply prototype


Function.prototype.myCall=function(temp,...val){
    console.log("temp val",temp);
    
    temp.tempMethod=this
    temp.tempMethod(...val)
    delete temp.tempMethod
}


// Company.getOwnerDetails.myCall(employee)


Function.prototype.myApply=function(obj,...args){
    if(!Array.isArray(...args)){
        throw new Error("This is not an array")
    }
    obj.tempval=this
    obj.tempval(...args)
    delete obj.tempval
}


Company.getOwnerDetails.myApply(employee,['aaaa','xyz','sss'])



//polyphills for bind


Function.prototype.mybind=function(obj,...args1){
    obj.fn=this
    return function(...args2){
        obj.fn(...args1,...args2)
    }
}


let myResult=Company.getOwnerDetails.mybind(employee)
myResult('oooo')