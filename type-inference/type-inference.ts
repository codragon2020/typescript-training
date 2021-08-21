// When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}'

const coordinates1 = JSON.parse(json) // this returns the 'any' type
console.log(coordinates1)

// 'any' type is not good to have since TS can't fix what it doesn't understand
// to fix the 'any' type, use type-annotation
const coordinates2: { x: number; y: number } = JSON.parse(json) // now we see the type annotation


// 2) When we declare a variable on 1 line and initialize it later
let words = ['red', 'green', 'blue']
// Below line declares the variable but the type annotation is 'any'
// let foundWord 
let foundWord = false // Best to declare and assign the false boolean

for (let i=0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}


// 3) When we have a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i=0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i] // this is type 'number'
    }
}
