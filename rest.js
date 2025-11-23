// const a=(...item)=>{
// return item.filter(b=>b.length===4);
// }
// console.log(a("ram","sham"));

//-------------------------------------------------------------

// const a=(...item)=>{
// return item.filter(value=>value.length>4);
// }
// console.log(a("subhartha","ankit","hrithik","ram","jodu"));

//--------------------------------------------------------------

// let a =(...item)=>{
//     let unique=[];
//     item.filter((value)=>{
//         if(!unique.includes(value)){
//             unique.push(value);
//         }
//     })
//     return unique;
// }
// console.log(a(1, 1, 2, 2, 3, 4, 5, 6));

//-------------------------------------------------------------

// let arr=(...item)=>{
//     return item.reduce((acc,current)=>acc.includes(current)? acc:[...acc,current],[]);
// }
// console.log(arr(1,1,2,3,4,5));

//-------------------------------------------------------------

//????????
// let com=arr1.filter((value)=> arr2.includes(value)).join();
// console.log(a([1,2,3]))
// console.log(a([2,3,4]));

//-------------------------------------------------------------

//???????????
// let a = (item)=>{
//     return item.split("").reduce((acc,cur) => acc.includes(cur)? acc:[...acc,cur],[]).join("");
// }
// console.log(a("programming"));

//-------------------------------------------------------------

//????????????
// let a = ["subhartha","krishna"];
// let b =[25,26];
// let c=a.map((item,index)=>[item,b[index]]);
// console.log(c);

//-----------------------------------------------------------

const a=(item)=>{
  console.log(item)
  return item.split(" ").map((item)=>item.slice(0,-1)+item.charAt(item.length-1).toUpperCase()).join(" ");
}
console.log(a("hello boys"));

//-----------------------------------------------------------

// const students = [
//   { name: "Rahul", grade: "A" },
//   { name: "Riya", grade: "B" },
//   { name: "Amit", grade: "A" }
// ];

// const b=students.reduce((acc,cur)=>{
//     (acc[cur.grade]=acc[cur.grade]||[]).push(cur.name);
//     return acc;
// },{});
// console.log(b);