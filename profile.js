var r = {
  info: {
    name: '黄为伟',
    position: '前端开发工程师',
    qq: '616531680',
    wechat: 'ele928',
    weibo: '@玩儿音乐的程序猿'
  },

  tech: {
    title: '热爱前端开发，熟悉后端知识',

    lang: [
    {
      lang: 'JavaScript',
      percent: '100',
      bar_bg: '#41c27e',
      bg: '#caf1dc',
      color: 'green'
    },
    {
      lang: 'HTML & CSS',
      percent: '95',
      bar_bg: '#34b6d7',
      bg: '#a3edff',
      color: '#2a8da6'
    },
    {
      lang: 'Photoshop',
      percent: '85',
      bar_bg: '#348edc',
      bg: '#93ccff',
      color: '#1367b1'
    },
    {
      lang: 'PHP',
      percent: '70',
      bar_bg: '#ff9f00',
      bg: '#ffd186',
      color: '#b87608'
    },
    {
      lang: 'Golang',
      percent: '60',
      bar_bg: '#ffc939',
      bg: '#fde194',
      color: '#a90f0f'
    },
    {
      lang: 'Java',
      percent: '50',
      bar_bg: '#f77a00',
      bg: '#ffbb96',
      color: '#743715'
    },
    {
      lang: 'C/C++',
      percent: '40',
      bar_bg: '#d30202',
      bg: '#ffa4a4',
      color: '#a90f0f'
    }]
  },

  basic: {
    title: '个人基本信息',
    sub_title: '了解我',
    info: [
      '姓名：黄为伟',
      '性别：男',
      '身高：175 cm',
      '出生年月：1994年08月28日',
      '学历：本科(大二在读)',
      '学校：东北大学',
      '专业：软件工程(国际班)',
      '外语：CET六级',
      '电话：18524407457',
      '邮箱：Eric@dobest.me',
      '博客：www.dobest.me',
      'Github：github.com/ele828'
    ]
  },

  skill: {
    title: '专业技能',
    sub_title: '前端工程师',
    spec: [
      '熟练使用HTML+CSS实现页面布局，了解标签语义化</li>',
      'JavaScript实现前端编程，使用面向对象思想和模块化的方式编程</li>',
      'Web App和Hybrid App开发，使用Swift进行iOS开发</li>',
      '熟练使用Node.js开发服务端，尝试MEAN架构</li>',
      '使用PHP进行Web后台开发，微信开发等</li>',
      'Cocos2d-X (JS-binding) 进行手机或网页游戏开发</li>',
      '熟练使用Photoshop，能独立进行网页UI设计</li>',
      '熟练使用git、svn版本控制工具</li>',
      '正在学习Golang，服务器编程与分布式系统</li>',
      '正在学习Java Web(Sping、Hibernate、Struct)</li>'
    ]
  },

  proj: {
    title: '项目经历',
    sub_title: '不积跬步，无以至千里',
    spec: [
      {
        name: '二手交易平台开发',
        time: '2013/10/01 - 2013/11/01',
        desc: '武汉亿星园微信二手交易平台开发。用户可以发布二手商品，上传图片，可以删除商品以及模糊搜索、按类搜索等功能。后台实现了分类管理和商品管理功能。',
        img: 'img/proj/esjy.png',
        tag: [
          {
            name: 'PHP',
            color: 'pink'
          },
          {
            name: 'JavaScript',
            color: 'blue'
          }
        ]
      },
      {
        name: '博乐互动微信平台开发',
        time: '2013/11/01 - 2013/12/01',
        desc: '深圳博乐互动有限公司微信平台开发，包括移动端社区、新闻列表、会员中心、客服系统等功能模块。',
        img: 'img/proj/blhd.png',
        tag: [
          {
            name: '微信',
            color: ''
          },
          {
            name: 'PHP',
            color: 'orange'
          }
        ]
      },
      {
        name: '简易超市管理系统开发',
        time: '2013/12/01 - 2014/01/01',
        desc: '这是学校布置的C语言实验。该系统采用C语言+GTK进行开发，使用文本进行信息存储。系统实现了商家管理、商品入库、商品管理、销售记录、人员管理、系统设置与前台的收银等功能。由于开发仓促，仍存在一些问题待解决。',
        img: 'img/proj/csgl.png',
        tag: [
          {
            name: '微信',
            color: 'red'
          },
          {
            name: 'GTK',
            color: 'light-blue'
          }
        ]
      },

      {
        name: '东北大学官方微信开发',
        time: '2014/03/01 - 2014/06/01',
        desc: '参与东北大学官方微信平台开发，微信后台使用PHP+MySql架构。该平台实现了微信菜单状态切换、图文消息与详情网页、校内电话查询、快递查询、院系的模糊搜索等功能，并仍在继续开发其他功能。',
        img: 'img/proj/neuwx.png',
        tag: [
          {
            name: '微信',
            color: 'pink'
          },
          {
            name: 'HTML5',
            color: 'blue'
          },
          {
            name: 'PHP',
            color: ''
          }
        ]
      },
      {
        name: '进口大众《无尽之旅》游戏开发',
        time: '2014/07/01 - 2014/08/01',
        desc: '暑假与朋友合作，共同参与开发这款微信汽车行驶游戏，游戏采用手指滑动触屏的方式来控制汽车前行，行驶中捡起路上的物品可加分。该项目采用EasyGame(网易前端研发)游戏引擎，整个游戏有很好的玩家体验，在各种机型有较好的适配，以及在前后端数据交互采用安全措施，游戏得到了客户的一致赞许。',
        img: 'img/proj/wjzl.png',
        tag: [
          {
            name: '游戏',
            color: 'green'
          },
          {
            name: 'HTML5',
            color: 'orange'
          },
          {
            name: 'PHP',
            color: 'light-blue'
          },
          {
            name: 'Cocos2D-x',
            color: 'red'
          }
        ]
      },
      {
        name: '《Panda Run》手机游戏开发',
        time: '2014/08/01 - 2014/10/01',
        desc: '为参加全国高校移动互联网创新大赛而开发此游戏。游戏采用Cocos2D-X(JS-Binding)引擎开发，能良好运行在安卓/iOS平台，整个开发为期两个月，从中也学到了很多游戏相关的知识，并进入全国总决赛，获得不错的成绩。',
        img: 'img/proj/panda.png',
        tag: [
          {
            name: '安卓',
            color: 'orange'
          },
          {
            name: '游戏',
            color: 'blue'
          },
          {
            name: '跑酷',
            color: 'pink'
          },
          {
            name: 'Cocos2D-x',
            color: ''
          }
        ]
      },
      {
        name: '华夏基金微信活动开发',
        time: '2014/10/01 - 2014/11/01',
        desc: '独立开发华夏基金刮刮卡游戏。采用Canvas+PHP开发，包括多个移动端页面的布局与适配，对游戏采用安全性策略，使用Mysql记录玩家信息与排名等。游戏带有简易的管理后台。',
        img: 'img/proj/hxjj.png',
        tag: [
          {
            name: '游戏',
            color: 'green'
          },
          {
            name: '移动端',
            color: 'light-blue'
          }
        ]
      },
      {
        name: '恒大冰泉，“码”上疯狂',
        time: '2014/10/01 - 2014/11/01',
        desc: '恒大冰泉，“码”上疯狂HTML5喝水游戏开发。采用Cocos2D-x+PHP进行游戏的前后端开发，游戏使用移动端重力感应进行喝水。喝水之后可以抽奖并保存二维码，使用支付宝领取奖金。整个游戏涉及到游戏交互，用户权限，抽奖机制控制等。',
        img: 'img/proj/hdbq.png',
        tag: [
          {
            name: '游戏',
            color: 'green'
          },
          {
            name: 'Cocos2D-x',
            color: 'orange'
          },
          {
            name: 'PHP',
            color: 'blue'
          }
        ]
      },
      {
        name: '约拍啦H5页面开发',
        time: '2014/11/01 - 2014/11/15',
        desc: '经典微信H5翻页滚动页面开发，采用Swiper+Animate.css并自己编写滚动逻辑和动画切换，实现了移动端的适配，性能优化等。',
        img: 'img/proj/ypl.png',
        tag: [
          {
            name: '移动端',
            color: 'green'
          },
          {
            name: 'JavaScript',
            color: 'pink'
          }
        ]
      },
      {
        name: '中国大学生在线专题页面制作',
        time: '2014/12/01 - 2015/01/01',
        desc: '参与东北大学党委宣传部举办的网页制作大赛。配合设计师完成了前端页面的开发，该网页有良好的交互效果，并手写路由，实现单页面加动画切换。',
        img: 'img/proj/dxszx.png',
        tag: [
          {
            name: '前端',
            color: 'orange'
          },
          {
            name: '单页',
            color: 'blue'
          }
        ]
      },
      {
        name: '《记忆力大挑战》游戏开发',
        time: '2014/12/21 - 2014/12/22',
        desc: '采用Java+JavaFX开发的一个桌面端小游戏。数字会随机在九宫格内出现并消失，玩家根据记忆力来按照数字的顺序点击九宫格。仅仅是一个练习的作品。',
        img: 'img/proj/jyldtz.png',
        tag: [
          {
            name: '游戏',
            color: ''
          },
          {
            name: 'Java',
            color: 'red'
          }
        ]
      },
      {
        name: 'Easy-blog博客系统开发',
        time: '2015/03/21 - 2015/03/28',
        desc: '为自己开发一个博客系统，系统基于Node.js，使用Promise组织代码。带有文章、分类和友情连接以及文章评论等功能。该项目已开源在Github，<a href="http://github.com/ele828/easy-blog">查看代码</a>',
        img: 'img/proj/easy-blog.png',
        tag: [
          {
            name: 'Node.js',
            color: 'orange'
          },
          {
            name: '博客开发',
            color: '服务端'
          }
        ]
      }
    ]
  },

  prize: {
    title: '个人荣誉',
    sub_title: '积极参与各项活动和比赛',
    spec: [
      '全国高校移动互联网开发大赛(MIAC)荣获优秀奖',
      '华鼎科技"朵朵童app创意设计及实施方案"比赛荣获一等奖',
      '“我为东大设计官网”比赛荣获二等奖',
      '参与东北大学赴福建社会实践团荣获优秀团队',
      '“妙笔流声”微电影比赛荣获优秀奖',
      '东北大学党委宣传部优秀记者'
    ]
  },

  exp: {
    title: '个人经历',
    sub_title: '成长之路',
    stage: [
      {
        name: '大学时代',
        img: 'img/neu.jpg',
        bg: '#f84956',
        desc: '平时除了完成学校的课业之外，为了提高自身的技术水平并积累经验，和同学组建团队承包各大公司的商业项目。主要包括Web整站开发、移动端页面开发、微信开发、HTML5游戏开发等项目。闲时喜欢研究开源代码，逛论坛，比如segmentfault、v2x、nodejs、前端乱炖、w3cplus等。'
      },
      {
        name: '高中时代',
        img: 'img/music.png',
        bg: '#41c27e',
        desc: '高中时代，曾自学音乐制作(作曲编曲)。期间，与朋友合作的童歌《中国，可爱的家》于2013年06月01日荣登中央电视台综艺频道。高中时期曾立志从事广告传媒行业，学习过一段时间的设计，有较强的艺术感知能力，能熟练的使用Photoshop等工具。',
      },
      {
        name: '初中时代',
        img: 'img/muyibaby.png',
        bg: '#34b6d7',
        desc: '自学网页开发方面的知识，和朋友创办木弋网络(后因高考被迫关闭)，负责网站开发、服务器维护等工作。后于2009年创办微酷音乐网并发布自主开发的音乐电台软件。'
      }
    ]
  },

  footer: {
    info: '简历于2015年02月03日生成, 2015年04月06日最后更新'
  }

}
