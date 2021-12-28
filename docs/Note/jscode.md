# jscode

轮播图

1.四张图片 下标分别为0，1，2，3  一次只显示一张  用float ，每一项是li

2.把0元素在后面多出一个，就有五个li，移动到最后一个的时候瞬间让magin-left=0   一次-1000

3.在ul上加一个class：transition  在每一次转换的时候都有，但在从0换回1时先用dom把transition去掉

moveTo（to）函数：每调用一次就向左移动一次

1.定义变量i=0标记现在正在显示第几张图片

2.moveTo（to）如果to没给值。就等效于跳到i+1，否则i=to

线程
JS是单线程的，即js的代码只能在一个线程上运行，也就说，js同时只能执行一个js任务，JS的主要用途是与用户互动和操作DOM。设想一段JS代码，分发到两个并行互不相关的线程上运行，一个线程在DOM上添加内容，另一个线程在删除DOM，那么会发生什么？以哪个为准？所以为了避免复杂性，JS从一开始就是单线程的，以后也不会变。

一个进程就是在运行一个程序，一个 进程 的运行，当然需要很多个 线程 互相配合，主线程运行JS代码时，会生成个 执行栈 ，可以处理函数的嵌套，通过出栈进栈这样

消息队列（任务队列）

可以理解为一个静态的队列存储结构，非线程，只做存储，里面存的是一堆异步成功后的回调函数，肯定是先成功的异步的回调函数在队列的前面，后成功的在后面。

注意：是异步成功后，才把其回调函数扔进队列中，而不是一开始就把所有异步的回调函数扔进队列。比如setTimeout 3秒后执行一个函数，那么这个函数是在3秒后才进队列的。

EventLoop(事件循环)轮询处理线程

上面我们已经知道了，有3个东西

1、主线程，处理同步代码

2、类别D的线程，处理异步代码

3、消息队列，存储着异步成功后的回调函数，一个静态存储结构

这里再对消息队列说一下，其作用就是存放着未来要执行的回调函数，

面向过程——步骤化

面向过程就是分析出实现需求所需要的步骤，通过函数（方法）一步一步实现这些步骤，接着依次调用即可

面向对象——行为化（概念相对抽象，可结合下面的例子理解）

面向对象是把整个需求按照特点、功能划分，将这些存在共性的部分封装成类（类实例化后才是对象），创建了对象不是为了完成某一个步骤，而是描述某个事物在解决问题的步骤中的行为

## /jscode

day01

一. RegExp对象:

\1. 什么是: 专门在js程序中保存一条正则表达式的对象。

\2. 何时: 今后，只要在js中要是用正则表达式，都要用RegExp对象

\3. 如何创建正则表达式: 2种

(1). 标准:

 var reg=new RegExp("正则表达式","ig");

    创建 RegExp类型的正则表达式对象

    其中保存一条正则表达式

    i, ignore 忽略大小写

    g, global 全部，所有

 坑: 因为正则中有\d，js的字符串中也有类似的语法\n或\t，所以，在""中写\d时，js会误认为是自己的\，而不是正则的\。结果js就会错误的解析正则中的\d。

 解决: 如果""中有不希望js解析的\，则可以改为\。其中，第一个\是为了阻止js解析。第二个\才是我们真正使用的\。

(2). 简写:

 var reg=/正则表达式/ig

\4. 示例: 使用正则表达式查找消息中的敏感词:

1_reg.html

        //请用户输入一条消息
        var a = prompt("请输入消息内容");
        //定义一个正则表达式验证消息中是否包含敏感词“我草”
        var reg = new RegExp("[我卧][操草艹槽]");
        var reg = /[我卧][操艹草槽]/;
        //用正则表达式查找用户输入的消息中是否包含敏感词我草
        var result = a.search(reg);
        //search的规定: 
        //如果找到敏感词，会返回敏感词第一个字的下标位置i
        //如果没找到敏感词，会返回-1
        //如果包含敏感词
        if(result!=-1){
            console.log("包含敏感词，已屏蔽");
        }else{
            console.log('亮哥说:${str}');
        }
\5. RegExp对象提供的2个函数:

(1). reg.test()

 a. 什么是: 专门用于验证字符串的格式是否符合要求的函数

 b. 如何:

  var 验证结果=正则表达式对象.test(要检查的字符串)

 c. 坑: test()默认只要在字符串中找到部分内容和正则匹配，就返回true！而不要求必须从头到尾完整匹配！

 d. 解决: 今后，只要验证格式，都要前加^，后加$

   ^，表示字符串的开头位置

   $，表示字符串的结尾位置

   ^和$连用表示必须从开头，到结尾完整匹配！

eg:

    //请用户输入手机号
    var phone=prompt("请输入手机号")
    //定义验证手机号的正则表达式
    var reg=/^1[3-9]\d{9}$/;//复习第一阶段正则表达式
    // var reg=new RegExp("^1[3-9]\\d{9}$");
    //用正则表达式检查用户输入的手机号的格式
    //     //用正则检查手机号的格式
    var result=reg.test(phone);
    //如果检查通过
    if(result==true){
      //就输出手机号格式正确
      console.log(`手机号格式正确`)
    }else{//否则如果检查不通过
      //就输出手机号格式不正确
      console.log(`手机号格式不正确`)
    }
(2). reg.exec()

 a. 什么是: 专门用正则查找字符串中所有敏感词的内容和位置的函数。

 b. 何时: 今后，如果我们既想获得所有敏感词的内容，又想获得所有敏感词的位置时，都用exec()

 c. 如何:

  1). 只查找第一个敏感词的内容和位置:

  i.  var 数组=正则表达式.exec(包含敏感词的字符串)

       用正则表达式 查找 字符串中第一个敏感词的内容和位置

  ii. 返回值:

  ①如果找到一个敏感词，就会返回一个数组:

    数组:[ 0: "敏感词的内容",  index: 敏感词的下标位置i ]

   ②如果没找到，就返回null

  2). 查找所有敏感词的内容和位置:

  i. 强调: 如果想找所有，则正则表达式必须加g

  ii. 如何:

    do{
​     var 数组=正则表达式.exec(字符串)

     if(数组!=null){
​      才继续执行后续操作
​     }
​    }while(数组!=null); //只有本次找到了敏感词才继续找下一个。反之，如果本次都没找到敏感词，则没必要继续找下一个了

补: js中，一切数组底层其实都是关联数组

比如:

arr:[ 0:"小红" ,  index: 5 ]

底层:[ "0":"小红", "index":5 ]

所以:

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13588\wps3.png)访问一切数组元素的标准写法: 数组名["下标名"]

简写: 2种:

\1. 如果下标名称是自定义的字符串名称: 数组名.下标名

\2. 如果下标名是数字，则只能简写为: 数组名[数字下标]

只要发现返回值可能为null，一定要加上判断：

if（数组！=null）{

 才继续执行后续操作

}

exec查一个丢一个

eg:

    var str="老师:请用小红 我的 朋友造句。小楠:小红是我的朋友。小亮:朋友！小红是我的！";
    //想找出第一个以小字开头的人名是谁，以及出现的位置。
    //            一个汉字
    var reg=/小[\u4e00-\u9fa5]/;
    //用正则查找str中第一个敏感词
    var arr=reg.exec(str);
    console.log(arr);
​
    //找所有以小字开头的人名和位置
    var reg=/小[\u4e00-\u9fa5]/g;
​
    //do while: 不管有没有敏感词，都至少先找一次试试
    do{
      var arr=reg.exec(str);
      console.log(arr);
      //arr:[ 0:"小红", index:5 ]
      //底层:["0":"小红", "index":5]
      if(arr!=null){
        // console.log(`在${arr["index"]}位置,找到敏感词${arr["0"]}`);
        console.log(`在${arr.index}位置,找到敏感词${arr[0]}`);
      }
    }while(arr!=null);//如果找到了，才有必要继续找下一次
二. Function:

\1. 回顾:

函数本质:
  1). 函数也是一个对象，对象中保存着函数的函数体代码  
  2). 函数名只是一个普通的变量，函数名通过函数对象地址，引用着函数对象  
  3). function在底层等效于new Function()
    function 函数名(){ ... }和var 函数名=function(){}在底层都会被翻译为      .  

*). 匿名函数:**

(1).什么是:定义函数时不指定函数名的函数.

(2)．为什么:2大优点:.
a．节约内存.
b.避免产生全局变量，造成全局污染.

(3)．何时:

2种情况下:.
a.几乎所有的回调函数都要定义为匿名函数

b.匿名函数自调
(4)．如何: .
a.回调函数:
1).什么是:自己定义了函数，但是不由自己调用，而是交给另一个函数，由另一个函数按需自动调用——给别人做嫁衣

比如:想将一个数字内容的数组升序排列.
arr.sort(function(a,b){ return a-b})
想根据不同的敏感词，动态选择不同的新值替换.
str=str.replace(/正则/ig, function(keyword){ return不同新值})

2)．为什么回调函数都要定义为匿名函数:为了节约内存!

b.匿名函数自调:.
1).什么是:定义一个匿名函数后，立刻调用该函数执行，调用后立刻释放!

2).为什么:避免产生全局变量，造成全局污染.

3)．何时:今后一切js 代码都应该放在一个大的匿名函数自调内!尽量不要使用全局变量！

4)．如何:
i.标准写法:
  var返回值=(function(形参变量列表){﹒
   ...return返回值
})(实参值列表);创建新函数立刻调用执行.
因为该函数没有名字，所以调用后，立刻释放!。

ii．杀马特/非主流写法:.
  +function() ...}()-

  !function(){ ...}()-

.... ....

强调:不用()包裹function(){ ...}，但是结尾的()，必须要加!。

a. 所有回调函数优先使用匿名函数——用完释放，节约内存

b. 如果担心不停功能之间的代码互相干扰，就可用匿名函数自调将每个功能的代码包裹起来。

(function(){

 某个功能的js代码

})()

结果: 匿名函数内的都是局部变量，不会产生全局变量，不会造成全局污染。      var 函数名=new Function(...)
    只不过function 函数名(){}是先提前，再翻译
    而var 函数名=function(){}是不提前，原地翻译

c.两种情况

(1). 什么是函数:

程序中专门保存一段可重复使用的代码段的程序结构/对象，再起一个名字。

(2). 何时:

 当一段代码可能被反复使用时，都要先定义在函数中，然后反复调用函数。

(3). 如何:

a. 定义函数:

  function 函数名(形参变量1, 形参变量2, ...){

  函数体;
​  return 返回值;
  }

1). 形参:

  i. 什么是: 专门保存函数调用时所必须的数据的局部变量。

  ii. 何时: 当我们定义函数时发现，函数内有的数据不确定时，都要定义形参变量。要求调用者在调用函数时传入必须的数据。

2). 返回值:

  i. 什么是: 函数的执行结果

  ii. 何时: 如果将来调用函数的人需要获得函数的直接结果，继续做其它操作时，就要给函数定义返回值。

b. 调用函数: var 返回值=函数名(实参值1, 实参值2, ...)

  1). 在内存中找到指定名称的函数，同时将实参值一一对应的赋值给函数的形参变量。

  2). 按函数体的描述，执行规定好的任务

  3). 将函数的执行结果，返回到函数外部。

\2. 创建函数: 3种:

(1). 声明方式:

 a. function 函数名(形参列表){

   函数体;
   return 返回值
  }

 b. 问题: 会被声明提前:

  1). 什么是:

  i. 在函数开始执行前

  ii. 负责执行程序的js引擎会先扫描2种:

   ①var声明的变量: var 变量名;

   ②function声明的函数: function 函数名(...){...}

  iii. js引擎会将找到的声明依次提前到当前作用域的顶部，集中创建

  iv. 特例: 赋值会留在原地！

  2). 缺点: 会打乱程序正常的执行顺序

(2). 赋值方式:

 a. 如何:

  var 函数名=function(形参列表){ 函数体; return 返回值 }

 b. 好处: 不会被声明提前，保持了程序原有的执行顺序.

(3). 用new方式: (几乎不用)

 a. 如何:

 var 函数名=new Function("形参名1","形参名2","函数体...")

 b. 揭示了js中函数的本质:

  1). js中函数也是一个对象

   其实: 每个function，底层都相当于new Function()

   每个函数都有自己唯一的内存地址值

  2). 而函数名只是一个普通的变量而已。

 c. 结果:
  1). 函数也可以像其他数据类型一样赋值和传参

  2). 即使看着一模一样的两个函数定义，但是做比较时，却是不相等的！

(4). 示例: 声明提前:
   console.log(a);//undefined
    var a=10;
    console.log(a);//10
​
    // function fun(){console.log(1)}
    // fun();//2
    // function fun(){console.log(2)}
    // fun();//2
​
    var fun=function(){
      console.log(1)
    }
    fun();
    var fun=function(){
      console.log(2)
    }
    fun();
(5). 示例: 演示函数对象三个特点:
    //函数可以赋值
    var fun=function(){console.log("疼!")}
    var fun2=fun;
    fun();
    fun2();
​
    //函数可以传参——回调函数
    function 同桌(裤兜){
      console.log(`同桌下楼吃午饭...`);
      console.log(`同桌吃完饭了`);
      裤兜();
    }
    //星期一
    var fun1=function(){
      console.log(`帮我取快递`);
    }
    同桌(fun1);
    //星期二
    var fun2=function(){
      console.log(`帮我买屉包子回来...`);
    }
    同桌(fun2);
​
    //两个一模一样的函数做比较
    var fun1=function(){console.log(1)}
    //       new Function()//在内存中开辟新空间，分配新的内存地址值
    var fun2=function(){console.log(1)}
    //       new Function()//在内存中开辟新空间，分配新的内存地址值
    //先后两次new出的对象的内存地址绝对不一样！
    //当两个对象用==比较时，比较的不是内容，而是内存地址值。
    console.log(fun1==fun2);//false
运行结果：

疼!

同桌下楼吃午饭...

同桌吃完饭了

帮我取快递

同桌下楼吃午饭...

同桌吃完饭了

帮我买屉包子回来...

false

\3. 重载:

今后，一件事，根据传入不同的参数值，动态执行不同的逻辑时，都用重载
function 一个函数名(不写形参变量){
  //arguments对象自动接住所有实参值
  if(arguments.length==0){
    执行一种逻辑
  }else if(arguments.length==1){
    执行另一种逻辑
  }else{
    执行其它逻辑
  }
}
其中arguments是类数组对象: 和数组相比:
  a. 相同点: 也有下标，length属性，也可for循环遍历
  b. 不同点: 不是数组类型，无法使用数组家的函数
(3). 作用域和作用域链: (跟着视频亲自画图！！！)

(1). 什么是:

相同函数名，不同形参列表的多个函数，可以在调用时自动根据传入的实参值不同，选择对应版本的函数调用。

(2). 何时:

 一件事，可能根据传入的实参值不同，执行不同的逻辑时，都用重载。

(3). 好处:

减少函数名的个数，减轻调用者的负担。

(4). 如何:

 a. 问题: js程序中禁止两个同名函数同时存在。

   如果同时存在两个同名函数，则只有最后定义的一个函数才能幸存下来，覆盖之前所有同名函数。

 b. 解决: 借助于arguments对象来解决:

  1). 什么是arguments:

  i. 每个函数中自带的——不用创建，直接使用

  ii. 专门接受所有传入函数的实参值的——内容

  iii. 类数组对象——结果

   ①: 什么是类数组对象: 长的像数组的对象

   ②: 相同: 1. 下标, 2. length, 3. for循环遍历

   ③: 不同: 本质/类型不同:

    数组是Array类型的对象

    类数组对象是Object类型的对象 

    导致: 类数组对象无权使用数组类型的任何函数。

    (不是一家人，不进一家门)

  2). 如何:

  i. 只定义一个函数，且不要定义任何形参

  ii. 在函数内部，判断arguments的长度、元素值、元素类型等条件，根据传入实参值或实参个数不同，来选择执行不同的逻辑。

(5). 示例: 定义函数pay支持三种付款方式:
    function pay(              ){
    // arguments[              ].length
    //              0      1...
      if(arguments.length==0){
        console.log(`手机支付...`)
      }else if(arguments.length==1){
        console.log(`现金支付，收您${arguments[0]}元`)
      }else{
        if(arguments[1]=="123456"){
          console.log(`刷卡支付，从您卡号${arguments[0]}扣款成功!`)
        }else{
          console.log(`刷卡支付，密码不正确`);
        }
      }
    }
​
    pay();
    pay(100);
    pay("6553 1234","123456");
    pay("6553 1234","12345");
运行结果
手机支付...

现金支付，收您100元

刷卡支付，从您卡号6553 1234扣款成功!

刷卡支付，密码不正确

\4. 作用域和作用域链:

a.作用域

1). 全局作用域:window，保存全局变量
  优: 可重用，缺: 随处可用, 极易被污染
  2). 函数作用域: 保存局部变量
  局部变量包括2中: 函数中var出的变量和形参变量
  优: 仅函数内可用，不会被污染，缺: 不可重用
  3). 函数作用域对象原理:
  i. 每个函数定义时都自带好友列表，好友列表里2个格子，一个是空，一个引用window
  ii. 调用函数时临时创建函数作用域对象保存函数局部变量。并将函数作用域对象的地址保存到函数好友列表中离自己近的格子里。
  iii. 函数执行过程中按就近原则先在自己的函数作用域对象中找局部变量使用。如果找不到，才被迫去全局window中找变量使用.
  iv. 函数调用后，好友列表中离自己近的格子清空，导致函数作用域对象以及内部的局部变量被释放！——所以局部变量不可重用！

b. 作用域链:

  保存一个函数所有可用的作用域对象的链式结构(好友列表)学名就叫作用域链。
  1). 作用域链保存着一个函数可用的所有变量
  2). 作用域链控制着变量的使用顺序。先局部后全局。

(1). 作用域(scope):

 a. 什么是: 一个变量的可用范围

 b. 为什么: 避免不同范围之间的变量互相干扰。

 c. js中包括: 2级:

1). 全局作用域:

  i. 什么是: 在程序的任何位置都能访问都的范围

  ii. 保存着: 全局变量——任何位置都能访问

  iii. 包括: 一切不属于任何函数和对象的变量和函数

2). 函数作用域:

  i. 什么是: 函数{}范围内才能访问的区域

  ii. 保存着: 局部变量——函数{}范围内才能访问

  iii. 强调: 只有函数的{}，才能形成作用域！

      只要不是函数的{}，都不是作用域

  iv. 包括2种情况:

    ①在函数内var创建的变量

    ②函数的形参变量默认就是局部变量(虽然没有var)--有没有形参

eg:

    var a=10;
    function fun(){
      var a=100;
      a++;
      console.log(a)
    }
    fun();//101
    console.log(a);//10
​
    var b=10;
    function fun2(){
      b=100;
      b++;
      console.log(b);
    }
    fun2();//101
    console.log(b);//101

刚刚定义：

 a. 定义函数时: 每个函数对象身上都有一个"好友列表"

  普通函数的好友列表只有两个格子。

  离自己近的格子，暂时为空，预留

  离自己远的格子，保存window对象的引用关系。

![image-20210630201103713](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210630201103713.png)

函数调用时：

 b. 调用函数时: 做菜三部曲第一步——备料

  1). 临时创建函数作用域对象，并将函数作用域对象的地址，保存到好友列表中离函数近的格子里。

  2). 在函数作用域对象中临时添加函数的局部变量包含两种情况

在函数内var出的变量

形参变量虽然没有var，但是也属于局部变量

 c. 调用函数过程中: 做菜三部曲第一步——按菜谱做菜

  1). 每用到一个变量，js引擎都会先在离自己近的函数作用域对象中查找使用（立即引用函数作用域对象）。如果函数作用域对象中找到了想要的变量，则不再去全局找

  2). 如果函数作用域对象中没有找到想用的变量，js引擎就会延好友列表继续去全局查找变量使用。

  3). 总结: 变量的使用遵循就近原则（先局部，局部没有才全局）

![image-20210630201932467](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210630201932467.png)

d. 函数调用后:

清空好友列表中离函数近的格子（释放函数作用域对象）

导致临时函数作用域对象释放

导致所有局部变量一同释放！

 ——所以局部变量在函数调用后都不可用！

（2）作用域链

(1)．什么是:由多级作用域串联形成的链式结构.
(2)．每个函数在创建时，就有了自己的作用域链。普通函数作用域链里包含2个格:
离自己近的格，暂时为空，调用函数时，用来临时引用函数作用域对象.
离自己远的格，始终保存着全局作用域对象 window.

(3)．保存着一个函数可用的所有变量.
(4)．控制着变量的使用顺序:先局部，局部没有，才全局!

![image-20210630202900954](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210630202900954.png)

5.闭包: （跟着视频亲自画图!!!）

a. 只要希望给一个函数保护一个可反复使用的专属变量且可重用的变量，只有函数最近用，别人不可用，又防止这个变量被外界篡改时，都用闭包。

b. 闭包三步:

 1). 用外层函数妈妈包裹要保护的变量和内层函数

 2). 外层函数妈妈用return把内层函数孩子返回到外部（返回内层函数对象）

 3). 外部想使用内层函数的人，必须调用外层函数，才能获得return出来的内层函数对象。并将内层函数保存在一个变量中反复使用。

c. 闭包形成的原因: 外层函数调用后，外层函数的作用域对象被内层函数引用着无法释放，形成了闭包对象，（一句话概括闭包如何形成）

d. 闭包的缺点: 闭包比一般的函数占用多一块内存——外层函数的函数作用域对象。
 解决：用完闭包后，应该尽快释放: 只要将引用内层函数的变量释放为null
 保存内层函数的外部变量=null-> 内层函数对象就释放了 -> 外层函数的作用域对象也就释放了    eg:pay=null

第八第九页

day02

一. 闭包:

\1. 问题: 全局变量和局部变量都有不可兼得的优缺点:

(1). 全局变量:

 a. 优: 可重用

 b. 缺: 极易被污染——将来在公司中禁止使用一切形式的全局变量。

(2). 局部变量:

 a. 优: 不会被污染

 b. 缺: 不可重用

\2. 解决:

今后，只要希望给一个函数定义一个专属的且可重用的变量，只有函数自己可用，别人不可用时，就用闭包！

\3. 什么是闭包:

 (1). 用法: 既重用变量，又保护变量不被污染的一种编程方法。

 (2). 本质: 外层函数调用后，外层函数的作用域对象，被内层函数引用着，无法释放，就形成了闭包对象——一句话概括闭包如何形成的！

\4. 如何: 3步

 (1). 用外层函数包裹要保护的变量和使用变量的内层函数

 (2). 在外层函数内部，返回内层函数对象。

 (3). 调用外层函数，用变量接住返回的内层函数对象。

\5. 原理:

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml27952\wps1.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml27952\wps2.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml27952\wps3.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml27952\wps4.jpg)

就像: 妈妈生小孩儿，包红包

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml27952\wps5.jpg)

\6. 缺点:

闭包返回的内存函数，比普通函数多占用一块内存空间。

\7. 解决:

如果一个闭包不打算使用了，应该及时释放！

 保存内层函数的外部变量=null

  释放了内层函数对象

   同时也释放了外层函数的作用域对象。

\8. 示例:

使用闭包定义函数帮小孩儿管理零花钱

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    //定义一个函数，帮小孩儿管理零花钱
    //1. 用外层函数包裹要保护的变量和使用变量的内层函数
    function mother(){
      var total=1000;
      //2. 在外层函数内部，返回内层函数对象。
      return function(money){
        //从总价中减去本次花的前
        total-=money;
        console.log(`花了${money}，还剩${total}`);
      }
    }
    //3. 调用外层函数，用变量接住返回的内层函数对象。
    var pay=mother();
    //pay:function(money){
        //total-=money;
        //console.log(`花了${money}，还剩${total}`);
    //}

    pay(100);//剩900
​
    //别人代码中:
    total=0;
​
    pay(100);//剩800
  </script>
</body>
</html>
运行结果
花了100，还剩900
花了100，还剩800
```

二.面向对象:

\1. 问题:

程序中将来会保存大量的数据。而大量数据如果零散的随意管理，极容易出错！而且用着不方便。

\2. 解决:

 今后程序中，都是用面向对象的方式，来管理大量数据的

\3. 什么是:

程序中会将描述一个事物的多个属性和功能集中保存在一个对象结构中，再起一个名字。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml27952\wps6.jpg)

\4. 优点:

 极其便于大量数据的管理维护。

\5. 如何:

面向对象三大特点: 封装、继承、多态

\6. 封装:

(1). 什么是:

 创建一个对象，集中保存现实中一个事物的属性和功能。

(2). 为什么:

 极其便于大量数据的管理维护。

(3). 何时:

 今后，只要使用面向对象思想开发时，第一步都是先封装各种各样的对象结构备用。

(4). 如何: 3种方式:

a. 用{}:

  1). 如何:

  var 对象名={
   属性名: 属性值,

   ... : ... ,

   方法名: function(){ ... }
  }

  2). 如何访问对象中的成员:

  对象名.属性名

  对象名.方法名()

函数 与 方法:1. 不属于任何对象的，独立的function，称为函数2. 保存在对象内部的function，称为方法。

  3). 问题: 在对象自己的方法内，想使用对象自己的另一个属性名时，竟然报错！说xxx属性名未定义！

  4). 解决: 2种:

  i. 不好的解决: 写死对象名.属性名

   一旦对象名发生变化，而对象内写死的部分对象名，都会报错！"xxx is not defined!"

  ii. 好的解决: 今后，对象中的方法中，只要想使用当前对象自己的属性或其他方法时，都用加this

   ①什么是:

  每个函数内自带的 —— 不用创建，直接使用

    专门指向正在调用当前函数的.前的对象的——内容

    关键字——不能改名

   ②强调: 今后，判断this指谁，一定不要看定义在哪儿！只看在哪里以何种方式调用函数。

  5). 示例:

定义一个对象，描述一个学生lilei的属性和功能

    //创建学生对象，保存一个学生lilei的姓名、年龄。
    //lilei还会做自我介绍
    var lilei={
      sname:"Li Lei",
      sage:11,
      intr:function(){
        console.log(`I'm ${this.sname}, I'm ${this.sage}`);
      }
    }
    console.log(lilei.sage);
    lilei.intr();
    //过了一年，lilei长了一岁
    lilei.sage++;
    console.log(lilei.sage);//12
    lilei.intr();

运行结果：
11
I'm Li Lei, I'm 11
12
I'm Li Lei, I'm 12
![image-20210705194500622](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210705194500622.png)

b. 用new:

  1). 如何: 2步

  var 对象名=new Object(); //先创建空对象{}

  //强行给空对象中添加新属性和新方法

  对象名.新属性=属性值;

  对象名.新方法=function(){ ... this.属性名 ... }

  2). 揭示了js语言对底层的核心原理: 其实，js中所有对象底层都是关联数组。

  i. 存储结构: 都是名值对儿的组合

  ii. 访问成员时:

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml27952\wps7.png)   ①标准写法都是: 对象名/数组名["成员名"]

   ②简写都是: 对象名/数组名.成员名

   ③特殊:

    如果成员名是数字时，不能用.只能用[数字]

    如果成员名是变量时，只能用[变量]，不要加""

  iii. 强行给不存在的位置赋值，不但不会报错，而且还会自动添加该属性。

    固定套路: 如何给一个对象添加新属性或方法:

    只有唯一一种野蛮的办法: 强行赋值！

  iv. 强行访问不存在的位置的值，都不会报错，而是返回undefined。

    固定套路: 如何判断一个对象中是否包含某个成员: 

    if(对象.成员名!==undefined) //说明包含该成员

  v. 都可以用for  in循环遍历！

   for(var 属性名 in  对象名/数组名){

     //in 会自动依次取出对象或数组中每个:前的属性名，保存到in前的变量中。

     //如果想进一步获得属性值: 

     对象名/数组名[属性名]

   }

 3). 示例:

演示对象与关联数组的异同:

   var lilei=new Object();//{}
    lilei["sname"]="Li Lei";
    lilei.sage=11;
    lilei["intr"]=function(){
      console.log(`I'm ${this.sname}, I'm ${this.sage}`)
    }
    console.log(lilei);
    console.log(lilei.className);
    //遍历lilei的每个属性值
    //     自己起名  
    for(var 属性名 in lilei){
      //var 属性名 是变量！每轮循环时，值都会变化
      console.log(`${属性名}:${lilei[属性名]}`);
      //                      变量就不能放在""中！
      //console.log(`${属性名}:${lilei["属性名"]}`)
      //                            ↑上边错
      // 因为.和[""]完全等效，所以    ↓下边一定也错！
      //console.log(`${属性名}:${lilei.属性名}`);
    }
​
    var hmm=[];
    hmm.sname="Han Meimei";
    hmm["sage"]=11;
    hmm.intr=function(){
      console.log(`I'm ${this.sname}, I'm ${this.sage}`)
    }
    console.log(hmm);
    console.log(hmm.className);
​
运行结果
{sname: "Li Lei", sage: 11, intr: ƒ}
  intr: ƒ ()
  sage: 11
  sname: "Li Lei"
undefined
sname:Li Lei
sage:11
intr:function(){
  console.log(`I'm ${this.sname}, I'm ${this.sage}`)
}
[sname: "Han Meimei", sage: 11, intr: ƒ]
  intr: ƒ ()
  sage: 11
  sname: "Han Meimei"
  length: 0
undefined
4). 示例:

克隆一个对象:

    var liang={
      头发:"稀疏",
      眼睛:"戴眼镜",
      鼻子:"大鼻头",
      嘴巴:"嘴角上翘",
      下巴:"圆润"
    }
    //            自己起名
    function clone(原对象){
      //1. 先创建一个空对象等着
      // 自己起名
      var 新对象={};
      //2. 遍历原对象中所有旧属性名
      //      自己起名
      for(var 原属性名 in 原对象){
        //3. 获取原对象中原属性值，再强行为新对象添加同名的属性，属性值为原属性值
        var 原属性值=原对象[原属性名];
        新对象[原属性名]=原属性值;
      }
      return 新对象;
    }
​
    var liang2=clone(liang);
​
    console.log(liang2);
    console.log(liang2==liang);//false
    //           新对象  旧对象
    //              地址不同

​
运行结果
{头发: "稀疏", 眼睛: "戴眼镜", 鼻子: "大鼻头", 嘴巴: "嘴角上翘", 下巴: "圆润"}
  下巴: "圆润"
  嘴巴: "嘴角上翘"
  头发: "稀疏"
  眼睛: "戴眼镜"
  鼻子: "大鼻头"
false

c. 用构造函数:

  1). 问题: 用{}一次只能创建一个对象。如果想创建多个相同结构的对象时，代码就会很多重复！——极其不便于将来的维护。

  2). 解决: 今后，只要想反复创建多个相同结构，只是内容不同的对象时，都用构造函数。

  3). 什么是: 描述同一类型的所有对象的统一结构的函数。

  4). 为什么: 代码重用!

  5). 如何: 2步:

  i. 定义构造函数:

  function 类型名(形参1, 形参2, ...){

  //将来要加入到新对象中的规定的属性

   this.属性名=形参1;

   this. xxx = xxx;

   this.方法名=function(){ ... this.属性名 ... }

  }

  ii. 如何使用构造函数反复创建多个相同结构的对象

  var 对象名=new 类型名(实参值1, 实参值2, ...)

       创建 指定类型的一个新对象

       同时把实参值传给构造函数的形参变量。

  6). new做的4件事:

  i. 创建一个新的空对象等待

  ii. ？

  iii. 调用构造函数:

   ①将构造函数中的this->new刚创建的新对象

   ②在构造函数内通过强行赋值方式，为新对象添加规定的属性和方法

  iv. 返回新对象的地址，保存到=左边的变量里。

  7). 问题: 如果将方法定义（function）写在构造函数内，则每new一个对象，就会执行一次function，就会创建完全相同的新的函数副本。——浪费内存！

  8). 示例: 定义构造函数规定学生类型对象的统一结构

    //软件设计第一原则: Don't repeat yourself
    //定义构造函数来描述所有学生对象的统一结构
    function Student(sname,sage){
      this.sname=sname;
      this.sage=sage;
      this.intr=function(){
        console.log(`I'm ${this.sname}, I'm ${this.sage}`)
      }
    }
    //用构造函数反复创建多个相同结构，但内容不同的学生类型的对象。
    var lilei=new Student("Li Lei",11);
    var hmm=new Student("Han Meimei",12);
    console.log(lilei);
    lilei.intr();
    console.log(hmm);
    hmm.intr();
运行结果
Student {sname: "Li Lei", sage: 11, intr: ƒ}
  intr: ƒ ()
  sage: 11
  sname: "Li Lei"
I'm Li Lei, I'm 11
Student {sname: "Han Meimei", sage: 12, intr: ƒ}
  intr: ƒ ()
  sage: 12
  sname: "Han Meimei"
I'm Han Meimei, I'm 12

总结:

(4). 作用域和作用域链: (跟着视频亲自画图！！！)

a. 作用域:

 1). 全局作用域:window，保存全局变量

 优: 可重用，缺: 随处可用, 极易被污染

 2). 函数作用域: 保存局部变量

 局部变量包括2中: 函数中var出的变量和形参变量

 优: 仅函数内可用，不会被污染，缺: 不可重用

 3). 函数作用域对象原理:

 i. 每个函数定义时都自带好友列表，好友列表里2个格子，一个是空，一个引用window

 ii. 调用函数时临时创建函数作用域对象保存函数局部变量。并将函数作用域对象的地址保存到函数好友列表中离自己近的格子里。

 iii. 函数执行过程中按就近原则先在自己的函数作用域对象中找局部变量使用。如果找不到，才被迫去全局window中找变量使用.

 iv. 函数调用后，好友列表中离自己近的格子清空，导致函数作用域对象以及内部的局部变量被释放！——所以局部变量不可重用！

b. 作用域链: 保存一个函数所有可用的作用域对象的链式结构(好友列表)学名就叫作用域链。
 1). 作用域链保存着一个函数可用的所有变量

 2). 作用域链控制着变量的使用顺序。先局部后全局。

(5). 闭包: （跟着视频亲自画图!!!）
a. 只要希望给一个函数保护一个可反复使用的专属变量，又防止这个变量被外界篡改时，都用闭包。

b. 闭包三步:

 1). 用外层函数妈妈包裹要保护的变量和内层函数

 2). 外层函数妈妈用return把内层函数孩子返回到外部

 3). 外部想使用内层函数的人，必须调用外层函数，才能获得return出来的内层函数对象。并将内层函数保存在一个变量中反复使用。

c. 闭包形成的原因: 外层函数调用后，外层函数的作用域对象被内层函数引用着无法释放，形成了闭包对象

d. 闭包的缺点: 闭包比一般的函数占用多一块内存——外层函数的函数作用域对象。
 所以，用完闭包后，应该尽快释放:
 保存内层函数的变量=null

\4. 面向对象: 封装 继承 多态

自己跟着视频，一步一步画图，自己标顺序，知识才能变成自己的

(1). 封装: 3种:

a. 用{}创建一个对象:

var 对象名={

 属性名:属性值,

 ... : ... ,

 方法名: function(){

  ... this.属性名 ...

 }

}
b. 用new Object():

 1). 2步:

 i. var 对象名=new Object()

 ii. 对象名.属性名=属性值;

  对象名.方法名=function(){ ... }

 2). 对象底层也是关联数组:

 i. 都是名值对儿的集合

 ii. 都可用[""]和.方式访问成员。

  如果属性名来自于变量，就只能用[]，不要加""

 iii. 访问不存在的属性，都不报错，返回undefined

  判断是否包含某个属性:

 对象.属性名!==undefined

 iv. 强行给不存在的属性赋值，都不报错，而是自动添加该属性

  给对象添加新属性，唯一办法，强行赋值:

 对象名.新属性名=新值

 v. 都可用for in遍历

c. 只要反复创建多个相同结构的对象都用构造函数:

 1). 2步:

 i. 定义构造函数:

 function 类型名(形参1,形参2, ...){

  this.属性名1=形参1;

  this.属性名2=形参2;

  //构造函数中不要再包含方法定义定义!

 }

 ii. 用new 调用构造函数:

 var 对象名=new 类型名(属性值1, 属性值2,...)

 2). new做了4件事:

 i. 创建一个新的空对象

 ii. 自动设置新子对象继承构造函数的原型对象

 iii. 调用构造函数，传入实参，并自动替换构造函数中的this为new正在创建的新对象。构造函数中，通过强行赋值的方式为新对象添加规定的属性，并保存属性值。

 iv. 返回新对象的地址，保存到=左边的变量中。

 3). 优点: 重用对象结构代码

 4). 缺点: 如果构造函数中包含方法定义，则每次创建新对象都会重复创建相同方法的副本。——浪费内存！

day03

一. 面向对象:

\1. 继承:

(1). 问题:

只要将方法定义放在构造函数中，那么，每次new时都会执行function，就会反复创建相同函数的多个副本！——浪费内存

(2). 解决:

 如果将来发现多个子对象都要使用相同的功能和属性值时，都可以用继承来解决

(3). 什么是继承:

父对象中的成员，子对象无需重复创建，就可直接使用！就像使用自己的成员一样！

(4). 如何:

js中的继承都是通过原型对象实现的

 a. 什么是原型对象: 替所有子对象集中保存共有属性值和方法的特殊父对象.

 b. 何时: 今后，只要发现多个子对象，都需要使用相同的功能和属性值时，都可将相同的功能和属性值集中定义在原型对象中。

 c. 如何:

  1). 如何创建原型对象: 不用自己创建。而是在定义构造函数时，程序自动附赠我们一个空的原型对象

  2). 如何找到原型对象: 构造函数中都有一个自带的属性prototype，指向自己配对的原型对象。

    构造函数.prototype

  3). 何时如何继承: new的第二步自动让新创建的子对象，继承构造函数的原型对象。

   new会自动为子对象添加_proto_属性，指向构造函数的原型对象。

总结:new 4步

\1. 创建一个新的空对象等待

\2. 让子对象继承构造函数的原型对象

\3. 调用构造函数，将this替换为新对象，通过强行赋值方式为新对象添加规定的属性

\4. 返回新对象地址

 4). 如何向原型对象中添加新的共有属性和方法:

   只能强行赋值:

   构造函数.prototype.共有方法=function(){ ... }

   构造函数.prototype.共有属性=属性值

 d. 结果: 今后，用子对象.访问对象的成员时，js引擎先在子对象内部查找自有的属性。如果子对象没有，则js引擎会自动延_proto_属性去父元素查找。如果在父元素中找到了想要的属性或方法，则和访问子对象的方法一样调用。

 e. 强调: 所以，今后，构造函数中一定不要包含方法的定义。所有方法都应该集中定义到原型对象中一份。所有子对象共用。

(5). 示例:

将所有子对象共用的方法保存进构造函数里

 day02剩余/6_prototype.html

    function Student(sname,sage){
      this.sname=sname;
      this.sage=sage;
    }
    console.log(Student.prototype)
​
    Student.prototype.intr=function(){
      console.log(`I'm ${this.sname}, I'm ${this.sage}`)
    }
​
    var lilei=new Student("Li Lei",11)
    var hmm=new Student("Han Meimei",12);
    console.log(lilei);
    lilei.intr();
    console.log(hmm);
    hmm.intr();
​
    //亲自鉴定:
    //lilei的爹是不是Student的老公
    console.log(lilei.__proto__==Student.prototype);//true
    console.log(hmm.__proto__==Student.prototype);//true
​
运行结果 (结果中[[prototype]]，底层是__proto__)
{constructor: ƒ}
Student {sname: "Li Lei", sage: 11}
  sage: 11
  sname: "Li Lei"
  [[Prototype]]: Object
    intr: ƒ ()
    constructor: ƒ Student(sname,sage)
    [[Prototype]]: Object
I'm Li Lei, I'm 11
Student {sname: "Han Meimei", sage: 12}
  sage: 12
  sname: "Han Meimei"
  [[Prototype]]: Object
    intr: ƒ ()
    constructor: ƒ Student(sname,sage)
    [[Prototype]]: Object
I'm Han Meimei, I'm 12
true
true
![image-20210705201652760](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210705201652760.png)

(6). 自有属性和共有属性：

 a. 自有属性: 保存在子对象内部，只归当前子对象自有的属性

 b. 共有属性: 保存在父对象(原型对象)中，归多个子对象共有的属性

 c. 获取属性值时，毫无差别，都可用: 子对象.属性名

  如果js引擎发现，要使用的属性不在子对象中，则自动延_proto_属性向父对象继续查找要用属性。

 d. 修改属性值时:

  1). 自有属性: 子对象.属性名=属性值;

  2). 共有属性:

  i. 错误: 子对象.共有属性=新值

   后果: 不但不会修改原型对象中的共有属性，而且还会给当前子对象添加一个同名的自有属性。从此，这个子对象，在这个属性的使用上，与其他子对象，再无法保持同步！

  ii. 正确: 共有属性，必须用原型对象修改:

   构造函数.prototype.共有属性=新值

 e. 示例: 为所有学生添加共有的班级名属性，并修改

    function Student(sname,sage){
      this.sname=sname;
      this.sage=sage;
    }
    Student.prototype.className="初一2班";
    var lilei=new Student("Li Lei",11)
    var hmm=new Student("Han Meimei",12);
    console.log(lilei);
    console.log(hmm);
    console.log(lilei.className, hmm.className);//初一2班 初一2班
    //过了一年，两个同学一起升级:
    //错误: 
    // lilei.className="初二2班";
    //正确:
    Student.prototype.className="初二2班";
    console.log(lilei.className, hmm.className);
​
​
​
运行结果
Student {sname: "Li Lei", sage: 11}
  sage: 11
  sname: "Li Lei"
  [[Prototype]]: Object
    className: "初二2班"
    constructor: ƒ Student(sname,sage)
    [[Prototype]]: Object
Student {sname: "Han Meimei", sage: 12}
  sage: 12
  sname: "Han Meimei"
  [[Prototype]]: Object
    className: "初二2班"
    constructor: ƒ Student(sname,sage)
    [[Prototype]]: Object
初一2班 初一2班
初二2班 初二2班
![image-20210705201852301](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210705201852301.png)

(7). 内置类型的原型对象:

 a. 什么是内置类型: ES标准中规定的，浏览器已经实现，我们可以直接使用的类型。

 b. 包括: 11种:

  String, Number, Boolean

  Array, Date, RegExp, Math(不是类型，已经是一个{}对象)

  Error

  Function Object

  global(全局作用域对象，在浏览器中被window代替)

 c. 什么是类型: 每种类型一定有2部分组成:

  1). 构造函数: 负责创建该类型的子对象

  2). 原型对象: 负责为该类型所有子对象集中保存共有的属性值和方法定义。

 d. 其实11种内置类型中的九种类型，也都由构造函数和原型对象组成。也都可以new创建子对象。

 e. 今后，只要想知道新标准的ES中新增了哪些函数，都可看这个类型的原型对象。

 f. 问题: 如果经常使用的一个功能，但是原型对象中没有提供！

 g. 解决: 其实，我们可以自定义一个函数，保存到原型对象中。

  构造函数.prototype.新方法=function(){...}

 h. 示例: 为数组类型添加求和的方法:

 2_Array_prototype.html

    Array.prototype.sum=function(){
      console.log(`调用一次自定义的sum函数`);
      //数组求和固定套路:
      //先定义变量保存临时汇总值
      var result=0;
      //遍历数组中每个元素
      for(var i=0;i<this.length;i++){
        //每变量一个元素值，就累加到result上
        result+=this[i];
      }
      //返回累加结果
      return result;
    }
​
    var arr1=[1,2,3];
    var arr2=[1,2,3,4,5];
    console.log(arr1.sum());
    console.log(arr2.sum());
​
​
​
运行结果
调用一次自定义的sum函数
6
调用一次自定义的sum函数
15

(8). 原型链:

 a. 什么是: 由多级父对象逐级继承形成的链式结构

 b. 保存着: 一个对象可用的所有属性和方法

 c. 控制着: 属性和方法的使用顺序: 就近原则: 先子级后父级

 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

\2. 多态:

(1). 什么是:

同一个函数，在不同情况下表现出不同的状态

(2). 包括:

 2种:

 a. 重载overload: 同一个函数，输入不同的参数，执行不同的逻辑（已讲）

 b. 重写override: (推翻、遮挡)

 1). 什么是: 在子对象中定义一个和父对象中的成员同名的自有成员。

  2). 何时: 从父对象继承来的个别成员不好用时，就可以在子对象中定义同名成员，来覆盖父对象中的同名成员。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml23028\wps1.jpg)

\3. 自定义继承:

(1). 只更换一个对象的父对象:

 a. 如何:

  子对象._proto_=新父对象 //不推荐

             完全一样

  Object.setPrototypeOf(子对象, 新父对象) //推荐

     修改->子对象 的 原型对象->为新父对象

 b. 示例: 只更换一个对象的父对象:

 4_setPrototypeOf.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml23028\wps6.jpg)

(2). 批量更换多个子对象的父对象:

 a. 只需要更换构造函数的prototype属性就可以

 b. 强调: 必须在创建子对象之前更换！——时机

 c. 示例: 批量更换两个子对象的父对象

 5_prototype.html

    function Student(sname, sage){
      this.sname=sname;
      this.sage=sage;
    }//.prototype={         }
    
    var father={
      money:1000000000000,
      car:"infiniti"
    }
    Student.prototype=father;
    
    var lilei=new Student("Li Lei",18)
    var hmm=new Student("Han Meimei",19);
​
    console.log(hmm);
    console.log(lilei);
​
    console.log(hmm.money, hmm.car);
    console.log(lilei.money, lilei.car);
​
​
​
运行结果
Student {sname: "Han Meimei", sage: 19}
  sage: 19
  sname: "Han Meimei"
  [[Prototype]]: Object
    car: "infiniti"
    money: 1000000000000
    [[Prototype]]: Object
Student {sname: "Li Lei", sage: 18}
  sage: 18
  sname: "Li Lei"
  [[Prototype]]: Object
    car: "infiniti"
    money: 1000000000000
    [[Prototype]]: Object
1000000000000 "infiniti"
1000000000000 "infiniti"
![image-20210705203037108](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210705203037108.png)

二. ES5: ECMAScript 第5个版本

\1. 严格模式:

 (1). 什么是: 比旧的js运行机制要求更严格新运行机制

 (2). 为什么: 旧的js中有很多广受诟病的缺陷

 (3). 何时: 今后，企业中，所有代码都要运行在严格模式下。

 (4). 如何: 在当前代码段的顶部添加: "use strict";

 (5). 新规定: 4个:

 a. 禁止给未声明过的变量赋值:

  1). 旧的js中: 如果强行给未声明过的变量赋值，不会报错，而是，自动在全局设置该变量。——全局污染

  2). 严格模式中: 强行给未声明过的变量赋值，会报错！——减少了因为写错变量名造成的全局污染！

  3). 示例: 演示给未声明的局部变量赋值

 6_use_strict.html

    "use strict";
​
    function send(){
      var gf;
      //不小心写错变量名
      qgf="今晚308,w84u";//报错！
      console.log(`我女朋友收到:${gf}`)
    }
    send();
    console.log(`公司大群中:${qgf}`);
​
​
​
运行结果
Uncaught ReferenceError: qgf is not defined
 b. 静默失败升级为错误:

  1). 静默失败: 程序运行不成功，但是也不报错。——极其不利于调试程序。

  2). 严格模式: 将绝大部分静默失败都升级为报错！

  3). 示例: 尝试修改只读属性

    "use strict";
​
    var eric={
      eid:1001,
      sname:"埃里克"
    }
    //公司规定，员工编号禁止修改
    //不要问为什么，稍后讲
    Object.defineProperty(eric,"eid",{
      writable:false
    })
​
    //有人试图修改eric的eid属性
    eric.eid=-2;//Uncaught TypeError: Cannot assign to read only property 'eid'
    console.log(eric);
​
​
​
运行结果
Cannot assign to read only property 'eid' of object
 c. 普通函数调用中的this不再指window，而是指undefined

  1). 旧js中: 普通函数调用中的this默认指window——极容易造成全局污染。

  2). 严格模式: 普通函数调用中的this指undefined了，不再指window——防止因为错误使用this而导致的全局污染

  3). 示例: 错误的使用构造函数:

  8_use_strict.html

    "use strict";
​
    function Student(sname,sage){
      console.log(this);
      this.sname=sname;//Cannot set property 'sname' of undefined
      this.sage=sage;
    }
    var lilei=new Student("Li Lei",11)
    //忘写new了！
    var hmm=Student("Han Meimei",12);
    //        this->window
    //        this.sname->window.sname
    //        this.sage->window.sage
    console.log(lilei);
    console.log(hmm);
    console.log(window);
​
​
运行结果
Student {}
  sage: 11
  sname: "Li Lei"
  [[Prototype]]: Object
undefined
Uncaught TypeError: Cannot set property 'sname' of undefined
d. 禁用了arguments.callee

  1). 什么是arguments.callee: 是在一个函数内，获得当前函数本身的一种特殊关键字。——递归

  2). 递归的问题1: 在函数内写死了当前函数名，一旦外部函数名改变，内部函数名忘记修改，则程序立刻报错！——紧耦合

  3). 解决: 在函数内使用arguments.callee代替写死的函数名。在运行时，自动获得当前函数本身！——松耦合

  4). 递归的问题2: 重复计算量太大: 递归效率极低

  5). 解决: 今后，如果递归调用却是严重影响程序的性能时，就要用循环来代替递归。——难度极高

  6). 总结: 今后:

  i. 如果递归调用没有影响程序的效率，就首选递归——简单，直观

  ii. 如果递归调用却是影响了程序的效率，则被迫改为循环实现——难度极高.

  7). 示例: 分别使用递归和循环实现计算斐波那契数列第n个数是几

  9_use_strict.html

```html
  <script>
    // "use strict";

    //斐波那契数列:
    //1 1 2 3 5 8 13 21 34 55
    //1 2 3 4 5 6 7  8  9  10
    //前两个数是都是1，
    //从第三个数开始，每个数都是它相邻的前两个数的和
    //数学:
    //f(1)=1   f(2)=1
    //f(n)=f(n-1)+f(n-2)
    //计算斐波那契数列中第n个数是几
    function f(n){
      if(n<3){
        return 1
      }else{
        return arguments.callee(n-1)+arguments.callee(n-2);//Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
      }
    }
    console.log(f(10));//55
​
​
​
运行结果
55
10_use_strict_fib.html

  <script>
    // "use strict";

    //斐波那契数列:
    //1 1 2 3 5 8 13 21 34 55
    //1 2 3 4 5 6 7  8  9  10
    //前两个数是都是1，
    //从第三个数开始，每个数都是它相邻的前两个数的和
    //数学:
    //f(1)=1   f(2)=1
    //f(n)=f(n-1)+f(n-2)
    //计算斐波那契数列中第n个数是几
    function f(n){
      if(n<3){
        return 1
      }else{
        var f1=1, f2=1, fn;
        for(var i=3;i<=n;i++){
          //f1+f2=>fn;
          fn=f1+f2;
          //f2->f1
          f1=f2;
          //fn->f2
          f2=fn;
        }
        return fn;
      }
    }
    console.log(f(10));//55
​
​```

运行结果
55
![image-20210705204002162](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210705204002162.png)

总结: this的用法: 4种

\1.obj.fun()  this->.前的obj对象

\2. new Fun()  this->new创建的新对象

\3. fun()  this默认->window

\4. 原型对象(prototype)中的this->将来调用这个共有函数的.前的某个子对象。——谁调用指谁

总结：

(2). 继承:

a. 今后，只要同一类型所有子对象共用的方法和属性值，都要集中保存在构造函数的原型对象中！

 构造函数.prototype.属性名/共有方法名=属性值/function(){ ... }

b. 自有属性和共有属性:

 1). 获取属性值:都可用"子对象.属性名"

 2). 修改属性值:

 i. 自有属性: 子对象.自有属性名=新值

 ii. 共有属性: 构造函数.prototype.共有属性名=新值

c. 内置类型原型对象:

 1). 11种内置类型/对象: String, Number, Boolean, Array, Date, RegExp, Math(对象), Error, Function, Object, global(对象)

 2). 一种类型=构造函数+原型对象

 i. 构造函数: 创建子对象

 ii. 原型对象: 为所有子对象保存共有成员

 3). 查看该类型共有哪些API: 类型名.prototype

 4). 该类型缺少想用的方法: 类型名.prototype.共有新方法=function(){ ... }

d. 原型链: 保存着一个对象可用的所有属性和方法。控制着属性和方法的使用顺序：先自有再共有——就近原则！

(3). 多态: 重点讲重写：如果子对象觉得从父对象继承来的成员不好用，可以在子对象自己内部重写和父对象同名的成员，覆盖父对象的成员，优先使用自己的。

*面向对象终极总结: 封装，继承，多态

①封装: 创建对象，2种:

 如果只创建一个对象: {}

 如果反复创建多个相同结构的对象: 构造函数

②继承: 所有子对象共用的属性值和方法，都要放在构造函数的原型对象中

③多态: 重写: 只要觉得从父对象继承来的成员不要用，都在子对象中重写同名成员

④如果觉得这个父对象对象都不好用，可以自定义继承: 2种:

 1). 只换一个子对象的父对象: 2种:

 i. 子对象.proto=新父对象

 ii. Object.setPrototypeOf(子对象, 新父对象)

 2). 更换多个子对象的原型对象: 构造函数.prototype=新对象

\5. 严格模式: "use strict";

(1). 禁止给未声明过的变量赋值

(2). 静默失败升级为错误

(3). 普通函数调用中的this不指window，而是指undefined

(4). 禁用arguments.callee

day04

一. ES5

1.1. 保护对象:

 (1). 问题: 旧js中，对象自己毫无自保能力！

 (2). 解决: ES5中提供了一套保护对象自身的机制。

 (3). 保护属性:

1.1.1. ES5中，对象中每个属性，不再只是一个简单的值。底层已经变成了一个缩微的小对象。

![image-20210705102351126](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210705102351126.png)

只要看到![image-20210705110352584](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210705110352584.png)这种样式的属性都是服务器替身，从小黑屋获得。

wtritable:true /false          控制是否修改当前属性值

enumerable:true /false     控制是否可用for in遍历到这个属性  只防for in，不防.

configurable:true /false

两件事：

1.控制是否可删除当前属性

2.控制是否可修改前两个开关！一旦改为false，不可逆

1.1.2 . 如何修改开关:

  1). 只修改一个属性的开关:

          定义 属性

i. Object.defineProperty(对象名, "属性名", {

    开关:true或false,

    ... : ...

   })

ii. 强调: 今后，只要修改writable和enumerable两个开关时，都要同时修改configurable:false，阻止别人的程序重新打开我们关闭的开关。（configurable:false，不可逆）

iii. 问题: Object.defineProperty()一句话只能保护一个属性。如果对象中有很多属性都需要保护，则代码会很繁琐

iv. 解决:

Object.defineProperties(对象名,{

    属性名1:{

     开关名: true或false,

     ... : ...

    },

    属性名2:{

     开关名: true或false,

     ... : ...

    },

   })

eg:使用开关，保护对象属性:

    var eric={
      ename:"埃里克",
      eage:25
    }
    //年龄eage可以修改的,但是必须介于18~65之间
    //2步:
    //1. 定义小黑屋属性，转移原对象中原eage属性值
    Object.defineProperty(eric,"小黑屋",{
      value:eric.eage,
      writable:true,
      enumerable:false,
      configurable:false
    })
    //2. 定义访问器属性替身+2保镖
    Object.defineProperty(eric,"eage",{
      get:function(){
        //专门负责从当前对象中的_eage属性中获取当前属性值，返回到外部
        console.log(`eage自动调用了自己的get()，返回${this.小黑屋}给外部`)
        //this->访问器属性eage所在的当前对象->eric
        return this.小黑屋;
      },
      set:function(value){
          //专门负责从外部接收进来一个新值，经过验证后，决定是否保存到受保护的_eage属性中。因为，要接受外部的新值，所有，要定义一个形参value，准备接外部传来的新值
          //如果验证value符合要求
        console.log(`eage自动调用了自己的set()，接收外部传入的新值${value}`);
        if(value>=18&&value<=65){
            //才将新值实际保存会受保护的_eage属性中
          this.小黑屋=value;
        }else{//如果验证value不符合要求
          throw Error("年龄超范围！");//复习第一阶段try catch异常处理
        }
      },
      //访问器属性自己不存值，只提供保护，所以没有value属性
      //正是因为writable不好用，我们才被迫用访问器属性代替writable，所以用了get/set，就不用writable。
      //因为替身必须替真实属性抛头露面，所以，必须可以被for in发现即enumerable应该为true。又因为替身喝保镖绝对不能轻易被删除，所以configuraable必须为false
      enumerable:true,
      //因为替身不能随意删除，所以
      configurable:false
    })
​
    //外界试图获得eric的eage值
    console.log(eric.eage);
    //外界试图修改eric的eage属性
    eric.eage=26;
    //外界试图获得eric的eage值
    console.log(eric.eage);
    console.log(eric);
    //外界试图修改eric的eage属性
    eric.eage=-2;
eg:

    "use strict";
​
    var eric={
      eid:1001,
      ename:"埃里克",
      salary:12000
    };
    //eid禁止修改——只读
    //ename禁止删除
    //salary禁止随意用for in循环遍历
    Object.defineProperties(eric,{
      eid:{
        writable:false,
        configurable:false
      },
      ename:{
        configurable:false
      },
      salary:{
        enumerable:false,
        configurable:false
      }
    })
​
    //有人尝试重新打开刚关闭的writable开关
    // Object.defineProperty(eric,"eid",{
    //   writable:true,
    //   configurable:true
    // });//报错: Uncaught TypeError: Cannot redefine property: eid
    //有人尝试修改eid
    // eric.eid=-2;//报错:Uncaught TypeError: Cannot assign to read only property 'eid'
    //有人尝试删除eric的ename属性
    // delete eric.ename;//Uncaught TypeError: Cannot delete property 'ename'
    //有人尝试遍历eric的所有属性，包括salary
    for(var key in eric){
      console.log(`${key}:${eric[key]}`)
    }
    console.log(eric);
    console.log(eric.salary);
d.问题

 如果想使用灵活的自定义规则保护属性值时，三个开关都不适用了！

 e. 解决: 今后，只要使用灵活的自定义规则保护属性值时，都用访问器属性

 f. 什么是: 自己不保存属性值，只提供对另一个数据属性的保护。——保镖

1.1.3如何定义访问器属性: 2步**

  1).定义小黑屋属性，转移原对象中原属性的值

  Object.defineProperty(原对象,"小黑屋",{

   value:原对象.要保护的属性,

   writable:true,

   enumerable:false, //小黑屋不能轻易被人发现

   configurable:false //小黑屋不可删除

  })

  2). 定义访问器属性替身+2保镖

  Object.defineProperty(原对象,"要保护的原属性名",{

   get:function(){

    //this->访问器属性eage所在的当前对象->eric

    return this.小黑屋;

   },

   set:function(value){

    if(判断条件){

     this.小黑屋=value;

    }else{

     throw Error("自定义错误提示");//复习第一阶段try catch异常处理

    }

   },

   //访问器属性自己不存值，只提供保护，所以没有value属性

   //正是因为writable不好用，我们才被迫用访问器属性代替writable，所以用了get/set，就不用writable。

   //因为替身必须替真实属性抛头露面，所以，必须可以被for in发现

   enumerable:true,

   //因为替身不能随意删除，所以

   configurable:false

  })

 h. 外界如何使用访问器属性: 和使用对象的普通属性完全一样！

  1). 取值: 对象.属性名

    底层: 自动调用访问器属性的get()

  2). 修改: 对象.属性名=新值

    底层: 自动调用访问器属性的set()，将新值传给()中的value形参。

 i. 示例: 使用访问器属性保护年龄属性:

 1_get_set.html

    var eric={
      ename:"埃里克",
      eage:25
    }
    //年龄eage可以修改的,但是必须介于18~65之间
    //2步:
    //1. 定义小黑屋属性，转移原对象中原eage属性值
    Object.defineProperty(eric,"小黑屋",{
      value:eric.eage,
      writable:true,
      enumerable:false,
      configurable:false
    })
    //2. 定义访问器属性替身+2保镖
    Object.defineProperty(eric,"eage",{
      get:function(){
        console.log(`eage自动调用了自己的get()，返回${this.小黑屋}给外部`)
        //this->访问器属性eage所在的当前对象->eric
        return this.小黑屋;
      },
      set:function(value){
        console.log(`eage自动调用了自己的set()，接收外部传入的新值${value}`);
        if(value>=18&&value<=65){
          this.小黑屋=value;
        }else{
          throw Error("年龄超范围！");//复习第一阶段try catch异常处理
        }
      },
      //访问器属性自己不存值，只提供保护，所以没有value属性
      //正是因为writable不好用，我们才被迫用访问器属性代替writable，所以用了get/set，就不用writable。
      //因为替身必须替真实属性抛头露面，所以，必须可以被for in发现
      enumerable:true,
      //因为替身不能随意删除，所以
      configurable:false
    })
​
    //外界试图获得eric的eage值
    console.log(eric.eage);
    //外界试图修改eric的eage属性
    eric.eage=26;
    //外界试图获得eric的eage值
    console.log(eric.eage);
    console.log(eric);
    //外界试图修改eric的eage属性
    eric.eage=-2;
​
​
运行结果
eage自动调用了自己的get()，返回25给外部
25
eage自动调用了自己的set()，接收外部传入的新值26
eage自动调用了自己的get()，返回26给外部
26
{ename: "埃里克", 小黑屋: 26}
eage自动调用了自己的set()，接收外部传入的新值-2
Uncaught Error: 年龄超范围！
![image-20210705204859473](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210705204859473.png)

1.1.4保护结构: 3个级别

 a. 防扩展:

  1). 什么是: 禁止给对象添加新属性

  2). 如何: Object.preventExtensions(对象)

          阻止  扩展

  3). 问题: 只防添加，不防删除

 b. 密封:

  1). 什么是: 既禁止添加新属性，又禁止删除现有属性

  2). 如何: Object.seal(对象)

          密封

  3). 2件事:

  i. 会自动调用preventExtensions()，先禁止添加

  ii. 会自动遍历对象中每个属性，自动设置每个属性的configurable:false，所有属性禁止删除。

  4). 强调:

  i. 如果用了seal()，则既不用写preventExtensions()，又不用写所有的configurable:false。

  ii. 虽然用了seal()，虽然不能添加删除属性，但是属性值还是可以修改的。

  5). 一般，保护到密封级别就够了！

 c. 冻结:

  1). 什么是: 既禁止添加删除属性，又禁止修改一切属性值。

  2). 如何:Object.freeze(对象)

         冻结

  3). 3件事:

  i. 会自动调用preventExtensions()，先禁止添加

  ii. 会自动遍历对象中每个属性，自动设置每个属性的configurable:false，所有属性禁止删除。

  iii. 会自动遍历对象中每个属性，自动设置每个属性的writable:false，所有属性只读

 d. 示例: 分别使用三个级别保护对象结构:

 2_preventExtensions_seal_freeze.html

    "use strict";
​
    var eric={
      eid:1001,
      ename:"埃里克",
      salary:12000
    }
    Object.defineProperties(eric,{
      eid:{ writable:false },
      salary:{ enumerable:false }
    })
    //防扩展:
    // Object.preventExtensions(eric);
    //密封: (够了)
    Object.seal(eric);
    //冻结: (过于严格)
    // Object.freeze(eric);
​
    //有人试图添加新属性
    // eric.Eid=-2;//报错: Uncaught TypeError: Cannot add property Eid, object is not extensible
    //有人试图删除ename属性
    // delete eric.ename;//报错: Cannot delete property 'ename'
    //有人试图修改salary属性值
    eric.salary=13000;//报错:Cannot assign to read only property 'salary'
    console.log(eric);
​
​
​
运行结果
{eid: 1001, ename: "埃里克", salary: 13000}
\2. Object.create()

 (1). 什么是: 基于一个现有父对象，创建一个新的子对象继承父对象。

 (2). 何时: 今后，如果想创建一个子对象，继承父对象，但是又没有构造函数时，就不能用new，只能用Object.create()。

 (3). 如何:     继承

 var 新子对象=Object.create(父对象, {

  //给子对象添加自有属性

  //必须用defineProperties函数相同的格式：

  属性名:{

   value:属性值,

   writable:true,

   enumerable:true,

   configurable:false

  },

  ... : { ... }

 })

 (4). Object.create()共做了3件事:

 a. 创建新对象

 b. 设置新对象继承父对象

 c. 强行为新对象添加自有属性

 (5). 示例: 使用Object.create()创建子对象继承父对象:

 3_Object_create.html

    var father={
      money:1000000000000,
      car:"infiniti"
    }
    var hmm=Object.create(father,{
      //defineProperties()
      phone:{
        value:"iPhone 13 Max",
        writable:true,
        enumerable:true,
        configurable:false
      },
      bao:{
        value:"LV",
        writable:true,
        enumerable:true,
        configurable:false
      }
    });
    console.log(hmm);
    console.log(hmm.money, hmm.car);
​
​
​
运行结果
{phone: "iPhone 13 Max", bao: "LV"}
  bao: "LV"
  phone: "iPhone 13 Max"
  [[Prototype]]: Object
    car: "infiniti"
    money: 1000000000000
    [[Prototype]]: Object
1000000000000 "infiniti"
\3. 替换this:

如果系统自动指定的this对象不是我们想要的，我们就可主动更换this指向的对象。

 (1). 在一次调用函数时，临时替换一次函数中的this为指定对象。

         调用

3.1call

要调用的函数.call(替换this的对象, 实参值1,...)

 b. 3件事:

  1). 立刻调用一次点前的函数

  2). 自动将.前的函数中的this替换为指定的新对象

  3). 还能向要调用的函数中传实参值

 c. 示例: 使用call，临时替换计算器函数中的this为指定员工对象

 4_call.html

    //有一个公共的计算器函数，计算每个人的总工资
    //              底薪   奖金1   奖金2
    function jisuan(base, bonus1, bonus2){
      console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`)
    }
​
    //两个员工:
    var lilei={ename:"Li Lei"};
    var hmm={ename:"Han Meimei"};
​
    //lilei想用jisuan()计算自己这个月的薪资
    //错误: this->window
    // jisuan(10000,1000,2000);
    //错误: lilei自己没有计算，lilei的爹Object也没有计算函数，所以报错:不是一个function
    // lilei.jisuan(10000,1000,2000);
    console.log(lilei);
    //正确:
  //要调用  调用       还能
  //的函数  替换this   传实参
    jisuan.call(lilei,10000, 1000, 2000);
    //             |    ↓      ↓     ↓
    //相当于jisuan( ↓   base,bonus1,bonus2)
    //            this.ename
    //            lilei.ename
    //                 "Li Lei"
    jisuan.call(hmm,5000, 6000, 3000)
    //            |   ↓     ↓     ↓
    //相当于jisuan(↓ base,bonus1,bonus2 )
    //          this.ename
    //          hmm.ename
    //          "Han Meimei"
​
​
​
运行结果
{ename: "Li Lei"}
  ename: "Li Lei"
  [[Prototype]]: Object
Li Lei的总工资是:13000
Han Meimei的总工资是:14000
3.2.apply

特殊: 如果多个实参值是放在一个数组中给的。需要既替换this，又要拆散数组再传参 使用

 a. 要调用的函数.apply(替换this的对象, 包含实参值的数组)

 b. 3件事:

  1). 调用.前的函数

  2). 替换.前的函数中的this为指定对象
  3). 先拆散数组为多个元素值，再分别传给函数的形参变量。

 c. 示例: 使用apply替换this同时，拆散数组再传参

 5_apply.html

  <script>
    //有一个公共的计算器函数，计算每个人的总工资
    //              底薪   奖金1   奖金2
    function jisuan(base, bonus1, bonus2){
      console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`)
    }
​
    //两个员工:
    var lilei={ename:"Li Lei"};
    var hmm={ename:"Han Meimei"};
​
    //lilei想用jisuan()计算自己这个月的薪资
    var arr=[10000, 1000, 2000];
    //错误: call不能打散数组
    // jisuan.call(lilei,arr);
    jisuan.apply(lilei,      arr     );
    //             |       拆散数组——apply的特异功能
    //             |    10000, 1000, 2000 ——多个值
    //相当于jisuan( ↓    base,bonus1,bonus2)
    //            this.ename
    //            lilei.ename
    //            "Li Lei"
  </script>
​
​
运行结果;
Li Lei的总工资是:13000
3.3bind

创建函数副本，并永久绑定this:

 a. var 新函数=原函数.bind(替换this的对象)

 b. 2件事:

  1). 创建一个和原函数一模一样的新函数

  2). 永久替换新函数中的this为指定对象

 c. 如何使用新函数:

  1). 新函数(实参值,...)

  2). 强调: 因为bind()已经提前将指定对象替换了新函数中的this，则后续每次调用时，不需要再替换this了！

 d. 其实，bind()不但可以提前永久绑定this，而且还能提前永久绑定部分实参值

 e. 如何:

 var 新函数=原函数.bind(替换this的对象, 不变的实参值)

 f. 3件事:

  1). 创建一模一样的新函数

  2). 永久替换this为指定对象

  3). 永久替换部分形参变量为固定的实参值！

 g. 如何调用: 只需要传剩余的实参值即可！

 新函数(剩余实参值,...,...)

 h. 强调:被bind()永久绑定的this，即使用call，也无法再替换为其它对象了。

 i. 示例: 创建lilei专属的jisuan2()，并永久绑定this和底薪

 6_bind.html

  <script>
    //有一个公共的计算器函数，计算每个人的总工资
    //              底薪   奖金1   奖金2
    function jisuan(base, bonus1, bonus2){
      console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`)
    }
​
    //两个员工:
    var lilei={ename:"Li Lei"};
    var hmm={ename:"Han Meimei"};
​
    //lilei想用jisuan()计算自己每个月的薪资
    //但是，每个月都要call，很麻烦
    //于是lilei决定买一个一模一样的自己专属的jisuan()函数。
    var jisuan2=jisuan.bind(lilei,10000);
    //jisuan2=function(10000, bonus1, bonus2){
    //  console.log(`${lilei.ename}的总工资是:${10000+bonus1+bonus2}`)
    //}
    jisuan2(1000,2000);
    jisuan2(1000,1000);
    jisuan2(2000,2000);
    //hmm想抢lilei的计算器
    jisuan2.call(hmm,1000,2000);
  </script>
​
​
运行结果
Li Lei的总工资是:13000
的总工资是:12000
的总工资是:14000
的总工资是:13000

 (4). 总结:

 a. 只在一次调用函数时，临时替换一次this: call

 b. 既要替换一次this，又要拆散数组再传参: apply

 c. 创建新函数副本，并永久绑定this: bind

\4. 数组新增函数:

4.1判断: 2个:

a. every: 每个

  1). 什么是: 专门判断一个数组中是否所有元素都符合要求

  2). 如何:

  var 判断结果=数组.every(

   function(当前元素值,当前下标i,当前数组){//回调函数

    return 检查当前元素值是否符合要求，并返回检查结果

   }

  );

  3). 原理:

  i. every内自带for循环，自动遍历数组中每个元素

  ii. 每遍历一个元素，就自动调用一次回调函数

  iii. 每次调用回调函数时，都自动传入三个值:

   ①当前元素值

   ②当前下标i

   ③当前数组对象

  iv. 在回调函数内，判断当前元素值是否符合要求，并返回判断结果为every函数

  v. 如果本次回调函数判断结果为true，则至少说明当前元素符合要求，every会自动遍历下一个元素。直到所有元素遍历完成，都没有碰到不符合要求的元素，则结束循环，整体返回true，说明当前数组中所有元素都符合要求！

  vi. 如果本次回调函数判断结果为false，则说明当前元素不符合要求，every立刻退出循环，直接返回false，表明当前数组中不是所有元素都符合要求。

  4). 示例: 判断哪个数组全由偶数组成:

  7_every.html

  var arr1=[
    1,2,3,4,5
  ];
  var arr2=[
    2,4,6,4,2
  ];
  //判断哪个数组全由偶数组成
  console.log(
    arr1.every(
      //       自己起名
      function(当前元素值,当前下标i,当前数组){
        console.log(`arr1.every()内自动调用了一次回调函数。收到:当前元素值=${当前元素值},当前下标i=${当前下标i},当前数组${当前数组}。本次返回:${当前元素值%2==0}`);
        //只判断当前元素值是不是偶数
        return 当前元素值%2==0//能被2整除
      }
    )
  );
  console.log(
    arr2.every(
      function(当前元素值,当前下标i,当前数组){
        console.log(`arr2.every()内自动调用了一次回调函数。收到:当前元素值=${当前元素值},当前下标i=${当前下标i},当前数组${当前数组}。本次返回:${当前元素值%2==0}`);
        //只判断当前元素值是不是偶数
        return 当前元素值%2==0//能被2整除
      }
    )
  )
​
​
​
运行结果
arr1.every()内自动调用了一次回调函数。收到:当前元素值=1,当前下标i=0,当前数组1,2,3,4,5。本次返回:false
false
arr2.every()内自动调用了一次回调函数。收到:当前元素值=2,当前下标i=0,当前数组2,4,6,4,2。本次返回:true
arr2.every()内自动调用了一次回调函数。收到:当前元素值=4,当前下标i=1,当前数组2,4,6,4,2。本次返回:true
arr2.every()内自动调用了一次回调函数。收到:当前元素值=6,当前下标i=2,当前数组2,4,6,4,2。本次返回:true
arr2.every()内自动调用了一次回调函数。收到:当前元素值=4,当前下标i=3,当前数组2,4,6,4,2。本次返回:true
arr2.every()内自动调用了一次回调函数。收到:当前元素值=2,当前下标i=4,当前数组2,4,6,4,2。本次返回:true
true
b. some: 一些，不要求全部

  1). 什么是: 专门检查一个数组中是否包含符合要求的元素

  2). 如何:

  var 判断结果=数组.some(

   function(当前元素值, 当前下标位置, 当前数组){

    return 判断当前元素值是否符合要求

   }

  )

  3). 原理:

  i. some内自带for循环，自动遍历数组中每个元素

  ii. 每遍历一个元素，就自动调用一次回调函数

  iii. 每次调用回调函数时，都自动传入三个值:

   ①当前元素值

   ②当前下标i

   ③当前数组对象

  iv. 在回调函数内，判断当前元素值是否符合要求，并返回判断结果给some函数

  v. 如果本次回调函数判断结果为true，则说明至少当前元素符合要求，some立刻退出循环，直接返回true，说明当前数组中包含至少一个符合要求的元素。

  vi. 如果本次回调函数判断结果为false，则说明当前元素不符合要求，some只能继续遍历下一个元素。如果直到遍历结束都没有发现符合要求的元素，则返回false。说明当前数组中不包含符合要求的元素。

  4). 示例: 判断哪个数组中包含奇数:

  8_some.html

  var arr1=[
    1,2,3,4,5
  ];
  var arr2=[
    2,4,6,4,2
  ];
  //判断哪个数组包含奇数
  console.log(
    arr1.some(
      //       自己起名
      function(当前元素值,当前下标i,当前数组){
        console.log(`arr1.some()内自动调用了一次回调函数。收到:当前元素值=${当前元素值},当前下标i=${当前下标i},当前数组${当前数组}。本次返回:${当前元素值%2==1}`);
        //只判断当前元素值是不是偶数
        return 当前元素值%2==1//不能被2整除
      }
    )
  );
  console.log(
    arr2.some(
      function(当前元素值,当前下标i,当前数组){
        console.log(`arr2.some()内自动调用了一次回调函数。收到:当前元素值=${当前元素值},当前下标i=${当前下标i},当前数组${当前数组}。本次返回:${当前元素值%2==1}`);
        //只判断当前元素值是不是偶数
        return 当前元素值%2==1//不能被2整除
      }
    )
  )
​
​
运行结果
arr1.some()内自动调用了一次回调函数。收到:当前元素值=1,当前下标i=0,当前数组1,2,3,4,5。本次返回:true
true
arr2.some()内自动调用了一次回调函数。收到:当前元素值=2,当前下标i=0,当前数组2,4,6,4,2。本次返回:false
arr2.some()内自动调用了一次回调函数。收到:当前元素值=4,当前下标i=1,当前数组2,4,6,4,2。本次返回:false
arr2.some()内自动调用了一次回调函数。收到:当前元素值=6,当前下标i=2,当前数组2,4,6,4,2。本次返回:false
arr2.some()内自动调用了一次回调函数。收到:当前元素值=4,当前下标i=3,当前数组2,4,6,4,2。本次返回:false
arr2.some()内自动调用了一次回调函数。收到:当前元素值=2,当前下标i=4,当前数组2,4,6,4,2。本次返回:false
false
4.2遍历: 2个:

a. forEach:

  1). 什么是: 专门代替for循环来简化遍历索引数组的特殊函数。

  2). 如何:

  数组.forEach(function(当前元素值, 当前下标i, 当前数组){

    对当前元素值执行操作

  })

  3). 原理:

  i. forEach内自带for循环，自动遍历数组中每个元素

  ii. 每遍历一个元素，就自动调用一次回调函数

  iii. 每次调用回调函数时，都自动传入三个值:

   ①当前元素值

   ②当前下标i

   ③当前数组对象

  iv. 在回调函数内，对当前元素执行规定的操作。不需要返回值。

  4). 示例: 点名:

  9_forEach.html

    var arr=["亮亮","楠楠","东东"]
    // for(var i=0;i<arr.length;i++){
    //   console.log(`${arr[i]} - 到！`)
    // }
    // arr.forEach(function(n){
    //   console.log(`${n} - 到!`)
    // });
    arr.forEach(n=>console.log(`${n}-到!`))
​
​
运行结果
亮亮-到!
楠楠-到!
东东-到!

b. map: 映射/对应

（保护原数组不变，返回遍历加工后的新数组）

  1). 什么是map: 专门读取原数组中每个元素值，进行修改后，生成一个新数组返回

  2). 如何:

  var 新数组=原数组.map(

   function(当前元素值, 当前下标i, 当前数组){

    return 当前元素值修改后的新值

   }

  )

  3). 原理:

  i. 内部创建一个新的空数组等待

  i. map内自带for循环，自动遍历原数组中每个元素

  ii. 每遍历一个元素，就自动调用一次回调函数

  iii. 每次调用回调函数时，都自动传入三个值:

   ①当前元素值

   ②当前下标i

   ③当前数组对象

  iv. 在回调函数内，对当前元素值进行修改，并将修改后的新值返回给map函数

  v. map函数接到新值后，自动放入新数组中对应的位置。

  vi. 遍历结束，map返回新数组。原数组保持不变。

  4). 示例: 将数组中所有元素*2，返回新数组

  10_map.html

    var arr=[1,2,3,4,5];
    //希望将原数组中元素值*2，放入新数组中返回，原数组保持不变！
    var arr2=arr.map(
      function(当前元素值,当前下标i){
        console.log(`arr.map()内自动调用一次回调函数。收到当前元素值=${当前元素值},当前下标i=${当前下标i}。将${当前元素值}x2后获得新值${当前元素值*2}，放入新数组中${当前下标i}位置`)
        return 当前元素值*2
      }
    );
    console.log(arr);
    console.log(arr2);
​
​
运行结果
arr.map()内自动调用一次回调函数。收到当前元素值=1,当前下标i=0。将1x2后获得新值2，放入新数组中0位置
arr.map()内自动调用一次回调函数。收到当前元素值=2,当前下标i=1。将2x2后获得新值4，放入新数组中1位置
arr.map()内自动调用一次回调函数。收到当前元素值=3,当前下标i=2。将3x2后获得新值6，放入新数组中2位置
arr.map()内自动调用一次回调函数。收到当前元素值=4,当前下标i=3。将4x2后获得新值8，放入新数组中3位置
arr.map()内自动调用一次回调函数。收到当前元素值=5,当前下标i=4。将5x2后获得新值10，放入新数组中4位置
 (5) [1, 2, 3, 4, 5]
 (5) [2, 4, 6, 8, 10]

总结: this的用法: 5种

\1.obj.fun()  this->.前的obj对象

\2. new Fun()  this->new创建的新对象

\3. fun()  this默认->window

\4. 原型对象(prototype)中的this->将来调用这个共有函数的.前的某个子对象。——谁调用指谁

\5. 访问器属性中的this->访问器属性所在的当前对象

总结:

\6. 保护对象:

(1). 保护属性:

a. 每个属性包含三个开关:

 1). writable: 控制是否可修改属性值

 2). enumerable: 控制着是否可被for in遍历到，但是只防for in不防.

 3). configurable: 控制

 i. 是否可删除当前属性

 ii. 是否可修改writable和enumerable两个开关

  强调: configurable一旦改为 false，不可逆！

b. 只修改一个属性的多个开关:

 Object.defineProperty(对象名, "属性名",{开关: true/false})

c. 修改多个属性的多个开关:

 Object.defineProperties(对象名,{

  属性名:{ 开关:true/false, ... },

  ... : ...

 })

d. 如果用自定义的规则保护属性时，只能用访问器属性: 2步:

 Object.defineProperties(对象,{

 //1). 先定义一个隐姓埋名且半隐藏的数据属性:

 _属性名:{

  value: 属性的初始值,

  writable:true,

  enumerable:false,

  configurable:false

 },

 //2). 再定义访问器属性保镖冒名顶替要保护的属性

 属性名:{

  get:function(){

   return this._属性名

  },

  set:function(value){ //value ← 要修改的新属性值

   先验证value

   如果验证通过，this._属性名=value

   否则如果验证未通过，不但不保存新属性值，还会报错

  },

  enumerable:true,

  configurable:false

 }

})

外界使用访问器属性时和使用普通属性一样:

对象.属性名

外界试图获取访问器属性值时，自动调用get()

外界试图修改访问器属性值时，自动调用set()

(2). 保护结构: 3个级别

a. 防扩展: Object.preventExtensions(对象)

b. 密封: Object.seal(对象)

c. 冻结: Object.freeze(对象)
\7. 如果没有构造函数，也想创建子对象，继承父对象:

var 新子对象=Object.create(父对象,{

 自有属性:{

  value:属性值,

  开关:true或false,

  ... :...

 },

 ... : { ... }

})

\8. 替换this: 3种:

(1). 在一次调用函数时，临时替换this，首选:
 函数.call(对象, 实参值,...)

(2). 临时替换一次this，但是需要打散数组再传参时，被迫改为:

 函数.apply(对象, 数组)

(3). 创建一个一模一样的新函数并永久绑定this和部分实参值:

 var 新函数名=原函数.bind(对象, 固定实参值, ...)

\9. 数组函数:

(1). 判断:

a. 判断数组中是否所有元素都符合要求:

 var bool=arr.every(function(value,i,arr){

  return 判断条件

 })

b. 判断数组中是否包含符合要求的元素:

 var bool=arr.some(function(value,i,arr){

  return 判断条件

 })

(2). 遍历:

a. 单纯简化for循环变量原数组中每个元素:

 arr.forEach(function(value,i,arr){

  对当前元素执行操作

 })

b. 保护原数组不变，返回遍历加工后的新数组

 var 新数组=arr.map(function(value, i,arr){

  return 加工后的一个新元素值

 })

回调函数需不需要return，就看主函数需不需要返回值

 map一对一修改

day05

一. ES5

\1. 数组新增函数:

(1). 过滤:

 a. 什么是: 复制出数组中符合要求的个别元素，放入新数组中返回。

 b. 如何:

  var 新数组=数组.filter(

  function(当前元素值, 当前下标i, 当前数组){

   return 判断当前元素值是否符合要求

  }

  )

 c. 原理:

1). 内部创建一个新的空数组等待
  2). filter内自带for循环，自动遍历原数组中每个元素

  3). 每遍历一个元素，就自动调用一次回调函数

  4). 每次调用回调函数时，都自动传入三个值:

  i. 当前元素值

  ii. 当前下标i

  iii. 当前数组对象

  5). 在回调函数内，判断当前元素值是否符合要求，并返回判断结果为filter函数

  6). 如果当前元素的判断结果为true，说明当前元素符合条件，则filter会将当前元素追加到新数组中保存

  7). 否则如果当前元素的判断结果为false，说明当前元素不符合要求，则filter什么也不干，继续遍历下一个元素.

 d. 示例: 过滤出数组中的偶数

day04剩余/1_filter.html

    var arr=[1,2,3,4,5];
    //想过滤出数组中的偶数
    var arr2=arr.filter(
      function(元素值){
        console.log(`arr.filter()自动调用一次回调函数。接收到元素值=${元素值}。判断后结果为${元素值%2==0}`)
        return 元素值%2==0
      }
    );
    console.log(arr);
    console.log(arr2);
​
​
运行结果
arr.filter()自动调用一次回调函数。接收到元素值=1。判断后结果为false
arr.filter()自动调用一次回调函数。接收到元素值=2。判断后结果为true
arr.filter()自动调用一次回调函数。接收到元素值=3。判断后结果为false
arr.filter()自动调用一次回调函数。接收到元素值=4。判断后结果为true
arr.filter()自动调用一次回调函数。接收到元素值=5。判断后结果为false
(5) [1, 2, 3, 4, 5]
(2) [2, 4]
(2). 汇总: (仅以求和举例)

 a. 什么是: 对数组中所有元素进行统计，并放回统计结果的函数

 b. 如何:

 var 结果=数组.reduce(

  function(捐款箱, 当前元素值, 当前下标i, 当前数组){

  return捐款箱+当前元素值

  },

  起始值

 )

 c. 原理:

1). 内部创建一个变量，保存汇总的起始值——捐款箱变量
  2). reduce内自带for循环，自动遍历原数组中每个元素

  3). 每遍历一个元素，就自动调用一次回调函数

  4). 每次调用回调函数时，都自动传入4个值:

  i. 捐款箱变量中的临时汇总值

  ii. 当前元素值

  iii. 当前下标i

  iv. 当前数组对象

  5). 在回调函数内，将临时汇总值与当前元素值相加，算出新的汇总值，再返回给reduce

  6). reduce拿到新的汇总值之后，放回捐款箱变量中暂存，为继续累加下一个值做准备。

 d. 示例: 对数组内容求和:

 day04剩余/2_reduce.html

    var arr=[1,2,3,4,5];
    //想统计数组中所有元素的和
    var result=arr.reduce(
      function(捐款箱,当前元素值){
        console.log(`arr.reduce()自动调用一次回调函数。收到捐款箱变量=${捐款箱},当前元素值=${当前元素值}。计算后返回新的临时汇总值${捐款箱+当前元素值}，放回捐款箱变量中`)
        return 捐款箱+当前元素值
      },
      0 //起始值
    );
    console.log(result);//15
​
​
​
运行结果
arr.reduce()自动调用一次回调函数。收到捐款箱变量=0,当前元素值=1。计算后返回新的临时汇总值1，放回捐款箱变量中
arr.reduce()自动调用一次回调函数。收到捐款箱变量=1,当前元素值=2。计算后返回新的临时汇总值3，放回捐款箱变量中
arr.reduce()自动调用一次回调函数。收到捐款箱变量=3,当前元素值=3。计算后返回新的临时汇总值6，放回捐款箱变量中
arr.reduce()自动调用一次回调函数。收到捐款箱变量=6,当前元素值=4。计算后返回新的临时汇总值10，放回捐款箱变量中
arr.reduce()自动调用一次回调函数。收到捐款箱变量=10,当前元素值=5。计算后返回新的临时汇总值15，放回捐款箱变量中
15
二. ES6: (ECMAScript第六个版本)

\1. 模板字符串

 (1). 什么是: 支持换行、动态拼接内容的特殊字符串格式

 (2). 为什么: 旧js中，拼接字符串只能用+，极容易和算术计算的+法计算混淆

 (3). 何时: 今后，只要拼接字符串，一律改为用模板字符串

 (4). 如何: 3句话
 a. 整个字符串用一对儿反引号(ESC键正下方的键)包裹

 b. 在反引号中可以写单引号，双引号，换行等

 c. 在反引号中凡是动态拼接的变量或js表达式都要放在${}中。

 (5). ${}里:

 a. 可以放: 变量、算术计算、三目、对象属性、创建对象、调用函数、访问数组元素——有返回值的合法的js表达式

 b. 不能放: 没有返回值的js表达式，也不能放分支、循环等程序结构。比如: if  else  for  while...等

\2. 箭头函数:

 (1). 什么是: 对绝大多数匿名函数的简写

 (2). 为什么: 反复写function，很繁琐

 (3). 何时: 今后几乎所有匿名函数都可用箭头函数简化

 (4). 如何: 3句话:

 a. 去掉function，在()和{}之间加=>

 b. 如果只有一个形参，则可以省略()

 c. 如果函数体只有一句话，则可以省略{}

  如果函数体仅剩的一句话还是return，则必须去掉return

 (5). 示例: 将各种function改为箭头函数:

-----没有this可随便修改成箭头函数

 2_function.html

  <script>
    function add(a,b){
      return a+b;
    }
    console.log(add(3,5));//8
​
    var arr=[12,123,23,1,3,2];
    arr.sort(function(a,b){return a-b});
    console.log(arr);

    var arr=["亮亮","楠楠","东东"];
    arr.forEach(function(elem){
      console.log(`${elem} - 到!`)
    })
​
    var arr=[1,2,3];
    var arr2=arr.map(function(elem){
      return elem*2;
    })
    console.log(arr2);
​
    var arr=[1,2,3,4,5];
    var sum=arr.reduce(function(box,elem){
      return box+elem;
    },0)
    console.log(sum);
​
    (function(){
      var t=new Date();
      console.log(`页面内容加载完成,at:${t.toLocaleString()}`)
    })();
​
    var t=5;
    var timer=setInterval(function(){
      t--;
      console.log(t);
      if(t==0){
        console.log("boom!!!")
        clearInterval(timer);
      }
    },1000)
​
​
​
运行结果
8
 (6) [1, 2, 3, 12, 23, 123]
亮亮 - 到!
楠楠 - 到!
东东 - 到!
 (3) [2, 4, 6]
15
页面内容加载完成,at:2021/7/6 上午11:34:22
4
3
2
1
0
boom!!!

        // function add(a,b){
    //   return a+b;
    // }
    var add=(a,b)=>a+b;
    console.log(add(3,5));//8
​
    var arr=[12,123,23,1,3,2];
    arr.sort((a,b)=>a-b);
    console.log(arr);

    var arr=["亮亮","楠楠","东东"];
    arr.forEach(
      elem=>console.log(`${elem}-到!`)
    );
​
    var arr=[1,2,3];
    var arr2=arr.map(elem=>elem*2)
    console.log(arr2);
​
    var arr=[1,2,3,4,5];
    var sum=arr.reduce(
      (box,elem)=>box+elem,0)
    console.log(sum);
​
    (()=>{
      var t=new Date();
      console.log(`页面内容加载完成,at:${t.toLocaleString()}`)
    })();
​
    var t=5;
    var timer=setInterval(()=>{
      t--;
      console.log(t);
      if(t==0){
        console.log("boom!!!")
        clearInterval(timer);
      }
    },1000)
​

运行结果
8
 (6) [1, 2, 3, 12, 23, 123]
亮亮 - 到!
楠楠 - 到!
东东 - 到!
 (3) [2, 4, 6]
15
页面内容加载完成,at:2021/7/6 上午11:34:22
4
3
2
1
0
boom!!!
所有的变量在访问时都不加   .

 (6). 箭头函数与this(*)
 a. 箭头函数可让函数内的this与函数外的this保持一致！

 b. 所以:

  1). 今后，如果函数中就不包含this，或刚好希望函数内的this与外部this保持一致时，就可以改为箭头函数

  2). 今后，如果反而不希望函数内的this与函数外的this保持一致时，都不能改为箭头函数。

   比如: 对象中的方法就不能改为箭头函数。

   解决: ES6中为对象的方法定义提供了一种专门的不带function的简写。

   如何:

    var 对象名={
​     属性名: 属性值，

     方法名(){ ...  this.属性名 ... }
​    }

   强调: 既不带:function，又不要加=>。

   好处: 既省略了function，但是又不等同于箭头函数，不会影响内部的this！

 c. 示例: 使用箭头函数和ES6对象方法简写去掉程序中function

 3_arrow_this.html

    var lilei={
      sname:"Li Lei",
      friends:["亮亮","楠楠","东东"],
      // intr:function(){
      intr(){
        //遍历当前对象的friends数组中每个人名
        this.friends.forEach(
          //n依次获得每个人名
          (n)=>{
            console.log(`${this.sname}认识${n}`);
          }
        )
      }
    }
​
    lilei.intr();
​
​
​
运行结果
Li Lei认识亮亮
Li Lei认识楠楠
Li Lei认识东东
![image-20210706194903412](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210706194903412.png)

\3. let

 (1). 问题: var的两个问题:

 a. 会被声明提前——打乱程序正常的执行顺序

 b. 没有块级作用域——代码块内的变量会超出代码块的范围，影响外部的变量

   块级作用域: 指除了对象{}和function的{}之外，其余if else、for、等程序结构的{}范围，在其他语言中称为块级作用域。但是，在js中这些{}，都不是作用域。拦不住内部的局部变量声明被提前。

 (2). 解决: 今后，只要声明变量，都推荐使用let代替var。

 (3). 优点: 2个:

 a. 不会被声明提前——保证程序顺序执行

 b. 让程序块，也变成了块级作用域。——保证块内的变量，不会影响块外的变量。

 (4). let本质: 底层会被翻译为匿名函数自调

 (5). let的三个小脾气:

 a. 因为不会声明提前，所以不能在声明变量之前，提前使用该变量。

 b. 在相同作用域内，禁止声明两个同名的变量！

 c. 因为let底层相当于匿名函数自调，所以，即使在全局创建的let变量，在window中也找不到！

 (6). 示例: 使用let和匿名函数自调解决var的问题，并测试let的小脾气

 4_var.html

    //全局变量t，来记录程序的执行时间
    var t=0;
    //第一个函数，执行，耗时0.8s
    function fun1(){
      //var t;//undefined
      //fun1中有了局部变量t
      //今后再操作t时，就不会去全局找了！而是所有操作都作用在局部变量t上了。
​
      console.log(`执行任务1，耗时0.8s`);
      //将fun1的执行时间累加到全局变量t上
      t+=0.8;//因为fun1中有局部变量t，所以，0.8被加到了局部变量t上，而没有加到全局t上。
​
      //后来，在fun1中添加如下代码
      //因为if后条件为false，所以if内的代码根本没执行！
      if(false){//不是作用域
        var t=new Date();
        //var t;//被提前到当前函数的顶部
        //t=new Date();
        console.log(`上线时间:${t.toLocaleString()}`)
      }
    }
    //第二个函数，执行，耗时0.3s
    function fun2(){
      console.log(`执行任务2，耗时0.3s`)
      //将fun2的执行时间累加到全局变量t上
      t+=0.3;
    }
    fun1();
    fun2();
    console.log(`共耗时:${t}s`);//1.1
​
​
​
运行结果
执行任务1，耗时0.8s
执行任务2，耗时0.3s
共耗时:0.3s
4_let.html

    //全局变量t，来记录程序的执行时间
    var t=0;
    //第一个函数，执行，耗时0.8s
    function fun1(){
      console.log(`执行任务1，耗时0.8s`);
      //将fun1的执行时间累加到全局变量t上
      t+=0.8;//因为fun1中暂时没有局部变量t，所以t+=0.8，给了全局的t变量。
​
      //后来，在fun1中添加如下代码
      //因为if后条件为true，所以if内的代码会执行！
      if(true){//也成了一级作用域
        //局部t,只能在{}范围内使用，与{}外部的t，毫无关系！
        let t=new Date();//不会被声明提前
        console.log(`上线时间:${t.toLocaleString()}`)
      }
    }
    //第二个函数，执行，耗时0.3s
    function fun2(){
      console.log(`执行任务2，耗时0.3s`)
      //将fun2的执行时间累加到全局变量t上
      t+=0.3;
    }
    fun1();
    fun2();
    console.log(`共耗时:${t}s`);//1.1
​
​
​
运行结果
执行任务1，耗时0.8s
上线时间:2021/6/4下午2:35:45
执行任务2，耗时0.3s
共耗时:1.1s
​
​
​
​
​
​
​
    //全局变量t，来记录程序的执行时间
    var t=0;
    //第一个函数，执行，耗时0.8s
    function fun1(){
      console.log(`执行任务1，耗时0.8s`);
      //将fun1的执行时间累加到全局变量t上
      t+=0.8;//因为fun1中暂时没有局部变量t，所以t+=0.8，给了全局的t变量。
​
      //后来，在fun1中添加如下代码
      //因为if后条件为true，所以if内的代码会执行！
      if(true){//也成了一级作用域
        (function(){
          //局部t,只能在{}范围内使用，与{}外部的t，毫无关系！
          var t=new Date();//不会被声明提前
          console.log(`上线时间:${t.toLocaleString()}`)
        })();
      }
    }
    //第二个函数，执行，耗时0.3s
    function fun2(){
      console.log(`执行任务2，耗时0.3s`)
      //将fun2的执行时间累加到全局变量t上
      t+=0.3;
    }
    fun1();
    fun2();
    console.log(`共耗时:${t}s`);//1.1
​
​
​
    console.log(a);//undefined
    var a=10; //var a;被声明提前
    console.log(a);//10
​
    // console.log(b);//ReferenceError: Cannot access 'b' before initialization
    // let b=10;//初始化: 第一次声明变量并赋值
    // console.log(b);
​
    var a=100;
    console.log(a);//100
​
    // let a=100;//Uncaught SyntaxError: Identifier 'a' has already been declared
    // console.log(a);
​
    //(function(){
    let b=10;
    console.log(b);
    console.log(window);
    //})()
​
运行结果
执行任务1，耗时0.8s
上线时间:2021/6/4下午2:35:45
执行任务2，耗时0.3s
共耗时:1.1s
\4. for of

 (1). 问题: 遍历数字下标的数组或类数组对象

a. 普通for循环:

  1). 优点: 既可遍历索引数组，又可以遍历类数组对象(arguments)

  2). 缺点: 没有可简化的空间

b. forEach:

  1). 优点: 可以配合ES6的箭头函数，很简化

  2). 缺点: 无法用于遍历类数组对象

 (2). 解决: 今后只要遍历数字下标的东西，都可用for of代理普通for循环和forEach

 (3). 如何:

 for(var 变量 of  索引数组/类数组对象){
  //of会依次取出数组或类数组对象中每个属性值
  //自动保存of前的变量中

 }

 (4). for of的问题:

 a. 无法获得下标位置i，只能获得元素值

 b. 无法控制遍历的顺序或步调

 (5). 因为绝大多数循环，都是从头到尾，一个挨一个遍历的，且绝大多数循环不太关心下标位置，只关心元素值，所以for of将来用的还是非常多的！
 (6). for of 和 for  in

![image-20210706195413369](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210706195413369.png)

 (7). 示例: 使用for of点名，并实现计算任意多个数字的和

    var arr=["亮亮","楠楠","东东"];
    // for(var i=0;i<arr.length;i++){
    //   console.log(`${arr[i]} - 到!`)
    // }
    // arr.forEach(function(tname){
    //   console.log(`${tname} - 到!`)
    // })
    // arr.forEach(t=>console.log(`${t} - 到!`));
    for(var t of arr){
      console.log(`${t} - 到!`)
    }
​
    //定义一个函数，求任意多个数字的和
    function add(               ){
    // arguments[               ]
      var result=0;
      // for(var i=0;i<arguments.length;i++){
      //   result+=arguments[i]
      // }
      // arguments.forEach(function(n){
      //   result+=n;
      // })//Uncaught TypeError: arguments.forEach is not a function
      for(var n of arguments){
        result+=n;
      }
      return result;
    }
    console.log(add(1,2,3));//6
    console.log(add(1,2,3,4,5));//15
​
​
​
运行结果
亮亮 - 到!
楠楠 - 到!
东东 - 到!
6
15
 6_for_of.html

\5. 参数增强:

(1). 参数默认值(default):

 a. 什么是: 调用函数时，即使不传入实参值，形参变量也有默认值可用，不至于是undefined。

 b. 何时: 今后，只要希望即使不传入实参值时，形参变量也有默认值使用时

 c. 如何: 定义函数时:

  function 函数名(形参1=默认值1, 形参2=默认值2, ...){

   //调用函数时，给形参传了实参值，则首选用户传入的实参值。如果没有给形参传是实参值，则形参默认启用=右边的默认值。

  }

 d. 问题: 参数默认值不支持，只更换中间某个参数，其余参数保持默认的情况。

 e. 解决: (未完待续...)

 f. 示例: 使用参数默认值解决自我介绍和订套餐问题

 7_default.html

  <script>
    //输出自我介绍
    function intr(str="主人很懒，什么也没留下"){
      console.log(`我的自我介绍是:${str}`)
    }
    intr("you can you up!");
    intr();
​
    //定义一个点套餐的函数: (暂不支持单点)
    function order(zhushi="香辣鸡腿堡",xiaochi="辣翅",yinliao="可乐"){
      console.log(`
      您点的套餐是:
        主食:${zhushi},
        小吃:${xiaochi},
        饮料:${yinliao}
      `)
    }
    //第一个人
    order("劲脆鸡腿堡","土豆泥","雪碧");
    //第二个人
    order();
    //第三个人: 只想换主食，其它两个保持默认
    order("巨无霸");
    //第四个人: 只想换小吃，其它两个保持默认
    // order(,"鸡米花")//不支持
    // order(undefined,"鸡米花")//不好
    //(未完待续...)
  </script>
</body>
</html>
运行结果
我的自我介绍是:you can you up!
我的自我介绍是:主人很懒，什么也没留下
      您点的套餐是:
        主食:劲脆鸡腿堡,
        小吃:土豆泥,
        饮料:雪碧
      您点的套餐是:
        主食:香辣鸡腿堡,
        小吃:辣翅,
        饮料:可乐
      您点的套餐是:
        主食:巨无霸,
        小吃:辣翅,
        饮料:可乐
(2). 剩余参数(rest)

 a. 问题: 箭头函数不支持arguments，如果箭头函数遇到参数个数不确定时，怎么办？

 b. 解决: 今后，只要在ES6箭头函数中碰到参数个数不确定的情况，都要用剩余参数语法来代替arguments

 c. 如何: 定义函数时

       收集

       \ ↓ /

  var 函数名=( ...数组名 )=>{
   //将来传入函数的所有实参值，都会被...收集起来，保存到...会指定的数组中。
  }

 d. 优点:

  1). 支持箭头函数

  2). 生成的数组是纯正的数组类型，所以使用数组家所有函数

  3). 自定义数组名，比arguments简单的多！

 e. 其实，...可以和其它形参配合使用，只获得其它形参不要的，剩余参数。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml5500\wps2.png)     实参值1,实参值2,除实参值1、2之外其余实参

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml5500\wps3.png)![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml5500\wps4.png)

  var 函数名=(形参1, 形参2,...数组名)=>{

  }

 f. 示例: 使用剩余参数语法计算多个数字的和，并计算员工的总工资:

 8_rest.html

  <script>
    //定义一个函数，求任意多个数字的和
    var add=(...arr)=>{
      return arr.reduce(
        function(捐款箱,n){
          return 捐款箱+n
        },
        0 //起始值
      );
      // return arr.reduce((捐款箱,n)=>捐款箱+n,0)
    }
    console.log(add(1,2,3));//6
    console.log(add(1,2,3,4,5));//15

    //定义计算总工资的函数
    //要求输入员工姓名和多项工资
    //每个人的工资组成各不相同
    //              姓名   除姓名之外的其余
    //               ↓      ↓
    function jisuan(ename, ...arr){
      console.log(arr);
      var total=arr.reduce(
        function(捐款箱,n){
          return 捐款箱+n
        },
        0
      );
      console.log(
        `${ename}的总工资是:${total}`);
      // console.log(`${ename}的总工资是:${
      //   arr.reduce((捐款箱,n)=>捐款箱+n,0)  
      // }`)
    }
    jisuan("lilei",10000,1000,2000);
    jisuan("hmm",3000,500,1000,2000,3000)
  </script>
</body>
</html>
运行结果
6
15
(3) [10000, 1000, 2000]
lilei的总工资是:13000
(5) [3000, 500, 1000, 2000, 3000]
hmm的总工资是:9500
总结:

(3). 过滤: 复制出数组中符合要求的元素放入新数组返回

 var 新数组=arr.filter(function(value,i,arr){

  return 判断条件

 })

(4). 汇总: 遍历数组中每个元素，经过求和或其他汇总方式，统计出一个最终结论

 var 结果=arr.reduce(function(box,value,i,arr){

  return box和value计算出的新临时汇总值

 }, 起始值)

\10. ES6:

(1). 模板字符串: 今后，只要拼接字符串，都用模板字符串代替+:

a. 整个字符串包裹在一对儿反引号...中

b. 反引号``中支持换行、""、''均可使用

c. 反引号中需要动态生成的内容必须放在${}里

d. ${}里:

 1). 可以放一切有返回值的合法的变量或js表达式。

 2). 不能放程序结构(分支和循环)以及没有返回值的js表达式

(2). let: 今后，阻值变量声明提前或控制变量不要超出块作用域，都用let代替var

a. let的好处:

 1). 阻止声明提前

 2). 让代码块(分支和循环的{})也变成块级作用域，{}块内的变量出了{}无法使用，不会影响外部

b. let的小脾气:

 1). 在同一作用域内禁止重复声明;

 2). 禁止提前使用;

 3). 在全局声明也不保存在window中

c. let的原理: 匿名函数自调

(3). 箭头函数: 今后，几乎所有的function都可用箭头函数简写:

a. 如何: 3句话:

1). 去掉function，在()和{}之间加=>

2). 如果只有一个形参，可省略()

3). 如果函数体只有一句话，可省略{}

 如果仅有的一句话还是return，必须省略return

b. 特点: 箭头函数内部的this与外部的this，保持一致。

c. 今后:

1). 如果函数中没有this或者恰好希望函数内this与函数外this保持一致时，可用箭头函数简写！

2). 如果不希望内外this相同时不能使用箭头函数简写。

(4). for of: 今后只要遍历数字下标的索引数组、类数组对象和字符串，都用for of

  for in: 今后只要遍历自定义下标名称的对象和关联数组都用for in

![image-20210706201904086](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210706201904086.png)

(5). 参数增强:

a. 参数默认值: 定义函数时最后一个形参不确定有没有实参时

function 函数名(形参1, ..., 最后形参=默认值){

 ... ...

}

b. 剩余参数: 定义函数时: 只要多个形参不确定，都用剩余参数

function 函数名(其它形参, ...数组名){

 //...收集除其它形参外多余的实参值保存到指定数组名的数组中

}

总结: this  5种:

\1.obj.fun()  this->点前的obj对象 比如，    lilei.intr() this->lilei

\2. new Fun()  this->new正在创建的新对象

\3. 类型名.prototype.共有方法=function(){ ... }

 this->将来谁调用这个函数，就指谁

 将来调用这个函数的.前的某个子对象

\4. fun() 和 回调函数 和 匿名函数自调 this->默认指window

\5. 访问器属性中的this->当前访问器属性所在的对象

day06

\1. ES6

  <script>
    function jisuan(base,bonus1,bonus2){
      console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`)
    }
    var lilei={ename:"Li Lei"};
    jisuan.call(lilei,10000,1000,2000);//可以替换this

    var jisuan=(base,bonus1,bonus2)=>{
      console.log(this);
      console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`)
    };
    var lilei={ename:"Li Lei"};
    jisuan.call(lilei,10000,1000,2000);//无法替换this

    var jisuan=function(base,bonus1,bonus2){
      console.log(this);
      console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`)
    }.bind(this);//箭头函数底层相当于bind()永久绑定this
    var lilei={ename:"Li Lei"};
    jisuan.call(lilei,10000,1000,2000);
  </script>
</body>
</html>
运行结果
Li Lei的总工资是:13000
Window
undefined的总工资是:13000
Window
undefined的总工资是:13000
\1. 参数增强:

 (1). 参数默认值(已讲)

 (2). 剩余参数(已讲): 定义函数时:

             收集

             \ ↓ /

  var 函数名=(形参1,形参2, ...数组名)=>{}

 (3). 展开运算符(spread)

 a. 问题: 有时，我们单纯只想拆散数组，不想替换this。但是apply拆散数组时，强迫我们必须提供一个替换this的对象。

 b. 原因: apply()本职工作不是拆散数组，而是替换this。是在替换this同时，顺便拆散数组。

 c. 解决: 今后，只要希望单纯拆散数组，都用...展开运算符

 d. 如何: 调用函数时:

  函数名(...数组);

     /...\

     拆散

 e. 原理: ...先将数组拆散为多个实参值，再依次分别传给函数的每个形参变量。

 f. ... :

  1). 定义函数时，形参列表中的...，表示收集

  2). 调用函数时，实参列表中的...，反而表示拆散

 g. 示例: 获取数组中的最大值:

 day05剩余/2_spread.html

  <script>
    var arr=[1,7,2,5];
    //想找出数组中的最大值
    //错误:
    console.log(Math.max(1,7,2,5));//7
    console.log(Math.max(arr));//NaN
    //不好:
    console.log(
      Math.max.apply(null, arr),
      Math.max.apply(arr, arr),
      Math.max.apply("", arr),
      Math.max.apply(Math, arr)
    );
    //好的:
    console.log(Math.max(...arr));
  </script>
</body>
</html>
运行结果
7
NaN
7 7 7 7
7
 h. 语法糖: (时髦的简写)

  1). 复制一个数组: var arr2=[...arr1];

  2). 合并多个数组和元素:

   var arr3=[...arr1, 元素2, ...arr2, 元素3]

  3). 克隆一个对象: var obj2={...obj1};

  4). 合并多个对象和属性:

   var obj3={

  ...obj1, 属性名:属性值, ...obj2, 属性名:属性值

  }

  5). 示例: 使用语法糖简写常用操作：

  day05剩余/2_spread2.html

  <script>
    //复制一个数组
    var arr1=[1,2,3];
    var arr2=[...arr1];
    console.log(arr2);
    console.log(arr1==arr2);//false

    //合并多个数组和元素
    var arr1=[1,2,3];
    var arr2=[5,6,7];
    //希望得到arr3=[1,2,3,4,5,6,7,8]
    var arr3=[...arr1, 4, ...arr2, 8];
    console.log(arr3);

    //克隆一个对象:
    var lilei={
      sname:"Li Lei",
      sage:11
    }
    var lilei2={...lilei};
    console.log(lilei2);
    console.log(lilei==lilei2);//false

    //合并多个对象和属性
    var obj1={x:1,y:2};
    var obj2={m:4,n:5};
    //想获得obj3={x:1,y:2,z:3,m:4,n:5,i:6};
    var obj3={...obj1,z:3,...obj2,i:6};
    console.log(obj3);
  </script>
</body>
</html>
运行结果
(3) [1, 2, 3]
false
 (8) [1, 2, 3, 4, 5, 6, 7, 8]
{sname: "Li Lei", sage: 11}
false
{x: 1, y: 2, z: 3, m: 4, n: 5, i:6 }
\2. 解构(destruct):

 (1). 问题: 旧js中，要想使用对象中的成员，或数字中的元素，都必须带着"对象名."或"数组名[]"前缀。但是，实际开发中，对象或数组的嵌套结构可能很深。前缀就可能写很长: "对象名.子对象名.子对象名...."，非常麻烦。

 (2). 解决: 今后，遇到一个复杂的对象或数组时，都可以通过解构方式，来减少数组或对象的嵌套结构便于使用。

 (3). 如何: 3种:

 a. 数组解构:

  1). 什么是: 从一个复杂的数组中只提取出需要的元素单独使用

  2). 如何: 2步合为一步:

  i. 先装扮: var [变量1, 变量2, ...]

  ii. 再赋值:          =数组

  iii. 合为一步: var [变量1, 变量2, ...] =数组

           0    1

  3). 结果: 下标对下标: =右边数组中相同下标位置的元素值会自动赋值给=左边相同下标位置的变量

   变量1=数组[0];

   变量2=数组[1];

   ... ...

  4). 示例: 从数组中解构出年、月、日

  1_destruct_arr.html

  <script>
    var arr=[2021,6,7,9,33];
            //0   1 2 3 4
    // //仅提取出arr数组中年、月、日三个值单独使用
    // var [y,m,d]=arr;
    //      0 1 2
    //如果不想要年，只想要月和日
    var [ ,m,d]=arr;
    //   0 1 2

    // console.log(`今年是${y}年`);
    console.log(`本月是${m}月`);
    console.log(`今天是${d}号`);
  </script>
</body>
</html>
运行结果
本月是6月
今天是7号
b. 对象解构:

  1). 什么是: 从一个大的对象中只提取出个别属性值单独使用。

  2). 如何: 2步合为一步

         配对儿  接值  配对儿  接值

  i. 先装扮: var { 属性名1:变量1, 属性名2:变量2,... }

  ii. 再赋值: =对象

  iii. 两步合为一步:

  var { 属性名1:变量1, 属性名2:变量2,... }=对象

  3). 结果: 属性对属性

  变量1=对象.属性名1

  变量2=对象.属性名2

  4). 问题: 原对象中的原属性，属性名已经起的很好了，多数情况不需要改名！但是，又不希望把相同的名字在:左右两边写两遍。

  5). 解决: ES6为这种特殊情况提供了专门的简写:

   如果:左边的属性名刚好和:右边的变量名相同，则只需要写一个即可！

   但是，一个名字两用: 既当做配对儿的属性名，又当做接值的变量名。

   //一个名字两用

   //既当属性名，配对

   //又当变量名，接值

   var {属性名1, 属性名2, ...}=对象

  6). 问题: 如果试图解构的属性名在=右边的对象中不存在，会怎样？

  7). 答: 不会报错！而是=左边配对失败的属性名默认接到undefined。

  8). 示例: 解构出对象中的姓名和年龄单独使用

  2_destruct_obj.html

  <script>
    var lilei={
      sname:"Li Lei",
      sage:11
    }
    // //   属性名  变量名
    // //   配对儿  接值
    // var {sname : sname,  sage:sage}=lilei;
    //一个名字两用
    //既当属性名
    //    配对儿
    //又当变量名
    //    接值
    var {sname, sage, className}=lilei;

    console.log(`姓名:${sname}`)
    console.log(`年龄:${sage}`)
    console.log(`班级:${className}`);
  </script>
</body>
</html>
运行结果
姓名:Li Lei
年龄:11
班级:undefined
 c. 参数解构:

  1). 问题: 单靠参数默认值，无法解决任意一个形参不确定有没有的情况。

  2). 解决: 今后只要发现任意一个实参值都可能没有，但是又要求实参值必须传给指定的形参，顺序不能乱，都可用参数解构:

  3). 如何: 2步:

  i. 定义函数时:

   function 函数名({

   //配对儿 : 接实参值

   属性名1: 形参1,
   属性名2: 形参2,

   ... : ...

   }){
  函数体
   }

  ii. 调用函数时:

   函数名({

   //配对儿
   属性名1: 实参值1,

   属性名2: 实参值2,

   ... : ...
   })

  4).简写: 定义函数时，形参列表中，属性名和形参名起相同名字，那么，只写一个名字即可

  function 函数名({

   //一个名字两用

   //既配对儿

   //又接实参值

)   属性名1=默认值1,
   属性名2=默认值2,

   ... : ...

   }){
  函数体
   }
   //调用时:

   函数名({

   //配对儿
   属性名1: 实参值1,

   属性名2: 实参值2,

   ... : ...
   })

  5). 示例:定义订套餐函数，用户可任意更换套餐中菜品

  3_destruct_params.html

  <script>
    //定义一个点套餐的函数: (暂不支持单点)
    function order({
      // zhushi:zhushi,
      // xiaochi:xiaochi,
      // yinliao:yinliao
      //简写:
      //一个名字两用
      //既当属性名配对儿
      //又当形参名接实参值
      zhushi="香辣鸡腿堡",
      xiaochi="辣翅",
      yinliao="可乐"
    }){
      console.log(`
      您点的套餐是:
        主食:${zhushi},
        小吃:${xiaochi},
        饮料:${yinliao}
      `)
    }
    //第一个人
    order({
      zhushi:"劲脆鸡腿堡",
      xiaochi:"土豆泥",
      yinliao:"雪碧"
    });
    //第二个人
    order({});
    //第三个人: 只想换主食，其它两个保持默认
    order({
      zhushi:"巨无霸"
    });
    //第四个人: 只想换小吃，其它两个保持默认
    // order(,"鸡米花")//不支持
    // order(undefined,"鸡米花")//不好
    order({
      xiaochi:"鸡米花"
    })
  </script>
</body>
</html>
运行结果
      您点的套餐是:
        主食:劲脆鸡腿堡,
        小吃:土豆泥,
        饮料:雪碧

      您点的套餐是: 
        主食:香辣鸡腿堡,
        小吃:辣翅,
        饮料:可乐
      
      您点的套餐是: 
        主食:巨无霸,
        小吃:辣翅,
        饮料:可乐
      
      您点的套餐是: 
        主食:香辣鸡腿堡,
        小吃:鸡米花,
        饮料:可乐
![image-20210707193159280](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210707193159280.png)

\3. class

 (1). 问题: 旧js中，构造函数和原型对象是分开定义的。不符合"封装"概念

 (2). 解决: 今后，只要在es6中创建一种新的类型，包含构造函数+原型对象方法，都要用class来创建

 (3). 什么是class: 程序中专门集中保存一种类型的所有子对象的统一属性结构和方法定义的程序结构。

 (4). 如何定义class: 3句话:

 a. 用class{}包裹原构造函数+原型对象方法
 b. 原构造函数名升级为整个class的名字，所有构造函数统一更名为"constructor"

 c. 原型对象中的方法，不用再加prototype前缀，也不用=function，直接简写为: 方法名(){ ... ...}

  直接放在class{}内的方法定义，其实还是保存在原型对象中的。

 (5). 如何使用class: 和使用旧的构造函数完全一样:

  var 对象名=new  class名(属性值,...);

 (6). 本质: 新瓶装旧酒，换汤不换药：

 a. 构造函数中的属性，依然会成为子对象的自有属性

 b. 直接定义在class中的方法，依然保存在子对象的原型对象中

 c. 子对象依然使用_proto_指向原型对象

 (7). 示例:定义学生类型class

 4_class.html

  <script>
    //想定义学生类型，描述所有学生的统一结构和功能
    class Student{
      constructor(sname, sage){
        this.sname=sname;
        this.sage=sage;
      }

      intr(){
        console.log(`I'm ${this.sname}, I'm ${this.sage}`);
      }
    }

    //创建一个学生类型的对象
    var lilei=new Student("Li Lei",11);
    console.log(lilei);
    lilei.intr();
  </script>
</body>
</html>
运行结果
Student {sname: "Li Lei", sage: 11}
  sage: 11
  sname: "Li Lei"
  __proto__:
    constructor: class Student
    intr: ƒ intr()
    __proto__: Object
I'm Li Lei, I'm 11
 (8). 问题: 如果多个子对象共用的相同的属性值，应该放在那里？

 a. 旧js中，是和共有方法一起放在原型对象中

 b. ES6 class中:

  1). 问题: 虽然直接在class中定义的方法，都默认保存在原型对象中。但是直接在class中定义的属性，却不会成为共有属性，不会保存在原型对象中。而是成为每个子对象的自有属性。

  2). 解决: 为了和其它主流开发语言尽量一致，ES6的class放弃了在原型对象中保存共有属性的方式。而是改为用静态属性保存！

  i. 什么是: 不需要创建子对象，单靠类型名就可直接访问的属性，就称为静态属性

  ii. 何时: 今后，在ES6中，如果希望所有子对象，都可使用一个共同的属性值时，都要用静态属性代替原来的原型对象属性

  iii. 如何定义静态属性:

   class 类型名{
  static 共有属性名=属性值

    ... 

    ...
   }

  iv. 如何访问静态属性:

  坑: 错误: this.静态属性

  正确: 类型名.静态属性

  v. 原理:

  标有static的静态属性，都是保存在构造函数对象身上。因为构造函数在程序中不会重复！所以，静态属性，也不会重复！任何是否，任何地点，访问一个类型的静态属性，永远访问的都是同一份！

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28608\wps6.jpg)

 vi. 示例: 使用静态属性替所有子对象保存共用的班级名

  4.1_class_static.html

  <script>
    //想定义学生类型，描述所有学生的统一结构和功能
    class Student{
      //定义静态属性className，可以全班同学共用一个
      static className="初一2班"

      constructor(sname, sage){
        this.sname=sname;
        this.sage=sage;
      }

      // className="初一2班" //不是共有，会变成自有属性

      //默认保存在原型对象中
      intr(){
        console.log(`I'm ${this.sname}, I'm ${this.sage}, I'm from ${Student.className}`);
      }
    }

    //创建一个学生类型的对象
    var lilei=new Student("Li Lei",11);
    var hmm=new Student("Han Meimei",12);
    console.log(lilei);
    console.log(hmm);
    lilei.intr();
    hmm.intr();
    //过了一年，两个学生都升级
    Student.className="初二2班"
    lilei.intr();
    hmm.intr();
    console.log(Student);//不行！默认输出的是Student构造函数的函数体，不是对象结构
    console.dir(Student);//不输出函数的内容，而是输出对象在内存中的存储结构
  </script>
</body>
</html>
运行结果
![image-20210707195335031](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210707195335031.png)

 (9). 两种类型间的继承:

 a. 问题: 两种class之间包含部分相同的属性结构和方法定义

 b. 解决: 两种class类型间继承

 c. 如何: 2大步:

  1). 额外创建一个父级class，2件事:

  i. 父级class的构造函数中包含子类型class中相同部分的属性结构定义

  ii. 父级class的原型对象中包含子类型class中相同部分的方法定义

  iii. 既然父级class中保存了相同的属性结构和方法定义，则子类型class中，就可以删除所有重复的属性结构和方法定义

  iv. 问题: 子类型class的子对象缺少必要的属性，而且有些共有方法也无法使用了！

  2). 让子类型class继承父类型的class，2步:

  i. 设置子类型的原型对象继承父类型的原型对象:

   class 子类型 extends 父类型{ ... }

   原理: 只是设置子类型的原型对象继承父类型的原型对象，只能保证孙子对象可以使用爷爷类型原型对象中的共有方法！暂时无法为孙子对象补全缺少的自有属性.

  ii. 使用super关键字，调用爷爷类型的构造函数。

   原理: super是专门指向爷爷类型构造函数的关键字。调用super()等于爷爷类型的构造函数。调用爷爷类型的构造函数，等效于执行爷爷类型的构造函数中共有的"this.xx=xxx"语句，即可为孙子对象弥补缺少的共有属性结构。

 d. 结果:

  1). 孙子对象可使用3处保存的方法: 自己的，父级class的，爷爷class的

  2). 孙子对象中拥有两处规定的属性：父类型构造函数+爷爷类型构造函数。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28608\wps7.jpg)

 e. 示例: 使用类型间继承，实现飞机大战游戏中敌机和降落伞类型的定义，并创建敌机对象和降落伞对象

 5_class_extends.html

  <script>
    //先定义爷爷class，保存共有属性结构和方法
    class Enemy{
      constructor(x,y){
        this.x=x;
        this.y=y;
      }
      fly(){
        console.log(`飞到x=${this.x},y=${this.y}位置`);
      }
    }
    //定义第一种子类型
    class Plane extends Enemy{
      constructor(x,y,score){
        super(x,y);
        this.score=score;
      }
      getScore(){
        console.log(`击落敌机得${this.score}分`)
      }
    }
    //创建Plane类型的一个飞机对象
    var p1=new Plane(50,100,5);
    console.log(p1);
    p1.fly();//调用爷爷的方法
    p1.getScore();//调用爸爸的方法

    //模仿第一种子类型，定义第二种子类型San
    //并创建San类型的一个子对象s1
    //输出s1对象
    //用s1调用fly()和getAward()
  </script>
</body>
</html>
运行结果：
![image-20210707195840150](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210707195840150.png)

\4. Promise(承诺)

 (1). 什么是: 专门保证多个异步任务必须顺序执行的一种特殊变成方式

 (2). 为什么:

 a. 问题: 在实际开发中，经常需要让多个异步任务顺序执行

 b. 错误: 单纯先后调用多个异步函数,异步函数只要调用就是不可控的

 c. 原因: 异步函数各自执行各自的，互不干扰，互相之间也不会等待。

 d. 不好的解决: 利用回调函数

  1). 如何:

  i. 前一项任务:

   function 前一项任务(购物车){
  异步任务

     异步任务最后一句话之后

     购物车()
   }

  ii. 调用前一项任务时:

   前一项任务(function(){ 下一项任务() })

  2). 问题: 如果要先后执行的任务多了！就会形成很深的嵌套结构——回调地狱。极其不优雅，极其不便于维护

![image-20210818165804420](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210818165804420.png)

  3). 示例: 使用回调函数保证多个异步任务顺序执行

  <script>
    //定义一个形参，准备暂时保存住要执行的下一项任务！
    function liang(购物车){
      //购物车:function(){ tao(...) }
      console.log(`亮起跑...`);
      setTimeout(function(){//异步
        console.log(`亮到达终点!`);
        //亮执行完之后，才自动执行下一项任务
        购物车();
        //function(){ tao(...) }()
        //             ↓
        //            tao(...)
      },6000)
    }
    function tao(购物车){
      //购物车:function(){ dong() }
      console.log(`涛起跑...`);
      setTimeout(function(){//异步
        console.log(`涛到达终点!`);
        //涛执行完之后
        购物车();
        //function(){ dong() }()
        //             ↓
        //            dong()
      },4000)
    }
    function dong(){
      console.log(`东起跑...`);
      setTimeout(function(){//异步
        console.log(`东到达终点!`);
      },2000)
    }
//先liang抱住tao
    liang(
      function(){
        tao(
          function(){
            dong()
          }
        )
      }
    );

  </script>
</body>
</html>
运行结果
亮起跑...
亮到达终点!
涛起跑...
涛到达终点!
东起跑...
东到达终点!
 (3). 好的解决: 今后，只要多个异步任务必须顺序执行时，都要用promise技术来代替回调函数方式

 a. 如何: 2步:

  1). 定义前一项任务时:

  function 前一项任务(){
  return new Promise(

  //    赠
​    function(开关){
​   原异步任务

      异步任务最后一句话

      调用开关()//->通.then()，自动执行.then中的下一项任务
​    }
   )
  }

  2). 连接前后两个异步任务：

  前一项任务().then( 后一项任务 )

  强调: 之后的任务一定不要加()，加()表示立刻执行。而我们不希望后边的任务立刻执行

*.如何:
(0)．所有异步函数不要加回调函数参数了! 。

(1).用new Promise(function(door){ ...})包裹住原来的异步函数代码。强调:原异步函数不需要做任何改变.

(2)．在原异步函数最后执行的一句话之后，调用door开门!。
结果:自动执行.then()中串联的后续任务(下一个格子间，也可能是下一个函数).

(3).new Promise()是放在函数内创建的，所以，如果希望外部直到这里有一个格子间的对象可以串联，必须用return new Promise()将其返回到函数外部!.

function前一项异步函数(){-
 return new Promise(function(door){
  原异步函数内容.
  异步函数最后一句话之后: door();

 })

}

(4)调用return new Promise（）所在的异步任务函数，既可以执行异步函数的任务，又可以返回格子间，可用和.then（）与下一个任务串联

 前一个任务（）.then（下一项任务）

//下一项任务不要加（），因为不是立刻执行

（5）多一个异步任务串联：任务1（）.then（任务2）.then（任务3）

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28608\wps17.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28608\wps18.jpg)

 b. 前后两个任务之间传参: 2步:

  1). 前一项任务:

   function 前一项任务(){
  return new Promise(

  //    赠
​    function(开关){

   var 变量=值
​   原异步任务

      异步任务最后一句话

      调用开关( 变量 )//->通.then()，自动执行.then中的下一项任务
​    }
   )
   }

  2). 后一项任务:

  function 后一项任务(形参){
  //形参=前一项任务中的变量值
  }

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28608\wps22.jpg)

  c. 示例: 使用Promise模拟接力跑传接力棒:

  <script>
    function liang(){
      return new Promise(
        //       赠
        //        ↓
        //       开关
        function(open){
          var bang="接力棒"
          console.log(`亮拿着${bang}起跑...`);
          setTimeout(function(){//异步
            console.log(`亮拿着${bang}到达终点!`);
            //在前一项任务结束后，开开关
            open(bang);
          },6000)
        }
      )
    }

    function tao(bang){
      return new Promise(
        //       赠
        //       ↓
        //       开关
        function(open){
          console.log(`涛拿着${bang}起跑...`);
          setTimeout(function(){//异步
            console.log(`涛拿着${bang}到达终点!`);
            //涛执行完之后，开开关
            open(bang);
          },4000)
        }
      )
    }

    function dong(bang){
      console.log(`东拿着${bang}起跑...`);
      setTimeout(function(){//异步
        console.log(`东拿着${bang}到达终点!`);
      },2000)
    }

    liang()      .then(tao)    .then(dong)
    //return        return
    //new Promise() new Promise()

  <script>
    function liang(){
      return new Promise(
        //       赠
        //        ↓
        //       开关
        function(open){
          var bang="接力棒"
          console.log(`亮拿着${bang}起跑...`);
          setTimeout(function(){//异步
            console.log(`亮拿着${bang}到达终点!`);
            //在前一项任务结束后，开开关
            open(bang);
          },6000)
        }
      )
    }

    function tao(bang){
      return new Promise(
        //       赠
        //       ↓
        //       开关
        function(open){
          console.log(`涛拿着${bang}起跑...`);
          setTimeout(function(){//异步
            console.log(`涛拿着${bang}到达终点!`);
            //涛执行完之后，开开关
            open(bang);
          },4000)
        }
      )
    }

    function dong(bang){
      console.log(`东拿着${bang}起跑...`);
      setTimeout(function(){//异步
        console.log(`东拿着${bang}到达终点!`);
      },2000)
    }

//  先调用（加圆括号）    等待           等待
    liang()      .then(tao)    .then(dong)
    //return        return
    //new Promise() new Promise()

  </script>
</body>
</html>
运行结果
亮拿着接力棒起跑...
亮拿着接力棒到达终点!
涛拿着接力棒起跑...
涛拿着接力棒到达终点!
东拿着接力棒起跑...
东拿着接力棒到达终点!
   d. 错误处理: 2步

   1). 前一项任务:

   function 前一项任务(){
  return new Promise(

  //    赠
​    function(成功的开关, 失败的开关){

   var 变量=值
​   原异步任务

      异步任务最后一句话

      如果异步任务执行成功

       调用成功的开关( 变量 )//->通.then()，自动执行.then中的下一项任务

      否则如果一部任务执行失败

       调用失败的开关(错误提示信息)//->通最后的.catch()，后续.then()不再执行。
​    }
   )
   }

  2). 调用时:

  前一项任务().then(下一项任务).then(...).catch(function(错误提示信息){ 错误处理代码 })

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml16980\wps1.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml16980\wps2.jpg)

 e. Promiss对象三大状态:

  1). 当异步任务执行过程中，整个new Promise()对象处于pending(挂起)状态

  2). 当异步任务成功执行完，调用成功的开关函数时，整个new Promise()对象切换为fulfilled(成功)状态，new Promise()会自动调用.then()执行下一项任务

  3). 当异步任务执行出错，调用失败的开关函数时，整个new Promise()对象切换为rejected(出错)状态，new Promise()会自动调用.catch()执行错误处理代码

 f. 其实，行业内:

  1). 正确的开关:  resolve 同意继续

  2). 失败的开关:  reject  拒绝继续

![image-20210708200128219](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210708200128219.png)

 g. 示例:假设有人在跑步过程中摔倒了，要添加错误处理

 8_promise_catch.html

  <script>
    function liang(){
      return new Promise(
        //       赠2个开关
        function(resolve, reject){
          var bang="接力棒"
          console.log(`亮拿着${bang}起跑...`);
          setTimeout(function(){//异步
            if(Math.random()<0.5){
              console.log(`亮拿着${bang}到达终点!`);
              //在前一项任务结束后，开开关
              resolve(bang);
            }else{
              reject("bia~亮摔倒了！")
            }
          },6000)
        }
      )
    }

    function tao(bang){
      return new Promise(
        //       赠2个开关
        function(resolve, reject){
          console.log(`涛拿着${bang}起跑...`);
          setTimeout(function(){//异步
            if(Math.random()<0.5){
              console.log(`涛拿着${bang}到达终点!`);
              //涛执行完之后，开开关
              resolve(bang);
            }else{
              reject("biaji~涛摔倒了!")
            }
          },4000)
        }
      )
    }

    function dong(bang){
      console.log(`东拿着${bang}起跑...`);
      setTimeout(function(){//异步
        console.log(`东拿着${bang}到达终点!`);
      },2000)
    }

    liang()
    .then(tao)
    .then(dong)
    .catch(function(msg){
      console.log(msg);
      console.log(`比赛中断!`)
    })

  </script>
</body>
</html>
运行结果
亮拿着接力棒起跑...
bia~亮摔倒了！
比赛中断!
总结:

c. 打散数组: 今后调用函数时，只要单纯打散数组再传参时

1). 如何: 函数(...数组)

2). ...口诀: 定义函数时...表示收集, 调用函数时...表示打散

3). ...语法糖:

 i. 复制一个数组: var arr2=[...arr1];

 ii. 合并多个数组和元素值: var arr3=[...arr1,值,...arr2,值]

 iii. 复制一个对象: var obj2={ ... obj1 }

 iv. 合并多个对象和属性: var obj3={ ...obj1, 属性:值, ...obj2, 属性:值 }

(6). 解构:

a. 只要想提取出数组中个别元素值，单独使用时，就数组解构:

 [变量1, 变量2]=arr;

b. 只要想提取出对象中个别属性值或方法，单独使用时，就对象解构:

var {属性名也是变量名, 属性名也是变量名}=对象

c. 只要多个参数不确定有没有，又要求实参值必须传给指定的形参时，就参数解构:

定义函数时:

function 函数名({

 属性名也是形参名="默认值",

 属性名也是形参名="默认值",

 ... = ...

}){

 函数体

}

调用函数时:

函数名({

 要修改的形参名: 实参值，

 ... : ... ,

})

(7). class extends

a. 定义class:

class 类型名{

 constructor(形参列表){

  this.属性名=形参;

   ... = ...;

 }

 共有方法(){

  ... this.属性 ...

 }

}

class的底层原理和用法与旧js构造函数用法完全相同！——新瓶装旧酒

b. 继承: 只要两种类型间包含部分相同的属性结构和方法定义，都要额外定义一个父类型集中保存两种类型相同的属性结构和方法定义。然后再让子类型继承父类型

class 子类型 extends 父类型{

 constructor(...){

  super(...);

  this.属性名=形参;

 }

 子类型共有方法(){

  ...

 }

}

两步,两个关键字: extends是继承的意思，super()是调用父类型构造函数，请父类型构造函数帮忙添加相同部分的属性的意思。

e. 错误处理:

1). 前一项任务中:
 new Promise(
  function(door, err){
   异步函数正确执行时:

   door() //-> .then()

   如果异步函数执行出错:

   err("错误信息") //->.catch()
  }
 )

2). 调用时:

 前一项任务()

 .then(下一项任务)

 .then(...)

 ...

 .catch(
  function(形参){
   错误处理代码
   形参接住err()中传来的错误消息
  }
 )

pending,resolve->fulfilled,reject->rejected

f. Promise三大状态:

 (1) 开局: pending状态

 (2) resolve()后: fulfilled状态

 (3) reject()后: rejected状态

promise是处理异步操作的一种解决方案。
promise对象有三个状态：pending、fulfilled、rejected，异步操作的结果是由pending变成fulfilled成功或变成rejected失败。
promise构造函数接受一个函数作为参数，以及该函数的两个参数分别为resolve和reject两个函数。

const promise = new Promise(function(resolve, reject){
    if(success){
        resolve(value);
    }else{
         reject(error);
    }
})

//分别对应promise对象的then()和catch()方法。

promise.then(function(value){
    console.log(success);
}.catch(error){
    console.log(error);
})
Promise.all()方法用于将多个Promise实例，包装成一个新的Promise实例。

const p=Promise.all([p1,p2,p3]);

注：a、只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
b、只要p1、p2、p3之中有一个变成rejected，p的状态就会变成rejected，此时第一个变成reject的实例的返回值，会传递给p的回调函数

Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

const p = Promise.race([p1, p2, p3]);

上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

promise解决了什么问题？
promise解决了多层嵌套回调的问题。
上一个函数请求的输出作为下一个请求的输入，如果网络延迟，下一个请求执行时，很可能上一个请求还没返回值，这样就会导致请求失败。
而用promise.then()方法链式调用可以解决这个问题，当上一个then方法执行完成且成功才会调用下一个then。
缺点：
1.异步加载，延时问题
2.promise一旦创建，就会立即执行，无法取消
(可以手动取消)
//只打印ok1

Promise.resolve().then(() => {
    console.log('ok1')
    return new Promise(()=>{})  // 这样即可，返回“pending”状态的Promise对象
}).then(() => {
    // 后续的函数不会被调用
    console.log('ok2')
}).catch(err => {
    console.log('err->', err)
})

3.then方法每次调用都会创建一个新的promise对象，造成了内存的浪费

## Dom
新规定: 每个案例写3遍

\1. 注释+代码 抄

\2. 保留注释，删掉代码，看着注释把代码补回来

\3. 删掉注释和代码，试着用自己的话，把注释写回来。

标准: 只有自己能独立写出注释，才算会！

day07

id,name:  .  前必须为document

一. 什么是DOM

: Document Object Model

\1. 什么是: 专门操作网页内容的一套对象和函数的总称

\2. 为什么: ES标准中只规定了js语言的核心语法。没有规定如何使用js操作网页的内容。

\3. 何时: 今后，只要想操作网页中的内容时，只能用DOM

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml16980\wps4.jpg)

\4. DOM标准: 国际标准，由W3C负责制定并维护。

  几乎所有浏览器100%兼容

\5. 包括: 5件事: 增删改查+事件绑定

二. DOM树:

\1. 什么是: 一个网页的所有内容，在浏览器内存中，以树形结构保存的

\2. 为什么: 树形结构是最直观的展现上下级包含关系的结构。而网页内容中的元素结构，也是上下级包含关系。

\3. 如何:

 (1). 只要浏览器读取到一个网页的内容，都会先在内存中创建一个唯一的树根节点对象: document

 (2). 浏览器扫描网页内容，每扫描到一项内容(元素、文本、属性...)，就会自动创建一个新的节点对象(Node)，保存当前这一项内容的属性和值。然后将新创建的节点对象，保存到DOM树上对应的位置。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml16980\wps5.jpg)

三. 查找元素:

4大类查找方式

\1. 不需要查找，就可直接获得元素/对象: 4个

 (1). 根节点对象: document

 (2). html元素节点对象: document.documentElement

 (3). head元素节点对象: document.head

 (4). body元素节点对象: document.body

  //输出根节点对象document
  console.log(document); //DOM树结构
  console.dir(document); //这一个节点对象的内存属性结构
  //输出HTML元素节点对象
  console.log(document.documentElement);
  console.dir(document.documentElement);
  //输出head元素节点对象
  console.log(document.head);
  console.dir(document.head);
  //输出body元素节点对象
  console.log(document.body);
  console.dir(document.body);
  
  //获得body的第一个直接子元素span
  // var span=document.body.firstChild
  var span=document.body.firstElementChild
  console.log(span); //希望<span>…</span>

  //获得span的下一个兄弟h1
  var h1=span.nextElementSibling;
  console.log(h1); //希望<h1>…</h1>

  //获得body下所有直接子元素的集合：3个元素
  console.log(document.body.children);
      //希望[span, h1, script]

   //查找id为nav的一个元素对象
   var ulNav=document.getElementById("nav")
   console.log(ulNav);
   //前提: 已经找到ulNav了
   //想继续在ulNav下查找所有的li元素
   var lis=ulNav.getElementsByTagName("li");
   console.log(lis);

   //查找整个页面中唯一的一个span元素，并设置span的字体颜色为红色
   var span=document.getElementsByTagName["span"](0);
   console.log(span);
   span.style.color="red";
   //等效于:手工设置
   //<span style="color:red">

   //想在ulNav下查找所有class为item的li元素
   var lis=ulNav.getElementsByClassName("item");
   console.log(lis);
   //想class为active的一个元素字体变为绿色
   var liActive=ulNav.getElementsByClassName["active"](0);
   console.log(liActive);
   liActive.style.color="green";

   //查找网页中两个name为sex的radio元素
   var radios=document.getElementsByName("sex");
   console.log(radios);
   //查找网页中唯一一个name为uname的input元素，为其添加红色阴影
   var input=document.getElementsByName["uname"](0);
   console.log(input);
   input.style.boxShadow="0 0 5px red";
  </script>

 \2. 按节点间关系查找

 (1). 什么是：按照元素在DOM树中的上下级或平级关系查找其它元素

 (2). 何时: 如果已经获得一个DOM元素对象，想找这个DOM元素对象周围附近的元素时，才用节点间关系。

 (3). 如何:

 a. 节点树:

  1). 什么是: 包含所有网页内容的完整树结构

  2). 包含: 2大类关系，6个属性

i. . 父子关系: 4个属性
   获得一个节点对象的父级节点对象

   节点对象.parentNode  —— 返回一个节点对象

        父  节点

   获得一个节点对象下的所有直接子节点对象的集合

   节点对象.childNodes  —— 返回类数组对象

        子 节点们

   获得一个节点对象下的第一个直接子节点对象

   节点对象.firstChild —— 返回一个节点对象

       第一个 孩子

   获得一个节点对象下的最后一个直接子节点对象

   节点对象.lastChild —— 返回一个节点对象

      最后一个 孩子

ii. 兄弟关系: 2个属性
   获得一个节点对象相邻的前一个兄弟节点对象

   节点对象.previousSibling

       前一个 兄弟

   获得一个节点对象相邻的下一个兄弟节点对象

   节点对象.nextSibling

      下一个 兄弟

  3). 问题: 节点树会将看不见的回车、空格等空字符也创建为节点对象。严重干扰我们的查找结果！所以，今后几乎不用节点树。

 b. 元素树:

  1). 什么是: 仅包含元素节点的树形结构

  2). 优点: 不会受到看不见的空字符的干扰！所以，将来只要按节点间关系查找元素时，都用元素树

  3). 包含: 2大类关系，6个属性

i. . 父子关系: 4个属性
   获得一个元素对象的父级元素对象

   元素对象.parentElement  —— 返回一个元素对象

        父  元素

   获得一个元素对象下的所有直接子元素对象的集合

   元素对象.children  —— 返回类数组对象

        孩子们

   获得一个元素对象下的第一个直接子元素对象

   元素对象.firstElementChild —— 返回一个元素对象

       第一个 元素 孩子

   获得一个元素对象下的最后一个直接子元素对象

   元素对象.lastElementChild —— 返回一个元素对象

      最后一个 元素 孩子

ii. 兄弟关系: 2个属性
   获得一个元素对象相邻的前一个兄弟元素对象

   元素对象.previousElementSibling

       前一个 元素  兄弟

   获得一个元素对象相邻的下一个兄弟元素对象

   元素对象.nextElementSibling

      下一个 元素  兄弟

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps1.jpg)

\3. 按HTML特征查找: 4个函数

 (1). 按id名查找一个元素:

 a. var 一个元素对象=document.getElementById("id名")

 b. 意为     在整个页面中     通过id名
               查找元素

 c. 返回值:

  1). 如果找到符合要求的元素，则只返回一个元素对象

  2). 如果没找到，则返回null

 d. 强调:

  1). .前的主语必须是document

  2). 因为只找一个元素，所以函数名中Element没有s结尾，是单数形式。

 (2). 按标签名查找多个元素:

 a. var 类数组对象=任意父元素.getElementsByTagName("标签名")

 b. 意为:  在指定父元素范围内     通过标签名

               获取多个元素

 c. 返回值:

  1). 如果找到符合要求的元素，就返回类数组对象

  2). 如果没找到，返回空类数组对象: {  length:0 }

 d. 强调:

  1). 因为找到多个元素，所以返回值为类数组对象

  2). 最好指定只在一个父元素范围内查找符合要求的元素。——优化，查找范围越小，查找越快！

  3). 因为找到多个元素，所以函数名中的Elements以s结尾，表示复数

  4). 不仅查找直接子元素，而且会在所有后代元素中查找符合要求的元素。

  5). 如果这个函数规定要返回类数组对象，那么在任何时候，都会返回类数组对象！即使只找到一个元素，也会把这唯一的一个元素放在类数组对象中第一个位置返回。所以，如果只找到一个符合要求的元素时，必须用[0]，取出类数组对象中第一个位置保存的元素对象，才能对这个元素对象继续执行后续操作！

 (3). 按class名查找多个元素:

 a. var 类数组对象=任意父元素.getElementsByClassName("class名")

 b. 意为:  在指定父元素范围内     通过class名

                获取多个元素

 c. 返回值:

  1). 如果找到符合要求的元素，就返回类数组对象

  2). 如果没找到，返回空类数组对象: {  length:0 }

 d. 强调:

  1). 因为找到多个元素，所以返回值为类数组对象

  2). 最好指定只在一个父元素范围内查找符合要求的元素。——优化，查找范围越小，查找越快！

  3). 因为找到多个元素，所以函数名中的Elements以s结尾，表示复数

  4). 不仅查找直接子元素，而且会在所有后代元素中查找符合要求的元素。

  5). 如果这个函数规定要返回类数组对象，那么在任何时候，都会返回类数组对象！即使只找到一个元素，也会把这唯一的一个元素放在类数组对象中第一个位置返回。所以，如果只找到一个符合要求的元素时，必须用[0]，取出类数组对象中第一个位置保存的元素对象，才能对这个元素对象继续执行后续操作！

(4). 按name名查找多个表单元素:

 a. var 类数组对象=document.getElementsByName("name名")

 b 意为:  在整个页面范围内      通过name名

              获取多个元素

 c. 返回值:

  1). 如果找到符合要求的元素，就返回类数组对象

  2). 如果没找到，返回空类数组对象: {  length:0 }

 d. 强调:

1). .前必须是document，不能改为其它任意元素
  2). 因为可能找到多个，所以也返回类数组对象

  3). 因为可能找到多个，函数名中的Elements也是s结尾，表示复数

  4). 如果这个函数规定要返回类数组对象，那么在任何时候，都会返回类数组对象！即使只找到一个元素，也会把这唯一的一个元素放在类数组对象中第一个位置返回。所以，如果只找到一个符合要求的元素时，必须用[0]，取出类数组对象中第一个位置保存的元素对象，才能对这个元素对象继续执行后续操作！

四. 购物车:

\1. 所有DOM效果标准4步

（0）先画DOM树

（1）. 查找所有可能触发事件的元素

  (2). 绑定事件处理函数

  (3). 查找要修改的元素

  (4). 修改元素

\2. 回顾: 事件绑定:

 (1). 什么是事件: 浏览器自动触发的或用户手动触发的页面中内容或状态的变化

 (2). 问题: 默认，即使浏览器中发生了事件，浏览器什么也不会做！

 (3). 解决: 绑定事件处理函数: 2种

 a. 手工在html中元素开始标签中绑定事件处理函数

  <元素 on事件名="事件处理函数()">

   <script>
   function 事件处理函数(){ ... }

  缺点: 全手工添加，极其不便于维护！——几乎不用

 b. 在js中绑定:

  1). 其实，每个元素对象身上，都长着一批名称以on开头的"事件属性"

   比如: onclick, onfocus, onmouseover,...

  2). 当一个元素身上发生了一个事件时，浏览器会先在这个元素身上找到对应的事件属性，并执行事件属性中保存的事件处理函数。

  3). 问题: 开局，所有元素的事件属性都为null，即使发生事件，也不知道该干什么

  4). 解决: 事件绑定:

  i. 什么是: 提前在元素的某个事件属性上保存一个function函数。当事件发生时，浏览器就可以找到这个函数，并自动执行！

  ii. 何时: 只要希望触发事件时，可以自动执行一项提前定义好的操作时，都要先为元素绑定事件处理函数.

  iii. 如何: js中

   先找到要触发事件的元素

   元素对象.on事件名=function(){ ... }

 (5). 优点: 自动绑定，可以与for循环配合批量绑定，集中绑定。

 (4). 示例: 查找table中所有button，为每个button绑定单击事件

<!DOCTYPE HTML>
<html>

<head>
  <title>使用Selector API实现购物车客户端计算</title>
  <meta charset="utf-8" />
  <style>
    table {
      width: 600px;
      text-align: center;
      border-collapse: collapse;
    }

    td,
    th {
      border: 1px solid black
    }

    td[colspan="3"] {
      text-align: right;
    }
  </style>

</head>

<body>
  <table id="data">
    <thead>
      <tr>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>iPhone6</td>
        <td>¥4488.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥4488.00</td>
      </tr>
      <tr>
        <td>iPhone6 plus</td>
        <td>¥5288.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥5288.00</td>
      </tr>
      <tr>
        <td>iPad Air 2</td>
        <td>¥4288.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥4288.00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total: </td>
        <td>¥14064.00</td>
      </tr>
    </tfoot>
  </table>
  <script>
    //1. 查找触发事件的元素
    //本例中: 在table下查找所有button元素
    //1.1 先查找id为data的table元素
    var table=document.getElementById("data");
    //1.2 在table中查找所有button元素
    var 按钮们=table.getElementsByTagName("button");
    console.log(按钮们);
    //2. 绑定事件处理函数
    //本例中: 为找到的每个按钮都绑定单击事件处理函数
    //所以遍历查找结果中每个DOM元素按钮
    for(var 按钮 of 按钮们){
      console.dir(按钮);
      按钮.onclick=function(){
        //点那个按钮，就让当前按钮的内容变成一朵小花
        //错误: 始终改最后一个按钮
        // 按钮.innerHTML="❀";
        //正确: 修改当前触发事件的按钮本身
        this.innerHTML="❀";
      }
    }
  </script>
</body>

</html>
运行结果：
![image-20210709214625522](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210709214625522.png)

  //DOM 4步:
  //1. 查找触发事件的元素
  //本例中: 查找table下所有button元素
  //1.1 先找id为data的table
  var table=document.getElementById("data");
  console.log(table);
  //1.2 再在table范围内找所有button
  var btns=table.getElementsByTagName("button");
  console.log(btns);//类数组对象
  //2. 绑定事件处理函数:
  //本例中: 为找到的六个按钮都绑定单击事件的处理函数
  //先遍历查找结果中每个按钮对象
  for(var btn of btns){
   //每遍历一个按钮对象，就为当前按钮绑定单击事件的处理函数
   btn.onclick=function(){
    alert("疼!")
   }
  }

<!DOCTYPE HTML>
<html>

<head>
  <title>使用Selector API实现购物车客户端计算</title>
  <meta charset="utf-8" />
  <style>
    table {
      width: 600px;
      text-align: center;
      border-collapse: collapse;
    }

    td,
    th {
      border: 1px solid black
    }

    td[colspan="3"] {
      text-align: right;
    }
  </style>

</head>

<body>
  <table id="data">
    <thead>
      <tr>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>iPhone6</td>
        <td>¥4488.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥4488.00</td>
      </tr>
      <tr>
        <td>iPhone6 plus</td>
        <td>¥5288.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥5288.00</td>
      </tr>
      <tr>
        <td>iPad Air 2</td>
        <td>¥4288.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥4288.00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total: </td>
        <td>¥14064.00</td>
      </tr>
    </tfoot>
  </table>
  <script>
    //1. 查找触发事件的元素
    //本例中: 在table下查找所有button元素
    //1.1 先查找id为data的table元素
    var table=document.getElementById("data");
    //1.2 在table中查找所有button元素
    var 按钮们=table.getElementsByTagName("button");
    console.log(按钮们);
    //2. 绑定事件处理函数
    //本例中: 为找到的每个按钮都绑定单击事件处理函数
    //所以遍历查找结果中每个DOM元素按钮
    for(var 按钮 of 按钮们){
      console.dir(按钮);
      按钮.onclick=function(){
        //功能一: 点按钮，数量变
        //3. 获得要修改的元素
        //本例中: 要修改的是button的爹td下的第二个孩子span
        var span=this.parentElement.children[1];
        //4. 修改span的内容:3步:
        //4.1 先取出现在span中的旧内容
        //坑: 今后，凡是从页面上获得的都是字符串，所以，要算术计算之前最好都转为数字才保险
        var n=parseInt(span.innerHTML);
        //4.2 根据点的按钮不同，对span的旧内容+1或-1
        //如果当前点击的按钮的内容是+，就n+1
        if(this.innerHTML=="+"){
          n++
        }else if(n>1){
          //否则如果当前点击的按钮的内容是-，且n>1时，才能-1
          n--;
        }
        //4.3 将计算后的新值放回span的内容中
        span.innerHTML=n;
      }
    }
  </script>
</body>

</html>
运行结果
![image-20210709220757788](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210709220757788.png)

![image-20210709220806599](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210709220806599.png)

\4. 示例: 数量修改，小计也修改

 3_shoppingCart2.html

<!DOCTYPE HTML>
<html>

<head>
  <title>使用Selector API实现购物车客户端计算</title>
  <meta charset="utf-8" />
  <style>
    table {
      width: 600px;
      text-align: center;
      border-collapse: collapse;
    }

    td,
    th {
      border: 1px solid black
    }

    td[colspan="3"] {
      text-align: right;
    }
  </style>

</head>

<body>
  <table id="data">
    <thead>
      <tr>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>iPhone6</td>
        <td>¥4488.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥4488.00</td>
      </tr>
      <tr>
        <td>iPhone6 plus</td>
        <td>¥5288.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥5288.00</td>
      </tr>
      <tr>
        <td>iPad Air 2</td>
        <td>¥4288.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥4288.00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total: </td>
        <td>¥14064.00</td>
      </tr>
    </tfoot>
  </table>
  <script>
    //1. 查找触发事件的元素
    //本例中: 在table下查找所有button元素
    //1.1 先查找id为data的table元素
    var table=document.getElementById("data");
    //1.2 在table中查找所有button元素
    var 按钮们=table.getElementsByTagName("button");
    console.log(按钮们);
    //2. 绑定事件处理函数
    //本例中: 为找到的每个按钮都绑定单击事件处理函数
    //所以遍历查找结果中每个DOM元素按钮
    for(var 按钮 of 按钮们){
      console.dir(按钮);
      按钮.onclick=function(){
        //3. 查找要修改的元素
        //本例中: 要修改按钮旁边的span
        var span=
          this.parentElement.children[1];
        //按钮      td      所有孩子中第2个
        //4. 修改元素:3步
        //4.1 取出现在的旧内容
        //但是，因为从页面上获得的一切都是字符串！如果要进行算术计算，必须先转换，再计算
        var n=parseInt(span.innerHTML);
        //4.2 修改后
        //本例中:如果当前点击的按钮的内容为+，则n++，否则如果当前点击的按钮的内容为-，且n>1，才能n--。因为购物车中商品数量不能<1
        if(this.innerHTML=="+"){
          n++;
        }else if(n>1){
          n--;
        }
        //4.3 再放回去
        span.innerHTML=n;

        //功能2: 
        //3. 查找要修改的元素
        //本例中: 查找小计单元格td
        //当前按钮的爹td的下一个兄弟td
        var tdSub=this.parentElement.nextElementSibling;
        //4. 修改元素
        //4.1 获得单价: 获取当前按钮的爹td的前一个兄弟td中的内容，去掉开头的人民币符号，转为小数
        var price=parseFloat(
          this //当前按钮 
          .parentElement //当前按钮所在td
          .previousElementSibling //当前按钮所在td的前一个兄弟td
          .innerHTML //的内容
          .slice(1) //选取除人民币符号之后的所有剩余内容
        );
        //4.2 计算小计: 单价*数量n
        var sub=price*n;
        //4.3 再放回小计td的内容中
        tdSub.innerHTML=`¥${sub.toFixed(2)}`;
      }
    }
  </script>
</body>

</html>
运行结果
![image-20210709220845667](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210709220845667.png)

![image-20210709220852031](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210709220852031.png)

总结: this  6种:

\1.obj.fun()  this->点前的obj对象

\2. new Fun()  this->new正在创建的新对象

\3. 类型名.prototype.共有方法=function(){ ... }

 this->将来谁调用这个函数，就指谁

 将来调用这个函数的.前的某个子对象

\4. fun() 和回调函数 和匿名函数自调 this->默认指window

\5. 访问器属性中的this指访问器属性所在的当前对象

\6. 在DOM的事件处理函数内的this->当前正在触发事件的DOM元素对象

总结: DOM 4步:

\1. 先查找触发事件的元素

\2. 再为元素绑定事件处理函数

 \3. 查找要修改的元素

 \4. 修改元素

总结: DOM 5件事: 增删改查+事件绑定:

//不要背！用到时，来查找，复制粘贴就行了！

\1. 查找元素: 4种，

/所有元素必须先查找才能使用，不能直接使用/

(1). 不需要查找就可直接获得的元素对象: 4种:

 document  根节点 document

 document.documentElement —— <html>

 document.head  —— <head>

 document.body —— <body>

(2). 如果已经获得一个元素对象，找周围附近的元素对象时，就用按节点间关系查找：2大类关系，6个属性

a. 父子关系: 4种

 1). 元素的父元素:  元素.parentElement

 2). 元素下的所有直接子元素: 元素.children

 3). 元素下的第一个直接子元素: 元素.firstElementChild

 4). 元素下的最后一个直接子元素: 元素.lastElementChild

b. 兄弟关系: 2种

 1). 元素的前一个兄弟: 元素.previousElementSibling

 2). 元素的后一个兄弟: 元素.nextElementSibling
(3). 如果用一个特征就能找到想要的元素，就用按HTML特征查找：4个方法:

a. 按id查找:

var 一个元素对象=document.getElementById("id名");

b. 按标签名查找:

var 类数组对象=任意父元素.getElementsByTagName("标签名")、

c. 按class名查找:

var 类数组对象=任意父元素.getElementsByClassName("class名")

d. 按name名查找表单元素:

var 类数组对象=document.getElementsByName("name名")

(4). 如果通过复杂的查找条件，才能找到想要的元素时，就用按选择器查找: 2个方法

a. 只查找一个符合条件的元素:

var 一个元素=任意父元素.querySelector("任意选择器")

b. 查找多个符合条件的元素:

var 类数组对象=任意父元素.querySelectorAll("任意选择器")

今日对应小程序视频列表:

 小程序->在线->DOM->day01  

  \0.  DOM Tree 树
  <https://pan.baidu.com/s/1cCNhWz8tMLPOvIBGtRcNsg> 提取码：xa87

 1. 按节点间关系查找
​ <https://pan.baidu.com/s/1T1Fzo2U1gbsf1ir269NRcg> 提取码：wut1

 2. 按HTML特征查找
​ <https://pan.baidu.com/s/1SHfsFjxWF1C30ZeXOoWcCg> 提取码：a1nf

 3. 购物车 shoppingcart
​ <https://pan.baidu.com/s/1FXlLwTg40DsMl48PU_jZBg> 提取码：bxb8

二. 查找:

\1. 按选择器查找: 今后如果元素藏的很深，非常分散时，查找条件变得很复杂，都可用按选择器查找.

 (1). 只查找一个符合要求的元素

 a. var 一个元素对象=任意父元素.querySelector("选择器")

                  按选择器

                查询

 (2). 查找多个符合要求的元素

 b. var 类数组对象=任意父元素.querySelectorAll("选择器")

\2. 示例: 计算购物车总价:

day01剩余/3_shoppingCart3.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps10.jpg)

<!DOCTYPE HTML>
<html>

<head>
  <title>使用Selector API实现购物车客户端计算</title>
  <meta charset="utf-8" />
  <style>
    table {
      width: 600px;
      text-align: center;
      border-collapse: collapse;
    }

    td,
    th {
      border: 1px solid black
    }

    td[colspan="3"] {
      text-align: right;
    }
    /*tbody中每行最后一个td背景变为粉色*/
    tbody td:last-child{
      background-color:pink;
    }
    /*tfoot中最后一个td背景变为黄色*/
    tfoot td:last-child{
      background-color:yellow;
    }
  </style>

</head>

<body>
  <table id="data">
    <thead>
      <tr>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>iPhone6</td>
        <td>¥4488.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥4488.00</td>
      </tr>
      <tr>
        <td>iPhone6 plus</td>
        <td>¥5288.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥5288.00</td>
      </tr>
      <tr>
        <td>iPad Air 2</td>
        <td>¥4288.00</td>
        <td>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </td>
        <td>¥4288.00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total: </td>
        <td>¥14064.00</td>
      </tr>
    </tfoot>
  </table>
  <script>
    //1. 查找触发事件的元素
    //本例中: 在table下查找所有button元素
    //1.1 先查找id为data的table元素
    var table=document.getElementById("data");
    //1.2 在table中查找所有button元素
    var 按钮们=table.getElementsByTagName("button");
    console.log(按钮们);
    //2. 绑定事件处理函数
    //本例中: 为找到的每个按钮都绑定单击事件处理函数
    //所以遍历查找结果中每个DOM元素按钮
    for(var 按钮 of 按钮们){
      console.dir(按钮);
      按钮.onclick=function(){
        //3. 查找要修改的元素
        //本例中: 要修改按钮旁边的span
        var span=
          this.parentElement.children[1];
        //按钮      td      所有孩子中第2个
        //4. 修改元素:3步
        //4.1 取出现在的旧内容
        //但是，因为从页面上获得的一切都是字符串！如果要进行算术计算，必须先转换，再计算
        var n=parseInt(span.innerHTML);
        //4.2 修改后
        //本例中:如果当前点击的按钮的内容为+，则n++，否则如果当前点击的按钮的内容为-，且n>1，才能n--。因为购物车中商品数量不能<1
        if(this.innerHTML=="+"){
          n++;
        }else if(n>1){
          n--;
        }
        //4.3 再放回去
        span.innerHTML=n;

        /*修改小计*/
        //3. 查找要修改的元素
        //本例中:查找当前按钮的爹td的下一个兄弟td
        var subTd=this.parentElement.nextElementSibling;
        //4. 修改元素
        //4.1 先获得单价: 当前按钮的爹td的前一个兄弟td的内容，去掉开头¥，转为数字
        var price=parseFloat(
          this //当前按钮
          .parentElement //当前td
          .previousElementSibling //前一个td
          .innerHTML//内容"¥4488.00"
          .slice(1) //"4488.00"
        );
        //4.2计算小计:单价*数量
        var sub=price*n;
        //4.3将小计放入小计单元格: 
        subTd.innerHTML=`¥${sub.toFixed(2)}`;

        /*修改总计*/
        //3. 查找要修改的元素
        //本例中:计算出总计后，要放入tfoot中最后一个td里
        var totalTd=table.querySelector("tfoot td:last-child");
        //4. 修改元素
        //本例中:
        //4.1 查找所有行中最后一个td小计单元格
        var tds=table.querySelectorAll("tbody td:last-child");
        //4.2 遍历找到的每个小计td，将每个td的内容转为整数，累加到一个变量total中
        var total=0;
        for(var td of tds){
          total+=parseFloat(td.innerHTML.slice(1));
        }
        //4.3 将总计total，保留两位小数，拼上¥，放入总计td的内容中
        totalTd.innerHTML=`¥${total.toFixed(2)}`;
      }
    }
  </script>
</body>

</html>
运行结果
![image-20210709221002508](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210709221002508.png)

day08

每天三遍   能自己完全写出  画dom树图

三. 修改: 3种东西

\1. 内容: 3种:

 (1). 获取或修改元素开始标签到结束标签之间的原始的HTML内容

 a. 元素对象.innerHTML

       内部 HTML内容

 b. 获取元素内容时: innerHTML原样返回HTML代码中的html内容个，不做任何加工

 c. 修改元素内容时: innerHTML会先将字符串内容交给浏览器解析，然后将解析后的可以给人看的内容显示在页面上

 (2). 获取或修改元素开始标签到结束标签之间的纯文本内容

 a. 元素对象.textContent

       文本 内容

 b. 获取元素内容时: textContent去掉内嵌的标签，并将特殊符号转为正文，然后在返回修改后的内容。

 c. 修改元素内容: 不会将字符串内容交给浏览器解析，而是直接保持字符串的原样内容输出

 d. 示例: 分别使用innerHTML和textContent获取和修改元素的内容

 0_html_text_value.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h3 id="msg">来自<a href="#">&lt;&lt;新华社&gt;&gt;</a>的消息</h3>
  <h3 id="msg2"></h3>
  <h3 id="msg3"></h3>
  <script>
    var h3Msg=document.getElementById("msg");
    var h3Msg2=document.getElementById("msg2");
    var h3Msg3=document.getElementById("msg3");
    //想获取msg的内容
    console.log(h3Msg.innerHTML)
    console.log(h3Msg.textContent)
    //想修改msg2和msg3的内容
    var str=`来自<a href="#">&lt;&lt;新华社&gt;&gt;</a>的消息`;
    h3Msg2.innerHTML=str;
    h3Msg3.textContent=str;  
  </script>
</body>
</html>
运行结果：
![image-20210709221051028](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210709221051028.png)

 (3). 获取或修改表单元素的内容:

 a. 问题: 绝大多数表单元素都是input元素，而input元素是单标记，没有结束标签，所以不能使用innerHTML和textContent来获取或修改内容
 b. 解决: 今后只要获取或修改表单元素的值，都要用value代替innerHTML和textContent

 (4). 示例: 开关门效果：

 0_door.html

<!DOCTYPE HTML>
<html>

<head>
  <title>读取并修改元素的内容</title>
  <meta charset="utf-8" />
  <style>
    div {
      float: left;
      width: 110px;
      height: 200px;
    }

    #d1{
      background-color:#ccff00;
      background-image:url(images/xsj.png);
      background-size:160% 80%;
      background-position:-30px 30px;
    }
    #d3 {
      background-image:url(images/men.png);
      background-size:110% 110%;
      background-position:-10px -10px;
      position:relative;
    }

    #d2 {
      cursor: pointer;
      background-color:#fff;
      position:absolute;
      width:40px; height:18px;
      text-align:center;
      top:65px;
      font-weight:bold;
      color:green;
      left:50%; margin-left:-20px;
    }
  </style>
</head>

<body>
  <div id="d1"></div>
  <div id="d3">
    <div id="d2">无人</div>
  </div>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 点d2可以开关门
    var d2=document.getElementById("d2");
    //2. 绑定事件处理函数
    d2.onclick=function(){
      //3. 查找要修改的元素
      //本例中: 开关门是通过显示或隐藏d1(洗手间)来实现的
      var d1=document.getElementById("d1");
      //4. 修改元素
      //如果当前d2的内容是"无人"
      if(this.innerHTML=="无人"){
        //就关门
        d1.style.display="none"
        //相当于手工:
        //<div id="d1" style="display:none">
        d2.innerHTML="有人";
        d2.style.color="red";
      }else{//否则如果当前d2的内容是"有人"
        //就开门
        d1.style.display=""
        d2.innerHTML="无人";
        d2.style.color="green";
      }
    }
  </script>
</body>

</html>
运行结果
![image-20210709221151845](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210709221151845.png)

\2. 属性: 3种属性:

(1). 字符串类型的HTML标准属性:

 a. 什么是: HTML标准中规定的，属性值为字符串的属性

 b. 比如: class, id, name, value, href, title, ...

 c. 如何: 2种方式:

  1). 旧核心DOM4个函数:

  i. 获取属性值: 元素对象.getAttribute("属性名")

             获取 属性

  ii. 修改属性值:

  元素对象.setAttribute("属性名", "新值")

       修改 属性

  iii. 判断是否包含某个属性:

   元素对象.hasAttribute("属性名")

        有 属性(吗?)

  iv. 移除属性: 元素.removeAttribute("属性名")

            移除  属性

  2). 新的简化版HTML DOM:

  i. 新的HTML DOM已经将所有HTML标准属性，提前保存在了内存中的元素对象身上。只不过页面上暂时没用到的属性，默认值为""而已.

  ii. 今后，只要操作HTML标准属性，就都可用".属性名"方式操作

  iii. 如何用.代替以上四种操作：

   ①获取属性值: 元素对象.属性名

   ②修改属性值: 元素对象.属性名=属性值

   ③判断是否包含某个属性:

    因为所有标准属性已经在元素对象身上了，只不过默认值为""，所以:

    元素.属性名!==""  说明包含该属性

   ④移除属性:

     错误: delete 元素对象.属性名

     正确: 元素对象.属性名=""

  iv. 特例: class属性

   问题: ES6基础语法中已经将class定义为关键字，有特殊功能，专门用于创建一种类型。所以，DOM标准就不能重复使用"class"这个属性名。

   解决: 今后，在DOM中只要用.获取或修改元素的class属性值，都必须换成".className"。

   但是，操作.className，就是在操作页面上元素的class属性。

 d. 示例: 使用核心DOM和HTML DOM两种方式操作a元素的属性:

 1_attribute.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <a id="a1" href="http://tmooc.cn" title="前往tmooc">go to tmooc</a>
  <script>
    var a1=document.getElementById("a1");
    //获取a1的href属性
    // console.log(a1.getAttribute("href"));
    console.log(a1.href);
    //修改a1的title属性
    // a1.setAttribute("title","Welcome to tmooc");
    a1.title="Welcome to tmooc";
    //判断是否包含target属性
    // console.log(a1.hasAttribute("target"));//false
    console.log(a1.target!=="");//false 说明不包含
    //为a1添加target属性
    // a1.setAttribute("target","_blank")
    a1.target="_blank";
    //判断是否包含target属性
    // console.log(a1.hasAttribute("target"));//true
    console.log(a1.target!=="");//true 说明包含
    console.log(a1);
    console.dir(a1);
  </script>
</body>
</html>
运行结果
 e. 示例: 手风琴/伸缩菜单效果

 1_menu.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps12.jpg)

<!DOCTYPE HTML>
<html>

<head>
  <title>1. 实现伸缩二级菜单</title>
  <meta charset="utf-8" />
  <style>
    li {
      list-style: none;
    }

    li span {
      padding-left: 20px;
      cursor: pointer;
      background: url("images/add.png") no-repeat center left;
    }

    li ul {
      display: none;
    }

    .open {
      background: url("images/minus.png") no-repeat center left;
    }

    .open+ul {
      display: block;
    }
  </style>

</head>

<body>
  <ul class="tree">
    <li>
      <span class="open">考勤管理</span>
      <ul>
        <li>日常考勤</li>
        <li>请假申请</li>
        <li>加班/出差</li>
      </ul>
    </li>
    <li>
      <span>信息中心</span>
      <ul>
        <li>通知公告</li>
        <li>公司新闻</li>
        <li>规章制度</li>
      </ul>
    </li>
    <li>
      <span>协同办公</span>
      <ul>
        <li>公文流转</li>
        <li>文件中心</li>
        <li>内部邮件</li>
        <li>即时通信</li>
        <li>短信提醒</li>
      </ul>
    </li>
  </ul>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 点击ul下li下所有span都能触发变化
    var spans=document.querySelectorAll(
      "ul>li>span"
    );
    //2. 绑定事件处理函数
    //本例中: 因为要给每个span绑定单击事件，所以要遍历找到的每个span
    for(var span of spans){
      span.onclick=function(){
        //3. 查找要修改的元素
        //4. 修改元素
        //如果当前点击的span的class是open，说明当前span是打开的，则只关闭自己即可！不用再遍历别人了
        if(this.className=="open"){
          this.className="";
          return;//停止执行当前函数，并退出当前函数。
        }

        //先找到ul下所有span
        var spans=
          document.querySelectorAll(
            "ul>li>span"
          );
        //遍历清除每个span上的class open，让所有的菜单暂时都隐藏
        for(var span of spans){
          span.className="";
        }
        //然后，再只给当前点击的一个span添加class open，只让当前一个菜单显示
        this.className="open";
      }
    }
  </script>
</body>

</html>
运行结果：
![image-20210709221352020](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210709221352020.png)

(2). bool类型的HTML标准属性:

 a. 什么是: HTML标准中规定的，不需要写属性值，只靠属性名就可发挥作用的属性。

 b. 比如:

  1). checked: 用于标记一个checkbox是否被选中

  2). disabled: 用于标记一个表单元素是否被禁用

  ... ...

 c. 如何: 1种: 只能用新HTML DOM来操作，且属性值必须是bool类型的true或false。

   元素.属性名

 d. 示例: 点同意，启用按钮，不同意，禁用按钮

 2_checked.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input id="chb" type="checkbox">同意</br>
  <button id="btn" disabled>注册</button>
  <script>
    //DOM4步
    //1.查找触发事件的元素：
    //本例中: 点击CheckBox影响按钮的启用禁用状态
    var chb=document.getElementById("chb");
    //2. 绑定事件处理函数
    //当表单元素的内容或状态改变时自动触发
    //本例中，当CheckBox的选中状态被改变时，自动执行
    chb.onchange=function(){
      //3. 查找触发事件的元素
      //本例中，选中checkbox影响button的启用和禁用状态
      var btn=document.getElementById("btn");
      //4. 修改元素
      //本例中:
      //如果当前checkbox是选中的
      // if(this.checked==true){
      //   //则启用button
      //   btn.disabled=false;//不 禁用 = 启用
      // }else{//否则如果当前checkbox是未选中的，
      //   //则禁用button
      //   btn.disabled=true;
      // }
      //基础好的同学:
      btn.disabled=!this.checked;

  //this.checked==true->btn.disabled=false;
  //this.checked==false->btn.disabled=true;
      //总结规律:让btn.disabled值与this.checked的值相反即可！
    }
  </script>
</body>
</html>
运行结果：

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps14.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps15.jpg)

 e. 示例: 全选和取消全选

 2_selectAll.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps16.jpg)

  1). 补: css中已经提供了专门的选择器，用于匹配处于不同状态的元素——状态伪类，比如

  i. 选择选中的元素: :checked

    选择未选中的元素: :not(:checked)

              未 选中的

  ii. 选择禁用的元素: :disabled

  ... ...

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>全选和取消全选</title>
<style>
/*首先必须是input
  其次必须是选中的*/
  input:checked{
    box-shadow:0 0 5px red;
  }
/*首先必须是input
  其次必须是未选中的*/
  input:not(:checked){
    box-shadow:0 0 5px green;
  }
</style>
</head>
<body>
  <h2>管理员列表</h2>
  <table border="1px" width="500px">
    <thead>
    <tr>
      <th><input type="checkbox"/>全选</th>
      <th>管理员ID</th>
      <th>姓名</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox"/></td>
        <td>1</td>
        <td>Tester</td>
        <td>修改 删除</td>
      </tr>
      <tr>
        <td><input type="checkbox"/></td>
        <td>2</td>
        <td>Manager</td>
        <td>修改 删除</td>
      </tr>
      <tr>
        <td><input type="checkbox"/></td>
        <td>3</td>
        <td>Analyst</td>
        <td>修改 删除</td>
      </tr>
      <tr>
        <td><input type="checkbox"/></td>
        <td>4</td>
        <td>Admin</td>
        <td>修改 删除</td>
      </tr>
    </tbody>
  </table>
  <script>
  /*点全选，修改tbody中所有checkbox*/
  //DOM 4步
  //1. 查找触发事件的元素
  //本例中: 点击thead中第一个th中的input，会影响tbody中所有行第一td中的input
  var chbAll=document.querySelector(
    "thead th:first-child>input"
  );
  //2. 绑定事件处理函数
  //当全选checkbox的选中状态发生改变时，自动执行函数
  chbAll.onchange=function(){
    //3. 查找要修改的元素
    //本例中: 点上方的全选，影响tbody中每行第一个td中的input
    var chbs=document.querySelectorAll(
      "tbody td:first-child>input"
    );
    //4. 修改元素
    //点上方的全选，tbody中的所有checkbox都要修改，所以应该遍历找到的每个checkbox
    for(var chb of chbs){
      //如果表头中的chbAll选中，则每个chb都要选中
      // if(chbAll.checked==true){
      //  chb.checked=true;
      // }else{//否则如果表头中的chbAll未选中，则每个chb都不能选中
      //  chb.checked=false;
      // }
      //规律: tbody中每个checkbox的选中状态应该和表头中chbAll的选中状态始终保持一致！
      chb.checked=chbAll.checked;
    }
  }

  /*点tbody中每个checkbox，也会影响表头中的全选*/
  //DOM 4步
  //1. 查找触发事件的元素
  //本例中: 查找tbody中每个checkbox
  var chbs=document.querySelectorAll(
    "tbody td:first-child>input"
  );
  //2. 绑定事件处理函数
  //因为tbody中每个checkbox都能点击，所以遍历每个checkbox
  for(var chb of chbs){
    //每遍历一个chb，就绑定单击事件
    chb.onclick=function(){
      //3. 查找要修改的元素
      //本例中: 要修改表头中的全选checkbox
      var chbAll=document.querySelector(
        "thead th:first-child>input"
      );
      //4. 修改元素
      //尝试查找tbody下一个未选中的checkbox
      var unchecked=document.querySelector(
        "tbody td:first-child>input:not(:checked)"
      );
      //如果找到未选中的
      if(unchecked!=null){
        //则全选chbAll，不全选
        chbAll.checked=false;
      }else{//否则如果没找到未选中的，说明都选中了
        //全选chbAll，选中！
        chbAll.checked=true;
      }
    }
  }
  </script>
</body>
</html>
运行结果：

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps17.jpg)

总结: this  6种:

\1.obj.fun()  this->点前的obj对象 比如，    lilei.intr() this->lilei

\2. new Fun()  this->new正在创建的新对象

\3. 类型名.prototype.共有方法=function(){ ... }

 this->将来谁调用这个函数，就指谁

 将来调用这个函数的.前的某个子对象

\4. fun() 和 回调函数 和 匿名函数自调 this->默认指window

\5. 访问器属性中的this->当前访问器属性所在的对象

\6. DOM和jQuery中事件处理函数中的this->当前正在触发事件的DOM元素对象本身.

总结:

(4). 如果通过复杂的查找条件，才能找到想要的元素时，就用按选择器查找: 2个方法

a. 只查找一个符合条件的元素:

var 一个元素=任意父元素.querySelector("任意选择器")

b. 查找多个符合条件的元素:

var 类数组对象=任意父元素.querySelectorAll("任意选择器")

\2. 修改元素: 3种东西可修改

(1). 修改内容: 3种内容可修改:

a. 获取或修改元素的HTML内容:

 元素.innerHTML

b. 获取或修改元素的纯文本内容:

 元素.textContent

c. 获取或修改表单元素的值:

 表单元素.value

(2). 修改属性: 3种

a. 字符串类型的HTML标准属性: 2种:

 1). 旧核心DOM: 4个函数

 i. 元素.getAttribute("属性名");

 ii. 元素.setAttribute("属性名", "属性值")

 iii. var bool=元素.hasAttribute("属性名")

 iv. 元素.removeAttribute("属性名")

 优点: 万能, 缺点: 繁琐

 2). 新HTML DOM:

 i. 元素.属性名

 ii. 元素.属性名="属性值"

 iii. 元素.属性名!==""

 iv. 元素.属性名=""

 优点: 简单, 缺点: 不万能

b. bool类型的HTML标准属性：

 1). 不能用旧核心DOM4个函数修改

 2). 只能用HTML DOM的"元素.属性名"方式获取或修改，且值为bool类型

今日对应小程序视频列表:

 小程序->在线->dom->day01

 \3. 购物车 shoppingcart
 <https://pan.baidu.com/s/1FXlLwTg40DsMl48PU_jZBg> 提取码：bxb8

 小程序->在线->dom->day02

 0.1 修改元素的内容
 链接：<https://pan.baidu.com/s/1tOPWvgH3IK67S1JgMzMO2w> 提取码：kutr

 \1. 动画 开关门效果 door
 链接：<https://pan.baidu.com/s/1PQxXy8U5z6rQ7tCmnW4Q9w> 提取码：r54y

 0.2 修改元素的属性 字符串类型
 链接：<https://pan.baidu.com/s/1QMgX5kt43Np8PAIafbIoAw> 提取码：0q8p

 \2. 下拉菜单 手风琴效果 动画
 链接：<https://pan.baidu.com/s/1bKyV3el6knq5a5suQbFWhQ> 提取码：hzxj

 0.3 修改元素的属性 bool类型
 链接：<https://pan.baidu.com/s/10DrQrBFlPupgxc-jWF3COQ> 提取码：p02k

 \3. 全选 取消全选 selectAll
 链接：<https://pan.baidu.com/s/1pNL6Dn0LQ8AFtRjRIybIeA> 提取码：tdnc

作业:

\1. 复习: 小程序->在线-> DOM ->day02

\2. 预习: 小程序->在线->DOM->day03

\3. (学有余力)实现带动画的开关门效果:

 链接：<https://pan.baidu.com/s/1PQxXy8U5z6rQ7tCmnW4Q9w> 提取码：r54y

\4. (学有余力) 实现带动画的手风琴效果：

 链接：<https://pan.baidu.com/s/1bKyV3el6knq5a5suQbFWhQ> 提取码：hzxj

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps19.jpg)  ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps20.jpg)

\5. (学有余力)实现标签页效果:

 链接：<https://pan.baidu.com/s/1iJwKs2we7zRTAGmsZXcnog> 提取码：69ie

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml21264\wps21.jpg)

encodeURI(): 函数可把字符串作为 URI 进行编码。

返回值

URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

day09

一. 修改:

 一个元素身上有三种东西可以改: 内容、属性和样式

\1. 属性: 3种:

(1). 字符串类型的HTML标准属性: 2种

 a. 旧核心DOM4个函数

 b. 新HTML DOM .

(2). bool类型的HTML标准属性: 1种

 a. 新HTML DOM .

(3). 自定义扩展属性:

 a. 什么是: HTML标准中没有规定的，程序员根据自身的需要，自发添加的自定义属性

 b. 2种:

  1). 经常用于代替id、class或元素选择器，作为查找触发事件的元素的条件。

  i. id选择器，只能选1个！

  ii. class选择器，class选择器本职工作是定义样式，而样式的修改极其频繁！如果用class选择器查找元素绑定事件，一旦样式类发生变化，程序必然出错！

  iii. 元素选择器，因为实现同一种效果，可选的标签名优很多，没有统一规定。如果用元素选择器查找触发事件的元素，绑定事件，则元素一改，功能又立刻出错！

  iv. 解决: 另起炉灶！可以为元素添加自定义属性，然后查找触发事件的元素时，用属性选择器[自定义属性]来查找。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps1.jpg)

  v. 好处: 不受样式和标签名修改的影响.

  2). 在客户端临时缓存部分业务数据，避免反复向服务器发送请求。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps2.jpg)

 c. 如何:

  1). 在HTML中手动添加:

  <元素 自定义属性名="属性值">

  2). 在js中访问自定义扩展属性: 2种:

  i. 不能用.访问！因为自定义属性是后天程序员自发添加的，HTML标准中没有规定。所有在内存中的元素对象上，不包含自定义扩展属性！

  ii. 可以用旧核心DOM:

   元素.getAttribute("自定义属性名")

   元素.setAttribute("自定义属性名", "属性值")

  iii. 在新版的HTML5标准中，有新的规定:

   ①HTML中，所有自定义属性名必须以data-开头！

!!   <元素  data-自定义属性名="属性值">

   ②如果在html中以data-开头了，则js中:

    元素.dataset.自定义属性名

    强调: 在js中使用dataset时，一定不要加data-前缀

 d. 示例: 点击按钮，记录次数

 day02剩余/3_dataset.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button data-n="0" data-btn>click me</button>
  <script>
    //想点按钮，给n属性的值+1
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 查找带有data-btn属性的一个按钮
    var btn=document.querySelector(
      "[data-btn]"
    );
    //2. 绑定事件处理函数
    btn.onclick=function(){
      //3. 查找要修改的元素
      //本例中，就是改自己this，不用查找，
      //4. 修改元素
      //4.1 获取自己身上data-n属性中保存的旧点击次数，转为整数
      var n=parseInt(
        this.getAttribute("data-n")
        //this.dataset.n
      );
      //4.2 次数+1
      n++;
      //4.3 再放回去
      this.setAttribute("data-n",n)
      //this.dataset.n=n;
    }
  </script>
</body>
</html>
运行结果
![image-20210712192038741](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210712192038741.png)

 e. 示例: 标签页

 day02剩余/3_tabs.html

<!DOCTYPE HTML>
<html>

<head>
  <title>读取并修改元素的属性</title>
  <meta charset="utf-8" />
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    #tab li {
      float: left;
      list-style: none;
    }

    #tab li a {
      display: inline-block;
      text-decoration: none;
      width: 80px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #000;
    }

    #container {
      position: relative;
    }

    #content1,
    #content2,
    #content3 {
      width: 300px;
      height: 100px;
      padding: 30px;
      position: absolute;
      top: 40px;
      left: 0;
    }

    #tab li:first-child,
    #content1 {
      background-color: #ffcc00;
    }

    #tab li:first-child+li,
    #content2 {
      background-color: #ff00cc;
    }

    #tab li:first-child+li+li,
    #content3 {
      background-color: #00ccff;
    }
  </style>

</head>

<body>
  <h2>实现多标签页效果</h2>
  <div class="tabs">
    <ul id="tab">
      <li><a href="#content1" data-tab data-id="content1">10元套餐</a></li>
      <li><a href="#content2" data-tab data-id="content2">30元套餐</a></li>
      <li><a href="#content3" data-tab data-id="content3">50元包月</a></li>
    </ul>
    <div id="container">
      <div id="content1" style="z-index:9">
        10元套餐详情：<br />&nbsp;每月套餐内拨打100分钟，超出部分2毛/分钟
      </div>
      <div id="content2">
        30元套餐详情：<br />&nbsp;每月套餐内拨打300分钟，超出部分1.5毛/分钟
      </div>
      <div id="content3">
        50元包月详情：<br />&nbsp;每月无限量随心打
      </div>
    </div>
  </div>
  <script>
  //DOM 4步
  //1. 查找触发事件的元素
  var tabs=document.querySelectorAll(
    "[data-tab]"
  );
  //先定义一个变量z初始为10
  var z=10;
  //2. 绑定事件处理函数
  for(var tab of tabs){
    tab.onclick=function(){
      //3. 查找要修改的元素
      //本例中:
      //3.1 先获得当前按钮身上记录的当前按钮对应的div的id名
      var id=this.dataset.id;
      //3.2 用获得的对应的div的id查找对应div
      //                             变量
      var div=document.getElementById(id);
      //4. 修改元素
      z++;
      div.style.zIndex=z;
    }
  }
  </script>
</body>

</html>
运行结果：
![image-20210712192241844](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210712192241844.png)

![image-20210712192927771](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210712192927771.png)

\2. 样式:

 (1). 修改内联样式:

 a. 元素.style.css属性="属性值" //记得加单位

 b. 相当于手工在元素上添加:

 <元素 style="css属性:属性值">

 c. 问题: 有些css属性名中带-，但是-会和减法的-号冲突。

   解决: 今后，所有带-的css属性名必须去-变驼峰
   比如: font-size -> fontSize

     background-color -> backgroundColor

     list-style-type -> listStyeType

 (2). 获取样式:

 a. 问题: 使用元素.style.css属性的方式，只能获取内联样式。无法获得内部或外部样式表中层叠或继承来的css属性值。

 b. 其实，.style属性，只代表内联样式，不包含所有样式。

 c. 解决: 今后，只要想获得元素任意css属性值，都要获得计算后的样式。

 1). 什么是计算后的样式: 最终应用到一个元素上的所有css属性的总和。

  2). 如何获取计算后的完整样式: 2步:

  i. 先获得计算后的样式对象:

   var style=getComputedStyle(元素对象)

  ii. 从完整的样式对象中只提取个别css属性

   style.css属性

  3). 强调: 计算后的样式对象中的所有css属性都是只读的。

    因为: 计算后的样式，来源不确定。如果擅自修改，可能牵一发而动全身。所以所有计算后的样式，都是只读的！

 (3). 总结:

 a. 今后，如果想修改一个元素的css属性，首先.style，因为内联样式优先级最高！且当前元素独有！

 b. 今后，如果想获取一个元素的任意css属性值时，只能用getComputedStyle();

 (4). 示例: 获取h1元素计算后的样式:

 day02剩余/5_getComputedStyle.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps8.jpg)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1{
      background-color:red;
    }
  </style>
</head>
<body>
  <h1 id="h1" style="color:yellow">Welcome</h1>
  <p>Welcome to my web site</p>
  <script>
    var h1=document.getElementById("h1");
    // console.log(h1.style.color);
    // console.log(h1.style.backgroundColor);
    // console.log(h1.style.fontSize);
    var style=getComputedStyle(h1);
    console.log(style.color);
    console.log(style.backgroundColor);
    console.log(style.fontSize);
    //尝试修改计算后的样式对象中的某个css属性值:
    style.fontSize="64px";//Uncaught DOMException: Failed to set the 'font-size' property on 'CSSStyleDeclaration': These styles are computed, and therefore the 'font-size' property is read-only.
  </script>
</body>
</html>
运行结果
![image-20210712194022007](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210712194022007.png)

 (5). 问题: 实际项目中，很多效果，需要批量修改一个元素的多个css属性。而.style一句话只能修改一个css属性。如果修改多个css属性，代码会很繁琐！

 (6). 解决: 今后，只要批量设置一个元素的多个css属性，都用class代替.style。

 (7). 示例: 带样式的表单验证:

 day02剩余

<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <title>实现带样式的表单验证</title>
  <style>
    table {
      width: 700px
    }

    td:first-child {
      width: 60px
    }

    td:nth-child(2) {
      width: 200px
    }

    td:first-child+td {
      width: 200px
    }

    td span {
      color: red
    }

    .vali_info {
      display: none;
    }

    .txt_focus {
      border-top: 2px solid black;
      border-left: 2px solid black;
    }

    .vali_success,
    .vali_fail {
      background-repeat: no-repeat;
      background-position: left center;
      display: block;
    }

    .vali_success {
      background-image: url("images/ok.png");
      padding-left: 20px;
      width: 0px;
      height: 20px;
      overflow: hidden;
    }

    .vali_fail {
      background-image: url("images/err.png");
      border: 1px solid red;
      background-color: #ddd;
      color: Red;
      padding-left: 30px;
    }
  </style>
</head>

<body>
  <form id="form1">
    <h2>增加管理员</h2>
    <table>
      <tr>
        <td>姓名：</td>
        <td>
          <input id="uname" name="username" />
          <span>*</span>
        </td>
        <td>
          <div class="vali_info">
            10个字符以内的字母、数字或下划线的组合
          </div>
        </td>
      </tr>
      <tr>
        <td>密码：</td>
        <td>
          <input id="upwd" type="password" name="pwd" />
          <span>*</span>
        </td>
        <td>
          <div class="vali_info">6位数字</div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">
          <input type="submit" value="保存" />
          <input type="reset" value="重填" />
        </td>
      </tr>
    </table>
  </form>
  <script>
    //DOM 4步
    //*****先手工给姓名文本框input加id="uname"，给密码框input加id="upwd"
    //1. 查找触发事件的元素
    //本例中: id为uname的姓名文本框失去焦点时，触发验证
    var txtName=document.getElementById("uname");
    //2. 绑定事件处理函数
    txtName.onblur=function(){
      //3. 查找要修改的元素
      //本例中，文本框失去焦点，要修改文本框旁边的div
      var div=
        this //当前文本框自己
        .parentElement //当前td
        .nextElementSibling //下一个td
        .children[0];//下个td的第一个孩子div
      //4. 修改元素
      //定义正则表达式
      //^:从开头
      //\w:[0-9a-zA-Z_]
      //{1,10}数量词: 是找1个字，最多10个字
      //$:到结尾
      var reg=/^\w{1,10}$/
      //用正则表达式验证当前文本框的内容
      var result=reg.test(this.value)
      //如果验证通过
      if(result==true){
        //就修改div的class为验证通过的样式类
        div.className="vali_success";
      }else{//否则如果验证失败
        //就修改div的class为验证失败的样式类
        div.className="vali_fail";
      }
      //学有余力:
      // div.className=result?"vali_success":"vali_fail";
    }

    var txtPwd=document.getElementById("upwd");
    txtPwd.onblur=function(){
      var div=this.parentElement.nextElementSibling.children[0];
      div.className=/^\d{6}$/.test(this.value)?"vali_success":"vali_fail";
    }
  </script>
</body>

</html>
运行结果
![image-20210712194120703](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210712194120703.png)

二. 添加删除元素:

\1. 添加一个新元素: 3步

(1). 创建一个新的空元素对象:

 a. var 新元素对象=document.createElement("标签名")

              创建 元素

 b. 结果: <元素></元素>

 c. 比如: var a=document.createElement("a");

   结果: <a></a>

(2). 为新元素添加必要属性: 元素对象.属性名=新值

  比如: a.innerHTML="go to tmooc";

     a.href="http://tmooc.cn";

  结果:  go to tmooc

(3). 必须将新元素添加到DOM树上指定父元素下，浏览器才能显示出新元素: 3种:

 a. 在父元素下末尾追加新元素

  父元素.appendChild(新元素)

      追加  孩子

 b. 在父元素下插入到一个现有子元素之前

  父元素.insertBefore(新元素，现有子元素)

     插入到...之前

 c. 替换父元素下的一个现有的子元素

  父元素.replaceChild(新元素，现有子元素)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps13.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps14.jpg)

 (4). 示例: 创建一个a元素和一个文本框

 0_createElement.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    var a=document.createElement("a")
    a.innerHTML="go to tmooc";
    a.href="http://tmooc.cn";
    console.log(a);
    document.body.appendChild(a);

    //再创建一个文本框
    var input=document.createElement("input");
    //input-><input/>
    //将文本框放在a之后?
    document.body.appendChild(input);
    //将文本框放在a之前?
    // document.body.insertBefore(input,a);
    //用文本框替换a?
    // document.body.replaceChild(input ,a);
  </script>
</body>
</html>
运行结果
![image-20210712195430443](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210712195430443.png)

\2. 优化:

 (1). 问题: 只要修改DOM树的内容，几乎都会导致重排重绘。但是，频繁重排重绘，降低页面加载的效率。

 (2). 解决: 尽量减少修改DOM树次数，但是，内容不能少！

 (3). 2种情况:

 a. 如果同时添加父元素和子元素时，应该先将子元素添加到父元素，最后再将父元素一次性添加到DOM树上。

 b. 如果父元素已经在页面上了，要添加多个平级子元素。就要借助于文档片段对象来实现

  1). 什么是文档片段对象: 内存中临时保存多个平级子元素的虚拟父元素

  2). 如何:

  i. 先创建文档片段对象:

  var 文档片段对象=document.createDocumentFragment();

           创建  文档  片段

  ii. 将子元素先添加到文档片段对象中

  文档片段对象.appendChild(子元素)

  iii. 将文档片段对象一次性添加到页面上

  父元素.appendChild(文档片段对象);

\3. 删除元素：父元素.removeChild(子元素)

\4. 示例: 动态生成表格

 1_createTable.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps15.jpg)

<!DOCTYPE HTML>
<html>

<head>
  <title>动态创建表格</title>
  <meta charset="utf-8" />
  <style>
    table {
      width: 600px;
      border-collapse: collapse;
      text-align: center;
    }

    td,
    th {
      border: 1px solid #ccc
    }
  </style>

</head>

<body>
  <div id="data">
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>薪资</th>
          <th>年龄</th>
        </tr>
      </thead>
    </table>
  </div>
  <script>
    var json = [
      { "ename": "Tom", "salary": 11000, "age": 25 },
      { "ename": "John", "salary": 13000, "age": 28 },
      { "ename": "Mary", "salary": 12000, "age": 25 }
    ];

    //1. 创建tbody
    var tbody=document.createElement("tbody");
    //2. 遍历json数组中每个员工对象
    for(var emp of json){
      //每遍历一个员工对象就创建一个tr，并将tr添加到tbody中
      var tr=document.createElement("tr");
      tbody.appendChild(tr);
      //3. 遍历当前员工对象中每个属性
      for(var key in emp){
        //每遍历一个属性就创建一个td，并将td添加到tr中
        var td=document.createElement("td");
        tr.appendChild(td);
        //设置当前td的内容为当前员工对象的当前属性的属性值
        td.innerHTML=emp[key];
      }
    }

    //4. 将tbody追加到table中
    //4.1 先查找table
    var table=document.querySelector(
      "#data>table"
    );
    //4.2 将tbody追加到table下
    table.appendChild(tbody);
  </script>
</body>

</html>
运行结果：
![image-20210712195809772](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210712195809772.png)

 1_createTable2.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps16.jpg)

<!DOCTYPE HTML>
<html>

<head>
  <title>动态创建表格</title>
  <meta charset="utf-8" />
  <style>
    table {
      width: 600px;
      border-collapse: collapse;
      text-align: center;
    }

    td,
    th {
      border: 1px solid #ccc
    }
  </style>

</head>

<body>
  <div id="data">
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>薪资</th>
          <th>年龄</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
  <script>
    var json = [
      { "ename": "Tom", "salary": 11000, "age": 25 },
      { "ename": "John", "salary": 13000, "age": 28 },
      { "ename": "Mary", "salary": 12000, "age": 25 }
    ];
    /*先手工在html中<thead>平级之后添加一个<tbody></tbody>*/
    //1. 创建文档片段对象
    var frag=document.createDocumentFragment();
    //2. 遍历json数组中每个员工对象
    for(var emp of json){
      //每遍历一个员工对象就创建一个tr，并将tr添加到文档片段对象中
      var tr=document.createElement("tr");
      frag.appendChild(tr);
      //3. 遍历当前员工对象中每个属性
      for(var key in emp){
        //每遍历一个属性就创建一个td，并将td添加到tr中
        var td=document.createElement("td");
        tr.appendChild(td);
        //设置当前td的内容为当前员工对象的当前属性的属性值
        td.innerHTML=emp[key];
      }
    }

    //4. 将文档片段对象追加到tbody中
    //4.1 先查找tbody
    var tbody=document.querySelector(
      "#data>table>tbody"
    );
    //4.2 将文档片段对象追加到tbody下
    tbody.appendChild(frag);
  </script>
</body>

</html>
运行结果：
![image-20210712200023039](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210712200023039.png)

<!DOCTYPE HTML>
<html>

<head>
  <title>动态创建表格</title>
  <meta charset="utf-8" />
  <style>
    table {
      width: 600px;
      border-collapse: collapse;
      text-align: center;
    }

    td,
    th {
      border: 1px solid #ccc
    }
  </style>

</head>

<body>
  <div id="data">
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>薪资</th>
          <th>年龄</th>
          <th>删除</th>
        </tr>
      </thead>
    </table>
  </div>
  <script>
    var json = [
      { "ename": "Tom", "salary": 11000, "age": 25 },
      { "ename": "John", "salary": 13000, "age": 28 },
      { "ename": "Mary", "salary": 12000, "age": 25 }
    ];

    //1. 创建tbody
    var tbody=document.createElement("tbody");
    //2. 遍历json数组中每个员工对象
    for(var emp of json){
      //每遍历一个员工对象就创建一个tr，并将tr添加到tbody中
      var tr=document.createElement("tr");
      tbody.appendChild(tr);
      //3. 遍历当前员工对象中每个属性
      for(var key in emp){
        //每遍历一个属性就创建一个td，并将td添加到tr中
        var td=document.createElement("td");
        tr.appendChild(td);
        //设置当前td的内容为当前员工对象的当前属性的属性值
        td.innerHTML=emp[key];
      }
      //在当前行中所有属性td添加完之后，再额外添加一个td，到tr中
      var td=document.createElement("td");
      tr.appendChild(td);
      //再创建一个button元素，放入td中
      var btn=document.createElement("button");
      td.appendChild(btn);
      //设置button的内容为×
      btn.innerHTML="×";
      //为当前按钮绑定单击事件，点哪个按钮，就让当前点击的按钮的内容变❀
      btn.onclick=function(){
        // this.innerHTML="❀";
        var tbody=document.querySelector(
          "#data>table>tbody"
        );
        var tr=
          this//当前button
          .parentElement//td
          .parentElement//tr
        var ename=tr.children[0].innerHTML;
        var 结果=confirm(`是否继续删除${ename}吗?`)
        console.log(结果);
        if(结果==true){
          //最终: 
          tbody.removeChild(tr);
        }
      }
    }

    //4. 将tbody追加到table中
    //4.1 先查找table
    var table=document.querySelector(
      "#data>table"
    );
    //4.2 将tbody追加到table下
    table.appendChild(tbody);
  </script>
</body>

</html>
运行结果：
![image-20210712200109627](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210712200109627.png)

补: 浏览器三大对话框:

输入框: var str=prompt("提示信息")

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps18.jpg)

\2. 警告框: alert("警告信息")

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps19.jpg)

确认框: var 结果=comfirm("确认信息")

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps24.jpg)

三. BOM: Browser Object Model

\1. 什么是: 专门操作浏览器窗口和软件的一套对象和方法的统称。

\2. 何时: 今后只要想操作浏览器窗口或获取浏览器软件的信息，都用bom

\3. DOM 和 BOM差别:

 (1). DOM专门负责操作网页范围内的一切内容

 (2). BOM专门负责操作网页范围以外，浏览器窗口或浏览器软件中的一切内容

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps25.jpg)

\4. 问题: 没有标准！有严重的兼容性问题！

\5. 包括:

 window, location, history, navigator, document, screen, event

\6. window对象3大角色:

 (1). 代替ES标准中的global充当全局作用域对象

  所有直接声明的全局变量和全局函数，都默认保存在window对象中:

 (2). 保存了所有"原生"的对象和方法:

 a. 原生: 不需要下载任何第三方东西，就可直接使用的对象和方法。

 b. 包括: ES+DOM+BOM

 c. 比如: window.Array, window.document,  window.alert...

 (3). 代表当前正在打开的这个浏览器窗口:

 a. window可获得当前窗口的大小: 2组

  1). 完整窗口大小:

   window.outerWidth

   window.outerHeight

  2). 仅文档显示区内部大小:

   window.innerWidth

   window.innerHeight

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps26.jpg)

 b. 打开和关闭窗口:

 window.open()

 window.close()

总结:

c. 自定义扩展属性:

 1). 何时: 2种

 i. 代替id、class、元素等选择器作为查找触发事件的元素的条件

 ii. 在客户端元素上临时缓存业务数据

HTML中: <元素 data-自定义属性名="属性值">

 3). js中: 2种: （不能用.访问）

 i. 核心DOM:

 var 属性值=元素.getAttribute("data-自定义属性名")

 元素.setAttribute("data-自定义属性名","属性值")

 ii. HTML5标准:  元素.dataset.自定义属性名

(3). 修改样式:

a. 修改元素的内联样式:

 元素.style.css属性="属性值"

b. 获取元素的完整样式:

 var style=getComputedStyle(元素对象);

 style.css属性

 计算后的样式都是只读的

c. 批量修改元素的样式时，都用class:

 元素.className="class名"

总结: 不要背英文名字！反而应该记中文能做哪些事儿！

\3. 添加/删除元素:

(1). 只添加一个新元素: 3步

a. 创建一个新元素:

var 新元素=document.createElement("标签名")

b. 为元素设置关键属性:

新元素.属性名="属性值";

c. 将新元素添加到DOM树: 3种:

 1). 末尾追加:

 父元素.appendChild(新元素)

 2). 在某个元素前插入:

 父元素.insertBefore(新元素, 现有元素)

 3). 替换某个元素:

 父元素.replaceChild(新元素, 现有元素)

(2). 优化: 尽量减少操作DOM树的次数，2种:

a. 如果同时添加父元素和子元素，应该先将子元素添加到父元素，最后再将父元素一次性添加到DOM树

b. 如果父元素已经在页面上，要添加多个平级子元素。应该利用文档片段对象

 1). 创建文档片段对象:

 var frag=document.createDocumentFragment()

 2). 将子元素添加到文档片段对象中:

 frag.appendChild(子元素)

 3). 最后将文档片段对象一次性添加到DOM树上父元素下
 父元素.appendChild(frag);

(3). 删除元素: 父元素.removeChild(子元素)

总结: 不要背英文名字！反而应该记中文能做哪些事儿！

总结:

BOM:

\1. window:

(1). 获得窗口大小:

a. 获得完整窗口大小:

window.outerWidth和window.outerHeight

b. 获得文档显示区大小:

window.innerWidth和window.innerHeight

(2). 打开和关闭窗口:

window.open()和window.close()

今日对应小程序视频列表:

 小程序->在线->DOM->day02

  4.1 自定义扩展属性
  链接：<https://pan.baidu.com/s/14gf-YzkV1Yui9eNHEvv24A> 提取码：4eti

  4.2 标签页 tabs
  链接：<https://pan.baidu.com/s/1iJwKs2we7zRTAGmsZXcnog> 提取码：69ie

 小程序->在线->JSCORE->day03:

  1 修改样式, 计算后的样式

  链接：<https://pan.baidu.com/s/1ITGMlBVQRohGS_86zo0K4g> 提取码：ifj2

  作业: 带class样式的表单验证valiWithCss

  链接： <https://pan.baidu.com/s/1QI5LRZohca4NGt6IWOZRPQ> 提取码：vdyy

 2 DOM 添加新元素...
​ 链接：<https://pan.baidu.com/s/111PZogkjuP19_UYOEOH4Sg> 提取码：a3b4

  \3. DOM table 删除行 确认框

  链接：<https://pan.baidu.com/s/1oOKWUVi2MZCa7U6SFFSinA> 提取码：ognz

作业:

\1. 复习: 小程序->在线-> DOM ->day03
\2. 预习: 小程序->在线->DOM-> day04

\3. （学有余力）作业: 倒计时关闭窗口
 链接：<https://pan.baidu.com/s/1SAMfVMX2pASYsJ3OLad6fA> 提取码：979d

 5s后自动关闭

  留在本页

\4. （学有余力）作业； 选择省份和城市，级联下拉列表

 链接：<https://pan.baidu.com/s/1W412yclqjdHwG10tJCtQQQ> 提取码：e2ov

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml20824\wps27.jpg)

复习属性选择器

day10

一. BOM: Browser Object Model

     浏览器 对象 模型

\1. 什么是:

专门操作浏览器窗口和软件的一套对象和方法的统称。

\2. 何时:

 今后只要想操作浏览器窗口或获取浏览器软件的信息，都用bom

\3. DOM 和 BOM差别:

 (1). DOM专门负责操作网页范围内的一切内容

 (2). BOM专门负责操作网页范围以外，浏览器窗口或浏览器软件中的一切内容

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml11908\wps1.jpg)

\4. 问题:

 没有标准！有严重的兼容性问题！

\5. 包括:

 window, location, history, navigator, document, screen, event

\6. window对象3大角色:

 (1). 代替ES标准中的global充当全局作用域对象

  所有直接声明的全局变量和全局函数，都默认保存在window对象中:

 (2). 保存了所有"原生"的对象和方法:

 a. 原生: 不需要下载任何第三方东西，就可直接使用的对象和方法。

 b. 包括: ES+DOM+BOM

 c. 比如: window.Array, window.document,  window.alert...

 (3). 代表当前正在打开的这个浏览器窗口:

 a. window可获得当前窗口的大小: 2组

  1). 完整窗口大小:

   window.outerWidth

   window.outerHeight

  2). 仅文档显示区内部大小:

   window.innerWidth

   window.innerHeight

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml11908\wps2.jpg)

 b. 打开和关闭窗口:

 window.open()

 window.close()

\7. 打开新链接共有: 4种情况:

 (1). 在当前窗口打开，可后退

 a. HTML: <a href="url"  target="_self">

 b. js: window.open("url", "_self")

 (2). 在当前窗口打开，禁止后退

 a. js:location.replace("新url")

 (3). 在新窗口打开，可同时打开多个

 a. HTML: <a href="url"  target="_blank">

 b. js: window.open("url", "_blank");

 (4). 在新窗口打开，只能打开一个

 a. HTML: <a href="url"  target="自定义窗口名">

 b. js: window.open("url", "自定义窗口名");

 (5). 原理:

 a. 每个窗口在内存中都有一个唯一的窗口名(我们看不见)

 b. 浏览器规定，相同名称的窗口，只能打开一个。如果硬要打开第二个同名窗口，则新同名窗口会覆盖旧同名窗口。

 c. 如何给窗口起名:

  1). <a href="url"  target="任意自定义窗口名">

  2). window.open("url", "任意自定义窗口名")

 d. 结果: 所有窗口都有一个"window.name"属性，用来记录当前窗口的窗口名。

   所以，我们自己在起变量名时，最好不要用"name"

 e. 预定义窗口名:

   _self: 表示用当前窗口自己的名字，作为新打开的窗口的名字。结果，新打开的同名窗口，会覆盖当前窗口自己。

   _blank: 表示不指定任何窗口名，浏览器就会在底层自动为每个窗口随机分配窗口名。因为随机分配的窗口名肯定不重复！所以，可反复打开多个！

 (6). 示例: 打开链接四种方式:

 4_open.html

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>打开新链接方式总结</title>
  <script>
    /*打开新链接方式总结：
    1. 在当前窗口打开，可后退
    2. 在当前窗口打开，不可后退
    3. 在新窗口打开，可打开多个
    4. 在新窗口打开，只能打开一个
    */
  </script>
</head>

<body>
  <h3>1. 在当前窗口打开，可后退</h3>
  <a href="http://tmooc.cn" target="_self">click me</a><br/>
  <button onclick="open1()">click me</button>
  <script>
    function open1(){
      window.open("http://tmooc.cn","_self");
    }
  </script>

<h3>2. 在当前窗口打开，可后退</h3>
  <button onclick="open2()">click me</button>
  <script>
    function open2(){
      location.replace("http://tmooc.cn");
    }
  </script>

<h3>3. 在新窗口打开，可同时打开多个</h3>
<a href="http://tmooc.cn" target="_blank">click me</a><br/>
<button onclick="open3()">click me</button>
<script>
  function open3(){
    window.open("http://tmooc.cn","_blank");
  }
</script>

<h3>4. 在新窗口打开，只能打开一个</h3>
<a href="http://tmooc.cn" target="tmooc">click me</a><br/>
<button onclick="open4()">click me</button>
<script>
  function open4(){
    window.open("http://tmooc.cn","tmooc")
  }
</script>
</body>

</html>
运行结果
![image-20210713191038865](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210713191038865.png)

![image-20210713191231206](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210713191231206.png)

\8. history:

 (1). 什么是: 内存中专门保存当前窗口打开后成功访问过的所有url的历史记录数组

 (2). 强调: 浏览器不允许我们对这个history数组做任何修改操作！

 (3). 只开放了一个功能: 前进、后退、刷新

 a. 前进一步: history.go(1)

 b. 后退一步: history.go(-1)

 c. 刷新: history.go(0)

 (4). 示例: 使用程序实现前进、回退

 用法: 运行9-1_history.html，点页面中的2、3两个链接，先后打开第2页，第3页。然后，用页面中自己定义的超链接，实现前进后退功能。

\9. location对象:

 (1). 什么是: 专门保存浏览器地址栏中正在打开的一个url的信息的对象

 (2). 属性: 分段获得url中各个部分的信息

  location.href  获得完整的url

  location.protocol 获得url中协议部分

  location.host 获得url中主机名+端口号

  location.hostname 获得主机名

  location.port 端口号

  location.pathname 可获得从主机名后的/往后的相对路径

  location.search 可获得从?往后的查询字符串参数

  location.hash 可获得从#往后的锚点地址

 (3). 方法:

 a. 在当前窗口打开，禁止后退: location.replace("新url")

 b. 在当前窗口打开，可后退: location.href="新url"

    相当于: window.open("新url", "_self")

 c. 也能刷新页面: location.reload();

    相当于: history.go(0)

\10. navigator:

 (1). 什么是: 专门保存浏览器配置信息的对象

 (2). 何时: 今后，只要想获得浏览器的配置信息时，都用navigator。

 (3). 常用:

 a. navigator.userAgent: 获取浏览器的名称、内核、版本号

 b. navigator.plugins: 获取浏览器中安装的所有创建信息的列表

  navigator.plugins["完整插件名"]!==undefined 说明装了。

 c. 示例: 检查浏览器是否安装PDF和Flash插件

 day03剩余/11_navigator.html

<!DOCTYPE HTML>
<html>

<head>
  <title>navigator对象常用属性</title>
  <meta charset="utf-8" />

</head>

<body>
  <script>
    console.log(navigator.userAgent);
    console.log(navigator.plugins);
    if(navigator.plugins["Chrome PDF Viewer"]!==undefined){
      //向网页内容中输入一行话
      document.write(`<h3>已安装PDF插件，可查看PDF电子书</h3>`)
    }else{
      document.write(`<h3>未安装PDF插件，<a href="#">点此下载安装</a></h3>`)
    }

    if(navigator.plugins["Shockwave Flash"]!==undefined){
      //向网页内容中输入一行话
      document.write(`<h3>已安装Flash插件，可正常播放视频</h3>`)
    }else{
      document.write(`<h3>未安装Flash插件，<a href="#">点此下载安装</a></h3>`)
    }
  </script>
</body>

</html>
运行结果
已安装PDF插件，可查看PDF电子书
未安装Flash插件，点此下载安装
二. 事件:

\1. 回顾:

 (1). 什么是事件: 浏览器自动触发的或用户手动触发的页面中内容或状态的改变

 (2). 什么是事件处理函数: 当事件发生时，我们希望自动调用执行的函数

 (3). 什么是事件绑定:

 a. 每个元素上都有一批on开头的事件属性

 b. 事件绑定就是提前将事件处理函数保存到元素的事件属性上。

 c. 结果: 当事件发生时

  1). 浏览器先找到元素身上的对应事件属性

  2). 自动调用事件属性中保存的事件处理函数

\2. 事件绑定: 3种:

 (1). 在HTML中手工绑定:

  <元素 on事件名="事件处理函数()">

   <script>      function 事件处理函数(){ ... }
  问题: 麻烦，不便于今后维护

 (2). 在js中以赋值方式绑定:

  查找触发事件的元素对象

  绑定事件: 元素对象.on事件名=function(){ ... this ... }

  问题: 如果希望给一个元素的一个事件属性同时绑定多个事件处理函数，就无法实现。后赋值的事件处理函数会把原事件处理函数覆盖。

 (3). 在js中以添加事件监听对象的方式绑定(重点）:

 a. 如何: 2步:

  1). 查找触发事件的元素

        添加事件监听对象

  2). 元素对象.addEventListener("事件名", 事件处理函数)

 b. 强调:

  1). 添加事件监听时，事件名称不要加on前缀:

  其实，DOM标准中事件名本来是没有on的！

  比如: click, blur, change

  元素对象中为了将事件属性和其它普通属性区分开，便于识别，才在事件属性名前加on。

  2). 添加事件监听对象时，事件处理函数结尾不要加()!

  因为事件处理函数都不是立刻执行！而是将来某个时间，触发事件时，才自动调用执行。

 c. 原理:

  1). 浏览器中有一个巨大的事件监听对象队列。

  2). addEventListener做了2件事:

  i. 新建一个事件监听对象，其中保存三样东西:元素对象、事件名、事件处理函数

  ii. 自动将事件监听对象添加到事件监听对象队列中。

  3). 重复执行几次addEventListener()就会反复添加几个重复的事件监听对象

  4). 将来事件发生时:

  i. 浏览器先查找元素对象自己身上的事件属性中保存的事件处理函数，优先自动执行.

  ii. 然后浏览器才会去事件监听对象队列中遍历查找所有符合要求(元素相同，事件名也相同)的事件监听对象。找到几个，就触发几个事件处理函数。

 d. 移除事件监听对象:

      移除 事件监听对象

  1). 元素.removeEventListener("事件名", 原事件处理函数)

  2). 问题: 如果绑定时使用匿名函数绑定，移除时也使用完全相同的匿名函数定义移除，则无法成功移除！

  3). 原因: function底层等于new Function。添加事件监听时的function会创建一个新函数对象。而移除事件监听时的function也会再创建另一个新函数对象。添加和移除时两次function创建的函数对象，肯定地址不同！不是同一个函数，所以，无法移除

  4). 解决: 今后只要一个事件监听对象有可能被移除，则绑定时就不要用匿名函数。绑定时就必须用有名称的函数。然后，移除监听对象时，也用函数名移除.

  5). 坑: 一旦绑定时，使用有名称的函数添加事件监听，则完全相同的事件监听对象只能添加一个。

  6). 解决:

  i. 自己用数组保存所有事件处理函数(学有余力，看扩展视频)

  ii. jq中才解决

 e. 示例: 为发射按钮添加事件监听，可同时发射多种子弹，也可移除子弹
 1_addEventListener.html

<!DOCTYPE html>
<html>

<head>
   <meta charset="utf-8" />
   <title>...</title>

</head>

<body>
   <button id="btnShoot">shoot</button><br>
   <button id="btnAward">获得跟踪导弹</button><br>
   <button id="btnBreak">失去跟踪导弹</button><br>
   <script>
      var btnShoot = document.getElementById("btnShoot");
      var btnAward = document.getElementById("btnAward");
      var btnBreak = document.getElementById("btnBreak");
      //开局，btnShoot默认只能发射一种普通子弹
      btnShoot.onclick = function () {
         console.log(`发射普通子弹......`)
      }

      var shoot2=function(){
         console.log(`发射跟踪导弹=>=>=>`)
      }

      //希望点btnAward按钮后，
      btnAward.onclick=function(){
         //为btnShoot多绑定一个事件处理函数，可同时发生两种子弹: 普通子弹和跟踪导弹
         btnShoot.addEventListener(
            "click",
            shoot2
         )
      }

      //希望点击第三个btnBreak按钮后
      btnBreak.onclick=function(){
         //从btnShoot元素上移除跟踪导弹
         btnShoot.removeEventListener(
            "click",
            shoot2
         )
      }
   </script>
</body>

</html>
运行结果
![image-20210713193743389](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210713193743389.png)

![image-20210713193821615](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210713193821615.png)

\3. *事件模型:

 (1). 问题: 点在内层元素上，也会触发外层元素的单击事件

 (2). 原因: 事件模型:

 a. 什么是: 全球的浏览器开发者一致认为，点在内层元素上，也相当于点在了外层元素上。所以，就有了事件模型。

 b. 包括: 3个阶段(重点):

  1). 捕获: 从树根节点开始，到当前触发事件的目标元素结束，由外向内依次遍历并记录各级父元素上是否绑定了事件处理函数。只记录，不执行！

  2). 目标触发: 总是优先触发实际点击的目标元素上的事件处理函数。

   目标元素(target): 实际点击到的那个元素

  3). 冒泡: 由

目标元素开始，到树根节点结束，由内向外依次触发各级父元素上绑定的事件处理函数。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml11908\wps10.jpg)

\4. 事件对象:

 (1). 什么是: 当事件发生时，浏览器自动创建的，保存事件相关信息的对象。

 (2). 何时: 2种:

 a. 想获得事件相关的信息时

 b. 想改变事件默认的行为

 (3). 如何获得:

 a. 事件对象总是作为事件处理函数的第一个实参值，自动传入

 b. 所以:

  //当事件发生时

  //浏览器自动创建事件对象event

               ↓

  元素对象.on事件名=function( e ){ ... }

  或

  元素对象.addEventListener("事件名",function(e){ ... })

 (4). 事件对象的功能:

 a. 停止冒泡: e.stopPropagation()

        停止  扩展

  示例: 点内层元素，也触发父元素上的事件处理函数:

  2_bubble.html

<!DOCTYPE HTML>
<html>

<head>
  <title>事件处理</title>
  <meta charset="utf-8" />
  <style>
    #d1 #d2 #d3 {
      cursor: pointer
    }

    #d1 {
      background-color: green;
      position: relative;
      width: 150px;
      height: 150px;
      text-align: center;
      cursor: pointer;
    }

    #d2 {
      background-color: blue;
      position: absolute;
      top: 25px;
      left: 25px;
      width: 100px;
      height: 100px;
    }

    #d3 {
      background-color: red;
      position: absolute;
      top: 25px;
      left: 25px;
      width: 50px;
      height: 50px;
      line-height: 50px;
    }
  </style>

</head>

<body>
  <div id="d1">
    <div id="d2">
      <div id="d3">
      </div>
    </div>
  </div>
  <script>
    var d1=document.getElementById("d1");
    var d2=document.getElementById("d2");
    var d3=document.getElementById("d3");

    d1.onclick=function(){
      alert("d1疼!");
    }

    d2.onclick=function(e){
      alert("d2疼!");
      e.stopPropagation();
    }

    d3.onclick=function(e){
      e.stopPropagation();
      alert("d3疼!");
    }

  </script>
</body>

</html>
运行结果
![image-20210713194646908](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210713194646908.png)

 b. 利用冒泡/事件委托

第一次触发的事件：DOMContentLoaded  只等HTML和js不等css图片

load必须等所有网页和图片全部加载完

第二次触发的事件：(document).ready(function(){})

  1). 问题: 浏览器触发事件采用的是遍历事件监听对象队列形式查找事件监听对象。如果添加的事件监听对象越多，遍历时间越长，事件响应的速度越慢

  2). 解决: 优化，今后，应该尽量减少事件绑定的次数。但是，功能不能少！

  3). 如何: 事件委托/利用冒泡，3步（重点）:

  i. 当多个子元素都要绑定相同的事件处理函数时，其实，我们只要只给父元素绑定一个事件处理函数即可！

   结果: 所有子元素都可通过冒泡的方式触发父元素上统一的事件处理函数——共用！

   问题: 因为事件处理函数绑定在父元素上的，触发也是在父元素上触发的，所以this->父元素了，不再指子元素。再使用this，就无法获得实际点击的子元素了。

  ii. 解决: 今后，只要使用事件委托，都要用e.target代替this.

  e.target: 是事件对象中专门保存最初点击的那个目标元素的特殊属性。

 要添加形参e

   优点: 不随冒泡而改变！始终如一。

   问题: 用户有可能点在其它元素上，而我们不希望其它元素触发事件！

  iii. 解决: 事件处理函数中要先验证当前点击的目标元素的特征，是否符合要求。只有目标元素的特征符合要求，才继续执行后续操作。如果目标元素的特征不是想要的，就什么也不做！

   强调: 一切目标元素与其他元素不同的特征，都可作为判断依据

   .className，.nodeName，.name, ... ...

  4). 示例: 使用事件委托实现计算器效果:

  3_calc.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml11908\wps11.jpg)

<!DOCTYPE HTML>
<html>

<head>
  <title>取消与利用冒泡</title>
  <meta charset="utf-8" />
</head>

<body>
  <div id="keys">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button><br>
    <button>C</button>
    <button>+</button>
    <button>-</button>
    <button>=</button>
  </div>
  <textarea id="sc" style="resize:none;width:200px; height:50px;" readonly></textarea>
  <script>
    //DOM4步
    //1. 查找触发事件的元素
    //本例中: 因为多个子元素都要触发单击事件，所以，应该用事件委托方式优化。事件只绑定在父元素上一份即可！
    var div = document.getElementById("keys");
    //2. 绑定事件处理函数
    div.onclick = function (e) {
      if (e.target.nodeName === "BUTTON") {
        // e.target.innerHTML="❀";
        //先获得充当显示屏的id为sc的文本域元素
        var sc = document.getElementById("sc");
        //先判断当前点击的按钮的内容
        //复习第一阶段分支结构
        switch (e.target.innerHTML) {
          case "C"://如果点在C按钮上
            //就清空显示屏的内容
            sc.value = "";
            break;
          case "="://否则如果点在=按钮上
            //就获得显示屏中的表达式，计算结果
            var str = sc.value;
            //先尝试计算显示屏中的内容
            //复习第一个阶段
            try {
              //将显示屏的内容交给eval做计算，将结果再替换回显示屏中
              sc.value = eval(str);
            } catch (err) {//万一执行失败
              //将错误提示显示在显示屏上
              sc.value = err;
            }
            break;
          //否则如果点在其它普通的按钮上
          default:
            //就把当前按钮的内容追加到显示屏上
            sc.value += e.target.innerHTML;
        }
      }
    }
  </script>
</body>

</html>
运行结果
![image-20210713194917009](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210713194917009.png)

 c. 阻止默认行为:

  1). 问题: 有些HTML元素身上带有我们不想要的默认行为。

  2). 比如: 仅当做按钮用的a

    会自动在地址栏url结尾添加#，不是我们想要的

  3). 解决: 对于a，有两种方式:

  a.  文本 只对a元素有效

   1). javascript: href中的javascript意思是不让a跳转到其它页面，而是在当前页面的内容中执行一条js语句。

   2). ; 意为是一条什么也不做的空语句

   3). javascript:; 合起来表示执行一条空语句，相当于什么也不做。

  b. e.preventDefault()  对任意元素都有效

    阻止  默认行为

  4). 示例: 点a，返回页面顶部，并阻止a修改地址栏中url

  4_preventDefault.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    a{
      position:fixed;
      right:0;
      bottom:150px;
    }
  </style>
</head>
<body style="height:2000px">
  <!--希望:点a可返回顶部，但是不要在地址栏结尾加#top-->
  <!-- <a id="a1" href="javascript:;">返回顶部</a> 
  <script>
    var a1=document.getElementById("a1");
    a1.onclick=function(){
    //让窗口  滚动  到 顶部0位置
      window.scrollTo(0,0);
    }
  </script> -->

  <a id="a1" href="#">返回顶部</a>
  <script>
    var a1=document.getElementById("a1");
    a1.onclick=function(e){
        //阻止  默认行为
      e.preventDefault();
    //让窗口  滚动  到 顶部0位置
      window.scrollTo(0,0);
    }
  </script>
</body>
</html>
运行结果
![image-20210713195005593](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210713195005593.png)

d. 获取鼠标位置: 3组坐标

  1). 鼠标相对于屏幕左侧、上方的距离

   e.screenX, e.screenY

  2). 鼠标相对于浏览器内部文档显示区左侧、上方的距离

   e.clientX, e.clientY

    客户端  客户端

  3). 鼠标相对于当前点击的HTML元素左侧、上方的距离

   e.offsetX, e.offsetY

    偏离   偏离

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml11908\wps13.jpg)

  4). 示例: 点击图片，获得鼠标三组坐标位置
  5_pop1.html

<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <title>在当前显示区范围内实现点不到的小方块</title>
  <style>
    div {
      position: fixed;
      top:100px;
      left:150px;
      width: 100px;
      height: 100px;
      background-image: url(images/xiaoxin.gif);
      background-size: 100%;
    }
  </style>

</head>

<body>
  <div id="pop"></div>
  <script>
    var pop=document.getElementById("pop");
    pop.onclick=function(e){
      console.log(e.screenX, e.screenY);
      console.log(e.clientX, e.clientY);
      console.log(e.offsetX, e.offsetY);
    }
  </script>
</body>

</html>
运行结果
![image-20210713195039070](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210713195039070.png)

总结:

BOM:

\1. window:

(1). 获得窗口大小:

a. 获得完整窗口大小:

window.outerWidth和window.outerHeight

b. 获得文档显示区大小:

window.innerWidth和window.innerHeight

(2). 打开和关闭窗口:

window.open()和window.close()

\2. 打开新链接4种方式:

(1). 在当前窗口打开，可后退

a. html: <a href="url" target="_self">

b. js: window.open("url", "_self");

(2). 在当前窗口打开，禁止后退

a. js: location.replace("新url")

(3). 在新窗口打开，可同时打开多个

a. html: <a href="url" target="_blank">

b. js: window.open("url", "_blank");

(4). 在新窗口打开，只能打开一个

a. html: <a href="url" target="自定义窗口名">

b. js: window.open("url", "自定义窗口名")

\3. history:

(1). 前进: history.go(n)

(2). 后退: history.go(-n)

(3). 刷新: history.go(0)

\4. location:

(1). 属性: 分段获得url中各个部分:

a. location.href  完整url

b. location.protocol  协议

c. location.host  主机名+端口号

d. location.hostname  主机名

e. location.port  端口号

f. location.pathname  相对路径

g. location.search  ?及其之后的查询字符串参数列表

h. location.hash   #锚点地址

(2). 方法:

a. 在当前窗口打开，可后退：

location.assign("新url") 或 location.href="新url"

b. 在当前窗口打开，禁止后退:

location.replace("新url")

c. 刷新: location.reload();

\5. navigator

(1). 查看浏览器的名称和版本号: navigator.userAgent

(2). 查看浏览器中安装的插件列表: navigator.plugins

总结: 事件:

\1. 绑定事件: js中:

(1). 一个事件只绑定一个处理函数

元素.on事件名=function(){ ... }

(2). 一个事件绑定多个处理函数

元素.addEventListener("事件名", 事件处理函数)

(3). 移除一个事件监听:

元素.removeEventListener("事件名", 原事件处理函数对象)

\2. 事件模型: 捕获，目标触发，冒泡

\3. 事件对象:

(1). 获得事件对象:

元素.on事件名=function(e){ ... }

(2). 阻止冒泡: e.stopPropagation()

(3). 当多个子元素都要绑定相同事件时，利用冒泡/事件委托3步:

a. 事件只在父元素上绑定一次

b. e.target代替this

c. 判断e.target的任意特征是否是我们想要的元素

(4). 阻止元素默认行为:

e.preventDefault()

(5). 获取鼠标位置:

a. 相对于屏幕左上角的x，y坐标:

e.screenX,  e.screenY

b. 相对于文档显示区左上角的x，y用坐标:  

e.clientX,  e.clientY

c. 相对于事件所在元素左上角的x，y坐标:

e.offsetX  e.offsetY

今日对应小程序视频列表:

 小程序->在线->DOM->day03

  \4. 打开新链接4种方式

  链接：<https://pan.baidu.com/s/1rlMf1cLJWhLuZzOrNMld6Q> 提取码：f90f

 小程序->在线->DOM->day04

  \0. history, location, navigator

 链接：<https://pan.baidu.com/s/1Ic8NMJVJ4BSWXE6CK9ZBRQ> 提取码：lrzc

  \1. 添加事件监听，移除事件监听 ...

  链接：<https://pan.baidu.com/s/1ilh-VpLUx54YExIzw8v-dA> 提取码：2n2e

  \2. 事件模型

  链接：<https://pan.baidu.com/s/13pK15bk5c1d21UidoXs2lQ> 提取码：g2d5

  \3. 利用冒泡 事件委托

  链接：<https://pan.baidu.com/s/18_S9n2MMpmREsn2SK1E6hA> 提取码：vodj

  \4. 阻止默认行为

  链接：<https://pan.baidu.com/s/1IZF3psHaSG-c159EQgfLJA> 提取码：64vu

  \5. 鼠标坐标x y 原生DOM

  链接：<https://pan.baidu.com/s/1CD0OW3_WcUxZqNllFrsxUA> 提取码：eb7o

作业:

\1. 复习: 小程序->在线->DOM-> day04

\2. 利用冒泡 事件委托 delegate 计算器...

 链接：<https://pan.baidu.com/s/18_S9n2MMpmREsn2SK1E6hA> 提取码：vodj

\3. 总结. 1小时DOM知识点串讲视频
 <https://pan.baidu.com/s/1cICmdouapjRlBu9W5IzFNw> 提取码：i0lx

\4. （选做）看小程序视频学习DOM版学子商城项目

 小程序->在线->DOM->day04 扩展: DOM版学子商城...

 家里环境xampp和nodejs能用，且第一阶段学的好的同学:

 从小程序中网盘地址中下载xzserver_start.zip，看视频中day01和day02，跟着做

 家里环境xampp和nodejs不能用，或者第一阶段学的不好的同学：

 从小程序中网盘地址中只下载public.zip，看视频中day01和day02，跟着做

## jQuery
day01

一. 什么是jQuery

\1. 什么是:

 (1). 第三方开发的: 必须下载才能用

 (2). 执行DOM操作的: jQuery还是执行DOM的增删改查+事件绑定操作。学习jQuery只是学习DOM的延续而已。

 (3). 极简化的: jQuery对DOM操作的每一步都进行了简化。

 (4). 函数库: jQuery中都是用函数来解决一切问题。

\2. 为什么: 2个原因:

 (1). 简单

 (2). 解决了大部分浏览器兼容性问题。只要jQuery让用的，几乎都没有兼容性问题。

\3. 何时: 从前很多旧的项目和框架都是用jQuery开发的！

\4. 问题:

 (1). 只有PC端，没有移动端。

 (2). 简化的不彻底: 只对DOM操作的每一步进行了简化，但是没有减少步骤！

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps1.jpg)

\5. 所以，jQuery用的越来越少了。

二. 如何使用jQuery:

\1. 官网: jquery.com

\2. 下载: 版本:

 1.x 兼容旧浏览器

  jquery-1.11.3.js

  未压缩版: 带有完备的注释、代码格式，以及见名知意的变量名。——可读性好，适合学习和开发之用。——体积大，不便于快速下载运行，不适合生产环境

  压缩版: 删除所有注释和代码格式，极简化了变量名。——体积小，便于快速下载运行，适合生产环境。——可读性差，不适合学习和开发之用。

 2.x 不再兼容旧浏览器，但是，暂时也不兼容ES6

 3.x 才开始支持ES6

\3. 在页面中引入jquery: 2种:

 (1). 将jquery.js文件下载到项目本地文件夹，用相对路径引入

  <script src="js/jquery-1.11.3.js">
 问题: 文件只保存在一个位置的服务器上。距离服务器近的用户访问当然快。但是，距离服务器很远的用户，访问就会慢。

 (2). 引入CDN网络中的jquery.js文件

 a. 什么是CDN网络: 内容分发网络。

 b. 原理:

  1). CDN网络可在全球范围共享一个文件

  2). 任意地区的一个客户端想用CDN网络中的文件时，CDN网络都会从距离这个客户端网络最优的服务器下载资源给客户端。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps2.jpg)

 c.如何: 官网->下载->CDN->自己想用的链接地址:

   <script src="官网提供的CDN网址">
  比如:微软提供的cdn网址:

   <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.js">
\4. 我的第一个jquery程序:

1_DOM.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
</head>

<body>
  <h1>jQuery/$工厂函数</h1>
  <button id="btn1">click me(0)</button>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: id为btn1的按钮触发事件
    var btn=document.getElementById("btn1");
    //2. 绑定事件处理函数
    btn.onclick=function(){
      //3. 查找要修改的元素
      //本例中: 就改this
      //4. 修改元素
      //4.1 先取出当前按钮的内容中()中的数字，转为整数
      var n=parseInt(
        this.innerHTML //click me(1123)
                       //0123456789   -1
                       //         |← →|
            .slice(               9 , -1)
      );
      //4.2 将数字+1
      n++;
      //4.3 再将数字拼接回原按钮的内容中
      this.innerHTML=`click me(${n})`;
      //            格式与旧内容必须完全一致
    }
  </script>
</body>

</html>
运行结果
![image-20210714192700915](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210714192700915.png)

1_jQuery.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <script src="js/jquery-1.11.3.js"></script>
</head>

<body>
  <h1>jQuery/$工厂函数</h1>
  <button id="btn1">click me(0)</button>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: id为btn1的按钮触发事件
    //       css的id选择器
    var $btn=$("#btn1");
    //2. 绑定事件处理函数
    $btn.click(function(){
      //3. 查找要修改的元素
      //本例中: 就改this
      var $this=$(this);
      //4. 修改元素
      //4.1 先取出当前按钮的内容中()中的数字，转为整数
      var n=parseInt(
        $this.html()//click me(1123)
                    //0123456789   -1
                    //         |← →|
            .slice(            9 , -1)
      );
      //4.2 将数字+1
      n++;
      //4.3 再将数字拼接回原按钮的内容中
      $this.html(`click me(${n})`);
      //        格式与旧内容必须完全一致
    })
  </script>
</body>

</html>
运行结果
![image-20210714192749858](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210714192749858.png)

三. jQuery原理:

\1. 引入jquery.js文件后，是在内存中新增了一种类型:

 (1). 构造函数: 创建该类型的子对象

 (2). 原型对象: 集中保管该类型所有子对象共用的方法

\2. 只要想使用jQuery家简化版函数，必须先创建jQuery类型的子对象。

 (1). 标准: var jq子对象=new jQuery(选择器);

 (2). 简写: var jq子对象=jQuery(选择器)

 (3). 更简化: var jq子对象=$(选择器)  //$=jQuery

 (4). 强调: 只有jq子对象才能访问jQuery原型对象中的简化版共有方法。而原生的DOM元素对象，无权使用jQuery原型对象中的简化版函数。

 (5). 约定俗成: 凡是用$创建的jquery类型的子对象，命名时都要以$开头！以此和原生DOM家的元素对象区分。

\3. 问题: jQuery家所有的函数几乎都是为了操作DOM元素而定义的。所以，调用jQuery函数都要操作DOM元素。可是，DOM元素从哪儿来？

  解决: jQuery要求，每次创建jQuery子对象时，必须提供一个css选择器作为参数。jQuery构造函数会自动用选择器去DOM树中查找原生的DOM元素。取回来保存进新创建的jq子对象中。

\4. 问题: 将来调用简化版函数时，使用jq子对象调用的。不是用原生的DOM元素调用的！简化版函数的操作，能不能作用到内部保存的原生的DOM元素上？

 解决: 每当对jq子对象调用简化版函数时，简化版函数内部封装的都是原生的DOM操作。所以调简化版函数等效于调用原生的方法和属性，并最终作用到内部保存的元素对象上。

\5. 问题: jQuery中事件处理函数里的this。

 (1). 因为.click会被翻译为.onclick=function(){ ... }，再执行。所以.click()中的this，其实最终还是.onclick里的this。与DOM中的this完全一样！都指向正在点击的当前原生DOM元素对象本身。所以，this无权使用jQuery家简化版函数。

 (2). 解决: 今后，jquery中所有事件处理函数中的this都必须用$()包裹起来，形成一个jq子对象，才能有权利使用jQuery家的简化版函数。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps3.jpg)

四. jQueryAPI三大特点(*):

\1. 自带for遍历: 只对jQuery查找结果对象调用一次简化版函数，就可以自动遍历查找结果中每个DOM元素，自动为每个DOM元素应用多用的DOM操作

\2. 一个函数两用: 凡是和修改相关的函数，都既能用于修改新值，又能用于获取旧值。

 重载:

 如果本次调用函数时，没有传新值参数，则函数默认执行获取旧值的操作

 如果本次调用函数时，传了新值参数，则函数自动改为执行修改操作。

\3. (未完待续...)

\4. 示例: 多个按钮，记录每个按钮的单击次数:

day01剩余/2_jQueryAPI.html

<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <h1>jQueryAPI特点</h1>
  <button id="btn1">click me(0)</button>
  <button id="btn2">click me(0)</button>
  <button id="btn3">click me(0)</button>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //为三个按钮绑定单击事件，记录单击次数
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 查找三个按钮
    //       创建jQ子对象
    //          元素选择器
    //       用元素选择器去查找所有button
    //变量名可以自定义
    //只是习惯上建议以$开头！
    //但是=左边的$没有任何实际意义！
    var $btn=$("button");
    console.log($btn);
    //2. 绑定事件处理函数
    //本例中: 因为三个按钮都要单击
    $btn.click(function(){
      // alert("疼!");
      //3. 查找要修改的元素
      //本例中: 就改this
      var $this=$(this);
      //4. 修改元素
      //4.1 先取出当前按钮的内容中()中的数字，转为整数
      var n=parseInt(
        $this.html().slice(9,-1)
      );
      //4.2 将数字+1
      n++;
      //4.3 再将数字拼接回原按钮的内容中
      $this.html(`click me(${n})`);
      //        格式与旧内容必须完全一致
    })
  </script>
</body>
</html>
运行结果
![image-20210714194110740](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210714194110740.png)

五. 查找元素:

\1. jQuery主要以选择器方式查找元素。

jQuery支持几乎所有CSS3选择器。但是，又额外扩展了一批jquery独有的选择器。

\2. 回顾: 子元素过滤选择器: （CSS中）

 (1). 什么是: 按元素在其父元素下的相对位置选择匹配的元素.

 (2). 包括:

 a.  :first-child  所有父元素下第一个直接子元素

 b.  :last-child  所有父元素下最后一个直接子元素

 c.  :nth-child(i)  所有父元素下第i个直接子元素

   强调: css中下标从1开始

 d.  :only-child  所有父元素下唯一的一个子元素

 (3). 示例: 使用子元素过滤选择器选择指定元素

 day01剩余/5_child_filter.html

<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8" />
 <title></title>
</head>
<body>
  <h3>子元素过滤选择器.</h3>
  <ul>
    <li>child1-basic0</li>
    <li>child2-basic1</li>
    <li>child3-basic2</li>
  </ul>
  <ul>
    <li>child1-basic3</li>
    <li>child2-basic4</li>
    <li>child3-basic5</li>
  </ul>
  <ul>
    <li>child1-basic6</li>
  </ul>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //查找每个ul中第一个li，让其字体颜色变为红色
    $("ul>li:first-child")
    //DOM中: .style.color="red"
    //jq中:    ↑      ↑     ↑
             .css("color","red")
    //查找每个ul中最后一个li
    $("ul>li:last-child")
    .css("background-color","yellow")
    //查找每个ul中处于偶数位置的
    $("ul>li:nth-child(2n)")
    .css("box-shadow","0 0 5px green")
    //查找每个ul中第2个li
    $("ul>li:nth-child(2)")
    .css("border","2px solid red")
    //查找作为ul下唯一子元素的li
    $("ul>li:only-child")
    .css("padding","10px")
  </script>
</body>
</html>
运行结果
![image-20210714194306503](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210714194306503.png)

\3. 基本过滤选择器: （jq新增、独有）

 (1). 什么是: 先将所有符合要求的元素集中保存到一个大的集合中，统一编号。编号从0开始。然后，按元素在集合中的统一编号来选择指定的元素。

 (2). 包括:

 a.  :first 或 :last  选择在结果集合中排名第一或最后的一个元素。

 b.  :eq(i) 或 :lt(i)  或 :gt(i) 选择在结果集合中下标i等于i、小于i、大于i位置的元素

   eq->equal-> =

   lt->less than-> <

   gt->greater than-> >

 c. :even 或 :odd  选择在结果集合中下标位置i等于偶数位置或奇数位置的元素

   even 偶数

   4个字母

   odd 奇数

   3个字母

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps4.jpg)

 (3). 示例: 使用基本过滤选择器选择指定元素:

 day01剩余/6_basic_filter.html

<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8" />
 <title></title>
</head>
<body>
  <h3>基本过滤选择器.</h3>
  <ul>
    <li>child1-basic0</li>
    <li>child2-basic1</li>
    <li>child3-basic2</li>
  </ul>
  <ul>
    <li>child1-basic3</li>
    <li>child2-basic4</li>
    <li>child3-basic5</li>
  </ul>
  <ul>
    <li>child1-basic6</li>
  </ul>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //查找第一个li
    $("ul>li:first")
    .css("color","red");
    //查找最后一个li
    $("ul>li:last")
    .css("background-color","yellow")
    //查找处于(正常人眼)偶数位置的li
    $("ul>li:odd")
    .css("box-shadow","0 0 5px green")
    //查找第2个li
    $("ul>li:eq(1)")
    .css("border","2px solid red")
  </script>
</body>
</html>
运行结果
![image-20210714194951340](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210714194951340.png)

\4. 内容过滤: (jq新增、独有)

 (1). 什么是: 根据元素的内容不同来选择元素

 (2). 包括：

 a. :contains(文本)  选择内容中包含指定文本关键字的元素

   包含

 b. :has(其它选择器)  选择子元素中包含符合选择器要求的元素的父元素

 c. :parent  选择内容非空的元素

   父母

 d. :empty  选择内容为空的元素

   空

 (3). 示例: 使用内容过滤选择器选择指定元素

 10_content_filter.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <link rel="stylesheet" href="css/bootstrap.css" />
  <style>
  </style>
</head>

<body>
  <div class="container">
    <h1>jQuery中的选择器——内容过滤选择器</h1>

    <button>提交订单</button>
    <button>Submit注册信息</button>
    <button>马上提交</button>
    <button>清空重填</button>

    <hr />
    <div class="alert"></div>
    <div class="alert">
      <span class="close">×</span>
    </div>

  </div>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
  //选择包含"提交"二字的按钮，变为绿色按钮
  $("button:contains(提交)")
  .css("background-color","lightGreen")
  //选中包含.close按钮的.alert元素，让它们变为红色的警告框
  $(".alert:has(.close)")
  .css("background-color","pink")
  //选中不包含.close按钮的.alert元素，让它们变为绿色的警告框
  $(".alert:not(:has(.close))")
  //        不   包含 ...
  .css("background-color","lightGreen");
  //选择内容为空的.alert元素
  $(".alert:empty")
  .css("box-shadow","0 0 5px red")
  //选择内容不为空的.alert元素
  $(".alert:not(:empty)")
  .css("box-shadow","0 0 5px green")
  </script>
</body>

</html>
运行结果
![image-20210714195247105](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210714195247105.png)

\5. 可见性过滤: (jq新增、独有)

 (1). 什么是: 根据元素是否可见来选择元素

 (2). 包括:

 a. :visible  选择可见的元素

 b. :hidden  选择不可见的元素

 (3). 问题: HTML和CSS共有4种方式隐藏元素:

 a. display:none

 b. visibility:hidden

 c. opacity:0

 d. <input type="hidden">

   :hidden都能选中吗?

 (4). 强调: :hidden只能选择display:none和<input type="hidden">两种隐藏元素。

 (5). 示例: 使用:hidden选择不可见的元素：

 12_visibility_filter.html

<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <link rel="stylesheet" href="css/bootstrap.css"/>
  <style>
  </style>
</head>
<body>
<div class="container">
  <h1>可见性选择器</h1>

  <div id="d1" style="display: none">lorem</div>
  <div id="d2" style="visibility: hidden">lorem</div>
  <div id="d3" style="opacity: 0">lorem</div>
  <input id="d4" type="hidden" name="aa" value="bb"/>

</div>
<script src="js/jquery-1.11.3.js"></script>
<script>
  console.log( $('div.container>:hidden') )
</script>
</body>
</html>
运行结果
![image-20210714195338409](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210714195338409.png)

\6. 表单元素过滤选择器: (jq新增、独有)

 (1). 什么是: 根据表单元素的类别不同来选择不同的表单元素

 (2). 包括:

 a.  :input  专门选择4大类表单元素(input, select, textarea, button)

   input  是css中一个最普通的元素选择器，只能选择input元素。

 b.  单单是input就有很多种type，于是jq为每种type都定义了专门的选择器:

  :text  选择type="text"的普通文本框

  :password  选择type="password"的密码框

  :checkbox  选择type="checkbox"的复选框

  :radio  选择type="radio"的单选按钮

  ... ...

 (3). 示例: 点同意，启用元素，不同意，禁用元素

 day01剩余/13_form_state_selector.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps6.jpg)

<!DOCTYPE html>
<html>

<head>
  <title>.....</title>
  <meta charset="utf-8" />
  <style>
  </style>
</head>

<body>
  <form>
    用户名:<input disabled></br>
    密码:<input type="password" disabled></br>
    <input type="checkbox">我同意本站的使用条款<br>
    <input type="submit" value="提交注册信息" disabled />
  </form>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 选择type="checkbox"的复选框
    $(":checkbox")
    //2. 绑定事件处理函数
    .click(function(){
      //3. 查找要修改的元素
      //本例中: 修改除checkbox之外的其余表单元素
      //       除了 checkbox之外的
      //表单元素
      // jq对象
      var $others=$(":input:not(:checkbox)")
      //4. 修改元素
      //如果当前checkbox是选中的
      if(this.checked==true){
        //则其它表单元素启用(disabled=false)
      //jq对象不能用属性方式修改
      //$others.disabled=false;//错误
        $others.prop("disabled",false);
        //prop()是jq中专门修改元素属性值的函数。
      }else{//否则如果当前checkbox未选中
        //则其它表单元素禁用
        $others.prop("disabled",true);
      }
      //规律:
      // $(":input:not(:checkbox)")
      // .prop("disabled",!this.checked);
    })
  </script>
</body>

</html>
运行结果
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps7.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps8.jpg)

六. 修改: 3大类东西(内容，属性，样式)

强调: 凡是和修改有关的函数，都一个函数两用！

\1. 内容: 3种方式:

 (1). 元素开始标签到结束标签之间的原始的HTML内容:

 a. DOM中: 元素.innerHTML

 b. jq中: $元素.html("新内容")

 (2). 元素开始标签到结束标签之间的纯文本内容

 a. DOM中: 元素.textContent

 b. jq中: $元素.text("新内容")

 (3). 表单元素的值:

 a. DOM中: 元素.value

 b. jq中: $元素.val("新值")

 (4). 示例: 使用元素内容实现表单验证

 14_html_val.html

<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>
  <meta charset="utf-8">
 </head>
 <body>
  <h1>操作元素的内容和值</h1>
  <form action="">
    用户名:<input name="uname">
          <span></span><br>
    密码:<input type="password" name="upwd">
          <span></span><br>
    <input type="submit" value="提交注册信息">
  </form>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //正确时，使用图片:"<img src='img/ok.png'>"
    //姓名错误时: "<img src='img/err.png'>用户名必须介于3~9位之间!"
    //密码错误时: "<img src='img/err.png'>密码必须介于6~8位之间!"
    /*先做用户名验证:*/
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 当用户名文本框失去焦点时，验证文本框的内容
    $(":text")
    //2. 绑定事件处理函数
    .blur(function(){
      //因为当前文本框在后边可能反复使用，所以要保存在变量中
      var $this=$(this);
      //3. 查找要修改的元素
      //本例中: 查找当前文本框旁边的span元素
      //DOM中: var span=this.nextElementSibling
      //jq中:
      var $span=$this.next();
      //4. 修改元素
      //4.1 先获得当前文本框的内容
      var value=$this.val();
      //4.2 如果验证当前文本框的内容通过
      if(value.length>=3&&value.length<=9){
        //4.3 则修改span的内容为正确的提示
        $span.html(`<img src='img/ok.png'>`);
      }else{//4.4 否则如果验证当前文本框的内容不通过
        //4.5 则修改span的内容为错误的提示
        $span.html(`<img src='img/err.png'>用户名必须介于3~9位之间!`);
      }
    })
    /*密码验证*/
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 当密码框失去焦点时，验证文本框的内容
    $(":password")
    //2. 绑定事件处理函数
    .blur(function(){
      //因为当前文本框在后边可能反复使用，所以要保存在变量中
      var $this=$(this);
      //3. 查找要修改的元素
      //本例中: 查找当前文本框旁边的span元素
      //DOM中: var span=this.nextElementSibling
      //jq中:
      var $span=$this.next();
      //4. 修改元素
      //4.1 先获得当前文本框的内容
      var value=$this.val();
      //4.2 如果验证当前文本框的内容通过
      if(value.length>=6&&value.length<=8){
        //4.3 则修改span的内容为正确的提示
        $span.html(`<img src='img/ok.png'>`);
      }else{//4.4 否则如果验证当前文本框的内容不通过
        //4.5 则修改span的内容为错误的提示
        $span.html(`<img src='img/err.png'>密码必须介于6~8位之间!`);
      }
    })
  </script>
 </body>
</html>
运行结果
\2. 属性: 3大类属性:

 (1). 字符串类型的HTML标准属性:

 a. DOM中: 2种:

  1). 旧核心DOM: 2个函数：

   元素.getAttribute("属性名")

   元素.setAttribute("属性名","新值")

  2). 新HTML DOM: 元素.属性名=新值

 b. jq中: 也2种:

  1). 代替旧核心DOM: $元素.attr("属性名","新值")

  2). 代替新HTML DOM: $元素.prop("属性名","新值")

                property

 c. 示例: 点击图片切换下一张:

 day01剩余/15_attr.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps11.jpg)

<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>
  <meta charset="utf-8">
 </head>
 <body>
  <h1>操作元素的属性</h1>
  <img src="img/1.jpg" alt="1">
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 只有一个img元素可以点击
    $("img")
    //2. 绑定事件处理函数
    .click(function(){
      //3. 查找要修改的元素
      //本例中: 就是改自己this
      //因为后边可能会反复使用这个this，所以保存在变量里
      var $this=$(this);
      //4. 修改元素
      //4.1先取出alt属性值，转为整数
      var alt=parseInt(
        //因为alt是字符串类型的HTML标准属性，所以既可以用attr，又可以用prop
        $this.attr("alt")
          // .prop("alt")
      );
      //4.2判断如果alt值<4，就alt+1
      if(alt<4){
        alt++;
      }else{//否则如果alt值==4，就alt=1
        alt=1;
      }
      //4.3将新的alt值拼成图片路径，放入当前img的src属性中
      //因为src属性是字符串类型的HTML标准属性，所以既可以用attr()，又可以用prop()
      // $this.attr("src",`img/${alt}.jpg`);
        // .prop("src",`img/${alt}.jpg`);
      //4.4将新的alt值放回当前img的alt属性中
      //因为alt是字符串类型的HTML标准属性，所以既可以用attr()，又可以用prop()
      // $this.attr("alt",alt);
        // .prop("alt",alt)

      //因为src和alt属性都是字符串类型的HTML标准属性，所以即可用attr()，又可用prop()
        // .prop({
      $this.attr({
        src:`img/${alt}.jpg`,
        alt:alt  //alt
      });
    })
  </script>
 </body>
</html>
运行结果
![image-20210714195928444](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210714195928444.png)

 (2). bool类型的HTML标准属性:

 a. DOM中: 只有一种HTML DOM的方式: 元素.属性名

 b. jq中: 也只有一种方式: $元素.prop("属性名",新bool值)

 (3). 自定义扩展属性:

 a. DOM中: 2种:

  1). 旧核心DOM: 元素.getAttribute()和元素.setAttribute()

  2). HTML5: 元素.dataset.属性名

 b. jq中: 1种

  1). 只能用$元素.attr()代替旧核心DOM

  2). jq比HTML5早，所有暂时没有和HTML5对应的函数

总结: jQuery

\1. 引入jQuery.js: 2种

(1). 引入项目本地jquery.js文件:

<script src="js/jquery-1.11.3.js">
(2). 引入CDN网络中共享的jquery.js文件:

<script src="官方提供的CDN上jquery.js文件地址">2. 创建jQuery类型子对象: 2种(1). 只有jQuery类型子对象才能使用jQuery家简化版函数。
 DOM家元素对象无权直接使用jQuery家简化版函数。

 所以只要使用jQuery家简化版函数，都要先创建jQuery家子对象，其中保存一个要操作的DOM元素对象。
(2). 如何:2种:

a. 查找DOM元素对象，并保存进新创建的jQuery对象中:

var $jq子对象=$("选择器")

b. 不查找，直接将DOM元素对象保存进新创建的jQuery对象中:

var $jq子对象=$(DOM元素对象)

\3. 原理:

(1). $=jQuery=new jQuery
(2). jq子对象其实是一个类数组对象，可保存找到的多个DOM元素对象

(3). 对jq子对象调用简化版函数，会被自动翻译为对应的原生DOM的方法和属性。

 所以jQuery中的所有简化版函数效果和DOM中原生方法和属性效果一样。

 jQuery中的this、e、e.target等，和DOM中的完全一样！

\4. jQuery简化版函数3大特点:

(1). 一个函数两用: 调用函数时:

a. 没给新值作为参数，默认执行获取旧值的操作

b. 给了新值作为参数，自动切换为执行修改操作

(2). 自带for循环: 对整个jquery子对象调用一次简化版函数，等效于对jQuery子对象中保存的每个DOM元素对象分别调用一次对等的DOM原生方法或属性——不用自己写for循环

(3). 链式操作: 如果前一个函数返回的东西，刚好是下一个函数想要继续使用的主语，则后一个函数不用把主语重复写2遍。只要接着前一个函数继续.即可。

\5. 查找元素:

(1). jQuery支持用所有CSS3选择器查找

(2). jQuery新增选择器: (css中不能用)

a. 基本过滤: (下标从0开始)

:first :last :eq(i) :lt(i) :gt(i) :even  :odd

b. 内容过滤:

:contains(文本) :has(选择器) :parent :empty

c. 可见性过滤:

:visible  :hidden(只能选择display:none和input type="hidden")

d. 表单元素过滤:
:input  :text  :password  :radio  :checkbox ... ...
(3).用节点间关系查找: 2大类关系, 8个函数

a. 父子关系：3个函数:

 1). $元素.parent()

 2). $元素.children("选择器")

 3). $元素.find("选择器")

b. 兄弟关系：5个

 $元素.prev()  $元素.prevAll("选择器")

 $元素.next()  $元素.nextAll("选择器")

 $元素.siblings("选择器")

\6. 修改元素: 3种:

修改中的所有函数，都是一个函数两用！

(1). 内容: 3种:

 a. 原始HTML内容:

 $元素.html("新HTML内容") 代替.innerHTML

 b. 纯文本内容:

 $元素.text("纯文本内容") 代替.textContent

 c. 表单元素的值:  

 $元素.val("新值") 代替.value

(2). 属性: 3种:

 a. 字符串类型的HTML标准属性:2种:

 1). $元素.attr("属性名","新属性值")

  代替 元素.getAttribute()和setAttribute()

 2). $元素.prop("属性名", bool值)

  代替 元素.属性名=bool值
 b. bool类型的HTML标准属性: 只有1种

  $元素.prop("属性名", bool值)

  代替 元素.属性名=bool值

 c. 自定义扩展属性:只有一种:

  $元素.attr("属性名","新属性值")

  代替 元素.getAttribute()和setAttribute()

反过来总结:

 $元素.attr()可修改一切字符串类型的属性(字符串类型HTML标准属性+自定义扩展属性)

 $元素.prop()可修改一切可用.访问的属性(所有HTML标准属性)

今日对应小程序视频列表:

 小程序->在线->JQUERY->day01  

  1. 什么是jQuery, 如何使用jQuery

  链接：https://pan.baidu.com/s/1Ed9Y3JwTQs-ZORr7FSf8AQ 提取码：msga

  2. 第一个jQuery程序 jQuery原理
​  链接：https://pan.baidu.com/s/1Okomf1Zj7Aixp-LMlEW89Q 提取码：lkyt

  3. 子元素过滤 child filter 基本过滤
​  链接：https://pan.baidu.com/s/1_QkF0lteEkCC4IeZP0P1gQ 提取码：lr31

 4. jQuery其它选择器...
  链接：https://pan.baidu.com/s/1bdSWJPWZrLTnpWWXyNz72A 提取码：qe75

  5.jQuery修改元素的内容...
​  链接：https://pan.baidu.com/s/1S4lRg3hJIJFUSXXbXB4jvA 提取码：c44m

  小程序->在线->JQUERY->day02  

  2. jQuery修改元素属性attr() prop()

  链接：https://pan.baidu.com/s/1_8JecH6HZyPhhDkHXQ5Xdg 提取码：edhb

作业:

\1. 复习: 小程序->在线->JQUERY->day01

\2. 复习第二阶段所有选择器！

\3. 复习今日小程序中问题清单: 小程序->首页->JQUERY->day01

\4. 复习第二阶段所有选择器

\5. 东哥2年前年轻(18岁)时讲的真人出镜、高清无码、国语中字、无删减版HTML+CSS+LESS+BOOT:

链接：https://pan.baidu.com/s/1jw5LqnKq4YgScbaP-ZTD6A

提取码：7wbm

\6. 使用css和jq实现按钮组效果和表格隔行变色效果:

 参考视频: 小程序->在线->JQUERY->day01->作业: 分别使用css和jq实现按钮组效果和表格隔行变色效果:
​ 链接：https://pan.baidu.com/s/1hbrT7SLrPx5cEwfRk1Mslw 提取码：y1ax

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps14.jpg)

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml13964\wps15.jpg)

prop时用来代替 . 的

字符串类型和bool类型的标准属性可以用  .  访问

口诀

attr（）代替getAttribute（），setAttribute（）

复习选择器

day02

一. 修改:

\1. 内容: 3种内容

\2. 属性: 3大类属性:

(1). 字符串类型的HTML标准属性:

 a. DOM中: 2种:

  1). 旧核心DOM: 2个函数：

   元素.getAttribute("属性名")

   元素.setAttribute("属性名","新值")

  2). 新HTML DOM: 元素.属性名=新值

 b. jq中: 也2种:

  1). 代替旧核心DOM: $元素.attr("属性名","新值")

  2). 代替新HTML DOM: $元素.prop("属性名","新值")

                property

(2). bool类型的HTML标准属性:

 a. DOM中: 只有一种HTML DOM的方式: 元素.属性名

 b. jq中: 也只有一种方式: $元素.prop("属性名",新bool值)

(3). 自定义扩展属性:

 a. DOM中: 2种:

  1). 旧核心DOM: 元素.getAttribute()和元素.setAttribute()

  2). HTML5: 元素.dataset.属性名

 b. jq中: 1种

  1). 只能用$元素.attr()代替旧核心DOM

  2). jq比HTML5早，所有暂时没有和HTML5对应的函数

 c. 示例: 点小图片，切换大图片:

 3_attr2.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    body {
      text-align: center;
    }
  </style>
</head>

<body>

  <img src="img/1.jpg" data-click data-target="img/1-l.jpg" class="my-small">
  <img src="img/2.jpg" data-click data-target="img/2-l.jpg" class="my-small">
  <img src="img/3.jpg" data-click data-target="img/3-l.jpg" class="my-small">
  <img src="img/4.jpg" data-click data-target="img/4-l.jpg" class="my-small">
  <hr />
  <img src="img/1-l.jpg" class="my-big">

  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //点击小图片，下方my-big中显示大图片
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 查找带有data-click属性的小图片
    $("[data-click]")
    //2. 绑定事件处理函数
    // .click(function(){
    //当
    //鼠标 进入
    .mouseover(function(){
      //3. 查找要修改的元素
      //本例中: 要修改class为my-big的大图片
      var $big=$(".my-big");
      //4. 修改元素
      //4.1 先获取当前点击的小图片上的data-target属性值
      //因为data-target属性是自定义扩展属性，所以，只能用attr获取或修改
      var src=$(this).attr("data-target");
      //             .prop("data-target")
      //4.2 将data-target属性值作为大图片的新的src路径
      //因为src是字符串类型的HTML标准属性，所以，既可用attr()，又可用prop()
      $big.attr("src",src);
      //  .prop("src",src);
    })
  </script>
</body>

</html>
运行结果
![image-20210715195935900](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210715195935900.png)

\3. 样式:

(1). DOM中:

 a. 修改内联样式: 元素.style.css属性="新值"

 b. 获取完整样式: getComputedStyle(元素)

(2). jq中:

将style和getComputedStyle合二为一。

 今后，在jq中无论获取css属性值，还是修改css属性值，都只用$元素.css("css属性","新值")就够了。

 a. 如果.css()中没有给新值，则.css()底层自动执行getComputedStyle()操作，获取属性值

 b. 如果.css()中给了新值，则.css()底层自动执行.style.css属性，执行修改操作。

(3). 批量修改一个元素的多个css属性:

 a. DOM中: 元素.className="class名"

 b. 问题: 只能整体替换所有class，不便于修改其中某一个class

 c. jq中: 增加了4个函数，用来提高操作class的灵活性:  

  1). $元素.addClass("className")

  2). $元素.removeClass("className")

  3). $元素.hasClass("className") 判断元素上是否包含某个class

  4). $元素.toggleClass("className")

       切换 

  i. 在有或没有一个class之间来回切换。

  ii. 原理相当于: 内部封装了if else判断

   if($元素.hasClass("class名")){

     $元素.removeClass("class名")

   }else{

  $元素.addClass("class名")

   }

 d. 优点: 只影响当前一个class，不影响其余class。

 (4). 示例: 实现双态按钮:

 4_class.html

<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    .btn {
      padding: 5px 10px;
      border-radius: 3px;
      border: 1px solid #aaa;
      outline: none;
    }
    .up {
      background: #fff;
      color: #333;
    }
    .down {
      background: #ddd;
      color: #fff;
    }
  </style>
</head>
<body>

  <button class="btn up ">双态按钮</button>

<script src="js/jquery-1.11.3.js"></script>
<script>
  //双态按钮: 让按钮的class在up和down之间切换
  //DOM 4步
  //1. 查找触发事件的元素
  //本例中: 只有一个class为btn的按钮可点击
  $(".btn")
  //2. 绑定事件处理函数
  .click(function(){
    //3. 查找要修改的元素
    //本例中: 就是要修改自己
    // var $this=$(this);
    // //4. 修改元素
    // //如果当前btn上有class down
    // if($this.hasClass("down")){
    //   //就移除class down
    //   $this.removeClass("down")
    // }else{//否则如果当前btn上没有class down
    //   //就添加class down
    //   $this.addClass("down");
    // }
    $(this).toggleClass("down");
  })
</script>
</body>
</html>
运行结果
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps5.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps6.jpg)

*简写:

其实.attr()、.prop()、.css()都可同时修改多个属性值，但是必须使用对象语法:

$元素.attr 或 .prop 或 .css({

 属性名:"属性值",

  ... : ...

})

二. 按节点间关系查找:

\1. DOM中: 2大类关系，6个属性

(1). 父子关系: 4个属性:

 a. 元素.parentElement  父元素

 b. 元素.children  所有直接子元素

 c. 元素.firstElementChild  第一个直接子元素

 d. 元素.lastElementChild  最后一个直接子元素

(2). 兄弟关系: 2个

 a. 元素.previousElementSibling  前一个兄弟元素

 b. 元素.nextElementSibling  后一个兄弟元素

\2. jq中: 2大类关系，8个函数

(1). 父子关系: 3个函数

 a. $元素.parent()  父元素

 b. $元素.children()  所有直接子元素

  1). 增强: $元素.children("选择器")，只选择符合要求的个别直接子元素

  2). 新增: $元素.find("选择器")，选择所有后代中符合要求的元素。

 c. 第一个直接子元素:

  1). 没有专门对应的函数

  2). 但是，可以用children()变通实现:

   $元素.children(":first-child")

 d. 最后一个直接子元素: $元素.children(":last-child")

(2). 兄弟关系: 5个函数

 a.  前一个兄弟: $元素.prev()

 b. 之前所有兄弟： $元素.prevAll("选择器")

 c.  后一个兄弟: $元素.next()

 d.  之后所有兄弟: $元素.nextAll("选择器")

 e.  除当前元素之外，其余所有兄弟元素:

  $元素.siblings("选择器")

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps7.jpg)

\3. 示例: 使用节点间关系查找指定元素:

6_traverse.html

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>...</title>
  <script>
  </script>
</head>

<body>
  <!--    ul.top>(li.parent>ul>li.child*3)*2 -->
  <ul class="top">
    <li class="parent1">parent1
      <ul>
        <li class="child">child1</li>
        <li class="child">child2</li>
        <li class="child">child3</li>
      </ul>
    </li>
    <li class="parent2">parent2
      <ul>
        <li class="child">child1</li>
        <li class="child">child2</li>
        <li class="child">child3</li>
      </ul>
    </li>
  </ul>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //修改class为top的ul的所有直接子元素
    $(".top").children()
    .css("border","2px solid red");
    //修改class为top的ul的所有后代li
    $(".top").find("li")
    .css("box-shadow","0 0 5px green");
    //为class为child的li绑定单击事件
    $(".child").click(function(){
      //选择当前元素的下一个元素/前一个元素/之前所有/之后所有/除自己之外所有
      $(this).siblings()//.nextAll()//.prevAll()//.prev()//.next()
      .css("background-color","yellow");
    })

  </script>
</body>

</html>
运行结果
![image-20210715200537045](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210715200537045.png)

\4. 示例: 标签页效果:

7_tabs.html

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps8.jpg)

<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <style>
    .tabs {
      list-style: none;
      padding: 0
    }

    .tabs a {
      text-decoration: none;
      color: #000;
      padding: 6px 12px;
      display: inline-block;
    }

    .tabs>li {
      float: left;
      border-bottom: 1px solid #000;
    }

    .tabs>.active {
      border: 1px solid #000;
      border-bottom: 0;
    }
  </style>
</head>

<body>
  <h1>使用属性选择器实现标签页头的切换</h1>
  <ul class="tabs">
    <li class="active">
      <a data-toggle="tab" href="#">十元套餐</a>
    </li>
    <li>
      <a data-toggle="tab" href="#">二十元套餐</a>
    </li>
    <li>
      <a data-toggle="tab" href="#">三十元套餐</a>
    </li>
  </ul>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 查找带有data-toggle属性，且属性值为tab的所有标签按钮
    $("[data-toggle=tab]")
    //2. 绑定事件处理函数
    // .click(function(){
    //   //因为$this可能被反复使用，所以要保存到变量中
    //   var $this=$(this);
    //   //3. 查找要修改的元素
    //   //4. 修改元素
    //   //先给当前a的爹li添加class active
    //   $this.parent().addClass("active");
    //   //再给当前a的爹li的其余所有兄弟清除class active
    //   $this.parent().siblings().removeClass("active")
    // })

    .click(function(){
      //因为$this可能被反复使用，所以要保存到变量中
      $(this)
      //3. 查找要修改的元素
      //4. 修改元素
      //先给当前a的爹li添加class active
      .parent() //当前a的爹li
      .addClass("active")
      //return 当前a的爹li
      //再给当前a的爹li
      //的其余所有兄弟清除class active
      .siblings()
      .removeClass("active")
    })
  </script>
</body>

</html>
运行结果
![image-20210715200608311](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210715200608311.png)

三. 添加/删除/替换/克隆

\1. 添加新元素:

(1). DOM中: 3步

 a. 创建新的空对象:

 var 元素=document.createElement("标签名")

 b. 添加必要属性: 元素.属性名=属性值

 c. 将新元素添加到DOM树: 3种:

  1). 末尾追加新元素: 父元素.appendChild(新元素)

  2). 插入到现有元素之前:

   父元素.insertBefore(新元素, 现有元素)

      插入 之前

  3). 替换现有元素:

   父元素.replaceChild(新元素, 现有元素)

(2). jq中: 2步:

 a. 用HTML片段批量创建多个元素，同时设置元素的属性和内容。

  var $新元素=$(HTML片段)

 b. 将新元素添加到DOM树: 10个函数

  1). 在父元素末尾追加新元素:

   $父元素.append($新元素)

       //return $父元素  后接 对父元素继续操作

   $新元素.appendTo($父元素)

       //return $新元素 后接 对新元素继续操作

  2). 在父元素下开头插入一个新元素

   $父元素.prepend($新元素)

      之前 //return $父元素  后接 对父元素继续操作

   $新元素.prependTo($父元素)

      //return $新元素 后接 对新元素继续操作

  3). 插入到一个现有元素之前

   $现有元素.before($新元素)

    //return $现有元素  后接 对现有元素继续操作

   $新元素.insertBefore($现有元素)

   //return $新元素  后接 对新元素继续操作

  4). 插入到一个现有元素之后

   $现有元素.after($新元素)

   //return $现有元素  后接 对现有元素继续操作

   $新元素.insertAfter($现有元素)

   //return $新元素  后接 对新元素继续操作

  5). 替换现有元素:

   $现有元素.replaceWith($新元素)

            用

   //return $现有元素  后接 对现有元素继续操作

   $新元素.replaceAll($现有元素)

   //return $新元素  后接 对新元素继续操作

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps13.jpg)

\2. 删除:

 $元素.remove()

\3. 克隆:

 var $新元素=$旧元素.clone();

\4. 示例: 点按钮添加方块，点×删除方块：

day02剩余/9_append.html

<!DOCTYPE html>
<html>

<head>
  <title> new document </title>
  <meta charset="utf-8">
  <style>
    .container {
      border: 1px solid #aaa;
      overflow: hidden;
    }

    .block {
      float: left;
      margin: 10px;
      border: 1px solid #aaa;
      background: #faa;
      width: 150px;
      height: 150px;
    }

    .block:hover {
      box-shadow: 0 5px 6px #000;
    }

    .close {
      float: right;
      padding: 5px;
      font-weight: bold;
      opacity: .2;
      cursor: pointer;
    }

    .close:hover {
      opacity: .5;
    }
  </style>
</head>

<body>
  <h1>添加/删除节点</h1>
  <button id="add-block">添加区块</button>

  <div class="container">
    <!-- <div class="block">
      <span class="close">×</span>
    </div> -->
  </div>

  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 点按钮，添加方块
    $("button")
    //2. 绑定事件处理函数
    .click(function(){
      //3. 查找要修改的元素
      //4. 修改元素
      //4.1 先用注释的div元素的HTML片段创建一个新的方块
      $(`<div class="block">
        <span class="close">×</span>
      </div>`)
      //4.2 每创建一个新方块，都设置当前方块的背景色为一个随机的颜色值
      .css(
        "background-color",
        `rgb(${
          parseInt(Math.random()*256)
        },${
          parseInt(Math.random()*256)
        },${
          parseInt(Math.random()*256)
        })`
      )//return .前的刚创建的$新方块
      //4.3 再将新创建的元素添加到父级div container下的开头
      // $(".container").prepend($block);
      //需要新方块继续
      // .prepentTo($(".container"))
      //          选择器 自动查找
      .prependTo(".container")
    })

    /*实现删除功能*/
    //DOM4步
    //1. 查找触发事件的元素
    //本例中: 因为多个方块中的×都可点击，所以，应该用事件委托优化。事件应该只绑定在父元素上一份即可。
    //事件委托第1步:
    $(".container")
    //2. 绑定事件处理函数
    .click(function(e){
      //事件委托第2步: e.target代替this
      var $tar=$(e.target);
      //事件委托第3步: 判断当前元素是不是我们想要的
      //本例中: 只有点击的元素内容是×，才继续执行删除操作
      if($tar.html()=="×"){
        //3. 查找要修改的元素
        //本例中: 删除当前点击的span的父元素
        $tar.parent()
        //4. 修改元素
        .remove();
      }
    })
  </script>

</body>

</html>
运行结果
![image-20210715201110888](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210715201110888.png)

\5. 示例: 选飞机

day02剩余/10_replace_clone.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    body {
      text-align: center;
    }
  </style>
</head>

<body>
  <h1>替换节点</h1>

  <div id="chosen">
    <img src="img/p0.png">
  </div>
  <hr />
  <div id="list">
    <img src="img/p3.png">
    <img src="img/p4.png">
    <img src="img/p5.png">
  </div>

  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: id为list的div下所有img都可点击
    $("#list>img")
    //2. 绑定事件处理函数
    .click(function(){
      //3. 查找要修改的元素
      //本例中: 要修改id为chosen下的img
      $("#chosen>img")
      //4. 修改元素
      //本例中: 先将我当前点中的飞机克隆一个副本，用副本去替换上方的灰色飞机
      .replaceWith($(this).clone());
    })
  </script>
</body>

</html>
运行结果
![image-20210715201155643](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210715201155643.png)

四. 事件:

\1. 事件绑定:

(1). DOM中: 3种:

 a. 在HTML中手工绑定

  缺点: 繁琐，极其不便于维护

 b. 在js中用赋值方式绑定

  缺点: 一个事件上只能绑定一个处理函数

 c. 在js中添加事件监听对象的方式(重点)

  元素.addEventListener("事件名",事件处理函数(){ ... })

  元素.removeEventListener("事件名",原事件处理函数(){ ... })

  优点: 一个事件可绑定多个事件处理函数，且还可以移除事件处理函数——灵活

(2). jq中: 1种:

 a. 标准: $元素.on("事件名",事件处理函数(){ ... })

     $元素.off("事件名",原事件处理函数)

 b. 简写: 只有最常用的十几种事件才能使用简写:

  1). $元素.事件名(事件处理函数(){ ... })

   比如:$btn.click(function(){ ... })

      //等效于addEventListener()

  2). 常用事件列表:

blur 失去焦点

change 下拉列表选中项改变

click 单击

dblclick 双击

focus 获得焦点  

keydown 键盘按键按下

keyup 键盘按键抬起

mousedown 鼠标按键按下

mouseenter 鼠标进入(jq)

mouseleave 鼠标移出(jq)

mousemove  鼠标移动

mouseout 鼠标移出(dom)

mouseover 鼠标进入(dom)

mouseup 鼠标按键抬起

resize  窗口大小改变

scroll  网页滚动

load 加载完成

(3). 2个问题:

 a. 使用匿名函数无法移除事件监听。jq中没有解决！只能使用有名称的函数来绑定和移除，才能移除事件监听

 b. 如果使用有名称的函数绑定，则无法添加多个完全相同的事件监听。jq中已经解决了。在jq中即使使用有名称的函数，也能同时绑定多个事件监听对象。只不过移除时，所有同名的事件处理函数，一次性全部移除.

 (4). 示例: 点按钮发射子弹，可发射多种子弹，也可移除子弹

 12_bind_unbind.html

<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>
  <meta charset="utf-8">
 </head>
 <body>
  <h1>事件绑定</h1>
  <button id="btn1">发射子弹</button>
  <button id="btn2">获得奖励</button>
  <button id="btn3">失去奖励</button>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //点btn1时，发射普通子弹
    $("#btn1").click(function(){
      console.log(`发射普通子弹......`)
    });
    var shoot2=function(){
      console.log(`发射跟踪导弹=>=>=>`)
    }
    //点btn2时，给btn1多加一种跟踪导弹
    $("#btn2").click(function(){
      $("#btn1").click(shoot2)
    })
    //点btn3时，从btn1移除跟踪导弹
    $("#btn3").click(function(){
      $("#btn1").off("click",shoot2)
    })
  </script>
 </body>
</html>
![image-20210715201613281](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210715201613281.png)

\2. jq中的事件委托:

 (1). 何时: 多个平级子元素都要绑定相同的事件时

 (2). DOM中: 3步: 正统(重点)

 a. 事件只绑定在父元素上一份即可

 b. e.target代替this

 c. 判断当前目标元素是不是想要的

 (3). jq中: 3步: jq独有，了解

 a. 事件还是绑定在父元素上一份即可，但是必须用on()方式绑定。不能用简写

 b. 不用e.target代替this了，jq中this又指向最初实际点击的目标元素

 c. 也不用自己写if判断了，但是，只需要将一个用于判断目标元素是否符合要求的选择器，绑在on()的第二个参数位置，on()就会自动用这个选择器判断当前元素是否符合要求。

 $父元素.on("click","选择器条件",事件处理函数)

 (4). 示例: 使用jq事件委托实现选飞机

 13_jq_delegate.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    body {
      text-align: center;
    }
  </style>
</head>

<body>
  <h1>替换节点</h1>

  <div id="chosen">
    <img src="img/p0.png">
  </div>
  <hr />
  <div id="list">
    <img src="img/p3.png">
    <img src="img/p4.png">
    <img src="img/p5.png">
  </div>

  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中: 因为多个img都可点击，所以，应该用事件委托优化。事件只绑定在父元素上一份即可
    $("#list")
    //2. 绑定事件处理函数
    //本例中: 只允许img元素触发事件
    //         元素选择器
    .on("click","img",function(){
      //3. 查找要修改的元素
      //本例中: 查找id为chosen下的img元素
      $("#chosen>img")
      //4. 修改元素
      //本例中: 用当前点击的img的副本替换上方的img
      //虽然用了事件委托，但是jq中this又重新指向了最初点击的目标元素。所以，jq事件委托中不用e.target，仍然用this
      .replaceWith($(this).clone());
    })
  </script>
</body>

</html>
运行结果
![image-20210715201805627](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210715201805627.png)

\3. 页面加载后自动执行:

 (1). 问题: 放在外部js文件中的js代码，在结尾引入旧有效，在网页开头引入就无效。

 (2). 原因: 网页顺序执行。如果在网页开头引入js文件，会立刻执行。而此时还没有读到body呢，无法操作网页中的任何元素。

 (3). 解决: 今后，只要希望一些js初始化操作，必须在网页内容加载完成后才能执行！不要提前执行！都要用window.onload=function(){}

 a. 什么是window.onload： 一个事件，专门在所有网页内容都加载完成后才自动触发！

 b. 如何: window.onload=function(){ ... }

 c. 结果: 凡是放在window.onload=function(){ ... }中的代码，无论写在哪儿，注定都会在整个网页内容加载完成(触发load事件)后，才自动执行。

 (4). 问题2: 两个js文件中都有window.onload=function(){}，则只有最后引入的一个js文件中的window.onload=function(){}会幸存下来。最后一个会覆盖之前的onload=function(){}

 (5). 解决: 应该将所有window.onload=function(){}都换为window.addEventListener("load",function(){})。

 (6). 问题3: load事件必须等待所有网页内容（HTML+JS+CSS+图片）都加载完才能触发。有点儿晚。

 (7). 解决:

 a. 其实，网页加载过程中，有两次加载完成事件:

  1). 仅DOM内容(HTML+JS)加载完成：

   DOMContentLoaded

  2). 然后才是所有网页内容加载完成

   load

 b. 绝大多数与css和图片无关的初始化操作，比如事件绑定，都不需要等待css和图片。

 c. 所以，今后只要不依赖与css和图片的初始化操作，都应该绑定到DOMContentLoaded事件上。

  window.addEventListener(
   "DOMContentLoaded",

   function(){ ... }
  )

 d. 今后绝大多数页面初始化操作都应该放在window.addEventListener("DOMContentLoaded",中

 (8). 问题: 太长了！

 (9). 解决: jq中

 a. $(document).ready(function(){ ... })

 b. $().ready(function(){ ... })

 c. $(function(){ ... }) —— 常用

 d. $(()=>{ ... })

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps19.jpg)

 (10). 示例: 仅DOM内容加载完成时，就提前给按钮绑定单击事件:

 day02剩余/14_load1.js

//暂时保存，暂不执行
//直到整个页面所有内容都加载完才自动执行
// window.onload=function(){
// window.addEventListener("load",function(){
// window.addEventListener(
//   "DOMContentLoaded",
//   function(){
$(function(){
  alert("仅DOM内容加载完成，就提前触发...")
  $("#btn1").click(function(){
    alert("btn1疼!")
  })
})
day02剩余/14_load2.js

//暂时保存，暂不执行
//直到整个页面所有内容都加载完才自动执行
// window.onload=function(){
// window.addEventListener("load",function(){
// window.addEventListener(
//   "DOMContentLoaded",
//   function(){
$(function(){
  alert("仅DOM内容加载完成，就提前触发...")
  $("#btn2").click(function(){
    alert("btn2疼!")
  })
})
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    window.onload=function(){
      alert("所有网页内容加载完成!")
    }
  </script>
  <script src="14_load1.js"></script>
  <script src="14_load2.js"></script>
</head>

<body>
  <button id="btn1">click me 1</button>
  <button id="btn2">click me 2</button>
  
</body>

</html>
运行结果：
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps20.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps21.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps22.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml28612\wps23.jpg)

上一个返回的是下一个需要的

总结:

\4. jQuery简化版函数3大特点:

(1). 一个函数两用: 调用函数时:

a. 没给新值作为参数，默认执行获取旧值的操作

b. 给了新值作为参数，自动切换为执行修改操作

(2). 自带for循环: 对整个jquery子对象调用一次简化版函数，等效于对jQuery子对象中保存的每个DOM元素对象分别调用一次对等的DOM原生方法或属性——不用自己写for循环

(3). 链式操作: 如果前一个函数返回的东西，刚好是下一个函数想要继续使用的主语，则后一个函数不用把主语重复写2遍。只要接着前一个函数继续.即可。

\5. 查找元素:

(3).用节点间关系查找: 2大类关系, 8个函数

a. 父子关系：3个函数:

 1). $元素.parent()

 2). $元素.children("选择器")

 3). $元素.find("选择器")

b. 兄弟关系：5个

 $元素.prev()  $元素.prevAll("选择器")

 $元素.next()  $元素.nextAll("选择器")

 $元素.siblings("选择器")

\6. 修改元素: 3种:

修改中的所有函数，都是一个函数两用！

(3). 样式:

 a. 获取或修改单个css属性: 只有1种

 $元素.css("css属性名", "属性值")

 获取属性值时被翻译为getComputedStyle(元素)

 修改属性值时被翻译为.style.css属性=属性值

 b. 使用class批量修改样式:

 1). $元素.addClass("class名")

 2). $元素.removeClass("class名")

 3). $元素.hasClass("class名")

 4). $元素.toggleClass("class名")

修改相关的函数都可同时修改多个属性值: $元素.attr或prop或css({  属性名:"属性值",    ... : ...})

\8. 添加删除替换克隆元素:

(1). 添加新元素: 2步

 a. 使用HTML片段批量创建新元素:

 $(HTML片段)

 b. 将新元素添加到DOM树: 5种方式，10个函数

 1). 末尾追加:

 $父元素.append($新元素)

 $新元素.appendTo($父元素)
 2). 开头插入: 新增:
​ $父元素.prepend($新元素)

 $新元素.prependTo($父元素)

 3). 插入到一个现有元素之前:

 $现有元素.before($新元素)

 $新元素.insertBefore($现有元素)

 4). 插入到一个现有元素之后:

 $现有元素.after($新元素)

 $新元素.insertAfter($现有元素)

 5). 替换现有元素:

 $现有元素.replaceWith($新元素)

 $新元素.replaceAll($现有元素)

(2). 删除元素: $元素.remove()

(3). 克隆元素: $元素.clone()

\9. 事件绑定:

(1). 标准写法:
 $元素.on("事件名", 事件处理函数)

 $元素.off("事件名", 原事件处理函数)

(2). 简写: $元素.事件名(事件处理函数)

(3). 事件委托:

$父元素.on("事件名","选择器",function(){

 ...this指向e.target...

})

(4). 页面加载后自动执行:

a. 先$(document).ready(function(){})

 简写: $(function(){ ... })

b. 后$(window).load(function(){ ... })

今日对应小程序视频列表:

 小程序->在线->JQUERY->day02  

  2. jQuery修改元素属性attr() prop()

  链接：<https://pan.baidu.com/s/1_8JecH6HZyPhhDkHXQ5Xdg> 提取码：edhb

  3. jquery修改样式css()

  链接：<https://pan.baidu.com/s/1dBc_SftoY6YZc29uT4RUHw> 提取码：yu3c

  6. jquery 按节点间关系查找

  链接：<https://pan.baidu.com/s/1wxKehIv2Y8MBXGsCfiNpzw> 提取码：4u7x

  6.1 jquery tabs ...

  链接：<https://pan.baidu.com/s/1PNGQw1QA221hwdZhFABpCg> 提取码：fdbp

  7. jquery添加删除替换克隆
​  链接：<https://pan.baidu.com/s/1fSgjH-fYpXWiEap0sFItjg> 提取码：29op
​  8. jquery 事件 on off

  链接：<https://pan.baidu.com/s/1gicQXfXfuQu-SNQxZH0_Vg> 提取码：n0gb

    \9. jquery 事件委托
​  链接：<https://pan.baidu.com/s/1UJKkc3och3Z1mypKOBt1VQ> 提取码：jnjg

 小程序->在线->JQUERY->day03  

  1. 页面加载完成后自动...

  链接：<https://pan.baidu.com/s/1bA4oZHJpjxOQKmnxXMgBwQ> 提取码：t0ob

作业:

\1. 复习: 小程序->在线->JQUERY->day02,03

\2. 预习VUE:

\3. (学有余力) 作业:jQuery 带多种动画效果的对话框 alert fade in transition
链接：<https://pan.baidu.com/s/12BCOXtorFxwYFSveWOufjg> 提取码：kkk2

就在day02/ 5_class2.html中直接做即可

day03

一. 事件:

\4. 鼠标事件:

(1). DOM中:

 a. 传统: mouseover 鼠标进入, mouseout 鼠标离开

 b. 问题: 即使反复进出子元素，也会反复触发父元素上的鼠标进出事件。与现实不符！

 c. 解决: mouseenter代替了mouseover

        进入       进入

     mouseleave 代替了mouseout

        离开       离开

 (2). 简化: jq中独有: 如果同时绑定鼠标进入和鼠标离开两个事件，其实只需要绑定一个hover()即可。

  $元素.hover( //=mouseenter+mouseleave
  function(){ ... }, //给mouseenter

   function(){ ... }, //给mouseleave
  )

 (3). 更简化: 如果你有本事把鼠标进入和鼠标离开的两个事件处理函数改为一模一样的，则只需要写一个处理函数即可。

  虽然只写了一个函数，但是也是同时绑定了mouseenter和mouseleave事件。一个函数，既给mouseenter，又给mouseleave。

 (4). 示例: 使用mouseenter和mouseover绑定鼠标进出事件，并使用hover简化鼠标进出事件:

 event/15_mouse.html

<!DOCTYPE HTML>
<html>

<head>
  <title>事件处理</title>
  <meta charset="utf-8" />
  <style>
    #d1 #d2 #d3 {
      cursor: pointer
    }

    #d1 {
      background-color: green;
      position: relative;
      width: 150px;
      height: 150px;
      text-align: center;
      cursor: pointer;
    }

    #d2 {
      background-color: blue;
      position: absolute;
      top: 25px;
      left: 25px;
      width: 100px;
      height: 100px;
    }

    #d3 {
      background-color: red;
      position: absolute;
      top: 25px;
      left: 25px;
      width: 50px;
      height: 50px;
      line-height: 50px;
    }
  </style>

</head>

<body>
  <div id="d1">
    <div id="d2">
      <div id="d3">
      </div>
    </div>
  </div>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    $("#d1")
    .hover( //=mouseenter+mouseleave
      function(){
        console.log(`进入d1`)
      },
      function(){
        console.log(`离开d1`)
      }
    )
    // // .mouseover(function(){
    // .mouseenter(function(){
    //  console.log(`进入d1`)
    // })
    // // .mouseout(function(){
    // .mouseleave(function(){
    //  console.log(`离开d1`)
    // })
  </script>
</body>

</html>
运行结果
![image-20210717114051878](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717114051878.png)

 event/16_hover.html

<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>
  <meta charset="utf-8">
  <style>
    #target {
      border: 1px solid #eee;
      border-radius: 6px;
      padding: 10px;
      transition: all .5s linear;
    }
    #target.hover {
      border: 1px solid #aaa;
      box-shadow: 0 0 6px #aaa;
      background-color:red;
      color:#fff;
    }
  </style>
 </head>
 <body>
  <h1>使用hover(fn,fn)</h1>

  <h3>鼠标悬停在div上方，则突出显示；移出则取消突出显示</h3>
  <div id="target">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi neque quae voluptatum ducimus culpa itaque maxime distinctio soluta cum cupiditate esse tenetur deserunt fuga perferendis sed veritatis asperiores. Numquam officia.</p>
  </div>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    $("#target").hover(
      //但是，依然同时绑定了两个事件
      //这个函数，既给mouseenter，又给mouseleave
      function(){
        $(this).toggleClass("hover")
      },
      // function(){
      //  $(this).toggleClass("hover")
      // }
      // function(){
      //  $(this).addClass("hover")
      // },
      // function(){
      //  $(this).removeClass("hover")
      // }
    )
  </script>
 </body>
</html>
运行结果
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml9252\wps3.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml9252\wps4.jpg)

\5. 模拟触发:

 (1). 什么是: 即使没有点在按钮上，也能触发按钮上的单击事件处理函数。

 (2). 如何: $元素.trigger("事件名")

         触发

 (3). 简写: 如果要触发的事件属于十几种常见事件列表中，都可以省略trigger()

  $元素.事件名()

 (4). 示例: 实现点按钮、按回车、边输入都能搜索:

 event/17_trigger.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
  </style>
</head>

<body>
  <input><button>百度一下</button>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //当单击按钮时可以搜索
    $("button").click(function(){
      //获得文本框中用户输入的关键字
      var str=$(this).prev().val();
      if(str!==""){
        console.log(`搜索${str}相关的内容...`)
      }
    })
    //当在文本框按回车时也能执行和点击按钮一样的搜索
    //         键盘按下再抬起后才自动触发
    $("input").keyup(function(e){
      //只有按的是回车键时，才执行搜索
      if(e.keyCode==13){
        // $("button").trigger("click");
        $("button").click();
      }
    })

    //一边输入，一边执行搜索
    //        当 输入内容时 自动执行
    $("input").on("input",function(){
      $("button").click();
    })

    //开局时，让文本框自动获得焦点
    $("input").focus();
  </script>
</body>

</html>
运行结果
![image-20210717114228370](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717114228370.png)

二. 动画:

\1. 简单动画: 写死的固定的三种动画效果:

 (1). 显示隐藏:

  $元素.show()  $元素.hide()  $元素.toggle()

                   切换

 (2). 上滑下滑:

  $元素.slideUp()  $元素.slideDown()  $元素.slideToggle()

     幕布

 (3). 淡入淡出:

  $元素.fadeIn()  $元素.fadeOut()  $元素.fadeToggle()

    消散

 (4). 2大致命缺陷: 所以以上九个函数，很少使用

 a. 在函数库中用js程序实现的动画效果。几乎不可维护。

 b. 底层是用定时器+dom操作模拟的动画效果。效率极低。

 (5). 特例: show()  hide()  toggle()在不指定毫秒数参数的情况下，仅仅是style.display的简写。还是非常好用的。

 (6). 示例:测试简单动画各种效果：

 1_show_hide2.html

<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>
  <meta charset="utf-8">
  <style>
    *{margin:0; padding:0;}
    #target{
      border-radius:10px;
      background:#eee;
    }
    .fade{/*动画起始状态*/
      height:104px; width:970px; opacity:1;
      padding: 10px; overflow:hidden;
      border: 1px solid #aaa;

    }
    .out{/*动画结束状态*/
      
    }
  </style>
 </head>
 <body>
  <h1>jQuery动画函数——显示隐藏动画</h1>
  <button id="btn1">显示/隐藏div</button>
  <div id="target">
    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis animi sint iste sequi sunt ad excepturi error labore molestiae est expedita eos nisi placeat provident dolorem quos facilis! Sapiente!</span><span>Accusamus neque id reprehenderit! Voluptatem in deleniti laboriosam commodi facere magnam impedit minima corrupti distinctio culpa amet optio natus esse. Inventore incidunt ab id perspiciatis atque minus magnam tempore harum.</span></p>
  </div>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    $("button").click(function(){
      var $tar=$("#target");
      $tar//.toggle(2000);//显示隐藏
          //.slideToggle();//上滑下滑
          .fadeToggle();//淡入淡出
    })
  </script>
 </body>
</html>
运行结果
![image-20210717114325042](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717114325042.png)

 (7). 示例: 显示隐藏部分品牌

 2_show_hide2.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    body {
      text-align: center;
    }

    ul {
      list-style: none;
    }

    li {
      margin: 0;
      padding: 0;
      display: inline-block;
      width: 30%;
    }
  </style>
</head>

<body>
  <ul id="list">
    <li>0尼康(234)</li>
    <li>1佳能(22)</li>
    <li>2索尼(932)</li>
    <li>3宾得(11)</li>
    <li>4爱国者(3234)</li>
    <li>5欧巴(32)</li>
    <li>6海鸥(2334)</li>
    <li>7卡西欧(334)</li>
    <li>8三星(834)</li>
    <li>9松下(234)</li>
    <li>10其它品牌(2343)</li>
  </ul>

  <button data-toggle="brandlist">收起</button>

  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //DOM 4步
    //1. 查找触发事件的元素
    $("button")
    //2. 绑定事件处理函数
    .click(function(){
      //3. 查找要修改的元素
      //本例中: 要修改下标>4位置，且不是最后一个元素的元素们
      $("ul>li:gt(4):not(:last-child)")
      //4. 修改元素
      .toggle();
      //如果当前按钮的内容为收起
      var $this=$(this);
      if($this.html()=="收起"){
        //就改为更多
        $this.html("更多")
      }else{//否则
        //就改为收起
        $this.html("收起")
      }
    })
  </script>
</body>

</html>
运行结果
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml9252\wps5.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml9252\wps6.jpg)

\2. 万能动画:

 (1). 什么是: 能对多种css属性应用动画效果。

 (2). 如何:

  $元素.animate({
   css属性名: 目标值
  },动画持续时间ms)

 (3). 原理:

 a. animate()先获得当前css属性的当前值。然后，用目标值-当前值，求出差值

 b. animate()再按照动画持续时间的要求，规划如何在规定时间内，由当前值逐渐变化到目标值。

 (4). 其实: 只支持单个数值的css属性。

   不支持颜色过渡和css3变换

 (5). 缺点: 2个

 a. 底层是用定时器+DOM模拟的动画，效率远不如css

 b. 功能上也不如css的transition

 (6). 示例: 测试万能动画只会哪些css属性，不支持哪些css属性:

 4_animate.html

<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>
  <meta charset="utf-8">
  <style>
    #d1{
      border:1px solid #aaa;
      border-radius:6px;
      background:#eee;
      width:50px; height:50px;
      position:absolute; top:120px; left:0;
    }
  </style>
 </head>
 <body>
  <h1>animate</h1>
  <button id="btn1">启动动画</button>
  <div id="d1">abcd</div>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    $("#btn1").click(function(){
      $("#d1").animate({
        left:300, //top bottom right
        // width:300, //height
        // padding:20,//margin

        // backgroundColor:"red"
        // transform:"rotate(90deg)"
      },2000)
    })
  </script>
 </body>
</html>
运行结果
![image-20210717114551254](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717114551254.png)

\3. 排队和并发:

(1). 排队:

多个css属性先后依次变化

 对同一个元素，先后调用多个animate，多个animate中的css属性是排队变化的.

 原理: jq中每个元素都有一个动画队列。animate()并不是立刻执行动画的意思。而是先将animate放入动画队列中保存。如果队列中之前没有正在播放的动画，则新放入的animate可以立刻执行。但是，如果队列中之前还有未完成的动画，则新加入的animate，必须等待之前的动画播放完才能开始播放。

(2). 并发:

多个css属性同时变化

 放在一个animate中的多个css属性，默认同时变化

\4. 选择器: :animated  jq独有

  专门匹配正在播放animate动画的元素

\5. 停止动画:

 (1). $元素.stop() //问题: 默认只停止当前一个animate动画。动画队列中后续其它animate依然继续执行

 (2). $元素.stop(true) //既停止当前animate，又清空后续动画队列

\6. 动画播放后，自动执行:

 其实，animate()还有第三个实参值——回调函数

 凡是放在animate()中第三回调函数参数中的代码，注定只能在动画结束后才能自动执行。

 $元素.animate(
  { css属性: 目标值 },
  动画持续时间,

  function(){ ... }

 );

$元素.is(选择器)

          是

专门用于判断一个元素是否符合选择器的条件

\7. 示例: 点星星，播放动画

5_stars.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    img {
      position: relative;
    }
  </style>
</head>

<body>
  <img id="s1" src="imgs/star.png"><br />
  <img id="s2" src="imgs/star.png"><br />
  <img id="s3" src="imgs/star.png"><br />
  <img id="s4" src="imgs/star.png"><br />

  <script src="js/jquery-1.11.3.js"></script>
  <script>
    /*
    s1在屏幕左上角的小星星， 点击后从左移动到屏幕右边
    s2在屏幕左上角的小星星，点击后从左移动到屏幕右边，再移动到下边——走直角
    s3在屏幕左上角的小星星，点击后从左上角移动到屏幕右下边，走斜线
    s4点击小星星，变大、变淡....  直至消失
    */
    $("#s1").click(function(){
      var $this=$(this);
      //如果当前星星正在播放动画
      if($this.is(":animated")){
        $this.stop();//则停止播放
      }else{//否则如果当前星星没有播放动画
        $this.animate({//才播放动画
          left:400
        },2000);
      }
    })
    $("#s2").click(function(){
      var $this=$(this);
      //如果当前星星正在播放动画
      if($this.is(":animated")){
        $this.stop(true);//则停止播放
      }else{//否则如果当前星星没有播放动画
        $this.animate({
          left:400,
        },1500)
        .animate({
          top:200
        },500)
      }
    })
    $("#s3").click(function(){
      var $this=$(this);
      //如果当前星星正在播放动画
      if($this.is(":animated")){
        $this.stop();//则停止播放
      }else{//否则如果当前星星没有播放动画
        $this.animate({
          left:400,
          top:200
        },2000)
      }
    })
    $("#s4").click(function(){
      alert("疼!");
      $(this).animate(
        {//DOM+定时器(异步)
          width:175,
          opacity:0
        },
        5000,
        function(){//只能在动画播放完才自动执行
          $(this).hide();
        }
      );
      // $(this).hide();//不等定时器执行完，就提前执行了！
    })
  </script>
</body>

</html>
运行结果
![image-20210717115658364](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717115658364.png)

三. 类数组对象操作：

\1. 遍历:

 (1). js数组中:

  arr.forEach(function(当前元素, 当前下标, 当前数组){

  })

 (2). jq中新增:

 $jq查找结果.each(function(当前下标, 当前DOM元素){  

 })

 (3).示例: 遍历找到的每个元素，并执行相同操作

 9_each.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
  </style>
</head>

<body>

  <ul id="list">
    <li>98</li>
    <li>85</li>
    <li>33</li>
    <li>99</li>
    <li>52</li>
  </ul>

  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //回顾数组forEach
    var arr = ["亮亮", "然然", "东东"];
    arr.forEach(function (value) {
      console.log(`${value} - 到！`)
    })

    //请给每个不足60分的成绩+10分，并将超过90分的成绩用绿色背景标识出来
    $("ul>li").each(function(i,li){
      //将取出的每个DOM元素li，包装为jq对象
      var $li=$(li);
      //获取当前元素的内容，转为整数
      var n=parseInt($li.html());
      if(n<60){
        $li.html(n+10)
      }else if(n>=90){
        $li.css("background-color","green")
      }
    })
  </script>
</body>

</html>
运行结果
![image-20210717115747804](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717115747804.png)

\2. 查找

 (1). js数组中:

  var i=arr.indexOf(要找的元素值);

  在数组arr中查找"要找的元素值"出现的下标位置i

  如果没找到，返回-1

 (2). jq中:

  var i=$jq查找结果.index(要找的DOM元素)

 (3). 示例: 五星评价

 10_index.html

<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    .score {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .score li {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 1px solid #f00;
      border-radius: 50%;
      cursor: pointer;
    }
  </style>
</head>

<body>

  <h3>请打分</h3>
  <ul class="score">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //回顾数组indexOf
    var arr = ["亮亮", "然然", "东东"];
    //            0      1      2
    //想查找然然的位置:
    var i=arr.indexOf("然然");
    console.log(i);
    //想查找小玥玥的位置:
    var i=arr.indexOf("小玥玥");
    console.log(i);

    //获得当前单击的li在所有li中的位置i,i及其执行的都变为红色，i之后的都变为白色
    //DOM 4步
    //1. 查找触发事件的元素
    //本例中，因为ul下所有li都可点击，所以用事件委托优化。事件只绑定在父元素上一份即可.
    $("ul")
    //2. 绑定事件处理函数
    .click(function(e){
      //e.target代替this
      var $tar=$(e.target);
      //只有点在li上才能触发事件
      //        元素选择器
      //当前元素是不是li元素
      if($tar.is("li")){
        //3. 查找要修改的元素
        //4. 修改元素
        //先获得当前点击的li是第几个li
        var i=$("ul>li").index($tar);
        //让<i+1位置的所有li背景变为黄色
        //           变量
        $(`ul>li:lt(${i+1})`)
        .css("background-color","yellow");
        //让>i位置的所有li背景变为白色
        $(`ul>li:gt(${i})`)
        .css("background-color","#fff");
      }
    })

  </script>
</body>
![image-20210717115911463](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717115911463.png)

四. 添加自定义函数:

\1. 如果经常使用的一个功能，jquery中没有提供，那么，其实我们可以自定义函数，加入到jquery中。

\2. 如何:

 (1). 向jquery原型对象中添加一个自定义函数

 jQuery.prototype.自定义函数=function(){

 }

 (2). 使用自定义函数:

 $查找结果.自定义函数()

\3. 示例: 封装自定义函数，对找到的所有元素内容求和:

day03剩余/11_sum.html

<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <ul>
    <li>85</li>
    <li>91</li>
    <li>73</li>
    <li>59</li>
  </ul>
  <script src="js/jquery-1.11.3.js"></script>
  <script>
    //假设在我的项目中经常需要对找到的所有元素内容求和
    jQuery.prototype.sum=function(){
      console.log(`调用了一次我自定义的sum()函数`);
      //jquery原型对象中的this->
      //  将来调用这个共有方法的.前的某个子对象——谁调用就指谁
      //本例中: this->$("ul>li")
      //             {0:li, 1:li,...}
      //1. 先定义变量，准备保存将来的汇总值
      var result=0;
      //2. 遍历数组中每元素值
      for(var i=0;i<this.length;i++){
        //3. 将当前元素值累加到result变量上
        result+=parseInt(
          this[i].innerHTML
        );
      }
      //4. 返回累加的结果result
      return result;
    }

    //将来: 
    console.log($("ul>li").sum());
  </script>
</body>
</html>
运行结果
![image-20210717120246807](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717120246807.png)

五. 封装自定义插件:

\1. 什么是插件: 页面中一块可反复使用的独立的功能区域。

\2. 为什么: 重用！

\3. 何时: 只要页面中一块独立的功能区域，可能被反复使用时，都要封装为插件，然后再反复使用插件。

\4. jq官网插件库: jqueryui

 (1). 官网: jqueryui.com

 (2). 下载:

 ![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml9252\wps7.jpg)

 (3). 引入插件库的文件:

 <link rel="stylesheet" href="css/jquery-ui.css">

 <script src="js/jquery-1.11.3.js">
  <script src="js/jquery-ui.js">
 (4). 使用插件: 2大步:

 a. 先按照插件的要求，自行编写HTML内容和结构。

   但是，不要加任何class

 b. 用$("选择器")查找插件的父元素，对插件父元素调用jquery ui提供的专门的插件函数即可。

  jquery ui提供的专门插件函数共自动做了2件事:

  1). 自动为元素添加class

  2). 自动为元素绑定事件处理函数

 (5). 2大致命问题: jQuery UI将来用的越来越少了。

 a. 都是用js写死的，几乎不可维护

 b. 只有PC端，没有移动端。

 (6). 示例: 使用jquery ui快速生成手风琴插件

 day03剩余/12_widget_accordion.html

<!DOCTYPE html>
<html>

<head>
  <title> new document </title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/jquery-ui.css">
  <script src="js/jquery-1.11.3.js"></script>
  <script src="js/jquery-ui.js"></script>
</head>

<body>
  <h1>jQueryUI：Widgets —— Accordion</h1>
  <div id="my-accordion">
    <div>《西游记》简介</div>
    <div>一个和尚和四个动物的故事: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nulla voluptas velit minus esse voluptatem illum quis magni nihil sint facilis cupiditate nobis quia ab neque. Modi veniam omnis nisi? </div>
    <div>《水浒传》简介</div>
    <div>105个男人和三个女人的故事: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident sapiente aperiam reprehenderit repellat rem magnam vel odio quia harum hic impedit dolorem similique ea est consequatur adipisci at nemo!</div>
    <div>《红楼梦》简介</div>
    <div>一个男人和一群女人的故事: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus minima quidem aspernatur eligendi optio cupiditate minus nam expedita? Aliquid veritatis doloribus maxime vel dicta illo unde iusto qui quasi doloremque.</div>
  </div>
  <script>
    //只要找到插件的父元素，调用jQuery UI已经定义好的插件函数即可
    $("#my-accordion").accordion();
  </script>
</body>

</html>
运行结果
![image-20210717120325826](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717120325826.png)

\5. 我们也可以仿照jquery ui的方式，自定义插件。

 (1). 如何自定义插件:

 a. 前提: 插件的功能和样式，已经在页面中用传统的HTML+CSS+JS+JQ实现了。只不过，暂时和别的页面代码混在一起，不便于重用而已。

 b. 第一步: 将原页面中插件相关的css代码提取到一个独立的css文件中保存

 c. 第二步: 我们也要在独立的js中，向jQuery的原型对象中添加一个自定义的插件函数:

  jQuery.prototype.自定义插件函数=function(){

   //2件事:

  //1. 自动为元素添加class样式

   //2. 自动为元素绑定事件

  }

 (2). 如何使用自定义插件: 和使用jquery ui完全一样

 a. 引入插件的css、jquery.js、插件的js

 b. 按插件要求编写HTML结构和内容:

  1). 不要定义任何class

  2). 给父元素一个id名，便于将来快速查找

 c. 用$()查找插件父元素，调用我们自定义的插件函数()

 (3). 示例: 封装自定义手风琴效果插件并使用插件

 day03剩余/my-ui/my-ui.css

.accordion{width:80%; margin:0 auto;}
.accordion>.title{
  background:#eee; border:1px soild #aaa;
  padding:6px; font-size:1.5em;
  font-weight:bold; cursor:pointer;
}
.accordion>.content{
  border-left:1px solid #eee;
  border-right:1px solid #eee;
}
.accordion>:last-child{
  border-bottom:1px solid #eee;
}
.fade{
  height:0;
  opacity:0;
  overflow:hidden;
  transition:all .5s linear;
}
.in{
  height:84px;
  opacity:1;
}
 day03剩余/my-ui/my-ui.js

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml9252\wps8.jpg)

Query.prototype.myAccordion=function(){
  //this->将来调用myAccordion()函数的.前的某个$(父元素div)
  //因为this已经是$()了，所以this不需要再重复用$()包住了
  //2件事:
  //1. 自动为元素添加class
  //1.1 给当前父元素自己添加class accordion
  this.addClass("accordion")
    //return this->当前父元素自己
  //1.2 给当前父元素下所有奇数位置的元素添加class title
    .children(":nth-child(2n+1)")
    //所有奇数位置的元素
    .addClass("title")
    //return 所有奇数位置的元素
  //1.3 给所有奇数位置的元素的下一个兄弟(偶数位置的元素)添加class content fade
    .next()
    //所有偶数位置的元素
    .addClass("content fade")
    //return 所有偶数位置的元素
  //1.4 给所有偶数位置的元素中排名第一的元素添加class in
    .first() //任何查找结果中排名第一个的元素
    .addClass("in");
  //2. 自动为元素绑定事件
  this//$(".accordion")父元素
  .on("click",".title",function(e){
    //先获得当前点击的某一个title
    $(e.target)
    //获取当前title的下一个兄弟
    .next(".content")
    //为其切换class in
    //如果有in，就去掉in，否则如果没有in，就自动加上in
    .toggleClass("in")
    //清除其余兄弟content上残留的class in
    .siblings(".content")
    .removeClass("in")
  });
}

//将来$("#my-accordion").myAccordion()
//        父元素
<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="my-ui/my-ui.css">
  <script src="js/jquery-1.11.3.js"></script>
  <script src="my-ui/my-ui.js"></script>
 </head>
 <body>
  <h1>使用“高度动画”实现“手风琴”组件</h1>
  <div id="my-accordion">
    <div>《西游记》简介</div>
    <div>一个和尚和四个动物的故事: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nulla voluptas velit minus esse voluptatem illum quis magni nihil sint facilis cupiditate nobis quia ab neque. Modi veniam omnis nisi? </div>
    <div>《水浒传》简介</div>
    <div>105个男人和三个女人的故事: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident sapiente aperiam reprehenderit repellat rem magnam vel odio quia harum hic impedit dolorem similique ea est consequatur adipisci at nemo!</div>
    <div>《红楼梦》简介</div>
    <div>一个男人和一群女人的故事: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus minima quidem aspernatur eligendi optio cupiditate minus nam expedita? Aliquid veritatis doloribus maxime vel dicta illo unde iusto qui quasi doloremque.</div>
  </div>
  <script>
    $("#my-accordion").myAccordion();

  </script>
 </body>
</html>
![image-20210717120506422](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717120506422.png)

六. ajax

\1. 问题: 最简单的get请求，都需要4步。将来项目中的请求很多！如果每个请求都需要4步，太繁琐了！

\2. 解决: 今后，所有的函数库、框架、平台都提供给了一句话发送ajax请求的方法！

\3. 但是: 每种函数库、框架、平台中的这一句话，不一样！

\4. 如何:

$.ajax({

 url:"服务器端接口地址",

 type:"get或post",

 data:{ //请求参数, 如果没有参数，可省略
  参数名: 参数值,

   ... : ...
 },

 dataType:"json", //自动调用JSON.parse()将服务器端返回的json字符串转化为内存中直接可用的数组或对象。万一服务器端返回的不是json字符串，这里可以省略！

 success:function(result){//回调函数，只有请求响应成功后才自动触发。形参result自动接住已经编译后的响应结果对象，可直接使用了。

 //因为ajax是异步的，所以只要希望在请求成功后才能执行的代码必须写在success内部！决不能在success外部执行！

 }

})

\5. 示例: 使用ajax，请求东哥新浪云服务器接口中的数据
15_ajax.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/jquery-1.11.3.js"></script>
</head>
<body>
  <script>
    //向东哥新浪云服务器发送请求
    //1. 请求首页6个商品对象
    $.ajax({
      url:"http://xzserver.applinzi.com/index",
      dataType:"json",
      success:function(result){
        console.log(result);
      }
    })
    //2. 查询5号商品的详细信息
    $.ajax({
      url:"http://xzserver.applinzi.com/details",
      data:{ lid:5 },
      dataType:"json",
      success:function(result){
        console.log(result);
      }
    })
    //3. 登录验证
    //（正确的用户名:dingding, 正确的密码:123456）
    //乱写验证不通过
    $.ajax({
      url:"http://xzserver.applinzi.com/users/signin",
      type:"post",
      data:{
        uname:"dingding",
        upwd:"123456"
      },
      dataType:"json",
      success:function(result){
        console.log(result);
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210717120541761](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210717120541761.png)

今日对应小程序视频列表:

 小程序->在线->JQUERY->day03  

  2. 鼠标事件

  链接：<https://pan.baidu.com/s/1cJkFXF7ZACCTjn4AXVzs7g> 提取码：420d

  3. 模拟触发
​  链接：<https://pan.baidu.com/s/1abMepbPQzaf8RyHUkhs1JQ> 提取码：taka

  4. jquery动画

  链接：<https://pan.baidu.com/s/11hT60mfjCoabDtAYzo2YiA> 提取码：364k

  5. 类数组对象操作

 链接：<https://pan.baidu.com/s/12HFiYmxJvahhFPJEiU1kfg> 提取码：7nb4
 小程序->在线->JQUERY->day04:

 14 添加jQUery自定义函数

 链接：<https://pan.baidu.com/s/1MxMVHxnuOQ24YVLEs8JWbw> 提取码：wyt7

 15 jquery ui 封装自定义jquery插件

 链接：<https://pan.baidu.com/s/1PcI2n0u4VymsNziJwfYjMg> 提取码：f733
  16 jQuery发送ajax请求$.ajax

  链接：<https://pan.baidu.com/s/1Lq27Ljuxq5wPh_EikSkeXg> 提取码：5i2g

总结: this7种情况:

\1. obj.fun()  this->.前的obj

\2. new Fun()  this->new正在创建的新对象

\3. fun()或(function(...){})或回调函数

 因为前边既没有.又没有new，所以this->window

\4. 类型名.prototype.共有方法=function(){

  this->将来调用这个共有方法的.前的某个子对象

    谁调用指谁

 }

\5. 访问器属性中的this->访问器属性所在的对象

\6. DOM和jq中事件处理函数中的this->正在触发事件的当前DOM元素对象

\7. jQuery.prototype.共有方法=function(){

  this->将来调用这个共有方法的.前的$(...)jq对象。

    谁调用指谁.

  因为this->已经是$()了，所以不需要重复再$()一次

 }

总结: $共有4种用法:

\1. $("选择器")  查找DOM元素，封装进jQuery对象中

\2. $(DOM元素对象)  无需查找，直接将DOM元素封装进jQuery对象中

\3. $(HTML片段)  创建新元素

\4. $(function(){ ... })  绑定DOMContentLoaded事件，让代码可以提前触发执行。

总结:

(5). 鼠标事件:

mouseenter代替mouseover

mouseleave 代替mouseout

简写: .hover(处理函数1,处理函数2)

等于: .mouseenter(处理函数1)

  .mouseleave(处理函数2)

(6). 模拟触发:

a. 标准: $元素.trigger("事件名")

b. 如果属于常用事件列表，可简写为:

 $元素.事件名()

\10. 动画:

(1). 简单动画: 3种固定效果

a. 显示隐藏:

 .show() .hide() . toggle()

b. 淡入淡出:

 .fadeIn() .fadeOut() .fadeToggle()

c. 上滑下滑:

 .slideUp() .slideDown() .slideToggle()

(2). 万能动画:

$元素.animate({

 css属性: 目标值

},动画持续时间,function(){

 动画播放结束自动执行

})

(3). 排队和并发:

a. 放在一个animate()中的多个css属性并发变化

b. 放在一个元素的多个animate()中的多个css属性排队变化

(4). 停止动画:

a. 只停止当前一个动画

 $元素.stop()

b. 停止队列中所有动画

 $元素.stop(true)

(5). 选择器匹配正在播放动画的元素: :animated

\11. 类数组对象操作:

(1). 遍历查找结果中每个DOM元素对象:

 $查找结果.each(function(i, domElem){ ... })

(2). 查找一个DOM元素在整个查找结果中的下标位置

 var i=$查找结果.index(要找的DOM元素)

\12. 添加自定义函数:

a. 添加:

 1). 标准:

 jQuery.prototype.自定义函数=function(){ ... }

 2). 简写: jQuery.fn=jQuery.prototype

 jQuery.fn.自定义函数=function(){ ... }

b. 调用: $jq对象.自定义函数()
\13. 封装自定义插件:

a. 封装:

 1). 将css提取到独立的插件.css文件中

 2). 在独立js文件中为jquery原型对象添加自定义插件函数

 jQuery.prototype.自定义插件函数=function(){

  //自动做2件事:

  //1. 为插件所在元素及其子元素自动添加class
  //2. 将原网页中插件所需的事件绑定代码剪切到插件函数中

 }

b. 使用自定义插件:

 1). 引入jquery.js，插件.js，插件.css

 2). 按插件要求编写HTML内容，不用加任何class

 3). 在自定义js中，查找插件所在元素，调用自定义插件函数

\14. 发送ajax请求:

 $.ajax({

  url:"服务器端接口地址",

  type:"get或post",

  data:{ 参数名: 参数值, ... },

  dataType:"json",

  success:function(result){

   //result就是服务器端返回的结果

   //不用自己调JSON.parse()

  }

 })

作业:

\1. 复习: 小程序->在线->JQUERY->day04

\2. 必须复习:

 小程序->在线->JSCORE->day03  5. 访问器属性

 小程序->在线->JSCORE->day05 作业: ES6中关于对象中属性和方法的简写

\3. 预习: 小程序->在线->VUE->day01

\4. JQUERY一小时串讲:
链接：<https://pan.baidu.com/s/12lDWlXF840UiiplamQg-Dw> 提取码：loew

5.（确实学有余力的同学）看小程序视频 完成 jQuery版学子商城项目

 小程序->在线->JQUERY->day04   项目: 0~4 学子商城项目...

 所有人下载项目:0. 准备中的xz前端静态文件夹_起始，是项目的起始状态（空的），看着视频中项目:1，项目:2, 项目:3,...跟着做。

 xz前端静态文件夹_完成中是完成的代码，如果作业过程中出错，可以跟完成文件夹中代码对一下。

 家里环境xampp和nodejs能用，且第一阶段学的好的同学:  

  从小程序中项目: 0. 准备...中下载xzserver.zip，用自己的服务器端代码

 家里环境xampp和nodejs不能用，或者第一阶段学的不好的同学：

  无需下载xzserver.zip

  视频中所有ajax请求的服务器端接口地址，都改为我的新浪云服务器地址，就不需要你再运行服务器端了。也不需要你了解任何服务器端知识了:

   /index  改为 <http://xzserver.applinzi.com/index>

 /details  改为 <http://xzserver.applinzi.com/details?lid=xxx>

总结:   DOM操作万能4步:

\1.   查找触发事件的元素

\2.   绑定事件处理函数

 3. 查找要修改的元素

 4. 修改元素:  包含三步

  取出旧值，修改后，将新值放回元素上

总结:  $的原理:  new  jQuery()   4种用法:  

\1.  $("选择器")   2件事:  

 (1).  创建jQuery子对象，  

 (2).  查找符合条件的DOM元素，保存进jQuery对象中

\2.  $(DOM元素) 创建jQuery子对象，并无需查找就可将已经获得的DOM元素保存进jQuery对象中.——其实就是将DOM元素对象转化为jQuery对象

\3.  $(HTML片段)  将HTML片段创建为新DOM元素对象

\4.  $(function(){  ...  }) 绑定DOMContentLoaded事件，让代码在HTML+JS加载完就可提前执行。

总结:  jQuery  API  三大特点:  

\1.  自带遍历:  只对jQuery对象调用一次简化版函数，等效于自动对jQuery对象内保存的每个DOM元素都调用一次等效的原生函数或属性。

\2.  一个函数两用:  和修改、事件绑定相关的函数

 (1).  不传入新值时，默认执行获取旧值的操作

 (2).  传入新值时，自动切换为执行修改操作

\3.  凡是没有特定返回值的函数，几乎都返回.前正在操作的jQuery对象本身！

 如果前一个函数正在操作的.前的属于和后一个操作想要的.前的主语，刚好一样！则可以使用链式操作，避免使用变量或重复代码！

总结:   增删改查+事件绑定  不用背！！！用的时候来找到即可！

\1.   查找元素:

 (1).   将所有的查找统一为按选择器查找:  var   $jquery对象=$("选择器")

 a.  jQuery支持所有CSS3选择器

 b.  扩展:  

  1).  基本过滤:  

   :first   :last    :even    :odd     :eq(i)    :gt(i)      :lt(i)

  2).  内容过滤:  :contains(关键词)   :has(选择器)    :parent     :empty

  3).  可见性过滤:  :visible   :hidden

  4).  表单元素过滤:  

  i.  :input    选择所有表单元素(input  select  textarea  button)

  ii.  :text    :password     :button      :radio    ...  ...

 (2).   不需要查找就可直接获得的元素对象:   1个

 a.   $(document)       根节点对象

 (3).   按节点间关系查找:

 a.   父子关系:

  1).   $元素.parent()   代替   元素.parentElement
​  2).   $元素.children("选择器")   代替   元素.children ——只在直接子元素中查找

   新增:  $元素.find("选择器")  在所有后代中查找

  3).   $元素.children(":first-child") 代替  元素.firstElementChild

  4).   $元素.children(":last-child") 代替  元素.lastElementChild

 b.   兄弟关系:  

  1).   $元素.prev()   代替   元素.previousElementSibling

   新增:  $元素.prevAll("选择器")

  2).   $元素.next()   代替   元素.nextElementSibling

   新增:  $元素.nextAll("选择器")

  3).  新增: 查找除当前元素之外其余所有兄弟:   $元素.siblings("选择器")

\2.   修改:   3种  

 (1).   内容:   3种

 a.   $元素.html()  代替了 .innerHTML

 b.   $元素.text()  代替了 .textContent

 c.   $元素.val()  代替了 .value

 (2).   属性:   3种:  

![image-20210719105132835](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210719105132835.png)

![image-20210719105147677](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210719105147677.png)

 a.   字符串类型的HTML标准属性:   2种:

  1).   $元素.attr("属性名","属性值")  代替: getAttribute()  setAttribute()

  2).   $元素.prop("属性名","属性值")  代替:  元素.属性名

 b.   bool类型的HTML标准属性:   只能用   $元素.prop("属性名",bool)

 c.   自定义扩展属性:   1种

  1).  $元素.attr("data-自定义属性名","属性值")

   代替   元素.getAttribute()   元素.setAttribute()

  3).   查找带有自定义扩展属性的元素:   属性选择器   [data-自定义属性=属性值]

 (3).   样式:

 a.   只获取或修改一个css属性时:  统一为:   $元素.css("css属性名",  "属性值")

 b.   批量修改多个css属性时:   用class

  1).  $元素.addClass()

  2).  $元素.removeClass()

  3).  $元素.hasClass()

  4).  $元素.toggleClass();

简写:  .attr()/.prop()/.css()  其实都可以一句话修改多个属性值$元素.attr或prop或css({  属性名:  属性值,   ...  :  ...})

\3.   添加元素:  jquery只需要2步

 (1).   用HTML片段创建新元素

 var   $新元素=$(HTML片段)

 说明:  元素所需的属性和样式已经包含在HTML片段里了，所以，无需再专门添加关键属性。

 (2).  将新元素添加到DOM树:   5种 10个函数

 a.  父元素末尾追加新元素:  

  $父元素.append($新元素) 代替 父元素.appendChild(新元素)

  兄弟函数:  $新元素.appendTo($父元素)

 b.  父元素开头插入新元素:  

  新增:  $父元素.prepend($新元素)

  兄弟函数: $新元素.prependTo($父元素)

 c.  插入到一个现有子元素之前:  

  $现有元素.before($新元素) 代替 父元素.insertBefore(新元素,  现有子元素)

  兄弟函数: $新元素.insertBefore($现有元素)

 d.  插入到一个现有子元素之后:

  新增:   $现有元素.after($新元素)

  兄弟函数: $新元素.insertAfter($现有元素)

 e.  替换父元素下一个现有子元素:  

  $现有元素.replaceWith($新元素) 父元素.replaceChild(新元素,  现有子元素)

  兄弟函数: $新元素.replaceAll($现有元素)

 (2).  jQuery内已封装了尽量减少操作DOM树的优化(文档片段)，所以我们无需额外专门创建文档片段，jquery内部也已经自动使用了文档片段！

\4.   删除元素:   $元素.remove()    代替   父元素.removeChild(要删除的元素)

\5.  新增: 克隆:  $元素.clone()

\6.  新增:  判断元素是否符合选择器要求:  $元素.is("选择器")

\7.   事件:

 (1).   事件绑定:   1种:

 a.   $元素.on("事件名",  事件处理函数) 代替 元素.addEventListener("事件名",  处理函数)

  $元素.off("事件名",  原事件处理函数) 代替 元素.removeEventListener("事件名",原处理函数)

 b.  简写:  只有以下列表中的事件才能:  $元素.事件名(事件处理函数)

常用事件名:  blur  失去焦点  change  下拉列表选中项改变  click  单击  dblclick  双击  focus  获得焦点   keydown  键盘按键按下  keyup  键盘按键抬起mousedown  鼠标按键按下  mouseenter  鼠标进入(jq)mouseleave  鼠标移出(jq)mousemove   鼠标移动mouseout  鼠标移出(dom)mouseover  鼠标进入(dom)mouseup  鼠标按键抬起resize   窗口大小改变scroll   网页滚动

 (2).  页面加载完成事件：2次

 a.  DOM中:  先DOMContentLoaded，再window.onload

 b.  jq中:  先$(function(){ ...  })，再$(window).load(function(){  ...  })

 c.  今后，所有不依赖于css和图片的初始化页面的jquery代码（事件绑定，设置元素的初始内容、属性和样式等），都应该放在$(function(){ ...  })中

 (3).   事件模型:   3个阶段:   捕获、目标触发、冒泡

 (4).   获得事件对象:   定义事件绑定时:

  $元素.事件名(function(e){   //触发事件时e=event   }

 (5).   取消冒泡/停止蔓延:   e.stopPropagation()

 (6).   只要多个平级子元素都要绑定相同的事件时:   利用冒泡/事件委托:   3步

 a.   事件绑定在父元素上一份，但是必须用.on()绑定

 b.   不用e.target代替this，this指回了最初触发事件的子元素，又可以用了

 c.   为.on()添加第二个选择器参数，.on()自动判断当前点击的元素是否想要的。无需自己写if了。

 $父元素.on("事件名",  "选择器",  function(){

  //this->指向最初触发事件的子元素，不再指父元素，this又能用了

  //不用写if了

 })

 (7).   阻止元素自带的默认行为:   e.preventDefault();

 (8).   获得鼠标位置：

 a.   鼠标位置相对屏幕左上角的距离:     e.screenX           e.screenY

 b.   鼠标位置相对浏览器文档显示区左上角的距离  e.clientX             e.clientY

 c.   鼠标位置相对事件所在元素左上角的距离e.offsetX               e.offsetY

 (9).  鼠标事件:  

 a.  DOM中:  mouseover   mouseout   反复进出子元素也会反复冒泡触发父元素的进出事件

 b.  jq中:  

  1).  mouseenter和mouseleave  代替mouseover和mouseout

  2).  如果同时绑定mouseenter和mouseleave，就可只绑定一个hover

   $元素.hover( //=mouseenter+mouseleave

    function(){  ...  },  //给mouseenter

    function(){  ...  }   //给mouseleave

   )

  3).  特例:  万一两个函数可以修改为一样的，也可以只写一个function

   $元素.hover( //=mouseenter+mouseleave

    function(){  ...  }  //给mouseenter和mouseleave

   )

 (10).  模拟触发:  $元素.trigger("事件名")

   如果要触发的事件属于常用事件列表，可简写为 $元素.事件名()

 (11).   窗口滚动事件:

 a.   当滚动条滚动时自动触发:   window.onscroll=function(){  ...   }

 b.   获取滚动条滚动过的距离:

 var  scrollTop=document.body.scrollTop||document.documentElement.scrollTop;

 c.   控制滚动条滚动到指定位置:   window.scrollTo(0,   要滚动到的位置)

\8.  动画:  

 (1). 简单动画: 3种固定效果，9个函数

 a. 显示隐藏:

  $元素.show(动画持续时间毫秒数, function(){ 动画结束后自动执行 })  

  $元素.hide(动画持续时间毫秒数, function(){ 动画结束后自动执行 })  

  $元素.toggle(动画持续时间毫秒数, function(){ 动画结束后自动执行 });

 b. 上滑下滑:

  $元素.slideUp(动画持续时间毫秒数, function(){ 动画结束后自动执行 })  

  $元素.slideDown(动画持续时间毫秒数, function(){ 动画结束后自动执行 })  

  $元素.slideToggle(动画持续时间毫秒数, function(){ 动画结束后自动执行 });

 c. 淡入淡出:

  $元素.fadeIn(动画持续时间毫秒数, function(){ 动画结束后自动执行 })  

  $元素.fadeOut(动画持续时间毫秒数, function(){ 动画结束后自动执行 })  

  $元素.fadeToggle(动画持续时间毫秒数, function(){ 动画结束后自动执行 });

 (2). 万能动画:

 $元素.animate({

  css属性: 目标值,

   ... : ...

 }, 动画持续时间毫秒数, function(){动画结束后自动执行})

 (3). 停止动画: $元素.stop()

 (4). 查找正在播放动画的元素: jquery新增选择器:  :animated

\9.  类数组对象操作:  

 (1). 遍历查找结果中每个DOm元素: $(...).each(function(i, elem){ ... })

 (2). 查找一个元素在查找结果中的下标位置: $(...).index(要找的DOm元素)

\10. 添加自定义函数:

 jQuery.prototype.自定义函数=function(形参列表){

  this->将来调用这个自定义函数的.前的jQuery子对象

  this不用$(this)

 }

 将来:

 $(查找结果).自定义函数()

\11. 封装自定义插件:

 (1). 创建自定义插件:

 a. 先创建独立css文件，将原网页中插件相关的css，剪切到独立的css文件中

 b. 再创建独立js文件，为jquery原型对象添加一个自定义插件函数。插件函数中做2件事

  1). 为找到的HTML元素自动添加class

  2). 为找到的元素自定绑定事件处理函数

 (2). 使用插件:

 a. 将插件的css和js文件拷贝到项目中

 b. 在页面中引入jquery的js和插件的js以及插件的css

 c. 在页面中按插件要求编写HTML内容和结果，不需要加class

 d. 在自定义js中，查找插件父元素，调用插件函数

\12. ajax

 $.ajax({

  url:"服务器端接口地址",

  type:"get或post",

  data:{ 变量: 值, 变量: 值 }, //发送到服务器端的参数变量和值

  dataType:"json",

  success: function(result){

   //可使用result来获得服务器端返回的结果执行后续操作

  }

 })

\13. 跨域:

 (1). 浏览器同源策略: 浏览器会检查ajax获取的服务器端响应结果的来源地址是否与当前网页来源地址相同。只有相应结果来源于当前网页来源相同，才允许使用响应结果。否则，不允许使用。

 (2). 如何跨域:

 a. 一个接口:

 res.writeHead(200,{

  ... ...

  "Access-Control-Allow-Origin":"要伪装的客户端地址"

 })

 res.write(要返回的数据)

 res.end();

 b. nodejs express项目所有接口都要跨域:

  1). 安装cors: npm i -save cors

  2). app.js中:

  const cors=require("cors")

  //在var app=express()之后

  app.use(cors({

  origin:['http://localhost:8080',"http://127.0.0.1:5500",...],
     []中放的是所有可能要伪装的客户端网页地址

  }))

总结:  this    8种:

一定不要看定义在哪儿，只看在哪里调用，如何调用

\1. obj.fun()   this->obj

\2. new  Fun()   this->new正在创建的子对象

  this->将来调用这个共有方法的.前的子对象

\4. fun() 和 (function(){  })() 和回调函数中的this->window

\5. 访问器属性中的this，指访问器属性所在的当前对象。

\6.事件处理函数中的this->当前正在触发事件的这个元素对象

\7. $jquery对象.click(function(){  this->将来点击的那个DOM元素对象})

\8. jQuery.prototype.自定义函数=function(){

  … this指将来调用这个自定义函数的点前的一个jq子对象 …

  }

## vue
day01

一. 什么是VUE:

\1. 什么是VUE:

 (1). 第三方开发的: 必须下载才能用

 (2). 基于MVVM设计模式的: ?

 (3). 渐进式的: 可以逐步在项目中使用vue技术，可以和其它技术混搭。

 (4). 纯前端: 单靠浏览器就可以运行，不需要任何后端技术。

 (5). js框架: 可以自动化的完成大部分重复的劳动，提高开发效率。

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml25296\wps1.jpg)

\2. 为什么: 简单！避免重复劳动

\3. 何时: 今后，只要以数据操作(增删改查)为主的项目，都可以由vue框架开发

 比如: 饿了么，每天，大众点评，淘宝，京东，今日头条，微博，网易云音乐，小红书，知乎，自如，链家，携程，去哪儿...

 不是以数据操作为主: 大型游戏，微信/qq，抖音，爱奇艺

二. 如何使用:

\1. 官网: cn.vuejs.org

\2. 下载: 2种:

 (1). 只下载一个vue.js文件，引入网页使用: 4天

 a. 版本: 旧项目都用2.x做，新项目都用3.x

  开发版: (未压缩版)有完备的注释、代码格式，以及见名知意的变量名。还包含极其友好的错误提示。

   可读性好，适合学习和开发之用

   体积大，不适合生产环境快速下载运行

  生产版: (压缩版)去掉了所有数值和代码格式，极简化了变量名。去掉了友好的错误提示。

   体积小，适合生产环境快速下载运行

   可读性差，不适合学习和开发之用。

 b. 问题: 随着前端项目的规模越来越大，文件数量越来越多，如果还是零散的随意的管理大量的文件——没有标准，极其不便于大项目的写作。

 c. 因为单纯，所以适合初学者快速上手学习某一项技能！

 (2). 使用vue脚手架工具: 后4天

 a. 什么是: 一套已经包含核心功能的标准的半成品项目文件和文件夹结构。

 b. 为什么: 标准！

 c. 何时: 今后，企业中开发，都是基于脚手架基础上开发的。

 d. 优点: 便于大项目的标准化和分工协作。

 e. 但是: 在脚手架中开发，每做一个功能，都需要综合用到很多知识。如果基础不扎实，进入脚手架，寸步难行！

\3. 第一个vue程序:

1_first_jq.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/jquery-1.11.3.js"></script>
</head>
<body>
  <button id="btnMinus">-</button>
  <span>0</span>
  <button id="btnAdd">+</button>
  <script>
    //先实现+
    //DOM 4步
    //1. 查找触发事件的元素
    $("#btnAdd")
    //2. 绑定事件处理函数
    .click(function(){
      //3. 查找要修改的
      var $span=$("span");
      //4. 修改元素
      //4.1 先取出span中现在的数量，转为整数
      var n=parseInt($span.html());
      //4.2 将n+1
      n++;
      //4.3 将新的n再放回去:
      $span.html(n);
    })
    //再实现-
    //DOM 4步
    //1. 查找触发事件的元素
    $('#btnMinus')
    //2. 绑定事件处理函数
    .click(function(){
      //3. 查找要修改的
      var $span=$("span");
      //4. 修改元素
      //4.1 先取出span中现在的数量，转为整数
      var n=parseInt($span.html())
      //4.2 如果n>0，才能n-1
      if(n>0){ n-- }
      //4.3 将新的n再放回去:
      $span.html(n);
    })
  </script>
</body>
</html>
运行结果
![image-20210720090516436](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720090516436.png)

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!--先引入vue.js-->
  <script src="js/vue.js"></script>
</head>

<body>
  <!--VUE 3步-->
  <!--1. 先做界面
  1.1 统一的要求: 界面中所有元素，都必须包裹在一个唯一的父元素下，习惯上<div id="app"></div>
  1.2 找到界面中将来可能随程序自动变化的位置，用专门的语法:{{变量名}}来标记/占位
  本例中：span的内容随程序自动变化
    <span>{{n}}</span>
  1.3 找到界面中将来可能触发事件的元素，用专门的语法: @事件名="事件处理函数名" 来标记
  本例中: 两个按钮会触发事件: 
    +按钮, @click="add"
    -按钮, @click="minus"-->
  <div id="app">
    <button @click="minus">-</button>
    <span>{{n}}</span>
    <button @click="add">+</button>
  </div>

  <script>
    //2. 创建一个new Vue()对象，来监控div所包含的区域。
    var vm=new Vue({
      //vue对象中，必须用el属性，告诉new Vue()要监控的区域是哪里: (el其实是element的缩写)
      el:"#app",//id选择器
      //3. 定义模型对象，来保存界面中所需的所有变量和事件处理函数
      //什么是模型对象: 就是专门替界面保存变量和事件处理函数的特殊的对象
      //3.1 先创建一个data:{}来保存界面中所需的所有变量和初始值
      //本例中: 因为界面上需要一个变量n，所以，data中只有一个变量n即可
      data:{
        n:0
      },
      //3.2 再创建一个methods:{}来保存界面中所需的所有事件处理函数
      //本例中: 界面上一共需要2个事件处理函数
      methods:{
        add(){this.n++},
        minus(){
          if(this.n>0){
            this.n--
          }
        }
      }
      //强调:
      //3.2.1 methods中的事件处理函数中，如果要操作data中的变量，必须加this.
      //3.2.2 methods中的事件处理函数中，根本不用考虑如何从界面取值，也不用考虑如何将新值放回界面，只需要专门考虑如何把data中的变量值修改正确即可！

      //new Vue()会自动保持界面中变量n和data中变量n同步:
      //开局时，data中n是几，new Vue()就把n的值送到页面上，对应位置显示给人看
      //当methods中修改了n的值，new Vue()会自动把n的新值自动更新到界面中n所在的位置给人看
    });
    console.log(vm);
  </script>
</body>

</html>
运行结果
![image-20210720090538484](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720090538484.png)

![image-20210720090547288](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720090547288.png)

三. MVVM:

对应小程序视频: 小程序->在线->VUE->day01  2. MVVM ... ...
链接：<https://pan.baidu.com/s/1bjcs_8H2GYMi0fCDwyJHPg> 提取码：w768

\1. 旧的前端代码分为三大部分:

 (1). HTML:专门定义网页的内容和结构

 (2). CSS: 专门为网页添加样式

 (3). js: 专门操作网页中的内容，为页面添加交互行为

\2. 问题:

 (1). HTML和CSS功能太弱了！连程序最基本的因素(变量、判断、循环)都不支持！——生活不能自理

 (2). 导致，哪怕很小的修改，都要麻烦JS来操作。导致，js中存在大量重复和冗余的工作。

\3. 解决: MVVM设计模式:(重点)

 (1). 什么是: 对前端三大代码的重新划分:

 (2). 三部分:

 a. 界面(View):

  1). 包含以前的HTML+CSS

  2). 增强版: 让HTML也支持变量、判断、循环——HTML初步生活可以自理！

 b. 模型对象(Model):

  1). 什么是: 专门保存页面中所需的变量和函数的特殊对象

  2). 包含2个:

  i. data:{}  专门保存界面中所需的所有变量

  ii. methods:{} 专门保存界面中所需的所有函数

  3). 问题: 模型对象中的变量和函数，不会自己长腿跑到页面上

 c. 视图模型(ViewModel)

 1). 什么是: 专门负责将模型对象中的变量和函数，自动运送到界面中指定位置的特殊对象。——快递小哥

  2). 作用: 可自动将程序中的变量和函数运送到界面中所需的位置。并且，还能自动保持界面显示与程序中的数据同步。

\4. vue框架如何实现MVVM设计模式: vue的绑定原理（重点）

(1). 访问器属性

 a. new Vue()将data:{}引入到new Vue()中时，先将data对象及其内部的内容全部隐姓埋名。

 b. new Vue()会自动为data中每个变量创建访问器属性，监视对每个变量的修改操作。访问器属性不再隶属于data对象，而是直接隶属于new Vue()

 c. 将来，只要在程序中修改变量，都会自动调用访问器属性的set()函数。

 d. set()函数中提前安插了一个通知函数()。可通知外部，哪个变量值发生了变化。

 e. methods中所有的函数，进入new Vue()后，methods对象就被打散，原methods中所有函数直接隶属于new Vue()对象了。

 f. 所以，methods中的函数和data中的变量，最终会平级保存，都直接隶属于new Vue()。所以，methods中的函数，想操作data中的变量，必须加this。

(2). 虚拟DOM树

 a. 什么是: 专门保存界面中所有可能发生变化的元素的简化版DOM树。

 b. 何时创建:

  1). new Vue()的第二大步，在创建完data和methods之后，根据el属性值的选择器所指的元素，去扫描界面中指定区域的元素。

  2). 一边扫描真实DOM树，一边就创建虚拟DOM树，只保存可能发生变化的元素。

 c. 将来

 1). 只要在程序中修改了变量值，就会自动触发访问器属性的set()，就会自动执行set()中的通知函数。通知函数()通知虚拟DOM树，哪个变量发生了变化。

  2). 虚拟DOM树扫描自己内部保存的所有可能发生变化的元素，只找出受本次变量修改影响的元素。

  3). 可以用提前封装好的DOM操作，将变量的新值，自动修改回页面中显示。

 d. 虚拟DOM树的优点: 4大优点: （重点，笔试）

  1). 小: 只保存可能变化的个别元素

  2). 快: 因为保存的元素少，所以每次遍历查找受影响的元素时，比遍历原始DOM树，快的多！

  3). 修改效率高: 因为每次只修改受影响的个别元素。不受影响的元素是不会改变的！

  4). 避免重复: 因为虚拟DOM树中已经封装了DOM的增删改查+事件绑定操作。所以，不用我们再手工查找、手工修改。都是自动完成的！

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml25296\wps3.jpg)

对应小程序视频: 小程序->在线->VUE->day01  3. 绑定语法 {{}} v-bind ...v-show...v-if...
链接：<https://pan.baidu.com/s/1eBjDnjXtC4sx5DIazmNafg> 提取码：c6tc

四. 绑定语法: 学名: 插值语法 Interpolation

\1. 什么是: 在界面中标记可能发生变化的元素内容的特殊语法

\2. 何时: 今后，只要发现一个元素的内容可能随程序自动改变时，都要用绑定语法来标记

\3. 如何: <元素>xxxx{{自定义变量名}}xxx</元素>

\4. {{}}可以和其它写死的文本内容混搭

\5. {{}}中: 原理和模板字符串中的${}完全一样的！

 (1). 可以放: 一切有返回值的合法的js变量或表达式

  比如: 变量，三目，算术计算，访问数组元素，创建对象，调用函数

 (2). 不能放: 分支、循环以及没有返回值的js表达式

\6. 示例: 使用{{}}显示隐藏不同数据:

3_{{}}.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <h3>Welcome {{uname}}</h3>
    <h3>性别: {{sex==1?"男":"女"}}</h3>
    <h3>小计:¥{{(price*count).toFixed(2)}}</h3>
    <h3>下单时间: {{new Date(orderTime).toLocaleString()}}</h3>
    <h3>今天星期{{arr[day]}}</h3>
  </div>
  <script>
    new Vue({
      el:"#app",
      data:{
        uname:"dingding",
        sex:1,
        price:12.5,
        count:5,
        orderTime:1614158191101,
        arr:["日","一","二","三","四","五","六"],
        //    0    1    2    3    4   5    6
        day:new Date().getDay()
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210720090927943](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720090927943.png)

五. 指令(directive):

\1. 什么是:

专门给HTML元素添加新功能的特殊HTML属性

\2. 包括: 13种

(1). v-bind:

 a. 问题: 如果元素的属性值可能随程序自动变化，则不能用{{}}绑定。

 b. 解决: 今后，只要元素的属性值有可能随程序自动变化，都可以用v-bind指令代替{{}}绑定属性值

c. 如何: <元素 v-bind:属性名="js变量或表达式">

d. 简写: <元素 :属性名="js变量或表达式">

e. 原理: new Vue()在扫描页面时，只要发现:开头的属性，都会先自动计算=右边的js变量或表达式的值。然后，将变量或表达式的值作为当前属性的属性值。

f. 强调: 加了:，就不要再加{{}}了！加了:，=右边的""就起到了{{}}的作用！""中也可以写一切有返回值的js变量和表达式。

g. 示例: 根据pm2.5数值，显示不同表情:

4_v-bind.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>根据程序中PM25的数值显示不同的表情</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <!--哪里可能随程序自动改变？-->
    <img :src="
      pm25<100?'img/1.png':
      pm25<200?'img/2.png':
      pm25<300?'img/3.png':
               'img/4.png'
    ">
    <h3>{{
      pm25<100?'img/1.png':
      pm25<200?'img/2.png':
      pm25<300?'img/3.png':
               'img/4.png'
    }}</h3>
  </div>
  <script>
    var vm=new Vue({
      el:"#app",
      data:{
        //程序中只保存pm2.5的数值，不保存图片路径
        pm25:360
      }
    })
    //运行后，F12打开控制台，console，输入vm.pm25=数值，观察页面上图片的变化.
  </script>
</body>
</html>
运行结果
![image-20210720091104334](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720091104334.png)

(2). v-show:

 a. 什么是: 专门控制一个元素显示隐藏的特殊指令

 b. 何时: 只要用程序控制一个元素的显示隐藏时，都用v-show。

 c. 如何:

  <元素  v-show="bool类型的变量或判断条件">
 d. 原理: 只要new Vue()扫描到v-show，就会先计算=右边的判断条件的值:

  1). 如果=右边的判断条件值为true，则v-show什么也不做，当前元素默认显示

  2). 如果=右边的判断条件值为false，则v-show自动被翻译为style="display:none"，当前元素就隐藏。

 e. 示例: 打开和关闭对话框:

 5_v-show.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <style>
    #pop{
      position:fixed;
      top:50%;
      left:50%;
      width:300px;
      height:100px;
      margin-left:-150px;
      margin-top:-50px;
      background-color:lightBlue
    }
    #pop>a{
      float:right;
      margin-right:20px;
      text-decoration:none;
    }
  </style>
</head>
<body>
  <!--VUE 3步
  1. 做界面: 又3步
  1.1 唯一父元素
  1.2 找可能发生变化的元素
  本例中：div id="pop"的显示隐藏状态来回切换。所以，应该用v-show
  1.3 找触发事件的元素
  本例中: 两个元素触发事件
    点按钮，让对话框显示
    点×，让对话框隐藏-->
  <div id="app">
    <button @click="show">click me</button>
    <div v-show="visible" id="pop">
      <a @click="hide" href="javascript:;">×</a>
    </div>
  </div>
  <script>
    //2. 创建new Vue()对象，监控id为app的区域
    new Vue({
      el:"#app",
      //3. 创建模型对象:
      //3.1 创建data对象
      //本例中: 因为界面上只需要一个visible变量，表示对话框是否显示
      data:{
        visible: false //默认对话框不显示
      },
      //3.2 创建methods对象
      //本例中: 因为界面中需要两个函数,所以
      methods:{
        show(){//让对话框显示
          this.visible=true;
        },
        hide(){//让对话框隐藏
          this.visible=false;
        }
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210720091257478](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720091257478.png)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml25296\wps4.jpg)

(3). v-if, v-else:

 a. 什么是: 专门控制两个元素二选一显示的指令

 b. 何时: 今后，只要控制两个元素二选一显示，都用v-if和v-else

 c. 如何:

  <元素1 v-if="条件1">
  <元素2 v-else>

 d. 原理: 每当new Vue()扫描到v-if时，先计算=右边条件变量或表达式的值。

  1). 如果v-if等号右边的条件为true，则new Vue()会保留v-if所在元素。删除v-else所在元素

  2). 如果v-if等号右边的条件为false，则new Vue()会先删除v-if所在的元素，保留v-else所在的元素。

 e. 强调:

  1). v-if和v-else两个元素之间必须紧挨着写，不能插入其他元素。

  2). v-else后不要写=xxx (和程序中else后一样要求)

 f. v-show和v-if的差别:(重点 笔试)

  1). v-show，用display:none来隐藏元素

  2). v-if和v-else是通过添加删除元素方式来控制元素显示隐藏。

 g. 示例: 切换用户登录状态:

 6_v-if_v-else.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <!--VUE 3步
  1. 做界面
  1.1 唯一父元素包裹
  1.2 找可能发生变化的元素
  本例中: 两个div二选一显示，所以用v-if和v-else
  1.3 找触发事件的元素
  本例中: 登录和注销两个a元素可以触发事件-->
  <div id="app">
    <!--已登录时显示-->
    <div v-if="isLogin">
      <h3>Welcome dingding <a href="javascript:;" @click="logout">注销</a></h3>
    </div>
    <!--未登录时显示-->
    <div v-else>
      <a href="javascript:;" @click="login">登录</a> |
      <a href="javascript:;">注册</a>
    </div>

  </div>
  <script>
    //2. 创建new Vue()
    new Vue({
      el:"#app",
      //3. 创建模型对象
      //3.1 创建data对象
      //本例中：因为界面中只需要1个变量isLogin来标记用户是否登录
      data:{
        isLogin:false //开局，用户默认未登录
      },
      //3.2 创建methods对象
      //本例中：因为界面需要两个事件处理函数
      methods:{
        login(){//将用户登录状态改为已登录
          this.isLogin=true;
        },
        logout(){//将用户登录状态改为未登录
          this.isLogin=false;
        }
      }
    })
  </script>
</body>
</html>
运行结果
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml25296\wps7.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml25296\wps8.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml25296\wps9.jpg)

常见错误: Error compiling template : 模板编译错误

 通常因为HTML中所写的HTML标签或绑定语法不符合vue的要求了！

 进一步确定出错的位置:

 沿控制台左侧向下找，跳过大片的HTML代码，找到一个很短的"-"，这里标记的就是出错的位置！

总结:  this    8种:

一定不要看定义在哪儿，只看在哪里调用，如何调用

\1. obj.fun()   this->obj

\2. new  Fun()   this->new正在创建的子对象

\3. 类型名.prototype.共有方法=function(){  ...  }

  this->将来调用这个共有方法的.前的子对象

\4. fun() 和 (function(){  })() 和回调函数中的this->window

\5. 访问器属性中的this，指访问器属性所在的当前对象。

\6. DOM和jQuery事件处理函数中的this->当前正在触发事件的这个元素对象

\7. jQuery.prototype.自定义函数=function(){

  … this指将来调用这个自定义函数的点前的一个jq子对象 …

  }

\8. VUE中的this都指当前vue对象或当前组件对象。

总结:

\1. MVVM: 界面View+模型Model+视图模型ViewModel

\2. Vue绑定原理: 访问器属性+虚拟DOM树

变量被修改时: 访问器属性发出通知，虚拟DOM树扫描并仅更新受影响的元素

\3. 虚拟DOM树优点:

(1). 小: 只包含可能变化的元素。

(2). 遍历查找快

(3). 修改效率高: 只修改受影响的元素。

(4). 避免重复编码: 已封装DOM增删改查代码

\4. Vue功能3步:

(1). 先创建增强版的界面:

a. 整个界面必须包含在一个唯一的父元素下:

 通常是<div id="app">
b. 可能变化的元素内容用{{自定义变量名}}标记

c. 触发事件的元素用@click="自定义处理函数名"标记

(2). 再创建new Vue()对象,其中el:指向new Vue()要监控的页面区域

(3). 在new Vue()对象内定义模型对象data和methods

a.界面所需的所有变量都放在data中

b.界面所需的所有事件处理函数都放在methods中

\5. 总结: 绑定语法+13种指令

(1). 如果元素的内容可能变化:     {{}}

(2). 如果元素的属性值可能变化:       :

(3). 控制一个元素显示隐藏:     v-show

(4). 二个元素二选一显示: v-if   v-else

今日对应小程序视频列表:

 小程序->在线->VUE->day01

 1. vue和第一个vue程序

 链接：<https://pan.baidu.com/s/1an94zUPHU-8iJvxyN3QoGw> 提取码：w9q2

 2. MVVM vue绑定原理

 链接：<https://pan.baidu.com/s/1bjcs_8H2GYMi0fCDwyJHPg> 提取码：w768

 3. 绑定语法 {{}} v-bind ...v-show...v-if...

 链接：<https://pan.baidu.com/s/1eBjDnjXtC4sx5DIazmNafg> 提取码：c6tc

作业:

\1. 复习今日小程序问题清单: 小程序->首页->VUE->day01

\2. 预习小程序中: 小程序->在线->VUE-> day02

\3. (学有余力再做)作业: 使用vue实现标签页效果 tabs 源代码基于DOM day02 tabs案例基础上修改

 链接：<https://pan.baidu.com/s/1wXMrvBahpLv9wHWJYWnX1Q> 提取码：4noi

\4. (学有余力再做) 扩展笔试题: 观察者模式

 链接：<https://pan.baidu.com/s/1Hg6gls1oav1UMujsFv-bUg> 提取码：ixfq

服务器属性：监视

虚拟DOM树：保存可能发生变化的元素的集合（数组，类数组对象.....）

day02

一. 指令:

\1. v-else-if

 (1). 什么是: 专门和v-if和v-else一起控制多个元素多选一显示隐藏

 (2). 何时: 今后，只要控制多个元素多选一显示隐藏时，都用v-else-if
 (3). 如何:

  <元素1  v-if="条件1">
  <元素2 v-else-if="条件2">

  <元素3 v-else-if="条件3">
  ... ...

  <元素n v-else>

 (4). 原理: 当new Vue()扫描到v-if时，先计算v-if后的条件:

 a. 如果v-if条件为true，则保留v-if所在元素，删除其余v-else-if、v-else元素

 b. 如果v-if条件为false，则先删除v-if所在元素，然后，继续计算每个v-else-if后的条件。如果任意一个v-else-if的条件为true，则只保留着一个v-else-if所在元素，删除其余v-if、v-else-if和v-else元素

 c. 如果所有v-if和v-else-if的条件都不满足，则只保留v-else，删除其余v-if和v-else-if的元素

 d. 强调: v-if和v-else-if和v-else必须紧挨着写，中间不能插入其他元素。

 (5). 示例: 使用v-else-if实现根据pm2.5数值不同显示不同的表情

 day01剩余/7_v-else-if.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <img v-if="pm25<100" src="img/1.png" alt="">
    <img v-else-if="pm25<200" src="img/2.png" alt="">
    <img v-else-if="pm25<300" src="img/3.png" alt="">
    <img v-else src="img/4.png" alt="">
  </div>
  <script>
    var vm=new Vue({
      el:"#app",
      data:{
        pm25:360
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210720142747805](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720142747805.png)

\2. v-for:

 (1). 什么是: 专门在网页中根据一个数组或对象的成员，连续生成多个结构相同，内容不同的一组html元素的特殊指令

 (2). 何时: 今后，只要连续生成一组结构相同，但是内容不同的HTML元素时，都用v-for批量生成

 (3). 如何:

<要反复生成的元素 v-for="(元素值, 下标) of 数组或对象">

 (4). 强调: vue中v-for统一了js中的for in和for of的功能。vue中的v-for既可以遍历索引数组，又可以遍历对象

 (5). 原理: 每当new Vue()扫描到v-for时

 a. 先遍历数组或对象中每个成员

 b. 每遍历一个成员:

  1). 取出当前成员的属性名和属性值，将属性值交给of前的()中第一个变量，将属性名/下标交给of前的()中第二个变量

  2). 同时，还会自动创建当前v-for所在元素的一个新副本。数组或对象包含几个成员，v-for就会反复创建几个HTML元素副本。

 c. of前的两个变量，虽然没有在new Vue()的data中的定义，但是，却可以在v-for所在元素及其子元素范围内用于绑定语法和指令！

 (6). vue2的问题: 都是由访问器属性的问题引起的。

 a. 在vue2中使用下标修改数组中的元素值，无法自动更新页面。——new Vue()不会对数字下标的元素添加访问器属性。所以，所有数字下标的元素都不受监控！

    有办法解决: 尽量用数组家的API代替下标修改数组元素

    比如: vm.arr[1]="涛涛" //错误！

应改为: vm.arr.splice(1,1,"涛涛") //替换

      //删除1位置的1个元素

    //在1位置插入一个新元素涛涛
//复习一阶段数组函数

 b. 只有开局时就有的成员才受监控，后来新加入的成员也不受监控！

   因为: new VUE()只有在首次加载对象时，才给对象中每个属性自动创建访问器属性。但是，后来强行添加的新成员，就无法获得访问器属性了！

 (7). 解决: vue3中，以上两个问题都得到了完美解决(未完待续...)

 (8). v-for的问题: 即使只修改了数组或对象中一个成员的值，v-for默认也会删除所有元素副本，重新遍历，重新创建HTML元素副本。——效率极低！

  原因: v-for生成的多个HTML元素副本，除了内容不同之外，元素本身没有任何差别，所以v-for每次只能删除所有HTML副本，再重建整个列表。

 (9). 解决: vue规定，今后，只要使用v-for都必须同时绑定一个专门的属性: :key="不重复的值"

  比如: <li  v-for="(元素值, i)  of  arr"  :key="i">

 (10). 结果: 从此，v-for反复生成的每个HTML元素上，都有一个唯一的key="值"。v-for就可以通过key属性值来鉴别每个HTML元素副本不同。修改时，只要修改某一个key的元素即可！不用重建整个列表。

(11). v-for为什么必须加​​ 3句话(重点  笔试):

  为每个元素添加唯一标识

  避免重建整个列表

  提高修改的效率

 (12). 示例: 根据数组或对象的内容反复生成多个元素

 day01剩余/8_v-for.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <h3>遍历数组中每个元素</h3>
    <ul>
      <li v-for="(元素值, i) of arr">{{i+1}} - {{元素值}}</li>
    </ul>
    <h3>遍历对象中每个属性</h3>
    <ul>
      <li v-for="(属性值, 属性名) of lilei">{{属性名}} - {{属性值}}</li>
    </ul>
  </div>
  <script>
    var vm=new Vue({
      el:"#app",
      data:{
        arr:["亮亮","楠楠","东东"],
        lilei:{
          sname:"Li Lei",
          sage:11,
          class:"初一2班"
        }
      }
    })
    //比较:
    //手工在F12 控制台中测试:
    //vm.arr[1]="小月月"，能否修改数组，能否更新界面？
    //vm.arr.splice(1,1,"小月月")，能否修改数组，能否更新界面？
    //vm.lilei.sage=12  页面跟着变
    //vm.lilei.money=100  页面不变
  </script>
</body>
</html>
运行结果
![image-20210720142922031](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720142922031.png)

 (13). v-for还会数数:

 a. 何时: 只要希望反复生成指定数量的相同结构元素副本时

 b. 如何: <元素 v-for="i of n" :key="i">
 c. 原理: v-for默认从1开始数数，数到n结束。每数一个数，就自动创建当前元素的一个副本

 d. 示例: 根据页数生成分页按钮:

 day01剩余/9_v-for_pages.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <style>
    ul{
      list-style: none;
    }
    ul>li{
      float:left;
      width:40px;
      height:40px;
      text-align:center;
      line-height:40px;
      border:1px solid #555;
      border-radius: 5px;
      margin-left:5px;
    }
    ul>li:hover{
      cursor:pointer;
      background-color:lightskyblue;
      color:#fff;
      border:0;
    }
  </style>
</head>
<body>
  <div id="app">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
  <script>
    var vm=new Vue({
      el:"#app",
      data:{
        pageCount:6 //共6页
      }
    })
  </script>
</body>
</html>
![image-20210720143033875](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720143033875.png)

\3. v-on:

 (1). 什么是: 专门为元素绑定事件的指令

 (2). 何时: 今后，只要在vue中要给元素绑定事件处理函数，都用v-on

 (3). 如何: <元素 v-on:事件名="事件处理函数(实参值,...)"

 (4). 简写:

 a. 所有v-on，都可简写@:

  <元素 @事件名="事件处理函数(实参值,...)"

 b. 如果事件处理函数不需要传实参值，则可以省略()

  <元素  @事件名="事件处理函数"

 (5). 传参: vue中事件处理函数，可以传实参值:

  <元素 @事件名="事件处理函数(实参值1, 实参值2,...)"
  methods:{
   事件处理函数(形参1, 形参2, ...){

   }
  }

 (6). 获得事件对象: vue中也可以像DOM一样获得事件对象

 a. 回顾: DOM中: 当事件发生时，浏览器总是将事件对象event，默认作为事件处理函数的第一个实参值传入函数。所以，我们只要定义一个形参变量e，等着接就可以了！

  //事件发生时

  //   浏览器自动创建event对象

  //           ↓

  元素.on事件名=function(e){ e->event }

  或

  元素.addEventListener("事件名", function(e){ e->event })

 b. 在vue中也可以这样获得事件对象e:

  <元素  @事件名="事件处理函数" //一定不要加()

  methods:{
   事件处理函数(e){ e->event }
  }

 c. 问题: 想获得事件对象，就无法传实参；传实参就不能获得事件对象

 d. 解决: 既想穿实参值，又想获得事件对象，就要借助于vue中一个关键字:$event

  1). 什么是: 专门在vue中提前获得事件对象的一个关键字。

  2). 如何:

   //当事件发生时

   //   浏览器自动创建事件对象event

   //                ↓

   <元素  @事件名="事件处理函数($event, 其它实参, ...)"

   methods:{
    事件处理函数(e, 形参,...){
     e->event //结果是一样的。
    }
   }

  3). 原理: 在事件发生时，$event关键字会提前获得事件对象event。再由vue框架代为转交给事件处理函数对应的形参变量

  4). 强调: 只要使用$event关键字获得事件对象，则参数顺序无所谓，只要形参和实参可以对应的上即可！

 (7). 示例: 点谁，谁喊哪个部位疼:

 5_@.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <style>
    img{ width:250px; }
  </style>
</head>
<body>
  <!--点谁的哪个部位，就喊谁的哪个部位疼！-->
  <div id="app">
    <img src="img/liang.jpg" @click="say($event, 'liang')">
    <img src="img/tao.jpg" @click="say($event, 'tao')">
  </div>
  <script>
    new Vue({
      el:"#app",
      methods:{
        say(e, name){
          if(e.offsetY<110){
            console.log(`${name} 头疼`);
          }else if(e.offsetY<220){
            console.log(`${name} 胸疼`)
          }else{
            console.log(`${name} 肚子疼`)
          }
        }
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210720193603982](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720193603982.png)

 6@e.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <style>
    img{ width:250px; }
  </style>
</head>
<body>
  <!--点哪个部位，就喊哪个部位疼！-->
  <div id="app">
    <img src="img/liang.jpg" @click="say">
    <img src="img/tao.jpg" @click="say">
  </div>
  <script>
    new Vue({
      el:"#app",
      methods:{
        say(e){
          if(e.offsetY<110){
            console.log(`头疼!`)
          }else if(e.offsetY<220){
            console.log(`胸疼!`)
          }else{
            console.log(`肚子疼`)
          }
        }
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210720193628198](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720193628198.png)

\4. v-html:

 (1). 什么是: 专门绑定一段HTML代码片段到页面上的特殊指令。

 (2). 何时: 今后，只要要要绑定的内容是一段包含HTML内容的代码片段时，都用用v-html

 (3). 问题: 使用{{}}绑定HTML代码片段，则{{}}很懒，不会将代码片段交给浏览器解析，而是原样显示到页面。——不能直接给人看

 (4). 原理: 其实, vue中{{}}底层相当于DOM中的textContent

 (5). 解决: vue中，可用v-html代替{{}}。因为v-html指令底层相当于DOM中的innerHTML。会先将HTML片段交给浏览器解析，然后将解析后的可以给人看的结果显示到页面

             | jd的地盘  |

 (6). 如何: <元素 v-html="变量或表达式"></元素>

 (7). 另一个差别:

 a. {{}}可以和其它写死的部分文本随意拼接。

 b. 但是，v-html中不能将写死的部分字符串和变化的变量轻易拼接。比如使用js中的模板字符串才能拼接！因为""中是js的底盘，所以必须符合js的语法规定才行。

 (8). 示例: 绑定HTML片段到页面中显示:

 8_v-html.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <h3>{{msg}}</h3>
    <h3>消息内容: {{msg}}</h3>
    <h3 v-html="msg"></h3>
    <h3 v-html="`消息内容: ${msg}`"></h3>
  </div>
  <script>
    new Vue({
      el:"#app",
      data:{
        msg:`来自<a href="#">&lt;&lt;新华社&gt;&gt;</a>的消息`
      }
    })
  </script>
</body>
</html>
运行结果
来自<a href="#">&lt;&lt;新华社&gt;&gt;</a>的消息
消息内容: 来自<a href="#">&lt;&lt;新华社&gt;&gt;</a>的消息
来自<<新华社>>的消息
消息内容: 来自<<新华社>>的消息
\5. 防止用户短暂看到{{}}

 (1). 问题: 当网速慢时，new Vue()有可能延迟加载，用户就有可能短暂看到页面上的{{}}语法

 (2). 解决: 2种:

a. v-cloak: 幕布/斗篷

  1). 什么是: 专门在new Vue()加载之前，暂时隐藏部分元素的特殊指令

  2). 何时: 今后只要希望在new Vue()加载完之前，暂时隐藏部分元素，避免用户短暂看到{{}}，都可以用v-cloak。{{}}相当于DOM中的textcontent。

  3). 如何: 2步:

  i. 先在css中用属性选择器，选择所有带有v-cloak属性的元素，使用display:none，手工隐藏这些元素

  ii. 然后，才<要暂时隐藏的元素 v-cloak>

  4). 原理:

  i. 在new Vue()加载完之前，v-cloak和css中的属性选择器[v-cloak]联合发挥作用，隐藏部分元素

  ii. 当new Vue()加载完之后，会自动查找页面中所有v-cloak的元素，自动删除所有v-cloak属性。结果，原来被v-cloak隐藏的元素，现在都显示出来了。

b. v-text:

  1). 什么是: 专门代替{{}}绑定元素内容的特殊指令

  2). 何时: 今后，只要不想让用户短暂看到{{}}，都可用v-text代替{{}}

  3). 如何:

             |                  js的地盘               |

  <要隐藏的元素 v-text="变量或表达式"></要隐藏的元素>

  4). 强调: 如果v-text的内容需要部分写死的文本和变化的内容拼接而成，则必须用模板字符串:xxx${变量}xxx

  5). 原理: v-text和{{}}一样，底层相当于DOM中的v-text。v-html底层相当于DOM中的innerHTML。

 (3). 示例: 使用v-cloak或v-text防止用户短暂看到{{}}

c.v-cloak vs v-text

v-cloak，必须手工在css中添加选择器
但是, 只要将v-cloak放在父元素上，可批量隐藏多个子元素.

v-text，无需添加css代码
但是，v-text只能作用域一个元素。如果要隐藏的元素比较多，则只能反复写多遍v-text

 9_v-cloak.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <style>
/*
属性选择器：选择所有带有v-clock属性的元素，使用display：none，手工隐藏这些元素
*/
    [v-cloak]{
      display:none
    }
  </style>
</head>
<body>
  <div id="app">
    <h3 v-cloak>Welcome {{uname}}</h3>
  </div>
  <script>
    setTimeout(function(){
      new Vue({
        el:"#app",
        data:{
          uname:"dingding"
        }
      })
    },2000);
  </script>
</body>
</html>
运行结果
Welcome dingding
 10_v-text.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <h3 v-text="`Welcome ${uname}`"></h3>
  </div>
  <script>
    setTimeout(function(){
      new Vue({
        el:"#app",
        data:{
          uname:"dingding"
        }
      })
    }, 2000);

  </script>
</body>
</html>
运行结果
Welcome dingding
\6. v-once:

 (1). 什么是: 专门控制一个元素只在首次加载时绑定一次。之后，即使变量值改变，也不会自动更新页面。

 (2). 何时: 如果发现一个元素的内容，只会在首次加载时绑定一次。之后几乎不会改变时，都用v-once标记

 (3). 如何: <元素 v-once>{{...}}</元素>

 (4). 原理: 凡是标有v-once的元素，new Vue()只在首次记载时，动态更新元素的内容。但是不会将v-once的元素加入到虚拟DOM树中。所以，将来就算变量值发生变化，也无法通知到这个元素。
 (5). 优化: 凡是标有v-once的元素，都不会加入虚拟DOM树中。所以，无形中，又减少了虚拟DOM树中的元素的个数！使虚拟DOM树遍历更快，效率更高！所以，今后，只要发现一个值只在首次页面加载时动态变化，之后几乎不变时，都应该用v-once。

 (6). 示例: 使用v-once标记元素只在首次绑定时更新一次，之后不再反复更新

 11_v-once.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <h3 v-once>上线时间: {{time}}</h3>
    <h3>当前系统时间: {{time}}</h3>
  </div>
  <script>
    var vm=new Vue({
      el:"#app",
      data:{
        time:new Date().toLocaleString()
      }
    });
    setInterval(function(){
      vm.time=new Date().toLocaleString();
    },1000);
  </script>
</body>
</html>
运行结果
![image-20210720153024796](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720153024796.png)

\7. v-pre:

 (1). 什么是: 专门阻止vue编译内容中的{{}}的特殊指令

 (2). 何时: 极少数情况下，正文中包含了不想被vue编译的{{}}时，采用v-pre保护。

 (3). 如何: <元素 v-pre>xxx{{xxx}}xx</元素>

 (4). 示例: 使用v-pre防止vue编译内容中的{{}}

 12_v-pre.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <h1 v-pre>vue框架采用{{自定义变量名}}方式标记页面中可能发生变化的位置</h1>
  </div>
  <script>
    new Vue({
      el:"#app"
    })
  </script>
</body>
</html>
运行结果
vue框架采用{{自定义变量名}}方式标记页面中可能发生变化的位置
二. 双向绑定:

\1. 问题: 当用户主动在文本框中输入内容后，如果使用:value="str"方式绑定，则用户输入的内容无法自动回到程序中的变量中保存:

\2. 原因: 其实之前所学12种指令+{{}}都是单向绑定:

 (1). 只能将程序中的变量值，自动同步到页面上显示

  上的去——M->V

 (2). 不能自动将界面中的用户主动做的修改，自动同步回程序中变量里保存

  下不来——不能V->M

\3. 解决: 今后只要希望在程序中自动获得页面中用户主动做的修改时，都要用双向绑定v-model

\4. 双向绑定:

 (1). 既能将程序中的变量自动同步到页面上显示

  上的去——M->V

 (2). 又能将页面上用户主动修改的新值自动更新回程序中的变量保存.

  下的来——V->M

\5. 如何: <表单元素 v-model="变量">

\6. 示例: 使用双向绑定实现点按钮，获得文本框中用户输入的内容:

13_v-model.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <!--VUE 3步
  1. 做界面
  1.1 唯一父元素包裹
  1.2 找可能发生改变的位置
  本例中: 文本框的内容(value属性值)会被改变，但是是由用户主动输入而改变
  1.3 找触发事件的元素
  本例中: 点按钮触发事件-->
  <div id="app">
    <input v-model="str">
    <button @click="search">百度一下</button>
  </div>
  <script>
    //2. 创建new Vue()对象, 监视id为app的区域
    var vm=new Vue({
      el:"#app",
      //3. 创建模型对象:
      //3.1 创建data对象
      //本例中: 因为界面中需要一个变量str保存文本框的内容，所以
      data:{
        str:""
      },
      //3.2 创建methods对象
      //本例中: 因为界面中需要一个事件处理函数search，所以
      methods:{
        search(){
          console.log(`搜索 ${this.str} 相关的内容...`)
        }
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210720194736311](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720194736311.png)

![image-20210720200218420](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720200218420.png)

\7. 原理: 双向绑定无非就是在单向绑定的基础上，能自动为元素添加onchange或oninput事件处理函数。并能在事件处理函数中，自动将新值更新到data中的变量中。

\8. 示例: 使用:value+@input事件模拟实现双向绑定:

14_v-model2.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <!--VUE 3步
  1. 做界面
  1.1 唯一父元素包裹
  1.2 找可能发生改变的位置
  本例中: 文本框的内容(value属性值)会被改变，但是是由用户主动输入而改变
  1.3 找触发事件的元素
  本例中: 点按钮触发事件-->
  <div id="app">
    <input :value="str" @input="doit">
    <button @click="search">百度一下</button>
  </div>
  <script>
    //2. 创建new Vue()对象, 监视id为app的区域
    var vm=new Vue({
      el:"#app",
      //3. 创建模型对象:
      //3.1 创建data对象
      //本例中: 因为界面中需要一个变量str保存文本框的内容，所以
      data:{
        str:""
      },
      //3.2 创建methods对象
      //本例中: 因为界面中需要一个事件处理函数search，所以
      methods:{
        doit(e){
          //      当前文本款的内容
          //   赋值给
          //当前vue中的
          //str变量
          this.str=e.target.value;
        },
        search(){
          console.log(`搜索 ${this.str} 相关的内容...`)
        }
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210720200248677](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720200248677.png)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml33084\wps6.jpg)

\9. 监视函数:

 (1). 什么是: 专门用于监视一个变量的变化，并在变量值发生变化时自动执行的一个函数.

 (2). 何时: 今后，只要希望一个变量的值一改变，我们就能自动执行一项操作时，都可用监视函数

 (3). 如何:

 new Vue({
  data:{
   变量名: 值
  },

  //监视

  watch:{

  变量名(){
​  //只要上面的同名变量值一发生改变，watch中的同名监视函数就会自动执行。
   }

  }

 })

\10. 事件修饰符:

 (1). 什么是: 简化版的对事件的约束

 (2). 何时: 今后想改变事件的默认行为或约束触发事件的条件时，都可以用事件修饰符

 (3). 包括:

a. 限制用户按的键盘号:

  1). DOM中:

   事件处理函数(e){
    if(e.keyCode==13){
     ... ...
    }
   }

  2). vue中: <元素 @事件名.13="事件处理函数"

b. 停止冒泡:

  1). DOM中:

   事件处理函数(e){
    e.stopPropagation();

    ... ...
   }

  2). vue中: <元素 @事件名.stop="处理函数"

c. 阻止默认行为:

  1). DOM中:

   事件处理函数(e){
    e.preventDefault()

    ... ...
   }

  2). vue中: <元素  @事件.prevent="事件处理函数">

(4). 其实多个事-修饰符可以连用

  <元素 @事件.stop.prevent="事件处理函数">

  等效于:

  事件处理函数(e){
   e.stopPropagation()
   e.preventDefault()

  }

\11. 示例: 实现按回车搜索和一边输入一边搜索:

15_v-model3.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <!--VUE 3步
  1. 做界面
  1.1 唯一父元素包裹
  1.2 找可能发生改变的位置
  本例中: 文本框的内容(value属性值)会被改变，但是是由用户主动输入而改变
  1.3 找触发事件的元素
  本例中: 点按钮触发事件-->
  <div id="app">
    <input v-model="str" @keyup.13="search">
    <button @click="search">百度一下</button>
  </div>
  <script>
    //2. 创建new Vue()对象, 监视id为app的区域
    var vm=new Vue({
      el:"#app",
      //3. 创建模型对象:
      //3.1 创建data对象
      //本例中: 因为界面中需要一个变量str保存文本框的内容，所以
      data:{
        str:""
      },
      //3.2 创建methods对象
      //本例中: 因为界面中需要一个事件处理函数search，所以
      methods:{
        search(){
          console.log(`搜索 ${this.str} 相关的内容...`)
        },
        // search2(e){
        //   if(e.keyCode==13){
        //     this.search();
        //   }
        // }
      },
      //本例中:因为希望只要用户输入的内容一改变，就立刻自动执行搜索操作。所以，应该监视data中的str变量
      watch:{
        str(){//只要str变量值一改变，就立刻执行搜索操作
          console.log(`str变量值被改变了！`);
          this.search();
        }
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210720200515696](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720200515696.png)

![image-20210720200521597](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720200521597.png)

\12. 双向绑定在不同表单元素中的原理:

 (1). 文本框<input type="text">和文本域<textarea>:

 a. 当首次加载时，v-model将程序中变量的值更新到页面上的文本框中显示

 b. 当用户主动在文本框中输入了内容时，v-model自动将用户输入的内容更新回程序中变量中保存。

 (2). 单选按钮<input type="radio">多选一时:

 <input  type="radio"  name="sex"  value="1" v-model="sex">男
 <input  type="radio"  name="sex"  value="0" v-model="sex">女

 a. 现象:

  1). 两个或多个input为一组

  2). value值是定死的，是备选的！

 b. 如何: 每个<input type="radio">备选项上都要添加一个v-model="sex"。

 c. 原理:

  1). 首次加载页面时，v-model读取程序中的变量值，用变量值自动与每个radio写死的value值做比较。哪个radio的写死的value值刚好等于变量值，则当前radio自动选中。否则如果radio的写死的value值与变量值不相等，则radio不选中。

  2). 当用户切换选中项时，v-mode只会自动将选中的一个radio身上写死的value值更新到程序中变量里保存。如果未选中的radio身上的value值是不需要放回程序中的。

 d. 示例: 获取选择的性别:

 16_v-model_radio.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    性别:
    <input type="radio"name="sex" value="1" v-model="sex">男
    <input type="radio" name="sex" value="0" v-model="sex">女
    <br/>
    <h3>您选择的性别是:{{sex}}</h3>
  </div>
  <script>
    new Vue({
      el:"#app",
      data:{
        sex:1
      }
    })
  </script>
</body>
</html>
运行结果
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml33084\wps10.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml33084\wps11.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml33084\wps12.jpg)

 (3). 下拉列表<select>:

​

​
 a. 现象:

  1). 一个<select>下包含多个<option>

  2). 每个<option>上都有一个写死的备选值value属性

 b. 如何: 只要在父元素<select>上写一个v-model="变量"即可

 c. 原理:

  1). 加载数据时: v-model会读取程序中的变量值，自动跟<select>下每个option身上写死的value值做比较。哪个option上写死的value值与变量值一致，则哪个option被选中。反之，其余value值与变量值不相等的option，就不选中

  2). 当用户主动切换select中的选中项后，v-model只会将选中的option的value值自动更新回程序中变量里保存。

 d. 示例: 选择城市，切换城市图片

 17_v-model.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <!--VUE 3步
  1. 做界面
  1.1 唯一父元素
  1.2 找可能发生变化的位置: 
  本例中: 2处发生变化
    select中选中的option由用户主动切换而改变——都用双向绑定v-model
    img的src属性随程序自动变化
    select中选中项的value值，刚好就是img的src属性需要的值，所以虽然两处变化，但是只需要一个变量src即可，保存选中的图片路径，也就是img需要的图片路径-->
  <div id="app">
    请选择城市: <select id="sel" v-model="src">
      <option value="img/bj.jpg">北京</option>
      <option value="img/sh.jpg">上海</option>
      <option value="img/hz.jpg">杭州</option>
    </select><br/>
    <br/>
    <br/>
    <img style="width:300px" :src="src">
  </div>
  <script>
    //2. 创建new Vue()对象
    new Vue({
      el:"#app",
      //3. 创建模型对象
      //本例中: 因为界面上只需要一个变量，所以data中
      data:{
        src:"img/bj.jpg"
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210720201007263](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210720201007263.png)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml33084\wps13.jpg)

总结:

\5. 总结: 绑定语法+13种指令

(1). 如果元素的内容需要随变量自动变化:  {{}}

(2). 如果元素的属性值需要随变量自动变化:  :

(3). 控制一个元素显示隐藏: v-show //使用display:none隐藏元素

(4). 控制两个元素二选一显示:  v-if  v-else //使用删除元素方式隐藏元素

(5). 控制多个元素多选一显示隐藏: v-if  v-else-if v-else

(6). 反复生成多个相同结构不同内容的元素时: v-for :key

  key：1.为每个元素添加唯一标识

      2.避免重建整个列表

      3.提高修改的效率

(7). 事件绑定: @  $event

(8). 只要绑定的内容中包含HTML片段: v-html

(9). 防止用户短暂看到{{}}: v-cloak 或  v-text

(10). 限制元素只在首次加载时绑定一次，之后不再变化: v-once

(11). 阻止vue编译内容中的{{}}: v-pre

(12). 只要想自动获得页面上用户输入或选择的新值: v-model

  (几乎只要表单元素，都用v-model)

   回车执行：.13

   阻止默认行为：preventDefault（）

   停止冒泡：e.stopPropagation();

今日对应小程序视频连接:

 小程序->在线->VUE->day01

  \3. 绑定语法 {{}} v-bind ...v-show...v-if...

 链接：<https://pan.baidu.com/s/1eBjDnjXtC4sx5DIazmNafg> 提取码：c6tc
​ 4. v-for 遍历数组 ...
​ 链接：<https://pan.baidu.com/s/1UDtCJJa9I9vSyjNMWSL-6A> 提取码：loa7

 小程序->在线->VUE->day02

 1. 事件绑定 v-on @ 事件传值 事件对象e 同时传入事件对象和自定义属性值

 链接：<https://pan.baidu.com/s/1y2_T8kEuyR31HhErBfEQWQ> 提取码：vcwm

  \2. 其他指令 绑定HTML内容v-html 防止用户短暂看到{{}} v-cloak v-text 只在首次绑定一次v-once 防止内容中{{}}被编译v-pre

  链接：<https://pan.baidu.com/s/1tyYJMCntNP4tZwvcLzdIQg> 提取码：17xs

 3. 双向绑定 v-model 绑定文本框 input text

 链接：<https://pan.baidu.com/s/1depH-H3U1BAmjt1mpPmboQ> 提取码：iy2t

  \4. 双向绑定 v-model radio sex 选择性别

 链接：<https://pan.baidu.com/s/1xvQSTUluKcjr8qy64O10Dw> 提取码：yjcj

  \5. v-model select 选择订单状态

 链接：<https://pan.baidu.com/s/1G7STNTAsGL8EnQmCsyb0ig> 提取码：q45k

作业:

\1. 复习: 小程序->在线->vue->day02

\2. 预习: 小程序->在线->vue->day03

\3. (学有余力) 作业: 双向绑定 v-model checkbox 多选 爱好

  链接：<https://pan.baidu.com/s/1R-NSTOH-3iJxSU2bF999LQ>  提取码：mxjh

\4. (学有余力) 作业: 使用v-model 和radio实现选择飞机

链接：<https://pan.baidu.com/s/1REFjiTiSiQUs-m5F6thoaA> 提取码：tf7s

\5. (学有余力) 作业: 双向绑定 v-model select 切换图片 两级select 级联选择省份和城市

链接：<https://pan.baidu.com/s/1xY8S-QpUKJg1K8JJQPJBOg> 提取码：zq38

day03

一. 双向绑定:

\1. 复选框checkbox单独使用:

 <input  type="checkbox">同意

 (1). 现象: 没有value属性值

 (2). 如何: <input  type="checkbox"  v-model="变量">

 (3). 强调: 绑定给checkbox的值也应该是bool类型的值

 (4). 原理:

 a. . 加载数据时: v-model会先取出变量值，将变量值赋值给checkbox的checked属性。如果checked属性为true，则当前checkbox选中，否则如果checked属性值为false，则当前checkbox就不选中。

 b. . 当用户切换当前checkbox的选中状态后，v-model会将当前checkbox的checked属性的新状态bool值，自动更新回程序中的变量里保存。

 (5). 示例: 点同意，启用元素; 不同意，禁用元素

 day02剩余/18_v-model_checkbox.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <!--VUE 3步
  1. 做界面
  1.1 唯一父元素
  1.2 找可能发生变化的位置: 
  本例中: 4处发生变化
    checkbox由用户主动修改其选中状态——v-model绑定
    其余三个表单元素的disabled属性随checkbox的选中状态的改变而被动发生变化——:disabled
    又因为所有元素的变化，都紧盯checkbox的选中状态。所以，只需要一个变量保存checkbox的选中状态即可！
  -->
  <div id="app">
    <br/>
    <!--不同意(agree=false)时，禁用(disabled=true)
        同意(agree=true)时，启用(disabled=false)
      让disabled属性值与agree相反即可！-->
    用户名:<input :disabled="!agree"><br/>
    <br/>
    密码:<input :disabled="!agree" type="password"><br/>
    <br/>
    <input type="checkbox" v-model="agree">同意<br/>
    <br/>
    <button :disabled="!agree">注册</button>
  </div>
  <script>
    //2. 创建new Vue()对象
    new Vue({
      el:"#app",
      //3. 创建模型对象
      //本例中: 因为界面中只需要一个变量agree保存是否容易的状态
      data:{
        agree:false //开局默认不同意
      }
    })
  </script>
</body>
</html>
运行结果
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps3.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps4.jpg)

二. 绑定样式:

\1. 绑定内联样式: 3种方式:

(1). 将元素的style属性看做一个大的字符串来绑定:

 a. <元素  :style="变量名">
  data:{
   变量名:"css属性名1: 属性值1; css属性名2:属性值2;..."
  }

 b. 结果: 运行时，vue会把变量的字符串值，直接放到元素的style属性后，作为元素的内联样式。

 c. 问题: 极其不便于只修改其中某一个css属性值——几乎不用！

(2). 使用对象语法灵活绑定每个css属性值:

     style="css属性1:属性值1;css属性2:属性值2;..."

       自动↑翻译

 a. <元素 :style="{ css属性名1:变量1, css属性名2:变量2 , ... }"

  data:{
   变量1: 属性值1,

   变量2: 属性值2
  }

 b. 优点: 极其便于修改其中某一个css属性值

 c. 缺点: 如果多个元素刚好都需要绑定同一个css属性，则属性值的变量名极容易冲突！

 d. 示例: 绑定一架飞机的位置:

 19_style.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <style>
    img{
      position:fixed;
    }
  </style>
</head>
<body>
  <div id="app">
    <!--       css属性名:变量名-->
    <img :style="{ left:left, top:top }" src="img/p3.png" >
  </div>
  <script>
    var vm=new Vue({
      el:"#app",
      data:{
        left:"200px",
        top:"100px"
      }
    });
    //在f12 console控制台:
    //vm.left="300px" 让飞机水平向右飞100px
    //vm.top="50px" 让飞机水平向上飞50px
  </script>
</body>
</html>
运行结果
![image-20210721144917527](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210721144917527.png)

![image-20210721144925913](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210721144925913.png)

(3). 将对象写在data中的绑定方式:

 a. <元素1  :style="变量1">
  <元素2  :style="变量2">
  data:{   //变量1:" css属性1:值1; css属性2:值2;..."

   变量1:{ //先将对象语法编译为字符串
    css属性1:值1,

    css属性2:值2
   },

  变量2:{
​    css属性1:值1,

    css属性2:值2
   },

  }

 b. 好处: 既便于修改任意一个元素的css属性，又避免多个元素的css属性发生冲突

 (4). 问题: 如果有些css属性是变化的，有些css属性是固定不变的，怎么办？

 (5). 解决: 固定不变的css属性，写在不带:的style里。变化的css属性，写在带:的style里。运行时，两个style是合并发挥作用的。不会发生覆盖！

 <元素 style="固定不变的css属性们" :style="可能变化的css属性们">

 (6). 示例:绑定两架飞机的位置:

 day02剩余/19_style2.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <style>

  </style>
</head>
<body>
  <div id="app">
    <img style="position:fixed" :style="img1Style" src="img/p3.png" >
    <img style="position:fixed" :style="img2Style" src="img/p5.png" >
  </div>
  <script>
    var vm=new Vue({
      el:"#app",
      data:{
        img1Style:{
          left:"200px",
          bottom:"100px",
        },
        img2Style:{
          left:"500px",
          bottom:"150px"
        }
      }
    });

   window.onkeydown=function(e){
      //希望按方向键操作
      // 第一架红色飞机移动
      //左65 上87 右68 下83
      if(e.keyCode==87){//上
        // 先取出bottom值，转为整数
        var bottom=parseInt(vm.p3Style.bottom);
        // 将bottom值+10
        bottom+=10;
        // 再将新bottom保存回变量top中
        vm.p3Style.bottom=`${bottom}px`;
      }else if(e.keyCode==83){//下
        var bottom=parseInt(vm.p3Style.bottom);
        // 将bottom值-10
        bottom-=10;
        vm.p3Style.bottom=`${bottom}px`
      }else if(e.keyCode==63){//左
        var left=parseInt(vm.p3Style.left);
        left-=10;
        vm.p3Style.bottom=`${left}px`
      }else if(e.keyCode==68){//右
        var left=parseInt(vm.p3Style.left);
        left+=10;
        vm.p3Style.bottom=`${left}px`
      }

      //第二架飞机移动
      //左37 上38 右39 下40
      if(e.keyCode==38){//上
        // 先取出bottom值，转为整数
        var bottom=parseInt(vm.p5Style.bottom);
        // 将bottom值+10
        bottom+=10;
        // 再将新bottom保存回变量top中
        vm.p5Style.bottom=`${bottom}px`;
      }else if(e.keyCode==40){//下
        var bottom=parseInt(vm.p5Style.bottom);
        // 将bottom值-10
        bottom-=10;
        vm.p5Style.bottom=`${bottom}px`
      }else if(e.keyCode==37){//左
        var left=parseInt(vm.p5Style.left);
        left-=10;
        vm.p5Style.bottom=`${left}px`
      }else if(e.keyCode==39){//右
        var left=parseInt(vm.p5Style.left);
        left+=10;
        vm.p5Style.bottom=`${left}px`
      }
    }

  </script>
</body>
</html>
运行结果
![image-20210721145102250](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210721145102250.png)

![image-20210721145113763](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210721145113763.png)

\2. 绑定class: 3种:

(1). 将class属性看做一个普通的字符串变量绑定

 a. <元素 :class="变量名"

  data:{
  变量名:" class名1 class名2  class名3 ..."
  }

 b. 缺点: 极其不便于只修改其中某一个class。

(2). 将class属性看做一个对象来绑定:

 a. <元素 :class="{ class名1: 变量1, class名2:变量2,... }"

  data:{
   变量1: true或false, //开关，true启用这个class，false就不启用这个class

   变量2: true或false
  }

 b. 优点: 便于修改某一个class

 c. 问题: 如果多个元素都绑定同一种class，但是启用或不启用的状态不同，class的变量名就极容易发生冲突

 d. 示例: 实现手机号带样式的验证:

 5_class.html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <style>
    .success {
      background-color: lightGreen;
      color: green;
      border: green 1px solid;
    }

    .fail {
      background-color: pink;
      color: red;
      border: red 1px solid;
    }
  </style>
</head>

<body>
  <!--VUE 3步
  1. 做界面
  1.1 唯一父元素
  1.2 找可能变化的位置: 
  本例中:2个元素,3处改变
    文本框中的手机号由用户主动修改——v-model
    错误提示span的内容和样式有可能改变
    span的内容改变——{{}}
    span的多个css属性同时变化，所以应该用class方式绑定——:class
  1.3 找可能触发事件的位置
  本例中: 一边输入，一边触发验证——watch-->
  <div id="app">
    手机号:<input type="text" v-model="phone">
    <!--           class名  变量名-->
    <span :class="{success:success, fail:fail}">{{msg}}</span>
  </div>
  <script>
    //2. 创建new Vue()对象
    new Vue({
      el: "#app",
      //3. 创建模型对象:
      //3.1 因为?
      data: {
        phone:"",
        success:false,//开局不应用
        fail:false,//开局不应用
        msg:""
      },
      //3.2 因为phone变量由用户主动改变，所以监视phone变量
      watch: {
        phone(){
          //先定义正则表达式：
          //1:第一位数字必须是1
          //[3-9]: 第二位数字可在3-9之间任选其一
          //\d{9}: 后九位必须都是数字
          var reg=/^1[3-9]\d{9}$/;
          //用正则验证用户输入的phone的格式
          var result=reg.test(this.phone);
          //如果验证通过：
          if(result==true){
            //启用success class
            this.success=true;
            //不启用fail class
            this.fail=false;
            //提示信息改为"手机号格式正确"
            this.msg="手机号格式正确";
          }else{//否则如果验证不通过
            //不启用success class
            this.success=false;
            //启用fail class
            this.fail=true;
            //提示信息改为"手机号格式不正确"
            this.msg="手机号格式不正确";
          }
        }
      }
    })
  </script>
</body>

</html>
运行结果

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps10.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps11.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps12.jpg)

(3). 将对象放进data中定义:

 a. <元素1 :class="变量1">
  <元素2 :class="变量2">
  data:{

   变量1:{ //vue先将对象语法翻译为class字符串，再放入HTML中class属性中

    class名1: true或false, 

    class名2:true或false

   },

   变量2:{

    class名1: true或false, 

    class名2:true或false

   },

  }

 b. 优点: 避免不同元素之间绑定同一class时互相影响

 (4). 问题: 大部分class其实是很稳定的，只有个别class需要切换。

 (5). 解决: 不变的class，应该放在不带:的class中。而变化的class，才放在带:的class中。最终编译时，不带:的class会和带:的class合并为一个class共同起作用。

 <元素  class="固定不变的class"  :class="变化的class"

 (6). 示例: 实现手机号和密码的带样式的验证:

 5_class2.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <style>
    .success{
      background-color:lightGreen;
      color:green;
      border:green 1px solid ;
    }
    .fail{
      background-color:pink;
      color:red;
      border:red 1px solid;
    }
  </style>
</head>
<body>
  <div id="app">
    手机号:<input type="text" v-model="phone">
        <span :class="phoneObj">{{phoneMsg}}</span><br>
    密码:<input type="password" v-model="pwd">
        <span :class="pwdObj">{{pwdMsg}}</span>
  </div>
  <script>
    //2. 创建new Vue()对象
    new Vue({
      el:"#app",
      data:{
        phone:"",
        phoneObj:{
          success:false,
          fail:false
        },
        phoneMsg:"",

        pwd:"",
        pwdObj:{
          success:false,
          fail:false
        },
        pwdMsg:""
      },
      watch:{
        phone(){
          var reg=/^1[3-9]\d{9}$/
          var result=reg.test(this.phone);
          if(result==true){
            this.phoneObj={
            //启用success class，不启用fail class
              success:true, fail:false
            }
            this.phoneMsg="手机号格式正确";
          }else{
            this.phoneObj={
            //不启用success class，启用fail class
              success:false, fail:true
            }
            this.phoneMsg="手机号格式不正确";
          }
        },
        pwd(){
          var reg=/^\d{6}$/
          var result=reg.test(this.pwd);
          if(result==true){
            this.pwdObj={
            //启用success class，不启用fail class
              success:true, fail:false
            }
            this.pwdMsg="密码格式正确";
          }else{
            this.pwdObj={
            //不启用success class，启用fail class
              success:false, fail:true
            }
            this.pwdMsg="密码格式不正确";
          }
        }
      }
    })
  </script>
</body>
</html>
运行结果
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps14.jpg)

三. 自定义指令:

扫描-查找-传参-获得指令

\1. 何时: 我们希望在开局时就能对HTML元素执行一些初始化操作，但是，vue中又没有提供对应功能的指令。就可以自定义指令。

  比如: 希望一个文本框在页面加载时，就自动获得焦点，但是，vue自带的指令中，没有指令可以让元素自动获得焦点。此时，就可以自定义一个获得焦点的指令。

\2. 如何: 2步:

 (1). 创建一个指令保存在Vue内存中备用

    指令

 Vue.directive("指令名", {

  //插入后: 当前带有指令的DOM元素被vue挂载到页面上之后，自动触发的回调函数。

 inserted(当前带有指令的DOM元素){

   对当前带有指令的DOM元素执行原生的DOM操作

  }

 })

 (2). 在页面上使用自定义的vue指令

 <元素  v-指令名>

\3. 强调:

 (1). 定义指令时，指令名一定不要加v-前缀

   使用指令时，必须加v-前缀

 (2). 问题: 指令名使用驼峰命名会报错！必须全小写，然后用-分割多个单词

   原因: HTML语言很蠢，只认识小写字母，不认识大写字母。

   解决: 将来如果一个名字，有可能用在HTML地盘范围内，则如果包含多个单词，必须用-分隔，不能用驼峰命名。

\4. 原理:

 (1). Vue.directive()是创建一个自定义指令对象，保存在Vue类型的内存中备用。

 (2). new Vue()扫描时，发现v-开头的自定义指令，就回去Vue内存中找同名的自定义指令。

 (3). 只要找到同名的自定义指令，就自动执行自定义指令对象中的inserted()函数，并将当前扫描到的带有自定义指令的元素对象传给inserted()的形参变量。
 (4). 在inserted()函数内，可对当前传入的带有自定义指令的DOM元素应用原生的DOM操作。

\5. 示例: 自定义指令让元素自动获得焦点

6_directive.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <!--希望在页面加载时，input文本框自动获得焦点-->
    <input id="txt" v-my-focus><button>搜索</button>
  </div>
  <script>
    //DOM中:
    //先定义自定义指令:
    Vue.directive("my-focus",{
      //当前元素被加入到页面上之后，自动执行
      inserted(当前DOM元素){
        当前DOM元素.focus();//原生函数
      }
    })

    new Vue({
      el:"#app"
    })
  </script>
</body>
</html>
运行结果
![image-20210721145924067](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210721145924067.png)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps15.jpg)

四. 计算属性:

\1. 什么是: 自己不保存属性值，而是根据其他属性的属性值，动态计算出自己的属性值。

\2. 何时: 今后，如果页面上需要一个值，但是这个值不是直接给的，需要经过复杂的计算过程才能获得时，都用计算属性。

\3. 如何: 2步:

 (1). 定义计算属性:

 new Vue({
  el:"#app",

  data:{ ... },

  methods:{ ... },

  watch:{ ... },

  computed:{
   计算属性名(){
    复杂的计算过程

    return 属性值
   }
  }
 })

 (2). 在页面上使用计算属性:

 <元素>{{计算属性名}}</元素>

\4. 强调:

 (1). 计算属性虽然称为属性，但是其本质却是一个函数。但是，函数名却是一个名词

 (2). 虽然计算属性本质是一个函数，但是在页面中使用计算属性时，不要加()！

 (3).因为{{}}里面是js的地盘，所以可以用驼峰命名，要符合js的语法规定，js语言中不能随意用-，会和计算中的-冲突

\5. 原理:

 (1). 当new Vue()扫描到一个不带()的变量时，会先去data中查找普通的属性。如果没找到，就去计算属性computed中查找。

 (2). 如果找到计算属性，就自动调用计算属性的函数，执行出计算结果，并将计算结果替换到页面中属性名位置显示。

 (3). 并且，vue会自动将首次计算属性计算出的结果，缓存起来，反复使用！避免重复计算！

 (4). 当多次使用同一计算属性时，不会重复执行计算属性的计算过程，而是直接从缓存中取值。

 (5). 当计算属性内部以来的其它变量值发生了变化时，vue会自动重新计算属性的值，并重新缓存起来反复使用。

\6. 计算属性computed和普通函数methods差别(重点  笔试):

 (1). methods中的普通函数，如果反复调用几次，就会反复执行几次。不会缓存结果。（不缓存结果，导致重复计算）

 (2). computed中的计算属性，即使反复使用多次，也只计算一次，然后将结果缓存起来反复使用。（缓存结果，避免重复计算）

\7. 如何选择:

 (1). 如果更倾向于计算出一个值显示到页面上时，首选computed计算属性

 (2). 如果更倾向于执行一个操作，而不关系结果时，首选methods普通函数

\8. 示例: 使用计算属性计算购物车总价:

7_computed.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <h3>总价:¥{{total.toFixed(2)}}</h3>
    <ul>
      <li v-for="(p,i) of cart" :key="i">
        {{p.pid}} | {{p.pname}} | ¥{{p.price.toFixed(2)}} | {{p.count}} | 小计:¥{{(p.price*p.count).toFixed(2)}}
      </li>
    </ul>
    <h3>总价:¥{{total.toFixed(2)}}</h3>
  </div>
  <script>
    new Vue({
      el:"#app",
      data:{
        cart:[
          {pid:1, pname:"华为", price:5588, count:2},
          {pid:2, pname:"苹果", price:9588, count:1},
          {pid:3, pname:"小米", price:3588, count:3}
        ]
      },
      methods:{

      },
      computed:{
        total(){
          console.log(`自动调用了一次total()`)
          //定义变量保存临时汇总中，起始为0
          var result=0;
          //遍历购物车中每个商品对象
          for(var p of this.cart){
            //每遍历一个商品对象就计算当前商品的小计，并将小计累加到临时汇总值result变量中。
            result+=p.price*p.count;
          }
          //返回最终汇总值
          return result;
        }
      }
    })
  </script>
</body>
</html>
运行结果
![image-20210721154124487](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210721154124487.png)

7.methods, watch, computed的区别？(重点  超高频笔试)

(1). methods中保存普通函数，
更倾向于执行一项操作，而不是计算一个值。
如果methods中计算一个值返回，则不会被缓存，可能造成重复计算。
要么事件绑定触发，要么被手动调用才触发

(2). watch中保存专门监视变量变化的函数，
也倾向于执行一项操作，而不是计算一个值。
但不是手动触发，而是变量变化时，自动触发

(3). computed中保存计算属性，
更倾向于计算一个新值，而不是执行一项操作
且计算的结果会被缓存，避免重复计算
主要用于在页面中像data中模型变量一样通过绑定方式自动调用，不能手动调用。且调用时，不要加()

如何选择:

(1). 监视变量变化，首选watch
(2). 计算一个新值在页面上显示，首先computed
(3). 其余methods

五. 过滤器

\1. 什么是: 专门对变量的原始值先加工再显示的一种特殊函数

\2. 为什么: 因为程序中有些数据不能直接给人看，需要先加工再给人看。

  比如: 日期/时间、性别

\3. 何时: 今后，只要发现变量的原始值不能直接给人看，需要先加工再显示时，都可以用过滤器

\4. 如何: 2步:

 (1). 先创建过滤器函数

          过滤                                      ↓

 Vue.filter("过滤器名",function(旧值){
←  return 新值
 })

 (2). 在页面中使用过滤器函数

 <元素>{{变量名 | 过滤器名 }}</元素>

        连接

    |   js地盘    |

\5. 强调: 因为过滤器名用在{{}}内，是js的地盘，所以如果过滤器名中包含多个单词，应该用驼峰命名。

\6. 示例: 使用过滤器过滤性别:

8_filter.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <!--不想显示1和0，想显示男和女-->
    <h3>性别: {{sex | sexFilter}}</h3>
  </div>
  <script>
    Vue.filter("sexFilter",function(旧值){
      return 旧值==1?"男":"女"
    });

    new Vue({
      el:"#app",
      data:{
        sex:1
      }
    })
  </script>
</body>
</html>
运行结果
性别: 男
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps20.jpg)

\7. 过滤器传参:

 (1). 定义时:

 Vue.filter("过滤器名",function(旧值, 自定义形参, ...){

  return 新值

 })

 (2). 使用时:

 <元素>{{变量名 | 过滤器名(实参值1, ...)}}</元素>

 (3). 示例: 使用过滤器显示不同的性别，可以选择不同的语言

 8_filter2.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <!--默认显示中文的男或女-->
    <h3>性别: {{sex | sexFilter }}</h3>
    <!--通过参数改为显示英文的男或女-->
    <h3>性别: {{sex | sexFilter("en")}}</h3>
    <!--通过参数改为显示中文的男或女-->
    <h3>性别: {{sex | sexFilter("cn")}}</h3>
  </div>
  <script>
    Vue.filter(
      "sexFilter",
      //           en英文, 默认或cn中文
      function(旧值,语言){
        if(语言=="en"){
          return 旧值==1?"Male":"Female"
        }else{
          return 旧值==1?"男":"女"
        }
      }
    )

    new Vue({
      el:"#app",
      data:{
        sex:1
      }
    })
  </script>
</body>
</html>
运行结果
性别: 男
性别: Male
性别: 男
\8. 过滤器可以连用:

 (1). 定义过滤器时:

 //充分考虑将来进入这个过滤器的旧值共有几种情况

 //              ↓

 Vue.filter("过滤器名",function(旧值,..){  })

 (2). 使用过滤器时:

 <元素>{{变量 | 过滤器1 | 过滤器2 | ... }}</元素>

 (3).示例: 给性别追加图标

 9_filter3.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <!--只显示图标-->
    <!--              1 或 0-->
    <h3>性别: {{sex | sexIcon}}</h3>
    <!--默认显示中文+图标-->
    <!--                          男 或 女-->
    <h3>性别: {{sex | sexFilter | sexIcon }}</h3>
    <!--通过参数改为英文+图标-->
    <!--                               Male或Female-->
    <h3>性别: {{sex | sexFilter("en") | sexIcon}}</h3>
    <!--通过参数改为中文+图标-->
    <!--                                男 或 女-->
    <h3>性别: {{sex | sexFilter("cn") | sexIcon}}</h3>
  </div>
  <script>
    Vue.filter(
      "sexFilter",
      //           en英文, 默认或cn中文
      function(旧值,语言){
        if(语言=="en"){
          return 旧值==1?"Male":"Female"
        }else{
          return 旧值==1?"男":"女"
        }
      }
    )
    //旧值共有几种情况:
    //进入sexIcon的旧值共6种情况:
    //0  1  男  女   Male  Female
    Vue.filter("sexIcon",function(旧值){
      //0或1，就直接返回图标
      if(旧值==0){
        return "♀"
      }else if(旧值==1){
        return "♂"
      }else if(旧值=="男"||旧值=="Male"){
        //无论旧值是男还是Male，都拼♂
        return 旧值+"♂"
      }else{
        //无论旧值是女还是Female，都拼♀
        return 旧值+"♀"
      }
    })

    new Vue({
      el:"#app",
      data:{
        sex:0
      }
    })
  </script>
</body>
</html>
运行结果
性别: ♀
性别: 女♀
性别: Female♀
性别: 女♀
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps23.jpg)

六. axios:

\1. 什么是:

 (1). 第三方开发的: 下载

 (2). 专门发送ajax请求: 用途

 (3). 基于Promise: 语法

 (4). 的函数库: 一组函数

\2. 何时: 今后只要在vue中发送ajax请求，一律用axios

\3. 如何: axios发送get请求和发送post请求格式不一样！

 (0). 配置服务器端接口地址的公共路径部分:

 axios.defaults.baseURL="http://服务器端基础地址部分"

 比如:

 axios.defaults.baseURL="http://xzserver.applinzi.com"

 (1). get请求:

 axios.get("服务器端接口地址剩余相对路径部分",{

  params:{ 参数名: 参数值, ... : ... , ...  }

 }).then(result=>{ //必须用箭头函数

 //其实result不直接是响应结果

  //result.data才是真正的响应结果

 })

 (2). post请求:

 axios.post(

 "服务器端接口地址剩余相对路径部分",

"参数名1=参数值1&参数名2=参数值2&..."
 ).then(result=>{

  console.log(result.data);

 })

 (3). 运行时:

 axios会自动将baseURL和get/post中的相对路径拼接成接口的完整地址再发送请求。

\4. token，一般是在登录完成之后，将用户的token通过localStorage或者cookie存在本地，然后用户每次在进入页面的时候（即在main.js中），会首先从本地存储中读取token，如果token存在说明用户已经登陆过，则更新vuex中的token状态。然后，在每次请求接口的时候，都会在请求的header中携带token，后台人员就可以根据你携带的token来判断你的登录是否过期，如果没有携带，则说明没有登录过。

七. *vue的生命周期:

\1. 问题: 在DOM和jq中，如果希望页面一加载就能自动执行一项任务，可以把代码写在DOMContentLoaded或load事件处理函数中。但是vue中，如果希望在new Vue()加载完之后，自动执行一项任务，写哪儿？

\2. 错误: 直接在new Vue()外部的后方写希望后续执行的代码。

\3. 原因: 因为new Vue()的加载过程也是异步的，且做的事儿非常多，肯定有延迟。所以，放在new Vue()之后的代码绝对无法保证在vue加载完之后才执行。所以，将来程序的主要流程和代码，都要写在new Vue()内部才行！

\4. 解决: 其实new Vue()和普通网页一样，在整个加载过程中也要经历多个阶段——生命周期

\5. vue生命周期四个阶段:

 /必经阶段/

 (1). 创建(create)阶段, 创建data对象、访问器属性（做不了DOM操作）
 (2). 挂载(mount)阶段 扫描真实DOM树，创建虚拟DOM树，并首次加载数据到页面显示

 /不必经阶段/

 (3). 更新(update)阶段 只当修改data中的变量，且影响页面显示时触发

 (4). 销毁(destroy)阶段 只当主动调用vm.$destroy()函数后触发。只删除虚拟DOM树，打断new Vue()与页面之间的联系。但是new Vue()对象还在内存中。

   可用vm.$mount("#app")将断开的new Vue()和页面重新建立虚拟DOM树，重新绑定起来。

\6. 每个阶段前后，各有一对儿生命周期钩子函数(回调函数)（重点  笔试）

 new Vue({中

 /必经阶段/

 beforeCreate(){ ... } 没data、访问器属性，没虚拟DOM

 (1). 创建(create)阶段

 created(){...} 有data、访问器属性，没虚拟DOM

 beforeMount(){ ... } 有data、访问器属性，有虚拟DOM，但是，页面内容未加载
 (2). 挂载(mount)阶段

 mounted(){ ... }有data、访问器属性，有虚拟DOM，页面内容也加载完成。——new Vue()首屏加载完成。

 /不必经阶段/

 beforeUpdate(){ ... }

 (3). 更新(update)阶段

 updated(){ ... }

 beforeDestroy(){ ... }

 (4). 销毁(destroy)阶段

 destroyed(){ ... }

\7. 示例: 触发new Vue()声明周期各个阶段:

11_first_vue.html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!--先引入vue.js-->
  <script src="js/vue.js"></script>
</head>

<body>
  <!--VUE 3步-->
  <!--1. 先做界面
  1.1 统一的要求: 界面中所有元素，都必须包裹在一个唯一的父元素下，习惯上<div id="app"></div>
  1.2 找到界面中将来可能随程序自动变化的位置，用专门的语法:{{变量名}}来标记/占位
  本例中：span的内容随程序自动变化
    <span>{{n}}</span>
  1.3 找到界面中将来可能触发事件的元素，用专门的语法: @事件名="事件处理函数名" 来标记
  本例中: 两个按钮会触发事件: 
    +按钮, @click="add"
    -按钮, @click="minus"-->
  <div id="app">
    <button @click="minus">-</button>
    <span>{{n}}</span>
    <button @click="add">+</button>
  </div>

  <script>
    //2. 创建一个new Vue()对象，来监控div所包含的区域。
    var vm=new Vue({
      el:"#app",//id选择器
      data:{
        n:0
      },
      methods:{
        add(){this.n++},
        minus(){
          if(this.n>0){
            this.n--
          }
        }
      },

      /*必经阶段*/
      beforeCreate(){
        console.log(`创建阶段前自动触发...`)
      },
      created(){ //模型对象创建后
        console.log(`创建阶段后自动触发...`)
      },
      beforeMount(){
        console.log(`挂载阶段前自动触发...`)
      },
      mounted(){
        console.log(`挂载阶段后自动触发...`)
      },

      /*不是必经阶段*/
      beforeUpdate(){
        console.log(`更新前自动触发...`)
      },
      updated(){
        console.log(`更新后自动触发...`)
      },
      beforeDestroy(){
        console.log(`销毁前自动触发...`)
      },
      destroyed(){
        console.log(`销毁后自动触发...`)
      }
    });
    //点按钮触发修改阶段:
    //触发销毁阶段:
    //vm.$destroy()
    //修复new Vue()与页面的联系
    //vm.$mount("#app")
  </script>
</body>

</html>
运行结果
![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps24.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps25.jpg)

\8. 在哪里如何发送ajax请求:

 (1). 首屏数据加载完，new Vue()会自动触发mounted()回调函数/钩子函数。所以，如果希望在首屏加载完之后，自动发送ajax请求，应该放在mounted()中。

 (2). 具体流程:

 a. 在data中先定义变量，准备接受ajax请求回来的数据

 b. 在mounted()中发送ajax请求，获得响应结果:

  1). 先输出响应结果，确定是否正确

  2). 再将响应结果赋值给data中之前准备好的变量

 c. 在界面中用绑定语法或指令，显示data中变量的值

 (3). 示例: 请求学子商城首页商品，加载到页面:

 示例: 11_lifecycle.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <script src="js/axios.min.js"></script>
</head>
<body>
  <div id="app">
    <h3>Welcome {{uname}}</h3>
    <!--显示学子商城首页6个商品的列表-->
    <ul>
      <li>
        编号 | 详细信息 | 单价
      </li>
      <li v-for="(p,i) of arr" :key="i">
        {{p.pid}} | {{p.title}} | ¥{{p.price.toFixed(2)}}
      </li>
    </ul>
  </div>
  <script>
    var vm=new Vue({
      el:"#app",
      data:{
        uname:"dingding",
        arr:[]//准备接服务器端返回的包含6个商品对象的数组
      },
      /*必经阶段*/
      beforeCreate(){
        console.log(`创建阶段前自动触发...`)
      },
      created(){ //模型对象创建后
        console.log(`创建阶段后自动触发...`)
      },
      beforeMount(){
        console.log(`挂载阶段前自动触发...`)
      },
      mounted(){
        console.log(`挂载阶段后自动触发...`);
        axios.get("http://xzserver.applinzi.com/index")
        .then(result=>{
          console.log(result.data);
          this.arr=result.data;
        })
      },
      /*不是必经阶段*/
      beforeUpdate(){
        console.log(`更新前自动触发...`)
      },
      updated(){
        console.log(`更新后自动触发...`)
      },
      beforeDestroy(){
        console.log(`销毁前自动触发...`)
      },
      destroyed(){
        console.log(`销毁后自动触发...`)
      }
    });
  </script>
</body>
</html>
运行结果
![image-20210721190947445](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210721190947445.png)

八. 组件:

复制，调用，创建

\1. 什么是: 拥有专属的HTML+JS+CSS+数据的可重用的独立的页面功能区域。

\2. 为什么: 重用

\3. 何时: 今后，只要发现网页中有一个功能，可能被多处反复使用，都应该封装为组件。

\4. 如何: 2步:

 (1). 创建一个组件

 Vue.component("组件名",{

  /*特例:*/

 template:组件的HTML片段, el:"#app",

  data(){ data:{ ... },

  return { //相当于以前的data
​    模型变量:值,

    ... ...
   }

  },

  /*每个组件内都是一个缩微的小new Vue()

   new Vue()中有什么，组件中也应该有什么*/

  methods:{ ... },

  watch:{ ... },

  computed:{ ... },

  八个生命周期钩子函数...

 })

 (2). 在页面中使用组件: 每个自定义组件其实就是一个自定义的HTML标签而已！

 <组件名></组件名>

 所以，组件名中如果包含多个英文单词，用-分隔。

\5. 原理: 每当new Vue()扫描到一个不认识的标签时，都会去内存中，vue类型中找有没有同名的组件。如果找到同名的vue组件，就会做三件事:

 (1). 用组件template中的HTML片段代替页面上<组件></组件>标签位置

 (2). 自动调用data()函数，返回一个新创建的模型对象，其中包含当前组件专属的模型变量

 (3). 自动为当前组件区域创建一个缩微版的new Vue()，负责组件这个小区域的所有事宜。

\6. 为什么组件的data必须是一个函数: (高频  笔试题)

 1.可反复调用；

2.每次调用都会创建新的对象副本；

3.避免组件间数据冲突

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml22984\wps26.jpg)

\7. 示例: 封装一个计数器组件:

12_component.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <ul>
      <li><my-counter></my-counter></li>
      <li><my-counter></my-counter></li>
      <li><my-counter></my-counter></li>
    </ul>
  </div>
  <script>
    //做一个组件和做new Vue()完全一样
    //只不过3步变2步而已，不用new Vue()了！
    Vue.component("my-counter",{
      //1. 做界面
      //1.1 ***唯一父元素***
      //1.2 查找可能发生变化的位置
      //本例中: span的内容随程序变化——{{n}}
      //1.3 触发事件的元素
      //本例中: 两个按钮都能点
        //点+, +1
        //点-, -1
      template:`<div>
        <button @click="minus">-</button>
        <span>{{n}}</span>
        <button @click="add">+</button>
      </div>`,
      //2. 创建模型对象
      //2.1 创建data
      data(){
        return { //相当于以前的data
          n:0
        }
      },
      //2.2 创建methods
      methods:{
        add(){this.n++},
        minus(){if(this.n>0) this.n--}
      }
    })

    new Vue({
      el:"#app"
    })
  </script>
</body>
</html>
运行结果
![image-20210721191030277](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210721191030277.png)

总结:

\6. 绑定样式:

(1). 需要精确修改某一个css属性，就绑定style:

 a. <元素 style="固定样式" :style="{css属性:变量名, ...}"

 data:{
  变量名:css属性值

 ... : ...

 }

 b. <元素 style="固定样式" :style="变量名"

 data:{
  变量名:{

 css属性名: 属性值,

 ... : ...

  }

 }

(2). 只要批量修改一个元素的多个css属性就绑定class

 a. <元素 class="固定class" :class="{class名:变量名, ...}"

 data:{
  变量名:true或false,

  ... : ...

 }
 b. <元素 class="固定class" :class="变量名"

 data:{
  变量名:{
 class名:true或false,

  ... : ...

  }

 }

(2). 只要批量修改一个元素的多个css属性就绑定class

<元素1  class="固定class" :class="变量名1"

 data:{
  变量名1:{
 class名:true或false,

... : ...
  }

 }

\3. 只要希望在页面加载时自动对元素执行一些初始化操作时就用自定义指令:

(1). 添加自定义指令:

Vue.directive("自定义指令名",{

 inserted(domElem){
  对domElem执行DOM操作

 }

})

(2). 使用自定义指令:

<元素 v-自定义指令名>

\4. 今后只要根据其他变量的值动态计算出一个属性值就用计算属性:

<元素>{{计算属性}}</元素>

new Vue({

 el:"#app",

 data:{...},

 methods:{...},

 computed:{
  计算属性名(){

   计算过程

   return 计算结果

  }
 }

})

\5. 希望将变量的原始值先加工后再显示给用户看时就用过滤器:

Vue.filter("过滤器名",function(oldVal, 自定义形参,...){

 return 加工后的新值

})

<元素>{{ 变量 | 过滤器(实参值, ...) | ... }}</元素>

\6. 只要在vue中发送ajax请求，就用axios

axios.defaults.baseURL="服务器端接口的公共基础地址部分"

axios.get(
 "服务器端接口地址的相对路径",

 {

  params:{ 参数名: 参数值, ... }

 }
).then(result=>{

 ... result.data...

})

或

axios.post(
 "服务器端接口地址的相对路径",

 "参数名1=参数值1&参数名2=参数值2&..."
).then(result=>{

 ... result.data...

})

强调: 在vue内使用axios，then中必须用箭头函数，保持then内this与外部this一致，都指向当前new Vue()对象

\7. vue生命周期4个阶段 8个钩子函数

beforeCreate(){ ... }

(1). 创建(create)

created(){ ... }

beforeMount(){ ... }

(2). 挂载(mount)

mounted(){ ... 经常在这里发送ajax请求 ... }

beforeUpdate(){ ... }

(3). 更新(update)

updated(){ ... }

beforeDestroy(){ ... }

(4). 销毁(destroy)

destroyed(){ ... }

补: nextTick

this.$nextTick(function(){ ... })

 注定只能在本轮生命周期结束后才自动执行的回调函数
 可防止原生DOM操作被vue挂载阶段覆盖

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。

事件循环：

同步代码执行 -> 查找异步队列，推入执行栈，执行Vue.nextTick[事件循环1] ->查找异步队列，推入执行栈，执行Vue.nextTick[事件循环2]...

总之，异步是单独的一个tick，不会和同步在一个 tick 里发生，也是 DOM 不会马上改变的原因。

应用场景：需要在视图更新之后，基于新的视图进行操作。

\8. 只要希望重用一块独立的功能区域就用组件:

(1). 定义组件

Vue.component(组件标签名,{

 template:HTML内容片段,

 data(){ return { 变量 } },

 //其余和new Vue()完全相同

})

(2). 在HTML中使用自定义组件

<组件标签名/>或双标记也行

(3). 原理: new Vue()扫描到自定义组件标签，

a.组件的template中的HTML内容代替页面中<组件标签>位置。

b. 并为这个小区域专门创建一个缩微版的vue类型对象。

 1). 调用组件的data()函数为当前组件副本创建一个专属数据对象副本。

 2). 引入组件对象中的methods等其他内容到当前组件对象副本中

今日对应小程序视频列表:
 小程序->在线->VUE->day02

 \6. v-model checkbox 点同意 启用禁用元素

 链接：<https://pan.baidu.com/s/131QfsqpSHrHA6DcZclvmOg> 提取码：46ki

 \8. 绑定样式 style 移动飞机 class 手机号验证 终极简写

 链接：<https://pan.baidu.com/s/1PrN8Os9kqh8oZuyqMIJIgQ> 提取码：qfug"

 小程序->在线->VUE->day03  

 \1. 自定义指令

 链接：<https://pan.baidu.com/s/12u9LXtuH1Mz6izsHchmBvA> 提取码：pweh

 \2. 计算属性

 链接：<https://pan.baidu.com/s/1YFOiFoIwjqyI9OTPedDVZA> 提取码：qcgx

 \3. 过滤器

 链接：<https://pan.baidu.com/s/1coCE-9BTKBKGczcG4nR4OQ> 提取码：etln

 \4. axios

 链接：<https://pan.baidu.com/s/1cWMhUBfxIbTlmh19mBdi1A> 提取码：5ta1

 \5. 生命周期

 链接：<https://pan.baidu.com/s/1NtY90rC_bAE9h0i2jpFPQA> 提取码：gl3z

 6.1 创建单个组件...

 链接：<https://pan.baidu.com/s/1ZQ5aWVfCnsv8flN_bdblXQ> 提取码：607t

作业:

\1. 复习: 小程序->在线->VUE->day03

\2. 预习: 小程序->在线->VUE->day04

\3. (学有余力): 看视频，学习手机号验证的终极简写

 链接：<https://pan.baidu.com/s/1PrN8Os9kqh8oZuyqMIJIgQ> 提取码：qfug"

\4. (必须)卸载本地旧的nodejs，官网下载最新稳定版nodejs，并安装:

 <https://nodejs.org/en/>

 点左边绿色大方块的LTS（长期稳定版）下载
\5. (必须)提前下载学子商城项目素材备用:

 链接：<https://pan.baidu.com/s/1max-0PVgXKaDGLpHCmYH5g> 提取码：rl0n

 包括:

 旧jquery项目: public.zip

 学子商城服务器端: xzserver.zip

 学子商城前端空脚手架项目： xzvue_start_with_axios.zip

\6. (必须)看小程序视频，尝试安装脚手架并生成脚手架代码：

 小程序->在线->VUE->day04  2. 使用vue/cli工具创建学子商城项目脚手架
​ 链接：<https://pan.baidu.com/s/1O4G3K8VIqcRycU2UQr9fGA> 提取码：8g8f

 如果出现问题: 可参考: 小程序->首页->VUE->day04 第一个问题，内容如下:

如果npm，安装出错，可尝试以下手段：
\1. 运行npm cache clean -f，清空nodejs缓存
再在命令行窗口中输入: npm config set  registry  <http://registry.npm.taobao.org，然后，按回车。这是设置npm>库为国内淘宝镜像。
然后，再运行 npm config get registry，看到出现淘宝镜像地址，说明上一步配置正确。
再尝试安装npm i -g @vue/cli
\2. 如果以上还不行:
先运行npm cache clean -f，清空nodejs缓存,
再切换网络，试试用手机热点，移动网络数据流量下载和安装。排除是否本地宽带有限制。
\3. 如果切换网络也不行，或无法使用手机热点，可以尝试：
先运行npm cache clean -f，清空nodejs缓存,
再运行npm install -g cnpm --registry=<http://registry.npm.taobao.org>
这是在安装npm的替代工具cnpm，并设置默认库为国内淘宝镜像
输入cnpm -v ，看到版本号说明正常
然后运行cnpm i -g @vue/cli
\4. 还可以检查系统环境变量:
右键单击我的电脑或此电脑 / 选最下边属性 / 点左侧高级系统设置 / 点右下角环境变量 / 在下方系统变量方块中双击path变量->如果弹出窗口列表中没有nodejs安装目录，就在这里点添加，输入nodejs安装目录（默认为: C:\Program Files\nodejs\）->然后点确定，点确定，点确定
\5. 如果以上都不行，就重装nodejs，再从方法1开始尝试

补: 如果报EUNSUPPORTEDPROTOCOL错误，是因为node就是版本太低，升级到最新LTS版本，再试！
如果报错: EUNSUPPORTEDPROTOCOL错误，可以把registry中的https换成http，试试。或者卸载nodejs，重新安装新的LTS版nodejs。

//如果说FEXIST错误，可进入出错提示中的路径，默认为:
C:\Users\登录操作系统的用户名\AppData\Roaming\npm\node_modules
删除@vue文件夹，再试

\6. 如果以上都不行就重装系统，再重装nodejs，再试

补: 苹果本除尝试以上办法之外，还可尝试：

# cd到项目目录

# 然后依次执行下面的命令

rm -rf node_modules
rm package-lock.json
npm cache clear --force
npm install

# 问题解决

day04

.$nextTick()

\1. 问题: 放在created或vue外部的DOM操作，有可能被new Vue()覆盖掉！

\2. 解决: 今后，只要希望写在任何位置的自定义DOM操作，都不会被vue覆盖，就可用$nextTick()

\3. 什么是: 专门在vue所有生命周期执行完之后才触发的一个回调函数。

\4. 如何:

this.$nextTick(

 ()=>{

  希望在所有生命周期结束后才自动执行的操作

 }

)

\5. 示例: 使用DOM为元素绑定单击事件，避免被vue覆盖

1_nextTick.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
</head>
<body>
  <div id="app">
    <button id="btn">click me</button>
  </div>
  <script>
    // var btn=document.getElementById("btn");
    // btn.onclick=function(){
    //   console.log("疼!")
    // }

    setTimeout(function(){
      var vm=new Vue({
        el:"#app",
        created(){//有data和访问器属性，没虚拟DOM树
          console.log("创建阶段完成!")
          this.$nextTick(()=>{
            console.log(`触发$nextTick()`)
            var btn=document.getElementById("btn");
            btn.onclick=function(){
              console.log("疼!")
            }
          })
        },
        mounted(){
          console.log("挂载阶段完成!")
          // var btn=document.getElementById("btn");
          // btn.onclick=function(){
          //   console.log("疼!")
          // }
        }
      });
    },1000)

    // var btn=document.getElementById("btn");
    // btn.onclick=function(){
    //   console.log("疼!")
    // }
  </script>
</body>
</html>
运行结果
![image-20210722192941668](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210722192941668.png)

三. 组件化开发:

\1. 问题: 前端一个页面的功能和代码量越来越多，但是操作系统禁止多人协作编写一个文件。

\2. 解决: 将一个大的页面，划分为多个组件区域，分别保存在不同的文件中，由多人协作开发。最后运行时，还能合并在一个页面中运行给人看！——组件化开发

\3. 何时: 今后所有的页面，几乎都采用组件化开发。

\4. 为什么: 2个好处

 (1). 便于多人协作开发，提高开发效率

 (2). 松耦合，一人出错，不影响全局！

\5. 如何:

 (1). 每当拿到一个页面后，先划分组件区域: 3个原则:

 a. 位置

 b. 功能

 c. 是否重用

 (2). 为每个组件创建独立的js文件，来保存组件的代码。

 (3). 回到原页面中引入并使用组件标签，将组件重新拼接回一个完整的页面。

\6. 组件分类: vue中有三大类组件:

 (1). 根组件: new Vue()

  整个页面甚至整个项目只有一个new Vue()监控全局

 (2). 全局组件: Vue.component()

  可放在任何位置，没有限制

 (3). 子组件:

 a. 什么是: 规定只能在指定父组件范围内使用的组件

 b. 如何: 3步:

  1). 只创建一个普通的js对象，保存组件的内容

    var 子组件对象名={ 组件内容 }

  2). 为父组件添加新成员: components

    父组件:{
​     ... : ...,

     components:{ 子组件对象名, ... , }
​    }

  3). 在父组件界面中: <子组件标签名></子组件标签名>

复制  调用  创建

\7. 示例: 实现待办事项列表的界面部分划分组件

13_todo2/js/todoAdd.js

var todoAdd={
  props:["tasks"],
  template:`<div>
    <input v-model="t"><button @click="add">+</button>
  </div>`,
  data(){
    return {
      t:"" //接住用户输入的新任务
    }
  },
  methods:{
    add(){
      this.tasks.push(this.t);
      //清空文本框内容
      this.t="";
    }
  }
};
13_todo2/js/todoItem.js

var todoItem={
  props:["t","i","tasks"],
  template:`<span>
    {{i+1}} - {{t}} <a href="javascript:;" @click="del">×</a>
  </span>`,
  methods:{
    del(){
      //删除tasks数组中i位置的1个元素
      this.tasks.splice(this.i,1);
    }
  }
};
13_todo2/js/todoList.js

var todoList={
  props:["tasks"],
  template:`<ul>
    <li v-for="(t,i) of tasks" :key="i">
      <todo-item :t="t" :i="i" :tasks="tasks"></todo-item>
    </li>
  </ul>`  ,
  components:{ todoItem }
};
13_todo2/js/todo.js

Vue.component("todo",{
  template:`<div>
    <h3>待办事项列表</h3>
    <todo-add :tasks="tasks"></todo-add>
    <todo-list :tasks="tasks"></todo-list>
  </div>`,
  data(){
    return {
      tasks:["吃饭","睡觉","打亮亮"]
    }
  },
  components:{
    todoAdd, todoList
  }
})
13_todo2/index.html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <!--顺序:子组件必须在其父组件之前引入-->
  <script src="js/todoAdd.js"></script>
  <script src="js/todoItem.js"></script>
  <script src="js/todoList.js"></script>
  <script src="js/todo.js"></script>
</head>

<body>
  <div id="app">
    <todo></todo>
    <!-- <todo-item></todo-item>
        报错: 找不到todo-item -->
  </div>
  <script>
    new Vue({
      el: "#app"
    })
  </script>
</body>

</html>
运行结果
![image-20210722194126638](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210722194126638.png)

![image-20210722194133554](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210722194133554.png)

四. SPA(Single Page Application)

    单 页面 应用

\1. 什么是: 整个应用程序只有一个唯一完整的HTML页面。其它所谓的页面，其实都是组件片段而已。所谓的切换页面，只是切换一个HTML中显示不同的组件片段而已。

\2. 为什么:

![image-20210722194221609](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210722194221609.png)

\3. 何时: 今后几乎所有的项目都是单页面应用

\4. 缺点: 默认，单页面应用要在首次加载时，将所有需要的页面组件都下载到客户端本地，而不管用户是不是想看。所以，首屏加载速度极慢

\5. 解决: (未完待续...)

\6. 如何:

(1). 先创建唯一完整的HTML页面

 要求: 是一个支持vue基本结构的空页面

   <script src="js/vue.js">
​

​
(2). 再创建所有"页面"组件文件:

 a. 将来项目中，有几个"页面"，就要创建几个页面组件文件

 b. 按惯例，所有页面组件都要集中放在一个名为views的文件夹中.

 c. 每个页面组件其实都是一个子组件。

 d. 在唯一完整的HTML页面顶部引入页面组件

 e. 创建404页面组件，也要在唯一完整的HTML页面顶部引入。还要加入到路由字典中最后一项:

   { path:"*", component:NotFound }

(3). 创建路由器对象:

 a. 在唯一完整的HTML页面顶部引入vue-router.js（官方）

 b. 创建路由器对象:

  1). 按惯例，路由器对象应该保存在router/index.js文件中。

  2). 先创建路由字典

  var routes=[

   {path:"/相对路径", component:页面组件对象名},

   ...
  ]

  3). 再创建路由器对象

  var router=new VueRouter({ routes })

 c. 先引入唯一完整的HTML页面中:

 d. 必须将router对象加入到new Vue()中，router对象才有权修改页面中的内容。

  new Vue({

   el:"#app",

  router

  })

 e. 在唯一完整的HTML页面中<div id="app">内，添加<router-view></router-view>标签，用于为将来的页面组件占位。

 f. 结果: 路由器对象三大功能

  1). 监视地址栏变化

  2). 根据路由字典，查找当前路径对应的页面组件是谁

  3). 将找到的页面组件替换到<router-view>的位置

(4). 创建除页面以外的其它全局组件或子组件: (页头)

 a. 所有不足以成为一个页面的组件片段都要集中创建在components文件夹中

 b. 所有的组件，暂时都创建为子组件，且都要在唯一完整的HTML页面中引入

 c. 如果是全局组件，则只要在new Vue()之前，使用Vue.component()将子组件对象转为全局组件即可。

  Vue.component("组件标签名", 组件对象名);

 d. 2种情况:

  1). 如果所有页面都需要显示页头，则只要在<router-view>上方添加<页头组件>标签即可

  2). 如果有的页面有页头，有的页面不需要页头，就应该只在那些需要页头的组件中添加<页头组件>。不需要页头的组件，就不要加组件标签。

\7. 示例: 实现单页面应用:

14_SPA/index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <script src="views/Index.js"></script>
  <script src="views/Details.js"></script>
  <script src="views/NotFound.js"></script>
  <script src="js/vue-router.js"></script>
  <script src="router/index.js"></script>
  <script src="components/MyHeader.js"></script>
</head>
<body>
  <div id="app">
    <!--让所有页面都有页头-->
    <my-header></my-header>
    <router-view></router-view>
  </div>
  <script>
    //将普通子组件MyHeader转为全局组件
    Vue.component("my-header",MyHeader);

    new Vue({
      el:"#app",
      router
    })
  </script>
</body>
</html>
运行结果：

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml18760\wps1.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml18760\wps2.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml18760\wps3.jpg)

14_SPA/views/Index.js

var Index={
  template:`<div>
    <h3 style="color:blue">这里是首页</h3>
  </div>`
}
14_SPA/views/Details.js

var Details={
  template:`<div>
    <h3 style="color:green">这里是详情页</h3>
  </div>`
}
14_SPA/views/NotFound.js

var NotFound={
  template:`<div>
    <h3 style="color:red">404:你迷路了</h3>
  </div>`
}
14_SPA/router/index.js

/*创建我们自己的路由器对象:2大步*/
//1. 先定义一个路由字典数组，保存所有相对路径与对应的页面组件之间的对应关系。
//  路由们
var routes=[
  //    相对路径         页面组件对象名
  {path:"/", component:Index},
  {path:"/details", component:Details},
  {path:"*", component:NotFound}
];
//2. 再创建一个路由器对象，引入路由字典数组，形成一个整体
var router=new VueRouter({ routes });
//        创建一个路由器对象
//                     引入字典数组
14_SPA/components/MyHeader.js

var MyHeader={
  template:`<div>
    <h3 style="color:orange">这里是页头</h3>
    <hr>
  </div>`
}
![image-20210722194426242](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210722194426242.png)

总结:

\7. vue生命周期4个阶段 8个钩子函数

beforeCreate(){ ... }

(1). 创建(create)

created(){ ... }

beforeMount(){ ... }

(2). 挂载(mount)

mounted(){ ... 经常在这里发送ajax请求 ... }

beforeUpdate(){ ... }

(3). 更新(update)

updated(){ ... }

beforeDestroy(){ ... }

(4). 销毁(destroy)

destroyed(){ ... }

补: this.$nextTick(function(){ ... })

 注定只能在本轮生命周期结束后才自动执行的回调函数
 可防止原生DOM操作被vue挂载阶段覆盖

\8. 只要希望重用一块独立的功能区域就用组件:

(1). 定义组件

Vue.component(组件标签名,{

 template:HTML内容片段,

 data(){ return { 变量 } },

 //其余和new Vue()完全相同

})

(2). 在HTML中使用自定义组件

<组件标签名/>或双标记也行

(3). 原理: new Vue()扫描到自定义组件标签，

a.组件的template中的HTML内容代替页面中<组件标签>位置。

b. 并为这个小区域专门创建一个缩微版的vue类型对象。

 1). 调用组件的data()函数为当前组件副本创建一个专属数据对象副本。

 2). 引入组件对象中的methods等其他内容到当前组件对象副本中

\9. 组件化开发:
(1). 步骤:
a. 拿到页面先划分功能区域

 1). 从上到下，按功能不同划分区域

 2). 按是否重用划分

b. 为每个组件创建独立的.js文件，其中包含一个组件对象及其内容

c. 将所有组件引入唯一完整的html页面中，并在<div id="app"></div>中添加父组件标签。
(2). 运行时:

a. new Vue()扫描<div id="app">，发现父组件标签，创建并替换父组件

b. 父组件扫描自己内部的template内容，创建并替换子组件

(3). 三种组件:

a. 根组件: new Vue()

b. 全局组件: Vue.component(...)

c. 子组件: 3步

 1). var 子组件对象名={

    内容必须符合组件的要求

   }

 子组件对象名必须是驼峰命名

 2). 父组件对象中:{

  ... ...

  components: { 子组件对象名, ... ,... }

  }

 子组件对象名必须是驼峰命名

 3). 父组件template中用<子组件标签名/>引入子组件内容

   components会将子组件对象名的驼峰命名自动翻译为-分隔

  所以, 使用子组件标签时，要用-分隔多个单词

(4). 组件间传参: 父给子

a. 父组件给:

<子组件 :自定义属性名="父组件变量">

b. 子组件取:

props:["自定义属性名"]

结果: 在子组件内，props中的"自定义属性名"与子组件自己data中的变量用法完全相同！
\10. SPA

(1). 3步:

a. 先创建唯一完整的HTML页面

 1). 包含vue基本的页面结构

​
  
new Vue({el:"#app"})
​
 2). 引入所有必要的文件和组件

 vue-router.js, 其它页面或组件文件, router.js路由器对象所在文件

 3). <div id="app">中用<router-view/>为今后页面组件预留空位

b. 再为每个页面组件创建独立的文件。每个页面组件其实都是一个子组件

c. 创建router.js文件，创建路由器对象

 1). 创建路由字典对象:

 var routes=[

  {path:"/", component:首页组件对象名},

  {path:"/相对路径" , component: 其它页面组件对象名},

  {path:"*", component: 404页面组件对象 }

 ]

 2). 创建路由器对象，并将路由字典对象转入路由器对象中
 var router=new VueRouter({ routes })

 3). 将router对象加入到new Vue()中

 回到唯一完整的HTML页面中: new Vue({ el:"#app", router })

今日对应小程序视频:

 小程序->在线->VUE->day03

 \5. 生命周期

 链接：<https://pan.baidu.com/s/1NtY90rC_bAE9h0i2jpFPQA> 提取码：gl3z

 6.1 创建单个组件...

 链接：<https://pan.baidu.com/s/1ZQ5aWVfCnsv8flN_bdblXQ> 提取码：607t

 6.2 Vue组件化开发 todo ...

 链接：<https://pan.baidu.com/s/1loynOE6toa6kvrSR3DbhCg> 提取码：ydd6

 小程序->在线->VUE->day04

 \1. SPA单页面应用 all in one...

 链接：<https://pan.baidu.com/s/17O2mFuZ06fe6VnTntnp1Uw> 提取码：ldfs

作业:

\1. 复习今日问题清单: 小程序->在线->VUE->day04、day05

\2. (学有余力) 扩展: 组件间传参 todo 父给子 子给父 兄弟间 ref $refs链接：<https://pan.baidu.com/s/1LU7BSR2K8irji31yTgl5KA> 提取码：vd66"

\3. (必须)卸载本地旧的nodejs，官网下载最新稳定版nodejs，并安装:

 <https://nodejs.org/en/>

 点左边绿色大方块的LTS（长期稳定版）下载
\4. (必须)提前下载学子商城项目素材备用:

 链接：<https://pan.baidu.com/s/1max-0PVgXKaDGLpHCmYH5g> 提取码：rl0n

 包括:

 旧jquery项目: public.zip

 学子商城服务器端: xzserver.zip

 学子商城前端空脚手架项目： xzvue_start_with_axios.zip

\5. (必须)看小程序视频，尝试安装脚手架并生成脚手架代码：

 小程序->在线->VUE->day04  2. 使用vue/cli工具创建学子商城项目脚手架
​ 链接：<https://pan.baidu.com/s/1O4G3K8VIqcRycU2UQr9fGA> 提取码：8g8f

 如果出现问题: 可参考: 小程序->首页->VUE->day04 第一个问题，内容如下:

如果npm，安装出错，可尝试以下手段：
\1. 运行npm cache clean -f，清空nodejs缓存
再在命令行窗口中输入: npm config set  registry  <http://registry.npm.taobao.org，然后，按回车。这是设置npm>库为国内淘宝镜像。
然后，再运行 npm config get registry，看到出现淘宝镜像地址，说明上一步配置正确。
再尝试安装npm i -g @vue/cli
\2. 如果以上还不行:
先运行npm cache clean -f，清空nodejs缓存,
再切换网络，试试用手机热点，移动网络数据流量下载和安装。排除是否本地宽带有限制。
\3. 如果切换网络也不行，或无法使用手机热点，可以尝试：
先运行npm cache clean -f，清空nodejs缓存,
再运行npm install -g cnpm --registry=<http://registry.npm.taobao.org>
这是在安装npm的替代工具cnpm，并设置默认库为国内淘宝镜像
输入cnpm -v ，看到版本号说明正常
然后运行cnpm i -g @vue/cli
\4. 还可以检查系统环境变量:
右键单击我的电脑或此电脑 / 选最下边属性 / 点左侧高级系统设置 / 点右下角环境变量 / 在下方系统变量方块中双击path变量->如果弹出窗口列表中没有nodejs安装目录，就在这里点添加，输入nodejs安装目录（默认为: C:\Program Files\nodejs\）->然后点确定，点确定，点确定
\5. 如果以上都不行，就重装nodejs，再从方法1开始尝试

补: 如果报EUNSUPPORTEDPROTOCOL错误，是因为node就是版本太低，升级到最新LTS版本，再试！
如果报错: EUNSUPPORTEDPROTOCOL错误，可以把registry中的https换成http，试试。或者卸载nodejs，重新安装新的LTS版nodejs。

//如果说FEXIST错误，可进入出错提示中的路径，默认为:
C:\Users\登录操作系统的用户名\AppData\Roaming\npm\node_modules
删除@vue文件夹，再试

\6. 如果以上都不行就重装系统，再重装nodejs，再试

补: 苹果本除尝试以上办法之外，还可尝试：

# cd到项目目录

# 然后依次执行下面的命令

rm -rf node_modules
rm package-lock.json
npm cache clear --force
npm install

# 问题解决

day05

一. SPA

\1. 实现单页面应用: 4步

(1). 创建唯一完整的HTML页面
(2). 创建所有页面组件
(3). 创建路由器对象
(4). 创建除页面以外的其它全局组件或子组件: (页头)

 a. 所有不足以成为一个页面的组件片段都要集中创建在components文件夹中

 b. 所有的组件，暂时都创建为子组件，且都要在唯一完整的HTML页面中引入

 c. 如果是全局组件，则只要在new Vue()之前，使用Vue.component()将子组件对象转为全局组件即可。

  Vue.component("组件标签名", 组件对象名);

 d. 2种情况:

  1). 如果所有页面都需要显示页头，则只要在<router-view>上方添加<页头组件>标签即可

  2). 如果有的页面有页头，有的页面不需要页头，就应该只在那些需要页头的组件中添加<页头组件>。不需要页头的组件，就不要加组件标签。

\2. 示例: 实现单页面应用:

14_SPA/index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/vue.js"></script>
  <script src="views/Index.js"></script>
  <script src="views/Details.js"></script>
  <script src="views/NotFound.js"></script>
  <script src="js/vue-router.js"></script>
  <script src="router/index.js"></script>
  <script src="components/MyHeader.js"></script>
</head>
<body>
  <div id="app">
    <!--让所有页面都有页头-->
    <my-header></my-header>
    <router-view></router-view>
  </div>
  <script>
    //将普通子组件MyHeader转为全局组件
    Vue.component("my-header",MyHeader);

    new Vue({
      el:"#app",
      router
    })
  </script>
</body>
</html>
运行结果：

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml2004\wps4.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml2004\wps5.jpg)

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml2004\wps6.jpg)

14_SPA/views/Index.js

var Index={
  template:`<div>
    <h3 style="color:blue">这里是首页</h3>
  </div>`
}
14_SPA/views/Details.js

var Details={
  template:`<div>
    <h3 style="color:green">这里是详情页</h3>
  </div>`
}
14_SPA/views/NotFound.js

var NotFound={
  template:`<div>
    <h3 style="color:red">404:你迷路了</h3>
  </div>`
}
14_SPA/router/index.js

/*创建我们自己的路由器对象:2大步*/
//1. 先定义一个路由字典数组，保存所有相对路径与对应的页面组件之间的对应关系。
//  路由们
var routes=[
  //    相对路径         页面组件对象名
  {path:"/", component:Index},
  {path:"/details", component:Details},
  {path:"*", component:NotFound}
];
//2. 再创建一个路由器对象，引入路由字典数组，形成一个整体
var router=new VueRouter({ routes });
//        创建一个路由器对象
//                     引入字典数组
14_SPA/components/MyHeader.js

var MyHeader={
  template:`<div>
    <h3 style="color:orange">这里是页头</h3>
    <hr>
  </div>`
}
![image-20210724084638511](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210724084638511.png)

\2. 路由跳转:

(1). 在HTML中写死的跳转连接:

 a. 不要用a元素

 b. <router-link to="/相对路径">文本</router-link>

         和路由字典中path一致

 c. 原理: 其实<router-link to="/xxx"</router-link>
   还是会被翻译为<a href="xxx"></a>

   但是，翻译过程中，vue会对a做一些自动的加工.

(2). 在程序中自动跳转:

  this.$router.push("/相对路径")

    咱们创建的路由器对象router

(3). 路由跳转传参: 3步

 a. 配置路由字典中的路由字典项:

  { path:"/相对路径/:变量名", component: 页面组件对象名, props:true}

  其中:

  1). /:变量名 为上个页面传到下个页面的值起一个变量名，便于重复使用。

  2). props:true  让地址栏中的上个页面传来的值，自动掉进下一个页面的props中称为一个外来属性/变量。

 b. 跳转时如何携带参数值到下个页面:

   <router-link  to="/相对路径/参数值">

   或

   this.$router.push("/相对路径/参数值")

  强调: 路由传参，在路由字典项的path中定义变量时必须加:。但是，在跳转时传参时既不用加:，也不用加变量名。只写参数值就够了！

 c. 下个页面: props:[ "变量名" ]

   在下个页面中，就可以像使用自己data中的变量一样使用props中外部传来的变量了。

 d. 强调: 一旦配置了路由参数，则进入该页面时就必须携带参数。如果不带参数值，是不让进的！

 e. 示例: 实现路由跳转传参:

 14_SPA/router/index.js

/*创建我们自己的路由器对象:2大步*/
//1. 先定义一个路由字典数组，保存所有相对路径与对应的页面组件之间的对应关系。
//  路由们
var routes=[
  //    相对路径         页面组件对象名
  {path:"/", component:Index},
  {path:"/details/:lid", component:Details,props:true},
  {path:"*", component:NotFound}
];
//2. 再创建一个路由器对象，引入路由字典数组，形成一个整体
var router=new VueRouter({ routes });
//        创建一个路由器对象
//                     引入字典数组
14_SPA/views/Index.js

var Index={
  template:`<div>
    <h3 style="color:blue">这里是首页</h3>
    <button @click="goto(5)">查看5号商品的详情</button>
    <button @click="goto(10)">查看10号商品的详情</button>
    <button @click="goto(15)">查看15号商品的详情</button>
  </div>`,
  methods:{
    goto(lid){                  // 变量
      this.$router.push(`/details/${lid}`)
    }
  }
}
 14_SPA/views/Details.js

var Details={
  props:["lid"],
  template:`<div>
    <h3 style="color:green">这里是详情页</h3>
    <h3>显示{{lid}}号商品的详细信息...</h3>
  </div>`
}
![image-20210724111914357](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210724111914357.png)

二. 脚手架:

\1. 什么是: 一套已经包含核心功能和标准文件夹结构的半成品项目。

\2. 为什么: 标准化！极其便于协作，降低学习成本。

\3. 何时: 今后所有项目，所有新技术，都是在脚手架基础上开发的.

\4. 如何: 2大步:

 (1). 安装可以反复生成脚手架的工具: （老母鸡）

  a. 设置淘宝镜像——下载快
 npm config set registry <https://registry.npm.taobao.org>
 b. 安装可生成脚手架代码的命令行工具

 npm  i  -g  @vue/cli

 当看到: + @vue/cli@版本号 说明安装成功

 (2). 用工具反复为每个项目创建专门的脚手架结构:

 a. 决定把项目文件夹保存在哪个位置

 b. 再在整个文件夹位置，运行: vue create 自定义项目名

  1). ? Please pick a preset:

 Default ([Vue 2] babel, eslint)

 Default (Vue 3) ([Vue 3] babel, eslint)
 > Manually select features

  2). ? Check the features needed for your project:

  ( ) Choose Vue version //按空格切换选中/不选中

  (*) Babel  //ES6翻译为ES5

  ( ) TypeScript  //下周一学VUE3再选

  ( ) Progressive Web App (PWA) Support

  (*) Router //VueRouter，SPA应用的核心

  (*) Vuex //下周一讲

  (*) CSS Pre-processors //支持Scss

  ( ) Linter / Formatter //不要选，代码质量检查工具，要求过于严格

  ( ) Unit Testing

 >( ) E2E Testing

  3). ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) N

  其实vue的路由有两种模式:

  i. hash(#)模式: <http://域名:端口号/#/>相对路径

  ii. history模式: <http://域名:端口号/>相对路径

    需要专业的服务器端工程师配合——必须配置服务器端的首页重定向机制。

  4). ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)

 > Sass/SCSS (with dart-sass)

  Sass/SCSS (with node-sass)

  Less

  Stylus

  5). ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)

   In dedicated config files

  > In package.json

  6). ? Save this as a preset for future projects? (y/N) N

  7). 等待。。。

  看到: Successfully created project xzvue. 说明安装成功

\5. 使用vscode打开并运行脚手架项目:

 (1). 右键单击package.json文件，选择"在集成终端中打开"

 (2). 在终端窗口中输入: npm run serve

   看到: App running at:

      - Local:  http://localhost:8080/

 (3). 按住Ctrl，点local:右侧的连接，自动打开浏览器

  问题: 如果无法自动打开，可重装chrome浏览器并配置操作系统的默认浏览器为chrome。

\6. 脚手架文件夹结构: 还是SPA 4部分

(1). 唯一完整的HTML页面: 一分为三

 a. HTML页面基础结构放在public/index.html中

 b. <div id="#app"><router-view>放在src/App.vue中

 c. new Vue({ router, ... })放在src/main.js中

 d. 运行时:

  1). src/main.js中引入src/App.vue中的HTML内容

   import App from "./App.vue"

  2). src/main.js中，将new Vue()和App.vue中的内容建立联系

  3). 运行时，唯一完整的html页面头部，自动添加引用:

      <script src="app.js">
        (包含new Vue和App.vue中所有内容)

  4). 最终main.js、App.vue以及public下的index.html还是合并在一起运行的。

(2). 页面组件: src/views/

 a. 问题: 保存在js文件中，只能写js，不能写HTML和css。如果写HTML，必须写在字符串中，既没有提示，又没有验证。

 b. 解决: 脚手架规定: 今后所有组件都必须创建为.vue文件。

 c. 什么是: 专门包含一个组件的HTML+CSS+JS的新文件类型

 d. 一个.vue文件中标配包含3大部分:

  1). <template>专门编写组件的HTML内容</template>
  i. 问题: 默认vscode不认识.vue文件，所以依然没有提示和颜色

  ii. 解决: 安装vscode vetur插件

  2). <script>专门包含组件对象</script>

  i. 强调: 因为vue脚手架采用的是组件化开发，所以，一个组件js对象，要想抛出，并让别人能够引用，必须使用:

   export default { 组件内容 }

    抛出 默认组件

  ii. 但是，export default {}内的组件内容与前四天所学完全相同！

  3). <style>专门保存这个组件专属的css的区域

 e. 修改.vue文件内容:

  强调: 热编译: 无需停止或重启项目，只要一修改，立刻自动重新编译，重新运行，自动在界面上显示新内容。

(3). 路由器对象: src/router/index.js

 a. 相同点: 还是包含2大部分: 路由字典routes和路由器对象router。

 b. 问题: 在我们自定义的SPA应用中，明明是路由器中的路由字典routes中要用页面组件对象。但是，偏偏要先引入html文件，再在routes中使用。极其不直观，容易造成误会！

 c. 解决: 模块化开发: 每个文件都是一个独立的模块对象。模块之间可以直接引用！无需经过任何第三方中介。——直观，便于维护

 d. 如何: 2大步:

1). 抛出: 2种:

  i. 标准: 一个组件或对象包含js代码，则必须使用

   export default { 组件或对象的内容 }

  ii. 简化: 如果一个组件没有js代码，只有HTML和css代码，则一个.vue文件默认就是一个可被别人引用模块对象。

2). 引入: import 自定义对象别名 from "相对路径"

 e.结果: 在import所在的模块内，可以像使用自己的对象一样实用引入的模块。

 (4). 全局组件和子组件片段: src/components

 a. 所有组件都要创建为.vue文件，标准都要包含3部分。只要有js都要export default{}抛出.

 b. 全局组件: 2步:

  1). 先在src/components/先创建一个普通的子组件.vue
  2). 再在main.js中new Vue()之前引入子组件.vue，并将子组件对象转为全局组件

   import 子组件对象别名 from "./components/子组件.vue"

   ... ...

   Vue.component("标签名",子组件对象别名)

\7. 示例: 封装页头组件:

 (1). src/components/新建MyHeader.vue

 (2). 剪切src/App.vue中

 a. <div id="nav">...</div>粘贴到MyHeader.vue中<template>中

 b. <style>内#nav{...}及其子内容粘贴到MyHeader.vue中<style lang="scss">中

 (3). src/main.js中:

  import MyHeader from "./components/MyHeader.vue"

  ...

  Vue.component("my-header",MyHeader)

 (4). src/App.vue中<router-view>上方:<my-header></my-header>

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml2004\wps7.jpg)

三. 避免组件间样式冲突:

\1. 问题: 明明写在关于页面的h1样式，却覆盖了首页中的h1样式。

\2. 原因: 其实，虽然我们编写组件时，是在各个.vue文件中分别编写的。但是最终运行时，脚手架会将所有css内容编译到网页的内部样式表中集中保存。结果，不同组件中的选择器，如果碰巧相同，则一定会互相影响。

\3. 解决: 2个:

 (1). 偷懒的，不好的: scoped

 a. <style scoped>

    //范围内的

 b. 规定这个<style>内的所有选择器，只在当前组件内有效！

 c. 原理:

  1). 为css中的选择器自动添加随机名称的属性选择器:

  2). 为当前组件中的所有HTML元素自动添加与属性选择器同名的自定义属性。

  3). 不同组件的scoped为每个组件添加的随机的属性选择器名各不相同！即使多个选择器碰面，也不会发生冲突。

  4). 结果: 只有当前组件内部的HTML元素带有的自定义属性名才能匹配当前组件自己的css中的属性选择器。

 d. 问题:

  1). 效率低: 为所有元素自动添加自定义属性

  2). 只对<style>内的css选择器有效，对于外部引入的css选择器无效！依然会发生冲突

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml2004\wps8.jpg)

(2). 主动添加class名:

 a. 如何: 2步:

  1). 今后，每创建一个组件，都有一个唯一父元素。我们就要给唯一的父元素上加一个与当前组件名相同的class名

  <template>
   <唯一父元素 class="当前组件名">
    ... ...

  2). 只要当前组件内的css选择器，一律用这个唯一父class名开头。

    <style>     .当前组件名 其它选择器{
    ... ...

   }

 b. 优点: 万能

![img](file:///C:\Users\ASUS\AppData\Local\Temp\ksohtml2004\wps9.jpg)

四. 学子商城项目:

\1. 准备:

 (1). 图片: 因为图片不是源代码，不需要我们修改就可直接用，所以，图片应该放在public文件夹下。

   直接复制旧项目中img文件夹粘贴到xzvue/public文件夹中

 (2). 公共的bootstrap和jquery: (不是我们自己写的)

 a. 复制旧项目中css文件夹中bootstrap.min.css粘贴到xzvue/public/css文件夹中

 b. 复制旧项目中js文件夹中jquery-3.4.1.min.js和bootstrap.min.js文件，粘贴到xzvue/public/js文件夹中

 c 在唯一完整的HTML页面xzvue/public/index.html头部引入jquery和bootstrap

\2. 迁移学子商城首页的静态页面HTML+CSS:

 (1). 删除脚手架自带首页:

 a. 删除xzvue/src/views/Home.vue文件

 b. 删除xzvue/src/router/index.js
  1). 开头的import Home...

  2). routes中的第一个{ path:"/" ,...}删除

 (2). 创建新的首页组件:

 a. 在xzvue/src/views/新建Index.vue文件

 b. 在xzvue/src/router/index.js中:

  1). import Index from "../views/Index"

  2). 在routes内: { path:"/", component: Index }

 (3). 迁移旧项目中的HTML+css到新项目中首页.vue中:

 a. 复制旧项目中: index.html中<main id="main"...>...</main>及其子内容

   粘贴到xzvue/src/views/Index.vue中<template>内

 b.  复制旧项目中: css/index.css中所有css代码

   粘贴到xzvue/src/views/Index.vue中<style scoped>内

总结:

(2). 页头等全局组件：

a. 创建独立的文件保存页头组件的内容

b. 使用Vue.component("my-header",{ ... })将页头创建为全局组件

c. 在唯一完整的HTML页面中引入页头组件文件

d. 使用页头组件标签<my-header/>: 2种:

 1). 如果所有页面都有统一的页头:

 就放在唯一完整的html页面中<router-view>外部上方

 2). 如果有的页面有页头，有的页面没有页头:

 就只放在需要页头的组件中的template中

(3). 路由跳转: 2种:

a. html中: <router-link to="/相对路径">文本<router-link>

b. js中: this.$router.push("/相对路径")

(4). 路由传参:

a. 修改路由字典:

{path:"/相对路径/:自定义参数名", component:页面组件对象, props:true}

b. 跳转时:

<router-link to="/相对路径/参数值"

或

this.$router.push("/相对路径/参数值")

c. 下一个页面接:

 1). props:[ '自定义参数名' ]

 2). 可将"自定义参数名"用作绑定或程序中都行

\11. 脚手架文件夹结构:

(1). 唯一完整的HTML页面: 一分为三:

a. public文件夹

 1). 图片img文件夹放在public文件夹下

 2). 第三方css的压缩版和第三方js的压缩版都放在public文件夹下

 3). 唯一完整的HTML文件index.html中，head中引入第三方的css和js

b. src/App.vue

 1). <template>下包含<div id="app">公共的页头组件和<router-view>

 2). <style>下包含所有网页都要用到的公共css样式，比如css重置代码

c. src/main.js

 1). import引入App.vue，router，axios，以及其他全局组件

 2). 将全局组件对象转为真正的全局组件: Vue.component( "组件标签名", 全局组件对象 )

 3). 包含new Vue()对象

 4). 配置axios并放入原型对象中:

 axios.defaults.baseURL="服务器端基础路径"

  Vue.prototype.axios=axios;

(2). 为每个页面创建.vue组件文件，都放在src/views文件夹下。每个.vue文件中:

a. <template>标签内，包含这个页面的HTML内容

b. <script>export default{ ... }</script>中包含组件对象的js内容。

c. <style>标签内包含仅这个页面组件内才使用的css

d. <template>中的HTML内容以及<script>export default{...}</script>中的js内容，和前四天将的是完全一样的写法，绑定，指令，函数，生命周期，axios请求等都一样。前四天怎么用，这里就怎么用。

(3). 路由字典和路由器对象，在src/router/index.js文件中

a. 仅import首页组件对象，不要过早引入其它页面组件

b. 路由字典中首页组件: { path:"/", component:首页组件对象}

c. 其余页面组件都做成懒加载:

 {

  path: '/相对路径',

  component: () => import(/*webpackChunkName: "组件名"*/ '../views/其它页面组件.vue')

 }

(4). 全局组件都放在src/components文件夹下，每个全局组件.vue文件中。但是，全局组件必须在main.js引入，并用Vue.component()转化为真正的全局组件，才能在其它组件的HTML中使用。

(5). 运行时: 路由器router对象监视浏览器地址栏路径变化，并查找对应的页面组件内容，先代替App.vue中的<router-view>，然后main.js再将包含要加载的页面内容的App.vue组件内容，替换到唯一完整的index.html中空<div id="app">位置。

\12. 避免组件间样式冲突:

(1)<style scoped>
(2)<template>
  <组件父元素 class="组件名">
 </template>

 <style>
  .组件名>子元素选择器{ ... }
 </style>
今日对应小程序视频:

 小程序->在线->VUE->day04

 \1. SPA单页面应用 all in one...

 链接：<https://pan.baidu.com/s/17O2mFuZ06fe6VnTntnp1Uw> 提取码：ldfs

 \2. 使用vue/cli工具创建学子商城项目脚手架

 链接：<https://pan.baidu.com/s/1O4G3K8VIqcRycU2UQr9fGA> 提取码：8g8f

 \3. vue脚手架文件夹结构(含组件间样式冲突)

 链接：<https://pan.baidu.com/s/12ZP8KJVSICVo6ODdJ87O4w> 提取码：9d0m

 \4. 扩展: 避免组件间样式冲突

 链接：<https://pan.baidu.com/s/1Oo46vUX4e4PktB7JpC4ajg> 提取码：6277

作业:

\1. 复习今日问题清单: 小程序->在线->VUE->day04、day05

\2. (必须)下载0. 插槽和Vuex空脚手架素材_xzvue2

 小程序->在线->VUE->day07

 链接：<https://pan.baidu.com/s/1WeqRxD0JT6aVabMuTNrdzg> 提取码：0po2

\3. 看小程序视频使用vue脚手架完成学子商城首页、详情页

 先下载: 小程序->在线->VUE->day04 0. VUE版学子商城 起始空项目 中

  旧js项目: public.zip

  vue脚手架起始项目: xzvue_start_with_axios.zip

 观看并跟着做: 小程序->在线->VUE->day05  

  1. 学子商城首页

  2. 学子商城详情页 。。。（不带放大镜）

  3. 学子商城详情页 。。。（放大镜效果）

 家里环境xampp和nodejs能用，且第一阶段学的好的同学:  

  可下载0. VUE版学子商城 起始空项目 中xzserver.zip，用自己的服务器端代码

 家里环境xampp和nodejs不能用，或者第一阶段学的不好的同学：

  无需下载xzserver.zip

  视频中所有axios请求的服务器端接口地址，都改为我的新浪云服务器地址，就不需要你再运行服务器端了。也不需要你了解任何服务器端知识了:

  <http://localhost:5050/index> 改为  <http://xzserver.applinzi.com/index>

<http://localhost:5050/details>  改为 <http://xzserver.applinzi.com/details?lid=xxx>

day06

一. 学子商城项目:

\1. 准备:

 (1). 图片: 因为图片不是源代码，不需要我们修改就可直接用，所以，图片应该放在public文件夹下。

   直接复制旧项目中img文件夹粘贴到xzvue/public文件夹中

 (2). 公共的bootstrap和jquery: (不是我们自己写的)

 a. 复制旧项目中css文件夹中bootstrap.min.css粘贴到xzvue/public/css文件夹中

 b. 复制旧项目中js文件夹中jquery-3.4.1.min.js和bootstrap.min.js文件，粘贴到xzvue/public/js文件夹中

 c 在唯一完整的HTML页面xzvue/public/index.html头部引入jquery和bootstrap

\2. 迁移学子商城首页的静态页面HTML+CSS:

 (1). 删除脚手架自带首页:

 a. 删除xzvue/src/views/Home.vue文件

 b. 删除xzvue/src/router/index.js
  1). 开头的import Home...

  2). routes中的第一个{ path:"/" ,...}删除

 (2). 创建新的首页组件:

 a. 在xzvue/src/views/新建Index.vue文件

 b. 在xzvue/src/router/index.js中:

  1). import Index from "../views/Index"

  2). 在routes内: { path:"/", component: Index }

 (3). 迁移旧项目中的HTML+css到新项目中首页.vue中:

 a. 复制旧项目中: index.html中<main id="main"...>...</main>及其子内容

   粘贴到xzvue/src/views/Index.vue中<template>内

 b.  复制旧项目中: css/index.css中所有css代码

   粘贴到xzvue/src/views/Index.vue中<style scoped>内

\3. 迁移页头

 (1). 复制旧项目中index.html中<header ...></header>粘贴到xzvue/src/components/MyHeader.vue中<template>中

 (2). 复制旧项目中header.html中所有内容粘贴到xzvue/src/components/MyHeader.vue中<template>中<header>的内部

 (3). 复制旧项目中css/header.css中所有代码粘贴到xzvue/src/components/MyHeader.vue中<style scoped>内

\4. 迁移详情页

 (1). 删除旧About.vue

 a. 删除xzvue中src/views/About.vue

 b. 注释src/router/index.js中路由字典routes中第二个路由字典项:{ path:"/about", ... }

 (2). 新建Details.vue

 a. 在xzvue/src/views/新建Details.vue文件

 b. 在xzvue/src/router/index.js中：

  import Details from "../views/Details"

  var routes=[

   { ... },

   { path:"/details", component: Details }

  ]

 (3). 迁移旧详情页到xzvue:

 a. 复制旧项目中product_details.html中<main ...>...</main>及其所以内容粘贴到xzvue/src/views/Details.vue中<template>中

 b.  复制旧项目中css/product_details.css中所有内容粘贴到xzvue/src/views/Details.vue中<style scoped>内

\5. 发送axios请求

 (1). 问题: vue脚手架默认不带axios

 (2). 解决: 右键单击package.json，选择在集成终端中打开。然后在终端中输入: npm  i  -save  axios

 (3). 问题: 所有的页面组件或其他子组件中都随时有可能使用axios发送请求获取数据。

 (4). 解决: 因为所有组件(根组件、全局组件、子组件)都是new Vue()类型的子对象。所以，可以将配置好的axios对象保存到Vue类型的原型对象中。结果，所有组件中都可像使用自己的属性一样使用Vue原型对象中axios对象了

 (5). 如何:

 a. main.js中:

  import axios from "axios"

  axios.defaults.baseURL="公共基础地址"

  Vue.prototype.axios=axios

 b. 其它组件中: this.axios.get()或this.axios.post()

\6. 动态加载首页商品:

 (1). 在Index.vue中<script>中组件对象内添加:

  data(){
 return {
   p1:{}, //准备接第一个商品

   p2:{}, //准备接第二个商品

   p3:{}, //准备接第三个商品

   others:[] //准备接剩余的后三个商品
  }
  }

 (2). 在mounted()内的axios的.then()中，将响应结果数组中每个商品对象赋值给data中的对应变量;

  this.p1=result.data[0];

  this.p2=result.data[1];

  this.p3=result.data[2];

  this.others=result.data.slice(-3)//从倒数第三个，一直取到最后

  简写:

  [this.p1, this.p2,this.p3,...this.others]=result.data;

 (3). 去<template>中绑定每商品:

 (4). 问题: 明明正常显示，但是还是报错:

  不能读取 undefined 的xxx属性

 a. 原因: 首次加载时，p1对象中没有值，是undefined。undefined加谁都算错！

 b. 解决: 2个办法:

  (1). 为对象的属性提前加上属性值:

  (2). 在页面中绑定语法或指令中使用三目屏蔽undefined的情况。

 (5). 绑定第二个(56~66行)、第三个商品(71~78行)

 (6). 绑定首页后三个商品:

 a. 删除:92行~111行两个div

 b. 只绑定82~91行一个div，所以在82行加v-for

\7. 从首页跳转到详情页，并发送请求查询一个商品的信息信息:

 (1). 改造首页中按钮的旧路径为新路径:

  :to=/details/${p1.href.split["="](1)}

 (2). 配置路由字典，允许/details路径携带参数

  {  

   path:"/details/:lid",

   component: ()=>import(...),

   props:true

  }

 (3). 在详情页使用props接住上个页面传来的数据，并发送axios请求，获得数据

\8. 动态绑定详情页的内容:

 (0). 先从结果对象中取出每个对象或数组，分别保存:

 a. data(){ product:{}, specs:[], pics:[] }

 b. 在axios的.then()中为data中每个变量赋值

   this.product=result.data.product;

   this.specs=result.data.specs;

 (1). 绑定右上角商品基本信息:

 (2). 绑定右侧规格列表: 57行

  v-for 遍历 specs数组中每隔规格对象

 a. a解开注释，换成router-link，href换成to，

 b. 添加v-for，并:to="/details/${sp.lid}"，内容绑定sp.spec

 c. 为当前router-link绑定class active。哪个规格对象的lid商品编号和地址栏中的商品编号一致，才用后active class。

 (3). 问题: 点不同的规格按钮，只有地址栏里的数字变，网页内容不重新加载！

 (4). 原因: 因为每个规格按钮都是跳回/details页面，只不过携带的值不同而已。所以，vue就认为没必要重新加载详情页组件。如果vue觉得没必要重新加载组件，则不会触发mount阶段，自然不会触发mounted中的axios。而我们的程序只在mounted里写了一个axios请求。如果mounted不执行，则axios请求也不会重新发送，当然得不到新商品信息。

 (5). 解决: 紧紧监视地址栏中的商品编号(props:["lid"])

   只要lid变量值一变，就立刻重新发送请求！

第一步在（axios）mounted里面发请求，第二步在data中创建变量

第三步在axios.then中把数据保存在data中，第四步数据绑定

用watch监控和地址栏有关系的变量

二. 懒加载:

\1. 单页面应用的致命问题: 首屏加载极慢

\2. 原因:

脚手架默认把所有组件集中打包为一个巨大的app.js文件。在首屏一次性全部下载。

\3. 解决:

懒加载: 用户想看什么就只下载什么，用户暂时不想看的，就没必要下载！

\4. 2种方式:

(1). 默认: 异步延迟加载:

 a. 什么是: 优先下载并显示首页内容。其它页面组件采用底层异步下载的方式，在不影响主屏下载速度的情况下，异步下载。

 b. 优点: 既加快了首屏加载的速度，又能享受单页面应用带来的好处。

 c. 小缺点: 偷跑流量。

 d. 如何: 2步:

  1). 千万不要在router/index.js开头过早的引入除首页之外的其它页面组件。

   因为凡是你用Import引入的东西，vue都认为是头等重要的！都会打包在app.js中，在首屏下载。

  2). 改造路由字典项:

  {
   path:"/相对路径",

   component: ()=>import(

    /* webpackChunkName: "自定义js文件名" */

   "../views/页面组件.vue"

   )
  }

(3). 彻底懒加载:

 a. 什么是: 如果用户不看哪些页面，就一点儿也不下载。完全等到用户想看某个页面时，才临时下载。

 b. 如何: 2步:

  1). 也要实现异步懒加载的两步:

  i. 不要提前引入

  ii. component变成匿名箭头函数

  2). 配置脚手架，去掉prefetch

  i. 在脚手架根目录，创建vue.config.js

  ii. 在vue.config.js中添加以下固定代码:

  module.exports={

   chainWebpack:config=>{

    config.plugins.delete("prefetch")

    //删除index.html开头的带有prefetch属性的link，不要异步下载暂时不需要的页面组件文件,节约流量

//结果:首屏加载时，完全不会下载懒加载的页面!而是当用户确实想跳转到懒加载的页面时，才临时下载懒加载页面的js 文件。——节约流量!

   },

  }

  iii. 强调: 必须重启npm run serve

 c. 优点: 节约流量

 d. 小缺点: 首次切换页面时需要临时下载页面组件，可能会慢。

const routes = [
  // 首页不需要懒加载
  {
    path:"/",
    component:Index
  },
  {
    path:'/details',
    component:() => import(
      //以下注释专门定义将来单独把这个页面打包成一个js文件的文件名（details）
      //webpackChunkName:"details"
      // 临时引入需要的页面组件，单独打包当前页面组件的内容，并将其命名为details.js
      '../views/Details.vue'),
      // 结果:
      // 1). npm run build 时，会将每个懒加载的页面单独打包为一个js 文件，文件名就是
      // webpackchunkname配置的文件名。
      // 2).当访问首页时，仅加载并显示首页组件的内容。其余懒加载的组件内容，在后台异步悄悄
      // 下载，不影响首屏加载速度!
      // 3)．问题:虽然分开打包，但是不需要看的页面依然在后台悄悄下载!浪费流量!↓
      props:true
  }
]

今日对应小程序视频:

  小程序->在线->VUE->day05

  -1. 懒加载

  链接：<https://pan.baidu.com/s/1_2Yv8x4PdSwA2DNxARrHRw> 提取码：8nlc

  1. 学子商城首页

  链接：<https://pan.baidu.com/s/17VLgg5BttbFVFo2OdZxa5w> 提取码：2p9z
   2. 学子商城详情页 静态HTML+CSS，懒加载

  链接：<https://pan.baidu.com/s/1_ert6HiaR-DiSquGaIJUuA> 提取码：wj8m

  3. 学子商城详情页 xzvue details（不带放大镜）

  <https://pan.baidu.com/s/1dM_w4TOmi5B4N2AdbQ3new>

小程序->在线->VUE->day06
  3.  Vue脚手架中使用http-proxy跨域

  链接：<https://pan.baidu.com/s/1pdc0k9Trdw28KLUxYOmI1Q> 提取码：ssih

作业:

\1. 复习: 小程序->在线->VUE->day05、day06

\2. 看小程序视频使用vue脚手架完成学子商城首页、详情页

 观看并跟着做: 小程序->在线->VUE->day05  

 \3. 学子商城详情页 。。。（放大镜效果）

 <https://pan.baidu.com/s/1ElTcisKQfeFnVGdvNgjSBQ>

 \5. 学子商城 商品列表页面 vue 分页

 <https://pan.baidu.com/s/16v-Vn6LIAuppLTs2jMfvdQ>

 家里环境xampp和nodejs能用，且第一阶段学的好的同学:  

 可下载0. VUE版学子商城 起始空项目 中xzserver.zip，用自己的服务器端代码

 家里环境xampp和nodejs不能用，或者第一阶段学的不好的同学：

 无需下载xzserver.zip

 视频中所有axios请求的服务器端接口地址，都改为我的新浪云服务器地址，就不需要你再运行服务器端了。也不需要你了解任何服务器端知识了:

 <http://localhost:5050/index> 改为  <http://xzserver.applinzi.com/index>

 <http://localhost:5050/details>  改为 <http://xzserver.applinzi.com/details?lid=xxx>

public下的代码不会进行打包

preload和prefetch（高频 笔试）

Webpack打包时自动配置的！
Preload既提前下载，又要立刻显示
——通常首页使用
Prefetch仅异步延迟下载，但不着急显示！
——除首页之外的其余页面组件都采用

彻底懒加载在vue.config.js中配置

webpack 构建流程

Webpack 的运行流程是一个串行的过程,从启动到结束会依次执行以下流程 :

初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。

开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。

确定入口：根据配置中的 entry 找出所有的入口文件。

编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。

完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。

输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。

输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。

在以上过程中,Webpack 会在特定的时间点广播出特定的事件,插件在监听到感兴趣的事件后会执行特定的逻辑,并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

复习解构

day07

正课:

\1. http-proxy跨域:

\2. 插槽

\3. vuex

\4. TS

一. http-proxy跨域:

\1. 旧的跨域方式:无论CORS还是JSONP，都要求助于后端才能跨域。

\2. 解决: 只要使用vue脚手架开发时，都可以用http-proxy跨域

\3. 优点: 纯前端跨域方式。

\4. 什么是: 请其他程序代替ajax发送请求。

\5. 如何:

 (1). 在脚手架根目录的vue.config.js文件中，再配置一个代理程序:

 module.exports={

  ... ...

  devServer: {

   proxy: {

    '/': {

     target: http://服务器端接口地址统一前缀部分,

     changeOrigin: true,

    }

   }

  }
 (2). main.js中，不用配置axios.defautls.baseURL了

 (3). 重启npm run serve

\6. 笔试时，被问到"你的项目是用什么跨域的？":http代理跨域。

\7. 总结: 跨域共有几种方式: 3种: cors, jsonp, http代理

二. 插槽: (PPT)

1、什么是插槽

程序中: 多个提示框，布局风格一致，只不过内部的具体内容不同

解决：程序中: 可以造一个带样式和插槽的外壳，然后定义每个对话框时，都把这个外壳套上，再在外壳内填入每个对话框不同的内容

什么是插槽

• 插槽是组件中一块可动态改变HTML片段内容的区域

• 今后，只要发现多个组件，拥有相同的结构框架，只是内部HTML片段有不同时，都应该使用插槽

2、如何使用插槽

• 1. 先定义一个组件包含统一的外壳结构

![image-20210727201611229](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210727201611229.png)

![image-20210727201630407](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210727201630407.png)

– 新建一个外壳组件，将任意一个现有对话框代码整体复制到组件中

– 删除组件中将来可能发生变化的大片HTML片段位置，并用

<slot></slot>标签占位

– 组件中个别可能变化的文本，改为绑定语法

– 并在props成员中添加外来属性

\2. 再在每次使用组件时，动态改变组件中插槽区域的HTML片段内容

– 2.1 在原对话框中引入带插槽的外壳组件

import Waike from "./Waike"

export default {

… …,

components:{ Waike },

… …

}

– 2.2 在最终组件上先添加外壳组件标签

![image-20210727201748485](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210727201748485.png)

– 2.3 再在外壳组件内添加<template>，其中添加对话框独有内容

<template>
<waike title="登录" :close="close">
<template>
<div class="content">
<div class="row">
<span class="label">用户名</span>: <input/>
</div>
<div class="row">
<span class="label">密码</span>:<input type="password">
</div>
</div>
<div class="btns">
<button @click="login">登录</button>
<button @click="close">取消</button>
</div>
</template>
<template>
<waike title="登录" :close="close">
</waike>
</template>
练习: 使用插槽实现三个不同弹出框（续1）

• 案例中的close函数:

– 首页Home.vue中三个对话框，由一个变量值控制显示隐藏

– 问题: 对话框是由首页按钮打开，但是，关闭却是点对话框组件

内部的关闭按钮和取消按钮控制的。如何让对话框组件内，也能

用到首页的close函数来控制首页的对话框显示隐藏呢？

– 解决: 父(首页)给子(对话框组件)传值，只不过传的是函数close

– 问题: 但是关闭按钮×是在对话框组件内的外壳子组件内的

– 解决: 继续父(对话框组件)给子(外壳组件)传值

![image-20210727202438405](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210727202438405.png)

3、具名插槽

• 如果一个带插槽的外壳组件，有多个部位将来可能会改变

• 可以为每个部位指定插槽名

<div class="pop">
<div class="dialog">
<div class="title">
<span class="txt">{{title}}</span>
<span class="close" @click="close">×</span>
</div>
<div class="content">
<slot name="content"></slot>
</div>
<div class="btns">
<slot name="btns"></slot>
</div>
</div>
</div>
![image-20210727202607647](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210727202607647.png)

• 将来使用插槽时，可以将不同的HTML片段，插入不同的

插槽中

• 如果一个带插槽的外壳组件包含多个具名插槽，则使用时，

每个插槽对应的HTML片段，都要放在一个

– <template v-slot:插槽名>中

• v-slot:插槽名，可简写为<template #插槽名>

<template>
<Waike title="登录" :close="close">
  <template #content>
        <div class="row">
          <span class="label">用户名</span>:
          <input v-model="uname">
        </div>
        <div class="row">
          <span class="label">密码</span>:
          <input type="password" v-model="upwd">
        </div>
  </template>
      <template #btns>
        <button @click="login">登录</button>
        <button @click="close">取消</button>
  </template>
</Waike>
</template>
三. vuex:(PPT)

坑

数组中不能以数字下标修改数组内容

对象新添加的内容不受监控

1、什么是Vuex

如果组件结构很复杂，又要跨组件传值，使用父子传参，步骤会很繁琐

找一个公共的位置存放多个组件都需要公用的数据

什么是Vuex

• Vuex是专门帮助所有组件维护共享数据的公共区域

• 今后，只要一个数据，有可能被多个组件使用，都可以通过Vuex来管理

2、如何使用Vuex

• 1. 创建脚手架时，选择vuex选项，一起安装

• 结果: 在脚手架项目src文件夹下:

![image-20210727203025664](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210727203025664.png)

![image-20210727203057534](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210727203057534.png)

• 2. 在store/index.js中state内添加要多个组件共享的变量

– state相当于商店货架上的商品，谁来商店都可访问

• 3. 在页面上，显示Vuex中的内容:

函数：

mapState：专门获取Vuex中State中变量的函数(只能看，不能改)

mapMutation：指定要传送mutations中哪个函数，并解析出函数（修改state里的变量）

mutations:保存专门修改变量的方法

mapAction：专门提取Actions中方法的mapActions函数（只能传递一个参数）返回的是函数，放在methods中

actions：保存专门发送ajax请求，在修改变量的方法

必须在action里面发送请求

– 3.1 在需要使用vuex中变量的组件中引入Vuex提供的专门获取Vuex中State中变量的函数mapState

– 3.2 在需要使用vuex中变量的组件中，computed内部调用mapState函数，指定要传送State中的哪个变量名到当前组件。

mapState传送门会将我们指定名称的State中的变量传送到当前组件中，并自动生成同名计算属性

//Vuex中

state: {

uid:-1,

uname:"dingding"

},

//需要使用vuex中变量的组件中

computed:{

...mapState(["uname"])

uname(){ return … }

},

mapState——传送门

– import { mapState } from "vuex"

强调: Vuex中的变量只能读取不能直接修改，所以要放在computed中当做计算属性使用

问题

• 为什么前边要加…？（...代表的是解构）

• 因为组件有可能同时用到vuex state中的多个变量，

• 所以mapState()函数默认总是将多个变量和值放在对象结

构中传来。

• 而我们在当前组件中使用变量时，却需要每个变量单独使

用。

• 所以，我们总是需要将mapState()返回的包含变量的对象

解构后，才能得到每个单独的变量，分别单独使用

强调: Vuex中的变量只能读取不能直接修改，所以要放在computed中当做计算属性使用

– 3.3 在当前组件中就可以绑定mapState帮我们生成的计算属性了

– 当前组件中: Welcome {{uname}}

问题

• 如何修改vuex state中的变量值？

• vuex state中的变量值不允许其他组件直接修改

• 必须借助专门定义的函数才能修改

• 就像超市中货架上的商品，只有专门的理货员才有资格管理和维护。

\4. 在Vuex中Mutations中定义专门修改State中变量的函数。

– Mutations中的函数就像超市的理货员。有权利整理货架上的商品

mutations: {

setUid(state,uid){

state.uid=uid;

},

setUname(state,uname){

state.uname=uname;

}

},

state: {

uid:-1,

uname:"dingding"

• 5. 在页面上登录组件中使用setUname修改用户名，并切

换页面中用户登录状态，同时显示新用户名

– 5.1 在登录组件引入Vuex提供的专门传送Vuex中所有Mutations

方法的函数mapMutations

– import { mapMutations } from "vuex"

//Vuex中

state: {

uid:-1,

uname:"dingding"

},

mutations: {

… …,

setUname(state,uname){

state.uname=uname;

}

– 5.2 在登录组件methods中，调用mapMutation()函数，指定要

传送mutations中哪个函数，并解构出函数。

强调: mutations中的函数也是普通函数，所以要放在methods中当做普通函数调用执行

– 5.3 在登录组件methods中，登录方法login()中。

– setUname(this.form.uname)

问题

• 形参state指什么？

• 形参state在函数调用时，就指vuex中的state子对象

——语法规定，记住！

• 因为vuex中变量都是保存在state中，所以，mutations中

的函数中，想修改state中的变量，必须用”state.变量名”

问题

• 登录是否成功，得服务器端说了算！

• 所以，需要发送请求，去服务器端验证，才能获得真实的

验证结果，并获得服务器端返回的真实用户名和用户编号。

• 然后，将服务器端返回的真实用户名和用户编号修改到

vuex中的变量里，供其他组件共同使用

• 6. Vuex中定义发送ajax请求的方法，专门发送的登录请求

– 6.1 在Vuex中，顶部提前引入axios:

import axios from 'axios'

– 6.2 在Vuex中，Actions内添加vlogin函数

– 6.3 vlogin函数内发送axios请求，并接受返回值。

– 6.4 如果返回登录成功的结果，则：调用当前vuex大环境中的

setUid()和setUname()两个函数。将服务器返回的uid和uname

两个值设置到State中的uid和uname两个属性上。

– 6.5 如果返回登录失败的结果，则: 直接调用alert，提示登录失

败。

mutations: {
setUid(state,uid){
state.uid=uid;
},
setUname(state,uname){
state.uname=uname; } }

state: {
uid:-1,
uname:"dingding"
},

actions: {
vlogin(context,form){
axios.post(
"/users/signin", `uname=${form.uname}&upwd=${form.upwd}`
).then(result=>{
if(result.data.ok==1){
context.commit( "setUid",
result.data.uid);
context.commit( "setUname",
result.data.uname);
}else{
throw Error(result.data.msg);
• 7. Vuex中定义发送ajax请求的方法，专门发送的登录请求

– 7.1 在登录组件中，引入Vuex提供的专门提取Actions中方法的

mapActions函数

– import { mapActions } from "vuex"

– 7.2 在登录组件中，methods中，调用mapActions函数，解构

出发送ajax请求的函数vlogin

– 7.3 在登录组件中login方法中调用vlogin方法，如果登录成功，

就把success改为true，让登录框切换显示登录成功

• 登录组件: – 点击登录时
methods:{
...mapActions([“vlogin”],
vlogin(){},
login(){
this.vlogin(this.form)
.then(result=>{
this.success=true;
})
} }
mutations: {
setUid(state,uid){
state.uid=uid;
},
setUname(state,uname){
state.uname=uname; } }
state: {
uid:-1,
uname:"dingding"
},
actions: {
vlogin(context,form){
axios.post(
"/users/signin", `uname=${form.uname}&upwd=${form.upwd}`
).then(result=>{ … …
})
}
}
![image-20210727205407376](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210727205407376.png)

四. TS:(PPT)

1、TypeScript介绍

• TypeScript 是 JavaScript 的一个超集

• 支持 ECMAScript 6 标准。

• TypeScript 由微软开发。

• 设计目的是开发大型应用。

编译

• TypeScript 不能被浏览器直接执行

• 但是TypeScript可以编译成纯 JavaScript

• 编译出来的 JavaScript 可以运行在任何浏览器或nodejs上。

//TS

let a:number=10;

console.log(a);

TS**编译器**

类型检查

低级错误检查

//JS

"use strict";

var a = 10;

console.log(a)

新特性

• 类型检查

• 编译时错误检查

• 接口

• 访问修饰符

• 模块

2、安装和配置

安装

• 全局安装TypeScript语言的编译器:

npm i -g typescript

• 用vscode打开项目文件夹，右键选择在终端中打开，在终

端中输入:

tsc -init

• 结果: 在当前项目文件夹中生成了tsconfig.json文件，其中

保存的是将ts编译为js时所需的配置，比如:

– target: “ES5” , 在将ts文件编译为js文件时，编译为ES5的版本，

兼容更多浏览器

– module: "commenJS“, 将来ts文件中模块化开发所采用的标准。

– strict: true , 将ts文件编译js文件时，自动启用严格模式

说明: tsc是ts语言的编译器, c是compile的意思，编译。如果报tsc.ps1错误

• Windows开始菜单搜powershell，右键单击，选择用管理

员身份运行

• 在弹出的powershell窗口中输入:

set-ExecutionsPolicy RemoveSigned

回车

输入a

回车

• 或者：（下一页）

变量

• 问题: 旧JS是弱类型语言，一个变量先后可以保存不同类

型的数据——不可靠

• 解决: 今后，只要在ts中声明变量，都必须用”:数据类型”来

规定。

• 标准语法：var或const或let 变量名:数据类型=初始值

• 结果: 将来这个变量只能保存规定的数据类型

• 比如:

– var a=10 要换成 let a:number=10; //正确

– a=“hello” 报错：不能将类型“string”分配给类型“number”

数据类型:

• a. 基本类型: boolean, number, string

• b. 数组: 2种写法，结果一样

– 1). let 数组名: 数据类型[]=[值1, 值2, ...]

– 2). let 数组名: Array<数据类型>=[值1, 值2,...]

• c. any: 可以匹配任何数据类型

3、变量声明

4、函数

• 既没有参数，又没有返回值的函数，与普通js写法一样

• 如果函数有返回值:

– function 函数名():**返回值的类型**{

...

return 返回值

}

• 如果函数有参数:

– function 函数名(形参1:**数据类型, 形参2:数据类型**, ... ){

...

}

实际返回值的类型与声明函数时:后的返回值类型要一致。

强调: ts中严格规定，一个函数定义了几个形参，

就必须传几个实参！也数据类型也要对应！函数（续1）

• 如果既有形参，又有返回值？

– function 函数名(形参1:**数据类型, 形参2:数据类型, ... ):返回值类型**

{

...

return 返回值

}函数（续2）

• 可选参数:

– ?表示参数可以没有。将来如果没有传入这个参数值，则参数值默认

为undefined

– function 函数名(形参1:数据类型, 形参2?:数据类型) {

... ...

}

• 默认值:

– function 函数名(形参1:数据类型, 形参2:数据类型=默认值) {

... ...

}

坑: 虽然可选参数的实参值将来也可能不提供，但是，因为

有默认值保证，一定有值可用！所以，不能加?函数（续3）

• 实参值个数不确定:

– function 函数名(固定形参:数据类型, ...数组名:数据类型[]){

}

重载

• 旧js中: 重载只定义一个函数，在函数内根据传入的参数不同，执行不同

的逻辑

– function pay( ){

if(arguments.length==0){

手机支付

}else if(arguments.length==1){

现金支付

}else{

刷卡支付

}

}

– pay();

– pay(100);

– pay("6553 1234", "123456")重载（续1）

• TS中: 2步

• 1). TS中要先定义多个同名函数的声明，只要形参列表不同即

可！但是不要实现函数体。

– function 函数名():void;

– function 函数名(形参:数据类型):void;

– 强调: 这里只是不同重载版本的声明，不包含函数定义。

– void代表这个函数没有返回值。

– 如果函数有返回值，则必须将void改为返回值的具体类型重载（续2）

• 2). 定义一个可实际执行多种任务的函数来支持上方多种重载

的情况:

– function 函数名(形参?:数据类型){

if(形参===undefined){ //说明用户调用的是第一个重载版本

//没有传入任何实参

//就执行一项操作

}else{

//说明用户调用的是第二个重载版本，传了一个实参

//就执行另一项操作

}

}

5、class

6、模块化开发

总结:

\18. http-proxy方式跨域:

在服务器端没有配置CORS或JSONP跨域的情况下:
(1). vue.config.js中

module.exports={
 ... ,

 devServer: {

  proxy: {

   '/': {

    target: http://服务器端接口地址统一前缀部分,

    changeOrigin: true,

   }

  }

 }
}
(2). main.js中: 不需要

axios.defaults.baseURL="xxx"

(3). this.axios.get("/接口地址的相对路径")

\21. 插槽:

(1). 只要多个组件拥有相同的结构，只是局部的内容不同，都可用插槽实现

(2). 如何:

 a. 先额外创建一个带插槽的外壳组件,保存其它多个组件相同部分的HTML+CSS+JS。但是，外壳组件中将来可能变化的位置，用<slot></slot>标记

 b. 再定义其它使用外壳组件的组件:

 1). 引入带插槽的外壳组件:

 import 外壳组件名 from "./外壳组件.vue"

 export default {

  components:{ 外壳组件名 },

   ...

 }

 2). 在其它组件<template>中:

 <template>
  <外壳组件 :外壳组件所需属性="变量">

   <当前组件自有的个性化内容>

  </外壳组件>

 </template>

(3). 具名插槽:

 a. 如果一个外壳组件中，多个部位将来都会被更换，就可用具名插槽

 b. 如何:

 1). 外壳组件中:

 <template>
  ...公共部分...

  <slot name="插槽名1"></slot>

  ...公共部分...

  <slot name="插槽名2"></slot>

  ...公共部分...

 <template>
 2). 其它使用外壳组件的组件:

 <template>
  <外壳组件...>

   <template  #插槽名1>
    第一部分要更换的内容

   </template>

   ...

   <template #插槽名2>
    第二部分要更换的内容
   </template>

  </外壳组件>

 </template>

\22. Vuex

(1). 今后只要多个组件都需要共用一批数据时，都可用vuex

(2). 3部分:

 a. state:{ //保存共用的变量

   变量:初始值,

  ... : ...

  }

 b. mutations:{ //保存专门修改变量的方法

  set变量名(state, 新值){

  state.变量名=新值

  }

  ...

 }

 c. actions:{ //保存专门先发送ajax请求，再修改变量的方法

   方法名(context, 发给服务器的参数值){

    axios.get或post(

   "接口地址",

   发给服务器端的参数值

  ).then(result=>{

   ...

   context.commit("mutations中某个方法名", 新值)

   ...

  })

   }

  }

(3). 任意组件中想用state中的变量:

 a. import { mapState } from "vuex"

 b. export default {

   computed:{

   ...mapState([ "state中某变量名", ... ]),

   其它计算属性

  }

  }

 c. <template>中可用state中某变量名用于绑定和指令

 d. js中可this. state中某变量名来读取变量值

(4). 任意组件中想修改state中的变量值:

 a. import { mapMutations } from "vuex"

 b. export default {

   methods:{

   ...mapMutations ([ "Mutations中某方法名", ... ]),

   其它方法

  }

  }

 c. js中可用this. Mutations中某方法名(实参值)修改state中变量值

(5). 任意组件中想先发ajax请求再修改state中变量值

 a. import { mapActions } from "vuex"

 b. export default {

   methods:{

   ...mapActions ([ "Actions中某方法名", ... ]),

   其它方法

  }

  }

 c. js中可用this. Actions中某方法名(实参值)发送ajax请求并修改state中变量值。

\23. TypeScript

\1. 变量: var或let或const 变量名:数据类型=值;

\2. 函数:
 (1). function 函数名(形参:数据类型, ...):返回值类型{
    ... ...
   }

 (2). 不确定参数个数:

 a. 单个参数不确定有没有
  function 函数名(形参1:数据类型, 形参2?:数据类型)...
  或
  function 函数名(形参1: 数据类型, 形参2:数据类型=默认值)...

 b. 多个参数不确定有没有
  function 函数名(形参1:数据类型, ...形参2:数据类型[])...
 (3). 重载:

 a. 先定义空的函数声明，列举所有重载的可能:

  function 函数名():返回值类型;

  function 函数名(形参1: 数据类型):返回值类型;
  function 函数名(形参1: 数据类型, 形参2:数据类型):返回值类型;

 b. 正式实现功能的函数:

  function 函数名(){
   根据arguments中的元素个数，决定具体执行何种逻辑
  }

\3. class: 新规定:

 (1). class  类型名{ //必须提前声明属性，才能使用
    属性1: 数据类型=初始值

    属性2: 数据类型=初始值

    ...

    //构造函数必须定义数据类型

    constructor(形参1:数据类型, 形参2:数据类型,...){
​   this.属性1=形参1;

      this.属性2=形参2;

      ...
​    }

    /方法定义.../
   }

 (2). 访问修饰符: 今后，只要想控制一个class中属性的使用范围时。

  class 父{
    public 公有属性:数据类型=值

    protected 受保护的属性:数据类型=值

    private 私有属性:数据类型=值

    父的函数(){
​     以上三种属性都能用
​    }
  }

  class 子 extends 父{
    子的函数(){
     只能用父的公有属性和父的受保护的属性

     不能用父的私有属性
​    }
  }

  除父子class以外的程序区域：

  只能用父class的对象的公有属性

 (3). 接口: 保证开发人员按照要求实现类的成员

 a. 先定义接口:

  interface  I接口名{
   属性名:数据类型

   ...

   方法名(形参:数据类型, ...):返回值类型;
  }

 b. 定义class实现接口的要求:

  class 类型名 implements  I接口名{
   属性名:数据类型=值

   ...

   方法名(形参:数据类型, ...):返回值类型{
    方法实现
   }
  }

\4. 模块化开发:

 (1). 模块中只抛出一个东西:

 export default 一个东西

 import  别名 from "相对路径"

 (2). 模块中同时抛出多个东西:

 export { 多个东西用逗号分隔 }

 import { 想要的个别东西用逗号分隔 }  from  "相对路径"

今日对应小程序视频:

 小程序->在线->VUE->day06

  \3.  Vue脚手架中使用http-proxy跨域

  链接：<https://pan.baidu.com/s/1pdc0k9Trdw28KLUxYOmI1Q> 提取码：ssih

 小程序->在线->VUE->day07

  1_slot

  链接：<https://pan.baidu.com/s/1TJvWgyBLz2Hf_6xr_M3Ksg> 提取码：e4rn

  "question": ""

2_vuex

链接：<https://pan.baidu.com/s/1KYUP1QmzeZPtsHT8o0YjGg> 提取码：fmnm
 小程序->在线->VUE->day08

  \1. ts

  链接：<https://pan.baidu.com/s/1Vlh6zPdAlPa1nvE9XjCxrg> 提取码：iwxa

作业:

\1. 复习: 小程序->在线->VUE->day05、day06

\2. 预习: 小程序->在线->VUE->day07

\2. 看小程序视频使用vue脚手架完成学子商城首页、详情页

 观看并跟着做: 小程序->在线->VUE->day05  

 \3. 学子商城详情页 。。。（放大镜效果）

 <https://pan.baidu.com/s/1ElTcisKQfeFnVGdvNgjSBQ>

 \5. 学子商城 商品列表页面 vue 分页

 <https://pan.baidu.com/s/16v-Vn6LIAuppLTs2jMfvdQ>

 家里环境xampp和nodejs能用，且第一阶段学的好的同学:  

 可下载0. VUE版学子商城 起始空项目 中xzserver.zip，用自己的服务器端代码

 家里环境xampp和nodejs不能用，或者第一阶段学的不好的同学：

 无需下载xzserver.zip

 视频中所有axios请求的服务器端接口地址，都改为我的新浪云服务器地址，就不需要你再运行服务器端了。也不需要你了解任何服务器端知识了:

 <http://localhost:5050/index> 改为  <http://xzserver.applinzi.com/index>

 <http://localhost:5050/details>  改为 <http://xzserver.applinzi.com/details?lid=xxx>

传js中的加：

Actions:保存异步函数

day08

不写默认是public

day08

二.vue3

proxy代理对象+虚拟DOM树

2.1访问器属性的问题

• 只能在首次创建new Vue()对象时初始就有的属性，添加

监视(访问器属性)。今后动态添加进来的成员，就无法自动

添加访问器属性，也就无法自动得到监视。

• 无法给索引数组的数字下标添加访问器属性

• 结果，在vue程序中后添加成员，或通过下标修改索引数

组中的元素值，页面都不自动更新！

2.2Vue3的绑定原理

• ES6的Proxy代理对象

– proxy在目标对象的外层搭建了一层拦截，外界对目标对象的所有操作，都必须通过这层拦截。

proxy:不保护新元素，把所有对象围起来

[[]]:表示内部属性（只有内部可用）

重点！！Vue2和Vue3的生命周期

Vue2： Vue3
beforeCreate（） setup()
Create
created（） setup()
beforeMount（） onBeforeMount()
Mount
mounted（） onMounted()
beforeUpdate（） onBeforeUpdate()
Update
updated() onUpdated()
beforeDestory() onDeactivated()
Destory
destoryed() onErrorCaptured()
TypeScript

变量: var或let或const 变量名:数据类型=值;

函数:
(1). function 函数名(形参:数据类型, ...):返回值类型{
   ... ...
 }
(2). 不确定参数个数:
a. 单个参数不确定有没有
function 函数名(形参1:数据类型, 形参2?:数据类型)...
或
function 函数名(形参1: 数据类型, 形参2:数据类型=默认值)...
b. 多个参数不确定有没有
function 函数名(形参1:数据类型, ...形参2:数据类型[])...
(3). 重载:
a. 先定义空的函数声明，列举所有重载的可能:
function 函数名():返回值类型;
function 函数名(形参1: 数据类型):返回值类型;
function 函数名(形参1: 数据类型, 形参2:数据类型):返回值类型;
b. 正式实现功能的函数:
function 函数名(){
  根据arguments中的元素个数，决定具体执行何种逻辑
}

class: 新规定:
(1). class  类型名{ //必须提前声明属性，才能使用
   属性1: 数据类型=初始值
   属性2: 数据类型=初始值
   ...
   //构造函数必须定义数据类型
   constructor(形参1:数据类型, 形参2:数据类型,...){
                       this.属性1=形参1;
       this.属性2=形参2;
       ...
   }
   /方法定义.../
 }
  (2). 访问修饰符: 今后，只要想控制一个class中属性的使用范围时。
class 父{
   public 公有属性:数据类型=值
   protected 受保护的属性:数据类型=值
   private 私有属性:数据类型=值
   父的函数(){
     以上三种属性都能用
   }
}
class 子 extends 父{
   子的函数(){
      只能用父的公有属性和父的受保护的属性
      不能用父的私有属性
   }
}
除父子class以外的程序区域：
只能用父class的对象的公有属性
  (3). 接口: 保证开发人员按照要求实现类的成员
  a. 先定义接口:
interface  I接口名{
  属性名:数据类型
  ...
  方法名(形参:数据类型, ...):返回值类型;
}
  b. 定义class实现接口的要求:
class 类型名 implements  I接口名{
  属性名:数据类型=值
  ...
  方法名(形参:数据类型, ...):返回值类型{
    方法实现
  }
}

模块化开发

(1). 模块中只抛出一个东西:
  export default 一个东西
  import  别名  from "相对路径"
  (2). 模块中同时抛出多个东西:
  export { 多个东西用逗号分隔 }
  import { 想要的个别东西用逗号分隔 }  from  "相对路径"

Vue3
(1). 绑定原理:ES6 Proxy代理对象+虚拟DOM树
(2). ES6 Proxy代理对象:
新生成的代理对象 = new Proxy(要保护或监视的原对象, {
  //当有人试图获取数组中任何一个元素值时自动触发
  get(当前对象, 属性名) {
    console.log(有人试图读取arr对象的${属性名}成员)
    return 当前对象[属性名];
  },
  //当有人试图修改数组中任何一个元素值时自动触发
  set(当前对象, 属性名, 新值) {
    console.log(有人试图修改arr对象的${属性名}成员)
    当前对象[属性名] = 新值;
    return true; //必须: 返回修改成功！
  }
});
//今后，都使用新代理对象，代替使用原对象。但是用法上和使用普通对象完全一样！

(3). main.ts中:
  a. 默认: createApp(App).use(store).use(router).mount('#app’)
  b. 全局组件:            @是src/的别名
    import 组件对象  from “@/components/组件文件相对路径”
    var app= createApp(App);
         app.component('组件标签名', 组件对象名)
    app..use(store).use(router).mount('#app’)
  c. 全局指令:
    app.directive ("my-focus",{
mounted(DOM元素){ DOM操作 }
         })
  d. axios: //axios对象是单例模式，整个项目中只有一个axios对象，哪里使用都一样。
    import axios from “axios”
    axios.defaults.baseURL=”服务器端接口基础路径”
    //单例模式，不用放到原型对象中，也能在任意组件内引用——Vue2也可以这样用。
  (4). 页面/组件中:
  a. <template>里和<style>里与Vue2完全一样:
  b. <script>里几乎全变:
    import { defineComponent, ref, toRefs, watch, computed, onMounted } from 'vue’;
    import axios  from “axios” //axios对象是单例模式，整个项目中只有一个axios对象，哪里使用都一样。
    import 子组件对象   from “子组件相对路径”
    export default defineComponent({
      components:{ 子组件对象,… },
      directives:{
        “自定义指令名”:{
           mounted(DOM元素){ DOM操作 }
         }
      },
      setup(){ //
        const data=ref({ 界面所需变量 });
        let { 界面所需变量名, … } = toRefs(data.value);
        const methods={
          界面所需方法(){ … 使用data中解构出的变量，不加this！要加.value才能用 }
          计算属性：computed(()=>{ //vue3中没有过滤器了，计算属性兼顾过滤器职能
             //计算过程
             return 返回值
          })
        }
        watch(要监控的变量, ,(newVal, oldVal)=>{
                  console.log(变量变了，新值为${newVal}, 旧值为${oldVal})
             //变量变化时要执行的操作
                   })
        //声明周期必须自己先import，再在setup内部调用！
        onMounted(){ //原mounted生命周期钩子函数
          //axios请求不用加this.
               axios.get(…).then(result=>{ … })
        }
                   return {
                     …toRefs(data.value), …methods
        }
      },
    })
  (5). 新声明周期钩子函数: 背过：
  beforeCreate -> setup()
  created -> setup()
  beforeMount -> onBeforeMount
  mounted -> onMounted
  beforeUpdate -> onBeforeUpdate
  updated -> onUpdated
  beforeDestroy -> onBeforeUnmount
  destroyed -> onUnmounted

看朋友圈看关键词

小程序所有视频要看

买纸质笔记本写下高频笔试题整理台词

ref

基本用法，本页面获取dom元素

<template>
  <div id="app">
    <div ref="testDom">11111</div>
    <button @click="getTest">获取test节点</button>
  </div>
</template>
​
<script>
export default {
  methods: {
    getTest() {
      console.log(this.$refs.testDom)
    }
  }
};
</script>
![img](https:////upload-images.jianshu.io/upload_images/7047742-267ea7196ab3015d.png?imageMogr2/auto-orient/strip|imageView2/2/w/555/format/webp)

image.png

其实ref除了可以获取本页面的dom元素，还可以拿到子组件中的data和去调用子组件中的方法

获取子组件中的data

子组件

<template>
  <div>
      {{ msg }}
  </div>
</template>
​
<script>
export default {
  data() {
    return {
      msg: "hello world"
    }
  }
}
</script>
父组件

<template>
  <div id="app">
    <HelloWorld ref="hello"/>
    <button @click="getHello">获取helloworld组件中的值</button>
  </div>
</template>
​
<script>
import HelloWorld from "./components/HelloWorld.vue";
​
export default {
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  methods: {
    getHello() {
      console.log(this.$refs.hello.msg)
    }
  }
};
</script>
![img](https:////upload-images.jianshu.io/upload_images/7047742-3d72465f00cc0c87.png?imageMogr2/auto-orient/strip|imageView2/2/w/492/format/webp)

image.png

调用子组件中的方法

子组件

<template>
  <div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      console.log("调用到了")
    }
  }
}
</script>
父组件

<template>
  <div id="app">
    <HelloWorld ref="hello"/>
    <button @click="getHello">获取helloworld组件中的值</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  methods: {
    getHello() {
      this.$refs.hello.open();
    }
  }
};
</script>
![img](https:////upload-images.jianshu.io/upload_images/7047742-e3bfdd2fc4c48d6d.png?imageMogr2/auto-orient/strip|imageView2/2/w/430/format/webp)

image.png

子组件调用父组件方法

子组件

<template>
  <div>
</div>
</template>

<script>
export default {
  methods: {
    open() {
      console.log("调用了");
      //  调用父组件方法
      this.$emit("refreshData");
    }
  }
}
</script>
父组件

<template>
  <div id="app">
    <HelloWorld ref="hello" @refreshData="getData"/>
    <button @click="getHello">获取helloworld组件中的值</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  methods: {
    getHello() {
      this.$refs.hello.open()
    },
    getData() {
      console.log('111111')
    }
  }
};
</script>
![img](https:////upload-images.jianshu.io/upload_images/7047742-545dff004be957f8.png?imageMogr2/auto-orient/strip|imageView2/2/w/538/format/webp)

token

主要有两个作用：

①：防止表单重复提交(防止表单重复提交一般还是使用前后端都限制的方式，比如：在前端点击提交之后，将按钮置为灰色，不可再次点击，然后客户端和服务端的token各自独立存储，客户端存储在Cookie或者Form的隐藏域（放在Form隐藏域中的时候，需要每个表单）中，服务端存储在Session（单机系统中可以使用）或者其他缓存系统（分布式系统可以使用）中)

//在页面初始化的时候调用后端代码像前端返回token
public String initLogin(ModelMap model, HttpSession session, String loginUrl) {
      model.put("extLoginView", clientManager.getExtLoginView());
      // 生成token
      String token = UUID.randomUUID().toString().substring(0,16);
      model.put(LOGIN_TOKEN, token);
      //返回地址与方法的  String loginUrl一致，即初始化的时候调用完方法后，又回到初始化页面
   return loginUrl;
}
②：用来作身份验证
主要的理念是，客户端初始化的时候，一般就是刚刚进入页面的时候就调用后端代码，后端代码生成一个token,返回给客户端，客户端储存token（可以在前台使用Form表单中使用隐藏域来存储这个Token，也可以使用cookie）,然后就将request(请求)中的token与（session）中的token进行比较：

 //跳转到添加页面
    @RequestMapping("/add.do")
    public String add(HttpServletRequestrequest,HttpServletResponse response){
        //生成token
        UUID token=UUID.randomUUID();
        System.out.println("token的值"+token);
        //放入session中
    request.getSession().setAttribute("token",token.toString());
  //放入request作用域中传到前台
  request.setAttribute("token",token);
     return "add";
    }
    //前台穿过来的token进行比对
    @RequestMapping("/addMessage.do")
    public synchronized String addMessage(HttpServletRequest request){
        //获取session中的token
  Objecttoken1=request.getSession().getAttribute("token");
  //获取前台穿过来的token
  String token=request.getParameter("token");
  System.out.println("token1的值"+token1);
  if(token1==null){
   System.out.println("提交出错");
  }
  else if(!token1.equals(token)){
   System.out.println("提交出错");
  }else{
   System.out.println("提交成功");
  //移除session 防止重复提交
  request.getSession().removeAttribute("token");
   }
  return "";
  }
3：使用基于 Token 的身份验证方法，在服务端不需要存储用户的登录记录。大概的流程是这样的：
客户端使用用户名跟密码请求登录
服务端收到请求，去验证用户名与密码
验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里
客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据
4：ajax中传递token的几种方式
方法一：放在请求头中
å¨è¿éæå¥å¾çæè¿°

$.ajax({
  type: “POST”,
  headers: {
  Accept: “application/json; charset=utf-8”,
  userToken: “” + userToken
},
url: “/index”,
data: JSON.stringify(mytable.params),
contentType: “application/json”,
dataType: “json”,
success:function(data){
},
​
error:function(data){
}
});
方法二：使用beforeSend方法设置请求头

$.ajax({
  type: “POST”,
  url: “/index”,
  data: JSON.stringify(mytable.params),
  contentType: “application/json”,
  dataType: “json”,
  beforeSend: function(request) {
  request.setRequestHeader(“Authorization”, token);
  },
  success: function(data) {
  },
  error: function(data) {
  }
});
