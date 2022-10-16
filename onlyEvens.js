//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

// using function expression 

let onlyEvens = function(arr){
  let evens = [];
  arr.forEach(element =>{
    if (element % 2 == 0){
      evens.push(element)
    }
  })
  return evens
}

//e.g

console.log(onlyEvens([1,2,4,6,5,7,9,0]))
