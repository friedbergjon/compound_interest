


// console.log (years)
function ira(amount) {
    const years = Array.from(Array(41), (x, index) => index + 1);
    for (let i= 0; i < years.length; i++){
         let newAmount=amount * (1 + .07/1) ** years[40];
        return newAmount;
     
    
    }
  
  
}
console.log(ira(10000))


// array = [ 1, 2, 3, 4, 5, 6 ]; 
// for (index = 0; index < array.length; index++) { 
//     console.log(array[index]); 
// } 

// const array = Array(5).fill(5)

// console.log(Object.getOwnPropertyNames(array))