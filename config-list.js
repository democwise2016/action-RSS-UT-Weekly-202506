const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  {
    title: '神奇買家 買東西',
    feedID: 'Huzi',
    homepageURL: 'https://www.youtube.com/channel/UCjL1ratS2reFUKJra9Ahd2w',
    // itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '胡子Huzi',
    feedID: 'SurpriseBuyer',
    homepageURL: 'https://www.youtube.com/channel/UC9YOQFPfEUXbulKDtxeqqBA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  

  // ====== 以上 15 個，滿了！！ ========
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
