let deepCopy=function(obj){
    let newArr=Array.isArray(obj);
    let copy=newArr?[]:{}
   for(let prop in obj){
    if(Array.isArray(obj[prop])){
        copy[prop]=[...obj[prop]]
        for (let i=0;i<copy[prop].length;i++){
            if(copy[prop][i]==="object"){
                copy[prop][i]=deepCopy(obj[prop][i])
            }

        }
    }else if(typeof obj[prop]==="object"){
             copy[prop]=deepCopy(obj[prop])
    }else{
copy[prop]=obj[prop]
    }
}

return copy;
}


let persone={
    fname:"Akshata",
    lname:"Chavan",
    Age:35,
    address:{
        city:"Satara",
        State:"Maharashtra"
    }

}
 
console.log("Before Deep copy---",persone);
let newPersone=deepCopy(persone)
newPersone.fname="Amit",
newPersone.lname="Sanas"
newPersone.address.city="Mumbai"
console.log("After Deep copy----",newPersone);


