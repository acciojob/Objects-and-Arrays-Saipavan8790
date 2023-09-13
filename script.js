const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloper() {
    //Write your code here , just console.log
     arr.map((val)=>{
        if(val.profession === "developer"){
         console.log(val);
        }
    })
}
  function addData() {
    //Write your code here, just console.log
    let newarr={
        id: 4, name: "Anuj", age: "28", profession: "Intern"
               }
               arr.push(newarr);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((val)=>{
if(val.profession!="admin")
{
    console.log(val);
}
    })

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newEmployee=[
        {id: 10, name: "Sourabh", age: "30", profession: "Tester"},
        {id: 12, name: "Nikhil", age: "25", profession: "Developer"},
        {id: 15, name: "Ram", age: "26", profession: "Software Engineer"}
];

let add= arr.concat(newEmployee);
console.log(add);

  }
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
