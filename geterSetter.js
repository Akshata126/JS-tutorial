class Student{
    constructor(name,age,fname,lname){
        this.name=name;
        this.age=age
        this.fname=fname;
        this.lname=lname
    }

    get getName(){
        return this.name;
    }

    set setName(nm){
        this.name=nm;
        return this.name
        
    }

    get getFullNme(){
        return `My fullname is ${this.fname} ${this.lname}`
    }
      
    
}

const stud=new Student('Akshata',35,'ss','dd')
console.log("Student information---",stud);
