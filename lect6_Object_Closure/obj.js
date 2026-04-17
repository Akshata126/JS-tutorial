let student={
roll_no:"1",
fname:"Akshata",
lname:'Sanas',
Class:2,
greet:function(){
    console.log("Hello All.....");
    
}
}


console.log(student)


function showData(obj){
    return{
        Fname:obj.fname,
        Lname:obj.lname
    }
}

showData(student)


function Scaller(prop){
    this.prop=prop
}

let obj=new Scaller("ABC")
console.log("New Object----",obj);



// Object Descriptors
// In the Object.defineProperty() static method, a new property is defined directly on an object, or an existing property is modified, and the object is returned.
// An object's property descriptor consists of the following attributes:
// value: This is the value associated with the property
// writable: It indicates whether the property can be changed. If the property can be manipulated, it returns true
// enumerable: Returns true if the property is visible during enumeration of the properties of the corresponding object.
// Configurable: Indicates whether the property descriptor can be modified or removed.

let obj1={}



Object.defineProperty(obj1,"aaa",{
    value:'abc',
    writable:false,
    enumerable:false,
    Configurable:false})


    console.log("Object 1-----",obj1);
    

    // Preventing : Reassignment, Create, update & delete

    let studentInfo={
        no:'1',
        name:'ABC',
        address:{
            city:"Satara",
            State:"Maharastra",
            Language:"Marathi"
        }
    }

    //reassign
    // studentInfo=10;
    // console.log("Student data----",studentInfo);
    

    //create new prop
    studentInfo.age="17"
    console.log("New prop added---",studentInfo);
    

    //delete property of object
    delete studentInfo.age    
    console.log("After deleting prop---",studentInfo);


    //update object value

    studentInfo.name="Akshata"
    console.log("New name is--",studentInfo.name);

    //Prevention of an object----To prevent an object value we should use const keyword instead of let 
    //but this is also some drawback so we can use new method for first level of object prevent..i.e.
    //Object.preventExtensions()
    // By using this we can only prevent from new prop but we can add or update prop 

    let newStude=Object.preventExtensions(studentInfo)
    studentInfo.class="2"
    console.log("After prevention---",studentInfo);
    
    
//To prevent all levels thien we should add Object.preventExtension in all level or we can use Object.seal()