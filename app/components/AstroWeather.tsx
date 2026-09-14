"use client";

import { useEffect, useMemo, useState } from "react";

const LAT = 30.006337;
const LON = 118.281816;
const HOURLY = "temperature_2m,relative_humidity_2m,precipitation,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_10m";

type Hourly = {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  precipitation: number[];
  cloud_cover_low: number[];
  cloud_cover_mid: number[];
  cloud_cover_high: number[];
  visibility: number[];
  wind_speed_10m: number[];
};

type Forecast = { hourly: Hourly };
type Night = {
  date: string; temp: number; humidity: number; low: number; mid: number; high: number;
  wind: number; rain: number; visibility: number; transparency: number;
};

const avg = (a: number[]) => a.length ? a.reduce((x,y)=>x+y,0)/a.length : 0;
const max = (a: number[]) => a.length ? Math.max(...a) : 0;
const clamp = (v:number) => Math.max(0, Math.min(100, v));

export default function AstroWeather() {
  const [data,setData] = useState<Forecast|null>(null);
  const [error,setError] = useState(false);

  useEffect(()=>{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&hourly=${HOURLY}&timezone=Asia%2FShanghai&forecast_days=7`;
    fetch(url).then(r=>{ if(!r.ok) throw new Error(); return r.json(); }).then(setData).catch(()=>setError(true));
  },[]);

  const nights = useMemo<Night[]>(()=>{
    if(!data) return [];
    const h=data.hourly;
    const groups = new Map<string,number[]>();
    h.time.forEach((t,i)=>{
      const d=new Date(t+":00+08:00");
      const hour=d.getHours();
      if(hour>=20 || hour<=5){
        const key=new Date(d.getTime()-(hour<=5?86400000:0)).toLocaleDateString("en-CA",{timeZone:"Asia/Shanghai"});
        groups.set(key,[...(groups.get(key)||[]),i]);
      }
    });
    return [...groups.entries()].slice(0,7).map(([date,ix])=>{
      const pick=(a:number[])=>ix.map(i=>a[i]).filter(Number.isFinite);
      const humidity=avg(pick(h.relative_humidity_2m));
      const low=avg(pick(h.cloud_cover_low)); const mid=avg(pick(h.cloud_cover_mid)); const high=avg(pick(h.cloud_cover_high));
      const visibility=avg(pick(h.visibility))/1000;
      const rain=pick(h.precipitation).reduce((a,b)=>a+b,0);
      const cloudPenalty=low*.45+mid*.32+high*.23;
      const humidityPenalty=Math.max(0,humidity-55)*.55;
      const visibilityBonus=Math.min(15,Math.max(-15,(visibility-10)*1.5));
      const transparency=Math.round(clamp(100-cloudPenalty-humidityPenalty-rain*8+visibilityBonus));
      return {date,temp:avg(pick(h.temperature_2m)),humidity,low,mid,high,wind:max(pick(h.wind_speed_10m)),rain,visibility,transparency};
    });
  },[data]);

  if(error) return <div className="weatherLiveError">天气数据暂时不可用 Weather data temporarily unavailable</div>;
  if(!data) return <div className="weatherLiveLoading">正在同步呈阳观星天气 Syncing Chengyang astronomy weather</div>;

  return <div className="liveForecast">
    <div className="liveHeader"><div><strong>未来七夜</strong><small>20:00 至 05:00  Future Seven Nights</small></div><span>LIVE</span></div>
    <div className="nightGrid">{nights.map(n=><article className="nightCard" key={n.date}>
      <div className="nightDate"><strong>{n.date.slice(5).replace("-","/")}</strong><small>{n.transparency>=75?"推荐 Recommended":n.transparency>=50?"观察 Watching":"条件较差 Poor"}</small></div>
      <div className="transparency"><b>{n.transparency}</b><span>透明度指数<br/>Transparency</span></div>
      <dl>
        <div><dt>温度</dt><dd>{n.temp.toFixed(0)}°C</dd></div><div><dt>湿度</dt><dd>{n.humidity.toFixed(0)}%</dd></div>
        <div><dt>低云</dt><dd>{n.low.toFixed(0)}%</dd></div><div><dt>中云</dt><dd>{n.mid.toFixed(0)}%</dd></div>
        <div><dt>高云</dt><dd>{n.high.toFixed(0)}%</dd></div><div><dt>风速</dt><dd>{n.wind.toFixed(0)} km/h</dd></div>
        <div><dt>降水</dt><dd>{n.rain.toFixed(1)} mm</dd></div><div><dt>能见度</dt><dd>{n.visibility.toFixed(0)} km</dd></div>
      </dl>
    </article>)}</div>
    <p className="weatherMethod">气象数据 Open Meteo  精确坐标 30.006337 118.281816  透明度为 Night Whisper 综合指数 根据分层云量 湿度 能见度和降水计算 并非官方气象指标</p>
  </div>;
}
