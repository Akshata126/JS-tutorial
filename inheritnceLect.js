class Student{
    constructor(roll_no,name,std){
        this.roll_no=roll_no
        this.name=name
        this.std=std
    }

  getStudentInfo(){

        return `Student Information - Roll no-${this.roll_no} Name-${this.name} Standard-${this.std} `

    }
}

class Stud1 extends Student{
    constructor(roll_no,name,std,grade){
    super(roll_no,name,std)
    this.grade=grade
    }

    getStudentInfo(){
        console.log(super.getStudentInfo() + "Grade "+this.grade);
        
    }
}

let result=new Stud1(1,"a","3rd","A")
result.getStudentInfo();


