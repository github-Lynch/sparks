# 偷懒地记一下

## TS中interface和type的异同
 - 两者作用类似, 都可以声明对象; 几乎所有的interface都可以用type实现;
    ```typescript
    type Country = {
      name: string;
      capital: string;
    };

    interface Coutry {
      name: string;
      capital: string;
    }
    ```

---
不同点:
 1. interface只能表示对象类型(包含对象、函数); type可表示非对象类型.
 2. interface可以继承(extends), 合并属性. type无法继承, 只能通过`&`运算符重新定义一个类型.
 3. 同名interface会自动合并, 同名type则会报错. 也就是说, TypeScript不允许使用type多次定义同一个类型.
 4. interface不能包含映射属性(maping), type可以
    ```typescript
    interface Point {
      x: number;
      y: number;
    }

    // 正确
    type PointCopy1 = {
      [Key in keyof Point]: Point[Key];
    };

    // 报错
    interface PointCopy2 {
      [Key in keyof Point]: Point[Key];
    };
    ```
 5. interface可以使用this关键字
    ```typescript
    // 正确
    interface Foo {
      add(num: number): this;
    }

    // 报错
    type Foo = {
      add(num: number): this;
    };
    ```
 6. type可以扩展原始数据类型, interface不行; interface无法表达某些复杂类型(比如交叉类型和联合类型), 但是type可以.

---
## 函数柯里化封装
```js
function curry(fn) {
  // 获取函数的参数个数
  const count = fn.length;

  // 内部递归函数，用于处理参数
  function curried(...args) {
    if (args.length >= count) {
      // 如果已经传递了足够的参数，则执行原函数
      return fn(...args);
    } else {
      // 否则返回一个新函数，继续接收剩余的参数
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  }

  return curried;
}

// 使用示例
function add(x, y, z) {
  return x + y + z;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 输出 6
console.log(curriedAdd(1, 2)(3)); // 输出 6
console.log(curriedAdd(1)(2, 3)); // 输出 6
```