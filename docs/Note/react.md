# React 学习笔记 📒

第 1 章. React 基础

## 1.1. React 简介

### 1.1.1. 官网

\1. 英文官网:https://reactjs.org/

\2. 中文官网: https://react.docschina.org/

1.1.2. 介绍描述

\1. 用于动态构建用户界面的 JavaScript 库(只关注于视图)

\2. 由 Facebook 开源

1.1.3. React 的特点

\1. 声明式编码

\2. 组件化编码

\3. React Native 编写原生应用

\4. 高效（优秀的 Diffing 算法）

1.1.4. React 高效的原因

\1. 使用虚拟(virtual)DOM, 不总是直接操作页面真实 DOM。

\2. DOM Diffing 算法, 最小化页面重绘。

## 1.2. React 的基本使用

### 1.2.1. 效果

### 1.2.2. 相关 js 库

\1. react.js：React 核心库。

\2. react-dom.js：提供操作 DOM 的 react 扩展库。

\3. babel.min.js：解析 JSX 语法代码转为 JS 代码的库。

### 1.2.3. 创建虚拟 DOM 的两种方式

\1. 纯 JS 方式(一般不用)

\2. JSX 方式,

### 1.2.4. 虚拟 DOM 与真实 DOM

\1. React 提供了一些 API 来创建一种 “特别” 的一般 js 对象

l **const\*\***VDOM\***\*=\*\***React\***\*.createElement('xx', {id:'xx'}, 'xx')**

l 上面创建的就是一个简单的虚拟 DOM 对象

\2. 虚拟 DOM 对象最终都会被 React 转换为真实的 DOM

\3. 我们编码时基本只需要操作 react 的虚拟 DOM 相关数据, react 会转换为真实 DOM 变化而更新界。

## 1.3. React JSX

### 1.3.1. 效果

### 1.3.2. JSX

\1. 全称: JavaScript XML

\2. react 定义的一种类似于 XML 的 JS 扩展语法: JS + XML 本质是**React**.**createElement**(**component, props**, ...children\*\*)方法的语法糖

\3. 作用: 用来简化创建虚拟 DOM

\1) 写法：**var\*\***ele\***\*=\*\***<h1>**\*\*\*\***Hello JSX!</h1>\*\*

\2) 注意 1：它不是字符串, 也不是 HTML/XML 标签

\3) 注意 2：它最终产生的就是一个 JS 对象

\4. 标签名任意: HTML 标签或其它标签

\5. 标签属性任意: HTML 标签属性或其它

\6. 基本语法规则

\1) 遇到 <开头的代码, 以标签的语法解析: html 同名标签转换为 html 同名元素, 其它标签需要特别解析

\2) 遇到以 { 开头的代码，以 JS 语法解析: 标签中的 js 表达式必须用{ }包含

\7. babel.js 的作用

\1) 浏览器不能直接解析 JSX 代码, 需要 babel 转译为纯 JS 的代码才能运行

\2) 只要用了 JSX，都要加上 type="text/babel", 声明需要 babel 来处理

### 1.3.3. 渲染虚拟 DOM(元素)

\1. 语法: **ReactDOM\*\***.render(virtualDOM, \*\* **containerDOM\*\***)\*\*

\2. 作用: 将虚拟 DOM 元素渲染到页面中的真实容器 DOM 中显示

\3. 参数说明

\1) 参数一: 纯 js 或 jsx 创建的虚拟 dom 对象

\2) 参数二: 用来包含虚拟 DOM 元素的真实 dom 元素对象(一般是一个 div)

#### 元素渲染

元素是构成 React 应用的最小砖块, 比如:

const ele = <h1>hello, world</h1>

与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致

上节课的 ReactDOM.render()其实就是在渲染 DOM 节点

#### **更新已渲染的元素**

React 元素是**不可变对象**, 一旦被创建, 无妨更改它的子元素或者属性

计时器的例子

``` html
function tick() {   const element = (     <div>       <h1>Hello, world!</h1>       <h2>{new Date().toLocaleTimeString()}.</h2>     </div>   );   ReactDOM.render(element, document.querySelector('#root')); } setInterval(tick, 1000);
```

大多数情况下, React 应用只会调用一次 ReactDOM.render()

**React 只需要更新它需要更新的部分**

React DOM 会将元素和它的子元素与它们之前的状态进行比较, 并只会进行必要的更新来使 DOM 达到预期的状态

#### 循环绑定元素

当数据从后端请求回来之后, 在 React 中, 一般都需要循环绑定元素

##### map 绑定

在 React 中, 循环绑定元素都是使用 map 方法, 不能使用 forEach 是因为 forEach 没有返回值

```
let ul = (<ul>   { arr.map((item, index)=>{     return <li key={index}>{item}</li>   }) } </ul>)
```

结果会是一个 JSX 元素组成的数组，放入页面中，不会使用逗号分隔开。

循环绑定的 JSX 元素，**必须要有 key 属性**，来区分不同的元素，否则会报错。

##### 过滤元素

同样通过 map 方法, 只要把不符合条件的元素, 返回为 null 即可, 原因在于, null 会被表示为空. 如果使用 filter, 那么就没有办法对元素进行处理, 只能过滤, 还是需要使用 map 进行处理

```
let ul = (<ul>   { arr.map((item, index)=>{     return (       item.price < 1000 ? null : <li key={index}>{item}</li>;     )   }) } </ul>)
```

### 1.3.4. JSX 练习

需求: 动态展示如下列表

## 1.4. 模块与组件、模块化与组件化的理解

### 1.4.1. 模块

\1. 理解：向外提供特定功能的 js 程序, 一般就是一个 js 文件

\2. 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。

\3. 作用：复用 js, 简化 js 的编写, 提高 js 运行效率

### 1.4.2. 组件

\1. 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image 等等)

\2. 为什么要用组件： 一个界面的功能更复杂

\3. 作用：复用编码, 简化项目编码, 提高运行效率

### 1.4.3. 模块化

当应用的 js 都以模块来编写的, 这个应用就是一个模块化的应用

### 1.4.4. 组件化

当应用是以多组件的方式实现, 这个应用就是一个组件化的应用

# 第 2 章：React 面向组件编程

## 2.1. 基本理解和使用

### 2.1.1. 使用 React 开发者工具调试

### 2.1.2. 效果

函数式组件：

类式组件：

### 2.1.3. 注意

\1. 组件名必须首字母大写

\2. 虚拟 DOM 元素只能有一个根元素

\3. 虚拟 DOM 元素必须有结束标签

### 2.1.4. 渲染类组件标签的基本流程

\1. React 内部会创建组件实例对象

\2. 调用 render()得到虚拟 DOM, 并解析为真实 DOM

\3. 插入到指定的页面元素内部

## 2.2. 组件三大核心属性 1: state

### 2.2.1. 效果

_需求**:**定义一个展示天气信息的组件_
_1.**默认展示天气炎热**或\*\*凉爽_
_2. 点击文字切换天气_

### 2.2.2. 理解

\1. state 是组件对象最重要的属性, 值是对象(可以包含多个 key-value 的组合)

\2. 组件被称为"状态机", 通过更新组件的 state 来更新对应的页面显示(重新渲染组件)

### 2.2.3. 强烈注意

\1. 组件中 render 方法中的 this 为组件实例对象

\2. 组件自定义的方法中 this 为 undefined ，如何解决？

a) 强制绑定 this: 通过函数对象的 bind()

b) 赋值语句+箭头函数

\3. 状态数据，不能直接修改或更新，必须通过 this.setState 进行修改

### 2.2.4 补充

#### -组件状态

组件中数据的来源

* 属性: 是由外接传递过来的
* 状态: 是自己的, 只能通过 setState 来改变状态

只有类声明的组件中, 才有状态

#### -修改状态

除了 constructor 之外的其它地方, 如果需要修改状态, 都只能通过 this.setState 方法

这个方法传入的第一个参数, 可以是一个对象, 也可以是一个函数

* 是一个对象，这个对象中包含需要改变的属性，它会与原有的状态进行合并
* 是一个函数，接收第一个参数是 prevState，上一个状态对象，第二个参数是 props

这个方法的第二个参数，是一个回调函数，在状态改变之后执行。

如果下一个状态依赖于上一个状态，需要写成函数的方式

#### -关于 setState

* 在 react 组件的生命周期或事件的绑定中，setState 是异步的
* 在定时器或原生的事件中，setState 不一定是异步的

// state.count 当前为 0

componentDidMount(){ this.setState({count: this.state.count + 1}); 

console.log(this.state.count) } // 输出 0

在元素渲染章节中，我们只了解了一种更新 UI 界面的方法。通过调用 ReactDOM.render() 来修改我们想要渲染的元素

```
function tick() {   const element = (     <div>       <h1>Hello, world!</h1>       <h2>{new Date().toLocaleTimeString()}.</h2>     </div>   );   ReactDOM.render(element, document.querySelector('#root')); } setInterval(tick, 1000);
```

本节学习如何封装真正可复用的 Clock 组件

```jsx
import React, { Component } from "react"
import ReactDOM from "react-dom" // 学习如何封装真正可复用的Clock组件。 
class Clock extends Component {     constructor(props) {         super(props);         this.state = {             date: new Date().toLocaleString()         }     }
     componentDidMount() {         this.timer = setInterval(() => {             // 注意1 不能直接修改state             // 
     this.state.date = new Date(); //错误             // 注意2： setState()是异步的             
     this.setState({                 date: new Date().toLocaleString()             })         }, 1000);     }
          componentWillUnmount() {         clearInterval(this.timer);     }     render() {
                     // 修改状态之后,会重新调用
                     render         return (             <div>                 <h3>当前时间为:{this.state.date}</h3>             </div>         );     } } ReactDOM.render(<Clock />, document.querySelector('#root'));
```

### 生命周期

作者：前端开发小马哥
链接：https://juejin.cn/post/6898512934100533261
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 2.3. 组件三大核心属性 2: props

### 2.3.1. 效果

_需求**:**自定义用来显示一个人员信息的组件_

_1.\*\*姓名必须指定，且为字符串类型；_

_2.\*\*性别为字符串类型，如果性别没有指定，默认为男_

_3.**年龄为字符串类型，且为数字类型，默认值为**18_

### 2.3.2. 理解

\1. 每个组件对象都会有 props(properties 的简写)属性

\2. 组件标签的所有属性都保存在 props 中

### 2.3.3. 作用

\1. 通过标签属性从组件外向组件内传递变化的数据

\2. 注意: 组件内部不要修改 props 数据

### 2.3.4. 编码操作

\1. 内部读取某个属性值

**this**.**props**.**name**

\2. 对 props 中的属性值进行类型限制和必要性限制

第一种方式（React v15.5 开始已弃用）：

_Person_.**propTypes** = { **name**: **React**.**PropTypes**.**string**.isRequired, **age**: **React**.**PropTypes**.**number** }

第二种方式（新）：使用 prop-types 库进限制（需要引入 prop-types 库）

_Person_.**propTypes** = { **name**: **PropTypes**.**string**.isRequired, **age**: **PropTypes**.**number**. }

\3. 扩展属性: 将对象的所有属性通过 props 传递

<**Person** {...**\*person**\*\*\*\*\*}/>

\4. 默认属性值：

Person.**defaultProps** = { **age**: 18, **sex**:**'\*\***男' \*\* }

\5.

**constructor**(props){ **super**(props) **console**.log(props)_//**打印所有属性** _ }

组件类的构造函数

## 2.4. 组件三大核心属性 3: refs 与事件处理

### 2.4.1. 效果

_需求**:**自定义组件**, **功能说明如下\*\*:_

_1.**点击按钮**, \*\*提示第一个输入框中的值_

\*2.**当第\*\***2\***\*个输入框失去焦点时**, \*_提示这个输入框中的值_

效果如下：

### 2.4.2. 理解

组件内的标签可以定义 ref 属性来标识自己，相当于原生 id，可以通过 this.refs. XX 获取数据

### 2.4.3. 编码

\1. 字符串形式的 ref

**<input\*\***ref\***\*="input1"/>**

\2. 回调形式的 ref

**<input\*\***ref\***\*={(c)=>{this.input1** **=\*\***c\***\*}}/>**

\3. createRef 创建 ref 容器·

**myRef\*\***=\***\*React\*\***.createRef()\*\* **<input\*\***ref\***\*={this.myRef}/>**

### 2.4.4. 事件处理

\1. 通过 onXxx 属性指定事件处理函数(注意大小写)

\1) React 使用的是自定义(合成)事件, 而不是使用的原生 DOM 事件

\2) React 中的事件是通过事件委托方式处理的(委托给组件最外层的元素)

\2. 通过 event.target 得到发生事件的 DOM 元素对象

## 2.5. 收集表单数据

### 2.5.1. 效果

_需求**:**定义一个包含表单的组件_

_输入用户名密码后**, **点击登录提示输入信息_

### 2.5.2. 理解

包含表单的组件分类

\1. 受控组件

\2. 非受控组件

## 2.6. 组件的生命周期

### 2.6.1. 效果

\*需求\***\*:\*\***定义组件实现以下功能：\*

_1.**让指定的文本做显示**/\*\*隐藏的渐变动画_

_2.**从完全可见，到彻底消失，耗时**2S_

_3.\*\*点击“不活了”按钮从界面中卸载组件_

### 2.6.2. 理解

\1. 组件从创建到死亡它会经历一些特定的阶段。

\2. React 组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。

\3. 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。

### 2.6.3. 生命周期流程图(旧)

不想对状态进行更改：强制更新 forceUpdate()

正常更新：setState()

父组件 render:

**render**(){

return(

我是 A 组件

换车

```jsx
<B carName={this.state.carName}/>
```

</div>

)

}

**生命周期的三个阶段（旧）**

\1. 初始化阶段: 由 ReactDOM.render()触发---初次渲染

\1. constructor()

\2. componentWillMount()

\3. render()

\4. componentDidMount() =====> 常用

一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息

\2. 更新阶段: 由组件内部 this.setSate()或父组件 render 触发

\1. shouldComponentUpdate()

\2. componentWillUpdate()

\3. render() =====> 必须使用的一个

\4. componentDidUpdate()

\3. 卸载组件: 由 ReactDOM.unmountComponentAtNode()触发

\1. componentWillUnmount() =====> 常用

一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

### 2.6.4. 生命周期流程图(新)

生命周期的三个阶段（新）

**1.\*\***初始化阶段:\*\* 由 ReactDOM.render()触发---初次渲染

\1. constructor()

**2.\*\***getDerivedStateFromProps =>\***\*返回状态对象或者 null，能收到参数** **props\*\***，适用于在 state 值在任何时候都取决于 props, 那么可以使用 getDerivedStateFromProps\*\*

\3. render()

\4. componentDidMount() =>一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息

\5.

**2.\*\***更新阶段:\*\* 由组件内部 this.setSate()或父组件重新 render 触发

**1.\*\***getDerivedStateFromProps\*\*

\2. shouldComponentUpdate()

\3. render()

**4.\*\***getSnapshotBeforeUpdate //\***\*在更新之前获取快照，在发生更改前获取 DOM 信息**

\5. componentDidUpdate()

**3.\*\***卸载组件:\*\* 由 ReactDOM.unmountComponentAtNode()触发

\1. componentWillUnmount() =====> 常用

一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

### 2.6.5. 重要的勾子

\1. render：初始化渲染或更新渲染调用

\2. componentDidMount：开启监听, 发送 ajax 请求

\3. componentWillUnmount：做一些收尾工作, 如: 清理定时器

### 2.6.6. 即将废弃的勾子

\1. componentWillMount

\2. componentWillReceiveProps

\3. componentWillUpdate

现在使用会出现警告，下一个大版本需要加上 UNSAFE\_前缀才能使用，以后可能会被彻底废弃，不建议使用。

## 2.7. 虚拟 DOM 与 DOM Diffing 算法

### 2.7.1. 效果

\*需求：验证虚拟\***\*DOM Diffing\*\***算法的存在\*

### 2.7.2. 基本原理图

# 第 3 章：React 应用(基于 React 脚手架)

## 3.1. 使用 create-react-app 创建 react 应用

### 3.1.1. react 脚手架

\1. xxx 脚手架: 用来帮助程序员快速创建一个基于 xxx 库的模板项目

\1. 包含了所有需要的配置（语法检查、jsx 编译、devServer…）

\2. 下载好了所有相关的依赖

\3. 可以直接运行一个简单效果

\2. react 提供了一个用于创建 react 项目的脚手架库: create-react-app

\3. 项目的整体技术架构为: react + webpack + es6 + eslint

\4. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

### 3.1.2. 创建项目并启动

**第一步**，全局安装：npm i -g create-react-app

**第二步**，切换到想创项目的目录，使用命令：create-react-app hello-react

**第三步**，进入项目文件夹：cd hello-react

**第四步**，启动项目：npm start

### 3.1.3. react 脚手架项目结构

public ---- 静态资源文件夹

favicon.icon ------ 网站页签图标

**index.html --------\*\***主页面, 只有一个 html 文件\*\*

logo192.png ------- logo 图

logo512.png ------- logo 图

manifest.json ----- 应用加壳的配置文件

robots.txt -------- 爬虫协议文件

src ---- 源码文件夹

App.css -------- App 组件的样式

**App.js --------- App\*\***组件，所有应用的外壳组件\*\*

App.test.js ---- 用于给 App 做测试

index.css ------ 样式，组件引入，渲染 index.html 中定义的容器

使用<React. StrictMode></ React. StrictMode>检查

**index.js -------\*\***入口文件\*\*

logo.svg ------- logo 图

reportWebVitals.js

--- 页面性能分析文件(需要 web-vitals 库的支持)记录页面上的性能，web-vital 库进行性能分析

setupTests.js

---- 组件单元测试的文件(需要 jest-dom 库的支持)

%PIBLIC_URL%代表 public 文件夹的路径

### Rcc: 类式组件

Rfc：函数式组件

### 3.1.4. 功能界面的组件化编码流程（通用）

\1. 拆分组件: 拆分界面, 抽取组件

\2. 实现静态组件: 使用组件实现静态页面效果

\3. 实现动态组件

3.1 动态显示初始化数据

状态放在哪里？

3.1.1 数据类型

3.1.2 数据名称

3.1.2 保存在哪个组件?

3.2 交互(从绑定事件监听开始)

## 3.2. 组件的组合使用-TodoList

_功能**:**组件化实现此功能_

\*1.**显示所有\*\***todo\*_\*\*列表_

_2.**输入文本**, **点击按钮显示到列表的首位**, \*\*并清除输入的文本_

reactDOM.render 之执行一次

index.html=>index.js(App.js 页面展现在页面)=>App.js

子给父传递信息：夫给子传递一个函数 用 props 传递

安装 nanoid

npm i nanoid

nanoid 是一个函数，每一次生成的时候都会生成一个字符串，并且可以保证是唯一的

# 第 4 章：React ajax

## React ajax 理解

### 4.1.1. 前置说明

\1. React 本身只关注于界面, 并不包含发送 ajax 请求的代码

\2. 前端应用需要通过 ajax 请求与后台进行交互(json 数据)

\3. react 应用中需要集成第三方 ajax 库(或自己封装)

### 4.1.2. 常用的 ajax 请求库

\1. jQuery: 比较重, 如果需要另外引入不建议使用

\2. axios: 轻量级, 建议使用

\1) 封装 XmlHttpRequest 对象的 ajax

\2) promise 风格

\3) 可以用在浏览器端和 node 服务器端

## 4.2. axios

### 4.2.1. 文档

https://github.com/axios/axios

### 4.2.2. 相关 API

\1) GET 请求

```
axios.get('/user?ID=12345') .then(function (response) {   console.log(response.data); }) .catch(function (error) { console.log(error); }); axios.get('/user', { params: { ID: 12345 } }) .then(function (response) { console.log(response); }) .catch(function (error) { console.log(error); });
```

\2) POST 请求

```
axios.post('/user', { firstName: 'Fred', lastName: 'Flintstone' }) .then(function (response) { console.log(response); }) .catch(function (error) { console.log(error); });
```

## 4.3. 案例—github 用户搜索

### 4.3.1. 效果

请求地址: https://api.github.com/search/users?q=xxxxxx

## 4.4. 消息订阅-发布机制

\1. 工具库: PubSubJS

\2. 下载: npm install pubsub-js --save

\3. 使用:

\1) import PubSub from 'pubsub-js' //引入

\2) PubSub.subscribe('delete', function(data){ }); //订阅

\3) PubSub.publish('delete', data) //发布消息

## 4.5. 扩展：Fetch

### 4.5.1. 文档

\1. https://github.github.io/fetch/

\2. https://segmentfault.com/a/1190000003810652

### 4.5.2. 特点

\1. fetch: 原生函数，不再使用 XmlHttpRequest 对象提交 ajax 请求

\2. 老版本浏览器可能不支持

### 4.5.3. 相关 API

\1) GET 请求

fetch(url).then(function(response) { return response.json() }).then(function(data) { console.log(data) }).catch(function(e) { console.log(e) }); 

\2) POST 请求

fetch(url, { method: "POST", body: JSON.stringify(data), }).then(function(data) { console.log(data) }).catch(function(e) { console.log(e) })

# 第 5 章：React 路由

# 第 6 章：React UI 组件库

## 6.1. 流行的开源 React UI 组件库

### 6.1.1. material-ui(国外)

\1. 官网: http://www.material-ui.com/#/

\2. github: https://github.com/callemall/material-ui

### 6.1.2. ant-design(国内蚂蚁金服)

\1. 官网: https://ant.design/index-cn

\2. Github: https://github.com/ant-design/ant-design/

# 第 7 章：redux

## 7.1. redux 理解

### 7.1.1. 学习文档

\1. 英文文档: https://redux.js.org/

\2. 中文文档: http://www.redux.org.cn/

\3. Github: https://github.com/reactjs/redux

### 7.1.2. redux 是什么

\1. redux 是一个专门用于做**状态管理**的 JS 库(不是 react 插件库)。

\2. 它可以用在 react, angular, vue 等项目中, 但基本与 react 配合使用。

\3. 作用: 集中式管理 react 应用中多个组件**共享**的状态。

### 7.1.3. 什么情况下需要使用 redux

\1. 某个组件的状态，需要让其他组件可以随时拿到（共享）。

\2. 一个组件需要改变另一个组件的状态（通信）。

\3. 总体原则：能不用就不用, 如果不用比较吃力才考虑使用。

### 7.1.4. redux 工作流程

## 7.2. redux 的三个核心概念

### 7.2.1. action

\1. 动作的对象

\2. 包含 2 个属性

l type：标识属性, 值为字符串, 唯一, 必要属性

l data：数据属性, 值类型任意, 可选属性

\3. 例子：{ type: 'ADD_STUDENT', data:{name: 'tom', age:18} }

### 7.2.2. reducer

\1. 用于初始化状态、加工状态。

\2. 加工时，根据旧的 state 和 action， 产生新的 state 的**纯函数\*\***。\*\*

### 7.2.3. store

\1. 将 state、action、reducer 联系在一起的对象

\2. 如何得到此对象?

\1) import {createStore} from 'redux'

\2) import reducer from './reducers'

\3) const store = createStore(reducer)

\3. 此对象的功能?

\1) getState(): 得到 state

\2) dispatch(action): 分发 action, 触发 reducer 调用, 产生新的 state

\3) subscribe(listener): 注册监听, 当产生了新的 state 时, 自动调用

## 7.3. redux 的核心 API

### 7.3.1. createstore()

作用：创建包含指定 reducer 的 store 对象

### 7.3.2. store 对象

\1. 作用: redux 库最核心的管理对象

\2. 它内部维护着:

\1) state

\2) reducer

\3. 核心方法:

\1) getState()

\2) dispatch(action)

\3) subscribe(listener)

\4. 具体编码:

\1) store.getState()

\2) store.dispatch({type:'INCREMENT', number})

\3) store.subscribe(render)

### 7.3.3. applyMiddleware()

作用：应用上基于 redux 的中间件(插件库)

### 7.3.4. combineReducers()

作用：合并多个 reducer 函数

## 7.4. 使用 redux 编写应用

**效果**

## 7.5. redux 异步编程

### 7.5.1 理解：

\1. redux 默认是不能进行异步处理的, 

\2. 某些时候应用中需要在**redux\*\***中执行异步任务\*\*(ajax, 定时器)

### 7.5.2. 使用异步中间件

npm install --save redux-thunk

## 7.6. react-redux

### 7.6.1. 理解

\1. 一个 react 插件库

\2. 专门用来简化 react 应用中使用 redux

### 7.6.2. react-Redux 将所有组件分成两大类

\1. UI 组件

\1) 只负责 UI 的呈现，不带有任何业务逻辑

\2) 通过 props 接收数据(一般数据和函数)

\3) 不使用任何 Redux 的 API

\4) 一般保存在 components 文件夹下

\2. 容器组件

\1) 负责管理数据和业务逻辑，不负责 UI 的呈现

\2) 使用 Redux 的 API

\3) 一般保存在 containers 文件夹下

### 7.6.3. 相关 API

\1. Provider：让所有组件都可以得到 state 数据

**<**Provider **store** ={store}> **<**App **/></**Provider>

\2. connect：用于包装 UI 组件生成容器组件

**import{connect}from'react-redux'connect**( **mapStateToprops**, **mapDispatchToProps)(**Counter)

\3. mapStateToprops：将外部的数据（即 state 对象）转换为 UI 组件的标签属性

**constmapStateToprops=function(**state) { **return{value:state}}**

\4. mapDispatchToProps：将分发 action 的函数转换为 UI 组件的标签属性

## 7.7. 使用上 redux 调试工具

### 7.7.1. 安装 chrome 浏览器插件

### 7.7.2. 下载工具依赖包

npm install --save-dev redux-devtools-extension

## 7.8. 纯函数和高阶函数

### 7.8.1. 纯函数

\1. 一类特别的函数: 只要是同样的输入(实参)，必定得到同样的输出(返回)

\2. 必须遵守以下一些约束

\1) 不得改写参数数据

\2) 不会产生任何副作用，例如网络请求，输入和输出设备

\3) 不能调用 Date.now()或者 Math.random()等不纯的方法

\3. redux 的 reducer 函数必须是一个纯函数

### 7.8.2. 高阶函数

\1. 理解: 一类特别的函数

\1) 情况 1: 参数是函数

\2) 情况 2: 返回是函数

\2. 常见的高阶函数:

\1) 定时器设置函数

\2) 数组的 forEach()/map()/filter()/reduce()/find()/bind()

\3) promise

\4) react-redux 中的 connect 函数

\3. 作用: 能实现更加动态, 更加可扩展的功能 babel➕ 运算符{...}. 只能适用于标签属性传递

构造器是否接收 props，是否传递给 super，取决于：是否希望在构造器中通过 this 访问 props

必须要将一个函数作为事件的回调

render 在每次挂载的时候调用 （调用 1+n 次）

经典面试题:

1). react/vue 中的 key 有什么作用？（key 的内部原理是什么？）

2). 为什么遍历列表时，key 最好不要用 index?

\1. 虚拟 DOM 中 key 的作用：有没有渲染，渲染过就直接使用

1). 简单的说: key 是虚拟 DOM 对象的标识, 在更新显示时 key 起着极其重要的作用。

2). 详细的说: 当状态中的数据发生变化时，react 会根据【新数据】生成【新的虚拟 DOM】, 

随后 React 进行【新虚拟 DOM】与【旧虚拟 DOM】的 diff 比较，比较规则如下：

a. 旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key：

(1). 若虚拟 DOM 中内容没变, 直接使用之前的真实 DOM

(2). 若虚拟 DOM 中内容变了, 则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM

b. 旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key

根据数据创建新的真实 DOM，随后渲染到到页面

\2. 用 index 作为 key 可能会引发的问题：

\1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:

会产生没有必要的真实 DOM 更新 ==> 界面效果没问题, 但效率低。

\2. 如果结构中还包含输入类的 DOM：

会产生错误 DOM 更新 ==> 界面有问题。

\3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，

仅用于渲染列表用于展示，使用 index 作为 key 是没有问题的。

\3. 开发中如何选择 key?:

1. 最好使用每条数据的唯一标识作为 key, 比如 id、手机号、身份证号、学号等唯一值。

2. 如果确定只是简单的展示数据，用 index 也是可以的。

\*/

/\*

慢动作回放----使用 index 索引值作为 key

初始数据：

{id:1, name:'小张', age:18}, 

{id:2, name:'小李', age:19}, 

初始的虚拟 DOM：

<li key=0>小张---18<input type="text"/></li>

<li key=1>小李---19<input type="text"/></li>

更新后的数据：

{id:3, name:'小王', age:20}, 

{id:1, name:'小张', age:18}, 

{id:2, name:'小李', age:19}, 

更新数据后的虚拟 DOM：

<li key=0>小王---20<input type="text"/></li>

<li key=1>小张---18<input type="text"/></li>

<li key=2>小李---19<input type="text"/></li>

\-----------------------------------------------------------------

慢动作回放----使用 id 唯一标识作为 key

初始数据：

{id:1, name:'小张', age:18}, 

{id:2, name:'小李', age:19}, 

初始的虚拟 DOM：

<li key=1>小张---18<input type="text"/></li>

<li key=2>小李---19<input type="text"/></li>

更新后的数据：

{id:3, name:'小王', age:20}, 

{id:1, name:'小张', age:18}, 

{id:2, name:'小李', age:19}, 

更新数据后的虚拟 DOM：

<li key=3>小王---20<input type="text"/></li>

<li key=1>小张---18<input type="text"/></li>

<li key=2>小李---19<input type="text"/></li>

# 第八章.hoooks

## React Hooks 是什么？

Hooks 顾名思义，字面意义上来说就是 React 钩子的概念。通过一个 case 我们对 React Hooks 先有一个第一印象。

假设现在要实现一个计数器的组件。如果使用组件化的方式，我们需要做的事情相对更多一些，比如说声明 state，编写计数器的方法等，而且需要理解的概念可能更多一些，比如 Javascript 的类的概念，this 上下文的指向等。

<!-- more -->

[示例](https://codepen.io/x-cold/pen/JqjZKR)

```jsx
import React, { Component } from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component {
  state = {
    count: 0,
  }

  countUp = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  countDown = () => {
    const { count } = this.state
    this.setState({ count: count - 1 })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button onClick={this.countUp}>+</button>
        <h1>{count}</h1>
        <button onClick={this.countDown}>-</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"))
```

使用 React Hooks，我们可以这么写。

[示例](https://codepen.io/x-cold/pen/ZNEReY)

```jsx
import React, { useState } from "react"
import ReactDOM from "react-dom"

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById("root"))
```

通过上面的例子，显而易见的是 React Hooks 提供了一种简洁的、函数式（FP）的程序风格，通过纯函数组件和可控的数据流来实现状态到 UI 的交互（MVVM）。

### Hooks API

* [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)

* - `useState`
  + `useEffect`

* - `useContext`

* [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)

* - `useReducer`
  + `useCallback`

* - `useMemo`
  + `useRef`

* - `useImperativeHandle`
  + `useLayoutEffect`

* - `useDebugValue`

### useState

useState 是最基本的 API，它传入一个初始值，每次函数执行都能拿到新值。

```jsx
import React, { useState } from "react"
import ReactDOM from "react-dom"

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById("root"))
```

需要注意的是，通过 useState 得到的状态 count，在 Counter 组件中的表现为一个常量，每一次通过 setCount 进行修改后，又重新通过 useState 获取到一个新的常量。

### useReducer

useReducer 和 useState 几乎是一样的，需要外置外置 reducer (全局)，通过这种方式可以对多个状态同时进行控制。仔细端详起来，其实跟 redux 中的数据流的概念非常接近。

```jsx
import { useState, useReducer } from "react"
import ReactDOM from "react-dom"

function reducer(state, action) {
  switch (action.type) {
    case "up":
      return { count: state.count + 1 }
    case "down":
      return { count: state.count - 1 }
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 1 })
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "up" })}>+</button>
      <button onClick={() => dispatch({ type: "down" })}>+</button>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById("root"))
```

### useEffect

一个至关重要的 Hooks API，顾名思义，useEffect 是用于处理各种状态变化造成的副作用，也就是说只有在特定的时刻，才会执行的逻辑。相当于 componentDidMount（）和 componentDidUpdate（）

当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— **包括**第一次渲染的时候。（我们会在[使用 Effect Hook](https://react.docschina.org/docs/hooks-effect.html) 中跟 class 组件的生命周期方法做更详细的对比。）

副作用函数还可以通过返回一个函数来指定如何“清除”副作用。

```jsx
import { useState, useEffect } from "react"
import ReactDOM from "react-dom"

function Example() {
  const [count, setCount] = useState(0)

  // => componentDidMount/componentDidUpdate
  useEffect(() => {
    // update
    document.title = `You clicked ${count} times`
    // => componentWillUnMount
    return function cleanup() {
      document.title = "app"
    }
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById("root"))
```

### useMemo

useMemo 主要用于渲染过程优化，两个参数依次是计算函数（通常是组件函数）和依赖状态列表，当依赖的状态发生改变时，才会触发计算函数的执行。如果没有指定依赖，则每一次渲染过程都会执行该计算函数。

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

```jsx
import { useState, useMemo } from "react"
import ReactDOM from "react-dom"

function Time() {
  return <p>{Date.now()}</p>
}

function Counter() {
  const [count, setCount] = useState(0)

  const memoizedChildComponent = useMemo(
    (count) => {
      return <Time />
    },
    [count]
  )

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{memoizedChildComponent}</div>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById("root"))
```

### useContext

context 是在外部 create ，内部 use 的 state，它和全局变量的区别在于，如果多个组件同时 useContext，那么这些组件都会 rerender，如果多个组件同时 useState 同一个全局变量，则只有触发 setState 的当前组件 rerender。

[示例-未使用 useContext](https://codepen.io/x-cold/pen/OYJGKQ)

```jsx
import { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

// 1. 使用 createContext 创建上下文
const UserContext = createContext()

// 2. 创建 Provider
const UserProvider = (props) => {
  let [username, handleChangeUsername] = useState("")
  return (
    <UserContext.Provider value={{ username, handleChangeUsername }}>
      {props.children}
    </UserContext.Provider>
  )
}

// 3. 创建 Consumer
const UserConsumer = UserContext.Consumer

// 4. 使用 Consumer 包裹组件
const Pannel = () => (
  <UserConsumer>
    {({ username, handleChangeUsername }) => (
      <div>
        <div>user: {username}</div>
        <input onChange={(e) => handleChangeUsername(e.target.value)} />
      </div>
    )}
  </UserConsumer>
)

const Form = () => <Pannel />

const App = () => (
  <div>
    <UserProvider>
      <Form />
    </UserProvider>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
```

[示例 - 使用 useContext](https://codepen.io/x-cold/pen/GaRLqZ?editors=0010)

```jsx
import { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

// 1. 使用 createContext 创建上下文
const UserContext = createContext()

// 2. 创建 Provider
const UserProvider = (props) => {
  let [username, handleChangeUsername] = useState("")
  return (
    <UserContext.Provider value={{ username, handleChangeUsername }}>
      {props.children}
    </UserContext.Provider>
  )
}

const Pannel = () => {
  const { username, handleChangeUsername } = useContext(UserContext) // 3. 使用 Context
  return (
    <div>
      <div>user: {username}</div>
      <input onChange={(e) => handleChangeUsername(e.target.value)} />
    </div>
  )
}

const Form = () => <Pannel />

const App = () => (
  <div>
    <UserProvider>
      <Form />
    </UserProvider>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
```

### useRef

useRef 返回一个可变的 ref 对象，其 .current 属性初始化为传递的参数（initialValue）。返回的对象将持续整个组件的生命周期。事实上 useRef 是一个非常有用的 API，许多情况下，我们需要保存一些改变的东西，它会派上大用场的。

[示例](https://codepen.io/x-cold/pen/EzxMPw)

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
```

## React 状态共享方案

说到状态共享，最简单和直接的方式就是通过 props 逐级进行状态的传递，这种方式耦合于组件的父子关系，一旦组件嵌套结构发生变化，就需要重新编写代码，维护成本非常昂贵。随着时间的推移，官方推出了各种方案来解决状态共享和代码复用的问题。

### Mixins

![img](https://cdn.nlark.com/yuque/0/2019/png/103147/1557132050699-0f447719-f393-477a-9aa3-8d792ca5cd5f.png)

React 中，只有通过 createClass 创建的组件才能使用 mixins。这种高耦合，依赖难以控制，复杂度高的方式随着 ES6 的浪潮逐渐淡出了历史舞台。

### HOC

高阶组件源于函数式编程，由于 React 中的组件也可以视为函数（类），因此天生就可以通过 HOC 的方式来实现代码复用。可以通过属性代理和反向继承来实现，HOC 可以很方便的操控渲染的结果，也可以对组件的 props / state 进行操作，从而可以很方便的进行复杂的代码逻辑复用。

```jsx
import React from "react"
import PropTypes from "prop-types"

// 属性代理
class Show extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    visible: PropTypes.bool,
  }

  render() {
    const { visible, children } = this.props
    return visible ? children : null
  }
}

// 反向继承
function Show2(WrappedComponent) {
  return class extends WrappedComponent {
    render() {
      if (this.props.visible === false) {
        return null
      } else {
        return super.render()
      }
    }
  }
}

function App() {
  return <Show visible={Math.random() > 0.5}>hello</Show>
}
```

Redux 中的状态复用是一种典型的 HOC 的实现，我们可以通过 compose 来将数据组装到目标组件中，当然你也可以通过装饰器的方式进行处理。

```jsx
import React from "react"
import { connect } from "react-redux"

// use decorator
@connect((state) => ({ name: state.user.name }))
class App extends React.Component {
  render() {
    return <div>hello, {this.props.name}</div>
  }
}

// use compose
connect((state) => ({ name: state.user.name }))(App)
```

### Render Props

显而易见，renderProps 就是一种将 render 方法作为 props 传递到子组件的方案，相比 HOC 的方案，renderProps 可以保护原有的组件层次结构。

```jsx
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

// 与 HOC 不同，我们可以使用具有 render prop 的普通组件来共享代码
class Mouse extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
  }

  state = { x: 0, y: 0 }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Mouse
        render={({ x, y }) => (
          // render prop 给了我们所需要的 state 来渲染我们想要的
          <h1>
            The mouse position is ({x}, {y})
          </h1>
        )}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
```

### Hooks

通过组合 Hooks API 和 React 内置的 Context，从前面的示例可以看到通过 Hook 让组件之间的状态共享更清晰和简单。

## React Hooks 设计理念

### 基本原理

![img](https://cdn.nlark.com/yuque/0/2019/png/103147/1557141237856-51f92576-f6f5-4dc3-a38f-9ef3fc841590.png)

```jsx
function FunctionalComponent() {
  const [state1, setState1] = useState(1)
  const [state2, setState2] = useState(2)
  const [state3, setState3] = useState(3)
}
```

![img](https://cdn.nlark.com/yuque/0/2019/png/103147/1557141338783-bb968286-9762-4a3a-8bc0-4d52b717ae6b.png)

```javascript
{
    memoizedState: 'foo',
    next: {
        memoizedState: 'bar',
        next: {
            memoizedState: 'bar',
            next: null
        }
    }
}
```

### 函数式贯彻到底

#### capture props

函数组件天生就是支持 props 的，基本用法上和 class 组件没有太大的差别。需要注意的两个区别是：

* class 组件 props 挂载在 this 上下文中，而函数式组件通过形参传入；
* 由于挂载位置的差异，class 组件中如果 this 发生了变化，那么 this.props 也会随之改变；而在函数组件里 props 始终是不可变的，因此遵守 capture value 原则（即获取的值始终是某一时刻的），Hooks 也遵循这个原则。

通过一个[示例](https://codesandbox.io/s/pjqnl16lm7)来理解一下 capture value，我们可以通过 useRef 来规避 capture value，因为 useRef 是可变的。

#### state

|          | class 组件                                       | 函数组件                                                                                           |
| -------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 创建状态 | this.state = {}                                  | useState, useReducer                                                                               |
| 修改状态 | this.setState()                                  | set function                                                                                       |
| 更新机制 | 异步更新，多次修改合并到上一个状态，产生一个副本 | 同步更新，直接修改为目标状态                                                                       |
| 状态管理 | 一个 state 集中式管理多个状态                    | 多个 state，可以通过 useReducer 进行状态合并（手动）                                               |
| 性能     | 高                                               | 如果 useState 初始化状态需要通过非常复杂的计算得到，请使用函数的声明方式，否则每次渲染都会重复执行 |
|          |                                                  |                                                                                                    |

#### 生命周期

* componentDidMount / componentDidUpdate / componentWillUnMount

useEffect 在每一次渲染都会被调用，稍微包装一下就可以作为这些生命周期使用；

* shouldComponentUpdate

通常我们优化组件性能时，会优先采用纯组件的方式来减少单个组件的渲染次数。

```jsx
class Button extends React.PureComponent {}
```

React Hooks 中可以采用 useMemo 代替，可以实现仅在某些数据变化时重新渲染组件，等同于自带了 shallowEqual 的 shouldComponentUpdate。

#### 强制渲染 forceUpdate

由于默认情况下，每一次修改状态都会造成重新渲染，可以通过一个不使用的 set 函数来当成 forceUpdate。

```javascript
const forceUpdate = () => useState(0)[1]
```

### 实现原理

## 基于 Hooks，增强 Hooks

### 来一套组合拳吧！

由于每一个 Hooks API 都是纯函数的概念，使用时更关注输入 (input) 和输出 (output)，因此可以更好的通过组装函数的方式，对不同特性的基础 Hooks API 进行组合，创造拥有新特性的 Hooks。

* useState 维护组件状态
* useEffect 处理副作用

* useContext 监听 provider 更新变化

### useDidMount

```jsx
import { useEffect } from "react"

const useDidMount = (fn) => useEffect(() => fn && fn(), [])

export default useDidMount
```

###

### useDidUpdate

```jsx
import { useEffect, useRef } from "react"

const useDidUpdate = (fn, conditions) => {
  const didMoutRef = useRef(false)
  useEffect(() => {
    if (!didMoutRef.current) {
      didMoutRef.current = true
      return
    }
    // Cleanup effects when fn returns a function
    return fn && fn()
  }, conditions)
}

export default useDidUpdate
```

### useWillUnmount

在讲到 useEffect 时已经提及过，其允许返回一个 cleanup 函数，组件在取消挂载时将会执行该 cleanup 函数，因此 useWillUnmount 也能轻松实现~

```javascript
import {
    useEffect
} from "react"

const useWillUnmount = (fn) => useEffect(() => () => fn && fn(), [])

export default useWillUnmount
```

### useHover

[示例](https://codepen.io/x-cold/pen/joOXxK)

```jsx
// lib/onHover.js
import { useState } from "react"

const useHover = () => {
  const [hovered, set] = useState(false)
  return {
    hovered,
    bind: {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  }
}

export default useHover
```

```jsx
import { useHover } from "./lib/onHover.js"

function Hover() {
  const { hovered, bind } = useHover()
  return (
    <div>
      <div {...bind}>
        hovered:
        {String(hovered)}
      </div>
    </div>
  )
}
```

### useField

[示例](https://codepen.io/x-cold/pen/rgNPNB)

```jsx
// lib/useField.js

import { useState } from "react"

const useField = (initial) => {
  const [value, set] = useState(initial)

  return {
    value,
    set,
    reset: () => set(initial),
    bind: {
      value,
      onChange: (e) => set(e.target.value),
    },
  }
}

export default useField
```

```jsx
import { useField } from 'lib/useField';

function Input {
  const { value, bind } = useField('Type Here...');

  return (
    <div>
      input text:
      {value}
      <input type="text" {...bind} />
    </div>
  );
}

function Select() {
  const { value, bind } = useField('apple')
  return (
    <div>
      selected:
      {value}
      <select {...bind}>
        <option value="apple">apple</option>
        <option value="orange">orange</option>
      </select>
    </div>
  );
}
```

### useRequest
生命周期
useRequest 提供了以下几个生命周期配置项，供你在异步函数的不同阶段做一些处理。
● onBefore：请求之前触发
● onSuccess：请求成功触发
● onError：请求失败触发
● onFinally：请求完成触发
刷新（重复上一次请求）
useRequest 提供了 refresh 和 refreshAsync 方法，使我们可以使用上一次的参数，重新发起请求。
假如在读取用户信息的场景中
1. 我们读取了 ID 为 1 的用户信息 run(1)
2. 我们通过某种手段更新了用户信息
3. 我们想重新发起上一次的请求，那我们就可以使用 refresh 来代替 run(1)，这在复杂参数的场景中是非常有用的
```js
import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React, { useEffect } from 'react';

function getUsername(id: number): Promise<string> {
  console.log('use-request-refresh-id', id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export default () => {
  const { data, loading, run, refresh } = useRequest((id: number) => getUsername(id), {
    manual: true,
  });

  useEffect(() => {
    run(1);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <p>Username: {data}</p>
      <button onClick={refresh} type="button">
        Refresh
      </button>
    </div>
  );
};
```
#### 立即变更数据
useRequest 提供了 mutate, 支持立即修改 useRequest 返回的 data 参数。
mutate 的用法与 React.setState 一致，支持 mutate(newData) 和 mutate((oldData) => newData) 两种写法。
下面的示例，我们演示了一种 mutate 的应用场景。
我们修改了用户名，但是我们不希望等编辑接口调用成功之后，才给用户反馈。而是直接修改页面数据，同时在背后去调用修改接口，等修改接口返回之后，另外提供反馈。

基础网络请求
```js
import { useRequest } from '@umijs/hooks';  function getUsername() {   
    return Promise.resolve('jack'); }  
export default () => {   
    const { data, error, loading } = useRequest(getUsername)      
    if (error) return <div>failed to load</div>   
    if (loading) return <div>loading...</div>   
    return <div>Username: {data}</div> 
} 
```
这是一个最简单的网络请求示例。在这个例子中 useRequest 接收了一个 Promise 函数。在组件初始化时，会自动触发 getUsername 执行，并自动管理 data 、 loading 、 error 等数据，我们只需要根据状态来写相应的 UI 实现即可。
手动请求
对于“写”请求，我们一般需要手动触发，比如添加用户，编辑信息，删除用户等等。 useRequest 只需要配置 manual = true ，即可阻止初始化执行。只有触发 run 时才会开始执行。
```js
import { useRequest } from '@umijs/hooks';
​
export default () => {
  const { run, loading } = useRequest(changeUsername, {manual: true})
  
  return (
    <Button onClick={() => run('new name')} loading={loading}>
       Edit
    </Button>
    )
}
```
#### 轮询
对于需要保持新鲜度的数据，我们通常需要不断发起网络请求以更新数据。 useRequest 只要配置 poilingInterval 即可自动定时发起网络请求。
```js
import { useRequest } from '@umijs/hooks';
​
export default () => {
  const { data } = useRequest(getUsername, { pollingInterval: 1000 })
​
  return <div>Username: {data}</div>
}
```
同时通过设置 pollingWhenHidden ，我们可以智能的实现在屏幕隐藏时，暂停轮询。等屏幕恢复可见时，继续请求，以节省资源。
当然你也可以通过 run/cancel 来手动控制定时器的开启和关闭。

#### 并行请求
什么是并行请求？看了下图应该就明白了，也就是同一个接口，我们需要维护多个请求状态。
示例中的并行请求有几个特点：
● 删除 n 个不同的用户，则需要维护 n 个请求状态。
● 多次删除同一个用户，则只需要维护最后一个请求。

useRequest 通过设置 fetchKey ，即可对请求进行分类。相同分类的请求，只会维护一份状态。不同分类的请求，则会维护多份状态。在下面的代码中，我们通过 userId 将请求进行分类，同时我们可以通过 fetches[userId] 拿到当前分类的请求状态！
```js
export default () => {
  const { run, fetches } = useRequest(deleteUser, {
    manual: true,
    fetchKey: id => id, // 不同的 ID，分类不同
  });
​
  return (
    <div>
      <Button loading={fetches.A?.loading} onClick={() => { run('A') }}>删除 1</Button>
      <Button loading={fetches.B?.loading} onClick={() => { run('B') }}>删除 2</Button>
      <Button loading={fetches.C?.loading} onClick={() => { run('C') }}>删除 3</Button>
    </div>
  );
};
```
#### 防抖 & 节流
通常在边输入边搜索的场景中，我们会用到防抖功能，以节省不必要的网络请求。通过 useRequest ，只需要配置一个 debounceInterval ，就可以非常简单的实现对网络请求的节流操作。

在下面的例子中，无论调用了多少次 run ，只会在输入停止后，发送一次请求。
```js
import { useRequest } from '@umijs/hooks';
​
export default () => {
  const { data, loading, run, cancel } = useRequest(getEmail, {
    debounceInterval: 500,
    manual: true
  });
​
  return (
    <div>
      <Select onSearch={run} loading={loading}>
        {data && data.map(i => <Option key={i} value={i}>{i}</Option>)}
      </Select>
    </div>
  );
};
```
节流与防抖是同样的道理，只需要配置了 throttleInterval ，即可实现节流功能。
缓存 & SWR & 预加载
在前面我讲了什么是 SWR，在 SWR 场景下，我们会对接口数据进行缓存，当下次请求该接口时，我们会先返回缓存的数据，同时，在背后发起新的网络请求，待新数据拿到后，重新触发渲染。
对于一些数据不是经常变化的接口，使用 SWR 后，可以极大提高用户使用体验。比如下面的图片例子，当我们第二次访问该文章时，直接返回了缓存的数据，没有任何的等待时间。同时，我们可以看到“最新访问时间”在 2 秒后更新了，这意味着新的请求数据返回了。

useRequest 通过配置 cacheKey ，即可进入 SWR 模式，相当简单。
```js
const { data, loading } = useRequest(getArticle, {
  cacheKey: 'articleKey',
});
```
同时需要注意，同一个 cacheyKey 的数据是全局共享的。通过这个特性，我们可以实现“预加载”功能。比如鼠标 hover 到文章标题时，我们即发送读取文章详情的请求，这样等用户真正点进文章时，数据早已经缓存好了。
屏幕聚焦重新请求
通过配置 refreshOnWindowFocus ，我们可以实现，在屏幕重新聚焦或可见时，重新发起网络请求。这个特性有什么用呢？它可以保证多个 tab 间数据的同步性。也可以解决长间隔之后重新打开网站的数据新鲜度问题。
这里借用 swr 的一个图来说明问题。

集成请求库
考虑到使用便捷性， useRequest 集成了 umi-request。如果第一个参数不是 Promise，我们会通过 umi-request 来发起网络请求。
当然如果你想用 axios，也是可以的，通过 requstMethod 即可定制你自己的请求方法。
```js
// 用法 1
const { data, error, loading } = useRequest('/api/userInfo');
​
// 用法 2
const { data, error, loading } = useRequest({
  url: '/api/changeUsername',
  method: 'post',
});
​
// 用法 3
const { data, error, loading, run } = useRequest((userId)=> `/api/userInfo/${userId}`);
​
// 用法 4
const { loading, run } = useRequest((username) => ({
  url: '/api/changeUsername',
  method: 'post',
  data: { username },
}));
```

#### 分页
中台应用中最多的就是表格和表单了。对于一个表格，我们要处理非常多的请求逻辑，包括不限于：
● page、pageSize、total 管理
● 筛选条件变化，重置分页，重新发起网络请求
useRequest 通过配置 paginated = true ，即可进入分页模式，自动帮你处理表格常见逻辑，同时我们对 antd Table 做了特殊支持，只用简单几行代码，就可以实现下面图中这样复杂的逻辑，提效百倍。

```js

import {useRequest} from '@umijs/hooks';
​
export default () => {
  const [gender, setGender] = useState('male');
  const { tableProps } = useRequest((params)=>{
    return getTableData({...params, gender})
  }, {
    paginated: true,
    refreshDeps: [gender]
  });
​
  const columns = [];
​
  return (
    <Table columns={columns} rowKey="email" {...tableProps}/>
  );
};
```
#### 加载更多
加载更多的场景也是日常开发中常见的需求。在加载场景中，我们一般需要处理：
● 分页 offset、pageSize 等管理
● 首次加载，加载更多状态管理
● 上拉自动加载更多
● 组件第二次加载时，希望能记录之前的数据，并滚动到之前的位置
useRequest 通过设置 loadMore = true ，即可进入加载更多模式，配合其它参数，可以帮你处理上面所有的逻辑。
```js
const { data, loading, loadMore, loadingMore } = useRequest((d) => getLoadMoreList(d?.nextId, 3), {
  loadMore: true,
  cacheKey: 'loadMoreDemoCacheId',
  fetchKey: d => `${d?.nextId}-`,
});
```
当然我前面也说了， useReqeust 的功能只有你想不到，没有它没有的。哈哈哈~
除了上面的特性，我们还有一些其它的能力，可以在文档中发现。比如 loadingDelay。
loadingDelay
通过设置 loadingDelay ，延迟 loading 变为 true 的时间，当请求很快响应时，可以有效避免 loading 变化导致的抖动。



## 注意事项

Hook 就是 JavaScript 函数，使用规则：

* Hook 的使用范围：函数式的 React 组件中、自定义的 Hook 函数里；
* Hook 必须写在函数的最外层，每一次 useState 都会改变其下标 (cursor)，React 根据其顺序来更新状态；

* 尽管每一次渲染都会执行 Hook API，但是产生的状态 (state) 始终是一个常量（作用域在函数内部）；

* 只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用。
* 只能在 **React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中。）

## 结语

React Hooks 提供为状态管理提供了新的可能性，尽管我们可能需要额外去维护一些内部的状态，但是可以避免通过 renderProps / HOC 等复杂的方式来处理状态管理的问题。Hooks 带来的好处如下：

* 更细粒度的代码复用，并且不会产生过多的副作用
* 函数式编程风格，代码更简洁，同时降低了使用和理解门槛

* 减少组件嵌套层数
* 组件数据流向更清晰

事实上，通过定制各种场景下的自定义 Hooks，能让我们的应用程序更方便和简洁，组件的层次结构也能保证完好，还有如此令人愉悦的函数式编程风格，Hooks 在 React 16.8.0 版本已经正式发布稳定版本，现在开始用起来吧！！！
