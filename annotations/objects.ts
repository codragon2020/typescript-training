const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age
    }
}

// if we want to destructure the variable 
// we have to write out the annotation as the assigned value 'profile' requires
const { age, name }: { age: number; name: string } = profile


const { coords: { lat, lng }}: { coords: {lat: number; lng: number} } = profile