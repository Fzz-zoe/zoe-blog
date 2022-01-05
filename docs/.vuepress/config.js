
module.exports = {
    theme: 'reco',
    title: 'Personal Website',
    description: 'Personal Website',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/images/photo.jpg' }],
      ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
      ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
      ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
      ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
      ['meta', { 'http-quiv': 'expires', cotent: '0'}]
    ],
    // serviceWorker: true, // 是否开启 PWA
    base: '/zoe-blog/', // 部署到github相关的配置
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
    markdown: {
      lineNumbers: true // 代码块是否显示行号
    },
    themeConfig: {
      subSidebar: 'auto',
      nav:[ // 导航栏配置

        { text: '首页', link: '/' },
            { 
                text: '我的博客', 
                items: [
                    { text: '我的笔记', link: '/note/' },
                    { text: '我的相册', link: '/photograph/' },
                    { text: '留言板', link: '/others/' },
                    { text: '百度一下', link: 'https://baidu.com' }
                ]
            }   
      ],
      sidebar: [
        {
            title: '欢迎学习',
            path: '/',
            collapsable: false, // 不折叠
            children: [
                { title: "学前必读", path: "/" }
            ]
        },
        {
          title: "基础学习",
          path: '/handbook/ConditionalTypes',
          collapsable: false, // 不折叠
          children: [
            { title: "条件类型", path: "/handbook/ConditionalTypes" },
            { title: "泛型", path: "/handbook/Generics" }
          ],
        }
      ]
    //   sidebar: {
    //     '/note/': [
    //         {
    //           title: '我的笔记',
    //           children: [
    //             '/note/one.md',
    //             '/note/two.md',
    //           ]
    //         }
    //     ],
    //      '/photograph/': [
    //       {
    //           title: '我的相册',
    //           children: [
    //             '/photograph/one.md',
    //             '/photograph/two.md',
    //           ]
    //         }
    //     ],
    //     '/others/': [
    //       {
    //           title: '留言板',
    //           children: [
    //             '/others/one.md',
    //             '/others/two.md',
    //           ]
    //         }
    //     ]
    //   }
    }
  };