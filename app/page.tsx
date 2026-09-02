'use client';

/* oxlint-disable next/no-img-element -- The GitHub Pages build uses portable relative image paths. */

import { useMemo, useState } from 'react';
import { AlertTriangle, ArrowDown, CarFront, Check, ChevronRight, CircleGauge, Clock3, CloudSun, Fuel, MapPinned, MountainSnow, Plane, Route, ShieldCheck, Sparkles, TentTree } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { afterLhasaA, beforeLinzhi, contingencies, decisions, type Day, type Intensity, type Plan, planACore, planBCore, shiftedAfterLhasaB, tasks } from './route-data';

const intensityMeta: Record<Intensity,{ icon: typeof Route; tone: string }> = {
  transfer:{icon:Route,tone:'transfer'}, balanced:{icon:CircleGauge,tone:'balanced'}, hard:{icon:AlertTriangle,tone:'hard'}, scenic:{icon:MountainSnow,tone:'scenic'}, buffer:{icon:CloudSun,tone:'buffer'}, flight:{icon:Plane,tone:'flight'},
};

function DayCard({ day,index }:{ day:Day; index:number }) {
  return <AccordionItem value={`day-${index}`} className={`day-card ${day.changed?'is-changed':''}`}>
    <AccordionTrigger className="day-trigger hover:no-underline">
      <div className="day-date"><span>{day.date}</span><small>{day.weekday}</small></div>
      <div className="day-main"><div className="day-kicker"><span className={`tone-dot ${intensityMeta[day.intensity].tone}`}/><span>{day.label}</span>{day.changed&&<Badge className="changed-badge">日期已切换</Badge>}</div><h3>{day.route}</h3><div className="day-meta"><span><CarFront/>{day.distance}</span><span><Clock3/>{day.drive}</span><span><TentTree/>{day.stay}</span></div></div>
    </AccordionTrigger>
    <AccordionContent className="day-content"><div className="day-detail"><div className="day-copy"><p className="day-intro">{day.intro}</p><div className="detail-grid"><section><h4><Sparkles/>重点保留</h4><ul>{day.highlights.map((item)=><li key={item}>{item}</li>)}</ul></section><section><h4><ShieldCheck/>执行红线</h4><ul>{day.rules.map((item)=><li key={item}>{item}</li>)}</ul></section></div><div className="altitude-strip"><MountainSnow/><span>{day.elevation}</span>{day.timebox&&<><span className="strip-divider"/><Clock3/><span>{day.timebox}</span></>}</div></div>{day.map?<figure className="route-shot"><img src={day.map.replace(/^\//,'./')} alt={`${day.date} ${day.route} 路线截图`} loading="lazy"/><figcaption>原 Word 路书中的路线截图</figcaption></figure>:<div className="route-sketch" aria-label="巴松措两日路线示意"><span>林芝</span><i/><span>巴松措</span><i/><span>拉萨</span></div>}</div></AccordionContent>
  </AccordionItem>;
}

export default function Home() {
  const [plan,setPlan]=useState<Plan>('A');
  const days=useMemo(()=>plan==='A'?[...beforeLinzhi,...planACore,...afterLhasaA]:[...beforeLinzhi,...planBCore,...shiftedAfterLhasaB],[plan]);
  const info=plan==='A'?{title:'林芝直达拉萨',note:'保留完整 10.7 机动日',buffer:'约 2.5 个可用半日 / 整日',km:'约 5,200 km'}:{title:'巴松措两日变种',note:'用掉 10.7 完整机动日',buffer:'约 1 个折算机动日',km:'约 5,300 km'};
  return <main>
    <header className="topbar"><a className="brand" href="#top" aria-label="返回顶部"><span className="brand-mark"><Route/></span><span>羌塘 · 独库 <em>2026</em></span></a><nav aria-label="页面导航"><a href="#compare">方案</a><a href="#route">逐日</a><a href="#decisions">决策</a><a href="#safety">安全</a></nav><Badge className="version">V1.3 · 朋友预览版</Badge></header>
    <section className="hero" id="top"><div className="hero-glow"/><div className="hero-grid"><div className="hero-copy"><p className="eyebrow"><span/>15 天 · 双车 · 2026 中秋国庆</p><h1>从川藏南线，<br/>一路开进<span>羌塘与独库</span></h1><p className="hero-lead">北京 → 成都 → G318 → 拉萨 / 巴松措 → G216 羌塘 → 塔克拉玛干 → 独库公路 → 乌鲁木齐</p><div className="hero-actions"><Button size="lg" onClick={()=>document.querySelector('#route')?.scrollIntoView({behavior:'smooth'})}>查看逐日路线 <ChevronRight/></Button><a className="text-link" href="#compare">先比较 Plan A / B <ArrowDown/></a></div></div><aside className="route-board" aria-label="路线概览"><div className="board-top"><span>主线路径</span><span className="live-dot">条件路线已标注</span></div><div className="route-chain"><span>成都</span><i/><span>林芝</span><i className="fork"/><span className="active">{plan==='A'?'拉萨':'巴松措'}</span><i/><span>羌塘</span><i/><span>独库</span><i/><span>乌鲁木齐</span></div><div className="board-stats"><div><strong>09.24</strong><span>北京出发</span></div><div><strong>{info.km}</strong><span>规划里程</span></div><div><strong>10.08</strong><span>返京</span></div></div></aside></div><div className="hero-facts"><div><Plane/><span>去程</span><strong>JD5611 · 16:35</strong></div><div><Plane className="flip"/><span>返程</span><strong>HU7246 · 20:00</strong></div><div><MountainSnow/><span>最高睡眠</span><strong>班戈约 4700m</strong></div><div><Fuel/><span>最高优先级</span><strong>{plan==='A'?'10.2':'10.3'} G216</strong></div></div></section>

    <section className="section compare" id="compare"><div className="section-head"><div><p className="section-index">01 · 方案切换</p><h2>同一趟旅程，两种节奏</h2></div><p>切换后，逐日日期、巴松措安排和机动日余量会同步更新。未来 Plan C 可沿用同一套结构追加。</p></div><Tabs value={plan} onValueChange={(value)=>setPlan(value as Plan)} className="plan-tabs"><TabsList className="plan-switch" aria-label="选择行程方案"><TabsTrigger value="A"><span>PLAN A</span><strong>林芝直达拉萨</strong><small>原计划</small></TabsTrigger><TabsTrigger value="B"><span>PLAN B</span><strong>加停巴松措</strong><small>新增 1 天</small></TabsTrigger></TabsList></Tabs><div className="plan-summary"><div className="plan-summary-main"><Badge>{plan==='A'?'ORIGINAL':'VARIANT'}</Badge><h3>{info.title}</h3><p>{plan==='A'?'9.29 早晨从林芝出发，中午到拉萨；下午完成布达拉宫外观与八廓街。':'9.29 下午新措徒步，9.30 上午白朗沟徒步；中午再从巴松措前往拉萨。'}</p></div><div className="summary-metric"><span>后续排程</span><strong>{plan==='A'?'保持原日期':'整体后移 1 天'}</strong></div><div className="summary-metric"><span>机动余量</span><strong>{info.buffer}</strong><small>{info.note}</small></div><div className="buffer-visual"><div className="buffer-label"><span>可用缓冲</span><strong>{plan==='A'?'100%':'40%'}</strong></div><Progress value={plan==='A'?100:40}/></div></div>{plan==='B'&&<div className="impact-note"><AlertTriangle/><div><strong>关键影响</strong><span>固定返程航班不变；原 10.7 全天机动被巴松措占用，10.7 变为独山子 → 乌鲁木齐，10.8 上午仍保留半日处理余量。</span></div></div>}</section>

    <section className="section route-section" id="route"><div className="section-head"><div><p className="section-index">02 · 逐日路书</p><h2>{plan==='A'?'Plan A':'Plan B'} · 09.24—10.08</h2></div><p>默认展示关键信息；展开任一天可查看景点时间盒、执行红线、海拔与原路书截图。</p></div><div className="route-legend"><span><i className="tone-dot scenic"/>观景</span><span><i className="tone-dot hard"/>硬日 / 条件路线</span><span><i className="tone-dot buffer"/>机动</span>{plan==='B'&&<span><i className="changed-line"/>Plan B 变更</span>}</div><Accordion multiple defaultValue={['day-0']} className="days-list">{days.map((day,index)=><DayCard key={`${plan}-${day.date}-${day.route}`} day={day} index={index}/>)}</Accordion></section>

    <section className="section principles"><div className="section-head"><div><p className="section-index">03 · 执行原则</p><h2>先守住穿越，再谈打卡</h2></div><p>这份路书的核心不是把景点塞满，而是在高海拔、长距离与假期交通中保住关键路径。</p></div><div className="principle-grid"><article><span>01</span><MountainSnow/><h3>G216 最高优先</h3><p>进入核心穿越日前不透支体力；手续、燃油、车辆三项未完成则不出发。</p></article><article><span>02</span><Clock3/><h3>红线先于景点</h3><p>触碰最晚离开节点，直接放弃低优先级项目；不靠超速、夜驾或压缩睡眠追回。</p></article><article><span>03</span><CloudSun/><h3>独库只做条件路线</h3><p>出发当日确认开放且无临时管制才执行；入口时限与日落统一按北京时间。</p></article><article><span>04</span><ShieldCheck/><h3>全队共同进退</h3><p>无人区保持两车可视或对讲联系；一人需要下撤，另一车随行。</p></article></div></section>

    <section className="section decisions" id="decisions"><div className="section-head"><div><p className="section-index">04 · 团队决策</p><h2>出发前，要把这几件事定下来</h2></div><p>可在朋友讨论时直接按卡片逐项过一遍。</p></div><div className="decision-grid">{decisions.map(([date,title,copy],index)=><article key={title}><div><span>{date}</span><em>0{index+1}</em></div><h3>{title}</h3><p>{copy}</p><div className="decision-status"><i/>待团队确认</div></article>)}</div></section>

    <section className="section prep"><div className="section-head"><div><p className="section-index">05 · 行前看板</p><h2>预订与复核节点</h2></div><p>负责人和状态可在团队确认后再补入正式执行版。</p></div><table className="task-table" aria-label="行前任务"><thead><tr className="task-row task-header"><th>截止</th><th>事项</th><th>完成口径</th><th>状态</th></tr></thead><tbody>{tasks.map(([date,title,note])=><tr className="task-row" key={title}><td><strong>{date}</strong></td><td>{title}</td><td><p>{note}</p></td><td><Badge variant="outline">待办</Badge></td></tr>)}</tbody></table></section>

    <section className="section safety" id="safety"><div className="safety-panel"><div className="safety-copy"><p className="section-index">06 · 安全与应急</p><h2>任何一条触发，<br/>都比原计划优先。</h2><p>原文中的 PlanB0—B4 在这里改称“应急预案 0—4”，避免与巴松措 Plan B 混淆。</p><div className="danger-callout"><AlertTriangle/><span><strong>严重高反</strong>静息血氧持续低于 85%，或剧烈头痛、呕吐、意识改变、咳粉红色泡沫痰：立即吸氧并向低海拔下撤。</span></div></div><div className="contingency-list">{contingencies.map(([code,title,body])=><article key={code}><span>{code}</span><div><h3>{title}</h3><p>{body}</p></div><ChevronRight/></article>)}</div></div><div className="checklist"><div><h3>每日出发前 10 项检查</h3><p>两车共同确认后再出发。</p></div><ul>{['天气和路况','两车油量','下一补给点','轮胎与胎压','车底漏液','驾驶轮换','通信设备','离线地图','酒店电话','最晚离开节点'].map((item)=><li key={item}><Check/>{item}</li>)}</ul></div></section>
    <footer><div className="brand"><span className="brand-mark"><MapPinned/></span><span>羌塘 · 独库 <em>2026</em></span></div><p>路线与时间为规划区间；出发前须按实际酒店、入口、管制点与天气重新核验。</p><a href="#top">回到顶部 ↑</a></footer>
  </main>;
}
