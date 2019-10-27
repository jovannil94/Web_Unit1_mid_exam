// Write a method that doubles each element in an array.

function doubler(array) {
    return array.reduce((acc, element) =>{
        acc.push(element*2)
        return acc
    }, [])
}

// Write a method that returns the factors of a number in ascending order.
// Factors are numbers that divide evenly into a number.

function factors(num) {
    let output = []
    for(let i = 0; i <= num; i++){
        if(num%i === 0){
            output.push(i)
        }
    } 
    return output
}

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements.

function median(arr) {
    newarr = arr.sort()
    if(newarr.length%2 !== 0){
        return newarr[Math.floor((newarr.length)/2)]
    } else {
        return ((newarr[newarr.length/2]) +(newarr[newarr.length/2-1]))/2
    }
}


// Write a method that returns the product of all numbers in an array.

function product(arr) {
    let product = 1
    if(arr[0] === undefined){
      return product = 0
    } else{
      arr.forEach(element => {
          product *= element
      });
      return product
    }
  }

// Write a method that returns the largest number in an array.

function largest(arr) {
    let largest =arr[0]
    arr.forEach((element) =>{
        if(largest < element){
            largest = element
        }
    }) 
    return largest
}

// Write a method called 'and' that takes in two arguments. It should check
// return whether or not both arguments have a truthy value.

function and(arg1, arg2) {
    if(arg1 === true && arg2 === true) {
        return true
    } else {
        return false
    }
}

// Write a function that takes in an array and a target. Return whether or
// not the array contains the target

function includes(arr, target) {
    return arr.reduce((acc, element) =>{
        if(element !== target){
            return acc
        } else {
            return true
        }
    }, false)
}

// Write a function that removes all the vowels from a string.

function disemvowel(str) {
    let newSentenceNoVowels = ""
     for(let i = 0; i < str.length; i++){
       if(str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
         newSentenceNoVowels += str[i]
       }
    }
    return newSentenceNoVowels
 }

module.exports = { doubler, factors, median, product, largest, and, includes, disemvowel };
