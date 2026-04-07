let Student={
    roll_no:1,
    fname:"Abc",
    lname:"Sanas",
    getFullName:function(){

        let fullname=`${this.fname} ${this.lname} `
        return fullname;
    }
}

let Class=function(...address){
    console.log(this.getFullName() +"and address is "+ address)
}

let result=Class.bind(Student)
// console.log("My final result is---",result);
   result('Punee')


Class.apply(Student,['Mumbai','Goa'])