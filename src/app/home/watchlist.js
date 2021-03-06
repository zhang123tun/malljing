angular
  .module('app')
  .component('watchList', {
    templateUrl: 'app/home/watchlist.html',
    controller: watchlistCtrl
  });

/** @ngInject */
function watchlistCtrl($rootScope, $state, todoService, $injector, $location) {
  console.log('watchlistCtrl');
  var ngTableParams;

  ngTableParams = $injector.get('NgTableParams');

  this.commercial = {
    tabs:['业态', '业种', '品牌'],
    data:[{
      id: '0',
      name: "餐饮",
      children: [{
        id:'0_0',
        name: "吧台",
        children: [{
          id:'0_0_0',
          name: "浆宝"
        },{
          id:'0_0_1',
          name: "鲜饮空间"
        },{
          id:'0_0_1',
          name: "鲜芋仙"
        },{
          id:'0_0_1',
          name: "鲜元素"
        },{
          id:'0_0_1',
          name: "找茶"
        },{
          id:'0_0_1',
          name: "珍仕菓"
        }]
      },{
        id:'0_1',
        name: "快餐",
        children: [{
          id:'0_0_0',
          name: "大快活"
        },{
          id:'0_0_1',
          name: "汉堡王"
        },{
          id:'0_0_1',
          name: "吉野家"
        },{
          id:'0_0_1',
          name: "肯德基"
        }]
      },{
        id:'0_1',
        name: "料理",
        children: [{
          id:'0_1_0',
          name: "池田回转寿司"
        },{
          id:'0_1_1',
          name: "池田寿司"
        },{
          id:'0_1_1',
          name: "禾绿回转寿司"
        },{
          id:'0_1_1',
          name: "惠比寿 杏"
        }]
      },{
        id:'0_1',
        name: "甜品",
        children: [{
          id:'0_1_0',
          name: "DQ"
        },{
          id:'0_1_1',
          name: "Eimio"
        },{
          id:'0_1_1',
          name: "Gandy Lab"
        },{
          id:'0_1_1',
          name: "Stick house"
        },{
          id:'0_1_1',
          name: "凡情蒂诺巧克力"
        },{
          id:'0_1_1',
          name: "快乐柠檬"
        },{
          id:'0_1_1',
          name: "满记甜品"
        },{
          id:'0_1_1',
          name: "漫果工坊"
        },{
          id:'0_1_1',
          name: "摩提工坊"
        }]
      },{
        id:'0_1',
        name: "西餐",
        children: [{
          id:'0_1_0',
          name: "星巴克"
        },{
          id:'0_1_1',
          name: "太平洋咖啡"
        }]
      },{
        id:'0_1',
        name: "中餐",
        children: [{
          id:'0_1_0',
          name: "巴贝拉"
        },{
          id:'0_1_1',
          name: "北京小王府红茶餐厅"
        },{
          id:'0_1_1',
          name: "避风塘"
        },{
          id:'0_1_1',
          name: "边境共和国"
        },{
          id:'0_1_1',
          name: "川辣汇"
        },{
          id:'0_1_1',
          name: "豆捞坊"
        },{
          id:'0_1_1',
          name: "沸腾夜话"
        },{
          id:'0_1_1',
          name: "呷哺呷哺"
        },{
          id:'0_1_1',
          name: "港丽餐厅"
        },{
          id:'0_1_1',
          name: "蕉叶"
        },{
          id:'0_1_1',
          name: "井格老灶火锅"
        },{
          id:'0_1_1',
          name: "咖喱虎"
        },{
          id:'0_1_1',
          name: "鹿港小镇"
        },{
          id:'0_1_1',
          name: "拿渡麻辣香锅"
        },{
          id:'0_1_1',
          name: "拿渡麻辣香锅"
        },{
          id:'0_1_1',
          name: "味千拉面"
        },{
          id:'0_1_1',
          name: "一味一诚"
        },{
          id:'0_1_1',
          name: "印巷小馆"
        }]
      }]
    },{
      id: '0',
      name: "零售专卖",
      children: [{
        id:'0_0',
        name: "儿童用品",
        children: [{
          id:'0_0_0',
          name: "NICI"
        },{
          id:'0_0_1',
          name: "全棉时代"
        },{
          id:'0_0_1',
          name: "GC"
        }]
      },{
        id:'0_1',
        name: "化妆品",
        children: [{
          id:'0_0_0',
          name: "BObbi Brown"
        },{
          id:'0_0_1',
          name: "CK香水"
        },{
          id:'0_0_1',
          name: "CK香水"
        },{
          id:'0_0_1',
          name: "innisfree"
        },{
          id:'0_0_1',
          name: "Jurlique"
        },{
          id:'0_0_1',
          name: "KIEHLS"
        },{
          id:'0_0_1',
          name: "LAVIN香水"
        },{
          id:'0_0_1',
          name: "LOCCITANE"
        },{
          id:'0_0_1',
          name: "MAC"
        },{
          id:'0_0_1',
          name: "MAX FACTOR"
        },{
          id:'0_0_1',
          name: "ORIGINS"
        },{
          id:'0_0_1',
          name: "Roger&Gallet"
        },{
          id:'0_0_1',
          name: "SEPHORA"
        },{
          id:'0_0_1',
          name: "大长今"
        }]
      },{
        id:'0_1',
        name: "黄金珠宝",
        children: [{
          id:'0_0_0',
          name: "I gold"
        },{
          id:'0_0_1',
          name: "LOVE&LOVE"
        },{
          id:'0_0_1',
          name: "PANDORA"
        },{
          id:'0_0_1',
          name: "施华洛世奇"
        }]
      },{
        id:'0_1',
        name: "家居",
        children: [{
          id:'0_0_0',
          name: "MUJI"
        }]
      },{
        id:'0_1',
        name: "居家生活",
        children: [{
          id:'0_0_0',
          name: "阿芙香薰"
        },{
          id:'0_0_1',
          name: "万宁"
        },{
          id:'0_0_1',
          name: "名创优品"
        },{
          id:'0_0_1',
          name: "品阁"
        }]
      },{
        id:'0_1',
        name: "快销集合店",
        children: [{
          id:'0_0_0',
          name: "BHG"
        }]
      },{
        id:'0_1',
        name: "男女装",
        children: [{
          id:'0_0_0',
          name: "Calvin Klein"
        },{
          id:'0_0_0',
          name: "Calvin Klein Jeans"
        },{
          id:'0_0_0',
          name: "Calvin Klein underwear"
        },{
          id:'0_0_0',
          name: "cheap monday"
        },{
          id:'0_0_0',
          name: "CK JEANS"
        },{
          id:'0_0_0',
          name: "ecco"
        },{
          id:'0_0_0',
          name: "ED hardy"
        },{
          id:'0_0_0',
          name: "EMPORIO ARMANI"
        },{
          id:'0_0_0',
          name: "EVISU"
        },{
          id:'0_0_0',
          name: "G·STAR RAW"
        },{
          id:'0_0_0',
          name: "G2000"
        },{
          id:'0_0_0',
          name: "GAP"
        },{
          id:'0_0_0',
          name: "GUESS"
        },{
          id:'0_0_0',
          name: "i.t"
        },{
          id:'0_0_0',
          name: "IZZUE"
        },{
          id:'0_0_0',
          name: "JACK JONES"
        },{
          id:'0_0_0',
          name: "Juicy Couture"
        },{
          id:'0_0_0',
          name: "Lee"
        },{
          id:'0_0_0',
          name: "levis"
        },{
          id:'0_0_0',
          name: "pancoat"
        },{
          id:'0_0_0',
          name: "PRICH"
        },{
          id:'0_0_0',
          name: "REPLAY"
        },{
          id:'0_0_0',
          name: "STAY REAL"
        },{
          id:'0_0_0',
          name: "UNIQLO"
        },{
          id:'0_0_0',
          name: "ZARA"
        },{
          id:'0_0_0',
          name: "速写"
        }]
      },{
        id:'0_1',
        name: "男装",
        children: [{
          id:'0_0_0',
          name: "6IXTY 8IGHT"
        },{
          id:'0_0_0',
          name: "Aape"
        },{
          id:'0_0_0',
          name: "aojo"
        },{
          id:'0_0_0',
          name: "b+ab"
        },{
          id:'0_0_0',
          name: "BOY"
        },{
          id:'0_0_0',
          name: "GXG"
        },{
          id:'0_0_0',
          name: "gxg.jeans"
        },{
          id:'0_0_0',
          name: "GXG特卖"
        },{
          id:'0_0_0',
          name: "IM DAVID"
        },{
          id:'0_0_0',
          name: "SELECTED"
        },{
          id:'0_0_0',
          name: "trendiano"
        }]
      },{
        id:'0_1',
        name: "内衣",
        children: [{
          id:'0_0_0',
          name: "Blumenovum"
        },{
          id:'0_0_0',
          name: "PEACH JOHN"
        },{
          id:'0_0_0',
          name: "PRIVATE STRUCTURE"
        },{
          id:'0_0_0',
          name: "Rime"
        },{
          id:'0_0_0',
          name: "TUTUANNA"
        },{
          id:'0_0_0',
          name: "爱美丽"
        }]
      },{
        id:'0_1',
        name: "女装",
        children: [{
          id:'0_0_0',
          name: "AVVN"
        },{
          id:'0_0_0',
          name: "Bout hent ique"
        },{
          id:'0_0_0',
          name: "COCO DEAL"
        },{
          id:'0_0_0',
          name: "CR?Z！"
        },{
          id:'0_0_0',
          name: "DAZZLE"
        },{
          id:'0_0_0',
          name: "DKNY"
        },{
          id:'0_0_0',
          name: "E·LAND"
        },{
          id:'0_0_0',
          name: "earth music&ecolog"
        },{
          id:'0_0_0',
          name: "ENO"
        },{
          id:'0_0_0',
          name: "Five Plus"
        },{
          id:'0_0_0',
          name: "Hello Kitty"
        },{
          id:'0_0_0',
          name: "III VIVINIKO"
        },{
          id:'0_0_0',
          name: "Initial"
        },{
          id:'0_0_0',
          name: "JNBY"
        },{
          id:'0_0_0',
          name: "JUCY JUDY"
        },{
          id:'0_0_0',
          name: "KODICE"
        },{
          id:'0_0_0',
          name: "lily"
        },{
          id:'0_0_0',
          name: "marie n°mary"
        },{
          id:'0_0_0',
          name: "MAX&Co."
        },{
          id:'0_0_0',
          name: "MIGAINO"
        },{
          id:'0_0_0',
          name: "MISS SIXTY"
        },{
          id:'0_0_0',
          name: "missoul"
        },{
          id:'0_0_0',
          name: "MO&Co."
        },{
          id:'0_0_0',
          name: "MOUSSY"
        },{
          id:'0_0_0',
          name: "NANCY K"
        },{
          id:'0_0_0',
          name: "Ochirly"
        },{
          id:'0_0_0',
          name: "PLAYLOUNGE"
        },{
          id:'0_0_0',
          name: "snidel"
        },{
          id:'0_0_0',
          name: "tanni"
        },{
          id:'0_0_0',
          name: "test-tube"
        },{
          id:'0_0_0',
          name: "Vero moda"
        },{
          id:'0_0_0',
          name: "ZCZZ"
        },{
          id:'0_0_0',
          name: "ZUCZUG"
        },{
          id:'0_0_0',
          name: "百家好"
        },{
          id:'0_0_0',
          name: "播"
        },{
          id:'0_0_0',
          name: "乐町"
        },{
          id:'0_0_0',
          name: "斯琴"
        },{
          id:'0_0_0',
          name: "再尚秀"
        }]
      },{
        id:'0_1',
        name: "配饰",
        children: [{
          id:'0_0_0',
          name: "CK WATCH"
        },{
          id:'0_0_0',
          name: "crocs"
        },{
          id:'0_0_0',
          name: "FESSURA"
        },{
          id:'0_0_0',
          name: "FOLLIE"
        },{
          id:'0_0_0',
          name: "HAT'S ON"
        },{
          id:'0_0_0',
          name: "Hitomi Optician"
        },{
          id:'0_0_0',
          name: "hotwind"
        },{
          id:'0_0_0',
          name: "ipanema"
        },{
          id:'0_0_0',
          name: "J&M"
        },{
          id:'0_0_0',
          name: "kate spade"
        },{
          id:'0_0_0',
          name: "Kipling"
        },{
          id:'0_0_0',
          name: "La pa Y-P"
        },{
          id:'0_0_0',
          name: "MAP"
        },{
          id:'0_0_0',
          name: "MICHAEL KORS"
        },{
          id:'0_0_0',
          name: "reemoor"
        },{
          id:'0_0_0',
          name: "Samantha Thavasa"
        },{
          id:'0_0_0',
          name: "SUUNTO"
        },{
          id:'0_0_0',
          name: "SWATCH"
        },{
          id:'0_0_0',
          name: "TUSCANS"
        },{
          id:'0_0_0',
          name: "UGG"
        },{
          id:'0_0_0',
          name: "Vivi tix"
        },{
          id:'0_0_0',
          name: "阿吉豆"
        },{
          id:'0_0_0',
          name: "宝岛眼镜"
        },{
          id:'0_0_0',
          name: "靓佩"
        },{
          id:'0_0_0',
          name: "木九十"
        },{
          id:'0_0_0',
          name: "木九十"
        },{
          id:'0_0_0',
          name: "PLAYLOUNGE"
        },{
          id:'0_0_0',
          name: "西遇"
        }]
      },{
        id:'0_1',
        name: "饰品",
        children: [{
          id:'0_0_0',
          name: "KING BABY"
        }]
      },{
        id:'0_1',
        name: "数码电器",
        children: [{
          id:'0_0_0',
          name: "ALIENWARE"
        },{
          id:'0_0_0',
          name: "Apple Store"
        },{
          id:'0_0_0',
          name: "CYO VAPE"
        },{
          id:'0_0_0',
          name: "HS"
        },{
          id:'0_0_0',
          name: "HUAWEI"
        },{
          id:'0_0_0',
          name: "iPhone"
        },{
          id:'0_0_0',
          name: "Microsoft"
        },{
          id:'0_0_0',
          name: "迪信通"
        },{
          id:'0_0_0',
          name: "卡乐时代"
        },{
          id:'0_0_0',
          name: "魅族手机"
        },{
          id:'0_0_0',
          name: "三星手机"
        }]
      },{
        id:'0_1',
        name: "文化用品",
        children: [{
          id:'0_0_0',
          name: "LAMY"
        }]
      },{
        id:'0_1',
        name: "眼镜",
        children: [{
          id:'0_0_0',
          name: "LOHO"
        }]
      },{
        id:'0_1',
        name: "运动休闲",
        children: [{
          id:'0_0_0',
          name: "adidas Originals"
        },{
          id:'0_0_0',
          name: "Baleno"
        },{
          id:'0_0_0',
          name: "CONVERSE"
        },{
          id:'0_0_0',
          name: "H&M"
        },{
          id:'0_0_0',
          name: "HIPANDA"
        },{
          id:'0_0_0',
          name: "LALABOBO"
        },{
          id:'0_0_0',
          name: "MLB"
        },{
          id:'0_0_0',
          name: "Monki"
        },{
          id:'0_0_0',
          name: "new balance"
        },{
          id:'0_0_0',
          name: "NIKE"
        },{
          id:'0_0_0',
          name: "Onit suka eTiger"
        },{
          id:'0_0_0',
          name: "Paul Frank"
        },{
          id:'0_0_0',
          name: "PUMA 黑标"
        },{
          id:'0_0_0',
          name: "ROBINHOOD"
        },{
          id:'0_0_0',
          name: "THE NORTH FACE"
        },{
          id:'0_0_0',
          name: "Tous"
        },{
          id:'0_0_0',
          name: "UNDER ARMOUR"
        },{
          id:'0_0_0',
          name: "VANS"
        },{
          id:'0_0_0',
          name: "WAKE UP"
        },{
          id:'0_0_0',
          name: "航海王"
        }]
      }]
    },{
      id: '0',
      name: "生活配套",
      children: [{
        id:'0_0',
        name: "洗车",
        children: [{
          id:'0_0_0',
          name: "Cars one"
        }]
      }]
    },{
      id: '0',
      name: "休闲娱乐",
      children: [{
        id:'0_0',
        name: "美发美甲",
        children: [{
          id:'0_0_0',
          name: "BHG SALON"
        }]
      },{
        id:'0_1',
        name: "KTV",
        children: [{
          id:'0_1_0',
          name: "XOXO"
        }]
      }]
    }]
  };

  this.space = {
    tabs:['场馆', '建筑物', '楼层', '设施类型'],
   data:[{
     id: '0',
     name: "西单大悦城",
     children: [{
       id:'0_0',
       name: "西单大悦城",
       children: [{
         id:'0_0_0',
         name: "B1",
         children: [{
           id:'0_0_0_0',
           name: "6IXTY 8IGHT"
         },{
           id:'0_0_0_1',
           name: "aojo"
         },{
           id:'0_0_0_2',
           name: "Apple Store"
         },{
           id:'0_0_0_3',
           name: "Calvin Klein underwear"
         },{
           id:'0_0_0_4',
           name: "COCO DEAL"
         },{
           id:'0_0_0_4',
           name: "CR?Z！"
         },{
           id:'0_0_0_4',
           name: "ENO"
         },{
           id:'0_0_0_4',
           name: "FESSURA"
         },{
           id:'0_0_0_4',
           name: "H&M"
         },{
           id:'0_0_0_4',
           name: "HAT'S ON"
         },{
           id:'0_0_0_4',
           name: "La pa Y-P"
         },{
           id:'0_0_0_4',
           name: "LALABOBO"
         },{
           id:'0_0_0_4',
           name: "Lee"
         },{
           id:'0_0_0_4',
           name: "levis"
         },{
           id:'0_0_0_4',
           name: "pancoat"
         },{
           id:'0_0_0_4',
           name: "Paul Frank"
         },{
           id:'0_0_0_4',
           name: "PEACH JOHN"
         },{
           id:'0_0_0_4',
           name: "PUMA 黑标"
         },{
           id:'0_0_0_4',
           name: "STAY REAL"
         },{
           id:'0_0_0_4',
           name: "test-tube"
         },{
           id:'0_0_0_4',
           name: "TUTUANNA"
         },{
           id:'0_0_0_4',
           name: "阿芙香薰"
         },{
           id:'0_0_0_4',
           name: "惠比寿 杏"
         },{
           id:'0_0_0_4',
           name: "乐町"
         },{
           id:'0_0_0_4',
           name: "鲜元素"
         }]
       },{
         id:'0_0_1',
         name: "B2",
         children: [{
           id:'0_0_1_0',
           name: "ALIENWARE"
         },{
           id:'0_0_1_1',
           name: "Baleno"
         },{
           id:'0_0_1_2',
           name: "BHG"
         },{
           id:'0_0_1_3',
           name: "BHG SALON"
         },{
           id:'0_0_1_4',
           name: "DQ"
         },{
           id:'0_0_1_4',
           name: "Eimio"
         },{
           id:'0_0_1_4',
           name: "GXG特卖"
         },{
           id:'0_0_1_4',
           name: "Gandy Lab"
         },{
           id:'0_0_1_4',
           name: "Hello Kitty"
         },{
           id:'0_0_1_4',
           name: "hotwind"
         },{
           id:'0_0_1_4',
           name: "LOHO"
         },{
           id:'0_0_1_4',
           name: "NICI"
         },{
           id:'0_0_1_4',
           name: "Vivi tix"
         },{
           id:'0_0_1_4',
           name: "XOXO"
         },{
           id:'0_0_1_4',
           name: "阿吉豆"
         },{
           id:'0_0_1_4',
           name: "宝岛眼镜"
         },{
           id:'0_0_1_4',
           name: "池田回转寿司"
         },{
           id:'0_0_1_4',
           name: "池田寿司"
         },{
           id:'0_0_1_4',
           name: "呷哺呷哺"
         },{
           id:'0_0_1_4',
           name: "航海王"
         },{
           id:'0_0_1_4',
           name: "快乐柠檬"
         },{
           id:'0_0_1_4',
           name: "名创优品"
         },{
           id:'0_0_1_4',
           name: "品阁"
         },{
           id:'0_0_1_4',
           name: "全棉时代"
         },{
           id:'0_0_1_4',
           name: "万宁"
         },{
           id:'0_0_1_4',
           name: "我买网-跨境购"
         },{
           id:'0_0_1_4',
           name: "西遇"
         },{
           id:'0_0_1_4',
           name: "鲜芋仙"
         },{
           id:'0_0_1_4',
           name: "再尚秀"
         },{
           id:'0_0_1_4',
           name: "找茶"
         }]
       },{
         id:'0_0_2',
         name: "B3",
         children: [{
           id:'0_0_1_0',
           name: "arsone美车堂"
         }]
       },{
         id:'0_0_3',
         name: "F1",
         children: [{
           id:'0_0_1_0',
           name: "Aape"
         },{
           id:'0_0_1_0',
           name: "Apple Store"
         },{
           id:'0_0_1_0',
           name: "Calvin Klein"
         },{
           id:'0_0_1_0',
           name: "DKNY"
         },{
           id:'0_0_1_0',
           name: "ED hardy"
         },{
           id:'0_0_1_0',
           name: "ED hardy"
         },{
           id:'0_0_1_0',
           name: "H&M"
         },{
           id:'0_0_1_0',
           name: "Juicy Couture"
         },{
           id:'0_0_1_0',
           name: "Jurlique"
         },{
           id:'0_0_1_0',
           name: "KING BABY"
         },{
           id:'0_0_1_0',
           name: "MAX&Co."
         },{
           id:'0_0_1_0',
           name: "MICHAEL KORS"
         },{
           id:'0_0_1_0',
           name: "MISS SIXTY"
         },{
           id:'0_0_1_0',
           name: "PANDORA"
         },{
           id:'0_0_1_0',
           name: "SEPHORA"
         },{
           id:'0_0_1_0',
           name: "SWATCH"
         },{
           id:'0_0_1_0',
           name: "Samantha Thavasa"
         },{
           id:'0_0_1_0',
           name: "UGG"
         },{
           id:'0_0_1_0',
           name: "ZARA"
         },{
           id:'0_0_1_0',
           name: "kate spade"
         },{
           id:'0_0_1_0',
           name: "施华洛世奇"
         }]
       },{
         id:'0_0_4',
         name: "F2",
         children: [{
           id:'0_0_1_0',
           name: "b+ad"
         },{
           id:'0_0_1_0',
           name: "BObbi Brown"
         },{
           id:'0_0_1_0',
           name: "Calvin Klein Jeans"
         },{
           id:'0_0_1_0',
           name: "cheap monday"
         },{
           id:'0_0_1_0',
           name: "CK JEANS"
         },{
           id:'0_0_1_0',
           name: "CK WATCH"
         },{
           id:'0_0_1_0',
           name: "CK香水"
         },{
           id:'0_0_1_0',
           name: "DAZZIE"
         },{
           id:'0_0_1_0',
           name: "DIOR"
         },{
           id:'0_0_1_0',
           name: "EMPORIO ARMANI"
         },{
           id:'0_0_1_0',
           name: "EVISU"
         },{
           id:'0_0_1_0',
           name: "FOLLIE"
         },{
           id:'0_0_1_0',
           name: "G·STAR RAW"
         },{
           id:'0_0_1_0',
           name: "GAP"
         },{
           id:'0_0_1_0',
           name: "H&M"
         },{
           id:'0_0_1_0',
           name: "Hitomi Optician"
         },{
           id:'0_0_1_0',
           name: "i.t"
         },{
           id:'0_0_1_0',
           name: "innisfree"
         },{
           id:'0_0_1_0',
           name: "IZZUE"
         },{
           id:'0_0_1_0',
           name: "KIEHLS"
         },{
           id:'0_0_1_0',
           name: "KODICE"
         },{
           id:'0_0_1_0',
           name: "LAVIN香水"
         },{
           id:'0_0_1_0',
           name: "LOCCITANE"
         },{
           id:'0_0_1_0',
           name: "LOVE&LOVE"
         },{
           id:'0_0_1_0',
           name: "MAC"
         },{
           id:'0_0_1_0',
           name: "MICHAEL KORS"
         },{
           id:'0_0_1_0',
           name: "Monki"
         },{
           id:'0_0_1_0',
           name: "Ochirly"
         },{
           id:'0_0_1_0',
           name: "ORIGINS"
         },{
           id:'0_0_1_0',
           name: "REPLAY"
         },{
           id:'0_0_1_0',
           name: "Rime"
         },{
           id:'0_0_1_0',
           name: "Roger&Gallet"
         },{
           id:'0_0_1_0',
           name: "Stick house"
         },{
           id:'0_0_1_0',
           name: "TUSCANS"
         },{
           id:'0_0_1_0',
           name: "ZARA"
         },{
           id:'0_0_1_0',
           name: "ZUCZUG"
         },{
           id:'0_0_1_0',
           name: "靓佩"
         },{
           id:'0_0_1_0',
           name: "星巴克"
         },{
           id:'0_0_1_0',
           name: "珍仕菓"
         }]
       },{
         id:'0_0_4',
         name: "F3",
         children: [{
           id:'0_0_1_0',
           name: "adidas Originals"
         },{
           id:'0_0_1_0',
           name: "Bout hent ique"
         },{
           id:'0_0_1_0',
           name: "ecco"
         },{
           id:'0_0_1_0',
           name: "Five Plus"
         },{
           id:'0_0_1_0',
           name: "G2000"
         },{
           id:'0_0_1_0',
           name: "GC"
         },{
           id:'0_0_1_0',
           name: "GUESS"
         },{
           id:'0_0_1_0',
           name: "I gold"
         },{
           id:'0_0_1_0',
           name: "III VIVINIKO"
         },{
           id:'0_0_1_0',
           name: "Initial"
         },{
           id:'0_0_1_0',
           name: "Kipling"
         },{
           id:'0_0_1_0',
           name: "LOVE&LOVE"
         },{
           id:'0_0_1_0',
           name: "MAP"
         },{
           id:'0_0_1_0',
           name: "MAX FACTOR"
         },{
           id:'0_0_1_0',
           name: "MO&Co."
         },{
           id:'0_0_1_0',
           name: "MOUSSY"
         },{
           id:'0_0_1_0',
           name: "MUJI"
         },{
           id:'0_0_1_0',
           name: "PRIVATE STRUCTURE"
         },{
           id:'0_0_1_0',
           name: "SELECTED"
         },{
           id:'0_0_1_0',
           name: "snidel"
         },{
           id:'0_0_1_0',
           name: "tanni"
         },{
           id:'0_0_1_0',
           name: "UNIQLO"
         },{
           id:'0_0_1_0',
           name: "WAKE UP"
         },{
           id:'0_0_1_0',
           name: "ZARA"
         },{
           id:'0_0_1_0',
           name: "汉堡王"
         },{
           id:'0_0_1_0',
           name: "摩提工坊"
         },{
           id:'0_0_1_0',
           name: "斯琴"
         },{
           id:'0_0_1_0',
           name: "太平洋咖啡"
         }]
       },{
         id:'0_0_4',
         name: "F4",
         children: [{
           id:'0_0_1_0',
           name: "AVVN"
         },{
           id:'0_0_1_0',
           name: "Blumenovum"
         },{
           id:'0_0_1_0',
           name: "CYO VAPE"
         },{
           id:'0_0_1_0',
           name: "CYO VAPE"
         },{
           id:'0_0_1_0',
           name: "earth music&ecolog"
         },{
           id:'0_0_1_0',
           name: "GXG"
         },{
           id:'0_0_1_0',
           name: "HS"
         },{
           id:'0_0_1_0',
           name: "IM DAVID"
         },{
           id:'0_0_1_0',
           name: "JACK JONES"
         },{
           id:'0_0_1_0',
           name: "JNBY"
         },{
           id:'0_0_1_0',
           name: "JUCY JUDY"
         },{
           id:'0_0_1_0',
           name: "LAMY"
         },{
           id:'0_0_1_0',
           name: "lily"
         },{
           id:'0_0_1_0',
           name: "marie n°mary"
         },{
           id:'0_0_1_0',
           name: "MIGAINO"
         },{
           id:'0_0_1_0',
           name: "missoul"
         },{
           id:'0_0_1_0',
           name: "NANCY K"
         },{
           id:'0_0_1_0',
           name: "PLAYLOUNGE"
         },{
           id:'0_0_1_0',
           name: "PRICH"
         },{
           id:'0_0_1_0',
           name: "ROBINHOOD"
         },{
           id:'0_0_1_0',
           name: "trendiano"
         },{
           id:'0_0_1_0',
           name: "Vero moda"
         },{
           id:'0_0_1_0',
           name: "ZCZZ"
         },{
           id:'0_0_1_0',
           name: "爱美丽"
         },{
           id:'0_0_1_0',
           name: "百家好"
         },{
           id:'0_0_1_0',
           name: "播"
         },{
           id:'0_0_1_0',
           name: "速写"
         },{
           id:'0_0_1_0',
           name: "味千拉面"
         }]
       },{
         id:'0_0_4',
         name: "F5",
         children: [{
           id:'0_0_1_0',
           name: "BOY"
         },{
           id:'0_0_1_0',
           name: "CONVERSE"
         },{
           id:'0_0_1_0',
           name: "crocs"
         },{
           id:'0_0_1_0',
           name: "gxg.jeans"
         },{
           id:'0_0_1_0',
           name: "HIPANDA"
         },{
           id:'0_0_1_0',
           name: "HUAWEI"
         },{
           id:'0_0_1_0',
           name: "ipanema"
         },{
           id:'0_0_1_0',
           name: "iPhone"
         },{
           id:'0_0_1_0',
           name: "J&M"
         },{
           id:'0_0_1_0',
           name: "Microsoft"
         },{
           id:'0_0_1_0',
           name: "MLB"
         },{
           id:'0_0_1_0',
           name: "new balance"
         },{
           id:'0_0_1_0',
           name: "NIKE"
         },{
           id:'0_0_1_0',
           name: "Onit suka eTiger"
         },{
           id:'0_0_1_0',
           name: "reemoor"
         },{
           id:'0_0_1_0',
           name: "SUUNTO"
         },{
           id:'0_0_1_0',
           name: "THE NORTH FACE"
         },{
           id:'0_0_1_0',
           name: "UNDER ARMOUR"
         },{
           id:'0_0_1_0',
           name: "VANS"
         },{
           id:'0_0_1_0',
           name: "迪信通"
         },{
           id:'0_0_1_0',
           name: "魅族手机"
         },{
           id:'0_0_1_0',
           name: "木九十"
         },{
           id:'0_0_1_0',
           name: "南小馆"
         },{
           id:'0_0_1_0',
           name: "瑞士军刀、ZIPPO"
         },{
           id:'0_0_1_0',
           name: "三星手机"
         }]
       },{
         id:'0_0_4',
         name: "F6",
         children: [{
           id:'0_0_1_0',
           name: "巴贝拉"
         },{
           id:'0_0_1_0',
           name: "大快活"
         },{
           id:'0_0_1_0',
           name: "凡情蒂诺巧克力"
         },{
           id:'0_0_1_0',
           name: "港丽餐厅"
         },{
           id:'0_0_1_0',
           name: "咖喱虎"
         },{
           id:'0_0_1_0',
           name: "肯德基"
         },{
           id:'0_0_1_0',
           name: "鹿港小镇"
         },{
           id:'0_0_1_0',
           name: "满记甜品"
         },{
           id:'0_0_1_0',
           name: "鲜元素"
         },{
           id:'0_0_1_0',
           name: "印巷小馆"
         }]
       },{
         id:'0_0_4',
         name: "F7",
         children: [{
           id:'0_0_1_0',
           name: "北京小王府红茶餐厅"
         },{
           id:'0_0_1_0',
           name: "川辣汇"
         },{
           id:'0_0_1_0',
           name: "大长今"
         },{
           id:'0_0_1_0',
           name: "豆捞坊"
         },{
           id:'0_0_1_0',
           name: "禾绿回转寿司"
         },{
           id:'0_0_1_0',
           name: "浆宝"
         },{
           id:'0_0_1_0',
           name: "蕉叶"
         },{
           id:'0_0_1_0',
           name: "井格老灶火锅"
         },{
           id:'0_0_1_0',
           name: "漫果工坊"
         },{
           id:'0_0_1_0',
           name: "拿渡麻辣香锅"
         },{
           id:'0_0_1_0',
           name: "鲜饮空间"
         }]
       },{
         id:'0_0_4',
         name: "F8",
         children: [{
           id:'0_0_1_0',
           name: "避风塘"
         },{
           id:'0_0_1_0',
           name: "边境共和国"
         },{
           id:'0_0_1_0',
           name: "沸腾夜话"
         },{
           id:'0_0_1_0',
           name: "吉野家"
         },{
           id:'0_0_1_0',
           name: "卡乐时代"
         },{
           id:'0_0_1_0',
           name: "一味一诚"
         }]
       }]
     }]
   }]
  };

  var self = this;
  self.cols = [{
    field: "id",
    title: 'ID',
    show: false
  }, {
    field: "name",
    title: "指标",
    sortable: "name",
    show: true,
  }, {
    field: "unit",
    title: "单位",
    show: true,
  }, {
    field: "trend",
    title: "趋势",
    show: true
  }, {
    field: "value",
    title: "当期值",
    sortable: "value",
    show: true
  }, {
    field: "_d_value",
    title: "前期值",
    show: true
  }, {
    field: "doD",
    title: "环比",
    sortable: "doD",
    show: true
  }];

  var getSplineConfig = function(xData, yData, unit, width){
    var yAxisMin = null, yAxisMax = null;
    var maxY, minY, delta;
    for(var i=0; i<yData.length; i++){
      yData[i] = Number(yData[i]);
      if(maxY == undefined || minY == undefined){
        maxY = yData[i];
        minY = yData[i];
      }else{
        if(maxY < yData[i]){
          maxY = yData[i];
        }
        if(minY > yData[i]){
          minY = yData[i];
        }
      }
    }
    delta = (maxY - minY)/5;
    yAxisMin = (minY - delta)>0 ? minY - delta : minY*2;
    yAxisMax = maxY + delta;

    //长度适配
    

    // for(var i=0; i<xData.length; i++){
    //   xData[i] = formatDate(xData[i]);//xData[i].slice(0, 4) + "-" + xData[i].slice(4,6)+ "-" +xData[i].slice(6);
    // }
    var config = {
      options: {
          exporting: {
              enabled: false
          },
          chart: {
            backgroundColor: null,
            borderWidth: 0,
            type: 'area',
            margin: [2, 0, 2, 0],
            width: width,
            height: 40,
            style: {
                overflow: 'visible'
            },
            skipClone: true
          },
          title: {
              text: ''
          },
          credits: {
              enabled: false
          },
          xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: [],
            visible: false,
            categories: [10,11,12,13,14,15,16,17,18,19,20,21,22] //x轴数据
          },
          yAxis: {
            min: yAxisMin,
            max: yAxisMax,
            visible: false,
            labels: {
                enabled: false
            },
            title: {
                text: null
            }
          },
          legend: {
              enabled: false
          },
          tooltip: {
              backgroundColor: "#fff",
              borderWidth: 0,
              shadow: false,
              useHTML: true,
              hideDelay: 0,
              shared: true,
              padding: 0,
              positioner: function (w, h, point) {
                  return { x: point.plotX - w / 2, y: point.plotY - h };
              },
              headerFormat: '<span style="font-size: 10px">' +  '{point.x}:</span><br/>',
              pointFormat: '<b>{point.y}</b> '+unit
          },
          plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            },
            series: {
                animation: false,
                lineWidth: 1,
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                marker: {
                    radius: 1,
                    states: {
                        hover: {
                            radius: 2
                        }
                    }
                },
                fillOpacity: 0.75
            },
            column: {
                negativeColor: '#910000',
                borderColor: 'silver'
            }
          },
      },
      noData:"暂无数据",
      lang:{
        noData:"暂无数据",
        "loading": "正在加载..."
      },
      series: [{
        color: '#B8EBFF',
          data: yData //Y轴数据
      }],
      loading: false
    };
    return config;
  };

  self.indexList = [{
    id:0,
    name:"新增客户数",
    unit:"人数",
    trend:[2022,3535,4441,5111,5729,5778,5795,5483,5128,4985,4719,3141,913],
    value: 282768,
    _d_value: 262568,
    doD: 7.69,
    cgEnable: true,
    splineData: getSplineConfig("xData", [2022,3535,4441,5111,5729,5778,5795,5483,5128,4985,4719,3141,913], "人")
  },{
    id:1,
    name:"到访客户数",
    unit:"人数",
    trend:[6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022],
    value: 599162,
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    splineData: getSplineConfig("xData", [6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022], "人")
  },{
    id:2,
    name:"进店客户数",
    unit:"人数",
    trend:[6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022],
    value: 599162,
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    splineData: getSplineConfig("xData", [6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022], "人")
  },{
    id:3,
    name:"驻留客户数",
    unit:"人数",
    trend:[5970,9477,11620,12024,12444,12313,12435,12294,11832,11395,10889,8215,3676],
    value: 563037,
    _d_value: 658185,
    doD: -14.45,
    cgEnable: true,
    splineData: getSplineConfig("xData", [5970,9477,11620,12024,12444,12313,12435,12294,11832,11395,10889,8215,3676], "人")
  },{
    id:4,
    name:"人均驻留时长",
    unit:"分钟",
    trend:"趋势图",
    value: 20000,
    _d_value: 20000,
    doD: 0.05
  }];

  self.tableParams = new ngTableParams({}, {
    dataset: self.indexList
  });
  
  self.isLastPage = isLastPage;
  
  function isLastPage(){
    return self.tableParams.page() === totalPages();
  }
  
  function totalPages(){
    return Math.ceil(self.tableParams.total() / self.tableParams.count());
  }

  this.showDetails = function(row){
     $state.go('app.home.indexdetails');
  }
  this.showCgAnalysis = function(row){
    $state.go('app.home.cganalysis');
  }
  this.delete = function(index){
    for(var i=index; i<self.indexList.length; i++){

      if((i+1) != self.indexList.length){
        self.indexList[i] = self.indexList[i+1];
      }
      else{
        self.indexList.pop();
      }
    }
    self.tableParams = new ngTableParams({}, {
      dataset: self.indexList
    });
  }
}