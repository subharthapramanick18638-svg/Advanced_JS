const students = [
  { name: "Rahul", grade: "A" },
  { name: "Riya", grade: "B" },
  { name: "Amit", grade: "A" }
];

const b=students.reduce((acc,cur)=>{
    (acc[cur.grade]=acc[cur.grade]||[]).push(cur.name);
    return acc;
},{});
console.log(b);