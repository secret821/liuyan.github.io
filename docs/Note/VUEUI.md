# VUEUI

## `typora` （`markdown`编辑器）

## `VUEUI`  `Vue`组件库

### `ElementUI`

`elementUI`是饿了么团队研发的一款基于`VUE`的桌面端组件库。

`https://element.eleme.io/#/zh-CN`

后台管理型网站（功能有，开发效率高）

#### 搭建`ElementUI`基础环境 （基于脚手架）

1. 新建脚手架项目。
2. 在新项目中通过`npm`命令安装`element-ui`。
3. 在脚手架项目中，`main.js`配置`ElementUI`。
4. 开始使用。

**具体操作：**

1. 新建脚手架项目。

   ```shell
   # 找一个干净目录 demo
   vue create elepro
   # 依次选择：
   Manually select features
   Choose Vue version  /  Babel  /  Router
   2.x
   Use history mode for router?     y 
   In package.json
   Save this as a preset for future projects?   n
   ```

2. 在新项目中通过`npm`命令安装`element-ui`。

   ```shell
   cd elepro
   # 以下两条命令作用相同  哪个都可以 但是要注意，
   # 一定要在项目目录下（包含package.json）执行安装命令
   # npm install --save element-ui
   npm i element-ui -S
   ```

3. 在脚手架项目中，`main.js`配置`ElementUI`。

   ```javascript
   import ElementUI from 'element-ui';    // 引入模块
   import 'element-ui/lib/theme-chalk/index.css';  // 引入样式
   
   // Vue.use() 作用为引入全量的ElementUI组件库
   // 将会把ElementUI的自定义组件、指令等资源导入当前Vue示例。
   // Vue.use() 方法将会自动调用传入的 ElementUI.install()函数
   // 所以ElementUI的主js一定会提供一个install方法，并且在该方法中
   // 将组件库中的所有组件、指令等资源注入到Vue对象。
   Vue.use(ElementUI);
   ```

4. 开始使用。

案例：访问`http://localhost:8080/button`， 看到新页面，呈现`ElementUI`中的按钮。

1. 启动脚手架。

   ```shell
   npm run serve
   ```

   启动服务->webpack编译打包成静态资源（html，css，javascript），静态资源套8080的壳子

2. 新建页面：`views/Button.vue`，编写`elementui`的按钮组件。

   ```html
   <template>
     <div>
       <!-- views/Button.vue -->
       <el-row>
         <el-button>默认按钮</el-button>
         <el-button type="primary">主要按钮</el-button>
         <el-button type="success">成功按钮</el-button>
         <el-button type="info">信息按钮</el-button>
         <el-button type="warning">警告按钮</el-button>
         <el-button type="danger">危险按钮</el-button>
       </el-row>
     </div>
   </template>
   ```

3. 配置路由`router/index.js`，是的访问`/button`可以看到新建页面的内容。

   ```javascript
   import Button from '../views/Button.vue'
   const routes = [
     {
       path: '/button',
       name: 'Button',
       component: Button
     },
   ]
   ```

index.html

vue在里面加载，js，css，id=app：动态更新html里面内容

↓

main.js

new vue：路由；如何进行渲染里面的app就是上面渲染的app

↓

App.vue

router-view：显示什么看当前页面上有什么

↓

index.js

思考：`ElementUI`适合编写什么类型的网站？

适合后台管理型网站。

#### `Navmenu`组件（导航组件）

`navmenu`用于实现导航，基本结构如下：

```html
<el-menu mode="horizontal">
    <el-menu-item>导航文本1</el-menu-item>
    <el-menu-item>导航文本2</el-menu-item>
    <el-menu-item>导航文本3</el-menu-item>
    <el-menu-item>导航文本4</el-menu-item>
</el-menu>
```

案例：访问`http://localhost:8080/nav`   看到导航效果。

1. 新建`views/Nav.vue`，编写导航内容。
2. 配置路由。

##### 设置导航的默认选中项

```html
<el-menu mode="horizontal" default-active="4">
    <el-menu-item index="1">导航文本1</el-menu-item>
    <el-menu-item index="2">导航文本2</el-menu-item>
    <el-menu-item index="3">导航文本3</el-menu-item>
    <el-menu-item index="4">导航文本4</el-menu-item>
</el-menu>
```

##### 设置导航的下拉子菜单

```html
<el-menu mode="horizontal" default-active="4">    
<el-menu-item index="1">导航文本1</el-menu-item>    
<el-menu-item index="2">导航文本2</el-menu-item>    
<el-submenu index="3">主题     
    <el-menu-item>黑色主题</el-menu-item>        
    <el-menu-item>白色主题</el-menu-item>    
    </el-submenu>    
<el-menu-item index="4">导航文本4</el-menu-item>
</el-menu>
```

##### 设置垂直导航 （垂直方向）

```html
<el-menu mode="verticle">
    <el-menu-item>导航文本1</el-menu-item>
    <el-menu-item>导航文本2</el-menu-item>
    <el-menu-item>导航文本3</el-menu-item>
    <el-menu-item>导航文本4</el-menu-item>
</el-menu>
```

#### `ElementUI`的经典布局系统

##### Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

```test
<el-container>：外层容器。当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。

<el-header>：顶栏容器。

<el-aside>：侧边栏容器。

<el-main>：主要区域容器。

<el-footer>：底栏容器。

注意：`el-container`中只能包含上述5种组件组件。`header`、`aside`、`main`、`footer`的父组件只能是`el-container`。

案例：访问：`http://localhost:8080/layout`，测试`container`布局容器。

1. 新建 `views/Layout.vue`，编写`container`布局系统。
2. 配置路由。
```

#### 实现`ElementUI`的经典布局

1. 新建`Component.vue`。
2. 搭建`header`、aside、`main`组成的布局系统。
3. 在`header`中放水平导航，`aside`中放垂直导航，`main`先晾着。
4. 微调样式。
5. 使用嵌套路由实现`main`部分的动态更新。

嵌套路由：
​children中path不带/
​把子路由内容加到 <router-view/ 里

## `VUEUI Unit02`

### /实现`ElementUI`的经典布局

1. 新建`Component.vue`。
2. 搭建`header`、aside、`main`组成的布局系统。
3. 在`header`中放水平导航，`aside`中放垂直导航，`main`先晾着。
4. 微调样式。
5. 使用嵌套路由实现`main`部分的动态更新。

嵌套路由可以完美的通过路由地址来控制网页局部页面的更新。配置如下：

```javascript
  {
    path: '/component',
    name: 'Component',
    component: Component,
    children: [
      {
        path: 'button',
        component: Button
      },
      {
        path: 'layout',
        component: Layout
      }
    ]
  },
```

> `http://localhost:8080/component/button`    包含button组件
>
> `http://localhost:8080/component/layout`     包含layout组件

## `MintUI`

`MintUI`是饿了么团队开发的移动端`vue`组件库。

除了`MintUI`之外，推荐大家看一下`vant`、`iview`等其他移动端组件库。

`mint官方文档：http://mint-ui.github.io/#!/zh-cn`

`mint腾讯云文档：https://cloud.tencent.com/developer/doc/1273`

`vant官方文档：https://vant-contrib.gitee.io/vant/#/zh-CN/`

### 基于脚手架安装配置`MintUI`

1. 新建脚手架项目。
2. 在新项目中通过`npm`命令安装`mint-ui`。
3. 在脚手架项目中，`main.js`配置`MintUI`。
4. 开始使用。

**具体操作：**

1. 新建脚手架项目。

   ```shell
   # 找一个干净目录 demo
   vue create scaffolding
   # 依次选择：
   Manually select features
   Choose Vue version  /  Babel  /  Router   /   Vuex
   2.x
   Use history mode for router?     y 
   In package.json
   Save this as a preset for future projects?   n
   ```

2. 在新项目中通过`npm`命令安装`mint-ui`。

   ```shell
   cd scaffolding
   # 以下两条命令作用相同  哪个都可以 但是要注意，
   # 一定要在项目目录下（包含package.json）执行安装命令
   # npm install --save mint-ui
   npm i mint-ui -S
   ```

3. 在脚手架项目中，`main.js`配置`MintUI`。

   ```javascript
   import MintUI from 'mint-ui'
   import 'mint-ui/lib/style.css'
   Vue.use(MintUI)
   ```

4. 开始使用。

### `MintUI`常用组件

#### `Button`组件

`button`组件用于显示按钮，其基本结构：

```html
<mt-button type="按钮类型"
            size="按钮尺寸"
            icon="图标"
            disabled      禁用样式
            plain>        镂空样式
    按钮文本
</mt-button>
```

#### `Header`组件

`header`组件用于定义移动端界面的头部标题栏，其基本结构：

```html
<template>
 <div>
        <mt-header title="标题栏文本"></mt-header>
    </div>
</template>
```

案例：

1. 新建页面：`src/testing/Header.vue`。编写标题栏内容。
2. 更新路由。`/header` 对应 `Header.vue`。

引入外部样式表：`reset.css`。

1. 把`reset.css`文件，放入`public/styles`文件夹中。

2. 在`public/index.html`中，使用`link`引入该`css`文件即可。

   ```html
   <link rel="stylesheet" href="styles/reset.css">
   ```

**脚手架项目非常重要的两个目录：`public`、`src`的理解**

当执行`npm run serve`，将会编译整个脚手架项目，试图将该项目编译后整合成一个完整的静态资源网站。

`public`目录下的资源，将会原封不动的打包到静态资源网站的根目录。

`public/reset.css`可以直接通过`http://localhost:8080/reset.css` 直接访问。

`src`目录下的资源，都会被`vueloader`进行统一管理，统一打包。

#### `Field`组件

`field`组件用于实现文本框，其语法：

```html
<mt-field type="输入框的类型"
          label="文本框左侧标签的文本内容"
          placeholder="占位内容"
          readonly
          disabled
          state="文本框的状态  success error  warning"
          disableClear   是否显示清空文本框的按钮
          :attr="{maxlength:11}">
</mt-field>
```

> `disableClear`: 是否显示清空文本框的按钮
>
> `:attr`: 用于为`input`原生标签添加`html5`表单属性。`object`类型。

案例： `http://localhost:8080/field`    看到表单页面`testing/Field.vue`。

### 完成项目中的注册页面

1. 新建`src/views/Register.vue`，编写页面组件内容。
2. 配置路由。当访问`/register`，可以看到注册页面。

```js
// src/views/Register
<template>
<div>
    <!-- 标题栏 -->
    <mt-header title="注册">
        <mt-button icon="back" slot="left"></mt-button>
        <router-link to="/login" slot="right">
        登录
        </router-link>
    </mt-header>

    <!-- 一组文本框 -->
    <!-- onBlur 焦点失去事件 -->
    <!-- 原生的@blur事件添加在最外的a上 -->
    <!--  native.capture： 给原生组件绑定原生事件 -->
    <mt-field type="text"
              placeholder="请输入用户名"
              v-model="name"
              :state="nameState"
              @blur.native.capture="checkName"
              label="用户名"></mt-field>
    <mt-field type="password"
              placeholder="请输入密码"
              v-model="pwd"
              :state="pwdState"
              @blur.native.capture="checkPwd"
              label="密码"></mt-field>
    <mt-field type="password"
              placeholder="请输入再次输入密码"
              v-model="repwd"
              :state="repwdState"
              label="确认密码"></mt-field>
              <mt-button type="primary" size="large"
              @click="checkForm">快速注册</mt-button>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            name:'',//用于与用户名做双向数据绑定
            nameState:'',
            pwd:'', //用于与密码框做双向数据绑定
            pwdState:'',
            repwd:'', //用于与密码框做双向数据绑定
            repwdState:'',
        }
    },
    methods:{
        // 表单验证
        checkName(){
            // 验证用户名是否符合要求
            let reg=/^\w{6,15}$/;
            if(reg.test(this.name)){
                // 格式合法
                this.nameState = 'success'
            }else{
                // 格式不正确
                this.nameState = 'error';
                return false;
            } 
    },
    //      密码验证
        checkPwd(){
            let reg=/^\d{6}$/;
                if(reg.test(this.pwd)){
                    // 格式合法
                    this.pwdState = 'success'

                }else{
                    // 格式不正确
                    this.pwd = 'error';
                    return false;
                }
        },
        // 密码重复验证
        checkRepwd(){
            let reg=/^d{6}$/;
            if(reg.test(this.repwd)&&this.reg==this.repwd){
                // 格式合法
                this.repwdState = 'success';
            }else{
                this.repwdState = 'error';
                return false;
            }
        },
        //表单验证
        checkForm(){
            if(this.checkName() 
                && this.checkPwd() && this.checkRepwd()){
                console.log('发送请求，执行注册业务')
            }
        } 
    },
}
</script>


```

相对路径：开头不是http或者/，相对的是浏览器地址栏里的地址，会在当前文件夹下寻找（把最后一个抹掉）

绝对路径：开头是/         从根开始拼接在一起

## `VUEUI Unit03`

### 实现项目中的注册页面

1. 新建`src/views/Register.vue`，编写页面组件内容。
2. 配置路由。当访问`/register`，可以看到注册页面。

### 实现项目中的登录页面

1. 新建`src/views/Login.vue`，编写页面组件内容。
2. 配置路由。当访问`/login`，可以看到登录页面。

#### Field组件的`@blur`失效问题

在`MintUI`中，为`Field`组件绑定焦点失去、焦点获取事件的方式如下：

```html
<mt-field @blur.native.capture="checkName"></mt-field>
<mt-field @focus.native.capture="checkName"></mt-field>
```

在`mt-field`组件直接添加`@blur`无效，因为会被`vue`当做是`mt-field`组件的一个自定义事件，这种事件需要在`mt-field`源码中使用`$emit()`捕获并触发，而我们需要捕获的是`input`标签的原生`blur`事件。所以需要告诉`vue`，该`blur`事件为原生事件，所以需要添加`@blur.native`事件修饰符。

此时，焦点失去事件依然无效，原因是`mt-field`组件在编译时将会编译为：

```html
<a class="mint-cell mint-field">
    <div class="mint-cell-left"></div> 
    <div class="mint-cell-wrapper">
        <div class="mint-cell-title">
            <span class="mint-cell-text">用户名</span>
        </div> 
        <div class="mint-cell-value">
            <input placeholder="请输入用户名" 
                   type="text" class="mint-field-core"> 
            <div class="mint-field-clear" 
                 style="display: none;">
                <i class="mintui mintui-field-error"></i>
            </div>
            <div class="mint-field-other"></div>
        </div>
    </div> 
    <div class="mint-cell-right"></div>
</a>
```

原生的`@blur`事件将会添加在最外层的`a`上，而浏览器默认`input`元素的`blur`事件不会再事件冒泡阶段执行，所以不会执行`a`的`blur`事件。所以需要添加`@blur.native.capture`，是`a`的`blur`事件在事件捕获阶段先执行。

## /`MintUI`常用组件

### `Navbar`组件

`Navbar`用于实现顶部选项卡（顶部导航）。其基本语法如下：

```html
<mt-navbar v-model="navactive">
 <mt-tab-item id="1">体育</mt-tab-item>
    <mt-tab-item id="2">科技</mt-tab-item>
    <mt-tab-item id="3">军事</mt-tab-item>
    <mt-tab-item id="4">娱乐</mt-tab-item>
</mt-navbar>
data: {
 navactive: '1'
}
```

案例：`http://localhost:8080/nav` 请求看到顶部导航页面。

1. 新建页面：`testing/Nav.vue`
2. 配置路由映射。

### `TabContainer`组件

`TabContainer`经常与导航搭配使用，用于定义面板。一个`TabContainer`里可以声明多个面板，并且实现面板内容的动态切换。其基本语法如下：

```html
<mt-tab-container v-model="navactive">
 <mt-tab-container-item id="1">面板1</mt-tab-container-item>
 <mt-tab-container-item id="2">面板2</mt-tab-container-item>
 <mt-tab-container-item id="3">面板3</mt-tab-container-item>
 <mt-tab-container-item id="4">面板4</mt-tab-container-item>
</mt-tab-container>
```

案例：

实现项目首页的主体页面结构的搭建。（标题栏、导航、面板）

### `Tabbar`组件

`Tabbar`组件用于实现底部选项卡，其语法结构：

```html
<mt-tabbar v-model="selected">
 <mt-tab-item id="shouye">首页
     <img src="...." slot="icon">
    </mt-tab-item>
    <mt-tab-item id="gouwuche">购物车</mt-tab-item>
    <mt-tab-item id="wode">我的</mt-tab-item>
</mt-tabbar>
data(){
 selected: 'shouye'
}
```

案例：`/tabbar`看到底部选项卡的外观。
**为底部选项卡添加图标**

<mt-tab-item 组件内设计了一个插槽：`icon`。如果希望显示图标，则如下：

```html
<mt-tab-item>
    <img src="../assets/main_0.png" slot="icon">
</mt-tab-item>
```

未来有可能在`src`中引入`src/assets`文件夹下的图片资源。如果`vue`检测到访问的图片资源是`src`下的资源，在打包时会对这些资源进行特殊处理。

若`src`使用的是相对路径，`vue`将会把这些资源统一打包到项目的`/img`目录下，并且重命名（防止文件名冲突），同时更新页面中`src`的路径。

```html
<div>
    <img src="/img/main_0.82541892.png" slot="icon">
</div>
```

若`src`使用的是绝对路径，`vue`将不会做任何处理，直接把该路径输出到`html`中。

**到底什么样的图片应该放到`public`下，什么图片应该放到`assets`下？**

`assets`下应该存放项目所必须的图标，这些图片是属于项目运行时必须的资源，应放到`assets`目录下更为合适。

#### 点击底部选项卡后，更新路由，跳转页面

> 点击首页：跳转到`/tabbar`
>
> 点击购物车：跳转到`/gouwuche`
>
> 点击我的：跳转到`/wode`

实现步骤：

1. 新建两个页面，`Gouwuche.vue`     `Wode.vue`。
2. 购物车页面底部默认选中项为购物车，我的页面底部默认选中项为我的。
3. 当激活某个选项卡后，跳转到相应路由地址即可。可以使用`watch`来监听`selected`变量的更新。

### 实现项目首页中底部选项卡的设计

项目包含两个底部选项卡：`Home.vue`      `Me.vue`。

完成两个页面底部选项卡的设计实现，与两页面间的跳转功能。

**实现步骤：**

1. 新建`views/Me.vue`，整体布局与`Home.vue`类似。
2. 在两个页面中都编写底部选项卡组件`tabbar`。处理好默认选中项。`Home.vue`中默认选中项为`home`，`Me.vue`中默认选中项为`me`。
3. 在两个页面中基于`watch`来控制他们两个页面间的跳转。

### `swipe`组件

`swipe`组件用于实现轮播图，其语法结构如下：

```html
<mt-swipe>
 <mt-swipe-item>
     <img src="" >
    </mt-swipe-item>
    ....
</mt-swipe>
```

案例：

1. 新建页面：`testing/Swipe.vue`。
2. 配置路由：`/swipe` 查看轮播图效果。

事件处理：从外到内

事件捕获：从内到外

native capture 是属于VUE的，所以在出现相同的问题时都给@blur添加    .native.capture

src下会带着一起编译

base64图片

assets里放的图片，任何时候都不会改变，都是这个图标

## `VUEUI Unit04`

### /`swipe`组件

`swipe`组件用于实现轮播图，其语法结构如下：

```html
<mt-swipe :style="{'height':h}"
      :speed="300"
      :auto="3000"
      :continuous="false"
      :showIndicators="false">
 <mt-swipe-item>
     <img src="" >
    </mt-swipe-item>
    ....
</mt-swipe>
```

案例：

1. 新建页面：`testing/Swipe.vue`。
2. 配置路由：`/swipe` 查看轮播图效果。

```js
let flag=undefined;
flag=0;
flag='';
flag=null;

flag=100;
flag=-1;
flag='true';
flag='false';
flag=new Object();
flag=[];
if(flag){
    console.log('This is true...')
}
```

案例：在首页中添加轮播图组件。

1. 确认在`tab-container-item`中添加`Swipe`组件。
2. 设置相应`swipe`属性。
3. 设置相关`script`。

### 项目架构

基于`B/S`架构（`Browser` / `Server`）的**前后端分离**项目。使用`http`协议作为网络通信协议。服务端数据存储在`mysql`数据库。

客户端：`Vue + MintUI`

服务端：`nodejs + mysql`

通信协议：`http`

### 搭建学子问答项目服务端

1. 下载`server.zip`，解压。

2. 下载`xzqa.sql`，导入`mysql`数据库。

   打开`xampp`，启动`mysql`服务，点击`shell`按钮，进入命令行，执行命令：

   ```shell
   mysql -uroot -p < [把sql文件拖拽进来自动生成文件路径]
   # 进入mysql  查看数据库信息
   mysql -uroot -p   回车  确认无密码
   show databases;
   use xzqa;
   show tables;
   select * from 表名;
   desc 表名;  # 查看表结构
   ```

3. 启动`server`，提供数据服务。

   ```shell
   # 进入server目录后，执行命令
   node app.js
   ```

4. 浏览器中验证服务接口：

   ```url
   http://localhost:3000/category
   ```

### `HTTP`协议

`HTTP`协议是客户端与服务端进行通信时共同遵守的规范。这些规范主要包括两部分：

1. 请求响应的过程。

2. 请求、响应数据包的格式。

   请求数据包：

   ```js
   请求行：      POST  /user/login  HTTP/1.1
   请求消息头：   key=value
                key2=value2
                key3=value3
                ........
   请求实体：     name=zs&pwd=1234&age=15&gender=m

   响应数据包：

   状态行：  HTTP/1.1  200  OK
   响应消息头：  key=value
               key2=value2
               key3=value3
               ........
   响应实体：   响应数据二进制内容
   ```

### 加载首页中的类别列表信息

实现步骤：

1. 安装并配置`axios`。

   安装：

   ```shell
   cd scaffolding 
   npm install --save axios
   ```

   配置`main.js`：

   ```javascript
   import axios from 'axios' axios.defaults.baseURL = "http://localhost:3000/"Vue.prototype.axios = axios;
   ```

2. 在`mounted`中发送`http`请求，获取响应数据，渲染页面。

   ```javascript
   mounted(){    // 发送http请求    
       this.axios.get('/category').then(result=>{      
           console.log(result);      
       let cats = result.data.results; // [{},{},{}]      // 存入data      
       this.cats = cats;    })}
   ```

```js
insert into xzqa_category values (5, '教育');
delete from xzqa_category where id=5;
```

### 加载`UI`类别下（`cid=1`）的文章首页列表数据

实现步骤：

1. 完成单个列表项的`UI`界面设计与实现。

2. 在`mounted`中加载`UI`类别下的首页文章列表数据（发请求）。

   ```javascript
   /** 页面元素挂载完毕后执行该生命周期方法 */
   mounted(){    // 发送http请求，获取UI类别下的第一页文章列表    
       this.axios.get('/articles?cid=1&page=1').then(res=>{        console.log(res);        // 把文章列表数据存入data，供页面进行列表渲染        
          this.articles = res.data.results;    })}
   ```

3. 当获取到响应数据后，渲染列表。

#### 处理列表渲染时的图片路径问题

文章列表的缩略图适合放在`public`下还是`assets`下？

`assets`比较适合存放一些**应用所必需**的图标，跟随项目进行编译打包。若图标足够小，`vue`在打包的过程中将会把该图片转为`base64`的格式，直接为`src`赋值，这样在加载页面时，就不会再次发送图片请求，提高网页的响应速度。

像列表中需要显示的图片，只需要存入一个静态资源目录中，通过数据库中查询的图片路径访问他们即可，不需要跟随项目一起打包。所以这些图片适合放入`public`目录下。

所有的属性的属性值全是字符串

![image-20210803094904891](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210803094904891.png)

ajax:局部更新技术

axios:技术封装

XMLHttpRequest:对象

前后端分离

前端：Vue脚手架项目    :8080     给浏览器客户端返回页面

后端：node.js项目         :3000

跨域问题：**ajax**请求发出之后返回时，**浏览器**会拦截

协议：包含数据包格式

数据包结构：

1) 请求数据包的结构

 第一部分： 请求行（数据包中的一行内容）

 请求行包括三部分内容：

 请求方式(get/post)

 请求资源路径（端口号之后的内容，比如/appname/servlet）

 协议的类型与版本

 第二部分： 若干消息头（消息头是由w3c定义的一些有特殊含义的键值对）

 消息头的样式，比如: content-type= text/html;

 服务器和浏览器都会遵守这些消息头的约定。

 消息头一般由服务器或者浏览器自动生成，但是也可以通过编程的方式生成

 三：空行

 第四部分: 实体内容

 如果请求方式是post方式，请求参数及值会放在这儿。

 如果请求方式是get 方式，请求参数与值是包含在请求资源路径里面。

key=value    键值对·

get 前两部分不能带中文所以一般使用post

协议数据包

解决同源策略

1.jsonp

2.proxy

3.cors 在8080页面想向3000发请求，

server.use(cors({

origin:['http://localhost:8080/'],['http://192.168.13.48:8080']}))

## `VUEUI Unit05`

:infinte-scroll-immediate-check="true"：无限滚动指令立即执行

封装：

​ 1.复用

​ 2.可维护性强

跳转：router-link to

尽量用类选择器，不要标签选择器，尽量加scope

***处理列表渲染时的图片路径问题***

文章列表的缩略图适合放在`public`下还是`assets`下？

`assets`比较适合存放一些应用所必需的图标，跟随项目进行编译打包。若图标足够小，`vue`在打包的过程中将会把该图片转为`base64`的格式，直接为`src`赋值，这样在加载页面时，就不会再次发送图片请求，提高网页的响应速度。

像列表中需要显示的图片，只需要存入一个静态资源目录中，通过数据库中查询的图片路径访问他们即可，不需要跟随项目一起打包。所以这些图片适合放入`public`目录下。

`public`下的资源可以直接通过绝对路径进行访问： `/articles/1.jpg`

### 实现切换顶部选项卡时更新文章列表

由于每个选项卡内容布局都一样，切换顶部导航时仅仅需要更新列表即可，没必要搞那么多的面板。留下第一个即可。

当激活某个顶部选项卡时，获取当前激活项类别的`ID`，发送`http`请求，获取响应数据，重新渲染列表。

实现步骤：

1. 编写`watch`，监听`navactive`的变化，因为`navactive`的值就是当前顶部导航选中项类别的`ID`值。
2. 一旦发现导航更新了激活项，获取当前激活项的类别`ID`，作为`cid`参数重新发送`http`请求。
3. 获取响应数据，将得到的文章数据直接替换掉当前文章数组即可。

```js
  watch: {

    /** 监听导航的变化 */
    navactive(newval){
      // 是窗口滚动条滚到0,0的位置
      window.scrollTo(0,0);
      this.page = 1;   // 将page变量改为1。
      console.log(newval); // newval即是当前激活项的类别ID
      // 发送http请求，获取响应数据，更新文章列表。
      this.loadArticles(newval, 1, (arts)=>{
        this.articles = arts;
      });
    }

```

### 实现列表的触底分页加载

#### `Infinite Scroll`指令（无限滚动指令）

`Infinite scroll`用于实现无限滚动，监听触底事件。其基本语法如下：

```html
<ul v-infinite-scroll="触底后执行的函数的函数名称"
    infinite-scroll-distance="触发事件时距离底部的高度阈值"
    infinite-scroll-disabled="变量名: busy">
    <li>...</li>
    <li>...</li>
    <li>...</li>
    .......
</ul>

```

案例：测试无限滚动指令。

1. 新建`testing/Inf.vue`
2. 配置路由，当访问`/inf`，看到无限滚动效果。

### 将上述代码搬到实现列表的触底分页加载业务

如上设置后发现问题：当刷新页面后将会自动执行一次`loadmore`方法。为什么？

因为当刷新页面后，默认情况下将会先加载一个空数组，然后发请求。导致无限滚动指令认为数据无法填充完成屏幕，导致自动调用`loadmore`（但是实际上请求发出去了，还没有回来），所以需要为无限滚动指令配一个新的指令属性：

```html
<ul v-infinite-scroll="触底后执行的函数的函数名称"
    infinite-scroll-distance="触发事件时距离底部的高度阈值"
    infinite-scroll-disabled="变量名: busy"
    :infinite-scroll-immediate-check="true">
</ul>

      <!-- distance  "触发事件时距离底部的高度阈值"-->
      <!-- "loadmore"触底后执行的函数的函数名称 -->
      <!-- 控制无限指令的开关 -->
      <!-- 无限滚动指令立即执行 -->
      <mt-tab-container-item
        infinite-scroll-distance="30" 
        v-infinite-scroll="loadmore"
        infinite-scroll-disabled="busy"
        :infinite-scroll-immediate-check="true">
  </mt-tab-container-item>
```

#### 列表触底分页加载的实现思路

1. 为`container`添加无限滚动指令，绑定方法：`loadmore`。

2. 在`loadmore`发送新的`/articles`请求，传递全新的参数：`cid`   `page`。获取服务端返回回来的新文章数组，把结果集追加到`data`下的`articles`属性中，更新列表显示内容。

   需要解决的问题：分页时的当前页码为题。

   需要在`data`中维护一个变量：`page`。该变量会随着无限滚动的进行而递增。`page++`。

```js
    /** 触底加载下一页文章列表 */
    loadmore(){
      // 发请求，加载下一页数据，追加到当前列表末尾
      let cid = this.navactive; // navactive就是当前类别ID
      this.page++;  // 当前页码+1
      let page = this.page;     // 下一页的页码
      console.log(`loadmore -- cid:${cid} page:${page}`);
      this.busy = true;  // 禁用无限滚动
      this.loadArticles(cid, page, (arts)=>{
          //把arts数组元素加到articles数组元素中
        this.articles.push(...arts);
        this.busy = false;
      });
    },
```

#### 封装`loadArticles`用于加载不同条件下的文章列表

至此发现有3个地方都需要加载文章列表：

1. `mounted`  加载首页数据
2. `watch navactive`   点击导航，更新列表
3. `infinite scroll`    无限滚动，加载下一页

伪代码如下：

```js
// callback是一个函数
loadArticles(cid, page, callback){
    this.axios.get('/articles?cid--page').then(res=>{
        callback(res.data.results)
    })
}

mounted(){
    this.axios.get('/articles?cid--page').then(res=>{
        this.articles = arts;
    })
}
navactive(){
    this.axios.get('/articles?cid--page').then(res=>{
        this.articles = arts;
    })
}
loadmore(){
    this.axios.get('/articles?cid--page').then(res=>{
        this.articles.push(..art);
    })
}

```

若封装的方法为异步方法（方法内部有异步处理的代码），并且在调用异步方法时需要获取到异步任务执行完毕后的结果，有两种方式：`callback`（回调），`Promise`。

### 添加弹等待框功能

```javascript
/** 发送http请求，加载文章列表
     *  cid: 文章类别id
     *  page:  页码
     *  callback:  回调函数  将会在数据加载完毕后自动调用
     *  所以需要在callback中声明文章列表获取后的操作
     */
loadArticles(cid, page, callback){
    // 弹出加载提示框
    // this.$indicator 就是 Indicator对象
    // 在Vue.use(MintUI)时，为Vue.prototype.$indicator赋的值
    this.$indicator.open({
        text:'加载中...',
        spinnerType: 'snake'
    });
    this.axios.get(
        `/articles?cid=${cid}&page=${page}`).then(res=>{
        callback(res.data.results);
        this.$indicator.close();
    })
},
```

### 实现文章详情页

需求是点击首页中某一个文章列表项后，跳转到文章详情页，并且传递当前选中文章`id`。在详情页中，接收该`id`参数，发送`http`请求，获取文章详情数据，渲染页面。

1. 准备好详情页。

2. 在首页文章列表项中添加`routerlink`， 通过`routerlink`实现页面跳转，跳转过程中需要传递参数。

   `vue`中通过`router-link`路由跳转传参的方式有两种：

   ```html
   query传参
   <router-link to="/article?id=237"></router-link>
   param传参
   <router-link to="/article/237"></router-link>
   ```

   > 第一种：使用`？`的方式向第二个页面传参：
   >
   > ```html
   > <router-link to="/article?id=237"></router-link>
   > ```
   >
   > 详情页中应如下方式接受：
   >
   > ```javascript
   > mounted(){
   >  // console.log(this.)
   >  // console.log(this.$route)
   >  // console.log(this.$route.query)
   >  let id = this.$route.query.id;
   > }
   > ```
   >
   > 第二种：使用**路径参数**的方式向第二个页面传参：
   >
   > ```html
   > <router-link to="/article/237"></router-link>
   > ```
   >
   > 接收参数：
   >
   > ```javascript
   > { path: '/article/:id', component: Article}
   > ```
   >
   > ```javascript
   > mounted(){ let id = this.$route.params.id;}
   > ```

### 区别

***vue中this. r o u t e . q u e r y 和 t h i s . route.query和this. route.query和this.route.params & query传参和params传参的使用和区别***

#### 1.query传参

路由：

```js
   var router = new VueRouter({
      routes: [
        { path: '/login', component: login },
        { name:'register',path: '/register', component: register } 
      ]
    })
```

导航：

```js
 // 注意：这是 query 两种传参方式 一种是直接跳转把字符串传过去 一种是传描述目标位置的对象
    <router-link to="/login?id=10&name=zs">登录</router-link>
    <router-link :to="{path:'/register',query:{id:5,name:'lili'}}">注册</router-link>
    或
    <router-link :to="{name:'register',query:{id:5,name:'lili'}}">注册</router-link>
    
    
等同于：
 this.$router.push('/login?id=10&name=zs')
 this.$router.push({path:'/register',query:{id:5,name:'lili'}})
 或
 this.$router.push({name:'register',query:{id:5,name:'lili'}})

```

***注意：jquery可以通过name或path来引入路由***

#### 2.params传参

路由：

```js
var router = new VueRouter({
  routes: [
    { path: '/login/:id/:name', component: login },// 这里不传入对应的参数（:/id/:name） 刷新页面 参数会消失,页面中就丢失了数据
    { name:'register', path: '/register/:id/:name', component: register }
  ]
})
```

导航：

// 注意：这是 params 两种传参方式 一种是直接跳转把字符串传过去 一种是传描述目标位置的对象

```js
    <router-link to="/login/12/ls">登录</router-link>
    <router-link :to="{name:'register',params:{id:10,name:'lili'}}">注册</router-link>
    
等同于：
 this.$router.push('/login/12/ls')
 this.$router.push({name:'register',params:{id:10,name:'lili'}})
```

注意：params只能通过name来引入路由，path会undefined

**jquery传参和params传参的区别**
**1.用法上:**

上文已经提到query可以用name或path来引入
**params必需要用name来引入**，接收参数都是类似的，分别是:
**this.$route.query.name**和**this.$route.params.name**。
**2.地址栏表现形式上:**
query：

​   /login?id=10&name=zs

params：

​   /login/12/ls

注意：这里的12和ls 对应的是/:id/:name 这两个参数可以不写 那么就不会在地址栏上显示 不过刷新页面参数会消失 写上参数刷新页面 参数不会消失

**1.query方式传参和接收参数**
传参:

```js
this.$router.push({
        path:'/detail/:id',
        query:{
          id:id
        }
      })
```

接收参数:

```js
this.$route.query.id
```

Tips:

传参是this.r o u t e r , 接 收 参 数 是 t h i s . router,接收参数是this.router,**接收参数是this.route**,这里千万要看清了！！！

**2.params方式传参和接收参数**
传参:

```js
this.$router.push({
        name:'Detail',
        params:{
          id:id
        }
      })
```

接收参数:

```js
this.$route.params.id
```

Tips:

params传参，push里面只能是 name:‘xxxx’,不能是path:’/xxx’,因为**params只能用name来引入路由**，如果这里写成了path，接收参数页面会是undefined！！！

另外，二者还有点区别：
接收参数
// **query通过this.$route.query接收参数**
created () {
    const id = this.$route.query.id;
}

// **params通过this.$route.params来接收参数**
created () {
    const id = this.$route.params.id;
}

切换路由

```js
// query通过path切换路由
<router-link :to="{path: 'Detail', query: { id: 1 }}">前往Detail页面</router-link>
// params通过name切换路由
<router-link :to="{name: 'Detail', params: { id: 1 }}">前往Detail页面</router-link>
```

简单说**query相当于get请求**，页面跳转的时候，可以**在地址栏看到请求参数**，浏览器刷新页面不会消失，而**params相当于post请求**，**参数不会在地址栏中显示**，浏览器刷新页面后消失。

#### **Vue监听路由**

**方式一：监听$router**
复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：

```js
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
```

**方式二：唯一值 key 属性**
Vue 为你提供了一种方式来声明“这两个元素是完全独立的——不要复用它们”。只需添加一个具有唯一值的 key 属性即可

```js
<router-view :key="key"></router-view>

computed: {
    key() {
        return this.$route.name !== undefined?        this.$route.name +new Date(): this.$route +new Date()
    }
 }

```

使用computed属性和Date()可以保证每一次的key都是不同的，这样就可以如愿刷新数据了。

实践

1. 定义路由

      ```js
      {
          path: '/hse/problem/prMain/deal/:id',
          component: () => import('@/views/hse/Problem/PrDeal.vue'),
          meta: {
            keepAlive: true
          }
        },
      
      ```

2. 动态路由传参

```js
handleDeal(id){
          this.$router.push(
            {
              path: `/hse/problem/prMain/deal/${id}`,
              params: {id: id}
            }
          )
        }
```

3.监听路由

```js
          watch:{
           //监听路由
           $route(){
             if(this.$route.params!==null){
               this.paramId = this.$route.params.id;
             }
           },
            paramId(newVal,oldVal){
              if(newVal !== undefined && newVal !== null){
                  //初始化数据 
                  this.init();
              }
            }
          }
      ```

4.init方法初始化数据

   ```js
   methods:{
              //初始化数据
              init(){
                let vm = this;
                vm.$nextTick(()=>{
                  vm.$axios.get(`/hse/sim/prProblem/v1/get/${vm.dataId}`).then(reply=>{
                    vm.form = reply.data;
                  }).catch(e=>{
                    vm.$toast.fail(e);
                  })
                })
              }
   }
   
   ```

   实例

   ```js
   routes: [
     // 写法 (1)
     { //在路由中显示传递的参数   
    path: '/skipIn/:name/:age', //传递两个参数
    name: 'SkipIn',    //跳转页面的名字
    component: SkipIn  //注册组件
     },

  // 写法 (2)

  // { 
  //   path: '/skipIn',
  //   name: 'SkipIn',
  //   component: SkipIn
  // }
]
跳转之前的页面

<template>
  <div id="skip">
    <div class="Input">
   <el-form ref="form" :model="form" label-width="80px">
  <el-row :gutter="20">
      <el-col :span="6">
   <el-form-item label="姓名:">
     <el-input v-model="form.name" size="small"></el-input>
   </el-form-item>
      </el-col>
     <el-col :span="6">
     <el-form-item label="年龄:">
    <el-input v-model="form.age" size="small"></el-input>
     </el-form-item>
     </el-col>
      </el-row>
    </el-form>
  </div>
  <div class="footer">
  <el-button type="primary" size="small" class="skipBtn" @click="skipBtn">路由跳转</el-button>
  </div>
  </div>
</template>

<script>
  export default{
 name:'RouterSkip',
 data(){
   return{
  form:{
    name: "",
    age: ""
  }
   }
 },
 methods:{
   skipBtn: function(){
    // 写法 1.如果以这种方式传递参数，那么路由的写法要以(1)为准。
    // url的表现形式为(url中带参数)：http://localhost:8080/#/skipIn/小明/20
     this.$router.push({ path: "/skipIn/" + this.form.name + "/" + this.form.age});
```

```js
    // 写法 2. 如果以这种方式传递参数，那么路由的写法要以(2)就可以了。
    // url的表现形式为(url中不带参数)：http://localhost:8080/#/skipIn
 this.$router.push({ name: 'SkipIn', params:{name: this.form.name, age:this.form.age}});
 // 注：如果以2这种方式传递参数时，那么当刷新跳转后传参的页面，数据将不存在。

 // 写法 3. 如果以这种方式传递参数，那么路由的写法要以(2)就可以了。
    // url的表现形式为(url中带参数)：http://localhost:8080/#/skipIn?name=小明&age=20
 this.$router.push({ path: "/skipIn", query: {name: this.form.name, age:this.form.age}});
 // 注：如果以1、3这种方式传递参数时，刷新跳转后传参的页面，数据还会显示存在。
  }
},
}
</script>

```

跳转之后的页面

```js
<template>
  <div id="skipIn">
 <div class="header">
   <span class="info">{{msg}}</span>
   <el-button type="primary" size="small" class="backBtn" @click="back">
  返回<i class="iconfont icon-fanhui back"></i>
   </el-button>
 </div>
 <div class="information">{{params}}</div>
  </div>
</template>

<script>
  export default{
 name:'SkipIn',
 data(){
   return{
  msg: "路由传参页面",
  params: ""
   }
 },
 methods:{
   back: function(){
  this.$router.go(-1); //返回
   },
   showInfo: function(){
     // 对应写法 1. 2. 获取传过来的参数
    this.params = this.$route.params.name;

  // 对应写法 3. 获取传过来的参数
  this.params = this.$route.query.name;
   }
 },
 mounted(){
   this.showInfo();
 }
  }
</script>

<style lang="scss" scoped>
  #skipIn{
   width: 100%;
   height: 400px;
   background: red;
   .header{
    width: 100%;
    background: #eee;
    padding: 5px 20px;
    overflow: hidden;
    .info{
     font-size: 14px;
     line-height: 32px;
     }
    .backBtn{
     float: right;
     .back{
      font-size: 14px;
     }
    }
   }
   .information{
    font-size: 20px;
   }
  }
</style>


### `moment.js`

`moment.js`是一个日期时间的`js`类库。可以运行在浏览器及`node`环境下。

#### `momentjs`的常用操作

##### 解析  (创建一个`moment`对象) 

```javascript
let m = moment();   // 当前时刻let m = moment('2021-10-10');   // 通过字符串 解析为一个moment对象
let m = moment('10/12/2021', 'MM/DD/YYYY');
let m = moment.unix(时间秒数);  // 通过秒级时间戳，得到moment对象
```

##### 显示（将一个`moment`对象转成字符串）

```javascript
let m = moment();let s = m.format('YYYY年MM-DD HH:mm:ss');s ->  '2021年10-10 10:05:55'
```

安装：

npm install --save moment

配置`main.js`：

import moment from 'moment'Vue.prototype.moment = moment;

## `HTML新特性  Unit01`

### `moment.js`

`moment.js`是一个日期时间的`js`类库。可以运行在浏览器及`node`环境下。

#### `momentjs`的常用操作

##### 解析  (创建一个`moment`对象)

```javascript
let m = moment();   // 当前时刻
let m = moment('2021-10-10');   // 通过字符串 解析为一个moment对象
let m = moment('10/12/2021', 'MM/DD/YYYY');
let m = moment.unix(时间秒数);  // 通过秒级时间戳，得到moment对象
```

**显示（将一个`moment`对象转成字符串）**

```javascript
let m = moment();
let s = m.format('YYYY年MM-DD HH:mm:ss');
s ->  '2021年10-10 10:05:55'
```

安装：

```node
npm install --save moment
```

配置`main.js`：

```js
import moment from 'moment'
Vue.prototype.moment = moment;
```

### 实现注册业务

1. 完成注册页面中的表单验证。
2. 所有表单验证成功后，发送`post`请求。`/register`
3. 针对不同的响应，呈现不同的界面。

```js
    //表单验证
    checkForm() {
      if (this.checkName() && this.checkPwd() && this.checkRepwd()) {
        console.log("发送请求，执行注册业务");
        // 发送post请求，传递两个参数：username password
        this.axios
        // username password 要和后端接口名字对应（app.js）
          .post("/register", `username=${this.name}&&password=${this.pwd}`)
          .then((res) => {
            console.log(res);
            if(res.data.code==200){//注册成功
                this.$toast('注册成功');
                this.$router.push('/login');
            }else if(res.data.code==201){//用户已存在
                this.$toast('注册失败，用户已存在')
            }
          });
      }
    },
```

### 实现登录业务

1. 完成登录页面中的表单验证。
2. 所有表单验证成功后，发送`post`请求。`/login`
3. 针对不同的响应，呈现不同的界面。

```js
    //表单验证
    checkForm() {
      if (this.checkName() && this.checkPwd()) {
        console.log("发送请求，执行登录业务");
        // 发送post请求，传递两个参数：username password
        this.axios
          // username password 要和后端接口名字对应（app.js）
          .post("/login", `username=${this.name}&&password=${this.pwd}`)
          .then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              // 登录成功
              this.$toast("登录成功");
              // 提交mutations修改登录状态
              this.$store.commit("loginOK", this.name);

              //永久保存数据
              //把islogin和name存入sessionStorage
              sessionStorage.setItem("islogin", true);
              sessionStorage.setItem("name", this.name);

              this.$router.push("/"); //跳转到首页
            } else {
              // 登录失败
              this.$toast("账号或密码输入错误");
            }
          });
      }
    },
```

### `Vuex`

`Vue`中实现用户的状态管理。

项目中急需解决的问题：登录成功后，保存用户状态，在项目的其它页面中，访问登录用户的状态（已登录、未登录），从而在每个页面右上角提示欢迎消息。

我们可以把`Vuex`容器当做一个仓库，必要时可以向仓库中存储一些状态信息（`state`）。当应用程序需要获取这些状态时，访问`vuex`获取相应数据即可，从而达到所有组件页面共享状态数据的效果。

#### `Vuex`的基本使用

##### `state`

```javascript
state: {
    name: 'xx',
    age: 15,
    school: {
  name: 'qh',
        loc: 'bj'
    }
},
```

访问`state`中的数据：

```javascript
// this.$store 返回Vuex的Store对象    .state 返回state  .name
this.$store.state.name
this.$store.state.age
this.$store.state.school.name
```

访问state中的数据：

```js
mapstate ... computed();
```

##### `mutations`  定义函数用于修改`state`

```javascript
mutations: {
    loginOK(state, name){
        state.islogin = true;
        state.name = name;
    }
},
```

当希望执行`mutations`中的`loginOK`方法时：

```javascript
// commit()的作用就是要求vuex执行mutations中声明的方法
this.$store.commit('loginOK', 'zhangsan')
```

mutations：管理员

##### `actions`  定义函数用于异步修改`state`

```javascript
actions: {
    login(store, xxxx){
        axios.post('/login', 'xxx').then(res=>{            
            // 更新state中的数据   islogin   name            
            store.commit('loginOK', name)        })    }},
```

调用`actions`：

```javascript
this.$store.dispatch('login', {xxxx})
```

`vuex`的确可以在不刷新的情况下解决用户状态管理的问题。但是一旦刷新页面，将会重新加载`vue`实例，自然会销毁`vuex`中所有的状态信息。如果希望持久化存储一些状态数据，可以使用`HTML5`新特性中的`webStorage`来解决。

## `HTML5`新特性 -- `WebStorage`

`webStorage`提供了`localStorage`与`sessionStorage`用于在客户端持久化存储键值对数据。

`localStorage`提供了一个独立的数据存储区，这部分数据将会永久存储在客户端本地。

`sessionStorage`提供了一个独立的数据存储区，这部分数据只会在当前网站一次会话中有效。（不关闭浏览器即可）

## `WebStorage`的基本使用

获取`localStorage`与`sessionStorage`对象：

```javascript
let ls = window.localStorage;
let ss = window.sessionStorage;
let ls = localStoragelet ss = sessionStorage
```

如何存？

```javascript
ls.setItem(key, value);
ss.setItem(key, value);
```

如何取？

```javascript
let val = ls.getItem(key);
let val = ss.getItem(key);
```

如何删？

```javascript
ss.removeItem(key);
ls.removeItem(key);
```

如何清空？

```javascript
ss.clear();
ls.clear();
```

## `WebStorage`在数据存储时的一些限制

1. `WebStorage`只能存储键值对。

2. `WebStorage`存储的键值对数据只能是字符串。

   ```javascript
   sessionStorage.setItem('islogin', 'true');
   sessionStorage.setItem('name', 'zhangsan');// 存对象  
    let user = {name:'ls',    age:15};
   sessionStorage.setItem('user', JSON.stringify(user));// 读对象
    let str = sessionStorage.getItem('user');
    let u = JSON.parse(str); 
   ```

3. `WebStorage`存储有大小限制，但是在不同浏览器下，这个限制不同。以后在存储时不要存储大量数据。

## 基于`WebStorage`实现用户状态管理

1. 登录成功后，不仅需要把状态存入`vuex`，还需要存入`sessionStorage`。

   ```javascript
   this.axios.post(    '/login',     `username=${this.name}&password=${this.pwd}`)    .then(res=>{    console.log(res);    if(res.data.code==200){ // 登录成功        
       this.$toast('登录成功');        // 提交mutations修改登录状态        
       this.$store.commit('loginOK', this.name);        // 把islogin和name存入sessionStorage        
       sessionStorage.setItem('islogin', true);        
       sessionStorage.setItem('name', this.name);                   this.$router.push('/');
   }else{  // 登录失败        
           this.$toast('账号或密码输入错误')    }})
   ```

2. 当`vuex`初始化时（页面刷新就会导致`vuex`初始化），从`sessionStorage`中加载`islogin`与`name`：

   ```javascript
   state: {    islogin: sessionStorage.getItem('islogin'),      name: sessionStorage.getItem('name')},
   ```

3. 在页面中通过`vuex`中存储的`islogin`、`name`动态显示用户信息：

   ```html
   <div v-if="$store.state.islogin" slot="right">    欢迎：{{$store.state.name}}</div>
   ```

## `HTML5`新特性

### 音频与视频

`HTML5`提供了一些新标准可以使得浏览器播放音频、视频等媒体文件。早期如果想在网页中播放这些媒体文件，则需要安装`flash`。

### 音、视频标签

#### 音频标签

浏览器支持的音频文件格式有：`mp3`/`wav`/`ogg`

**音频标签的简写方式：**

```html
<audio controls src="../assets/xxx.mp3"></audio>
```

**音频标签的标准写法：** 为了浏览器兼容：

```html
<audio controls>    
    <source src="letitgo.mp3" type="audio/mpeg"/>    
    <source src="letitgo.wav" type="audio/wav"/>    
    <source src="letitgo.ogg" type="audio/ogg"/>    什么破浏览器，换一个把。。</audio>
```

##### 常用属性

```html
<audio controls    boolean类型  是否显示控制面板
       autoplay    boolean类型  是否资源加载完毕后自动播放       
       muted       boolean类型  是否静音
       loop        boolean类型  是否单曲循环
       preload     string类型  预加载音频资源的模式></audio>
```

`preload` 预加载音频资源的模式，可选值：

> `none` 不对音频进行任何预加载
>
> `auto`  尽可能的加载音频资源
>
> `metadata`   只加载元数据（媒体文件基本属性信息：总时长、格式 ...）

```js
    <audio controls
           loop
           muted
           preload="auto" 
           src="/assets/let_it_go.mp3"
           id="audio"></audio>
           <br><br>
           <button id="btn">点我读取音频属性</button>
           <script>
               document.getElementById("btn");
               btn.addEventListener('click',()=>{
                   let audio = document.getElementById('audio');
                   console.log(`音频的总时长:${audio.duration}`)
                   console.log(`音频的音量:${audio.volume}`)
               });
           </script>
```

#### 视频标签

视频标签支持：`MP4`   `ogg`   `webm`

**视频标签的简写方式：**

```html
<video controls src="../xxx.mp4"></video>
```

**视频标签的标准方式：**

```html
<video controls>    
    <source src="letitgo.mp4" type="video/mpeg"/>    
    <source src="letitgo.ogg" type="video/ogg"/>    
    <source src="letitgo.webm" type="video/webm"/>    什么破浏览器，换一个把。。</video>
```

`video`标签的常用属性，`video`标签都支持，除此之外，还支持以下属性：

```html
<video controls    boolean类型  是否显示控制面板
       autoplay    boolean类型  是否资源加载完毕后自动播放       
       muted       boolean类型  是否静音
       loop        boolean类型  是否单曲循环
       preload     string类型  预加载音频资源的模式
       poster      string类型  定义路径  指向视频未播放时的封面图片          width       播放器的宽度
       height      播放器的高度></video>
```

```js
    <style>
        video{
            width: 640px;
            height: 360px;
            background-color: black;
        }
    </style>
</head>
<body>
    <video controls src="assets/let_it_go.mp4"
    poster="assets/logo.jpg"></video>
</body>
```

### `audio`、`video`标签的`DOM`操作

```html
<audio id="audio" src="xxx/let.mp3" controls ></audio><script> let audio = document.getElementById('audio');               audio.duration;    // dom对象.属性
    audio.play();      // dom对象.方法()</script>
```

与媒体相关的`DOM`对象包含：

> 1. `HTMLAudioElement`    表达一个`audio`
> 2. `HTMLVideoElement`   表达一个`video`
> 3. `HTMLMediaElement`    是`HTMLAudioElement`与`HTMLVideoElement`接口的父接口。当中定义媒体`DOM`对象的基本操作。子接口可以在此基础上再扩展新功能。

查询`MDN`文档，以获取最完整的`API`接口。

#### `HTMLMideaElement`接口

##### `HTML5 Audio/Video`对象的属性

| 属性                                                         | 描述                                               |
| ------------------------------------------------------------ | -------------------------------------------------- |
| [autoplay](https://www.w3school.com.cn/tags/av_prop_autoplay.asp) | 设置或返回是否在加载完成后随即播放音频/视频        |
| [controls](https://www.w3school.com.cn/tags/av_prop_controls.asp) | 设置或返回音频/视频是否显示控件（比如播放/暂停等） |
| [currentTime](https://www.w3school.com.cn/tags/av_prop_currenttime.asp) | 设置或返回音频/视频中的当前播放位置（以秒计）      |
| [duration](https://www.w3school.com.cn/tags/av_prop_duration.asp) | 返回当前音频/视频的长度（以秒计）                  |
| [ended](https://www.w3school.com.cn/tags/av_prop_ended.asp)  | 返回音频/视频的播放是否已结束                      |
| [loop](https://www.w3school.com.cn/tags/av_prop_loop.asp)    | 设置或返回音频/视频是否应在结束时重新播放          |
| [muted](https://www.w3school.com.cn/tags/av_prop_muted.asp)  | 设置或返回音频/视频是否静音                        |
| [paused](https://www.w3school.com.cn/tags/av_prop_paused.asp) | 设置或返回音频/视频是否暂停                        |
| [playbackRate](https://www.w3school.com.cn/tags/av_prop_playbackrate.asp) | 设置或返回音频/视频播放的速度                      |
| [preload](https://www.w3school.com.cn/tags/av_prop_preload.asp) | 设置或返回音频/视频是否应该在页面加载后进行加载    |
| [src](https://www.w3school.com.cn/tags/av_prop_src.asp)      | 设置或返回音频/视频元素的当前来源                  |
| [volume](https://www.w3school.com.cn/tags/av_prop_volume.asp) | 设置或返回音频/视频的音量                          |

Request Payload:载客  不会传到服务器端

找一块全局存取的区域

登录成功后永久保存

AudioTrack:和音频轨道相关的数据列表

在Vant官网搭建Vant脚手架结构，使用轮播图组件

## `HTML新特性  Unit02`

**`HTMLMideaElement`接口**

**`HTML5 Audio/Video`对象的属性**

| 属性                                                         | 描述                                               |
| ------------------------------------------------------------ | -------------------------------------------------- |
| [autoplay](https://www.w3school.com.cn/tags/av_prop_autoplay.asp) | 设置或返回是否在加载完成后随即播放音频/视频        |
| [controls](https://www.w3school.com.cn/tags/av_prop_controls.asp) | 设置或返回音频/视频是否显示控件（比如播放/暂停等） |
| [currentTime](https://www.w3school.com.cn/tags/av_prop_currenttime.asp) | 设置或返回音频/视频中的当前播放位置（以秒计）      |
| [duration](https://www.w3school.com.cn/tags/av_prop_duration.asp) | 返回当前音频/视频的长度（以秒计）                  |
| [ended](https://www.w3school.com.cn/tags/av_prop_ended.asp)  | 返回音频/视频的播放是否已结束                      |
| [loop](https://www.w3school.com.cn/tags/av_prop_loop.asp)    | 设置或返回音频/视频是否应在结束时重新播放          |
| [muted](https://www.w3school.com.cn/tags/av_prop_muted.asp)  | 设置或返回音频/视频是否静音                        |
| [paused](https://www.w3school.com.cn/tags/av_prop_paused.asp) | 设置或返回音频/视频是否暂停                        |
| [playbackRate](https://www.w3school.com.cn/tags/av_prop_playbackrate.asp) | 设置或返回音频/视频播放的速度                      |
| [preload](https://www.w3school.com.cn/tags/av_prop_preload.asp) | 设置或返回音频/视频是否应该在页面加载后进行加载    |
| [src](https://www.w3school.com.cn/tags/av_prop_src.asp)      | 设置或返回音频/视频元素的当前来源                  |
| [volume](https://www.w3school.com.cn/tags/av_prop_volume.asp) | 设置或返回音频/视频的音量                          |

### `HTML5 Audio/Video` 方法

| 方法                                                         | 描述                    |
| ------------------------------------------------------------ | ----------------------- |
| [play()](https://www.w3school.com.cn/tags/av_met_play.asp)   | 开始播放音频/视频       |
| [pause()](https://www.w3school.com.cn/tags/av_met_pause.asp) | 暂停当前播放的音频/视频 |

#### `HTML5 Audio/Video` 事件

```html
let audio = document.getElementById('audio');
audio.addEventListener('abort', function(e){
    
});
```

| 事件                                                         | 描述                              |
| ------------------------------------------------------------ | --------------------------------- |
| abort                                                        | 当音频/视频的加载已放弃时         |
| [loadedmetadata](https://www.w3school.com.cn/tags/av_event_loadedmetadata.asp) | 当浏览器已加载音频/视频的元数据时 |
| pause                                                        | 当音频/视频已暂停时               |
| play                                                         | 当音频/视频已开始或不再暂停时     |
| ratechange                                                   | 当音频/视频的播放速度已更改时     |
| timeupdate                                                   | 当目前的播放位置已更改时          |
| volumechange                                                 | 当音量已更改时                    |
| waiting                                                      | 当视频由于需要缓冲下一帧而停止    |

#### 全屏`API`

`HTML5`提供了可以让任何`HTML`元素及其子元素占满整个屏幕的`API`：

```javascript
dom对象.requestFullscreen();  // 使dom对象全屏显示
```

退出全屏：

```javascript
document.exitFullscreen();
```

## `Canvas`  画布

### 什么是`Canvas`?

`Canvas`画布是可以用`Javascript`来绘制图形的`HTML`元素。 其语法结构：

```html
<canvas id="" 
        width="画布宽度（单位：像素）" 
        height="画布高度（单位：像素）">
</canvas>
```

`canvas`标签的`width`属性定义了画布宽度包含多少像素，`height`属性定义了画布高度包含多少像素。那么`canvas`绘制的图像分辨率就已经确定。这时有可能使用`css`对`canvas`进行压缩，但是这种压缩并不会改变图像分辨率，会对`canvas`图像进行整理缩放。

### `canvas`的应用场景

`canvas`多应用在：网页游戏、广告、数据可视化图表。

### `canvas`的使用

#### `Canvas`基础图像绘制

`canvas`基本绘制步骤如下：

```javascript
let cvs = document.getElementById('canvas');
let ctx = cvs.getContext(type);  // 返回用于绘制canvas的上下文对象
ctx.fillStyle = "red"
ctx.fillRect(0,0,100,100);
```

> `type`: 上下文类型
>
> 1. `'2d'`    将会返回用于绘制二维图像的上下文对象`CanvasRenderingContext2D`。
> 2. `'webgl'`   将会返回用于绘制三维图像的上下文对象`WebGLRenderingContext`。

**绘制填充：**

```javascript
ctx.fillStyle = "red"   // 设置填充样式
ctx.fillRect(10,10,100,100);   // 填充矩形(x, y, 宽, 高)
```

**绘制描边：**

```javascript
ctx.strokeStyle = "green"  // 设置描边样式
ctx.strokeRect(10, 10, 100, 100);   // 对矩形区域描边
```

**绘制文本：**

```javascript
ctx.font = '25px 微软雅黑'    
ctx.strokeText('文本内容', x, y); // 对文字描边  (x,y)绘制文本的位置
ctx.fillText('文本内容', x, y);   // 对文字填充  (x,y)绘制文本的位置
```

案例：绘制一个柱状图。

其它基础绘图`API`，详见`canvas`文档。

#### `Canvas`路径绘制

路径(`Path`)是将预先设定好的坐标点，按照顺序连接起来形成的图形。

#### `Canvas`动画绘制

底层将json对象转化为字符串

断点：但你刷新代码加载时，会卡在断点处不动

网易云音乐`API`文档：`https://neteasecloudmusicapi.vercel.app/#/`

## `HTML新特性  Unit03`

**`Canvas`路径绘制**

路径(`Path`)是将预先设定好的坐标点，按照顺序连接起来形成的图形。

***路径的绘制步骤***

> 1. 通过`ctx.beginPath()`开启一条新路径。
> 2. 通过`ctx.moveTo(x, y)`把画笔移动到指定位置。
> 3. 通过相关方法开始绘制路径（例如：`ctx.lineTo(x, y)`向终点连线）。
> 4. 最后可以通过`ctx.stroke()` 或  `ctx.fill()` 方法对该路径进行描边或填充。

案例：绘制一个三角形。

案例：实现移动版的你画我猜（画板）。

移动端触摸（`touch`）相关事件：

> 1. `touchstart`  手指开始触摸元素时触发
> 2. `touchmove`   触摸元素并移动时触发
> 3. `touchcancel`   当触摸事件被打断时触发
> 4. `touchend`   触摸结束时触发

**`HTML5`提供了一些绘制`canvas`路径的常用方法：**

`ctx.rect()`用于绘制矩形路径：

```javascript
//       左上角x,y   宽   高
ctx.rect(x, y, width, height);
```

`ctx.arc()`用于绘制圆弧路径：

```javascript
//  圆弧所在圆心点坐标x,y   半径    起始弧度值     结束弧度值
ctx.arc(x, y,          radius,  startangle,  endangle);
```

**`Canvas`动画绘制**

动画的本质即是每隔一段时间（非常快  `1/60`秒） 重绘`canvas`。每次绘制时，内容都会有些许变化，由于视觉残留现象，实现动画效果。

```javascript
// 每秒60遍不断的重绘canvas
window.setInterval(()=>{
    // 绘制canvas即可  每次绘制时界面需要有些许改变  呈现动画效果
}, 1000/60);
```

案例：基于`canvas`的动画实现弹幕。

> 1. 在`video`之上蒙一层`canvas`。
>
> 2. 添加`input`与`button`，实现发送弹幕功能。
>
>    1. 准备一个存储弹幕数据的列表：`dmlist`。
>
>    2. 当发送弹幕时，向`dmlist`中`push`一个弹幕对象，对象中不仅包含弹幕内容，还应该有初始化的弹幕坐标。
>
>       ```js
>       [
>           {
>            content:'我从未见过你这样的..',
>            x: 600, 
>               y: 随机 （0~360）
>           }
>       ]
>       ```
>
>    3. 页面加载完毕后，启动**一个**定时器，每`1000/60`毫秒执行回调方法，每次执行回调方法，需要遍历`dmlist`里的每个弹幕对象，将`x`坐标减小，重新绘制`canvas`即可实现平移动画效果。

## 动画卡顿的核心原因：掉帧

`window.setInterval()`底层机制并不能保证每秒60帧。

```js
window.setInteval(function(){
    复杂计算、绘制UI
}, 1000/60)
```

这种方式并不能保证每秒60帧，所以推荐使用以下`API`来完成动画的绘制：

`window.requestAnimationFrame()`

```javascript
window.requestAnimationFrame(()=>{
    // 计算逻辑、绘制UI
})
```

`requestAnimationFrame(callback)`方法用于请求绘制动画帧（向浏览器发送绘制请求）。若代码执行了这一行，则将会通知浏览器在下次浏览器刷新页面时（浏览器刷新页面时操作系统及屏幕硬件设备的行为，它能保证每秒`60`帧的刷新率）自动执行回调方法。

基于`requestAnimationFrame`实现动画的代码基本结构：

```javascript
function draw(){
    // 执行计算，绘制UI
    xxxxxxx
    xxxxxxx
    // 重新调用window.requestAnimationFrame();
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
```

## 地理定位

### 定位基础与原理

> 1. `IP`定位    不准
> 2. 运营商基站定位   不太准
> 3. `GPS`卫星定位（北斗）    准的狠

### 地理定位的实现

地理定位`API`允许用户向`web`应用程序提供客户端的位置，这个操作需要用户授权。获取地理定义的相关代码如下：

```javascript
let gl = window.navigator.geolocation;
let success = function(res){ console.log(res) };// 定位成功后执行
let err = function(err){ console.log(err) }; // 定位失败后执行
let option = {};
gl.getCurrentPosition(success, error, option);
```

从`chrome50`开始，地理定位只能适用于域名状态下的`https`协议的网站，所以`http://localhost:5500`虽然已经获取了权限，但是浏览器不信任，没有返回任何信息。

如果定位成功，`getCurrentPosition`方法将会在`success`回调函数中返回定位对象，格式如下：

```
coords: Coordinates    accuracy: 4645               精准度    altitude: 0                  海拔高度    altitudeAccuracy: null       海拔精度    heading: NaN                 ...    latitude: 39.9878            纬度    longitude: 116.37            经度    speed: NaN                   运动速度timestamp: 1628498856819
```

### 接入第三方位置服务平台  --  百度地图、高德地图

一旦接入了这些第三方平台，可以方便的在自己网页中嵌入地图控件。引入这些第三方位置服务的`js`库后，还可以方便的操作这些地图。显示地图内容、在地图中添加大头针，还可以通过访问这些第三方位置服务接口，实现公交线路的查询、驾车线路的查询、地址检索、逆地址解析、 周边场所检索等等功能。

#### 接入高德地图

1. 进入高德开放平台：`https://lbs.amap.com/`

   ![1628501652191](C:\Users\web\AppData\Roaming\Typora\typora-user-images\1628501652191.png)

2. 完成准备工作：

   1. 注册账号并申请Key
      1. 注册个人开发者账号。
      2. 填写注册表单信息。
      3. 完善开发者信息。注册完成后，返回首页，直接登录。
      4. 点击控制台 -- 应用管理  --  我的应用  -- 创建新应用。
      5. 申请秘钥，选择（`web`端`JSAPI`）
   2. 准备页面

## `HTML新特性  Unit04`

***接入第三方位置服务平台  --  百度地图、高德地图***

一旦接入了这些第三方平台，可以方便的在自己网页中嵌入地图控件。引入这些第三方位置服务的`js`库后，还可以方便的操作这些地图。显示地图内容、在地图中添加大头针，还可以通过访问这些第三方位置服务接口，实现公交线路的查询、驾车线路的查询、地址检索、逆地址解析、 周边场所检索等等功能。

***接入高德地图***

1. 进入高德开放平台：`https://lbs.amap.com/`

   ![1628501652191](C:\Users\web\AppData\Roaming\Typora\typora-user-images\1628501652191.png)

2. 完成准备工作：

   1. 注册账号并申请Key

      1. 注册个人开发者账号。
      2. 填写注册表单信息。
      3. 完善开发者信息。注册完成后，返回首页，直接登录。
      4. 点击控制台 -- 应用管理  --  我的应用  -- 创建新应用。
      5. 申请秘钥，选择（`web`端`JSAPI`）

   2. 准备页面

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=bbdf0f05ab0c87c01ba0be6b18ca530a"></script> 
        <style>
          #container {width:640px; height: 360px; }  
        </style>
      </head>
      <body>
        <div id="container"></div>
        <script>
          var map = new AMap.Map('container', {
              zoom:11,//级别
              center: [116.397428, 39.90923],//中心点坐标
              viewMode:'3D'//使用3D视图
          });
        </script>
      </body>
      </html>
      ```

### 高德地图常见使用场景

#### 为地图添加覆盖物

```javascript
// 为地图添加marker
let marker = new AMap.Marker({
    position: new AMap.LngLat(lng, lat),
    title: '当前位置'
});
map.add(marker);

// 同时引入工具条插件，比例尺插件和鹰眼插件
AMap.plugin([
    'AMap.ToolBar',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.MapType',
    'AMap.Geolocation',
], function(){
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar());
    // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
    map.addControl(new AMap.Scale({
        offset: new AMap.Pixel(60, 30)
    }));
    // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
    map.addControl(new AMap.OverView({isOpen:true}));
    // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    map.addControl(new AMap.MapType());
    // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
    map.addControl(new AMap.Geolocation());
});    
```

#### 访问高德地图提供的第三方服务

```javascript
// 同时引入工具条插件，比例尺插件和鹰眼插件
AMap.plugin([
    'AMap.PlaceSearch',
    'AMap.Geocoder'
], function(){
    // 逆地址查询，查询当前坐标的文字描述信息
    let geocoder = new AMap.Geocoder();
    let lnglat = new AMap.LngLat(lng, lat);
    geocoder.getAddress(lnglat, function(status, res){
        console.log(`getAddress() status: ${status}`);
        console.log(res);
        console.log(res.regeocode.formattedAddress);
    });

    // 搜索北京市的酒店
    let placeSearch = new AMap.PlaceSearch({
        city: '北京市',
        pageSize: 30,
        map: map
    });
    placeSearch.search('酒店', function(status, res){
        console.log(`status: ${status}`);
        console.log(res);
    });
});    
```

## `HTML5` 拖放处理

拖放是将对象从一个地方拖拽到另一个位置的操作。任何`HTML`元素都可以进行拖放操作，但需要为该元素添加属性：`draggable="true"`。一旦包含这个属性，当前元素就将支持拖放操作。

```html
<p draggable="true">sdgfhljsdfg hds</p>
```

### `DragEvent`拖拽相关事件

`DragEvent`指拖拽事件，其继承自`MouseEvent`和`Event`接口。

`DragEvent`涉及到的事件有7种。这7种事件分别针对两大类事件源：源对象、目标对象。源对象指正在拖拽的元素。目标对象指的是释放时的容器。

**针对源对象涉及到的事件：**

`dragstart`   开始拖拽时触发

`drag`     拖拽过程中触发（不断触发）

`dragend`   拖拽结束时触发

**针对目标对象涉及到的事件：**

`dragenter`   当源对象被拖拽进入目标对象时触发

`dragover`     当拖拽源对象在目标对象上方悬停时触发（持续触发）

`dragleave`   当源对象被拖拽离开目标对象时触发

`drop`   当拖拽源对象在目标对象中释放时触发

> 注意：
>
> 在`dragover`事件中需要加入：`event.preventDefault()`，阻止浏览器默认事件的产生，否则不会触发目标对象的`drop`事件。
>
> `firefox`浏览器针对图像与`a`链接有默认的拖拽事件处理（打开新页面加载新资源）。需要阻止该默认事件的产生，所以需要在`drop`事件处理函数中：
>
> ```javascript
> event.preventDefault();
> event.stopPropagation();
> ```

试想：拖拽元素到`d2`并释放后，在`d2`中追加子元素，将拖拽的元素放进去。如果希望实现这个需求，则需要在`drop`时，获取当前拖拽的内容，调用`DOM`方法将源对象添加到目标对象。

那么实现这个流程，就必须在`dragstart`时将当前拖拽的源对象数据（标签名、标签内容等）存起来，等到`drop`时，拿到这些数据，执行添加元素追加操作。

#### 拖拽过程中的事件传输

`HTML5`规定再一次拖拽过程中如果需要进行相关数据的存储及传输，需要借助于`DataTransfer`对象来完成。

```javascript
p.ondragstart = function(event){
    let dt = event.dataTransfer; 
    dt.setData('tagname', 'p');
    dt.setData('innerHTML', '奥运xXXXX')
}
```

```javascript
d2.ondrop = function(event){
    let dt = event.dataTransfer;
    let name = dt.getData('tagname');
    let html = dt.getData('innerHTML');
}
```

### 基于拖拽操作实现文件上传

准备工作：

准备好一个页面，提供一个div，用于接收拖拽的文件。一旦文件拖拽到该目标对象释放时，将会触发`drop`，可以在`drop`时，获取文件的信息。

```javascript
let files = event.dataTransfer.files;
```

> 注意：不能上传文件夹。

#### 文件上传的流程与协议规范

***文件上传流程***

> 1. 客户端选择需要上传的文件，点击上传，开始建立连接，准备上传。
> 2. 服务端接收连接请求，完成连接的建立，接收上传的文件（遵守协议）。
> 3. 服务端把接收到的文件数据，存入服务器文件系统。
> 4. 保存完毕后即上传成功，之后可以提供一个`url`地址用于访问该资源。

***协议规范***

> 1. 要求客户端提交文件的请求方式必须是`POST`。
> 2. 发请求时必须携带消息头：`Content-Type: multipart/form-data`。
> 3. 客户端将本地文件在请求`body`部分中以数据流的方式传输给服务端。
> 4. 服务端接收客户端传来的字节流数据，边接收边保存到某个文件夹下。

#### 客户端发送上传文件请求

1. 基于表单上传文件（跳转新页面） `<form action=''>`

   ```html
   <form action="/upload" 
         method="POST" 
         enctype="multipart/form-data">
       <input type="file" name="uploadFile">
       <input type="text" name="username">
       <input type="password" name="pwd">
       <input type="submit" value="提交">
   </form>
   ```

2. 基于`ajax`上传文件（异步请求，不刷新页面）

   ```javascript
   let fd = new FormData();   // 用于封装请求参数
   fd.append('name', 'zhangsan');  //  name=zhangsan
   fd.append('pwd', '123456');// name=zhangsan&pwd=123456
   let files = event.dataTransfer.files;
   for (let i=0; i<files.length; i++){
       let f = files[i];
    fd.append('uploadFile', f); // uploadFile=f对象
   }
   axios.post('/upload', fd);
   ```

**已经上传的文件，如何访问？**

选择的图片一旦上传成功将会重命名后出现在项目`/upload`文件夹中。 那么如果想要再次访问该图片，则必须把`upload`文件夹设置为静态托管目录。还要知道刚刚上传的文件的文件名才行。

```javascript
server.use(express.static('upload'))
```

一旦把`upload`目录设置为了静态资源托管目录，那么该目录中的文件将可以直接通过请求资源路径访问。例如：`/upload`目录下有一个图片：`a.jpg`，那么就可以通过以下链接直接访问：

```url
http://localhost:3000/a.jpg
http://localhost:3000/08ce9564-d6d9-4251-b069-522b5c6768dc.jpg
```

***上传头像流程***

> 1. 客户端发送`axios`请求，选择图片，上传文件。
> 2. 服务端将头像改名后存储在`upload`目录下，还需要把图片的访问地址存入数据库。
> 3. 上传成功后，下次登录时，可以获取到数据库中存储的新的头像路径，直接通过该路径访问上次上传的头像即可。
> 4. 上传的头像需要重命名，避免互相覆盖。
> 注意：若上传文件操作是跨域上传，则尽管使用`ajax`，依然会刷新页面。
>
> 当前的上传流程是：
>
> 访问:`http://127.0.0.1:5500/03_upload.html`
>
> 在该网页中希望发送`ajax`请求上传文件：`http://localhost:3000/upload`
>
> 这种跨域请求，若在服务端处理后可以正常上传，但是会刷新页面。
>
> 若不希望刷新页面，则需要访问：
>
> `http://localhost:3000/03_upload.html`看到上传网页才可以。

## `HTML新特性  Unit05`

## `WebSocket`

`websocket`可以实现客户端与服务端之间的数据实时通信。（长连接）

### 网络通信过程中的长连接与短连接

**短连接：** 客户端发起连接请求，请求建立连接，服务端接受请求，完成连接的创建，而后客户端通过该连接发送数据，服务端处理请求，返回响应，最后连接断开。这种通讯模式称为短连接。

特点：这种通讯模式将会及时的释放服务端资源，所以可以为更多的客户端提供服务。但是也有缺点：**无状态。**（每个请求都是独立的，无法保存客户端状态）

**长连接：**客户端发起连接请求，请求建立连接，服务端接受请求，完成连接的创建，而后客户端通过该连接发送数据，服务端处理请求，返回响应；服务端也可以主动的向客户端发送数据，客户端接收。这个过程中持续连接不断开。这种通讯模式称为长连接。

特点：支持客户端与服务端之间的实时通信。服务端可以随时随地向客户端发消息。缺点就是浪费服务端资源。

### 什么是`websocket`？

`websocket`是一种在单`TCP`连接上进行的支持全双工通信（通信的过程中允许两个方向上同时完成数据传输）的一种协议。是一款长连接协议。

_如何在网页中建立`websocket`连接？_

*服务端接收接收该连接？*

*客户端与服务端如何通过该`websocket`连接进行通信呢？*

### `socket.io`

`https://socketio.bootcss.com/`

`socket.io`是一个为浏览器与服务端之间提供实时的、双向的、基于事件通信的网络通信库。底层封装了`websocket`协议。提供了一些简单的`API`接口，方便的建立连接，收发消息，抹平了一些技术细节与浏览器兼容性问题。

**建立连接的伪代码：**

`socket`(套接字)就是一个`javascript`对象，对象的本质就是封装了属性与方法。`socket`中就封装了用于与对方通信时所需要的资源。

```javascript
// 客户端 导入socket.io后
let socket = io('ws://localhost:3000/');

// 服务端 安装socket.io后
let socketio = require('socket.io');
socketio.on('connection', (socket)=>{
    连接建立成功后执行
});
```

### 建立`websocket`连接

#### 服务端代码

> 1. 新建项目（`socketserver`文件夹）
>
>    安装`express`。安装`socket.io`。
>
>    ```shell
>    cd socketserver
>    npm init   // 一路回车  生成package.json
>    npm install --save express   // 安装express
>    npm install --save socket.io   // 安装socket.io
>    ```
>
> 2. 基于`socket.io`提供的`API`，接收客户端的连接请求，建立`websocket`连接。
>
>    ```javascript
>    // index.js   服务端核心js文件
>    const express = require('express');
>    const server = express();
>    // 调用server.get()  server.post() 注册路由 接收请求
>             
>    // 配置websocket
>    // 获取express底层所使用的http模块
>    const http = require('http').createServer(server);
>    // websocket需要把通信相关路由注册到该底层http模块
>    const socketio = require('socket.io')(http);
>    socketio.on('connection', (socket)=>{
>      console.log('有客户端进来了：'+socket.id)
>    });
>             
>    // 设置静态资源托管目录 public
>    server.use(express.static('public'));
>             
>    // 启动服务 不能再使用server.listen  而应该调用http.listen
>    // 因为socketio将通信相关路由注册到了http模块，而非express
>    // 所以http才可以接收到websocket请求，express则只用于处理http服务
>    http.listen(3000, function(){
>      console.log('server is running...')
>    });
>    ```

#### 客户端代码

为了避免跨域问题，设置静态资源托管目录`public`，把网页写在`public`中即可。

```html
<script src="socket.io.js"></script>
<script>
btnConn.addEventListener('click', ()=>{
    let socket = io('ws://localhost:3000/');
    console.log(socket);
});
</script>
```

### 客户端与服务端之间进行通信

#### 客户端发消息给服务端

客户端：

```javascript
let socket = io('ws://localhost:3000/');
// 发消息    （emit 翻译为触发）
socket.emit('textmsg', '你瞅啥？！');  
```

服务端：

```javascript
socketio.on('connection', (socket)=>{
    // 监听客户端发过来的消息
    socket.on('textmsg', (data)=>{
        console.log(data)
    });
});
```

#### 服务端发消息给客户端

服务端代码：

```javascript
socket.on('textmsg', (data)=>{
    console.log(data)
    // 回复
    socket.emit("textmsg", '瞅你咋地~~');
});
```

客户端代码：

```javascript
let socket = io('ws://localhost:3000/');
socket.on('textmsg', (data)=>{
    alert('xxxx');
});
```

#### 服务端向所有客户端广播消息

```javascript
socketio.on('connection', (socket)=>{    socket.emit();   // 针对当前客户端发消息    socketio.emit('textmsg', '兄弟们！');   // 向所有客户端都发消息});
```

### 实现群聊天室

需求如下：

1. 在聊天界面中建立`websocket`连接。

2. 当客户端点击发送按钮时，使用已经建立好的连接向服务端发送消息。服务端接收该消息后，将这个消息内容向所有已经连接的客户端再发一遍即可。

3. 每个客户端需要监听服务端发回来的消息，控制台打印。

4. 消息上屏。把接收到的消息显示在聊天记录区。

5. 优化业务细节。

6. 实时更新聊天室的人数。

   1. 在服务端实时维护一个表达在线人数的变量。`count`
   2. 一旦有客户端连接，`count++`
   3. 一旦有客户端断开连接，`count--`
   4. 无论`count`是递增了还是递减了，只要`count`有变化，就需要给所有客户端发消息`emit('count_updated', count)`。
   5. 客户端监听并接收该消息类型，更新页面中的在线人数即可。

7. 实现登录业务。

   1. 在`index.html`点击登录时，需要获取昵称（文本框里输入）与头像（随机生成文件名）。带着这两个参数一起跳转到`chart.html`

      ```javascript
      // window.location.href = "chart.html"location = "chart.html?name=xxx&avatar=xx.jpg"
      ```

   2. 在`chart.html`中获取`name`与`avatar`，更新用户信息。

   3. 发消息时，不能只发送内容，而是需要发送一个对象：

      `{content:'xxxx', name:'xx', avatar:'xxx.jpg'}`

   4. 服务端接收后将原封不动的把对象发给所有客户端。一旦客户端接收到返回回来的对象，需要解析对象的属性，上屏。

```js
http://121.4.247.63:3000/index.html
```

## `vuecli`项目上线视频

```js
https://pan.baidu.com/s/1BqWxsbs00qLkfCJ6E4peEQ密码：7lln
```

## `HTML新特性  Unit0`6

### `WebSocket` 群聊完成了，私聊该如何解决？

每当客户端与服务端建立了一个`websocket`连接，客户端将会得到一个`socket`对象，服务端也会得到一个`socket`对象。这些`socket`对象用于与对方进行数据通信。所以服务端保存了与每个客户端通信所需要的的`socket`对象。

所以如何实现私聊？

当**亮亮**发消息时，不仅需要发送消息内容，还需要发送对方的`ID`（也可以是`name`，总之得传递对方的唯一标识符）。服务端接收到该消息后，需要通过`ID`（也可以是`name`）找到与对方建立起来的`socket`连接对象，直接调用`socket.emit()`方法发消息即可。

使用`Vant`组件库。

## `WebWorker`

`WebWorker`为`Javascript`提供了多线程编程的开发环境。可以把一些耗时操作放入`worker`线程异步执行，而后通知主线程绘制`UI`界面。

`Javascript`采用的是单线程模型，也就是说绝大多数操作是在主线程中完成的。

```html
<script>
 let i = 90;
    for (i=0;i<100000000; i++)xxxx
    if()xxx
    axios.get().then(res=>{
        xxxxx
    })
</script>
```

主线程有一个非常重要的工作，按照显示器的刷新频率（60帧/秒），不断绘制`UI`。所以主线程我们也称为是`UI`线程。在`UI`线程中不允许出现耗时代码，因为这将阻塞`UI`线程的执行，会影响页面的刷新率，导致页面假死。所以如果在页面中有耗时代码，最好要把他们放到子线程中，与`UI`线程并发执行，这样不会影响主线程的`UI`绘制。

案例：基于斐波那契数列 模拟页面假死状态。

```js
1  1  2  3  5   8   13   21   34  55 。。。
```

### 使用`worker`

1. 新建`worker.js`文件，把需要耗时执行的代码写在这里。

   ```javascript
   // worker.js
   function fb(n){
     return n<3 ? 1 : fb(n-1) + fb(n-2);
   }
   console.log(fb(45));
   ```

2. 在页面中（主线程）创建`worker`线程（指定`worker.js`），`worker.js`中的代码将会自动（在子线程）执行。

   ```html
   <script>
       btn1.addEventListener('click', function(){
           // 调用worker，异步执行耗时代码 
           // 这样才不会阻塞主线程
           // 创建Worker对象，将自动执行worker.js中的代码
           let worker = new Worker('worker.js');
       })
   </script>
   ```

注意：以后创建`Worker`时一定要注意，**`worker`是否有可能重复创建。**尽量避免这种情况，因为`worker`若创建过多，将会影响`UI`线程获取`CPU`时间，导致页面卡顿。

### `Worker`与主线程之间的通信

实现业务：当页面加载完毕后，创建`worker`对象（此时并不进行计算）。当点击按钮时，希望`worker`线程执行耗时代码，计算结果，并且把结果返回给主线程。

#### 主线程向`worker`线程发消息

主线程：发送

```javascript
let mworker = new Worker(....);
mworker.postMessage('消息内容');
```

`worker`线程：接收

```javascript
// worker.js
onmessage = (event)=>{
    // 通过event获取发过来的消息内容
    // 执行后续业务  计算
}
```

#### `worker`线程向主线程发消息

`worker`发消息：

```javascript
//worker.js
postMessage('消息内容');
```

主线程接收消息：

```javascript
let mworker = new Worker(....);
mworker.onmessage = function(event){
    // event中就保存了worker线程传回来的数据
}
```

## `SVG`

### 什么是`SVG`？

`SVG（Scalable Vector Graphics）`可伸缩的矢量图形。是一种图像格式。这种文件的本质实际上是一篇符合`XML`规范的文档。浏览器可以根据文档中的属性定义，在页面中动态绘制这张图片，以此来实现伸缩不失真的特点。

### 第一个`svg`图像

案例：编写一个`svg`图片，在图片中心画个圆，填充成红色。在网页中显示。

```html
<!-- circle.svg -->
<svg xmlns="http://www.w3.org/2000/svg"      width="200" height="200">  
    <circle cx="100" cy="100" r="90" stroke="black"        strokeWidth="2" fill="red" /></svg>
```

#### `SVG`的使用方法

1.直接设置在图片的`src`属性：

```html
<img src="a.svg">
```

2.基于`css`设置为背景图片：

```html
<div style="background-image: url(a.svg)"></div>
```

3.直接在网页中使用`svg`标签绘制图像：

```html
<body>    <svg>     <circle></circle>        .....    </svg></body>
```

#### 其它常用`SVG`的元素

见文档。

`https://www.w3school.com.cn/svg/svg_path.asp`

#### `Canvas`与`SVG`的区别？

下表列出了 `canvas` 与 `SVG` 之间的一些不同之处。

##### `Canvas`

- 依赖分辨率
- 不支持事件处理器
- 弱的文本渲染能力
- 能够以 `.png` 或 `.jpg` 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

##### SVG

- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 `DOM` 的应用都不快）
- 不适合游戏应用

## `ECharts`

`ECharts`是百度开元的数据可视化工具库，基于`Javascript`，可以在浏览器（支持`PC`与移动端）中显示美观的图表。

### `HelloWorld` 示例

1. 下载`echarts`。
2. 编写一个新的`html`页面，引入`echarts`。
3. 绘制`echarts`图表。
   1. 初始化`echarts`。
   2. 调用`echarts.setOption();`设置图表样式。

## `HTML新特性  Unit07`

### ECharts

`ECharts`是百度开元的数据可视化工具库，基于`Javascript`，可以在浏览器（支持`PC`与移动端）中显示美观的图表。

### HelloWorld 示例

1. 下载`echarts`。
2. 编写一个新的`html`页面，引入`echarts`。
3. 绘制`echarts`图表。
   1. 初始化`echarts`。
   2. 调用`echarts.setOption();`设置图表样式。

### 基于`Echarts`对北京二手房数据完成数据可视化

#### 需求1

搭建页面布局：`#d1`  `#d2`   `#d3`    分别在左上、右、坐下。

#### 需求2

**折线图**可视化显示北京主城区二手房房源均价走势（`price.json`）

1. 浏览器发送`axios`请求，访问服务端的`price.json`数据。
2. 一旦获取到这组数据，则需要把这组数据整理成`echarts`所需要的数据格式。
3. 初始化`echarts`，设置`option`。

#### 需求3

**柱状图**可视化显示主城区二手房户型数量分布。

#### 需求4

**饼状图**可视化显示最受关注的8套房源的信息。

### `HTTP`协议的状态管理

由于`HTTP`协议的请求是无状态的（短连接模式一旦拿到响应连接断开），这样就会导致一个浏览器会话中发送的多次请求，服务端都会当做是独立的请求来进行处理。

解决`http` 状态的问题需要使用`cookie`或`session`机制。

#### `Cookie`机制 （将数据存到客户端）

1. 客户端第一次发送请求，服务端接收请求。处理请求。
2. 服务端返回响应数据的同时，向客户端添加一个`cookie`信息。数据内容可以自定义。
3. 浏览器接收响应后，把`cookie`信息处理并保存下来。
4. 浏览器发送第二次请求时，将自动携带当前网站以前存过的`cookie`数据，一起发送请求，服务端接收后，就可以获取以前交互时涉及到的数据，实现`http`的状态管理。

#### `Session`机制 （客户端存`id`， 服务端存敏感数据）

1. 客户端发送第一次请求，服务端接收请求，处理请求，将需要保存的数据，存入服务端`Session`对象中，并且分配一个`SID`与之一一对应。

   ```test
   xuming-sid-123556 : {name:xuming, age:17, count:10}
   ```

   返回响应数据时，以`cookie`的方式将`SID`传给客户端。

2. 客户端接收响应，按照服务端要求，将`SID:xuming-sid-123556`存入客户端浏览器。

3. 下次发请求时，浏览器将会自动携带`SID:xuming-sid-123556`一起发送请求，服务端接收请求后，获取`SID`，通过`SID`找到以前存过的数据，拿到具体信息，执行后续业务。

#### 验证码流程

## 微信小程序 `Unit01`

下载最新版开发工具（稳定版）：

<https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html>

## 微信公众平台

微信公众平台由腾讯提供，基于腾讯的微信服务器，为广大企业、组织或个人提供用户管理或咨询服务的平台。

**服务号：**

为企业或组织提供的进行用户管理和服务的平台。类似中国移动。

**订阅号：**

为企业、组织或个人提供的进行用户管理和资讯发布的平台。是一种全新的消息传播方式。类似`CSDN`。

**小程序：**

为企业、组织或个人提供的可以达到与原生`app`功能相同的应用程序解决方案。（在微信内部运行）。其优点在于“小”。用完就走。

## 小程序的接入流程

进入微信公众平台注册开发者账号：`https://mp.weixin.qq.com`。

流程如下：

1. 首页点击注册。
2. 填写注册信息：新邮箱、密码等。
3. 激活邮箱。
4. 填写主体信息：个人、姓名、身份证号等。
5. 验证成功后进入小程序后台管理页面。

### 创建小程序项目

安装小程序开发工具`IDE`。

管理扫码登录，点击新建小程序项目。

填写项目的基本信息。

熟悉开发工具的各个组件布局和环节。

### 小程序项目的文件结构

小程序项目中包含的文件类型有：

1. `json`文件     （配置文件）

   `app.json`    全局配置文件

   `pages.json`  （**统称**，例如：`index.json`   `logs.json`） 定义单页面的配置参数。

2. `wxml`文件

   模板文件（类似于`HTML`，但是此处不能使用任何`HTML`标签）

3. `wxss`文件   样式文件（类似`css`，语法与`css`极其相似）

   `app.wxss`  用于定义全局样式

   `pages.wxss`   用于定义单页的样式

4. `js`文件  脚本文件（写代码的地方）

   **`app.js`  定义小程序的入口脚本文件**

   当启动小程序时，微信小程序框架将会加载并执行`app.js`，初始化`App`对象。执行`App`中定义的`onLaunch`生命周期方法。 `app.js`仅执行这一次，所以`App`对象有且仅有一个，全局单例。

   **`pages.js`   定义小程序单页面的入口脚本文件**

   当启动小程序中的一个页面时，微信小程序框架将会加载并执行目标页面对应的`js`脚本文件，初始化`Page`对象。`Page`对象中声明了当前页面所定义的相关资源：`data`、`methods`等。还定义了一些页面相关的生命周期方法。

   一个`Page`对象对应了一个页面实例。小程序中包含多少个页面实例，就意味着拥有多少个`Page`对象。

#### `app.json`

参考文档：<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html>

`app.json`用于对小程序进行全局配置。后缀为`.json`的文件一定要符合`json`的语法格式。要求比较严格：

> 1. `json`文件中不能写注释。
> 2. 字符串必须在双引号之间。`json`对象的属性名也必须在双引号之间。
> 3. 数组或对象的最后一个成员后不能再加逗号`“,”`。
> 4. `json`中不存在`undefined`这种类型。

##### `pages`配置项

`pages`配置项用于定义当前小程序中包含哪些页面（`index`、`logs`）。

```js
"pages":[
 "pages/test/test",
    "pages/index/index",
    "pages/logs/logs"
],
```

新建配置项`"pages/test/test"`，将在`pages`目录下新建`test`目录，然后再其中创建”四件套“。 若配置项写在数组的第一个元素，则会被当做首页显示。

##### `window`配置项

`window`配置项用于定义小程序导航栏、标题、窗口的内容或样式（全局生效）。

```json
"window":{
    "enablePullDownRefresh": true,
    "backgroundTextStyle":"dark",
    "backgroundColor": "#999",

    "navigationBarBackgroundColor": "#f00",
    "navigationBarTitleText": "学子影院",
    "navigationBarTextStyle":"white"
},
```

##### `tabbar`配置项

`tabbar`用于定义底部选项卡，格式如下：

```json
"tabBar": {
    "color": "#333",
    "selectedColor": "#f00",
    "list": [{
        "text": "电影",
        "pagePath": "pages/index/index",
        "iconPath": "/images/index_disable.png",
        "selectedIconPath": "/images/index_enable.png"
    },{
        "text": "影院",
        "pagePath": "pages/theatre/theatre",
        "iconPath": "/images/theatre_disable.png",
        "selectedIconPath": "/images/theatre_enable.png"
    },{
        "text": "我的",
        "pagePath": "pages/me/me",
        "iconPath": "/images/me_disable.png",
        "selectedIconPath": "/images/me_enable.png"
    }]
},
```

##### `style`配置项

微信客户端 7.0 开始，UI 界面进行了大改版。小程序也进行了基础组件的样式升级。`app.json` 中配置 `"style": "v2"`可表明启用新版的组件样式。

本次改动涉及的组件有 `button icon radio checkbox switch slider`。可前往小程序示例进行体验。

##### `sitemapLocation`配置项

`sitemapLocation`配置项用于指定`sitemap.json`配置文件的位置。

微信现已开放小程序内搜索，开发者可以通过 `sitemap.json` 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。

`sitemap.json`

该文件用于指定微信官方通用爬虫的检索规则。（指明什么样的页面需要被官方爬虫所收录，什么样的页面不希望被收录。）

```json
"rules": [{
    "action": "disallow",
    "page": "pages/me/me"
  },{
    "action": "allow",
    "page": "*"
}]
```

详细配置见文档：<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html>

默认情况下，开发工具将会在控制台输出警告来提示收录状态。若不希望看到提示，则需要在`project.config.json`配置文件中添加如下配置：

```json
{
    "settings": {
     "checkSiteMap": false
 }
}
```

#### `app.wxss`

用于定义组件的全局样式。

#### `app.js`

***定义小程序的入口脚本文件***

当启动小程序时，微信小程序框架将会加载并执行`app.js`，初始化`App`对象。执行`App`中定义的`onLaunch`生命周期方法。 `app.js`文件仅执行这一次，所以`App`对象有且仅有一个，全局单例。

问题：

`app.js`文件什么时候执行？**当小程序初始化启动时**

`app.js`文件中的代码执行几次？**一次   `App`对象是单例的，全局唯一。**

## 微信小程序 `Unit02`

## 小程序组件库

### 组件概述

小程序中`wxml`中由各式各样的组件构成。这些组件都是微信自定义的，原生`html`标签不能使用。

> **关于组件属性**
>
> 1. 对于`boolean`类型的属性，无论设置`true`还是设置`false`，小程序都会当做普通字符串来进行解释，都会被解释为`true`。 除非用空字符串`""`（有点野）。推荐使用`{{}}`来设置`boolean`类型属性的属性值。
>
>    ```js
>    hover-stop-propagation="{{false}}"
>    ```
>
> 2. 小程序的组件属性名在使用时既遵守驼峰命名法，也遵守短横线命名法，两种属性名的设置都将会生效。

### <view 组件

`view`组件为视图容器组件，其基本语法：

```html
<view hover-class="点击后当前view应用的样式类的类名"
      hover-start-time="点击view后多久开始出现点击状态"
      hover-stay-time="点击状态停留多久"
      hover-stop-propagation="">
    ...
</view>
```

案例：新建页面：`pages/testing/view/view`，测试`view`的使用。

### <image 组件

`image`组件为图片组件，支持`GIF`、`JPG`、`PNG`、`SVG`、`WEBP`等图像格式。其语法结构：

```html
<image src="图片路径"
        lazy-load="是否采用图片懒加载"
        mode="图像的裁切及缩放模式"
        show-menu-by-longpress="是否在长摁图片时底部弹出操作菜单">
</image>
```

案例：`pages/testing/image/image`。

###  <swiper 组件

`swiper`组件为轮播图组件，其语法为：

```html
<swiper 
  indicator-dots="{{true}}"
  indicator-active-color="#0f0"
  indicator-color="#0f05"
  autoplay="{{true}}"
  interval="3000"
  duration="1000"
  circular="{{true}}"
  vertical="{{true}}"
  easing-function="default">
 <swiper-item>
     <image src="....."></image>
    </swiper-item>
    ......
</swiper>
```

案例：`pages/testing/swiper/swiper`。测试轮播图。

#### `wxss`提供的新像素单位：`rpx`（响应式像素）

使用`rpx`作为尺寸单位，可以根据屏幕的分辨率动态设置组件的宽高（自适应）。完成屏幕的适配。它的核心原理是：

1. 规定所有的设备的屏幕宽度都是`750rpx`。所以根据这个规定可以计算`rpx`与`px`之间的换算关系。
2. `1rpx`在不同的设备下将会转换成不同的`px`。

| 设备           | `rpx`换算`px` (屏幕宽度/750) | `px`换算`rpx` (750/屏幕宽度) |
| -------------- | ---------------------------- | ---------------------------- |
| `iPhone5`      | `1rpx = 0.42px`              | `1px = 2.34rpx`              |
| `iPhone6`      | `1rpx = 0.5px`               | `1px = 2rpx`                 |
| `iPhone6 Plus` | `1rpx = 0.552px`             | `1px = 1.81rpx`              |

### <text 组件

`text`组件为文本组件，其语法：

```html
<text
  user-select="{{true}}"
  space="emsp"
  decode="{{true}}">文本</text>
```

### <navigator 组件

`navigator`组件属于页面链接组件，用于控制页面之间的跳转。其语法结构：

```html
<navigator url="当前小程序内的页面地址" open-type="跳转方式">
    链接内容
</navigator>
```

`open-type`：可选项包括：

> 1. `navigate` ，默认的跳转方式。当使用这种方式跳转页面时，将会保留当前页面对象，创建目标页面对象，跳转过去。也称为保留跳转。这种方式无法跳转到`tabbar`页面，因为一般`tabbar`页面对象都会常驻内存不销毁，也就没有必要新建该页面跳过去了。若希望跳转到`tabbar`页面，可以使用`switchtab`的方式进行跳转。
> 2. `navigateBack`， 返回上级页面。这种操作将会销毁当前页面从而显示上一页。可以配合`delta`属性实现上`n`页的返回。
> 3. `switchTab`， 字面理解：切换到某个选项卡页面。这种方式可以跳转到带有`tabbar`的页面。一旦这么做，将会销毁所有非`tabbar`页面。
> 4. `redirect`，字面理解：重定向。这种跳转方式将会**关闭当前页面**，重定向到非`tabbar`的目标页面。当然也会**重新创建目标页**。
> 5. `reLaunch`，字面理解：**重新启动小程序**`app`并**打开某个页面**。 这种跳转方式将会**关闭所有页面**，然后重启小程序**跳转到指定页面**。

案例：新建3个页面：`testing/a/a`  `testing/b/b`  `testing/c/c`。

### scroll-view 组件

`scroll-view`组件用于实现滚动的视图容器（支持水平、垂直滚动）。其语法结构：

```html
<scroll-view class="scroll"
  scroll-y="{{false}}"
  scroll-x="{{true}}"
  enable-flex="{{true}}"
  enhanced="{{true}}"
  showScrollbar="{{false}}">
 scroll-x="是否允许水平方向滚动"
    scroll-y="是否允许垂直方向滚动">
 子组件
</scroll-view>
```

若子组件的宽高超出了`scroll-view`容器的宽高，则将会在水平、垂直方向上自动出现滚动条。

### input 组件

`input`组件为输入框组件，其语法结构为：

```html
<input type="输入框的类型"
        placeholder="占位字符串内容"
        value="文本框的值"
        password="是否为密码框"
        maxlength="最大长度"
        focus="设置是否让当前输入框自动获取焦点（将会自动弹出键盘）"
       
        bindinput="doInput"  绑定事件的事件处理函数的函数名字
        >
</input>
```

`type`的可选值：

> 1. `text`  文本输入键盘
> 2. `number`  数字输入键盘
> 3. `idcard`  身份证键盘
> 4. `digit`  带小数点的键盘

`input`组件中提供了一些事件处理（`eventhandle`）属性。这些属性用于为当前组件绑定事件。在属性值中填写事件处理函数名即可（**注意：严禁出现小括号**）。

```html
<input  type="text"  placeholder="账号"  bindinput="doInput"/>
```

一旦设置了`doInput`，则需要在`page.js`中声明`doInput`方法用于处理该事件。`doInput`方法内部也会传入`event`事件对象，用于封装该事件相关的参数信息。

```javascript
/** 处理bindinput事件 */doInput(event){    // 获取文本框中输入的内容    console.log(event.detail.value);},
```

#### 小程序表单组件的双向数据绑定
