const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function toast(t){let e=$('toast');if(!e){e=document.createElement('div');e.id='toast';document.body.append(e)}e.textContent=t;e.style.display='block';clearTimeout(e._t);e._t=setTimeout(()=>e.style.display='none',3200)}
async function api(a,b){return await window.localApi(a,b||{})}
let USER=null,PREMIUM=false,ACCESO={};
function nav(page){
 const L=[['index','Inicio'],['chat','Chat IA'],['investigacion','Investigación'],['comparar','Comparar',1],['simulador','Simulador',1]];
 $('top').innerHTML=`<a class="brand" href="index.html" aria-label="Pyrometrics, inicio"><img src="assets/logo.png" alt="Pyrometrics" onerror="this.onerror=null;this.src='assets/logo.svg'"></a><nav>`+L.map(l=>`<a href="${l[0]}.html" class="${l[0]===page?'on':''}">${l[1]}${l[2]?'<span class="pill">Premium</span>':''}</a>`).join('')+
 `<a href="cuenta.html" class="${page==='cuenta'?'on':''}">${USER?esc(USER.name||USER.email.split('@')[0]):'Entrar'}</a><a href="en/${page}.html" class="lang" lang="en" hreflang="en">EN</a></nav>`}
async function init(page){
 stars();const r=await api('me');USER=r.user||null;PREMIUM=!!r.premium;ACCESO=r.acceso||{};nav(page);
 return true}
function stars(){const c=$('cielo'),x=c.getContext('2d'),quieto=matchMedia('(prefers-reduced-motion: reduce)').matches;let W,H,S=[];
 function ini(){W=c.width=innerWidth;H=c.height=innerHeight;S=Array.from({length:Math.round(W*H/9000)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3+.3,t:Math.random()*6.28,v:.006+Math.random()*.02,a:Math.random()*.5+.35,f:0}))}
 function dib(){x.clearRect(0,0,W,H);for(const s of S){s.t+=s.v;const al=Math.min(1,s.a*(.75+.25*Math.sin(s.t))+s.f);
  if(s.f>0){const g=x.createRadialGradient(s.x,s.y,0,s.x,s.y,14*s.f+4);g.addColorStop(0,'rgba(190,215,255,'+s.f*.8+')');g.addColorStop(1,'rgba(190,215,255,0)');x.fillStyle=g;x.fillRect(s.x-20,s.y-20,40,40);s.f=Math.max(0,s.f-.012)}
  x.fillStyle='rgba(255,255,240,'+al+')';x.beginPath();x.arc(s.x,s.y,s.r+s.f*1.2,0,6.283);x.fill()}
  if(!quieto)requestAnimationFrame(dib)}
 addEventListener('resize',()=>{ini();if(quieto)dib()});ini();dib();
 if(!quieto)setInterval(()=>{S[Math.floor(Math.random()*S.length)].f=1},450)} // un destello cada ~0.5 s en una estrella al azar
