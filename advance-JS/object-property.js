const students=[
    {id:30, name:"Shakil"},
    {id:45,name:"yeamin"},
    {id:50,name:"Rahmim"},
    {id:35,name:"Habib"}
]
const names=students.map(s=>s.name);
console.log(names);
const ids=students.map(s=>s.id);
console.log(ids);
const idsBigger=students.filter(s=>s.id>35);
console.log(idsBigger);