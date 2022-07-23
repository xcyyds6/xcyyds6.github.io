module.exports = {
    title: '星辰的文档',
    description: '文档是开发坚强的后盾！',
    plugins:{
        '@vuepress/active-header-links':{},
        'autobar':{}
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
      nav: [
        { text: '百度', link: 'https://www.baidu.com', target:'_self', rel:'' },
        { text: 'Guide', link: '/guide/', target:'_blank' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        }
      ]
    }
  }