import{r as b,j as de}from"./jsx-runtime-DexIYAB0.js";import{a as It,r as jt}from"./image-B1jjqkK5.js";import{W as kt,e as Ze,P as zt,S as Nt,G as Me,A as Wt,D as Ce,f as De,g as Kt,h as Pe,b as pe,O as _t,i as Gt,j as Fe,r as Ht,c as $t,d as Et,t as Xt,k as Re,m as Yt,C as Ue,l as re,n as Zt}from"./three-e-jaqNao.js";import{h as J,f as G,i as ie,l as qt,o as Jt,p as Qt,q as en,u as qe,c as tn,a as nn,n as rn}from"./heading-DuUQSwSj.js";import{M as Be}from"./route-BlVxo8ME.js";import{n as we,p as g,d as z,s as se,a as he,b as Oe,i as Je,c as R,e as oe,m as ge,f as q,g as ee,h as sn,j as B,M as an,k as on,v as un,l as cn,o as H,q as ye,r as Qe,S as ln,t as fn,w as dn,x as pn,y as hn,z as mn,A as gn,B as yn,C as vn,E as Vn,u as Le}from"./decoder-text-BLw4w0C3.js";import"./components-BkhkCc1U.js";import"./section-OMzkJg-k.js";import"./config-D-zQ9Akn.js";import"./useScrollToHash-gw-MKids.js";import"./divider-Le7LW3Hs.js";import"./link-BaoB9tKL.js";import"./useWindowSize-mzNSXuUf.js";const xe=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),bn="framerAppearId",wn="data-"+xe(bn);function xn(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function et(t){return typeof t=="string"||Array.isArray(t)}function Sn(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Tn=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Se=["initial",...Tn];function tt(t){return Sn(t.animate)||Se.some(e=>et(t[e]))}function An(t){return!!(tt(t)||t.variants)}const Ie={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Te={};for(const t in Ie)Te[t]={isEnabled:e=>Ie[t].some(n=>!!e[n])};const Mn={},te=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],N=new Set(te);function Cn(t,{layout:e,layoutId:n}){return N.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Mn[t]||t==="opacity")}const Dn={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Pn=te.length;function Fn(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,s){let a="";for(let i=0;i<Pn;i++){const c=te[i];if(t[c]!==void 0){const o=Dn[c]||c;a+=`${o}(${t[c]}) `}}return e&&!t.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(t,r?"":a):n&&r&&(a="none"),a}const Rn=(t,e)=>e&&typeof t=="number"?e.transform(t):t,je={...we,transform:Math.round},nt={borderWidth:g,borderTopWidth:g,borderRightWidth:g,borderBottomWidth:g,borderLeftWidth:g,borderRadius:g,radius:g,borderTopLeftRadius:g,borderTopRightRadius:g,borderBottomRightRadius:g,borderBottomLeftRadius:g,width:g,maxWidth:g,height:g,maxHeight:g,size:g,top:g,right:g,bottom:g,left:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,rotate:z,rotateX:z,rotateY:z,rotateZ:z,scale:se,scaleX:se,scaleY:se,scaleZ:se,skew:z,skewX:z,skewY:z,distance:g,translateX:g,translateY:g,translateZ:g,x:g,y:g,z:g,perspective:g,transformPerspective:g,opacity:he,originX:Oe,originY:Oe,originZ:g,zIndex:je,fillOpacity:he,strokeOpacity:he,numOctaves:je};function rt(t,e,n,r){const{style:s,vars:a,transform:i,transformOrigin:c}=t;let o=!1,u=!1,l=!0;for(const d in e){const p=e[d];if(Je(d)){a[d]=p;continue}const f=nt[d],y=Rn(p,f);if(N.has(d)){if(o=!0,i[d]=y,!l)continue;p!==(f.default||0)&&(l=!1)}else d.startsWith("origin")?(u=!0,c[d]=y):s[d]=y}if(e.transform||(o||r?s.transform=Fn(t.transform,n,l,r):s.transform&&(s.transform="none")),u){const{originX:d="50%",originY:p="50%",originZ:f=0}=c;s.transformOrigin=`${d} ${p} ${f}`}}function ke(t,e,n){return typeof t=="string"?t:g.transform(e+n*t)}function Un(t,e,n){const r=ke(e,t.x,t.width),s=ke(n,t.y,t.height);return`${r} ${s}`}const Bn={offset:"stroke-dashoffset",array:"stroke-dasharray"},On={offset:"strokeDashoffset",array:"strokeDasharray"};function Ln(t,e,n=1,r=0,s=!0){t.pathLength=1;const a=s?Bn:On;t[a.offset]=g.transform(-r);const i=g.transform(e),c=g.transform(n);t[a.array]=`${i} ${c}`}function In(t,{attrX:e,attrY:n,attrScale:r,originX:s,originY:a,pathLength:i,pathSpacing:c=1,pathOffset:o=0,...u},l,d,p){if(rt(t,u,l,p),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:y,dimensions:h}=t;f.transform&&(h&&(y.transform=f.transform),delete f.transform),h&&(s!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=Un(h,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&Ln(f,i,c,o,!1)}const jn=t=>typeof t=="string"&&t.toLowerCase()==="svg";function st(t,{style:e,vars:n},r,s){Object.assign(t.style,e,s&&s.getProjectionStyles(r));for(const a in n)t.style.setProperty(a,n[a])}const at=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function kn(t,e,n,r){st(t,e,void 0,r);for(const s in e.attrs)t.setAttribute(at.has(s)?s:xe(s),e.attrs[s])}function it(t,e){const{style:n}=t,r={};for(const s in n)(R(n[s])||e.style&&R(e.style[s])||Cn(s,t))&&(r[s]=n[s]);return r}function zn(t,e){const n=it(t,e);for(const r in t)if(R(t[r])||R(e[r])){const s=te.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=t[r]}return n}function ot(t,e,n,r={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),e}const ut=t=>Array.isArray(t),Nn=t=>ut(t)?t[t.length-1]||0:t;function Wn(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function Kn(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function _n(t,e,n){const r=t.getProps();return ot(r,e,r.custom,Wn(t),Kn(t))}const Gn={current:!1},ct=t=>Array.isArray(t)&&typeof t[0]=="number";function lt(t){return!!(!t||typeof t=="string"&&ft[t]||ct(t)||Array.isArray(t)&&t.every(lt))}const Z=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,ft={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Z([0,.65,.55,1]),circOut:Z([.55,0,1,.45]),backIn:Z([.31,.01,.66,-.59]),backOut:Z([.33,1.53,.69,.99])};function dt(t){if(t)return ct(t)?Z(t):Array.isArray(t)?t.map(dt):ft[t]}function Hn(t,e,n,{delay:r=0,duration:s,repeat:a=0,repeatType:i="loop",ease:c,times:o}={}){const u={[e]:n};o&&(u.offset=o);const l=dt(c);return Array.isArray(l)&&(u.easing=l),t.animate(u,{delay:r,duration:s,easing:Array.isArray(l)?"linear":l,fill:"both",iterations:a+1,direction:i==="reverse"?"alternate":"normal"})}function $n(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}function pt(t){let e;return()=>(e===void 0&&(e=t()),e)}const En=pt(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Xn=new Set(["opacity","clipPath","filter","transform"]),ae=10,Yn=2e4,Zn=(t,e)=>e.type==="spring"||t==="backgroundColor"||!lt(e.ease);function qn(t,e,{onUpdate:n,onComplete:r,...s}){if(!(En()&&Xn.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let i=!1,c,o,u=!1;const l=()=>{o=new Promise(v=>{c=v})};l();let{keyframes:d,duration:p=300,ease:f,times:y}=s;if(Zn(e,s)){const v=oe({...s,repeat:0,delay:0});let w={done:!1,value:d[0]};const x=[];let M=0;for(;!w.done&&M<Yn;)w=v.sample(M),x.push(w.value),M+=ae;y=void 0,d=x,p=M-ae,f="linear"}const h=Hn(t.owner.current,e,d,{...s,duration:p,ease:f,times:y}),m=()=>{u=!1,h.cancel()},V=()=>{u=!0,J.update(m),c(),l()};return h.onfinish=()=>{u||(t.set($n(d,s)),r&&r(),V())},{then(v,w){return o.then(v,w)},attachTimeline(v){return h.timeline=v,h.onfinish=null,G},get time(){return ge(h.currentTime||0)},set time(v){h.currentTime=q(v)},get speed(){return h.playbackRate},set speed(v){h.playbackRate=v},get duration(){return ge(p)},play:()=>{i||(h.play(),ie(m))},pause:()=>h.pause(),stop:()=>{if(i=!0,h.playState==="idle")return;const{currentTime:v}=h;if(v){const w=oe({...s,autoplay:!1});t.setWithVelocity(w.sample(v-ae).value,w.sample(v).value,ae)}V()},complete:()=>{u||h.finish()},cancel:V}}function Jn({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const s=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:G,pause:G,stop:G,then:a=>(a(),Promise.resolve()),cancel:G,complete:G});return e?oe({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const Qn={type:"spring",stiffness:500,damping:25,restSpeed:10},er=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),tr={type:"keyframes",duration:.8},nr={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rr=(t,{keyframes:e})=>e.length>2?tr:N.has(t)?t.startsWith("scale")?er(e[1]):Qn:nr,ve=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ee.test(e)||e==="0")&&!e.startsWith("url(")),sr=new Set(["brightness","contrast","saturate","opacity"]);function ar(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(sn)||[];if(!r)return t;const s=n.replace(r,"");let a=sr.has(e)?1:0;return r!==n&&(a*=100),e+"("+a+s+")"}const ir=/([a-z-]*)\(.*?\)/g,Ve={...ee,getAnimatableNone:t=>{const e=t.match(ir);return e?e.map(ar).join(" "):t}},or={...nt,color:B,backgroundColor:B,outlineColor:B,fill:B,stroke:B,borderColor:B,borderTopColor:B,borderRightColor:B,borderBottomColor:B,borderLeftColor:B,filter:Ve,WebkitFilter:Ve},Ae=t=>or[t];function ht(t,e){let n=Ae(t);return n!==Ve&&(n=ee),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const mt=t=>/^0[^.\s]+$/.test(t);function ur(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||mt(t)}function cr(t,e,n,r){const s=ve(e,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const i=r.from!==void 0?r.from:t.get();let c;const o=[];for(let u=0;u<a.length;u++)a[u]===null&&(a[u]=u===0?i:a[u-1]),ur(a[u])&&o.push(u),typeof a[u]=="string"&&a[u]!=="none"&&a[u]!=="0"&&(c=a[u]);if(s&&o.length&&c)for(let u=0;u<o.length;u++){const l=o[u];a[l]=ht(e,c)}return a}function lr({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:s,repeat:a,repeatType:i,repeatDelay:c,from:o,elapsed:u,...l}){return!!Object.keys(l).length}function gt(t,e){return t[e]||t.default||t}const yt=(t,e,n,r={})=>s=>{const a=gt(r,t)||{},i=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-q(i);const o=cr(e,t,n,a),u=o[0],l=o[o.length-1],d=ve(t,u),p=ve(t,l);let f={keyframes:o,velocity:e.getVelocity(),ease:"easeOut",...a,delay:-c,onUpdate:y=>{e.set(y),a.onUpdate&&a.onUpdate(y)},onComplete:()=>{s(),a.onComplete&&a.onComplete()}};if(lr(a)||(f={...f,...rr(t,f)}),f.duration&&(f.duration=q(f.duration)),f.repeatDelay&&(f.repeatDelay=q(f.repeatDelay)),!d||!p||Gn.current||a.type===!1||an.skipAnimations)return Jn(f);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const y=qn(e,t,f);if(y)return y}return oe(f)};function ue(t){return!!(R(t)&&t.add)}const vt=t=>/^\-?\d*\.?\d+$/.test(t),Vt=t=>e=>e.test(t),fr={test:t=>t==="auto",parse:t=>t},bt=[we,g,on,z,un,cn,fr],Y=t=>bt.find(Vt(t)),dr=[...bt,B,ee],pr=t=>dr.find(Vt(t));function hr(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,H(n))}function mr(t,e){const n=_n(t,e);let{transitionEnd:r={},transition:s={},...a}=n?t.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const c=Nn(a[i]);hr(t,i,c)}}function gr(t,e,n){var r,s;const a=Object.keys(e).filter(c=>!t.hasValue(c)),i=a.length;if(i)for(let c=0;c<i;c++){const o=a[c],u=e[o];let l=null;Array.isArray(u)&&(l=u[0]),l===null&&(l=(s=(r=n[o])!==null&&r!==void 0?r:t.readValue(o))!==null&&s!==void 0?s:e[o]),l!=null&&(typeof l=="string"&&(vt(l)||mt(l))?l=parseFloat(l):!pr(l)&&ee.test(u)&&(l=ht(o,u)),t.addValue(o,H(l,{owner:t})),n[o]===void 0&&(n[o]=l),l!==null&&t.setBaseTarget(o,l))}}function yr(t,e){return e?(e[t]||e.default||e).from:void 0}function vr(t,e,n){const r={};for(const s in t){const a=yr(s,e);if(a!==void 0)r[s]=a;else{const i=n.getValue(s);i&&(r[s]=i.get())}}return r}function Vr({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function br(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function wr(t,e,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:a=t.getDefaultTransition(),transitionEnd:i,...c}=t.makeTargetAnimatable(e);const o=t.getValue("willChange");r&&(a=r);const u=[],l=s&&t.animationState&&t.animationState.getState()[s];for(const d in c){const p=t.getValue(d),f=c[d];if(!p||f===void 0||l&&Vr(l,d))continue;const y={delay:n,elapsed:0,...gt(a||{},d)};if(window.HandoffAppearAnimations){const V=t.getProps()[wn];if(V){const C=window.HandoffAppearAnimations(V,d,p,J);C!==null&&(y.elapsed=C,y.isHandoff=!0)}}let h=!y.isHandoff&&!br(p,f);if(y.type==="spring"&&(p.getVelocity()||y.velocity)&&(h=!1),p.animation&&(h=!1),h)continue;p.start(yt(d,p,f,t.shouldReduceMotion&&N.has(d)?{type:!1}:y));const m=p.animation;ue(o)&&(o.add(d),m.then(()=>o.remove(d))),u.push(m)}return i&&Promise.all(u).then(()=>{i&&mr(t,i)}),u}const ze=()=>({min:0,max:0}),wt=()=>({x:ze(),y:ze()});function xr({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function Sr(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Tr(t,e){return xr(Sr(t.getBoundingClientRect(),e))}function Ar(t){return t instanceof SVGElement&&t.tagName!=="svg"}function xt(t,e,n){const r=R(t)?t:H(t);return r.start(yt("",r,e,n)),r.animation}const Mr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Cr(t){const e=Mr.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function be(t,e,n=1){const[r,s]=Cr(t);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const i=a.trim();return vt(i)?parseFloat(i):i}else return ye(s)?be(s,e,n+1):s}function Dr(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(s=>{const a=s.get();if(!ye(a))return;const i=be(a,r);i&&s.set(i)});for(const s in e){const a=e[s];if(!ye(a))continue;const i=be(a,r);i&&(e[s]=i,n||(n={}),n[s]===void 0&&(n[s]=a))}return{target:e,transitionEnd:n}}const Pr=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),St=t=>Pr.has(t),Fr=t=>Object.keys(t).some(St),Ne=t=>t===we||t===g,We=(t,e)=>parseFloat(t.split(", ")[e]),Ke=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const s=r.match(/^matrix3d\((.+)\)$/);if(s)return We(s[1],e);{const a=r.match(/^matrix\((.+)\)$/);return a?We(a[1],t):0}},Rr=new Set(["x","y","z"]),Ur=te.filter(t=>!Rr.has(t));function Br(t){const e=[];return Ur.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const $={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Ke(4,13),y:Ke(5,14)};$.translateX=$.x;$.translateY=$.y;const Or=(t,e,n)=>{const r=e.measureViewportBox(),s=e.current,a=getComputedStyle(s),{display:i}=a,c={};i==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(u=>{c[u]=$[u](r,a)}),e.render();const o=e.measureViewportBox();return n.forEach(u=>{const l=e.getValue(u);l&&l.jump(c[u]),t[u]=$[u](o,a)}),t},Lr=(t,e,n={},r={})=>{e={...e},r={...r};const s=Object.keys(e).filter(St);let a=[],i=!1;const c=[];if(s.forEach(o=>{const u=t.getValue(o);if(!t.hasValue(o))return;let l=n[o],d=Y(l);const p=e[o];let f;if(ut(p)){const y=p.length,h=p[0]===null?1:0;l=p[h],d=Y(l);for(let m=h;m<y&&p[m]!==null;m++)f?Qe(Y(p[m])===f):f=Y(p[m])}else f=Y(p);if(d!==f)if(Ne(d)&&Ne(f)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof p=="string"?e[o]=parseFloat(p):Array.isArray(p)&&f===g&&(e[o]=p.map(parseFloat))}else d!=null&&d.transform&&(f!=null&&f.transform)&&(l===0||p===0)?l===0?u.set(f.transform(l)):e[o]=d.transform(p):(i||(a=Br(t),i=!0),c.push(o),r[o]=r[o]!==void 0?r[o]:e[o],u.jump(p))}),c.length){const o=c.indexOf("height")>=0?window.pageYOffset:null,u=Or(e,t,c);return a.length&&a.forEach(([l,d])=>{t.getValue(l).set(d)}),t.render(),qt&&o!==null&&window.scrollTo({top:o}),{target:u,transitionEnd:r}}else return{target:e,transitionEnd:r}};function Ir(t,e,n,r){return Fr(e)?Lr(t,e,n,r):{target:e,transitionEnd:r}}const jr=(t,e,n,r)=>{const s=Dr(t,e,r);return e=s.target,r=s.transitionEnd,Ir(t,e,n,r)};function kr(t,e,n){const{willChange:r}=e;for(const s in e){const a=e[s],i=n[s];if(R(a))t.addValue(s,a),ue(r)&&r.add(s);else if(R(i))t.addValue(s,H(a,{owner:t})),ue(r)&&r.remove(s);else if(i!==a)if(t.hasValue(s)){const c=t.getValue(s);!c.hasAnimated&&c.set(a)}else{const c=t.getStaticValue(s);t.addValue(s,H(c!==void 0?c:a,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Q=new WeakMap,Tt=Object.keys(Te),zr=Tt.length,_e=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Nr=Se.length;class Wr{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:s,visualState:a},i={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>J.render(this.render,!1,!0);const{latestValues:c,renderState:o}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=o,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=i,this.isControllingVariants=tt(n),this.isVariantNode=An(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...l}=this.scrapeMotionValuesFromProps(n,{});for(const d in l){const p=l[d];c[d]!==void 0&&R(p)&&(p.set(c[d],!1),ue(u)&&u.add(d))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Q.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Jt.current||Qt(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:en.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Q.delete(this.current),this.projection&&this.projection.unmount(),ie(this.notifyUpdate),ie(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=N.has(e),s=n.on("change",i=>{this.latestValues[e]=i,this.props.onUpdate&&J.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,s,a){let i,c;for(let o=0;o<zr;o++){const u=Tt[o],{isEnabled:l,Feature:d,ProjectionNode:p,MeasureLayout:f}=Te[u];p&&(i=p),l(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),f&&(c=f))}if((this.type==="html"||this.type==="svg")&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:o,layout:u,drag:l,dragConstraints:d,layoutScroll:p,layoutRoot:f}=n;this.projection.setOptions({layoutId:o,layout:u,alwaysMeasureLayout:!!l||d&&xn(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:p,layoutRoot:f})}return c}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):wt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<_e.length;r++){const s=_e[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const a=e["on"+s];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=kr(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Nr;r++){const s=Se[r],a=this.props[s];(et(a)||a===!1)&&(n[s]=a)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=H(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,s=typeof r=="string"||typeof r=="object"?(n=ot(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&s!==void 0)return s;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!R(a)?a:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new ln),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class At extends Wr{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},s){const a=vr(r,e||{},this);if(s){gr(this,r,a);const i=jr(this,r,a,n);n=i.transitionEnd,r=i.target}return{transition:e,transitionEnd:n,...r}}}function Kr(t){return window.getComputedStyle(t)}class _r extends At{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(N.has(n)){const r=Ae(n);return r&&r.default||0}else{const r=Kr(e),s=(Je(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Tr(e,n)}build(e,n,r,s){rt(e,n,r,s.transformTemplate)}scrapeMotionValuesFromProps(e,n){return it(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;R(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,s){st(e,n,r,s)}}class Gr extends At{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(N.has(n)){const r=Ae(n);return r&&r.default||0}return n=at.has(n)?n:xe(n),e.getAttribute(n)}measureInstanceViewportBox(){return wt()}scrapeMotionValuesFromProps(e,n){return zn(e,n)}build(e,n,r,s){In(e,n,r,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,r,s){kn(e,n,r,s)}mount(e){this.isSVGTag=jn(e.tagName),super.mount(e)}}function Mt(t,e,n){var r;if(typeof t=="string"){let s=document;e&&(Qe(!!e.current),s=e.current),n?((r=n[t])!==null&&r!==void 0||(n[t]=s.querySelectorAll(t)),t=n[t]):t=s.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}function Hr(t,e){let n;const r=()=>{const{currentTime:s}=e,i=(s===null?0:s.value)/100;n!==i&&t(i),n=i};return J.update(r,!0),()=>ie(r)}const $r=pt(()=>window.ScrollTimeline!==void 0);class Ct{constructor(e){this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e){const n=this.animations.map(r=>{if($r()&&r.attachTimeline)r.attachTimeline(e);else return r.pause(),Hr(s=>{r.time=r.duration*s},e)});return()=>{n.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Er(t){return typeof t=="object"&&!Array.isArray(t)}function Xr(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Ar(t)?new Gr(e,{enableHardwareAcceleration:!1}):new _r(e,{enableHardwareAcceleration:!0});n.mount(t),Q.set(t,n)}function Yr(t,e=100){const n=fn({keyframes:[0,e],...t}),r=Math.min(dn(n),pn);return{type:"keyframes",ease:s=>n.next(r*s).value/e,duration:ge(r)}}function Ge(t,e,n,r){var s;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(s=r.get(e))!==null&&s!==void 0?s:t}const Zr=(t,e,n)=>{const r=e-t;return((n-t)%r+r)%r+t};function qr(t,e){return hn(t)?t[Zr(0,t.length,e)]:t}function Jr(t,e,n){for(let r=0;r<t.length;r++){const s=t[r];s.at>e&&s.at<n&&(gn(t,s),r--)}}function Qr(t,e,n,r,s,a){Jr(t,s,a);for(let i=0;i<e.length;i++)t.push({value:e[i],at:mn(s,a,r[i]),easing:qr(n,i)})}function es(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const ts="easeInOut";function ns(t,{defaultTransition:e={},...n}={},r){const s=e.duration||.3,a=new Map,i=new Map,c={},o=new Map;let u=0,l=0,d=0;for(let p=0;p<t.length;p++){const f=t[p];if(typeof f=="string"){o.set(f,l);continue}else if(!Array.isArray(f)){o.set(f.name,Ge(l,f.at,u,o));continue}let[y,h,m={}]=f;m.at!==void 0&&(l=Ge(l,m.at,u,o));let V=0;const C=(v,w,x,M=0,S=0)=>{const T=rs(v),{delay:U=0,times:A=vn(T),type:W="keyframes",...ne}=w;let{ease:E=e.ease||"easeOut",duration:P}=w;const L=typeof U=="function"?U(M,S):U,K=T.length;if(K<=2&&W==="spring"){let O=100;if(K===2&&is(T)){const _=T[1]-T[0];O=Math.abs(_)}const j={...ne};P!==void 0&&(j.duration=q(P));const k=Yr(j,O);E=k.ease,P=k.duration}P??(P=s);const I=l+L,D=I+P;A.length===1&&A[0]===0&&(A[1]=1);const F=A.length-T.length;F>0&&Vn(A,F),T.length===1&&T.unshift(null),Qr(x,T,E,A,I,D),V=Math.max(L+P,V),d=Math.max(D,d)};if(R(y)){const v=He(y,i);C(h,m,$e("default",v))}else{const v=Mt(y,r,c),w=v.length;for(let x=0;x<w;x++){h=h,m=m;const M=v[x],S=He(M,i);for(const T in h)C(h[T],ss(m,T),$e(T,S),x,w)}}u=l,l+=V}return i.forEach((p,f)=>{for(const y in p){const h=p[y];h.sort(es);const m=[],V=[],C=[];for(let w=0;w<h.length;w++){const{at:x,value:M,easing:S}=h[w];m.push(M),V.push(yn(0,d,x)),C.push(S||"easeOut")}V[0]!==0&&(V.unshift(0),m.unshift(m[0]),C.unshift(ts)),V[V.length-1]!==1&&(V.push(1),m.push(null)),a.has(f)||a.set(f,{keyframes:{},transition:{}});const v=a.get(f);v.keyframes[y]=m,v.transition[y]={...e,duration:d,ease:C,times:V,...n}}}),a}function He(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function $e(t,e){return e[t]||(e[t]=[]),e[t]}function rs(t){return Array.isArray(t)?t:[t]}function ss(t,e){return t[e]?{...t,...t[e]}:{...t}}const as=t=>typeof t=="number",is=t=>t.every(as);function Dt(t,e,n,r){const s=Mt(t,r),a=s.length,i=[];for(let c=0;c<a;c++){const o=s[c];Q.has(o)||Xr(o);const u=Q.get(o),l={...n};typeof l.delay=="function"&&(l.delay=l.delay(c,a)),i.push(...wr(u,{...e,transition:l},{}))}return new Ct(i)}const os=t=>Array.isArray(t)&&Array.isArray(t[0]);function us(t,e,n){const r=[];return ns(t,e,n).forEach(({keyframes:a,transition:i},c)=>{let o;R(c)?o=xt(c,a.default,i.default):o=Dt(c,a,i),r.push(o)}),new Ct(r)}const cs=t=>{function e(n,r,s){let a;return os(n)?a=us(n,r,t):Er(r)?a=Dt(n,r,s,t):a=xt(n,r,s),t&&t.animations.push(a),a}return e},me=cs(),ls={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},fs={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},ds="_model_fphsv_2",ps="_canvas_fphsv_11",Ee={model:ds,canvas:ps},Xe={Frame:"Frame",Logo:"Logo",Screen:"Screen"},Ye={stiffness:40,damping:20,mass:1.4,restSpeed:.001},Ds=({models:t,show:e=!0,showDelay:n=0,cameraPosition:r={x:0,y:0,z:8},style:s,className:a,onLoad:i,alt:c,...o})=>{const[u,l]=b.useState(!1),d=b.useRef(),p=b.useRef(),f=b.useRef(),y=b.useRef(),h=b.useRef(),m=b.useRef(),V=b.useRef(),C=b.useRef(),v=b.useRef(),w=b.useRef(),x=b.useRef(),M=b.useRef(),S=b.useRef(),T=b.useRef(),U=b.useRef(),A=b.useRef(),W=b.useRef(),ne=It(d,!1,{threshold:.2}),E=qe(),P=Le(0,Ye),L=Le(0,Ye);b.useEffect(()=>{const{clientWidth:D,clientHeight:F}=d.current;m.current=new kt({canvas:p.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),m.current.setPixelRatio(2),m.current.setSize(D,F),m.current.outputColorSpace=Ze,f.current=new zt(36,D/F,.1,100),f.current.position.set(r.x,r.y,r.z),h.current=new Nt,y.current=new Me,h.current.add(y.current);const O=new Wt(16777215,1.2),j=new Ce(16777215,1.1),k=new Ce(16777215,.8);k.position.set(-6,2,2),j.position.set(.5,0,.866),U.current=[O,j,k],U.current.forEach(X=>h.current.add(X)),V.current=new Me,h.current.add(V.current),V.current.position.set(0,0,-.8),V.current.rotateX(Math.PI/2);const _=512,ce=8,le=8,Pt=1.5,Ft=.8,Rt=3;C.current=new De(_,_),C.current.texture.generateMipmaps=!1,v.current=new De(_,_),v.current.texture.generateMipmaps=!1;const fe=new Kt(ce,le).rotateX(Math.PI/2),Ut=new Pe({map:C.current.texture,opacity:Ft,transparent:!0});T.current=new pe(fe,Ut),T.current.scale.y=-1,V.current.add(T.current),A.current=new pe(fe),A.current.visible=!1,V.current.add(A.current);const Bt=new Pe({color:16777215,opacity:0,transparent:!0});W.current=new pe(fe,Bt),W.current.rotateX(Math.PI),W.current.position.y-=1e-5,V.current.add(W.current),w.current=new _t(-ce/2,ce/2,le/2,-le/2,0,Pt),w.current.rotation.x=Math.PI/2,V.current.add(w.current),x.current=new Gt,x.current.userData.darkness={value:Rt},x.current.onBeforeCompile=X=>{X.uniforms.darkness=x.current.userData.darkness,X.fragmentShader=`
        uniform float darkness;
        ${X.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},x.current.depthTest=!1,x.current.depthWrite=!1,M.current=new Fe(ls),M.current.depthTest=!1,S.current=new Fe(fs),S.current.depthTest=!1;const Ot=P.on("change",I),Lt=L.on("change",I);return()=>{C.current.dispose(),v.current.dispose(),Ht(U.current),$t(h.current),Et(m.current),Ot(),Lt()}},[]);const K=b.useCallback(D=>{A.current.visible=!0,A.current.material=M.current,A.current.material.uniforms.tDiffuse.value=C.current.texture,M.current.uniforms.h.value=D*(1/256),m.current.setRenderTarget(v.current),m.current.render(A.current,w.current),A.current.material=S.current,A.current.material.uniforms.tDiffuse.value=v.current.texture,S.current.uniforms.v.value=D*(1/256),m.current.setRenderTarget(C.current),m.current.render(A.current,w.current),A.current.visible=!1},[]),I=b.useCallback(()=>{const F=h.current.background;h.current.background=null,h.current.overrideMaterial=x.current,m.current.setRenderTarget(C.current),m.current.render(h.current,w.current),h.current.overrideMaterial=null,K(5),K(5*.4),m.current.setRenderTarget(null),h.current.background=F,y.current.rotation.x=P.get(),y.current.rotation.y=L.get(),m.current.render(h.current,f.current)},[K,P,L]);return b.useEffect(()=>{const D=Xt(F=>{const{innerWidth:O,innerHeight:j}=window,k={x:(F.clientX-O/2)/O,y:(F.clientY-j/2)/j};L.set(k.x/2),P.set(k.y/2)},100);return ne&&!E&&window.addEventListener("mousemove",D),()=>{window.removeEventListener("mousemove",D)}},[ne,E,P,L]),b.useEffect(()=>{const D=()=>{if(!d.current)return;const{clientWidth:F,clientHeight:O}=d.current;m.current.setSize(F,O),f.current.aspect=F/O,f.current.updateProjectionMatrix(),I()};return window.addEventListener("resize",D),D(),()=>{window.removeEventListener("resize",D)}},[I]),de.jsxs("div",{className:tn(Ee.model,a),"data-loaded":u,style:nn({delay:rn(n)},s),ref:d,role:"img","aria-label":c,...o,children:[de.jsx("canvas",{className:Ee.canvas,ref:p}),t.map((D,F)=>de.jsx(hs,{renderer:m,modelGroup:y,show:e,showDelay:n,renderFrame:I,index:F,setLoaded:l,onLoad:i,model:D},JSON.stringify(D.position)))]})},hs=({renderer:t,model:e,modelGroup:n,renderFrame:r,index:s,showDelay:a,setLoaded:i,onLoad:c,show:o})=>{const[u,l]=b.useState(),d=qe(),p=b.createRef();b.useEffect(()=>{const f=async(h,m)=>{h.colorSpace=Ze,h.flipY=!1,h.anisotropy=t.current.capabilities.getMaxAnisotropy(),h.generateMipmaps=!1,await t.current.initTexture(h),m.material.color=new Ue(16777215),m.material.transparent=!0,m.material.map=h};l({start:async()=>{const{texture:h,position:m,url:V}=e;let C,v;const[w,x]=await Promise.all([await Re.loadAsync(h.placeholder),await Yt.loadAsync(V)]);n.current.add(x.scene),x.scene.traverse(async S=>{S.material&&(S.material.color=new Ue(2039845)),S.name===Xe.Screen&&(p.current=S.clone(),p.current.material=S.material.clone(),S.parent.add(p.current),p.current.material.opacity=1,p.current.position.z+=.001,f(w,p.current),C=async()=>{const T=await jt(h),U=await Re.loadAsync(T);await f(U,S),me(1,0,{onUpdate:A=>{p.current.material.opacity=A,r()}})})});const M=new re(m.x,m.y,m.z);return d&&x.scene.position.set(...M.toArray()),e.animation===Be.SpringUp&&(v=()=>{const S=new re(M.x,M.y-1,M.z);x.scene.position.set(...S.toArray()),me(S.y,M.y,{type:"spring",delay:(300*s+a)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:T=>{x.scene.position.y=T,r()}})}),e.animation===Be.LaptopOpen&&(v=()=>{const S=x.scene.children.find(A=>A.name===Xe.Frame),T=new re(Zt.degToRad(90),0,0),U=new re(0,0,0);return x.scene.position.set(...M.toArray()),S.rotation.set(...T.toArray()),me(T.x,U.x,{type:"spring",delay:(300*s+a+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:A=>{S.rotation.x=A,r()}})}),{loadFullResTexture:C,playAnimation:v}}})},[]),b.useEffect(()=>{if(!u||!o)return;let f;const y=async()=>{const{loadFullResTexture:h,playAnimation:m}=await u.start();i(!0),c==null||c(),d||(f=m()),await h(),d&&r()};return b.startTransition(()=>{y()}),()=>{f==null||f.stop()}},[u,o])};export{Ds as Model};