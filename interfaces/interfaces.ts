// Interfaces are used to create a new type, describing the property
// names and value types of an object

interface Reportable {
   summary(): string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

// reusable function: function that accepts arguments that are typed with interfaces
const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drink)