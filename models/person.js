const people = require("../routes/people");

let persons = [{
    id: "40120",
    name:"Satheesh Sambath",
    age:"25",
    profession:"Software Developer"
},
{
    id: "40121",
    name:"Kichu Cruz",
    age:"24",
    profession:"IT Technichian"
},
{
    id: "40122",
    name:"Jibin Anthro",
    age:"28",
    profession:"Doctor"
},
{
    id: "40123",
    name:"Arun kicha",
    age:"27",
    profession:"Electrical Technician"
}]

exports.find = async () => {
    
    return persons;
  }; 


    exports.findById = (id) => {
        for (let person of persons){
           if (person.id == id){
              return person;
           }
        }
     }
    
    
  