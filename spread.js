// let a={
//     name:"nill",
//     address:"malda",
//     age:10
// }

// let b={
//     name:"raj",
//     address:"kolkata"
// }

// let c={...a,...b}

// console.log(c)

// let a="nill"

// let c=[...a]
// console.log(c)

// let a = [1, 2, 3];

// let b = a;
// b = [...a, 12];

// console.log(a);

// let a=[1,2,3,4]

// let b=[5,6,7,8,9,0]

// let c=[...a,...b]

// console.log(c)

//-------------------------------------------------
// let a=[{name:"nill",address:"malda"},{name:"raj",address:"kolkata"}]

// let b=a.map(item=> item.name==="nill" ?{...item,name:"rupam"}:{...item});

// console.log(b);

//---------------------------------------------------
let a=[{name:"nill",address:"malda"},{name:"raj",address:"kolkata"}]

function b(arr){
    return arr.map(item=> item.name==="nill" ?{...item,name:"rupam"}:{...item});
}

let newA=b(a);
console.log(newA);
console.log(a);