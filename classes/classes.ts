// Modifiers: Public, Private, Protected

class Vehicle {
    // modifiers can be used on fields as well
    constructor( public color: string) {
    }

    drive(): void {
        console.log('chugga chugga')
    }

    protected honk(): void {
        console.log('beep beep')
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

// Basic Inheritance
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }

    drive(): void {
        console.log('vroom vroom')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const car = new Car(4, 'red')
car.startDrivingProcess()
