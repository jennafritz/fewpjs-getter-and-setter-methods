// Add your Circle class here
let pi = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    
    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter/2
    }

    get circumference() {
        return pi * this.diameter
    }

    set circumference(circumference) {
        this.radius = circumference/(pi*2)
    }

    get area() {
        return pi * this.radius**2
    }

    // set area() {

    // }
}