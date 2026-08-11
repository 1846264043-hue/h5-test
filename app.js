const A = 'assets/images/';

const frames = {
  start:  { id:'3-10642', w:375, h:812, label:'发掘奶茶人格开始页' },
  q1:     { id:'3-9151',  w:375, h:812, label:'第一题' },
  q1a:    { id:'3-8949',  w:375, h:812, label:'第一题，已选 A' },
  q1b:    { id:'3-9050',  w:375, h:812, label:'第一题，已选 B', drag:{to:'q1', transition:'smart'} },
  q1d:    { id:'3-8848',  w:375, h:812, label:'第一题，已选 D' },
  q1c:    { id:'3-8747',  w:375, h:812, label:'第一题，已选 C' },
  q2:     { id:'3-8652',  w:375, h:812, label:'第二题' },
  q2a:    { id:'3-8563',  w:375, h:812, label:'第二题，已选找人拼单' },
  q2b:    { id:'3-8474',  w:375, h:812, label:'第二题，已选直接点两杯' },
  q2c:    { id:'3-8385',  w:375, h:812, label:'第二题，已选不喝了' },
  q3:     { id:'3-9252',  w:375, h:812, label:'第三题' },
  q3a:    { id:'3-10246', w:375, h:812, label:'第三题，已选 A' },
  q3b:    { id:'3-10345', w:375, h:812, label:'第三题，已选 B' },
  q3c:    { id:'3-10444', w:375, h:812, label:'第三题，已选 C' },
  q3d:    { id:'3-10543', w:375, h:812, label:'第三题，已选 D' },
  q4:     { id:'3-9351',  w:375, h:812, label:'第四题' },
  q4a:    { id:'3-9457',  w:375, h:812, label:'第四题，已选 A' },
  q4b:    { id:'3-9563',  w:375, h:812, label:'第四题，已选 B' },
  q4c:    { id:'3-9669',  w:375, h:812, label:'第四题，已选 C' },
  q4d:    { id:'3-9775',  w:375, h:812, label:'第四题，已选 D', drag:{to:'q4', transition:'right'} },
  q5:     { id:'3-9881',  w:375, h:812, label:'第五题' },
  q5a:    { id:'3-10173', w:375, h:812, label:'第五题，已选 A', drag:{to:'resultA', transition:'smart'} },
  q5b:    { id:'3-9954',  w:375, h:812, label:'第五题，已选 B', drag:{to:'resultB', transition:'smart'} },
  q5c:    { id:'3-10027', w:375, h:812, label:'第五题，已选 C', drag:{to:'resultC', transition:'smart'} },
  q5d:    { id:'3-10100', w:375, h:812, label:'第五题，已选 D', drag:{to:'resultD', transition:'smart'} },
  resultA:{ id:'3-10801', w:373, h:1271, label:'测试结果 A' },
  resultB:{ id:'3-10861', w:371, h:1265, label:'测试结果 B' },
  resultC:{ id:'3-10915', w:373, h:1239, label:'测试结果 C' },
  resultD:{ id:'3-10985', w:396.4297, h:1207.1061, label:'测试结果 D' },
  shareA: { id:'3-11082', w:375, h:812, label:'结果分享页 A' },
  shareB: { id:'3-11162', w:375, h:812, label:'结果分享页 B' },
  shareC: { id:'3-11257', w:375, h:812, label:'结果分享页 C' },
  shareD: { id:'3-11356', w:375, h:812, label:'结果分享页 D' }
};

const routes = {
  start:[['开始测试',162,684,204,114,'q1']],
  q1:[['选项 A',31,195,155,205,'q1a'],['选项 B',198,268,156,206,'q1b'],['选项 D',31,422,157,208,'q1d'],['选项 C',198,488,156,206,'q1c']],
  q2:[['找人拼单',201,542,169,155,'q2a'],['直接点两杯',7,470,243,187,'q2b'],['不喝了',78,203,289,236,'q2c']],
  q3:[['选项 A',23,188,173,214,'q3a'],['选项 B',201,238,166,206,'q3b'],['选项 C',23,430,173,220,'q3c'],['选项 D',201,485,166,214,'q3d']],
  q4:[['选项 A',23,188,173,214,'q4a'],['选项 B',201,238,166,206,'q4b'],['选项 C',23,430,173,220,'q4c'],['选项 D',201,485,166,214,'q4d']],
  q5:[['选项 A',23,187,173,215,'q5a'],['选项 B',201,237,166,206,'q5b'],['选项 C',23,430,173,220,'q5c'],['选项 D',201,485,166,214,'q5d']]
};

const selectedBase = {q1a:'q1',q1b:'q1',q1c:'q1',q1d:'q1',q2a:'q2',q2b:'q2',q2c:'q2',q3a:'q3',q3b:'q3',q3c:'q3',q3d:'q3',q4a:'q4',q4b:'q4',q4c:'q4',q4d:'q4',q5a:'q5',q5b:'q5',q5c:'q5',q5d:'q5'};
const next = {q1a:'q2',q1b:'q2',q1c:'q2',q1d:'q2',q2a:'q3',q2b:'q3',q2c:'q3',q3a:'q4',q3b:'q4',q3c:'q4',q3d:'q4',q4a:'q5',q4b:'q5',q4c:'q5',q4d:'q5',q5a:'resultA',q5b:'resultB',q5c:'resultC',q5d:'resultD'};
const previous = {q1:'start',q2:'q1',q3:'q2',q4:'q3',q5:'q4'};

const phone=document.querySelector('#phone');
const canvas=document.querySelector('#canvas');
const art=document.querySelector('#screenArt');
const hitLayer=document.querySelector('#hitLayer');
let current='start';
let pointerStart=null;

function hit(label,x,y,w,h,action,frame){
  const b=document.createElement('button');
  b.className='hit'; b.setAttribute('aria-label',label);
  Object.assign(b.style,{left:`${x/frame.w*100}%`,top:`${y/frame.h*100}%`,width:`${w/frame.w*100}%`,height:`${h/frame.h*100}%`});
  b.addEventListener('click',action); hitLayer.appendChild(b); return b;
}

function go(name,transition){
  current=name; const f=frames[name];
  canvas.style.height=`${f.h/f.w*phone.clientWidth}px`;
  art.src=`${A}${f.id}.png`; art.alt=f.label;
  hitLayer.replaceChildren(); phone.scrollTop=0;
  canvas.classList.remove('enter-smart','enter-right');
  if(transition){void canvas.offsetWidth;canvas.classList.add(transition==='right'?'enter-right':'enter-smart');}
  (routes[name]||[]).forEach(r=>hit(r[0],r[1],r[2],r[3],r[4],()=>go(r[5]),f));

  if(selectedBase[name]){
    const base=selectedBase[name];
    const choice=(routes[base]||[]).find(r=>name.endsWith(r[5].slice(-1)));
    if(choice) hit('取消当前选项',choice[1],choice[2],choice[3],choice[4],()=>go(base),f);
    hit(name.startsWith('q5')?'查看结果':'下一题',237,742,112,51,()=>go(next[name]),f);
  }
  if(previous[name]) hit('返回上一页',0,49,375,44,()=>go(previous[name]),f);
  if(name==='q1') hit('返回开始页',0,49,375,44,()=>go('start'),f);

  if(name.startsWith('result')){
    const suffix=name.slice(-1); const scaleX=f.w/375;
    hit('再测一次',40*scaleX,f.h-115,130*scaleX,62,()=>go('start'),f);
    hit('分享结果',205*scaleX,f.h-115,140*scaleX,62,()=>go(`share${suffix}`),f);
  }
  if(name.startsWith('share')){
    hit('再测一次',40,672,128,56,()=>go('start'),f);
    hit('保存本地',208,672,128,56,()=>saveShare(f),f);
  }
}

function saveShare(frame){
  const a=document.createElement('a');a.href=`${A}${frame.id}.png`;a.download='我的奶茶人格测试结果.png';document.body.appendChild(a);a.click();a.remove();
}

canvas.addEventListener('pointerdown',e=>{pointerStart={x:e.clientX,y:e.clientY};});
canvas.addEventListener('pointerup',e=>{
  if(!pointerStart)return;const dx=e.clientX-pointerStart.x,dy=e.clientY-pointerStart.y;pointerStart=null;
  const drag=frames[current].drag;if(drag&&Math.hypot(dx,dy)>45)go(drag.to,drag.transition);
});

window.addEventListener('resize',()=>go(current));
go('start');
