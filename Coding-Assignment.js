// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Question 1")
console.log(ages)

//1a.Programmatically subtract the value of the first element
// in the array from the value in the last element of the array.
console.log("Question 1a")
function subtracArray(array) {                      //* function takes one array as parameter 
    return array[array.length - 1] - array[0]      //* i used array length -1 to get to last element 
}

console.log(subtracArray(ages));
//1b. Add a new age to your array and repeat the step 
//above to ensure it is dynamic. (works for arrays of different lengths).
console.log("Question 1b")
ages.push(100);                                     //* used push() to add new element to array
console.log(ages );
function subtracArray(array) {                      //* after adding a new value to the array, reused function from line 10 to check if is dynamic .
    return array[array.length -1] - array[0]        
    
}

console.log(subtracArray(ages));

//1c.	Use a loop to iterate through the array and calculate the average age.
let sum = 0;                            //* this is to store the sum value of all elements inside the array 
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];                    //* starting at 0, since variable sum is 0, then adding the value of each element in the array 
}
let average = sum / ages.length;       //* after getting the addition of all elements we divide it againts the lenghts of array 

console.log("Question 1c");
console.log(average);

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log("Question 2")
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let numOfletters = 0;                           //*  variable created to store the lenght of all elements inside the array 
for(let i = 0; i < names.length; i++){  
                                            
     numOfletters += names[i].length;            //* checking every element lenght and then adding the value to variable "numOfLetters"

}
let avgLetters = numOfletters / names.length;  //* new variable to store the avg value of array in a new variable call "avgLetters" 
console.log("Question 2a");
console.log(avgLetters);

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let concatOfname = "";                      //* this is to store concatenated elements of array 
for(let i = 0; i < names.length; i++)(      
    concatOfname += names[i] + " "          //* adding every element inside "names array" plus a single space between them. 
)
console.log("Question 2b")
console.log(concatOfname)

// 3.How do you access the last element of any array?
console.log("Question 3")
 console.log("console.log(array.length - 1);")
 
 //4.	How do you access the first element of any array?
 console.log("Question 4")
 console.log("console.log(array[0]);")

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];                       //* variable created to store push elements inside the array 
for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)       //* to send items to array "nameLenghts" 
}
console.log("Question 5")
console.log(nameLengths)

//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let total = 0 ;                                     //* variable created to store total amount of element. 
for(let i = 0; i < nameLengths.length; i++){   
    total += nameLengths[i]                         //* the additing  length of each element inside array.
};
console.log("Question 6")
console.log(total)
//7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatenate(word, n){              //* this function takes two parameters called "word" and "n" 
    let concatElement = ""                  //* this is to store the value of every iteration 
    for(let i = 0; i < n; i++){            //* for loop will itarate according to the value of n 
        concatElement += word;             //* this will add the value of parameter "word" to variable "concatElement" 
    }
    return concatElement
}
console.log("Question 7")
console.log(concatenate("Hello", 3))

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  
//The full name should be the first and the last name separated by a space.

function fullName(first, last){           //* this function take two parameters called "first" and "last" 
    console.log (first + " " + last)     //* this will add the value of parameters separated by a space 

}
console.log("Question 8")
console.log("Bernardo", "Rosario")

//9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumOfNum(array){                       //* this function takes a parameter 
    let sumOfArray = 0;                         //* this is to store the sum value of all elements inside the array 
    for(let i = 0; i < array.length; i++){      
        sumOfArray += array[i]                 //* starting at 0, since variable sumOfArray is 0, then adding the value of each element in the array 
    }
    if(sumOfArray > 100){                      //* to check if the value of sumOfArray is greater than 100. 
        return true;
    }
}
console.log("Question 9")
console.log(sumOfNum([50, 51]))

//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array
function avgArray(array){                               //* function takes one parameter called "array" 
    let sumOfArray = 0;                                 //* stores value *//
    for(let i = 0; i < array.length; i++){              //* this for loop will iterate as long as "i" is less than arrays lenght. 
        sumOfArray += array[i]                          //*  this will add the value of each element of array to the variable "sumOfArray" 
    }
    return sumOfArray / array.length                    //* calculates the avg length of element in array. 
}
console.log("Question 10")
console.log(avgArray([4, 20, 4, 50, 55, 28, 11]))

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in 
//the first array is greater than the average of the elements in the second array.

function avgOfArrays(arr1, arr2){                    //* this function takes two arrays as parameters called "arr1"  and "arr2"
    let sumOfArr1 = 0;                               //* to store the sum of parameter "arr1". 
    let sumOfArr2 = 0;                              //* to store the sum of parameter "arr2". 
    let avgOfArr1 = sumOfArr1 / arr1.length;        //* Calculate the average of arr1
    let avgOfArr2 = sumOfArr2 / arr2.length;        //* Calculate the average of arr2

    for(let i = 0; i < arr1.length; i++){           //* iterates over arr1 according to the number of elements 
        sumOfArr1 += arr1[i];                       //* this will add every single element of arr1 to the variable "sumOfarr1"
        
    }

    for(let i = 0; i < arr2.length; i++){           //* iterates over arr2 according to the number of elements 
        sumOfArr2 += arr2[i];                       //* this will add every single element of arr2 to the variable "sumOfarr2"

    }

    if(avgOfArr1 > avgOfArr2){                     //* this condition will compare the avg value stored from arr1 and arr2 
        return true;

    }else {
        return false;
    }

}
console.log("Question 11");
console.log(avgOfArrays([1, 2, 3, 4,], [5, 6, 7,]));

//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

console.log("Question 12")
function willBuyDrink(isHotOutside, moneyInPocket){        //* this function takes two parameters 
    if(isHotOutside && moneyInPocket > 10.50){             //* this condition will requiare both statement to be true, else will be false;
        return true;     
    }else {
        return false;
    }
}
console.log(willBuyDrink(true, 11))

//13.  Create a function of your own that solves a problem. 
console.log("Question 13") 


let date;                       //* function will add new value every time is called
let currentTime;                //* function will add new value every time is called
let currentDate;                //* function will add new value every time is called
let infoLog = [];               //* created to store date and time

let mimicClock = setInterval(() => {             //*just to mimic userclick, taking two parameters a function and 3000 miliseconds equal to 3s
    
    dateTimeLog()                                 //* Calling this function every 3s
    console.log(infoLog)                          //* giving the user a summary of all inputs
    if(infoLog.length >= 8){                      //* created this condition to stop the counter to mimic a 24hr period
        clearInterval(mimicClock);
    }
            
}, 3000); 

function dateTimeLog(){                         //* This funcion will update all declare variable each time is called
 date = new Date()
 currentTime = date.toLocaleTimeString()
 currentDate = date.toLocaleDateString()
    infoLog.push(                               //* to send and store data to infoLog array
        {
            time: currentTime, 
            date: currentDate
        
        }
    )
}







