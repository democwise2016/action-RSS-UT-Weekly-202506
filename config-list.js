const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  {
    title: '神奇買家 買東西',
    feedID: 'SurpriseBuyer',
    homepageURL: 'https://www.youtube.com/channel/UCjL1ratS2reFUKJra9Ahd2w',
    // itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '胡子Huzi',
    feedID: 'Huzi',
    homepageURL: 'https://www.youtube.com/channel/UC9YOQFPfEUXbulKDtxeqqBA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '大狸子切切裡 Cherry OFFICIAL CHANNEL',
    feedID: 'cherry_official',
    homepageURL: 'https://www.youtube.com/channel/UCAcum7VtjCjEUpWyt6tms0Q',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '原子能 聊 程式',
    feedID: 'yuan_zi_neng',
    homepageURL: 'https://www.youtube.com/channel/UCdyIYolHVk-vx4EK_Su6C6w',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '羅卡Rocca 玩 遊戲',
    feedID: 'roccarocca45',
    homepageURL: 'https://www.youtube.com/channel/UCkQMrI3g9wV2F5CsIi6odmQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },

  // ====== 以上 5 個 ========
  
  {
    title: '狐狸牧場 foxranch',
    feedID: 'foxranch',
    homepageURL: 'https://www.youtube.com/channel/UCV4mpMSInbFxAIAGFk8e_JQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '小蔡先生の美食廢片',
    feedID: 'food_fat_plan',
    homepageURL: 'https://www.youtube.com/channel/UCusQaUbfCyg98F9MGfbXToA',
    // itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Dio Chan 玩 遊戲',
    feedID: 'diochan1055',
    homepageURL: 'https://www.youtube.com/channel/UCAQmUESq4GxO1b_iBCrYlTA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'cheap 講 歷史',
    feedID: 'cheapaoe',
    homepageURL: 'https://www.youtube.com/channel/UCGGrblndNzi86WY5lJkQJiA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '優尼客空間設計 講 居家',
    feedID: 'unique-design',
    homepageURL: 'https://www.youtube.com/channel/UCf0mBuLbLy0gRnsptllxSUg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '平民遊戲工作室 玩 遊戲',
    feedID: 'OGS_Yuki',
    homepageURL: 'https://www.youtube.com/channel/UCOOzVNnAm0z6v1ImCftzWnw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '肥宅MS',
    feedID: 'otakumsvideo',
    homepageURL: 'https://www.youtube.com/channel/UCBOBS5RdHd2Owytoj4PqPqA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: 'IT咖啡馆',
      feedID: 'it-coffee',
      homepageURL: 'https://www.youtube.com/channel/UCXLV-KfDQAFUJ_as9H1Lfbw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
      ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
    },
  ]
}


module.exports = feedList
