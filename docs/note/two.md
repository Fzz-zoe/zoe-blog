# 12-30

1. 深拷贝和浅拷贝
深拷贝一般是指递归复制了所有层级（内存地址不相同）
浅拷贝一般指只复制一层对象的属性（内存地址相同）
深拷贝在面对层级庞大且复杂的数据时会带来性能的问题，所以一般用浅拷贝
lodash中_.clone(obj, true)等价于_.cloneDeep(obj)
2. vue样式穿透
当需要控制外来组件或者想要控制器作用的更深
1.css :  >>>
2.less、sass、scss : ①/deep/ 选择器 （vue3.0会报错） ②::v-deep 选择器(编译速度更快)
3. markdown基础语法

[基础语法：](https://www.jianshu.com/p/b03a8d7b1719)

[有道云笔记markdown使用：](http://note.youdao.com/iyoudao/?p=2411)

