class Star {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sing(song) {
        console.log(this.name + song);
    }
}

let ldh = new Star('刘德华', 50)
let zxy = new Star('张学友', 50)
ldh.sing('冰雨')
zxy.sing('77')
console.log(ldh);
console.log(zxy);