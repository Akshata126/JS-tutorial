let obj={
    fname:"Akshata",
    lname:'Chavan',
    Age:37,
    address:{
        city:'Satara',
        State:'maharastra',
        PinCode:410206
    },
    likecolors:['blue','white','red']

    
}


//Shallow Copy = It is used to copy one object into another but only firstlevel,because it share same refference for nested thing.
//to copy all data we can use spread operation i.e. [...]
//Spread operator- it spread all field from object,array 
//rest operator--- collect multiple filed and create array or object
// let newObj={...obj}
// console.log(newObj)
// newObj.fname='Amit'
// newObj.city='Mumbai'
// console.log(newObj)

//Deep Copy = To overcome shallow copy disadvantage we use Deep Copy.It is used to copy whole object into new object without affecting original object.
//For this we use 
//1.JSON.Stringify(JSON.Parse)
//2.Write Prototype
//3.Use StructuredClone() method


let newObj=JSON.parse(JSON.stringify(obj))
newObj.address.city="Kolkatta",
newObj.fname="Aarya"
console.log("Old OBJ---",obj)
console.log("New OBJ----",newObj);
let newObjStruct=structuredClone(obj);
newObjStruct.lname="Sanas";
newObjStruct.likecolors[0]="Pink"
console.log("Using StructuredClone method--",newObjStruct);
