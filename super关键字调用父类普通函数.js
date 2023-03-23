class Father {
    say() {
        return '我是爸爸'
    }
}
class Son extends Father {
    say() {
        // console.log('我是儿子');
        console.log(super.say() + '的儿子');
    }
}

let son = new Son()
son.say()