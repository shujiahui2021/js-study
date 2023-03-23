    // 数组去重
    let arr = [1, 2, 2, 3, 3, 4, 4, 5]
    console.log([...new Set(arr)]);
    // array.from
    let arr2 = [6, 6, 7, 7, 8, 8]
    console.log(Array.from(new Set(arr2)));
    // 字符串去重
    let str = '112233445'
    console.log([...new Set(str)].join(''));


    // set 实例方法
    let set = new Set()
        // 添加
    set.add('1')
    console.log([...set]);
    // 检查是否拥有
    console.log(set.has('1'));
    // 删除 返回布尔值
    console.log(set.delete('1'));
    console.log(set.has('1'));