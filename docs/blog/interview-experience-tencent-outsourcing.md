# 面经-腾讯外包

## #1
> 判断异步执行顺序
```js
console.log(1);

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log(2);
  })
  console.log(3);
}, 0)

new Promise((resolve) => {
  for (let i = 0; i < 1000; i++) {
    if (i === 1000) {
      resolve()
    }
  }
  console.log(4);
}).then(() => {
  console.log(5);
})

console.log(6);
```
```js
// 解答:
> 1 4 6 undefined 3 2

```
---
## #2
> 服务器api返回给前端的地址数据需要脱敏, 规则如下:
>
> 1位字符, 不脱敏
>
> 2-4位字符, 第1位脱敏
>
> 5-9位字符, 第3-5位脱敏
>
> 10位字符以上, 倒数3-5位脱敏
```js

```
---
## #3
> 给定一个整数数组a,其中1 ≤ a[i] ≤ n (n为数组长度), 其中有些元素出现两次而其他元素出现一次. 找到所有出现两次的元素. 你可以不用到任何额外空间并在O(n)时间复杂度内解决吗?
```js

```
---
## #4
> 给定一个由各类括号组成的字符串, 判断该字符串是否有效. (左括号必须用相同类型的右括号以正确的顺序闭合)
```js

```
---
## #5
> 实现一个debounce方法
```js
/**
 * @param fn 要被防抖的函数
 * @param delay  防抖的延迟时间
 * @param immediately 第一次的时候是否立即执行,默认为 true
 */

export function debounce(
  fn: Function,
  delay: number = 1000,
  immediately: boolean = true
) {
  let timerID: number = -1;
  return function (this: any, ...arg: any) {
    if (timerID < 0 && immediately) {
      fn.apply(this, arg);
      timerID = 1;
      return;
    }
    if (timerID > 0) {
      clearTimeout(timerID);
    }
    timerID = window.setTimeout(() => {
      console.log("arg", arg);
      fn.apply(this, arg);
    }, delay);
  };
}

```
---
## #6
> 搜索功能
> 1. 高亮搜索结果中的关键字
> 2. 搜索结果列表下拉滑动触底时, 自动加载更多搜索结果
> 3. 不使用第三方组件库
```js

```
---