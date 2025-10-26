// let a=[1,2,3,4,5];
// let b=a.slice(0,3);//(index no.,position)
// console.log(b);
// console.log(a);//original array
// let c=a.slice(2,5);
// console.log(c);
// let p=[1,2,3,4,5,6,7,8,9,10];
// let q=p.slice(0,2);
// let r=p.slice(2,4);
// let s=p.slice(4,6);
// let t=p.slice(6,8);
// let u=p.slice(8,10);
// console.log(q);
// console.log(r);
// console.log(s);
// console.log(t);
// console.log(u);
// let a=[1,2,3,4,5];
// let b=a.splice(0,2);//delete
// console.log(a);
//let c=a.splice(2,2,6,7);//replace
// let d=a.splice(4,0,4.5,4.7)//add
// let e=a.splice(2,0,2.4,2.5,2.6)//add
// console.log(a);


// let a=[1,2,3,4,5,6,7,8,9,10];
// let b=a.filter((item)=>{
//     return item>7;//arrrow function syntax
// })
// console.log(b);

// let a=[1,2,3,4,5,6,7,8,9,10];
// let b=a.filter(function(item){
//     return item>7;//normal pure function syntex
// })
// console.log(b);

// let a=["subhartha","ankit","hrithik","ram","jodu"];
// let b=a.filter((item)=>{
//     return item.length>4;//filter method
// })
// console.log(b);

// let c=a.filter((item)=>{
//     return item.includes('a');
// })
// console.log(c);

// let b=a.find((item)=>{
//     return item.length>4;//return one value and first value of the array.
// })
// console.log(b);

// let c=a.find((item)=>{
//     return item.includes('a');//return one value and first value of the array.
// })
// console.log(c);

// let a = [1, 1, 2, 2, 3, 4, 5, 6];
// let unique =[];
// a.filter((item)=>{
//     if(!unique.includes(item)){
//         unique.push(item);
//     }
// });
// console.log(unique);
//-------------------------------------------------
// const arr=[1,1,2,3,4,5];
// const a=arr.reduce((acc,current)=>{
//     if(!acc.includes(current)){
//         acc.push(current);
//     }
//     return acc;
// },[]);

// console.log(a);
//------------------------------------------------
// let a=[1,2,3,4,5,6]
// let b=a.reduce((acc,current)=>{
//     return acc+current;
// })
// console.log(b);
//-----------------------------------------------
// const arr=["banana","orange","cherry"];

// let a =arr.reduce((acc,cur)=>{
//     acc[cur]=cur.length;
//     return acc;
// }, {});

// console.log(a);
//----------------------------------------------
//maximum value checking
//  let a =[11,2,12,9,8];

//  let b=a.reduce((acc,cur)=>{
//     //console.log("first",acc,"second",cur);
//     if(cur>acc){
//         return cur;
//         console.log("satisfy",cur);
//     }
//     else{
//         return acc;
//         console.log("not satisfy",acc);
//     }
//  })
// let b=a.reduce((acc,cur)=>cur>acc? cur:acc)//ternary oparator

//  console.log(b);
//---------------------------------------------
// let a =[1,1,2,2,3,4,4,5,6,7,7,7];
// let b=a.reduce((acc,cur)=>{
//     acc[cur]=(acc[cur]|| 0)+1;
//     return acc;
// },{})
// console.log(b);
//--------------------------------------------
const cart = [
  { item: "Shirt", price: 500 },
  { item: "Pant", price: 800 },
  { item: "Shoes", price: 1200 }
];

const total = cart.reduce((acc,cur)=>{
    return acc+cur.price;
},0);
console.log(total);

//--------------------------------------------

// const nested = [[1,2], [3,4], [5,6]];

// const arr = nested.reduce((acc,cur)=>{
//     return acc.concat(cur);
// },[]);
// console.log(arr);

//---------------------------------------------
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