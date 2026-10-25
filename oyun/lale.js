(()=>{var Cu="169",zs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rg=0,df=1,ag=2;var Dp=1,og=2,ci=3,xi=0,Tn=1,Qt=2,on=0,xr=1,Ps=2,ff=3,pf=4,Pu=5,Zn=100,lg=101,cg=102,hg=103,ug=104,Vr=200,dg=201,fg=202,pg=203,ch=204,hh=205,Wl=206,mg=207,Xl=208,gg=209,bg=210,_g=211,xg=212,yg=213,vg=214,uh=0,dh=1,fh=2,Sr=3,ph=4,mh=5,gh=6,bh=7,Lp=0,Mg=1,Sg=2,ss=0,Iu=1,Du=2,Lu=3,ku=4,Eg=5,Nu=6,ja=7,mf="attached",wg="detached",kp=300,Er=301,wr=302,_h=303,xh=304,ql=306,en=1e3,ki=1001,Aa=1002,an=1003,Uu=1004;var pr=1005;var kn=1006,va=1007;var _i=1008;var fi=1009,Np=1010,Up=1011,Ra=1012,Ou=1013,Is=1014,di=1015,On=1016,Fu=1017,zu=1018,as=1020,Op=35902,Fp=1021,zp=1022,Nn=1023,Bp=1024,Hp=1025,yr=1026,os=1027,Bu=1028,Hu=1029,Gp=1030,Gu=1031;var Vu=1033,il=33776,sl=33777,rl=33778,al=33779,yh=35840,vh=35841,Mh=35842,Sh=35843,Eh=36196,wh=37492,Th=37496,Ah=37808,Rh=37809,Ch=37810,Ph=37811,Ih=37812,Dh=37813,Lh=37814,kh=37815,Nh=37816,Uh=37817,Oh=37818,Fh=37819,zh=37820,Bh=37821,ol=36492,Hh=36494,Gh=36495,Vp=36283,Vh=36284,Wh=36285,Xh=36286,Wu=2200,Tg=2201,Ag=2202,Tr=2300,Ar=2301,Tc=2302,mr=2400,gr=2401,cl=2402,Xu=2500,Rg=2501,Wp=0,jl=1,Ya=2,Cg=3200,Pg=3201;var qu=0,Ig=1,ts="",$t="srgb",xn="srgb-linear",ju="display-p3",Yl="display-p3-linear",hl="linear",Ut="srgb",ul="rec709",dl="p3";var Ks=7680;var gf=519,Dg=512,Lg=513,kg=514,Xp=515,Ng=516,Ug=517,Og=518,Fg=519,qh=35044;var bf="300 es",Ni=2e3,fl=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=1234567,Ma=Math.PI/180,Rr=180/Math.PI;function Jn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function nn(s,e,t){return Math.max(e,Math.min(t,s))}function Yu(s,e){return(s%e+e)%e}function zg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Bg(s,e,t){return s!==e?(t-s)/(e-s):0}function Sa(s,e,t){return(1-t)*s+t*e}function Hg(s,e,t,n){return Sa(s,e,1-Math.exp(-t*n))}function Gg(s,e=1){return e-Math.abs(Yu(s,e*2)-e)}function Vg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Wg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qg(s,e){return s+Math.random()*(e-s)}function jg(s){return s*(.5-Math.random())}function Yg(s){s!==void 0&&(_f=s);let e=_f+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kg(s){return s*Ma}function Zg(s){return s*Rr}function Jg(s){return(s&s-1)===0&&s!==0}function $g(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function e0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*_,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*_,o*c);break;case"ZYZ":s.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Kl={DEG2RAD:Ma,RAD2DEG:Rr,generateUUID:Jn,clamp:nn,euclideanModulo:Yu,mapLinear:zg,inverseLerp:Bg,lerp:Sa,damp:Hg,pingpong:Gg,smoothstep:Vg,smootherstep:Wg,randInt:Xg,randFloat:qg,randFloatSpread:jg,seededRandom:Yg,degToRad:Kg,radToDeg:Zg,isPowerOfTwo:Jg,ceilPowerOfTwo:$g,floorPowerOfTwo:Qg,setQuaternionFromProperEuler:e0,normalize:kt,denormalize:ui},ue=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],_=n[8],y=i[0],b=i[3],m=i[6],w=i[1],v=i[4],E=i[7],O=i[2],D=i[5],L=i[8];return r[0]=a*y+o*w+l*O,r[3]=a*b+o*v+l*D,r[6]=a*m+o*E+l*L,r[1]=c*y+u*w+d*O,r[4]=c*b+u*v+d*D,r[7]=c*m+u*E+d*L,r[2]=f*y+p*w+_*O,r[5]=f*b+p*v+_*D,r[8]=f*m+p*E+_*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=t*d+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=d*y,e[1]=(i*c-u*n)*y,e[2]=(o*n-i*a)*y,e[3]=f*y,e[4]=(u*t-i*l)*y,e[5]=(i*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ac.makeScale(e,t)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ac=new pt;function qp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ca(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function t0(){let s=Ca("canvas");return s.style.display="block",s}var xf={};function ll(s){s in xf||(xf[s]=!0,console.warn(s))}function n0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function i0(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function s0(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var yf=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vf=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),la={[xn]:{transfer:hl,primaries:ul,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[$t]:{transfer:Ut,primaries:ul,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Yl]:{transfer:hl,primaries:dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(vf),fromReference:s=>s.applyMatrix3(yf)},[ju]:{transfer:Ut,primaries:dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(vf),fromReference:s=>s.applyMatrix3(yf).convertLinearToSRGB()}},r0=new Set([xn,Yl]),St={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!r0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=la[e].toReference,i=la[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return la[s].primaries},getTransfer:function(s){return s===ts?hl:la[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(la[e].luminanceCoefficients)}};function vr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zs,jh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=Ca("canvas")),Zs.width=e.width,Zs.height=e.height;let n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ca("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},a0=0,pl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Cc(i[a].image)):r.push(Cc(i[a]))}else r=Cc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Cc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?jh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var o0=0,gn=class s extends yi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ki,i=ki,r=kn,a=_i,o=Nn,l=fi,c=s.DEFAULT_ANISOTROPY,u=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Jn(),this.name="",this.source=new pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case en:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case en:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=kp;gn.DEFAULT_ANISOTROPY=1;var Rt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],b=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-b)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+b)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,E=(p+1)/2,O=(m+1)/2,D=(u+f)/4,L=(d+y)/4,z=(_+b)/4;return v>E&&v>O?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=D/n,r=L/n):E>O?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=D/i,r=z/i):O<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(O),n=L/r,i=z/r),this.set(n,i,r,t),this}let w=Math.sqrt((b-_)*(b-_)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(b-_)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yh=class extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ml=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kh=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(d!==y||l!==f||c!==p||u!==_){let b=1-o,m=l*f+c*p+u*_+d*y,w=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let O=Math.sqrt(v),D=Math.atan2(O,m*w);b=Math.sin(b*D)/O,o=Math.sin(o*D)/O}let E=o*w;if(l=l*b+f*E,c=c*b+p*E,u=u*b+_*E,d=d*b+y*E,b===1-o){let O=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=O,c*=O,u*=O,d*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-o*p,e[t+2]=c*_+u*p+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),f=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pc=new k,Mf=new ln,cn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),wo.subVectors(this.max,ca),Js.subVectors(e.a,ca),$s.subVectors(e.b,ca),Qs.subVectors(e.c,ca),Ki.subVectors($s,Js),Zi.subVectors(Qs,$s),Ms.subVectors(Js,Qs);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Ms.z,Ms.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Ms.z,0,-Ms.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Ms.y,Ms.x,0];return!Ic(t,Js,$s,Qs,wo)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,Js,$s,Qs,wo))?!1:(To.crossVectors(Ki,Zi),t=[To.x,To.y,To.z],Ic(t,Js,$s,Qs,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ri=[new k,new k,new k,new k,new k,new k,new k,new k],ai=new k,Eo=new cn,Js=new k,$s=new k,Qs=new k,Ki=new k,Zi=new k,Ms=new k,ca=new k,wo=new k,To=new k,Ss=new k;function Ic(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ss.fromArray(s,r);let o=i.x*Math.abs(Ss.x)+i.y*Math.abs(Ss.y)+i.z*Math.abs(Ss.z),l=e.dot(Ss),c=t.dot(Ss),u=n.dot(Ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var l0=new cn,ha=new k,Dc=new k,Xn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):l0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);let t=ha.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ha,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Dc)),this.expandByPoint(ha.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new k,Lc=new k,Ao=new k,Ji=new k,kc=new k,Ro=new k,Nc=new k,Ui=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lc.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Lc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ao),o=Ji.dot(this.direction),l=-Ji.dot(Ao),c=Ji.lengthSq(),u=Math.abs(1-a*a),d,f,p,_;if(u>0)if(d=a*l-o,f=a*o-l,_=r*u,d>=0)if(f>=-_)if(f<=_){let y=1/u;d*=y,f*=y,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Lc).addScaledVector(Ao,f),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,i,r){kc.subVectors(t,e),Ro.subVectors(n,e),Nc.crossVectors(kc,Ro);let a=this.direction.dot(Nc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);let l=o*this.direction.dot(Ro.crossVectors(Ji,Ro));if(l<0)return null;let c=o*this.direction.dot(kc.cross(Ji));if(c<0||l+c>a)return null;let u=-o*Ji.dot(Nc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class s{constructor(e,t,n,i,r,a,o,l,c,u,d,f,p,_,y,b){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,f,p,_,y,b)}set(e,t,n,i,r,a,o,l,c,u,d,f,p,_,y,b){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=y,m[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*d,_=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*d,_=c*u,y=c*d;t[0]=f+y*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*d,_=c*u,y=c*d;t[0]=f-y*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*d,_=o*u,y=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-y*d}else if(e.order==="XZY"){let f=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,h0)}lookAt(e,t,n){let i=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),$i.crossVectors(n,Vn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),$i.crossVectors(n,Vn)),$i.normalize(),Co.crossVectors(Vn,$i),i[0]=$i.x,i[4]=Co.x,i[8]=Vn.x,i[1]=$i.y,i[5]=Co.y,i[9]=Vn.y,i[2]=$i.z,i[6]=Co.z,i[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],_=n[2],y=n[6],b=n[10],m=n[14],w=n[3],v=n[7],E=n[11],O=n[15],D=i[0],L=i[4],z=i[8],ie=i[12],M=i[1],A=i[5],Y=i[9],K=i[13],J=i[2],de=i[6],Z=i[10],xe=i[14],ae=i[3],V=i[7],F=i[11],$=i[15];return r[0]=a*D+o*M+l*J+c*ae,r[4]=a*L+o*A+l*de+c*V,r[8]=a*z+o*Y+l*Z+c*F,r[12]=a*ie+o*K+l*xe+c*$,r[1]=u*D+d*M+f*J+p*ae,r[5]=u*L+d*A+f*de+p*V,r[9]=u*z+d*Y+f*Z+p*F,r[13]=u*ie+d*K+f*xe+p*$,r[2]=_*D+y*M+b*J+m*ae,r[6]=_*L+y*A+b*de+m*V,r[10]=_*z+y*Y+b*Z+m*F,r[14]=_*ie+y*K+b*xe+m*$,r[3]=w*D+v*M+E*J+O*ae,r[7]=w*L+v*A+E*de+O*V,r[11]=w*z+v*Y+E*Z+O*F,r[15]=w*ie+v*K+E*xe+O*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],b=e[11],m=e[15];return _*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*p-n*l*p)+y*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+b*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+m*(-i*o*u-t*l*d+t*o*f+i*a*d-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],b=e[14],m=e[15],w=d*b*c-y*f*c+y*l*p-o*b*p-d*l*m+o*f*m,v=_*f*c-u*b*c-_*l*p+a*b*p+u*l*m-a*f*m,E=u*y*c-_*d*c+_*o*p-a*y*p-u*o*m+a*d*m,O=_*d*l-u*y*l-_*o*f+a*y*f+u*o*b-a*d*b,D=t*w+n*v+i*E+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/D;return e[0]=w*L,e[1]=(y*f*r-d*b*r-y*i*p+n*b*p+d*i*m-n*f*m)*L,e[2]=(o*b*r-y*l*r+y*i*c-n*b*c-o*i*m+n*l*m)*L,e[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*p-n*l*p)*L,e[4]=v*L,e[5]=(u*b*r-_*f*r+_*i*p-t*b*p-u*i*m+t*f*m)*L,e[6]=(_*l*r-a*b*r-_*i*c+t*b*c+a*i*m-t*l*m)*L,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*p+t*l*p)*L,e[8]=E*L,e[9]=(_*d*r-u*y*r-_*n*p+t*y*p+u*n*m-t*d*m)*L,e[10]=(a*y*r-_*o*r+_*n*c-t*y*c-a*n*m+t*o*m)*L,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*p-t*o*p)*L,e[12]=O*L,e[13]=(u*y*i-_*d*i+_*n*f-t*y*f-u*n*b+t*d*b)*L,e[14]=(_*o*i-a*y*i-_*n*l+t*y*l+a*n*b-t*o*b)*L,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*f+t*o*f)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,_=r*d,y=a*u,b=a*d,m=o*d,w=l*c,v=l*u,E=l*d,O=n.x,D=n.y,L=n.z;return i[0]=(1-(y+m))*O,i[1]=(p+E)*O,i[2]=(_-v)*O,i[3]=0,i[4]=(p-E)*D,i[5]=(1-(f+m))*D,i[6]=(b+w)*D,i[7]=0,i[8]=(_+v)*L,i[9]=(b-w)*L,i[10]=(1-(f+y))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=er.set(i[0],i[1],i[2]).length(),a=er.set(i[4],i[5],i[6]).length(),o=er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],oi.copy(this);let c=1/r,u=1/a,d=1/o;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,t.setFromRotationMatrix(oi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ni){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,_;if(o===Ni)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===fl)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ni){let l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-r),f=(t+e)*c,p=(n+i)*u,_,y;if(o===Ni)_=(a+r)*d,y=-2*d;else if(o===fl)_=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},er=new k,oi=new it,c0=new k(0,0,0),h0=new k(1,1,1),$i=new k,Co=new k,Vn=new k,Sf=new it,Ef=new ln,vi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var Pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u0=0,wf=new k,tr=new ln,Pi=new it,Po=new k,ua=new k,d0=new k,f0=new ln,Tf=new k(1,0,0),Af=new k(0,1,0),Rf=new k(0,0,1),Cf={type:"added"},p0={type:"removed"},nr={type:"childadded",child:null},Uc={type:"childremoved",child:null},qt=class s extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new k,t=new vi,n=new ln,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new pt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Tf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,t){return wf.copy(e).applyQuaternion(this.quaternion),this.position.add(wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Po.copy(e):Po.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ua,Po,this.up):Pi.lookAt(Po,ua,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Pi),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cf),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p0),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cf),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};qt.DEFAULT_UP=new k(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new k,Ii=new k,Oc=new k,Di=new k,ir=new k,sr=new k,Pf=new k,Fc=new k,zc=new k,Bc=new k,Hc=new Rt,Gc=new Rt,Vc=new Rt,ns=class s{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),li.subVectors(e,t),i.cross(li);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){li.subVectors(i,t),Ii.subVectors(n,t),Oc.subVectors(e,t);let a=li.dot(li),o=li.dot(Ii),l=li.dot(Oc),c=Ii.dot(Ii),u=Ii.dot(Oc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Hc.setScalar(0),Gc.setScalar(0),Vc.setScalar(0),Hc.fromBufferAttribute(e,t),Gc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Hc,r.x),a.addScaledVector(Gc,r.y),a.addScaledVector(Vc,r.z),a}static isFrontFacing(e,t,n,i){return li.subVectors(n,t),Ii.subVectors(e,t),li.cross(Ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),li.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ir.subVectors(i,n),sr.subVectors(r,n),Fc.subVectors(e,n);let l=ir.dot(Fc),c=sr.dot(Fc);if(l<=0&&c<=0)return t.copy(n);zc.subVectors(e,i);let u=ir.dot(zc),d=sr.dot(zc);if(u>=0&&d<=u)return t.copy(i);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ir,a);Bc.subVectors(e,r);let p=ir.dot(Bc),_=sr.dot(Bc);if(_>=0&&p<=_)return t.copy(r);let y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(sr,o);let b=u*_-p*d;if(b<=0&&d-u>=0&&p-_>=0)return Pf.subVectors(r,i),o=(d-u)/(d-u+(p-_)),t.copy(i).addScaledVector(Pf,o);let m=1/(b+y+f);return a=y*m,o=f*m,t.copy(n).addScaledVector(ir,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Wc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=Yu(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wc(a,r,e+1/3),this.g=Wc(a,r,e),this.b=Wc(a,r,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let n=jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Rc(e.r),this.g=Rc(e.g),this.b=Rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return St.fromWorkingColorSpace(wn.copy(this),e),Math.round(nn(wn.r*255,0,255))*65536+Math.round(nn(wn.g*255,0,255))*256+Math.round(nn(wn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,r=wn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=$t){St.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,i=wn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Io);let n=Sa(Qi.h,Io.h,t),i=Sa(Qi.s,Io.s,t),r=Sa(Qi.l,Io.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new $e;$e.NAMES=jp;var m0=0,In=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=xr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ch&&(n.blendSrc=this.blendSrc),this.blendDst!==hh&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zt=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new k,Do=new ue,Xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qh,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}};var gl=class extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bl=class extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vt=class extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},g0=0,Kn=new it,Xc=new qt,rr=new k,Wn=new cn,da=new cn,mn=new k,Vt=class s extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qp(e)?bl:gl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];da.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Wn.min,da.min),Wn.expandByPoint(mn),mn.addVectors(Wn.max,da.max),Wn.expandByPoint(mn)):(Wn.expandByPoint(da.min),Wn.expandByPoint(da.max))}Wn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)mn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mn.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),mn.add(rr)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new k,l[z]=new k;let c=new k,u=new k,d=new k,f=new ue,p=new ue,_=new ue,y=new k,b=new k;function m(z,ie,M){c.fromBufferAttribute(n,z),u.fromBufferAttribute(n,ie),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,ie),_.fromBufferAttribute(r,M),u.sub(c),d.sub(c),p.sub(f),_.sub(f);let A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(A),b.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(A),o[z].add(y),o[ie].add(y),o[M].add(y),l[z].add(b),l[ie].add(b),l[M].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,ie=w.length;z<ie;++z){let M=w[z],A=M.start,Y=M.count;for(let K=A,J=A+Y;K<J;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let v=new k,E=new k,O=new k,D=new k;function L(z){O.fromBufferAttribute(i,z),D.copy(O);let ie=o[z];v.copy(ie),v.sub(O.multiplyScalar(O.dot(ie))).normalize(),E.crossVectors(D,ie);let A=E.dot(l[z])<0?-1:1;a.setXYZW(z,v.x,v.y,v.z,A)}for(let z=0,ie=w.length;z<ie;++z){let M=w[z],A=M.start,Y=M.count;for(let K=A,J=A+Y;K<J;K+=3)L(e.getX(K+0)),L(e.getX(K+1)),L(e.getX(K+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let _=e.getX(f+0),y=e.getX(f+1),b=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,b),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,b),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,_=0;for(let y=0,b=l.length;y<b;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let m=0;m<u;m++)f[_++]=c[p++]}return new Xt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},If=new it,Es=new Ui,Lo=new Xn,Df=new k,ko=new k,No=new k,Uo=new k,qc=new k,Oo=new k,Lf=new k,Fo=new k,le=class extends qt{constructor(e=new Vt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(qc.fromBufferAttribute(d,e),a?Oo.addScaledVector(qc,u):Oo.addScaledVector(qc.sub(t),u))}t.add(Oo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Lo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Lo,Df)===null||Es.origin.distanceToSquared(Df)>(e.far-e.near)**2))&&(If.copy(r).invert(),Es.copy(e.ray).applyMatrix4(If),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let b=f[_],m=a[b.materialIndex],w=Math.max(b.start,p.start),v=Math.min(o.count,Math.min(b.start+b.count,p.start+p.count));for(let E=w,O=v;E<O;E+=3){let D=o.getX(E),L=o.getX(E+1),z=o.getX(E+2);i=zo(this,m,e,n,c,u,d,D,L,z),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let b=_,m=y;b<m;b+=3){let w=o.getX(b),v=o.getX(b+1),E=o.getX(b+2);i=zo(this,a,e,n,c,u,d,w,v,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let b=f[_],m=a[b.materialIndex],w=Math.max(b.start,p.start),v=Math.min(l.count,Math.min(b.start+b.count,p.start+p.count));for(let E=w,O=v;E<O;E+=3){let D=E,L=E+1,z=E+2;i=zo(this,m,e,n,c,u,d,D,L,z),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let b=_,m=y;b<m;b+=3){let w=b,v=b+1,E=b+2;i=zo(this,a,e,n,c,u,d,w,v,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}};function b0(s,e,t,n,i,r,a,o){let l;if(e.side===Tn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===xi,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:s}}function zo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ko),s.getVertexPosition(l,No),s.getVertexPosition(c,Uo);let u=b0(s,e,t,n,ko,No,Uo,Lf);if(u){let d=new k;ns.getBarycoord(Lf,ko,No,Uo,d),i&&(u.uv=ns.getInterpolatedAttribute(i,o,l,c,d,new ue)),r&&(u.uv1=ns.getInterpolatedAttribute(r,o,l,c,d,new ue)),a&&(u.normal=ns.getInterpolatedAttribute(a,o,l,c,d,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new k,materialIndex:0};ns.getNormal(ko,No,Uo,f.normal),u.face=f,u.barycoord=d}return u}var lt=class s extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(d,2));function _(y,b,m,w,v,E,O,D,L,z,ie){let M=E/L,A=O/z,Y=E/2,K=O/2,J=D/2,de=L+1,Z=z+1,xe=0,ae=0,V=new k;for(let F=0;F<Z;F++){let $=F*A-K;for(let oe=0;oe<de;oe++){let ge=oe*M-Y;V[y]=ge*w,V[b]=$*v,V[m]=J,c.push(V.x,V.y,V.z),V[y]=0,V[b]=0,V[m]=D>0?1:-1,u.push(V.x,V.y,V.z),d.push(oe/L),d.push(1-F/z),xe+=1}}for(let F=0;F<z;F++)for(let $=0;$<L;$++){let oe=f+$+de*F,ge=f+$+de*(F+1),B=f+($+1)+de*(F+1),N=f+($+1)+de*F;l.push(oe,ge,N),l.push(ge,B,N),ae+=6}o.addGroup(p,ae,ie),p+=ae,f+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pn(s){let e={};for(let t=0;t<s.length;t++){let n=Cr(s[t]);for(let i in n)e[i]=n[i]}return e}function _0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yp(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}var Fn={clone:Cr,merge:Pn},x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_l=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},es=new k,kf=new ue,Nf=new ue,rn=class extends _l{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,kf,Nf),t.subVectors(Nf,kf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ar=-90,or=1,Zh=class extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new rn(ar,or,e,t);i.layers=this.layers,this.add(i);let r=new rn(ar,or,e,t);r.layers=this.layers,this.add(r);let a=new rn(ar,or,e,t);a.layers=this.layers,this.add(a);let o=new rn(ar,or,e,t);o.layers=this.layers,this.add(o);let l=new rn(ar,or,e,t);l.layers=this.layers,this.add(l);let c=new rn(ar,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},xl=class extends gn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jh=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new lt(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:on});r.uniforms.tEquirect.value=t;let a=new le(i,r),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=kn),new Zh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},jc=new k,v0=new k,M0=new pt,hi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=jc.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||M0.getNormalMatrix(e),i=this.coplanarPoint(jc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ws=new Xn,Bo=new k,Ia=class{constructor(e=new hi,t=new hi,n=new hi,i=new hi,r=new hi,a=new hi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],p=i[8],_=i[9],y=i[10],b=i[11],m=i[12],w=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-r,f-c,b-p,E-m).normalize(),n[1].setComponents(l+r,f+c,b+p,E+m).normalize(),n[2].setComponents(l+a,f+u,b+_,E+w).normalize(),n[3].setComponents(l-a,f-u,b-_,E-w).normalize(),n[4].setComponents(l-o,f-d,b-y,E-v).normalize(),t===Ni)n[5].setComponents(l+o,f+d,b+y,E+v).normalize();else if(t===fl)n[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Bo.x=i.normal.x>0?e.max.x:e.min.x,Bo.y=i.normal.y>0?e.max.y:e.min.y,Bo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function S0(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let y=d[p];s.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var _n=class s extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,p=[],_=[],y=[],b=[];for(let m=0;m<u;m++){let w=m*f-a;for(let v=0;v<c;v++){let E=v*d-r;_.push(E,-w,0),y.push(0,0,1),b.push(v/o),b.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let v=w+c*m,E=w+c*(m+1),O=w+1+c*(m+1),D=w+1+c*m;p.push(v,E,D),p.push(E,O,D)}this.setIndex(p),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,j0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,K0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",tb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ob=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$b=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,__=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,D_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:E0,alphahash_pars_fragment:w0,alphamap_fragment:T0,alphamap_pars_fragment:A0,alphatest_fragment:R0,alphatest_pars_fragment:C0,aomap_fragment:P0,aomap_pars_fragment:I0,batching_pars_vertex:D0,batching_vertex:L0,begin_vertex:k0,beginnormal_vertex:N0,bsdfs:U0,iridescence_fragment:O0,bumpmap_pars_fragment:F0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:G0,color_fragment:V0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:q0,common:j0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:K0,displacementmap_pars_vertex:Z0,displacementmap_vertex:J0,emissivemap_fragment:$0,emissivemap_pars_fragment:Q0,colorspace_fragment:eb,colorspace_pars_fragment:tb,envmap_fragment:nb,envmap_common_pars_fragment:ib,envmap_pars_fragment:sb,envmap_pars_vertex:rb,envmap_physical_pars_fragment:gb,envmap_vertex:ab,fog_vertex:ob,fog_pars_vertex:lb,fog_fragment:cb,fog_pars_fragment:hb,gradientmap_pars_fragment:ub,lightmap_pars_fragment:db,lights_lambert_fragment:fb,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:bb,lights_toon_pars_fragment:_b,lights_phong_fragment:xb,lights_phong_pars_fragment:yb,lights_physical_fragment:vb,lights_physical_pars_fragment:Mb,lights_fragment_begin:Sb,lights_fragment_maps:Eb,lights_fragment_end:wb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Cb,map_fragment:Pb,map_pars_fragment:Ib,map_particle_fragment:Db,map_particle_pars_fragment:Lb,metalnessmap_fragment:kb,metalnessmap_pars_fragment:Nb,morphinstance_vertex:Ub,morphcolor_vertex:Ob,morphnormal_vertex:Fb,morphtarget_pars_vertex:zb,morphtarget_vertex:Bb,normal_fragment_begin:Hb,normal_fragment_maps:Gb,normal_pars_fragment:Vb,normal_pars_vertex:Wb,normal_vertex:Xb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:jb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:Kb,iridescence_pars_fragment:Zb,opaque_fragment:Jb,packing:$b,premultiplied_alpha_fragment:Qb,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:a_,shadowmap_vertex:o_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:h_,skinning_vertex:u_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:b_,transmission_pars_fragment:__,uv_pars_fragment:x_,uv_pars_vertex:y_,uv_vertex:v_,worldpos_vertex:M_,background_vert:S_,background_frag:E_,backgroundCube_vert:w_,backgroundCube_frag:T_,cube_vert:A_,cube_frag:R_,depth_vert:C_,depth_frag:P_,distanceRGBA_vert:I_,distanceRGBA_frag:D_,equirect_vert:L_,equirect_frag:k_,linedashed_vert:N_,linedashed_frag:U_,meshbasic_vert:O_,meshbasic_frag:F_,meshlambert_vert:z_,meshlambert_frag:B_,meshmatcap_vert:H_,meshmatcap_frag:G_,meshnormal_vert:V_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:q_,meshphysical_vert:j_,meshphysical_frag:Y_,meshtoon_vert:K_,meshtoon_frag:Z_,points_vert:J_,points_frag:$_,shadow_vert:Q_,shadow_frag:ex,sprite_vert:tx,sprite_frag:nx},He={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},bi={basic:{uniforms:Pn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Pn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new $e(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Pn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Pn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Pn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new $e(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Pn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Pn([He.points,He.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Pn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Pn([He.common,He.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Pn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Pn([He.sprite,He.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Pn([He.common,He.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Pn([He.lights,He.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};bi.physical={uniforms:Pn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var Ho={r:0,b:0,g:0},Ts=new vi,ix=new it;function sx(s,e,t,n,i,r,a){let o=new $e(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function _(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function y(w){let v=!1,E=_(w);E===null?m(o,l):E&&E.isColor&&(m(E,1),v=!0);let O=s.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(w,v){let E=_(v);E&&(E.isCubeTexture||E.mapping===ql)?(u===void 0&&(u=new le(new lt(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Cr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ts.copy(v.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Ts)),u.material.toneMapped=St.getTransfer(E.colorSpace)!==Ut,(d!==E||f!==E.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,p=s.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new le(new _n(2,2),new Wt({name:"BackgroundMaterial",uniforms:Cr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=St.getTransfer(E.colorSpace)!==Ut,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,v){w.getRGB(Ho,Yp(s)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(w,v=1){o.set(w),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(o,l)},render:y,addToRenderList:b}}function rx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(M,A,Y,K,J){let de=!1,Z=d(K,Y,A);r!==Z&&(r=Z,c(r.object)),de=p(M,K,Y,J),de&&_(M,K,Y,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(de||a)&&(a=!1,E(M,A,Y,K),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function d(M,A,Y){let K=Y.wireframe===!0,J=n[M.id];J===void 0&&(J={},n[M.id]=J);let de=J[A.id];de===void 0&&(de={},J[A.id]=de);let Z=de[K];return Z===void 0&&(Z=f(l()),de[K]=Z),Z}function f(M){let A=[],Y=[],K=[];for(let J=0;J<t;J++)A[J]=0,Y[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:Y,attributeDivisors:K,object:M,attributes:{},index:null}}function p(M,A,Y,K){let J=r.attributes,de=A.attributes,Z=0,xe=Y.getAttributes();for(let ae in xe)if(xe[ae].location>=0){let F=J[ae],$=de[ae];if($===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),F===void 0||F.attribute!==$||$&&F.data!==$.data)return!0;Z++}return r.attributesNum!==Z||r.index!==K}function _(M,A,Y,K){let J={},de=A.attributes,Z=0,xe=Y.getAttributes();for(let ae in xe)if(xe[ae].location>=0){let F=de[ae];F===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(F=M.instanceColor));let $={};$.attribute=F,F&&F.data&&($.data=F.data),J[ae]=$,Z++}r.attributes=J,r.attributesNum=Z,r.index=K}function y(){let M=r.newAttributes;for(let A=0,Y=M.length;A<Y;A++)M[A]=0}function b(M){m(M,0)}function m(M,A){let Y=r.newAttributes,K=r.enabledAttributes,J=r.attributeDivisors;Y[M]=1,K[M]===0&&(s.enableVertexAttribArray(M),K[M]=1),J[M]!==A&&(s.vertexAttribDivisor(M,A),J[M]=A)}function w(){let M=r.newAttributes,A=r.enabledAttributes;for(let Y=0,K=A.length;Y<K;Y++)A[Y]!==M[Y]&&(s.disableVertexAttribArray(Y),A[Y]=0)}function v(M,A,Y,K,J,de,Z){Z===!0?s.vertexAttribIPointer(M,A,Y,J,de):s.vertexAttribPointer(M,A,Y,K,J,de)}function E(M,A,Y,K){y();let J=K.attributes,de=Y.getAttributes(),Z=A.defaultAttributeValues;for(let xe in de){let ae=de[xe];if(ae.location>=0){let V=J[xe];if(V===void 0&&(xe==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),xe==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){let F=V.normalized,$=V.itemSize,oe=e.get(V);if(oe===void 0)continue;let ge=oe.buffer,B=oe.type,N=oe.bytesPerElement,ee=B===s.INT||B===s.UNSIGNED_INT||V.gpuType===Ou;if(V.isInterleavedBufferAttribute){let Q=V.data,fe=Q.stride,be=V.offset;if(Q.isInstancedInterleavedBuffer){for(let we=0;we<ae.locationSize;we++)m(ae.location+we,Q.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let we=0;we<ae.locationSize;we++)b(ae.location+we);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let we=0;we<ae.locationSize;we++)v(ae.location+we,$/ae.locationSize,B,F,fe*N,(be+$/ae.locationSize*we)*N,ee)}else{if(V.isInstancedBufferAttribute){for(let Q=0;Q<ae.locationSize;Q++)m(ae.location+Q,V.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Q=0;Q<ae.locationSize;Q++)b(ae.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Q=0;Q<ae.locationSize;Q++)v(ae.location+Q,$/ae.locationSize,B,F,$*N,$/ae.locationSize*Q*N,ee)}}else if(Z!==void 0){let F=Z[xe];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(ae.location,F);break;case 3:s.vertexAttrib3fv(ae.location,F);break;case 4:s.vertexAttrib4fv(ae.location,F);break;default:s.vertexAttrib1fv(ae.location,F)}}}}w()}function O(){z();for(let M in n){let A=n[M];for(let Y in A){let K=A[Y];for(let J in K)u(K[J].object),delete K[J];delete A[Y]}delete n[M]}}function D(M){if(n[M.id]===void 0)return;let A=n[M.id];for(let Y in A){let K=A[Y];for(let J in K)u(K[J].object),delete K[J];delete A[Y]}delete n[M.id]}function L(M){for(let A in n){let Y=n[A];if(Y[M.id]===void 0)continue;let K=Y[M.id];for(let J in K)u(K[J].object),delete K[J];delete Y[M.id]}}function z(){ie(),a=!0,r!==i&&(r=i,c(r.object))}function ie(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:z,resetDefaultState:ie,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:b,disableUnusedAttributes:w}}function ax(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,n,1)}function l(c,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=u[y];for(let y=0;y<f.length;y++)t.update(_,n,f[y])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ox(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==Nn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let z=L===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==fi&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==di&&!z)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let L=e.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:b,maxAttributes:m,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:O,maxSamples:D}}function lx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new hi,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,y=d.clipIntersection,b=d.clipShadows,m=s.get(d);if(!i||_===null||_.length===0||r&&!b)r?u(null):c();else{let w=r?0:n,v=w*4,E=m.clippingState||null;l.value=E,E=u(_,f,v,p);for(let O=0;O!==v;++O)E[O]=t[O];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,_){let y=d!==null?d.length:0,b=null;if(y!==0){if(b=l.value,_!==!0||b===null){let m=p+y*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(b===null||b.length<m)&&(b=new Float32Array(m));for(let v=0,E=p;v!==y;++v,E+=4)a.copy(d[v]).applyMatrix4(w,o),a.normal.toArray(b,E),b[E+3]=a.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,b}}function cx(s){let e=new WeakMap;function t(a,o){return o===_h?a.mapping=Er:o===xh&&(a.mapping=wr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===_h||o===xh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Jh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ls=class extends _l{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},br=4,Uf=[.125,.215,.35,.446,.526,.582],Cs=20,Yc=new ls,Of=new $e,Kc=null,Zc=0,Jc=0,$c=!1,Rs=(1+Math.sqrt(5))/2,lr=1/Rs,Ff=[new k(-Rs,lr,0),new k(Rs,lr,0),new k(-lr,0,Rs),new k(lr,0,Rs),new k(0,Rs,-lr),new k(0,Rs,lr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Jc),this._renderer.xr.enabled=$c,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:On,format:Nn,colorSpace:xn,depthBuffer:!1},i=zf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hx(r)),this._blurMaterial=ux(r,e,t)}return i}_compileMaterial(e){let t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Yc)}_sceneToCubeUV(e,t,n,i){let o=new rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Of),u.toneMapping=ss,u.autoClear=!1;let p=new zt({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new le(new lt,p),y=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,y=!0):(p.color.copy(Of),y=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):w===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;Go(i,w*v,m>2?v:0,v,v),u.setRenderTarget(i),y&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Er||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Yc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ff[(i-r-1)%Ff.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new le(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cs-1),y=r/_,b=isFinite(r)?1+Math.floor(u*y):Cs;b>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Cs}`);let m=[],w=0;for(let L=0;L<Cs;++L){let z=L/y,ie=Math.exp(-z*z/2);m.push(ie),L===0?w+=ie:L<b&&(w+=2*ie)}for(let L=0;L<m.length;L++)m[L]=m[L]/w;f.envMap.value=e.texture,f.samples.value=b,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;let E=this._sizeLods[i],O=3*E*(i>v-br?i-v+br:0),D=4*(this._cubeSize-E);Go(t,O,D,3*E,2*E),l.setRenderTarget(t),l.render(d,Yc)}};function hx(s){let e=[],t=[],n=[],i=s,r=s-br+1+Uf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-br?l=Uf[a-s+br-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,y=3,b=2,m=1,w=new Float32Array(y*_*p),v=new Float32Array(b*_*p),E=new Float32Array(m*_*p);for(let D=0;D<p;D++){let L=D%3*2/3-1,z=D>2?0:-1,ie=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];w.set(ie,y*_*D),v.set(f,b*_*D);let M=[D,D,D,D,D,D];E.set(M,m*_*D)}let O=new Vt;O.setAttribute("position",new Xt(w,y)),O.setAttribute("uv",new Xt(v,b)),O.setAttribute("faceIndex",new Xt(E,m)),e.push(O),i>br&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zf(s,e,t){let n=new bn(s,e,t);return n.texture.mapping=ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ux(s,e,t){let n=new Float32Array(Cs),i=new k(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Bf(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Hf(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===_h||l===xh,u=l===Er||l===wr;if(c||u){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Pr(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Pr(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ll("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function px(s,e,t,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let y=f.morphAttributes[_];for(let b=0,m=y.length;b<m;b++)e.remove(y[b])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)e.update(f[_],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let _ in p){let y=p[_];for(let b=0,m=y.length;b<m;b++)e.update(y[b],s.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,_=d.attributes.position,y=0;if(p!==null){let w=p.array;y=p.version;for(let v=0,E=w.length;v<E;v+=3){let O=w[v+0],D=w[v+1],L=w[v+2];f.push(O,D,D,L,L,O)}}else if(_!==void 0){let w=_.array;y=_.version;for(let v=0,E=w.length/3-1;v<E;v+=3){let O=v+0,D=v+1,L=v+2;f.push(O,D,D,L,L,O)}}else return;let b=new(qp(f)?bl:gl)(f,1);b.version=y;let m=r.get(d);m&&e.remove(m),r.set(d,b)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function mx(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,f*a,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let b=0;for(let m=0;m<_;m++)b+=p[m];t.update(b,n,1)}function d(f,p,_,y){if(_===0)return;let b=e.get("WEBGL_multi_draw");if(b===null)for(let m=0;m<f.length;m++)c(f[m]/a,p[m],y[m]);else{b.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,_);let m=0;for(let w=0;w<_;w++)m+=p[w];for(let w=0;w<y.length;w++)t.update(m,n,y[w])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function gx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function bx(s,e,t){let n=new WeakMap,i=new Rt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let ie=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",ie)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],v=0;p===!0&&(v=1),_===!0&&(v=2),y===!0&&(v=3);let E=o.attributes.position.count*v,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let D=new Float32Array(E*O*4*d),L=new ml(D,E,O,d);L.type=di,L.needsUpdate=!0;let z=v*4;for(let M=0;M<d;M++){let A=b[M],Y=m[M],K=w[M],J=E*O*4*M;for(let de=0;de<A.count;de++){let Z=de*z;p===!0&&(i.fromBufferAttribute(A,de),D[J+Z+0]=i.x,D[J+Z+1]=i.y,D[J+Z+2]=i.z,D[J+Z+3]=0),_===!0&&(i.fromBufferAttribute(Y,de),D[J+Z+4]=i.x,D[J+Z+5]=i.y,D[J+Z+6]=i.z,D[J+Z+7]=0),y===!0&&(i.fromBufferAttribute(K,de),D[J+Z+8]=i.x,D[J+Z+9]=i.y,D[J+Z+10]=i.z,D[J+Z+11]=K.itemSize===4?i.w:1)}}f={count:d,texture:L,size:new ue(E,O)},n.set(o,f),o.addEventListener("dispose",ie)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function _x(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ir=class extends gn{constructor(e,t,n,i,r,a,o,l,c,u=yr){if(u!==yr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yr&&(n=Is),n===void 0&&u===os&&(n=as),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zp=new gn,Gf=new Ir(1,1),Jp=new ml,$p=new Kh,Qp=new xl,Vf=[],Wf=[],Xf=new Float32Array(16),qf=new Float32Array(9),jf=new Float32Array(4);function Wr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Vf[i];if(r===void 0&&(r=new Float32Array(i),Vf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Zl(s,e){let t=Wf[e];t===void 0&&(t=new Int32Array(e),Wf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function xx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function Mx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function Sx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;jf.set(n),s.uniformMatrix2fv(this.addr,!1,jf),un(t,n)}}function Ex(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;qf.set(n),s.uniformMatrix3fv(this.addr,!1,qf),un(t,n)}}function wx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Xf.set(n),s.uniformMatrix4fv(this.addr,!1,Xf),un(t,n)}}function Tx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ax(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function Rx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function Cx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function Px(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ix(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function Dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function Lx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function kx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Gf.compareFunction=Xp,r=Gf):r=Zp,t.setTexture2D(e||r,i)}function Nx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$p,i)}function Ux(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qp,i)}function Ox(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jp,i)}function Fx(s){switch(s){case 5126:return xx;case 35664:return yx;case 35665:return vx;case 35666:return Mx;case 35674:return Sx;case 35675:return Ex;case 35676:return wx;case 5124:case 35670:return Tx;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Dx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Ox}}function zx(s,e){s.uniform1fv(this.addr,e)}function Bx(s,e){let t=Wr(e,this.size,2);s.uniform2fv(this.addr,t)}function Hx(s,e){let t=Wr(e,this.size,3);s.uniform3fv(this.addr,t)}function Gx(s,e){let t=Wr(e,this.size,4);s.uniform4fv(this.addr,t)}function Vx(s,e){let t=Wr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wx(s,e){let t=Wr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xx(s,e){let t=Wr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qx(s,e){s.uniform1iv(this.addr,e)}function jx(s,e){s.uniform2iv(this.addr,e)}function Yx(s,e){s.uniform3iv(this.addr,e)}function Kx(s,e){s.uniform4iv(this.addr,e)}function Zx(s,e){s.uniform1uiv(this.addr,e)}function Jx(s,e){s.uniform2uiv(this.addr,e)}function $x(s,e){s.uniform3uiv(this.addr,e)}function Qx(s,e){s.uniform4uiv(this.addr,e)}function ey(s,e,t){let n=this.cache,i=e.length,r=Zl(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Zp,r[a])}function ty(s,e,t){let n=this.cache,i=e.length,r=Zl(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||$p,r[a])}function ny(s,e,t){let n=this.cache,i=e.length,r=Zl(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Qp,r[a])}function iy(s,e,t){let n=this.cache,i=e.length,r=Zl(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jp,r[a])}function sy(s){switch(s){case 5126:return zx;case 35664:return Bx;case 35665:return Hx;case 35666:return Gx;case 35674:return Vx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return jx;case 35668:case 35672:return Yx;case 35669:case 35673:return Kx;case 5125:return Zx;case 36294:return Jx;case 36295:return $x;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}var $h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fx(t.type)}},Qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sy(t.type)}},eu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function Yf(s,e){s.seq.push(e),s.map[e.id]=e}function ry(s,e,t){let n=s.name,i=n.length;for(Qc.lastIndex=0;;){let r=Qc.exec(n),a=Qc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Yf(t,c===void 0?new $h(o,s,e):new Qh(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new eu(o),Yf(t,d)),t=d}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ry(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Kf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var ay=37297,oy=0;function ly(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function cy(s){let e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(s),n;switch(e===t?n="":e===dl&&t===ul?n="LinearDisplayP3ToLinearSRGB":e===ul&&t===dl&&(n="LinearSRGBToLinearDisplayP3"),s){case xn:case Yl:return[n,"LinearTransferOETF"];case $t:case ju:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Zf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ly(s.getShaderSource(e),a)}else return i}function hy(s,e){let t=cy(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uy(s,e){let t;switch(e){case Iu:t="Linear";break;case Du:t="Reinhard";break;case Lu:t="Cineon";break;case ku:t="ACESFilmic";break;case Nu:t="AgX";break;case ja:t="Neutral";break;case Eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vo=new k;function dy(){St.getLuminanceCoefficients(Vo);let s=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function py(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function my(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ya(s){return s!==""}function Jf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $f(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(s){return s.replace(gy,_y)}var by=new Map;function _y(s,e){let t=xt[e];if(t===void 0){let n=by.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tu(t)}var xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(s){return s.replace(xy,yy)}function yy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ep(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===og?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function My(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Er:case wr:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ey(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lp:e="ENVMAP_BLENDING_MULTIPLY";break;case Mg:e="ENVMAP_BLENDING_MIX";break;case Sg:e="ENVMAP_BLENDING_ADD";break}return e}function wy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ty(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=vy(t),c=My(t),u=Sy(t),d=Ey(t),f=wy(t),p=fy(t),_=py(r),y=i.createProgram(),b,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ya).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ya).join(`
`),m.length>0&&(m+=`
`)):(b=[ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),m=[ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?xt.tonemapping_pars_fragment:"",t.toneMapping!==ss?uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,hy("linearToOutputTexel",t.outputColorSpace),dy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=tu(a),a=Jf(a,t),a=$f(a,t),o=tu(o),o=Jf(o,t),o=$f(o,t),a=Qf(a),o=Qf(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,b=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=w+b+a,E=w+m+o,O=Kf(i,i.VERTEX_SHADER,v),D=Kf(i,i.FRAGMENT_SHADER,E);i.attachShader(y,O),i.attachShader(y,D),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function L(A){if(s.debug.checkShaderErrors){let Y=i.getProgramInfoLog(y).trim(),K=i.getShaderInfoLog(O).trim(),J=i.getShaderInfoLog(D).trim(),de=!0,Z=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,O,D);else{let xe=Zf(i,O,"vertex"),ae=Zf(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+Y+`
`+xe+`
`+ae)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(K===""||J==="")&&(Z=!1);Z&&(A.diagnostics={runnable:de,programLog:Y,vertexShader:{log:K,prefix:b},fragmentShader:{log:J,prefix:m}})}i.deleteShader(O),i.deleteShader(D),z=new Mr(i,y),ie=my(i,y)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let ie;this.getAttributes=function(){return ie===void 0&&L(this),ie};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(y,ay)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=D,this}var Ay=0,nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new iu(e),t.set(e,n)),n}},iu=class{constructor(e){this.id=Ay++,this.code=e,this.usedTimes=0}};function Ry(s,e,t,n,i,r,a){let o=new Pa,l=new nu,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,_=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,A,Y,K,J){let de=K.fog,Z=J.geometry,xe=M.isMeshStandardMaterial?K.environment:null,ae=(M.isMeshStandardMaterial?t:e).get(M.envMap||xe),V=ae&&ae.mapping===ql?ae.image.height:null,F=y[M.type];M.precision!==null&&(_=i.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));let $=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=$!==void 0?$.length:0,ge=0;Z.morphAttributes.position!==void 0&&(ge=1),Z.morphAttributes.normal!==void 0&&(ge=2),Z.morphAttributes.color!==void 0&&(ge=3);let B,N,ee,Q;if(F){let yn=bi[F];B=yn.vertexShader,N=yn.fragmentShader}else B=M.vertexShader,N=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);let fe=s.getRenderTarget(),be=J.isInstancedMesh===!0,we=J.isBatchedMesh===!0,Ie=!!M.map,re=!!M.matcap,I=!!ae,Te=!!M.aoMap,Ee=!!M.lightMap,ye=!!M.bumpMap,Re=!!M.normalMap,We=!!M.displacementMap,Me=!!M.emissiveMap,P=!!M.metalnessMap,T=!!M.roughnessMap,j=M.anisotropy>0,ne=M.clearcoat>0,me=M.dispersion>0,pe=M.iridescence>0,ze=M.sheen>0,Ce=M.transmission>0,Ge=j&&!!M.anisotropyMap,ft=ne&&!!M.clearcoatMap,Se=ne&&!!M.clearcoatNormalMap,Ve=ne&&!!M.clearcoatRoughnessMap,ct=pe&&!!M.iridescenceMap,st=pe&&!!M.iridescenceThicknessMap,je=ze&&!!M.sheenColorMap,mt=ze&&!!M.sheenRoughnessMap,nt=!!M.specularMap,ut=!!M.specularColorMap,H=!!M.specularIntensityMap,Be=Ce&&!!M.transmissionMap,he=Ce&&!!M.thicknessMap,_e=!!M.gradientMap,Xe=!!M.alphaMap,Ae=M.alphaTest>0,dt=!!M.alphaHash,Zt=!!M.extensions,fn=ss;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(fn=s.toneMapping);let wt={shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:N,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:we,batchingColor:we&&J._colorsTexture!==null,instancing:be,instancingColor:be&&J.instanceColor!==null,instancingMorph:be&&J.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:xn,alphaToCoverage:!!M.alphaToCoverage,map:Ie,matcap:re,envMap:I,envMapMode:I&&ae.mapping,envMapCubeUVHeight:V,aoMap:Te,lightMap:Ee,bumpMap:ye,normalMap:Re,displacementMap:p&&We,emissiveMap:Me,normalMapObjectSpace:Re&&M.normalMapType===Ig,normalMapTangentSpace:Re&&M.normalMapType===qu,metalnessMap:P,roughnessMap:T,anisotropy:j,anisotropyMap:Ge,clearcoat:ne,clearcoatMap:ft,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ve,dispersion:me,iridescence:pe,iridescenceMap:ct,iridescenceThicknessMap:st,sheen:ze,sheenColorMap:je,sheenRoughnessMap:mt,specularMap:nt,specularColorMap:ut,specularIntensityMap:H,transmission:Ce,transmissionMap:Be,thicknessMap:he,gradientMap:_e,opaque:M.transparent===!1&&M.blending===xr&&M.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Ae,alphaHash:dt,combine:M.combine,mapUv:Ie&&b(M.map.channel),aoMapUv:Te&&b(M.aoMap.channel),lightMapUv:Ee&&b(M.lightMap.channel),bumpMapUv:ye&&b(M.bumpMap.channel),normalMapUv:Re&&b(M.normalMap.channel),displacementMapUv:We&&b(M.displacementMap.channel),emissiveMapUv:Me&&b(M.emissiveMap.channel),metalnessMapUv:P&&b(M.metalnessMap.channel),roughnessMapUv:T&&b(M.roughnessMap.channel),anisotropyMapUv:Ge&&b(M.anisotropyMap.channel),clearcoatMapUv:ft&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:je&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&b(M.sheenRoughnessMap.channel),specularMapUv:nt&&b(M.specularMap.channel),specularColorMapUv:ut&&b(M.specularColorMap.channel),specularIntensityMapUv:H&&b(M.specularIntensityMap.channel),transmissionMapUv:Be&&b(M.transmissionMap.channel),thicknessMapUv:he&&b(M.thicknessMap.channel),alphaMapUv:Xe&&b(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Re||j),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Z.attributes.uv&&(Ie||Xe),fog:!!de,useFog:M.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:fn,decodeVideoTexture:Ie&&M.map.isVideoTexture===!0&&St.getTransfer(M.map.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qt,flipSided:M.side===Tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Zt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&M.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function w(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let Y in M.defines)A.push(Y),A.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(v(A,M),E(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function v(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function E(M,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),M.push(o.mask)}function O(M){let A=y[M.type],Y;if(A){let K=bi[A];Y=Fn.clone(K.uniforms)}else Y=M.uniforms;return Y}function D(M,A){let Y;for(let K=0,J=u.length;K<J;K++){let de=u[K];if(de.cacheKey===A){Y=de,++Y.usedTimes;break}}return Y===void 0&&(Y=new Ty(s,A,M,r),u.push(Y)),Y}function L(M){if(--M.usedTimes===0){let A=u.indexOf(M);u[A]=u[u.length-1],u.pop(),M.destroy()}}function z(M){l.remove(M)}function ie(){l.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:O,acquireProgram:D,releaseProgram:L,releaseShaderCache:z,programs:u,dispose:ie}}function Cy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Py(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function tp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function np(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,p,_,y,b){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:b},s[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=y,m.group=b),e++,m}function o(d,f,p,_,y,b){let m=a(d,f,p,_,y,b);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(d,f,p,_,y,b){let m=a(d,f,p,_,y,b);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||Py),n.length>1&&n.sort(f||tp),i.length>1&&i.sort(f||tp)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Iy(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new np,s.set(n,[a])):i>=r.length?(a=new np,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Dy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new $e};break;case"SpotLight":t={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function Ly(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var ky=0;function Ny(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Uy(s){let e=new Dy,t=Ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,r=new it,a=new it;function o(c){let u=0,d=0,f=0;for(let ie=0;ie<9;ie++)n.probe[ie].set(0,0,0);let p=0,_=0,y=0,b=0,m=0,w=0,v=0,E=0,O=0,D=0,L=0;c.sort(Ny);for(let ie=0,M=c.length;ie<M;ie++){let A=c[ie],Y=A.color,K=A.intensity,J=A.distance,de=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=Y.r*K,d+=Y.g*K,f+=Y.b*K;else if(A.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(A.sh.coefficients[Z],K);L++}else if(A.isDirectionalLight){let Z=e.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let xe=A.shadow,ae=t.get(A);ae.shadowIntensity=xe.intensity,ae.shadowBias=xe.bias,ae.shadowNormalBias=xe.normalBias,ae.shadowRadius=xe.radius,ae.shadowMapSize=xe.mapSize,n.directionalShadow[p]=ae,n.directionalShadowMap[p]=de,n.directionalShadowMatrix[p]=A.shadow.matrix,w++}n.directional[p]=Z,p++}else if(A.isSpotLight){let Z=e.get(A);Z.position.setFromMatrixPosition(A.matrixWorld),Z.color.copy(Y).multiplyScalar(K),Z.distance=J,Z.coneCos=Math.cos(A.angle),Z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Z.decay=A.decay,n.spot[y]=Z;let xe=A.shadow;if(A.map&&(n.spotLightMap[O]=A.map,O++,xe.updateMatrices(A),A.castShadow&&D++),n.spotLightMatrix[y]=xe.matrix,A.castShadow){let ae=t.get(A);ae.shadowIntensity=xe.intensity,ae.shadowBias=xe.bias,ae.shadowNormalBias=xe.normalBias,ae.shadowRadius=xe.radius,ae.shadowMapSize=xe.mapSize,n.spotShadow[y]=ae,n.spotShadowMap[y]=de,E++}y++}else if(A.isRectAreaLight){let Z=e.get(A);Z.color.copy(Y).multiplyScalar(K),Z.halfWidth.set(A.width*.5,0,0),Z.halfHeight.set(0,A.height*.5,0),n.rectArea[b]=Z,b++}else if(A.isPointLight){let Z=e.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),Z.distance=A.distance,Z.decay=A.decay,A.castShadow){let xe=A.shadow,ae=t.get(A);ae.shadowIntensity=xe.intensity,ae.shadowBias=xe.bias,ae.shadowNormalBias=xe.normalBias,ae.shadowRadius=xe.radius,ae.shadowMapSize=xe.mapSize,ae.shadowCameraNear=xe.camera.near,ae.shadowCameraFar=xe.camera.far,n.pointShadow[_]=ae,n.pointShadowMap[_]=de,n.pointShadowMatrix[_]=A.shadow.matrix,v++}n.point[_]=Z,_++}else if(A.isHemisphereLight){let Z=e.get(A);Z.skyColor.copy(A.color).multiplyScalar(K),Z.groundColor.copy(A.groundColor).multiplyScalar(K),n.hemi[m]=Z,m++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==p||z.pointLength!==_||z.spotLength!==y||z.rectAreaLength!==b||z.hemiLength!==m||z.numDirectionalShadows!==w||z.numPointShadows!==v||z.numSpotShadows!==E||z.numSpotMaps!==O||z.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=b,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=E+O-D,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=L,z.directionalLength=p,z.pointLength=_,z.spotLength=y,z.rectAreaLength=b,z.hemiLength=m,z.numDirectionalShadows=w,z.numPointShadows=v,z.numSpotShadows=E,z.numSpotMaps=O,z.numLightProbes=L,n.version=ky++)}function l(c,u){let d=0,f=0,p=0,_=0,y=0,b=u.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let v=c[m];if(v.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),d++}else if(v.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(b),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),p++}else if(v.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(b),a.identity(),r.copy(v.matrixWorld),r.premultiply(b),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(b),f++}else if(v.isHemisphereLight){let E=n.hemi[y];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(b),y++}}}return{setup:o,setupView:l,state:n}}function ip(s){let e=new Uy(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Oy(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new ip(s),e.set(i,[o])):r>=a.length?(o=new ip(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var su=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ru=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function By(s,e,t){let n=new Ia,i=new ue,r=new ue,a=new Rt,o=new su({depthPacking:Pg}),l=new ru,c={},u=t.maxTextureSize,d={[xi]:Tn,[Tn]:xi,[Qt]:Qt},f=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Fy,fragmentShader:zy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Vt;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new le(_,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dp;let m=this.type;this.render=function(D,L,z){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||D.length===0)return;let ie=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(on),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let K=m!==ci&&this.type===ci,J=m===ci&&this.type!==ci;for(let de=0,Z=D.length;de<Z;de++){let xe=D[de],ae=xe.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",xe,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;i.copy(ae.mapSize);let V=ae.getFrameExtents();if(i.multiply(V),r.copy(ae.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,ae.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,ae.mapSize.y=r.y)),ae.map===null||K===!0||J===!0){let $=this.type!==ci?{minFilter:an,magFilter:an}:{};ae.map!==null&&ae.map.dispose(),ae.map=new bn(i.x,i.y,$),ae.map.texture.name=xe.name+".shadowMap",ae.camera.updateProjectionMatrix()}s.setRenderTarget(ae.map),s.clear();let F=ae.getViewportCount();for(let $=0;$<F;$++){let oe=ae.getViewport($);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),Y.viewport(a),ae.updateMatrices(xe,$),n=ae.getFrustum(),E(L,z,ae.camera,xe,this.type)}ae.isPointLightShadow!==!0&&this.type===ci&&w(ae,z),ae.needsUpdate=!1}m=this.type,b.needsUpdate=!1,s.setRenderTarget(ie,M,A)};function w(D,L){let z=e.update(y);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new bn(i.x,i.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(L,null,z,f,y,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(L,null,z,p,y,null)}function v(D,L,z,ie){let M=null,A=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(A!==void 0)M=A;else if(M=z.isPointLight===!0?l:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let Y=M.uuid,K=L.uuid,J=c[Y];J===void 0&&(J={},c[Y]=J);let de=J[K];de===void 0&&(de=M.clone(),J[K]=de,L.addEventListener("dispose",O)),M=de}if(M.visible=L.visible,M.wireframe=L.wireframe,ie===ci?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let Y=s.properties.get(M);Y.light=z}return M}function E(D,L,z,ie,M){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===ci)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);let K=e.update(D),J=D.material;if(Array.isArray(J)){let de=K.groups;for(let Z=0,xe=de.length;Z<xe;Z++){let ae=de[Z],V=J[ae.materialIndex];if(V&&V.visible){let F=v(D,V,ie,M);D.onBeforeShadow(s,D,L,z,K,F,ae),s.renderBufferDirect(z,null,K,F,D,ae),D.onAfterShadow(s,D,L,z,K,F,ae)}}}else if(J.visible){let de=v(D,J,ie,M);D.onBeforeShadow(s,D,L,z,K,de,null),s.renderBufferDirect(z,null,K,de,D,null),D.onAfterShadow(s,D,L,z,K,de,null)}}let Y=D.children;for(let K=0,J=Y.length;K<J;K++)E(Y[K],L,z,ie,M)}function O(D){D.target.removeEventListener("dispose",O);for(let z in c){let ie=c[z],M=D.target.uuid;M in ie&&(ie[M].dispose(),delete ie[M])}}}var Hy={[uh]:dh,[fh]:gh,[ph]:bh,[Sr]:mh,[dh]:uh,[gh]:fh,[bh]:ph,[mh]:Sr};function Gy(s){function e(){let H=!1,Be=new Rt,he=null,_e=new Rt(0,0,0,0);return{setMask:function(Xe){he!==Xe&&!H&&(s.colorMask(Xe,Xe,Xe,Xe),he=Xe)},setLocked:function(Xe){H=Xe},setClear:function(Xe,Ae,dt,Zt,fn){fn===!0&&(Xe*=Zt,Ae*=Zt,dt*=Zt),Be.set(Xe,Ae,dt,Zt),_e.equals(Be)===!1&&(s.clearColor(Xe,Ae,dt,Zt),_e.copy(Be))},reset:function(){H=!1,he=null,_e.set(-1,0,0,0)}}}function t(){let H=!1,Be=!1,he=null,_e=null,Xe=null;return{setReversed:function(Ae){Be=Ae},setTest:function(Ae){Ae?ee(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(Ae){he!==Ae&&!H&&(s.depthMask(Ae),he=Ae)},setFunc:function(Ae){if(Be&&(Ae=Hy[Ae]),_e!==Ae){switch(Ae){case uh:s.depthFunc(s.NEVER);break;case dh:s.depthFunc(s.ALWAYS);break;case fh:s.depthFunc(s.LESS);break;case Sr:s.depthFunc(s.LEQUAL);break;case ph:s.depthFunc(s.EQUAL);break;case mh:s.depthFunc(s.GEQUAL);break;case gh:s.depthFunc(s.GREATER);break;case bh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Ae}},setLocked:function(Ae){H=Ae},setClear:function(Ae){Xe!==Ae&&(s.clearDepth(Ae),Xe=Ae)},reset:function(){H=!1,he=null,_e=null,Xe=null}}}function n(){let H=!1,Be=null,he=null,_e=null,Xe=null,Ae=null,dt=null,Zt=null,fn=null;return{setTest:function(wt){H||(wt?ee(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(wt){Be!==wt&&!H&&(s.stencilMask(wt),Be=wt)},setFunc:function(wt,yn,It){(he!==wt||_e!==yn||Xe!==It)&&(s.stencilFunc(wt,yn,It),he=wt,_e=yn,Xe=It)},setOp:function(wt,yn,It){(Ae!==wt||dt!==yn||Zt!==It)&&(s.stencilOp(wt,yn,It),Ae=wt,dt=yn,Zt=It)},setLocked:function(wt){H=wt},setClear:function(wt){fn!==wt&&(s.clearStencil(wt),fn=wt)},reset:function(){H=!1,Be=null,he=null,_e=null,Xe=null,Ae=null,dt=null,Zt=null,fn=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},u={},d=new WeakMap,f=[],p=null,_=!1,y=null,b=null,m=null,w=null,v=null,E=null,O=null,D=new $e(0,0,0),L=0,z=!1,ie=null,M=null,A=null,Y=null,K=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),de=!1,Z=0,xe=s.getParameter(s.VERSION);xe.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(xe)[1]),de=Z>=1):xe.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),de=Z>=2);let ae=null,V={},F=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),oe=new Rt().fromArray(F),ge=new Rt().fromArray($);function B(H,Be,he,_e){let Xe=new Uint8Array(4),Ae=s.createTexture();s.bindTexture(H,Ae),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<he;dt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Be,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,Xe):s.texImage2D(Be+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Xe);return Ae}let N={};N[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),N[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),N[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ee(s.DEPTH_TEST),r.setFunc(Sr),Ee(!1),ye(df),ee(s.CULL_FACE),I(on);function ee(H){c[H]!==!0&&(s.enable(H),c[H]=!0)}function Q(H){c[H]!==!1&&(s.disable(H),c[H]=!1)}function fe(H,Be){return u[H]!==Be?(s.bindFramebuffer(H,Be),u[H]=Be,H===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Be),H===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Be),!0):!1}function be(H,Be){let he=f,_e=!1;if(H){he=d.get(Be),he===void 0&&(he=[],d.set(Be,he));let Xe=H.textures;if(he.length!==Xe.length||he[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,dt=Xe.length;Ae<dt;Ae++)he[Ae]=s.COLOR_ATTACHMENT0+Ae;he.length=Xe.length,_e=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,_e=!0);_e&&s.drawBuffers(he)}function we(H){return p!==H?(s.useProgram(H),p=H,!0):!1}let Ie={[Zn]:s.FUNC_ADD,[lg]:s.FUNC_SUBTRACT,[cg]:s.FUNC_REVERSE_SUBTRACT};Ie[hg]=s.MIN,Ie[ug]=s.MAX;let re={[Vr]:s.ZERO,[dg]:s.ONE,[fg]:s.SRC_COLOR,[ch]:s.SRC_ALPHA,[bg]:s.SRC_ALPHA_SATURATE,[Xl]:s.DST_COLOR,[Wl]:s.DST_ALPHA,[pg]:s.ONE_MINUS_SRC_COLOR,[hh]:s.ONE_MINUS_SRC_ALPHA,[gg]:s.ONE_MINUS_DST_COLOR,[mg]:s.ONE_MINUS_DST_ALPHA,[_g]:s.CONSTANT_COLOR,[xg]:s.ONE_MINUS_CONSTANT_COLOR,[yg]:s.CONSTANT_ALPHA,[vg]:s.ONE_MINUS_CONSTANT_ALPHA};function I(H,Be,he,_e,Xe,Ae,dt,Zt,fn,wt){if(H===on){_===!0&&(Q(s.BLEND),_=!1);return}if(_===!1&&(ee(s.BLEND),_=!0),H!==Pu){if(H!==y||wt!==z){if((b!==Zn||v!==Zn)&&(s.blendEquation(s.FUNC_ADD),b=Zn,v=Zn),wt)switch(H){case xr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ps:s.blendFunc(s.ONE,s.ONE);break;case ff:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case xr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ps:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ff:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,w=null,E=null,O=null,D.set(0,0,0),L=0,y=H,z=wt}return}Xe=Xe||Be,Ae=Ae||he,dt=dt||_e,(Be!==b||Xe!==v)&&(s.blendEquationSeparate(Ie[Be],Ie[Xe]),b=Be,v=Xe),(he!==m||_e!==w||Ae!==E||dt!==O)&&(s.blendFuncSeparate(re[he],re[_e],re[Ae],re[dt]),m=he,w=_e,E=Ae,O=dt),(Zt.equals(D)===!1||fn!==L)&&(s.blendColor(Zt.r,Zt.g,Zt.b,fn),D.copy(Zt),L=fn),y=H,z=!1}function Te(H,Be){H.side===Qt?Q(s.CULL_FACE):ee(s.CULL_FACE);let he=H.side===Tn;Be&&(he=!he),Ee(he),H.blending===xr&&H.transparent===!1?I(on):I(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),i.setMask(H.colorWrite);let _e=H.stencilWrite;a.setTest(_e),_e&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),We(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(H){ie!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),ie=H)}function ye(H){H!==rg?(ee(s.CULL_FACE),H!==M&&(H===df?s.cullFace(s.BACK):H===ag?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),M=H}function Re(H){H!==A&&(de&&s.lineWidth(H),A=H)}function We(H,Be,he){H?(ee(s.POLYGON_OFFSET_FILL),(Y!==Be||K!==he)&&(s.polygonOffset(Be,he),Y=Be,K=he)):Q(s.POLYGON_OFFSET_FILL)}function Me(H){H?ee(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function P(H){H===void 0&&(H=s.TEXTURE0+J-1),ae!==H&&(s.activeTexture(H),ae=H)}function T(H,Be,he){he===void 0&&(ae===null?he=s.TEXTURE0+J-1:he=ae);let _e=V[he];_e===void 0&&(_e={type:void 0,texture:void 0},V[he]=_e),(_e.type!==H||_e.texture!==Be)&&(ae!==he&&(s.activeTexture(he),ae=he),s.bindTexture(H,Be||N[H]),_e.type=H,_e.texture=Be)}function j(){let H=V[ae];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ne(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(H){oe.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),oe.copy(H))}function je(H){ge.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),ge.copy(H))}function mt(H,Be){let he=l.get(Be);he===void 0&&(he=new WeakMap,l.set(Be,he));let _e=he.get(H);_e===void 0&&(_e=s.getUniformBlockIndex(Be,H.name),he.set(H,_e))}function nt(H,Be){let _e=l.get(Be).get(H);o.get(Be)!==_e&&(s.uniformBlockBinding(Be,_e,H.__bindingPointIndex),o.set(Be,_e))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},ae=null,V={},u={},d=new WeakMap,f=[],p=null,_=!1,y=null,b=null,m=null,w=null,v=null,E=null,O=null,D=new $e(0,0,0),L=0,z=!1,ie=null,M=null,A=null,Y=null,K=null,oe.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ee,disable:Q,bindFramebuffer:fe,drawBuffers:be,useProgram:we,setBlending:I,setMaterial:Te,setFlipSided:Ee,setCullFace:ye,setLineWidth:Re,setPolygonOffset:We,setScissorTest:Me,activeTexture:P,bindTexture:T,unbindTexture:j,compressedTexImage2D:ne,compressedTexImage3D:me,texImage2D:Ve,texImage3D:ct,updateUBOMapping:mt,uniformBlockBinding:nt,texStorage2D:ft,texStorage3D:Se,texSubImage2D:pe,texSubImage3D:ze,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ge,scissor:st,viewport:je,reset:ut}}function sp(s,e,t,n){let i=Vy(n);switch(t){case Fp:return s*e;case Bp:return s*e;case Hp:return s*e*2;case Bu:return s*e/i.components*i.byteLength;case Hu:return s*e/i.components*i.byteLength;case Gp:return s*e*2/i.components*i.byteLength;case Gu:return s*e*2/i.components*i.byteLength;case zp:return s*e*3/i.components*i.byteLength;case Nn:return s*e*4/i.components*i.byteLength;case Vu:return s*e*4/i.components*i.byteLength;case il:case sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rl:case al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:case Sh:return Math.max(s,16)*Math.max(e,8)/4;case yh:case Mh:return Math.max(s,8)*Math.max(e,8)/2;case Eh:case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ol:case Hh:case Gh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vp:case Vh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wh:case Xh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vy(s){switch(s){case fi:case Np:return{byteLength:1,components:1};case Ra:case Up:case On:return{byteLength:2,components:1};case Fu:case zu:return{byteLength:2,components:4};case Is:case Ou:case di:return{byteLength:4,components:1};case Op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Wy(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return p?new OffscreenCanvas(P,T):Ca("canvas")}function y(P,T,j){let ne=1,me=Me(P);if((me.width>j||me.height>j)&&(ne=j/Math.max(me.width,me.height)),ne<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let pe=Math.floor(ne*me.width),ze=Math.floor(ne*me.height);d===void 0&&(d=_(pe,ze));let Ce=T?_(pe,ze):d;return Ce.width=pe,Ce.height=ze,Ce.getContext("2d").drawImage(P,0,0,pe,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+pe+"x"+ze+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function b(P){return P.generateMipmaps&&P.minFilter!==an&&P.minFilter!==kn}function m(P){s.generateMipmap(P)}function w(P,T,j,ne,me=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=T;if(T===s.RED&&(j===s.FLOAT&&(pe=s.R32F),j===s.HALF_FLOAT&&(pe=s.R16F),j===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.R8UI),j===s.UNSIGNED_SHORT&&(pe=s.R16UI),j===s.UNSIGNED_INT&&(pe=s.R32UI),j===s.BYTE&&(pe=s.R8I),j===s.SHORT&&(pe=s.R16I),j===s.INT&&(pe=s.R32I)),T===s.RG&&(j===s.FLOAT&&(pe=s.RG32F),j===s.HALF_FLOAT&&(pe=s.RG16F),j===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RG8UI),j===s.UNSIGNED_SHORT&&(pe=s.RG16UI),j===s.UNSIGNED_INT&&(pe=s.RG32UI),j===s.BYTE&&(pe=s.RG8I),j===s.SHORT&&(pe=s.RG16I),j===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),j===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),j===s.UNSIGNED_INT&&(pe=s.RGB32UI),j===s.BYTE&&(pe=s.RGB8I),j===s.SHORT&&(pe=s.RGB16I),j===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),j===s.UNSIGNED_INT&&(pe=s.RGBA32UI),j===s.BYTE&&(pe=s.RGBA8I),j===s.SHORT&&(pe=s.RGBA16I),j===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){let ze=me?hl:St.getTransfer(ne);j===s.FLOAT&&(pe=s.RGBA32F),j===s.HALF_FLOAT&&(pe=s.RGBA16F),j===s.UNSIGNED_BYTE&&(pe=ze===Ut?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function v(P,T){let j;return P?T===null||T===Is||T===as?j=s.DEPTH24_STENCIL8:T===di?j=s.DEPTH32F_STENCIL8:T===Ra&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Is||T===as?j=s.DEPTH_COMPONENT24:T===di?j=s.DEPTH_COMPONENT32F:T===Ra&&(j=s.DEPTH_COMPONENT16),j}function E(P,T){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==an&&P.minFilter!==kn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function O(P){let T=P.target;T.removeEventListener("dispose",O),L(T),T.isVideoTexture&&u.delete(T)}function D(P){let T=P.target;T.removeEventListener("dispose",D),ie(T)}function L(P){let T=n.get(P);if(T.__webglInit===void 0)return;let j=P.source,ne=f.get(j);if(ne){let me=ne[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&z(P),Object.keys(ne).length===0&&f.delete(j)}n.remove(P)}function z(P){let T=n.get(P);s.deleteTexture(T.__webglTexture);let j=P.source,ne=f.get(j);delete ne[T.__cacheKey],a.memory.textures--}function ie(P){let T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let me=0;me<T.__webglFramebuffer[ne].length;me++)s.deleteFramebuffer(T.__webglFramebuffer[ne][me]);else s.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)s.deleteFramebuffer(T.__webglFramebuffer[ne]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=P.textures;for(let ne=0,me=j.length;ne<me;ne++){let pe=n.get(j[ne]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(j[ne])}n.remove(P)}let M=0;function A(){M=0}function Y(){let P=M;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),M+=1,P}function K(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function J(P,T){let j=n.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){let ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(j,P,T);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function de(P,T){let j=n.get(P);if(P.version>0&&j.__version!==P.version){ge(j,P,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function Z(P,T){let j=n.get(P);if(P.version>0&&j.__version!==P.version){ge(j,P,T);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function xe(P,T){let j=n.get(P);if(P.version>0&&j.__version!==P.version){B(j,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}let ae={[en]:s.REPEAT,[ki]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},V={[an]:s.NEAREST,[Uu]:s.NEAREST_MIPMAP_NEAREST,[pr]:s.NEAREST_MIPMAP_LINEAR,[kn]:s.LINEAR,[va]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},F={[Dg]:s.NEVER,[Fg]:s.ALWAYS,[Lg]:s.LESS,[Xp]:s.LEQUAL,[kg]:s.EQUAL,[Og]:s.GEQUAL,[Ng]:s.GREATER,[Ug]:s.NOTEQUAL};function $(P,T){if(T.type===di&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kn||T.magFilter===va||T.magFilter===pr||T.magFilter===_i||T.minFilter===kn||T.minFilter===va||T.minFilter===pr||T.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ae[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ae[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ae[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,V[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,V[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===an||T.minFilter!==pr&&T.minFilter!==_i||T.type===di&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function oe(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",O));let ne=T.source,me=f.get(ne);me===void 0&&(me={},f.set(ne,me));let pe=K(T);if(pe!==P.__cacheKey){me[pe]===void 0&&(me[pe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),me[pe].usedTimes++;let ze=me[P.__cacheKey];ze!==void 0&&(me[P.__cacheKey].usedTimes--,ze.usedTimes===0&&z(T)),P.__cacheKey=pe,P.__webglTexture=me[pe].texture}return j}function ge(P,T,j){let ne=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=s.TEXTURE_3D);let me=oe(P,T),pe=T.source;t.bindTexture(ne,P.__webglTexture,s.TEXTURE0+j);let ze=n.get(pe);if(pe.version!==ze.__version||me===!0){t.activeTexture(s.TEXTURE0+j);let Ce=St.getPrimaries(St.workingColorSpace),Ge=T.colorSpace===ts?null:St.getPrimaries(T.colorSpace),ft=T.colorSpace===ts||Ce===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Se=y(T.image,!1,i.maxTextureSize);Se=We(T,Se);let Ve=r.convert(T.format,T.colorSpace),ct=r.convert(T.type),st=w(T.internalFormat,Ve,ct,T.colorSpace,T.isVideoTexture);$(ne,T);let je,mt=T.mipmaps,nt=T.isVideoTexture!==!0,ut=ze.__version===void 0||me===!0,H=pe.dataReady,Be=E(T,Se);if(T.isDepthTexture)st=v(T.format===os,T.type),ut&&(nt?t.texStorage2D(s.TEXTURE_2D,1,st,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,st,Se.width,Se.height,0,Ve,ct,null));else if(T.isDataTexture)if(mt.length>0){nt&&ut&&t.texStorage2D(s.TEXTURE_2D,Be,st,mt[0].width,mt[0].height);for(let he=0,_e=mt.length;he<_e;he++)je=mt[he],nt?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,je.width,je.height,Ve,ct,je.data):t.texImage2D(s.TEXTURE_2D,he,st,je.width,je.height,0,Ve,ct,je.data);T.generateMipmaps=!1}else nt?(ut&&t.texStorage2D(s.TEXTURE_2D,Be,st,Se.width,Se.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Ve,ct,Se.data)):t.texImage2D(s.TEXTURE_2D,0,st,Se.width,Se.height,0,Ve,ct,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,st,mt[0].width,mt[0].height,Se.depth);for(let he=0,_e=mt.length;he<_e;he++)if(je=mt[he],T.format!==Nn)if(Ve!==null)if(nt){if(H)if(T.layerUpdates.size>0){let Xe=sp(je.width,je.height,T.format,T.type);for(let Ae of T.layerUpdates){let dt=je.data.subarray(Ae*Xe/je.data.BYTES_PER_ELEMENT,(Ae+1)*Xe/je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,Ae,je.width,je.height,1,Ve,dt,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,je.width,je.height,Se.depth,Ve,je.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,st,je.width,je.height,Se.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,je.width,je.height,Se.depth,Ve,ct,je.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,st,je.width,je.height,Se.depth,0,Ve,ct,je.data)}else{nt&&ut&&t.texStorage2D(s.TEXTURE_2D,Be,st,mt[0].width,mt[0].height);for(let he=0,_e=mt.length;he<_e;he++)je=mt[he],T.format!==Nn?Ve!==null?nt?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,je.width,je.height,Ve,je.data):t.compressedTexImage2D(s.TEXTURE_2D,he,st,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,je.width,je.height,Ve,ct,je.data):t.texImage2D(s.TEXTURE_2D,he,st,je.width,je.height,0,Ve,ct,je.data)}else if(T.isDataArrayTexture)if(nt){if(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,st,Se.width,Se.height,Se.depth),H)if(T.layerUpdates.size>0){let he=sp(Se.width,Se.height,T.format,T.type);for(let _e of T.layerUpdates){let Xe=Se.data.subarray(_e*he/Se.data.BYTES_PER_ELEMENT,(_e+1)*he/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,Se.width,Se.height,1,Ve,ct,Xe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ve,ct,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,st,Se.width,Se.height,Se.depth,0,Ve,ct,Se.data);else if(T.isData3DTexture)nt?(ut&&t.texStorage3D(s.TEXTURE_3D,Be,st,Se.width,Se.height,Se.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ve,ct,Se.data)):t.texImage3D(s.TEXTURE_3D,0,st,Se.width,Se.height,Se.depth,0,Ve,ct,Se.data);else if(T.isFramebufferTexture){if(ut)if(nt)t.texStorage2D(s.TEXTURE_2D,Be,st,Se.width,Se.height);else{let he=Se.width,_e=Se.height;for(let Xe=0;Xe<Be;Xe++)t.texImage2D(s.TEXTURE_2D,Xe,st,he,_e,0,Ve,ct,null),he>>=1,_e>>=1}}else if(mt.length>0){if(nt&&ut){let he=Me(mt[0]);t.texStorage2D(s.TEXTURE_2D,Be,st,he.width,he.height)}for(let he=0,_e=mt.length;he<_e;he++)je=mt[he],nt?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ve,ct,je):t.texImage2D(s.TEXTURE_2D,he,st,Ve,ct,je);T.generateMipmaps=!1}else if(nt){if(ut){let he=Me(Se);t.texStorage2D(s.TEXTURE_2D,Be,st,he.width,he.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,ct,Se)}else t.texImage2D(s.TEXTURE_2D,0,st,Ve,ct,Se);b(T)&&m(ne),ze.__version=pe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function B(P,T,j){if(T.image.length!==6)return;let ne=oe(P,T),me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);let pe=n.get(me);if(me.version!==pe.__version||ne===!0){t.activeTexture(s.TEXTURE0+j);let ze=St.getPrimaries(St.workingColorSpace),Ce=T.colorSpace===ts?null:St.getPrimaries(T.colorSpace),Ge=T.colorSpace===ts||ze===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ft=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Ve=[];for(let _e=0;_e<6;_e++)!ft&&!Se?Ve[_e]=y(T.image[_e],!0,i.maxCubemapSize):Ve[_e]=Se?T.image[_e].image:T.image[_e],Ve[_e]=We(T,Ve[_e]);let ct=Ve[0],st=r.convert(T.format,T.colorSpace),je=r.convert(T.type),mt=w(T.internalFormat,st,je,T.colorSpace),nt=T.isVideoTexture!==!0,ut=pe.__version===void 0||ne===!0,H=me.dataReady,Be=E(T,ct);$(s.TEXTURE_CUBE_MAP,T);let he;if(ft){nt&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,mt,ct.width,ct.height);for(let _e=0;_e<6;_e++){he=Ve[_e].mipmaps;for(let Xe=0;Xe<he.length;Xe++){let Ae=he[Xe];T.format!==Nn?st!==null?nt?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,Ae.width,Ae.height,st,Ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,mt,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,Ae.width,Ae.height,st,je,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,mt,Ae.width,Ae.height,0,st,je,Ae.data)}}}else{if(he=T.mipmaps,nt&&ut){he.length>0&&Be++;let _e=Me(Ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,mt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Se){nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ve[_e].width,Ve[_e].height,st,je,Ve[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,mt,Ve[_e].width,Ve[_e].height,0,st,je,Ve[_e].data);for(let Xe=0;Xe<he.length;Xe++){let dt=he[Xe].image[_e].image;nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,dt.width,dt.height,st,je,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,mt,dt.width,dt.height,0,st,je,dt.data)}}else{nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,st,je,Ve[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,mt,st,je,Ve[_e]);for(let Xe=0;Xe<he.length;Xe++){let Ae=he[Xe];nt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,st,je,Ae.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,mt,st,je,Ae.image[_e])}}}b(T)&&m(s.TEXTURE_CUBE_MAP),pe.__version=me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function N(P,T,j,ne,me,pe){let ze=r.convert(j.format,j.colorSpace),Ce=r.convert(j.type),Ge=w(j.internalFormat,ze,Ce,j.colorSpace);if(!n.get(T).__hasExternalTextures){let Se=Math.max(1,T.width>>pe),Ve=Math.max(1,T.height>>pe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,pe,Ge,Se,Ve,T.depth,0,ze,Ce,null):t.texImage2D(me,pe,Ge,Se,Ve,0,ze,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ye(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,me,n.get(j).__webglTexture,0,Ee(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,me,n.get(j).__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(P,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){let ne=T.depthTexture,me=ne&&ne.isDepthTexture?ne.type:null,pe=v(T.stencilBuffer,me),ze=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=Ee(T);ye(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,pe,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,P)}else{let ne=T.textures;for(let me=0;me<ne.length;me++){let pe=ne[me],ze=r.convert(pe.format,pe.colorSpace),Ce=r.convert(pe.type),Ge=w(pe.internalFormat,ze,Ce,pe.colorSpace),ft=Ee(T);j&&ye(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ge,T.width,T.height):ye(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ge,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Q(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);let ne=n.get(T.depthTexture).__webglTexture,me=Ee(T);if(T.depthTexture.format===yr)ye(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(T.depthTexture.format===os)ye(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function fe(P){let T=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let ne=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ne){let me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ne.removeEventListener("dispose",me)};ne.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=ne}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Q(T.__webglFramebuffer,P)}else if(j){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]===void 0)T.__webglDepthbuffer[ne]=s.createRenderbuffer(),ee(T.__webglDepthbuffer[ne],P,!1);else{let me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ee(T.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(P,T,j){let ne=n.get(P);T!==void 0&&N(ne.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&fe(P)}function we(P){let T=P.texture,j=n.get(P),ne=n.get(T);P.addEventListener("dispose",D);let me=P.textures,pe=P.isWebGLCubeRenderTarget===!0,ze=me.length>1;if(ze||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=T.version,a.memory.textures++),pe){j.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ce]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)j.__webglFramebuffer[Ce][Ge]=s.createFramebuffer()}else j.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)j.__webglFramebuffer[Ce]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Ce=0,Ge=me.length;Ce<Ge;Ce++){let ft=n.get(me[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&ye(P)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ce=0;Ce<me.length;Ce++){let Ge=me[Ce];j.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Ce]);let ft=r.convert(Ge.format,Ge.colorSpace),Se=r.convert(Ge.type),Ve=w(Ge.internalFormat,ft,Se,Ge.colorSpace,P.isXRRenderTarget===!0),ct=Ee(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ve,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,j.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),$(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)N(j.__webglFramebuffer[Ce][Ge],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ge);else N(j.__webglFramebuffer[Ce],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);b(T)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ce=0,Ge=me.length;Ce<Ge;Ce++){let ft=me[Ce],Se=n.get(ft);t.bindTexture(s.TEXTURE_2D,Se.__webglTexture),$(s.TEXTURE_2D,ft),N(j.__webglFramebuffer,P,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),b(ft)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ne.__webglTexture),$(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)N(j.__webglFramebuffer[Ge],P,T,s.COLOR_ATTACHMENT0,Ce,Ge);else N(j.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,Ce,0);b(T)&&m(Ce),t.unbindTexture()}P.depthBuffer&&fe(P)}function Ie(P){let T=P.textures;for(let j=0,ne=T.length;j<ne;j++){let me=T[j];if(b(me)){let pe=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ze=n.get(me).__webglTexture;t.bindTexture(pe,ze),m(pe),t.unbindTexture()}}}let re=[],I=[];function Te(P){if(P.samples>0){if(ye(P)===!1){let T=P.textures,j=P.width,ne=P.height,me=s.COLOR_BUFFER_BIT,pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=n.get(P),Ce=T.length>1;if(Ce)for(let Ge=0;Ge<T.length;Ge++)t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ge=0;Ge<T.length;Ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ge]);let ft=n.get(T[Ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,j,ne,0,0,j,ne,me,s.NEAREST),l===!0&&(re.length=0,I.length=0,re.push(s.COLOR_ATTACHMENT0+Ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(pe),I.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ge=0;Ge<T.length;Ge++){t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ge]);let ft=n.get(T[Ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ee(P){return Math.min(i.maxSamples,P.samples)}function ye(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Re(P){let T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function We(P,T){let j=P.colorSpace,ne=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==xn&&j!==ts&&(St.getTransfer(j)===Ut?(ne!==Nn||me!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Me(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=A,this.setTexture2D=J,this.setTexture2DArray=de,this.setTexture3D=Z,this.setTextureCube=xe,this.rebindTextures=be,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=N,this.useMultisampledRTT=ye}function Xy(s,e){function t(n,i=ts){let r,a=St.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===Fu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Op)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Np)return s.BYTE;if(n===Up)return s.SHORT;if(n===Ra)return s.UNSIGNED_SHORT;if(n===Ou)return s.INT;if(n===Is)return s.UNSIGNED_INT;if(n===di)return s.FLOAT;if(n===On)return s.HALF_FLOAT;if(n===Fp)return s.ALPHA;if(n===zp)return s.RGB;if(n===Nn)return s.RGBA;if(n===Bp)return s.LUMINANCE;if(n===Hp)return s.LUMINANCE_ALPHA;if(n===yr)return s.DEPTH_COMPONENT;if(n===os)return s.DEPTH_STENCIL;if(n===Bu)return s.RED;if(n===Hu)return s.RED_INTEGER;if(n===Gp)return s.RG;if(n===Gu)return s.RG_INTEGER;if(n===Vu)return s.RGBA_INTEGER;if(n===il||n===sl||n===rl||n===al)if(a===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===il)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===il)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yh||n===vh||n===Mh||n===Sh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eh||n===wh||n===Th)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eh||n===wh)return a===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Th)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ah||n===Rh||n===Ch||n===Ph||n===Ih||n===Dh||n===Lh||n===kh||n===Nh||n===Uh||n===Oh||n===Fh||n===zh||n===Bh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ah)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ch)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ph)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ih)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===Hh||n===Gh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ol)return a===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vp||n===Vh||n===Wh||n===Xh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var au=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},tt=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qy={type:"move"},Ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let b=t.getJointPose(y,n),m=this._getHandJoint(c,y);b!==null&&(m.matrix.fromArray(b.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=b.radius),m.visible=b!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new gn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wt({vertexShader:jy,fragmentShader:Yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lu=class extends yi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null,y=new ou,b=t.getContextAttributes(),m=null,w=null,v=[],E=[],O=new ue,D=null,L=new rn;L.layers.enable(1),L.viewport=new Rt;let z=new rn;z.layers.enable(2),z.viewport=new Rt;let ie=[L,z],M=new au;M.layers.enable(1),M.layers.enable(2);let A=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let N=v[B];return N===void 0&&(N=new Ea,v[B]=N),N.getTargetRaySpace()},this.getControllerGrip=function(B){let N=v[B];return N===void 0&&(N=new Ea,v[B]=N),N.getGripSpace()},this.getHand=function(B){let N=v[B];return N===void 0&&(N=new Ea,v[B]=N),N.getHandSpace()};function K(B){let N=E.indexOf(B.inputSource);if(N===-1)return;let ee=v[N];ee!==void 0&&(ee.update(B.inputSource,B.frame,c||a),ee.dispatchEvent({type:B.type,data:B.inputSource}))}function J(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",de);for(let B=0;B<v.length;B++){let N=E[B];N!==null&&(E[B]=null,v[B].disconnect(N))}A=null,Y=null,y.reset(),e.setRenderTarget(m),p=null,f=null,d=null,i=null,w=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",J),i.addEventListener("inputsourceschange",de),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){let N={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new bn(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let N=null,ee=null,Q=null;b.depth&&(Q=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=b.stencil?os:yr,ee=b.stencil?as:Is);let fe={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new bn(f.textureWidth,f.textureHeight,{format:Nn,type:fi,depthTexture:new Ir(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ge.setContext(i),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function de(B){for(let N=0;N<B.removed.length;N++){let ee=B.removed[N],Q=E.indexOf(ee);Q>=0&&(E[Q]=null,v[Q].disconnect(ee))}for(let N=0;N<B.added.length;N++){let ee=B.added[N],Q=E.indexOf(ee);if(Q===-1){for(let be=0;be<v.length;be++)if(be>=E.length){E.push(ee),Q=be;break}else if(E[be]===null){E[be]=ee,Q=be;break}if(Q===-1)break}let fe=v[Q];fe&&fe.connect(ee)}}let Z=new k,xe=new k;function ae(B,N,ee){Z.setFromMatrixPosition(N.matrixWorld),xe.setFromMatrixPosition(ee.matrixWorld);let Q=Z.distanceTo(xe),fe=N.projectionMatrix.elements,be=ee.projectionMatrix.elements,we=fe[14]/(fe[10]-1),Ie=fe[14]/(fe[10]+1),re=(fe[9]+1)/fe[5],I=(fe[9]-1)/fe[5],Te=(fe[8]-1)/fe[0],Ee=(be[8]+1)/be[0],ye=we*Te,Re=we*Ee,We=Q/(-Te+Ee),Me=We*-Te;if(N.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Me),B.translateZ(We),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),fe[10]===-1)B.projectionMatrix.copy(N.projectionMatrix),B.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let P=we+We,T=Ie+We,j=ye-Me,ne=Re+(Q-Me),me=re*Ie/T*P,pe=I*Ie/T*P;B.projectionMatrix.makePerspective(j,ne,me,pe,P,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function V(B,N){N===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(N.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let N=B.near,ee=B.far;y.texture!==null&&(y.depthNear>0&&(N=y.depthNear),y.depthFar>0&&(ee=y.depthFar)),M.near=z.near=L.near=N,M.far=z.far=L.far=ee,(A!==M.near||Y!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,Y=M.far);let Q=B.parent,fe=M.cameras;V(M,Q);for(let be=0;be<fe.length;be++)V(fe[be],Q);fe.length===2?ae(M,L,z):M.projectionMatrix.copy(L.projectionMatrix),F(B,M,Q)};function F(B,N,ee){ee===null?B.matrix.copy(N.matrixWorld):(B.matrix.copy(ee.matrixWorld),B.matrix.invert(),B.matrix.multiply(N.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(N.projectionMatrix),B.projectionMatrixInverse.copy(N.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Rr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let $=null;function oe(B,N){if(u=N.getViewerPose(c||a),_=N,u!==null){let ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Q=!1;ee.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let be=0;be<ee.length;be++){let we=ee[be],Ie=null;if(p!==null)Ie=p.getViewport(we);else{let I=d.getViewSubImage(f,we);Ie=I.viewport,be===0&&(e.setRenderTargetTextures(w,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(w))}let re=ie[be];re===void 0&&(re=new rn,re.layers.enable(be),re.viewport=new Rt,ie[be]=re),re.matrix.fromArray(we.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(we.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),be===0&&(M.matrix.copy(re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push(re)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")){let be=d.getDepthInformation(ee[0]);be&&be.isValid&&be.texture&&y.init(e,be,i.renderState)}}for(let ee=0;ee<v.length;ee++){let Q=E[ee],fe=v[ee];Q!==null&&fe!==void 0&&fe.update(Q,N,c||a)}$&&$(B,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),_=null}let ge=new Kp;ge.setAnimationLoop(oe),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}},As=new vi,Ky=new it;function Zy(s,e){function t(b,m){b.matrixAutoUpdate===!0&&b.updateMatrix(),m.value.copy(b.matrix)}function n(b,m){m.color.getRGB(b.fogColor.value,Yp(s)),m.isFog?(b.fogNear.value=m.near,b.fogFar.value=m.far):m.isFogExp2&&(b.fogDensity.value=m.density)}function i(b,m,w,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(b,m):m.isMeshToonMaterial?(r(b,m),d(b,m)):m.isMeshPhongMaterial?(r(b,m),u(b,m)):m.isMeshStandardMaterial?(r(b,m),f(b,m),m.isMeshPhysicalMaterial&&p(b,m,E)):m.isMeshMatcapMaterial?(r(b,m),_(b,m)):m.isMeshDepthMaterial?r(b,m):m.isMeshDistanceMaterial?(r(b,m),y(b,m)):m.isMeshNormalMaterial?r(b,m):m.isLineBasicMaterial?(a(b,m),m.isLineDashedMaterial&&o(b,m)):m.isPointsMaterial?l(b,m,w,v):m.isSpriteMaterial?c(b,m):m.isShadowMaterial?(b.color.value.copy(m.color),b.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(b,m){b.opacity.value=m.opacity,m.color&&b.diffuse.value.copy(m.color),m.emissive&&b.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.bumpMap&&(b.bumpMap.value=m.bumpMap,t(m.bumpMap,b.bumpMapTransform),b.bumpScale.value=m.bumpScale,m.side===Tn&&(b.bumpScale.value*=-1)),m.normalMap&&(b.normalMap.value=m.normalMap,t(m.normalMap,b.normalMapTransform),b.normalScale.value.copy(m.normalScale),m.side===Tn&&b.normalScale.value.negate()),m.displacementMap&&(b.displacementMap.value=m.displacementMap,t(m.displacementMap,b.displacementMapTransform),b.displacementScale.value=m.displacementScale,b.displacementBias.value=m.displacementBias),m.emissiveMap&&(b.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,b.emissiveMapTransform)),m.specularMap&&(b.specularMap.value=m.specularMap,t(m.specularMap,b.specularMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest);let w=e.get(m),v=w.envMap,E=w.envMapRotation;v&&(b.envMap.value=v,As.copy(E),As.x*=-1,As.y*=-1,As.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),b.envMapRotation.value.setFromMatrix4(Ky.makeRotationFromEuler(As)),b.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=m.reflectivity,b.ior.value=m.ior,b.refractionRatio.value=m.refractionRatio),m.lightMap&&(b.lightMap.value=m.lightMap,b.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,b.lightMapTransform)),m.aoMap&&(b.aoMap.value=m.aoMap,b.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,b.aoMapTransform))}function a(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform))}function o(b,m){b.dashSize.value=m.dashSize,b.totalSize.value=m.dashSize+m.gapSize,b.scale.value=m.scale}function l(b,m,w,v){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.size.value=m.size*w,b.scale.value=v*.5,m.map&&(b.map.value=m.map,t(m.map,b.uvTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function c(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.rotation.value=m.rotation,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function u(b,m){b.specular.value.copy(m.specular),b.shininess.value=Math.max(m.shininess,1e-4)}function d(b,m){m.gradientMap&&(b.gradientMap.value=m.gradientMap)}function f(b,m){b.metalness.value=m.metalness,m.metalnessMap&&(b.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,b.metalnessMapTransform)),b.roughness.value=m.roughness,m.roughnessMap&&(b.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,b.roughnessMapTransform)),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)}function p(b,m,w){b.ior.value=m.ior,m.sheen>0&&(b.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),b.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(b.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,b.sheenColorMapTransform)),m.sheenRoughnessMap&&(b.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,b.sheenRoughnessMapTransform))),m.clearcoat>0&&(b.clearcoat.value=m.clearcoat,b.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(b.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,b.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(b.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&b.clearcoatNormalScale.value.negate())),m.dispersion>0&&(b.dispersion.value=m.dispersion),m.iridescence>0&&(b.iridescence.value=m.iridescence,b.iridescenceIOR.value=m.iridescenceIOR,b.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(b.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,b.iridescenceMapTransform)),m.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),m.transmission>0&&(b.transmission.value=m.transmission,b.transmissionSamplerMap.value=w.texture,b.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(b.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,b.transmissionMapTransform)),b.thickness.value=m.thickness,m.thicknessMap&&(b.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=m.attenuationDistance,b.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(b.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(b.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=m.specularIntensity,b.specularColor.value.copy(m.specularColor),m.specularColorMap&&(b.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,b.specularColorMapTransform)),m.specularIntensityMap&&(b.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,b.specularIntensityMapTransform))}function _(b,m){m.matcap&&(b.matcap.value=m.matcap)}function y(b,m){let w=e.get(m).light;b.referencePosition.value.setFromMatrixPosition(w.matrixWorld),b.nearDistance.value=w.shadow.camera.near,b.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jy(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,v){let E=v.program;n.uniformBlockBinding(w,E)}function c(w,v){let E=i[w.id];E===void 0&&(_(w),E=u(w),i[w.id]=E,w.addEventListener("dispose",b));let O=v.program;n.updateUBOMapping(w,O);let D=e.render.frame;r[w.id]!==D&&(f(w),r[w.id]=D)}function u(w){let v=d();w.__bindingPointIndex=v;let E=s.createBuffer(),O=w.__size,D=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,O,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,E),E}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let v=i[w.id],E=w.uniforms,O=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let D=0,L=E.length;D<L;D++){let z=Array.isArray(E[D])?E[D]:[E[D]];for(let ie=0,M=z.length;ie<M;ie++){let A=z[ie];if(p(A,D,ie,O)===!0){let Y=A.__offset,K=Array.isArray(A.value)?A.value:[A.value],J=0;for(let de=0;de<K.length;de++){let Z=K[de],xe=y(Z);typeof Z=="number"||typeof Z=="boolean"?(A.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,Y+J,A.__data)):Z.isMatrix3?(A.__data[0]=Z.elements[0],A.__data[1]=Z.elements[1],A.__data[2]=Z.elements[2],A.__data[3]=0,A.__data[4]=Z.elements[3],A.__data[5]=Z.elements[4],A.__data[6]=Z.elements[5],A.__data[7]=0,A.__data[8]=Z.elements[6],A.__data[9]=Z.elements[7],A.__data[10]=Z.elements[8],A.__data[11]=0):(Z.toArray(A.__data,J),J+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,v,E,O){let D=w.value,L=v+"_"+E;if(O[L]===void 0)return typeof D=="number"||typeof D=="boolean"?O[L]=D:O[L]=D.clone(),!0;{let z=O[L];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return O[L]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function _(w){let v=w.uniforms,E=0,O=16;for(let L=0,z=v.length;L<z;L++){let ie=Array.isArray(v[L])?v[L]:[v[L]];for(let M=0,A=ie.length;M<A;M++){let Y=ie[M],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let J=0,de=K.length;J<de;J++){let Z=K[J],xe=y(Z),ae=E%O,V=ae%xe.boundary,F=ae+V;E+=V,F!==0&&O-F<xe.storage&&(E+=O-F),Y.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=xe.storage}}}let D=E%O;return D>0&&(E+=O-D),w.__size=E,w.__cache={},this}function y(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function b(w){let v=w.target;v.removeEventListener("dispose",b);let E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var yl=class{constructor(e={}){let{canvas:t=t0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),_=new Int32Array(4),y=null,b=null,m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=ss,this.toneMappingExposure=1;let v=this,E=!1,O=0,D=0,L=null,z=-1,ie=null,M=new Rt,A=new Rt,Y=null,K=new $e(0),J=0,de=t.width,Z=t.height,xe=1,ae=null,V=null,F=new Rt(0,0,de,Z),$=new Rt(0,0,de,Z),oe=!1,ge=new Ia,B=!1,N=!1,ee=new it,Q=new it,fe=new k,be=new Rt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function re(){return L===null?xe:1}let I=n;function Te(C,X){return t.getContext(C,X)}try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cu}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),I===null){let X="webgl2";if(I=Te(X,C),I===null)throw Te(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ee,ye,Re,We,Me,P,T,j,ne,me,pe,ze,Ce,Ge,ft,Se,Ve,ct,st,je,mt,nt,ut,H;function Be(){Ee=new fx(I),Ee.init(),nt=new Xy(I,Ee),ye=new ox(I,Ee,e,nt),Re=new Gy(I),ye.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),We=new gx(I),Me=new Cy,P=new Wy(I,Ee,Re,Me,ye,nt,We),T=new cx(v),j=new dx(v),ne=new S0(I),ut=new rx(I,ne),me=new px(I,ne,We,ut),pe=new _x(I,me,ne,We),st=new bx(I,ye,P),Se=new lx(Me),ze=new Ry(v,T,j,Ee,ye,ut,Se),Ce=new Zy(v,Me),Ge=new Iy,ft=new Oy(Ee),ct=new sx(v,T,j,Re,pe,f,l),Ve=new By(v,pe,ye),H=new Jy(I,We,ye,Re),je=new ax(I,Ee,We),mt=new mx(I,Ee,We),We.programs=ze.programs,v.capabilities=ye,v.extensions=Ee,v.properties=Me,v.renderLists=Ge,v.shadowMap=Ve,v.state=Re,v.info=We}Be();let he=new lu(v,I);this.xr=he,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(C){C!==void 0&&(xe=C,this.setSize(de,Z,!1))},this.getSize=function(C){return C.set(de,Z)},this.setSize=function(C,X,te=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,Z=X,t.width=Math.floor(C*xe),t.height=Math.floor(X*xe),te===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(de*xe,Z*xe).floor()},this.setDrawingBufferSize=function(C,X,te){de=C,Z=X,xe=te,t.width=Math.floor(C*te),t.height=Math.floor(X*te),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,X,te,se){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,X,te,se),Re.viewport(M.copy(F).multiplyScalar(xe).round())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,X,te,se){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,X,te,se),Re.scissor(A.copy($).multiplyScalar(xe).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){Re.setScissorTest(oe=C)},this.setOpaqueSort=function(C){ae=C},this.setTransparentSort=function(C){V=C},this.getClearColor=function(C){return C.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(C=!0,X=!0,te=!0){let se=0;if(C){let q=!1;if(L!==null){let De=L.texture.format;q=De===Vu||De===Gu||De===Hu}if(q){let De=L.texture.type,qe=De===fi||De===Is||De===Ra||De===as||De===Fu||De===zu,Ke=ct.getClearColor(),Ze=ct.getClearAlpha(),ce=Ke.r,Qe=Ke.g,et=Ke.b;qe?(p[0]=ce,p[1]=Qe,p[2]=et,p[3]=Ze,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=ce,_[1]=Qe,_[2]=et,_[3]=Ze,I.clearBufferiv(I.COLOR,0,_))}else se|=I.COLOR_BUFFER_BIT}X&&(se|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),te&&(se|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ge.dispose(),ft.dispose(),Me.dispose(),T.dispose(),j.dispose(),pe.dispose(),ut.dispose(),H.dispose(),ze.dispose(),he.dispose(),he.removeEventListener("sessionstart",Yr),he.removeEventListener("sessionend",Ei),wi.stop()};function _e(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=We.autoReset,X=Ve.enabled,te=Ve.autoUpdate,se=Ve.needsUpdate,q=Ve.type;Be(),We.autoReset=C,Ve.enabled=X,Ve.autoUpdate=te,Ve.needsUpdate=se,Ve.type=q}function Ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function dt(C){let X=C.target;X.removeEventListener("dispose",dt),Zt(X)}function Zt(C){fn(C),Me.remove(C)}function fn(C){let X=Me.get(C).programs;X!==void 0&&(X.forEach(function(te){ze.releaseProgram(te)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,te,se,q,De){X===null&&(X=we);let qe=q.isMesh&&q.matrixWorld.determinant()<0,Ke=uc(C,X,te,se,q);Re.setMaterial(se,qe);let Ze=te.index,ce=1;if(se.wireframe===!0){if(Ze=me.getWireframeAttribute(te),Ze===void 0)return;ce=2}let Qe=te.drawRange,et=te.attributes.position,gt=Qe.start*ce,Tt=(Qe.start+Qe.count)*ce;De!==null&&(gt=Math.max(gt,De.start*ce),Tt=Math.min(Tt,(De.start+De.count)*ce)),Ze!==null?(gt=Math.max(gt,0),Tt=Math.min(Tt,Ze.count)):et!=null&&(gt=Math.max(gt,0),Tt=Math.min(Tt,et.count));let Bt=Tt-gt;if(Bt<0||Bt===1/0)return;ut.setup(q,se,Ke,te,Ze);let Sn,Ne=je;if(Ze!==null&&(Sn=ne.get(Ze),Ne=mt,Ne.setIndex(Sn)),q.isMesh)se.wireframe===!0?(Re.setLineWidth(se.wireframeLinewidth*re()),Ne.setMode(I.LINES)):Ne.setMode(I.TRIANGLES);else if(q.isLine){let Fe=se.linewidth;Fe===void 0&&(Fe=1),Re.setLineWidth(Fe*re()),q.isLineSegments?Ne.setMode(I.LINES):q.isLineLoop?Ne.setMode(I.LINE_LOOP):Ne.setMode(I.LINE_STRIP)}else q.isPoints?Ne.setMode(I.POINTS):q.isSprite&&Ne.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ne.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Ne.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Fe=q._multiDrawStarts,Dt=q._multiDrawCounts,ht=q._multiDrawCount,Bn=Ze?ne.get(Ze).bytesPerElement:1,Yt=Me.get(se).currentProgram.getUniforms();for(let pn=0;pn<ht;pn++)Yt.setValue(I,"_gl_DrawID",pn),Ne.render(Fe[pn]/Bn,Dt[pn])}else if(q.isInstancedMesh)Ne.renderInstances(gt,Bt,q.count);else if(te.isInstancedBufferGeometry){let Fe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Dt=Math.min(te.instanceCount,Fe);Ne.renderInstances(gt,Bt,Dt)}else Ne.render(gt,Bt)};function wt(C,X,te){C.transparent===!0&&C.side===Qt&&C.forceSinglePass===!1?(C.side=Tn,C.needsUpdate=!0,Ln(C,X,te),C.side=xi,C.needsUpdate=!0,Ln(C,X,te),C.side=Qt):Ln(C,X,te)}this.compile=function(C,X,te=null){te===null&&(te=C),b=ft.get(te),b.init(X),w.push(b),te.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),C!==te&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights();let se=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let De=q.material;if(De)if(Array.isArray(De))for(let qe=0;qe<De.length;qe++){let Ke=De[qe];wt(Ke,te,q),se.add(Ke)}else wt(De,te,q),se.add(De)}),w.pop(),b=null,se},this.compileAsync=function(C,X,te=null){let se=this.compile(C,X,te);return new Promise(q=>{function De(){if(se.forEach(function(qe){Me.get(qe).currentProgram.isReady()&&se.delete(qe)}),se.size===0){q(C);return}setTimeout(De,10)}Ee.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let yn=null;function It(C){yn&&yn(C)}function Yr(){wi.stop()}function Ei(){wi.start()}let wi=new Kp;wi.setAnimationLoop(It),typeof self!="undefined"&&wi.setContext(self),this.setAnimationLoop=function(C){yn=C,he.setAnimationLoop(C),C===null?wi.stop():wi.start()},he.addEventListener("sessionstart",Yr),he.addEventListener("sessionend",Ei),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(X),X=he.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,X,L),b=ft.get(C,w.length),b.init(X),w.push(b),Q.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ge.setFromProjectionMatrix(Q),N=this.localClippingEnabled,B=Se.init(this.clippingPlanes,N),y=Ge.get(C,m.length),y.init(),m.push(y),he.enabled===!0&&he.isPresenting===!0){let De=v.xr.getDepthSensingMesh();De!==null&&Vi(De,X,-1/0,v.sortObjects)}Vi(C,X,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(ae,V),Ie=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ie&&ct.addToRenderList(y,C),this.info.render.frame++,B===!0&&Se.beginShadows();let te=b.state.shadowsArray;Ve.render(te,C,X),B===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=y.opaque,q=y.transmissive;if(b.setupLights(),X.isArrayCamera){let De=X.cameras;if(q.length>0)for(let qe=0,Ke=De.length;qe<Ke;qe++){let Ze=De[qe];no(se,q,C,Ze)}Ie&&ct.render(C);for(let qe=0,Ke=De.length;qe<Ke;qe++){let Ze=De[qe];Wi(y,C,Ze,Ze.viewport)}}else q.length>0&&no(se,q,C,X),Ie&&ct.render(C),Wi(y,C,X);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(v,C,X),ut.resetDefaultState(),z=-1,ie=null,w.pop(),w.length>0?(b=w[w.length-1],B===!0&&Se.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Vi(C,X,te,se){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ge.intersectsSprite(C)){se&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);let qe=pe.update(C),Ke=C.material;Ke.visible&&y.push(C,qe,Ke,te,be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ge.intersectsObject(C))){let qe=pe.update(C),Ke=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),be.copy(qe.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(Q)),Array.isArray(Ke)){let Ze=qe.groups;for(let ce=0,Qe=Ze.length;ce<Qe;ce++){let et=Ze[ce],gt=Ke[et.materialIndex];gt&&gt.visible&&y.push(C,qe,gt,te,be.z,et)}}else Ke.visible&&y.push(C,qe,Ke,te,be.z,null)}}let De=C.children;for(let qe=0,Ke=De.length;qe<Ke;qe++)Vi(De[qe],X,te,se)}function Wi(C,X,te,se){let q=C.opaque,De=C.transmissive,qe=C.transparent;b.setupLightsView(te),B===!0&&Se.setGlobalState(v.clippingPlanes,te),se&&Re.viewport(M.copy(se)),q.length>0&&Xi(q,X,te),De.length>0&&Xi(De,X,te),qe.length>0&&Xi(qe,X,te),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function no(C,X,te,se){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[se.id]===void 0&&(b.state.transmissionRenderTarget[se.id]=new bn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?On:fi,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));let De=b.state.transmissionRenderTarget[se.id],qe=se.viewport||M;De.setSize(qe.z,qe.w);let Ke=v.getRenderTarget();v.setRenderTarget(De),v.getClearColor(K),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Ie&&ct.render(te);let Ze=v.toneMapping;v.toneMapping=ss;let ce=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),b.setupLightsView(se),B===!0&&Se.setGlobalState(v.clippingPlanes,se),Xi(C,te,se),P.updateMultisampleRenderTarget(De),P.updateRenderTargetMipmap(De),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let et=0,gt=X.length;et<gt;et++){let Tt=X[et],Bt=Tt.object,Sn=Tt.geometry,Ne=Tt.material,Fe=Tt.group;if(Ne.side===Qt&&Bt.layers.test(se.layers)){let Dt=Ne.side;Ne.side=Tn,Ne.needsUpdate=!0,Kr(Bt,te,se,Sn,Ne,Fe),Ne.side=Dt,Ne.needsUpdate=!0,Qe=!0}}Qe===!0&&(P.updateMultisampleRenderTarget(De),P.updateRenderTargetMipmap(De))}v.setRenderTarget(Ke),v.setClearColor(K,J),ce!==void 0&&(se.viewport=ce),v.toneMapping=Ze}function Xi(C,X,te){let se=X.isScene===!0?X.overrideMaterial:null;for(let q=0,De=C.length;q<De;q++){let qe=C[q],Ke=qe.object,Ze=qe.geometry,ce=se===null?qe.material:se,Qe=qe.group;Ke.layers.test(te.layers)&&Kr(Ke,X,te,Ze,ce,Qe)}}function Kr(C,X,te,se,q,De){C.onBeforeRender(v,X,te,se,q,De),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(v,X,te,se,C,De),q.transparent===!0&&q.side===Qt&&q.forceSinglePass===!1?(q.side=Tn,q.needsUpdate=!0,v.renderBufferDirect(te,X,se,q,C,De),q.side=xi,q.needsUpdate=!0,v.renderBufferDirect(te,X,se,q,C,De),q.side=Qt):v.renderBufferDirect(te,X,se,q,C,De),C.onAfterRender(v,X,te,se,q,De)}function Ln(C,X,te){X.isScene!==!0&&(X=we);let se=Me.get(C),q=b.state.lights,De=b.state.shadowsArray,qe=q.state.version,Ke=ze.getParameters(C,q.state,De,X,te),Ze=ze.getProgramCacheKey(Ke),ce=se.programs;se.environment=C.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(C.isMeshStandardMaterial?j:T).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,ce===void 0&&(C.addEventListener("dispose",dt),ce=new Map,se.programs=ce);let Qe=ce.get(Ze);if(Qe!==void 0){if(se.currentProgram===Qe&&se.lightsStateVersion===qe)return Vs(C,Ke),Qe}else Ke.uniforms=ze.getUniforms(C),C.onBeforeCompile(Ke,v),Qe=ze.acquireProgram(Ke,Ze),ce.set(Ze,Qe),se.uniforms=Ke.uniforms;let et=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Se.uniform),Vs(C,Ke),se.needsLights=Ti(C),se.lightsStateVersion=qe,se.needsLights&&(et.ambientLightColor.value=q.state.ambient,et.lightProbe.value=q.state.probe,et.directionalLights.value=q.state.directional,et.directionalLightShadows.value=q.state.directionalShadow,et.spotLights.value=q.state.spot,et.spotLightShadows.value=q.state.spotShadow,et.rectAreaLights.value=q.state.rectArea,et.ltc_1.value=q.state.rectAreaLTC1,et.ltc_2.value=q.state.rectAreaLTC2,et.pointLights.value=q.state.point,et.pointLightShadows.value=q.state.pointShadow,et.hemisphereLights.value=q.state.hemi,et.directionalShadowMap.value=q.state.directionalShadowMap,et.directionalShadowMatrix.value=q.state.directionalShadowMatrix,et.spotShadowMap.value=q.state.spotShadowMap,et.spotLightMatrix.value=q.state.spotLightMatrix,et.spotLightMap.value=q.state.spotLightMap,et.pointShadowMap.value=q.state.pointShadowMap,et.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=Qe,se.uniformsList=null,Qe}function io(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=Mr.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Vs(C,X){let te=Me.get(C);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function uc(C,X,te,se,q){X.isScene!==!0&&(X=we),P.resetTextureUnits();let De=X.fog,qe=se.isMeshStandardMaterial?X.environment:null,Ke=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:xn,Ze=(se.isMeshStandardMaterial?j:T).get(se.envMap||qe),ce=se.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Qe=!!te.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!te.morphAttributes.position,gt=!!te.morphAttributes.normal,Tt=!!te.morphAttributes.color,Bt=ss;se.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Bt=v.toneMapping);let Sn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ne=Sn!==void 0?Sn.length:0,Fe=Me.get(se),Dt=b.state.lights;if(B===!0&&(N===!0||C!==ie)){let Jt=C===ie&&se.id===z;Se.setState(se,C,Jt)}let ht=!1;se.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Dt.state.version||Fe.outputColorSpace!==Ke||q.isBatchedMesh&&Fe.batching===!1||!q.isBatchedMesh&&Fe.batching===!0||q.isBatchedMesh&&Fe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Fe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Fe.instancing===!1||!q.isInstancedMesh&&Fe.instancing===!0||q.isSkinnedMesh&&Fe.skinning===!1||!q.isSkinnedMesh&&Fe.skinning===!0||q.isInstancedMesh&&Fe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Fe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Fe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Fe.instancingMorph===!1&&q.morphTexture!==null||Fe.envMap!==Ze||se.fog===!0&&Fe.fog!==De||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Se.numPlanes||Fe.numIntersection!==Se.numIntersection)||Fe.vertexAlphas!==ce||Fe.vertexTangents!==Qe||Fe.morphTargets!==et||Fe.morphNormals!==gt||Fe.morphColors!==Tt||Fe.toneMapping!==Bt||Fe.morphTargetsCount!==Ne)&&(ht=!0):(ht=!0,Fe.__version=se.version);let Bn=Fe.currentProgram;ht===!0&&(Bn=Ln(se,X,q));let Yt=!1,pn=!1,Hn=!1,Ht=Bn.getUniforms(),ii=Fe.uniforms;if(Re.useProgram(Bn.program)&&(Yt=!0,pn=!0,Hn=!0),se.id!==z&&(z=se.id,pn=!0),Yt||ie!==C){ye.reverseDepthBuffer?(ee.copy(C.projectionMatrix),i0(ee),s0(ee),Ht.setValue(I,"projectionMatrix",ee)):Ht.setValue(I,"projectionMatrix",C.projectionMatrix),Ht.setValue(I,"viewMatrix",C.matrixWorldInverse);let Jt=Ht.map.cameraPosition;Jt!==void 0&&Jt.setValue(I,fe.setFromMatrixPosition(C.matrixWorld)),ye.logarithmicDepthBuffer&&Ht.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ht.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),ie!==C&&(ie=C,pn=!0,Hn=!0)}if(q.isSkinnedMesh){Ht.setOptional(I,q,"bindMatrix"),Ht.setOptional(I,q,"bindMatrixInverse");let Jt=q.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Ht.setValue(I,"boneTexture",Jt.boneTexture,P))}q.isBatchedMesh&&(Ht.setOptional(I,q,"batchingTexture"),Ht.setValue(I,"batchingTexture",q._matricesTexture,P),Ht.setOptional(I,q,"batchingIdTexture"),Ht.setValue(I,"batchingIdTexture",q._indirectTexture,P),Ht.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Ht.setValue(I,"batchingColorTexture",q._colorsTexture,P));let bs=te.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0)&&st.update(q,te,Bn),(pn||Fe.receiveShadow!==q.receiveShadow)&&(Fe.receiveShadow=q.receiveShadow,Ht.setValue(I,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(ii.envMap.value=Ze,ii.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(ii.envMapIntensity.value=X.environmentIntensity),pn&&(Ht.setValue(I,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&dc(ii,Hn),De&&se.fog===!0&&Ce.refreshFogUniforms(ii,De),Ce.refreshMaterialUniforms(ii,se,xe,Z,b.state.transmissionRenderTarget[C.id]),Mr.upload(I,io(Fe),ii,P)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Mr.upload(I,io(Fe),ii,P),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ht.setValue(I,"center",q.center),Ht.setValue(I,"modelViewMatrix",q.modelViewMatrix),Ht.setValue(I,"normalMatrix",q.normalMatrix),Ht.setValue(I,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let Jt=se.uniformsGroups;for(let _s=0,so=Jt.length;_s<so;_s++){let qi=Jt[_s];H.update(qi,Bn),H.bind(qi,Bn)}}return Bn}function dc(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Ti(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,X,te){Me.get(C.texture).__webglTexture=X,Me.get(C.depthTexture).__webglTexture=te;let se=Me.get(C);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=te===void 0,se.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){let te=Me.get(C);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,te=0){L=C,O=X,D=te;let se=!0,q=null,De=!1,qe=!1;if(C){let Ze=Me.get(C);if(Ze.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(I.FRAMEBUFFER,null),se=!1;else if(Ze.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Ze.__hasExternalTextures)P.rebindTextures(C,Me.get(C.texture).__webglTexture,Me.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let et=C.depthTexture;if(Ze.__boundDepthTexture!==et){if(et!==null&&Me.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}let ce=C.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(qe=!0);let Qe=Me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?q=Qe[X][te]:q=Qe[X],De=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?q=Me.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?q=Qe[te]:q=Qe,M.copy(C.viewport),A.copy(C.scissor),Y=C.scissorTest}else M.copy(F).multiplyScalar(xe).floor(),A.copy($).multiplyScalar(xe).floor(),Y=oe;if(Re.bindFramebuffer(I.FRAMEBUFFER,q)&&se&&Re.drawBuffers(C,q),Re.viewport(M),Re.scissor(A),Re.setScissorTest(Y),De){let Ze=Me.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ze.__webglTexture,te)}else if(qe){let Ze=Me.get(C.texture),ce=X||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.__webglTexture,te||0,ce)}z=-1},this.readRenderTargetPixels=function(C,X,te,se,q,De,qe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=Me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke){Re.bindFramebuffer(I.FRAMEBUFFER,Ke);try{let Ze=C.texture,ce=Ze.format,Qe=Ze.type;if(!ye.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-se&&te>=0&&te<=C.height-q&&I.readPixels(X,te,se,q,nt.convert(ce),nt.convert(Qe),De)}finally{let Ze=L!==null?Me.get(L).__webglFramebuffer:null;Re.bindFramebuffer(I.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,X,te,se,q,De,qe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=Me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke){let Ze=C.texture,ce=Ze.format,Qe=Ze.type;if(!ye.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-se&&te>=0&&te<=C.height-q){Re.bindFramebuffer(I.FRAMEBUFFER,Ke);let et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.bufferData(I.PIXEL_PACK_BUFFER,De.byteLength,I.STREAM_READ),I.readPixels(X,te,se,q,nt.convert(ce),nt.convert(Qe),0);let gt=L!==null?Me.get(L).__webglFramebuffer:null;Re.bindFramebuffer(I.FRAMEBUFFER,gt);let Tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await n0(I,Tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,De),I.deleteBuffer(et),I.deleteSync(Tt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,te=0){C.isTexture!==!0&&(ll("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);let se=Math.pow(2,-te),q=Math.floor(C.image.width*se),De=Math.floor(C.image.height*se),qe=X!==null?X.x:0,Ke=X!==null?X.y:0;P.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,te,0,0,qe,Ke,q,De),Re.unbindTexture()},this.copyTextureToTexture=function(C,X,te=null,se=null,q=0){C.isTexture!==!0&&(ll("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,C=arguments[1],X=arguments[2],q=arguments[3]||0,te=null);let De,qe,Ke,Ze,ce,Qe;te!==null?(De=te.max.x-te.min.x,qe=te.max.y-te.min.y,Ke=te.min.x,Ze=te.min.y):(De=C.image.width,qe=C.image.height,Ke=0,Ze=0),se!==null?(ce=se.x,Qe=se.y):(ce=0,Qe=0);let et=nt.convert(X.format),gt=nt.convert(X.type);P.setTexture2D(X,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);let Tt=I.getParameter(I.UNPACK_ROW_LENGTH),Bt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ne=I.getParameter(I.UNPACK_SKIP_ROWS),Fe=I.getParameter(I.UNPACK_SKIP_IMAGES),Dt=C.isCompressedTexture?C.mipmaps[q]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,q,ce,Qe,De,qe,et,gt,Dt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,q,ce,Qe,Dt.width,Dt.height,et,Dt.data):I.texSubImage2D(I.TEXTURE_2D,q,ce,Qe,De,qe,et,gt,Dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Tt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fe),q===0&&X.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(C,X,te=null,se=null,q=0){C.isTexture!==!0&&(ll("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,se=arguments[1]||null,C=arguments[2],X=arguments[3],q=arguments[4]||0);let De,qe,Ke,Ze,ce,Qe,et,gt,Tt,Bt=C.isCompressedTexture?C.mipmaps[q]:C.image;te!==null?(De=te.max.x-te.min.x,qe=te.max.y-te.min.y,Ke=te.max.z-te.min.z,Ze=te.min.x,ce=te.min.y,Qe=te.min.z):(De=Bt.width,qe=Bt.height,Ke=Bt.depth,Ze=0,ce=0,Qe=0),se!==null?(et=se.x,gt=se.y,Tt=se.z):(et=0,gt=0,Tt=0);let Sn=nt.convert(X.format),Ne=nt.convert(X.type),Fe;if(X.isData3DTexture)P.setTexture3D(X,0),Fe=I.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)P.setTexture2DArray(X,0),Fe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);let Dt=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Bn=I.getParameter(I.UNPACK_SKIP_PIXELS),Yt=I.getParameter(I.UNPACK_SKIP_ROWS),pn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,ce),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Fe,q,et,gt,Tt,De,qe,Ke,Sn,Ne,Bt.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Fe,q,et,gt,Tt,De,qe,Ke,Sn,Bt.data):I.texSubImage3D(Fe,q,et,gt,Tt,De,qe,Ke,Sn,Ne,Bt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pn),q===0&&X.generateMipmaps&&I.generateMipmap(Fe),Re.unbindTexture()},this.initRenderTarget=function(C){Me.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Re.unbindTexture()},this.resetState=function(){O=0,D=0,L=null,Re.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ju?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===Yl?"display-p3":"srgb"}};var vl=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qh,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Cn=new k,Ds=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kr=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cr,fa=new k,hr=new k,ur=new k,dr=new ue,pa=new ue,em=new it,Wo=new k,ma=new k,Xo=new k,rp=new ue,eh=new ue,ap=new ue,Da=class extends qt{constructor(e=new kr){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new Vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lr(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new Ds(n,3,0,!1)),cr.setAttribute("uv",new Ds(n,2,3,!1))}this.geometry=cr,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),em.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-ur.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;qo(Wo.set(-.5,-.5,0),ur,a,hr,i,r),qo(ma.set(.5,-.5,0),ur,a,hr,i,r),qo(Xo.set(.5,.5,0),ur,a,hr,i,r),rp.set(0,0),eh.set(1,0),ap.set(1,1);let o=e.ray.intersectTriangle(Wo,ma,Xo,!1,fa);if(o===null&&(qo(ma.set(-.5,.5,0),ur,a,hr,i,r),eh.set(0,1),o=e.ray.intersectTriangle(Wo,Xo,ma,!1,fa),o===null))return;let l=e.ray.origin.distanceTo(fa);l<e.near||l>e.far||t.push({distance:l,point:fa.clone(),uv:ns.getInterpolation(fa,Wo,ma,Xo,rp,eh,ap,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function qo(s,e,t,n,i,r){dr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(pa.x=r*dr.x-i*dr.y,pa.y=i*dr.x+r*dr.y):pa.copy(dr),s.copy(e),s.x+=pa.x,s.y+=pa.y,s.applyMatrix4(em)}var op=new k,lp=new Rt,cp=new Rt,$y=new k,hp=new it,jo=new k,th=new Xn,up=new it,nh=new Ui,Ml=class extends le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mf,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingBox.expandByPoint(jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingSphere.expandByPoint(jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),th.copy(this.boundingSphere),th.applyMatrix4(i),e.ray.intersectsSphere(th)!==!1&&(up.copy(i).invert(),nh.copy(e.ray).applyMatrix4(up),!(this.boundingBox!==null&&nh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;lp.fromBufferAttribute(i.attributes.skinIndex,e),cp.fromBufferAttribute(i.attributes.skinWeight,e),op.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=cp.getComponent(r);if(a!==0){let o=lp.getComponent(r);hp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector($y.copy(op).applyMatrix4(hp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},La=class extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}},cs=class extends gn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=an,u=an,d,f){super(null,a,o,l,c,u,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dp=new it,Qy=new it,Sl=class s{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Qy;dp.multiplyMatrices(o,t[r]),dp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new cs(t,e,e,Nn,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new La),this.bones.push(a),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ls=class extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fr=new it,fp=new it,Yo=[],pp=new cn,ev=new it,ga=new le,ba=new Xn,El=class extends le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ev)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),pp.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(pp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),ba.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(n),e.ray.intersectsSphere(ba)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fr),fp.multiplyMatrices(n,fr),ga.matrixWorld=fp,ga.raycast(e,Yo);for(let a=0,o=Yo.length;a<o;a++){let l=Yo[a];l.instanceId=r,l.object=this,t.push(l)}Yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new cs(new Float32Array(i*this.count),i,this.count,Bu,di));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ka=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wl=new k,Tl=new k,mp=new it,_a=new Ui,Ko=new Xn,ih=new k,gp=new k,Nr=class extends qt{constructor(e=new Vt,t=new ka){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)wl.fromBufferAttribute(t,i-1),Tl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wl.distanceTo(Tl);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;mp.copy(i).invert(),_a.copy(e.ray).applyMatrix4(mp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=p,b=_-1;y<b;y+=c){let m=u.getX(y),w=u.getX(y+1),v=Zo(this,e,_a,l,m,w);v&&t.push(v)}if(this.isLineLoop){let y=u.getX(_-1),b=u.getX(p),m=Zo(this,e,_a,l,y,b);m&&t.push(m)}}else{let p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=p,b=_-1;y<b;y+=c){let m=Zo(this,e,_a,l,y,y+1);m&&t.push(m)}if(this.isLineLoop){let y=Zo(this,e,_a,l,_-1,p);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zo(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(wl.fromBufferAttribute(a,i),Tl.fromBufferAttribute(a,r),t.distanceSqToSegment(wl,Tl,ih,gp)>n)return;ih.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ih);if(!(l<e.near||l>e.far))return{distance:l,point:gp.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var bp=new k,_p=new k,Al=class extends Nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)bp.fromBufferAttribute(t,i),_p.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bp.distanceTo(_p);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Rl=class extends Nr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ks=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xp=new it,cu=new Ui,Jo=new Xn,$o=new k,Ur=class extends qt{constructor(e=new Vt,t=new ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;xp.copy(i).invert(),cu.copy(e.ray).applyMatrix4(xp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,y=p;_<y;_++){let b=c.getX(_);$o.fromBufferAttribute(d,b),yp($o,b,l,i,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,y=p;_<y;_++)$o.fromBufferAttribute(d,_),yp($o,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yp(s,e,t,n,i,r,a){let o=cu.distanceSqToPoint(s);if(o<t){let l=new k;cu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Cl=class extends gn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let u=n[i],f=n[i+1]-u,p=(a-u)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ue:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,i=[],r=[],a=[],o=new k,l=new it;for(let p=0;p<=e;p++){let _=p/e;i[p]=this.getTangentAt(_,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(nn(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(nn(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Na=class extends $n{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hu=class extends Na{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zu(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,p*=u,i(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Qo=new k,sh=new Zu,rh=new Zu,ah=new Zu,Ua=class extends $n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new k){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Qo.subVectors(i[0],i[1]).add(i[0]),c=Qo);let d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Qo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),b=Math.pow(f.distanceToSquared(u),p);y<1e-4&&(y=1),_<1e-4&&(_=y),b<1e-4&&(b=y),sh.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,_,y,b),rh.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,_,y,b),ah.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,_,y,b)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),rh.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),ah.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(sh.calc(l),rh.calc(l),ah.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new k().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vp(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function tv(s,e){let t=1-s;return t*t*e}function nv(s,e){return 2*(1-s)*s*e}function iv(s,e){return s*s*e}function wa(s,e,t,n){return tv(s,e)+nv(s,t)+iv(s,n)}function sv(s,e){let t=1-s;return t*t*t*e}function rv(s,e){let t=1-s;return 3*t*t*s*e}function av(s,e){return 3*(1-s)*s*s*e}function ov(s,e){return s*s*s*e}function Ta(s,e,t,n,i){return sv(s,e)+rv(s,t)+av(s,n)+ov(s,i)}var Pl=class extends $n{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ta(e,i.x,r.x,a.x,o.x),Ta(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uu=class extends $n{constructor(e=new k,t=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new k){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ta(e,i.x,r.x,a.x,o.x),Ta(e,i.y,r.y,a.y,o.y),Ta(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Il=class extends $n{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},du=class extends $n{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends $n{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(wa(e,i.x,r.x,a.x),wa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hs=class extends $n{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(wa(e,i.x,r.x,a.x),wa(e,i.y,r.y,a.y),wa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(vp(o,l.x,c.x,u.x,d.x),vp(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ue().fromArray(i))}return this}},kl=Object.freeze({__proto__:null,ArcCurve:hu,CatmullRomCurve3:Ua,CubicBezierCurve:Pl,CubicBezierCurve3:uu,EllipseCurve:Na,LineCurve:Il,LineCurve3:du,QuadraticBezierCurve:Dl,QuadraticBezierCurve3:hs,SplineCurve:Ll}),fu=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new kl[i.type]().fromJSON(i))}return this}},Nl=class extends fu{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Il(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Dl(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Pl(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ll(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Na(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mi=class s extends Vt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=nn(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new k,f=new ue,p=new k,_=new k,y=new k,b=0,m=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:b=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,p.x=m*1,p.y=-b,p.z=m*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:b=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,p.x=m*1,p.y=-b,p.z=m*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let w=0;w<=t;w++){let v=n+w*u*i,E=Math.sin(v),O=Math.cos(v);for(let D=0;D<=e.length-1;D++){d.x=e[D].x*E,d.y=e[D].y,d.z=e[D].x*O,a.push(d.x,d.y,d.z),f.x=w/t,f.y=D/(e.length-1),o.push(f.x,f.y);let L=l[3*D+0]*E,z=l[3*D+1],ie=l[3*D+0]*O;c.push(L,z,ie)}}for(let w=0;w<t;w++)for(let v=0;v<e.length-1;v++){let E=v+w*e.length,O=E,D=E+e.length,L=E+e.length+1,z=E+1;r.push(O,D,z),r.push(L,z,D)}this.setIndex(r),this.setAttribute("position",new vt(a,3)),this.setAttribute("uv",new vt(o,2)),this.setAttribute("normal",new vt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ct=class s extends Vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],f=[],p=[],_=0,y=[],b=n/2,m=0;w(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(p,2));function w(){let E=new k,O=new k,D=0,L=(t-e)/n;for(let z=0;z<=r;z++){let ie=[],M=z/r,A=M*(t-e)+e;for(let Y=0;Y<=i;Y++){let K=Y/i,J=K*l+o,de=Math.sin(J),Z=Math.cos(J);O.x=A*de,O.y=-M*n+b,O.z=A*Z,d.push(O.x,O.y,O.z),E.set(de,L,Z).normalize(),f.push(E.x,E.y,E.z),p.push(K,1-M),ie.push(_++)}y.push(ie)}for(let z=0;z<i;z++)for(let ie=0;ie<r;ie++){let M=y[ie][z],A=y[ie+1][z],Y=y[ie+1][z+1],K=y[ie][z+1];e>0&&(u.push(M,A,K),D+=3),t>0&&(u.push(A,Y,K),D+=3)}c.addGroup(m,D,0),m+=D}function v(E){let O=_,D=new ue,L=new k,z=0,ie=E===!0?e:t,M=E===!0?1:-1;for(let Y=1;Y<=i;Y++)d.push(0,b*M,0),f.push(0,M,0),p.push(.5,.5),_++;let A=_;for(let Y=0;Y<=i;Y++){let J=Y/i*l+o,de=Math.cos(J),Z=Math.sin(J);L.x=ie*Z,L.y=b*M,L.z=ie*de,d.push(L.x,L.y,L.z),f.push(0,M,0),D.x=de*.5+.5,D.y=Z*.5*M+.5,p.push(D.x,D.y),_++}for(let Y=0;Y<i;Y++){let K=O+Y,J=A+Y;E===!0?u.push(J,J+1,K):u.push(J+1,J,K),z+=3}c.addGroup(m,z,E===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oa=class s extends Ct{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Oi=class extends Nl{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Nl().fromJSON(i))}return this}},lv={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=tm(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,f,p;if(n&&(r=fv(s,e,r,t)),s.length>80*t){o=c=s[0],l=u=s[1];for(let _=t;_<i;_+=t)d=s[_],f=s[_+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Fa(r,a,t,o,l,p,0),a}};function tm(s,e,t,n,i){let r,a;if(i===Ev(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Mp(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Mp(r,s[r],s[r+1],a);return a&&Jl(a,a.next)&&(Ba(a),a=a.next),a}function Ns(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Jl(t,t.next)||Kt(t.prev,t,t.next)===0)){if(Ba(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fa(s,e,t,n,i,r,a){if(!s)return;!a&&r&&_v(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?hv(s,n,i,r):cv(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Ba(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=uv(Ns(s),e,t),Fa(s,e,t,n,i,r,2)):a===2&&dv(s,e,t,n,i,r):Fa(Ns(s),e,t,n,i,r,1);break}}}function cv(s){let e=s.prev,t=s,n=s.next;if(Kt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<r?i<a?i:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=d&&_.y<=p&&_r(i,o,r,l,a,c,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function hv(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Kt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,u=i.y,d=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,_=u<d?u<f?u:f:d<f?d:f,y=o>l?o>c?o:c:l>c?l:c,b=u>d?u>f?u:f:d>f?d:f,m=pu(p,_,e,t,n),w=pu(y,b,e,t,n),v=s.prevZ,E=s.nextZ;for(;v&&v.z>=m&&E&&E.z<=w;){if(v.x>=p&&v.x<=y&&v.y>=_&&v.y<=b&&v!==i&&v!==a&&_r(o,u,l,d,c,f,v.x,v.y)&&Kt(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=p&&E.x<=y&&E.y>=_&&E.y<=b&&E!==i&&E!==a&&_r(o,u,l,d,c,f,E.x,E.y)&&Kt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=y&&v.y>=_&&v.y<=b&&v!==i&&v!==a&&_r(o,u,l,d,c,f,v.x,v.y)&&Kt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=w;){if(E.x>=p&&E.x<=y&&E.y>=_&&E.y<=b&&E!==i&&E!==a&&_r(o,u,l,d,c,f,E.x,E.y)&&Kt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function uv(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Jl(i,r)&&nm(i,n,n.next,r)&&za(i,r)&&za(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ba(n),Ba(n.next),n=s=r),n=n.next}while(n!==s);return Ns(n)}function dv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vv(a,o)){let l=im(a,o);a=Ns(a,a.next),l=Ns(l,l.next),Fa(a,e,t,n,i,r,0),Fa(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function fv(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=tm(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(yv(c));for(i.sort(pv),r=0;r<i.length;r++)t=mv(i[r],t);return t}function pv(s,e){return s.x-e.x}function mv(s,e){let t=gv(s,e);if(!t)return e;let n=im(t,s);return Ns(n,n.next),Ns(t,t.next)}function gv(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,u=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&_r(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),za(t,s)&&(d<u||d===u&&(t.x>i.x||t.x===i.x&&bv(i,t)))&&(i=t,u=d)),t=t.next;while(t!==o);return i}function bv(s,e){return Kt(s.prev,s,e.prev)<0&&Kt(e.next,s,s.next)<0}function _v(s,e,t,n){let i=s;do i.z===0&&(i.z=pu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,xv(i)}function xv(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function pu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function yv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function _r(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function vv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Mv(s,e)&&(za(s,e)&&za(e,s)&&Sv(s,e)&&(Kt(s.prev,s,e.prev)||Kt(s,e.prev,e))||Jl(s,e)&&Kt(s.prev,s,s.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Jl(s,e){return s.x===e.x&&s.y===e.y}function nm(s,e,t,n){let i=tl(Kt(s,e,t)),r=tl(Kt(s,e,n)),a=tl(Kt(t,n,s)),o=tl(Kt(t,n,e));return!!(i!==r&&a!==o||i===0&&el(s,t,e)||r===0&&el(s,n,e)||a===0&&el(t,s,n)||o===0&&el(t,e,n))}function el(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function tl(s){return s>0?1:s<0?-1:0}function Mv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&nm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function za(s,e){return Kt(s.prev,s,s.next)<0?Kt(s,e,s.next)>=0&&Kt(s,s.prev,e)>=0:Kt(s,e,s.prev)<0||Kt(s,s.next,e)<0}function Sv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function im(s,e){let t=new mu(s.i,s.x,s.y),n=new mu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mp(s,e,t,n){let i=new mu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ba(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ev(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var rs=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Sp(e),Ep(n,e);let a=e.length;t.forEach(Sp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Ep(n,t[l]);let o=lv.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Sp(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ep(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Or=class s extends Vt{constructor(e=new Oi([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new vt(i,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:wv,v,E=!1,O,D,L,z;m&&(v=m.getSpacedPoints(u),E=!0,f=!1,O=m.computeFrenetFrames(u,!1),D=new k,L=new k,z=new k),f||(b=0,p=0,_=0,y=0);let ie=o.extractPoints(c),M=ie.shape,A=ie.holes;if(!rs.isClockWise(M)){M=M.reverse();for(let re=0,I=A.length;re<I;re++){let Te=A[re];rs.isClockWise(Te)&&(A[re]=Te.reverse())}}let K=rs.triangulateShape(M,A),J=M;for(let re=0,I=A.length;re<I;re++){let Te=A[re];M=M.concat(Te)}function de(re,I,Te){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(I,Te)}let Z=M.length,xe=K.length;function ae(re,I,Te){let Ee,ye,Re,We=re.x-I.x,Me=re.y-I.y,P=Te.x-re.x,T=Te.y-re.y,j=We*We+Me*Me,ne=We*T-Me*P;if(Math.abs(ne)>Number.EPSILON){let me=Math.sqrt(j),pe=Math.sqrt(P*P+T*T),ze=I.x-Me/me,Ce=I.y+We/me,Ge=Te.x-T/pe,ft=Te.y+P/pe,Se=((Ge-ze)*T-(ft-Ce)*P)/(We*T-Me*P);Ee=ze+We*Se-re.x,ye=Ce+Me*Se-re.y;let Ve=Ee*Ee+ye*ye;if(Ve<=2)return new ue(Ee,ye);Re=Math.sqrt(Ve/2)}else{let me=!1;We>Number.EPSILON?P>Number.EPSILON&&(me=!0):We<-Number.EPSILON?P<-Number.EPSILON&&(me=!0):Math.sign(Me)===Math.sign(T)&&(me=!0),me?(Ee=-Me,ye=We,Re=Math.sqrt(j)):(Ee=We,ye=Me,Re=Math.sqrt(j/2))}return new ue(Ee/Re,ye/Re)}let V=[];for(let re=0,I=J.length,Te=I-1,Ee=re+1;re<I;re++,Te++,Ee++)Te===I&&(Te=0),Ee===I&&(Ee=0),V[re]=ae(J[re],J[Te],J[Ee]);let F=[],$,oe=V.concat();for(let re=0,I=A.length;re<I;re++){let Te=A[re];$=[];for(let Ee=0,ye=Te.length,Re=ye-1,We=Ee+1;Ee<ye;Ee++,Re++,We++)Re===ye&&(Re=0),We===ye&&(We=0),$[Ee]=ae(Te[Ee],Te[Re],Te[We]);F.push($),oe=oe.concat($)}for(let re=0;re<b;re++){let I=re/b,Te=p*Math.cos(I*Math.PI/2),Ee=_*Math.sin(I*Math.PI/2)+y;for(let ye=0,Re=J.length;ye<Re;ye++){let We=de(J[ye],V[ye],Ee);Q(We.x,We.y,-Te)}for(let ye=0,Re=A.length;ye<Re;ye++){let We=A[ye];$=F[ye];for(let Me=0,P=We.length;Me<P;Me++){let T=de(We[Me],$[Me],Ee);Q(T.x,T.y,-Te)}}}let ge=_+y;for(let re=0;re<Z;re++){let I=f?de(M[re],oe[re],ge):M[re];E?(L.copy(O.normals[0]).multiplyScalar(I.x),D.copy(O.binormals[0]).multiplyScalar(I.y),z.copy(v[0]).add(L).add(D),Q(z.x,z.y,z.z)):Q(I.x,I.y,0)}for(let re=1;re<=u;re++)for(let I=0;I<Z;I++){let Te=f?de(M[I],oe[I],ge):M[I];E?(L.copy(O.normals[re]).multiplyScalar(Te.x),D.copy(O.binormals[re]).multiplyScalar(Te.y),z.copy(v[re]).add(L).add(D),Q(z.x,z.y,z.z)):Q(Te.x,Te.y,d/u*re)}for(let re=b-1;re>=0;re--){let I=re/b,Te=p*Math.cos(I*Math.PI/2),Ee=_*Math.sin(I*Math.PI/2)+y;for(let ye=0,Re=J.length;ye<Re;ye++){let We=de(J[ye],V[ye],Ee);Q(We.x,We.y,d+Te)}for(let ye=0,Re=A.length;ye<Re;ye++){let We=A[ye];$=F[ye];for(let Me=0,P=We.length;Me<P;Me++){let T=de(We[Me],$[Me],Ee);E?Q(T.x,T.y+v[u-1].y,v[u-1].x+Te):Q(T.x,T.y,d+Te)}}}B(),N();function B(){let re=i.length/3;if(f){let I=0,Te=Z*I;for(let Ee=0;Ee<xe;Ee++){let ye=K[Ee];fe(ye[2]+Te,ye[1]+Te,ye[0]+Te)}I=u+b*2,Te=Z*I;for(let Ee=0;Ee<xe;Ee++){let ye=K[Ee];fe(ye[0]+Te,ye[1]+Te,ye[2]+Te)}}else{for(let I=0;I<xe;I++){let Te=K[I];fe(Te[2],Te[1],Te[0])}for(let I=0;I<xe;I++){let Te=K[I];fe(Te[0]+Z*u,Te[1]+Z*u,Te[2]+Z*u)}}n.addGroup(re,i.length/3-re,0)}function N(){let re=i.length/3,I=0;ee(J,I),I+=J.length;for(let Te=0,Ee=A.length;Te<Ee;Te++){let ye=A[Te];ee(ye,I),I+=ye.length}n.addGroup(re,i.length/3-re,1)}function ee(re,I){let Te=re.length;for(;--Te>=0;){let Ee=Te,ye=Te-1;ye<0&&(ye=re.length-1);for(let Re=0,We=u+b*2;Re<We;Re++){let Me=Z*Re,P=Z*(Re+1),T=I+Ee+Me,j=I+ye+Me,ne=I+ye+P,me=I+Ee+P;be(T,j,ne,me)}}}function Q(re,I,Te){l.push(re),l.push(I),l.push(Te)}function fe(re,I,Te){we(re),we(I),we(Te);let Ee=i.length/3,ye=w.generateTopUV(n,i,Ee-3,Ee-2,Ee-1);Ie(ye[0]),Ie(ye[1]),Ie(ye[2])}function be(re,I,Te,Ee){we(re),we(I),we(Ee),we(I),we(Te),we(Ee);let ye=i.length/3,Re=w.generateSideWallUV(n,i,ye-6,ye-3,ye-2,ye-1);Ie(Re[0]),Ie(Re[1]),Ie(Re[3]),Ie(Re[1]),Ie(Re[2]),Ie(Re[3])}function we(re){i.push(l[re*3+0]),i.push(l[re*3+1]),i.push(l[re*3+2])}function Ie(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new kl[i.type]().fromJSON(i)),new s(n,e.options)}},wv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ue(r,a),new ue(o,l),new ue(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[i*3],p=e[i*3+1],_=e[i*3+2],y=e[r*3],b=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-d),new ue(f,1-_),new ue(y,1-m)]:[new ue(o,1-l),new ue(u,1-d),new ue(p,1-_),new ue(b,1-m)]}};function Tv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ha=class s extends Vt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],d=e,f=(t-e)/i,p=new k,_=new ue;for(let y=0;y<=i;y++){for(let b=0;b<=n;b++){let m=r+b/n*a;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let y=0;y<i;y++){let b=y*(n+1);for(let m=0;m<n;m++){let w=m+b,v=w,E=w+n+1,O=w+n+2,D=w+1;o.push(v,E,D),o.push(E,O,D)}}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ga=class s extends Vt{constructor(e=new Oi([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new vt(i,3)),this.setAttribute("normal",new vt(r,3)),this.setAttribute("uv",new vt(a,2));function c(u){let d=i.length/3,f=u.extractPoints(t),p=f.shape,_=f.holes;rs.isClockWise(p)===!1&&(p=p.reverse());for(let b=0,m=_.length;b<m;b++){let w=_[b];rs.isClockWise(w)===!0&&(_[b]=w.reverse())}let y=rs.triangulateShape(p,_);for(let b=0,m=_.length;b<m;b++){let w=_[b];p=p.concat(w)}for(let b=0,m=p.length;b<m;b++){let w=p[b];i.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let b=0,m=y.length;b<m;b++){let w=y[b],v=w[0]+d,E=w[1]+d,O=w[2]+d;n.push(v,E,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Av(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function Av(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Un=class s extends Vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new k,f=new k,p=[],_=[],y=[],b=[];for(let m=0;m<=n;m++){let w=[],v=m/n,E=0;m===0&&a===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let O=0;O<=t;O++){let D=O/t;d.x=-e*Math.cos(i+D*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+D*r)*Math.sin(a+v*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),b.push(D+E,1-v),w.push(c++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){let v=u[m][w+1],E=u[m][w],O=u[m+1][w],D=u[m+1][w+1];(m!==0||a>0)&&p.push(v,E,D),(m!==n-1||l<Math.PI)&&p.push(E,O,D)}this.setIndex(p),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fr=class s extends Vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],u=new k,d=new k,f=new k;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){let y=_/i*r,b=p/n*Math.PI*2;d.x=(e+t*Math.cos(b))*Math.cos(y),d.y=(e+t*Math.cos(b))*Math.sin(y),d.z=t*Math.sin(b),o.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){let y=(i+1)*p+_-1,b=(i+1)*(p-1)+_-1,m=(i+1)*(p-1)+_,w=(i+1)*p+_;a.push(y,b,w),a.push(b,m,w)}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Us=class s extends Vt{constructor(e=new hs(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new k,l=new k,c=new ue,u=new k,d=[],f=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(p,2));function y(){for(let v=0;v<t;v++)b(v);b(r===!1?t:0),w(),m()}function b(v){u=e.getPointAt(v/t,u);let E=a.normals[v],O=a.binormals[v];for(let D=0;D<=i;D++){let L=D/i*Math.PI*2,z=Math.sin(L),ie=-Math.cos(L);l.x=ie*E.x+z*O.x,l.y=ie*E.y+z*O.y,l.z=ie*E.z+z*O.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=t;v++)for(let E=1;E<=i;E++){let O=(i+1)*(v-1)+(E-1),D=(i+1)*v+(E-1),L=(i+1)*v+E,z=(i+1)*(v-1)+E;_.push(O,D,z),_.push(D,L,z)}}function w(){for(let v=0;v<=t;v++)for(let E=0;E<=i;E++)c.x=v/t,c.y=E/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new kl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ul=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ye=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends Ye{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ol=class extends In{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function nl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Rv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Cv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function sm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var us=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gu=class extends us{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mr,endingEnd:mr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case gr:r=e,o=2*t-n;break;case cl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gr:a=e,l=2*n-t;break;case cl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),y=_*_,b=y*_,m=-f*b+2*f*y-f*_,w=(1+f)*b+(-1.5-2*f)*y+(-.5+f)*_+1,v=(-1-p)*b+(1.5+p)*y+.5*_,E=p*b-p*y;for(let O=0;O!==o;++O)r[O]=m*a[u+O]+w*a[c+O]+v*a[l+O]+E*a[d+O];return r}},Fl=class extends us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},bu=class extends us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nl(t,this.TimeBufferType),this.values=nl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nl(e.times,Array),values:nl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case Tc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Tc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Rv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Tc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){let y=t[d+_];if(y!==t[f+_]||y!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Ar;var ds=class extends Qn{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Tr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Qn{};zl.prototype.ValueTypeName="color";var Fi=class extends Qn{};Fi.prototype.ValueTypeName="number";var _u=class extends us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},zi=class extends Qn{InterpolantFactoryMethodLinear(e){return new _u(this.times,this.values,this.getValueSize(),e)}};zi.prototype.ValueTypeName="quaternion";zi.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Qn{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Tr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Qn{};Bi.prototype.ValueTypeName="vector";var zr=class{constructor(e="",t=-1,n=[],i=Xu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Jn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Iv(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Cv(l);l=wp(l,1,u),c=wp(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Fi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],f=i[d];f||(i[d]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,f,p,_,y){if(p.length!==0){let b=[],m=[];sm(p,b,m,_),b.length!==0&&y.push(new d(f,b,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let y=0;y<f[_].morphTargets.length;y++)p[f[_].morphTargets[y]]=-1;for(let y in p){let b=[],m=[];for(let w=0;w!==f[_].morphTargets.length;++w){let v=f[_];b.push(v.time),m.push(v.morphTarget===y?1:0)}i.push(new Fi(".morphTargetInfluence["+y+"]",b,m))}l=p.length*a}else{let p=".bones["+t[d].name+"]";n(Bi,p+".position",f,"pos",i),n(zi,p+".quaternion",f,"rot",i),n(Bi,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Pv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return zl;case"quaternion":return zi;case"bool":case"boolean":return ds;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Iv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Pv(s.type);if(s.times===void 0){let t=[],n=[];sm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var is={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},xu=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},Dv=new xu,Hi=class{constructor(e){this.manager=e!==void 0?e:Dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Li={},yu=class extends Error{constructor(e,t){super(e),this.response=t}},Va=class extends Hi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=is.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:i});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Li[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0,y=0,b=new ReadableStream({start(m){w();function w(){d.read().then(({done:v,value:E})=>{if(v)m.close();else{y+=E.byteLength;let O=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let D=0,L=u.length;D<L;D++){let z=u[D];z.onProgress&&z.onProgress(O)}m.enqueue(E),w()}},v=>{m.error(v)})}}});return new Response(b)}else throw new yu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{is.add(e,c);let u=Li[e];delete Li[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Li[e];if(u===void 0)throw this.manager.itemError(e),c;delete Li[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var vu=class extends Hi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=is.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ca("img");function l(){u(),is.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Os=class extends Hi{constructor(e){super(e)}load(e,t,n,i){let r=new gn,a=new vu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Br=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Bl=class extends Br{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},oh=new it,Tp=new k,Ap=new k,Wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tp),Ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ap),t.updateMatrixWorld(),oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mu=class extends Wa{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Rr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Hl=class extends Br{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Rp=new it,xa=new k,lh=new k,Su=class extends Wa{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xa.setFromMatrixPosition(e.matrixWorld),n.position.copy(xa),lh.copy(n.position),lh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lh),n.updateMatrixWorld(),i.makeTranslation(-xa.x,-xa.y,-xa.z),Rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rp)}},ei=class extends Br{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Eu=class extends Wa{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends Br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ps=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Gl=class extends Hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=is.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return is.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),is.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});is.add(e,l),r.manager.itemStart(e)}};var Hr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Cp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Cp(){return performance.now()}var wu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){ln.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;ln.multiplyQuaternionsFlat(e,a,e,t,e,n),ln.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Ju="\\[\\]\\.:\\/",Lv=new RegExp("["+Ju+"]","g"),$u="[^"+Ju+"]",kv="[^"+Ju.replace("\\.","")+"]",Nv=/((?:WC+[\/:])*)/.source.replace("WC",$u),Uv=/(WCOD+)?/.source.replace("WCOD",kv),Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$u),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$u),zv=new RegExp("^"+Nv+Uv+Ov+Fv+"$"),Bv=["material","materials","bones","map"],Tu=class{constructor(e,t,n){let i=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lv,"")}static parseTrackName(e){let t=zv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Bv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Tu;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Au=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:mr,endingEnd:mr};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Rg:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Xu:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Ag;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Wu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=gr,i.endingEnd=gr):(e?i.endingStart=this.zeroSlopeAtStart?gr:mr:i.endingStart=cl,t?i.endingEnd=this.zeroSlopeAtEnd?gr:mr:i.endingEnd=cl)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},Hv=new Float32Array(1),Gr=class extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){let f=i[d],p=f.name,_=u[p];if(_!==void 0)++_.referenceCount,a[d]=_;else{if(_=a[d],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}let y=t&&t._propertyBindings[d].binding.parsedPath;_=new wu(Ot.create(n,p,y),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),a[d]=_}o[d].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Fl(new Float32Array(2),new Float32Array(2),1,Hv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?zr.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Xu),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new Au(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?zr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Pp=new it,Xa=class{constructor(e,t,n=0,i=1/0){this.ray=new Ui(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pp),this}intersectObject(e,t=!0,n=[]){return Ru(e,this,n,t),n.sort(Ip),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ru(e[i],this,n,t);return n.sort(Ip),n}};function Ip(s,e){return s.distance-e.distance}function Ru(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Ru(r[a],e,t,!0)}}var qa=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Vl=class extends yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cu);function Qu(s,e){if(e===Wp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ya||e===jl){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ya)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var $l=class extends Hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ad(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new yd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ps.extractUrlBase(e);a=ps.resolveURL(c,this.path)}else a=ps.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Va(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hm){try{a[Mt.KHR_BINARY_GLTF]=new vd(e)}catch(d){i&&i(d);return}r=JSON.parse(a[Mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Rd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case Mt.KHR_MATERIALS_UNLIT:a[d]=new sd;break;case Mt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Md(r,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:a[d]=new Sd;break;case Mt.KHR_MESH_QUANTIZATION:a[d]=new Ed;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Gv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},id=class{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new $e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],xn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ei(u),c.distance=d;break;case"spot":c=new Hl(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Gi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},sd=class{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,n){let i=[];e.color=new $e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],xn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,$t))}return Promise.all(i)}},rd=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ad=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(o,o)}return Promise.all(r)}},od=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},ld=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},cd=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],xn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,$t)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},hd=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},ud=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(o[0],o[1],o[2],xn),Promise.all(r)}},dd=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},fd=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(o[0],o[1],o[2],xn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,$t)),Promise.all(r)}},pd=class{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},md=class{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},gd=class{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},bd=class{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},_d=class{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},xd=class{constructor(e){this.name=Mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,f,i.mode,i.filter),p})})}else return null}},yd=class{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==ti.TRIANGLES&&c.mode!==ti.TRIANGLE_STRIP&&c.mode!==ti.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let _ of d){let y=new it,b=new k,m=new ln,w=new k(1,1,1),v=new El(_.geometry,_.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&b.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&w.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,y.compose(b,m,w));for(let E in l)if(E==="_COLOR_0"){let O=l[E];v.instanceColor=new Ls(O.array,O.itemSize,O.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,l[E]);qt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},hm="glTF",Ka=12,am={JSON:1313821514,BIN:5130562},vd=class{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ka,r=new DataView(e,Ka),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===am.JSON){let c=new Uint8Array(e,Ka+a,o);this.content=n.decode(c)}else if(l===am.BIN){let c=Ka+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Md=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=Td[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=Td[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=Xr[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(p){for(let _ in p.attributes){let y=p.attributes[_],b=l[_];b!==void 0&&(y.normalized=b)}d(p)},o,c,xn,f)})})}},Sd=class{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ed=class{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}},Ql=class extends us{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,f=d*d,p=f*d,_=e*c,y=_-c,b=-2*p+3*f,m=p-f,w=1-b,v=m-f+d;for(let E=0;E!==o;E++){let O=a[y+E+o],D=a[y+E+l]*u,L=a[_+E+o],z=a[_+E]*u;r[E]=w*O+v*D+b*L+m*z}return r}},Vv=new ln,wd=class extends Ql{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Vv.fromArray(r).normalize().toArray(r),r}},ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},om={9728:an,9729:kn,9984:Uu,9985:va,9986:pr,9987:_i},lm={33071:ki,33648:Aa,10497:en},ed={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Td={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wv={CUBICSPLINE:void 0,LINEAR:Ar,STEP:Tr},td={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),s.DefaultMaterial}function Hs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function jv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yv(s){let e,t=s.extensions&&s.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nd(t.attributes):e=s.indices+":"+nd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+nd(s.targets[n]);return e}function nd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ad(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Zv=new it,Rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&a<98?this.textureLoader=new Os(this.options.manager):this.textureLoader=new Gl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Va(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Hs(r,o,i),Gi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(ps.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=ed[i.type],o=Xr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Xt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=ed[i.type],c=Xr[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,y,b;if(p&&p!==d){let m=Math.floor(f/p),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=t.cache.get(w);v||(y=new c(o,m*p,i.count*p/u),v=new Lr(y,p/u),t.cache.add(w,v)),b=new Ds(v,l,f%p/u,_)}else o===null?y=new c(i.count*l):y=new c(o,f,i.count*l),b=new Xt(y,l,_);if(i.sparse!==void 0){let m=ed.SCALAR,w=Xr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,O=new w(a[1],v,i.sparse.count*m),D=new c(a[2],E,i.sparse.count*l);o!==null&&(b=new Xt(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let L=0,z=O.length;L<z;L++){let ie=O[L];if(b.setX(ie,D[L*l]),l>=2&&b.setY(ie,D[L*l+1]),l>=3&&b.setZ(ie,D[L*l+2]),l>=4&&b.setW(ie,D[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=_}return b})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=om[f.magFilter]||kn,u.minFilter=om[f.minFilter]||_i,u.wrapS=lm[f.wrapS]||en,u.wrapT=lm[f.wrapT]||en,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(y){let b=new gn(y);b.needsUpdate=!0,f(b)}),t.load(ps.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Gi(d,a),d.userData.mimeType=a.mimeType||Kv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Mt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ks,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ka,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ye}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Mt.KHR_MATERIALS_UNLIT]){let d=i[Mt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new $e(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],xn),o.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,$t)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Qt);let u=r.alphaMode||td.OPAQUE;if(u===td.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===td.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==zt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==zt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==zt){let d=r.emissiveFactor;o.emissive=new $e().setRGB(d[0],d[1],d[2],xn)}return r.emissiveTexture!==void 0&&a!==zt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,$t)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Gi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Hs(i,d,r),d})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return cm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Yv(c),d=i[u];if(d)a.push(d.promise);else{let f;c.extensions&&c.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=cm(new Vt,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Xv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,_=u.length;p<_;p++){let y=u[p],b=a[p],m,w=c[p];if(b.mode===ti.TRIANGLES||b.mode===ti.TRIANGLE_STRIP||b.mode===ti.TRIANGLE_FAN||b.mode===void 0)m=r.isSkinnedMesh===!0?new Ml(y,w):new le(y,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),b.mode===ti.TRIANGLE_STRIP?m.geometry=Qu(m.geometry,jl):b.mode===ti.TRIANGLE_FAN&&(m.geometry=Qu(m.geometry,Ya));else if(b.mode===ti.LINES)m=new Al(y,w);else if(b.mode===ti.LINE_STRIP)m=new Nr(y,w);else if(b.mode===ti.LINE_LOOP)m=new Rl(y,w);else if(b.mode===ti.POINTS)m=new Ur(y,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(m.geometry.morphAttributes).length>0&&jv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Gi(m,r),b.extensions&&Hs(i,m,b),t.assignFinalMaterial(m),d.push(m)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Hs(i,d[0],r),d[0];let f=new tt;r.extensions&&Hs(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Kl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ls(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let f=new it;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sl(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){let p=i.channels[d],_=i.samplers[p.sampler],y=p.target,b=y.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,w=i.parameters!==void 0?i.parameters[_.output]:_.output;y.node!==void 0&&(a.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",w)),c.push(_),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let f=d[0],p=d[1],_=d[2],y=d[3],b=d[4],m=[];for(let w=0,v=f.length;w<v;w++){let E=f[w],O=p[w],D=_[w],L=y[w],z=b[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let ie=n._createAnimationTracks(E,O,D,L,z);if(ie)for(let M=0;M<ie.length;M++)m.push(ie[M])}return new zr(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Zv)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new La:c.length>1?u=new tt:c.length===1?u=c[0]:u=new qt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Gi(u,r),r.extensions&&Hs(n,u,r),r.matrix!==void 0){let d=new it;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new tt;n.name&&(r.name=i.createUniqueName(n.name)),Gi(r,n),n.extensions&&Hs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[f,p]of i.associations)(f instanceof In||f instanceof gn)&&d.set(f,p);return u.traverse(f=>{let p=i.associations.get(f);p!=null&&d.set(f,p)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];ms[r.path]===ms.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(ms[r.path]){case ms.weights:c=Fi;break;case ms.rotation:c=zi;break;case ms.position:case ms.scale:c=Bi;break;default:switch(n.itemSize){case 1:c=Fi;break;case 2:case 3:default:c=Bi;break}break}let u=i.interpolation!==void 0?Wv[i.interpolation]:Ar,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let _=new c(l[f]+"."+ms[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ad(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof zi?wd:Ql;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Jv(s,e,t){let n=e.attributes,i=new cn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){let u=Ad(Xr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new k,l=new k;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){let y=Ad(Xr[f.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Xn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function cm(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Td[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return St.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),Gi(s,e),Jv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qv(s,e.targets,t):s})}var um={type:"change"},Pd={type:"start"},fm={type:"end"},ec=new Ui,dm=new hi,$v=Math.cos(70*Kl.DEG2RAD),dn=new k,zn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cd=1e-6,tc=class extends Vl{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new ln,this._lastTargetPosition=new k,this._quat=new ln().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qa,this._sphericalDelta=new qa,this._scale=1,this._panOffset=new k,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new k,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eM.bind(this),this._onPointerDown=Qv.bind(this),this._onPointerUp=tM.bind(this),this._onContextMenu=lM.bind(this),this._onMouseWheel=sM.bind(this),this._onKeyDown=rM.bind(this),this._onTouchStart=aM.bind(this),this._onTouchMove=oM.bind(this),this._onMouseDown=nM.bind(this),this._onMouseMove=iM.bind(this),this._interceptControlDown=cM.bind(this),this._interceptControlUp=hM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(um),this.update(),this.state=Nt.NONE}update(e=null){let t=this.object.position;dn.copy(t).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=zn:n>Math.PI&&(n-=zn),i<-Math.PI?i+=zn:i>Math.PI&&(i-=zn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=dn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ec.origin.copy(this.object.position),ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ec.direction))<$v?this.object.lookAt(this.target):(dm.setFromNormalAndCoplanarPoint(this.object.up,this.target),ec.intersectPlane(dm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cd||this._lastTargetPosition.distanceToSquared(this.target)>Cd?(this.dispatchEvent(um),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zn/60*this.autoRotateSpeed*e:zn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dn.setFromMatrixColumn(t,0),dn.multiplyScalar(-e),this._panOffset.add(dn)}_panUp(e,t){this.screenSpacePanning===!0?dn.setFromMatrixColumn(t,1):(dn.setFromMatrixColumn(t,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(e),this._panOffset.add(dn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;dn.copy(i).sub(this.target);let r=dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Qv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function eM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function tM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fm),this.state=Nt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Nt.DOLLY;break;case zs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}break;case zs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Pd)}function iM(s){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function sM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(s.preventDefault(),this.dispatchEvent(Pd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(fm))}function rM(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function aM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Nt.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Nt.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Pd)}function oM(s){switch(this._trackPointer(s),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Nt.NONE}}function lM(s){this.enabled!==!1&&s.preventDefault()}function cM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var pm=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var w=new Uint8Array(m.length),v=0;v<m.length;++v){var E=m.charCodeAt(v);w[v]=E>96?E-97:E>64?E-39:E+4}for(var O=0,v=0;v<m.length;++v)w[O++]=w[v]<60?n[w[v]]:(w[v]-60)*64+w[++v];return w.buffer.slice(0,O)}function l(m,w,v,E,O,D){var L=r.exports.sbrk,z=v+3&-4,ie=L(z*E),M=L(O.length),A=new Uint8Array(r.exports.memory.buffer);A.set(O,M);var Y=m(ie,v,E,M,O.length);if(Y==0&&D&&D(ie,z,E),w.set(A.subarray(ie,ie+v*E)),L(ie-L(0)),Y!=0)throw new Error("Malformed buffer data: "+Y)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function p(m){var w={object:new Worker(m),pending:0,requests:{}};return w.object.onmessage=function(v){var E=v.data;w.pending-=E.count,w.requests[E.id][E.action](E.value),delete w.requests[E.id]},w}function _(m){for(var w="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+b.toString(),v=new Blob([w],{type:"text/javascript"}),E=URL.createObjectURL(v),O=0;O<m;++O)d[O]=p(E);URL.revokeObjectURL(E)}function y(m,w,v,E,O){for(var D=d[0],L=1;L<d.length;++L)d[L].pending<D.pending&&(D=d[L]);return new Promise(function(z,ie){var M=new Uint8Array(v),A=f++;D.pending+=m,D.requests[A]={resolve:z,reject:ie},D.object.postMessage({id:A,count:m,size:w,source:M,mode:E,filter:O},[M.buffer])})}function b(m){a.then(function(){var w=m.data;try{var v=new Uint8Array(w.count*w.size);l(r.exports[w.mode],v,w.count,w.size,w.source,r.exports[w.filter]),self.postMessage({id:w.id,count:w.count,action:"resolve",value:v},[v.buffer])}catch(E){self.postMessage({id:w.id,count:w.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(m){_(m)},decodeVertexBuffer:function(m,w,v,E,O){l(r.exports.meshopt_decodeVertexBuffer,m,w,v,E,r.exports[c[O]])},decodeIndexBuffer:function(m,w,v,E){l(r.exports.meshopt_decodeIndexBuffer,m,w,v,E)},decodeIndexSequence:function(m,w,v,E){l(r.exports.meshopt_decodeIndexSequence,m,w,v,E)},decodeGltfBuffer:function(m,w,v,E,O,D){l(r.exports[u[O]],m,w,v,E,r.exports[c[D]])},decodeGltfBufferAsync:function(m,w,v,E,O){return d.length>0?y(m,w,v,u[E],c[O]):a.then(function(){var D=new Uint8Array(m*w);return l(r.exports[u[E]],D,m,w,v,r.exports[c[O]]),D})}}}();var nc=class extends Dr{constructor(){super();let e=new lt;e.deleteAttribute("uv");let t=new Ye({side:Tn}),n=new Ye,i=new ei(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new le(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new le(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new le(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new le(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new le(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let d=new le(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let f=new le(e,qr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let p=new le(e,qr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let _=new le(e,qr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let y=new le(e,qr(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let b=new le(e,qr(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,.1),this.add(b);let m=new le(e,qr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function qr(s){let e=new zt;return e.color.setScalar(s),e}var gs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uM=new ls(-1,1,1,-1,0,1),Id=class extends Vt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}},dM=new Id,Si=class{constructor(e){this._mesh=new le(dM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ic=class extends Dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fn.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Si(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Za=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},sc=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var rc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ic(gs),this.copyPass.material.blending=on,this.clock=new Hr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Za!==void 0&&(a instanceof Za?n=!0:a instanceof sc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ac=class extends Dn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Ja={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new it},cameraProjectionMatrixInverse:{value:new it},cameraWorldMatrix:{value:new it},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},$a={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},oc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function mm(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=fM(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new k(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new cs(i,e,e);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}function fM(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var Qa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Dd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraProjectionMatrixInverse:{value:new it},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Dd(s,e,t){let n=pM(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function pM(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new k(Math.cos(r),Math.sin(r),a))}return n}var lc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(l+c)*u,f=l-d,p=c-d,_=e-f,y=t-p,b,m;_>y?(b=1,m=0):(b=0,m=1);let w=_-b+u,v=y-m+u,E=_-1+2*u,O=y-1+2*u,D=l&255,L=c&255,z=this.perm[D+this.perm[L]]%12,ie=this.perm[D+b+this.perm[L+m]]%12,M=this.perm[D+1+this.perm[L+1]]%12,A=.5-_*_-y*y;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[z],_,y));let Y=.5-w*w-v*v;Y<0?i=0:(Y*=Y,i=Y*Y*this.dot(this.grad3[ie],w,v));let K=.5-E*E-O*O;return K<0?r=0:(K*=K,r=K*K*this.dot(this.grad3[M],E,O)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(n+c),p=1/6,_=(u+d+f)*p,y=u-_,b=d-_,m=f-_,w=e-y,v=t-b,E=n-m,O,D,L,z,ie,M;w>=v?v>=E?(O=1,D=0,L=0,z=1,ie=1,M=0):w>=E?(O=1,D=0,L=0,z=1,ie=0,M=1):(O=0,D=0,L=1,z=1,ie=0,M=1):v<E?(O=0,D=0,L=1,z=0,ie=1,M=1):w<E?(O=0,D=1,L=0,z=0,ie=1,M=1):(O=0,D=1,L=0,z=1,ie=1,M=0);let A=w-O+p,Y=v-D+p,K=E-L+p,J=w-z+2*p,de=v-ie+2*p,Z=E-M+2*p,xe=w-1+3*p,ae=v-1+3*p,V=E-1+3*p,F=u&255,$=d&255,oe=f&255,ge=this.perm[F+this.perm[$+this.perm[oe]]]%12,B=this.perm[F+O+this.perm[$+D+this.perm[oe+L]]]%12,N=this.perm[F+z+this.perm[$+ie+this.perm[oe+M]]]%12,ee=this.perm[F+1+this.perm[$+1+this.perm[oe+1]]]%12,Q=.6-w*w-v*v-E*E;Q<0?i=0:(Q*=Q,i=Q*Q*this.dot3(this.grad3[ge],w,v,E));let fe=.6-A*A-Y*Y-K*K;fe<0?r=0:(fe*=fe,r=fe*fe*this.dot3(this.grad3[B],A,Y,K));let be=.6-J*J-de*de-Z*Z;be<0?a=0:(be*=be,a=be*be*this.dot3(this.grad3[N],J,de,Z));let we=.6-xe*xe-ae*ae-V*V;return we<0?o=0:(we*=we,o=we*we*this.dot3(this.grad3[ee],xe,ae,V)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,d,f,p,_,y=(e+t+n+i)*l,b=Math.floor(e+y),m=Math.floor(t+y),w=Math.floor(n+y),v=Math.floor(i+y),E=(b+m+w+v)*c,O=b-E,D=m-E,L=w-E,z=v-E,ie=e-O,M=t-D,A=n-L,Y=i-z,K=ie>M?32:0,J=ie>A?16:0,de=M>A?8:0,Z=ie>Y?4:0,xe=M>Y?2:0,ae=A>Y?1:0,V=K+J+de+Z+xe+ae,F=a[V][0]>=3?1:0,$=a[V][1]>=3?1:0,oe=a[V][2]>=3?1:0,ge=a[V][3]>=3?1:0,B=a[V][0]>=2?1:0,N=a[V][1]>=2?1:0,ee=a[V][2]>=2?1:0,Q=a[V][3]>=2?1:0,fe=a[V][0]>=1?1:0,be=a[V][1]>=1?1:0,we=a[V][2]>=1?1:0,Ie=a[V][3]>=1?1:0,re=ie-F+c,I=M-$+c,Te=A-oe+c,Ee=Y-ge+c,ye=ie-B+2*c,Re=M-N+2*c,We=A-ee+2*c,Me=Y-Q+2*c,P=ie-fe+3*c,T=M-be+3*c,j=A-we+3*c,ne=Y-Ie+3*c,me=ie-1+4*c,pe=M-1+4*c,ze=A-1+4*c,Ce=Y-1+4*c,Ge=b&255,ft=m&255,Se=w&255,Ve=v&255,ct=o[Ge+o[ft+o[Se+o[Ve]]]]%32,st=o[Ge+F+o[ft+$+o[Se+oe+o[Ve+ge]]]]%32,je=o[Ge+B+o[ft+N+o[Se+ee+o[Ve+Q]]]]%32,mt=o[Ge+fe+o[ft+be+o[Se+we+o[Ve+Ie]]]]%32,nt=o[Ge+1+o[ft+1+o[Se+1+o[Ve+1]]]]%32,ut=.6-ie*ie-M*M-A*A-Y*Y;ut<0?u=0:(ut*=ut,u=ut*ut*this.dot4(r[ct],ie,M,A,Y));let H=.6-re*re-I*I-Te*Te-Ee*Ee;H<0?d=0:(H*=H,d=H*H*this.dot4(r[st],re,I,Te,Ee));let Be=.6-ye*ye-Re*Re-We*We-Me*Me;Be<0?f=0:(Be*=Be,f=Be*Be*this.dot4(r[je],ye,Re,We,Me));let he=.6-P*P-T*T-j*j-ne*ne;he<0?p=0:(he*=he,p=he*he*this.dot4(r[mt],P,T,j,ne));let _e=.6-me*me-pe*pe-ze*ze-Ce*Ce;return _e<0?_=0:(_e*=_e,_=_e*_e*this.dot4(r[nt],me,pe,ze,Ce)),27*(u+d+f+p+_)}};var eo=class s extends Dn{constructor(e,t,n,i,r,a,o){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=mm(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new bn(this.width,this.height,{type:On}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Wt({defines:Object.assign({},Ja.defines),uniforms:Fn.clone(Ja.uniforms),vertexShader:Ja.vertexShader,fragmentShader:Ja.fragmentShader,blending:on,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ol,this.normalMaterial.blending=on,this.pdMaterial=new Wt({defines:Object.assign({},Qa.defines),uniforms:Fn.clone(Qa.uniforms),vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Wt({defines:Object.assign({},$a.defines),uniforms:Fn.clone($a.uniforms),vertexShader:$a.vertexShader,fragmentShader:$a.fragmentShader,blending:on}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Wt({uniforms:Fn.clone(gs.uniforms),vertexShader:gs.vertexShader,fragmentShader:gs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Xl,blendDst:Vr,blendEquation:Zn,blendSrcAlpha:Wl,blendDstAlpha:Vr,blendEquationAlpha:Zn}),this.blendMaterial=new Wt({uniforms:Fn.clone(oc.uniforms),vertexShader:oc.vertexShader,fragmentShader:oc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Pu,blendSrc:Xl,blendDst:Vr,blendEquation:Zn,blendSrcAlpha:Wl,blendDstAlpha:Vr,blendEquationAlpha:Zn}),this.fsQuad=new Si(null),this.originalClearColor=new $e,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ir,this.depthTexture.format=os,this.depthTexture.type=as,this.normalRenderTarget=new bn(this.width,this.height,{minFilter:an,magFilter:an,type:On,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Dd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new lc,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new cs(i,e,e,Nn,fi);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}};eo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var gm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var jr=class s extends Dn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new $e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,a,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new bn(r,a,{type:On});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new bn(r,a,{type:On});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=gm;this.highPassUniforms=Fn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ue(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=gs;this.copyUniforms=Fn.clone(u.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ps,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $e,this.oldClearAlpha=1,this.basic=new zt,this.fsQuad=new Si(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};jr.BlurDirectionX=new ue(1,0);jr.BlurDirectionY=new ue(0,1);var bm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var cc=class extends Dn{constructor(){super();let e=bm;this.uniforms=Fn.clone(e.uniforms),this.material=new Ul({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Iu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Du?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ku?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ja&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function _m(s){let{characters:e,me:t,Vec3:n,Quat:i,stand:r,findPath:a,lineClear:o,pointClear:l,broadcast:c,hearts:u,focus:d,reward:f,save:p,hint:_,sameRoom:y}=s,b=()=>!1,m=null,w=!1,v=0,E=new Map,O=new Set,D=N=>{let ee=Math.max(0,Math.min(1,N));return ee*ee*(3-2*ee)},L=()=>[e.A,e.B],z=N=>[N.g.position.x,N.g.position.z],ie=(N,ee)=>Math.hypot(N[0]-ee[0],N[1]-ee[1]),M=(N,ee,Q)=>{let fe=Math.atan2(Math.sin(ee-N.g.rotation.y),Math.cos(ee-N.g.rotation.y));N.g.rotation.y+=fe*Q};function A(){E.forEach((N,ee)=>ee.quaternion.copy(N)),E.clear()}function Y(N){N.token=(N.token||0)+1,N.path=[],N.sonra=null,N.hedefYer=null}function K(N=!1){var Q;v++;let ee=m;m=null,w=!1,A();for(let fe of L())fe.hugLock=!1,Y(fe),fe.durum="ayakta",fe.oyna("Idle");N&&ee&&ee.owner===t.rol&&f(),ee&&(p(),(Q=ee.resolve)==null||Q.call(ee,N))}function J(N){E.has(N)||E.set(N,N.quaternion.clone())}function de(N,ee){let Q;return N.root.traverse(fe=>{!Q&&fe.isBone&&ee.includes(fe.name.toLowerCase().replace(/[^a-z0-9]/g,""))&&(Q=fe)}),Q}let Z=new Map;for(let N of L()){let ee=[];for(let[fe,be]of[["L","l"],["R","r"]]){let we=de(N,["upperarm"+be]),Ie=de(N,["lowerarm"+be,"forearm"+be]),re=de(N,["wrist"+be,"hand"+be]);we&&Ie&&re&&ee.push({side:fe,upper:we,lower:Ie,hand:re})}let Q=[];N.root.traverse(fe=>{fe.isBone&&/^(upperleg|lowerleg|foot|toes|thigh|shin)[lr]$/.test(fe.name.toLowerCase().replace(/[^a-z0-9]/g,""))&&Q.push({bone:fe,rest:fe.quaternion.clone()})}),Z.set(N,{arms:ee,legs:Q,head:de(N,["head"])})}function xe(N,ee,Q,fe){let be=N.getWorldPosition(new n),we=ee.getWorldPosition(new n).sub(be),Ie=Q.clone().sub(be);if(we.lengthSq()<1e-8||Ie.lengthSq()<1e-8)return;let re=N.getWorldQuaternion(new i),I=new i().setFromUnitVectors(we.normalize(),Ie.normalize()),Ee=N.parent.getWorldQuaternion(new i).invert().multiply(I.multiply(re));J(N),N.quaternion.slerp(Ee,fe),N.updateWorldMatrix(!1,!0)}function ae(N,ee,Q){let fe=Z.get(N);if(!fe||Q<=0)return;for(let{bone:re,rest:I}of fe.legs)J(re),re.quaternion.slerp(I,Q);N.g.updateWorldMatrix(!0,!0),ee.g.updateWorldMatrix(!0,!0);let be=ee.g.position.clone().sub(N.g.position);if(be.y=0,be.lengthSq()<1e-6)return;be.normalize();let we=new n(be.z,0,-be.x),Ie=Math.min(N.boy,ee.boy);for(let re of fe.arms){let I=re.side==="L"?1:-1,Te=re.upper.getWorldPosition(new n),Ee=re.lower.getWorldPosition(new n),ye=re.hand.getWorldPosition(new n),Re=Te.distanceTo(Ee),We=Ee.distanceTo(ye),Me=ee.g.position.clone().addScaledVector(be,Ie*.065).addScaledVector(we,I*Ie*.1);Me.y=ee.g.position.y+Ie*(N.rol==="A"?.64:.57);let P=Me.clone().sub(Te),T=Math.min(P.length(),(Re+We)*.97);P.normalize();let j=(Re*Re-We*We+T*T)/(2*Math.max(T,1e-5)),ne=Math.sqrt(Math.max(0,Re*Re-j*j)),me=we.clone().multiplyScalar(I).add(new n(0,-.8,0));me.addScaledVector(P,-me.dot(P)).normalize();let pe=Te.clone().addScaledVector(P,j).addScaledVector(me,ne);xe(re.upper,re.lower,pe,Q),xe(re.lower,re.hand,Me,Q)}if(fe.head){J(fe.head);let re=new i().setFromAxisAngle(new n(0,0,1),N.rol==="A"?-.065:.065);fe.head.quaternion.multiply(new i().slerp(re,Q))}}function V(N){return N&&typeof N.id=="string"&&N.id.length<100&&["A","B"].includes(N.actor)&&Number.isFinite(N.at)&&Number.isFinite(N.travel)&&N.travel>=0&&N.travel<25&&Array.isArray(N.path)&&N.path.length>=2&&N.path.length<=256&&N.path.every(ee=>Array.isArray(ee)&&ee.length===2&&ee.every(Q=>Number.isFinite(Q)&&Math.abs(Q)<160))&&Array.isArray(N.target)&&N.target.length===2&&N.target.every(ee=>Number.isFinite(ee)&&Math.abs(ee)<160)&&Math.abs(Date.now()-N.at)<3e4}function F(N,ee,Q){let fe=e[N.actor],be=e[N.actor==="A"?"B":"A"];for(let Ie of L())Y(Ie),Ie.hugLock=!0,Ie.durum="sariliyor",Ie.oyna(Ie===fe&&N.travel>.05?"Walking_A":"Idle");be.g.position.set(N.target[0],0,N.target[1]);let we=N.path.slice(1).map((Ie,re)=>ie(Ie,N.path[re]));m={plan:N,actor:fe,partner:be,owner:ee,resolve:Q,lengths:we,length:we.reduce((Ie,re)=>Ie+re,0),arrived:!1,effects:!1},O.add(N.id),O.size>100&&O.delete(O.values().next().value)}async function $(N){var fe;if(m||w)return!1;if(!b()&&!((fe=Z.get(N))!=null&&fe.arms.length))return _("Karakterin kol iskeleti bulunamad\u0131."),!1;let ee=N===e.A?e.B:e.A;if(y&&!y(N,ee))return _("Sar\u0131lmak i\xE7in \xF6nce ayn\u0131 odaya gelin \u{1F917}"),!1;w=!0;let Q=++v;L().forEach(be=>{Y(be),be.hugLock=!0});try{if(await Promise.all(L().map(r)),Q!==v)return!1;let be=z(N),we=z(ee),Ie=Math.atan2(be[0]-we[0],be[1]-we[1]),re=Math.min(N.boy,ee.boy)*.25,I=null;for(let Ee of[0,.45,-.45,.9,-.9,Math.PI/2,-Math.PI/2,Math.PI]){let ye=Ie+Ee,Re=[we[0]+Math.sin(ye)*re,we[1]+Math.cos(ye)*re];if(!l(...Re))continue;let We=[be,...a(be,Re)];if(ie(We[We.length-1],Re)>.08||We.some((P,T)=>T&&!o(We[T-1],P)))continue;let Me=We.slice(1).reduce((P,T,j)=>P+ie(We[j],T),0);(!I||Me<I.length)&&(I={path:We,length:Me})}if(!I)return K(),_("Sar\u0131lmak i\xE7in ikinizin de yan\u0131nda biraz bo\u015F alan olsun \u{1F917}"),!1;let Te={id:Date.now()+"-"+N.rol+"-"+Math.random().toString(36).slice(2,8),actor:N.rol,at:Date.now()+180,travel:I.length/1.8,path:I.path,target:we};return w=!1,await new Promise(Ee=>{F(Te,N.rol,Ee),c({t:"hug",plan:Te})})}catch{return Q===v&&K(),_("Sar\u0131lma ba\u015Flat\u0131lamad\u0131, tekrar deneyebilirsin."),!1}}async function oe(N,ee){if(!V(N)||N.actor!==ee||O.has(N.id)||m&&m.plan.id<N.id)return!1;(m||w)&&K(),w=!0;let Q=++v;L().forEach(fe=>{Y(fe),fe.hugLock=!0});try{return await Promise.all(L().map(r)),Q!==v?!1:(w=!1,F(N,null),!0)}catch{return Q===v&&K(),!1}}function ge(){if(A(),!m)return;let N=m,{plan:ee,actor:Q,partner:fe}=N,be=Math.max(0,(Date.now()-ee.at)/1e3),we=Math.min(1,be/Math.max(.001,ee.travel))*N.length,Ie=0;for(;Ie<N.lengths.length-1&&we>N.lengths[Ie];)we-=N.lengths[Ie++];let re=ee.path[Ie],I=ee.path[Ie+1],Te=N.lengths[Ie]?Math.min(1,we/N.lengths[Ie]):1;if(Q.g.position.set(re[0]+(I[0]-re[0])*Te,0,re[1]+(I[1]-re[1])*Te),be<ee.travel)M(Q,Math.atan2(I[0]-re[0],I[1]-re[1]),.2);else{N.arrived||(N.arrived=!0,b()?(Q.oyna("Hug",.3),fe.oyna("Hug",.3)):Q.oyna("Idle",.18));let Ee=Math.atan2(fe.g.position.x-Q.g.position.x,fe.g.position.z-Q.g.position.z);if(M(Q,Ee,.25),M(fe,Ee+Math.PI,.25),!N.effects&&be>=ee.travel+.65){N.effects=!0;let ye=(Q.g.position.x+fe.g.position.x)/2,Re=(Q.g.position.z+fe.g.position.z)/2;u(ye,Re,16),d(ye,Math.min(Q.boy,fe.boy)*.62,Re,4.4,.8,3.2)}}be>ee.travel+4.6&&K(!0)}function B(){if(!m&&window.__hugTest){let Q=window.__hugTest.w;ae(e.A,e.B,Q),ae(e.B,e.A,Q);return}if(!m||b())return;let N=(Date.now()-m.plan.at)/1e3-m.plan.travel-.25,ee=D(N/.85)*D((4.1-N)/.85);ae(m.actor,m.partner,ee),ae(m.partner,m.actor,ee)}return{request:$,receive:oe,beforeFrame:ge,afterFrame:B,cancel:()=>K(),get busy(){return!!m||w},get plan(){return(m==null?void 0:m.plan)||null}}}var to=new k;function ni(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;to.copy(e),to[n]=0,to.normalize();let c=.5*a/(a+o),u=1-to.angleTo(s)/l;return Math.sign(to[t])===1?u*c:o/(a+o)+c+c*(1-u)}var hc=class extends lt{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new k,l=new k,c=new k(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,_=new k,y=.5/i;for(let b=0,m=0;b<u.length;b+=3,m+=2)switch(o.fromArray(u,b),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),u[b+0]=c.x*Math.sign(o.x)+l.x*r,u[b+1]=c.y*Math.sign(o.y)+l.y*r,u[b+2]=c.z*Math.sign(o.z)+l.z*r,d[b+0]=l.x,d[b+1]=l.y,d[b+2]=l.z,Math.floor(b/p)){case 0:_.set(1,0,0),f[m+0]=ni(_,l,"z","y",r,n),f[m+1]=1-ni(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[m+0]=1-ni(_,l,"z","y",r,n),f[m+1]=1-ni(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[m+0]=1-ni(_,l,"x","z",r,e),f[m+1]=ni(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[m+0]=1-ni(_,l,"x","z",r,e),f[m+1]=1-ni(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[m+0]=1-ni(_,l,"x","y",r,e),f[m+1]=1-ni(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[m+0]=ni(_,l,"x","y",r,e),f[m+1]=1-ni(_,l,"y","x",r,t);break}}};function xm({dokuYukle:s,canvasTex:e}){let t={kumas:.45,ahsap:.9,mermer:1.1,dokuma:.5,jut:.6},n=e(256,256,(V,F,$)=>{V.fillStyle="#ececea",V.fillRect(0,0,F,$);for(let oe=0;oe<$;oe+=4)for(let ge=0;ge<F;ge+=4){let B=225+Math.random()*30-((ge/4+oe/4)%2?8:0);V.fillStyle=`rgb(${B},${B},${B-2})`,V.fillRect(ge,oe,4,4)}for(let oe=0;oe<600;oe++)V.fillStyle=`rgba(255,255,255,${Math.random()*.25})`,V.fillRect(Math.random()*F,Math.random()*$,1+Math.random()*3,1)});n.wrapS=n.wrapT=en;let i=e(256,256,(V,F,$)=>{V.fillStyle="#c9a979",V.fillRect(0,0,F,$);for(let oe=0;oe<$;oe+=8)for(let ge=0;ge<F;ge+=8){let B=oe/8%2?4:0;V.fillStyle=`hsl(35,${35+Math.random()*10}%,${55+Math.random()*12}%)`,V.beginPath(),V.ellipse(ge+B+4,oe+4,4.2,3,.6,0,7),V.fill(),V.strokeStyle="rgba(90,60,30,.25)",V.stroke()}});i.wrapS=i.wrapT=en;let r={kumas:()=>s("kumas"),ahsap:()=>s("ahsap"),mermer:()=>s("mermer"),dokuma:()=>n,jut:()=>i},a={};function o(V,F="#ffffff",$={}){let oe=V+F+JSON.stringify($);return a[oe]||(a[oe]=new Ye(Object.assign({color:F,roughness:V==="mermer"?.2:V==="ahsap"?.55:.92,metalness:0,map:V?r[V]():null},$))),a[oe]}function l(V,F){let $=V.attributes.position,oe=V.attributes.normal,ge=new Float32Array($.count*2);for(let B=0;B<$.count;B++){let N=Math.abs(oe.getX(B)),ee=Math.abs(oe.getY(B)),Q=Math.abs(oe.getZ(B)),fe,be;ee>=N&&ee>=Q?(fe=$.getX(B),be=$.getZ(B)):N>=Q?(fe=$.getZ(B),be=$.getY(B)):(fe=$.getX(B),be=$.getY(B)),ge[B*2]=fe/F,ge[B*2+1]=be/F}return V.setAttribute("uv",new Xt(ge,2)),V}function c(V,F,$,oe,ge,B,N,ee,Q,fe,be){let we=ge>0?new hc(F,$,oe,3,Math.min(ge,F/2,$/2,oe/2)):new lt(F,$,oe);B&&l(we,t[B]);let Ie=new le(we,o(B,N,be));return Ie.position.set(ee,Q,fe),Ie.castShadow=!0,Ie.receiveShadow=!0,V.add(Ie),Ie}function u(V,F,$,oe,ge,B,N,ee,Q,fe=24,be){let we=new Ct(F,$,oe,fe);ge&&l(we,t[ge]);let Ie=new le(we,o(ge,B,be));return Ie.position.set(N,ee,Q),Ie.castShadow=!0,Ie.receiveShadow=!0,V.add(Ie),Ie}let d=["","#232323",{roughness:.35,metalness:.6}],f=["","#c8a46a",{roughness:.3,metalness:.85}];function p(V,F,$,oe,ge="ahsap",B=.1,N=.028){for(let ee of[-1,1])for(let Q of[-1,1])if(ge==="ahsap"){let fe=u(V,N,N*.7,oe,"ahsap","#ffffff",ee*(F/2-B),oe/2,Q*($/2-B),10);fe.rotation.z=ee*.06,fe.rotation.x=-Q*.06}else u(V,N*.7,N*.7,oe,...d.slice(0,2),ee*(F/2-B),oe/2,Q*($/2-B),8,d[2])}let _=V=>V==="boucle"?["kumas","#ffffff"]:["dokuma",V];function y(V,F,$="ahsap"){let oe=new tt,[ge,B]=_(F),N=V*.74+.36,ee=1,Q=.18;c(oe,N,.2,ee,.05,ge,B,0,.23,0),c(oe,N,.62,.24,.08,ge,B,0,.5,-ee/2+.12);for(let be of[-1,1])c(oe,Q,.5,ee,.08,ge,B,be*(N/2-Q/2),.38,0);let fe=(N-Q*2)/V;for(let be=0;be<V;be++){let we=-N/2+Q+fe*(be+.5);c(oe,fe-.02,.16,ee-.3,.07,ge,B,we,.41,.1);let Ie=c(oe,fe-.06,.44,.2,.09,ge,B,we,.7,-ee/2+.32);Ie.rotation.x=-.12}return p(oe,N-.1,ee-.1,.13,$),oe}function b(V){let F=new tt,[$,oe]=_(V),ge=2.6,B=1,N=1.75,ee=.18;c(F,ge,.2,B,.05,$,oe,0,.23,0),c(F,B,.2,N-B,.05,$,oe,ge/2-B/2,.23,B/2+(N-B)/2),c(F,ge,.62,.24,.08,$,oe,0,.5,-B/2+.12),c(F,ee,.5,B,.08,$,oe,-ge/2+ee/2,.38,0);for(let Q=0;Q<3;Q++){let fe=-ge/2+ee+.72*(Q+.5);c(F,.7,.16,B-.3,.07,$,oe,fe,.41,.1);let be=c(F,.66,.44,.2,.09,$,oe,fe,.7,-B/2+.32);be.rotation.x=-.12}return c(F,B-.1,.16,N-.32,.07,$,oe,ge/2-B/2+.02,.41,(N-.3)/2+.05),c(F,.45,.14,.45,.07,$,"#c8b8a2",-ge/2+.6,.55,.05).rotation.z=.3,p(F,ge-.1,B-.1,.13,"siyah"),F}function m(V){let F=new tt,[$,oe]=_(V);c(F,.95,.26,.9,.12,$,oe,0,.27,0),c(F,.95,.55,.26,.13,$,oe,0,.62,-.32);for(let ge of[-1,1])c(F,.2,.38,.82,.1,$,oe,ge*.4,.5,0);return c(F,.58,.14,.62,.07,$,oe,0,.44,.08),p(F,.85,.8,.14,"ahsap",.08,.025),F}function w(V){let F=new tt,[$,oe]=_(V),ge=u(F,.32,.34,.44,$,oe,0,.22,0,32);return ge.geometry=l(new Ct(.32,.34,.44,32,1),t[$]),F}function v(V){let F=new tt;if(V==="iskandinav"){p(F,.44,.44,.46,"ahsap",.04,.022),c(F,.46,.05,.46,.02,null,"#f2efe9",0,.48,0,{roughness:.45});let $=c(F,.46,.3,.04,.02,null,"#f2efe9",0,.78,-.22,{roughness:.45});$.rotation.x=-.12;for(let oe of[-1,1]){let ge=u(F,.014,.014,.36,"ahsap","#ffffff",oe*.17,.66,-.2,8);ge.rotation.x=-.12}}else p(F,.44,.44,.46,"siyah",.04,.022),c(F,.48,.1,.48,.04,"dokuma","#d9cfc1",0,.5,0),c(F,.48,.42,.08,.04,"dokuma","#d9cfc1",0,.78,-.22).rotation.x=-.1;return F}function E(V){let F=new tt;return V==="mese"?(c(F,1.7,.05,.9,.02,"ahsap","#ffffff",0,.76,0),p(F,1.6,.8,.74,"ahsap",.08,.032)):(u(F,.6,.6,.04,"mermer","#ffffff",0,.77,0,48),u(F,.07,.09,.72,...f.slice(0,2),0,.38,0,16,f[2]),u(F,.32,.34,.04,...f.slice(0,2),0,.02,0,32,f[2])),F}function O(V){let F=new tt;return V==="mermer"?(u(F,.5,.5,.04,"mermer","#ffffff",0,.38,0,48),u(F,.36,.36,.34,"ahsap","#ffffff",0,.18,0,32)):(c(F,1.2,.05,.62,.015,"ahsap","#ffffff",0,.38,0),c(F,1.1,.03,.54,.01,"ahsap","#ffffff",0,.12,0),p(F,1.18,.6,.36,"siyah",.04,.02)),F}function D(){let V=new tt;c(V,1.9,.42,.42,.02,"ahsap","#e9e2da",0,.33,0);for(let $=0;$<3;$++)c(V,.6,.36,.01,.005,"ahsap","#ffffff",-.62+$*.62,.33,.212);p(V,1.85,.38,.12,"siyah",.06,.02),c(V,1.36,.78,.04,.01,null,"#111114",0,.95,-.05,{roughness:.2,metalness:.3}),c(V,.3,.03,.18,.01,null,"#1a1a1a",0,.555,-.05);let F=new le(new _n(1.3,.72),new zt({color:"#f3e3e7"}));return F.position.set(0,.95,-.028),V.add(F),F.userData.oran=1.3/.72,V.userData.foto=F,V}let L=V=>e(512,384,(F,$,oe)=>{if(V==="berber"){F.fillStyle="#efe8dc",F.fillRect(0,0,$,oe);for(let ge=0;ge<9e3;ge++)F.fillStyle=`rgba(255,255,255,${Math.random()*.4})`,F.fillRect(Math.random()*$,Math.random()*oe,2,2);F.strokeStyle="#3a3330",F.lineWidth=3;for(let ge=-oe;ge<$+oe;ge+=64)F.beginPath(),F.moveTo(ge,0),F.lineTo(ge+oe*.7,oe),F.stroke(),F.beginPath(),F.moveTo(ge+oe*.7,0),F.lineTo(ge,oe),F.stroke()}else if(V==="geo"){F.fillStyle="#e9ddcf",F.fillRect(0,0,$,oe);let ge=["#c07a5a","#d9a58a","#8f9d7c","#e7c9a9"];for(let B=0;B<14;B++){F.fillStyle=ge[B%4],F.beginPath();let N=Math.random()*$,ee=Math.random()*oe,Q=30+Math.random()*90;B%3?F.arc(N,ee,Q/2,0,B%2?Math.PI:7):F.rect(N,ee,Q,Q*.6),F.fill()}for(let B=0;B<6e3;B++)F.fillStyle=`rgba(255,255,255,${Math.random()*.25})`,F.fillRect(Math.random()*$,Math.random()*oe,2,2)}else{F.fillStyle="#9d9a96",F.fillRect(0,0,$,oe);for(let ge=0;ge<16e3;ge++){let B=130+Math.random()*60;F.fillStyle=`rgba(${B},${B},${B-4},.6)`,F.fillRect(Math.random()*$,Math.random()*oe,1,3)}}F.strokeStyle="rgba(0,0,0,.08)",F.lineWidth=8,F.strokeRect(4,4,$-8,oe-8)});function z(V){let F=new tt;if(V==="jut"){let ge=new le(new Ct(1.05,1.05,.02,48),o("jut","#ffffff",{roughness:1}));return l(ge.geometry,t.jut),ge.position.y=.011,ge.receiveShadow=!0,F.add(ge),F}let $=L(V),oe=new le(new lt(2.6,.02,1.85),[o(null,"#d8d0c4"),o(null,"#d8d0c4"),new Ye({map:$,roughness:1}),o(null,"#d8d0c4"),o(null,"#d8d0c4"),o(null,"#d8d0c4")]);return oe.position.y=.011,oe.receiveShadow=!0,F.add(oe),F}function ie(V){let F=new tt,[$,oe]=_(V);c(F,1.9,.32,2.2,.06,$,oe,0,.26,0),c(F,2,1.15,.14,.07,$,oe,0,.58,-1.1),c(F,1.78,.2,2.05,.08,"dokuma","#f7f4ef",0,.5,.05),c(F,1.82,.1,1.3,.05,"dokuma","#f2ede6",0,.62,.42),c(F,1.86,.12,.45,.05,"dokuma","#b9a58c",0,.64,.82);for(let ge of[-1,1])c(F,.7,.14,.36,.07,"dokuma","#ffffff",ge*.42,.66,-.82);return p(F,1.85,2.1,.1,"ahsap",.1,.03),F}function M(){let V=new tt;u(V,.17,.19,.05,"mermer","#ffffff",0,.025,0,32);let F=new hs(new k(0,.05,0),new k(.1,2.4,0),new k(1.05,1.75,0)),$=new le(new Us(F,40,.016,8),o(...f.slice(0,2),f[2]));$.castShadow=!0,V.add($);let oe=new le(new Un(.24,24,12,0,Math.PI*2,0,Math.PI/2),o(...f.slice(0,2),Object.assign({side:Qt},f[2])));oe.position.set(1.05,1.62,0),oe.castShadow=!0,V.add(oe);let ge=new le(new Un(.06,12,8),new zt({color:"#fff3d6"}));return ge.position.set(1.05,1.6,0),V.add(ge),V}function A(){let V=new tt;u(V,.24,.19,.42,null,"#efece6",0,.21,0,28,{roughness:.6}),u(V,.22,.22,.02,null,"#4a3a2c",0,.41,0,24);let F=new Oi;F.moveTo(0,0),F.bezierCurveTo(-.22,.05,-.26,.3,-.02,.42),F.lineTo(0,.38),F.bezierCurveTo(.26,.3,.22,.05,0,0);let $=new Ga(F,10),oe=new Ye({color:"#2f6b3a",roughness:.6,side:Qt});for(let ge=0;ge<11;ge++){let B=ge/11*Math.PI*2+Math.random()*.3,N=.55+Math.random()*.55,ee=Math.sin(B)*.25*N,Q=Math.cos(B)*.25*N,fe=.4+N,be=new le(new Ct(.008,.01,N,5),o(null,"#3d7a40"));be.position.set(ee/2,.4+N/2,Q/2),be.lookAt(ee,fe,Q),be.rotateX(Math.PI/2),V.add(be);let we=new le($,oe);we.position.set(ee,fe,Q),we.rotation.set(-.9-Math.random()*.4,B,0),we.scale.setScalar(1.1+Math.random()*.5),we.castShadow=!0,V.add(we)}return V}function Y(){let V=new tt,F=1.2,$=1.9,oe=.36;for(let B of[-1,1])c(V,.04,$,oe,.01,"ahsap","#ffffff",B*(F/2-.02),$/2,0);for(let B=0;B<5;B++)c(V,F,.035,oe,.01,"ahsap","#ffffff",0,.05+B*.45,0);let ge=["#d9cfc1","#8f9d7c","#c07a5a","#3c4a6b","#efe8dc","#b9a58c"];for(let B=0;B<4;B++){let N=-F/2+.08,ee=.07+B*.45,Q=4+Math.floor(Math.random()*6);for(let fe=0;fe<Q&&N<F/2-.25;fe++){let be=.03+Math.random()*.03,we=.22+Math.random()*.1;c(V,be,we,.22,.004,null,ge[(B*3+fe)%ge.length],N+be/2,ee+we/2,0),N+=be+.005}B%2?u(V,.06,.045,.2,null,"#f2efe9",F/2-.18,ee+.1,0,16,{roughness:.4}):c(V,.16,.12,.16,.03,null,"#c8b8a2",F/2-.2,ee+.06,0)}return V}function K(){let V=new tt,F=new Oi,$=.62,oe=1.75;F.moveTo(-$/2,0),F.lineTo(-$/2,oe-$/2),F.absarc(0,oe-$/2,$/2,Math.PI,0,!0),F.lineTo($/2,0),F.lineTo(-$/2,0);let ge=new le(new Or(F,{depth:.04,bevelEnabled:!1,curveSegments:24}),o(...f.slice(0,2),f[2]));ge.position.set(0,.02,-.02),ge.rotation.x=-.08,ge.castShadow=!0,V.add(ge);let B=F.clone(),N=new le(new Ga(B,24),new Ye({color:"#dfe7ea",metalness:1,roughness:.04}));return N.scale.set(.9,.95,1),N.position.set(0,.06,.025),N.rotation.x=-.08,V.add(N),V}let J=(V,F=0)=>({act:"otur",yerler:V,yon:F}),de=.35,Z={md_kanepe3_bej:["\u{1F6CB}\uFE0F","Kanepe \xB7 bej bukle",140,"Modern",J([[-.74,de],[0,de],[.74,de]])],md_kanepe3_gri:["\u{1F6CB}\uFE0F","Kanepe \xB7 a\xE7\u0131k gri",140,"Modern",J([[-.74,de],[0,de],[.74,de]])],md_kanepe2_yesil:["\u{1F6CB}\uFE0F","\u0130kili kanepe \xB7 ada\xE7ay\u0131",110,"Modern",J([[-.37,de],[.37,de]])],md_kanepe2_krem:["\u{1F6CB}\uFE0F","\u0130kili kanepe \xB7 krem",110,"Modern",J([[-.37,de],[.37,de]])],md_kose:["\u{1F6CB}\uFE0F","K\xF6\u015Fe koltuk \xB7 grej",190,"Modern",J([[-.76,de],[-.04,de],[.68,de]])],md_berjer_krem:["\u{1F4BA}","Berjer \xB7 krem",60,"Modern",J([[0,.3]])],md_berjer_terra:["\u{1F4BA}","Berjer \xB7 kiremit",60,"Modern",J([[0,.3]])],md_puf:["\u26AA","Puf \xB7 bukle",25,"Modern",J([[0,.41]])],md_sandalye_isk:["\u{1FA91}","\u0130skandinav sandalye",30,"Modern",J([[0,.36]])],md_sandalye_kumas:["\u{1FA91}","Kuma\u015F sandalye",35,"Modern",J([[0,.36]])],md_masa_mese:["\u{1F37D}\uFE0F","Me\u015Fe yemek masas\u0131",90,"Modern",{masa:!0}],md_masa_mermer:["\u{1F37D}\uFE0F","Mermer yuvarlak masa",100,"Modern",{masa:!0}],md_sehpa_mermer:["\u26AA","Mermer sehpa",45,"Modern",{}],md_sehpa_mese:["\u{1F7EB}","Me\u015Fe sehpa",40,"Modern",{}],md_tv:["\u{1F4FA}","TV \xFCnitesi (foto\u011Fraflar\u0131m\u0131z)",80,"Modern",{act:"foto"}],md_hali_berber:["\u{1F7EB}","Berber hal\u0131",45,"Modern",{zemin:!0}],md_hali_geo:["\u{1F7E7}","Geometrik hal\u0131",45,"Modern",{zemin:!0}],md_hali_gri:["\u2B1C","Gri yumu\u015Fak hal\u0131",40,"Modern",{zemin:!0}],md_hali_jut:["\u{1F7E4}","Yuvarlak j\xFCt hal\u0131",35,"Modern",{zemin:!0}],md_yatak:["\u{1F6CF}\uFE0F","Modern yatak",160,"Modern",{act:"yat",yerler:[[-.42,-.47],[.42,-.47]],yon:0}],md_lambader:["\u{1F4A1}","Ark lambader",45,"Modern",{act:"lamba"}],md_monstera:["\u{1FAB4}","Monstera",30,"Modern",{}],md_kitaplik:["\u{1F4DA}","Me\u015Fe kitapl\u0131k",70,"Modern",{}],md_ayna:["\u{1FA9E}","Ayakl\u0131 ayna",40,"Modern",{}]},xe={md_kanepe3_bej:()=>y(3,"boucle"),md_kanepe3_gri:()=>y(3,"#b9b8b4","siyah"),md_kanepe2_yesil:()=>y(2,"#9aa887"),md_kanepe2_krem:()=>y(2,"#f3ece2"),md_kose:()=>b("#c9c1b5"),md_berjer_krem:()=>m("#f1e9dc"),md_berjer_terra:()=>m("#c98262"),md_puf:()=>w("boucle"),md_sandalye_isk:()=>v("iskandinav"),md_sandalye_kumas:()=>v("kumas"),md_masa_mese:()=>E("mese"),md_masa_mermer:()=>E("mermer"),md_sehpa_mermer:()=>O("mermer"),md_sehpa_mese:()=>O("mese"),md_tv:D,md_hali_berber:()=>z("berber"),md_hali_geo:()=>z("geo"),md_hali_gri:()=>z("gri"),md_hali_jut:()=>z("jut"),md_yatak:()=>ie("#cfc4b4"),md_lambader:M,md_monstera:A,md_kitaplik:Y,md_ayna:K},ae=[["md_hali_berber",.6,-1.55,0],["md_kanepe3_bej",.6,-2.9,0],["md_sehpa_mermer",.6,-1.45,0],["md_berjer_krem",2.75,-1.35,-Math.PI/2],["md_puf",-1.35,-1.25,0],["md_lambader",-1.2,-3.05,0],["md_monstera",3.9,-2.95,0],["md_kitaplik",-4.2,-1.3,Math.PI/2],["md_tv",.6,1.45,Math.PI],["md_masa_mese",-2.55,1.45,0],["md_sandalye_isk",-3,.8,0],["md_sandalye_isk",-2.1,.8,0],["md_sandalye_isk",-3,2.1,Math.PI],["md_sandalye_isk",-2.1,2.1,Math.PI],["md_ayna",3.95,.6,-Math.PI/2]];return{KAT:Z,YAP:xe,SALON:ae}}var ke={w:9,d:7},mM=1.04,gM=1.4,bM={otur:[0,-.41],yat:[-.015,.174],yer:[0,-.04]},_M={otur:.11,yat:.12,yer:.1},xM={otur:.46,yat:.6,yer:.12},yM=.75,ym={A:1.78,B:1.65},Gs=.25,vm=(window.__leHiz||1)*1.9,vM=.25,MM=()=>{var e;let s=(e=window.__leSaat)!=null?e:Sm();return s>=21||s<6},Sm=()=>{try{return+new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Istanbul",hour:"2-digit",hourCycle:"h23"}).format(new Date)}catch{return new Date().getHours()}},jt=s=>document.querySelector(s);function Le(s,e,...t){let n=document.createElement(s);for(let i in e||{})i==="class"?n.className=e[i]:i.startsWith("on")?n[i]=e[i]:n.setAttribute(i,e[i]);return t.flat().forEach(i=>i!=null&&i!==!1&&n.append(i)),n}function Mn(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"),s,e);let i=new Cl(n);return i.colorSpace=$t,i.anisotropy=4,i}var SM=(s,e,t)=>{let n=(e-s+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),s+n*t};function EM(s){return Mn(512,512,(e,t,n)=>{e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255,255,255,.35)";for(let i=0;i<t;i+=64)for(let r=0;r<n;r+=64){let a=r/64%2?32:0;e.save(),e.translate(i+a+32,r+32),e.beginPath(),e.moveTo(0,-9),e.bezierCurveTo(7,-9,8,0,0,7),e.bezierCurveTo(-8,0,-7,-9,0,-9),e.fill(),e.restore()}})}function Mm(s){return Mn(512,384,(e,t,n)=>{let i=s>=21||s<6,r=s>=17&&s<21,a=s>=6&&s<9,o=e.createLinearGradient(0,0,0,n);if(i?(o.addColorStop(0,"#120a24"),o.addColorStop(1,"#3a1d3f")):r?(o.addColorStop(0,"#6b4fa0"),o.addColorStop(.55,"#f08a6c"),o.addColorStop(1,"#ffd29a")):a?(o.addColorStop(0,"#a7d3f2"),o.addColorStop(1,"#ffe2c9")):(o.addColorStop(0,"#8fc8f0"),o.addColorStop(1,"#e8f4ff")),e.fillStyle=o,e.fillRect(0,0,t,n),i){for(let l=0;l<70;l++)e.fillStyle=`rgba(255,240,220,${.4+Math.random()*.6})`,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.7,Math.random()*1.6+.4,0,7),e.fill();e.fillStyle="#fff4d6",e.beginPath(),e.arc(t*.75,n*.25,22,0,7),e.fill()}else e.fillStyle=r?"rgba(255,220,170,.9)":"rgba(255,250,220,.95)",e.beginPath(),e.arc(t*.72,r?n*.7:n*.28,r?34:26,0,7),e.fill(),e.fillStyle="rgba(255,255,255,.75)",[[.2,.3],[.45,.2],[.3,.45]].forEach(([l,c])=>{e.beginPath(),e.ellipse(t*l,n*c,46,14,0,0,7),e.fill()});e.fillStyle=i?"#1d1838":r?"#7a5a8c":"#5b9cc4",e.fillRect(0,n*.74,t,n*.26),e.fillStyle=i?"rgba(255,230,180,.35)":"rgba(255,255,255,.35)";for(let l=0;l<18;l++)e.fillRect(Math.random()*t,n*(.76+Math.random()*.2),18+Math.random()*30,2);e.fillStyle=i?"#120d22":r?"#4b3560":"#7d9db3",e.beginPath(),e.moveTo(0,n*.74);for(let l=0;l<=t;l+=32)e.lineTo(l,n*(.7+Math.sin(l*.03)*.02));e.lineTo(t,n*.74),e.fill()})}function Ld(){let s=new tt,e=new le(new Mi([[0,0],[.14,0],[.17,.08],[.13,.26],[.09,.34],[.11,.38]].map(i=>new ue(i[0],i[1])),24),new Ye({color:"#f4f1ec",roughness:.25}));e.castShadow=!0,s.add(e);let t=["#C9233F","#E8577A","#C9233F","#F7A8BE","#E8577A"],n=new Ye({color:"#4E8B57",roughness:.8});return t.forEach((i,r)=>{let a=r/t.length*Math.PI*2,o=.05,l=.25+Math.random()*.15,c=.45+Math.random()*.12,u=new hs(new k(0,.3,0),new k(Math.cos(a)*o,.3+c*.6,Math.sin(a)*o),new k(Math.cos(a)*l*.5,.3+c,Math.sin(a)*l*.5));s.add(new le(new Us(u,8,.012,5),n));let d=new le(new Mi([[0,-.02],[.05,0],[.075,.06],[.07,.12],[.045,.16],[.05,.17]].map(f=>new ue(f[0],f[1])),16),new Ye({color:i,roughness:.45,side:Qt}));d.position.copy(u.getPoint(1)),d.castShadow=!0,s.add(d)}),s}function wM(){let s=new tt,e=new le(new lt(.62,.14,.48),new Ye({color:"#8a5a3c",roughness:.5}));e.position.y=.07,e.castShadow=!0,s.add(e);let t=new le(new Ct(.19,.19,.015,32),new Ye({color:"#1b1214",roughness:.25}));t.position.set(-.06,.15,0),s.add(t);let n=new le(new Ct(.06,.06,.017,24),new Ye({color:"#C9233F"}));n.position.copy(t.position),s.add(n);let i=new le(new lt(.03,.03,.3),new Ye({color:"#d9d2c8",metalness:.6,roughness:.3}));return i.position.set(.22,.17,-.02),i.rotation.y=.3,s.add(i),s.userData.plak=[t,n],s}function TM(s){let e=new tt,t=new le(new lt(.34,.26,.34),new Ye({color:s,roughness:.45}));t.position.y=.13,t.castShadow=!0,e.add(t);let n=new Ye({color:"#fff4d6",roughness:.4}),i=new le(new lt(.36,.27,.06),n);i.position.y=.13,e.add(i);let r=new le(new lt(.06,.27,.36),n);r.position.y=.13,e.add(r);let a=new tt;a.position.y=.26,e.add(a);let o=new le(new lt(.38,.06,.38),new Ye({color:s,roughness:.45}));return o.position.y=.03,o.castShadow=!0,a.add(o),[-1,1].forEach(l=>{let c=new le(new Fr(.06,.02,8,16),n);c.position.set(l*.05,.1,0),c.rotation.y=Math.PI/2,c.rotation.x=l*.6,a.add(c)}),e.userData.kapak=a,e}function AM(){let s=new tt,e=new Ye({color:"#d9a441",metalness:.85,roughness:.28}),t=new le(new Mi([[0,0],[.12,0],[.13,.03],[.1,.06],[.16,.14],[.17,.3],[.12,.42],[.07,.44],[.07,.48],[0,.48]].map(o=>new ue(o[0],o[1])),24),e);t.castShadow=!0,s.add(t);let n=new le(new Mi([[0,0],[.07,0],[.1,.05],[.09,.12],[.05,.15],[.05,.17],[0,.17]].map(o=>new ue(o[0],o[1])),18),new Ye({color:"#fbf6ef",roughness:.3}));n.position.y=.48,n.castShadow=!0,s.add(n),[[-1,0],[1,0]].forEach(([o])=>{let l=new le(new Fr(.05,.012,6,12,Math.PI),e);l.position.set(o*.17,.3,0),l.rotation.z=o*Math.PI/2,s.add(l)});let i=new le(new Ct(.012,.012,.1,6),e);i.rotation.x=Math.PI/2,i.position.set(0,.12,.17),s.add(i);let r=new le(new Ct(.32,.3,.62,20),new Ye({color:"#8a5a3c",roughness:.6}));r.position.y=.31,r.castShadow=!0;let a=new tt;return a.add(r),s.position.y=.62,a.add(s),a.userData.buhar=new k(0,1.3,0),a}function RM(){let s=new tt,e=new le(new Mi([[0,0],[.035,0],[.032,.03],[.024,.06],[.032,.1],[.036,.11]].map(i=>new ue(i[0],i[1])),16),new Ye({color:"#ffffff",transparent:!0,opacity:.35,roughness:.05})),t=new le(new Mi([[0,.005],[.032,.005],[.029,.03],[.022,.06],[.029,.092],[0,.092]].map(i=>new ue(i[0],i[1])),16),new Ye({color:"#a8321a",transparent:!0,opacity:.85,roughness:.2})),n=new le(new Ct(.06,.055,.01,18),new Ye({color:"#C9233F",roughness:.4}));return s.add(n,t,e),s}function CM(){let s=new tt,e=new Ye({color:"#34131F",roughness:.4,metalness:.3}),t=new Ye({color:"#d9a441",metalness:.8,roughness:.3});[0,2.09,4.19].forEach(r=>{let a=new le(new Ct(.02,.025,1.05,6),e);a.position.set(Math.sin(r)*.22,.5,Math.cos(r)*.22),a.rotation.set(Math.cos(r)*.22,0,-Math.sin(r)*.22),a.castShadow=!0,s.add(a)});let n=new le(new Ct(.07,.055,.9,16),t);n.position.set(0,1.15,.1),n.rotation.x=-1.05,n.castShadow=!0,s.add(n);let i=new le(new Ct(.08,.08,.08,16),e);return i.position.set(0,1.42,.48),i.rotation.x=-1.05,s.add(i),s}function PM(){let s=new tt,e=new le(new Ct(.2,.15,.32,18),new Ye({color:"#c9714a",roughness:.8}));e.position.y=.16,e.castShadow=!0,s.add(e);let t=Ld();return t.children[0].visible=!1,t.position.y=.06,t.scale.setScalar(1.3),s.add(t),s}function IM(s){let e=new tt,t=new le(new Ct(.035,.045,1.1,8),new Ye({color:"#3a2a2e",roughness:.5}));t.position.y=.55,t.castShadow=!0,e.add(t);let n=new le(new Un(.11,16,12),new Ye({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:s?2.2:.15}));if(n.position.y=1.16,e.add(n),s){let i=new ei("#ffcf7a",2.2,4,1.8);i.position.y=1.15,e.add(i)}return e}function DM(s){return Mn(2048,640,(e,t,n)=>{let i=s>=21||s<6,r=s>=17&&s<21,a=e.createLinearGradient(0,0,0,n);if(i?(a.addColorStop(0,"#0d0820"),a.addColorStop(.7,"#2c1838"),a.addColorStop(1,"#3a1d3f")):r?(a.addColorStop(0,"#5b4096"),a.addColorStop(.55,"#f08a6c"),a.addColorStop(1,"#ffd29a")):(a.addColorStop(0,"#7fbde9"),a.addColorStop(1,"#e6f3ff")),e.fillStyle=a,e.fillRect(0,0,t,n),i){for(let f=0;f<260;f++)e.fillStyle=`rgba(255,240,220,${.3+Math.random()*.7})`,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.55,Math.random()*1.8+.3,0,7),e.fill();e.fillStyle="#fff4d6",e.beginPath(),e.arc(t*.8,n*.18,30,0,7),e.fill()}else e.fillStyle=r?"rgba(255,214,160,.95)":"rgba(255,252,230,.95)",e.beginPath(),e.arc(t*.3,r?n*.62:n*.2,r?52:36,0,7),e.fill();let o=n*.78;e.fillStyle=i?"#16122b":r?"#7a5a8c":"#4f93bd",e.fillRect(0,o,t,n-o);let l=i?"#1a1128":r?"#3b2850":"#6f8ea6";e.fillStyle=l;let c=o-2;e.beginPath(),e.moveTo(0,c);for(let f=0;f<=t;f+=12)e.lineTo(f,c-18-Math.sin(f*.011)*10-Math.sin(f*.037)*6);e.lineTo(t,o),e.lineTo(0,o),e.fill();let u=(f,p,_)=>{e.beginPath(),e.arc(f,c-30,p,Math.PI,0),e.fill(),e.fillRect(f-p,c-30,p*2,30);for(let y of[-1,1])for(let b=0;b<_;b++){let m=f+y*(p+14+b*22);e.fillRect(m-3,c-30-p*1.9,6,p*1.9+30),e.beginPath(),e.moveTo(m-5,c-30-p*1.9),e.lineTo(m,c-30-p*2.3),e.lineTo(m+5,c-30-p*1.9),e.fill()}[-.55,.55].forEach(y=>{e.beginPath(),e.arc(f+y*p*1.3,c-22,p*.45,Math.PI,0),e.fill()})};u(t*.2,46,2),u(t*.44,34,1),u(t*.86,40,2);let d=t*.64;if(e.fillRect(d-16,c-150,32,150),e.beginPath(),e.moveTo(d-22,c-150),e.lineTo(d,c-210),e.lineTo(d+22,c-150),e.fill(),e.fillRect(d-22,c-156,44,10),e.strokeStyle=l,e.lineWidth=5,e.beginPath(),e.moveTo(t*.02,o-8),e.quadraticCurveTo(t*.12,o-60,t*.24,o-8),e.stroke(),i||r){for(let f=0;f<160;f++)e.fillStyle=`rgba(255,${200+Math.random()*40},140,${.5+Math.random()*.5})`,e.fillRect(Math.random()*t,c-8-Math.random()*40,2.4,2.4);for(let f=0;f<60;f++)e.fillStyle="rgba(255,214,150,.35)",e.fillRect(Math.random()*t,o+6+Math.random()*(n-o-10),10+Math.random()*30,2)}else{e.fillStyle="rgba(255,255,255,.4)";for(let f=0;f<30;f++)e.fillRect(Math.random()*t,o+6+Math.random()*(n-o-10),14+Math.random()*30,2)}e.fillStyle=i?"#2a1d3a":"#fffaf6",e.beginPath(),e.moveTo(t*.53,o+26),e.lineTo(t*.6,o+26),e.lineTo(t*.595,o+36),e.lineTo(t*.535,o+36),e.fill(),e.fillRect(t*.555,o+14,18,12)})}async function Em(s){var cf,hf;let e=s.el,t=(s.me||"misafir").toLowerCase(),n=s.names||{},i=s.sb||null,r=h=>(n[h]||"").toLocaleLowerCase("tr")==="beyza"?"B":n[h]?"A":null,a=r(t)||"A",o={A:"Ahmet",B:"Beyza"},l=new yl({antialias:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(2,devicePixelRatio||1)),l.shadowMap.enabled=!0,l.shadowMap.type=ci,l.outputColorSpace=$t,l.toneMapping=ja,l.toneMappingExposure=MM()?1:.92,e.append(l.domElement);let c=new Dr,u=(cf=window.__leSaat)!=null?cf:Sm(),d=u>=21||u<6,f=u>=17&&u<21;c.background=new $e(d?"#2a1420":"#FDF1F3"),document.body.classList.toggle("le-gece",d),document.body.style.background=d?"#2a1420":"#FDF1F3",c.fog=new vl(c.background,24,44);let p=new rn(32,1,.1,100);p.position.set(11.5,12.5,15.5);let _=new tc(p,l.domElement);_.target.set(0,.6,1.6),_.enablePan=!1,_.enableDamping=!0,_.dampingFactor=.08,_.minDistance=4,_.maxDistance=26,_.minPolarAngle=.55,_.maxPolarAngle=1.2,_.minAzimuthAngle=-.15,_.maxAzimuthAngle=1.55,_.rotateSpeed=.6;let y=new Pr(l);c.environment=y.fromScene(new nc,.04).texture,c.environmentIntensity=d?.2:f?.3:.35;let b=new Bl(d?"#8d7bb8":"#fff4f0",d?"#3a2030":"#e9c9b8",d?.6:.45);c.add(b);let m=new Fs(d?"#9db0ff":f?"#ffb27a":"#fff1de",d?.35:f?1.5:1.75);{let h=Math.max(6,Math.min(20,u)),g=(h-6)/14;m.position.set(-7+g*12,d?9:4+Math.sin(g*Math.PI)*7,-7)}m.target.position.set(0,0,1.6),c.add(m.target),m.castShadow=!0,m.shadow.mapSize.set(2048,2048),m.shadow.bias=-4e-4,m.shadow.normalBias=.03,m.shadow.radius=5,m.shadow.blurSamples=12,Object.assign(m.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:40}),c.add(m);let w=new Fs("#ffe6ee",d?.2:.5);w.position.set(8,6,6),c.add(w);let v=new ei("#ffc98a",0,7,1.6);v.castShadow=!0,v.shadow.mapSize.set(512,512),c.add(v);let E=new Os;function O(h,g=1,x=1,S=0){let R=E.load(s.base+"doku/"+h+".webp?v=1");return R.colorSpace=$t,R.wrapS=R.wrapT=en,R.anisotropy=8,R.repeat.set(g,x),R.channel=S,R}let D={ahsap:{tile:.9,mat:()=>({map:O("ahsap",1,1,1),roughness:.55})},kumas:{tile:.45,mat:()=>({map:O("kumas",1,1,1),roughness:.95})},yastik:{tile:.5,mat:()=>({map:O("hali",1,1,1),roughness:.95})},hali:{tile:1.6,mat:()=>({map:O("hali",1,1,1),roughness:1})},mermer:{tile:1.2,mat:()=>({map:O("mermer",1,1,1),roughness:.22})},beyaz:{tile:1,mat:()=>({color:"#f3f1ec",roughness:.35})},inoks:{tile:1,mat:()=>({color:"#e4e6e6",metalness:.45,roughness:.3})},pirinc:{tile:1,mat:()=>({color:"#c8a46a",metalness:.8,roughness:.35})}},L={},z=h=>L[h]||(L[h]=new Ye(Object.assign({metalness:0},D[h].mat()))),ie=/^(couch|couch_pillows|armchair|armchair_pillows|chair_A|chair_B|chair_C|chair_stool)$/;function M(h){if(/^rug_/.test(h))return()=>"hali";if(/^m_kitchen(counter|cabinet)/.test(h))return(x,S)=>S>=13?x===13?"mermer":x===12?"pirinc":x===10||x>=14?"beyaz":null:null;if(/^m_fridge/.test(h))return(x,S)=>(x===4||x===5)&&S>=4&&S<=6?"inoks":null;if(/^m_(table_round|chair)/.test(h))return(x,S)=>x>=12&&x<=13&&(S<=3||S>=12&&S<=14)?"ahsap":null;if(h.startsWith("m_"))return null;let g=ie.test(h);return(x,S,R)=>S<=3&&x<=9?"ahsap":S<=3&&(x===10||x===11)?"beyaz":g&&S>=4&&S<=7&&x<=7?(x<=3?"O":"B")===R?"kumas":"yastik":null}function A(h){let g=M(h.name);if(!g)return;h.updateMatrixWorld(!0);let x=new it().copy(h.matrixWorld).invert();h.traverse(S=>{if(!S.isMesh||S.userData.dokulu||Array.isArray(S.material))return;S.userData.dokulu=!0;let R=S.geometry,U=R.attributes.uv,G=R.attributes.position,W=R.attributes.normal;if(!U||!W)return;let ve=R.index?Array.from(R.index.array):[...Array(G.count).keys()],Pe=ve.length,Ue=Pt=>[Math.floor(U.getX(Pt)*16),Math.floor(U.getY(Pt)*16)],Je=0,bt=0;for(let Pt=0;Pt<Pe;Pt+=3){let[Yn,Rn]=Ue(ve[Pt]);Rn>=4&&Rn<=7&&Yn<=7&&(Yn<=3?Je++:bt++)}let Gt=Je>=bt?"O":"B",Oe=[];for(let Pt=0;Pt<Pe;Pt+=3){let[Yn,Rn]=Ue(ve[Pt]);Oe.push(g(Yn,Rn,Gt))}let rt=[...new Set(Oe.filter(Boolean))];if(!rt.length)return;let ot=new it().multiplyMatrices(x,S.matrixWorld),at=new pt().getNormalMatrix(ot),Et=new Float32Array(G.count*2),Ft=new k,At=new k,sn=new Array(G.count);for(let Pt=0;Pt<Pe;Pt+=3){let Yn=Oe[Pt/3];if(Yn)for(let Rn=0;Rn<3;Rn++)sn[ve[Pt+Rn]]=Yn}for(let Pt=0;Pt<G.count;Pt++){if(!sn[Pt])continue;let Yn=D[sn[Pt]].tile;Ft.fromBufferAttribute(G,Pt).applyMatrix4(ot),At.fromBufferAttribute(W,Pt).applyMatrix3(at);let Rn=Math.abs(At.x),Ai=Math.abs(At.y),uf=Math.abs(At.z),Mo,So;Ai>=Rn&&Ai>=uf?(Mo=Ft.x,So=Ft.z):Rn>=uf?(Mo=Ft.z,So=Ft.y):(Mo=Ft.x,So=Ft.y),Et[Pt*2]=Mo/Yn,Et[Pt*2+1]=So/Yn}let vn=R.clone();vn.setAttribute("uv1",new Xt(Et,2));let ri=[null,...rt],Gn=[];vn.clearGroups(),ri.forEach((Pt,Yn)=>{let Rn=Gn.length;for(let Ai=0;Ai<Pe;Ai+=3)Oe[Ai/3]===Pt&&Gn.push(ve[Ai],ve[Ai+1],ve[Ai+2]);Gn.length>Rn&&vn.addGroup(Rn,Gn.length-Rn,Yn)}),vn.setIndex(Gn),S.geometry=vn,S.material=[S.material,...rt.map(z)]})}let Y=xm({dokuYukle:O,canvasTex:Mn}),K=O("parke",ke.w/1.8,ke.d/1.8),J=new le(new lt(ke.w,.2,ke.d),new Ye({map:K,roughness:.5,metalness:0}));J.position.y=-.1,J.receiveShadow=!0,J.name="zemin",c.add(J);let de=new Ye({roughness:.9}),Z=3.2,xe=new le(new lt(ke.w+.3,Z,.3),de.clone());xe.material.map=O("duvar",(ke.w+.3)/2.2,Z/2.2),xe.position.set(0,Z/2-.2,-ke.d/2-.15),xe.receiveShadow=!0,c.add(xe);let ae=new le(new lt(.3,Z,ke.d),de.clone());ae.material.map=O("duvar",ke.d/2.2,Z/2.2),ae.position.set(-ke.w/2-.15,Z/2-.2,0),ae.receiveShadow=!0,c.add(ae);let V=new Ye({color:"#fffaf6",roughness:.6}),F=new le(new lt(ke.w,.16,.06),V);F.position.set(0,.08,-ke.d/2+.03),c.add(F);let $=new le(new lt(.06,.16,ke.d),V);$.position.set(-ke.w/2+.03,.08,0),c.add($);{let h=new le(new lt(ke.w+.3,.12,.14),V);h.position.set(0,Z-.26,-ke.d/2+.02),c.add(h);let g=new le(new lt(.14,.12,ke.d),V);g.position.set(-ke.w/2+.02,Z-.26,0),c.add(g)}let oe=new tt;oe.position.set(1.2,1.55,-ke.d/2+.02),c.add(oe);let ge=new le(new _n(2.2,1.5),new zt({map:Mm(u)}));oe.add(ge);let B=new Ye({color:"#ffffff",roughness:.5});[[0,.78,2.4,.1],[0,-.78,2.5,.14],[-1.15,0,.1,1.66],[1.15,0,.1,1.66],[0,0,.06,1.5],[0,0,2.2,.06]].forEach(([h,g,x,S])=>{let R=new le(new lt(x,S,.1),B);R.position.set(h,g,.03),R.castShadow=!0,oe.add(R)});let N=[],ee=new Ye({color:"#e6dccd",roughness:.95,side:Qt});[-1.45,1.45].forEach(h=>{let g=new le(new Ct(.16,.22,2.1,10,1,!0,0,Math.PI),ee);g.position.set(h,-.15,.12),g.rotation.y=Math.PI,g.castShadow=!0,N.push(g),oe.add(g)});let Q=new le(new lt(.08,2.2,1.1),new Ye({color:"#9b6a4a",roughness:.6}));Q.position.set(-ke.w/2+.05,1.1,2.2),c.add(Q);let fe=new le(new Un(.05,12,12),new Ye({color:"#e6c36a",metalness:.8,roughness:.3}));fe.position.set(-ke.w/2+.12,1.05,1.8),c.add(fe);let be=Mn(64,256,(h,g,x)=>{let S=h.createLinearGradient(0,0,0,x);S.addColorStop(0,"rgba(255,236,200,.9)"),S.addColorStop(1,"rgba(255,236,200,0)"),h.fillStyle=S,h.fillRect(0,0,g,x)}),we=new le(new _n(2.1,3.4),new zt({map:be,transparent:!0,opacity:d?.05:f?.2:.13,blending:Ps,depthWrite:!1,side:Qt,color:f?"#ffb27a":d?"#9db0ff":"#fff1de"}));we.position.set(1.2,1,-ke.d/2+1.3),we.rotation.x=-.75,c.add(we);let Ie=70,re=new Vt,I=new Float32Array(Ie*3);for(let h=0;h<Ie;h++)I[h*3]=.2+Math.random()*2,I[h*3+1]=.3+Math.random()*2.2,I[h*3+2]=-ke.d/2+.3+Math.random()*2.2;re.setAttribute("position",new Xt(I,3)),c.add(new Ur(re,new ks({color:d?"#c9d4ff":"#fff3dc",size:.035,transparent:!0,opacity:d?.35:.7,depthWrite:!1,blending:Ps})));let Te=new $l;Te.setMeshoptDecoder(pm);let Ee={"ahmet3.glb?v=1":"ahmet.glb?v=2","beyza3.glb?v=1":"beyza.glb?v=2"},[ye,Re,We]=await Promise.all(["mobilya.glb?v=3","ahmet3.glb?v=1","beyza3.glb?v=1"].map(h=>Te.loadAsync(s.base+h).catch(g=>Ee[h]?Te.loadAsync(s.base+Ee[h]):Promise.reject(g)))),Me={};ye.scene.children.slice().forEach(h=>{Me[h.name]=h,A(h),h.scale.multiplyScalar(yM)});let P=ke.d/2,T=ke.d/2+3.6,j=[{id:"salon",ad:"Salon",em:"\u{1F6CB}\uFE0F",ox:0,fiyat:0},{id:"yatak",ad:"Yatak odas\u0131",em:"\u{1F6CF}\uFE0F",ox:40,fiyat:150,duvar:"#E6DDF6",yer:"yatak odas\u0131nda"},{id:"mutfak",ad:"Mutfak",em:"\u{1F373}",ox:80,fiyat:200,duvar:"#FFF0D9",yer:"mutfakta"},{id:"teras",ad:"Teras",em:"\u{1F319}",ox:120,fiyat:250,yer:"terasta"}];j[0].yer="salonda";let ne=h=>j.find(g=>Math.abs(h-g.ox)<20)||j[0],me={x0:-ke.w/2,x1:120+ke.w/2,z0:-ke.d/2,z1:T},pe=new Set,ze=(h,g=0)=>({act:"otur",yerler:h,yon:g}),Ce={...Y.KAT,kanvas_foto:["\u{1F5BC}\uFE0F","B\xFCy\xFCk kanvas foto\u011Fraf\u0131m\u0131z",45,"Bizim",{act:"foto",asili:!0,zemin:!0,kucuk:!0}],polaroid_ip:["\u{1F4F8}","Polaroid ipi (5 foto\u011Fraf)",40,"Bizim",{act:"foto",asili:!0,zemin:!0,kucuk:!0}],tarih_cerceve:["\u{1F4C5}","26 Ocak \xE7er\xE7evesi",25,"Bizim",{asili:!0,zemin:!0,kucuk:!0}],harita_cerceve:["\u{1F5FA}\uFE0F","Bizim \u0130stanbul haritas\u0131",30,"Bizim",{asili:!0,zemin:!0,kucuk:!0}],plak_duvar:["\u{1F4BF}","Bizim \u015Fark\u0131m\u0131z pla\u011F\u0131",25,"Bizim",{act:"muzik",asili:!0,zemin:!0,kucuk:!0}],harf_yastik:["\u{1F171}\uFE0F","B & A minderleri",30,"Bizim",{act:"yer",yerler:[[-.45,0],[.45,0]],yon:0}],kupa_sehpa:["\u2615","\u0130simli kupalar",30,"Bizim",{}],paspas:["\u{1F6AA}",'"Bizim Ev" paspas\u0131',15,"Bizim",{zemin:!0}],mum_set:["\u{1F56F}\uFE0F","Mum tepsisi",20,"Bizim",{kucuk:!0}],balon_kalp:["\u{1F388}","Kalp balonlar",20,"Bizim",{kucuk:!0,zemin:!0}],lale_buket:["\u{1F490}","B\xFCy\xFCk lale buketi",35,"Bizim",{kucuk:!0}],couch_pillows:["\u{1F6CB}\uFE0F","Yast\u0131kl\u0131 koltuk",120,"Oturma",ze([[-.55,.2],[.55,.2]])],couch:["\u{1F6CB}\uFE0F","Sade koltuk",90,"Oturma",ze([[-.55,.2],[.55,.2]])],armchair_pillows:["\u{1F4BA}","Yast\u0131kl\u0131 berjer",60,"Oturma",ze([[0,.2]])],armchair:["\u{1F4BA}","Berjer",45,"Oturma",ze([[0,.2]])],chair_A_wood:["\u{1FA91}","Ah\u015Fap sandalye",20,"Oturma",ze([[0,-.05]],Math.PI)],chair_A:["\u{1FA91}","Sandalye",20,"Oturma",ze([[0,-.05]],Math.PI)],chair_B_wood:["\u{1FA91}","Oval ah\u015Fap sandalye",25,"Oturma",ze([[0,-.05]],Math.PI)],chair_B:["\u{1FA91}","Oval sandalye",25,"Oturma",ze([[0,-.05]],Math.PI)],chair_C:["\u{1FA91}","Modern sandalye",30,"Oturma",ze([[0,-.05]],Math.PI)],chair_stool_wood:["\u{1FAB5}","Ah\u015Fap tabure",12,"Oturma",ze([[0,0]])],chair_stool:["\u{1FAB5}","Tabure",12,"Oturma",ze([[0,0]])],pillow_A:["\u{1F7EA}","Yer minderi",10,"Oturma",{act:"yer",yerler:[[0,0]],yon:0}],pillow_B:["\u{1F7E6}","Yer minderi (mavi)",10,"Oturma",{act:"yer",yerler:[[0,0]],yon:0}],bed_double_A:["\u{1F6CF}\uFE0F","\xC7ift ki\u015Filik yatak",150,"Yatak",{act:"yat",yerler:[[-.45,-.15],[.45,-.15]],yon:0}],bed_double_B:["\u{1F6CF}\uFE0F","\xC7ift ki\u015Filik yatak (B)",150,"Yatak",{act:"yat",yerler:[[-.45,-.15],[.45,-.15]],yon:0}],bed_single_A:["\u{1F6CF}\uFE0F","Tek ki\u015Filik yatak",80,"Yatak",{act:"yat",yerler:[[0,-.15]],yon:0}],bed_single_B:["\u{1F6CF}\uFE0F","Tek ki\u015Filik yatak (B)",80,"Yatak",{act:"yat",yerler:[[0,-.15]],yon:0}],sehpa_lale:["\u{1F337}","Laleli sehpa",40,"Masa",{}],table_low:["\u{1F7EB}","Sehpa",30,"Masa",{}],table_small:["\u{1F7EB}","K\xFC\xE7\xFCk masa",25,"Masa",{}],table_medium:["\u{1F37D}\uFE0F","Yemek masas\u0131",50,"Masa",{}],table_medium_long:["\u{1F37D}\uFE0F","Uzun masa",70,"Masa",{}],shelf_B_large_decorated:["\u{1F4DA}","Dolu kitapl\u0131k",90,"Depolama",{}],shelf_B_small_decorated:["\u{1F4DA}","K\xFC\xE7\xFCk kitapl\u0131k",45,"Depolama",{}],shelf_A_big:["\u{1F5C4}\uFE0F","B\xFCy\xFCk raf",60,"Depolama",{}],shelf_A_small:["\u{1F5C4}\uFE0F","K\xFC\xE7\xFCk raf",30,"Depolama",{}],cabinet_medium_decorated:["\u{1F5C3}\uFE0F","Dolap",60,"Depolama",{}],cabinet_small_decorated:["\u{1F5C3}\uFE0F","Komodin",35,"Depolama",{}],lamp_standing:["\u{1F4A1}","Lambader",35,"S\xFCs",{act:"lamba"}],pikap:["\u{1F3B5}","Pikap",50,"S\xFCs",{act:"muzik"}],pictureframe_standing_A:["\u{1F5BC}\uFE0F","Ayakl\u0131 \xE7er\xE7eve",15,"S\xFCs",{act:"foto"}],pictureframe_standing_B:["\u{1F5BC}\uFE0F","Ayakl\u0131 \xE7er\xE7eve (B)",15,"S\xFCs",{act:"foto"}],book_set:["\u{1F4D6}","Kitap y\u0131\u011F\u0131n\u0131",8,"S\xFCs",{}],cactus_medium_A:["\u{1F335}","Kakt\xFCs",15,"Bitki",{}],cactus_medium_B:["\u{1F335}","Kakt\xFCs (B)",15,"Bitki",{}],cactus_small_A:["\u{1F335}","Minik kakt\xFCs",10,"Bitki",{}],cactus_small_B:["\u{1F335}","Minik kakt\xFCs (B)",10,"Bitki",{}],rug_rectangle_stripes_A:["\u{1F7E5}","\xC7izgili hal\u0131",40,"Hal\u0131",{zemin:!0}],rug_rectangle_stripes_B:["\u{1F7E5}","\xC7izgili hal\u0131 (B)",40,"Hal\u0131",{zemin:!0}],rug_rectangle_A:["\u{1F7E7}","Hal\u0131",35,"Hal\u0131",{zemin:!0}],rug_rectangle_B:["\u{1F7E7}","Hal\u0131 (B)",35,"Hal\u0131",{zemin:!0}],rug_oval_A:["\u{1F7E3}","Oval hal\u0131",35,"Hal\u0131",{zemin:!0}],rug_oval_B:["\u{1F7E3}","Oval hal\u0131 (B)",35,"Hal\u0131",{zemin:!0}],m_fridge_A_decorated:["\u{1F9CA}","Buzdolab\u0131",80,"Mutfak",{act:"buzdolabi",s:.8}],m_fridge_B:["\u{1F9CA}","Sade buzdolab\u0131",70,"Mutfak",{act:"buzdolabi",s:.8}],ocak:["\u{1F525}","Ocak",70,"Mutfak",{act:"pisir"}],m_kitchencounter_sink_backsplash:["\u{1F6B0}","Eviye",50,"Mutfak",{s:.8}],m_kitchencounter_straight_A_decorated:["\u{1F9C2}","Dolu tezg\xE2h",45,"Mutfak",{s:.8}],m_kitchencounter_straight_B_backsplash:["\u{1F7EB}","Tezg\xE2h",35,"Mutfak",{s:.8}],m_kitchencounter_straight_A_backsplash:["\u{1F7EB}","Tezg\xE2h (A)",35,"Mutfak",{s:.8}],m_kitchencabinet:["\u{1F5C4}\uFE0F","\xDCst dolap",30,"Mutfak",{s:.8,duvar:!0,zemin:!0}],semaver:["\u{1FAD6}","Semaver",30,"Mutfak",{act:"cay"}],m_table_round_A_small:["\u{1F37D}\uFE0F","Yuvarlak masa",45,"Mutfak",{s:.75,masa:!0}],m_dishrack_plates:["\u{1F37D}\uFE0F","Tabakl\u0131k",15,"Mutfak",{s:.6}],m_crate_tomatoes:["\u{1F345}","Domates kasas\u0131",12,"Mutfak",{s:.4}],m_crate_onions:["\u{1F9C5}","So\u011Fan kasas\u0131",12,"Mutfak",{s:.4}],teleskop:["\u{1F52D}","Teleskop",60,"Teras",{act:"yildiz"}],saksi_lale:["\u{1F337}","Saks\u0131da lale",20,"Bitki",{}],fener_ayak:["\u{1F3EE}","Ayakl\u0131 fener",25,"Teras",{}]},Ge={yatak:[["bed_double_B",0,-1.9,0],["cabinet_small_decorated",-2.05,-2.9,0],["cabinet_small_decorated",2.05,-2.9,0],["lamp_standing",3.4,-2.9,0],["rug_oval_B",0,.6,0],["armchair_pillows",3.3,.9,-Math.PI/2],["shelf_B_small_decorated",-4.15,-.6,Math.PI/2],["pillow_A",-2.4,1.6,0],["pillow_B",-1.6,2.1,0],["cactus_medium_B",4,2.9,0],["saksi_lale",-3.9,2.9,0],["pictureframe_standing_B",3.9,-1.6,-Math.PI/2]],mutfak:[["m_fridge_A_decorated",-3.55,-2.7,0],["m_kitchencounter_sink_backsplash",-1.95,-2.75,0],["m_kitchencounter_straight_A_decorated",-.35,-2.75,0],["ocak",1.25,-2.75,0],["m_kitchencounter_straight_B_backsplash",2.85,-2.75,0],["m_kitchencabinet",-1.95,-3.5,0],["m_kitchencabinet",-.35,-3.5,0],["m_kitchencabinet",2.85,-3.5,0],["semaver",3.85,-1.2,-Math.PI/2],["m_table_round_A_small",.6,.9,0],["chair_A_wood",.6,1.75,0],["chair_A_wood",.6,.05,Math.PI],["rug_rectangle_B",.6,.9,0],["m_crate_tomatoes",-3.9,1.6,0],["m_crate_onions",-3.9,2.6,0],["cactus_small_A",3.95,2.9,0]],teras:[["rug_rectangle_stripes_B",0,.3,0],["m_table_round_A_small",0,.2,0],["chair_B_wood",0,1.05,0],["chair_B_wood",0,-.65,Math.PI],["teleskop",3,-2.2,-.6],["saksi_lale",-3.6,-2.8,0],["saksi_lale",-2.6,-2.95,0],["cactus_medium_A",3.9,2.8,0],["fener_ayak",-3.8,2.6,0],["fener_ayak",3.9,-.2,0],["pillow_A",-2,1.8,0],["pillow_B",-1.2,2.3,0]]},ft=()=>({v:1,harcanan:0,toplanan:0,depo:[],hediyeler:[],bahce:Array.from({length:8},()=>({})),esyalar:[{id:"e1",t:"rug_rectangle_stripes_A",x:.6,z:.7,r:0},{id:"e2",t:"rug_oval_A",x:-2.6,z:-1.6,r:0},{id:"e3",t:"couch_pillows",x:.6,z:-1.95,r:0},{id:"e4",t:"sehpa_lale",x:.6,z:.55,r:0},{id:"e5",t:"armchair_pillows",x:3.25,z:.3,r:-Math.PI/2},{id:"e6",t:"bed_double_A",x:-2.9,z:-1.9,r:0},{id:"e7",t:"shelf_B_large_decorated",x:-4.15,z:.6,r:Math.PI/2},{id:"e8",t:"lamp_standing",x:2.9,z:-2.9,r:0},{id:"e9",t:"cabinet_medium_decorated",x:3.6,z:-2.95,r:0},{id:"e10",t:"pikap",x:-1.2,z:-3,r:0},{id:"e11",t:"cactus_medium_A",x:3.95,z:2.9,r:0},{id:"e12",t:"cactus_small_B",x:4.05,z:1.7,r:0},{id:"e13",t:"table_medium",x:-2.5,z:2.3,r:0},{id:"e14",t:"chair_A_wood",x:-2.5,z:1.3,r:0},{id:"e15",t:"chair_A_wood",x:-2.5,z:3.3,r:Math.PI}]}),Se=(window.__MANIFEST||[]).filter(h=>h.kind!=="video"&&/\.(jpe?g|png|webp)\.bin$/i.test(h.src||"")),Ve=new Os,ct=(hf=window.__leFotoBas)!=null?hf:Math.floor(Math.random()*Math.max(1,Se.length));async function st(h){if(!Se.length||!s.decUrl)return;let g=Se[ct++%Se.length];try{let x=await s.decUrl(String(g.src).replace(/^enc:/,""));Ve.load(x,S=>{S.colorSpace=$t;let R=h.userData.oran||1,U=S.image.width/S.image.height;S.repeat.set(Math.min(1,R/U),Math.min(1,U/R)),S.offset.set((1-S.repeat.x)/2,(1-S.repeat.y)/2),h.material.map&&h.material.map.dispose(),h.material.map=S,h.material.color.set("#ffffff"),h.material.needsUpdate=!0,h.userData.tarih=g.date})}catch{}}function je(h){h.updateMatrixWorld(!0);let g=new it().copy(h.matrixWorld).invert(),x=new cn().setFromObject(h).applyMatrix4(g),S=x.getSize(new k),R=x.getCenter(new k),U=S.x<S.z?"x":"z",G=U==="x"?S.z:S.x,W=S.y,ve=new le(new _n(G*.72,W*.72),new Ye({color:"#f3e3e7",roughness:.55}));return ve.userData.oran=G/W,U==="x"?(ve.position.set(x.max.x+.004,R.y,R.z),ve.rotation.y=Math.PI/2):ve.position.set(R.x,R.y,x.max.z+.004),h.add(ve),h.userData.foto=ve,st(ve),ve}function mt(h,g,x,S,R){let U=Me[h].clone(!0);return U.position.set(g,R,x),U.rotation.y=S,U.traverse(G=>{G.isMesh&&(G.castShadow=!0)}),c.add(U),U}let nt=[mt("pictureframe_large_A",-1,-ke.d/2+.1,0,1.5),mt("pictureframe_medium",-ke.w/2+.1,-.4,Math.PI/2,1.5),mt("pictureframe_small_A",-2,-ke.d/2+.1,0,1.75),mt("pictureframe_small_B",-ke.w/2+.1,.6,Math.PI/2,2.15)].filter(Boolean);nt.forEach(h=>{je(h),h.userData.act="foto",h.userData.id="duvar"+nt.indexOf(h),h.userData.ad=h.userData.id});let ut=h=>h==="salon"||!!(ce&&ce.odalar&&ce.odalar[h]),H=[];Q.userData={act:"kapi",id:"kapi-salon",ad:"kapi-salon"},H.push(Q);function Be(h){return Mn(512,512,(g,x,S)=>{if(h==="mutfak"){let U=x/8;for(let G=0;G<8;G++)for(let W=0;W<8;W++)g.fillStyle=(G+W)%2?"#f5ebe0":"#d97b5f",g.fillRect(G*U,W*U,U,U);g.strokeStyle="rgba(0,0,0,.08)",g.lineWidth=2;for(let G=0;G<=8;G++)g.beginPath(),g.moveTo(G*U,0),g.lineTo(G*U,S),g.stroke(),g.beginPath(),g.moveTo(0,G*U),g.lineTo(x,G*U),g.stroke()}else if(h==="teras"){let U=S/10;for(let G=0;G<10;G++){g.fillStyle=`hsl(25,${32+Math.random()*8}%,${52+Math.random()*8}%)`,g.fillRect(0,G*U,x,U-4),g.fillStyle="rgba(60,30,20,.35)",g.fillRect(0,G*U+U-4,x,4);for(let W=0;W<6;W++)g.fillStyle="rgba(90,50,30,.15)",g.fillRect(Math.random()*x,G*U+Math.random()*U,40+Math.random()*80,1.5)}}else{g.fillStyle="#efe4dc",g.fillRect(0,0,x,S);for(let R=0;R<5e3;R++)g.fillStyle=`rgba(${150+Math.random()*60},${120+Math.random()*50},${150+Math.random()*60},.12)`,g.fillRect(Math.random()*x,Math.random()*S,2,2)}})}function he(h){if(h.kuruldu||h.id==="salon"){h.kuruldu=!0;return}h.kuruldu=!0;let g=new tt;g.position.x=h.ox,c.add(g),h.g=g;let x;h.id==="mutfak"?x=O("mzemin",ke.w/2.4,ke.d/2.4):(x=Be(h.id),x.wrapS=x.wrapT=en,x.repeat.set(1.6,1.3));let S=new le(new lt(ke.w,.2,ke.d),new Ye({map:x,roughness:h.id==="mutfak"?.35:.8}));if(S.position.y=-.1,S.receiveShadow=!0,g.add(S),pe.add(S),h.id!=="teras"){let R=EM(h.duvar);R.wrapS=R.wrapT=en;let U=h.id==="mutfak"?3.4:Z,G=h.id==="mutfak",W=new le(new lt(ke.w+.3,U,.3),new Ye({map:G?O("fayans",(ke.w+.3)/1.4,U/1.4):R,roughness:G?.25:.9}));G||W.material.map.repeat.set(3,1.1),W.position.set(0,U/2-.2,-ke.d/2-.15),W.receiveShadow=!0,g.add(W);let ve=R.clone();ve.repeat.set(2.4,1.1),ve.needsUpdate=!0;let Pe=new le(new lt(.3,U,ke.d),new Ye({map:G?O("fayans",ke.d/1.4,U/1.4):ve,roughness:G?.25:.9}));Pe.position.set(-ke.w/2-.15,U/2-.2,0),Pe.receiveShadow=!0,g.add(Pe),[[ke.w,.16,.06,0,.08,-ke.d/2+.03],[.06,.16,ke.d,-ke.w/2+.03,.08,0],[ke.w+.3,.12,.14,0,U-.26,-ke.d/2+.02],[.14,.12,ke.d,-ke.w/2+.02,U-.26,0]].forEach(([Oe,rt,ot,at,Et,Ft])=>{let At=new le(new lt(Oe,rt,ot),V);At.position.set(at,Et,Ft),g.add(At)});let Ue=new tt;g.add(Ue),h.id==="mutfak"?(Ue.position.set(-ke.w/2+.02,1.6,-.4),Ue.rotation.y=Math.PI/2):Ue.position.set(2.6,1.7,-ke.d/2+.02),Ue.add(new le(new _n(1.8,1.3),new zt({map:Mm(u)}))),[[0,.68,2,.1],[0,-.68,2.1,.14],[-.95,0,.1,1.46],[.95,0,.1,1.46],[0,0,.06,1.3]].forEach(([Oe,rt,ot,at])=>{let Et=new le(new lt(ot,at,.1),B);Et.position.set(Oe,rt,.03),Ue.add(Et)});let Je=new Ye({color:h.id==="yatak"?"#9C7BD3":"#ddd2c0",roughness:.9,side:Qt});[-1.2,1.2].forEach(Oe=>{let rt=new le(new Ct(.14,.2,1.8,10,1,!0,0,Math.PI),Je);rt.position.set(Oe,-.1,.12),rt.rotation.y=Math.PI,N.push(rt),Ue.add(rt)});let bt=new le(new lt(.08,2.2,1.1),new Ye({color:"#9b6a4a",roughness:.6}));bt.position.set(h.ox-ke.w/2+.05,1.1,2.2),c.add(bt),bt.userData={act:"kapi",id:"kapi-"+h.id,ad:"kapi-"+h.id},H.push(bt);let Gt=fe.clone();Gt.position.x=h.ox-ke.w/2+.12,c.add(Gt),h.id==="yatak"&&[[-.75,2.05,"pictureframe_medium"],[.75,2.05,"pictureframe_medium"]].forEach(([Oe,rt,ot])=>{let at=Me[ot].clone(!0);at.position.set(h.ox+Oe,rt,-ke.d/2+.1),c.add(at),je(at),at.userData.act="foto",at.userData.id="duvar-y"+Oe,at.userData.ad=at.userData.id,nt.push(at)})}else{let R=new Ye({color:"#8a5a3c",roughness:.6}),U=new Ye({color:"#cfe8ff",transparent:!0,opacity:.22,roughness:.05}),G=(Oe,rt,ot,at)=>{let Et=Math.hypot(ot-Oe,at-rt),Ft=Math.atan2(ot-Oe,at-rt),At=Math.round(Et/1.1);for(let ri=0;ri<=At;ri++){let Gn=new le(new lt(.08,1,.08),R);Gn.position.set(Oe+(ot-Oe)*ri/At,.5,rt+(at-rt)*ri/At),Gn.castShadow=!0,g.add(Gn)}let sn=new le(new lt(.1,.08,Et),R);sn.position.set((Oe+ot)/2,1.02,(rt+at)/2),sn.rotation.y=Ft,g.add(sn);let vn=new le(new lt(.02,.8,Et),U);vn.position.set((Oe+ot)/2,.5,(rt+at)/2),vn.rotation.y=Ft,g.add(vn)};G(-ke.w/2+.05,-ke.d/2+.05,ke.w/2-.05,-ke.d/2+.05),G(-ke.w/2+.05,-ke.d/2+.05,-ke.w/2+.05,1.3);let W=DM(u),ve=new le(new _n(52,20),new zt({map:W,fog:!1}));ve.position.set(4,-.2,-15),g.add(ve);let Pe=new le(new _n(46,20),new zt({map:W,fog:!1}));Pe.position.set(-17,-.2,4),Pe.rotation.y=Math.PI/2,g.add(Pe);let Ue=new tt;Ue.position.set(-ke.w/2+.1,0,2.4),g.add(Ue),[[0,1.15,-.6,.1,2.3,.1],[0,1.15,.6,.1,2.3,.1],[0,2.3,0,.1,.1,1.3]].forEach(([Oe,rt,ot,at,Et,Ft])=>{let At=new le(new lt(at,Et,Ft),R);At.position.set(Oe,rt,ot),Ue.add(At)});let Je=new le(new lt(.06,2.2,1.1),new Ye({color:"#cfe8ff",transparent:!0,opacity:.35}));Je.position.set(h.ox-ke.w/2+.1,1.1,2.4),c.add(Je),Je.userData={act:"kapi",id:"kapi-teras",ad:"kapi-teras"},H.push(Je);let bt=(Oe,rt)=>{let ot=new le(new Ct(.04,.05,2.6,8),R);ot.position.set(Oe,1.3,rt),ot.castShadow=!0,g.add(ot)},Gt=(Oe,rt)=>{for(let at=0;at<=16;at++){let Et=at/16,Ft=Oe[0]+(rt[0]-Oe[0])*Et,At=Oe[1]+(rt[1]-Oe[1])*Et,sn=2.5-Math.sin(Et*Math.PI)*.45,vn=new le(new Un(.045,8,6),new Ye({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:d||f?3:.4}));vn.position.set(Ft,sn,At),g.add(vn)}};if(bt(-4.2,-3.2),bt(4.2,-3.2),bt(-4.2,3.2),Gt([-4.2,-3.2],[4.2,-3.2]),Gt([-4.2,-3.2],[-4.2,3.2]),d||f){let Oe=new ei("#ffcf7a",2.5,9,1.6);Oe.position.set(0,2.3,-2.6),g.add(Oe)}}}let _e=null;function Xe(){return _e||(_e=Te.loadAsync(s.base+"mutfak.glb?v=1").then(h=>{h.scene.children.slice().forEach(g=>{Me[g.name]=g,A(g)})})),_e}let Ae=h=>new Ye(Object.assign({roughness:.7},h)),dt=(h,g)=>`${h} ${g}px "Young Serif", Georgia, "Times New Roman", serif`;function Zt(h,g,x="#3b2a22",S=.05){let R=new tt,U=Ae({color:x,roughness:.5});[[0,g/2+S/2,h+S*2,S],[0,-g/2-S/2,h+S*2,S],[-h/2-S/2,0,S,g],[h/2+S/2,0,S,g]].forEach(([W,ve,Pe,Ue])=>{let Je=new le(new lt(Pe,Ue,.05),U);Je.position.set(W,ve,.025),Je.castShadow=!0,R.add(Je)});let G=new le(new lt(h,g,.015),Ae({color:"#efe6dc"}));return G.position.z=.008,R.add(G),R}function fn(h,g,x,S,R){let U=new tt,G=Zt(h,g,R);G.position.y=x,U.add(G);let W=new le(new _n(h,g),Ae({map:Mn(Math.round(512*h/Math.max(h,g))*2,Math.round(512*g/Math.max(h,g))*2,S),roughness:.85}));return W.position.set(0,x,.02),U.add(W),U}function wt(h=1){let g=new Oi;return g.moveTo(0,-.5*h),g.bezierCurveTo(-.15*h,-.32*h,-.5*h,-.15*h,-.5*h,.12*h),g.bezierCurveTo(-.5*h,.4*h,-.15*h,.5*h,0,.28*h),g.bezierCurveTo(.15*h,.5*h,.5*h,.4*h,.5*h,.12*h),g.bezierCurveTo(.5*h,-.15*h,.15*h,-.32*h,0,-.5*h),g}let yn={tarih_cerceve:()=>fn(.62,.82,1.62,(h,g,x)=>{h.fillStyle="#fbf6ef",h.fillRect(0,0,g,x),h.textAlign="center",h.fillStyle="#b8325a",h.font=dt("400",g*.2),h.fillText("26",g/2,x*.36),h.fillStyle="#34131F",h.font=dt("400",g*.1),h.fillText("Ocak 2026",g/2,x*.5),h.strokeStyle="#d9b9a6",h.lineWidth=3,h.beginPath(),h.moveTo(g*.3,x*.57),h.lineTo(g*.7,x*.57),h.stroke(),h.font=dt("italic 400",g*.075),h.fillStyle="#8A6473",h.fillText(`${o.B} & ${o.A}`,g/2,x*.67),h.font=dt("italic 400",g*.055),h.fillText("her \u015Fey burada ba\u015Flad\u0131",g/2,x*.76),h.font=`${g*.09}px serif`,h.fillText("\u{1F337}",g/2,x*.9)}),harita_cerceve:()=>fn(.95,.7,1.62,(h,g,x)=>{h.fillStyle="#cfe3ef",h.fillRect(0,0,g,x),h.fillStyle="#f1e6d2",h.beginPath(),h.moveTo(0,0),h.lineTo(g*.52,0),h.bezierCurveTo(g*.5,x*.25,g*.44,x*.4,g*.47,x*.58),h.bezierCurveTo(g*.5,x*.75,g*.42,x*.85,g*.35,x),h.lineTo(0,x),h.fill(),h.beginPath(),h.moveTo(g,0),h.lineTo(g*.6,0),h.bezierCurveTo(g*.58,x*.25,g*.53,x*.42,g*.56,x*.6),h.bezierCurveTo(g*.6,x*.78,g*.55,x*.9,g*.5,x),h.lineTo(g,x),h.fill(),h.strokeStyle="rgba(120,90,70,.25)",h.lineWidth=2;for(let R=0;R<26;R++){let U=Math.random()*g,G=Math.random()*x;h.beginPath(),h.moveTo(U,G),h.lineTo(U+30+Math.random()*40,G+(Math.random()-.5)*20),h.stroke()}let S=(R,U,G,W)=>{h.fillStyle=W,h.beginPath(),h.moveTo(R,U+G*.9),h.bezierCurveTo(R-G*1.6,U-G*.2,R-G*.6,U-G*1.3,R,U-G*.45),h.bezierCurveTo(R+G*.6,U-G*1.3,R+G*1.6,U-G*.2,R,U+G*.9),h.fill()};S(g*.27,x*.42,g*.035,"#b8325a"),S(g*.72,x*.55,g*.03,"#E8577A"),h.setLineDash([8,8]),h.strokeStyle="#b8325a",h.lineWidth=3,h.beginPath(),h.moveTo(g*.27,x*.42),h.quadraticCurveTo(g*.5,x*.25,g*.72,x*.55),h.stroke(),h.setLineDash([]),h.fillStyle="#34131F",h.textAlign="center",h.font=dt("italic 400",g*.06),h.fillText("Bizim \u0130stanbul",g/2,x*.92)},"#e8e1d6"),plak_duvar:()=>fn(.62,.62,1.7,(g,x,S)=>{g.fillStyle="#f4ece4",g.fillRect(0,0,x,S);let R=x/2,U=S*.46,G=x*.36;g.fillStyle="#141014",g.beginPath(),g.arc(R,U,G,0,7),g.fill(),g.strokeStyle="rgba(255,255,255,.07)";for(let W=8;W<G;W+=5)g.beginPath(),g.arc(R,U,W,0,7),g.stroke();g.fillStyle="#E8577A",g.beginPath(),g.arc(R,U,G*.33,0,7),g.fill(),g.fillStyle="#fff",g.textAlign="center",g.font=dt("400",G*.1),g.fillText("Bizim",R,U-G*.05),g.fillText("\u015Eark\u0131m\u0131z",R,U+G*.1),g.fillStyle="#34131F",g.font=dt("italic 400",x*.06),g.fillText(`${o.B} & ${o.A}`,x/2,S*.94)},"#1c1c1c"),kanvas_foto:()=>{let h=new tt,g=1.68,x=new le(new lt(1.34,.98,.05),Ae({color:"#fbf8f4"}));x.position.set(0,g,.025),x.castShadow=!0,h.add(x);let S=new le(new _n(1.26,.9),Ae({color:"#f3e3e7",roughness:.55}));return S.position.set(0,g,.052),S.userData.oran=1.26/.9,h.add(S),h.userData.foto=S,h},polaroid_ip:()=>{let h=new tt,g=1.95,x=5,S=1.9;h.userData.fotolar=[];let R=new Ua([...Array(9)].map((U,G)=>new k(-S/2+S*G/8,g-Math.sin(G/8*Math.PI)*.12,.03)));h.add(new le(new Us(R,40,.006,5),Ae({color:"#c8a46a",roughness:.6}))),[-1,1].forEach(U=>{let G=new le(new Un(.02,8,6),Ae({color:"#c8a46a"}));G.position.set(U*S/2,g,.03),h.add(G)});for(let U=0;U<x;U++){let G=(U+.5)/x,W=-S/2+S*G,ve=g-Math.sin(G*Math.PI)*.12,Pe=new tt;Pe.position.set(W,ve-.2,.035),Pe.rotation.z=(Math.random()-.5)*.2;let Ue=new le(new lt(.26,.31,.006),Ae({color:"#fffdf8",roughness:.9}));Ue.castShadow=!0,Pe.add(Ue);let Je=new le(new _n(.22,.22),Ae({color:"#f3e3e7",roughness:.6}));Je.position.set(0,.025,.004),Pe.add(Je),h.userData.fotolar.push(Je);let bt=new le(new lt(.025,.06,.015),Ae({color:"#E8577A"}));bt.position.set(0,.16,.008),Pe.add(bt),h.add(Pe)}return h},harf_yastik:()=>{let h=new tt;return[[-.45,"#7a1f2e","B"],[.45,"#1f2a4d","A"]].forEach(([g,x,S])=>{let R=new Ct(.36,.38,.16,28),U=Mn(256,256,(W,ve,Pe)=>{W.fillStyle=x,W.fillRect(0,0,ve,Pe),W.strokeStyle="rgba(255,255,255,.35)",W.lineWidth=6,W.setLineDash([10,8]),W.beginPath(),W.arc(ve/2,Pe/2,ve*.4,0,7),W.stroke(),W.setLineDash([]),W.fillStyle="#fbe9dc",W.textAlign="center",W.textBaseline="middle",W.font=dt("400",130),W.fillText(S,ve/2,Pe/2+6)}),G=new le(R,[Ae({color:x,roughness:.95}),Ae({map:U,roughness:.95}),Ae({color:x})]);G.position.set(g,.08,0),G.scale.y=.9,G.castShadow=!0,G.receiveShadow=!0,h.add(G)}),h},paspas:()=>{let h=new le(new lt(1,.02,.6),[Ae({color:"#b98d5f"}),Ae({color:"#b98d5f"}),Ae({map:Mn(512,300,(x,S,R)=>{x.fillStyle="#c99f6e",x.fillRect(0,0,S,R);for(let U=0;U<2500;U++)x.fillStyle=`rgba(90,60,30,${Math.random()*.18})`,x.fillRect(Math.random()*S,Math.random()*R,2,5);x.strokeStyle="#5a3a22",x.lineWidth=6,x.strokeRect(16,16,S-32,R-32),x.fillStyle="#4a2c1a",x.textAlign="center",x.textBaseline="middle",x.font=dt("400",86),x.fillText("Bizim Ev",S/2,R*.45),x.font=dt("italic 400",34),x.fillText(`${o.B} & ${o.A}`,S/2,R*.74)}),roughness:1}),Ae({color:"#b98d5f"}),Ae({color:"#b98d5f"}),Ae({color:"#b98d5f"})]);h.position.y=.011,h.receiveShadow=!0;let g=new tt;return g.add(h),g},kupa_sehpa:()=>{let h=new tt,g=Me.table_small.clone(!0);h.add(g);let x=new cn().setFromObject(g).max.y;return h.userData.ustY=x,[[-.12,"#7a1f2e","B"],[.12,"#1f2a4d","A"]].forEach(([S,R,U])=>{let G=Mn(256,128,(Pe,Ue,Je)=>{Pe.fillStyle="#fbf6ef",Pe.fillRect(0,0,Ue,Je),Pe.fillStyle=R,Pe.textAlign="center",Pe.textBaseline="middle",Pe.font=dt("400",70),Pe.fillText(U,Ue*.25,Je/2),Pe.fillText("\u2665",Ue*.75,Je/2)}),W=new le(new Ct(.055,.05,.12,20),[Ae({map:G,roughness:.3}),Ae({color:"#4a2c1a",roughness:.2}),Ae({color:"#fbf6ef"})]);W.position.set(S,x+.06,0),W.rotation.y=S<0?.4:-.4,W.castShadow=!0,h.add(W);let ve=new le(new Fr(.03,.009,6,14),Ae({color:"#fbf6ef",roughness:.3}));ve.position.set(S+(S<0?-.06:.06),x+.065,0),ve.rotation.y=Math.PI/2,h.add(ve)}),h},mum_set:()=>{let h=new tt,g=[],x=new le(new Ct(.24,.24,.02,24),Ae({color:"#c8a46a",metalness:.7,roughness:.3}));if(x.position.y=.01,h.add(x),[[-.1,.2,.04],[.08,.14,-.06],[.02,.26,.1]].forEach(([S,R,U])=>{let G=new le(new Ct(.045,.045,R,16),Ae({color:"#fbf3e6",roughness:.6}));G.position.set(S,.02+R/2,U),G.castShadow=!0,h.add(G);let W=new le(new Un(.018,8,8),new zt({color:"#ffcf7a"}));W.scale.y=1.8,W.position.set(S,.02+R+.03,U),h.add(W),g.push(W)}),d||f){let S=new ei("#ffb26b",1.2,2.5,2);S.position.y=.45,h.add(S)}return h.userData.anim=(S,R)=>g.forEach((U,G)=>{let W=1+Math.sin(R*13+G*2)*.12+Math.sin(R*23+G)*.08;U.scale.set(W,1.8*W,W)}),h},balon_kalp:()=>{let h=new tt,g=[],x=new le(new Ct(.05,.06,.05,12),Ae({color:"#c8a46a",metalness:.6,roughness:.3}));return x.position.y=.025,h.add(x),[[-.12,1.75,"#E8577A"],[.14,1.9,"#b8325a"],[0,2.1,"#f39ab4"]].forEach(([S,R,U],G)=>{let W=new Or(wt(.36),{depth:.06,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:4,curveSegments:18});W.center();let ve=new le(W,Ae({color:U,roughness:.25,metalness:.15}));ve.position.set(S,R,0),ve.castShadow=!0,h.add(ve);let Pe=new le(new Ct(.003,.003,R-.2,4),Ae({color:"#ffffff"}));Pe.position.set(S/2,(R-.2)/2+.05,0),Pe.rotation.z=Math.atan2(S,R)*.5,h.add(Pe),g.push([ve,R,G])}),h.userData.anim=(S,R)=>g.forEach(([U,G,W])=>{U.position.y=G+Math.sin(R*1.3+W*2)*.04,U.rotation.y=Math.sin(R*.7+W)*.35}),h},lale_buket:()=>{let h=new tt,g=Ld();return g.scale.setScalar(1.6),h.add(g),h}},It=new Map;function Yr(h){let g=Ce[h.t];if(!g)return null;let x;if((h.t.startsWith("m_")||h.t==="ocak")&&!Me.m_kitchencounter_straight_A)return null;if(h.t==="pikap"){x=new tt;let S=Me.table_small.clone(!0);x.add(S);let R=new cn().setFromObject(S).max.y,U=wM();U.position.y=R,x.add(U),x.userData.plak=U.userData.plak}else if(h.t==="sehpa_lale"){x=new tt;let S=Me.table_low.clone(!0);x.add(S);let R=new cn().setFromObject(S).max.y,U=Ld();U.position.y=R,U.scale.setScalar(1.15),x.add(U),x.userData.ustY=R}else if(h.t==="ocak"){if(x=new tt,Me.m_kitchencounter_straight_A&&Me.m_stove_multi_countertop){let S=Me.m_kitchencounter_straight_A.clone(!0),R=Me.m_stove_multi_countertop.clone(!0),U=Me.m_extractorhood.clone(!0);U.position.z=-1,[S,R,U].forEach(G=>x.add(G)),x.scale.setScalar(.8)}}else if(h.t==="semaver")x=AM();else if(h.t==="teleskop")x=CM();else if(h.t==="saksi_lale")x=PM();else if(h.t==="fener_ayak")x=IM(d||f);else if(yn[h.t])x=yn[h.t]();else if(Y.YAP[h.t])x=Y.YAP[h.t]();else{if(!Me[h.t])return null;x=Me[h.t].clone(!0),g[4].duvar&&(x.userData.duvar=!0)}return g[4].s&&!x.userData.olcekli&&(x.scale.setScalar(g[4].s),x.userData.olcekli=!0),x.traverse(S=>{S.isMesh&&(S.castShadow=!g[4].zemin,S.receiveShadow=!0)}),Object.assign(x.userData,g[4],{id:h.id,tip:h.t,ad:h.t}),c.add(x),It.set(h.id,x),Ei(x,h),g[4].act==="foto"&&(x.userData.fotolar?x.userData.fotolar.forEach(st):x.userData.foto?st(x.userData.foto):je(x)),x}function Ei(h,g){h.position.set(g.x,g.y||0,g.z),h.rotation.y=g.r||0,h.updateMatrixWorld(!0);let x=new cn().setFromObject(h);h.userData.kutu={x0:x.min.x,x1:x.max.x,z0:x.min.z,z1:x.max.z,y1:x.max.y}}function wi(h){let g=h.userData,x=h.rotation.y,S=Math.cos(x),R=Math.sin(x),U=h.scale.x||1;return(g.yerler||[]).map(([G,W])=>[h.position.x+(G*S+W*R)*U,h.position.z+(-G*R+W*S)*U])}let Vi=Mn(512,256,(h,g,x)=>{h.fillStyle="#9fcf7a",h.fillRect(0,0,g,x);for(let S=0;S<2600;S++){h.strokeStyle=`hsl(${95+Math.random()*25},${40+Math.random()*20}%,${48+Math.random()*18}%)`,h.lineWidth=1.2;let R=Math.random()*g,U=Math.random()*x;h.beginPath(),h.moveTo(R,U),h.lineTo(R+(Math.random()-.5)*4,U-4-Math.random()*6),h.stroke()}});Vi.wrapS=Vi.wrapT=en,Vi.repeat.set(3,1.2);let Wi=new le(new lt(ke.w,.2,T-P),new Ye({map:Vi,roughness:1}));Wi.position.set(0,-.11,(P+T)/2),Wi.receiveShadow=!0,Wi.name="zemin",c.add(Wi),pe.add(J),pe.add(Wi);let no=new Ye({color:"#e9e1d6",roughness:.9});for(let h=0;h<4;h++){let g=new le(new Ct(.22,.24,.05,14),no);g.position.set(-3.6+h%2*.25,0,P+.45+h*.8),g.receiveShadow=!0,c.add(g)}let Xi=new Ye({color:"#fffaf6",roughness:.7}),Kr=(h,g)=>{let x=new le(new lt(.08,.55,.08),Xi);x.position.set(h,.27,g),x.castShadow=!0,c.add(x);let S=new le(new Oa(.06,.1,4),Xi);S.position.set(h,.6,g),S.rotation.y=Math.PI/4,c.add(S)};for(let h=-ke.w/2;h<=ke.w/2+.01;h+=.45)Kr(h,T);for(let h=P+.3;h<T;h+=.45)Kr(ke.w/2,h);[[0,T,ke.w,.05],[ke.w/2,(P+T)/2,.05,T-P]].forEach(([h,g,x,S])=>[.18,.4].forEach(R=>{let U=new le(new lt(x,.06,S),Xi);U.position.set(h,R,g),U.castShadow=!0,c.add(U)}));let Ln=new tt;Ln.position.set(-4.1,0,T-.4),c.add(Ln);{let h=new le(new Ct(.04,.05,1.3,8),new Ye({color:"#3a2a2e",roughness:.5}));h.position.y=.65,h.castShadow=!0,Ln.add(h);let g=new le(new Un(.13,16,12),new Ye({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:d||f?2.2:.15}));if(g.position.y=1.38,Ln.add(g),d||f){let x=new ei("#ffcf7a",3.5,5,1.8);x.position.y=1.35,Ln.add(x)}}let io=[-3.15,-1.05,1.05,3.15].flatMap(h=>[P+1.05,P+2.5].map(g=>[h,g])),Vs=new Ye({color:"#7a5034",roughness:1}),uc=new Ye({color:"#a77d5a",roughness:1}),dc=new Ye({color:"#b98a5e",roughness:.8}),Ti=io.map(([h,g],x)=>{let S=new tt;S.position.set(h,0,g),c.add(S);let R=new le(new lt(1.4,.16,.95),dc);R.position.y=.06,R.castShadow=!0,R.receiveShadow=!0,S.add(R);let U=new le(new lt(1.25,.05,.8),Vs);U.position.y=.14,U.receiveShadow=!0,S.add(U);let G=new tt;return G.position.y=.16,S.add(G),S.userData={act:"bahce",i:x,top:U,bit:G,ad:"parsel"+x,id:"parsel"+x},S}),C=["#C9233F","#E8577A","#F7A8BE","#fff1f4","#9C7BD3","#f5a524"],X=new Ye({color:"#5b9e5a",roughness:.8,side:Qt}),te=36e5,se=6*te;function q(h){if(!h||!h.ekim)return-1;let g=(Date.now()-h.ekim)/se;return g<1/3?0:g<2/3?1:g<1?2:3}let De=h=>!!(h&&h.ekim)&&q(h)<3&&Date.now()-(h.su||h.ekim)>3*te,qe=h=>{let g=se-(Date.now()-h.ekim);if(g<=0)return"a\xE7t\u0131";let x=Math.ceil(g/6e4);return x>=60?`${Math.floor(x/60)} sa ${x%60} dk sonra a\xE7ar`:`${x} dk sonra a\xE7ar`};function Ke(h,g){let x=h.userData.bit;x.clear();let S=q(g);if(h.userData.top.material=S>=0&&De(g)?uc:Vs,S<0)return;let R=De(g)?.55:0;[[-.35,-.1],[0,.12],[.35,-.08]].forEach(([U,G],W)=>{let ve=new tt;if(ve.position.set(U,0,G),ve.rotation.z=R*(W-1||.6),x.add(ve),S===0){let Je=new le(new Un(.07,8,6),Vs);Je.scale.y=.5,ve.add(Je);let bt=new le(new Oa(.02,.08,5),X);bt.position.y=.05,ve.add(bt);return}let Pe=S===1?.18:S===2?.4:.55,Ue=new le(new Ct(.015,.018,Pe,6),X);if(Ue.position.y=Pe/2,ve.add(Ue),[-1,1].forEach(Je=>{let bt=new le(new _n(.08,Pe*.7),X);bt.position.set(Je*.04,Pe*.3,0),bt.rotation.z=-Je*.35,bt.rotation.y=W,ve.add(bt)}),S>=2){let Je=S===2?.045:.075,bt=g.renk||C[0],Gt=new le(new Mi([[0,-.02],[Je*.7,0],[Je,Je*.8],[Je*.92,Je*1.6],[Je*.6,Je*2.1],[Je*.65,Je*2.2]].map(Oe=>new ue(Oe[0],Oe[1])),14),new Ye({color:bt,roughness:.45,side:Qt}));Gt.position.y=Pe,Gt.castShadow=!0,S===2&&Gt.scale.set(.8,1.1,.8),ve.add(Gt)}})}let Ze=()=>{try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Istanbul"}).format(new Date)}catch{return new Date().toISOString().slice(0,10)}},ce=ft(),Qe={},et=()=>{let h=Qe[t];return h||(h=Qe[t]={kazanc:0}),h.gun!==Ze()&&(h.gun=Ze(),h.al={}),h.al=h.al||{},h},gt=()=>Object.values(Qe).reduce((h,g)=>h+(g.kazanc||0),0)-(ce.harcanan||0),Tt=t==="misafir"||!i,Bt=0,Sn=0,Ne=null,Fe=null,Dt=null;function ht(){Ht(),clearTimeout(Bt),Bt=setTimeout(()=>{if(Tt){try{localStorage.setItem("le-ev",JSON.stringify(ce))}catch{}return}i.from("state").upsert({scope:"oyun_ev",id:"ev",value:ce},{onConflict:"scope,id"}).then(()=>{},()=>{})},500),jn({t:"ev",ev:ce})}function Bn(){ra(),clearTimeout(Sn),Sn=setTimeout(()=>{if(Tt){try{localStorage.setItem("le-puan",JSON.stringify(Qe[t]))}catch{}return}i.from("state").upsert({scope:"oyun_puan",id:t,value:Qe[t]},{onConflict:"scope,id"}).then(()=>{},()=>{})},500),jn({t:"puan",v:Qe[t]})}function Yt(h,g,x,S=1){let R=et();if(x){let U=R.al[x]||0;if(U>=S)return!1;R.al[x]=U+1}return R.kazanc=(R.kazanc||0)+h,Bn(),tg(h,g),!0}function pn(h){return gt()<h?(_t(`\u{1F337} ${h} lale puan\u0131 laz\u0131m, ${gt()} var`),!1):(ce.harcanan=(ce.harcanan||0)+h,ra(),!0)}let Hn=new Map;function Ht(){for(ce.depo=ce.depo||[],ce.hediyeler=ce.hediyeler||[],ce.bahce=ce.bahce||[];ce.bahce.length<8;)ce.bahce.push({});ce.odalar=ce.odalar||{},j.forEach(x=>{ut(x.id)&&he(x)});let h=new Set(ce.esyalar.map(x=>x.id));for(let[x,S]of It)h.has(x)||([Ne&&Ne.A,Ne&&Ne.B].forEach(R=>{R&&R.yer&&R.yer.m===S&&Fd(R)}),c.remove(S),It.delete(x),Fe===S&&uo());ce.esyalar.forEach(x=>{let S=It.get(x.id);S?(S.position.x!==x.x||S.position.z!==x.z||S.rotation.y!==(x.r||0))&&([Ne&&Ne.A,Ne&&Ne.B].forEach(R=>{R&&R.yer&&R.yer.m===S&&Fd(R)}),Ei(S,x)):Yr(x)});let g=ce.hediyeler.filter(x=>!x.acildi);for(let[x,S]of Hn)g.some(R=>R.id===x)||(c.remove(S),Hn.delete(x));g.forEach(x=>{if(Hn.has(x.id))return;let S=TM(x.renk||"#C9233F");S.position.set(x.x,x.y||0,x.z),S.rotation.y=x.r||0,S.userData=Object.assign(S.userData,{act:"hediye",id:x.id,ad:x.id}),S.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),c.add(S),Hn.set(x.id,S)}),ii(),wm(),Ti.forEach((x,S)=>Ke(x,ce.bahce[S])),ra(),km(),fo()}function ii(){let h=Ne?ne(yt.g.position.x).ox:0,g=[...It.values()].find(x=>x.userData.act==="lamba"&&ne(x.position.x).ox===h);if(g){let x=g.userData.kutu;v.position.set((x.x0+x.x1)/2,x.y1-.2,(x.z0+x.z1)/2)}else v.position.set(0,-10,0)}let bs=d,Jt=Math.round((me.x1-me.x0)/Gs),_s=Math.round((me.z1-me.z0)/Gs),so=new Uint8Array(Jt*_s),qi=(h,g)=>[Math.floor((h-me.x0)/Gs),Math.floor((g-me.z0)/Gs)],fc=(h,g)=>[me.x0+(h+.5)*Gs,me.z0+(g+.5)*Gs];function wm(){let h=[...It.values()].filter(g=>!g.userData.zemin&&!g.userData.kucuk).map(g=>g.userData.kutu);Ti.forEach(g=>h.push({x0:g.position.x-.7,x1:g.position.x+.7,z0:g.position.z-.48,z1:g.position.z+.48})),h.push({x0:Ln.position.x-.15,x1:Ln.position.x+.15,z0:Ln.position.z-.15,z1:Ln.position.z+.15});for(let g=0;g<Jt;g++)for(let x=0;x<_s;x++){let[S,R]=fc(g,x),U=0,G=ne(S);(!ut(G.id)||Math.abs(S-G.ox)>ke.w/2-.3||R<me.z0+.3||R>(G.id==="salon"?me.z1:ke.d/2)-.3||h.some(W=>S>W.x0-.12&&S<W.x1+.12&&R>W.z0-.12&&R<W.z1+.12))&&(U=1),so[x*Jt+g]=U}}let ji=(h,g)=>h>=0&&g>=0&&h<Jt&&g<_s&&!so[g*Jt+h];function kd(h,g){if(ji(h,g))return[h,g];for(let x=1;x<14;x++)for(let S=-x;S<=x;S++)for(let R=-x;R<=x;R++)if(Math.max(Math.abs(S),Math.abs(R))===x&&ji(h+S,g+R))return[h+S,g+R];return[h,g]}function Nd(h,g){let x=Math.ceil(Math.hypot(g[0]-h[0],g[1]-h[1])/(Gs*.5));for(let S=0;S<=x;S++){let R=h[0]+(g[0]-h[0])*S/x,U=h[1]+(g[1]-h[1])*S/x,[G,W]=qi(R,U);if(!ji(G,W))return!1}return!0}function Ud(h,g){var ot;let[x,S]=kd(...qi(h[0],h[1])),[R,U]=kd(...qi(g[0],g[1])),G=(at,Et)=>Et*Jt+at,W=new Map([[G(x,S),0]]),ve=new Map,Pe=[[0,x,S]],Ue=new Set;for(;Pe.length;){Pe.sort((At,sn)=>At[0]-sn[0]);let[,at,Et]=Pe.shift(),Ft=G(at,Et);if(!Ue.has(Ft)){if(Ue.add(Ft),at===R&&Et===U)break;for(let[At,sn]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let vn=at+At,ri=Et+sn;if(!ji(vn,ri)||At&&sn&&(!ji(at+At,Et)||!ji(at,Et+sn)))continue;let Gn=G(vn,ri),Pt=W.get(Ft)+(At&&sn?1.414:1);Pt<((ot=W.get(Gn))!=null?ot:1e9)&&(W.set(Gn,Pt),ve.set(Gn,Ft),Pe.push([Pt+Math.hypot(R-vn,U-ri),vn,ri]))}}}let Je=[],bt=G(R,U);if(!ve.has(bt)&&bt!==G(x,S))return[fc(R,U)];for(;bt!==void 0&&bt!==G(x,S);)Je.unshift(fc(bt%Jt,Math.floor(bt/Jt))),bt=ve.get(bt);let Gt=[h,...Je];ji(...qi(g[0],g[1]))&&Gt.push(g);let Oe=[Gt[0]],rt=0;for(;rt<Gt.length-1;){let at=Gt.length-1;for(;at>rt+1&&!Nd(Gt[rt],Gt[at]);)at--;Oe.push(Gt[at]),rt=at}return Oe.slice(1)}function Od(h,g){let x=h.scene,S=h.animations.some(Oe=>/_Rig$/.test(Oe.name));x.traverse(Oe=>{Oe.isMesh&&(Oe.castShadow=!0,Oe.receiveShadow=!1,Oe.material=Oe.material.clone(),S&&(Oe.material.roughness=.85,Oe.material.metalness=0,Oe.frustumCulled=!1))});let R=!S&&h.animations.some(Oe=>Oe.name==="Hug");x.traverse(Oe=>{Oe.isSkinnedMesh&&(Oe.frustumCulled=!1)});let U=new cn().setFromObject(x),G=S?mM*gM*ym[g]/1.55:ym[g]/(U.max.y-U.min.y);x.scale.setScalar(G);let W=new tt;W.add(x),c.add(W);let ve=new Gr(x),Pe={};h.animations.forEach(Oe=>{Pe[Oe.name.replace(/_Rig$/,"")]=ve.clipAction(Oe)}),["Sit_Chair_Down","Lie_Down","Sit_Chair_StandUp","Lie_StandUp","Cheer","Interact","PickUp","Sit_Floor_Down"].forEach(Oe=>{Pe[Oe]&&(Pe[Oe].setLoop(Wu),Pe[Oe].clampWhenFinished=!0)});let Ue={boy:(U.max.y-U.min.y)*G,rol:g,g:W,root:x,mixer:ve,acts:Pe,cur:null,path:[],durum:"ayakta",yer:null,online:!1,hiz:vm},Je=null;x.traverse(Oe=>{!Je&&Oe.isBone&&/^hips$/i.test(Oe.name)&&(Je=Oe)}),Ue.kalca={};let bt=(Oe,rt)=>{let ot=Pe[Oe];if(!ot||!Je)return null;let at=new Gr(x);return at.clipAction(ot.getClip()).play(),at.setTime(rt==null?ot.getClip().duration*.5:rt),x.updateMatrixWorld(!0),{v:Je.getWorldPosition(new k),tm:at}};for(let[Oe,rt]of[["otur","Sit_Chair_Idle"],["yat","Lie_Idle"],["yer","Sit_Floor_Idle"]]){let ot=bt(rt);ot&&(Ue.kalca[Oe]=[ot.v.x,ot.v.y,ot.v.z],ot.tm.stopAllAction(),ot.tm.uncacheRoot(x))}if(Pe.Walking_A){let Oe=null;if(x.traverse(rt=>{!Oe&&rt.isBone&&/^(foot[._]?l|foot_l)$/i.test(rt.name)&&(Oe=rt)}),Oe){let rt=Pe.Walking_A.getClip().duration,ot=9,at=-9,Et=new Gr(x);Et.clipAction(Pe.Walking_A.getClip()).play();for(let At=0;At<24;At++){Et.setTime(rt*At/24),x.updateMatrixWorld(!0);let sn=Oe.getWorldPosition(new k).z;ot=Math.min(ot,sn),at=Math.max(at,sn)}Et.stopAllAction(),Et.uncacheRoot(x);let Ft=2*(at-ot);if(Ft>.1){let At=vm/(window.__leHiz||1)*rt/Ft;At>1.5&&(At=1.5,Ue.hiz=(window.__leHiz||1)*Ft*At/rt),Pe.Walking_A.timeScale=Math.max(.7,At)}}}Ue.oyna=(Oe,rt=vM)=>{let ot=Pe[Oe];return!ot||Ue.cur===ot||(ot.reset().setEffectiveWeight(1).fadeIn(rt).play(),Ue.cur&&Ue.cur.fadeOut(rt),Ue.cur=ot),ot},Ue.bir=Oe=>new Promise(rt=>{let ot=Ue.oyna(Oe,.2);if(!ot)return rt();let at=Et=>{Et.action===ot&&(ve.removeEventListener("finished",at),rt())};ve.addEventListener("finished",at),setTimeout(()=>{ve.removeEventListener("finished",at),rt()},ot.getClip().duration/(window.__leHiz||1)*1e3+4e3)}),Ue.oyna("Idle",0);let Gt=Le("div",{class:"le-tag "+(g==="B"?"b":"a")},Le("b",null,o[g]),Le("i"));return jt("#leTags").append(Gt),Ue.tag=Gt,Ue}Ne={A:Od(Re,"A"),B:Od(We,"B")},Ne.A.g.position.set(1.8,0,1.8),Ne.B.g.position.set(-.6,0,1.9),Ne.B.g.rotation.y=.6,Ne.A.g.rotation.y=-.6;let yt=Ne[a],Lt=Ne[a==="A"?"B":"A"],xs=_m({characters:Ne,me:yt,Vec3:k,Quat:ln,stand:h=>ro(h),findPath:(h,g)=>Ud(h,g),lineClear:(h,g)=>Nd(h,g),pointClear:(h,g)=>ji(...qi(h,g)),sameRoom:(h,g)=>ne(h.g.position.x).id===ne(g.g.position.x).id,broadcast:h=>jn(h),hearts:(h,g,x)=>Xs(h,g,x),focus:(...h)=>na(...h),reward:()=>Yt(3,"Sar\u0131ld\u0131n \u{1F917}","saril",5),save:()=>{mo(),jn(Object.assign({t:"durum"},ia(yt)))},hint:h=>_t(h)});function Fd(h){h.yer&&(h.g.position.set(h.yer.cik[0],0,h.yer.cik[1]),h.yer=null,h.durum="ayakta",h.oyna("Idle"))}async function ro(h){h.durum==="oturuyor"?(h.durum="kalkiyor",await h.bir("Sit_Chair_StandUp")):h.durum==="yatiyor"?(h.durum="kalkiyor",await h.bir("Lie_StandUp")):h.durum==="yerde"&&(h.durum="kalkiyor"),h.yer&&(h.g.position.set(h.yer.cik[0],0,h.yer.cik[1]),h.yer=null),h.durum="ayakta"}async function pi(h,g,x,S,R){if(h.hugLock)return;h.token=(h.token||0)+1,h.kosu=!1;let U=h.token;h.hedefYer=null,h.durum!=="ayakta"&&await ro(h),U===h.token&&(h.path=Ud([h.g.position.x,h.g.position.z],[g,x]),h.sonra=S||null,h.path.length?(h.kosu=!!R&&!!h.acts.Running,h.oyna(h.kosu?"Running":"Walking_A")):S&&(h.sonra=null,S()))}function zd(h,g){let x=g.userData,S=wi(g),R=new Set([Ne.A,Ne.B].filter(Ue=>Ue!==h).map(Ue=>Ue.yer||Ue.hedefYer).filter(Ue=>Ue&&Ue.m===g).map(Ue=>Ue.i)),U=S.findIndex((Ue,Je)=>!R.has(Je));U<0&&(U=0);let[G,W]=S[U],ve=(x.yon||0)+g.rotation.y,Pe=x.act==="yat"?[Math.sin(g.rotation.y)*1.25,Math.cos(g.rotation.y)*1.25]:[Math.sin(ve)*(x.act==="yer"?.55:.75),Math.cos(ve)*(x.act==="yer"?.55:.75)];return{m:g,i:U,sx:G,sz:W,yon:ve,cik:[G+Pe[0],W+Pe[1]]}}let Bd=new Xa,Tm=new k(0,-1,0);function Am(h,g,x,S){h.updateMatrixWorld(!0),Bd.set(new k(g,3,x),Tm);let R=Bd.intersectObject(h,!0).filter(U=>U.object.visible);return R.length?R[0].point.y:xM[S]}function pc(h,g,x){let S=g.m,R=S.scale.x||1,U=bM[x],G=Math.sin(g.yon),W=Math.cos(g.yon),ve=g.sx+(U[0]*W+U[1]*G)*R,Pe=g.sz+(-U[0]*G+U[1]*W)*R,Ue=x==="yat"?0:.14*R,Je=Am(S,ve+G*Ue,Pe+W*Ue,x),bt=h.kalca[x]||[0,.4,0],Gt=Je+_M[x]*h.boy/1.55-bt[1];h.g.position.set(ve-(bt[0]*W+bt[2]*G),Gt,Pe-(-bt[0]*G+bt[2]*W)),h.g.rotation.y=g.yon}let mc=(h,g,x)=>{h.g.rotation.y=Math.atan2(g-h.g.position.x,x-h.g.position.z)},Rm=(h,g=.6)=>{let x=h.userData.kutu||{x0:h.position.x-.2,x1:h.position.x+.2,z0:h.position.z-.2,z1:h.position.z+.2},S=(x.x0+x.x1)/2,R=(x.z0+x.z1)/2;return[S,R,x.z1+g]};async function Zr(h,g,x){if(h.hugLock)return;let S=g.userData;if(S.act==="otur"||S.act==="yat"||S.act==="yer"){let R=zd(h,g),U=pi(h,R.cik[0],R.cik[1],async()=>{if(h.hedefYer=null,h.yer=R,S.act==="yat"){if(pc(h,R,"yat"),h.durum="yatiyor",await h.bir("Lie_Down"),h.durum==="yatiyor"&&h.oyna("Lie_Idle"),!x){let G=Ne.A.yer,W=Ne.B.yer;G&&W&&G.m===W.m&&Ne.A.durum==="yatiyor"&&Ne.B.durum==="yatiyor"&&(Yt(10,"\u0130yi geceler \u{1F319}","iyigece"),si())}}else S.act==="yer"?(pc(h,R,"yer"),h.durum="yerde",await h.bir("Sit_Floor_Down"),h.durum==="yerde"&&h.oyna("Sit_Floor_Idle")):(pc(h,R,"otur"),h.durum="oturuyor",await h.bir("Sit_Chair_Down"),h.durum==="oturuyor"&&h.oyna("Sit_Chair_Idle"),x||Pm());x||mo()});h.hedefYer=R,await U}else if(S.act==="lamba"||S.act==="muzik"||S.act==="foto"||S.act==="pisir"||S.act==="cay"||S.act==="buzdolabi"||S.act==="yildiz"){let[R,U,G]=Rm(g,.55);if(S.asili){let W=S.kutu;Math.abs(Math.sin(g.rotation.y))>.5?(R=W.x1+.75,G=(W.z0+W.z1)/2):G=W.z1+.75}else if(S.kutu&&!nt.includes(g)){let W=S.kutu,ve=g.rotation.y,Pe=Math.sin(ve),Ue=Math.cos(ve),Je=(Math.abs(Pe)*(W.x1-W.x0)+Math.abs(Ue)*(W.z1-W.z0))/2+.55;R=(W.x0+W.x1)/2+Pe*Je,G=(W.z0+W.z1)/2+Ue*Je}if(g.parent&&nt.includes(g)){let W=g.rotation.y?[g.position.x+1.1,g.position.z]:[g.position.x,g.position.z+1.1];R=W[0],G=W[1],U=g.position.z}await pi(h,(S.act==="foto"&&nt.includes(g),R),G,async()=>{if(mc(h,g.position.x,g.position.z),await h.bir("Interact"),h.oyna("Idle"),S.act==="lamba")bs=!bs;else if(S.act==="muzik"&&!x)Vm();else if(S.act==="foto"&&S.fotolar)for(let W of S.fotolar)await st(W);else S.act==="foto"&&S.foto?(await st(S.foto),x||setTimeout(()=>S.foto.userData.tarih&&_t("\u{1F4F7} "+Hd(S.foto.userData.tarih)),600)):S.act==="pisir"?(Vd(g,7),x||Dm()):S.act==="cay"?(Vd(g,4),x||Lm()):S.act==="buzdolabi"&&!x?Wd():S.act==="yildiz"&&(Um(g),x||(Yt(3,"Dilek tuttun \u{1F320}","yildiz"),si()))})}else if(S.act==="bahce"){await Om(h,g,x);return}else if(S.act==="hediye"){await Gm(h,g,x);return}else if(S.act==="kapi"){x||ea();return}x||jn({t:"kullan",id:S.id})}let Cm=["Ocak","\u015Eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011Fustos","Eyl\xFCl","Ekim","Kas\u0131m","Aral\u0131k"],Hd=h=>{let[g,x,S]=String(h).split("-").map(Number);return`${S} ${Cm[x-1]} ${g}`};function Pm(){let h=Ne.A.yer,g=Ne.B.yer;h&&g&&h.m===g.m&&Ne.A.durum==="oturuyor"&&Ne.B.durum==="oturuyor"&&Yt(10,"Yan yana oturdunuz \u{1F6CB}\uFE0F","yanyana");let x=ce.mutfak;x&&x.yemek&&!x.yendi&&Date.now()-x.at>6e3&&ne(yt.g.position.x).id==="mutfak"&&yt.durum==="oturuyor"&&(h&&g&&Ne.A.durum==="oturuyor"&&Ne.B.durum==="oturuyor"&&ne(Ne.A.g.position.x).id==="mutfak"&&ne(Ne.B.g.position.x).id==="mutfak"?(x.yendi=Date.now(),ht(),Xs(yt.g.position.x,yt.g.position.z,10),Yt(15,`${x.yemek} birlikte yendi, afiyet olsun \u{1F60B}`,"yemek"),si()):_t(`\u{1F372} Masada ${x.yemek} var \xB7 ${o[Lt.rol]} de otursun, birlikte yiyin`))}let Gd=["Menemen","Mant\u0131","Karn\u0131yar\u0131k","\u0130skender","Mercimek \xE7orbas\u0131","Kuru fasulye pilav","Lahmacun","Yaprak sarma","Su b\xF6re\u011Fi","K\xFCnefe","Kumpir","F\u0131r\u0131n makarna","Tavuk sote","K\xF6fte patates"],Im=Mn(64,64,h=>{let g=h.createRadialGradient(32,32,2,32,32,30);g.addColorStop(0,"rgba(255,255,255,.9)"),g.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=g,h.fillRect(0,0,64,64)});function Vd(h,g){let x=h.userData.kutu||{x0:h.position.x,x1:h.position.x,z0:h.position.z,z1:h.position.z,y1:1},S=(x.x0+x.x1)/2,R=(x.z0+x.z1)/2,U=Math.min(x.y1,1.3),G=0,W=setInterval(()=>{for(let ve=0;ve<2;ve++)ao(Im,S+(Math.random()-.5)*.4,U,R+(Math.random()-.5)*.3,.25+Math.random()*.2,{vy:.35+Math.random()*.2,vx:(Math.random()-.5)*.1,omur:1.8});++G>g*5&&clearInterval(W)},200)}function Dm(){let h=ce.mutfak;if(h&&h.yemek&&!h.yendi){_t(`\u{1F372} Masada zaten ${h.yemek} var, \xF6nce yiyin`);return}let g=Gd[Math.floor(Math.random()*Gd.length)];ce.mutfak=Object.assign(ce.mutfak||{},{yemek:g,at:Date.now(),pisiren:t,yendi:0}),_t(`\u{1F525} ${g} pi\u015Fiyor\u2026`),Yt(5,`${g} pi\u015Firdin \u{1F373}`,"pisir"),setTimeout(()=>{ht(),_t(`\u{1F372} ${g} haz\u0131r! Masaya oturun`),si()},6500)}function Lm(){ce.mutfak=Object.assign(ce.mutfak||{},{cay:Date.now()}),ht(),Yt(2,"\xC7ay demledin \u{1FAD6}","cay"),si(),setTimeout(()=>_t("\u2615 \xC7aylar masada, tav\u015Fan kan\u0131"),1200)}let Ws=[];function km(){Ws.forEach(S=>S.parent&&S.parent.remove(S)),Ws.length=0;let h=ce.mutfak||{};[...It.values()].filter(S=>S.userData.masa).forEach(S=>{let R=S.userData.kutu,U=(R.x0+R.x1)/2,G=(R.z0+R.z1)/2,W=R.y1;if(h.yemek&&!h.yendi&&Date.now()-(h.at||0)>6e3&&ne(U).id==="mutfak"&&(Me.m_food_stew||Me.m_stew_bowl)){let ve=(Me.m_food_stew||Me.m_stew_bowl).clone(!0);ve.scale.setScalar(.4),ve.position.set(U,W,G),ve.traverse(Pe=>{Pe.isMesh&&(Pe.castShadow=!0)}),c.add(ve),Ws.push(ve)}h.cay&&Date.now()-h.cay<3*te&&[[-.32,.1],[.32,-.1]].forEach(([ve,Pe])=>{let Ue=RM();Ue.position.set(U+ve,W,G+Pe),Ue.scale.setScalar(1.4),c.add(Ue),Ws.push(Ue)})});let x=[...It.values()].find(S=>S.userData.act==="buzdolabi");if(x&&ce.buzNot&&ce.buzNot.t){let S=new le(new _n(.32,.32),new Ye({color:ce.buzNot.kimden===t?"#ffe89a":"#ffc9d8",roughness:.8})),R=x.userData.kutu;S.position.set((R.x0+R.x1)/2+.15,1.25,R.z1+.01),S.rotation.z=.08,c.add(S),Ws.push(S);let U=new le(new Un(.03,8,6),new Ye({color:"#C9233F"}));U.position.copy(S.position).add(new k(0,.13,.02)),c.add(U),Ws.push(U)}}function Wd(){let h=jt("#leBuz"),g=ce.buzNot,x=Le("textarea",{rows:3,maxlength:140,placeholder:"Buzdolab\u0131na bir not as\u2026 (s\xFCt bitti, seni seviyorum\u2026)"}),S=Le("button",{type:"button",class:"le-ana"},"\u{1F9F2} Notu as");S.onclick=()=>{let R=x.value.trim();if(!R){x.focus();return}ce.buzNot={kimden:t,t:R,at:Date.now()},ht(),h.classList.remove("on"),_t("\u{1F9F2} Not buzdolab\u0131nda")},h.replaceChildren(...[Le("div",{class:"le-sh"},Le("h3",null,"Buzdolab\u0131"),Le("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),g&&g.t?Le("div",{class:"le-buznot"+(g.kimden===t?" ben":"")},Le("p",null,g.t),Le("small",null,`${g.kimden===t?"Senin notun":o[Lt.rol]} \xB7 ${tf(new Date(g.at).toISOString())}`)):Le("p",{class:"le-sub"},"Buzdolab\u0131nda not yok."),Le("p",{class:"le-sub"},`Bug\xFCn buzdolab\u0131nda: ${["s\xFCt","yo\u011Furt","beyaz peynir","zeytin","domates","\xE7ilek","ayran","sucuk","ka\u015Far","yumurta"].sort(()=>Math.random()-.5).slice(0,4).join(", ")} \u{1F9C0}`),x,S].filter(Boolean)),h.classList.add("on")}let Nm=Mn(256,32,h=>{let g=h.createLinearGradient(0,0,256,0);g.addColorStop(0,"rgba(255,255,255,0)"),g.addColorStop(1,"rgba(255,248,220,1)"),h.fillStyle=g,h.fillRect(0,12,256,8),h.fillStyle="#fff",h.beginPath(),h.arc(246,16,7,0,7),h.fill()});function Um(h){let g=new Da(new kr({map:Nm,transparent:!0,depthWrite:!1,rotation:-.35,fog:!1}));g.position.set(h.position.x-6,6.5,-9),g.scale.set(3.2,.4,1),g.userData={vx:9,vy:-2.6,vz:0,g:0,t:0,omur:1.4},c.add(g),Jr.push(g),na(h.position.x-1,2.4,h.position.z-2,7,1,2.2)}async function Om(h,g,x){let S=g.userData.i,R=ce.bahce[S]||(ce.bahce[S]={});await pi(h,g.position.x,g.position.z-.9,async()=>{if(mc(h,g.position.x,g.position.z),x){await h.bir("PickUp"),h.oyna("Idle");return}let U=q(R);if(U<0){if(!pn(5))return;await h.bir("PickUp"),h.oyna("Idle"),ce.bahce[S]={ekim:Date.now(),su:Date.now(),renk:C[Math.floor(Math.random()*C.length)],eken:t},ht(),_t("\u{1F331} Lale ektin! 6 saatte a\xE7ar, arada sula \u{1F4A7}"),si()}else U===3?(await h.bir("PickUp"),h.oyna("Idle"),ce.bahce[S]={},ce.toplanan=(ce.toplanan||0)+1,ht(),Xs(g.position.x,g.position.z,8),Yt(15,"Lale toplad\u0131n \u{1F337}"),si()):Date.now()-(R.su||0)>2*te?(await h.bir("Interact"),h.oyna("Idle"),Hm(g.position.x,g.position.z),R.su=Date.now(),ht(),Yt(1,"Sulad\u0131n \u{1F4A7}","sula",8),si()):(await h.bir("Interact"),h.oyna("Idle"),_t(`\u{1F4A7} Sulanm\u0131\u015F \xB7 ${qe(R)}`));jn({t:"kullan",id:g.userData.id})})}let Jr=[],Fm=Mn(64,64,h=>{h.font="52px serif",h.textAlign="center",h.textBaseline="middle",h.fillText("\u{1F497}",32,36)}),zm=Mn(32,32,h=>{h.fillStyle="#7cc7ff",h.beginPath(),h.arc(16,18,9,0,7),h.fill()}),LM=Mn(64,64,h=>{h.font="bold 40px sans-serif",h.fillStyle="#9C7BD3",h.textAlign="center",h.textBaseline="middle",h.fillText("z",32,34)}),Bm=Mn(16,16,h=>{h.fillStyle="#fff",h.fillRect(0,0,16,10)});function ao(h,g,x,S,R,U,G){let W=new Da(new kr({map:h,transparent:!0,depthWrite:!1,color:G||"#ffffff"}));return W.position.set(g,x,S),W.scale.setScalar(R),W.userData=Object.assign({vx:0,vy:0,vz:0,g:0,t:0,omur:1.6},U),c.add(W),Jr.push(W),W}function Xs(h,g,x=10,S=1.6){for(let R=0;R<x;R++)ao(Fm,h+(Math.random()-.5)*.6,S+Math.random()*.3,g+(Math.random()-.5)*.6,.28+Math.random()*.2,{vy:.5+Math.random()*.6,vx:(Math.random()-.5)*.3})}function Hm(h,g){for(let x=0;x<14;x++)ao(zm,h+(Math.random()-.5)*1.1,1.2+Math.random()*.4,g+(Math.random()-.5)*.6,.09,{vy:-1.6-Math.random(),omur:.8})}function gc(h,g,x,S=40){let R=["#C9233F","#E8577A","#F7A8BE","#f5a524","#9C7BD3","#5b9e5a"];for(let U=0;U<S;U++){let G=Math.random()*6.283,W=1+Math.random()*1.6;ao(Bm,h,g,x,.07,{vx:Math.cos(G)*(.5+Math.random()),vz:Math.sin(G)*(.5+Math.random()),vy:W*1.8,g:4.5,omur:1.8},R[U%R.length])}}async function Gm(h,g,x){let S=ce.hediyeler.find(R=>R.id===g.userData.id);if(S){if(!x&&S.kimden===t){_t(`\u{1F381} Bu hediye ${o[Lt.rol]} i\xE7in, o a\xE7acak`);return}await pi(h,g.position.x,g.position.z+.6,async()=>{mc(h,g.position.x,g.position.z),await h.bir("PickUp"),h.oyna("Idle");let R=g.userData.kapak,U=performance.now(),G=()=>{let W=Math.min(1,(performance.now()-U)/700);R.position.y=.26+W*.35,R.rotation.z=W*.9,W<1&&requestAnimationFrame(G)};G(),gc(g.position.x,(S.y||0)+.4,g.position.z,50),Xs(g.position.x,g.position.z,10,1.1),!x&&(S.acildi=Date.now(),S.acan=t,setTimeout(()=>{ht()},1600),Yt(5,"Hediye a\xE7t\u0131n \u{1F381}"),Xd(S))})}}let oo=[["\u{1F337}","Lale","#C9233F"],["\u{1F36B}","\xC7ikolata","#7a4a2c"],["\u{1F48C}","Mektup","#E8577A"],["\u{1F9F8}","Ay\u0131c\u0131k","#c99561"],["\u2615","Kahve","#34131F"],["\u{1F48D}","S\xFCrpriz","#9C7BD3"]];function Xd(h){let g=oo.find(S=>S[0]===h.tur)||oo[0],x=jt("#leKart");x.replaceChildren(Le("div",{class:"le-kart-ic"},Le("span",{class:"le-kart-em"},g[0]),Le("small",null,`${o[r(h.kimden)||"A"]} sana ${g[1].toLocaleLowerCase("tr")} b\u0131rakt\u0131`),Le("p",null,h.not||"\u{1F90D}"),Le("em",null,Hd(new Date(h.at).toISOString().slice(0,10))),Le("button",{type:"button",onclick:()=>x.classList.remove("on")},"Kapat \u{1F90D}"))),x.classList.add("on")}function qd(){let h=jt("#leHediye"),g=oo[0],x=ce.hediyeler.filter(W=>W.kimden===t&&!W.acildi),S=ce.hediyeler.filter(W=>W.kimden!==t).slice(-6).reverse(),R=Le("textarea",{rows:3,maxlength:160,placeholder:`${o[Lt.rol]} hediyeyi a\xE7\u0131nca bunu okuyacak\u2026`}),U=Le("div",{class:"le-turlar"},...oo.map(W=>{let ve=Le("button",{type:"button",class:W===g?"on":"",onclick:()=>{g=W,U.querySelectorAll("button").forEach(Pe=>Pe.classList.remove("on")),ve.classList.add("on")}},Le("span",null,W[0]),W[1]);return ve})),G=Le("button",{type:"button",class:"le-ana"},"Hediyeyi b\u0131rak \xB7 \u{1F337} 10");G.onclick=()=>{if(x.length>=3){_t("\u{1F381} A\xE7\u0131lmam\u0131\u015F 3 hediyen var, \xF6nce onlar\u0131 a\xE7s\u0131n");return}if(!pn(10))return;let W=[...It.values()].find(Je=>Je.userData.ustY),ve,Pe,Ue=0;W&&!ce.hediyeler.some(Je=>!Je.acildi&&Je.y)?(ve=W.position.x+.42,Pe=W.position.z+.05,Ue=W.userData.ustY):(ve=yt.g.position.x+.5,Pe=yt.g.position.z+.3),ce.hediyeler.push({id:"h"+Date.now().toString(36),kimden:t,tur:g[0],renk:g[2],not:R.value.trim(),x:ve,z:Pe,y:Ue,r:Math.random()*1.5,at:Date.now()}),ce.hediyeler=ce.hediyeler.slice(-30),ht(),h.classList.remove("on"),_t(`\u{1F381} Hediye b\u0131rak\u0131ld\u0131, ${o[Lt.rol]} a\xE7\u0131nca haberin olacak`),Xs(ve,Pe,6,1)},h.replaceChildren(...[Le("div",{class:"le-sh"},Le("h3",null,"Hediye b\u0131rak"),Le("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),Le("p",{class:"le-sub"},`${o[Lt.rol]} oyuna girince sehpada bulacak. A\xE7\u0131nca konfeti patlar, notunu okur.`),U,R,G,S.length?Le("div",{class:"le-gecmis"},Le("p",{class:"le-sub"},"Sana gelen hediyeler"),...S.map(W=>Le("button",{type:"button",class:"le-gh",onclick:()=>W.acildi&&Xd(W)},Le("span",null,W.tur),Le("b",null,W.not?W.not.slice(0,40)+(W.not.length>40?"\u2026":""):"Notsuz"),Le("em",null,W.acildi?"\u2713":"evde, a\xE7\u0131lmad\u0131")))):null].filter(Boolean)),h.classList.add("on")}let qs=null,lo=!1,co=0,bc=[["Yal\u0131n \xB7 Yeniden","muzik/yeniden.mp3.bin"],["Yal\u0131n \xB7 Ben Bilmem","muzik/ben-bilmem.mp3.bin"]];async function Vm(){if(!s.decUrl){_t("M\xFCzik i\xE7in siteden giri\u015F gerekli");return}if(lo){qs.pause(),lo=!1,co=(co+1)%bc.length,_t("\u23F8 M\xFCzik durdu");return}try{qs=qs||new Audio,qs.loop=!0,qs.src=await s.decUrl(bc[co][1]),await qs.play(),lo=!0,_t("\u{1F3B5} "+bc[co][0])}catch{_t("M\xFCzik a\xE7\u0131lamad\u0131")}}async function ho(h,g,x){if(g==="saril")return x?void 0:($r&&oa(!1),xs.request(h));if(!h.hugLock){if(g==="sevin")await ro(h),Xs(h.g.position.x,h.g.position.z,6),await h.bir("Cheer"),h.oyna("Idle");else if(g==="selam")await ro(h),await h.bir("Interact"),h.oyna("Idle");else if(g==="kos"){let S=me.x0+1+Math.random()*7,R=P+.6+Math.random()*2.6;await pi(h,S,R,null,!0)}x||jn({t:"emote",tur:g})}}let $r=!1,js=!1,mi=new le(new Ha(.5,.56,48),new zt({color:"#E8577A",transparent:!0,opacity:.9,depthWrite:!1}));mi.rotation.x=-Math.PI/2,mi.position.y=.03,mi.visible=!1,c.add(mi);function uo(){Fe=null,js=!1,mi.visible=!1,aa()}function Qr(h){Fe=h,js=!1;let g=h.userData.kutu;mi.position.set((g.x0+g.x1)/2,.03,(g.z0+g.z1)/2),mi.scale.setScalar(Math.max(g.x1-g.x0,g.z1-g.z0)*.95+.3),mi.visible=!0,aa()}let _c=h=>ce.esyalar.find(g=>g.id===h.userData.id);function xc(h,g){let x=g.userData.kutu,S=x.x1-x.x0,R=x.z1-x.z0,U=h.x+((x.x0+x.x1)/2-g.position.x),G=h.z+((x.z0+x.z1)/2-g.position.z),W={x0:U-S/2,x1:U+S/2,z0:G-R/2,z1:G+R/2},ve=ne(g.position.x);if(W.x0<ve.ox-ke.w/2+.05||W.x1>ve.ox+ke.w/2-.05||W.z0<-ke.d/2+.05||W.z1>ke.d/2+.2||ne(h.x)!==ve)return"Odan\u0131n d\u0131\u015F\u0131na ta\u015F\u0131yor";if(g.userData.zemin)return"";for(let Pe of It.values()){if(Pe===g||Pe.userData.zemin)continue;let Ue=Pe.userData.kutu;if(W.x0<Ue.x1-.02&&W.x1>Ue.x0+.02&&W.z0<Ue.z1-.02&&W.z1>Ue.z0+.02)return"Burada ba\u015Fka e\u015Fya var"}return""}function jd(h,g){let x=ne(h),S=x.ox-ke.w/2,R=(U,G,W)=>Math.max(G,Math.min(W,U));return h-S<g+ke.d/2?{x:S+.12,z:Math.round(R(g,-ke.d/2+1,ke.d/2-1.2)*4)/4,r:Math.PI/2}:{x:Math.round(R(h,S+1,x.ox+ke.w/2-1)*4)/4,z:-ke.d/2+.12,r:0}}function Wm(h,g){let x=_c(Fe);if(!x)return;if(Fe.userData.asili){Object.assign(x,jd(h,g)),Ei(Fe,x),ht(),Qr(Fe),_t("\u2713 Duvara as\u0131ld\u0131");return}let S={x:Math.round(h*4)/4,z:Math.round(g*4)/4},R=xc(S,Fe);if(R){_t("\u{1F645} "+R);return}Object.assign(x,S),ht(),Qr(Fe),_t("\u2713 Yerle\u015Fti")}function Xm(){let h=_c(Fe);if(!h)return;if(Fe.userData.asili){_t("\u{1F5BC}\uFE0F Duvar s\xFCs\xFC: ta\u015F\u0131y\u0131nca en yak\u0131n duvara as\u0131l\u0131r");return}let g=h.r||0;if(h.r=(g+Math.PI/2)%(Math.PI*2),Ei(Fe,h),xc(h,Fe)){h.r=g,Ei(Fe,h),_t("\u{1F645} D\xF6nd\xFCr\xFCnce s\u0131\u011Fm\u0131yor");return}ht(),Qr(Fe)}function qm(){let h=_c(Fe);h&&(ce.esyalar=ce.esyalar.filter(g=>g!==h),ce.depo.push(h.t),uo(),ht(),_t("\u{1F4E6} Depoya kald\u0131r\u0131ld\u0131"))}function jm(h){let[g,x]=[yt.g.position.x,yt.g.position.z],S=ne(g).ox;h.position.x=S;for(let R=0;R<8;R+=.5)for(let U=0;U<16;U++){let G=Math.max(S-3.8,Math.min(S+3.8,g+Math.cos(U/16*6.283)*R)),W=Math.max(-3,Math.min(3,x+Math.sin(U/16*6.283)*R)),ve={x:Math.round(G*4)/4,z:Math.round(W*4)/4};if(!xc(ve,h))return ve}return null}function yc(h,g){let x=Ce[h];if(!x)return;if(g&&gt()<x[2]){_t(`\u{1F337} ${x[2]} lale puan\u0131 laz\u0131m, ${gt()} var`);return}let S={id:"e"+Date.now().toString(36),t:h,x:0,z:0,r:0},R=Yr(S),U=R.userData.asili?jd(yt.g.position.x,yt.g.position.z):jm(R);if(!U){c.remove(R),It.delete(S.id),_t("\u{1F645} Odada yer kalmad\u0131, bir \u015Feyi depoya kald\u0131r");return}if(g)pn(x[2]);else{let G=ce.depo.indexOf(h);G>=0&&ce.depo.splice(G,1)}Object.assign(S,U),Ei(R,S),ce.esyalar.push(S),ht(),_o(),oa(!0),Qr(R),js=!0,aa(),_t("Yeni yerine dokun \xB7 \u21BB ile \xE7evir")}let Ym=h=>new k(h.ox,.6,h.id==="salon"?1.6:0),Km=m.position.x;function vc(h,g){let x=Ym(h),S=p.position.clone().sub(_.target);g?(_.target.copy(x),p.position.copy(x).add(S)):An={t0:performance.now(),sure:700,ft:_.target.clone(),fp:p.position.clone(),tt:x,tp:x.clone().add(S)},m.position.x=Km+h.ox,m.target.position.x=h.ox,we.visible=h.id==="salon",ii(),fo()}function Zm(h){let g=jt("#lePerde");if(!g)return h();g.classList.add("on"),setTimeout(()=>{h(),setTimeout(()=>g.classList.remove("on"),120)},280)}async function Ys(h,g,x){if(h.hugLock)return;let S=j.find(U=>U.id===g);if(!S)return;if(!ut(g)){x||ea();return}if(ne(h.g.position.x)===S){h===yt&&vc(S);return}h.token=(h.token||0)+1,h.path=[],h.sonra=null;let R=async()=>{h.durum!=="ayakta"&&(h.durum="ayakta",h.yer=null,h.oyna("Idle")),h.g.position.set(S.ox-ke.w/2+.75,0,S.id==="teras"?2.4:2.2),h.g.rotation.y=Math.PI/2,h===yt&&vc(S,!0)};h===yt?Zm(R):await R(),x||(jn({t:"oda",id:g}),mo()),h===yt&&setTimeout(()=>_t(`${S.em} ${S.ad}`),400)}async function Yd(h){let g=j.find(S=>S.id===h);if(!g||ut(h)||!pn(g.fiyat))return;h==="mutfak"&&await Xe(),ce.odalar=ce.odalar||{},ce.odalar[h]=!0,(Ge[h]||[]).forEach(([S,R,U,G],W)=>ce.esyalar.push({id:"o"+h+W+Date.now().toString(36).slice(-3),t:S,x:g.ox+R,z:U,r:G})),ht(),gc(yt.g.position.x,1.5,yt.g.position.z,60),_t(`\u{1F389} ${g.ad} a\xE7\u0131ld\u0131!`);let x=jt("#leOdaSec");x&&x.classList.remove("on"),_o(),setTimeout(()=>Ys(yt,h),900)}function fo(){let h=jt("#leOdalar");if(!h||!Ne)return;let g=ne(yt.g.position.x).id,x=ne(Lt.g.position.x).id;h.replaceChildren(...j.map(S=>Le("button",{type:"button",class:(S.id===g?"on ":"")+(ut(S.id)?"":"kilit"),onclick:()=>ut(S.id)?Ys(yt,S.id):ea()},S.em+" "+S.ad,ut(S.id)?S.id===x&&Lt.online?Le("i",{class:"o"},o[Lt.rol][0]):null:Le("i",null,"\u{1F512}"))))}function ea(){let h=jt("#leOdaSec");h.replaceChildren(Le("div",{class:"le-sh"},Le("h3",null,"Evimiz"),Le("span",{class:"le-pp"},"\u{1F337} "+gt()),Le("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),Le("p",{class:"le-sub"},"Odalara git ya da lale puan\u0131yla yeni oda a\xE7. Her odan\u0131n kendine \xF6zel \u015Feyleri var."),Le("div",{class:"le-odalist"},...j.map(g=>Le("div",{class:"le-oda"+(ut(g.id)?"":" kilit")},Le("span",null,g.em),Le("div",null,Le("b",null,g.ad),Le("small",null,{salon:"Koltuk, pikap, bah\xE7e ve laleler",yatak:'\xC7ift ki\u015Filik yatak, foto\u011Fraflar\u0131m\u0131z \xB7 birlikte yat\u0131nca "\u0130yi geceler"',mutfak:"Ocakta yemek pi\u015Fir, birlikte ye, semaverde \xE7ay demle, buzdolab\u0131na not as",teras:"\u0130stanbul manzaras\u0131, ip lambalar, teleskopla kayan y\u0131ld\u0131za dilek tut"}[g.id])),ut(g.id)?Le("button",{type:"button",class:"le-git",onclick:()=>{h.classList.remove("on"),Ys(yt,g.id)}},ne(yt.g.position.x)===g?"Buradas\u0131n":"Git"):Le("button",{type:"button",class:"le-git ac"+(gt()<g.fiyat?" pahali":""),onclick:()=>Yd(g.id)},`A\xE7 \xB7 \u{1F337} ${g.fiyat}`))))),h.classList.add("on")}let Kd=new Xa,Zd=new ue,ta=null;l.domElement.addEventListener("pointerdown",h=>{ta=[h.clientX,h.clientY,performance.now()],An&&!An.geri&&(An=null)});let po=h=>{let g=h.object;for(;g;){if(pe.has(g)||H.includes(g)||Ti.includes(g)||nt.includes(g)||Hn.has(g.userData&&g.userData.id)||It.get(g.userData&&g.userData.id)===g||g===Ne.A.g||g===Ne.B.g)return g;g=g.parent}return null};l.domElement.addEventListener("pointerup",h=>{if(!ta||Math.hypot(h.clientX-ta[0],h.clientY-ta[1])>8||performance.now()-ta[2]>450)return;let g=l.domElement.getBoundingClientRect();Zd.set((h.clientX-g.left)/g.width*2-1,-(h.clientY-g.top)/g.height*2+1),Kd.setFromCamera(Zd,p);let x=Kd.intersectObjects([...It.values(),...Ti,...nt,...Hn.values(),Ne.A.g,Ne.B.g,...H,...pe],!0);if($r){let S=x.find(U=>pe.has(po(U)));if(Fe&&js){S&&Wm(S.point.x,S.point.z);return}let R=x.find(U=>{let G=po(U);return G&&It.get(G.userData.id)===G});R?Qr(po(R)):uo();return}for(let S of x){let R=po(S);if(R){if(R===Ne.A.g||R===Ne.B.g){let U=R===Ne.A.g?Ne.A:Ne.B;if(U===yt){na(U.g.position.x,U.boy*.6,U.g.position.z,4.6);return}ho(yt,"saril");return}if(pe.has(R)){if(ne(S.point.x)!==ne(yt.g.position.x))return;pi(yt,S.point.x,S.point.z,()=>mo()),Jd(S.point.x,S.point.z),jn({t:"git",x:S.point.x,z:S.point.z});return}if(R.userData.act){Zr(yt,R),Jd(R.position.x,R.position.z);return}}}});let gi=new le(new Ha(.18,.26,32),new zt({color:"#E8577A",transparent:!0,opacity:0,depthWrite:!1}));gi.rotation.x=-Math.PI/2,gi.position.y=.02,c.add(gi);function Jd(h,g){gi.position.x=h,gi.position.z=g,gi.material.opacity=.9,gi.scale.setScalar(.6)}let An=null;function na(h,g,x,S=5.2,R=.9,U=0){let G=p.position.clone().sub(_.target).normalize().multiplyScalar(S),W=U?{t:_.target.clone(),p:p.position.clone()}:null;An={t0:performance.now(),sure:R*1e3,ft:_.target.clone(),fp:p.position.clone(),tt:new k(h,g,x),tp:new k(h,g,x).add(G),geri:U,eski:W}}function Jm(){if(!An)return;let h=Math.min(1,(performance.now()-An.t0)/An.sure),g=h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;if(_.target.lerpVectors(An.ft,An.tt,g),p.position.lerpVectors(An.fp,An.tp,g),h>=1){let x=An;An=null,x.geri&&x.eski&&setTimeout(()=>{An={t0:performance.now(),sure:900,ft:_.target.clone(),fp:p.position.clone(),tt:x.eski.t,tp:x.eski.p}},x.geri*1e3)}}let $m=()=>{let h=ne(yt.g.position.x);na(h.ox,.6,h.id==="salon"?1.6:0,p.aspect<1?h.id==="salon"?24:20:h.id==="salon"?19:16)},ia=h=>({x:+h.g.position.x.toFixed(2),z:+h.g.position.z.toFixed(2),r:+h.g.rotation.y.toFixed(2),d:h.durum,yer:h.yer?{id:h.yer.m.userData.id}:null});function jn(h){Dt&&Dt.send({type:"broadcast",event:"m",payload:Object.assign({who:t,rol:a},h)})}let $d=h=>It.get(h)||Ti.find(g=>g.userData.id===h)||nt.find(g=>g.userData.id===h)||Hn.get(h);function Qd(h,g,x){if(!h.hugLock&&g){if(g.yer){let S=$d(g.yer.id);if(S){x&&h.g.position.set(g.x,0,g.z),Zr(h,S,!0);return}}x?(h.g.position.set(g.x,0,g.z),h.g.rotation.y=g.r||0):pi(h,g.x,g.z)}}let ef=0;function mo(){Tt||(clearTimeout(ef),ef=setTimeout(()=>{i.from("state").upsert({scope:"oyun",id:t,value:Object.assign(ia(yt),{at:new Date().toISOString()})},{onConflict:"scope,id"}).then(()=>{},()=>{})},1200))}addEventListener("pagehide",()=>{Tt||i.from("state").upsert({scope:"oyun",id:t,value:Object.assign(ia(yt),{at:new Date().toISOString()})},{onConflict:"scope,id"})});function go(h,g){Lt.online=h,Lt.tag.classList.toggle("off",!h),Lt.tag.querySelector("i").textContent=h?"":g?"\u{1F4A4}":"";let x=jt("#leDurum");x&&(x.textContent=h?`${o[Lt.rol]} ${ne(Lt.g.position.x).yer} \u{1F7E2}`:`${o[Lt.rol]} \u015Fu an yok`+(g?" \xB7 "+g:""),x.classList.toggle("on",h)),h&&Yt(10,`${o[Lt.rol]} ile ayn\u0131 anda evdesiniz \u{1F3E1}`,"birlikte")}let tf=h=>{let g=(Date.now()-Date.parse(h))/6e4;return g>=0?g<2?"az \xF6nce":g<60?Math.round(g)+" dk \xF6nce":g<1440?Math.round(g/60)+" sa \xF6nce":Math.round(g/1440)+" g\xFCn \xF6nce":""};if(Tt)try{let h=JSON.parse(localStorage.getItem("le-ev")||"null");h&&h.esyalar&&(ce=h);let g=JSON.parse(localStorage.getItem("le-puan")||"null");g&&(Qe[t]=g)}catch{}else try{let{data:h}=await i.from("state").select("scope,id,value").in("scope",["oyun_ev","oyun_puan"]);(h||[]).forEach(g=>{g.scope==="oyun_ev"&&g.value&&g.value.esyalar&&(ce=g.value),g.scope==="oyun_puan"&&(Qe[g.id.toLowerCase()]=g.value||{})})}catch{}if(Qe[t]||(Qe[t]={kazanc:30}),ce.odalar&&ce.odalar.mutfak)try{await Xe()}catch{}ce.esyalar.forEach(h=>{h.t==="chair_A_wood"&&Math.abs(h.x+2.5)<.01&&(Math.abs(h.z-1.55)<.01?h.z=1.3:Math.abs(h.z-3.05)<.01&&(h.z=3.3))}),ce.esyalar=ce.esyalar.filter(h=>Ce[h.t]),ce.depo=(ce.depo||[]).filter(h=>Ce[h]),delete ce.kedi;let nf=!1;if(ce.bizim1||(ce.bizim1=!0,ce.depo.push("polaroid_ip","tarih_cerceve"),nf=!0),Ht(),Tt)go(!1,"");else{try{let{data:h}=await i.from("state").select("id,value").eq("scope","oyun"),g=null;(h||[]).forEach(S=>{let R=S.id.toLowerCase(),U=R===t?yt:Lt;R!==t&&(g=S.value&&S.value.at),Qd(U,S.value,!0)});let x=[...It.values()].find(S=>S.userData.act==="yat");if(g&&Date.now()-Date.parse(g)>30*6e4&&x){let S=zd(Lt,x);Lt.g.position.set(S.cik[0],0,S.cik[1]),Zr(Lt,x,!0)}go(!1,g?tf(g):"")}catch{}try{Dt=i.channel("lale-evi",{config:{presence:{key:t},broadcast:{self:!1}}}),Dt.on("broadcast",{event:"m"},({payload:h})=>{if(!h||h.who===t)return;let g=Ne[h.rol]||Lt;if(h.t==="hug"){xs.receive(h.plan,h.rol);return}if(h.t==="git")ne(h.x)!==ne(g.g.position.x)?Ys(g,ne(h.x).id,!0).then(()=>pi(g,h.x,h.z)):pi(g,h.x,h.z);else if(h.t==="oda")Ys(g,h.id,!0),fo();else if(h.t==="kullan"){let x=$d(h.id);x&&Zr(g,x,!0)}else if(h.t==="emote")ho(g,h.tur,!0);else if(h.t==="selam?")jn(Object.assign({t:"durum"},ia(yt)));else if(h.t==="durum")Qd(g,h,!1);else if(h.t==="ev"&&h.ev&&h.ev.esyalar){let x=(h.ev.hediyeler||[]).filter(S=>!S.acildi&&S.kimden!==t&&!ce.hediyeler.some(R=>R.id===S.id));ce=h.ev,Ht(),x.length&&_t(`\u{1F381} ${o[Lt.rol]} sana hediye b\u0131rakt\u0131!`)}else h.t==="puan"&&h.v&&(Qe[h.who]=h.v,ra())}),Dt.on("presence",{event:"sync"},()=>{let h=Dt.presenceState();go(Object.keys(h).some(g=>g!==t),"")}),Dt.on("presence",{event:"join"},({key:h})=>{h!==t&&(_t(`${o[Lt.rol]} eve geldi \u{1F3E1}`),jn(Object.assign({t:"durum"},ia(yt))))}),Dt.on("presence",{event:"leave"},({key:h})=>{h!==t&&(xs.cancel(),go(!1,"az \xF6nce"))}),Dt.subscribe(h=>{h==="SUBSCRIBED"&&(Dt.track({at:Date.now()}),jn({t:"selam?"}))})}catch{Dt=null}}vc(ne(yt.g.position.x),!0),setInterval(()=>{if(fo(),Lt.online){let h=jt("#leDurum");h&&(h.textContent=`${o[Lt.rol]} ${ne(Lt.g.position.x).yer} \u{1F7E2}`)}},2500);{let h=ce.hediyeler.filter(g=>!g.acildi&&g.kimden!==t);h.length&&setTimeout(()=>_t(`\u{1F381} Sehpada senin i\xE7in ${h.length>1?h.length+" hediye":"bir hediye"} var!`),3200)}let sa={soru:!1,duygu:!1,not:!1};async function Qm(){if(Tt)return;let h=Ze();try{let g=await i.from("soru_cevap").select("day").eq("day",h).eq("author",t);sa.soru=!!(g.data&&g.data.length)}catch{}try{((await i.from("state").select("scope,updated_at").in("scope",["duygu","not"]).eq("updated_by",t).gte("updated_at",h+"T00:00:00+03:00")).data||[]).forEach(x=>{sa[x.scope]=!0})}catch{}sa.soru&&Yt(10,"G\xFCn\xFCn sorusunu cevaplad\u0131n \u2753","soru"),sa.duygu&&Yt(5,"Duygunu se\xE7tin \u{1F3A8}","duygu"),sa.not&&Yt(5,"Not b\u0131rakt\u0131n \u{1F4CC}","not"),si()}let sf=()=>{let h=et(),g=h.al||{},x=ce.bahce.filter(U=>U.ekim&&q(U)<3&&Date.now()-(U.su||0)>2*te).length,S=ce.bahce.filter(U=>q(U)===3).length,R=ce.hediyeler.filter(U=>!U.acildi&&U.kimden!==t).length;return[["\u{1F3E1}","Eve u\u011Fra",10,!!g.giris],["\u2753","Sitede g\xFCn\xFCn sorusunu cevapla",10,!!g.soru],["\u{1F3A8}","Sitede bug\xFCnk\xFC duygunu se\xE7",5,!!g.duygu],["\u{1F4CC}",`${o[Lt.rol]} i\xE7in sitede not b\u0131rak`,5,!!g.not],["\u{1F4A7}",x?`${x} lale su bekliyor`:"Laleleri sula","1 / lale",x===0&&ce.bahce.some(U=>U.ekim)],["\u{1F337}",S?`${S} lale a\xE7t\u0131, topla!`:"A\xE7an laleyi topla",15,!1],["\u{1F381}",R?`Sehpada ${R} hediye var, a\xE7!`:"Hediye gelirse a\xE7",5,R===0],["\u{1F917}",`Sar\u0131l (${g.saril||0}/5)`,3,(g.saril||0)>=5],["\u{1F6CB}\uFE0F","Ayn\u0131 koltukta yan yana otur",10,!!g.yanyana],["\u{1F3E0}",`${o[Lt.rol]} ile ayn\u0131 anda evde ol`,10,!!g.birlikte],...ut("mutfak")?[["\u{1F373}","Mutfakta yemek pi\u015Fir",5,!!g.pisir],["\u{1F60B}","Mutfak masas\u0131nda birlikte ye",15,!!g.yemek],["\u{1FAD6}","Semaverde \xE7ay demle",2,!!g.cay]]:[["\u{1F373}","Mutfa\u011F\u0131 a\xE7 (Evimiz)","",!1]],...ut("yatak")?[["\u{1F319}",'Ayn\u0131 yatakta "iyi geceler"',10,!!g.iyigece]]:[],...ut("teras")?[["\u{1F320}","Terasta teleskopla dilek tut",3,!!g.yildiz]]:[]]};function si(){let h=jt("#leIsBtn");if(h){let g=sf().filter(S=>!S[3]).length,x=h.querySelector("i");x&&(x.textContent=g||"\u2713")}jt("#leIsler")&&jt("#leIsler").classList.contains("on")&&Mc()}function Mc(){let h=jt("#leIsler");h.replaceChildren(Le("div",{class:"le-sh"},Le("h3",null,"G\xFCn\xFCn i\u015Fleri"),Le("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),Le("p",{class:"le-sub"},`Ortak lale puan\u0131n\u0131z: \u{1F337} ${gt()} \xB7 Toplanan lale: ${ce.toplanan||0}`),Le("ul",{class:"le-is"},...sf().map(([g,x,S,R])=>Le("li",{class:R?"ok":""},Le("span",null,g),Le("b",null,x),Le("em",null,R?"\u2713":"+"+S)))),Le("p",{class:"le-sub"},"Puanlar ikinizin ortak kumbaras\u0131. Ma\u011Fazadan e\u015Fya al\u0131n, bah\xE7eye lale ekin, birbirinize hediye b\u0131rak\u0131n.")),h.classList.add("on")}let bo="Modern";function _o(){let h=jt("#leMagaza");h&&h.classList.remove("on")}function eg(){if(!confirm("Salondaki mobilyalar depoya kald\u0131r\u0131l\u0131p modern tak\u0131m yerle\u015Ftirilsin mi? (Depodan istedi\u011Fin zaman geri koyabilirsin)"))return;let h=x=>x==="pikap"||Ce[x]&&Ce[x][3]==="Bizim";ce.esyalar=ce.esyalar.filter(x=>ne(x.x).id!=="salon"||h(x.t)?!0:(ce.depo.push(x.t),!1));let g=ce.esyalar.find(x=>x.t==="pikap"&&ne(x.x).id==="salon");g&&Object.assign(g,{x:-3.9,z:-3,r:0}),Y.SALON.forEach(([x,S,R,U],G)=>{let W=ce.depo.indexOf(x);W>=0&&ce.depo.splice(W,1),ce.esyalar.push({id:"md"+Date.now().toString(36)+G,t:x,x:S,z:R,r:U})}),_o(),ht(),[Ne.A,Ne.B].forEach(x=>{ne(x.g.position.x).id==="salon"&&x.durum==="ayakta"&&(x.path=[],x.g.position.set(.6,0,-.2))}),gc(.6,1,-1),_t("\u2728 Salon modern d\xF6\u015Fendi \xB7 eski e\u015Fyalar depoda")}function Sc(){let h=jt("#leMagaza"),g=[...new Set(Object.values(Ce).map(S=>S[3]))].filter(S=>S!=="Mutfak"||Me.m_fridge_A_decorated),x={};ce.depo.forEach(S=>{x[S]=(x[S]||0)+1}),h.replaceChildren(...[Le("div",{class:"le-sh"},Le("h3",null,"Ma\u011Faza"),Le("span",{class:"le-pp"},"\u{1F337} "+gt()),Le("button",{type:"button",class:"le-x",onclick:_o},"\xD7")),Object.keys(x).length?Le("div",{class:"le-depo"},Le("p",{class:"le-sub"},"\u{1F4E6} Depoda"),Le("div",{class:"le-grid"},...Object.entries(x).map(([S,R])=>Le("button",{type:"button",class:"le-urun",onclick:()=>yc(S,!1)},Le("span",null,Ce[S][0]),Le("b",null,Ce[S][1]+(R>1?" \xD7"+R:"")),Le("em",null,"Yerle\u015Ftir"))))):null,bo==="Modern"?Le("button",{type:"button",class:"le-hazir",onclick:eg},"\u2728 Salonu haz\u0131r modern tak\u0131mla d\xF6\u015Fe (\xFCcretsiz)"):null,Le("div",{class:"le-tabs"},...g.map(S=>Le("button",{type:"button",class:S===bo?"on":"",onclick:()=>{bo=S,Sc()}},S))),Le("div",{class:"le-grid"},...Object.entries(Ce).filter(([,S])=>S[3]===bo).map(([S,R])=>Le("button",{type:"button",class:"le-urun"+(gt()<R[2]?" pahali":""),onclick:()=>yc(S,!0)},Le("span",null,R[0]),Le("b",null,R[1]),Le("em",null,"\u{1F337} "+R[2]))))].filter(Boolean)),h.classList.add("on")}function _t(h){let g=jt("#leIpucu");g&&(g.textContent=h,g.classList.add("on"),clearTimeout(g._t),g._t=setTimeout(()=>g.classList.remove("on"),2800))}function tg(h,g){let x=jt("#lePuan");x&&(x.classList.remove("pop"),x.offsetWidth,x.classList.add("pop")),_t(`+${h} \u{1F337} ${g}`)}function ra(){let h=jt("#lePuan");h&&(h.textContent="\u{1F337} "+gt())}function aa(){let h=jt("#leDuzen");if(!h)return;h.hidden=!$r;let g=Fe?Ce[Fe.userData.tip]:null;h.replaceChildren(Fe&&g?Le("div",{class:"le-dz"},Le("b",null,g[0]+" "+g[1]),Le("button",{type:"button",onclick:()=>{js=!0,aa(),_t("Yeni yerine dokun")},class:js?"on":""},"\u270B Ta\u015F\u0131"),Le("button",{type:"button",onclick:Xm},"\u21BB \xC7evir"),Le("button",{type:"button",onclick:qm},"\u{1F4E6} Kald\u0131r")):Le("div",{class:"le-dz"},Le("b",null,"Bir e\u015Fyaya dokun")),Le("button",{type:"button",class:"le-bitti",onclick:()=>oa(!1)},"\u2713 Bitti"))}function oa(h){xs.busy||($r=h,document.body.classList.toggle("le-duzende",h),h?(yt.path=[],aa(),Fe||_t("D\xFCzenleme: e\u015Fyaya dokun, sonra ta\u015F\u0131 veya \xE7evir")):uo())}let Yi=(h,g)=>{let x=jt(h);x&&(x.onclick=g)};document.querySelectorAll("[data-emote]").forEach(h=>h.onclick=()=>{ho(yt,h.dataset.emote);let g=jt("#leSevgi");g&&g.classList.remove("on")}),Yi("#leSevgiBtn",()=>{let h=jt("#leSevgi");h&&h.classList.toggle("on")}),Yi("#leMagazaBtn",Sc),Yi("#leDuzenBtn",()=>oa(!$r)),Yi("#leIsBtn",Mc),Yi("#leHediyeBtn",qd),Yi("#leKameraBtn",$m),Yi("#leEvBtn",ea),ra(),setTimeout(()=>{Yt(10,"Eve ho\u015F geldin","giris"),Qm(),si()},1500),setInterval(()=>{Ti.forEach((h,g)=>Ke(h,ce.bahce[g])),si()},6e4),nf&&(ht(),setTimeout(()=>_t("\u{1F381} Depoya 2 ki\u015Fisel e\u015Fya geldi \xB7 Ma\u011Faza \u2192 \u{1F4E6} Depoda"),3500)),_t("Dokun, y\xFCr\xFC. E\u015Fyalara, bah\xE7eye ve duvardaki foto\u011Fraflara dokun \u{1F337}");let Ec=/Android|iPhone|iPad/i.test(navigator.userAgent),ys="yuksek";try{ys=localStorage.getItem("le-kalite")||((navigator.hardwareConcurrency||4)<4?"dusuk":"yuksek")}catch{}let vs=new rc(l);vs.setPixelRatio(Math.min(Ec?1.5:2,devicePixelRatio||1)),vs.addPass(new ac(c,p));let xo=new eo(c,p,300,300);xo.blendIntensity=.85,xo.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.2,scale:1,samples:Ec?10:16}),xo.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:Ec?8:16}),vs.addPass(xo),vs.addPass(new jr(new ue(300,300),d?.55:.12,.4,d?.7:1.05)),vs.addPass(new cc);function yo(h){ys=h;try{localStorage.setItem("le-kalite",h)}catch{}let g=jt("#leKalite");g&&(g.textContent=h==="yuksek"?"\u2728":"\u26A1");let x=h==="yuksek"?2048:1024;m.shadow.mapSize.set(x,x),m.shadow.map&&(m.shadow.map.dispose(),m.shadow.map=null)}Yi("#leKalite",()=>{yo(ys==="yuksek"?"dusuk":"yuksek"),_t(ys==="yuksek"?"\u2728 Y\xFCksek g\xF6r\xFCnt\xFC kalitesi":"\u26A1 H\u0131zl\u0131 mod (pil dostu)")}),yo(ys);let rf=0,wc=0,af=ys==="yuksek"&&!window.__leHiz;function ng(h){if(af&&(rf++,wc+=h,wc>4)){let g=rf/wc;af=!1,g<24&&(yo("dusuk"),_t("\u26A1 Telefonun i\xE7in h\u0131zl\u0131 moda ge\xE7tim \xB7 \u2728 ile de\u011Fi\u015Ftirebilirsin"))}}let ig=new Hr,vo=new k,of=!0;function sg(h,g,x,S){vo.set(g,x,S).project(p);let R=l.domElement.getBoundingClientRect();h.style.transform=`translate(${(vo.x*.5+.5)*R.width}px, ${(-vo.y*.5+.5)*R.height}px) translate(-50%,-100%)`,h.style.visibility=vo.z<1?"visible":"hidden"}function lf(){let h=e.clientWidth,g=e.clientHeight;l.setSize(h,g,!1),vs.setSize(h,g),p.aspect=h/g,p.fov=h<g?42:30,p.updateProjectionMatrix(),of&&(of=!1,h<g&&p.position.set(10.5,14.5,15.5))}return new ResizeObserver(lf).observe(e),lf(),l.setAnimationLoop(()=>{let h=Math.min(.1,ig.getDelta()),g=performance.now()/1e3,x=window.__leHiz||1;xs.beforeFrame();for(let R of[Ne.A,Ne.B]){if(R.path.length&&R.durum==="ayakta"){let[U,G]=R.path[0],W=R.g.position,ve=U-W.x,Pe=G-W.z,Ue=Math.hypot(ve,Pe);if(Ue<.05){if(R.path.shift(),!R.path.length){R.kosu=!1,R.oyna("Idle");let Je=R.sonra;R.sonra=null,Je&&Je()}}else{let Je=Math.min(Ue,(R.kosu?R.hiz*1.7:R.hiz)*h);W.x+=ve/Ue*Je,W.z+=Pe/Ue*Je,R.g.rotation.y=SM(R.g.rotation.y,Math.atan2(ve,Pe),Math.min(1,h*12))}}R.mixer.update(h*x),sg(R.tag,R.g.position.x,R.g.position.y+(R.durum==="yatiyor"?.9:R.durum==="oturuyor"||R.durum==="yerde"?R.boy*.82+.15:R.boy+.25),R.g.position.z)}xs.afterFrame();for(let R=Jr.length-1;R>=0;R--){let U=Jr[R],G=U.userData;G.t+=h,G.vy-=G.g*h,U.position.x+=G.vx*h,U.position.y+=G.vy*h,U.position.z+=G.vz*h,U.material.opacity=Math.max(0,1-G.t/G.omur),(G.t>G.omur||U.position.y<-.2)&&(c.remove(U),U.material.dispose(),Jr.splice(R,1))}gi.material.opacity>0&&(gi.material.opacity-=h*1.5,gi.scale.multiplyScalar(1+h*1.2)),mi.visible&&(mi.material.opacity=.55+Math.sin(g*4)*.35),It.forEach(R=>R.userData.anim&&R.userData.anim(h,g)),Hn.forEach(R=>{let U=ce.hediyeler.find(G=>G.id===R.userData.id);U&&(R.position.y=(U.y||0)+Math.abs(Math.sin(g*2.2))*.04),R.rotation.y+=h*.3}),v.intensity+=((bs?6:0)-v.intensity)*Math.min(1,h*6),lo&&It.forEach(R=>R.userData.plak&&R.userData.plak.forEach(U=>U.rotation.y+=h*3.5)),N.forEach((R,U)=>{R.rotation.z=Math.sin(g*.9+U*1.7)*.035,R.scale.x=1+Math.sin(g*1.3+U)*.04});let S=re.attributes.position;for(let R=0;R<Ie;R++){let U=S.getY(R)+h*(.04+R%5*.01);U>2.6&&(U=.3),S.setY(R,U),S.setX(R,S.getX(R)+Math.sin(g*.5+R)*h*.03)}S.needsUpdate=!0,ng(h),Jm(),_.update(),ys==="yuksek"?vs.render():l.render(c,p)}),window.__le={odaGit:Ys,odaAc:Yd,odaSecAc:ea,ODA:j,odaOf:ne,buzAc:Wd,K:Ne,ben:yt,o:Lt,git:pi,kullan:Zr,emote:ho,scene:c,camera:p,controls:_,EV:()=>ce,PUAN:Qe,puan:gt,ekle:yc,duzenAc:oa,magazaAc:Sc,islerAc:Mc,hediyeBirakAc:qd,parsel:Ti,esyaObj:It,kazan:Yt,hug:xs,duvarFoto:nt,hediyeObj:Hn,kameraOdak:na,kaliteAyarla:yo},window.__le}window.LaleEvi={start:Em};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
