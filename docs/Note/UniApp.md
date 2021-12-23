# UniApp

下载资源： <https://www.dcloud.io/hbuilderx.html>

- UniApp:  是在微信小程序的基础上, 结合了 Vue 语法创建的 前端开发框架
  - 特色: 开发一次, 可以自动导出到 App, Web, 各类小程序
  - 优势: 成本低
- 三大框架
  - WEB开发的发展史
    - html css js... 最原始
    - jQuery: 简化了DOM操作的方式 -- 多页应用
    - Angular  2009年,  Google公司收购  -- 大而全,工程化,脚手架概念
    - React 2013年, Facebook  -- 目前在 南方地区(杭州 上海 深圳..) 招聘量大
    - Vue 2014年,  借鉴了 Angular 和 React 的一款轻量级开发框架
      - 更容易入门

## UniApp01

<https://uniapp.dcloud.io/>

目前WEB开发遇到的困境: `多端泛滥` 的时代

- WEB: 浏览器
- App: 手机端/pad端
- 各类小程序: 微信小程序, 支付宝小程序, QQ小程序, 快应用....

如果要开发一款软件, 就必须适配以上所有的端, 由于互相并不是一套体系, 则必须针对不同的端 开发不同的软件 --- 人员成本  和 时间成本 特别高

---

需求: 对产品的质量要求不高 只要 成本低即可!'

UniApp:  理念就是 开发一次 自动导出适配所有的 端

- 优势: 成本低, 质量也还可以
- 缺点: 属于新兴的技术, 本身带有很多BUG 需要官方完善,  官方的处理速度不高.

### 注册账号

如果有认证要求, 则**需要认证**!

<https://account.dcloud.net.cn/oauth2>#

- 同时注册人数过多, 服务器会报错.   稍后再注册
- 打开 HBuilder 之后,  点击左下角的**未登录**, 登录之后 可能会提示没有验证, 则点击提示框中的地址 进行邮箱验证即可!

### 新建项目

![1630030995801](/Users/duiba/Downloads/Day01 3/assets/1630030995801.png)

![1630031181196](/Users/duiba/Downloads/Day01 3/assets/1630031181196.png)

如何把项目包 在 HBuilder工具中打开?

- 必须直接拖拽 项目目录 到 工具中 打开

- 不允许 拖拽 例如 `Day01` 这种文件夹到工具中!

  ![1630031461531](/Users/duiba/Downloads/Day01 3/assets/1630031461531.png)

### 插件

项目要运行, 必须安装对应的插件

![1630031644747](/Users/duiba/Downloads/Day01 3/assets/1630031644747.png)

安装内置浏览器:

![1630031797198](/Users/duiba/Downloads/Day01 3/assets/1630031797198.png)

插件市场:  有更多更丰富

![1630031846956](/Users/duiba/Downloads/Day01 3/assets/1630031846956.png)

必装插件:  支持 sass 编译

![1630031948306](/Users/duiba/Downloads/Day01 3/assets/1630031948306.png)

点击此按钮,  需要登录.   然后按照提示操作即可!

![1630032012907](/Users/duiba/Downloads/Day01 3/assets/1630032012907.png)

Prettier

![1630032150237](/Users/duiba/Downloads/Day01 3/assets/1630032150237.png)

#### 报错

`WriteOnly! error: 系统找不到指定的路径`

HBuilder 所在的盘符没有操作权限.

- 做法1:  把HBuilder 放到其他的硬盘下 再次尝试
- 做法2: 推荐 重装系统 (因为校区电脑的系统可能不完整)

#### Prettier的配置

![1630032481162](/Users/duiba/Downloads/Day01 3/assets/1630032481162.png)

![1630032552485](/Users/duiba/Downloads/Day01 3/assets/1630032552485.png)

## 项目的运行

UniApp可以运行在3种端:

- H5 : 网页
- App: 手机端
  - 夜神模拟器: <https://www.yeshen.com/>
- 小程序:
  - 微信开发者工具: 稳定版
  - <https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html>

![1630032848394](/Users/duiba/Downloads/Day01 3/assets/1630032848394.png)

![1630032919722](/Users/duiba/Downloads/Day01 3/assets/1630032919722.png)

### 微信

打开服务端口:

![1630034450032](/Users/duiba/Downloads/Day01 3/assets/1630034450032.png)

把 微信开发者工具的 路径, 配置到 HBuilder中

- HBuilder -> `运行` -> `运行到小程序模拟器`->`运行设置`

- 可以利用 右键 开发者工具的图标,  选择 `打开文件位置` 来找地址

  ![1630034658967](/Users/duiba/Downloads/Day01 3/assets/1630034658967.png)

- 运行

  ![1630034879417](/Users/duiba/Downloads/Day01 3/assets/1630034879417.png)

- 自带一个报错,  需要**等待官方**解决

  ![1630035106547](/Users/duiba/Downloads/Day01 3/assets/1630035106547.png)

### 手机端运行

支持 `真机` 和 `模拟器` -- 仅限Android

- 模拟器: 由于`夜神模拟器`对于电脑硬件要求较高, 可能有的电脑无法安装, 有的显卡不支持...

  > 不耽误后期的学习, 此处仅是做个体验

  ![1630035551958](/Users/duiba/Downloads/Day01 3/assets/1630035551958.png)

- 配置: 夜神模拟器自带一个 adb 工具,  此工具用于连接 其它软件和模拟器

  把 adb 工具的地址 设定到 HBuilder

  ![1630035695361](/Users/duiba/Downloads/Day01 3/assets/1630035695361.png)

  通过 浏览按钮, 找到  adb 工具路径

  ![1630035815923](/Users/duiba/Downloads/Day01 3/assets/1630035815923.png)

- 如果显示 `未检测到手机或模拟器`  则尝试 **重启模拟器**;![1630035959508](/Users/duiba/Downloads/Day01 3/assets/1630035959508.png)

- 关注软件的最下方, 在检测到之后, 会有提示.  持续几秒之后  提示会消失

  ![1630036055348](/Users/duiba/Downloads/Day01 3/assets/1630036055348.png)

  ![1630036111592](/Users/duiba/Downloads/Day01 3/assets/1630036111592.png)

### 真机运行

仅限 android 手机

- 先把 之前的 adb 的设置路径删除, 默认 HBuilder 自带了adb工具, 适配真机调试

  ![1630036331734](/Users/duiba/Downloads/Day01 3/assets/1630036331734.png)

- 手机需要开启 `开发者模式`(百度: OPPO 开发者模式)

- 在 **开发者选项** (在设置里有)中, 打开 `usb调试` `允许USB传输数据`(不一定有)

- 连接数据线 和 电脑:  弹出框选: `总是允许` 和 与`数据传输`相关的选项

- 等待 HBuilder 检测到手机, 然后运行即可!

> 三种运行方式, 只要 H5 网页版本可用即可!
>
>

## Hello World

默认模板:  最基本的项目包

![1630044274787](/Users/duiba/Downloads/Day01 3/assets/1630044274787.png)

目录结构

![1630044807885](/Users/duiba/Downloads/Day01 3/assets/1630044807885.png)

### 关于官方组件

uniapp官方提供了一套组件库, 必须使用这套组件书写的代码 才能编译成 H5, 小程序, APP 不同的平台.

```vue
<template>
 <!-- 只有使用官方提供的组件库, 书写的代码 才能编译到不同的平台上 -->
 <!-- 错误: div span 不能用, 他们只能适配 H5 平台 -->
 <!-- uniapp为了程序员过渡比较方便, 直接采用  微信小程序的 组件库 -->
 <view>
  <!-- vue base: 生成基本结构的代码块 -->
  <text>Hello World!</text>
  <!-- 美化代码格式:  ctrl+k   或者  右键 重排代码格式 -->
 </view>
</template>

<script>
export default {};
</script>

<style scoped></style>

```

### 自定义组件

要求:

- 组件必须放在固定命名: `components` 目录下, `右键demo02->新建->目录`

  ![1630045784450](/Users/duiba/Downloads/Day01 3/assets/1630045784450.png)

- easycom机制

  > 官方为了自定义组件使用时更加方便, 要求 组件必须放在 components 目录下
  >
  > 结构必须是 : `components/组件名/组件名.vue`
  >
  > 组件一定要放在 **同名目录** 下
  >
  > > 达成以上条件, 则组件会`自动`全局注册;  在使用时的体验 与 官方组件相同

  ![1630045993493](/Users/duiba/Downloads/Day01 3/assets/1630045993493.png)

## 路由系统

UniApp 采用了 微信小程序的 路由系统

> 路由的跳转方式有两种:
>
> - 栈式跳转:  进入新页面 返回前一页
>
> - 标签式导航:  底部的标签栏
>
>   ![1630053653017](/Users/duiba/Downloads/Day01 3/assets/1630053653017.png)

```vue
<template>
 <!-- 只有使用官方提供的组件库, 书写的代码 才能编译到不同的平台上 -->
 <!-- 错误: div span 不能用, 他们只能适配 H5 平台 -->
 <!-- uniapp为了程序员过渡比较方便, 直接采用  微信小程序的 组件库 -->
 <view>
  <!-- vue base: 生成基本结构的代码块 -->
  <text>Hello World!</text>
  <!-- 美化代码格式:  ctrl+k   或者  右键 重排代码格式 -->
  <my-com></my-com>
  <my-com></my-com>
  <my-com></my-com>
  <!-- 练习: 完成 my-hello 组件 -->
  <my-hello></my-hello>
  <my-hello></my-hello>
  <my-hello></my-hello>
  <!-- 页面跳转有两种方式:  组件式 和 编程式 -->
  <navigator url="../detail/detail">详情页</navigator>

  <!-- 编程 -->
  <!-- 快捷键:  alt + /  可以弹出代码提示 -->
  <button type="primary" size="mini" @click="gotoDetail">
   跳转到详情页
  </button>
  <!-- 传参:  路径?参数=值&参数=值 -->
  <navigator url="../news/news?nid=2&title=ddd">ddd</navigator>
  <navigator url="../news/news?nid=1&title=kkk">kkk</navigator>
  <!-- 事件 -->
  <button @click="showNews" size="mini" type="warn">yyy</button>
 </view>
</template>

<script>
export default {
 // Vue methods: 可以出现更多提示
 methods: {
  showNews() {
   uni.navigateTo({
    url: '../news/news?nid=3&title=yyy'
   });
  },
  gotoDetail() {
   // UniApp提供了api文档
   // uNavigateTo: 自动提示
   uni.navigateTo({
    url: '../detail/detail'
   });
  }
 }
};
</script>

<style scoped></style>

```

```vue
<template>
 <view style="flex-direction: column; display: flex;">
  <text>新闻页面</text>
  <text>title:{{ options.title }}</text>
  <text>id:{{ options.nid }}</text>
 </view>
</template>

<script>
export default {
 // data 属性中的数据 才能在 template 中使用
 data() {
  return {
   options: null
  };
 },
 methods: {},
 // onLoad: 接收路由传参
 onLoad(options) {
  // clog
  console.log('options:', options);
  // 外部传参 保存到 本地的 options 中, 才能在本地使用
  this.options = options;
 }
};
</script>

<style></style>

```

## 生命周期

UniApp 的生命周期 是  小程序  和 Vue 的复合体:

- 应用的周期

  <https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f>

- 页面的周期

  <https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f>

- 组件的周期

  <https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e7%bb%84%e4%bb%b6%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f>

## 面试推荐

微信公众号: `JS每日一题`

> 面试造火箭, 工作拧螺丝
>
> 面试题题占比:  50% 应该会   30%模棱两可 20%你应该不会

整个课程:

uniapp  6

React   8

Angular  5

Vue复习  2

# UniApp02

> 讲师联系方式 VX: **18800108022**
>
> 本周内容:  UniApp
>
> - 周1 ~ 周3 : 基础知识
> - 周4~周5: 制作一个UniApp项目

## 复习

什么是UniApp?

- 当前的困境:  目前处于 **多端泛滥** 的时代, 软件的平台: `App`, `web`, `各类小程序`, `快应用`...,   此时要开发一个软件能够运行在所有的客户端,  就需要招聘不同的人员 对应开发程序:  ---------`成本高 耗时`
- UniApp特色:  只要开发一次 , 就可以导出到所有的端.
- UniApp缺点:  这是一门新兴的技术, 所以目前不够完善, 需要官方提供更多的支持

## Uni-UI

UniApp采用了 微信小程序的 组件库;

同时 UniApp 提供了一套自己的组件库, 可以为开发者进行更好的服务!

新建:

![image-20210830092135640](C:\Users\jiyx\AppData\Roaming\Typora\typora-user-images\image-20210830092135640.png)

## 抓取网站接口

刷新操作, 可以检测所有发送的请求

![image-20210830103703385](C:\Users\jiyx\AppData\Roaming\Typora\typora-user-images\image-20210830103703385.png)

<https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?v=35>

> 把上方接口地址 放浏览器测试, 是否能获取数据:
>
> 如果提示 无法连接, 应该是被  校区网管mis 屏蔽了...  找网管接触屏蔽

## 带有网络操作的页面制作步骤

- 发请求: (在哪发, 怎么发)
- 拿数据: (观察后台, 是否得到了数据)
- 存本地: (往哪存? 存哪些? 只有本地的数据 才能在本地使用)
- 做展示

## 角标

```vue
<template>
 <view>
  <!-- vue base: 快速生成基本结构 -->
  <!-- ctrl + k : 格式化代码 -->
  <text>Hello Uni-ui</text>
  <!-- uBadge -->
  <!-- 快捷键:  alt + /  可以弹出代码提示 -->
  <uni-badge text="18" type="success"></uni-badge>
  <uni-badge text="18" type="success" size="small"></uni-badge>
  <!-- inverted: 无底色 -->
  <!-- 问题:  true 和 "true" 一样么?  不一样,  "true" 是字符串-->
  <!-- 在HTML中不存在数据类型概念, 所有的值都是字符串 -->
  <!-- 在 JS 语言中, 引入了类型概念 -->
  <!-- :属性名="js代码" -->
  <uni-badge text="18" type="success" :inverted="true"></uni-badge>
   <!-- rpx: 相对像素, 是为了能够适配不同的设备宽度而生的,  
			1rpx = 设备实际像素宽度 / 750
			 -->
   <view style="height: 20rpx;"></view>
   <!-- absolute: 定位到哪里 -->
   <uni-badge :isDot="true" text="99" type="error" absolute="rightTop">
    <button type="default" size="mini">点击</button>
   </uni-badge>
   
   <uni-badge :is-dot="true" text="99" type="error" absolute="rightTop">
    <button type="default" size="mini">点击</button>
   </uni-badge>
   
   <!-- 如果属性的值为真,  可以直接省略值 -->
   <uni-badge is-dot text="99" type="error" absolute="rightTop">
    <button type="default" size="mini">点击</button>
   </uni-badge>
  
 </view>
</template>

<script>
export default {};
</script>

<style scoped></style>

```

## 卡片

```vue
<template>
 <view>
  <!-- 卡片组件: uCard -->
  <uni-card
   title="标题文字"
   thumbnail="/static/logo.png"
   extra="额外信息"
   note="Tips"
   isShadow
   isFull
   mode="title"
  >
   内容主体，可自定义内容及样式
  </uni-card>
  
  <!-- 插槽: slot,  可以在组件中 <slot name="header"> 指定一个插槽
		使用时:
		- 旧版本: <template slot='header'>
		- 新版本: <template v-slot:header>
		-->
  <!-- note: 此属性必须书写一些内容, 底部才会显示 -->
  <uni-card title="自定义插槽" note="-">
   <template v-slot:header>
    <view>
     <text>我来组成头部</text>
    </view>
   </template>
   <!-- 自定义脚部插槽 : 官方的 v-slot 代码提示是错的, 不要用!-->
   <template v-slot:footer>
    <view style="display: flex; justify-content: space-around;">
     <view>喜欢</view>
     <view>评论</view>
     <view>分享</view>
    </view>
   </template>
  </uni-card>
 </view>
</template>

<script>
export default {};
</script>

<style scoped></style>

```

## 网络操作

```vue
<template>
 <view>
  <!-- 数组 搭配 for循环做展示 -->
  <uni-card
   v-for="(item, index) in hero"
   :title="item.title"
   :extra="item.name"
   isShadow
   :thumbnail="heroIcon(item.alias)"
   note="Tips"
   
  >
   <image
    style="width: 100rpx; height: 100rpx;"
    :src="heroIcon(item.alias)"
    mode=""
   ></image>
   <view>金币: {{ item.goldPrice }}</view>
   <view>点券: {{ item.couponPrice }}</view>

   <template v-slot:footer>
    <view>
     <button type="primary" size="mini" @click="playAudio(item.banAudio)">
      ban
     </button>
     <button type="warn" size="mini" @click="playAudio(item.selectAudio)">pick</button>
    </view>
   </template>
  </uni-card>
 </view>
</template>

<script>
export default {
 // 发请求 -> 拿数据 -> 存本地 -> 做展示
 data() {
  return {
   // data中的数据是 共享的
   audio : uni.createInnerAudioContext(),
   hero: [] // 默认值:   数组[]   对象null
  };
 },
 mounted() {
  this.getData();
 },
 // vue methods: 可以快速生成
 methods: {
  // 播放指定音频
  playAudio(url) {
   // 来自于官方的 api 文档,  音频部分
   // 如果在此处创建播放器, 则每次点击都会创建新的, 会导致音频重叠播放
   // const audio = uni.createInnerAudioContext(); //创建播放器
   this.audio.src = url;//指定播放文件路径
   this.audio.play(); //开始播放
  },
  //heroIcon
  heroIcon(alias) {
   return `https://game.gtimg.cn/images/lol/act/img/champion/${alias}.png`;
  },
  getData() {
   const url =
    'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?v=35';

   // uRequest: 快速提示
   uni.request({
    // 语法糖:  url: url  简化 url
    url, //请求地址
    method: 'GET', //请求方式: GET POST
    data: {}, //请求的参数
    success: res => {
     // =>:  有专业的编程字体, 带有连字功能, 把某些符号变得不一样
     console.log(res); //clog
     this.hero = res.data.hero;
    }, //成功后的回调
    fail: err => {
     console.log(err);
    }, // 失败后的回调
    complete: () => {} // 请求完毕后, 不管成功失败 都会回调
   });
  }
 }
};
</script>

<style scoped></style>

```

## 折叠栏

```vue
<template>
 <view>
  <!-- 折叠栏: uCollapse -->
  <!-- accordion: 手风琴效果 -->
  <!-- v-model: 必须绑定变量, 代表当前开启的是哪一项 -->
  <uni-collapse accordion v-model="open_name">
   <!-- name: 用于规定唯一标识, 搭配 v-model 使用 -->
   <uni-collapse-item
    name="item1"
    :showAnimation="false"
    thumb="/static/logo.png"
    title="阶段1"
   >
    <view style="padding: 10rpx; background-color: #ccc;">
     <view>Node.js</view>
     <view>Express</view>
     <view>MySQL</view>
     <view>HTML</view>
    </view>
   </uni-collapse-item>
   <!-- open 指定哪一项默认为展开状态,  与 v-model 的写法同作用 -->
   <uni-collapse-item name="item2" thumb="/static/logo.png" title="阶段2">
    <view style="padding: 10rpx; background-color: #6ac;">
     <view>CSS</view>
     <view>Bootstrap</view>
    </view>
   </uni-collapse-item>
  </uni-collapse>
 </view>
</template>

<script>
export default {
 data() {
  return {
   open_name: 'item1' // 当前开启的栏目名:  item1
  };
 }
};
</script>

<style scoped></style>

```

## 通告栏

```vue
<template>
 <view>
  <!-- 通告栏: uNoticeBar -->
  <uni-notice-bar
   showClose
   showIcon
   :speed="50"
   scrollable
   single
   :text="msg"
  ></uni-notice-bar>
 </view>
</template>

<script>
export default {
 data() {
  return {
   msg:
    'uni-ui是 DCloud 提供的一个跨端ui库, 它是基于vue组件的, flex布局的, 无dom的跨全端ui框架'
  };
 }
};
</script>

<style scoped></style>

```

## 步骤条

```vue
<template>
 <view>
  <!-- 步骤条: uSteps -->
  <uni-steps :options="options" :active="active"></uni-steps>
  <!-- % : 取余;    5 % 5 = 0,  5 % 4 = 1;   取余数 -->
  <button type="default" size="mini" @click="active = (active + 1)%5">
   下一步
  </button>
  <uni-steps
   :options="options"
   :active="active"
   direction="column"
  ></uni-steps>
 </view>
</template>

<script>
export default {
 data() {
  return {
   active: 0,
   options: [
    { title: '阶段1', desc: '亮亮' },
    { title: '阶段2', desc: '亚楠' },
    { title: '阶段3', desc: '东东' },
    { title: '阶段4', desc: '铭铭' },
    { title: '阶段5', desc: '小新' }
   ]
  };
 }
};
</script>

<style scoped></style>

```

## 宫格布局

```vue
<template>
 <view>
  <!-- 宫格布局: uGrid -->
  <!-- 关于事件的写法问题
				@change="clickItem"
				@change="clickItem()"   由于()中没有参数, 触发时没有事件参数
				@change="clickItem($event)" 
		 -->
  <uni-grid
   :column="3"
   @change="clickItem"
   borderColor="purple"
   :showBorder="false"
   :square="false"
   :highlight="false"
  >
   <uni-grid-item :index="index" v-for="(item, index) in 20">
    {{ item }}
   </uni-grid-item>
  </uni-grid>
 </view>
</template>

<script>
export default {
 methods: {
  clickItem(e) {
   console.log(e); //clog
  }
 }
};
</script>

<style scoped></style>

```

## 加载更多 下拉刷新

```vue
<template>
 <!-- 每个cell内边距 5rpx , 会导致中间间隔为10rpx, 两侧是5rpx;
	 所以利用父元素给两侧多加5rpx-->
 <view style="padding: 5rpx;">
  <uni-grid
   :column="2"
   :square="false"
   :showBorder="false"
   :highlight="false"
  >
   <!-- uniapp 不强制写 key -->
   <!-- key 是为了防止 数组有变化: 删除/ 组内新增元素, 会导致已有的DOM出现重绘 -->
   <uni-grid-item v-for="(item, index) in result">
    <!-- 官方提供的组件, 尽量不要添加样式, 有很多是固定无法修改 -->
    <view class="cell">
     <image :src="item.image" mode=""></image>
     <view>
      <view>{{ item.title }}</view>
      <view>{{ item.passtime }}</view>
     </view>
    </view>
   </uni-grid-item>
  </uni-grid>

  <!-- 加载更多: uLoadMore -->
  <!-- <uni-load-more status="loading"></uni-load-more> -->
  <uni-load-more :status="status"></uni-load-more>
  <!-- <uni-load-more status="noMore"></uni-load-more> -->

  <!-- 回到顶部 -->
  <button
   v-show="showGoTopBtn"
   @click="goTop"
   type="primary"
   size="mini"
   class="btn-gotop"
  >
   回到顶部
  </button>
 </view>
</template>

<script>
export default {
 data() {
  return {
   status: 'more', // 加载更多的状态
   url: 'https://api.apiopen.top/getWangYiNews',
   result: [],
   page: 1, // 记录当前页
   pageCount: 10, //假设最大页数 10
   showGoTopBtn: false // 关联 回到顶部 按钮 显示与否
  };
 },
 mounted() {
  // 发请求的代码不要在生命周期里面写;
  // 周期函数 是重要的时间节点, 不负责具体业务代码, 只负责安排任务即可!
  this.getData();
 },
 onReachBottom() {
  // 触底事件
  this.getMore();
 },
 onPageScroll(e) {
  //监听页面滚动
  console.log(e);
  const scrollTop = e.scrollTop;
  //  滚动距离  > 2000 显示按钮
  // this.showGoTopBtn = scrollTop > 2000 ? true : false;

  this.showGoTopBtn = scrollTop > 2000;
 },
 onPullDownRefresh() {
  // 监听页面下拉刷新
  // 前提: 必须 在 pages.json 文件中, 为当前页面开启下拉刷新功能
  this.doRefresh()
 },
 methods: {
  doRefresh(){
   uni.request({
    url: this.url,
    data: {page:1},
    success: res => {
     console.log(res);
     // 新数据替代旧数据
     this.result = res.data.result;
     // 当前页 还原回 第一页
     this.page = 1;
     // 结束下拉刷新动画
     uni.stopPullDownRefresh();
    },
   });
  },
  goTop() {
   // 回到页面最上方
   uni.pageScrollTo({
    scrollTop: 0, // 距离顶部的偏移量
    duration: 200 // 动画时长, 单位 ms 毫秒
   });
  },
  getMore() {
   console.log('当前页:', this.page);
   // 如果已经是最大页数, 则不应该做任何操作, 并且显示 没有更多数据
   if (this.page == this.pageCount) {
    this.status = 'noMore';
    return; //终止执行
   }

   // 如果已经是加载中, 则不做任何事:  为了防止低速模式下, 用户反复在底部来回拖动, 导致多次请求同一页数据的情况
   if (this.status == 'loading') return;

   // alert('加载更多...')
   this.status = 'loading'; //加载中

   // 获取下一页数据:
   // 此处需要记录当前页, 当前页有两个方式记录:  服务器 或 前端
   uni.request({
    url: this.url,
    method: 'GET',
    data: { page: this.page + 1 }, //请求参数
    success: res => {
     console.log(res);
     // 把新的数据  合并到 旧数据的结尾
     // ... :  ES6的数组解构语法
     this.result = [...this.result, ...res.data.result];
     this.page++; //更新页数, +1
     // 请求完毕后, 把加载操作更新为  等待状态
     this.status = 'more';
    }
   });
  },
  getData() {
   // ureq
   uni.request({
    url: this.url,
    success: res => {
     console.log(res);
     this.result = res.data.result;
    }
   });
  }
 }
};
</script>

<!-- uniapp 支持 sass 语法 -->
<style scoped lang="scss">
.btn-gotop {
 position: fixed;
 bottom: 30rpx;
 right: 20rpx;
 opacity: 0.6;
}

.cell {
 padding: 5rpx;
 font-size: 20rpx;

 image {
  width: 100%;
  height: 220rpx;
  border-radius: 8rpx;
 }

 // >: 子代选择器
 > view {
  padding: 5rpx;

  > view:first-child {
   font-size: 1.1em;
   // 两行
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
   overflow: hidden;
  }

  > view:last-child {
   color: #888;
  }
 }
}
</style>

```

## 作业

接口地址: <http://101.96.128.94:9999/data/product/list.php?pno=1>

- 返回值中有最大页数 和 当前页

- 返回值中的图片地址为相对路径, 需要人为拼接前缀域名才可展示

  <http://101.96.128.94:9999/>

- 页面的样式 同新闻练习 即可

- 需要完成:`加载更多`, `下拉刷新`, `回到顶部`, `按钮的动态展示`

# UniApp03

## 跨域

> 跨域: 由于浏览器的**同源策略**, 要求一个网站只能访问同域名下的其他网址.
>
> 同协议, 同域名, 同端口 :  `协议://域名:端口`

在一个网站中, 利用 JS 脚本来请求其他的网站信息, 才会出现同源策略的限定!

**网站开发分两个阶段**

- 早期: 前后端**不分离**项目
  - JAVA PHP:  服务器人员开发 服务器+前台页面,  在同一个服务器上开发运行
- 后期: 前后端**分离**项目
  - 三大框架出现:jQuery + Angular -> React -> Vue
  - 接口服务器 + 前端页面服务器 :  合并在一起构成一个网站

**解决跨域**

- 百度搜索:  有9种方案, 实际常用的只有 **3** 种
  - jsonp: 前端和服务器合作解决, 原理 利用 script 的 src 没有同源策略的特征, 修改请求的发送方式, 规避JS的发送方式
  - cors: 服务器独立解决, 自行回顾 express 的 cors 模块
    - 此方案最常用, 最好用.  合适 上线 + 开发 阶段
  - proxy: 代理方案, 由前端人员独立解决.
    - 此方案适合 开发阶段,  不适合上线(一定要用,则需要搭配Nginx反向代理服务器)

接口: <https://m.douyu.com/api/room/list?page=1&type=yz>

> 测试: 到浏览器中输入地址测试 是否被 **屏蔽**, 如果屏蔽了 找mis网管解封;

> HBuilder 自带的 内置浏览器, 删除了同源策略,  开发时不会出现跨域问题

vue.config.js

```js
// 代理文件, 固定名称: vue.config.js
// 配置文件的修改, 必须重启项目服务器才能生效
module.exports = {
 devServer:{ 
  proxy:{
   "/douyu":{ // 以 /douyu 开头的请求, 用此代理处理
    target:"https://m.douyu.com", //代理到哪个域名
    changeOrigin: true, // 代理域名与当前服务器有变更
    secure:true, // https为true, http为false
    logLevel:"debug", // 开启后台调试模式
    pathRewrite:{ // 重写
     // ^ 是 正则表达式的 字符串开头意思
     "^/douyu":""  // 把开头的 /douyu 替换为空, 即删除
    }
   }
  }
 }
}
```

```vue
<template>
 <view></view>
</template>

<script>
export default {
 data() {
  return {
   // /douyu 开头的请求, 被代理处理
   url: '/douyu/api/room/list?type=yz'
  }
 },
 mounted() {
  this.getData()
 },
 methods: {
  getData() {
   uni.request({
    url: this.url,
    method: 'GET',
    data: {page:1}, //变化的参数 放此处书写
    success: res => {
     console.log(res);
    },
    fail: (err) => {
     console.log(err);
    },
    complete: () => {}
   });
  }
 },
};
</script>

<style scoped></style>

```

## 条件编译

作用: 抹平平台间的差异, 让一套代码可以自动适配所有的端.

<https://uniapp.dcloud.io/platform?id=preprocessor>

```vue
<template>
 <view>
  <!-- 条件编译: 利用一个特殊的注释写法, 让代码根据实际运行的平台, 来决定使用哪些代码
		 平台的简称:
		 H5: web平台, 浏览器
		 MP: MiniProgram 小程序
		 APP: 手机端
		 -->
   <!-- #ifdef H5 -->
   <view class="cell">当前为H5平台</view>
   <!-- #endif -->
   
   <!-- #ifdef MP -->
   <view class="cell">当前为小程序平台</view>
   <!-- #endif -->
   
   <!-- #ifdef APP-PLUS -->
   <view class="cell">当前为手机端平台</view>
   <!-- #endif -->
   
   <!-- #ifndef H5 -->
   <view>当前不是 H5 平台</view>
   <!-- #endif -->
   
   <!-- #ifdef H5 || MP -->
   <view>当前是 H5 或 小程序 平台</view>
   <!-- #endif -->
 </view>
</template>

<script>
export default {
 data() {
  return {
   // #ifdef H5
   // /douyu 开头的请求, 被代理处理
   url: '/douyu/api/room/list?type=yz',
   // #endif
   
   // #ifndef H5
   url: 'https://m.douyu.com/api/room/list?type=yz',
   // #endif
  }
 },
 mounted() {
  this.getData()
 },
 methods: {
  getData() {
   uni.request({
    url: this.url,
    method: 'GET',
    data: {page:1}, //变化的参数 放此处书写
    success: res => {
     console.log(res);
    },
    fail: (err) => {
     console.log(err);
    },
    complete: () => {}
   });
  }
 },
};
</script>

<style scoped lang="scss">
.cell{
 /* #ifdef H5 */
 color: red;
 font-size: 30rpx;
 /* #endif */
 
 /* #ifdef MP */
 color: blue;
 font-size: 40rpx;
 font-weight: bold;
 /* #endif */
 
 /* #ifdef APP-PLUS */
 color: orange;
 font-size: 50rpx;
 background-color: purple;
 /* #endif */
}
 
</style>

```

## 滚动指示点

```vue
<template>
 <view>
  <!-- 轮播图指示点 -->
  <!-- field: 搭配 mode=nav 使用,  代表要显示的内容字段 -->
  <uni-swiper-dot
   :dotsStyles="dotsStyles"
   :info="banners"
   :current="current"
   mode="nav"
   field="title"
  >
   <swiper
    circular
    @change="swiperChanged"
    :autoplay="true"
    :interval="3000"
    :duration="200"
   >
    <swiper-item v-for="(item, index) in banners">
     <image
      style="width: 100%; height: 100%;"
      :src="baseURL + item.src"
      mode=""
     ></image>
    </swiper-item>
   </swiper>
  </uni-swiper-dot>
 </view>
</template>

<script>
export default {
 data() {
  return {
   current: 0, // 当前展示序号
   baseURL: 'http://101.96.128.94:9999/img/index/',
   banners: [
    { title: '轮播图11', src: 'banner1.png' },
    { title: '轮播图22', src: 'banner2.png' },
    { title: '轮播图33', src: 'banner3.png' },
    { title: '轮播图44', src: 'banner4.png' }
   ],
   // 自定义样式
   dotsStyles: { color: 'orange', backgroundColor: 'green' }
  };
 },
 methods: {
  swiperChanged(e) {
   console.log(e.detail.current);
   this.current = e.detail.current;
  }
 }
};
</script>

<style scoped></style>

```

## 标签

```vue
<template>
 <view>
  <!-- 标签组件: uTag -->
  <uni-tag text="颜值" type="warning"></uni-tag>
  <uni-tag text="LOL" type="royal" size="small"></uni-tag>
  <uni-tag text="LOL" type="success" inverted></uni-tag>
  <uni-tag text="LOL" type="success" circle @click="doClick"></uni-tag>

  <view style="padding: 10rpx;">
   <!-- + '' :可以把数字类型转 字符串, 否则 text 会报错, 因为需要字符串类型作为值 -->
   <uni-tag
    style="margin: 5rpx;"
    v-for="(item, index) in 9"
    :text="item * 1000 + ''"
    :type="cur==index?'success':'default'"
    @click="cur = index"
   ></uni-tag>
   <view></view>
   <!-- 循环出来的结果 -->
   <uni-tag @click="cur = 0" text="1000"> </uni-tag>
   <uni-tag @click="cur = 1" text="2000"></uni-tag>
   <uni-tag @click="cur = 2" text="3000"></uni-tag>
   <uni-tag @click="cur = 3" text="4000"></uni-tag>
   <uni-tag @click="cur = 4" text="5000"></uni-tag>
   <uni-tag @click="cur = 5" text="6000"></uni-tag>
   <uni-tag @click="cur = 6" text="7000"></uni-tag>
   <uni-tag @click="cur = 7" text="8000" ></uni-tag>
   <uni-tag @click="cur = 8" text="9000"></uni-tag>
  </view>
 </view>
</template>

<script>
export default {
 data() {
  return {
   cur: 0, //当前项
  }
 },
 methods: {
  doClick() {
   alert('点击事件!');
  }
 }
};
</script>

<style scoped></style>

```

## 评分

```vue
<template>
 <view>
  <!-- 评分: uRate -->
  <!-- value 是单向绑定:  数据绑定到组件上 -->
  <uni-rate :value="score"></uni-rate>
  <view>当前分数: {{score}}</view>
  <!-- 双向绑定 v-model:  1.数据传递给组件 2.组件变化时更新数据 -->
  <uni-rate v-model="score" :size="14" :max="6" readonly></uni-rate>
 </view>
</template>

<script>
export default {
 data() {
  return {
   score: 3
  }
 },
};
</script>

<style scoped></style>

```

## 商品导航

```vue
<template>
 <view>
  <!-- 商品导航: uGoodsNav -->
  <uni-goods-nav
   @click="doClick"
   @buttonClick="doBtnClick"
   :buttonGroup="buttonGroup"
   :options = "options"
   fill
   style="position: fixed; bottom: 0; width: 100%;"
  />
 </view>
</template>

<script>
export default {
 data() {
  return {
   options:[
    {text:'QQ', icon:'qq', info:4},
    {text:'微信', icon:'weixin', info:0},
    {text:'微博', icon:'weibo', info:9},
   ],
   buttonGroup: [
    { text: '立即预约', backgroundColor: 'purple', color: 'orange' },
    { text: '提醒我', backgroundColor: 'orange', color: 'white' }
   ]
  };
 },
 methods: {
  // 右侧按钮点击:
  doBtnClick({ index, content }) {
   console.log(index, content);
  },
  // 参数解构语法:
  // doClick(e){ const {index,content} = e}
  doClick({ index, content }) {
   console.log(index, content);
  }
 }
};
</script>

<style scoped></style>

```

## 日期格式化

```vue
<template>
 <view>
  <view>时间戳:{{now}}</view>
  <view style="display: flex; flex-direction: column;">
   <!-- 日期格式化: uDateFormat -->
   <uni-dateformat :date="now" />
   <uni-dateformat :date="now" format="yyyy年MM月dd日" />
   <uni-dateformat :date="time1" :threshold="threshold" />
   <uni-dateformat :date="time2" :threshold="threshold" />
   <uni-dateformat :date="time3" :threshold="threshold" />
  </view>
 </view>
</template>

<script>
export default {
 data() {
  return {
   // 时间戳: 当前时间距离 1970年1月1日 零点的秒数
   now: new Date().getTime(),
   // 阈值节点:  1分钟 - 10分钟
   threshold: [1*60*1000, 10*60*1000], //单位毫秒 ms
  }
 },
 // 计算属性: 根据已有属性 计算得到的新值
 computed: {
  time1() {
   return this.now - 0.5 * 60 * 1000; // 半分钟后  
  },
  time2() {
   return this.now - 3 * 60 * 1000; // 3分钟后  
  },
  time3() {
   return this.now - 15 * 60 * 1000; // 15分钟后  
  }
 },
};
</script>

<style scoped></style>

```

## 列表

```vue
<template> <view>  <!-- 列表组件: uList -->  <uni-list>   <uni-list-item title="账号与安全" showArrow clickable></uni-list-item>   <uni-list-item    clickable    title="青少年模式"    rightText="未开启"    showArrow   ></uni-list-item>   <uni-list-item    title="微信8.0.11主要更新"    showArrow    clickable    note="08月26日"   ></uni-list-item>   <uni-list-item    @switchChange="switchChanged"    :switchChecked="true"    title="接受新消息通知"    showSwitch   ></uni-list-item>   <uni-list-item    thumb="/static/logo.png"    :ellipsis="1"    thumbSize="lg"    showBadge    badgeText="99"    title="大师傅阿斯顿发生地方撒地方第三方阿斯蒂芬安抚第三方撒发的阿斯蒂芬阿斯顿发"   ></uni-list-item>   <uni-list-item    :extraIcon="{ color: 'green', size: '22', type: 'gear' }"    showExtraIcon    title="设置"   ></uni-list-item>   <uni-list-item    title="标题"    note="note"    rightText="右侧文本"    showArrow    showSwitch    thumb="/static/logo.png"    showBadge    badgeText="99"    direction="column"   ></uni-list-item>   <!-- 如果改为竖向排列, 则宽度自动与父元素剩余空间一样 -->   <uni-list-item direction="column">    <template v-slot:header>     <view style="background-color: #007AFF;">我是头部插槽</view>    </template>    <template v-slot:body>     <view style="background-color: #600;">我是身体插槽</view>    </template>    <template v-slot:footer>     <view style="background-color: #598;">我是脚部插槽</view>    </template>   </uni-list-item>   <uni-list-item direction="column">    <template v-slot:body>     <!-- item自带 padding:12px 15px; 的内边距, 无法通过padding属性修改, 只能通过子元素的 margin 来改动  -->     <view      style="background-color: #007AFF; height: 200rpx; margin: -10px -13px;"     ></view>    </template>   </uni-list-item>  </uni-list> </view></template><script>export default { methods: {  switchChanged(e) {   console.log(e);  } }};</script><style scoped></style>
```

## 作业

完成 斗鱼颜值列表制作, 需要带有 下拉刷新 加载更多等功能

接口地址: <https://m.douyu.com/api/room/list?page=1&type=yz>

> 接口带有跨域, 需要用 proxy 解决
>
> 适配: H5有跨域,  小程序和APP没有跨域, 需要用条件编译解决

注意事项:

如果数据长度不足一页, 会导致无法触发加载更多,

暂时解决方案:  把图片 高度 尽量拉长,  超过一页即可

**明天讲解决方案**

![image-20210831180527147](/Users/duiba/Downloads/Day03 2/UniApp03.assets/image-20210831180527147.png)

# UniApp04

> FTP已上传 `18_UniApp/xuezi.apk`, 这是最终项目的完成品, android软件安装包
>
> a可以提前下载 安装到android手机上, 进行体验.
>
> iOS无法安装

## 列表 + 网络请求

```vue
<template>
 <view>
  <uni-list>
   <!-- direction: 竖向排列, 则插槽的宽度和空间一样宽  -->
   <uni-list-item
    direction="column"
    showArrow
    v-for="(item, index) in result"
   >
    <template v-slot:body>
     <view class="cell">
      <image :src="item.image" mode=""></image>
      <view>
       <view>{{ item.title }}</view>
       <view>{{ item.passtime }}</view>
      </view>
     </view>
    </template>
   </uni-list-item>
  </uni-list>
  
  <uni-load-more status="more"></uni-load-more>
 </view>
</template>

<script>
export default {
 data() {
  return {
   url: 'https://api.apiopen.top/getWangYiNews',
   result: []
  };
 },
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   uni.request({
    url: this.url,
    method: 'GET',
    data: { page: 1 },
    success: res => {
     console.log(res);
     this.result = res.data.result;
    }
   });
  }
 }
};
</script>

<style scoped lang="scss">
.cell{
 // flex: 弹性盒子, 子元素自带缩放效果来适配布局
 display: flex;
 // 去掉 list 自带的padding
 margin: -8px -10px;
 
 >view{
  display: flex;
  flex-direction: column;
  font-size: 28rpx;
  justify-content: space-between;
  margin-left: 10rpx;
  padding-right: 10px;
 }
 
 image{
  // 关闭缩放效果
  flex:none; 
  width: 240rpx;
  height: 150rpx;
  border-radius: 6rpx;
 }
}
</style>

```

## 自定义导航栏

```vue
<template>
 <view>
  <!-- 自定义导航栏: uNavBar -->
  <!-- 隐藏默认导航栏: pages.json 文件中进行配置 -->
  <uni-nav-bar
   right-text="菜单"
   rightIcon="scan"
   title="标题"
   fixed
   statusBar
   @clickLeft="doClickLeft"
   @clickRight="doClickRight"
  >
   <template v-slot:left>
    <image
     style="width: 60rpx; height: 60rpx;"
     src="/static/logo.png"
     mode=""
    ></image>
   </template>
  </uni-nav-bar>
  <!-- statusBar: 手机端能看到效果. -->
  <view v-for="(item, index) in 100">{{ item }}</view>
 </view>
</template>

<script>
export default {
 methods: {
  doClickLeft() {
   alert('左侧按钮被点击');
  },
  doClickRight() {
   alert('右侧按钮被点击');
  }
 }
};
</script>

<style scoped></style>

```

## 弹出框

```vue
<template>
 <view>
  <!-- 弹出提示: uPopup -->
  <!-- ref: 用于把组件 跟 一个变量绑定在一起
		 此写法关联  $refs 属性, 所以绑定的变量都会存储在此属性中
		 -->
  <uni-popup ref="popup1" type="right">
   <image
    style="width: 300rpx; height: 300rpx;"
    src="/static/logo.png"
    mode=""
   ></image>
  </uni-popup>

  <!-- 官方预制样式: 消息提示 -->
  <uni-popup ref="popup2" type="message">
   <uni-popup-message
    message="警告: 今日天气转凉, 注意保暖"
    type="warn"
   ></uni-popup-message>
  </uni-popup>

  <uni-popup ref="popup" type="dialog">
   <uni-popup-dialog
    title="警告"
    content="今日天气转凉, 注意添加衣物, 注意保暖!"
    @confirm="doConfirm"
    @close="doClose"
   ></uni-popup-dialog>
  </uni-popup>

  <button type="primary" @click="show">弹出提示</button>
 </view>
</template>

<script>
export default {
 methods: {
  doConfirm(){ 
   alert("确定按钮被点击!")
  },
  doClose(){
   alert("取消按钮被点击!")
  },
  show() {
   // 所有利用组件ref属性, 绑定的变量, 都会出现在 #refs 中
   console.log(this.$refs);
   this.$refs.popup.open();
  }
 }
};
</script>

<style scoped></style>

```

## 侧边栏

接口1: <http://apis.juhe.cn/goodbook/catalog?key=2520f6a5cab03af7e23013b15842d7fc>

接口2: <http://apis.juhe.cn/goodbook/query?catalog_id=xxx&key=2520f6a5cab03af7e23013b15842d7fc>

## 刷新DOM

刷新: 先删除 后加载

如何删除DOM:  `v-if`

```vue
<template>
 <view style="display: flex;">
  <!-- 竖向滚动, 必须用 css 指定 height -->
  <scroll-view
   style="width: 30%;"
   scroll-y
   :style="{ height: winHeight + 'px' }"
  >
   <view
    @click="doSelect(index)"
    class="menu-cell"
    v-for="(item, index) in menu"
    :class="{ cur: index == current }"
   >
    <!-- 动态样式  
   :class={样式类: true/false}  true生效 false无效 -->
    {{ item.catalog }}
   </view>
  </scroll-view>

  <!-- v-if: 可以移除DOM -->
  <scroll-view
   v-if="showRight"
   scroll-y
   style="width: 70%;"
   :style="{ height: winHeight + 'px' }"
  >
   <uni-collapse>
    <uni-collapse-item
     v-for="(item, index) in data"
     :title="item.title"
     :thumb="item.img"
    >
     <view style="padding: 20rpx; font-size: 0.8em;">{{ item.sub2 }}</view>
    </uni-collapse-item>
   </uni-collapse>
  </scroll-view>
 </view>
</template>

<script>
export default {
 data() {
  return {
   key: '2520f6a5cab03af7e23013b15842d7fc',
   url_1: '/juhe/goodbook/catalog',
   url_2: '/juhe/goodbook/query',
   menu: [],
   current: 0, //当前项序号
   data: [],
   showRight: true //显示右侧内容
  };
 },
 mounted() {
  this.getMenu();
 },
 methods: {
  doSelect(index) {
   this.current = index;
   const { id } = this.menu[index];

   uni.request({
    url: this.url_2,
    method: 'GET',
    data: { key: this.key, catalog_id: id },
    success: res => {
     console.log(res);
     this.data = res.data.result.data;
     // vue为了性能的考虑, 会把一个方法的最终结果渲染到页面上, 而不是一行代码执行一次
     
     // 刷新DOM:  利用 v-if 先移除 再添加
     this.showRight = false; //移除
     // 监听 移除操作完成的时机, 然后立刻添加回来
     // nextTick: 下一个渲染周期
     this.$nextTick(()=>{
      this.showRight = true; //添加
     })
    },
    fail: err => {
     console.log(err);
    },
    complete: () => {}
   });
  },

  getMenu() {
   uni.request({
    url: this.url_1,
    method: 'GET',
    data: { key: this.key },
    success: res => {
     console.log(res);
     this.menu = res.data.result;
     // 默认加载 序号0 的数据
     this.doSelect(0);
    },
    fail: err => {
     console.log(err);
    },
    complete: () => {}
   });
  }
 },
 // 计算属性: 通过一定的操作之后 才能获取的值
 computed: {
  winHeight() {
   // 可使用的窗口高度, 单位px
   return uni.getSystemInfoSync().windowHeight;
  }
 }
};
</script>

<style scoped lang="scss">
.menu-cell {
 padding: 20rpx;
 font-size: 1.2em;
 border-bottom: 1px solid gray;

 //高亮样式
 &.cur {
  background-color: orange;
  color: purple;
 }
}
</style>

```

## 自定义头部标签

```vue
<template>
 <view>
  <!-- 横向滚动, 必须添加 white-space: nowrap 样式 -->
  <scroll-view scroll-x style="white-space: nowrap;">
   <view
    @click="doSelect(index)"
    :class="{cur: index == current}"
    class="menu-item"
    v-for="(item, index) in data"
   >
    {{ item.name }}
   </view>
  </scroll-view>
  
  <!-- 空数组 通过长度来判断 空 -->
  <view style="font-size: 40rpx;" v-if="data.length !=  0">
   {{data[current].shortName}}
  </view>
 </view>
</template>

<script>
export default {
 data() {
  return {
   // https://m.douyu.com/api/cate/recList
   url: '/douyu/api/cate/recList',
   data: [],
   current: 0
  };
 },
 mounted() {
  this.getData();
 },
 methods: {
  doSelect(index) {
   this.current = index;
  },
  getData() {
   uni.request({
    url: this.url,
    success: res => {
     console.log(res);
     this.data = res.data.data;
    }
   });
  }
 }
};
</script>

<style scoped lang="scss">
.menu-item {
 display: inline-block;
 margin: 15rpx 25rpx;
 padding-bottom: 15rpx;

 &.cur {
  font-weight: bold;
  color: orange;
  border-bottom: 2px solid orange;
 }
}
</style>

```

## 第五阶段

由于马上就业, 所以本阶段的项目 更加贴近实际开发的场景:

- 给 接口 和 效果图, 然后完成页面的制作.

> 独立完成项目, 开始会较难, 所以:
>
> 在制作一个页面时, 老师先完成一次 并且进行视频的录制.
>
> 之后把 视频 和 代码都发送.
>
> 同学尝试去独立完成, 如果有不会的 可以参考视频和代码.

## 作业

按照视频 效果图,  开始制作项目

- 完成基本框架的搭建:  tab标签栏切换页面的效果
- 完成 `我的` 页面的制作:  主要练习样式布局

# UniApp05

> 视频网盘地址:
>
> 链接：<https://pan.baidu.com/s/1vIiE_3AHn1hBADXgMpLQyA>
> 提取码：jgyu

任务:

- 完成首页的制作

- 首页制作完毕的同学, 可以制作 **分类页面**

  接口: <http://101.96.128.94:9999/data/product/list.php?pno=1>

  - 此页面需要完成 下拉刷新, 加载更多 等等功能

- 详情页

  - 此页面的难点是 页面下方的HTML展示, 需要使用 `v-html` 指令

    并且要手动修改 返回值的html, 为图片添加域名前缀: `正则替换`

- 做的快的同学, 可以继续制作 英雄页面

# UniApp06

> 视频所在网盘:
>
> <https://pan.baidu.com/s/1vIiE_3AHn1hBADXgMpLQyA>
> 提取码：jgyu

任务:

- 完成 **商品详情** 页面制作

- 继续制作 英雄页面

  - 接口1: 左侧菜单内容

    <https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js>

  - 接口2: 右侧详情,  注意结尾要拼接 id 名称

    <https://game.gtimg.cn/images/lol/act/img/js/hero/英雄id.js>

  - 关于头像的显示:

    <https://game.gtimg.cn/images/lol/act/img/champion/英雄alias.png>

- 直播页面

  - 此页面的请求涉及到 **跨域** 问题, 需要配置代理解决, 并且要关注 `条件渲染` 实现同一套代码, 适配不同客户端的状况.

  - 接口1: 获取所有大分类

    <http://capi.douyucdn.cn/api/v1/getColumnList>

  - 接口2: 某大分类下的小分类

    <http://capi.douyucdn.cn/api/v1/getColumnDetail?shortName>=分类名

  - 接口3: 小分类下的房间

    <https://m.douyu.com/api/room/list?page=1&type>=房间类型

## 下周安排

- 周末时间, 把项目制作完毕, 之后进行 **打包** 操作

  - 打包成H5, 发布到服务器上
  - 打包成APK, 给其他安卓手机安装
  - 打包成 微信小程序, 进行发布

- React: 下周进行React的学习:   时间线---  Angular -> React -> Vue

  - 南方地区使用较多: 杭州 上海 深圳...

  - 挑战: 下周逐步面试增多, 希望大家面试之余, 能尽量在晚间看视频补课.

  - 提前安装 **最新版** 的 VSCode 工具

  - 提前下载资源, 大概在`下周四`使用

    ```
    链接：https://pan.baidu.com/s/1MmpfvAa7Y4bLJDH8UTYZrw 
    提取码：2t6p 
    --来自百度网盘超级会员V4的分享
    ```
