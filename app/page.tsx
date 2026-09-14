const navItems = [
  ["活动 Event", "#about"],
  ["日期 Dates", "#dates"],
  ["场地 Venue", "#venue"],
  ["观测区 Zones", "#zones"],
  ["天气 Weather", "#weather"],
  ["规则 Rules", "#rules"],
  ["联系 Contact", "#contact"],
];

const mapUrl = "https://uri.amap.com/marker?position=118.281816,30.006337&name=%E6%98%9F%E7%A9%BA%E5%91%88%E9%98%B3%E9%9C%B2%E8%90%A5%E5%9F%BA%E5%9C%B0";
const windyUrl = "https://www.windy.com/30.006/118.282?clouds,30.006,118.282,8";
const meteoblueUrl = "https://www.meteoblue.com/en/weather/outdoorsports/seeing/huangshan_china_1809858";

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Night Whisper home"><span>NIGHT WHISPER</span><small>夜语星趴 STAR PARTY</small></a>
        <nav>{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      </header>

      <section id="top" className="hero shell">
        <div className="eyebrow">HUANGSHAN ANHUI 2026</div>
        <div className="heroCopy">
          <h1>NIGHT WHISPER</h1>
          <p className="cnTitle">夜语星趴 呈阳</p>
          <p className="enTitle">STAR PARTY CHENGYANG</p>
          <div className="eventMeta"><span>2026 WEATHER SELECTED WEEKEND</span><span>星空呈阳露营基地 安徽黄山</span></div>
          <div className="intro"><p>纯粹 硬核 有温度</p><p>Pure Serious Warm</p></div>
          <div className="heroActions"><a className="button primary" href="#dates">候选日期 Dates</a><a className="button ghost" href="#weather">观星天气 Weather</a></div>
        </div>
        <div className="mountains" aria-hidden="true"><div className="ridge ridgeBack"/><div className="ridge ridgeFront"/></div>
      </section>

      <section id="about" className="section shell articleSection">
        <h2 className="sectionTitle">活动预告 <span>Event Preview</span></h2>
        <div className="bilingualText wideText">
          <p>夜语星趴希望为真正热爱目视天文的人提供一个安静 克制 无干扰的观测与交流环境 这里不是灯光秀 也不是喧闹的露营派对 我们把黑暗留给眼睛 把时间留给望远镜 把山野留给星空</p>
          <p>Night Whisper is designed as a quiet low light gathering for serious visual observing and genuine exchange Darkness is preserved for our eyes time is reserved for telescopes and the mountain belongs to the stars</p>
        </div>
      </section>

      <section id="dates" className="section shell split">
        <div>
          <h2 className="sectionTitle">候选日期 <span>Candidate Dates</span></h2>
          <div className="bilingualText"><p>我们将根据临近活动时的云量 湿度 透明度和视宁度 在三个候选周末中确定最终日期</p><p>The final weekend will be selected based on cloud cover humidity transparency and astronomical seeing close to the event</p></div>
        </div>
        <div className="dateList">
          <div><strong>01</strong><span><b>10月30日 — 11月1日</b><small>30 Oct — 1 Nov</small></span></div>
          <div><strong>02</strong><span><b>11月6日 — 11月8日</b><small>6 Nov — 8 Nov</small></span></div>
          <div><strong>03</strong><span><b>11月13日 — 11月15日</b><small>13 Nov — 15 Nov</small></span></div>
        </div>
      </section>

      <section id="venue" className="section shell articleSection">
        <h2 className="sectionTitle">场地 <span>Venue</span></h2>
        <div className="venueName"><strong>星空呈阳露营基地</strong><span>Chengyang Starry Sky Camp</span></div>
        <div className="venueGrid">
          <div className="infoBlock"><span className="miniLabel">地址 ADDRESS</span><p>安徽省黄山市徽州区富溪乡外竹坪登山步道南220米</p><p className="enCopy">220 m south of Waizhuping Hiking Trail Fuxi Township Huizhou District Huangshan Anhui</p><p className="coordinates">118.281816 30.006337</p><a className="textLink" href={mapUrl} target="_blank" rel="noreferrer">高德地图查看 Open in AMap</a></div>
          <div className="infoBlock"><span className="miniLabel">交通 GETTING THERE</span><p>自驾可直达星趴地点 乘高铁可在黄山北站或歙县北站下车 再打车约40至50分钟抵达</p><p className="enCopy">Drive directly to the site or arrive by high speed rail at Huangshan North or Shexian North and continue by taxi for approximately 40 to 50 minutes</p></div>
        </div>
        <div className="mapPanel"><div><span className="miniLabel">地图 MAP</span><p>场地地图 天气和光污染数据统一使用精确坐标 118.281816 30.006337</p><p className="enCopy">Map weather and light pollution data use the same precise coordinates 118.281816 30.006337</p></div><a className="button ghost" href={mapUrl} target="_blank" rel="noreferrer">打开高德地图 OPEN AMAP</a></div>
      </section>

      <section id="stay" className="section shell split">
        <div><h2 className="sectionTitle">住宿 <span>Stay</span></h2></div>
        <div className="facts">
          <div><strong>7</strong><p>酒店标间参考价约 ¥500 每间<br/><small>Hotel twin rooms around ¥500 per room</small></p></div>
          <div><strong>20</strong><p>帐篷露营位<br/><small>Camping pitches</small></p></div>
          <div><strong>¥80</strong><p>营地提供帐篷 含早餐<br/><small>Camp tent with breakfast</small></p></div>
          <div><strong>¥50</strong><p>自带帐篷<br/><small>Bring your own tent</small></p></div>
          <div><strong>20 min</strong><p>山下民宿车程参考<br/><small>Approximate drive to nearby guesthouses</small></p></div>
          <div><strong>CAR</strong><p>也可以睡车上<br/><small>Sleeping in your vehicle is also an option</small></p></div>
        </div>
      </section>

      <section id="zones" className="section shell articleSection">
        <h2 className="sectionTitle">观测区域 <span>Observing Zones</span></h2>
        <div className="zoneGrid">
          <article className="zoneCard privateZone"><span>PRIVATE OBSERVING FIELD</span><h4>爱好者专用观测区</h4><p>面向携带天文目视器材的爱好者 这里以安静 暗适应和尽量少的人员流动为原则 为长时间目视观测和器材交流保留一个真正纯粹的环境</p><p className="enCopy">Reserved for participants bringing visual astronomy equipment with minimal movement and strict dark adaptation for uninterrupted observing and equipment exchange</p><div className="photoPlaceholder">PRIVATE FIELD PHOTO 已提供原图 待接入媒体文件</div></article>
          <article className="zoneCard publicZone"><span>PUBLIC OBSERVING AREA</span><h4>公众开放观测区</h4><p>无自带目视器材的报名者 希望体验望远镜的家属及新手在公众区参与 组织方提供20英寸 Dobsonian 望远镜并安排观星向导讲解</p><p className="enCopy">Participants without their own visual equipment accompanying family members and beginners join the public area with a 20 inch Dobsonian telescope and a dedicated sky guide</p><div className="publicFee"><strong>¥50 每人</strong><small>公众观测服务费 Public observing service fee ¥50 per person</small></div><div className="dobsonNote"><strong>20″ DOBSONIAN</strong><small>Public observing telescope 公众观测望远镜</small></div><div className="photoPlaceholder">PUBLIC FIELD AND 20″ DOBSON PHOTOS 已提供原图 待接入媒体文件</div></article>
        </div>
      </section>

      <section id="weather" className="section shell weatherSection">
        <h2 className="sectionTitle">观星天气 <span>Astronomy Weather</span></h2>
        <div className="bilingualText wideText"><p>天气模块将以星空呈阳露营基地精确坐标 118.281816 30.006337 为中心 重点关注真正影响天文观测的指标</p><p>The weather module is centered on the exact campsite coordinates 118.281816 30.006337 and the conditions that matter for astronomical observing</p></div>
        <div className="weatherGrid">{[["温度","Temperature"],["湿度","Humidity"],["低云","Low Cloud"],["中云","Mid Cloud"],["高云","High Cloud"],["透明度","Transparency"],["视宁度","Seeing"],["风速","Wind"],["降水","Precipitation"],["月相","Moon"],["光污染","Light Pollution"]].map(([cn,en])=><div key={en}><b>{cn}</b><small>{en}</small></div>)}</div>
        <div className="sourceRow"><div><span className="miniLabel">预报来源 FORECAST SOURCES</span><p>Windy 用于天气 湿度和分层云量 meteoblue Astronomy Seeing 用于天文视宁度等专业指标 透明度作为综合观测指标单独呈现 光污染作为场地长期属性独立显示</p><p className="enCopy">Windy is used for weather humidity and layered cloud cover while meteoblue Astronomy Seeing provides astronomy specific seeing guidance Transparency is presented separately and light pollution is treated as a longer term site characteristic</p></div><div className="sourceButtons"><a className="button ghost" href={windyUrl} target="_blank" rel="noreferrer">Windy</a><a className="button ghost" href={meteoblueUrl} target="_blank" rel="noreferrer">meteoblue</a></div></div>
        <p className="weatherStatus">LIVE DATA API 即将接入 COMING NEXT</p>
      </section>

      <section id="rules" className="section shell darkStatement">
        <h2 className="sectionTitle">星趴规定 <span>Rules</span></h2>
        <div className="rulesList">
          <div className="rule"><strong>01</strong><div><h4>目视器材与分区 Visual Equipment and Zoning</h4><p>目视天文爱好者参加须携带天文目视器材 无目视器材的报名者以及希望体验他人望远镜的家属请在划定的公众区参与组织方提供的20英寸 Dobsonian 望远镜观测 并由专门的观星向导讲解 公众体验服务费为每人50元</p><p className="enCopy">Visual observers should bring their own visual astronomy equipment Participants without equipment and accompanying family members wishing to experience telescope observing should use the designated public area where a 20 inch Dobsonian and a dedicated sky guide are provided Public observing service fee is ¥50 per person</p><p className="ruleReason">这一规定旨在为目视爱好者提供无打扰的纯观测交流环境 同时满足新手及家属的体验需求</p></div></div>
          <div className="rule"><strong>02</strong><div><h4>严格暗夜纪律 Strict Dark Sky Discipline</h4><p>星趴期间夜晚关闭车辆大灯 不要使用非红光手电 不要使用手机手电功能 并尽可能减少夜间车辆活动</p><p className="enCopy">At night vehicle headlights must remain off Do not use non red flashlights or phone flashlights and keep vehicle movement to an absolute minimum</p></div></div>
        </div>
        <p className="agreement">报名即视为同意严格遵守以上规则 Registration constitutes agreement to follow these rules strictly</p>
      </section>

      <section id="contact" className="section shell register">
        <h2 className="sectionTitle">联系与报名 <span>Contact and Registration</span></h2>
        <div className="bilingualText"><p>报名与微信联系方式即将公布</p><p>Registration and WeChat contact details coming soon</p></div><span className="button disabled">即将开放 COMING SOON</span>
      </section>

      <footer className="footer shell"><div><strong>NIGHT WHISPER</strong><span>夜语星趴 STAR PARTY</span></div><div><span>CHENGYANG HUANGSHAN 2026</span><span>nightwhisper.cc</span></div></footer>
      <a className="weatherDock" href="#weather"><span>☁︎</span><b>查看观星天气</b><small>CHECK STARGAZING WEATHER</small></a>
    </main>
  );
}
