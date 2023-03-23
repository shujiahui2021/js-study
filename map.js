// JavaScript 的对象（Object），本质上是键值对的集合
let map = new Map()
let obj = { name: 'zs', age: '18' }
map.set(obj, 'context')
console.log(map.get(obj));
console.log(map.has(obj)); //true
console.log(map.delete(obj)); //true
console.log(map.has(obj)); //false


// 数组作为参数
let map2 = new Map([
        ['name', 'zs'],
        ['age', 18]
    ])
    // console.log(map2);

// 算法
let item = [
    ['name', 'ls'],
    ['age', 20]
]
let map3 = new Map()

// let keyArr = []
item.forEach(([key, value]) => {
    map3.set(key, value)
        // keyArr.push(key)
})

// for (let i = 0; i < keyArr.length; i++) {
//     console.log(map3.get(keyArr[i]));
// }
console.log(map3.get(...map3.keys()));