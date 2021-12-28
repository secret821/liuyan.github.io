# node

## 1.ES6

ECMA -> ECMAScript ->  ES

​               标准规范

ES6 js的第六套标准规范

课后作业

 创建函数，传递任意一个日期，返回这一天是一年中的第几天

例如  getDays（2021，5，18）

```javascript
function getDay(year,month,day) {
    //如果是闰年是29天，否则28天
    var second = year%4 == 0&& year%100 !=0 || year%400 ? 29 :28;
    //声明变量，用于记录天数，先把当前月天数加入进去
    var sum = day;
    //每个月的天数不同
    var arr = [0,31,second,31,30,31,30,31,31,30,31,30];
    //遍历当前月份
    for(var i = 0;i < month;i++){
        sum += arr[i];
    }
    //返回总的天数
    return sum;
}
console.log(getDay(2021,5,18));
```

```javascript
function getDays(year,month,date) {
    //计算当前日期距离一年的一月一日相差的毫秒数
    var d1 = new Date(year,month-1,date+1);
    var d2 = new Date(year,0,1);
    var d = d1 - d2;
    //相差的值换算为天
    return d/(24*60*60*1000);
}
console.log(getDays(2021,5,19));
```

### （1）块级作用域

为了解决全局污染的问题

let a = 1；

let声明的变量**不存在提升**，在**同一个作用域**下，**不允许重复声明**同一个变量

大括号{}之间的语句块就是一个块级作用域，例如：if、else、while、do while、for....在块级作用域下，let和const声明的都是局部的，无法被访问到。

```test
var let const三个区别
var 声明的变量存在提升，在同一个作用域下可以重复声明同一个变量
let 声明的变量不存在提升，在同一个作用域下不允许重复声明同一个变量，存在块级作用域，即使在全局作用域下let声明的变量也不是全局的
const 声明的时候必须赋值，不允许重新赋值，存在块级作用域，即使在全局作用域下const声明的常量也不是全局的
```

练习：计算1~100之间所有整数的和，要求使用let声明变量

#### （2）参数增强

可以给数的参数设置默认值

```javascript
function fn(a,b,c=0){
 //c = c||0;  //es6之前的默认值设置
}
fn(10000,2000) //没有出现的实参就会使用默认值
```

#### （3）箭头函数

()=>{ }

作用：简化了匿名函数的写法，不等价于匿名函数

```js
arr.sort((a,b)=> {
    return a-b;//从小到大的排序
});
```

```js
//如果箭头函数里的函数体中只有一行函数，并且为return形式
arr.sort((a,b)=>a-b);//从小到大的排序
```

练习：使用函数表达式创建函数（用匿名函数）将之前的匿名函数使用箭头函数代替，计算任意三个数字的平均值并返回结果。

```javascript
let fn = (a,b,c) => (a+b+c)/3;
```

（4）模板字符串

解决了字符串的拼接问题

、模板字符串 ${JS表达式}

练习：声明变量保存一条员工的数据，格式为对象，包含的属性有编号，姓名，性别（1/0），工资；最后打印出以下格式

编号：X

姓名：XX

性别：男／女

工资：XXXX.00元

### 1.Node.js是运行在服务器端的js解释器，基于谷歌的v8引擎

#### （1）对比JS

JS运行在客户端浏览器，存在多种JS解释器，存在代码兼容性问题；

Node.js只有V8引擎一种解释器，不存在代码兼容性问题

JS和Node.js都有共同的ES（内置）对象和自定义对象，不同的宿主对象

JS用于开发浏览器端的交互效果，Node.js用于服务器端开发，例如数据库的访问，其他服务器的调用.....

#### （2）网址

www.nodejs.org  官网

www.nodejs.cn    中文镜像

#### （3）使用node.js

脚本模式

node  拖拽脚本文件   回车  

node 文件名前几个数字+tab键

交互模式

进入：node  回车  进入交互模式

退出：两次CTRL+C      或者    一次CTRL+D

#### （4）特点

Node.js属于**单线程运行逻辑**，支持数万个并发连接，适合做**基于社交网络的大规模web应用**，不适合做CPU密集型的操作。

### 2.全局对象

也叫全局模块

（1）global

检测一个变量或者函数是否为全局的

交互模式属于全局作用域，创建的函数和声明的变量是全局的

每个脚本文件都是在一个作用域下，里边的函数和变量都是局部的，不存在全局污染

JS下的global叫做window

练习：编写脚本文件03_global.js,在脚本文件下声明变量、创建函数，然后通过global检测是否为全局

练习：创建文件04_window.js和04.html，把js嵌入html，声明变量、创建函数，然后通过window检测是否为全局

（2）console

```javascript
console.log(1);//日志
console.info(2);//消息
console.warn(3);//警告
console.error(4);//错误
开始计时和结束计时的参数要保持一致
console.time();//开始计时
console.timeEnd();//结束计时
```

练习：分别查看for、while、do—while三种循环分别循环100000次的耗时

（3）process

进程：计算机上的软件运行都是代表相应的进程

API

process.arch   :查看当前CPU的架构

process.platform :查看当前的操作系统

process.version :查看当前Node.js的版本号

process.pid：查看当前node的进程编号

process.kill（进程编号）：结束指定编号的进程

（4）buffer

缓冲器：在内存中临时存储数据的区域，常用于保存网络传输时的资源

```javascript
let buf = Buffer.alloc(6,'好的');
// 设置大小为6个字节  一个汉字占三个字节
console.log(buf);//底层是二进制编码，显示的是16进制的编码
//将buffer转为字符串
console.log(buf.toString());//将Buffer数据转为字符串
```

### 3.定时器

一次性定时器：

开启：

var timer = setTimeout(回调函数，间隔时间)

当间隔时间到了，调用一次回调函数

清除：

cleanTimeOut（timer）

![image-20210519194441220](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210519194441220.png)

主程序（执行）

定时器（回调函数，时间（ms））

回调函数在事件队列里执行

定时器的执行：

主程序执行时回调函数放入事件队列（由一组回调函数组成）等待时间过后执行回调函数

课后任务

 (1)复习今天内容，整理思维导图

 (2)练习

  创建主模块(main.js)和功能模块(circle.js)，在功能模块下导出两个函数，传递参数半径，分别返回周长和面积；在主模块下引入成功后，调用这两个函数

 (3)预习nodejs第2天内容，异步

## day11

### 1.模块

是一个独立的功能体，模块可以被其他的模块引入，也可以引入其他的模块

require（） 用于引入其他的模块,得到导出的对象

module.exports  当前模块导出的对象，是一个空对象，用于存放导出的内容

__dirname  当前模块的绝对目录

__filename  当前模块的绝对目录+模块名称

### 2.模块分类

分为自定义模块、第三方模块、核心模块

|          | 以路径开头                                                   | 不以路径开头                                                 |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 文件形式 | **require（./circle.js‘）**                     用于引入自定义模块 | **require('querystring')**引入官方提供的核心模块             |
| 目录形式 | **require(./02_tao)**首先会在目录下寻找package.json文件中main属性对应的文件，如果找不到会自动找index.js | **require('tao')**会到同一级的node_modules目录中寻找tao目录，如果找不到会一直往上一级的node_modules        （用于引入第三方模块） |

json文件中属性名和属性值要用双引号，且不能添加注释

练习：在03_1.js中引入同一级的目录模块03_2,目录下含有文件index.js,导出一个函数，传递任意两个数字返回最大值，最后在03_1.js中调用该函数

### 3.包和npm

包（package）：指的是第三方模块

CommonJS规范：Node.js就是遵循这个规范，出现的模块概念。JS之所以作为服务器端语言，就是遵循这个规范。

下载地址：www.npmjs.com

（1）切换命令行的目录

1.**cd  粘贴目录的路径**     回车

如果有盘符的变化，需要添加  **盘符名称**：回车

2.window10：

在要进入的目录下的空白区域，按住shift+单击右键，选择 ‘在此处打开powershell窗口’

（2）使用npm

在Node.js安装的时候会附带安装

**npm -v**  查看版本号

**npm init -y**  初始化一个package.json文件，是项目描述文件，可以记录下安装的包

**npm install 包的名称**    下载安装包,将包放入到node_modules中，如果没有node_modules，会自动创建，把安装包放进去，同时会生成package-lock.json文件，记录所有包的版本号；在pageage.json中会记录安装的这个包的信息。

**npm install**       自动去安装package.json和package-lock.json中记录的包,生成node_modules

**npx** /nvm ：切换node的版本

npx -p node@版本号 node -v

npx -p node@版本号 node 文件路径             下载指定版本的node.js，然后运行文件，运行完会将下载的nodejs删除

### 4.querystring模块

查询字符串：浏览器向服务器发请求传递数据的一种方式，位于浏览器的地址栏（URL），以问号（？）为分割

<https://search.jd.com/Search>?**keyword=电脑&enc=utf-8**

查询字符串模块用于操作查询字符串的工具模块

浏览器->web服务器->数据库->转递给服务器

parse（）   将查询字符串解析为对象

练习：获取以下查询字符串中传递的数据

‘lid=5&num=1'

### 5.URL模块

URL：统一资源定位，互联网上的任何资源都有对应的URL

http://**www.codeboy.com**:**9999**/product_details.html?lid=5

协议        域名/IP地址              端口   文件在服务器的路径   查询字符串

URL模块用于操作URL的工具模块

parse（）  解析一个URL为对象，可以获取URL中的各个部分

练习：获取以下URL中传递的查询字符串数据

<https://www.tmooc.cn:443/web/course.html?cid=2104&cname=nodejs>

打印出   班级编号：2104   课程名称：nodejs

### 6.timer定时器模块

定时器模块，提供一组全局函数

（1）一次性定时器

见day01笔记

（2）周期性定时器

开启

let timer = setInterval（回调函数，间隔时间）

每隔一段时间，调用一次回调函数

清除：

cleanInterval（timer）

```javascript
// 练习：使用周期性定时器每隔两秒钟打印hello，打印3次后结束
//声明变量用于记录次数
// let count = 0;
// let timer = setInterval( () =>{
//     console.log('hello');
//     //每打印一次，记录一次
//     count++;
//     //判断是否为3
//     if(count === 3){
//         cleanInterval(timer);
//     }
// },2000);
```

练习：使用周期性定时器每隔两秒钟打印hello，打印3次后结束

（3）立即执行定时器

| 开启：let timer = setImmediate(回调函数)      清除：cleanImmediate（timer） |
| ------------------------------------------------------------ |
| 开启：process.nextTick(回调函数)                             |

setImmediate在事件队列的最前边，process.nextTick在主程序的后边，时间队列的前边

![image-20210520200054564](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210520200054564.png)

```javascript
//立即执行定时器
console.log(2);
setImmediate( ()=>{
    console.log(1);
});
console.log(3);
```

### 7.文件系统模块（fs）

服务器端的文件包含目录形式和文件形式

fs.statSync(文件路径)  查看文件的状态

​ isDirecotry()是否为文件

fs.mkdirSync(目录的路径)   创建目录

fs.rmdirSync(目录的路径)   删除目录

课后任务

(1)复习今天内容，整理思维导图

(2)练习：开启一次性定时器，3秒以后创建1~10,10个目录；15秒以后再把这10个目录删除。

(3)预习nodejs第3天  同步和异步

## day12

### 1.同步和异步

同步：在主程序中执行，会阻止后续代码的执行，是通过返回值来获取结果

异步：在一个独立的线程执行，不会阻止后续代码额执行，是通过回调函数来获取结果（大文件或复杂文件）

异步（多线程）

主程序（fs.stat 异步）执行完执行事件队列

线程池：一旦有异步任务，会从线程池中获取一个线程执行任务 ，当执行完把结果以回调函数形式放入到事件队列，把线程归还回去

### 2.文件系统模块

（1）查看文件状态

fs.stat(文件的路径，回调函数)

​ 回调函数 用来获取结果

​ err   可能产生的错误

​ s       成功的结果

（2）读取目录

readdirSync（目录的路径）/readdir（目录的路径，回调函数）

```javascript
//读取目录
// 同步
let arr = fs.readdirSync('../day11');
console.log(arr);
//异步
fs.readdir('../day11',(err,arr2)=>{
    if (err){
        throw err;
    }
    console.log(arr2);
});
```

（3）清空写入

writeFileSync（文件的路径，数据）/writeFile（文件的路径，数据，回调函数）

如果文件不存在，先创建文件然后写入数据

如果文件已经存在，先清空文件中的内容，然后写入数据

```
//同步
fs.writeFileSync('./1.txt','涛哥');
// 异步
fs.writeFile('./2.txt','is',(err)=>{
    if(err){
        throw err;
    }
    console.log('写入成功');
})
console.log('运行结束');
```

（4）追加写入

appendFileSync（文件的路径，数据）/appendFile（文件的路径，数据，回调函数）

如果文件不存在，先创建文件然后写入数据

如果文件已经存在，会在文件的末尾追加写入数据

```javascript
//创建数组，包含有多个姓名，遍历数组得到每个姓名，将每个姓名使用异步方式写入到文件stu.txt中
let arr = ['tao','li','liu','tom'];
for(let i = 0;i < arr.length;i++){
//    异步  顺序随机无法确定
    //arr[i]
    fs.appendFile('./stu.txt',arr[i]+'\n',(err)=>{
        if(err)  throw err;
        console.log('写入成功');
    })
//    同步  顺序不变
    fs.appendFileSync('./stu2.txt',arr[i]+'\n');
}
```

（5）读取文件

readFileSync(文件的路径)/readFile（文件的路径，回调函数）读取的数据，格式默认为buffer

```javascript
//同步读取
let data = fs.readFileSync('./1.txt');
console.log(data);//<Buffer e6 b6 9b e5 93 a5>  格式为Buffer
console.log(data.toString());//把Buffer转为字符串
//异步读取1.txt
fs.readFile('./1.txt',(err,data1)=>{
    if(err)  throw err;
    console.log(data1.toString());
    })
console.log('运行结束');
```

（6）删除文件

unlinkSync（文件的路径）/unlink（文件的路径，回调函数）

```node
// 同步
fs.unlinkSync('./1.txt');
//异步
fs.unlink('./2.txt',(err,data1)=>{
    if(err)  throw err;
})
```

（7）检测文件是否存在

exitsSync（文件的路径）

存在->true    不存在->false

练习：如果文件3.txt存在，同步删除该文件；如果目录mydir不存在，则同步创建该目录。

（8）拷贝文件

copyFileSync（源文件路径，目标文件路径）/copyFile(源文件路径，目标文件路径，回调函数)

（9）流

读取的文件流（源文件）

写入的文件流（目标文件）

流：一段一段

createReadStream()  创建可读取的文件流

createWriteStream()  创建可写入的文件流

pipe（）  管道，可以将读取流通过管道添加到写入流

on（事件名称，回调函数）添加事件，一旦事件触发，会调用回调函数；事件名称是字符串格式

```javascript
//添加事件，监听是否有数据流入内存
//on(参数1,参数2)  添加事件
//参数1：是一个字符串，表示事件的名称，是固定的
//data  数据流入
//参数2：是一个回调函数，一旦触发事件，调用这个函数，
// 在回调函数中获取流入的数据
var count = 0;//统计数量
rs.on('data',(chunk)=>{
//    chunk:获取的分段数据
//     console.log(chunk);
    count++;//流入一次加1
});
console.log(count);
//添加事件：读取结束事件
// 一旦读取结束，调用回调函数
rs.on('end',()=>{
    console.log(count);
})
```

```javascript
let rs = fs.createReadStream('./node.zip');
//创建可写入的文件流,创建空文件
let ws = fs.createWriteStream('./2.zip');
//将读取的文件流 通过管道 添加到可写入的文件流
rs.pipe(ws);
```

### 3.http协议

浏览器和WEB服务器之间的通信协议

<http://www.codeboy.com:9999/index.html>

![image-20210521154645814](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210521154645814.png)

#### （1）通用头信息（General）

**Request URL**：请求的URL，表示要请求的服务器端资源

**Request Method**：请求的方式，对资源的操作方式     GET：服务器端获取资源      POST：传递数据给服务器

**Status Code**：响应的状态码

1**：服务器端接收到了请求，还没做出响应

2**：成功的响应

3**：响应的重定向，跳转到另一个URL

4**（404）：客户端请求错误

5**：服务器端错误

#### （2）响应头信息（response）

Content-Type：设置响应的内容类型

解决中文乱码：text/html;charset=utf-8

Location：设置响应的重定向中要跳转的URL（结合3**）

#### （3）请求头信息（request）

#### （4）请求主体

可有可无，如果有数据传递才会出现

### 4.http模块

可以用来创建web服务器，接收请求

```javascript
//引入http模块
const http = require('http');
//创建web服务器
const app = http.createServer();
//设置端口
app.listen(8080);
//通过事件来接受请求并作出响应
app.on('request',(req,res)=>{
    req 请求的对象
    req.url  获取请求的URL，格式为'/jianbing' '/youtiao'
    req.method  获取请求的方法
    res  响应的对象
    res.write()  设置响应的内容
    res.writeHead()  设置响应的状态码和头信息
    res.end()  结束并发送
})
```

小图标 favicon.ico

```javascript
 //设置响应的状态码和头信息
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
});
```

```node
/设置响应到浏览器的内容
// res.write('这是你的jianbing');
// //结束并发送响应
// res.end();
// });
```

```node
// 设置响应的状态码为302，设置跳转的URL
res.writeHead(302,{
    Location:'http://www.tmooc.cn/'
});
//结束并发送
res.end();
```

```node
//设置状态码为404
res.writeHead(404);
//设置响应的内容
res.write('Not Found');
//结束并发送
res.end();
});
```

课后任务
(1)复习今天内容，整理思维导图
(2)练习：创建web服务器，设置端口8080，添加事件，根据请求作出响应

if(url==='./')

​    '/list'   响应  '这是商品列表'
​    '/index'    响应文件'1.html'，先读取文件，然后把读取的内容作为响应的内容
​    '/study'   跳转到 [http://www.tmoo.cn](http://www.tmoo.cn/)
​    其它    响应状态码404    not found
(3)预习nodejs第4天

## day13

### 1.框架

一整套项目解决方法，简化了已有的功能，添加了之前没有的功能。

1.express框架

基于Node.js平台，快速、开发、极简的web开发框架

网址：www.expressjs.com.cn

属于第三方的模块，需要先去下载安装

npm install **express**

| const express = require('express');   |
| ------------------------------------- |
| const app = express();//创建WEB服务器 |
| app.listen(8080);//设置端口           |

### （1）路由

用来处理不同的请求，根据请求的URL和请求的方法来做出特定的响应。

路由的三要素：请求的URL、请求的方法、回调函数

***req请求对象***

req.url                   获取请求的URL

req.method          获取请求的方法

**req.query**              获取查询字符串传递的数据

***res响应对象***

res.send（）        设置响应的内容并发送

res.redirect（）   设置响应的重定向并且发送

res.sendFile（）   设置响应的文件并发送，文件必须使用绝对路径（__dirname)

./XXXX:相对路径

```javascript
app.get('/person',(req,res)=>{
    res.send(`
<!--运用模板字符串-->
        <h2>这是个人中心</h2>
        欢迎回来
`);
})
//添加路由：跳转
//get  /study
//跳转到  tmooc
app.get('/study',(req,res)=>{
    res.redirect('http://www.codeboy.com:9999/index.html');
});

//添加路由（get  /),跳转到 /person
app.get('/',(req,res)=>{
    //同一个服务器下,直接写'/URL'
    res.redirect('/person');
})
//添加路由（get/index），响应文件1.html
app.get('/index',(req,res)=>{
//    响应文件,使用绝对路径
    res.sendFile(__dirname+'/1.html');
})

console.log(__dirname);
```

```javascript
//路由（post  /  mylogin）
app.post('/mylogin',(req,res)=>{
    //url后接收不到
    //获取post传递的数据，采用流的方式
    //需要使用事件的方式获取
    req.on('data',(chunk)=>{
        //得到的数据是buffer，转字符串后为查询字符串
        console.log(chunk.toString());
//        将查询字符串解析为对象
    let obj = querystring.parse(chunk.toString());
    console.log(obj);
})
    res.send('登陆成功');
})
```

```javascript
//路由传参
//路由：查看包的详情
//get   /package
app.get('/package/:pname',(req,res)=>{
    //获取路由传参的数据
    console.log(req.params);
res.send('这是包的使用详情');
})
app.get('/shopping/:lid&:count&:uid',(req,res)=>{
    //获取路由传参的数据
    console.log(req.params);
res.send(`
    商品的编号：${req.params.lid}<br>
    购买的数量：${req.params.count}<br>
    用户的编号：${req.params.uid}
    `);
})
```

以上响应在一个路由中只能调用一次

练习：编写03_express.js,引入express，创建web服务器并设置端口为8080；添加路由（get/search），响应文件search.html

`<h2>用户搜索</h2>`

练习：根据表单的请求添加路由（get/mysearch),响应’搜索成功‘

练习：添加路由（get /login），响应文件login.html

用户输入用户名和密码，点击提交；添加对应的路由（post  /mylogin),响应’登录成功‘

| 传递方式 | 格式                                                         | 路由获取                                                     |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| get传递  | 查询字符串  <http://127.0.0.1:8080/mysearch>?**kw=笔记本&id=2** | req.query格式为对象                                          |
| post传递 | 采用流的方式传递，不可见                                     | 通过事件的方式获取   req.on（’data‘，（chunk）=>{chunk 获取的数据，格式为buffer，转字符串后为查询字符串，需要借助查询字符串模块解析为对象}） |
| 路由传参 | <http://127.0.0.1：8080/package/express>                       | app.get('/package/:pname',(req,res)=>{ req.params  获取路由传参的数据，格式为对象}) |

post传递：  没有大小限制，用于上传附件、视频.....

对比get和post传递数据的区别

​ get传递的数据格式为查询字符串，URL中可见；post传递的方式用流的方式，URL中不可见；post传递更加安全，通常注册、登录会使用；get传递的速度更快，通常搜索的时候使用

​ get传递的数据有大小限制，根据不同的浏览器大小不同，范围2~8k之间，post没有限制

练习：创建添加到购物车的路由（get  / shopping),传递商品的编号lid、购买的数量count、用户的编号uid，最后响应以下内容

商品的编号：XX

购买的数量：XX

用户的编号：XX

/shopping/30&1&5

课后任务

 (1)复习今天内容，整理思维导图

 (2)练习：创建WEB服务器，设置端口，添加路由(get  /reg)，响应注册的文件reg.html，点击提交向服务器发送请求(post  /myreg)，创建路由接收请求，并获取传递的数据，响应“注册成功”

 (3)预习nodeyojs第5天  中间件、正则表达式

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml7692\wps1.jpg)

## day14

商品模块 /product

 列表、删除、修改

 /product/list  /product/delete  /product/update

用户模块 /user

 列表、删除、修改

 /user/list  /user/delete  /user/update

### 1.路由器

用来管理路由，通常将一个模块下的路由放到一个路由器下，例如用户模块下额路由放入的路由放入到用户路由器

```javascript
//引入express
const express = require('express');
//创建路由器对象
const r = express.Router();
//添加路由(get  /list)响应’用户列表‘
r.get('/list',(req,res)=>{
    res.send('用户列表');
})
//导出路由器对象
module.exports = r;
```

```javascript
// 在WEB服务器下引入并挂载
app.use('/user',userRooter);
```

### 2.中间件

用于拦截对路由的请求，也可以做出响应，允许往后继续执行（下一个中间件或者路由）；本质上是一个函数，一旦拦截到会自动调用这个函数。

![image-20210525114205835](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210525114205835.png)

分为五大类：应用级中间件、路由级中间件、内置中间件、第三方中间件、错误处理中间件

#### （1）应用级中间件

也称为自定义中间件

```javascript
//添加中间件，拦截对/list的请求,一旦拦截调用fn
function fn(req,res,next) {
    console.log('拦截了对/list的请求');
//    获取get显示传递的数据
    console.log(req.query);
//    检测是否为管理员
//    如果用户名不是root，响应请提供管理员账户
    if(req.query.uname !== 'root'){
        res.send('请提供管理员账户');
    }else{
    //    否则是管理员root，往后继续执行，可能是下一个中间件或者是路由
    //    next是一个函数形式,回调函数
        next();
    }
}
app.use('/list',fn);
```

app.use(要拦截的URL，回调函数)

例如：app.use('/list',()=>{})

function fn(req,res,next){

next()//往后继续执行，可能是下一个中间件或者是路由

}

中间件函数可以被复用

练习：创建添加到购物车的路由（get  /shopping),传递商品的价格price，加中间件拦截该路由，对价格大8折，左后在路由中响应

’商品的最终价格：XXX‘

？price = XXX

```javascript
//添加中间件，拦截对/shopping的请求
function p(req,res,next) {
//     获取请求的数据
    console.log(req.query);
//    打折
    req.query.price *= 0.8;
//    往后继续执行
    next();
}
app.use('/shopping',p);
//添加到购物车路由（get   /shopping)
app.get('/shopping',(req,res)=>{
    //获取传递的数据
    console.log(req.query);
    res.send(`商品的最终价格为: ${req.query.price}    `);
})
```

#### （2）路由级中间件

路由器的使用

app.use(要拦截的URL，路由器)

#### （3）内置中间件

托管静态资源（html，css，js，图像...）

如果浏览器端要请求静态资源，不需要通过路由响应文件，而是自动去寻找文件。

app.use(**express.static('要托管的目录')**)；

练习：再次托管静态资源到files目录，如果public和files目录出现相同的文件名称，哪一个起作用  ：第一个起作用

```javascript
//托管静态资源：如果浏览器端要请求静态资源，自动到public目录寻找
//内置中间件
app.use(express.static('./public'));// ./public:要托管的位置
    /*
     练习：再次托管静态资源到files目录，
     如果public和files目录出现相同的文件名称，哪一个起作用
     */
app.use(express.static('./files'));
```

练习：编写文件05_three.js,创建web服务器，设置端口8080；托管静态资源到public目录，新建文件login.html，点击提交向服务器发送（post  /login),创建路由，获取传递的数据，响应’登陆成功‘

![image-20210525170649298](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210525170649298.png)

#### （4）第三方中间件

第三方中间件属于第三方模块，需先去下载安装

npm install body-parser

```javascript
const express = require('express');
// 1.引入body-parser中间件
const bodyParser = require('body-parser');
const app = express();
app.listen(8080);
//托管静态资源
app.use(express.static('./public'));
//2.使用body—parser中间件，将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
    extended:true
    //是否使用第三方的查询字符串模块qs
    // 如果不使用（false）就会使用核心模块下的querystring
}));
app.post('/login.html',(req,res)=>{
 // 3.在路由中获取post传递的数据   req.body
 //   前提使用了中间件
    console.log(req.body);
```

### 3.mysql模块

属于第三方模块，Node.js下操作mysql数据库的模块

下载安装

npm install mysql

连接

mysql  -uroot

mysql.exe  -h127.0.0.1  -p3306  -uroot  -p

mysql  -uroot<拖拽脚本     回车

insert  into emp  values（.....）

delete  from  emp  where  eid = 1；

update  emp  set  sex = 1，...  where  eid = 2；

select  *  from  emp  where...

## day15

### 1.mysql模块

（1）创建普通连接

createConnection（）

（2）执行SQL命令

query（SQL命令，回调函数）

属于异步操作，通过回调函数获取结果

err      可能产生的错误结果

result  成功的结果

（3）创建连接池

createPool（）

连接池

取一个连接去连接，连接后归还

```javascript
//引入连接池对象
const pool = require('../pool.js');
```

```javascript
//创建连接池对象
const pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'tedu',
    connectionLimit:15
});
//导出连接池对象
module.exports = pool;
```

```javascript
//获取员工资源的接口
//通过路由来完成的接口 （get  /v1/emps）
// http://127.0.0.1:8080/v1/emps/1
app.get('/v1/emps/:eid',(req,res)=>{
    //获取路由传参的数据
    let obj = req.params;
    console.log(obj);
    //执行SQL命令，查询编号对应的员工
pool.query('select * from emp where eid = ?',[obj.eid],(err,result)=>{
    if(err)  throw err;
    console.log(result);
    res.send({
        code:200,
        msg:'获取成功',
        data:result
    })
})
})
```

（4）占位符（？）

SQL注入：在让用户提供的值中出现了对数据库有攻击的命令

解决方法：对所有用户提供的值进行过滤

所有SQL命令中需要拼接的用户的值，先进行过滤，然后再去替换占位符

query('delete from emp where eid = ?',[18],(err,result)=>{   })

```javascript
let str = '小离 " or " 1';
//'select * from emp where ename ="' + '小离 " or " 1' + '"'  //所有数据都暴露出来
//方法一：let str = '小离 \' or \' 1';
//方法二：占位符（？），mysql模块提供的，用于过滤用户提供的数据
pool.query('select * from emp where ename=?',[str],(err,result)=>{
    if(err)  throw err;
    console.log(result);
});
```

 下载软件：apipost  用于接口测试

 <https://www.apipost.cn/download.html>

### 2.正则表达式

#### （1）最简单规则就是要找到的关键词正文

#### （2）字符集：规定一位字符上多种备选字的列表，当某一位字符上有多种备选字时，用字符集  []

#### （3）[]中部分备选字时连续的：[x-x]

要匹配一位汉字：[\u4e00-\u9fa5]      //包含所有汉字

#### (4)预定义字符集

\d :[0-9]

\w:[0-9A-Za-z]

\s:空格、制表符tab等空白

.  ：任意字符

#### （5）数量词

1.有明确数量边界的数量词
    字符集{n}    表示字符集必须重复n次，不能多也不能少
    字符集{n,m}  表示字符集至少重复n次，最多重复m次，
   比如: \d{4,6} 表示4到6位数字
    字符集{n,}  表示字符集匹配的内容至少重复n次，多了不限，比如：\d{6,} 表示6位以上数字

2.没有明确数量边界的数量词

  *可有可无，多了不限
  ?  可有可无，最多一次

  +至少一次，多了不限

  eg：([我卧]|wo)\s*([草艹槽]|cao)

   ( \ +86|0086) ——+是正则有功能的特殊符号，可是这里不希望+当做特殊功能使用，只当做普通字符匹配，所以用\+阻止正则解析+为数量词。

  至少一个空字符 : \s+
       之前所有，整体可有可无，最多一次： ()?

  eg：定义完整手机号规则

  ( \ +86|0086)\s+)?1[3-9]\d{9}

#### （6）选择和分组

**选择**，是指在多个子规则中选其一匹配

今后，只要在多个子规则中选其一匹配时，就用选择
如何:     子规则1   |   子规则2  
读作:  满足规则1 或  满足规则2
“|”选择符只分左右，不考虑单个字符

eg：草|cao

**分组**，将多个子规则视为一组，再和分组外的规则匹配
只要希望将多个子规则视为一个整体，再和其它规则匹配时，就用分组
如何： 其它规则 (多个子规则)

eg：我（草|cao）

#### （7）指定匹配位置

^字符串的开头位置

$字符串的结尾位置

\b 表示单词边界，可匹配：空格，标点符号，字符串开头和结尾等可将一个单词与其它单词分割开的符号。

问题: 只写\b什么也匹配不到
原因: 其实\b是”零宽”，只匹配位置，不匹配字符
所以: 下边这句话其实有8个单词边界

you can you up

#### (8)API

##### 1.查找一个固定不变的敏感词在字符串中出现的位置

a.回顾：var i = str.indexOf（"敏感词"，fromi）
位置<-的<-'敏感词'

b.在字符串str中，从fromi位置开始，查找下一个’敏感词‘出现的位置。

c.简写：第二个参数fromi可省略，如果省略fromi，则默认从0位置（开头）查找第一个’敏感词‘出现的位置

d.返回值：如果找到敏感词，这返回敏感词第一个字的下标位置i。如果没找到敏感词，则返回-1.

eg：检查是否包含敏感词”我草“

```html
var i = str.indexOf('我草');
if(i != -1){
document.write(`<h1 style='color:red')管理员：发现敏感词</h>`}else{
document.write(`<h1 style='color:green'>
    然哥:${msg}<!--显示“然哥说：XXXX”-->
    </h1>`)
}
```

##### 2.用正则表达式模糊查找多种正则表达式的位置

a.var i = str.search（/正则/);

b.在字符串str中，从fromi位置开始，查找下一个’敏感词‘出现的位置。

c.简写：第二个参数fromi可省略，如果省略fromi，则默认从0位置（开头）查找第一个’敏感词‘出现的位置

d.返回值：如果找到敏感词，这返回敏感词第一个字的下标位置i。如果没找到敏感词，则返回-1.

问题：只能返回敏感词的位置，不能返回敏感词的内容

```html
var i = str.search(/([我卧]|wo)\s*([草艹槽]|cao)/);
if(i != -1){
document.write(`<h1 style='color:red')管理员：发现敏感词</h>`}else{
document.write(`<h1 style='color:green'>
    然哥:${msg}<!--显示“然哥说：XXXX”-->
    </h1>`)
}
```

##### 3.获取敏感词的内容

a.var arr = str.match(/正则/i)

​       匹配

b.用正则去匹配str中第一个符合要求的敏感词

c.返回值：

​ 1）如果找敏感词，就同时返回一个数组！

- 数组中包括：这个敏感词的内容和敏感词第一个字的位置

- 数组结构：（2个房间（元素））

  [

  ​ '0':'敏感词的内容，

  ​ ’index‘：敏感词第一个字的位置

  ]

  js中有两种数组：索引数组和关联数组

  索引数组：所有元素的下标都是数字的数组  var arr=[10,20,30,40]

  关联数组：所有元素的下标都是自定义的字符串名称的数组

  var ym=[]

  ym["math"]=98

  ym["eng"]=91

  结果：[

  "math":98,

  "eng":91]

- 这个敏感词的内容和敏感词第一个字的位置，如果找不到敏感词，返回null

  d.解决match默认只能查找第一个敏感词，无法查找字符串中所有敏感词：在match中正则第二个/后面加**/g** ，意味global全部，但是只能返回敏感词的内容，无法返回位置

  var arr = str.match(/正则/**g**)

  总结：1.想获取第一个敏感词的内容和位置：就用match不加g

  2.获取所有敏感词的内容，不关心位置，就用match加g

​ 2）

正则表达式完整视频
 <https://pan.baidu.com/s/1IgYS8oGBrRgZQropPUTnoA> 提取码：nbx3
 正则相关函数的用法总结
<https://pan.baidu.com/s/1Rvqr-5UI7NxoxArdgxyRhg> 提取码：08yj

### 3.RESTful接口（API）

接口：后端为前端提供的动态资源（数据、后端验证....）属于后端软件

RESTful是一种接口设计风格（规范）

动态资源就是一个URL形式

#### （1）URL

所有的资源都需要版本号，复数形式

例如：请求员工资源

<http://127.0.0.1:8080/>**v1**/emp**s**               多个资源

​                                  版本号/资源名称

版本2的用户资源：

<http://127.0.0.1:8080/v2/user>**s**                多个资源

<http://127.0.0.1:8080/v2/users/>`<u>`3</u>             单个资源

​                                                      编号

<http://127.0.0.1:8080/v2/users/checkuname>   检测用户名

​                                                     对资源的特殊操作

app.get('/v2/users',()=>{})    //在路由中用到

#### （2）请求方法

对资源的操作方式：增删改查      浏览器只能发送get和post

get          获取资源

delete    删除资源

post       新建资源

put         修改资源

练习：添加路由，删除某一个用户用户资源

app.delete('/v2/users/:uid',(req,res)=>{    })

```javascript
app.delete('/v1/emps/:eid',(req,res)=>{
//    获取路由传参的数据
    let obj = req.params;
    console.log(obj);
//    执行SQL命令
    pool.query('delete from emp where eid = ?',[obj.eid],(err,result)=>{
        if(err)  throw err;
        console.log(result);
    //    返回的结果是对象
// 如果对象下的affectRows属性值为0说明删除失败，否则删除成功
        if(result.affectedRows === 0){
            res.send({code:201,msg:'删除失败'})
        }else{
            res.send({code:200,msg:'删除成功'})
        }
    })
})
```

#### （3）过滤数据

查询的结果有太多的记录，需要过滤想要的数据

eg：分页

<http://127.0.0.1:8080/v2/users>?**pno=1&count=10**

​                                                         页码     每页数据量

eg：获取商品的价格区间

<http://127.0.0.1:8080/v2/products>?**price1=10000&price2=20000**

#### （4）返回结果

包含状态码、消息、数据（不一定都有）

登陆的接口

{   //json对象

​ "code"：200，

​ "msg"："登录成功"

}

获取员工数据

{

​ “code”：200，

​ “msg”：“获取成功”，

​ “data”：[......]  //获取的员工数据

}

课后任务

完成删除员工的接口

​ 请求方法 delete    /v1/emps/编号

​ 响应结果 {code：200，msg：’删除成功‘}

## day16

练习：在app.js下创建服务器并设置端口

练习：创建路由器目录router，目录下包含由用户路由器user.js，创建路由器对象，添加用户注册的路由

（post  /reg）,响应{code:200,msg:'注册成功'}

练习：在web服务器app.js中引入用户路由器(./router/user.js)，并挂载，添加前缀/v1/users

/reg

/v1/users/reg

header:get  传递的数据

​   body ：

练习:在user.js中编写用户登录的路由(post   /login),获取post请求的数据,验证各项是否为空,执行SQL命令,如果查询到了用户名和密码同时匹配的数据就是登陆成功,否则登陆失败

练习:编写按照编号查找员工(get  /编号),获取传递的编号,执行SQL命令,查询编号对应的用户,如果每页查询到{code:201,msg:"该用户不存在"},否则查询到{code:200,msg:'查询成功',data:[..]}

练习:编写按照编号删除员工(delete  /编号),获取传递的编号,执行SQL命令,删除编号对应的用户,如果删除失败{code:201,msg:'删除失败'},否则删除成功{code:200,msg:'删除成功'}  

```javascript
http://127.0.0.1:8080/v1/users/:eid
```

```test
![image-20210527173657131](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210527173657131.png)

http://127.0.0.1:8080/v1/users/3


git下载地址

https://pc.qq.com/detail/13/detail_22693.html

 

码云注册账号

https://gitee.com/

GitHub注册账号

https://github.com
```
