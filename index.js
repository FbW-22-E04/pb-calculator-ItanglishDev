
class Calculator {
    constructor(x, y) {

        this.x = x
        this.y = y

        this.pi = 3.141592653589793
        this.e = 2.718281828459045
        //properties
    }

    ratio(x, y, width) {

        return (`height is ${width} on ratio x:y`)

    }

    percentage(x, y) {

        return y / 100 * x
    }

    add() {

        return this.x + this.y
    }




    //getter

    //methods
}