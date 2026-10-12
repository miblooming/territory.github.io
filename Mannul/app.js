/* Offline, dependency-free manual. All imported strings are escaped before rendering. */
(() => {
  'use strict';
  const D = window.MANUAL_DATA;
  if (!D) { document.getElementById('main').textContent = '资料文件未加载 / Data file could not be loaded.'; return; }
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const tri = (a,b,c) => [a,b,c];
  const TEXT = {
    brand:tri('种田与征战 · 玩家手册','PLAYER’S FIELD MANUAL','種田與征戰 · 玩家手冊'),
    nav:tri('手册目录','IN THIS MANUAL','手冊目錄'),offline:tri('离线可用 · 三语支持','Offline · Three languages','離線可用 · 三語支援'),
    home:tri('手册首页','Manual home','手冊首頁'),all:tri('全部','All','全部'),results:tri('条资料','entries','條資料'),
    heroEyebrow:tri('TERRITORY / 领主的随身指南','TERRITORY / THE LORD’S COMPANION','TERRITORY / 領主的隨身指南'),
    heroTitle:tri('你的领地，从这里开始。','Your territory starts here.','你的領地，從這裡開始。'),
    heroBody:tri('从第一张床，到一座繁荣的王国。\n探索生存、生产与征战的规则，让每一个决定都有据可查。','From your first bed to a thriving kingdom.\nExplore survival, production and warfare, with the information to guide every decision.','從第一張床，到一座繁榮的王國。\n探索生存、生產與征戰的規則，讓每一個決定都有據可查。'),
    start:tri('开始阅读','Start reading','開始閱讀'),heroBadge:tri('种田 · 经营 · 征战','FARM · BUILD · CONQUER','種田 · 經營 · 征戰'),
    search:tri('搜索建筑、物品、配方、科技或游戏规则…','Search buildings, items, recipes, research or rules…','搜尋建築、物品、配方、科技或遊戲規則…'),
    explore:tri('翻开手册','Explore the manual','翻開手冊'),chapters:tri('10 个章节 · 随时查阅','10 chapters · Always at hand','10 個章節 · 隨時查閱'),
    popular:tri('经常查阅','Useful starting points','經常查閱'),
    noteTitle:tri('先理解规则，再建设领地','Understand the rules. Build with purpose.','先理解規則，再建設領地'),
    noteBody:tri('每个资料条目都能连接到相关设施、原料、配方或科技。遇到“不知道怎么获得”的物品，从它的来源开始查。','Follow connections between facilities, materials, recipes and research. If you need an item, start with its sources.','每個資料條目都能連接到相關設施、原料、配方或科技。遇到「不知道怎麼獲得」的物品，從它的來源開始查。'),
    bookmarks:tri('我的收藏','My bookmarks','我的收藏'),bookmarkDesc:tri('收藏常用资料，随时回到需要的信息。收藏保存在当前浏览器中。','Keep frequently used entries close. Bookmarks are saved in this browser.','收藏常用資料，隨時回到需要的資訊。收藏儲存在目前瀏覽器中。'),
    searchTitle:tri('搜索手册','Search the manual','搜尋手冊'),searchDesc:tri('搜索会同时匹配简中、英文、繁体的名称和说明。','Search matches names and descriptions in all three languages.','搜尋會同時比對簡中、英文、繁體的名稱和說明。'),
    clear:tri('清空搜索','Clear search','清空搜尋'),noResults:tri('暂时没有匹配资料。试试其他关键词或筛选条件。','No matching entries. Try another keyword or filter.','暫時沒有符合的資料。試試其他關鍵字或篩選條件。'),
    noBookmarks:tri('还没有收藏。打开资料，点击右上角星标即可收藏。','No bookmarks yet. Open an entry and select the star to save it.','還沒有收藏。開啟資料，點擊右上角星號即可收藏。'),
    prev:tri('上一页','Previous','上一頁'),next:tri('下一页','Next','下一頁'),page:tri('页','Page','頁'),
    details:tri('查看详情','View details','查看詳情'),back:tri('← 返回资料','← Back to entries','← 返回資料'),
    values:tri('基础数值与条件','Base values & conditions','基礎數值與條件'),materials:tri('材料清单','Materials','材料清單'),
    related:tri('相关资料','Related entries','相關資料'),saved:tri('已收藏','Bookmarked','已收藏'),save:tri('收藏此条目','Bookmark this entry','收藏此條目'),removed:tri('已取消收藏','Bookmark removed','已取消收藏'),
    calc:tri('生产数量计算','Production calculator','生產數量計算'),target:tri('希望获得的产物数量','Desired output quantity','希望獲得的產物數量'),
    batch:tri('批','batches','批'),output:tri('预计基础产量','Base output','預計基礎產量'),baseWork:tri('串行基础工期','Serial base duration','串行基礎工期'),
    days:tri('天','days','天'),category:tri('任选该类别材料','Choose from this category','任選該類別材料'),
    calcNote:tri('按整批生产向上取整；工期未计入效率、搬运、等待或并行生产。','Rounds up to whole batches. Time excludes efficiency, transport, waiting and parallel production.','按整批生產向上取整；工期未計入效率、搬運、等待或並行生產。'),
    loot:tri('可能的掉落组合','Possible loot bundles','可能的掉落組合'),weight:tri('配置权重占比','Configured weight share','配置權重占比'),
    lootNote:tri('各行是候选组合。权重比例来自配置；实际随机选择由游戏运行逻辑决定。','Each row is a candidate bundle. Shares are derived from configured weights; runtime logic selects the actual drop.','各列是候選組合。權重比例來自配置；實際隨機選擇由遊戲執行邏輯決定。'),
    calendar:tri('播种日历','Sowing calendar','播種日曆'),calendarDesc:tri('选择季节月份，查看配置允许在该月播种的作物和果树。','Select a seasonal month to see crops and orchards eligible for sowing.','選擇季節月份，查看配置允許在該月播種的作物和果樹。'),
    noSow:tri('本月没有可播种条目；可查看花卉和饲养资料。','No listed sowing options this month. Browse flowers and husbandry instead.','本月沒有可播種條目；可查看花卉和飼養資料。'),
    allLevels:tri('全部等级','All levels','全部等級'),level:tri('等级','Level','等級'),
    spoiler:tri('此条目含任务、奖励或隐藏内容，可能涉及剧透。','This entry may reveal missions, rewards or hidden content.','此條目含任務、獎勵或隱藏內容，可能涉及劇透。'),
    hideSpoiler:tri('隐藏内容','Hidden content','隱藏內容'),reveal:tri('显示隐藏内容','Reveal hidden content','顯示隱藏內容'),
    coverage:tri('资料来源与范围','Sources & scope','資料來源與範圍'),
    coverageBody:tri('本手册参考游戏内帮助界面，并分析 D.cs 索引的数据表。只展示可读玩法、基础数值和关联资料，程序资源映射、动画、随机姓名等不生成独立玩家条目。下表列出全部索引表的处理情况。','This manual follows the in-game help structure and analyzes tables indexed by D.cs. It presents readable gameplay information, base values and related entries. Resource mappings, animation and random names do not become player entries. The table below accounts for every indexed table.','本手冊參考遊戲內說明介面，並分析 D.cs 索引的資料表。只展示可讀玩法、基礎數值和關聯資料，程式資源對應、動畫、隨機姓名等不產生獨立玩家條目。下表列出全部索引表的處理情況。'),
    table:tri('配置表','Source table','配置表'),rowCount:tri('行数','Rows','列數'),scope:tri('处理方式','Treatment','處理方式'),
    included:tri('已整合','Integrated','已整合'),support:tri('辅助 / 内部配置','Supporting / internal','輔助 / 內部配置'),
    footer:tri('领地：种田与征战 · 玩家手册','Territory: Farming and Fighting · Player manual','領地：種田與征戰 · 玩家手冊'),
    version:tri('配置快照','Configuration snapshot','配置快照'),
    sort:tri('排序','Sort','排序'),defaultSort:tri('默认顺序','Default order','預設順序'),nameSort:tri('名称','Name','名稱'),
    showNum:tri('显示','Showing','顯示'),storeUnavailable:tri('浏览器未允许保存；本次会话仍可使用收藏。','Browser storage is unavailable; bookmarks work for this session.','瀏覽器未允許儲存；本次工作階段仍可使用收藏。'),
  };
  const SECTIONS = [
    {id:'start',symbol:'⌘',title:tri('入门与操作','Getting started','入門與操作'),desc:tri('快捷键、生存指南、重要说明与游戏教程。','Controls, survival tips, important notices and tutorials.','快捷鍵、生存指南、重要說明與遊戲教學。')},
    {id:'build',symbol:'⌂',title:tri('建筑设施','Buildings','建築設施'),desc:tri('建造材料、占地、工作岗位与科技条件。','Materials, footprints, workers and unlock conditions.','建造材料、占地、工作崗位與科技條件。')},
    {id:'items',symbol:'◇',title:tri('物品图鉴','Item encyclopedia','物品圖鑑'),desc:tri('食物、工具、资源与特殊物品的来源和用途。','Sources and uses of food, tools, resources and special items.','食物、工具、資源與特殊物品的來源和用途。')},
    {id:'production',symbol:'⚒',title:tri('生产与配方','Production & recipes','生產與配方'),desc:tri('完整原料关系，配方选择与生产数量计算。','Follow materials, compare recipes and calculate batches.','完整原料關係，配方選擇與生產數量計算。')},
    {id:'farming',symbol:'♧',title:tri('农业与饲养','Farming & husbandry','農業與飼養'),desc:tri('播种日历、生长温度、产量和动物饲养。','Sowing seasons, growth temperatures, yields and animals.','播種日曆、生長溫度、產量和動物飼養。')},
    {id:'people',symbol:'♙',title:tri('居民与生活','People & daily life','居民與生活'),desc:tri('种族、职业、性格、疾病、情绪与领主光环。','Races, careers, traits, disease, moods and lord auras.','種族、職業、性格、疾病、情緒與領主光環。')},
    {id:'research',symbol:'⌑',title:tri('科技与解锁','Research & unlocks','科技與解鎖'),desc:tri('前置科技、研究成本与解锁的设施和物品。','Prerequisites, research costs and unlocked content.','前置科技、研究成本與解鎖的設施和物品。')},
    {id:'battle',symbol:'⚔',title:tri('战斗与龙','Combat & dragons','戰鬥與龍'),desc:tri('士兵装备、怪物等级、龙的升级与试炼。','Soldiers, gear, monster levels, dragons and trials.','士兵裝備、怪物等級、龍的升級與試煉。')},
    {id:'world',symbol:'♜',title:tri('世界与贸易','World & trade','世界與貿易'),desc:tri('地区、发展、势力外交、村庄、船舶与航线。','Regions, development, diplomacy, villages, ships and routes.','地區、發展、勢力外交、村莊、船舶與航線。')},
    {id:'quests',symbol:'⚑',title:tri('任务与成就','Missions & achievements','任務與成就'),desc:tri('任务关系、成就条件与可获得的情报。','Mission connections, achievement conditions and intelligence.','任務關係、成就條件與可獲得的情報。')},
  ];
  Object.assign(TEXT,{
    thanksAll:tri('全部群友','All members','全部群友'),thanksHelp:tri('答疑','Q&A','答疑'),thanksActive:tri('活跃交流','Active participants','活躍交流'),thanksAtmosphere:tri('氛围与特色','Chat spirit','氣氛與特色'),
    thanksSearch:tri('搜索昵称或头衔…','Search a nickname or title…','搜尋暱稱或頭銜…'),thanksMethod:tri('贡献指数怎么算？','How are contributions counted?','貢獻指數怎麼算？'),
    contribution:tri('答疑贡献','Q&A index','答疑貢獻'),uncounted:tri('尚未计入','Not yet counted','尚未計入'),thanksQuestions:tri('个问题','questions','個問題'),thanksPlayers:tri('位群友','players','位群友'),
    thanksGameText:tri('游戏交流','Game discussion','遊戲交流'),thanksMessages:tri('条','messages','條'),thanksDays:tri('天','days','天'),thanksResolved:tri('原问者确认解决','Confirmed resolved by the asker','原問者確認解決'),
    thanksFound:tri('位群友','members','位群友'),thanksNoMatch:tri('没有匹配的群友，试试其他昵称或头衔。','No matching members. Try another nickname or title.','沒有符合的群友，試試其他暱稱或頭銜。'),
    contents:tri('目录','Contents','目錄'),showIndex:tri('展开目录','Show contents','展開目錄'),hideIndex:tri('收起目录','Hide contents','收起目錄'),
    landscape:tri('横屏','Landscape','橫屏'),portrait:tri('竖屏','Portrait','直向'),
    switchLandscape:tri('切换为横屏','Switch to landscape','切換為橫屏'),switchPortrait:tri('切换为竖屏','Switch to portrait','切換為直向'),
    menuLabel:tri('手册主导航','Main navigation','手冊主導覽'),
    topics:tri('玩法专题','Gameplay explanations','玩法專題'),numbers:tri('规则数值','Rule values','規則數值'),
    compactSearch:tri('搜索当前章节…','Search this chapter…','搜尋目前章節…'),
    what:tri('是什么','What it is','是什麼'),rules:tri('规则','Rules','規則'),how:tri('如何操作','How to operate','如何操作'),
    mechanism:tri('原理解释图','Mechanism diagram','原理解釋圖'),
    sample:tri('数值演示（可调整）','Adjustable example','數值示範（可調整）'),
    illustration:tri('调整数字，查看还能搬走多少。','Change the amounts to see what can still be moved.','調整數字，查看還能搬走多少。'),
    actual:tri('实际库存','Actual stock','實際庫存'),plan:tri('计划保留','Planned reserve','計畫保留'),reserved:tri('已被任务预占','Reserved by tasks','已被任務預佔'),
    available:tri('可供转运','Available to transfer','可供轉運'),
    conditions:tri('仍需满足：运输许可、物品筛选、范围、通路和接收空间。','Still requires transport permissions, filters, range, access and receiving space.','仍需滿足：運輸許可、物品篩選、範圍、通路和接收空間。'),
    index:tri('章节目录','Chapter index','章節目錄'),empty:tri('选择左侧条目查看说明。','Select an entry from the index.','選擇左側條目查看說明。'),
    seeAlso:tri('继续查阅','Related reading','繼續查閱'),source:tri('规则依据','Rule sources','規則依據'),
    showQuestSpoilers:tri('不隐藏剧透内容','Show spoilers','不隱藏劇透內容'),questConditions:tri('达成条件','Completion requirements','達成條件'),questRewards:tri('奖励','Rewards','獎勵'),questNotes:tri('领取与判定说明','Claiming and checks','領取與判定說明'),
    filters:tri('筛选','Filters','篩選'),resetFilters:tri('重置筛选','Reset filters','重設篩選'),
    filterCategory:tri('分类','Category','分類'),filterFacility:tri('生产设施','Production facility','生產設施'),
    filterPlacement:tri('放置环境','Placement','放置環境'),filterRelocate:tri('可搬迁','Relocatable','可搬遷'),
    filterSow:tri('播种月份','Sowing month','播種月份'),filterPrice:tri('基础价格','Base price','基礎價格'),
    filterResearch:tri('配方研究','Recipe research','配方研究'),filterChapter:tri('章节','Chapter','章節'),
    multiSelect:tri('多选','Multi-select','多選'),resetShort:tri('重置','Reset','重設'),
    filterHint:tri('每项单选，不同项组合筛选','One option per filter; combine different filters','每項單選，不同項組合篩選'),
    filterHintMulti:tri('每项可多选，不同项组合筛选','Multiple options per filter; combine different filters','每項可多選，不同項組合篩選'),
    filterModeHelp:tri('关闭多选时，每项保留最后选择','Turning multi-select off keeps the last choice in each filter','關閉多選時，每項保留最後選擇'),
    community:tri('玩家社区与联系','Community & contact','玩家社群與聯絡'),
    qqGroup3:tri('游戏《领地》玩家QQ群3','Territory player QQ group 3','遊戲《領地》玩家QQ群3'),
    qqGroup4:tri('游戏《领地》玩家QQ群4','Territory player QQ group 4','遊戲《領地》玩家QQ群4'),
    email:tri('联系邮箱','Email','聯絡信箱'),bilibili:tri('B站主页','Bilibili profile','B站主頁'),
    overview:tri('手册说明','About this manual','手冊說明'),homeBody:tri('查具体数值，也查它们如何生效。\n本手册按玩法规则与游戏操作组织，帮助你理解系统并自行作出决定。','Look up concrete values and how they take effect.\nRead gameplay rules and operations, then make your own decisions.','查具體數值，也查它們如何生效。\n本手冊按玩法規則與遊戲操作組織，幫助你理解系統並自行作出決定。'),
  });
  SECTIONS.unshift({id:'topics',symbol:'▤',title:TEXT.topics,desc:tri('物资送不到、马车不发车、生产停住了？从这里查。','Goods missing, wagons waiting or production stopped? Find the answer here.','物資送不到、馬車不發車、生產停住了？從這裡查。')});
  SECTIONS.splice(1,0,{id:'numbers',symbol:'#',title:TEXT.numbers,desc:tri('从基础规则中抽取的负重、容量、时间、阈值与效率。','Weight, capacity, time, thresholds and efficiency extracted from base rules.','從基礎規則中抽取的負重、容量、時間、閾值與效率。')});
  SECTIONS.splice(2,0,{id:'faq',symbol:'?',title:tri('常见问题 / FAQ','Frequently asked questions','常見問題 / FAQ'),desc:tri('从玩家反复遇到的问题出发，按当前代码核对规则。','Recurring player questions checked against current game rules.','從玩家反覆遇到的問題出發，按目前程式碼核對規則。')});
  Object.assign(TEXT,{faq:tri('常见问题 / FAQ','Frequently asked questions','常見問題 / FAQ'),thanks:tri('谢谢，把答案递给下一位的人','Thanks for passing answers to the next player','謝謝，把答案遞給下一位的人')});
  let lang=window.TerritoryManualLocale.resolveLanguage(new URL(location.href).searchParams.get('lang'),navigator.languages?.[0]||navigator.language);
  let saved=new Set();
  try {const a=JSON.parse(localStorage.getItem('territory-manual-bookmarks')||'[]');if(Array.isArray(a))saved=new Set(a.filter(k=>typeof k==='string'));}catch{}
  const entries=D.entries,bykey=new Map(entries.map(e=>[e.key,e]));
  const tr=a=>Array.isArray(a)?a[lang]??a[0]:String(a??'');
  const t=k=>tr(TEXT[k]);
  const nf=x=>Number(x).toLocaleString(D.languages[lang],{maximumFractionDigits:3});
  const normalize=s=>String(s).normalize('NFKC').toLocaleLowerCase();
  const sectionInfo=id=>SECTIONS.find(s=>s.id===id);
  const counts=Object.fromEntries(SECTIONS.map(s=>[s.id,entries.filter(e=>e.section===s.id).length]));
  const searchable=new Map(entries.map(e=>[e.key,normalize([...e.title,...e.body,...e.group,...((e.quest? [...e.quest.conditions,...e.quest.rewards,...e.quest.notes]:[]).flat()),...e.stats.flatMap(s=>[...s.label,...(Array.isArray(s.value)?s.value:[s.value])]),...((e.topic?.blocks||[]).flatMap(b=>[...(b.title||[]),...(b.text||[]),...(b.points||[]).flat(),...(b.table?.columns||[]).flat(),...(b.table?.rows||[]).flat(2)]))].join(' '))]));
  let state={section:'home',q:'',facets:{},multiSelect:false,showQuestSpoilers:false,sort:'default',visible:80,selected:''},backStack=[],revealed=new Set();
  const compactScreen=window.matchMedia('(max-width:1100px)');
  let indexOpen=!compactScreen.matches;
  function updateLayoutControls(){
    const nav=document.querySelector('.content-nav'),reader=document.querySelector('.detail-pane');
    if(nav){
      nav.id='content-index';nav.hidden=!indexOpen;nav.inert=!indexOpen;nav.setAttribute('aria-label',t('index'));
      if(!nav.querySelector('[data-close-index]'))nav.querySelector('.index-heading').insertAdjacentHTML('beforeend','<button class="index-close icon-button" data-close-index><span aria-hidden="true">×</span></button>');
      const close=nav.querySelector('[data-close-index]');close.title=t('hideIndex');close.setAttribute('aria-label',t('hideIndex'));
    }
    if(reader){reader.inert=compactScreen.matches&&indexOpen;reader.tabIndex=-1;}
    document.body.classList.toggle('index-collapsed',!indexOpen);
    document.body.classList.toggle('index-open',indexOpen);
    const toggle=$('index-toggle');toggle.hidden=!nav;toggle.setAttribute('aria-expanded',String(indexOpen));
    toggle.setAttribute('aria-label',t(indexOpen?'hideIndex':'showIndex'));toggle.title=t(indexOpen?'hideIndex':'showIndex');
    $('index-toggle-label').textContent=t('contents');
    $('menu-toggle').setAttribute('aria-label',t('menuLabel'));
    $('bookmark-view').setAttribute('aria-label',t('bookmarks'));
    let veil=$('index-veil');
    if(!veil){veil=document.createElement('button');veil.id='index-veil';veil.tabIndex=-1;$('main').appendChild(veil);}
    veil.hidden=!compactScreen.matches||!indexOpen;veil.setAttribute('aria-label',t('hideIndex'));
    updateOrientationControl();
  }
  function updateOrientationControl(){
    const native=window.TerritoryManualNative,button=$('orientation-toggle');
    button.hidden=!native||typeof native.rotate!=='function';
    const next=native?.orientation==='landscape'?'Portrait':'Landscape';
    button.setAttribute('aria-label',t('switch'+next));button.title=t('switch'+next);
    $('orientation-label').textContent=t(next.toLowerCase());
  }
  function setIndex(open,focus=false){
    if(open)setMenu(false);
    indexOpen=open;updateLayoutControls();
    if(focus)(open?document.querySelector('[data-close-index]'):$('index-toggle'))?.focus({preventScroll:true});
  }
  function dismissOverlay(){
    if(document.body.classList.contains('menu-open')){setMenu(false);$('menu-toggle').focus({preventScroll:true});return true;}
    if(compactScreen.matches&&indexOpen){setIndex(false,true);return true;}
    return false;
  }
  window.TerritoryManualDismissOverlay=dismissOverlay;
  compactScreen.addEventListener('change',e=>{setMenu(false);indexOpen=!e.matches;updateLayoutControls();});
  window.addEventListener('territory-manual-native-ready',updateOrientationControl);
  function toast(msg){$('toast').textContent=msg;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2200);}
  function icon(e){return `<span class="record-icon" aria-hidden="true">${e.image?`<img src="${esc(e.image)}" alt="" loading="lazy">`:esc(sectionInfo(e.section)?.symbol||'◇')}</span>`;}
  function navigation(){
    $('brand-label').textContent=t('brand');$('nav-caption').textContent=t('nav');$('offline-label').textContent=t('offline');$('edition-label').textContent=`${t('version')} · ${D.generated}`;
    $('navigation').innerHTML=`<a class="nav-link ${state.section==='home'?'active':''}" href="#home"><span class="nav-symbol">▤</span>${esc(t('home'))}</a>`+SECTIONS.map(s=>`<a class="nav-link ${state.section===s.id?'active':''}" href="#${s.id}" ${state.section===s.id?'aria-current="page"':''}><span class="nav-symbol">${s.symbol}</span>${esc(tr(s.title))}<span class="nav-count">${nf(counts[s.id])}</span></a>`).join('');
    $('language').value=String(lang);document.documentElement.lang=D.languages[lang];document.title=t('footer');
    const label=state.section==='home'?t('home'):state.section==='search'?t('searchTitle'):state.section==='bookmarks'?t('bookmarks'):tr(sectionInfo(state.section)?.title||TEXT.coverage);
    $('breadcrumb').innerHTML=`<span>Territory</span><span>/</span><b>${esc(label)}</b>`;
    $('footer').innerHTML=`<span>${esc(t('footer'))} · ${esc(t('version'))} ${D.generated}</span><button data-coverage>${esc(t('coverage'))} ↗</button>`;
  }
  function searchHTML(){return `<div class="searchbar" role="search"><span class="search-icon" aria-hidden="true">⌕</span><input id="search-input" type="search" autocomplete="off" aria-label="${esc(t('searchTitle'))}" placeholder="${esc(t('compactSearch'))}" value="${esc(state.q)}"><button class="clear-search" id="clear-search" aria-label="${esc(t('clear'))}" ${state.q?'':'hidden'}>×</button></div>`;}
  function homeEntryList(section){return `<div class="home-entry-grid">${entries.filter(e=>e.section===section).map(e=>`<button class="home-entry-row" data-open="${esc(e.key)}"><span>${esc(tr(e.title))}</span><i aria-hidden="true">›</i></button>`).join('')}</div>`;}
  function chapterIndex(){return `<aside class="content-nav home-index"><div class="index-heading">${esc(t('index'))}</div><div class="index-scroll"><div class="home-chapter-grid">${SECTIONS.map((s,i)=>`<a class="index-row chapter-row" href="#${s.id}"><span class="index-number">${String(i+1).padStart(2,'0')}</span><span class="index-name">${esc(tr(s.title))}</span><span class="index-arrow">›</span></a>`).join('')}</div><section class="home-directory-section"><h2>${esc(t('topics'))}</h2>${homeEntryList('topics')}</section><section class="home-directory-section"><h2>${esc(t('faq'))}</h2>${homeEntryList('faq')}</section></div></aside>`;}
  function thanksCards(people){return people.map(p=>{const m=p.contribution;return `<article class="thanks-person"><div class="thanks-person-heading"><h3>${esc(p.name)}</h3><div class="thanks-score"><span>${esc(t('contribution'))}</span><b>${m.index?nf(m.index):'—'}</b>${!m.index?`<small>${esc(t('uncounted'))}</small>`:''}</div></div><div class="thanks-awards">${p.awards.map(a=>`<span>${esc(tr(a))}</span>`).join('')}</div><p>${esc(tr(p.comment))}</p><div class="thanks-metrics"><span>${nf(m.questions)} ${esc(t('thanksQuestions'))} · ${nf(m.players)} ${esc(t('thanksPlayers'))}</span><span>${esc(t('thanksGameText'))} ${nf(m.gameMessages)} ${esc(t('thanksMessages'))} · ${nf(m.activeDays)} ${esc(t('thanksDays'))}</span>${m.resolved?`<span class="thanks-resolution">${esc(t('thanksResolved'))}: ${nf(m.resolved)}</span>`:''}</div></article>`;}).join('');}
  function gratitudeHTML(){const c=D.communityThanks;if(!c)return '';return `<section class="community-thanks"><h2>${esc(t('thanks'))}</h2><p>${esc(tr(c.intro))}</p><p class="thanks-note">${esc(tr(c.note))}</p><details class="thanks-method"><summary>${esc(t('thanksMethod'))}</summary><p>${esc(tr(c.method)).replace(/\n/g,'<br>')}</p></details><div class="thanks-tools"><label class="searchbar"><span class="search-icon" aria-hidden="true">⌕</span><input id="thanks-search" type="search" autocomplete="off" placeholder="${esc(t('thanksSearch'))}" aria-label="${esc(t('thanksSearch'))}"></label><div class="thanks-filters" role="group" aria-label="${esc(t('filters'))}">${[['all','thanksAll',c.people.length],['help','thanksHelp',c.counts.help],['active','thanksActive',c.counts.active],['atmosphere','thanksAtmosphere',c.counts.atmosphere]].map(([kind,label,count])=>`<button data-thanks-kind="${kind}" aria-pressed="${kind==='all'}">${esc(t(label))} <small>${nf(count)}</small></button>`).join('')}</div><p id="thanks-results" class="thanks-results" role="status">${nf(c.people.length)} ${esc(t('thanksFound'))}</p></div><div class="thanks-people" id="thanks-people">${thanksCards(c.people)}</div></section>`;}
  function filterThanks(){const c=D.communityThanks,query=normalize($('thanks-search').value.trim()),kind=document.querySelector('[data-thanks-kind][aria-pressed="true"]')?.dataset.thanksKind||'all';const people=c.people.filter(p=>(kind==='all'||p.kinds.includes(kind))&&(!query||normalize([p.name,...p.awards.flat(),...p.comment].join(' ')).includes(query)));$('thanks-people').innerHTML=people.length?thanksCards(people):`<p>${esc(t('thanksNoMatch'))}</p>`;$('thanks-results').textContent=`${nf(people.length)} / ${nf(c.people.length)} ${t('thanksFound')}`;}
  function communityHTML(){return `<section class="community-panel" aria-label="${esc(t('community'))}"><h2>${esc(t('community'))}</h2><dl><div><dt>${esc(t('qqGroup3'))}</dt><dd><strong>791695625</strong></dd></div><div><dt>${esc(t('qqGroup4'))}</dt><dd><strong>923782390</strong></dd></div><div><dt>${esc(t('email'))}</dt><dd><a href="mailto:loomingxu@qq.com">loomingxu@qq.com</a></dd></div><div><dt>${esc(t('bilibili'))}</dt><dd><a href="https://space.bilibili.com/26662512" target="_blank" rel="noopener noreferrer">space.bilibili.com/26662512 ↗</a></dd></div></dl></section>`;}
  function home(){
    $('main').innerHTML=`<div class="manual-layout">${chapterIndex()}<article class="detail-pane home-reader"><div class="eyebrow">TERRITORY / FIELD MANUAL</div><h1>${esc(t('heroTitle'))}</h1><p class="lead">${esc(t('homeBody')).replace(/\n/g,'<br>')}</p><div class="home-rule-summary"><div><b>${nf(D.summary.usedTables)}</b><span>${esc(t('table'))}</span></div><div><b>${nf(entries.length)}</b><span>${esc(t('results'))}</span></div><div><b>3</b><span>简 / EN / 繁</span></div></div>${communityHTML()}${gratitudeHTML()}<h2>${esc(t('searchTitle'))}</h2><div class="searchbar"><span class="search-icon">⌕</span><input id="global-search" type="search" placeholder="${esc(t('search'))}" aria-label="${esc(t('searchTitle'))}"></div><p class="data-note">${esc(tr(D.notes))}</p></article></div>`;
    $('thanks-search')?.addEventListener('input',filterThanks);
    const input=$('global-search');input.addEventListener('keydown',e=>{if(e.key==='Enter'){state={...state,section:'search',q:input.value,page:1,visible:80,selected:''};render();}});
  }
  function baseEntries(){const s=state.section;return s==='bookmarks'?entries.filter(e=>saved.has(e.key)):s==='search'?entries:entries.filter(e=>e.section===s);}
  const indexScroller=()=>$('nav-scroll')||document.querySelector('.content-nav .index-scroll')||$('results');
  const statValue=(e,label)=>e.stats.find(s=>s.label[1]===label)?.value;
  function facetDefinitions(){
    const base=baseEntries(),defs=[];
    const add=(id,label,options,values)=>{if(options.length>1)defs.push({id,label,options,values});};
    if(['search','bookmarks'].includes(state.section)){
      add('chapter',TEXT.filterChapter,SECTIONS.filter(s=>base.some(e=>e.section===s.id)).map(s=>({value:s.id,label:s.title})),e=>[e.section]);
    }else{
      add('category',TEXT.filterCategory,[...new Map(base.map(e=>[e.group[0],{value:e.group[0],label:e.group}])).values()],e=>[e.group[0]]);
    }
    const levels=[...new Set(base.map(e=>e.level).filter(Number.isFinite))].sort((a,b)=>a-b);
    add('level',TEXT.level,levels.map(n=>({value:String(n),label:tri(String(n),String(n),String(n))})),e=>Number.isFinite(e.level)?[String(e.level)]:[]);
    if(state.section==='production'){
      const values=e=>e.links.filter(l=>l.role[1]==='Production facility').map(l=>l.target);
      const keys=[...new Set(base.flatMap(values))];
      add('facility',TEXT.filterFacility,keys.filter(k=>bykey.has(k)).map(k=>({value:k,label:bykey.get(k).title})),values);
      add('research',TEXT.filterResearch,[{value:'Yes',label:tri('需要研究','Required','需要研究')},{value:'No',label:tri('无需研究','Not required','無需研究')}],e=>{const v=statValue(e,'Requires recipe research');return Array.isArray(v)?[v[1]]:[];});
    }
    if(state.section==='build'){
      const options=[...new Map(base.map(e=>statValue(e,'Placement')).filter(Array.isArray).map(v=>[v[1],{value:v[1],label:v}])).values()];
      add('placement',TEXT.filterPlacement,options,e=>{const v=statValue(e,'Placement');return Array.isArray(v)?[v[1]]:[];});
      add('relocate',TEXT.filterRelocate,[{value:'Yes',label:tri('可以','Yes','可以')},{value:'No',label:tri('不可以','No','不可以')}],e=>{const v=statValue(e,'Can relocate');return Array.isArray(v)?[v[1]]:[];});
    }
    if(state.section==='farming'&&base.some(e=>e.sow?.length)){
      add('sow',TEXT.filterSow,D.months[0].map((_,i)=>({value:String(i),label:tri(...D.months.map(m=>m[i].trim()))})),e=>(e.sow||[]).map(String));
    }
    if(state.section==='items'){
      const price=e=>{const v=statValue(e,'Base price');if(v==null)return [];const n=Number(v);return Number.isFinite(n)?[n<=10?'low':n<=100?'mid':n<=1000?'high':'very-high']:[];};
      add('price',TEXT.filterPrice,[{value:'low',label:tri('≤ 10','≤ 10','≤ 10')},{value:'mid',label:tri('> 10 — 100','> 10 — 100','> 10 — 100')},{value:'high',label:tri('> 100 — 1,000','> 100 — 1,000','> 100 — 1,000')},{value:'very-high',label:tri('> 1,000','> 1,000','> 1,000')}],price);
    }
    return defs;
  }
  function matches(e,defs,except=''){
    const words=normalize(state.q).trim().split(/\s+/).filter(Boolean);
    return words.every(w=>searchable.get(e.key).includes(w))&&defs.every(f=>f.id===except||!(state.facets[f.id]?.length)||f.values(e).some(v=>state.facets[f.id].includes(v)));
  }
  function filtered(){const defs=facetDefinitions();let list=baseEntries().filter(e=>matches(e,defs));if(state.sort==='name')list.sort((a,b)=>tr(a.title).localeCompare(tr(b.title),D.languages[lang],{numeric:true}));return list;}
  function renderFacets(){
    const panel=$('facet-panel');if(!panel)return;const defs=facetDefinitions(),base=baseEntries(),active=Object.values(state.facets).some(v=>v.length);
    if(!defs.length){panel.innerHTML='';return;}
    panel.innerHTML=`<div class="facet-heading"><b>${esc(t('filters'))}</b><div class="facet-actions"><button type="button" class="facet-mode" data-toggle-facet-mode role="switch" aria-label="${esc(t('multiSelect'))}" aria-checked="${!!state.multiSelect}" title="${esc(t('filterModeHelp'))}"><span>${esc(t('multiSelect'))}</span><i class="facet-switch-track" aria-hidden="true"></i></button><button type="button" class="facet-reset" data-reset-facets aria-label="${esc(t('resetFilters'))}" ${active?'':'disabled'}>${esc(t('resetShort'))}</button></div></div><p class="facet-hint">${esc(t(state.multiSelect?'filterHintMulti':'filterHint'))}</p>`+defs.map(f=>{
      const selected=state.facets[f.id]||[],candidates=base.filter(e=>matches(e,defs,f.id)),counts=new Map();
      for(const e of candidates)for(const value of new Set(f.values(e)))counts.set(value,(counts.get(value)||0)+1);
      return `<fieldset class="facet-group" data-facet-group="${esc(f.id)}"><legend>${esc(tr(f.label))}</legend><div class="facet-options">${state.section==='quests'?'':`<button class="facet-option facet-all" data-facet="${esc(f.id)}" data-value="" aria-pressed="${!selected.length}">${esc(t('all'))}<small>${nf(candidates.length)}</small></button>`}${f.options.map(o=>{const chosen=selected.includes(o.value),count=counts.get(o.value)||0;return `<button class="facet-option ${f.id==='level'?'facet-level':''}" data-facet="${esc(f.id)}" data-value="${esc(o.value)}" aria-pressed="${chosen}" ${!chosen&&!count?'disabled':''} title="${esc(tr(o.label))} · ${nf(count)}"><span>${esc(tr(o.label))}</span>${f.id==='level'?'':`<small>${nf(count)}</small>`}</button>`;}).join('')}</div></fieldset>`;
    }).join('');
  }
  function catalog(){
    const s=sectionInfo(state.section),base=baseEntries();
    const title=s?tr(s.title):t(state.section==='bookmarks'?'bookmarks':'searchTitle');
    const listMode=['topics','faq','start','numbers','quests'].includes(state.section);
    $('main').innerHTML=`<div class="manual-layout ${listMode?'single-column-index':''}"><aside class="content-nav"><div class="index-heading"><div class="index-title">${esc(title)}<span>${nf(base.length)}</span></div>${state.section==='quests'?`<label class="spoiler-toggle"><input id="quest-spoilers" type="checkbox" ${state.showQuestSpoilers?'checked':''}>${esc(t('showQuestSpoilers'))}</label>`:''}</div>${searchHTML()}<div id="nav-scroll" class="nav-scroll" tabindex="0" aria-label="${esc(t('index'))}"><div id="facet-panel" class="facet-panel"></div><div id="results-meta" class="index-meta"></div><div id="results" class="index-grid ${listMode?'list-mode':''}"></div></div></aside><article id="detail-pane" class="detail-pane" aria-live="polite"></article></div>`;
    $('quest-spoilers')?.addEventListener('change',e=>{state.showQuestSpoilers=e.target.checked;renderResults();renderDetail();});
    const input=$('search-input');let timer;input.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{state.q=input.value;state.visible=80;$('clear-search').hidden=!state.q;renderFacets();renderResults();},120);});
    $('clear-search').addEventListener('click',()=>{state.q='';input.value='';state.visible=80;$('clear-search').hidden=true;renderFacets();renderResults();input.focus();});
    $('nav-scroll').addEventListener('scroll',()=>{const box=indexScroller();if(box.scrollTop+box.clientHeight>=box.scrollHeight-90){const limit=state.visible||80;if(limit<filtered().length){state.visible=limit+80;renderResults(true);}}});
    renderFacets();renderResults();
  }
  function renderResults(append=false){
    const list=filtered(),limit=state.visible||80,shown=list.slice(0,limit),box=$('results'),scrollBox=indexScroller(),oldScroll=scrollBox.scrollTop;
    $('results-meta').textContent=`${nf(list.length)} ${t('results')}${state.q?' · '+state.q:''}`;
    box.innerHTML=shown.length?shown.map(e=>`<button class="index-row ${state.selected===e.key?'selected':''}" data-open="${esc(e.key)}" title="${esc(spoilerHidden(e)?t('hideSpoiler'):tr(e.title))}" ${state.selected===e.key?'aria-current="true"':''}>${spoilerHidden(e)?'<span class="record-icon" aria-hidden="true">◇</span>':icon(e)}<span class="index-name">${esc(spoilerHidden(e)?t('hideSpoiler'):tr(e.title))}</span><span class="index-arrow">${saved.has(e.key)?'★':'›'}</span></button>`).join('')+(shown.length<list.length?`<div class="load-status">${nf(shown.length)} / ${nf(list.length)} · ↓</div>`:''):`<p class="index-empty">${esc(t(state.section==='bookmarks'?'noBookmarks':'noResults'))}</p>`;
    if($('pagination'))$('pagination').innerHTML='';
    const oldSelected=state.selected;
    if(!list.some(e=>e.key===state.selected))state.selected=list[0]?.key||'';
    if(!append&&(oldSelected!==state.selected||!$('detail-pane').children.length)){renderDetail();$('detail-pane').scrollTop=0;}
    markSelected();scrollBox.scrollTop=oldScroll;
  }
  function markSelected(){document.querySelectorAll('.index-row[data-open]').forEach(b=>{const a=b.dataset.open===state.selected;b.classList.toggle('selected',a);if(a)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current');});}
  function render(){navigation();if(state.section==='home')home();else if(state.section==='coverage')coverage();else catalog();updateLayoutControls();}
  function referenceHTML(l){const e=bykey.get(l.target);return e?`<button class="relation-link" data-open="${esc(l.target)}">${esc(tr(e.title))}${l.count!=null?` × ${nf(l.count)}`:''} <span>↗</span></button>`:'';}
  function materialHTML(m,mult=1){const e=entries.find(e=>e.sid===m.sid&&e.key.startsWith('item:'))||entries.find(e=>e.sid===m.sid);return e&&!m.category?`<button class="relation-link" data-open="${esc(e.key)}">${esc(tr(m.name))} × ${nf(m.count*mult)} ↗</button>`:`<span class="relation-link">${esc(tr(m.name))} × ${nf(m.count*mult)}${m.category?`<small>(${esc(t('category'))})</small>`:''}</span>`;}
  function storageHTML(e){
    const s=e.storage;if(!s)return '';
    const label=s.exclude?tri('默认排除类别','Default excluded categories','預設排除類別'):tri('默认接收类别','Default accepted categories','預設接收類別');
    return `<h2>${esc(tr(label))}</h2><div class="storage-types">${s.types.map(a=>`<span>${esc(tr(a))}</span>`).join('')||'—'}</div>${s.extra.length?`<h3>${esc(tr(tri('额外允许物品','Additional allowed items','額外允許物品')))}</h3><div class="storage-types">${s.extra.map(a=>`<span>${esc(tr(a))}</span>`).join('')}</div>`:''}${s.perTile?`<section class="calculator"><h3>${esc(tr(tri('面积与总容量','Area and total capacity','面積與總容量')))}</h3><div class="capacity-inputs"><label>${esc(tr(tri('宽（格）','Width (tiles)','寬（格）')))}<input id="capacity-width" type="number" min="${s.minWidth}" max="${s.maxSize}" value="${s.minWidth}"></label><label>${esc(tr(tri('高（格）','Height (tiles)','高（格）')))}<input id="capacity-height" type="number" min="${s.minHeight}" max="${s.maxSize}" value="${s.minHeight}"></label></div><output id="capacity-output"></output><p class="data-note">${esc(tr(tri('所有物品共同占用此容量。','All item types share this capacity.','所有物品共同佔用此容量。')))}</p></section>`:''}`;
  }
  function statsHTML(e){return e.stats.length?`<h2>${esc(t('values'))}</h2><dl class="numeric-table">${e.stats.map(s=>`<div><dt>${esc(tr(s.label))}</dt><dd>${esc(tr(s.value))}</dd></div>`).join('')}</dl>`:'';}
  function topicHTML(e){const topic=e.topic;return topic.blocks.map((b,i)=>`<section class="article-block" id="article-part-${i}"><h2>${esc(tr(b.title))}</h2>${tr(b.text)?`<p>${esc(tr(b.text)).replace(/\n/g,'</p><p>')}</p>`:''}${b.points?.length?`<${b.kind==='steps'?'ol':'ul'}>${b.points.map(p=>`<li>${esc(tr(p))}</li>`).join('')}</${b.kind==='steps'?'ol':'ul'}>`:''}${b.table?`<table class="player-table" aria-label="${esc(tr(b.title))}"><thead><tr>${b.table.columns.map(c=>`<th scope="col">${esc(tr(c))}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(row=>`<tr>${row.map((v,j)=>j===0?`<th scope="row">${esc(tr(v))}</th>`:`<td>${esc(tr(v))}</td>`).join('')}</tr>`).join('')}</tbody></table>`:''}</section>`).join('')+`${topic.related?.length?`<div class="topic-related"><span>${esc(t('seeAlso'))}</span><div class="relation-list">${topic.related.map(k=>referenceHTML({target:k})).join('')}</div></div>`:''}${topic.diagram?`<details class="diagram-details"><summary>${esc(tr(topic.diagramTitle)||t('mechanism'))}</summary>${diagramHTML(topic.diagram)}</details>`:''}`;}
  function diagramHTML(kind){
    const graphic=`<img class="rule-diagram" src="diagrams/${kind}-${D.languages[lang]}.svg" alt="${esc(t('mechanism'))}">`;
    const model=kind==='logistics'?`<div class="mechanism-model"><h3>${esc(t('sample'))}</h3>${[['actual',1000],['plan',800],['reserved',100]].map(([k,v])=>`<label>${esc(t(k))}<input data-model="${k}" type="number" min="0" max="1000000" value="${v}"></label>`).join('')}<output id="model-result"></output><p>${esc(t('illustration'))}</p></div>`:'';
    return `<figure class="mechanism-figure">${graphic}${model}</figure>`;
  }
  function spoilerHidden(e){return e.spoiler&&!revealed.has(e.key)&&!(e.section==='quests'&&state.showQuestSpoilers);}
  function questHTML(e){const q=e.quest;return `<section class="quest-section"><h2>${esc(t('questConditions'))}</h2><ul>${q.conditions.map(v=>`<li>${esc(tr(v))}</li>`).join('')}</ul><h2>${esc(t('questRewards'))}</h2><ul>${q.rewards.map(v=>`<li>${esc(tr(v))}</li>`).join('')}</ul>${q.notes.length?`<details class="quest-notes"><summary>${esc(t('questNotes'))}</summary><ul>${q.notes.map(v=>`<li>${esc(tr(v))}</li>`).join('')}</ul></details>`:''}</section>`;}
  function faqHTML(e){const f=e.faq;return `${f.table?`<table class="player-table"><thead><tr>${f.table.columns.map(c=>`<th>${esc(tr(c))}</th>`).join('')}</tr></thead><tbody>${f.table.rows.map(row=>`<tr>${row.map(c=>`<td>${esc(tr(c))}</td>`).join('')}</tr>`).join('')}</tbody></table>`:''}${f.sources.length?`<details class="source-details"><summary>${esc(t('source'))}</summary>${f.sources.map(s=>`<p>${esc(s)}</p>`).join('')}</details>`:''}`;}
  function renderDetail(){
    const e=bykey.get(state.selected),pane=$('detail-pane');if(!pane)return;if(!e){pane.innerHTML=`<p class="lead">${esc(t('empty'))}</p>`;return;}
    const toolbar=`<div class="reader-toolbar"><button class="plain-button" data-back ${backStack.length?'':'disabled'}>${esc(t('back'))}</button><button class="icon-button" data-save aria-label="${esc(t(saved.has(e.key)?'saved':'save'))}" aria-pressed="${saved.has(e.key)}">${saved.has(e.key)?'★':'☆'}</button></div>`;
    if(spoilerHidden(e)){pane.innerHTML=toolbar+`<h1>${esc(t('hideSpoiler'))}</h1><p>${esc(t('spoiler'))}</p><button class="primary-button" data-reveal="${esc(e.key)}">${esc(t('reveal'))}</button>`;return;}
    const grouped=new Map();for(const l of e.links){if(e.materials?.length&&tr(l.role)===tr(e.materialsLabel))continue;const k=tr(l.role);if(!grouped.has(k))grouped.set(k,[]);grouped.get(k).push(l);}
    pane.innerHTML=toolbar+`<div class="detail-heading">${icon(e)}<div><div class="detail-group">${esc(tr(e.group))}</div><h1>${esc(tr(e.title))}</h1></div></div><div class="detail-body">${esc(tr(e.body))}</div>${e.topic?topicHTML(e):''}${e.quest?questHTML(e):''}${e.faq?faqHTML(e):''}${e.controls?`<div class="keyboard-list">${e.controls.map(c=>`<div class="keyboard-item"><kbd>${esc(c.key)}</kbd><span>${esc(tr(c.action))}</span></div>`).join('')}</div>`:''}${statsHTML(e)}${storageHTML(e)}${e.materials?.length?`<h2>${esc(tr(e.materialsLabel)||t('materials'))}</h2><div class="relation-list">${e.materials.map(m=>materialHTML(m)).join('')}</div>`:''}${e.recipe&&e.recipe.output>0?`<section class="calculator"><h3>${esc(t('calc'))}</h3><label>${esc(t('target'))}<input id="calc-quantity" type="number" min="1" max="1000000000" value="${e.recipe.output}"></label><div class="calculator-output" id="calculator-output" aria-live="polite"></div><p class="data-note">${esc(t('calcNote'))}</p></section>`:''}${e.loot?.length?`<h2>${esc(t('loot'))}</h2>${e.loot.map(b=>`<p class="data-note">${esc(t('weight'))} ${nf(b.total>0?b.weight/b.total*100:0)}%</p><div class="relation-list">${b.items.map(m=>materialHTML(m)).join('')}</div>`).join('')}<p class="data-note">${esc(t('lootNote'))}</p>`:''}${[...grouped].map(([title,links])=>`<h2>${esc(title)}</h2><div class="relation-list">${links.map(referenceHTML).join('')}</div>`).join('')}${!e.topic?`<p class="source-caption">${esc(tr(D.notes))}</p>`:''}${e.topic?.sources?.length?`<details class="source-details"><summary>${esc(t('source'))}</summary>${e.topic.sources.map(s=>`<p>${esc(s)}</p>`).join('')}</details>`:''}`;
    if(e.storage?.perTile){const calc=()=>{const s=e.storage,w=Number($('capacity-width').value),h=Number($('capacity-height').value);$('capacity-output').textContent=w>=s.minWidth&&h>=s.minHeight&&w<=s.maxSize&&h<=s.maxSize?`${nf(w)} × ${nf(h)} × ${nf(s.capacity)} = ${nf(w*h*s.capacity)}`:'—';};$('capacity-width').addEventListener('input',calc);$('capacity-height').addEventListener('input',calc);calc();}
    if(e.recipe&&e.recipe.output>0){$('calc-quantity').addEventListener('input',()=>calculate(e));calculate(e);}
    if(e.topic?.diagram==='logistics'){document.querySelectorAll('[data-model]').forEach(el=>el.addEventListener('input',model));model();}
  }
  function model(){const val=k=>Math.max(0,Number(document.querySelector(`[data-model="${k}"]`).value)||0),available=Math.max(0,val('actual')-val('plan')-val('reserved'));$('model-result').innerHTML=`<b>${esc(t('available'))}: ${nf(available)}</b><small>${esc(t('conditions'))}</small>`;}
  function calculate(e){const q=Number($('calc-quantity').value);if(!Number.isFinite(q)||q<1||q>1e9){$('calculator-output').textContent='1 – 1,000,000,000';return;}const r=e.recipe,batches=Math.ceil(q/r.output);$('calculator-output').innerHTML=`<b>${nf(batches)} ${esc(t('batch'))}</b><p>${esc(t('output'))} ${nf(batches*r.output)}<br>${esc(t('baseWork'))} ${nf(batches*r.days)} ${esc(t('days'))}</p><div class="relation-list">${r.materials.map(m=>materialHTML(m,batches)).join('')}</div>`;}
  function openEntry(key,push=true){const e=bykey.get(key);if(!e)return;const previousSection=state.section,indexScroll=indexScroller()?.scrollTop||0;if(push&&state.selected&&state.selected!==key)backStack.push({...state,indexScroll});if(!filtered().some(v=>v.key===key)){state={...state,section:e.section,q:'',facets:{},visible:80};}else if(state.section==='home'){state.section=e.section;}state.selected=key;if(compactScreen.matches)indexOpen=false;state.visible=Math.max(state.visible||80,filtered().findIndex(v=>v.key===key)+1);render();markSelected();const scrollBox=indexScroller();if(scrollBox){if(previousSection===state.section)scrollBox.scrollTop=indexScroll;else{const selected=$('results').querySelector('[aria-current="true"]');if(selected)scrollBox.scrollTop+=selected.getBoundingClientRect().top-scrollBox.getBoundingClientRect().top-8;}}const u=new URL(location.href);u.hash='entry='+encodeURIComponent(key);history.replaceState(null,'',u);if(compactScreen.matches)$('detail-pane')?.focus({preventScroll:true});}
  function coverage(){
    $('main').innerHTML=`<div class="manual-layout">${chapterIndex()}<article class="detail-pane"><h1>${esc(t('coverage'))}</h1><p>${esc(t('coverageBody'))}</p><p>${nf(D.summary.indexedTables)} ${esc(t('table'))} · ${nf(D.summary.usedTables)} ${esc(t('included'))}</p><table class="reading-table"><thead><tr><th>${esc(t('table'))}</th><th>${esc(t('rowCount'))}</th><th>${esc(t('scope'))}</th></tr></thead><tbody>${D.coverage.map(c=>`<tr><td>${esc(c.table)}</td><td>${nf(c.rows)}</td><td>${esc(t(c.included?'included':'support'))}</td></tr>`).join('')}</tbody></table></article></div>`;
  }
  function setMenu(open){if(open&&compactScreen.matches){indexOpen=false;updateLayoutControls();}document.body.classList.toggle('menu-open',open);$('menu-toggle').setAttribute('aria-expanded',String(open));}
  document.addEventListener('click',e=>{
    const thanksFilter=e.target.closest('[data-thanks-kind]');if(thanksFilter){document.querySelectorAll('[data-thanks-kind]').forEach(b=>b.setAttribute('aria-pressed',String(b===thanksFilter)));filterThanks();return;}
    if(e.target.closest('[data-close-index],#index-veil')){setIndex(false,true);return;}
    if(e.target.closest('[data-toggle-facet-mode]')){state.multiSelect=!state.multiSelect;if(!state.multiSelect)state.facets=Object.fromEntries(Object.entries(state.facets).map(([id,values])=>[id,values.slice(-1)]));state.visible=80;renderFacets();renderResults();document.querySelector('[data-toggle-facet-mode]')?.focus({preventScroll:true});return;}
    const facet=e.target.closest('[data-facet]');if(facet&&!facet.disabled){const id=facet.dataset.facet,value=facet.dataset.value,selected=state.facets[id]||[];const choices=!value?[]:state.multiSelect?(selected.includes(value)?selected.filter(v=>v!==value):[...selected,value]):selected.includes(value)?[]:[value];state.facets={...state.facets,[id]:choices};state.visible=80;renderFacets();renderResults();[...document.querySelectorAll('[data-facet]')].find(b=>b.dataset.facet===id&&b.dataset.value===value)?.focus({preventScroll:true});return;}
    if(e.target.closest('[data-reset-facets]')){state.facets={};state.visible=80;renderFacets();renderResults();indexScroller().scrollTop=0;return;}
    const b=e.target.closest('[data-open]');if(b){openEntry(b.dataset.open);return;}
    if(e.target.closest('[data-back]')){const prev=backStack.pop();if(prev){state=prev;render();if(indexScroller())indexScroller().scrollTop=prev.indexScroll||0;}return;}
    if(e.target.closest('[data-save]')){const key=state.selected;if(saved.has(key)){saved.delete(key);toast(t('removed'));}else{saved.add(key);toast(t('saved'));}try{localStorage.setItem('territory-manual-bookmarks',JSON.stringify([...saved]));}catch{toast(t('storeUnavailable'));}renderDetail();markSelected();return;}
    const reveal=e.target.closest('[data-reveal]');if(reveal){revealed.add(reveal.dataset.reveal);renderDetail();renderResults();return;}
    const scroll=e.target.closest('[data-scroll]');if(scroll){e.preventDefault();$(scroll.dataset.scroll)?.scrollIntoView({block:'start',behavior:'smooth'});return;}
    if(e.target.closest('[data-coverage]')){state.section='coverage';render();}
  });
  $('language').addEventListener('change',()=>{const scroll=indexScroller()?.scrollTop||0;lang=+$('language').value;const languageUrl=new URL(location.href);languageUrl.searchParams.set('lang',D.languages[lang]);history.replaceState(null,'',languageUrl);render();if(indexScroller())indexScroller().scrollTop=scroll;});
  $('bookmark-view').addEventListener('click',()=>{state={...state,section:'bookmarks',q:'',facets:{},visible:80,selected:''};render();});
  $('index-toggle').addEventListener('click',()=>setIndex(!indexOpen,true));
  $('orientation-toggle').addEventListener('click',()=>{const native=window.TerritoryManualNative;if(!native)return;if(compactScreen.matches)setIndex(false);native.rotate(native.orientation==='landscape'?'portrait':'landscape');});
  $('menu-toggle').addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));$('veil').addEventListener('click',()=>setMenu(false));
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();($('search-input')||$('global-search'))?.focus();}if(e.key==='Escape')dismissOverlay();});
  function route(){if(compactScreen.matches)indexOpen=false;const hash=decodeURIComponent(location.hash.slice(1))||(document.documentElement.dataset.defaultEntry?'entry='+document.documentElement.dataset.defaultEntry:'');if(hash.startsWith('entry=')){const e=bykey.get(hash.slice(6));if(e){state={...state,section:e.section,selected:e.key,q:'',facets:{},visible:80};state.visible=Math.max(80,filtered().findIndex(v=>v.key===e.key)+1);render();return;}}state={...state,section:SECTIONS.some(s=>s.id===hash)?hash:'home',selected:'',q:'',facets:{},visible:80};backStack=[];render();setMenu(false);window.scrollTo(0,0);}
  window.addEventListener('hashchange',route);route();
})();
