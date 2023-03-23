let arr = [1, 2, 3, 4, 5]
for (let i in arr) {
    console.log(i);
}; //01234
for (const i of arr) {
    console.log(i);
} //12345

let set = new Set(['nb', 'bnb'])
for (const v of set) {
    console.log(v);
} //nb bnb

let map = new Map([
    ['name', 'zs'],
    ['age', 18]
])
for (let [key, value] of map) {
    console.log(key + ':' + value);
}

console.log(set.keys()); //nb bnb
console.log(set.values()); //nb bnb
console.log(set.entries()); //nb nb bnb bnb


console.log(map.keys()); //name age
console.log(map.values()); //zs 18
console.log(map.entries()); //name:zs age:18