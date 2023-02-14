// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//•	Do not use numbers to reference the last element, find it programmatically, 
//•	ages[7] – ages[0] is not allowed!
function subtractArray(array) {
    let firstElement = array.shift();
    let lastElement = array.pop();
    return lastElement - firstElement;
    
}

console.log(subtractArray(ages));
//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(10);
console.log(subtractArray(ages));
console.log(ages.length)
//1c.	Use a loop to iterate through the array and calculate the average age.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;

console.log(average);

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let numOfletters = 0;
for(let i = 0; i < names.length; i++){
    let element = names[i];
     numOfletters += element.length;

}
let avgLetters = numOfletters / names.length;
console.log(avgLetters)
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let concatOfname = "";
for(let i = 0; i < names.length; i++)(
    concatOfname += names[i] + " "
)
console.log(concatOfname)

// 3.How do you access the last element of any array?
 " console.log(array.length - 1);"
 
 //4.	How do you access the first element of any array?
 "console.log(array[0]);"

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
}
console.log(nameLengths)

//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let arraysum = "";
for(let i = 0; i < nameLengths.length; i++){
    arraysum += [i]
}
console.log(arraysum)
