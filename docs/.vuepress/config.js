module.exports = {
  title: "留简",
  description: "Just Text",
  base: "/myBlog/",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      "link",
      {
        rel: "icon",
        href:
          "//yun.duiba.com.cn/aurora/assets/28757dfc494a84649d1b9e9e9daa3a57420d00cd.jpeg",
      },

      [
        "script",
        {
          src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js",
        },
      ],
      [
        "script",
        {
          src:
            "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
        },
      ],
      [
        "script",
        {
          src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js",
        },
      ],
      [
        "script",
        {
          src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js",
        },
      ],
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },

  plugins: ["demo-block"],
  themeConfig: {
    logo:
      "//yun.duiba.com.cn/aurora/assets/28757dfc494a84649d1b9e9e9daa3a57420d00cd.jpeg",
    nav: [
      // 导航栏配置
      {
        text: "HOME",
        link: "/",
      },
      { text: "NOTE", link: "/Note/" },
      { text: "DEMO", link: "/DEMO/" },
      { text: "git", link: "https://github.com/secret821/liuyan.github.io" },
      { text: "微博", link: "https://weibo.com/u/7346009584" },
    ],
    sidebar: {
      "/Note/": ["react", "微信小程序","UniApp","game"],
      "/DEMO/": ["动态背景图", "时钟","贪吃蛇","填色游戏","拼图游戏"],
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
}
