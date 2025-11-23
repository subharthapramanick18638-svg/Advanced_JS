// let a = new Promise((resolve, reject) => {
//   resolve("nill");
// });

// a.then(() => console.log(true)).catch(() => console.log(false));

// console.log(a);

//-------------------------------------------------
// let a=2;
// let b=3;
// let checkEven1 = new Promise((resolve,reject)=>{
//     if(a%2===0) setTimeout(()=> resolve("The number is Even"),1000);
//     else setTimeout(()=> reject("The number is Odd"),1000);
// });
// let checkEven2 = new Promise((resolve,reject)=>{
//     if(b%2===0) setTimeout(()=> resolve("The number is Even"),2000);
//     else setTimeout(()=> reject("The number is Odd"),2000);
// });
// checkEven1.then((result)=> console.log(result)).catch((error)=>console.log(error));
// checkEven2.then((result)=> console.log(result)).catch((error)=>console.log(error));

//--------------------------------------------------

// let a= new Promise((resolve,reject)=>{
//     resolve("condition_1");

// });
// let b= new Promise((resolve,reject)=>{
//     reject("condition_2");

// });

// Promise.allSettled([a,b])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));

//------------------------------------------------

let a=new Promise((resolve,reject)=>{
    reject("It was rejected");
})

let b=new Promise((resolve,rejected)=>{
   setTimeout(()=>resolve("resolved"),2000);
})

let c= new Promise((resolve, reject) => {
    setTimeout(()=>resolve("worked"),1000);
})

let total =[a,b,c];

Promise.any(total).then((result)=> console.log(result));