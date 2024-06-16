# 风格与规范

## Do
+ RORO(receive object return object)规范封装函数
+ 将魔法数字转变成见文知意的常量
+ Vue组件名应为多个单词(避免跟现有的以及未来的 HTML 元素相冲突, 因为所有的 HTML 元素名称都是单个单词的)
+ 基础组件名建议以特定的前缀开头, 如Base(BaseButton, BaseIcon...)
+ 和父组件紧密耦合的子组件应该以父组件名作为前缀命名
+ 在单文件组件(.vue文件)和字符串模板中组件名应该总是 PascalCase 的; 在 DOM 模板中总是 kebab-case 的
+ 在声明 prop 的时候, 其命名应该始终使用 camelCase, 而在模板中应该始终使用 kebab-case

## TIPs
+ chrome 控制台 $i('name')可安装npm包. 例: $i('dayjs')
+ `document.body.contentEditable=true` 可编辑网页文本内容和通过剪切复制内容
+ css视觉设计: http://hepengwei.cn/#/html/visualDesign
+ 空值合并运算符（??）是一个逻辑运算符, 当左侧的操作数为 null 或者 undefined 时, 返回其右侧操作数, 否则返回左侧操作数.
+ 逻辑或运算符（||）会在左侧操作数为假值时返回右侧操作数.
+ light color: `lavender, honeydaw, aliceblue, ivory, azure, snow`
+ $on('hook:生命周期') 来简化window监听
	好处在于可以开启一个事件监听器的同时, 就在beforeDestroy 生命周期中挂载一个删除事件监听器的事件.这种写法会更加安全, 更加有助于避免内存泄露并防止事件冲突
  ```javascript
  mounted() {
    window.addEventListener('resize', this.resizeHandler)
    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.resizeHandler)
    })
  }
  ```
