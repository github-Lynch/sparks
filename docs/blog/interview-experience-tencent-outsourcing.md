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
function infoHide(address) {
  const len = address.length
  let str = address
  // 1位字符及以下, 不处理
  if (len > 1 && len < 5) {
    // 2-4位字符, 第1位脱敏
    str = '*' + str.substring(0)
  } else if (len > 4 && len < 10) {
    // 5-9位字符, 第3-5位脱敏
    str = str.substring(0, 2) + '***' + str.substring(5)
  } else if (len > 9) {
    // 10位字符以上, 倒数3-5位脱敏
    str = str.substring(0, len - 5) + '***' + str.substring(len - 2)
  }

  return str
}
```
---
## #3
> 给定一个整数数组a,其中1 ≤ a[i] ≤ n (n为数组长度), 其中有些元素出现两次而其他元素出现一次. 找到所有出现两次的元素. 你可以不用到任何额外空间并在O(n)时间复杂度内解决吗?

思路和算法 ([leetcode](https://leetcode.cn/problems/find-all-duplicates-in-an-array/solutions/1459085/by-stormsunshine-ojmz/)): 
这道题要求找出数组 nums 中的所有出现两次的整数并返回。常规的做法是使用哈希表存储数组中的整数，遍历数组并将每个整数存入哈希表，如果遍历到一个元素时发现该元素已经在哈希表中，则该元素是出现两次的整数。对于长度为 n 的数组，使用哈希表的时间复杂度是 O(n)，符合题目要求，但是空间复杂度是 O(n)，不符合题目要求的常数空间。

为了将空间复杂度降低到常数，不能额外创建哈希表，只能原地修改数组。由于数组 nums 的长度是 n，下标范围是 [0,n−1]，每个元素都在范围 [1,n] 内，因此可以将数组看成哈希表，利用数组下标的信息表示每个整数是否出现两次。对于下标 index，满足 0≤index<n，1≤index+1≤n，nums[index] 可以用于表示整数 index+1 是否出现两次。

遍历数组 nums。对于元素 num，其对应的下标为 index=∣num∣−1，根据 nums[index] 的正负性执行如下操作：

如果 nums[index]>0，则将 nums[index] 的值更新为其相反数；

如果 nums[index]<0，则 ∣nums∣=index+1 是出现两次的整数，将其添加到结果中。

上述做法的原理如下：

初始时数组 nums 中的整数都是正数，表示尚未被访问；

当一个整数被访问时，如果该整数对应的下标处的元素是正数，则该整数尚未被访问，因此将该整数对应的下标处的元素改成其相反数，相反数是负数，表示被访问了一次；

当一个整数被访问时，如果该整数对应的下标处的元素是负数，则该整数已经被访问，因此该整数被第二次访问，即该整数是出现两次的整数。

需要注意的是，遍历数组 nums 的过程中，遍历到的元素 num 可能已经被改成负数，因此在计算下标 index 时需要对 num 取绝对值然后减 1。

```js
var findDuplicates = function(nums) {
    let duplicates = []
    let n = nums.length
    for (let i = 0; i < n; i++) {
        let num = nums[i]
        let index = Math.abs(num) - 1
        if (nums[index] > 0) {
            nums[index] = -nums[index]
        } else {
            duplicates.push(index + 1)
        }
    }
    return duplicates
}
```
---
## #4
> 给定一个由各类括号组成的字符串, 判断该字符串是否有效. (左括号必须用相同类型的右括号以正确的顺序闭合)
```js
var isValid = function (s) {
  const n = s.length
  if (n % 2 === 1) {
    return false
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  const stk = []
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false
      }
      stk.pop()
    }
    else {
      stk.push(ch)
    }
  }
  return !stk.length
}
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
  let timerID: number = -1
  return function (this: any, ...arg: any) {
    if (timerID < 0 && immediately) {
      fn.apply(this, arg)
      timerID = 1
      return
    }
    if (timerID > 0) {
      clearTimeout(timerID)
    }
    timerID = window.setTimeout(() => {
      fn.apply(this, arg)
    }, delay)
  };
}

```
---
