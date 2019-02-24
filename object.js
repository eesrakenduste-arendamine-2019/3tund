/*jshint esversion:6*/
class Student{
  constructor(_name, _lastname){
    this.name = _name;
    this.lastname = _lastname;
  }
  fullname(){
    console.log(this.name, this.lastname);
    return this;
  }
  say(){
    console.log("Mina olen tudeng");
    return this;
  }
}

class MasterStudent extends Student{
  smarterMaster(){
    console.log("Magistritudengid on targemad");
  }
}

let studentOne = new Student("Juhan", "Juurikas");
let studentTwo = new Student("Kaarel", "Kadakas");

let masterOne = new MasterStudent("Jüri", "Ratas");
let masterTwo = new MasterStudent("Edgar", "Ratas");
let masterThree = new MasterStudent("Peeter", "Palk");

let bachlors = [studentOne, studentTwo];
let masters = [masterOne, masterTwo];
let students = bachlors.concat(masters);

//console.log(students);
//students[students.length] = masterThree;
//students.unshift(masterThree);
//console.log(students);

//console.log(bachlors[0].name);




//masterOne.smarterMaster();
//studentOne.smarterMaster();
//studentOne.fullname();
//studentTwo.fullname().say().fullname();




/*let studentOne = {
  name: "Juhan",
  lastname: "Juurikas",
  fullname(){
    console.log(this.name, this.lastname);
  }
};

let studentTwo = {
  name: "Kaarel",
  lastname: "Kadakas",
  fullname(){
    console.log(this.name, this.lastname);
  }
};

studentOne.fullname();
studentOne.age = 25;
studentTwo.fullname();

console.log(studentOne.age);*/
