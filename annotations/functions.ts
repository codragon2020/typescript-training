// Args: there is no type inference for arguments
// we will always add the annotations for the function args
// Return/output: type inference works out output, but we won't use it
// instead ALWAYS add the return annotation so that you don't miss the return 
const add1 = (a: number, b: number): number => {
    return a + b
}

// this is what the mistake on the return type would look like
// if you remove type 'number' from the return statement you will not see an error
// const add2 = (a: number, b: number): number => {
//     a + b
// }

// this works for anonymous functions as well
function divide(a: number, b: number): number {
    return a / b
}

const logger = (message: string): void => {
    console.log(message)
    // with void, there should not be any return or an error will occur
    //return 'anything'
}

// only annotate a function with return type 'never' if we never expect it to return something
const throwError1 = (message: string): never => {
    throw new Error(message)
}

// better way to write the above is
const throwError2 = (message: string): string => {
    if (!message) {
        throw new Error(message)
    }

    return message
}