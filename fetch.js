// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           reject("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// fetchData("https://jsonplaceholder.typicode.com/post")
//   .then((data) => {
//     console.log("Fetched data:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

function fetchData(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then((response)=>{
            if(!response.ok){
                reject("Network response was not ok");
            }
            return response.json();
        })
        .then((data)=> resolve(data))
        .catch((error)=> reject(error));
    });
}
fetch("https://dummyjson.com/products")
    .then((data)=>{
        console.log("fetched data:",data);
    })
    .catch((data)=>{
        console.log("error:",error);
    })