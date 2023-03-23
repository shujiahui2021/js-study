// class Father {
//     constructor() {

//     }
//     money() {
//         console.log('给我钱');
//     }
// }
// class Son extends Father {

// }

// let son = new Son()

// son.money()

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
    }
}

let son = new Son(1, 2)
son.sum()