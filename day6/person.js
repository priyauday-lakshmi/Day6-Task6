//Write a “person” class to hold all the details.


class Person {
  
    constructor(name, education, occupation, place) {
      
      this.name = name;
      this.education = education;
      this.occupation = occupation;
      this.place = place;
    }
    
    get getDetails() {
      
      return this.name;
      return this.education;
      return this.occupation;
      return this.place;
    }
    
    toString () {
      return `My name is ${this.name} and I am in ${this.place} and I am a/an ${this.education} graduated and working as a ${this.occupation}. `}
  }
  
  
   let perDetail = new Person("Sam", "Computer Engineer", "Developer", "India");
   console.log(perDetail.toString());