# js

## day01

(1)

1.区分大小写

2.每行结束的分号可以省略

3.注释//

## day02

内存—>二进制到cpu中运算—>十进制

### 常量（const)：用于存储数据的容器

常量一旦声明必须赋值，不允许重新赋值(连接数据库设置的端口，账号，密码....信息)

eg:声明常量分别保存数据库服务器的IP地址，端口，用户名，密码

const IP = '127.0.0.1';

const port = 3306;

const user = 'root';

const password = ' ';

### 数据类型

#### 1.原始类型

数值型：（number）  二进制 0 2 4 8 ....

​    八进制-以0开头  

​      十六进制-以0x开头的数字(不区分大小写）：0xa=10     1 2 3 .....a ...f ...10

​      浮点型：3.1415e+2

typeof:检测数据类型

字符串型：（string）   被引号包含的数据就是字符串型，不区分单双引号

​    查看任意一个字符的Unicode码

​    's'.charCodeAt();

​    eg://查看一个字符的编码值

​    console.log('s',charCodeAt());

布尔型:(boolean)    里面只有两个值 true/false，代表真和假，表示只有两个结果的数据，例如是否登录/注册....

未定义型：只有一个值undefined   声明了变量未赋值则为undefined  

空：只有一个值NULL

​     类型是object（对象），常结合引用类型数据使用

#### 2.引用类型

#### 3.数据类型转换

##### 隐式转换

（1）数字+字符串 ：数字转为字符串 拼接在一起      2+'1'='21'

（2）数字+布尔型：布尔型转为数值，true/false为1/0 再相加

（3）字符串+布尔值：布尔值转为字符串 拼接在一起   'abc'+true='abctrue'

练习：查看以下程序的运行结果：

var a=2, b=true,c='tedu';

console.log(a+b+c);//'3tedu'

console.log(b+c+a);//'truetedu2'

console.log(c+a+b);//'tedu2true'

“**`**”:反引号   增强型字符串  定义多行字符串，或者在字符串中嵌入变量。

加号（+）的作用：

（1）加法运算

（2）字符串之间的拼接

（后端—>js(通过Ajax从后端得到数据)—>前端网页（拼接数据））

eg:


var title = 'iphone';

var price = 4999;

console.log('标题:   '+title+'    价格:  '  +price);

练习：价格从后端获取到了一个用户名和手机号码，最后打印

var userName = 'tao';

var phone = '123456789';

console.log('欢迎：'+userName+‘  您当前绑定的手机号码'+phone);

NaN：Not a Number,不是一个数字，是在数据转数值的时候失败的结果，和任何的值执行数学运算结果还是NaN

eg:

var a1 = 2+undefined;//NaN  Not a Number 不是一个数字

var a2 = '4' * 2;//8

var a3 = true - '5';//-4

var a4 = undefined - '2';//NaN

隐私转换为数值自动的调用的函数Number（）

##### 强制转换

1.强制转为数值

var n1=Number(true);//1

Number('false');//0

练习：转以下数据为字符串

’2‘  ’2a' undefined null

Number('2');//2

Number('2a');//NaN

Number('undefined');//NaN

Number('null');//0

2.强制转化为整型

parseInt():通常用于将小数和字符串转为整型，其他转化为NaN

常用于分页

eg:

var p1 = parseInt(8.3);//8

var p2 = parseInt('6.18a');//6

var p3 = parseInt('3.3');//3

var p4 = parseInt('a6.18');//NaN

3.强制转化为浮点型

parseFloat():通常用于将字符串转为浮点型，其他的转换为NaN

练习：'5.18'  '7a'  'a4.13'

var p1 = parseFloat('5.18');//5.18

var p2 = parseFloat('a4.13');//NaN

var p3 = parseFloat('7a');//7

4.将数值和布尔值强制转为字符串（对象）

toString()

eg:

var num = 2;

//产生一个新的字符串数据

var str = num.toString();//'2'

#### 4.运算符

表达式：由数据或者由运算符连接的操作数据组成的形式称作表达式

运算符分为算术运算符、比较运算符、逻辑运算符、位运算符、赋值运算符、三目运算符

#### （1）算术运算符（都会将数据隐式转换为数值型）

+-*/ %(取余) ++（自增）   -- （自减）

eg:

取余：隔行换色（与2取余  找奇数偶数）    找闰年（与4取余）

console.log(5%2);//1
console.log(2%5);//2

自增自减：

var b = 2;//3

var c = b++; //2

//先把b赋给c,然后把自增后的结果赋给c

var d = 2;//3

var e = ++d;//3

//先让d自增，然后把自增后的结果赋给e

练习：
var n1 = 5;

var n2 = n1--;

var n3 = --n1;

console.log(n1,n2,n3);//3,5,3

//正负号也具有隐式转换

console.log(5 + - '1');//5+(-1) = 4

//+ '3' ->3

#### （2）比较运算符

<     >      >=     <=    ==(等于)      ！=（不等于）     ===（全等于）    ！==（不全等于）  

==(等于) ：只是比较值是否相同，可能会发生隐式转换

===   全等于 ：先比较类型，然后比较值

!== 不全等于：类型不同或者值不同

!= 不等于：比较值不等于

NaN和任何值比较（>  <  >=  <=  ==  ===)结果都是false

eg

console.log(2 == '2');//true
console.log(2 === '2');//false

console.log(1 == true);//true
console.log(1 === true);//false

console.log(null == undefined);//true
console.log(null === undefined);//false

// 比较的首个字母的Unicode码

console.log('3'.**charCodeAt()**,'1'.**charCodeAt()**);//'3'->51    '1'->49

console.log('3'>'20');//true     比较的是首个字符的Unicode代码

console.log(3>'10');//false    字符串转为数值

3>'10a'//false

3<'10a'//false

3=='10a'//false

NaN==NaN//false

#### （3）逻辑运算符

&&   ||    !

&&  逻辑与：关联的两个条件都是true结果是true，否则是false       （登陆）

|| 逻辑或：关联的两个条件有一个是true结果是true，否则是false      （登陆）

！ 取反

短路逻辑：当执行完第一个条件就**不再执行**第二个条件，关注点在于第二个条件（表达式）是否执行

&&  当第一个条件为false就不再执行第二个条件

||    当第一个条件为true就不再执行第二个条件

练习：查看以下程序是否会报错

var  a = 5;

a > 10 && console.log(num);//不报错

a > 2 || console.log(num);//不报错

#### （4）位运算符

模拟计算机底层的计算，先将数据转为二进制，然后进行运算，当运算完再把结果转回成十进制。（满二进一）

1   2   3     4         5        6         7  

1  10 11  100    101    110     111

& 按位与,上下两位比较，如果都是1结果都是1，否则是0

5&7 -> 101   111   ->     101   -> 5

|按位或，上下两位比较，如果含有1结果是1，否则是0

^按位异或，上下两位比较，不同是1，相同是0

8|13- > 1000   1101  -> 1101

7^12 -> 111  1100  -> 1011

按位右移 <<:每右移一位，在原来的基础之上除以2再取整

按位左移 >>:每左移一位，在原来的基础之上乘以2

eg:

32>>1   0010 0000->0100 0000

32<<1   0010 0000->0001 0000

#### （5）赋值运算符

=  +=  -=  *=  /=  %=  .....

赋值   运算赋值：先执行运算，再执行赋值

练习：声明变量保存商品的价格，让该商品再原来的基础之上打九折，最后打印价格。

var price = 3;
price *= 0.9;
console.log(price);

#### （6）三目数据符

一目运算符：由一个运算符连接的一个操作数据或者表达式  ++  --  ！

二目运算符：由一个运算符连接的两个操作数据或者表达式

三目运算符：由两个运算符连接的三个操作数据或者表达式

##### 1.条件表达式  ？ 表达式  1  ： 表达式2

如果条件表达式为true执行表达式一

如果条件表达式为false执行表达式二

##### 2.浏览器端函数

alert():弹出警示框

prompt（）：弹出输入框（提示框），需要使用变量保存用户输入的值，类型是字符串型，如果直接点击取消返回NULL，如果声明也没输入点击确定得到的是空字符串（“）

程序 = 数据 + 算法

程序的执行方式：顺序执行、选择执行、循环执行

##### 3.流程控制（选择执行）

###### （1）if语句

if（条件表达式）{

​ 语句块

}

如果if后的语句块中只有一行代码可以省略，则大括号可以省略

以下数据作为条件表达式会隐式转换为false

0           ’  ‘           undefined          null         NaN

练习：声明变量保存用户的签名内容，如果签名内容为空设置默认内容为’这家伙很懒，什么也没留下‘，最后打印签名内容。

```javascript
var str =' ';
//如果是空字符串，执行语句块中代码
if(!str){//str === ' '
    console.log('这家伙很懒，什么也没留下');
}
```

eg:

```javascript
var userName;
//undefined     如果用户名为空就打印‘游客’否则打印用户名
var res = userName || '游客';
console.log(res);//游客
// console.log(a);
```

eg:

```javascript
//如果没有执行第二个表达式，就把第一个表达式赋给a
//如果执行到了第二个表达式，就表第二个表达式赋给a
 var a = 0 || 1; //1
 var a = 0 && 1; //0
```

###### （2）if-else语句

if（条件表达式）{

​ 语句块1

}else{

​ 语句块2

}

eg:

```javascript
//声明变量保存读取的性别的值（1/0），如果是1打印‘男’，否则是0打印‘女’
//分别使用if-else和三目运算符
var sex = 1;
if (sex){
    console.log('男');
}else {
    console.log('女');
}
console.log(sex ? '男' : '女');
```

###### （3）if-else嵌套

if（条件表达式1）{

​ 语句块1

}else if（条件表达式n){

​ 语句块n

}else{

​ 语句块n+1   //以上所有的条件表达式

}

###### （4）switch-case：特殊的多项分支语句，根据表达式的值选择执行对应的语句

switch（表达式）{

​ case 值1：

​  语句块1

​  break；

​ case 值n:

​  语句块n

​  break;

​ default：

​ 语句块n+1;  //表达式和case后的值都不同

}

对比if-else嵌套和switch-case的区别

相同：两者都可以用于多项判断

不同：if-else既可以进行等于，也可以进行不等于的比较；switch-case只能进行全等于的比较；if-else的适用范围更加广泛，switch-case结构上更为清晰，执行效率更高。

```javascript
var score = 98;
if(score > 100 || score < 0) {
    console.log('非法成绩');
}else{
    switch (parseInt(score/10)) {
        case 10:
        case 9:
            console.log('优秀');
            break;
        case 8:
            console.log('良好');
            break;
        case 7:
            console.log('合格');
            break;
        case 6:
            console.log('及格');
            break;
        default:
            console.log('不及格');
    }
}
```

## day04

### 1.循环

循环是一遍又一遍执行相同或者相似的代码

循环的两个要素

​ 循环条件：控制循环是否要继续进行

​ 循环体：要执行的相同相似的代码

### （1）while循环（循环条件为true执行循环体）

while（循环条件）{

​ 循环体

}

CTRL+c：强制结束

cls：清屏

（2）break

在循环体中使用，用于强制结束循环

```javascript
//打印1~100之间所有的整数
var j =1;
while(true){
    //循环体
    console.log(i);
    //当i为100的时候，强制结束
    if(j === 100){
        break;
    }
    //增量
    j++;
}
```

### （2）do-while循环（先执行一遍循环体再判断循环条件）

do{

​ 循环体

}while(循环条件)；

```
练习：声明变量记录银行卡的密码‘123456’，循环弹出提示框，要求用户输入密码，如果密码输入正确，则警示框弹出‘login success’并强制结束循环；如果次数达到了3次，警示框弹出‘more than three’，
并强制结束循环
```

```javascript
var count = 0;
var pwd = '123456';
do{
    //获取用户输入的密码
    var str = prompt('请输入密码：');
    //如果密码输入正确
    if (str === pwd){
        alert('login success');
        break;
    }
    //每输入一次记录一次
        count++;
    //如果次数为3，吞卡
        if (count === 3) {
            alert('more than three');
            break;
        }
}while(true);
```

### （3）for 循环

for(初始值；循环条件；增量){

​ 循环体

}

```javascript
//多个循环条件，后面的会把前面的覆盖
for(var i=1,j=10;i<=20,j>=1;i++,j--){
    console.log(i,j);
}
```

```javascript
for(var i = 1,str = ' ';i <= 5;i++){
    //每次循环产生的数字i，拼接到str
    str+=i;
}
```

break与continue

continue：跳过剩余循环体，后续还会执行其他的代码

break：强制结束循环，后续不会执行其他的代码

### （4）循环嵌套

在任意一个循环体中包含了其他的循环。

任意两个循环都可以相互嵌套

## day05

### 1.函数

NUmber())/parseInt()/parseFlaot()/alert()/prompt)().....

函数分为系统函数和自定义函数

函数：是一个功能体，需要提供若干个数据，返回处理的结果；用于封装重复执行的代码

#### （1）创建普通函数

function函数名称（）{

​ 函数体—要封装的重复执行的代码

}

#### （2）函数的调用

函数名称（）； //执行函数体中封装的代码

练习：创建一个函数getSum,在函数体中封装计算1~100之间所有整数的和并打印结果；调用多次

#### （3）创建带有参数的函数

function 函数名称（参数列表）{

​ 函数体

}

调用:

​ 函数名称（参数列表）

​    创建函数时的参数称作形参，调用函数时的参数称作实参，实参会赋值给形参，实参数量可以和形参的数量不匹配，如果形参未被赋值则为undefined。

#### (4)创建带有返回值的函数

function 函数名称(参数列表){

​ 函数体

​ return 值;//返回值，返回函数调用后的结果

}

调用：
 函数名称（参数列表）

​ return用于返回函数调用后的结果，如果函数中没有return或者return后不加任何值则返回undefined，一旦return执行就会跳出函数，结束函数的执行。

对比break和return

break用于循环和switch-case语句中，用于跳出所在的这组语句

return用于函数中，跳出函数，结束函数的调用

### 2.变量的作用域

全局变量：在**全局作用域**下声明的变量，可以在**任意的作用域**下访问到

局部变量：在**函数作用域**下声明的变量，只能在**当前的作用域**下访问到

在函数内不加var声明的是全局变量，不推荐，后期在严格模式下会报错。

```
在程序执行前,会将var声明的变量提升到所在作用域的最前边
只是提升声明,不提升赋值
```

```javascript
function f1(n) {//形参n属于局部变量
}
f1(2);
console.log(n);//报错,无法访问局部n
```

### 3.函数的作用域

全局函数：在全局作用域下调用的函数，可以在任意作用域下调用
局部函数：在函数作用域下创建的函数，只能在当前作用域下调用

斐波那契数列

第一次先从求第三项的值开始

直到达到所求项的值

让n1和n2保存第一项和第二项的值，每求出一项把结果保存到n2，为了继续往后求下一项，还需要让n1挪动最后的n2就是所求项的值

```javascript
function fib(n) {
    //如果要求第n项的值，需要从求出第三项的值开始，直到第N项
    var n1 = 1,n2 = 1;
    for(var i = 3;i <= n;i++){
        //每一项值的求法：
        //n2的值是上一次n1和n2相加的和
        //n1的值是上一次n2的值
        //n2代表求出的每一项的值
        var c = n2;
        n2 = n1 + n2;
        n1 = c;
        //打印每一项的值
        console.log(n2);
    }
    //返回n2最后的结果，就是所求项的值
}
```

```javascript
function fun(n) {
    if (n === 1 || n === 2){
        return 1;
    }
    return fun(n-2) + fun(n-1);
}
console.log(fun(6));
```

## day06

### 1.函数提升

函数执行前会将函数提升到所在作用域的最前边

### 2.递归

在一个函数的内部调用了自身的函数（不能确定要多少次时，对象的拷贝）

如何使用递归：
1.要有边界条件

2.找规律，结合return，最终跳出函数

eg：利用递归任意数字~1之间所有整数的乘积

```javascript
function getCj(n) {
    //边界条件：当n=1时,返回1
    if(n === 1){
        return 1;
    }
    //规律：n~1之间所有整数的乘积 = n * n-1的乘积
    return getCj(n-1)*n;
}
console.log(getCj(5));
```

### 3.匿名函数

function(){    }

作用：

（1）创建函数

函数声明

func fn(){}

函数表达式

变量名称就是函数名称

var fun = function(){

}

对比函数名称（）和函数名称

函数名称（），调用函数，得到函数的返回结果

函数名称，本质上就是一个变量，保存了一个函数。

练习：使用函数表达式创建任意两个数字，返回两个数字之阿金所有整数的和

```javascript
function add() {}
console.log(getSum);//函数提升  undefined
// console.log(getSum(1,2));//报错，不存在函数提升
var getSum = function (n1,n2) {
    //循环n1~n2
    for(var i = n1,sum = 0;i <= n2;i++){
        sum += i;
    }
    return sum;
}
console.log(getSum(1,2));
```

对比声明函数声明和函数表达式创建函数的区别

函数声明创建的函数存在函数的提升，顺序上可以先写调用再写创建

函数表达式创建的函数只是变量声明的提升，必须先写创建

（2）匿名函数自调用（交互效果）

全局污染：全局变量的出现产生的影响

```javascript
(function () {//形参
    var n = 4;
    //函数作用域下，变量都是局部变量，可以防止污染全局
    console.log(n);
})();//后面（）为调用，为实参
```

（3）回调函数

将函数以实参的形式传递，这个传递的函数称为回调函数

function tao(madai){

​ madai()//调用传递进来的回调函数

}

function dong(){}

​ tao(dong);

​ tao(function(){})

### 4.系统函数

isNaN():检测一个数是否为NaN，常用于检测用户输入值是否含有非数字会将检测的值隐私转换为数值，然后查看是否为NaN，是->true   不是->false

isFinite():检测一个值是否为有限值，只有infinity是无穷，其他所有的值都是有限值，如果是有限值返回true，不是有限值返回false

eval()：执行字符串表达式

‘1+2’

### 5.对象

属于引用类型数据

***对象是一组属性和方法的集合***

一部手机， 属性有品牌、颜色、型号、尺寸......  方法有玩游戏、看视频、办公...

万物皆对象

#### （1）分类

自定义对象，用户自己创建的对象

内置对象（ES对象），JS提供的对象（标准规范后的对象）

宿主对象：根据不同的执行环境划分

##### 1）自定义对象

对象字面量：

{属性名：属性值，属性名：属性值...}

属性名中的引号可以省略，如果含有特殊字符必须加引号

访问属性

对象.属性名

对象['属性名']

如果属性名不存在则返回undefined

内置构造函数

new Object()

创建一个空对象，需要单独添加每个属性

```javascript
//内置构造函数
var emp = new Object();
//需要单独添加属性
emp.eid = 1;
emp.ename = 'tao';
emp.sex = 'man';
console.log(emp);
```

遍历属性

依次访问对象中的每个属性

for (var k in 对象){

​ k 代表属性名

​ 对象[k] 属性名对应的属性值

}

自定义构造函数

{

name:'tao',

play:function(){

​ this 代表调用方法的对象

}}

遍历数组

for（ var k in 数组){

​ k 下标

​ 数组[k]  下标对应的元素

}

for(var i = 0;i<数组.length;i++){

​ i 下标

​ 数组[i]  下标对应的元素

}

## day07

​ 如何学习API：API的作用、有哪些参数、哪些参数可选，哪些参数必选、返回结果是什么

​ concat(arr2,arr3.....)  拼接多个数组，arr2,arr3表示要拼接的数组，返回拼接后的数组

### 1.数组API

**reverse（）**翻转数组中的元素

**sort（）**　　对数组进行排序，默认按照编码排序

eg:

sort（function（a,b）{

​ return a-b;//按照数字从小到大排序

​ return b-a;//按照数字从大到小排序

}

```javascript
var result = arr.sort(function (a,b) {
    if(a>b){
        return 1;
    }else if (a<b){
        return -1;
    }else{
        return 0;
    }
});
console.log(arr);
```

**concat(arr2,arr3.....)**  拼接多个数组，arr2,arr3表示要拼接的数组，返回拼接后的数组

**slice(start,end)** 截取数组的元素，start开始的下标，end结束的下标，不包含end本身；如果下标是负数表示倒数，返回截取的元素，格式为数组。

练习：创建一个数组包含a~f,每个字母是一个元素；分别截取bc,ef;最后再将这两组拼接成一个新数组。

**spilce(start,count,v1,v2.....)**删除数组中的元素，start开始的下标，count删除的数量，count为空删除的最后，下标是负数表示倒数；v1,v2..表示删除后补充的元素，返回删除的元素，原数组会发生变化

练习：创建数组包含a~h，删除cd,替换f为m,在下标为1的位置插入z

**indexOf()**  查找数组中是否含有某个元素，返回找到的第一个的下标，如果找不到返回-1

**push()**  往数组的末尾添加元素，返回数组的长度

**pop()**    删除数组末尾的一个元素，返回删除的元素

**unshift()** 往数组的开头添加元素，返回数组的长度

**shift()**    删除数组开头的一个元素，返回删除的元素

### 2.二维数组

用于对数据进行二次分类

[ [元素1，元素2....]，[],[]......]

访问

​     数组 [下标] [下标]

### 3.字符串对象

对象：应用类型的数据

原始类型的数据不叫对象

包装对象：目的是为了让原始类型的数据像引用类型数据，具有属性和方法，一共有三种包装对象，String，Number，Boolean

​ var str1 = '1';//（字符串）字面量

​ **new String()**  将数据转为字符串，返回对象

​ **String()**           将数据转为字符串，返回字符串

对比String（）和toString（）

```javascript
//转字符串
console.log(arr.toString());//要特定的对象， 数值和布尔值
console.log(String(arr));//将任意的数据转字符串
```

#### （1）转义字符  \

  \ '   将特殊意义的引号转义为普通引号

 \n    将普通的字符n转义为换行符

 \t      将普通的字符t转义为制表符等于tab键的效果

#### （2）API（不会对原来字符串产生影响）

**length** 获取字符串的长度

**charAt** 获取下标对应的字符，也可以使用数组的形式  —字符串[下标]

练习：声明变量保存字符串’JavaScript‘，遍历字符串，统计出a字符出现的次数

练习：统计一个字符串中哪一个出现的字符串出现的次数最多，出现多少次

**indexOf()**      查看是否含有某个字符串，返回第一次出现的下标，找不到就返回-1；

**lastindexOf()** 查看是否含有某个字符串，返回最后一次出现的下标，找不到返回-1；

//验证码   防止机器人，恶意访问服务器

**toUpperCase():**转大写

**toLowerCase():**  转小写

**slice(start,end)**  截取字符串，start开始的下标，end结束的下标，不包含end,如果end为空会截取到最后，如果是负数表示倒数，返回截取到的字符串。

**substr(start,count)**    按照长度截取字符串,start开始的下标，count截取的长度，如果count为空截取到最后，如果下表是负数表示倒数，返回截取字符串

**split(字符)**       将字符串按照指定的字符分割为数组

```javascript
//练习：截取文件名称的后缀名
var filename = 'web.2104.tao.jpg';
var arr = filename.split('.');
//最后一个元素
console.log(arr[arr.length-1]);
```

### 4.Math对象

不需要创建对象，可以直接使用对象下的API

Math.abs()  绝对值

Math.ceil()  向上取整

Math.floor() 向下取整

Math.round() 随机数 ：>=0   <1

```javascript
//获取随机下标 0 ~ 9
//0~1  * 10   0 ~ 9.X  向下取整  0 ~ 9  
var n = Math.floor(Math.random() * 10);
```

Math.pow(x，y) 计算x的y次方

Math.max()    获取一组数字的最大值

Math.min()      获取一组数字的最小值

课后任务

 (1)复习今天内容，整理思维导图

 (2)练习：

  将一句英文中每个单词的首字母大写，其余字母小写

   hOw aRe yOU   ->  How Are You

```javascript
var str = 'hOw aRe yOU';
//将字符串按照空格切割成数组
var arr = str.split(' ');
//遍历数组，得到每个单词
for(var i = 0;i < arr.length;i++){
    // console.log(arr[i]);
    //截取首字母转大写
    var arr1 = arr[i].substr(0,1).toUpperCase();
    //截取其余的字母转小写
    var arr2 = arr[i].substr(1).toLowerCase();
    //用转换后替换之前
    arr[i] = arr1+arr2;
}
//将数组转为字符串，用空格分隔
console.log(arr.join(' '));
```

  随机获取a~z之间的4个字母，放入到一个新数组

​    格式 ：['b','c','z','t']

```javascript
var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//准备一个空数组，用于保存获取到的随机
var arr2 = [];
//循环4次，每次获取一个随机
for(var i = 0;i <= 3;i++){
    //随机下标 0~25
    // 0~1 * 26      0~25.x    向下取整  0~25
    var n = Math.floor(Math.random() * arr.length);//arr.length 动态获取数组长度
    // console.log(n,arr[n]);
    //将每次获取的随机元素放入arr2
    arr2.push(arr[n]);
    //解决不重复的问题，每次获取到随机后，从原数组删除该元素
    arr.splice(n,1);
}
console.log(arr2);
```

双色球

红球：在1~33之间随机取6个，不能重复，放入到数组，进行从小到大的排序

蓝球：在1~16之间随机取一个，这个数字可以和之前的红球重复，放入到数组（while）

```javascript
var arr = [];
for(var i = 0;i < 6;i++){
    var n = Math.floor(Math.random() * 33);
    arr.push(n);
}
var result = arr.sort(function (a,b) {
    if(a>b){
        return 1;
    }else if (a<b){
        return -1;
    }else{
        return 0;
    }
});
console.log(arr);
var arr1 = [];
var n1 = Math.floor(Math.random()*16);
arr.push(n1);
console.log(arr);
```

 (3)预习js第9天   重点Date对象

## day08

### 1.对象

（1）检测属性是否存在

对象.属性名 === undefined        true ->  不存在    false -> 不存在

对象.hasOwnProperty（’属性名‘）   true ->  存在    false -> 不存在

’属性名‘  in  对象       true ->  存在    false -> 不存在

练习：创建一个商品对象，包含商品的编号、标题、价格属性；如果颜色属性不存在，则添加该属性；如果价格属性存在，则打八折，最后打印对象。

（2）对象中的方法

var person = {

 name: '涛哥',

 play: function(){

   this 指代调用方法的对象

 }

};

person.play()  //调用方法，play中this指向person

### 2.数据的存储

#### （3）原始类型的存储

直接存储在栈内存中

#### （4）引用类型的存储

堆内存：把对象保存在堆内存中，会产生一个16进制的地址，然后把这个地址保存在栈内存的变量中

将数据存储在堆内存中，同时会自动生成一个地址，然后把这个地址保存到内存（变量）中

eg：

var dong = tao

把对象的地址拷贝赋给另一个变量，两者指向同一个对象

引用类型数据占用内存空间比较大，如果要销毁，没有任何的地址所指向，会自动销毁。直接赋值为null即可销毁

把对象赋值为null，不再指向对象，对象就会自动销毁

### 3.数组

就是一组数据的集合，每个数据称为元素

（1）数组字面量

[元素1，元素2......]

（2）元素的访问

数组[下标]

下标从0开始的整数，如果下标不存在就返回undefined

（3）数组的下标

数组.length   获取数组元素的个数

数组[数组.length] = 值；可以在数组的末尾添加元素

（4）内置构造函数

new Array(元素1，元素2....)

new Array（3） 创建数组，初始化数组长度为3，可以添加更多个元素

（5）数组的分类

索引数组：以0及以上整数作为下标     >= 0

关联数组：以字符串作为下标，需要单独的添加元素

（6）数组的遍历

```js
for-in
for(var k  in  数组){
 k  代表下标
 数组[k]  下标对应的元素
}
循环
for(var i = 0;i < 数组.length; i++){
   i  代表下标
   数组[i]  下标对应的元素
}
```

（7）API

API：应用程序编程接口，JS下提供好的函数或者方法

如何区分两个方法（API）是不是同一个：查看调用这个方法的对象，是不是相同的数据类型

toString()  将数组转为字符串

 join( str )   将数组转为字符串，可以设置字符串之间的分割符

## day09

### 2.Date对象

用于日期时间的存储和计算（倒计时，时钟效果.....)

（1）创建

```javascript
var d1 = new Date('2021/5/18 10:27:30');
//2021-05-18  T02:27:30.000Z //T02:时区  往前推8小时
var d2 = new Date(2021,5,18,10,27,30);//月份0~11  1月~12月
var d3 = new Date();//当前操作系统时间
var d4 = new Date(1608336000000);//距离计算机元年的毫秒数,会产生一个具体的日期时间
```

距离计算机元年（0时区1970-1-1   0：0：0）的毫秒数  (cals)

2021-1-1  0:0:0

51 *365* 24 *60* 60 * 1000ms

（2）获取存储的日期时间

getFullYear/getMonth/getDate

​ 获取的月份 0~11  对应1~12月

getHours/getMinutes/getSeconds/getMilliseconds

getDay 获取星期 0~6  对应星期日~星期六

getTime 获取距离计算机元年的毫秒数

练习：创建Date对象，保存当前操作系统的时间，获取日期时间，打印以下格式      今天是XXXX年XX月XX日XX时XX分XX秒 星期二

（3）转为本地字符串格式

存在兼容性问题，常用于调试

toLocaleString()   日期+时间

toLocaleDateString()   日期

toLocaleDateString()    时间

（4）设置日期时间

修改Date对象中存储的日期时间

setFullYear/setMonth/setDate

月份1~12  对应的值0~11

setHuors/setMinutes/setSeconds/setMilliseconds

setTime  设置距离计算机元年的毫秒数，产生一个具体的日期

（5）拷贝Data对象

var d1 = new Data();

new d2 = new Data(d1);//拷贝d1对象

练习：创建Data对象，保存’2020/5/20‘，作为入职时间，拷贝这个入职时间的对象作为到期时间，设置合同期为三年。分别打印两个对象的本地字符串格式。

### 3.Number对象

new Number()  将数据转为数值，返回对象

Number（）     将数据转为数值，返回数值

toFixed（n）     保留小数点后n位

toString（n）     将数值转为字符串，可以设置显示的进制

### 4.boolean对象

new Boolean（）   将数据转为布尔型，返回对象

Boolean（）            将数据转为布尔型，返回布尔型

```javascript
！！：隐式转换为布尔型
eg：  ！！null  ->  false
```

### 5.错误处理

（1）常见的错误

语法错误（SyntaxError）：不符合语法规范，例如出现中文的符号，缺少半块括号，运行之前产生的错误

运行过程中产生的错误：

引用错误（ReferenceError）：使用了变量未声明

类型错误（TypeError）：把一个非函数当作非函数当作函数调用

范围错误（RangeRrror）：数据的使用超出了Js的规定范围

自定义错误：程序员自己指定的错误：throw 错误

（2）错误处理

在运行过程中产生的错误，不再影响后续代码的执行

try{

​ 尝试执行，可能产生错误，一旦产生会被catch捕获

}catch（err）{

​ 将错误信息放入err中，不再影响后续代码执行

​ 进行错误处理

}

### 6.ES6

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

#### （1）块级作用域

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

## day10

Node.js是运行在服务器端的js解释器，基于谷歌的v8引擎

（1）对比JS

JS运行在客户端浏览器，存在多种JS解释器，存在代码兼容性问题；

Node.js只有V8引擎一种解释器，不存在代码兼容性问题

JS和Node.js都有共同的ES（内置）对象和自定义对象，不同的宿主对象

JS用于开发浏览器端的交互效果，Node.js用于服务器端开发，例如数据库的访问，其他服务器的调用.....

（2）网址

www.nodejs.org  官网

www.nodejs.cn    中文镜像

（3）使用node.js

脚本模式

node  拖拽脚本文件   回车

交互模式

进入：node  回车  进入交互模式

退出：两次CTRL+C      或者    一次CTRL+D

（4）特点

Node.js属于**单线程运行逻辑**，支持数万个并发连接，适合做**基于社交网络的大规模web应用**，不适合做CPU密集型的操作。

### 2.全局对象

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

### 4.模块

是一个独立的功能体，模块可以被其他的模块引入，也可以引入其他的模块

require（） 用于引入其他的模块

module.exports  是一个空对象，用于存放导出的内容
