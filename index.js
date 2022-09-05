
class Calculator {
    constructor(x, y) {

        this.x = x
        this.y = y

        this.pi = 3.141592653589793
        this.e = 2.718281828459045
        //properties
    }

    ratio(width) {
        let height = width * (this.x / this.y)
        return (`height is ${height}`)

    }

    percentage(x, y) {

        return y / 100 * x
    }

    add() {

        return this.x + this.y
    }

    subtract() {

        return this.x - this.y
    }

    multiply() {

        return this.x * this.y
    }

    divide() {

        return this.x / this.y
    }

    modulation() {

        return this.x % this.y
    }

    elevate() {

        return this.x ** this.y
    }

    sqrt() {

        return Math.sqrt(this.x)
    }


    //getter

    //methods
}

const calculate = new Calculator