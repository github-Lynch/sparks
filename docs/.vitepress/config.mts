import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sparks",
  description: "Writing Of Lynch",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  base: '/sparks/',

  // 页签图标
  head: [
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/github-Lynch/images/main/lynch.png' }]
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // 站点logo
    logo: 'https://raw.githubusercontent.com/github-Lynch/images/main/lynch.png',

    nav: nav(),

    search: {
      provider: 'local'
    },

    sidebar: {
      '/prattle/': { base: '/prattle/', items: sidebarPrattle() },
      '/blog/': { base: '/blog/', items: sidebarBlog() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/github-Lynch/sparks' }
    ],

    footer: {
      message: 'Edited by Lynch on Earth.',
      // copyright: `Copyright © 2024-${new Date().getFullYear()} Lynch`
    },

    docFooter: {
      prev: '往前瞅瞅',
      next: '往后瞧瞧'
    },

    outline: {
      label: '页面导航'
    },
  },

  // 忽略; 防止因出现死链而建将失败
  ignoreDeadLinks: true
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '九言', // 杂谈
      link: '/prattle/foreword',
      activeMatch: '/prattle/'
    },
    {
      text: '者也', // 知乎者也; 博客|笔记;
      // 简单粗暴处理, 后面添加一个[!]告诉 TS 引擎 sidebarBlog()[0].items 一定存在,
      link: '/blog/' + sidebarBlog()[0].items![0].link,
      activeMatch: '/blog/'
    },
    // TODO:
    // { text: 'Casita', link: '/' }, // 房子 | 家 | 私人可见
    // 下拉选项
    /* {
      text: '下拉选项',
      items: [
        {
          text: '头像',
          link: 'https://cdn.jsdelivr.net/gh/lynch-07/images@main/20220720202820.jpg'
        },
        {
          text: 'logo',
          link: 'https://raw.githubusercontent.com/github-Lynch/images/main/lynch.png'
        }
      ]
    } */
  ]
}

function sidebarPrattle(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '九言',
      collapsed: false, // 添加分类[展开/收起]; 设置默认展开;
      items: [
        { text: '前言', link: 'foreword' },
        { text: 'Lines', link: 'lines' },
        { text: 'Career Advice', link: 'career-advice' },
        { text: '人生啊(2024.3)', link: 'about-life(2024.3)' },
        { text: 'Lynch\'s 指导思想(2024.5) ', link: 'lynch\'s-guiding-ideology(2024.5)' },
        { text: '优越感', link: 'superiority' },
        { text: '闲言碎语', link: 'gossip' },
      ]
    },
    {
      text: '年终总结',
      collapsed: true,
      items: [
        { text: '2024', link: 'year-review-2024' }
      ]
    }
  ]
}

function sidebarBlog(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '者也',
      collapsed: false,
      items: [
        { text: '面经-腾讯外包', link: 'interview-experience-tencent-outsourcing' },
        { text: 'Typora使用手册', link: 'typora-manual' },
        { text: '电脑快捷键', link: 'pc-shortcut' },
        { text: '好用的快捷键与工具分享', link: 'shortcut-key-and-tools' },
        { text: 'Sass note', link: 'sass-note' },
        { text: '风格化和规范', link: 'style-guide' },
        { text: '偷懒地记一下', link: 'lazy-note' },
      ]
    }
  ]
}
