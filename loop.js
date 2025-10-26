// let a=[1,2,3,4,5,6,7,8,9,10];
// for(let i=a.length-1;i>=0;i--){
//     console.log(a[i]);
// }
// for (let i in a){
//     console.log(a[i]);//for index print
// }
// for (let i of a){
//     console.log(i);//for value print
// }
// let b=[];
// for (let i of a){
//     b.push(i*i);
// }
// console.log(b);

let a = [1, 1, 2, 2, 3, 4, 5, 6];
let unique = [];

for (let i = 0; i < a.length; i++) {
    let dup = false;

    for (let j = 0; j < unique.length; j++) {
        console.log("main",a[i]);
        console.log("unique",unique[j]);
        if (a[i] === unique[j]) {
            dup = true;
            break;
        }
    }

    if (!dup) {
        unique.push(a[i]);
    }
}

console.log(unique);




