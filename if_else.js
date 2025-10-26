// let a="12";
// if(a===12 || a<13){//== check value and === checked data type and value
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//check grade---->
// let b="98" ;
// if(typeof(b)==="number"){
//     if(90<b && b<=100){
//         console.log("grade- A");
//     }
//     else if(80<b && b<=90){
//         console.log("grade- A+ ");
//     }
//     else if(60<b && b<=80){
//         console.log("grade- B ");
//     }
//     else if(40<b && b<=60){
//         console.log("grade- C ");
//     }
//     else if(40>=b){
//         console.log("grade- D ");
//     }
//     else{
//         console.log("Absent");
//     }
// }
// else{
//     console.log("It is invalid");
// }

// check type-->
// let a=12;
// console.log(typeof(a));

//check leap year-->
// let ly=2012;
// if(typeof(ly)==="number"){
//     if((ly%4==0 && ly%100!=0)||(ly%400==0)){//exceptional handle to chack 100 and 400
//         console.log(ly+" year is leap year.");
//     }
//     else{
//         console.log(ly+" year is not leap year.");
//     }
// }
// else{
//     console.log("it is invalid.");
// }


// let a=2;
// if(a%2==0){
//     console.log("It is a even number.");
// }
// else{
//      console.log("It is not a even number.");
// }

// let b=12;
// console.log("This is a "+typeof(b));

//population check-->

// let cities=[{name:"Kolkata",population:60000},
//     {name:"Durgapur",population:40000},
//     {name:"Nadia",population:30000},
//     {name:"Siliguri",population:45000},
//     {name:"Asansol",population:52000}]

// for(i=0;i<cities.length;i++){
//     if(cities[i].population<50000){
//         console.log(cities[i]);
//     }
// }


//1. Write a program that finds the largest of three numbers using only if-else (no Math.max).

// let a=3;
// let b=8;
// let c=7;

// if(a>b && a>c){
//     console.log("The largest number is "+a);
// }
// else if(b>c && b>a){
//     console.log("The largest number is "+b);
// }
// else if(c>a && c>b){
//     console.log("The largest number is "+c);
// }

//2. Use switch to build a simple calculator that can perform addition, subtraction, multiplication, and division.

// let a=5;
// let b=6;
// let p=1;//(1.addition 2.subtraction 3.multiplication 4.division)

// if(p=1){
//     let c=a+b;
//     console.log("addition = "+c);
// }
// else if(p=2){
//     let d=a-b;
//     console.log("subtraction = "+d);
// }
// else if(p=3){
//     let e=a*b;
//     console.log("multiplication = "+e);
// }
// else if(p=3){
//     let f=a/b;
//     console.log("division = "+f);
// }

//3. Write a program to print all even numbers between 1 and 50 using a for loop.

// for(let i=1;i<50;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//6. Write a program that iterates through an array of numbers and prints only the odd numbers using a for...of loop.

// a=[1,2,3,4,5,6,7,8,9,10];

// for(let i of a){
//     if(i%2!=0){
//         console.log(i)
//     }
// }

//7. Write a program to iterate through an object and print all key-value pairs using for...in.

// let student={name:"Subhartha Pramanick",
//     age:25,
//     course:"javascript",
//     city:"Howrah"
// }
// for(let i in student){
//     console.log(i+":"+student[i]);
// }

//8. Write a program that calculates the sum of digits of a number using a loop (e.g., 123 → 1+2+3 = 6).

let a=345;
let sum=0;
let b=a;
for(;b>0;){
    let digit=b%10;
    sum=sum+digit;
    b=Math.floor(b/10);
}
console.log(sum);