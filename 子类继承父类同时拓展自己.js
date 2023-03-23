class Father {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    sum() {
        console.log(this.x + this.y);
    }
}
class Son extends Father {
    constructor(x, y) {
        super(x, y)
        this.x = x
        this.y = y
    }
    subtract() {
        console.log(this.x - this.y);
    }
}

let son = new Son(2, 1)
son.sum()
son.subtract()