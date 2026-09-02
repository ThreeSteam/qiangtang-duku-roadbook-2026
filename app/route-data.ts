export type Plan = 'A' | 'B';
export type Intensity = 'transfer' | 'balanced' | 'hard' | 'scenic' | 'buffer' | 'flight';

export type Day = {
  date: string;
  weekday: string;
  route: string;
  distance: string;
  drive: string;
  stay: string;
  elevation: string;
  intensity: Intensity;
  label: string;
  intro: string;
  highlights: string[];
  rules: string[];
  timebox?: string;
  map?: string;
  changed?: boolean;
};

export const beforeLinzhi: Day[] = [
  { date:'09.24',weekday:'周四',route:'北京 → 成都天府机场 → 雅安',distance:'约 170 km',drive:'约 2h',stay:'雅安 · 约 600m',elevation:'400—700m，整体平缓',intensity:'transfer',label:'落地转场',map:'/routes/day-01.webp',intro:'19:20 抵达成都天府 T2。取车、验车、装载后向西推进；第一晚的目标是减轻次日压力，不把疲劳转移到夜间。',highlights:['首都航空 JD5611｜16:35 北京大兴—19:20 成都天府 T2','两辆车交接、拍摄车况、检查证件与保险','21:15 前驶离机场才执行雅安方案'],rules:['21:15—22:00 改住蒲江或雅安名山；22:00 后住机场周边','故障灯、轮胎异常、手续问题或司机疲劳时无条件停止推进','抵达后立即休息，不安排夜宵与夜游'] },
  { date:'09.25',weekday:'周五',route:'雅安 → 泸定 → 康定 → 折多山 → 新都桥',distance:'约 208 km',drive:'约 4—7h',stay:'新都桥 · 约 3300m',elevation:'最高折多山约 4300m',intensity:'scenic',label:'高原适应＋观景',map:'/routes/day-02.webp',timebox:'景点约 1.5—2h',intro:'中秋假期首日，按节假日交通量排程。里程缩短，折多山短停，为新都桥留出完整观景与适应时间。',highlights:['康定午餐及补给 45—60min','折多山垭口 15—20min','新都桥沿线观景 45—60min'],rules:['07:30 出发，最迟不超过 08:00','折多山不跑跳、不长停；有高反症状立即减少停留','15:30 尚未通过折多山，取消所有非必要停车'] },
  { date:'09.26',weekday:'周六',route:'新都桥 → 理塘 → 巴塘 → 左贡',distance:'约 600 km',drive:'约 13h',stay:'左贡 · 约 3780m',elevation:'最高东达山约 5130m',intensity:'hard',label:'全程硬日',map:'/routes/day-03.webp',timebox:'路边短停合计 ≤1h',intro:'多座 4000 米级垭口叠加假期车流，是全程最硬日之一。所有景点按路边短停处理。',highlights:['理塘及毛垭草原 20—30min','海子山·姊妹湖 15—20min','金沙江大桥 / 东达山合计 15—20min'],rules:['05:30—06:00 出发，两名以上驾驶员轮换','单人连续驾驶不超过 2.5h，东达山不长停','17:00 仍未通过芒康则住芒康，不硬撑左贡'] },
  { date:'09.27',weekday:'周日',route:'左贡 → 然乌湖 → 米堆冰川 → 波密',distance:'约 415 km',drive:'约 9h',stay:'波密 · 约 2750m',elevation:'最高业拉山约 4660m',intensity:'hard',label:'风景密集取舍日',map:'/routes/day-04.webp',timebox:'标准约 1.5h；进米堆 3—4h',intro:'然乌湖优先中午到达。米堆冰川不是一小时项目，是否进景区必须服从当日路况和最晚抵达时间。',highlights:['怒江七十二拐 15—20min','然乌湖 45—60min','米堆：入口远观 ≤45min／进景区 2—2.5h／完整 3—4h'],rules:['07:00 出发，预计 19:30—21:30 抵达','道路拥堵时先保然乌湖，再决定米堆模式','不为完整游览冰川而疲劳夜驾'] },
  { date:'09.28',weekday:'周一',route:'波密 → 鲁朗 → 色季拉山 → 林芝',distance:'约 230 km',drive:'约 5h',stay:'林芝 · 约 2950m',elevation:'最高色季拉山约 4730m',intensity:'scenic',label:'相对轻松',map:'/routes/day-05.webp',timebox:'景点约 2—2.5h',intro:'里程短、节奏缓，是进入藏北前的重要恢复与车辆整备窗口。南迦巴瓦是否可见完全服从天气。',highlights:['鲁朗林海 30—45min','扎西岗村短逛＋鲁朗石锅鸡午餐','色季拉山 / 南迦巴瓦观景 30—45min'],rules:['08:00 出发，16:30—18:00 抵达林芝','不为等待云层散开无限延后','在林芝完成轮胎、制动、底盘、油液和物资复检'] },
];

export const planACore: Day[] = [
  { date:'09.29',weekday:'周二',route:'林芝 → 拉萨',distance:'约 400 km',drive:'约 4.5h',stay:'拉萨 · 约 3650m',elevation:'整体上升，最高约 4774m',intensity:'balanced',label:'城市观景日',map:'/routes/day-06.webp',timebox:'市内约 3—4h',intro:'上午经林拉高速直达拉萨；下午与傍晚完成布达拉宫外观线，不进入参观。',highlights:['药王山观景台 20—30min','布达拉宫广场 / 外观 45—60min','八廓街及大昭寺外围 1.5—2h'],rules:['07:00 出发，12:30—13:30 抵达','不预约、不进入布达拉宫','当晚补齐氧气、药品、水、食品并记录静息血氧基线'] },
];

export const planBCore: Day[] = [
  { date:'09.29',weekday:'周二',route:'林芝 → 巴松措 · 新措徒步',distance:'导航待复核',drive:'中午出发',stay:'巴松措周边',elevation:'高海拔徒步，强度以现场状态为准',intensity:'scenic',label:'Plan B · Day 1',changed:true,intro:'中午从林芝出发抵达巴松措，下午安排新措徒步。把原本的一段直达拆成两天，换取更完整的湖区体验。',highlights:['林芝上午用于休整与退房','中午前后驶往巴松措','下午：新措徒步'],rules:['徒步时长、接驳与最晚返回时间须在出发前复核','不压缩睡眠，不在天黑后赶未完成路段','住宿优先选择便于次日上午前往白朗沟的位置'] },
  { date:'09.30',weekday:'周三',route:'巴松措 · 白朗沟徒步 → 拉萨',distance:'导航待复核',drive:'中午后出发',stay:'拉萨 · 约 3650m',elevation:'徒步后继续向高海拔城市推进',intensity:'balanced',label:'Plan B · Day 2',changed:true,intro:'上午完成白朗沟徒步；中午从巴松措出发前往拉萨。拉萨游览压缩为抵达后的精选外观线。',highlights:['上午：白朗沟徒步','中午：巴松措出发前往拉萨','傍晚视抵达时间保留布达拉宫广场或八廓街'],rules:['当晚仍必须完成氧气、药品、饮水与食品补给','抵达较晚时只保留一个拉萨外观项目','次日纳木错主线优先，不用次日清晨补齐全部拉萨项目'] },
];

export const afterLhasaA: Day[] = [
  { date:'09.30',weekday:'周三',route:'拉萨 → 纳木错 → 班戈 / 尼玛',distance:'400 km + 330 km',drive:'8—9h + 4h',stay:'班戈 4700m / 尼玛 4500m',elevation:'最高那根拉约 5190m',intensity:'scenic',label:'高价值景观日',map:'/routes/day-07.webp',timebox:'住班戈 2—2.5h；续冲 3—3.5h',intro:'默认住班戈；只有体力、时间、天气和车辆四项同时达标，才续冲色林错—尼玛。',highlights:['纳木错 90—120min','那根拉山口及沿湖短停 20—30min','仅续冲时：色林错 45—60min'],rules:['导航当果拉，在纳达线岔路提前左转','15:00 前作出续冲决定，任一门槛不满足即住班戈','抵达后测血氧，晚餐清淡、禁酒、不洗澡'] },
  { date:'10.01',weekday:'周四',route:'尼玛 → 改则（班戈出发则经色林错）',distance:'约 330 / 660 km',drive:'约 5—6h / 12h',stay:'改则 · 约 4400m',elevation:'持续 4400—4700m',intensity:'hard',label:'手续优先日',map:'/routes/day-08.webp',timebox:'景点原则上 ≤1h',intro:'唯一硬指标：按时抵达改则，办完 G216 告知、燃油与车辆准备。国庆窗口必须提前复核。',highlights:['班戈分支：色林错 45—60min，11:00 前结束','羌塘草原与湖泊短停合计 ≤45min','主油箱、备用燃油、轮胎、通信、离线地图全量检查'],rules:['9 月 20 日与 9 月 29 日复核政务窗口 / 线上办理','手续、燃油或车辆检查未完成，不启动穿越','抵达后不安排夜间活动'] },
  { date:'10.02',weekday:'周五',route:'改则 → G216 羌塘 → 昆仑山 → 民丰',distance:'约 820 km',drive:'约 13—14h',stay:'民丰 · 约 1400m',elevation:'约 5000m → 1400m',intensity:'hard',label:'全程最高优先级',map:'/routes/day-09.webp',timebox:'全部停车合计 ≤1.5h',intro:'全程最关键、强度最高的一天。只沿 G216 与合法服务区通行，两车结伴，长距离无信号。',highlights:['“一错再错”高原湖群','黑石北湖、七火山口、昆仑山天梯','苦牙克大裂谷、大地之树、野生动物观察'],rules:['严禁驶入草场、湖滨、保护区腹地或不明支路','11:00 未到中点或 16:00 未进入下降段，取消后续停车','车辆异常时两车共同停车，不以超速追回时间'] },
  { date:'10.03',weekday:'周六',route:'民丰 → 塔克拉玛干沙漠公路 → 库车',distance:'约 650 km',drive:'约 9h',stay:'库车 · 约 1100m',elevation:'900—1500m，整体平缓',intensity:'transfer',label:'长途转场',map:'/routes/day-10.webp',timebox:'游览约 1.5—2h',intro:'沿民丰—塔中—轮台穿越沙漠，傍晚抵达库车后再安排夜游和正常进食。',highlights:['沙漠公路拍摄 / 休息 30—45min','库车老城夜游 60—90min','库车特色餐饮'],rules:['07:30—08:00 出发，不安排上午休整半天','21:00 前复核次日独库开放状态与入口时限','明显延误则住轮台，次日早发补回'] },
  { date:'10.04',weekday:'周日',route:'库车 → 天山神秘大峡谷 → 独库南段 → 巴音布鲁克',distance:'约 280 km',drive:'约 6h',stay:'巴音布鲁克 · 约 2500m',elevation:'最高铁力买提约 3220m',intensity:'hard',label:'条件路线',map:'/routes/day-11.webp',timebox:'景区约 5.5—7h',intro:'仅在 G217 独库公路确认开放且无临时管制时执行。核心目标是大峡谷与九曲十八弯日落。',highlights:['天山神秘大峡谷 2—2.5h','大小龙池 20—30min','巴音布鲁克景区及日落 3—4h'],rules:['07:00 前复核开放状态；未确认不得驶入','16:00—16:30 前抵达巴音布鲁克景区','日落与末班车均按北京时间，提前一天电话确认'] },
  { date:'10.05',weekday:'周一',route:'巴音布鲁克 → 那拉提 → 乔尔玛 → 独山子 / 奎屯',distance:'约 420—450 km',drive:'约 8h',stay:'独山子 / 奎屯 · 约 500m',elevation:'最高哈希勒根约 3400m',intensity:'hard',label:'条件硬日',map:'/routes/day-12.webp',timebox:'景区约 4—5h',intro:'那拉提与独库北段二者都要严格控时，尽量在当天穿出山区。',highlights:['那拉提空中草原 3—4h','乔尔玛 / 纪念碑 20—30min','独库北段沿线短停合计 30min'],rules:['13:30—14:00 离开那拉提','入口关闭前进入受控路段，临行前复核最新口径','北段封闭或预计错过入口时限，立即执行库尔勒方向绕行'] },
  { date:'10.06',weekday:'周二',route:'独山子大峡谷 → 乌鲁木齐',distance:'约 250 km',drive:'约 3h',stay:'乌鲁木齐 · 约 900m',elevation:'500—900m，整体平缓',intensity:'buffer',label:'半天机动',map:'/routes/day-13.webp',timebox:'机动游览约 2—4h',intro:'14:00 前抵达乌鲁木齐，优先完成车辆托运 / 交接和行李重整；前段无延误再安排城市项目。',highlights:['独山子大峡谷 1.5—2h','车辆托运 / 交接、行李打包','大巴扎或红山公园'],rules:['建议本日完成车辆交接，不留到 10.8','前段延误时，本日用于从独库沿线或库尔勒方向赶路','景点始终让位于车辆与返程准备'] },
  { date:'10.07',weekday:'周三',route:'乌鲁木齐 · 全天机动',distance:'—',drive:'短途',stay:'乌鲁木齐',elevation:'约 900m',intensity:'buffer',label:'完整缓冲日',map:'/routes/day-14.webp',intro:'不预设行程。按优先级补回延误、处理维修和托运，完全无缺口时才安排市内或近郊。',highlights:['补回 9.26—10.5 任一环节延误','车辆托运、维修或事故处理','无缺口时：大巴扎、红山、天山大峡谷方向半日'],rules:['当天结束时全员与行李必须位于乌鲁木齐市区','车辆已交接，或已确认次日交接时间地点'] },
  { date:'10.08',weekday:'周四',route:'乌鲁木齐 → 北京',distance:'—',drive:'航班 3h50m',stay:'北京',elevation:'返程日',intensity:'flight',label:'返程',intro:'20:00 海南航空 HU7246 起飞，23:50 抵达北京首都 T2。上午仍保留半日机动。',highlights:['大巴扎 1—1.5h 或红山公园 45—60min','15:30 前结束市内活动','17:00 前抵达机场'],rules:['前段延误时，上午不安排景点','优先完成车辆交接与返程手续'] },
];

export const shiftedAfterLhasaB: Day[] = afterLhasaA.filter((day) => day.date !== '10.07').map((day) => {
  const shift: Record<string,[string,string]> = { '09.30':['10.01','周四'],'10.01':['10.02','周五'],'10.02':['10.03','周六'],'10.03':['10.04','周日'],'10.04':['10.05','周一'],'10.05':['10.06','周二'],'10.06':['10.07','周三'] };
  return shift[day.date] ? { ...day, date:shift[day.date][0], weekday:shift[day.date][1], changed:true } : day;
});

export const decisions = [
  ['9.30 / Plan B 10.1','是否续冲尼玛','默认住班戈；15:00 前四项门槛全部满足才续冲。'],
  ['9.27','米堆冰川模式','完整游览／进入景区／入口远观，按路况与最后入园决定。'],
  ['10.3 / Plan B 10.4','库车二级景点','老城、王府两者取舍，不能影响独库南段与日落。'],
  ['10.5 / Plan B 10.6','那拉提时长','3h 保穿出独库；4h 则接受更紧的北段节奏。'],
];

export const tasks = [
  ['09.05 前','全程酒店预订','国庆热门区域优先'],['09.10 前','高海拔酒店与 G216 燃油','确认供氧、电热毯、停车；按最差油耗落到升数'],['09.15 前','两端车辆交接 / 托运','书面确认西藏、G216 与非铺装路段权限'],['09.20 + 09.29','改则手续复核','确认国庆窗口与线上办理能力'],['09.23 前','通信与救援装备测试','卫星通信、对讲、防滑链、备胎与补胎'],['每日','独库与景区口径复核','开放、临时管制、末班车全部按北京时间'],
];

export const contingencies = [
  ['应急 0','改则窗口关闭','穿越顺延一天并占用机动日；可线上办理则 9.29 提前完成。'],['应急 1','G216 延误一天','10.7 抵乌并交车；独库、巴音布鲁克、那拉提再延误即整体取消。'],['应急 2','独库封闭 / 入口时限不足','改走库车或巴音布鲁克 → 库尔勒 → 乌鲁木齐，约两日。'],['应急 3','较晚抵达拉萨','只留广场夜景或八廓街；次日纳木错主线优先。'],['应急 4','任一成员严重高反','立即吸氧并向低海拔下撤；一车陪同，不单车行动。'],
];
