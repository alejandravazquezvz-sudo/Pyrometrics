/* Pyrometrics · modo estático / static mode
   Sustituye al servidor (api.php) para que el sitio funcione en GitHub Pages.
   Cuentas, guardados, chats y comunidad viven en localStorage (solo en este navegador).
   El chat busca pasajes en los documentos NASA (índice precalculado); no genera texto con IA. */
(function(){
const EN=document.documentElement.lang==='en',BASE=EN?'../':'';
const T=(es,en)=>EN?en:es;
const PAGOS={semanal:'',mensual:'',anual:''}; // pega aquí tus Payment Links de Stripe (https://buy.stripe.com/...) para activar cobros
const LS={get(k,d){try{const v=localStorage.getItem('pyro:'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('pyro:'+k,JSON.stringify(v))}catch(e){}}};
const now=()=>Math.floor(Date.now()/1000);
async function sha(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('pyro|'+s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
const nid=k=>{const n=(LS.get('seq:'+k,0)||0)+1;LS.set('seq:'+k,n);return n};
const cur=()=>{const e=LS.get('ses',null),u=LS.get('users',{});return e&&u[e]?u[e]:null};
const pub=u=>u&&{id:u.id,email:u.email,name:u.name||'',admin:false};
const nm=u=>u.name||u.email.split('@')[0];
const NEED=T('Inicia sesión para usar esta función.','Sign in to use this feature.');

/* ---------- búsqueda en documentos ---------- */
const STOP=new Set(('que qué es el la los las un una unos unas de del en y o a se por para con como cual cuales sobre al lo su sus mas más ya fue son hay me mi te cambio cambió se le les esta este esto estos ese eso donde cuando quien the is a an of in and or to for with what how about does do are was were which on at by from it its this that be can why when who where').split(' '));
const ES2EN={llama:'flame',llamas:'flame',frio:'cool',fria:'cool',frias:'cool',frios:'cool',caliente:'hot',gota:'droplet',gotas:'droplet',microgravedad:'microgravity',extincion:'extinction',presion:'pressure',ozono:'ozone',helio:'helium',cemento:'cement',porosidad:'porosity',hidratado:'hydrated',hidratacion:'hydration',radiacion:'radiation',oscilatoria:'oscillatory',oscilatorias:'oscillatory',oscilacion:'oscillation',tibia:'warm',estadios:'stage',estadio:'stage',etapas:'stage',etapa:'stage',diametro:'diameter',modulo:'modulus',poros:'pore',poro:'pore',resistencia:'strength',incendio:'fire',incendios:'fire',fuego:'fire',seguridad:'safety',temperatura:'temperature',combustible:'fuel',combustibles:'fuel',heptano:'heptane',decano:'decane',dodecano:'dodecane',tasa:'rate',quemado:'burning',quema:'burning',reconstruccion:'reconstruction',aprendizaje:'learning',profundo:'deep',micromecanica:'micromechanics',portlandita:'portlandite',propiedades:'property',mecanicas:'mechanical',tierra:'ground',cinetica:'kinetics',simulacion:'simulation',modelo:'model',experimento:'experiment',espacio:'space',estacion:'station',gravedad:'gravity',flotabilidad:'buoyancy',contraflujo:'counterflow',butanol:'butanol',xenon:'xenon',supresor:'suppressant'};
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const stem=w=>w.length>5?w.replace(/(ciones|cion|ing|ed|es|s)$/,''):w.length>3?w.replace(/s$/,''):w;
const tok=s=>norm(s).split(/[^a-z0-9]+/).filter(w=>w.length>1&&!STOP.has(w));
let IDX=null;
async function index(){
 if(IDX)return IDX;
 const get=async u=>{try{return await (await fetch(BASE+u)).json()}catch(e){return[]}};
 const [a,b]=await Promise.all([get('datos/indice-pdf.json'),get('datos/indice-'+(EN?'en':'es')+'.json')]);
 const docs=[...b,...a].map(d=>{const h=d.h?tok(d.h).map(stem):[];const t=[...h,...h,...h,...tok(d.x).map(stem)];return{d,t,len:t.length,tf:t.reduce((m,w)=>(m[w]=(m[w]||0)+1,m),{})}});
 const df={};docs.forEach(o=>Object.keys(o.tf).forEach(w=>df[w]=(df[w]||0)+1));
 const avg=docs.reduce((s,o)=>s+o.len,0)/(docs.length||1);
 return IDX={docs,df,avg,N:docs.length}}
function qterms(q){const base=tok(q),set={};
 base.forEach(w=>{set[stem(w)]=1;if(ES2EN[w])set[stem(ES2EN[w])]=.8});return set}
const LAB={ext:['Presentación de extinción','Extinction presentation'],osc:['Presentación oscilatoria','Oscillatory presentation'],gen:['Presentación general PSI 2026','General presentation (PSI 2026)'],tri:['Presentación de tres etapas','Three-stage presentation'],r174:['Informe final PSI-174','PSI-174 final report'],t174:['Tesis de DiPerna (PSI-174)','DiPerna thesis (PSI-174)'],tesis:['Tesis de Alam, 2018','Alam thesis, 2018']};
function label(d){if(d.s==='int')return d.l+(d.h?' · '+d.h:'');const l=LAB[d.s][EN?1:0];return d.p?l+T(', pág. ',', p. ')+d.p:l}
function snippet(x,qs){
 const sents=x.replace(/\b(diap|cap|pág|pag|pp|p|ref|fig|al|ej|vs|no|sec|ch)\.\s/gi,m=>m.replace('.','\u2024')).split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚ•¿¡«\d])/).map(t=>t.replace(/\u2024/g,'.')).filter(t=>t.length>25);
 const sc=sents.map((s,i)=>{const t=tok(s).map(stem);return{s,i,k:t.filter(w=>qs[w]).reduce((m,w)=>m+qs[w],0)}});
 const best=sc.filter(o=>o.k>0).sort((a,b)=>b.k-a.k).slice(0,2).sort((a,b)=>a.i-b.i).map(o=>o.s);
 let r=(best.length?best.join(' '):sents.slice(0,2).join(' ')||x).trim();
 return r.length>330?r.slice(0,327).replace(/\s+\S*$/,'')+'…':r}
async function search(q){
 const I=await index(),qs=qterms(q),terms=Object.keys(qs);if(!terms.length)return[];
 const k1=1.4,b=.75,res=[];
 for(const o of I.docs){let s=0;for(const w of terms){const f=o.tf[w];if(!f)continue;const idf=Math.log(1+(I.N-I.df[w]+.5)/(I.df[w]+.5));s+=qs[w]*idf*f*(k1+1)/(f+k1*(1-b+b*o.len/I.avg))}
  if(s>0)res.push({o,s})}
 res.sort((a,b)=>b.s-a.s);
 const out=[],seen={};
 for(const r of res){if(out.length>=3)break;if(r.s<2.2&&out.length)break;const key=r.o.d.u;if(seen[key])continue;seen[key]=1;out.push(r)}
 return out.map((r,i)=>({n:i+1,title:label(r.o.d),url:BASE+r.o.d.u.replace(/^(?!https?:)/,''),text:snippet(r.o.d.x,qs)}))}

/* ---------- datos de investigaciones ---------- */
function datos(){return new Promise(res=>{if(window.DATOS)return res(window.DATOS);const s=document.createElement('script');s.src='data.js';s.onload=()=>res(window.DATOS||[]);s.onerror=()=>res([]);document.head.append(s)})}
const first=(s,n)=>{s=(s||'').replace(/\s+/g,' ').trim();return s.length>n?s.slice(0,n-1).replace(/\s+\S*$/,'')+'…':s};
function bullets(it){const m=(it.sinopsis||'').split('\n').filter(l=>l.trim().startsWith('•')).map(l=>l.replace(/^•\s*/,''));return m}
function keys(it,n){const f={};tok([it.titulo,it.objetivo,it.enfoque,it.impactos].join(' ')).forEach(w=>{if(w.length>3)f[stem(w)]=(f[stem(w)]||0)+1});return Object.entries(f).filter(e=>e[1]>=2).sort((a,b)=>b[1]-a[1]).slice(0,n).map(e=>e[0])}

/* ---------- FAQ local ---------- */
const kf=q=>norm(q).replace(/[^a-z0-9 ]/g,'').trim();
const SEED=EN?['What is a cool flame?','What changed in the porosity of hydrated cement in microgravity?','How does droplet extinction behave in microgravity?','What does ozone do in small droplets?','What is the three-stage burning with helium?']:['¿Qué es una llama fría?','¿Qué cambió en la porosidad del cemento hidratado en microgravedad?','¿Cómo se comporta la extinción de gotas en microgravedad?','¿Qué hace el ozono en gotas pequeñas?','¿Qué es la quema en tres estadios con helio?'];

const H={
 async me(){const u=cur();return{user:pub(u),premium:true,acceso:u?{tipo:'prueba',hasta:u.ts+30*86400}:{}}},
 async register(b){const email=(b.email||'').trim().toLowerCase();
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))return{error:T('Correo no válido.','Invalid email.')};
  if((b.pass||'').length<8)return{error:T('La contraseña debe tener al menos 8 caracteres.','Password must be at least 8 characters.')};
  if(!b.acepto)return{error:T('Debes aceptar el aviso de privacidad y los términos.','You must accept the privacy notice and terms.')};
  const us=LS.get('users',{});if(us[email])return{error:T('Ese correo ya tiene cuenta.','That email already has an account.')};
  us[email]={id:nid('user'),email,name:(b.name||'').trim().slice(0,40),h:await sha(b.pass),ts:now()};LS.set('users',us);LS.set('ses',email);return{ok:1}},
 async login(b){const email=(b.email||'').trim().toLowerCase(),u=LS.get('users',{})[email];
  if(!u||u.h!==await sha(b.pass||''))return{error:T('Correo o contraseña incorrectos.','Wrong email or password.')};LS.set('ses',email);return{ok:1}},
 async logout(){LS.set('ses',null);return{ok:1}},
 async checkout(b){const l=PAGOS[b.plan];return l?{url:l}:{error:T('Los pagos aún no están habilitados en esta versión.','Payments are not enabled in this version yet.')}},
 async portal(){return{error:T('Aún no hay suscripciones que administrar en esta versión.','There are no subscriptions to manage in this version yet.')}},
 async saved(){const u=cur();return u?LS.get('saved:'+u.email,[]):[]},
 async save(b){const u=cur();if(!u)return{error:NEED};const k='saved:'+u.email,L=LS.get(k,[]);
  if(b.kind==='inv'&&L.some(x=>x.kind==='inv'&&x.ref===b.ref))return{ok:1};
  const id=nid('saved');L.unshift({id,kind:b.kind,ref:b.ref||'',title:b.title||'',body:b.body||'',ts:now()});LS.set(k,L);return{id}},
 async unsave(b){const u=cur();if(!u)return{error:NEED};const k='saved:'+u.email;LS.set(k,LS.get(k,[]).filter(x=>x.id!=b.id));return{ok:1}},
 async faq(){const m=LS.get('faq',{}),seed=SEED.map((q,i)=>({q,n:0,i}));
  const all={};seed.forEach(s=>all[kf(s.q)]=s);Object.entries(m).forEach(([k,v])=>{all[k]=Object.assign({i:99},all[k]||{},v)});
  return Object.values(all).sort((a,b)=>(b.n||0)-(a.n||0)||a.i-b.i).slice(0,8).map(x=>({q:x.q}))},
 async chats(){const u=cur();return u?LS.get('chats:'+u.email,[]).map(c=>({id:c.id,title:c.title,ts:c.ts})):[]},
 async load(b){const u=cur();if(!u)return[];const c=LS.get('chats:'+u.email,[]).find(x=>x.id==b.chat);return c?c.msgs:[]},
 async chat(b){const q=(b.msg||'').trim().slice(0,600);if(!q)return{error:T('Escribe una pregunta.','Type a question.')};
  const m=LS.get('faq',{}),k=kf(q);if(k){m[k]=m[k]||{q:q,n:0};m[k].n++;LS.set('faq',m)}
  const hits=await search(q);let reply;
  if(!hits.length)reply=T('No encontré información sobre eso en la documentación cargada. Prueba con otras palabras (por ejemplo: llama fría, extinción, ozono, helio, porosidad del cemento).','I found nothing about that in the loaded documentation. Try other words (for example: cool flame, extinction, ozone, helium, cement porosity).');
  else reply=T('Esto es lo que dice la documentación sobre tu pregunta (extractos de los documentos, no una respuesta generada; los de los PDF están en su idioma original, inglés):\n\n','Here is what the documentation says about your question (excerpts from the documents, not a generated answer):\n\n')+hits.map(h=>'• '+h.text+' ['+h.n+']').join('\n\n');
  const sources=hits.map(h=>({n:h.n,title:h.title,url:h.url}));
  const u=cur();let id=0;
  if(u){const key='chats:'+u.email,L=LS.get(key,[]);let c=b.chat&&L.find(x=>x.id==b.chat);
   if(!c){c={id:nid('chat'),title:first(q,60),ts:now(),msgs:[]};L.unshift(c)}
   c.msgs.push({role:'user',content:q},{role:'assistant',content:reply});LS.set(key,L);id=c.id}
  return{chat:id,reply,sources}},
 async summarize(b){const D=await datos(),it=D.find(x=>x.id===b.id);if(!it)return{error:T('No se encontró la investigación.','Investigation not found.')};
  const s=(it.sinopsis||'').split('\n'),i=s.findIndex((l,j)=>j>0&&!l.trim()),para=s.slice(1,i>0?i:2).join(' ');
  const bl=bullets(it).slice(0,3).map(x=>'• '+x).join('\n');
  const meta=it.id==='PSI-117'?'datos/PSI-117/01_metadata/i_Investigation.txt':'datos/PSI-174_paquete/01_metadata/PSI-174_metadata.txt';
  const text=(para||first(it.objetivo,400))+' [1]'+(bl?'\n\n'+bl+' [1]':'');
  return{text,sources:[{n:1,title:T('Metadatos y sinopsis de ','Metadata and synopsis of ')+it.id,url:BASE+meta}]}},
 async compare(b){const D=await datos(),L=(b.ids||[]).map(id=>D.find(x=>x.id===id)).filter(Boolean);if(L.length<2)return{error:T('Elige al menos 2 investigaciones.','Choose at least 2 investigations.')};
  const K=L.map(it=>keys(it,60)),shared=K[0].filter(w=>K.every(k=>k.includes(w))).slice(0,8);
  const only={};L.forEach((it,i)=>{const others=new Set(K.filter((_,j)=>j!==i).flat());only[it.id]=K[i].filter(w=>!others.has(w)).slice(0,6)});
  const summary=T('Comparación generada en tu navegador a partir de los metadatos y sinopsis (sin IA). ','Comparison generated in your browser from the metadata and synopses (no AI). ')+L.map(it=>it.id+': '+first(it.objetivo,230)).join('\n\n')+'\n\n'+(shared.length?T('Términos en común: ','Shared terms: ')+shared.join(', ')+'.':T('Los temas son muy distintos: casi no hay puntos en común.','The topics are very different: there are almost no common points.'));
  const tree={root:T('Comparación','Comparison'),children:L.map(it=>({title:it.id,items:(it.enfoquePuntos&&it.enfoquePuntos.length?it.enfoquePuntos.map(x=>first(x,110)):bullets(it).slice(0,3).map(x=>first(x,110))).slice(0,3)}))};
  return{summary,tree,venn:{shared,only}}},
 async theories(){const L=LS.get('theories',[]),C=LS.get('comments',[]);return L.map(t=>Object.assign({},t,{n:C.filter(c=>c.theory==t.id).length})).sort((a,b)=>b.ts-a.ts)},
 async theory_add(b){const u=cur();if(!u)return{error:NEED};const title=(b.title||'').trim().slice(0,120),body=(b.body||'').trim().slice(0,20000);
  if(title.length<3||body.length<10)return{error:T('Escribe un título y un texto.','Write a title and some text.')};
  const L=LS.get('theories',[]),id=nid('theory');L.push({id,title,body,user:u.id,author:nm(u),ts:now()});LS.set('theories',L);return{id}},
 async theory_del(b){const u=cur();if(!u)return{error:NEED};const L=LS.get('theories',[]),t=L.find(x=>x.id==b.id);if(!t||t.user!==u.id)return{error:T('No puedes eliminar esa teoría.','You cannot delete that theory.')};
  LS.set('theories',L.filter(x=>x.id!=b.id));LS.set('comments',LS.get('comments',[]).filter(c=>c.theory!=b.id));return{ok:1}},
 async comments(b){return LS.get('comments',[]).filter(c=>c.theory==b.theory).sort((a,c)=>a.ts-c.ts)},
 async comment_add(b){const u=cur();if(!u)return{error:NEED};const body=(b.body||'').trim().slice(0,1000);if(!body)return{error:T('Escribe un comentario.','Write a comment.')};
  const L=LS.get('comments',[]);L.push({id:nid('comment'),theory:b.theory,user:u.id,author:nm(u),body,ts:now()});LS.set('comments',L);return{ok:1}},
 async comment_del(b){const u=cur();if(!u)return{error:NEED};const L=LS.get('comments',[]),c=L.find(x=>x.id==b.id);if(!c||c.user!==u.id)return{error:T('No puedes eliminar ese comentario.','You cannot delete that comment.')};LS.set('comments',L.filter(x=>x.id!=b.id));return{ok:1}},
 async comment_report(b){const R=LS.get('reports',[]);R.push({id:b.id,ts:now()});LS.set('reports',R);return{ok:1}}
};
window.localApi=async(a,b)=>{try{const f=H[a];return f?await f(b||{}):{error:'?'+a}}catch(e){return{error:String(e&&e.message||e)}}};
})();
