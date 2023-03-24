// JavaScript 数据类型和数据结构
// 动态和弱类型
// JavaScript 是一种有着动态类型的动态语言。 JavaScript 中的变量与任何特定值类型没有任何关联， 并且任何变量都可以分配（ 重新分配） 所有类型的值：

let foo = 42; // foo 现在是一个数值
foo = "bar"; // foo 现在是一个字符串
foo = true; // foo 现在是一个布尔值
// JavaScript 也是一个弱类型语言， 这意味着当操作涉及不匹配的类型是否， 它将允许隐式类型转换， 而不是抛出一个错误。

const foo2 = 42; // foo is a number
const result = foo2 + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421

// 强制隐式转换是非常方便的， 但是如果不打算转换， 或者打算向另一个方向转换（ 例如， 字符串转数值而不是数值到字符串）， 则会存在潜在的隐患。 对于 symbol 和 BigInt， JavaScript 总是不允许某些隐式类型转换。

// 原始值
// 除了 Object 以外， 所有类型都定义了表示在语言最低层面的不可变值。 我们将这些值称为原始值。

// 除了 null， 所有原始类型都可以使用 typeof 运算符测试。 typeof null 返回 "object"，
// 因此必须使用 === null 来测试 null。

// 除了 null 和 undefined， 所有原始类型都有它们相应的对象包装类型， 这为处理原始值提供可用的方法。 例如， Number 对象提供向 toExponential() 这样的方法。 当在原始值上访问属性时， JavaScript 会自动将值包装到相应的包装对象中， 并访问对象上的属性。 然而， 在 null 或 undefined 上访问属性时， 会抛出 TypeError 异常， 这需要采用可选链运算符。





// 对象包装器类的参考页面包含关于每个类型可用方法和属性类型的更多用法，以及原始类型本身的详细描述。

// Null 类型
// Null 类型只有一个值：null。

// undefined 类型
// Undefined 类型只有一个值：undefined。

从概念上讲， undefined 表示没有任何值， null 表示没有任何对象（ 这也可以构成 typeof null === "object"
的接口）。 当某些东西没有值时， 该语言通常默认为 undefined：

1. 没有值（
return;）
的
return 语句， 隐式返回 undefined。
2. 访问不存在的对象属性（ obj.iDontExist）， 返回 undefined。
3. 变量声明时没有初始化（
let x;），
隐式初始化为 undefined。
4. 许多如 Array.prototype.find() 和 Map.prototype.get() 的方法， 当没有发现元素时， 返回 undefined。

null 在核心语言中使用频率少得多。 最重要的地方是原型链的末端—— 其次是与原型交互的方法， 如 Object.getPrototypeOf()、 Object.create() 等， 接受或返回 null 而不是 undefined。
null 是一个关键字， 但是 undefined 是一个普通的标识符， 恰好是一个全局属性。 在实践中， 这两个差异很小， 因为 undefined 不应该被重新定义或者遮蔽。

Boolean 类型
Boolean 类型表示一个逻辑实体并且包括两个值： true 和 false。
布尔值通常用于条件运算， 包括三元运算符、
if ...else、 while 等。

Number 类型
Number 类型是一种基于 IEEE 754 标准的双精度 64 位二进制格式的值。 它能够存储 2 - 1074（ Number.MIN_VALUE） 和 21024（ Number.MAX_VALUE） 之间的正浮点数， 以及 - 2 - 1074 和 - 21024 之间的负浮点数， 但是它仅能安全地存储在 - (253− 1)（ Number.MIN_SAFE_INTEGER） 到 253− 1（ Number.MAX_SAFE_INTEGER） 范围内的整数。 超出这个范围， JavaScript 将不能安全地表示整数； 相反， 它们将由双精度浮点近似表示。 你可以使用 Number.isSafeInteger() 检查一个数是否在安全的整数范围内。

±(2 - 1074 到 21024) 范围之外的值会自动转换：

大于 Number.MAX_VALUE 的正值被转换为 + Infinity。
小于 Number.MIN_VALUE 的正值被转换为 + 0。
小于 - Number.MAX_VALUE 的负值被转换为 - Infinity。
大于 - Number.MIN_VALUE 的负值被转换为 - 0。 +
    Infinity 和 - Infinity 行为类似于数学上的无穷大， 但是有一些细微的区别； 更多细节， 参见 Number.POSITIVE_INFINITY 和 Number.NEGATIVE_INFINITY。

Number 类型仅有一个具有多个表现形式的值： 0 同时表示为 - 0 和 + 0（ 其中 0 是 + 0 的别名）。 实际上， 这两者之间几乎没有区别； 例如， + 0 === -0 是 true。 然而， 当你除以 0 的时候， 你要注意到这一点：

console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
NaN（“ Not a Number”） 是一个特殊种类的数值， 当算术运算的结果不表示数值时， 通常会遇到它。 它也是 JavaScript 中唯一不等于自身的值。

虽然 number 在概念上是一个“ 数学的值”， 并且总是隐式的编码为浮点类型， 但是 JavaScript 提供了按位运算符。 当应用按位运算符时， number 首先转换为 32 位整数。

属性的可枚举性和所有权
可枚举属性是指那些内部“ 可枚举” 标志设置为 true 的属性， 对于通过直接的赋值和属性初始化的属性， 该标识值默认为即为 true， 对于通过 Object.defineProperty 等定义的属性， 该标识值默认为 false。 可枚举的属性可以通过
for...in 循环进行遍历（ 除非该属性名是一个 Symbol）。 属性的所有权是通过判断该属性是否直接属于某个对象决定的， 而不是通过原型链继承的。 一个对象的所有的属性可以一次性的获取到。 有一些内置的方法可以用于判断、 迭代 / 枚举以及获取对象的一个或一组属性