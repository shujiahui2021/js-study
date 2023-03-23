// 冻结对象
const obj = Object.freeze({ name: 'zs', obj2: { name: 'ls' } })
obj.age = 18
obj.obj2.age = 20
console.log(obj);