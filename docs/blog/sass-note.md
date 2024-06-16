# Sass note

Sass Syntax (/ˈsɪntæks/ 语法)

_url(内不加引号)_

---

- 变量在 url()中的应用

  ```scss
  $variable: 'string';

  background: url(#{$variable}/path.png);
  ```

---

- @mixin 混入函数

  ```scss
  @mixin flex($jc, $ai) {
    display: flex;
    justify-content: $jc;
    align-items: $ai;
  }

  @include flex('center', 'center');
  ```

---

- rgba
  可直接在 rgba 里输入颜色名和 HEX 值
  ```scss
  background-color: rgba(snow, 0.3);
  background-color: rgba(#575499, 0.3);
  ```

---

- Sass variables are imperative, which means if you use a variable and then change its value, the earlier use will stay the same. CSS variables are declarative, which means if you change the value, it’ll affect both earlier uses and later uses.

  Sass 变量是命令式的，这意味着如果您使用了一个变量，然后更改了它的值，那么之前的使用将保持不变。CSS 变量是声明性的，这意味着如果您更改值，它将影响早期使用和后期使用。

---

- Sass 变量将连字符和下划线视为相同的

