const navItems = [
  ["活动 / Event", "#about"],
  ["日程 / Program", "#program"],
  ["场地 / Venue", "#venue"],
  ["须知 / Rules", "#rules"],
  ["报名 / Register", "#register"],
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#">
          <span>NIGHT WHISPER</span>
          <small>星空聚会 · STAR PARTY</small>
        </a>

        <nav>
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">华东 · EAST CHINA · 2026</div>

        <div className="heroCopy">
          <h1>NIGHT WHISPER</h1>
          <p className="cnTitle">星空聚会</p>
          <p className="enTitle">STAR PARTY</p>

          <div className="eventMeta">
            <span>2026.11.06 — 11.08</span>
            <span>红柯窑 · 安徽黄山 / Hongkeyao · Huangshan, Anhui</span>
          </div>

          <div className="intro">
            <p>远离城市灯光，与同好一起，仰望星空。</p>
            <p>Away from city lights, under the stars, together.</p>
          </div>

          <div className="heroActions">
            <a className="button primary" href="#register">报名参加 / Register</a>
            <a className="button ghost" href="#about">了解活动 / Explore</a>
          </div>
        </div>

        <div className="mountains" aria-hidden="true">
          <div className="ridge ridgeBack" />
          <div className="ridge ridgeFront" />
        </div>
      </section>

      <section id="about" className="section shell">
        <p className="sectionLabel">活动 / ABOUT</p>
        <div className="bilingualTitle">
          <h2>一场属于天文爱好者的周末聚会。</h2>
          <h3>A weekend gathering for astronomy enthusiasts.</h3>
        </div>
        <div className="bilingualText">
          <p>
            目视观测、星空摄影、器材交流，以及山野之间的夜晚。更多活动信息即将公布。
          </p>
          <p>
            Visual observing, astrophotography, equipment exchange, and nights under the mountain sky.
            More event details will be announced soon.
          </p>
        </div>
      </section>

      <section id="program" className="section shell split">
        <div>
          <p className="sectionLabel">日程 / PROGRAM</p>
          <div className="bilingualTitle">
            <h2>两晚三天。</h2>
            <h3>Three days, two nights.</h3>
          </div>
        </div>

        <div className="program">
          <div>
            <strong>11.06</strong>
            <span>
              <b>抵达 · 搭建 · 欢迎之夜</b>
              <small>Arrival · Setup · Welcome Night</small>
            </span>
          </div>
          <div>
            <strong>11.07</strong>
            <span>
              <b>交流 · 分享 · 主观测夜</b>
              <small>Exchange · Talks · Main Observing Night</small>
            </span>
          </div>
          <div>
            <strong>11.08</strong>
            <span>
              <b>早餐 · 收整 · 告别</b>
              <small>Breakfast · Pack Down · Farewell</small>
            </span>
          </div>
        </div>
      </section>

      <section id="venue" className="section shell">
        <p className="sectionLabel">场地 / VENUE</p>
        <div className="bilingualTitle">
          <h2>红柯窑 · 安徽黄山</h2>
          <h3>Hongkeyao · Huangshan, Anhui</h3>
        </div>
        <div className="bilingualText">
          <p>场地、交通、住宿、停车及观测区域信息将在确认后更新。</p>
          <p>
            Venue layout, transport, accommodation, parking, and observing-zone details will be updated once confirmed.
          </p>
        </div>
      </section>

      <section id="rules" className="section shell darkStatement">
        <p className="sectionLabel">参与须知 / RULES</p>
        <div className="bilingualTitle">
          <h2>保护黑暗。</h2>
          <h3>Protect the darkness.</h3>
        </div>
        <div className="bilingualText">
          <p>保护黑暗，也是保护每一个人的星空。</p>
          <p>Protecting darkness means protecting the night sky we share.</p>
        </div>
      </section>

      <section id="register" className="section shell register">
        <p className="sectionLabel">报名 / REGISTER</p>
        <div className="bilingualTitle">
          <h2>报名即将开放。</h2>
          <h3>Registration coming soon.</h3>
        </div>
        <div className="bilingualText">
          <p>正式报名入口将在活动信息确认后开放。</p>
          <p>The registration link will open once the event details are confirmed.</p>
        </div>
        <a className="button disabled" href="#" aria-disabled="true">
          即将开放 / COMING SOON
        </a>
      </section>

      <footer className="footer shell">
        <div>
          <strong>NIGHT WHISPER</strong>
          <span>星空聚会 · STAR PARTY</span>
        </div>
        <div>
          <span>2026.11.06 — 11.08</span>
          <span>nightwhisper.cc</span>
        </div>
      </footer>
    </main>
  );
}
