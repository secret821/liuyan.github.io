# HTML

## day01

|      |
| ---- |
|      |
|      |

### 2.1

：HTML[超文本标记语言]

—作用：创建网页并且添加网页内容

#### 3.中间基本结构

```html
<html>        #根标签 ，在文件最外标签
 <head></head>   #网页头部：全局定义
    <body></body>   #网页主体  ：用户可见区域

</html>
```

4.PC端常用浏览器/概念

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml19496\wps2.jpg)

PC端浏览器:谷歌chrome;IE;火狐;Safari

移动端浏览器:Safari[苹果];chrome[安卓]

浏览器内核

浏览器内核[内核在浏览器内部用于渲染和解析html；css模块]

常用内核：

浏览器               内核

IE        Trident

Chrome   WebKit

Safari    WebKit[Blink WebKit 升级]

## 小程序：面试题浏览器工作原理

软件项目开发两个不同的体系

B/S :  brows  server     [浏览器/服务器]     :网站；B站：抖音

C/S :   client server       [客户机/服务器]     :QQ;大型网络游戏

服务器：

​ --存储数据：   #mysql      oracle     sql server

​ --完成复杂功能  #nodejs   php  java  c#

浏览器：Chrome;火狐；Safari

### 三：HTML

HTML：Hyper Text Markup Language 超文本标记语言

-文本：文本数字

-超文本：在文本基础之上添加图片；声音；动画；视频   超越文本限制                             超链接  <a></a>

-标记：[标签；标记；元素]    <关键词>

`<div></div>`  被<>包裹中间关键词，具备一些功能

-标记分类

#### （1）单标记<关键字>   实例：`<br><input type='text'>`

#### （2）双标记  必须成对出现     <关键字></关键字>

-标签嵌套

​ 在双标签的内容部分，编写其他标签形成功能叠加

`<div>`

```html
  <div>

     <img>

   </div>

</div>
```

注意：

1:嵌套要有顺序不乱顺 `<div> <div></div></div>`

2:嵌套代码要缩进--美观  二个空格

3:在书写标签中关键字字母小写

##### -标记中属性和属性值

可以通过属性和属性值增加标签功能

（1）通用属性：每个标签都可以使用属性

​   id:给标签创建一个唯一标识（编号）  #在网页中唯一

​   style:给标签添加内联样式 #网页美化

​   class:引入样式名       #网页美化

实例：`<div id="box2"></div>`

（2）专用属性：针对某个标签使用属性

`<input type="text" value="">`

 注释

 (1)注释功能:解析下面代码功能   #你  后续工程师

 (2)注释不能被浏览器解析

 语法: <!--注释内容-->

### HTML文档[网页]

（1）基本标签

```html
  <!DOCTYPE html>   #网页声明:当前网页HTML5.0标准
  <html>
    <head></head>  #头部
    <body></body>  #主体
  </html>
```

（2）head头部标签：定义全局标签功能特殊--重点

```html
<title></title>
```

`<title></title>`网页标签：中间文字显示在浏览器标签左上角

## 通常：保存网站名称

`<meta charset="utf-8">`指定网页显示编码  #唯一  utf-8

`<meta name="description"content="">`     网站介绍（项目用）

`<meta name="keywords"content="">`   网站关键字（项目用）

`<meta http-equiv="X-UA-Compatible"content="IE=edge"/>`了解

## 了解即可：只针对于IE浏览器识别使用

## 指定IE浏览器—请使用你最新内核来渲染网页

## IE(10%--100%)IE6;IE7(IE6,IE7)

  示例:淘宝
  description="学子商城是WEB前端教学性网站,功能完备...."
  keywords="笔记本,PAD,手机"

`<body></body>`网页主体内容，浏览器中可见部分

专用属性：bgcolor     #指定body标签背景颜色   #了解  旧项目

​     text     #指定body标签文字颜色   #了解  旧项目

## html5标准中规定所有外观修饰都要通过CSS完成

## 以上两个属性为了了解项目的功能

### 文本类型标签  #此类标签中间的内容时文本字符串

（1）标题

`<h1>`标题</h1>`<h2>`标题</h2>....`<h6>`</h6>

  功能:

  -字体大小变化 h1最大 h6最小  #文本加粗

  -单独成行             #上下有垂直间距

  \#h1保存当前网页中最重要的文字  "网站名称"

***要求：一个网页只能使用一次h1      #百度搜索引擎建议***

***属性：***

left 左侧  center居中  right右侧

HTML5标准建议位置使用CSS完成，以上属性维护旧项目

（2）段落`<p></p>`   #多行文本

单独成行，上下方向有垂直间距

属性：align   文本水平方各对齐的方式  left；center；right

HTML5标准建议位置使用CSS完成，以上属性维护旧项目

特点

--文本在一个段落中根据浏览器宽度**自动换行**

--段落与段落之间有空隙

--如果希望在文本中强制换行使用 `<br>`   #break打断 (了解)

（3）水平分割符（了解）

```html
<hr>
#在网页水平方向显示一条线
#属性：align水平方向位置   wigth="" 宽度   size=""厚度  color颜色
```

***HTML5标准建议位置使用CSS完成，以上属性维护旧项目***

（4）特殊字符(重点)

&nbsp；  空格

&lt；   小于号           &gt；大于号

&copy；   版权      &reg 注册商标            &yen;人民币

（5）预格式化标签（了解）  `<pre></pre>`

把空格和回车保存在网页中显示

`<pre>abc       abc</pre>`

（6）文本样式标签（了解）

`<b></b>`        `<strong></strong>`    文本加粗

`<i></i>`  `<em></em>`         斜体

`<s></s>`        `<del></del>`          删除线

`<u></u>`                 下划线

上面网页三个方格组件

（1）`<div></div>`     块：区域--作用：设计网页布局

（2）`<span></span>`文本标签（一行）

分析：

--最外层   `<div></div>`         表示一个方格

--里层    `<span></span>`     文本标签（一行）

标类型

1. | 块级标签               | 行内标签                                                     | 行内块标签                                          |
   | ---------------------- | ------------------------------------------------------------ | --------------------------------------------------- |
   | `<div><h1>..<h6><p>`    | `<span><i><b><s>`                                              | `<input>`                                             |
   | 单独成行，排列从上向下 | -与其他的行内标签，共用一行，一行放不下换行                      -指定：宽度高度无效 | -与其它的标签共用一行，一行放不下                 - |

   图像标签

   | 在网页中`<img>`标签来定义网页中图像                            |
   | ------------------------------------------------------------ |
   | 单词：image缩写原意图像                                      |
   | 属性：src  必须添加属性，用于指定图像文件的路径和文件名（重点） |
   | width 图像宽度（重点）                                       |
   | height图像高度（重点）                                       |
   | title提示文本，当鼠标移动到图像上显示文本内容 （重点）       |
   | alt替换文本，当图像不能正确显示是出现文本（重点）            |

1：使用今天所有标签完成示例

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml15288\wps2.jpg)

2:看视频-浏览器工作原理--面试题

| <https://pan.baidu.com/s/1vikekNymEebMwvSg92JeDg提取码:8ytd> |
| ---------------------------------------------------------- |
| 课后面试题-项目>面试题>浏览器原理部分                      |

3:学有余力同学--提前看

| <https://pan.baidu.com/s/1vikekNymEebMwvSg92JeDg提取码:8ytd> |
| ---------------------------------------------------------- |
| 课前准备视频_ajax_av                                       |

## 面试题

一、浏览器如何渲染UI？

1.浏览器获取**HTML文件**，对文件进行解析，（根据标签）形成DOM Tree  内存中对象

2.进行CSS解析，生成Style Rules

3.将DOM Tree与Style Rules 合成为Render Tree 渲染树

4.进入布局阶段，为**每个节点**分配一个对应出现在屏幕上的确切坐标

5.调用CPU进行绘制，遍历Render Tree的节点，并将元素呈现出来

![image-20210531202334234](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210531202334234.png)

二、浏览器如何解析CSS选择器？

浏览器会**从右到左**解析CSS选择器

DOM Tree 与Style Rules合成为Render Tree，实际上是需要将Style Rules附着到DOM Tree上，因此需要根据选择器提供的信息对DOM Tree进行遍历，才能将样式附着到对应的DOM元素上

三、DOM Tree是如何构建的？

1.转码，浏览器根据接收到的二进制数据按照指定编码转化为HTML字符串

2.生成Tokens：之后开始parser（解析），浏览器会将HTML字符串解析成Tokens

3.构建Nodes：对Node添加特定的属性，通过指针确定Node的父、子、兄弟关系和所属treeScope

4.生成DOM Tree：通过node包含的指针确定的关系构建出DOM Tree

四、浏览器重绘与重排的区别?
·重排:部分渲染树（或者整个渲染树）需要**重新分析**并且**节点尺寸**需要**重新计算**，表现为**重新生成布局，重新排列元素**

·重绘:由于节点的几何屋性(圆方)发生改变或者由于样式发生改变，例如改变元素背景色时，**屏幕上的部分内容需要更新**，表现为某些元素的外观被改变单单改变元素的外观
重排和重绘代价是高昂的，它们会破坏用户体验，并且让UI展示非常迟缓，而相比之下重排的性能影响更大，在两者无法走免的情况下，一般我们宁可选择代价更小的重绘。
『重绘』不一定会出现『重排』，『重排』必然会出现『重绘』。

五、如何会触发？

- 1.任何改变用来构建渲染树的信息都会导致一次重排或重绘:
  2.添加、删除、更新DOM节点
  3.通过display: none隐藏一个DOM节点-触发重排和重绘
  4.通过visibility: hidden隐藏一个DOM节点-只触发重绘，因为没有几何变化
  5.几何变化移动或者给页面中的DOM节点添加动画
  6.添加一个样式表，调整样式属性
  7.用户行为，例如调整窗大小，改变字号，或者滚动。

避免：

1.集中改变样式

2.使用DocumentFragment，创建一个游离于DOM数以外的节点，集中操作

3.提升为合成层：交给GPU合成

六、![image-20210608194006980](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210608194006980.png)

输出结果为：0 1 2 3 3 3

七、输出结果为：10

```javascript
        var z=10;
        //var foo=function(){}
        function foo(){
            console.log(z);
        }
        (function(funArg){
            // funArc = function(){console.log(z);}
            var z=20;
            // 调用传递进来的函数
            // 匿名函数自调用
            // 本质上还是在调用foo这个函数
            // (function(){console.log(z);})()
            funArg();
        })(foo);
```

本质上是把匿名函数foo()传递过去

八：查询一个字符串中出现次数最多的一个字符，显示该字符和次数

```javascript
        var str = 'javascript';
        // 准备对象，用于记录每个字符出现的次数
        var obj = {};
        // 遍历字符串
        // 声明变量保存最多次数的字符
        var max = 1;
        var c;
        for(var i = 0;i<str.length;i++){
            // 先保存遍历的每个字符串
            var char = str[i];
            // console.log(char);
            // 如果对象中没有遍历到这个字符，则把该字符添加到对象中，设置为1
            // 否则已经存在，在原来基础上+1
            if(obj[char] === undefined){
                obj[char] = 1;
            }else{
                obj[char]++;
                // 加一后，判断当前的次数是否超过当前记录的最多次数
                // 如果大于，则把当前的次数记录下来,同时还要记录对应的字符是哪一个
                
                if(obj[char]>max){
                    max = obj[char];
                    c = char;
                }
        }
    }       
            console.log(c+":"+max);
```

九：![image-20210608202615840](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210608202615840.png)

## day02

### （1）图像类型

| -jpg/jpeg          色彩丰富/不支持动画，透明图片    清晰     |
| ------------------------------------------------------------ |
| -png                色彩比较丰富/支持透明图片        图标；按钮 |
| -gif                  色彩差/支持动画                       小动态图 |
| -webp             谷歌2015以上所有的优点，小50%     兼容性差 |
| -了解               base64 将一张图片转换数字保存，显示时候再转为图片 |

 通过站长工具 <http://tool.chinaz.com/tools/imgtobase/>

图像路径

| （1）相对路径：以你当前网页为主附近路径                      |
| ------------------------------------------------------------ |
| -兄弟路径       #直接图片名称      src="1.jpg"               |
| -子目录路径    #先写目录名称再写图片名  src=:img/1.jpg"      |
| -父目录路径     \#先写.. 父目录/再写图片名 src="../1.jpg"    |
| (2)绝对路径   网络绝对路径以http开头路径                     |
| `<img src="https://www.baidu.com/img/PC_bdfdce6f6e5f722db0aabdf32d01a03a.gif">` |

![image-20210601095452226](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210601095452226.png)

### （2）超链接（重点）

| 作用:当用户点击超链接'标签中文字'会自动跳另一网页 |
| ------------------------------------------------- |
| 属性：href=""   指定跳转后目标网页地址            |
| target    #目标 指定跳转方式                      |
| _self       默认：在当前标签中打开新网页          |
| _blank    打开新标签显示新网页，原先标签保存      |
| eg： 2.html     -> 跳->    3.html                 |

```html
2.html
<a href="3.html">跳到3.html</a>#在当前标签显示3.html
<a href="3.html"target="_blank">跳</a>#打开新标签显示3.html
```

```html
语法：<a href="目标网页地址"  target="跳转方式"> 文字 </a>
```

超链接扩展：小技巧

-（1）下载文件   `<a href="z.zip">`点击下载

注意事项：不能下载 a.png    a.pdf    a.html     ->a.zip

-（2）发送邮件   `<a href="mailto:||@tedu.cn">`发邮件

注意事项：启动电脑发送邮件并且帮你添加收件人

-（3）返回网页顶部 `<a href="#">`返回网页顶部

-（4）阻止超链接跳转   `<a href="javscript">`不跳

***作用***

（1）需要超链接外观

（2）通过程序JavaScript完成跳转

#### #锚点                                                  -了解（旧项目）

-作用：在当前网页内部上下跳转

-实现

  (1)先在网页不同位置中定义记号(锚点)

  (2)创建a标记跳转指定记号(锚点)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml18048\wps1.jpg)

实现功能

（1）定义记号（锚点）    `<a id="记号名称">`

（2）定义超链接跳转指定记录（锚点）

`<a href="#记号名称">`文字

eg：

1.定义记号         `<a id="top">`

2.定义超链接     `<a href="#top">`回到顶部

注意事项

1.最新标准 使用id定义锚点，旧标准定义锚点  name=“top”

```html
<h1>锚点练习</h1>
<!--点击文字跳第一个锚点-->
<h2><a href="#m1">你好，李焕英</a> </h2>
<h2><a href="#m2">唐人街探案3</a></h2>
<h2><a href="#m3">悬崖之上</a></h2>
<hr>
<!--定义锚点-->
<a id="m1"></a>
<img src="img/你好，李焕英.jpg">
    <p>
        该片根据2016年的同名小品及贾玲亲身经历改编，讲述了刚考上大学的女孩贾晓玲在一天之内经历了人生的大起大落，在情绪失控中，意外穿越回八十年代，与20年前与正值青春的母亲李焕英相遇的故事 [21]  。
    </p>
</a>
```

练习：
1.创建三个文本标签中间保存三部电影名称

2.三部电影图片，电影介绍

3.点击电影名称跳对应电影图片`<img>`与介绍`<p>`

### （3）表格

| 表格：1996-2000 原来表格功能设计网页。表格设计网页效率非常低，现不再使用表格设计网页，如果有比较整齐的数据（横行竖列）显示可以用table |
| ------------------------------------------------------------ |
| #通常见于企业内部软件项目                                    |
| table标签属性（H5标准外观内容一定要用css修改）               |
| border=“1”           设置表格边框宽度    1像素               |
| width="800"         设置表格宽度    800像素                  |
| heigth="1"            设置表格高度    1像素                  |
| bgcolor=“”             设置表格背景颜色                      |
| bordercolor=“”     设置表格边框颜色                          |
| cellspacing=“”       设置单元格和单元格之间距离              |
| cellpadding=“”       设置内容与边框之间距离                  |

```html
标准语法：
<table>            #表格
 <tr>           #表格中行  table row
  <td></td>  #行单元格  table data
 <tr>
</table>
```

练习：

1.创建网页  7_学生表.html

2.创建表格3行4列，表格宽度800[编号  头像  姓名  班级]

3.表格边框   1/背景颜色    #808080/表格居中

4.表格中单元格与单元格之间距离0

| tr（行）属性          -了解                                  |
| ------------------------------------------------------------ |
| align=“”          left/center/right        #设置td中文本对齐方式 |
| valign=“”        top/middle/bottom  #设置td中文本垂直对齐方式 |
| bgcolor=“”                                                   |

| td（单元格）属性                                             |
| ------------------------------------------------------------ |
| width；height；align；valign                                 |
| 特殊属性：colspan  rowspan      合并列  合并行     #不规则表格 |

| 不规则的表格                                           |
| ------------------------------------------------------ |
| （1）colspan=“n”       跨列合并（左右）                |
| 向右合并n个单元格（n包含自己单元格）被合并的单元格删除 |
| （2）rowspan=“n”      跨行合并（上下）                 |
| 向下合并n个单元格（n包含自动单元格）初合并的单元格删除 |

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28108\wps1.jpg)

表格内部可选标签          （了解）

(1)表格标题 `<caption>`学生表</caption>

(2)行列标题 `<th></th>`   替换td 出现居中加粗文字

(3)分组   `<thead></thead>`  表格头

​      `<tbody></tbody>`  表格主体

​      `<tfooter></tfooter>` 表格底部[脚]

\#如果表格中没有添加分组标签，浏览器自动添加tbody标签

\#将所有tr添加进去

\#了解浏览器完成哪些自动操作

\#调错控制台--html出错 css出错 js出错 网络出错   重点

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28108\wps3.jpg)

Elements 元素   #浏览器经过解析后最终结果

Console  控制台  #调试网页中js程序

NetWork 网络   #唯一调试 AJAX

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28108\wps4.jpg)  选中网页中某个标签:真正大小样式属性

作业

1:使用table表格完成不规则表格

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28108\wps2.jpg)

2:提前预习ajax视频 :课前准备视频_ajax_avi

3:代码自己完成

 运行代码xz  

 (1)启动数据库  当前mysql有xz库

 (2)启动服务器  node app.js

 (3)运行网页   <http://127.0.0.1:3000/pro3/01_ajax对象.html>

## AJAX

任务：向服务器端发送请求，并且在服务器端获取数据

![image-20210601200219893](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210601200219893.png)

1.XMLHTMLRequest  ajax核心

功能：向服务器发送请求并且接收服务器返回结果

优点：异步->用户优雅

如何使用：

（1）通过new关键字创建ajax对象

var xhr = new XMLHttpRequest（）；

（2）了解xhr属性方法

**readyState**         记录xhr当前状态，通过此属性对对象了解xhr工作到了那个节点

- 0     UNSENT  xhr对象被创建，但尚未调用open（）方法
- 1     OPENED  open（）方法已经被调用

- 2    HEADERS_RECEIVEo

  send（）：发送请求并且服务器已经接收到返回的数据

  send()方法已经被调用，并且头部和状态已经可获得

- 3    LOADING下载中；  responseText属性已经包含部分数据。

- 4   DONE下载操作已完成。

GET

```javascript
    //1.创建对象：ajax
    var xhr = new XMLHttpRequest();
//    2.创建连接
    var method = "GET";
    var url = "http://127.0.0.1:8080";
    xhr.open(method,url,true);
//    3.创建事件
    xhr.onreadystatechange = function () {
        continue.log(xhr.readyState);
//        5.接收服务器
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            console.log(xhr.responseText);
        }
    }

//    4.发送请求
    xhr.send();
```

（3）学习xhr如何发送请求

## day03

### 3.1列表（重点）

作用：列表标签多用于网页布局（设计）  [div;span;ul;li]

-菜单列表       --导航列表      --轮播图列表

--创建列表标签

​ --定义列表标签类型

```html
 --定义列表标签类型
 <ol></ol>    order list    有序列表   #在列表前 1 2 3 4
    <ul></ul>    unroder list  无序列表   #在列表前  ***
    --添加列表项（列表标签中间内容）
 <li></li>  list item      列表项目[内容]
```

-有序列表标签属性（知道）

type=“i”         列表项的样式

​     1   默认值1 2 3 4

​           a A       a b c d

​           i l          罗马

start="i"          开始序号

-无序列表标签属性  type（知道）

​ disc  实心小黑点

​ circe       空心小黑点

​ square   实心矩形

​ none      去掉列表前标记

\#列表前数字符号外观太差不能满足商业要求

--列表嵌套

​ 所有的嵌套必须写在li中

```html
<ul>
    <li><ul>
        <li></li><li></li>
        </ul></li>
    <li></li>
    <li></li>
</ul>
--定义列表
<dl>
    <dt>定义列表单说明</dt>
    <dd>内容1</dd><dd>内容2</dd>
</dl>
```

练习：使用列表完成如下任务：ul   li

![image-20210602101024990](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210602101024990.png)

```html
<ul style="list-style: none;padding: 0;">
    #去除前面原点和空格
```

2：列表

```html
<ul>
    <li>
    <a href="#">
        <img src="">
        </a>
    </li>
</ul>
```

结构标记（了解）

HTML5.0   新增加结构标签，希望一部分替换div

```html
<header></header>       定义网页内容头部
<footer></footer>       定义网页内容底部
<section></section>     定义网页主体部分
<nav></nav>             定义导航菜单
<aside></aside>         定义侧边栏
<article></article>     定义文本内容，留言
#标签从名称上看处标签作用，更容易被网络爬虫搜索[百度]到
```

#### 3:2表单（重点）

作用：收集用户数据：用户名  密码   搜索文字

输入框、登录

哪些项目常用表单

--企业内部项目（非常频繁使用）                 报销；请假.....

--互联网项目                                                    注册；登录；购物车...

--表单的组成部分

​ 表单由三个部分组成=表单域+表单控件+提示消息

##### -表单域标签      `<form></form>`

​ ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml6224\wps1.jpg)

| 属性：                                                       |
| ------------------------------------------------------------ |
| --method     表单提交方式[向服务器发送数据方式] post/put/delete/get/.... |
| GET    默认  不安全  乱码   发数量少（1K） 可见              |
| POST        安全      不乱码   发数量（不限）  不可见（隐藏） |
| #注意：如果你的操作重要用post  --用户注册[post]  用户登录[post]  查询订单列表[get] |
| --action             保存处理表单**程序地址**        通过node.js接口 |
| eg：action=“<http://127.0.0.1:8080/login>”                     |
| --enctype  附加属性                                          |
| -application/x-www-form-urlencoded       POST提交使用        |
| -text/plain                                                       发送普通文本 |
| -multpart/form-data                                     上传文件     #上传头像 |
| --表单控件（特殊标签）                                       |
| -input   基础标签9种（重点）       新input10种（了解）       |
| -textarea     多行文本域（重点）                             |
| -select         下拉选择框（重点）                           |
| -其他控件                                                    |
| --表单最常用控件                                             |
| --input    #输入    #输入框                                  |
| [     ]输入任意类型字符串，长度不限                          |
| -通用属性                                                    |
| type=“”   设置输入框的类型  text；password；hidden；reset；flie |
| name=“”  指定输入框的名字 #只有添加name属性输入框            |
| value=“”   代表输入框中的（值）的内容   #在提交时随name发送到服务器 |
| disabled    无值的属性。禁用此输入框[不能够输入任何内容]     |
| #通用：手机收到短信验证码60s之内禁用                         |

| --input type  9钟常用类型                                 |
| --------------------------------------------------------- |
| type="text"             文本输入框       显示用户输入内容 |
| type=“password”   密码输入框       隐藏用户输入内容       |
| maxlength               #最大输入字符个数（长度）         |
| readonly                  只读[只能看不能改]输入框        |
| placehoder               提示占位符                       |

| --input  按钮（小心 #按钮有自带功能）                        |
| ------------------------------------------------------------ |
| type="submit"            #提交按钮，点击此按钮表单自动触发“提交”操作   **（少用）** |
| type="button"             #普通按钮，点击此按钮表单无操作，项目中会大量使用ajax处理表单数据提交**（常用）** |
| type="reset"                #重置（清空）按钮，将表单恢复初始状态**（少用）** |
| `<button></button>`    #功能与submit按钮相同  **（少用）**     |
| #submit button  功能太多[清空输入值，重新刷新页面]           |

| --多选框单选框                                  |
| ----------------------------------------------- |
| type=“radio”             单选框[按钮]           |
| type=“checkbox”      多选框[多选按钮]           |
| #单选和多选的name属性，为了控制命名还有分组功能 |
| #单选和多选一定要定义value属性值                |
| #checked      无值属性     默认选中             |

练习：创建表单与控件完成功能

--新用户注册        a   -input text password     -checkbox    a   -button

![image-20210602161045064](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210602161045064.png)

###### 文件选择框：隐藏域；文本域

​     -文件选择框         #实现文件上传操作（上传头像；上传照片）

`<input type="file" name="">`

注意事项

[1]提交方式一定修改   POST       method=“POST”

[2]表单域当中要添加附加属性     enctype=“multipart/form-data"

## 默认情况表单将用户数据转换字符串，但是上传文件不能字符串

## 添加附加属性    表单用户数据转换 101010101010101  上传成功  数字合并图片

--隐藏域

在表单中如果存在不希望用户看到的数据则将其添加进隐藏域

eg：

记录用户修改表单时间

`<input type="hidden" name="ctime" value="202103210121400">`

`<input type="submit">`

--文本域           #如果用户填写多行文本内容需要文本域      购买商品：评论

```html
<textarea></textarea>
```

属性：

rows       #设置文本域多少行       5

cols         #设置文本域多少列       30                         #如果内容超过范围添加滚动条

eg：

商品评论

```html
<textarea name="data" rows="5" cols="30"></textarea>
```

--下拉列表

 作用:显示下拉列表菜单         #年月日 省市县  日历  地区

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml6224\wps2.jpg)

```html
<select name="">              下拉列表域
 <option></option>         下拉列表项
</select>
select标签属性         size=“1”默认选中项   multiple多选
option 属性            value=“”列表项中值  selected默认选中
```

作业

 1:创建表单

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml6224\wps3.jpg)

 2:课前预习视频         ajax  必做

 3:课前预习视频_pro>day05-预习  15段

![img](http://tts.tmooc.cn/ttsPage/messageImage/homework/2021/06/02/2.png)

使用html5标签完成如果网页效果的内容 搜狐股票

提示1:表格采用`<table>`标签

提示2:下划线采用td 样式

提示3:文字颜色调整使用 style="color:red"

提示4:表格内部小图片采用 `<img src="">`

提示5:表格上部标签采用`<h1></h1>`标签

![img](http://tts.tmooc.cn/ttsPage/messageImage/homework/2021/06/02/3.png)

使用html5标签完成如果网页效果的内容:完成京东金融注册表单

提示1:表单采用`<form>`标签

提示2:布局采用`<ul><li>`</ul>

提示3:图片采用 `<img src="">`

提示4:表格分头部`<thead>`中主体`<tbody>`和底部`<tfoot>`

提示5:按钮样式采用style="background-color:"实现

## day04

### --浮动框

作用：在一个html页面中嵌入另一个html页面`<iframe>`</iframe>

重点应用范围：如果你的网站需要第一方网站提供功能，使用iframe直接嵌入当前网页

eg：视频播放[流畅]

​  -巨额资金  

属性：
src=“”         #其他网站程序地址

width=“”

height=""            #指定此区域宽度和高度

scording=""         #去除滚动条

frameborder=“0”     #清除边框

#### --新input10个控件

功能丰富，缺点与网站网格不一致

```html
邮件  <input type="email">        验证：必须@符号，前后字符   a@a

搜索 <input type="search">        提供一个清除按钮  [x]

网站 <input type="url">               验证：http

电话 <input type="tel">               pc端没有验证

数字 <input type="number">        验证：数字  min最小值18   max70

日历 <input type = "date">         项目非常着急

月份  <input type = "month">       \#一年中第几个月

星期  <input type = "week">         \#一年中第几周

范围  <input type = "range">        \#滑动块

颜色 <input type = "color">          \#颜色选择框
```

### 3.2：AJAX    -HTTP协议

HTTP协议：网络系统中负责传递数据   [网页；图片；音频；视频]

生活：HTTP协议[图片；音频；视频]===完善快递系统[花；西瓜]

​            请求头响应头[加密；加急]          快递单[加急；加密；冰块]

​             AJAX；浏览器‘服务器                   快递小哥    发件人  收件人

#### （1）url   统一资源定位符                       统一：指定网络上任务资源[网页；图片；音频；视频]

​  <http://www.tmooc.cn/123.mp3>

​  <http://www.tmooc.cn/1.html>

--标准语法

​  `<scheme>://<user>@<pwd>@<host>:<post>/<path>?<query>`#flag

​   --`<scheme>`  方案或协议：规定使用哪种方式来获取网络资源

​    http       #通过不加密的方式来获取网络的资源           #块；通用

​    https      #通过加密方式获取网络资源                       #安全高；稍慢

​ eg：
​   <http://www.codeboy.com:9999/index.html>

​   <https://uland.taobao.com/sem/tbsearch?refpid=mm>

​   --`<user>@<pwd>`  \##早早早期网络中可以将用户名和密码填写url地址

示例: <http://tom@123/abc.com>

​   --`<host>`    访问服务器主机名称（域名；IP 地址）

  <http://www.tmooc.cn>   正确 域名

  <http://106.75.115.50>    正确 IP地址
--`<post>`     端口号    #在网络中运行的程序每一个都有唯一端口号，数字

​    mysql       3306

​    node.js     8080

在你开发程序常见错误：端口冲突

如果当前程序占用8080端口，你又启动一个程序占8080端口这种情况：端口冲突

***解决***

​ （1）关闭前面程序

​ （2）查看当前电脑中哪些端口已经被占用

​    --`<path>`   服务器目录结构（文件）

   eg：通过网络访问apache服务器中某个文件

（1）启动[xampp]   apache  80/443  [start]

（2）创建文件夹川建网页         htdocs/web2104/1.html  #网络资源

（3）http：//127.0.0.1**/web2104/1.html**      Error 404   #请求的目录不存在

​ --？`<query>`#flag

​  -查询字符串     #将客户端一些数据发送服务器通过查询字符串

​  ？id=17&type=鞋

​ --flag 锚点

#### （2）HTTP介绍

​ -名称      Htper Text transfer Protocol    超文本传输协议      #超文本[文字；图片；音频；视频]

​ -作用：规范网络中如何传递数据[文字;图片;音频；视频]

 -HTTP历史

  HTTP/0.9   1991

  HTTP/1.1   1999  #现在使用协议HTTP 标准

  HTTP/2.0   研究中[时间长]

##### -HTTP工作方式  请求和响应

​   请求数据：客户端发送服务器数据

​   响应数据：服务器发送客户端数据

​ #注意：一次请求对应一次响应，没有请求就没有响应

eg：

1.使用客户端浏览器发送一次请求。收到服务器响应

​ -打开浏览器

​ -在地址栏中输入  <http://www.codeboy.com:9999/>

​ -按回车       #当你按下回车键浏览器向服务器**发送请求**

​ -codeboy服务器将首页发送给你     #**响应数据**

#### （3）HTTP请求头/HTTP响应头（重点！！！）        #快递单

![image-20210603192254824](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210603192254824.png)

Network：网络        #网络控制面板，抓取网络中传递所有数据

[*]Disable cache：禁用缓存，希望网络中每一次数据最新

![image-20210603142728438](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210603142728438.png)：记录按钮             如果灰色再次点击红

ALL  #所有   抓取网络中所有类型数据

![image-20210603192308270](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210603192308270.png)

Name：www.codeboy.com    #获取服务器资源

Status：200                    #响应状态码  200响应成功

Type:document      #文档       此次响应数据html网页

Size:1.4KB        #文档大小

Time:136ms       #响应给你网页一共花 136ms

![image-20210603192334807](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210603192334807.png)

![image-20210603153416172](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210603153416172.png)

##### *请求数据组成

| 请求数据组成[客户端发送服务器]（快递单子） （重点）          |
| ------------------------------------------------------------ |
| 三部分组成                                                   |
| ***-请求起始行**                                 #Network面板 -->Header  标签看见 |
| GET  /  HTTP/1.1                                             |
| --GET         请求方式                    GET  POST  PUT  DELETE |
| ./           获取服务器上资源名称      #/  指 index.html  index.php  index.htm |
| -HTTP/1.1     现在浏览器与服务器使用HTTP协议版本             |
| * **-请求头**                        #Network面板-->Header标签看到 |
| Host：www.codyboy.com:9999       #请求哪台服务器上资源       |
| Connection：keep-alive     #请求服务器请打开持久连接功能（7）#提升效率 |
| Accept-Language：zh-CN       #浏览器告诉服务器我接收的自然语言#zh简体中文  CN中国 |
| Accept-Encoding: gizp   #浏览器告诉服务器可以使用gzip压缩文件 |
| User-Agent:Windows NT 10.0 Chrome/66   #浏览器自我介绍  win10 用的浏览器为chrome66 |
| ***-请求主体**          #Network面板-->Headers  标签看见     |
| 如果客户端发送POST或者PUT请求，才会有请求主体                |

##### *Response  响应

| 响应数据组成[服务器发送客户端]（快递单子）  ---重点          |
| ------------------------------------------------------------ |
| --响应起始行                     #network面板-->Header 标签看到 |
| HTTP:/1.1                #HTTP协议版本                       |
| 200                           #熟练背  响应状态码，表示当前服务器状态[正常；错误；失败] |
| 1~199                 #提示信息                              |
| 200~299             #响应成功                                |
| 300~399             #重定向                   304使用缓存    |
| 400~499             #客户端错误           404 NotFound#请求资源没找到 |
| 500~599             #服务器端错误       MySQL停止工作        |
| eg：<http://www.tmooc.cn/>                                     |
| --响应头                             #Networkmain面板-->Headers  标签看到 |
| Server: nginx                  #服务器：种类  nginx apache tomcat..... |
| Date: Thu, 03 Jun 2021 08:47:34 GMT   #服务器发送数据的时间  |
| Connection: keep-alive   #开启持久连接                       |
| Connection-Length          #响应主体内容的长度               |
| Content-Type: text/html  #响应内容主体的类型    text/html网页 |

示例

 1: <http://www.codeboy.com:9999/123.php>    404

 2: <http://www.tmooc.cn/>           304

 3:                     500

OK  原因短句     #解决前端响应状态码功能

示例:

  200   OK     #响应成功

  404   Not Found  #数据没有发现

| -响应主体       #Network面板-->Response 标签看到 |
| ------------------------------------------------ |
|                                                  |

### 3.3：AJAX-DOM知识体系

1：创建网页   login.html     用户登录

2：创建表单域     action=”#“ method=”POST“

3：用户名；密码；登录按钮[`<input>` type="button"]

4:当用户点击表格验证用户名密码是否正确

​    4.1：不为空

​    4.2：正则表达式验证

--事件：点击事件    #事件就是一种操作：点击事件就是用鼠标点击某个按钮

`<input type="button" value="登录" **onclick**=”check（）">`

当用户点击按钮时，验证用户名输入是否正确

check（）函数验证是否输入内容

-获取元素

-获取元素属性

`<input type="text" name="uname" **id="uname"** value="">`

document.getElementById(**"uname"**).value;   #在网页中查找id属性等于uname的标签

-警告框

alert("用户名格式不为空");

作业

1:提前预习ajax项目【<https://pan.baidu.com/s/1vikekNymEebMwvSg92JeDg>】

 提取码:8ytd

 返回上一级|全部文件>课前预习视频_pro>day05-预习

 用户登录/用户注册/用户列表/用户邮件更新/用户删除

2:学有余力的同学 xz\public\pro2  扩展项目[视频再等二周问我要]

 分页/session/复选框/退出/验证码/..

3:开发项目之前看  [课后面试题-项目](javascript:;)>[项目](javascript:;)>session  [3小时看后1:40后]

## day05

### 1.工具：VScode

### 2.javascript简单学习DOM

DOM[Documents Object Model]

作用：浏览器提供操作网页标签的对象和属性（习惯将浏览器提供的对象属性称为API）

​  #通过对象

​   ：创建标签

​   ：修改标签；标签内容；标签属性

​   ：查询指定标签；删除标签

（1）浏览器对象：documents     #文档表示当前网页对象

​  -依据id属性获取标签元素        document.getElementById("id 属性值")

​  `<input tpye="button" id="btn">`

​     var n = document.getElementById("btn");

--修改：内容和属性

修改标签**内容**：（要求：当前标签成对）  `<h3 id="h3">失败</h3>`

​ （1）获取标签    var h3 = document.getElementById("h3");

​ （2）直接修改标签        h3.innerHTML = "成功"；

​     innerHTML  表示标签中间内容

--修改：属性样式   style

 `<h3 id="h3">`失败</h3>  #文字修改红色   背景修改灰色

（1）获取标签

var h3 = document.getElementById("h3");

（2）直接修改标签style属性  

h3.style.color="F00";

h3.style.background-color="#aaa";

--创建元素[标签] innerHTML       `<div id = "box">`</div>

​ 1：获取元素

​ 2：创建字符串[标签]，将字符串赋值innerHTML  标签创建成功

​ #在div里创建两个标签h1h2

​  var box=dicument.getElmentById("box");

​  var html="`<h1>h1</h1><h2>h2</h2>`";

​  box.**innerHTML** = html;

--案例一：点击上升气球

​ 提示一：创建图像标签保存气球

​ 提示二：为图像绑定点击事件

​ 提示三：图像向上移动     style.top=1  修改气球图片位置

​ 提示四：定时器

--案例二:动态创建表格.
思路:

(1)在js创建数组[{id:1,name:"tom"}, fid:2,name:"jerry"]]-
(2)依据数组在网页创建标签table .

`<table>`

`<tr><td>1</td><td>tom</td></tr>.<tr><td>2</td><td>jerry</td></tr>.</table>`

## 3.AJAX

![image-20210604145242952](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210604145242952.png)

AJAX：Asynchronous JavaScript And XML    异步JavaScript And XML

--异步： #网络中程序一种工作方式

​    -同步：当一个任务A进行中不能开启其他新任务（其他任务只能等待）必须等A结束其他任务才可以运行   （打电话）

​    -异步：当一个任务A进行中能开启其他新任务，不需要等待（微信）

### --AJAX 核心对象

​  XMLHttpRequest

​  作用：向服务器发送请求并且接收返回数据

​  使用：var xhr = new XMLHttpRequest（）；

​  #示例：快递小哥上岗

#### --AJAX核心属性

​  readyState

​  #此属性用来记录xhr对象当前状态

​  #通过此属性用于追踪xhr对象已经工作到了那个节点

​  属性值

- 0     UNSENT  xhr对象被创建，但尚未调用open（）方法  #上岗

- 1     OPENED  open（）方法已经被调用                               #快递单

- 2    HEADERS_RECEIVEo                                                          #跑

  send（）：发送请求并且服务器已经接收到返回的数据

  send()方法已经被调用，并且头部和状态已经可获得

- 3    LOADING下载中；  responseText属性已经包含部分数据。#派送

- **4   DONE下载操作已完成。                                                     #瓜到了**

​  

#### --AJAX 核心方法

​ open（）；

​ #创建一个服务器连接[建议通道]

​ 三个参数

​ 第一个：method请求方式    “GET”“POST”“PUT”“DELETE”

​ 第二个：URL                请求服务器地址

​ 第三个：isAsyn             是否是异步方式来发送请求 true/异步（多） false/同步

​ send()  向服务器程序发送数据

​ -如果请求方式GET DELETE

​ send（） 没有参数

​    -如果请求方式 PORT  PUT

```js
send（`id=19&name=dd&age`)
```

![image-20210604163818519](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210604163818519.png)

#### --AJAX核心事件[onclick]

​ onreadstatechange

​  -当属性readyState属性值发生变化时此事件调用

​  -01234      0~1  1~2   2~3   3~4

​  -在此事件中接收服务器返回数据

## day06

工作原理：开发流程目标

​ （1）面试找工作[ajax原理足够]

​ （2）开发程序[特殊错误-AJAX原理]

工作中：jquery；axios；自己开发工具函数

### 2.1 基本操作

#### 2.1.1：如果使用AJAX完成GET(重点)

为什么发送GET请求   目标：获取服务器程序中数据      #查购物车；用户列表；视频

***开发流程***

​ （1）创建ajax核心对象xhr         var xhr = new XHMHttpRequest();  

***小哥来***

​ （2）创建一个与服务器程序连接“GET”     xhr.open("GET",url,);

***快递单***

​   "GET"

​ （3）发送请求                        xhr.send();

***送货***

​ （4）为xhr绑定事件onreadystatechange  接收数据   #注意方式

***回送物品***

xhr.onreadystatechange = function(){//当状态发生改变时发生触发

​ if(xhr.onreadystate === 4&&xhr.status === 200){//接收服务器数据完成 4&& 正确数据200

​  console.log(xhr.responseText);//服务器给我的数据  文本字符串类型

​ }

}

注意：前三步顺序不要错

xhr核心对象还有一个属性：responseText      作用：接收服务器返回数据

## 2.1.2：如果使用AJAX完成POST

​ （1）创建对象     var xhr = new XMLHttpRequest();   #小哥来了

​ （2）打开服务器连接  xhr.open("POST","<http://127.0>....",true);#快递单子

​ （3）增加一步--修改请求头类型

​ xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

​ （4）发送请求    xhr.send();//如果没有数据可以空   #小哥送货

​ （5）接收服务器返回数据  同上

### 2.1.3:如果使用AJAX完成DELETE

【了解】 GET请求相似 open("DELETE")

#### 2.1.4:如果使用AJAX完成PUT：类似于POST

【了解】 POST请求相似 open("PUT")

#### 2.1.5：如果使用AJAX发送GET请求并且传递参数（重点）

​ -url地址传递服务器     var url=”../v1/s6?**uname**=tom&**uid=15**";    #html传递数据

​ -服务器   req.query.**uname**  req.query.**uid**  #app.js 接收数据

```javascript
        // 1.启动服务器 node app.js  running ... 3000
        // 2.创建对象
        var xhr = new XMLHttpRequest();
        // 创建与服务器连接    uname=jerry uid = 23
        var url = "http://127.0.0.1:3000/pro3/v1/s6?uname=jerry&uid=23";
        xhr.open("GET",url,true);
        // 发送请求
        xhr.send();
        // 5.接收服务器数据
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4&&xhr.status === 200){
                alert(xhr.responseText);
            }
        }
```

#### 2.1.6：如果使用AJAX发送POST请求并且传递参数（重点）

​ -xhr.send('**uname**=dongdong&**age**=19');   #html传递数据

​ -服务器   req.body.**uname**  req.body.**age**  #app.js  接收数据

```javascript
        // 服务器接口 /pro3/v1/s6 uname uid
        // 服务器返回数据
        // 创建对象
        var xhr = new XMLHttpRequest();
        // 创建服务器连接
        var url = "http://127.0.0.1:3000/pro3/v1/s7";
        xhr.open("POST",url,true);
        // 修改请求头
        xhr.setRequestHeader("Content-Type",
        "application/x-www-form-urlencoded");
        // 发送数据
        xhr.send(`uname=tom`);
        // 接收服务器返回数据
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4&&xhr.status === 200){
                alert(xhr.responseText);
            }
        }
```

## 注意事项

（1）参数获取方式

​ 客户端**GET  DELETE**   服务器接收 req.query

-------send没有数据无需返回值

​ 客户端**PUT  POST**                服务器接收req.body

-------需要添加修改请求头 setRequestHeader("Content-Type","application/x-www-form-urlencoded");

-------数据添加在url后用？和&连接

-------send里运用模板字符串:  `uname=tom`

### 2.2用户注册

(1)画图示例-用户注册

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml12160\wps1.jpg)

/^[a-zA-Z0-9]{3,12}$/

ajax核心对象属性方法事件：

​ -readyState ： 保存对象状态0 1 2 3 4

​ -status ：保存对象响应状态码     200  404

​ -responseText：保存服务器程序返回数据   rooter3.js    res.send("1") 服务器数据

  if(xhr.responseText=="1")

​ -open（）：创建连接

​ -send（）：发送数据

​ -onreadystatechange：状态修改事件

### 2.3用户登录

| (1)画图示例-用户登录 -用户需要先注册成功后(用户名/密码)才能完成用户登录 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml11120\wps1.jpg) |
| ------------------------------------------------------------ |
| (2)通过思维导图分析-几个小功能                               |
| (3)核心代码2.1:创建对象  var xhr = new XMLHttpRequest();     |
| 2.2:创建连接  var url = `http://127.0.0.1:3000/pro/v1/login?uname=${u}&upwd=${p}`;        xhr.open("GET",url,true) |
| 2.3:发送请求  xhr.send();                                    |
| 2.4:接收服务器返回数据       xhr.onreadystatechange = function(){        if(xhr.readyState === 4 && xhr.status===200){            if(xhr.responseText === "1"){               alert("登录成功");            }         }} |

```javascript
   // 创建对象
        var xhr = new XMLHttpRequest();
        // 创建连接
        // var url = "http://127.0.0.1:3000/pro/v1/login?`uname=${u.value}&{p.value}`";
        xhr.open("GET",`/pro/v1/login?uname=${u.value}&upwd=${p.value}`,true);
        // 发送请求
        xhr.send();
        // 接收服务器的返回数据
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4&&xhr.status === 200){
                var rs = xhr.responseText;
                if(rs == "1"){
                    alert("登录成功");
                }else{
                    alert("登录失败");
                }
            }
        }            
```

![image-20210608094819283](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210608094819283.png)

作业

1:完成login.html 用户登录

2:看学子项目视频

 返回上一级|全部文件>课前预习视频_pro>day05-预习

 复制这段内容后打开百度网盘App，操作更方便哦。

 链接:<https://pan.baidu.com/s/1vikekNymEebMwvSg92JeDg> 提取码:8ytd

3:学有余力[扩展项目视频]

| 复制这段内容后打开百度网盘App，操作更方便哦。 链接:<https://pan.baidu.com/s/1djLSayTrB2_74LoSxE3GhQ> 提取码:631o |
| ------------------------------------------------------------ |
| · · [全部文件](javascript:;)>课后扩展xz_pro2                 |

## day07

### 2.4用户列表

| (1)画图![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml11120\wps2.jpg) |
| ------------------------------------------------------------ |
| (2)通过思维导图分析-几个小功能                               |

（3）核心代码

-----服务器发送数据类型

1）result      #javascript 数组

2）res.**send**(result);   #向客户端发送响应数据

***send（）两个功能***

-将发送的数据转换成字符串

​  [{uid:1,uname="tom".....}]=>    "[{uid:1}'uname':tom]"

-将字符串发送 "[{uid:1}'uname':tom]"  #字符串类型

 \#send() 字符串  "[{},{}]"表示数组-格式  "{}" 表示对象格式 #JSON字符串

-----ajax接收数据类型

​ -xhr.**responseText**       "[{'uid':'1','uname':'tom'}]"   #接收字符串

-----创建标签需要什么数据

​ `<tr><td>1</td><td>`tom</td></tr>   =>创建标签显示数据

-----将字符串转换为JavaScript Object

​ var obj = JSON.parse（"[{'uid':'1','uname':'tom'}]"）；

​ obj[0].uid   obj[0].uname

​  --服务器端不好理解位置     res.send(result);   #数组  发送[响应]到客户端

​  --result什么数据

​  --result是什么类型：数组类型

​  

|            | SELECT语句 | INSRERT语句 | DELECT语句 | UPDATE语句 |
| ---------- | ---------- | ----------- | ---------- | ---------- |
| result类型 | 数组       | 对象        | 对象       | 对象       |
|            |            |             |            |            |

数据库表中一行与对象：一一对应

```javascript
 // 1.4接收服务器返回数据并且动态创建标签
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4&&xhr.status === 200){
                    // 1.5获取服务器返回数据
                    var r = xhr.responseText;
                    // 1.6将返回数据转换字符串->转换->js对象
                    // 启动mysql node.js
                    var rows = JSON.parse(xhr.responseText);
                    console.log(rows);
                    // 1.7创建空字符串
                    var html = "";
                    // 1.8循环遍历js对象
                    for(var i=0;i<html.length;i++){
                    // 1.9拼接标签
                        html += `<tr><td>${rows[i].uid}</td>
                            <td>${rows[i].uname}</td>
                            <td><a href="javascript:;">del</a></td></tr>`;
                    }//for end
                    // 1.10赋值[赋值][动态创建标签]
                    var data = document.getElementById("data");
                    data.innerHTML = html;
                }
```

### 2.5删除指定用户

| #注意事项：（1）删除操作再程序中是有一定危险的操作  #一但数据（数据库）删除结果无法恢复（2）删除之前备份 |
| ------------------------------------------------------------ |
| （1）画图![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml11120\wps3.jpg) |
| （2）通过思维导图分析-几个小功能                             |
| （3）核心代码                                                |

```javascript
        var xhr = new XMLHttpRequest();
        // 创建服务器连接
        xhr.open("DELETE","http://127.0.0.1:3000/pro3/v1/s5?uid=5",true);
        // 发送请求
        xhr.send();
        // 接收服务器返回的数据
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4&&xhr.status === 200){
                alert(xhr.responseText);
            }
        }
```

### 2.6更新指定用户邮件地址

| (1)画图 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml11120\wps4.jpg) |
| ------------------------------------------------------------ |
| (2)通过思维导图分析-几个小功能                               |
| (3)核心代码                                                  |

作业

1:预习项目 15个视频:项目自己重写一次

2:扩展项目,一定自己重写一次
