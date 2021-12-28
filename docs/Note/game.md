# game🎮

## EventEmitter的前端实现

### API

* **on(event, listener)：** 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
* **emit(event, [arg1], [arg2])：** 按监听器的顺序执行执行每个监听器
* **addListener(event, listener)：** on的同名函数（alias）
* **once(event, listener):** 和on类似，但只触发一次，随后便解除事件监听
* **removeListener(event, listener)：** 移除指定事件的某个监听回调
* **removeAllListeners([event])：** 移除指定事件的所有监听回调
* **setMaxListeners(n)：** 用于提高监听器的默认限制的数量。（默认10监听回调个产生警告）
* **listeners(event)：** 返回指定事件的监听器数组。

### 构造函数

EventEmitter是Node.js的内置模块events提供的一个类，它是Node事件流的核心，EventEmitter是服务端的东西，

前端已经有event-emitter的npm库

首先我们需要写一个EventEmitter构造函数，给它设置两个属性listeners和maxListener

```js
function EventEmitter() {
    this.listeners = {};
    this.maxListener = 10;
}
```

listeners用于存放事件监听器函数，结构如下：

```js
{
    "event1": [f1, f2, f3]，
    "event2": [f4, f5]，
        ...
}
```

**而maxListener 是设置的某个事件能够添加的监听器的最大数量**，超过这个值，需要在控制台输出警告，但不会报错阻止。按照Node的设计，这个值能够通过setMaxListeners动态调整

### on方法

1. 判断该事件的监听器数量是否已超限，超限则报警告
2. 判断该事件监听器数组是否初始化，若未初始化，则将listeners[event]初始化为数组，并加入监听器cb
3. 若监听器数组已经被初始化，则判断数组中是否已存在cb,不存在则添加，已存在则不做操作。
4. 指定addListener等于on方法

```js
EventEmitter.prototype.on = function(event, cb) {
    var listeners = this.listeners;
    if (listeners[event] && listeners[event].length >= this.maxListener) {
        throw console.error('监听器的最大数量是%d,您已超出限制', this.maxListener)
    }
    if (listeners[event] instanceof Array) {
        if (listeners[event].indexOf(cb) === -1) {
            listeners[event].push(cb);
        }
    } else {
        listeners[event] = [].concat(cb);
    }
}

EventEmitter.prototype.addListener = EventEmitter.prototype.on;
```

### **emit方法**

1. 通过Array.prototype.slice.call(arguments)取出方法的参数列表args，（因为考虑简单性和兼容性所以采用ES5的冗长编码方式）
2. 调用args.shift踢掉数组第一个参数即event，留下来的这些是要传给监听器的
3. 遍历监听器,通过apply方法把上面得到的args参数传进去

```js
EventEmitter.prototype.emit = function(event) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    this.listeners[event].forEach(cb => {
        cb.apply(null, args);
    });
}
```

### removeListener**方法**

1. 通过indexOf确定监听器回调在数组listeners[event]中的位置
2. 通过splice(i,1)删除之

```js
EventEmitter.prototype.removeListener = function(event, listener) {
    var listeners = this.listeners;
    var arr = listeners[event] || [];
    var i = arr.indexOf(listener);
    if (i >= 0) {
        listeners[event].splice(i, 1);
    }
}
```

### **once方法**

**once方法是on方法和removeListener方法的结合**：用on方法监听，在回调结束的最后位置，通过removeListener删掉监听函数自身

```js
EventEmitter.prototype.once = function(event, listener) {
    var self = this;

    function fn() {
        var args = Array.prototype.slice.call(arguments);
        listener.apply(null, args);
        self.removeListener(event, fn);
    }
    this.on(event, fn)
}
```

### removeAllListener方法

清空listeners[event]数组

```js
EventEmitter.prototype.removeAllListener = function(event) {
    this.listeners[event] = [];
}
```

### setMaxListeners方法和listeners方法

```js
EventEmitter.prototype.listeners = function(event) {
    return this.listeners[event];
}

EventEmitter.prototype.setMaxListeners = function(num) {
    this.maxListener = num;
}
```

## ts

这节课的重点是实战, 对于ts的编译原理理部分, 同学们了了解⼀一下就可以, ⾯面试也不不会问的特别细, 知道⼤大概的流程就⾏行行。

之前没接触过Ts等强类型语⾔言的同学: 这节课会有很多概念，可能很难直接记住, 那么这些同 学听这节课的时候, ⽬目的就不不是去死记硬背这些概念, ⽽而且去体会ts的写法, 能不不能优化⾃自⼰己在 平时js编写时碰到的⼀一些问题。

接触过ts的同学: 注意⼀一下这节课⾥里里的⼀一些泛型 以及各种实战代码与ts的结合.

### 基础知识

基础类型: number string boolean array object

1. enum: 枚举

2. type,interface

3. 联合类型 | (联合类型⼀一次只能⼀一种类型;⽽而交叉类型每次都是多个类型的合并类型。)

4. 交叉类型 & (联合类型⼀一次只能⼀一种类型;⽽而交叉类型每次都是多个类型的合并类型。)

5. typeof

   Typeof 操作符可以⽤用来获取⼀一个变量量声明或对象的类型。

```ts
        function toArray(x: number): Array<number> {
          return [x];

   }

    type Func = typeof toArray; // -> (x: number) => number[]
   ```

1.keyof
    Keyof 操作符可以⽤用来⼀一个对象中的所有 key 值:

```ts

        interface Person {
            name: string;

            age: number;
        }

        type K1 = keyof Person; // "name" | "age"
   ```

2.in

In ⽤用来遍历枚举类型:

```ts
        type Keys = "a" | "b" | "c"

        type Obj =  {
          [p in Keys]: any

   } // -> { a: any, b: any, c: any }

3. extends
    有时候我们定义的泛型不不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛

   型约束。

        interface ILengthwise {
          length: number;

   }

   function loggingIdentity<T extends ILengthwise>(arg: T): T { console.log(arg.length); 

return arg; }

```

```ts
  loggingIdentity(3);
  loggingIdentity({length: 10, value: 3});

Paritial

Partial<T> 的作⽤用就是将某个类型⾥里里的属性全部变为可选项 ?。

Reuqired

Required<T> 的作⽤用就是将某个类型⾥里里的属性全部变为必选项。

Readonly

Readonly<T> 的作⽤用是将某个类型所有属性变为只读属性，也就意味着这些属性不不能被重新 赋值。

Record
 Record<K extends keyof any, T> 的作⽤用是将 K 中所有的属性的值转化为 T 类型。
```

```ts
  interface PageInfo {
    title: string;
```

}

```ts
  type Page = "home" | "about" | "contact";
  const x: Record<Page, PageInfo> = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" }
```

};

13.Exclude

Exclude<T, U> 的作⽤用是将某个类型中属于另⼀一个的类型移除掉。 type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

```ts
      type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
```

\14. Extract
 Extract<T, U> 的作⽤用是从 T 中提取出 U。

```ts
      type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
      type T1 = Extract<string | number | (() => void), Function>; // () => void
```

⾯面试题及实战

\1. 你觉得使⽤用ts的好处是什什么?

1.1 TypeScript是JavaScript的加强版，它给JavaScript添加了了可选的静态类型和基于类的⾯面向 对象编程，它拓拓展了了JavaScript的语法。所以ts的功能⽐比js只多不不少.
 1.2 Typescript 是纯⾯面向对象的编程语⾔言，包含类和接⼝口的概念.
 1.3 TS 在开发时就能给出编译错误， ⽽而 JS 错误则需要在运⾏行行时才能暴暴露露。

1.4 作为强类型语⾔言，你可以明确知道数据的类型。代码可读性极强，⼏几乎每个⼈人都能理理解。 1.5 ts中有很多很⽅方便便的特性, ⽐比如可选链.

\2. type 和 interface的异同 重点:⽤用interface描述数据结构，⽤用type描述类型 2.1 都可以描述⼀一个对象或者函数

```ts
      interface User {
        name: string

age: number }

  interface SetUser {
    (name: string, age: number): void;
}

  type User = {
    name: string
    age: number
  };
  type SetUser = (name: string, age: number)=> void;
```

2.2 都允许拓拓展(extends)
 interface 和 type 都可以拓拓展，并且两者并不不是相互独⽴立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不不多，但是两者语法不不同。

```ts
  // interface extends interface
  interface Name {
    name: string;
  }
  interface User extends Name {
    age: number;
  }
  // type extends type
  type Name = {
    name: string;
  }
  type User = Name & { age: number  };
  // interface extends type
  type Name = {
    name: string;
  }
  interface User extends Name {
    age: number;
  }
  // type extends interface
  interface Name {
    name: string;
  }
  type User = Name & {
    age: number;
  }
```

2.3 只有type可以做的
 Type 可以声明基本类型别名，联合类型，元组等类型

```ts

// 基本类型别名
 type Name = string

// 联合类型 interface Dog {

wong(); }

  interface Cat {
      miao();

}

  type Pet = Dog | Cat

```

// 具体定义数组每个位置的类型 type PetList = [Dog, Pet]

// 当你想获取⼀一个变量量的类型时，使⽤用 typeof let div = document.createElement('div'); type B = typeof div

1. 如何基于⼀一个已有类型,扩展出⼀一个⼤大部分内容相似,但是有部分区别的类型? ⾸首先可以通过Pick和Omit

   ```ts
        interface Test {
            name: string;

   sex: number;

            height: string;
        }

        type Sex = Pick<Test, 'sex'>;
        const a: Sex = { sex: 1 };
        type WithoutSex = Omit<Test, 'sex'>;
        const b: WithoutSex = { name: '1111', height: 'sss' };
   ```

   ⽐比如Partial, Required.

   再者可以通过泛型.

2. 什什么是泛型,泛型的具体使⽤用?

   泛型是指在定义函数、接⼝口或类的时候，不不预先指定具体的类型，使⽤用时再去指定类型的⼀一种 特性。

    可以把泛型理理解为代表类型的参数

```ts
        interface Test<T = any> {
            userId: T;

   }

        type TestA = Test<string>;
        type TestB = Test<number>;

     const a: TestA = {
         userId: '111',

    const b: TestB = {
         userId: 2222,

}; 
```

1. 写⼀一个计算时间的装饰器器 代码

2. 写⼀一个缓存的装饰器器 代码

3. 实现⼀一个路路由跳转 通过ts约束参数的routeHelper ⼤大量量代码, 上课写

4. 实现⼀一个基于ts和事件模式的countdown基础类 ⼤大量量代码, 上课写

   原理理

   看流程图.

1.Scanner 扫描器器 (scanner.ts)

   扫描器器的作⽤用就是将源代码⽣生成token流 看图 扫描器器.png

2.Parser 解析器器 (parser.ts) 看图 解析器器.png

\3. Binder 绑定器器 (binder.ts)
 符号将 AST 中的声明节点与其它声明连接到相同的实体上。符号是语义系统的基本构造块。

```js
function Symbol(flags: SymbolFlags, name: string) { this.flags = flags; 
 this.name = name; 
 this.declarations = undefined; 

}
```

SymbolFlags 符号标志是个标志枚举，⽤用于识别额外的符号类别(例例如: 变量量作⽤用域标志 FunctionScopedVariable 或 BlockScopedVariable 等).

\4. Checker 检查器器 (checker.ts) 根据我们⽣生成AST节点的声明起始节点位置，对传进来的字符串串做位置类型语法等的校验与异

常的抛出。

\5. Emitter 发射器器 (emitter.ts) TypeScript 编译器器提供了了两个发射器器:

emitter.ts: 它是 TS JavaScript 的发射器器
 declarationEmitter.ts: ⽤用于为 TypeScript 源⽂文件(.ts) 创建声明⽂文件

### 原理

看流程图.

1. Scanner 扫描器 (scanner.ts)

   扫描器的作用就是将源代码生成token流
   看图 扫描器.png

2. Parser 解析器 (parser.ts)

   看图 解析器.png

3. Binder 绑定器 (binder.ts)

符号将 AST 中的声明节点与其它声明连接到相同的实体上。符号是语义系统的基本构造块。

```js
function Symbol(flags: SymbolFlags, name: string) {
    this.flags = flags;
    this.name = name;
    this.declarations = undefined;
}
```

SymbolFlags 符号标志是个标志枚举，用于识别额外的符号类别（例如：变量作用域标志 FunctionScopedVariable 或 BlockScopedVariable 等）.

4.Checker 检查器 (checker.ts)

根据我们生成AST节点的声明起始节点位置，对传进来的字符串做位置类型语法等的校验与异常的抛出。

5.Emitter 发射器 (emitter.ts)

TypeScript 编译器提供了两个发射器:

emitter.ts: 它是 TS -> JavaScript 的发射器
declarationEmitter.ts: 用于为 TypeScript 源文件（.ts） 创建声明文件

### 面试题及实战

1. 你觉得使用ts的好处是什么?

1.1 TypeScript是JavaScript的加强版，它给JavaScript添加了可选的静态类型和基于类的面向对象编程，它拓展了JavaScript的语法。所以ts的功能比js只多不少.
1.2 Typescript 是纯面向对象的编程语言，包含类和接口的概念.
1.3 TS 在开发时就能给出编译错误， 而 JS 错误则需要在运行时才能暴露。
1.4 作为强类型语言，你可以明确知道数据的类型。代码可读性极强，几乎每个人都能理解。
1.5 ts中有很多很方便的特性, 比如可选链.

2.type 和 interface的异同

重点：用interface描述数据结构，用type描述类型

2.1 都可以描述一个对象或者函数

```ts
interface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void;
}

type User = {
  name: string
  age: number
};

type SetUser = (name: string, age: number)=> void;
```

2.2 都允许拓展（extends）
interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。

```ts
// interface extends interface
interface Name { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}

// type extends type
type Name = { 
  name: string; 
}
type User = Name & { age: number  };

// interface extends type
type Name = { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}

// type extends interface
interface Name { 
  name: string; 
}
type User = Name & { 
  age: number; 
}
```

2.3 只有type可以做的

type 可以声明基本类型别名，联合类型，元组等类型

```ts
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]

// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```

3.如何基于一个已有类型, 扩展出一个大部分内容相似, 但是有部分区别的类型?

首先可以通过Pick和Omit

```ts
interface Test {
    name: string;
    sex: number;
    height: string;
}

type Sex = Pick<Test, 'sex'>;

const a: Sex = { sex: 1 };

type WithoutSex = Omit<Test, 'sex'>;

const b: WithoutSex = { name: '1111', height: 'sss' };
```

比如Partial, Required.

再者可以通过泛型.

4.什么是泛型, 泛型的具体使用?

泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，使用时再去指定类型的一种特性。

可以把泛型理解为代表类型的参数

```ts
interface Test<T = any> {
    userId: T;
}

type TestA = Test<string>;
type TestB = Test<number>;

const a: TestA = {
    userId: '111',
};

const b: TestB = {
    userId: 2222,
};

```

4.写一个计算时间的装饰器

   代码

5.写一个缓存的装饰器

   代码

6.实现一个路由跳转 通过ts约束参数的routeHelper

   大量代码, 上课写

7.实现一个基于ts和事件模式的countdown基础类

   大量代码, 上课写

### 配置

```text
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.
    
    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'
    
    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）
    
    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。
    
    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性
    
    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持

  }
}
``` -->
