# css

## day08

每一层最外条都是100%

### 1

内部样式在style标签里优先级低于内联样式

link定义在style标签上会被内部标签覆盖

按CSS引入方式分: 内联样式 > 内部样式 > 外部样式 （但要注意外部样式引用要在内部样式下面，才会低于内部样式的优先级）

按元素分: id选择器（100） > 类选择器（10） > 元素选择器（1）

1、!important，加在样式属性值后，权重值为 10000
2、内联样式，如：style=””，权重值为1000
3、ID选择器，如：#content，权重值为100
4、类，伪类和属性选择器，如： content、:hover 权重值为10
5、标签选择器和伪元素选择器，如：div、p、:before 权重值为1
6、通用选择器（*）、子选择器（>）、相邻选择器（+）、同胞选择器（~）、权重值为0

#### 1.2快捷键

---div{$}*3

```html
    <div>1</div>
    <div>2</div>
    <div>3</div>
```

--- 分组

你可以通过嵌套和括号来快速生成一些代码块，比如输入(.foo>h1)+(.bar>h2)，会自动生成如下代码：

```css
 <div class="foo">  
   <h1></h1>  
 </div>  
 <div class="bar">  
   <h2></h2>  
 </div>  
```

--- 定义多个带属性的元素

如果输入 ul>li.item$*3，将会生成如下代码：

```css
<ul>  
   <li class="item1"></li>  
   <li class="item2"></li>  
   <li class="item3"></li>  
 </ul>  
```

### 2

```css
/* 元素消失属性 */

​      display: none;

/* 元素显示属性 */

​      display: block;
```

```css
        p{
            background-color:lawngreen;
            /* 元素消失属性 */
            display: none;
        }
        .in2:checked ~ p{
            /* 元素显示属性 */
            display: block;
        }
```

### 3

鼠标移入后出现下拉菜单

```css
#   ~  : 相邻（兄弟）属性       
.in2:checked ~ img{
            width: 200px;
        }
```

eg:下拉菜单

```css
    <style>
        *{
            margin: 0px;
            padding: 0px;
        }
        .xlcd{
            background-color: darkgreen;
            width: 400px;
        }
        .xlcd h2{
            width: 200px;
            background-color: darkgrey;
            text-align: center;
            height: 30px;
        }
        ul{
            width: 200px;
            background-color: darkkhaki;
            display: none;
        }
        .xlcd:hover > ul{
            display: block;
        }
    </style>

```

### 4.**元素选择器（标签选择器）**

通过标签的名字来选择html元素，权重值为**1**，比如： div {样式声明}

### 5.**id选择器**

给标签的前半部分增加一个属性 **id** 这个属性可以指定一个唯一的不重复的值，权重值**100**

```html
<div id="abc">一个标签</div> 
```

\#abc {样式声明}

id名不能以数字开头，不建议使用中文命名，尽量见名知意

### 6.**类选择器【重要】**

类选择器先要使用标签的 **class** 属性赋值，类选择器的权重值**10**

```html
<div class="abc">一个标签</div> 
```

.xxx {样式声明}

### 7.**群组选择器**

多个选择器名用逗号连接，可以一起完成共同样式的指定 div,p,span {color: red;}

群组选择器并不是只能使用相同类型的选择器，可以是各种选择器一起参与 #mydiv.b,h4 {color: blue;}

### 8.**关系选择器**

在html结构中存在三种关系，“兄弟关系”、“父子关系”、“后代关系”

#### 8.1**后代选择器**

祖先元素 后代元素 {样式声明}

```javascript
 /* .a div 包括a下面所有div */
        /* .a div div 包括a的下一层div*/
        /* 权重值：10+1+1 */
        .a div div {
            color: blue;
        }

<!-- 后代选择器 -->
    <div class="a">
        <div class="b">
            <div class="c">chao</div>
            <div class="c">huan</div>
        </div>
        <div class="b">bang</div>
        <div class="b">xiu~</div>
    </div>
```

#### 8.2**子代选择器**

可以选中某个元素的直接子元素，与后代不同的是子代选择器的范围更小。

父级元素 > 子级元素 {样式声明}

层级可以向后代选择器一样延申,区别就是子代是>连接,后代是空格连接 .baba > div > div {字体颜色;}

```javascript
/* .x > div div 包括x的第二代 */
    .x > div div{
       color: hotpink;
        }   
<!-- 子代选择器 -->
    <div class="x">
        <div class="y">y1</div>
        <div class="y">
            <div class="z">z1</div>
            <div class="z">z2</div>
        </div>
        <div class="y">y3</div>
    </div>

```

后代选择器与子代选择器的区别

1.**后代选择器的标识为：空格**

   ***子代选择器的标识为：>***

2.后代选择器写法是把外层的标识写在前面，内层的标识写在后面，被ul包围，所有元素中的所有li元素，包括子元素、孙元素、曾孙元素等等等。

​    子代选择器的写法只对直接后代有影响，仅仅选择ul包围的 子元素中的 li元素，不包括孙元素、曾孙元素等等等。

#### 8.3**兄弟选择器**

同一层的关系选择器，可以选中该元素后面的兄弟元素。

某元素选择器 **~** 该元素后面的所有兄弟 {样式声明}

需要注意的是兄弟选择器可以选到该元素后面的兄弟，而选不到之前的。

```javascript
    <style>
        /* 兄弟选择器 */
        /* 同一层的关系选择器，可以选中该元素后面的兄弟元素。
        某元素选择器 ~ 该元素后面的所有兄弟 {样式声明} */
        .a ~ li{
            color: red;
        }
        .a ~ .b{
            color: royalblue;
        }
        /* 相邻兄弟选择器 */
        li + li{
            color: green;
        }
    </style>

<body>
    <ul>
        <li>1</li>
        <li class="a">2</li>
        <li>3</li>
        <li>4</li>
        <li class="b">5</li>
        <li class="b">6</li>
    </ul>
</body>
```

#### 8.4相邻选择器

同一层的关系选择器，可以选中参照的元素后面紧挨着被参照元素的选择器。

***某元素选择器 + 该元素后面的唯一相邻的兄弟 {样式声明}***

需要注意的是，相邻兄弟选择器只能选中“紧紧相邻”的一个兄弟

#### 8.5伪类选择器

伪类选择器的作用是**匹配同一个元素，不同状态**下的样式

选择器:伪类 {样式声明}

a:link {样式声明} 没有被打开之前，或者没被打开过（ a:link 特有）

a:visited {样式声明} 访问过后（ a:visited 特有）

div:hover {样式声明} 鼠标悬停

p:active {样式声明} 点击激活

input:focus {} 属性代表input标签获取焦点的样式( `<input/>` 标签的属性)

input:cheaked {} 属性代表input单选、复选等type类型被选中后的样式( `<input/>` 标签的属性)

```css
/* 当鼠标移入到div时XXXX */
        div:hover{
            background-color: blue;
            font-size: 20px;
        }
        /* 点击 */
        div:active{
            background-color: greenyellow;
        }
        /* 未访问过的 */
        a:link{
            color: red;
        }
        /* 已访问过的 */
        a:visited{
            color: green;
        }
        /* 鼠标获取焦点时 更改css的样式*/
        .in1:focus{
            color: grey;
            background-color: lightblue;
        }
        /* 鼠标点击后 */
        .in2:checked + label{
            color: red;
        }
```

#### 8.6**伪元素选择器**

CSS 伪元素用于**设置元素的“指定部分”**的样式

:before表示元素最前边的部分，紧随着标签的部分

:after表示元素的最后边的部分，紧随着标签的部分

:before{content:""}:after{content:""} content必须写

两个冒号 ( :: ) 而不是一个冒号 ( : )，这是 CSS3 规范中的一部分要求，目的是为了区分伪类和伪元素。大多数

浏览器都支持这两种表示方式。

```css
p::before {
    content: "♥";
    color: red;
    }

p::after {
    content: "!";
    } 
```

## day09

### 1.颜色

--transparent透明色

--rgb颜色

rgb() 函数，三个参数，用逗号分隔

r代表红色色值，g代表绿色色值，b代表蓝色色值

取值范围0~255之间的256个数

rgba() a代表透明度，取值0~1之间的数字，0代表完全透明

### 2.边框

#### 2.1**边框的属性**

border-width 边框宽度

border-style 边框样式，solid实线，dashed虚线，dotted点点

border-color 边框颜色

#### 2.2**边框的方向**

border-bottom 下边框

border-top 上边框

border-left 左边框

border-right 右边框

#### 2.3**边框都简写方式**

border:30px solid green; 三个位置分别可以写边框宽度、边框样式边框颜色，没有严格要求书值都写顺序。

#### 2.4**三角形**!!!!!(重点)

```css
        .div2{
            width: 0px;
            height: 0px;
            border: 100px solid transparent;
            border-bottom-color:rgb(41, 65, 201);
        }
```

### 3.元素的分类

#### 3.1**元素的显示属性**

display 元素以什么方式显示(以下为常用显示方式)

display: block; 以块级元素方式显示

display: inline; 以内联元素方式显示

display: inline-block; 属于行内元素，但以块级显示，俗称行内块

display: none; 不显示

display: table; 以table方式显示

#### 3.2内联元素(行内元素)(重点)

--设置宽度高度无效(行内块级显示元素除外)

--设置上下内,外边距无效

--常见的行内元素span a等

##### 3.2.1inline-block(行内元素)

--不占一行横向从左向右排列

--可以设置宽度,高度,内外边距

--img,button,input

###### 3.2.1.1幽灵空白节点(重点)

​--把img标签变成块级元素:display :block

​--父级元素font-size:0;去掉空白节点

```css
div { 
 width: 300px;
 background-color: red;
    /* 去掉幽灵 */ 
 font-size: 0; 
    }
img {
    /* 就是和父元素一样宽 */
 width: 100%;
 display: block; 
    }
```

#### 3.3块级元素(重点)

--每个元素都各占一行,后面的元素另起一行

--元素的宽度,高度,内外边距都可以设定

--高度不设定为内容高度,如果没有内容,高度为0

--div,p,h1,ul,li,table

### 4.显示和隐藏属性(重点)

##### 隐藏

display:none;使元素消失，脱离文档流的消失

visibility:hidden;元素隐藏，占据自身位置

opacity:0;

##### 显示

display:block;使元素出现，元素显示为块级元素

visibility:visible;元素显示

opacity:1;

# opacity属性代表元素的透明度，取值范围是0-1之间的数字,0 代表完全透明,1 代表不透明

缺点是，元素内的一切都会随着透明度改变

### 5.字体

5.1属性:

font-size: 30px; 字体号属性

font-family 属性设置所需要的字体

font-weight 字体的字重，字的粗细

font-style 字体样式属性

font-style: normal; 默认正常

font-style: italic; 斜体

---简写方式

font:italic 400 40px chiller;

顺序：字体样式 字重 字号 字体系列，不可改变顺序

最简方式 font：40px chiller; 字号和字体系列，不能再减少

### 6.文本属性

#### 6.1水平对齐方式(重点)

text-align 针对块级元素中的内联元素，它需要写在父级（块级元素）中，不能写在子元素中（文字本身和内联元素）

**内联元素（单个）与文字（单行）在父级水平居中的方式(重点)**：是对块级元素中的文字，或对块级元素的内联元素水平居中，这个元素需要给父级（块元素）TIAN，块级元素的水平居中不能使用该属性。

```css
div {
    width: 500px; 
    height: 200px;
    text-align:center;
/* 适用于div内部的文字和内联元素 */
}
```

#### 6.2文本的行高(重点)

---line-height 属性可以设置文本的行间距,可使用长度单位px，或使用无单位的倍数如1，1.5，2

---文本的行高包括文字上下间距+文本高度，文本居中上下行间距相等

---使行间距等于元素高度，则“单行文本”垂直显示在元素中

行元素在块元素里上下左右居中

```css
div {
    width:100px;
    height: 50px; 
    /* 行高等于父级元素高度 */
    line-height: 50px; 
    /* 水平居中 */ 
    text-align:center;
}
```

多行文本垂直居中

```css
div { 
    height: 200px;
    line-height: 20px; 
    /* （高度-行高*行数）/2 */
    padding-top: 70px;
    /*(200-20*3)/2*/ 
    box-sizing: border-box;
    /*注意border*/ 
}
```

#### 6.3属性

text-decoration: none; 无线条

text-decoration: underline; 下划线

text-decoration: overline; 上划线

text-decoration: line-through; 删除线

text-indent 指定块容器中第一行文本的缩进

text-indent:2em 两倍的字体大小,相当于空两格

white-space: nowrap; 不换行

word-wrap:break-word; 强制换行

text-overflow:ellipsis **文本溢出**                      兼容性并不好

text-shadow 为文字添加阴影

***垂直对齐方式***

vertical-align: middle;

vertical-align: top;

vertical-align: bottom;

vertical-align: baseline; img的默认对齐值为基线对齐

***圆角***

border-top-left-radius 左上角

border-top-right-radius 右上角

border-bottom-left-radius 左下角

border-bottom-right-radius 右下角

1个值代表四个角

2个值代表左上和右下，右上和左下

3个值代表左上，右上和左下，右下

4个值代表 左上，右上，右下，左下

```text
内联不占行，如input，span，a，你会发现写多个input的时候，它们都排在同一行
块状元素，占行，如div，p。你会发现写多个div的时候，它们都各自占一行。
```

**重点**:

1.三角形

2.元素的分类,重要的是要知道内联元素和块级元素的区别

3.幽灵空白节点是怎么回事,图片的幽灵怎么去掉间距

4.隐藏和显示分为几种,相对的都怎么写

5.字体序列可以写多少个字体,那些需要加引号的

6.字体和行元素在父元素中的水平对齐方式

7.行间距(如果想让一行文字他的父级中水平垂直都居中需要怎么写)

## day10

### 1.**盒子阴影**

1.1-----box-shadow:

 x轴偏移   y轴偏移    羽化（不允许负值）   扩展     颜色   内阴影（阴影向内inset：默认阴影向外扩散。）

1.2**多阴影**

盒子阴影可以设置多层

每一个阴影效果为一组，中间用逗号分隔阴影组

## box-shadow: 5px 10px 10px 0 red,15px 20px 10px 0 green

### 2.**光标设置**

cursor: default; 箭头

cursor: pointer; 小手

cursor: wait; 等待

cursor: text; 文本

cursor: crosshair; 十字

cursor: progress; 箭头+等待

cursor: help; 箭头+问号

### 3.背景图

#### 3.1**背景图平铺**

background-repeat:repeat; 默认值 横向纵向都

background-repeat:no-repeat; 不平铺

background-repeat:repeat-x; x轴平铺

background-repeat:repeat-y; y轴平铺

#### 3.2**背景图定位**

background-position:x轴 y轴 两个方向

background-position-x 单独定义x轴

background-position-y 单独定义y轴

#### 3.3**背景图尺寸**

background-size:x轴拉伸 y轴拉伸

--cover:铺满整个容器的宽高，而图片多出的部分则会被裁掉；

--contain:容器内至少有一张完整的图，no-repeat情况下容器会有留白区域。repeat情况下留白区域则平铺背

景图

#### 3.4简写方式

background:color image repeat position;   #简写属性，四组值用空格分开,没有顺序

background最简写法可以是background：color 或者 background：url，其他不可以

### 4.**元素特有样式**

#### 4.1.**表单轮廓**

outline 属性

简写 outline:width style color;

input标签有默认的轮廓线，清空轮廓线 input {outline: none;} 或 {outline: 0;}

### 4.2.**列表样式**

list-style 属性是一个简写对属性集合

list-style 简写， list-style:none 去掉标识(常用)

属性：

list-style: none; 没有标记

list-style: disc; 默认实心圆点

list-style: circle; 空心圆点

list-style: '♥'; 自定义圆点

list-style-image 设置列表标识为小图片

list-style-position: outside; 默认在li外

list-style-position: inside; 默认在li里

4.3.**表格样式**

#### 4.3.1 table的样式

border-collapse: collapse; 去双边框缝隙

border-spacing: 10px; 单元格之间的距离，前提是“不能”去掉双边框缝隙

##### 4.3.2 td的样式

margin外边距设置无效

td的垂直居中 vertical-align: middle 其他值:top,bottom

rowspan="x" 合并行，x写数字不带单位

colspan="x" 合并列，x写数字不带单位

### 5.溢出

overflow: hidden; 溢出隐藏

overflow: scroll; x轴y轴都出现拖动条，子元素不超出也会有滚动条的那条轨道。

overflow: auto; 只有溢出的方向出现拖动条

overflow: visible; 溢出默认展示

​  overflow-x: auto;

​  overflow-y: hidden;

***overflow与BFC（重点）***

BFC块级格式化上下文，内部元素除了脱离文档流，之外无论如何设置都不会影响父级。（如同杯中水，如何改变也不会撒出）

BFC元素**不会让元素及元素内部的内容与外边有任何瓜葛**。所以形成BFC的元素可以清除浮动带来的影响，不然的话，子元素浮动，父元素塌陷，父元素的兄弟元素会和父元素的子元素重叠，就违背了BFC的初衷，所以要清除浮动带来的影响。

**scroll、auto、hidden这三个可以触发元素的BFC特性**。**visible不会**。

#### 如果子元素中加了float，父元素中添加**overflow:hidden**;/auto；       添加伪类：after ；     给父元素设置高；使用空标签clear：both

可以消除子元素浮动带来的影响

## cover:注意height的大小，容易过大

### 6.**盒子模型**

#### 6.1**盒尺寸四大家族**

元素内容（content）、内边距（padding）、边框（border）、外边距（margin）

\- 一个元素实际占地宽度：

左外边距+左边框+左内边距+内容宽度+右内边距+右边框+右外边距

\- 一个元素实际占地高度：

上外边距+上边框+上内边距+内容高度+下内边距+下边框+下外边距

#### 6.2**元素内容**

元素的内容可以是元素内的文字，也可以是元素的宽度和高度，大部分内联元素设置宽高无效，只能依靠内容撑开，因此内容就是内联元素中的文字。

## day11

![image-20210615193427723](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210615193427723.png)

### 1.内边距

#### 1.2**内边距的值**

padding:长度值; 指盒子的“内补间”，宽高之外到边框以内的距离

1个值，将用于全部的四边。

2个值，第一个用于上下，第二个用于左右

3个值，第一个用于上，第二个用于左右，第三个用于下

4个值，将按上、右、下、左的顺序作用于四边。

---行元素（内联元素）、文本元素水平居中：text-align

---块级元素在父标签中水平居中 margin：上下距离 auto

### 2.外边距

#### 2.1外边距的值

1个值，将用于全部的四边。

2个值，第一个用于上、下，第二个用于左、右。

3个值，第一个用于上，第二个用于左、右，第三个用于下。

4个值，将按上、右、下、左的顺序作用于四边。

外边距合并发生在垂直兄弟元素的外边距之间

#### 2.2**margin的无效情形**

margin 是设置同级元素间的间隔，并不是设置它在父元素中的位置。如果右侧和下面并没有元素，就不会出现效果。

#### 2.3 **margin的auto取值**

auto对上下外边距无效，左右取相同的值，使**当前元素在父元素内左右居中**。

- 块级元素在父元素中水平居中 **margin:上下距离 auto**;

- 上下距离在没有的时候可以写0

- 内联素使用margin：auto，不能完成居中效果

#### 2.4**外边距合并现象**

\- 兄弟元素之外边距合并

\- 两个在文档流中（垂直相邻）兄弟之间外边距，同时存在的时候，取最大的值

#### 2.5外边距溢出（重点）

-----外边距溢出是父元素中在文档流里的第一个和最后一个子元素会和父元素的上下边界产生合并现象。

-----原因是外边距其实设置的是元素与同级兄弟元素之间的距离。因此第一个和最后一个子元素的外边距会被浏览器会认为你定义的是其父级元素的边。

-----解决外边距溢出（重点）

1.给父级加内边距

```css
padding-top:XXpx;
```

2.给父元素增加边框,让父子不贴合

```css
border:1px solid red;
```

3.父元素增加  '**overflow:hidden/auto**'   #父元素不能溢出显示内容

4.使用空`'<table></table>'`放在第一个子元素前和最后一个子元素后，作用是分割与父级的粘连

5.使用css3伪元素'::before'给父元素添加内容，源于增加空`"<table></table>"`

```css
.box::before{
       content: "";
       display: table;
}
```

能横着展示的元素 a    分开：外边距

怪异盒子模型

怪异模式的宽度=宽度+内边距+边

### 3.**不同元素的盒子模型（重点）**

#### 3.1**内联元素盒模型**

内联元素的宽高是auto，宽度高度只会一直随内容的宽度高度在同步变化。设置上下内边距和外边距无效。span a

\- 宽度高度是auto，靠内容撑开

\- 设置宽度高度无效

\- 设置上下内外边距无效

\- 排列方式，从左至右

#### 3.2**内联元素盒模型块级元素盒模型**

\- 块级元素就可以设置宽度和高度，

\- 只有文字内容不设置宽度高度，宽度为父元素的一行，高度为内容撑开的高度。

\- 宽度高度可以设置

\- 内外边距设置均有效果

\- 排列方式，从上至下

```css
    <style>
      .tou {
        width: 400px;
        height: 430px;
        border-radius: 50%;
        border: 5px solid black;
        margin: 100px auto;
      }
      .jian {
        width: 60px;
        height: 200px;
        border: 5px solid black;
        background-color: red;
        border-radius: 25% 25% 50% 50%;
        margin: -20px auto;
      }
      span {
        display: inline-block;
        width: 100px;
        height: 100px;
        background-color: yellow;
        border: 5px solid black;
        border-radius: 50%;
        margin-left: 60px;
      }
      .zui {
        width: 200px;
        height: 20px;
        margin: 30px auto;
        border-top: 3px solid black;
        border-radius: 30px;
      }
    </style>
  </head>
  <body>
    <div class="tou">
      <div class="jian"></div>
      <span></span>
      <span></span>
      <div class="zui"></div>
    </div>
  </body>
</html>
```

#### 3.3**盒子模型的计算方式**

\- `box-sizing: content-box;` 标准盒子模型

----多行文本居中不能使用行高 padding-top（高度-（单行行高*行数））/2 还 要 box-sizing: border-box

 \- 元素所占宽度=左外边距+左边框+左内边距+内容宽度+右内边距+右边框+右外边距

 \- 元素所占高度=上外边距+上边框+上内边距+内容高度+下内边距+下边框+下外边距

\- `box-sizing:border-box` 改变盒子模型计算方式

 \- 设置的宽度width = 左右border + 左右padding + 内容的宽度

 \- 设置的高度height = 上下border + 上下padding + 内容的高度

 \- 注意：可能会导致内容溢出，需要时再使用

***没有设置box-sizing:border-box属性，宽高会加上padding和border的值，需要我们手动去计算,减去padding和border的值，并调整content的值，以免超过给定的宽高***

### 4.流

#### 4.1默认文档流

-内联元素，从左向右排列

 \- 块级元素，从上向下排列

行元素从左向右，列元素从右向左

块级元素横向排列

劣势：子元素横向排列，父元素高度坍塌

#### 4.2**脱离文档流**（！）

文档一旦脱离文档流，不受文档流的布局约束了，在算其父元素的高度时，就不包括其自身了。以下属会导致元素脱离文档流：

\- float 浮动

\- position 定位(绝对定位、固定定位)

##### 4.2.1**浮动**

\- 子元素在父元素中浮动，会使其脱离文档流，导致父元素对其的管理能力

\- 浮动属性

 \- `float：none`默认不浮动

 \- `float：left`左浮动

 \- `float：right`右浮动

##### 4.2.2浮动特点

\- 元素浮动，脱离文档流，元素不占页面空间，后续元素上前补位

\- 元素浮动后，会按照浮动属性停在父元素的左侧或右侧，如果前面有浮动元素就跟在其后面

\- 多个元素浮动，父元素放不下会折行

\- 一个内联元素浮动，会变成块级元素

\- 浮动元素向前占位

\- 文本、内联元素、行内块，不会被浮动元素压住，会形成环绕

##### 4.2.3**文字环绕**

\- 元素浮动会盖住下面没有浮动的元素，但文字不会受影响

\- 内联元素和行内块，也都会形成环绕模式

\- 解决方案包裹文字的元素浮动在前一个元素侧面

------解决文字环绕：将元素都进行浮动操作

eg:小卡片

```css
        .d2{
            width: 120px;
            /* height: 200px; */
            background-color: #bbb;
            text-align: center;
            padding:30px 30px 10px;
            border-radius: 5px;
            box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.644);
        }        
        .d2 .pic{
            width: 100px;
            background-color: #fff;
            padding: 10px;
            border-radius: 5px;
        }
        .d2 .pic img{
            width: 100px;
        }
```

##### 4.2.4清除浮动（重点！！！）

1.父元素给高

```css
        .box1{
            background-color: royalblue;
            /* 父元素给高 */
            height: 100px;
        }
```

2.父元素浮动

```css
  float: left;
```

3.**父元素溢出隐藏**

**overflow：hidden/auto**，父元素中的子元素可能会被隐藏,用了结界的效果

4.增加一个**clear：both**的子元素

lear：both清除两侧浮动

可以使用这个不展示的div元素放在所有元素的最后，这个元素可以作为一个专门清除子元素浮动给父元素带来影响的元素,但弊端同样是多一个标签

```css
        .box1 > .d4{
            width: 0;
            height: 0;
            clear: both;
            float: none;
        }
```

5.专门清除浮动的类，给父级

-----**用伪元素解决**:给父元素增加一个在尾部的伪元素   after

```css
        .cleanfix::after{
            content: "";
            display: block;
            height: 0;
            clear: both;
        }
        
         <div class="box1 cleanfix">
```

```css
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        .sever{
            width: 100%;
            background-color: #eee;
        }
        .center{
            width: 1000px;
            margin: 0 auto;
            overflow: hidden;
        }
        .item{
            width: 250px;
            text-align: center;
            padding: 40px 0;
            float: left;
        }
    </style>
</head>
<body>
    <!-- sever: 管整体背景-->
    <div class="sever">
        <!-- center：在此清除浮动 规定界面的大小：width：1000px-->
        <div class="center">
        <div class="item">
            <img src="./img/icon1.png" alt=""><p>品质保障</p>
        </div>
        <div class="item">
            <img src="./img/icon2.png" alt=""><p>私人定制</p>
        </div>
        <div class="item">
            <img src="./img/icon3.png" alt=""><p></p>
        </div>         
        <div>
            <img src="./img/icon4.png" alt=""> <p></p>
        </div>
        </div>    
    </div>
</body>
```

横向排列四个小卡片center： width=1000px

 一个卡片width=235px  margin=20

***\*封装自己的reset.css\****

```css
/* 星号的效率过低，非练习时可以自定义某些元素去掉margin: 0;padding: 0; */
* {margin: 0;padding: 0;}
a {text-decoration: none;}
ul {list-style: none;}
/* 清除浮动 */
.clearFloat:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.clearFloat {*zoom: 1;}
/* 如：针对学子商城居中1000宽度 */
.center {
  width: 1000px;margin: 0 auto;
}
```

## day12

### 1.定位

#### 1.1相对定位

- 相对定位position: relative 不脱离文档流。
- 可使用top，right，bottom 和 left 做偏移。
- 元素相对的位置是自己本来的位置，移动不改变页面布局。
- 相对定位属性不会影响周围的布局，但会出现新的层叠顺序。
- 当四个方向值发生重合时，以top和left为优先。

```css
        /*bottom,right无效*/
  .d1{
            background-color: red;
            /* 相对定位 */
            position: relative;
            top:10px;
            left: 20px;
            bottom: 30px;
            right: 40px;
        }
```

#### 1.2绝对定位

- absolute绝对定位，元素将脱离文档流，其他元素不为该元素预留空间。

- 它的移动**参照为祖先元素的偏移**，来确定元素位置。元素会逐层向上

  找自己的参照元素，当找到的最近一层祖先元素具有position属性时，该元素就会以这个祖先元素的原点为参照点。##逐级向上寻找有定位属性的层级，就将该层级当作父级

  - 可使用top，right，bottom 和 left 做偏移。

  - 当四个方向值发生重合时，以“上top”和“左left”为优先。

  - 绝对定位的元素可以设置外边距，且不会与其他边距合并。

    #####**子元素（块级）在父元素中水平垂直居中的方法一（背下来）**

```css
        .d3{
            width: 100px;
            height: 100px;
            background-color: indigo;
            position: absolute;
            top:50%;
            left:50%;
            margin-top: -50px;
            margin-left: -50px;
        }
```

```css
####居中
margin: 100px auto;
```

```css
transform: translate(-50%,-50%);
```

```css
            left: 50%;
            transform: translateX(-50%);
```

width:600px  height:376px

#### 1.3固定定位

fixed固定定位是元素，决定它的“包含块”是html，唯一可以限定固定定为元素的就是html跟元素

- position: fixed; 它的父级始终是html
- 直接在窗口的某个位置固定
- 可使用top，right，bottom 和 left 做偏移。

##### 1.3.1居中的弹幕

固定定为，元素在父元素中居中

```css
  <style>
    .baba {
      width: 500px;
      height: 400px;
      background-color: red;
      position: relative;
    }
    .erzi {
      width: 150px;
      height: 200px;
      background-color: blue;
      position: absolute;
      left:50%;
      top:50%;
      margin-left: -75px;
      margin-top: -100px;
    }
  </style>
</head>
<body>
<div class="baba">
  <div class="erzi"></div>
</div>
</body>
```

##### 1.3.2返回顶部元素

```css
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .pic {
        width: 100%;
    }

    .pic img {
        width: 100%;
        display: block;
    }

    .top {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 30px;
        text-align: center;
        line-height: 100px;
        position: fixed;
        bottom: 100px;
        right: 100px;
    }

    .top a {
        color: #fff;
        text-decoration: none;
    }
</style>

<body>
    <div class="pic"> <img src="./img/固定定位长图背景.jpg" alt=""> </div>
    <div class="top"> <a href="#">TOP</a> </div>
</body>
```

#### 1.4z-index

z-index就是z轴的顺序，z-index可以设置字符值，如：auto，多数情况设置整数值，可以为负值。

**(1)** **层叠顺序取值**

z-index 层叠顺序

直接设置没有单位的整数，可以为负值，值越大层级越高

**(2)** **层叠领域的准则**

值大的在上：z-index的值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的。

后来的在上：当元素的层叠水平一致的时候，在文档流中处于后面的元素会覆盖前面的元素。

### 2.渐变

#### **1.** **线性渐变**

##### **(1)** **颜色和角度**

**background-image: linear-gradient(color1,color2,……);** 渐变最少两个颜色，才能体现出颜色的变化

**linear-gradient()** 渐变颜色的参数用逗号分开，可以写多种颜色表达方式

渐变的方向，按照参数顺序依次向下，可以在颜色前加入角度或关键字控制渐变方向

***90deg 角度***

**to 终点 关键词**，就是终点在哪个位置，top，left，right，bottom，记得加空格 （不建议使用）

eg：法国国旗

```css
        .d4{
            background-image: linear-gradient(90deg,blue 0 33%,white 33% 67%,red 67% 100%);
        }
```

***(2) 渐变的比例***

**\- `background-image：linear-gradient(方向，颜色1 起始值 结束值，颜色2 起始值 结束值，颜色n 起始值 结束值……)`**

\- 多个颜色渐变时，渐变的区域需要调整，可采取控制颜色范围的方法。在函数内颜色的后面加入长度单位（如px或%）用空格分隔。

#### **2. 径向渐变**

##### (1) 渐变方向和范围

`<img width ='40%' src ="../picture/径向.jpg"/>`

\- `background-image: radial-gradient(color1,color2,……);`

\- background-image：radial-gradient(颜色1 起始值 结束值，颜色2 起始值 结束值，颜色n 起始值 结束值……)

##### (2) 半径

\- `background-image: radial-gradient(半径,颜色1,颜色4,颜色3);`

\- `background-image: radial-gradient(x轴半径 y轴半径,颜色1,颜色4,颜色3);`

\- 半径只传入一个参数，则表示该渐变形状为圆

\- 半径可以是px或%，使用px不会因为半径的变化而变化

\- 颜色范围用的百分比,半径变化，百分比参照半径

##### (3) 圆心起点

\- background-image: radial-gradient(x轴半径 y轴半径 at x轴圆心 y轴圆心,颜色1 起始值 结束值，颜色2 起始值 结束值……)

\- 在圆心后面增加at 空格 x轴 y轴的原点位置，可以使用长度单位或关键词。取值可使用px，% 或者关键词：left/top/bottom/right

#### 3.重复的渐变

\- 注意重复的渐变要求浏览器版本，版本过低的浏览器版本无法查看效果

\- `background-image: repeating-linear-gradient()` 重复的线性渐变

\- `background-image: repeating-radial-gradient()` 重复的径向渐变

\- 当半径过小，页面分辨率显示效果会怪异

复盘知识点

渐变导航

信封

步骤：

1.写了一个有宽高的div

2.加一个背景图

3.加一个叫nav的全屏div

4.加一个center  给宽度+居中

5.写logo  float-left

6.写button  float-right

7.写ul  li  里面有文字，给文字加行边距使文字拖大

8.鼠标移入文字有下拉菜单hover      让元素定位position   往下推100px  出了li范围，依然是li里的元素

## day13

### 1.选择器

#### 1.1属性选择器

- 属性选择器可以使用`[]`将元素的属性名称放入其中，从而通过查找具有该属性的元素来设置其样式。

- 元素的属性包括：

  预定义属性：如`id、class、style、title、src、href`等

  自定义属性：随意指定的属性名如abc、w123 或 更标准的自定义属性写法 `data-*`

##### 1.1.1**简单属性选择器**

  \- 具有某个属性的元素，如id、class ： `[属性名]{样式声明}`

  \- 特指某个元素具有某个属性，如`p[class]：元素名[属性名]{样式声明}`

  \- 具备多个属性的元素，如`[id][class] : [属性名1][属性名2]{样式声明}`

  \- 特指某元素具备多个属性：`元素名[属性名1][属性名2]{样式声明}`

##### 1.1.2筛选属性选择器

  \- 元素的属性名的值为什么，如id=mydiv ：`[属性名=值]{样式声明}`

  \- 元素的属性名以什么值开头：`[属性名^=开头的字段]{样式声明}`

  \- 元素的属性名以什么值结尾：`[属性名$=结尾的字段]{样式声明}`

  \- 元素的属性名包括某字段的值：`[属性名*=包含的字段]{样式声明}`

  \- 元素的属性名包括某独立的字段值：`[属性名~=包含的字段]{样式声明}`

```css
        /* ../  开头的   加引号可以ok */
        [href^='../']{
            background-color: coral;
        }
  /*给动图加标签*/
        .pic span{
            border: 1px solid #fff;
            color: #Fff;
            position: absolute;
            bottom: 10px;
            right: 10px;
            display: none;
        }
        /* img+span   结尾为gif*/
        [src$=gif]+span{
            display: block;
        }
```

#### 1.2目标伪类选择器

\- 对应锚点被激活时，匹配的样式,使用a标签的href属性连接元素锚点

\- `选择器:target{样式声明}`

```css
<style>
    div{
        width:200px;
        height:200px;
        font-size:60px;
        text-align:center;
        border:1px solid black;
    }
    div:target{
        background-color:yellow;}
    /*可以做成类似tab切换效果*/
    div{
        display:none;}
 /* 被激活的div */
    div:target{
        display:block;}
</style>
<body>
    <a href="#div1">选择1</a>
    <a href="#div2">选择2</a>
    <a href="#div3">选择3</a>
    <div id="div1">div1</div>
    <div id="div2">div2</div>
    <div id="div3">div3</div>
</body>
```

#### 1.3结构性伪类选择器

\- 匹配父元素的第一个孩子 ：`父元素>:first-child {样式声明}`

\- 匹配父元素的最后一个孩子 ：`父元素>:last-child {样式声明}`

\- 匹配父元素的第n个孩子： `父元素>:nth-child(n) {样式声明}`

\- 匹配内部没有任何内容（包含文本）的标签 ：`父元素 >:empty{ 样式声明}`

\- 匹配父元素的唯一子元素：`父元素 >:only-child{样式声明}`

\- 使用`not()`参数为选择器，否定该括号内选择器的其他所有选择器，类似于取反：`父元素 >:not(不想要的选择器){样式声明}`

.row>:last-child        父元素的最后一个孩子（一个选择器--组合型）

.row>div:last-child   父元素的最后一个叫div的孩子   结果相同

### 2.弹性布局

给父元素加display：flex；使子元素横向排列，不用每个子元素浮动了

父元素不需要清除浮动了，高度依然被子元素撑开

```css
ul{
    list-style:none;
    background-color:gray;
    display:flex;
}
li{
    width:100px;
    height:100px;
    border:2px solid red;
    background-color:blue;
    font-size:20px;
    text-align:center;
    line-height:100px;
}
```

#### 2.1.基本概念

##### 2.1.1容器和项目

使用flex布局的**元素（父元素）**，称为**"容器"**

它的所有**“子元素”**自动成为容器成员，称为 **"项目"**

它们各自有控制布局的属性，必须是容器包裹着项目

![image-20210617202135021](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210617202135021.png)

##### 2.2.2主轴

主轴就是项目的排列方向，主轴会出现四个方向：

\- x轴：起点在左侧

\- x轴：起点在右侧

\- y轴：起点在顶端

\- y轴：起点在底端

##### 2.2.3交叉轴

交叉轴就是在主轴的垂直方向，项目可在交叉轴上移动（如果主轴是从左向右的，交叉轴就是垂直于主轴的方向）

##### 2.3将容器指定为flex布局

任何一个容器都可以指定为 Flex 布局:

```css
.box{display: flex;}
```

行内元素也可以使用 Flex 布局:

```css
.box{display: inline-flex;}
```

##### 2.3容器的属性

###### 2.3.1主轴的方向

**flex-direction** 代表主轴的方向，即项目的排列方向

- **row 左向右**
- **row-reverse 右向左**
- **column 上向下**
- **column-reverse 下向上**

###### 2.3.2项目换行

默认情况下，项目都排在一条线上。 **flex-wrap** 属性定义如果一条轴线排不下，如何换行的模式。

- **nowrap 默认不换行**
- **wrap 换行**
- **wrap-reverse 反向换行**

```css
        .row1 {
            height: 600px;
            background-color: cadetblue;
            /* 容器加flex布局 */
            display: flex;
            /* 主轴的排列方向 */
            /* 横向排列 */
            flex-direction: row;
            flex-direction: row-reverse;
            /* 反向排列 */
            flex-direction: column;
            flex-direction: column-reverse;

            /* 项目换行 */
            /* 默认不换行 */
            flex-wrap: nowrap;
            /* 换行 */
            flex-wrap: wrap;
            /* 反向换行 */
            flex-wrap: wrap-reverse;
            /* 主轴排序和换行的简写 横向换行*/
            flex-flow: row wrap;
            /*纵向不换行*/
            flex-flow: column nowrap;
```

##### 2.3.4主轴的对齐方式

**justify-content** 属性定义了项目在主轴上的对齐方式。是默认起点对齐、终点对齐还是居中对齐等。

前提是，如果项目会换行,则下行按照下一行的数量对齐，间隔与上一行可能不同。不换行元素会在容器缩小是缩小，不会出现对齐效果。

- **flex-start 默认起点对齐**
- **flex-end 终点对齐**
- **center 居中对齐，一起居中**
- **space-between 两端对齐，项目之间的间隔都相等，左右贴边**
- **space-around 每个项目两侧的间隔相等，项目之间的间隔比项目与边框的间隔大一倍**

```css
.box { 
        justify-content: flex-start | 默认起点对齐 
        flex-end | 终点对齐 
        center | 居中对齐，一起居中 
        space-between | 两端对齐，项目之间的间隔都相等，左右贴边    space-around; 每个项目两侧的间隔相等，项目之间的间隔比项目与边框的间隔大一倍 }
```

##### 2.3.5交叉轴对齐方式

**align-items** 属性定义项目在交叉轴上如何对齐，"前提是"前提是项目换行,容器的垂直轴方向是有独立高度或者宽度的。注意：多行项目会有行间距离

- **flex-start 交叉轴的起点对齐**

- **flex-end 交叉轴的终点对齐**

- **center 交叉轴的中点对齐**

- **baseline 项目的第一行文字的基线对齐,需要给项目设置单独的高度和内上边距和行高可以看出来**

- **stretch 默认值，如果项目未设置高度或设为auto，将占满整个容器的高度**

  ```css
              /* 项目的第一行文字的基线对齐, */
              align-items: baseline;
     align-items: flex-start | 交叉轴的起点对齐
     
              /* 多轴线对齐 */
              align-content: flex-start;
              align-content: flex-end;
              align-content: center;
              align-content: space-between;
              align-content: space-around;
  ```

##### 2.3.6多轴线对齐方式

**align-content** 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

- **flex-start 与交叉轴的起点对齐。**
- **flex-end 与交叉轴的终点对齐。**
- **center 与交叉轴的中点对齐。**
- **space-between 第一行和最后一行贴开始和结束，其他均分中间位置**
- **space-around 每行间距两侧或上下间距相等，比边框间距大一倍**
- **stretch 默认值**

![image-20210617205733258](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210617205733258.png)

我们发现的flex：

​    1.没给浮动没给清除浮动，子元素自己就浮动了，父元素自己就清除浮动了

​    答：display：flex；是容器设置的，他默认规定了子元素水平排列并且为从左向右。同时容器元素也做了清除浮动的动作*/

​ 2.子元素明明有宽度，但当宽度和超出父元素是，并没有换行而是挤压了每个元素的宽度，让所有的子元素在父元素中一行显示

​ 答：flex布局默认，项目元素在容器元素中不会换行，超出之后平均挤压元素宽度。如果元素中有文字，那么会根据元素文字的宽度缩减。而且边距也会含到累计的宽度中。因此默认效果不宜在一行内存在很多元素。

```css
        .row{
            display: flex;
            /* 计算 */
            height: 560px;
            /* 换行 */
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
        }
        .row > .col:nth-child(-n+2){
            height: 300px;
        }
        .row > .col:nth-child(n+3){
            height: 240px;
        }
        .row > .col:nth-child(1){
            background-color: red;
            width: 600px;
        }
        .row > .col:nth-child(2){
            background-color: blue;
            width: 380px;
        }
        .row > .col:nth-child(3){
            background-color: green;
            width: 370px;
        }
        .row > .col:nth-child(n+4){
            background-color: pink;
            width: 200px;
        }
    </style>
</head>
```

![image-20210617152341080](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210617152341080.png)

##### 2.4项目属性

###### 2.4.1项目排列数次序

- **order** 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

- 相当于拿号排队，默认是原有元素的顺序，这个是可以重新更改的，单独设置给每个项目，值越大排的越靠后。

- 调整顺序用的不是很多，因为有点反人类思维

  ```css
  .item { order: /*数值，值越大排的越靠后，默认为0;*/ }
  ```

##### 2.4.2项目的放大比例

- **flex-grow** 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大

  - 当项目设置了该属性之后，原来的宽度或宽度失效

  - 项目不换行时：

  - ​       父元素有多余的空间，设置放大比例的元素按照比例占据多余空间

  - ​       父元素没有多余空间，当父元素总长度等于和低于元素宽度或者高度相加总和时，元素们同等比例缩小，无特殊化，放大比例失效。

  - 项目换行时：

  - ​       父元素会有多余空间，因为只要空间不够就换行了，只要有多余空间，放大比例元素会在当前行按照自己的比例分隔剩余空间。默认比例的元素会正常按照宽度占位

  - ​       父元素宽度与元素宽（高度）相加正好相等，多余空间是0，那么设置放大比例的元素，则暂时不会变更宽度。

##### 2.4.3项目的缩小比例

  **flex-shrink** 属性定义了项目的缩小比例，默认为1，负值无效。

  前提是容器设置不换行才能看出效果，容器设置宽度看的更清晰

  **flex-shrink：0** ：项目不换行容器缩小，其中的项目同等压缩，但设置了flex-shrink：0的项目不会压缩，会保持自己的宽度（高度）也就是不参与压缩

  **flex-shrink** ：其他值如2、10等，缩小比例值越大，缩小的比重就越大

##### 2.4.4项目的自动尺寸

  当 **flex-basis** 和 width 属性同时存在时， width 属性不生效

  flex布局有多余空间时，item的宽度为 flex-basis 设置的宽度

  ```css
    .item { flex-grow: <number>比例值; /* default 0 */ }
    .row1>.col:nth-child(1){
              flex-grow: 1;
          }
          .row1>.col:nth-child(2){
              flex-grow: 2;
          }
          .row1>.col:nth-child(3){
              flex-shrink: 0;
          }
          .row1>.col:nth-child(4){
              /* 缩三倍 */
              flex-shrink: 3;
          }
          .row1>.col:nth-child(5){
              /* 自动尺寸 */
              flex-basis: 200px;
          }
          .row1>.col:nth-child(5){
              /* 简写属性   不放大，不缩水,指定多少占多少*/
              flex: 0 0 200px;
          }
  ```

### 3.过渡

#### 3.1.属性名称

- transition-property  过渡样式
- 当过渡多个样式的时候可以写all

#### 3.2.过渡需要的时间

- **transition-duration** 如果让过渡的感觉柔和一下，那就是需要过渡的时间不是一瞬间的而是慢慢的。
- 过渡的时间直接是以秒s或者ms为单位，默认0s

#### 3.3.过渡的方式

**transition-timing-function**过渡方式,过渡方式的不同而在运动中改变速度

- 默认值，先慢再快最后慢 transition-timing-function:ease;
- 先慢，后越来越快 transition-timing-function:ease-in;
- 速度在开始和结束时都很慢,中间不加速 transition-timing-function:ease-in-out;
- 先快，后越来越慢 transition-timing-function:ease-out;
- 匀速 transition-timing-function:linear;

```css
    div{
/* 过渡名称，你要过渡的样式，如果你要过渡的样式好几个，
                你可以写all代表所有要过渡的样式 */
                transition-property: all ;
                /* 过渡时间，多长时间变成过渡后的样式  s代表秒，ms代表毫秒*/
                transition-duration: 1s;
                transition-property:all;
                transition-duration: 1s; /*默认值，先慢再快最后慢*/     transition-timing-function:ease; /*先慢，后越来越快*/ 
                transition-timing-function:ease-in; /*速度在开始和结束时都很慢,中间不加速*/ 
                transition-timing-function:ease-in-out; /*先快，后越来越慢*/ 
                transition-timing-function:ease-out; /*匀速*/     transition-timing-function:linear; 
                /*延迟2s再过渡*/ 
                transition-delay:2s;
}

   body:hover div{
                left:400px;
}
        }
```

#### 3.4过渡的延迟时间

过渡的延迟时间 **transition-delay** 在过渡效果开始作用之前需要等待的时间，值以秒（s）或毫秒（ms）为单位。

#### 3.5**简化写法**

顺序是transition：过渡时间 延迟时间 过渡方式 过渡样式

#### 3.6.多重样式过渡

使用transition进行多个样式并且不同时过渡样式时，每一个不同时间的过渡样式需要用逗号分隔。

```css
/* 注意第二个的延迟时间 */ 
transition:1s linear background-color,1s 1s left;
```

target案例写20遍    select2.html

中午看页头  晚上看border 写

## day14

### 1.变化

#### 1.1transform变化属性

- translate位移
- scale缩放
- rotate旋转
- skew扭曲

#### 1.2translate（）位移函数

translate()在2d变换中位移可以有X轴和Y轴的位移方向，参数可以使用长度单位，百分比对应的是自己的宽度和高度，正直或者负值均可。

- transform: translateX(x); 沿X轴方向平移 正值左移 负值右移

- transform: translateY(y); 沿Y轴方向平移 正值下移 负值上移

- transform: translate(x, y); 沿X轴和Y轴同时平移

  注意：位移和固定定为不同，它并没有脱离文档流，也不会影响其他元素的布局

```css
div：hover{
 /*X轴方向移动*/
 transform:translateX(100px);
 /*Y轴方向移动*/
 transform:translateY(100px);
 /*默认X轴方向移动*/
 transform:translate(50%);
 /*X轴和Y轴一起移动*/
 transform: translate(-100px,200px);
}
```

元素居中，之前margin负值是需要知道元素的宽度和高度，使用translate百分比值则不需要

```css
.box div {
 position: absolute; 
 top:50%; left: 50%; 
 transform: translate(-50%,-50%); 
 }
```

#### 1.3rotate()旋转函数

- **rotate()**函数在2d变换中旋转只能以**Z轴**进行旋转，所以rotate()函数默认为Z轴旋转函数。
- 参数为旋转角度，deg单位为旋转角度。角度可以为正值或负值。
- 旋转中心点，是元素最中心的点

```css
div:nth-child(1):hover{ 
 transform:rotate(60deg);
}
div:nth-child(2):hover{ 
 transform:rotate(-90deg); }
```

#### 1.4**scale()缩放函数**

- **scale()**缩放函数中的参数是以倍数为基础的，1代表当前大小
- 1以上的“正数”为当前大小的倍数。
- 1以下 0以上的“正数”为**缩小**的倍数。
- 0倍为消失
- 当参数值为负值的时候，元素进行镜面翻转，同样倍数会起作用

```css
div:hover { 
    transform: scale(2); 
    transform: scale(0.3); 
    transform: scaleX(0.3); 
    transform: scaleY(2); 
}
div:hover { 
    transform: scaleX(-1); 
    transform: scaleY(-1); 
    transform: scale(-2); 
}
```

#### 1.5skew()倾斜扭曲函数

- **skew()**在2d变换中倾斜可以有X轴和Y轴的倾斜角度
- 填写旋转角度，deg单位为旋转角度，角度可以为正值或负值。
- skew()默认为X轴倾斜函数

```css
div:hover { 
    transform: skewX(45deg); 
    transform: skewX(-45deg); 
    transform: skewY(45deg); 
    transform: skewY(-45deg); 
    transform: skew(45deg); 
}
```

#### 1.6**变换函数的执行顺序**

当变换属性需要叠加使用时，不可以生明多个transform属性，而是需要把所有要使用的变换函数添加在一个transform属性中，用空格分隔。但存在前后顺序问题。

![image-20210618150536399](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210618150536399.png)

```css
用控制台改变旋转角度看效果 
div:nth-child(1):hover{ 
 transform:translateX(200px) rotate(60deg); }
用控制台改变旋转角度看效果 
div:nth-child(2):hover{ 
 transform:rotate(60deg) translateX(200px); }
```

#### 1.7基带

**transform-origin** 属性是可以改变元素变化时的原点，默认情况下，元素的中心原点位于x轴和y轴的50%处。

```css
.box1 { 
 background-color: red; }
.box1:hover { 
 transform: rotateZ(60deg); }
.box2 { 
    background-color: blue; 
    transform-origin: top left; }
.box2:hover { 
 transform: rotateZ(60deg); }
```

- 在变化中，任何元素都有一个中心原点。默认情况下，元素的中心原点位于x轴和y轴的50%处。
- transform-origin属性取值有两种：一种是“长度值”；另外一种是“关键字”。
- ![image-20210618151139461](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210618151139461.png)

#### 1.8  3D变化效果

###### 1.8.1透视

透视距离**perspective**属性

- perspective属性值越大，元素的变形就越小。

  perspective属性值越小，元素的变形就越大。

- perspective属性定义透视距离，距离为长度单位

- （重点）模拟人眼睛到3D变化元素之间的距离

###### 1.8.2旋转函数x轴和y轴

2d中旋转是z轴旋转，而想要感受3d效果，需要旋转的x轴和y轴。

- transform:rotateX(deg); x轴旋转
- transform:rotateY(deg); y轴旋转

```css
.box{ 
 width:600px; height:400px; /*父级给透视,距离越小感觉离自己越近*/  
 perspective:200px; }
.box>div{ 
 width:200px; height:200px; }
.x{transform:rotateX(60deg);} 
.y{transform:rotateY(60deg);}
```

立体魔方

```css
        .box {
            width: 200px;
            height: 200px;
            margin: 100px auto;
            /* background-color: black; */
            /* 将这个空间变为3d空间 */
            transform-style: preserve-3d;
            transition: 10s;
            /* 为了和父级在同一面 */
            position: relative;
        }
        .box:hover{
            transform: rotateY(360deg) rotateX(360deg);
        }
        .box > div{
            width: 200px;
            height: 200px;
            font-size: 50px;
            color: #fff;
            position: absolute;
        }
        .d1{
            background-color: rgba(255,0,  0, 0.5);
            transform: translateZ(100px);
        }

        .d2 {
            background-color: rgba(0, 0, 255, 0.5);
            transform: translateZ(-100px)
            /* 让2翻转过后为正 */
            scaleX(-1);
        }

        .d3 {
            background-color: rgba(0, 255, 0, 0.5);
            transform: rotateY(90deg) translateZ(100px);
        }

        .d4{
            background-color: rgba(255, 255, 0, 0.5);
            transform: rotateY(90deg) translateZ(-100px);
        }

        .d5{
            background-color: rgba(0, 255, 255, 0.5);
            transform: rotateX(90deg) translateZ(100px);
        }

        .d6{
            background-color: rgba(255, 0, 255, 0.5);
            transform: rotateX(90deg) translateZ(-100px);
        }
```

一个球涨水涨到90%

```css
        /* 圆形的进度 */
        .d3{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 2px solid black;
            overflow: hidden;
        }
        .d3 .yuan{
            width: 200px;
            height: 0%;
            transform: rotate(180deg)
            translateY(-200px);
            transform-origin: top;
            background-color: cadetblue;
            animation-name: water;
            animation-duration: 1s;
            animation-timing-function:linear;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
        }
        @keyframes water {
            0%{
                height: 0;
            }
            100%{
                height: 90%;
            }
        }
```

三角形箭头

```css
        /* 箭头 */
        .d4{
            width: 0px;
            height: 0px;
            border:100px solid transparent;
            transform: rotate(180deg);
            margin-top: 50px;
            border-bottom-color: tomato;
            /* animation-name: sx;
            animation-duration: 1s;
            animation-iteration-count: infinite; */
            animation:infinite 1s sx linear;
        }
        @keyframes sx {
            0%{
                /* Y轴位移为0 */
                transform: translateY(0);
            }
            50%{
                transform: translateY(100px);
            }
            100%{
                transform: translateY(0);
            }
        }
```

### 2.动画

#### 1.关键帧

**`@keyframes`** 是css中的@规则，通过在动画序列中定义关键帧的样式，来控制CSS动画序列中的步骤。

#### 2.动画名称

**`animation-name`**属性就是指定动画要使用哪一个关键帧。

#### 3.**动画持续时间**

**`animation-duration`**属性代表一个动画周期的时长，单位为秒(s)或者毫秒(ms)，默认值0秒。

#### 4.**动画的运动方式**

**`animation-timing-function`**属性跟**`transition-timing-function`**属性就是过渡的运动方式类似。同样也具有封装好的方式和贝塞尔曲线的方式。

- \- ease;默认
- \- ease-in;
- \- ease-out;
- \- ease-in-out;
- \- linear;   平滑的旋转
- \- steps(数值, 定位) 定位：start/end 默认end指逐步运动

#### 5.动画的延迟时间

**`animation-delay`**属性动画的延迟时间和之前过渡的延迟时间一样使用

step：阶梯型的匀速运动（深海鲨鱼）

```css
body{
    width:1200px;
    background-color:#000;
    }
.box{
    margin-top:200px;
    width:300px;
    height:120px;
    animation:15s move linear infinite;
}
.fish{
    width:300px;
    height:120px;
    background:url(./img/fish.png) left top;
    /*一秒之内，从顶部移动到底部，分八帧，*/
    animation:run 1s steps(8) infinite;
}
@keyframes run{
  0%{ background-position:0 0;}
  100%{
    /*图片宽300*960*/
    background-position:left -960px;
  }
}
@keyframes move{
  0%{transform:translateX(-300px);}
  100%{transform:translateX(1200px);}
}
```

#### 6.结束状态

在动画运行到某个位置的时候，动画停止，元素默认会迅速回到起始位置

- \- `animation-fill-mode`:设置动画结束时盒子的状态
- \- 属性值：`forwards`保持动画结束后的状态
- \- 属性值：`backwards`动画结束后回到最初的状态

#### 7.动画化执行顺序

**animation-direction**属性是动画的执行顺序

\- 属性值：normal 正向，默认值

\- 属性值：reverse 反向

#### 8.动画循环次数

**\- `animation-iteration-count`**属性主要用来定义动画的播放次数。

\- 其值通常为整数，但也可以使用带有小数的数字，其默认值为1，这意味着动画将从开始到结束只播放一次。

\- 如果取值为`infinite`，动画将会无限次的播放。

#### **9.简写方式**

**\- animation**: 动画执行时间 延迟时间 执行关键帧名称 运动方式 运动次数 结束状态;

\- 最简方式 animation: 动画执行时间 执行关键帧名称;

\- 执行时间和延迟时间顺序不可调整

\- **`animation: 2s 3s move linear 1 forwards reverse;`**

#### **10.动画停止**

**\- animation-play-state**属性规定动画是否正在运行或暂停。

\- 属性值：running 运动的，默认值

\- 属性值：paused 暂停的

center:1000px  居中

四张图在里面一起移出去

足球场S

先层   再细节

## day15

### 响应式布局

#### 1.多终端开发

#### 2.视口的设置

视口（viewport）可以理解为浏览器窗口，不包含浏览器的内容。使用视口约束浏览器大小，让内容区域完全展示在用户面前。

响应式和移动端页面必须设置视口，pc看不出效果

`<meta name="viewport" content="属性名=属性值">` 视口的设置通过content属性设置需要的值，如果content后面有多个属性，则属性与属性之间用英文逗号隔开

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>`

- width=device-width 视口宽度为设备宽度（device设备）
- initial-scale=1.0 初始化视口不缩放
- maximum-scale=1.0 最大是缩放倍率（不缩放）
- user-scalable=0 用户不能缩放

- 简写方式 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

#### 3.**注意事项**

多用流式布局（文档流+浮动）和弹性布局，少用定位

文本，图片，尺寸尽量写相对单位，少用绝对单位

复杂页面不适和使用适应响应式

#### 4.媒体查询

- media媒体类型，浏览网页的设备
- screen：pc/pad/phone
- TV
- print： 打印机，部分手表，冰箱的显示屏等
- all： 所有设别

屏幕尺寸（从bootstrap中遍历出来的，min-width）

- 超小屏幕 (max-width:576px) 如苹果4，苹果5
- 小屏幕 (min-width: 576px) and (max-width: 768px) 如大部分手机
- 中屏幕 (min-width: 768px) and (max-width: 992px) 如pad
- 大屏幕 (min-width: 992px) and (max-width: 1200px) 如中屏电脑
- 超大屏幕 (min-width: 1200px) 如：大屏幕电脑

```css
        /* 小屏 */
        @media (min-width:576px) and (max-width:768px){
            .box {
                display: flex;
                flex-wrap: wrap;
            }    
            .box>.item:nth-child(1),.box>.item:nth-child(4),
            .box>.item:nth-child(5){
                width: 100vw;
                height: 10vh;
            }
            .box>.item:nth-child(2),.box>.item:nth-child(3){
                width: 50vw;
                height: 20vh;
            }
```

***5.Viewport Width和Viewport Height***

vw（Viewport Width）、vh(Viewport Height)是基于视图窗口的单位。

“视区”所指为浏览器内部的可视区域大小，不包含任务栏标题栏以及底部工具栏的浏览器区域大小。

vw:1vw 等于视口宽度的1%

vh:1vh 等于视口高度的1%

--------------------------------------------------------------------------------------------------------

## bootstrap

## day16

### 1.**布局容器**container

container的css,设置了一些基本样式以及响应式布局，会根据屏幕宽度变更宽度，并且居中，定死最大宽度。对比一个普通的div 在不同的屏幕下都定义了最大宽度

#### 2.**变宽容器 container-fluid**

宽度随着body的变化而改变

#### 3.工具类

##### 3.1颜色和排版

###### 3.1.1常用颜色

 \- `primary` - 重要

\- `success` - 成功

\- `danger` - 危险

\- `warning` - 警告

\- `info` - 信息

\- `light` - 亮色

\- `dark` - 深色

\- `secondary` - 浅灰

\- `white` - 白色

###### 3.1.1.2文字颜色

\- `.text-primary`

\- `.text-success`

\- `.text-white`

###### 3.1.1.3背景颜色

\- `.bg-primary`

\- `.bg-dark`

##### 3.2文本样式

###### 3.2.1文本对齐

\- `.text-left` 左对齐

\- `.text-center` 居中对齐

\- `.text-right` 右对齐

###### 3.2.2**字体粗细和斜体**

\- `.font-weight-bold` 加粗

\- `.font-weight-light` 细体

\- `.font-italic` 斜体

##### 3.3调整大小

\- 相对于父级的百分比，包括 25%、50%、75%、 100%

\- w:宽度 `.w-50` 是父元素宽度的50%

\- h:高度 `.h-25` 是父元素高度的50%

\- 缺点：这能设置固定的几种百分比

##### 3.4边框

###### 3.4.1边框属性

`.border` 基类属性

###### 3.4.2边框方向

\- `.border` 全边框

\- `.border-left` 左边框

\- `.border-right` 边框

\- `.border-top` 上边框

\- `.border-bottom` 下边框

\- `.border-right-0` 去掉某边框的宽度

\- `.border-0` 去掉所有的边框

###### 3.4.3**边框颜色**

\- `.border-primary` 多为自定义颜色

###### 3.5圆角

\- `.rounded` 圆角属性

\- `.rounded-circle` 圆

\- `.rounded-left` 左侧圆角

\- `.rounded-bottom` 下侧圆角

\- `.rounded-right` 右侧圆角

\- `.rounded-top` 上侧圆角

##### 3.6.间距(重点)

m ：margin值

p ：padding值

t、r、b、l：分别代表上右下左

.ml-1 默认尺寸是1，0~5

.pl-1 默认尺寸是1，0~5

\- **响应式**（**重点**）

 \- `m-xl-*` 代表屏幕最小`min-width: 1200px` 视口大于1200px时应用的样式

 \- `m-lg-*` 代表屏幕最小`min-width: 992px` 视口大于992px时应用的样式

 \- `m-md-*` 代表屏幕最小`min-width: 768px` 视口大于768px时应用的样式

 \- `m-sm-*` 代表屏幕最小`min-width: 576px` 视口大于576px时应用的样式

\- `m-auto`：代表块级元素在父级里居中

##### 3.7浮动

\- `.float-left` ：元素左浮动

\- `.float-right` ：元素右浮动

\- `.clearfix` ：子元素float后，通过给父元素添加 `.clearfix` 达到清除浮动效果

##### 3.8定位

\- `.position-relative` 相对定位,定位的方向需要单独写

\- `.position-absolute` 绝对定位，注意父元素需要有定位属性，定位的方向需要单独写

\- `.position-fixed` 固定定位，有底部固定和顶部固定两种设置，但其他需要单独设定

\- `.fixed-top` 固定定位顶部

\- `.fixed-bottom` 固定定位底部

\- 缺点：top、left、bottom、right 还需要单独设置

##### 3.9**列表样式**

`.list-unstyled` 去掉列表原有样式

##### 3.10显示

\- `.d-none`元素消失

\- `.d-block`元素按照块级显示

\- `.d-inline`元素按照内联显示

\- `.d-inline-block`元素按照行内块显示

\- `.d-flex`元素按照弹性布局显示

\- 支持响应式`.d-*-none` sm、md、lg、xl,需要注意的是看源码的区间

3.布局，md sm xl .....

## day17

### 1.flex布局

#### 1.1flex属性

- 所有需要使用flex布局的类都需要先在容器中加入以下两个类,否则不生效

- .**d-flex** 容器设置flex布局
- .**d-inline-flex** 内联元素设置flex布局

- 所有弹性都支持响应式 .d-sm-flex ,他规定了四个尺寸sm小尺寸,md中等尺寸,lg大尺寸,xl超大尺寸

  - .d-flex

  - .d-inline-flex

  - .d-sm-flex

  - .d-sm-inline-flex

  - .d-md-flex

    .............

#### 1.2方向

- .flex-row 水平方向正向排版

- .flex-row-reverse 水平方向反向排版

- .flex-column 垂直方向反向排版

- .flex-column-reverse 垂直方向反向排版

- 同样他规定了四个尺寸sm小尺寸,md中等尺寸,lg大尺寸,xl超大尺寸

  .flex-*-row 水平方向正向排版

  .flex-*-row-reverse 水平方向反向排版

  .flex-*-column 垂直方向反向排版

  .flex-*-column-reverse 垂直方向反向

#### 1.3内容对齐

支持响应式，*号位置代表sm,md,lg,xl

- .justify-content-* 代表水平轴的对齐方式
- .justify-content-*-start (浏览器默认值)主轴起始位置对齐
- .justify-content-*-end 主轴结束位置对齐
- .justify-content-center 居中
- .justify-content-between 两端对齐
- .justify-content-around 项目左右间距相同,两元素间距是左右两侧的一倍

#### 1.4对齐项目

支持响应式，*号位置代表sm,md,lg,xl

- align-items-* 代表主轴的交叉轴的对齐方式
- .align-items-*-start 交叉轴起始位置对齐
- .align-items-*-end 交叉轴结束位置对齐
- .align-items-*-center 交叉轴居中对齐
- .align-items-*-baseline 交叉轴及基线位置对齐
- .align-items-*-stretch 交叉轴占满宽高

```css
 <style>
        .zdy-item{
            width: 23%;
        }
  </style>
  <div class="container">
        <div class="d-flex bg-warning
        justify-content-between">
            <div class="zdy-item bg-info p-2">
                <div class="bg-light">
                    <img src="./img/poke/008.png" alt="" class="w-100">
                </div>
                <p class="text-center">Tom</p>
                <p class="text-center">JAVA工程师</p>
            </div>
            <div class="zdy-item bg-info p-2">
                <div class="bg-light">
                    <img src="./img/poke/008.png" alt="" class="w-100">
                </div>
                <p class="text-center">Tom</p>
                <p class="text-center">JAVA工程师</p>
            </div>
            <div class="zdy-item bg-info p-2">
                <div class="bg-light">
                    <img src="./img/poke/008.png" alt="" class="w-100">
                </div>
                <p class="text-center">Tom</p>
                <p class="text-center">JAVA工程师</p>
            </div>
            <div class="zdy-item bg-info p-2">
                <div class="bg-light">
                    <img src="./img/poke/008.png" alt="" class="w-100">
                </div>
                <p class="text-center">Tom</p>
                <p class="text-center">JAVA工程师</p>
            </div>
        </div>
    </div>
```

`flex-wrap`当布局的flex元素，超过当前的整体宽度时，设置该属性，元素将另起一行重新进行排列。

**flex-wrap：wrap ；**

**弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行。**可取值为：`wrapper| nowrapper | wrapper-reverse | column-reverse`，依次展示如下

| nowrap       | 默认值。规定灵活的项目不拆行或不拆列。                       |
| ------------ | ------------------------------------------------------------ |
| wrap         | 规定灵活的项目在必要的时候拆行或拆列。                       |
| wrap-reverse | 规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。     |
| initial      | 设置该属性为它的默认值。请参阅 [*initial*](https://www.runoob.com/cssref/css-initial.html)。 |
| inherit      | 从父元素继承该属性。请参阅 [*inherit*](https://www.runoob.com/cssref/css-inherit.html)。 |

#### 2.栅格布局

- 栅格系统是用于页面布局，属于boot的核心
- 可以在不同终端显示不同效果（响应式）
- 栅格，具有行row、列col的概念

##### 2.1**栅格布局的列**

\- 一行平均分为12个列

\- **`.col-1~12`**代表列占有行的十二分之几份

##### 2.2**栅格布局的响应式**

.col-sm-* 小屏幕

.col-md-* 中屏幕

.col-lg-* 大屏幕

.col-xl-* 超大屏幕

##### 2.3**栅格布局的偏移值**

元素在自己的原位置像右偏移几份

**.offset-1~11** 偏移份数

偏移超出一行，列会换行

##### 2.4嵌套布局

嵌套布局示意图,因为栅格布局有局限,他的底层还是弹性布局,复杂的嵌套关系可以尝试混搭使用

##### 2.5**栅格布局的项目排列方式**

###### 2.5.1**水平轴**

- .justify-content-start 开始位置对齐(如果横向居左)
- .justify-content-center 居中对齐(如果横向居中)
- .justify-content-end 结束位置对齐(如果横向居右)
- .justify-content-around 有缝隙的对齐
- .justify-content-between 左右两端对齐

###### 2.5.2垂直轴

- .align-items-start 开始位置对齐(如果横向居顶)
- .align-items-center 居中对齐
- .align-items-start 结束位置对齐(如果横向居底)

## day18

### 1.table

\- `.table` 是table标签的一个基类（基本样式）

\- `.thead-light` 或`.thead-dark` 就能使 `<thead>`区显示出浅黑或深灰，写在`<thead>`标签中

- \- `.table-bordered` table的边框,有设置好的的样式,但不如自己自定义
- \- `.table-striped` 条形纹,相当于隔行变色效果
- \- `.table-hover` 鼠标悬停效果
- \- `.table-primary`可以加入背景颜色

```css
<style>
    .pic {
      width: 68px;
      height: 56px;
      background-image: url(./img/MSP.png);
      background-repeat: no-repeat;
    }
    table .pic1{
      background-position: -136px 0;
    }
    table .pic2{
      background-position: -204px 0;
    }
    table .pic3{
      background-position: -272px 0;
    }
    table .pic4{
      background-position: -408px 0;
    }
</style>
 <div class="container">
    <table class="table text-center table-hover table-striped">
      <thead class="thead-dark">
        <tr>
          <th>序号</th>
          <th>图像</th>
          <th>中文</th>
          <th>属性</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#001</td>
          <td><div class="pic pic1 m-auto"></div></td>
          <td>妙蛙种子</td>
          <td>
            <div class="bg-success text-white float-left w-50">草</div>
            <div class="bg-dark text-white float-left w-50">毒</div>
          </td>
        </tr>
```

### 2.组件

组件就是boot封装好的一些内容但它们有自己特有的样式组件有的是有动态交互效果的，因此有的需要js参与

#### 2.1按钮

\- 可以作为按钮的标签：`<a>、<button>、<input>`

\- `.btn`按钮的基本类，渲染了基本的背景、边框、过渡等样式，必须加btn

##### 2.1.1颜色样式

- \- `.btn-default` 默认样式
- \- `.btn-success` 成功
- \- `.btn-warning` 警告
- \- `.btn-danger` 危险
- \- `.btn-primary"` 首选项
- \- `.btn-primary` 重要
- \- `.btn-info` 信息
- \- `.btn-light` 浅色
- \- `.btn-dark` 深色
- \- `.btn-link` 连接

##### 2.1.2按钮轮廓

- .btn-outline-success 成功
- .btn-outline-warning 警告
- .btn-outline-danger 危险
- .btn-outline-primary 重要
- .btn-outline-info 信息
- .btn-outline-light 浅色
- .btn-outline-dark 深色

##### 2.1.3按钮尺寸

**按钮的尺寸是通过内边距撑开的，而不是宽高，属于开发技巧。**

- .btn-lg 大尺寸按钮
- .btn-sm 小尺寸按钮

##### 2.1.4块级按钮

块级按钮 **.btn-block** 会**随着外层容器的宽度变化**，因为它的宽度是外层的100%，多用于移动端，比如：支付，下一步，登录等

**.btn-block** 块级按钮,父元素的同等大小

#### 2.2按钮组

按钮组就是把按钮放在以一个组里显示

- btn-group 按钮组（基类）
- .btn-group-lg 和 .btn-group-sm 按钮组尺寸
- .btn-group-vertical 按钮组竖列显示，不需要写基类 .btn-group

```css
  <div class="container">
    <!-- 普通的按钮 -->
    <button class="btn">按钮</button>
    <button class="btn btn-danger btn-sm">按钮</button>
    <button class="btn btn-success btn-lg">按钮</button>
    <button class="btn btn-outline-danger">按钮</button>
    <button class="btn btn-block btn-primary">块级按钮</button>
    <!-- 按钮组 -->
    <!-- 一说组，必须找一个元素包起来 btn-group按钮组 -->
    <div class="btn-group">
      <button class="btn bg-danger">1</button>
      <button class="btn bg-danger">2</button>
      <button class="btn bg-danger">3</button>
    </div>
    <div class="btn-group btn-group-lg">
      <button class="btn bg-info">1</button>
      <button class="btn bg-danger">2</button>
      <button class="btn bg-success">3</button>
    </div>
    <!-- 竖排按钮btn-group-vertical -->
    <div class="btn-group-vertical btn-group-lg">
      <button class="btn bg-info">1</button>
      <button class="btn bg-danger">2</button>
      <button class="btn bg-success">3</button>
    </div>
  </div>
```

### 3.徽章

是一种小型的用于计数和打标签的组件，比如邮件未读提示，购物车角标等等,一般涵盖在标签中用span标签来表示徽章

- \- `.badge` 徽章（基类）
- \- `.badge-pill` 胶囊徽章，可以写基类可以不些，不写会变大

```css
    <div class="btn-group-vertical btn-group-lg">
        <button class="btn btn-info">收件箱
            <span class="badge bg-info">3</span>
        </button>
        <button class="btn btn-warning">发件箱
            <span class="badge-pill bg-danger">3</span>
        </button>
        <button class="btn btn-info">草稿箱
        </button>
    </div>
```

```css
<style>
        .box{
            margin-top: 20px;
            width: 70px;
        }
</style>
<!-- 胶囊购物车 -->
<div class="box">
        <img src="./img/57b12a31N8f4f75a3.jpeg" alt="" class="w-50 d-clock float-left">
        <span class="badge text-light bg-danger d-block float-left">5</span>
    </div>
```

### 4.卡片

- .card 卡片，最外层容器
- .card-header 卡片头部信息
- .card-img-top 卡片顶部图片 和 .card-img-bottom 卡片的底部图片
- .card-body 卡片主体部分
- .card-text 卡片文字介绍
- .card-footer 卡片的底部
- .card-group 卡片组，里面可以包裹多个卡片

```css
  <style>
  .xz-jj {
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 3px;
    background-color: #ccc;
    font-size: 12px;
  }
  .xz-sld > div > input {
    height: 25px;
    outline: none;
    margin: 0 2px;
  }
  .xz-sld > button {
    height: 25px;
    font-size: 12px;
    padding: 0 0.75rem;
  }
  </style>

<div class="xz-shop-group">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-12">
          <!-- 标题部分 -->
          <!-- 商品部分 -->
          <div class="row">
            <!-- 这个区域可以复制 -->
            <div class="col-lg-4 col-md-6 col-sm-12 mb-2">
              <div class="card xz-card">
                <img src="./img/57b12a31N8f4f75a3.jpeg" alt="" class="card-img-top w-75 m-auto">
                <div class="card-body">
                  <h4 class="text-primary">￥5999.00</h4>
                  <p>Lorem ipsum dolor, sit amet conetur adipisicing elit.</p>
                  <!-- 学子塑料袋 -->
                  <div class="xz-sld d-flex justify-content-between">
                    <div class="w-50 clearfix">
                      <div class="xz-jj float-left">-</div>
                      <input type="text" class="w-25 float-left" >
                      <div class="xz-jj float-left">+</div>
                    </div>
                    <button class="btn btn-primary">加入购物车</button>
                  </div>
                </div>
              </div>
            </div>
```

当发现为flex（弹性），text-center没用的时候改用m-auto

项目是容器里的子元素  flex是项目不能当容器使用

### 5.面包屑导航

面包屑导航（Breadcrumb）用于指示当前页面在导航层级中的位置

可以使用h5的新标签`<nav>`给它加入 aria-label属性用来给当前元素加上的标签描述，这个属性可以对不明显的标签做描述，对无障碍服务有利。它知识一个语义化属性，不加也没关系

li的**`aria-current="page"`**表示当前页，也是一种描述

- \- 面包屑导航可以使用h5的新标签`<nav>`，并且根据语义化的特点给其加入`aria-label="breadcrumb"`属性，用于描述其功能
- \- `.breadcrumb` 面包屑导航外层属性
- \- `.breadcrumb-item` 面包屑导航的项目
- \- `.active` 代表当前的项目

```css
        .breadcrumb-item + .breadcrumb-item::before{
            content: ">";
        }

    <div class="container">
        <!-- 让元素和用户发生交互行为，可以让用户进行编辑 -->
        <!-- <div contenteditable="true"></div> -->
        <nav class="breadcrumb">
            <a href="#" class="breadcrumb-item">首页</a>
            <a href="#" class="breadcrumb-item">学习用品</a>
            <a href="#" class="breadcrumb-item">私人定制</a>
            <a href="#" class="breadcrumb-item active">全部内容</a>
        </nav>
    </div>
```

导航内容就是其中的项目  被选中被激活的项就叫item

### 6.弹幕

组件中涉及自定义属性，通过自定义属性控制交互行为。

```
<div class="box bg-success" data-my="odiv" id="mydiv"></div>
var mydiv = document.getElementById('mydiv');
console.log(mydiv.getAttribute('data-my'));
```

因为自定义属性的存在，因此使用自定义属性做js交互

自定义属性**`data-dismiss="alert"`**通过 data 属性：通过数据API添加可取消功能，只需要向关闭按钮添加 `data-dismiss="alert"`，就会自动为警告框添加关闭功能。

属性id    <div id="mydiv"

自定义属性 ： data-XXX="";

```css
    <div class="container">
        <div class="alert alert-danger">这是一个弹窗！
            <span class="close" data-dismiss="alert">X</span>
        </div>
    </div>
```

### 7.折叠

#### 7.1

折叠是一种效果，有一个类似按钮的元素，点按之后出现对应的内容。需要一个按钮类的组件来进行显示元素的控制。之前在学习css的时候有一个选择器教target，和这个类似.

使用**`data-toggle="collapse"`**自定义属性作为切换的按钮控制折叠元素，同时要用选择器锁定被折叠元素**`data-target="#show"`**。

- \- 需要两组元素，第一组是控制元素，控制显示和隐藏的区域
  - 第一组 data-toggle="collapse" data-target="#show"
- \- 控制元素需要使用`data-toggle="collapse"`设置折叠控制，`data-target="#show1"`关联折叠元素
- \- `.collapse`被折叠元素，需要有被控制的选择器，如id或者class

~~~html
（1）单独按钮的开合
```html
<button class="btn btn-primary" data-toggle="collapse" data-target="#show">打开折叠</button>

<div class="collapse" id="show">点击打开按钮对应的被折叠区域</div>
```

#### （2）多个按钮的开合和切换
```html
<button class="btn btn-success" data-toggle="collapse" data-target="#show1">show1</button>

<button class="btn btn-danger" data-toggle="collapse" data-target="#show2">show2</button>

<button class="btn btn-warning" data-toggle="collapse" data-target="">切换1和2</button>

<div class="collapse box" id="show1">对应第一个显示区域</div>

<div class="collapse box" id="show2">对应第二个显示区域</div>
```

~~~

#### 7.2.手风琴

- \- 手风琴效果最外层一定要给id，如：`<div id="zdy-sfq"></div>`，方便关联，要切换的元素主要是`.show`类的切换
- \- `<button>`按钮上需要
- \- `data-toggle="collapse"`开合属性
- \- `data-target="#div1"`关联显示元素的id，target属性
- \- 相关显示元素
- \- `class="collapse"`先用于全部`display：none`
- \- `.show`默认先打开的展示部分
- \- `id="div1"`id属性必须有，因为btn需要关联这个id
- \- `data-parent="#zdy-sfq"`展示属性切换`.show`属性需要先找到最外层祖先元素

```css
 <!-- 手风琴 最外层一定要给id-->
    <div id="zdy-sfq">
      <!-- 第一组 show 默认打开的 -->
      <!-- data-toggle="collapse" 每个btn负责开合的js -->
      <!-- data-target="#div1" btn关联展示部分的id -->
      <!-- data-parent="#zdy-sfq" 每一个要展示的元素，都要找到父辈也就是所有手风琴的最顶端元素的id -->
      <div class="card">
        <button class="btn btn-danger" data-toggle="collapse" data-target="#div1">手风琴第一项</button>
        <div class="collapse show" id="div1" data-parent="#zdy-sfq">第一项的内容11111111111</div>
      </div>
      <!-- 第二组 -->
      <div class="card">
        <button class="btn btn-success" data-toggle="collapse" data-target="#div2">手风琴第二项</button>
        <div class="collapse" id="div2" data-parent="#zdy-sfq">第二项的内容2222222222</div>
      </div>
      <!-- 第三组 -->
      <div class="card">
        <button class="btn btn-warning" data-toggle="collapse" data-target="#div3">手风琴第三项</button>
        <div class="collapse" id="div3" data-parent="#zdy-sfq">第三项的内容3333333333</div>
      </div>
    </div>
```

#### 7.3下拉菜单

下拉菜单与折叠类似，需要一个控制元素，关联开合的下拉组

- \- `.dropdown`下拉菜单区域

- \- 没有id关联，就是通过兄弟关系寻找元素的，千万要在一个元素内包裹

- \- 控制按钮

  - \- `.dropdown-toggle` 向下三角

  - \- `data-toggle="dropdown"` 控制下拉的控件

- \- 菜单区域

  - \- `.dropdown-menu` 菜单列表

  - \- `.dropdown-item` 菜单列表项

```css
  <div class="container">
    <div class="dropdown">
      <button class="btn btn-success dropdown-toggle" data-toggle="dropdown">下拉菜单</button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">家用电器</a>
        <a class="dropdown-item" href="#">食品生鲜</a>
        <a class="dropdown-item" href="#">图书影视</a>
      </div>
    </div>
  </div>
```

### 8.表单

表单的涉及有自己的样式,但因为搜索或者表单区域会设计自己但样式，往往表单提供的样式不常用

**`.form-control`** 表单控件（基类）

```css
  <div class="container">
    <!-- form-control -->
    <input type="text" class="form-control">
  </div>
```

### 9.列表组

- \- `.list-group` 列表组（父级）
- \- `.list-group-item` 列表项目
- \- `.list-group-item-action` 列表项目的悬停效果
- \- `.active` 被选项
- \- `.list-group-item-primary` 列表项的颜色

```css
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item list-group-item-action active">曹操</li>
      <li class="list-group-item list-group-item-action">刘备</li>
      <li class="list-group-item list-group-item-action">孙权</li>
      <li class="list-group-item list-group-item-action">诸葛亮</li>
      <li class="list-group-item list-group-item-action">司马懿</li>
    </ul>
  </div>
```

### 10.导航

\- **普通导航**

 \- `.nav`导航（父级的基类）

 \- `.nav-item`导航项目（多用li）

 \- `.nav-link` 导航链接（一般用于li中的a）

 \- `.justify-content-center` 导航的居中对齐

 \- `.justify-content-end` 导航的右侧遂起

\- **胶囊导航**

 \- `.nav`导航（父级的基类）

 \- `.nav-pills`胶囊效果（父级）

 \- `.nav-item`导航项目（多用li）

 \- `.nav-link active` 导航链接（一般用于li中的a）以及 当前的

 \- `data-toggle="pill"` 使用胶囊切换（a）

\- **选项卡**

 \- `.nav`导航（父级的基类）

 \- `.nav-tabs` 导航为选项卡（父级）

 \- `.nav-link` tab链接

 \- `data-toggle="tab" href="#home"`具有切换的功能 以及 显示目标的id，依靠id关联

 \- `.tab-content` 显示目标的父级

 \- `.tab-pane` 显示部分隐藏

 \- `.show` 显示

 \- `.active` 默认选择

 \- `id="home"` 显示内容对应id

```css
  <div class="container">
    <!-- 普通导航 -->
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">首页</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">学习用品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">私人定制</a>
      </li>
    </ul>
    <!-- 胶囊导航 -->
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="pill" href="#">首页</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#">学习用品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#">私人定制</a>
      </li>
    </ul>
    <!-- 选项卡 -->
    <nav>
      <div class="nav nav-tabs">
        <a class="nav-link active" data-toggle="tab" href="#tab1">商品详情</a>
        <a class="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="nav-profile"
          aria-selected="false">商品评价</a>
      </div>
    </nav>
    <div class="tab-content">
      <div class="tab-pane show active" id="tab1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        delectus cumque reiciendis ipsa aut est voluptates? Mollitia eum corrupti adipisci, similique natus, ipsum
        eligendi sequi atque quo cum aliquid inventore.</div>
      <div class="tab-pane" id="tab2">111111111</div>
    </div>
  </div>
```

## day19

### 1.导航条

**导航条或者叫导航栏和导航的区别是**:

1.导航是横向，导航条可以是横向和纵向。

2.导航的结构**ul>li>a**,导航条的结构最外层需要有一个包裹元素如div,nav

3.boot网页的导航，缩小页面看效果，导航条缩小看效果，导航条缩小后可以响应式收缩导航内容变成三条线,叫做断点分组

\- `.navbar` 导航条外层（基类）

\- `navbar-dark bg-dark` 深色主题

\- `navbar-light bg-light` 浅色主题

\- logo和项目介绍

 \- `.navbar-brand` 用于logo和项目名的外层

\- 响应式

 \- `.navbar` 导航条外层（基类）

 \- `.navbar-expand{-sm|-md|-lg|-xl}`菜单为竖向排列没加入该类变为横向，同样用于响应式(必要)

\- 可隐藏的导航菜单

 \- `.collapse .navbar-collapse` 断点分组和隐藏导航栏内容，与缩小菜单相关，在导航父级设置

 \- 如果需要响应式隐藏导航，需要设置id与缩小菜单关联，如：`id=navMenu`

 \- `.navbar-nav`轻量级导航（支持下拉菜单）

\- 缩小菜单

 \- 一般使用`<button>`作为缩小菜单

 \- `.navbar-toggler` 缩小菜单（缩小时展示的菜单）

 \- `data-toggle="collapse" data-target="#navMenu"`需要切换属性以及关联可切换的目标菜单,前提必须有对应id的菜单才生效

 \- 一般使用`<span>`设置缩小菜单的图标`.navbar-toggler-icon`

\- 表单控件`.form-inline`

\- 文本`.navbar-text` 用于添加垂直居中的文本字符串

```css
/* xz-header 页头的css */
@media (max-width:768px) and (min-width:300px) {

    /* 控制flex换行 */
    /* .xz-nav-box {
        flex-wrap: wrap !important;
    } */

    .xz-search {
        margin: 10px 0;
        width: 90% !important;
    }
}

.xz-header {
    background-color: #f5f5f5;
}

.xz-search {
    width: 55;
}

.xz-search input {
    height: 35px;
    background-image: url(../img/header/search.png);
    background-repeat: no-repeat;
    background-position: right;
}

.xz-menu>a {
    padding: 4px 8px !important;
    font-size: 12px;
}

/* 后两个是字需要单独调整间距 */
.xz-menu>a:nth-child(n+4) {
    line-height: 25px;
}
```

```html
    <div class="xz-header">
        <div class="container">
            <!-- navbar 导航的父级 -->
            <div class="navbar navbar-light navbar-expand-md">
                <a href="#"><img src="./img/header/logo.png" class="navbar-brand"></a>
                <!-- 缩小时才出现的下拉菜单md以下的时候才会出 -->
                <button class="navbar-toggler"  data-toggle="collapse" href="#xzmenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- 菜单（可隐藏的） -->
                <div class="collapse navbar-collapse" id="xzmenu">
                    <!-- 因为navbar-collapse 是项目因此内层要嵌套一个容器再做布局 -->
                    <!-- flex-sm-wrap 在md以下换行 -->
                    <div class="d-flex flex-wrap w-100 justify-content-between">
                        <!-- 搜索框 -->
                        <div class="xz-search">
                            <input type="text" class="w-100 border-0">
                        </div>
                        <!-- 菜单区 -->
                        <div class="xz-menu nav">
                            <a href="#" class="nav-item nav-link">
                            <img src="./img/header/care.png" alt=""></a>
                            <a href="#" class="nav-item nav-link">
                            <img src="./img/header/order.png" alt=""></a>
                            <a href="#" class="nav-item nav-link">
                            <img src="./img/header/shop_car.png" alt=""></a>
                            <a href="#" class="nav-item nav-link">注册</a>
                            <a href="#" class="nav-item nav-link">登录</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
```

  /*控制flex换行*/

方法一：

加 xz-nav-box

  /* .xz-nav-box {

​    flex-wrap: wrap !important;

  } */

方法二：

<!-- flex-sm-wrap 在md以下换行 -->

flex-wrap 不加范围限制（eg：flex-sm-wrap），即任何时候都换行

active加给li  不能加给a

### 2.分页

\- `.pagination` 分页的父级效果

\- `.page-item` 分页项

\- `.active` 被激活的项目,加（li而不是link）

\- `.disabled` 禁用的，比如第一页时的上一页，和最后页时的下一页

\- `.page-link` 分页项中的链接,主要样式在link中

\- 对齐方式`.justify-content-center`居中，`.justify-content-end`居右

```html
    <div class="container">
        <ul class="pagination justify-content-end">
            <li class="page-item disabled">
                <a href="#" class="page-link">上一页</a>
            </li>
            <li class="page-item active">
                <a href="#" class="page-link">1</a>
            </li>
            <li class="page-item">
                <a href="#" class="page-link">2</a>
            </li>
            <li class="page-item">
                <a href="#" class="page-link">3</a>
            </li>
            <li class="page-item">
                <a href="#" class="page-link">4</a>
            </li>
            <li class="page-item">
                <a href="#" class="page-link">下一页</a>
            </li>
        </ul>
    </div>
```

### 3.媒体对象

构建高度重复的组件，例如博客评论，推文等。

\- `.media`媒体对象，创建重复模块

\- `.media-body`媒体对象的内容区域

\- 直接加入`<img>`图片 `.media-body`的内容会在它一侧展示，可以通过`<img>`和`.media-body`位置调换来让图片在左还是在右显示

\- `.list-unstyled` 使用媒体对象列表可以包裹多个媒体对象

```html
  <div class="container">
    <div class="xz-tab">
      <!-- 切换区 -->
      <!-- data-toggle="tab" `.nav-tabs` 导航为选项卡（父级）-->
      <div class="nav nav-tabs">
        <!-- nav-link` tab链接 -->
        <a href="#show1" class="nav-link active" data-toggle="tab">商品详情</a>
        <a href="#show2" class="nav-link" data-toggle="tab">商品评价</a>
      </div>
      <!-- 展示区 -->
      <!-- show显示 active选中 -->
      <div class="tab-content">
        <div id="show1" class="tab-pane active">
            <img src="./img/product_detail.png" alt="" class="w-100">
        </div>
        <div id="show2" class="tab-pane">
            <!-- 一组媒体对象，有多个 -->
            <ul class="list-unstyled">
                <li class="media">
                    <img src="./img/appraise/icon1.png" alt="">
                    <div class="media-body">
                        <h5>lj</h5>
                        <p>宝贝质量很满意！</p>
                    </div>
                </li>
                <li class="media">
                    <img src="./img/appraise/icon2.png" alt="">
                    <div class="media-body">
                        <h5>tom</h5>
                        <p>宝贝质量很满意！</p>
                    </div>
                </li>
                <li class="media">
                    <img src="./img/appraise/icon3.png" alt="">
                    <div class="media-body">
                        <h5>haha</h5>
                        <p>宝贝质量很满意！</p>
                    </div>
                </li>
                <li class="media">
                    <img src="./img/appraise/icon4.png" alt="">
                    <div class="media-body">
                        <h5>oo</h5>
                        <p>宝贝质量很满意！</p>
                    </div>
                </li>
                <li class="media">
                    <img src="./img/appraise/icon5.png" alt="">
                    <div class="media-body">
                        <h5>none</h5>
                        <p>宝贝质量很满意！</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
```

### 4.巨幕

巨幕就是某个图片或者某个颜色扩展至整个视口，主要用于大型活动和广告的宣传，比如王者荣耀官网

- .jumbotron 超大巨幕，可以不写在 .container 或者 .container-fluid 中
- .jumbotron 可以包裹 .container 或者 .container-fluid
- 因 .jumbotron 有圆角，因此，加 .jumbotron-fluid 可以去除巨幕的圆角

```html
<div class="jumbotron jumbotron-fluid myjum">
        <div class="container">
            <h1 class="display-4 text-light">欢迎来到王者荣耀</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within</p>
            <!-- .btn-lg 大尺寸按钮 -->
            <a class="btn btn-primary btn-lg" href="#">活动详情</a>
        </div>        
    </div>
```

### 5.轮播

轮播图比较常见，效果也很多，而他的控制往往通过js来做。

\- **父级**

 \- `.carousel`定位

 \- `.slide`平滑的过渡效果，不需要可以删掉

 \- `data-ride="carousel"` 负责利用定时器切换内部项目（js），不需要可以删掉

\- **展示图**

 \- `.carousel-inner` 展示图大区域位置

 \- `.carousel-item` 展示区域中的展示项目

 \- `.active` 被激活的展示项目

\- **左右控制按钮**

 \- 左右切换使用a标签，利用`href="#banner"`来控制轮播

 \- `.carousel-control-prev` 上一个（在轮播中定位）

 \- `.carousel-control-next` 下一个（在轮播中定位）

 \- `.carousel-control-prev-icon`和`.carousel-control-next-icon` 可点击的按钮

 \- `data-slide="prev"`向左控制按钮

 \- `data-slide="next"`向右控制按钮

\- **指示符**

 \- `.carousel-indicators`指示符区域，在轮播中的位置

 \- `data-slide-to="0"` 指示符项目控制的对应展示项目的位置，从0开始

 \- `.active` 指示符激活

 \- `data-target="#banner"` 指示符需要控制轮播

 \- 在boot中`.carousel-indicators li`设置了控制符的样式

 \- `.carousel-indicators .active`控制active的样式

```html
   <div class="container">
        <!-- 父级最外层 
        `.carousel`定位 `.slide`平滑的过渡效果，不需要可以删掉  
        `data-ride="carousel"` 负责利用定时器切换内部项目（js）-->
        <div class="carousel slide" data-ride="carousel" id="banner">
            <!-- 准备轮播的图片区域 `.carousel-inner` 展示图大区域位置-->
            <div class="carousel-inner">
                <div class="carousel-item active"><img src="./img/banner/itemCat_banner1.png" alt=""
                        class="d-block w-100"></div>
                <div class="carousel-item"><img src="./img/banner/itemCat_banner2.png" alt="" class="d-block w-100">
                </div>
                <div class="carousel-item"><img src="./img/banner/itemCat_banner3.png" alt="" class="d-block w-100">
                </div>
                <div class="carousel-item"><img src="./img/banner/itemCat_banner4.png" alt="" class="d-block w-100">
                </div>
            </div>
            <!-- 控制左右 
            `.carousel-control-prev` 上一个（在轮播中定位）
              - `.carousel-control-next` 下一个（在轮播中定位）
            `.carousel-control-prev-icon`和`.carousel-control-next-icon` 可点击的按钮-->
            <a href="#banner" class="carousel-control-prev" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a href="#banner" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
            <!-- 指示符区域 
   `.carousel-indicators`指示符区域，在轮播中的位置
   `data-slide-to="0"` 指示符项目控制的对应展示项目的位置，从0开始-->
            <ul class="carousel-indicators xz-key">
                <li class="active" data-target="#banner" data-slide-to="0"></li>
                <li data-target="#banner" data-slide-to="1"></li>
                <li data-target="#banner" data-slide-to="2"></li>
                <li data-target="#banner" data-slide-to="3"></li>
            </ul>
        </div>
    </div>
```

# scss

## day19

文件编译和监听

使用终端或vscode终端在要编译的文件夹下打开，注意路径

文件夹监听 sass --watch scss:css

文件监听 sass --watch 1.scss:1.css

可以使用简写 sass -w scss:css

#### 1.**嵌套与书写**

##### 1.1.嵌套的规则

\- 按照html标签结构嵌套书写

\- 将子元素的选择器和样式列表直接包裹在父元素的样式列表中

\`

```scss
div {
  width: 200px;
  height: 200px;
  background-color: red;
  p {
    color: white;
    font-size: 20px;
    a {
      text-decoration: none;
    }
  }
}
```

监听上级目录下day18：  sass -w:../day18 -css

##### 1.2**父选择器** **&**

父选择器 & 的使用是代表当前作用域所有的结构集合

如果需要使用伪类，必须使用&进行占位

```scss
div {
  width: 200px;
  height: 200px;
  background-color: red;
  p {
    color: white;
    font-size: 20px;
    a {
        <!-- 无下划线 -->
      text-decoration: none;
    }
    &:hover {
      color: blue;
    }
  }
}
<div>
  <p>请访问<a href="#">这里</a></p>
</div>
```

```css
div {
  width: 200px;
  height: 200px;
  background-color: red;
}
div p {
  color: wheat;
  font-size: 20px;
}
div p a {
  text-decoration: none;
}
div p:hover {
  color: blue;
}
```

##### 1.3**@charset**

因为在scss中不能出现中文字符，否则编译会失败，但有可能出现注释为中文，因此要在scss文件的最顶端，加入 `@charset "utf-8";` 规则，保证在当前文件内可以使用所有能使用`utf-8`编码规则的文字。

在scss文件内的注释可以使用`//`双斜线或者`/**/`两种，但到编译css后，css文件中不出现`//`注释的内容

##### 1.4**@import**导入方式

Sass 的 @import ，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个CSS 文件中。相当于将一个sass导入到另一个sass中用

@import "需要被引入的文件.scss";

将@import指令写到需要引入的scss文件中不要使用url()，直接把路径写在双引号内。

```scss
@charset"utf-8";
@import"./1.scss";
@import"./br.scss";
body{
    background-color: red;
}
*{
    margin: 0;
    padding: 0;
}
// ul > li*3  h50,颜色不同
ul{
    li{
        height: 50px;
        &:nth-child(1){background-color: red;}
        &:nth-child(2){background-color: blue;}
        &:nth-child(3){background-color: yellow;}
    }
}
ul{
    li{
        height: 50px;
        &:nth-child(1){background-color: $abc;}
        &:nth-child(2){background-color: $xyz;}
        &:nth-child(3){background-color: blueviolet;}
    }
}
```

#### 2.**变量的使用**

SassScript 最普遍的用法就是变量，变量以美元符号开头，赋值方法与 CSS 属性的写法一样

##### 2.1**创建变量**

$变量名:值; 创建一个变量名

变量可以承接长度单位、值、颜色，以及其他变量

变量名尽量见名之意

```scss
$a:10;
$b:20px;
.box2{
    width: $a+px;
    height: $b;
}
```

##### 2.2**变量的调用**

变量的调用，如：height: $myHeight;

变量也可以调用其他变量

##### 2.3局部变量

可以创建局部变量，作用在{}以内的范围

注意全局变量的名称尽量不要和局部变量名称重复，以免出错

```scss
$abc:#ff1a00;
$xyz:#0100af;

div{
    $ccc:blue;
    background-color: $abc;
    color: $ccc;
    a{
        background-color: $abc;
        color: $ccc;
    }
}
```

### 3.**混合指令**

#### 3.1 **定义混合指令** **@mixin**

声明混合指令就像创建一个@keyframes关键帧，需要一个名字，和一个定义样式的域{}

@mixin 后添加名称与样式 @mixin name {样式列表}

混合也需要包含选择器和属性，甚至可以用 & 引用父选择器

混合指令的名称可以自定义，但不要使用数字开头，按照css要求的命名标准

自定义一个按钮的圆角和阴影，所有按钮都可以使用

```scss
@charset"UTF-8";
// mixin传参
@mixin btn($a,$b) {
    background-color: rgb(0, 157, 255);
    color: #fff;
    font-size: 14px;
    border: 0;
    border-radius: 5px;
    height: $a;
    width: $b;
}

// mixin不定参
@mixin shadow ($x...){
    box-shadow: $x;
}

.box{
    width: 100px;
    height: 100px;
    @include shadow(0 0 20px 5px green);
}

button{
    @include btn;
    // width: 130px;
    // height: 40px;
}

button{
    @include btn;
    // height: 100px;
    // width: 30px;
}

// mixin父元素给清除浮动
@mixin clearfix {
    &::after{
        content: "";
        height: 0;
        display: block;
        clear: both;
    }
}

```

#### 3.2 **引用混合样式 @include**

\- 使用 @include 指令引用混合样式，格式是在其后添加混合名称 `@include name;`

\- 将`@include` 指令和调用混合名称直接放在需要的样式列表中

\- 定义了混合指令就要用，需要在哪个地方用就使用 `@include`来引用`@mixin`的指令名

#### 3.3 **参数**

可以传递参数（可选） @include name(30px); 也可以配合变量使

用 @include name($变量);

接收形式参数需要 @mixin name($x){样式列表} 格式

参数变量 @mixin name($x...){样式列表}

```scss
@mixin btn-style($w, $h) { 
    //共有样式 
    text-align: center; 
    display: block; 
    border-radius: 5px; 
    box-shadow: 5px 5px 5px 0 #666; 
    background-color: rgb(18, 182, 247); 
    text-decoration: none; 
    color: #fff; 
    //特有样式 
    width: $w; 
    height: $h; 
    line-height: $h; }
    .block-btn {@include btn-style(150px,50px);} 
    .a-btn {@include btn-style(120px,40px);}
```

eg：设计一个元素居中的混合指令，只要应用的元素都可以上下左右居中在父元素中

使用子元素定位，margin负值需要用到子元素的宽度和高度的一半

宽度和高度是每个元素都不同的自定

```scss
@mixin box-center($w,$h) { 
    width: $w; 
    height: $h; 
    position: absolute; 
    left: 50%; top: 50%; 
    margin-top: -($h)/2; 
    margin-left: -($w)/2; }
    .baba { 
    width: 400px; 
    height: 400px; 
    background-color: red; 
    .erzi { 
    @include box-center(100px,200px); 
    background-color: yellow; }
    & {position: relative;} }
```

### 4.继承

#### 4.1**@extend**

\- 在样式列表中使用`@extend 需要继承的选择器`

\- 延伸复杂的选择器,允许延伸任何的选择器,如:hover`@extend .item:hover;`

\- 可以多重延伸 `@extend .btn1;@extend .text;`

\- 继承多个选择器样式也可以使用`@extend .btn1,.abc`,用逗号分隔。

```scss
.btn {
  width: 150px;
  height: 50px;
  border-radius: 10px;
}
.btn1 {
  background-color: red;
  @extend .btn;
}
.btn2 {
  box-shadow: 5px 5px 5px black;
  @extend .btn1;
}


.item:hover {
  background-color: rgb(125, 186, 255);
}
.list{
  li:hover {
    @extend .item:hover;
  }
}
```

4.2**占位符选择器 %**

Sass 额外提供了一种特殊类型的选择器：占位符选择器，与id,class 选择器写法相似，只是 # 或 . 替换成了 %。但必须通过 @extend 指令调用

使用

\- 占位符选择器`%name`与id,class 选择器写法相似，只是 # 或 . 替换成了 %

\- 必须通过 @extend 指令调用`@extend %name;`

\- 占位符选择器,在编译后的css文件中不会出现

```scss
%wh{
    width: 100px;
    height: 200px;
}
.wh{
    width: 200px;
    height: 200px;
}

.box1 {
    @extend %wh;
    @extend .wh;
}
```

```css
.box1 {
  width: 100px;
  height: 200px;
}

.wh, .box1 {
  width: 200px;
  height: 200px;
}
```

### 5.运算

#### 5.**1.** **插值语句**

之前创建变量是用于样式中的值，但是选择器的名字不能使用变量，但可以使用插值#{}包裹变量

后使用，而且 使用 #{} 可以避免 Sass 运行运算表达式，比如/除号，有时候不是要除号而是需要

斜杠

通过 #{} 插值语句可以在选择器或属性名中使用变量

使用 #{} 可以避免 Sass 运行运算表达式，直接编译 CSS,

如 border-radius: #{$a}/#{$b}; 使用插值 / 可以不看作除号

```scss
.box1{
    width: 20px+30px;
    height: 20px*2;
}
$a:10;
$b:20px;
.box2{
    width: $a+px;
    height: $b;
}

.box3{
    width: $b/$a;
}
.box4{
    width: 300px;
    height: 100px;
    border-radius:#{$a}/#{$b};
}

.box5{
    background-color: #1f4acc;
}
```

```css
.box1 {
  width: 50px;
  height: 40px;
}

.box2 {
  width: 10px;
  height: 20px;
}

.box3 {
  width: 2px;
}

.box4 {
  width: 300px;
  height: 100px;
  border-radius: 10/20px;
}

.box5 {
  background-color: #1f4acc;
}
```

#### 5.**2.** **数字运算**

Sass脚本支持数字的加减乘除、取整等运算 (+, -, *, /, %)

计算方式可以是值直接计算，如： 10px * 10 => 100px

计算方式可以是变量计算，如： width: $a+$b;

加法遇到字符串会拼接，但字符串要在前半部分 "acb"+20px

运算符于值之间尽量加空格，以免被认为是变量的一部分

除法比较特殊，使用时需要谨慎

#### 5.**3.** **颜色值运算**

颜色值的运算是分段计算进行的，也就是分别计算红色，绿色，以及蓝色的值

**不成功的重点**：

- 在运算中，可能会出现多种出错情况，或者运行不生效的可能，原因是系统I/O调用顺序导致的。
- 输入输出I/O流可以看成对字节或者包装后的字节的读取就是拿出来放进去双路切换。
- 此刻的I/O调用的一瞬间的快慢会导致读取的顺序发生改变，因此，可能会出现报错，无法读取等情况。

#### 6.控制指令

6.1**if**

\- @if 的表达式返回值不是 false 或者 null 时，条件成立，输出 {} 内的代码

\- @if 声明后面可以跟多个 @else if 声明，或者一个 @else 声明

\- 条件局限性很强，单个判断可以如:$a==100px,$a>=200px

\- “与”判断使用关键词`and`

\- “或”判断使用关键词`or`

\- “非”判断使用关键词`!=`

```scss
$a:400px;
$b:250px;
.box{
    width: $a;
    height: $b;
    @if $a!=400px and $b>150px {
        border: 5px solid #000;        
    }@else{
        border: 1px solid #666;
    }
}
```

```css
.box {
  width: 400px;
  height: 250px;
  border: 1px solid #666;
}

```

## {$  }:插值语句

### 7.函数

坑：计算符号的两侧加空格   可以编译成功

## day20

复习boot页面代码
