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