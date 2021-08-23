// the colon and the type "number" is the type annotation
// we will only assign the value of number to the variable of apples
const apples: number = 5;

// this works for "let" too
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']

let myNumbers: number[] = [1,2,3]

// Classes
class Car1 {

}
// the var car is only ever going to refer to an instance of Car1
let car1: Car1 = new Car1()

// Object literal
let point: { x: number; y: number } = {
    x:10,
    y:20
}

// Function
// the annotation is ' (i: number) => void '
// this annotation tells ts what type of value we want to assign to the variable 'logNumber'
// Everything on the rt side of ' = ' is the function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}