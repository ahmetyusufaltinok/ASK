(()=>{var Iu="169",Vs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lg=0,ff=1,cg=2;var Lp=1,hg=2,ui=3,Mi=0,Dn=1,on=2,pn=0,Sr=1,ks=2,pf=3,mf=4,Du=5,Qn=100,ug=101,dg=102,fg=103,pg=104,jr=200,mg=201,gg=202,bg=203,uh=204,dh=205,Yl=206,_g=207,Kl=208,xg=209,yg=210,vg=211,Mg=212,Sg=213,Eg=214,fh=0,ph=1,mh=2,Ar=3,gh=4,bh=5,_h=6,xh=7,kp=0,wg=1,Tg=2,os=0,Lu=1,ku=2,Nu=3,Uu=4,Ag=5,Ou=6,Ja=7,gf="attached",Rg="detached",Np=300,Rr=301,Cr=302,yh=303,vh=304,Zl=306,ln=1e3,Ui=1001,Ia=1002,fn=1003,Fu=1004;var _r=1005;var zn=1006,wa=1007;var vi=1008;var mi=1009,Up=1010,Op=1011,Da=1012,zu=1013,Ns=1014,pi=1015,Gn=1016,Bu=1017,Hu=1018,cs=1020,Fp=35902,zp=1021,Bp=1022,Bn=1023,Hp=1024,Gp=1025,Er=1026,hs=1027,Gu=1028,Vu=1029,Vp=1030,Wu=1031;var Xu=1033,ol=33776,ll=33777,cl=33778,hl=33779,Mh=35840,Sh=35841,Eh=35842,wh=35843,Th=36196,Ah=37492,Rh=37496,Ch=37808,Ph=37809,Ih=37810,Dh=37811,Lh=37812,kh=37813,Nh=37814,Uh=37815,Oh=37816,Fh=37817,zh=37818,Bh=37819,Hh=37820,Gh=37821,ul=36492,Vh=36494,Wh=36495,Wp=36283,Xh=36284,qh=36285,jh=36286,qu=2200,Cg=2201,Pg=2202,Pr=2300,Ir=2301,Rc=2302,xr=2400,yr=2401,fl=2402,ju=2500,Ig=2501,Xp=0,Jl=1,$a=2,Dg=3200,Lg=3201;var Yu=0,kg=1,ss="",an="srgb",Tn="srgb-linear",Ku="display-p3",$l="display-p3-linear",pl="linear",Xt="srgb",ml="rec709",gl="p3";var Qs=7680;var bf=519,Ng=512,Ug=513,Og=514,qp=515,Fg=516,zg=517,Bg=518,Hg=519,Yh=35044;var _f="300 es",Oi=2e3,bl=2001,Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xf=1234567,Ta=Math.PI/180,Dr=180/Math.PI;function ei(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function un(s,e,t){return Math.max(e,Math.min(t,s))}function Zu(s,e){return(s%e+e)%e}function Gg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Vg(s,e,t){return s!==e?(t-s)/(e-s):0}function Aa(s,e,t){return(1-t)*s+t*e}function Wg(s,e,t,n){return Aa(s,e,1-Math.exp(-t*n))}function Xg(s,e=1){return e-Math.abs(Zu(s,e*2)-e)}function qg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function jg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Yg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Kg(s,e){return s+Math.random()*(e-s)}function Zg(s){return s*(.5-Math.random())}function Jg(s){s!==void 0&&(xf=s);let e=xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $g(s){return s*Ta}function Qg(s){return s*Dr}function e0(s){return(s&s-1)===0&&s!==0}function t0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function n0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function i0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*_,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*_,o*c);break;case"ZYZ":s.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ql={DEG2RAD:Ta,RAD2DEG:Dr,generateUUID:ei,clamp:un,euclideanModulo:Zu,mapLinear:Gg,inverseLerp:Vg,lerp:Aa,damp:Wg,pingpong:Xg,smoothstep:qg,smootherstep:jg,randInt:Yg,randFloat:Kg,randFloatSpread:Zg,seededRandom:Jg,degToRad:$g,radToDeg:Qg,isPowerOfTwo:e0,ceilPowerOfTwo:t0,floorPowerOfTwo:n0,setQuaternionFromProperEuler:i0,normalize:Ht,denormalize:fi},ue=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xt=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],_=n[8],y=i[0],b=i[3],m=i[6],w=i[1],v=i[4],E=i[7],O=i[2],L=i[5],k=i[8];return r[0]=a*y+o*w+l*O,r[3]=a*b+o*v+l*L,r[6]=a*m+o*E+l*k,r[1]=c*y+u*w+d*O,r[4]=c*b+u*v+d*L,r[7]=c*m+u*E+d*k,r[2]=f*y+p*w+_*O,r[5]=f*b+p*v+_*L,r[8]=f*m+p*E+_*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=t*d+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=d*y,e[1]=(i*c-u*n)*y,e[2]=(o*n-i*a)*y,e[3]=f*y,e[4]=(u*t-i*l)*y,e[5]=(i*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new xt;function jp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function La(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function s0(){let s=La("canvas");return s.style.display="block",s}var yf={};function dl(s){s in yf||(yf[s]=!0,console.warn(s))}function r0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function a0(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o0(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var vf=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mf=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[Tn]:{transfer:pl,primaries:ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[an]:{transfer:Xt,primaries:ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[$l]:{transfer:pl,primaries:gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Mf),fromReference:s=>s.applyMatrix3(vf)},[Ku]:{transfer:Xt,primaries:gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Mf),fromReference:s=>s.applyMatrix3(vf).convertLinearToSRGB()}},l0=new Set([Tn,$l]),It={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!l0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=da[e].toReference,i=da[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return da[s].primaries},getTransfer:function(s){return s===ss?pl:da[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(da[e].luminanceCoefficients)}};function wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var er,Kh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=La("canvas")),er.width=e.width,er.height=e.height;let n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=wr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},c0=0,_l=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ic(i[a].image)):r.push(Ic(i[a]))}else r=Ic(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ic(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Kh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var h0=0,Sn=class s extends Si{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ui,i=Ui,r=zn,a=vi,o=Bn,l=mi,c=s.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=ei(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ln:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ln:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Np;Sn.DEFAULT_ANISOTROPY=1;var Ot=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],b=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-b)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+b)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,E=(p+1)/2,O=(m+1)/2,L=(u+f)/4,k=(d+y)/4,z=(_+b)/4;return v>E&&v>O?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=L/n,r=k/n):E>O?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=L/i,r=z/i):O<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(O),n=k/r,i=z/r),this.set(n,i,r,t),this}let w=Math.sqrt((b-_)*(b-_)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(b-_)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zh=class extends Si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Zh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xl=class extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jh=class extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(d!==y||l!==f||c!==p||u!==_){let b=1-o,m=l*f+c*p+u*_+d*y,w=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let O=Math.sqrt(v),L=Math.atan2(O,m*w);b=Math.sin(b*L)/O,o=Math.sin(o*L)/O}let E=o*w;if(l=l*b+f*E,c=c*b+p*E,u=u*b+_*E,d=d*b+y*E,b===1-o){let O=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=O,c*=O,u*=O,d*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-o*p,e[t+2]=c*_+u*p+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),f=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dc=new D,Sf=new mn,gn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(r,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Co.subVectors(this.max,fa),tr.subVectors(e.a,fa),nr.subVectors(e.b,fa),ir.subVectors(e.c,fa),$i.subVectors(nr,tr),Qi.subVectors(ir,nr),Ts.subVectors(tr,ir);let t=[0,-$i.z,$i.y,0,-Qi.z,Qi.y,0,-Ts.z,Ts.y,$i.z,0,-$i.x,Qi.z,0,-Qi.x,Ts.z,0,-Ts.x,-$i.y,$i.x,0,-Qi.y,Qi.x,0,-Ts.y,Ts.x,0];return!Lc(t,tr,nr,ir,Co)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,tr,nr,ir,Co))?!1:(Po.crossVectors($i,Qi),t=[Po.x,Po.y,Po.z],Lc(t,tr,nr,ir,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new D,new D,new D,new D,new D,new D,new D,new D],li=new D,Ro=new gn,tr=new D,nr=new D,ir=new D,$i=new D,Qi=new D,Ts=new D,fa=new D,Co=new D,Po=new D,As=new D;function Lc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){As.fromArray(s,r);let o=i.x*Math.abs(As.x)+i.y*Math.abs(As.y)+i.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),u=n.dot(As);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var u0=new gn,pa=new D,kc=new D,Kn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):u0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);let t=pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(kc)),this.expandByPoint(pa.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new D,Nc=new D,Io=new D,es=new D,Uc=new D,Do=new D,Oc=new D,Fi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Nc.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),es.copy(this.origin).sub(Nc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Io),o=es.dot(this.direction),l=-es.dot(Io),c=es.lengthSq(),u=Math.abs(1-a*a),d,f,p,_;if(u>0)if(d=a*l-o,f=a*o-l,_=r*u,d>=0)if(f>=-_)if(f<=_){let y=1/u;d*=y,f*=y,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Nc).addScaledVector(Io,f),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,i,r){Uc.subVectors(t,e),Do.subVectors(n,e),Oc.crossVectors(Uc,Do);let a=this.direction.dot(Oc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;es.subVectors(this.origin,e);let l=o*this.direction.dot(Do.crossVectors(es,Do));if(l<0)return null;let c=o*this.direction.dot(Uc.cross(es));if(c<0||l+c>a)return null;let u=-o*es.dot(Oc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class s{constructor(e,t,n,i,r,a,o,l,c,u,d,f,p,_,y,b){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,f,p,_,y,b)}set(e,t,n,i,r,a,o,l,c,u,d,f,p,_,y,b){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=y,m[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*d,_=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*d,_=c*u,y=c*d;t[0]=f+y*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*d,_=c*u,y=c*d;t[0]=f-y*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*d,_=o*u,y=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-y*d}else if(e.order==="XZY"){let f=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d0,e,f0)}lookAt(e,t,n){let i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),ts.crossVectors(n,jn),ts.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),ts.crossVectors(n,jn)),ts.normalize(),Lo.crossVectors(jn,ts),i[0]=ts.x,i[4]=Lo.x,i[8]=jn.x,i[1]=ts.y,i[5]=Lo.y,i[9]=jn.y,i[2]=ts.z,i[6]=Lo.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],_=n[2],y=n[6],b=n[10],m=n[14],w=n[3],v=n[7],E=n[11],O=n[15],L=i[0],k=i[4],z=i[8],ie=i[12],M=i[1],A=i[5],Y=i[9],K=i[13],J=i[2],de=i[6],Z=i[10],ye=i[14],oe=i[3],G=i[7],F=i[11],$=i[15];return r[0]=a*L+o*M+l*J+c*oe,r[4]=a*k+o*A+l*de+c*G,r[8]=a*z+o*Y+l*Z+c*F,r[12]=a*ie+o*K+l*ye+c*$,r[1]=u*L+d*M+f*J+p*oe,r[5]=u*k+d*A+f*de+p*G,r[9]=u*z+d*Y+f*Z+p*F,r[13]=u*ie+d*K+f*ye+p*$,r[2]=_*L+y*M+b*J+m*oe,r[6]=_*k+y*A+b*de+m*G,r[10]=_*z+y*Y+b*Z+m*F,r[14]=_*ie+y*K+b*ye+m*$,r[3]=w*L+v*M+E*J+O*oe,r[7]=w*k+v*A+E*de+O*G,r[11]=w*z+v*Y+E*Z+O*F,r[15]=w*ie+v*K+E*ye+O*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],b=e[11],m=e[15];return _*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*p-n*l*p)+y*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+b*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+m*(-i*o*u-t*l*d+t*o*f+i*a*d-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],b=e[14],m=e[15],w=d*b*c-y*f*c+y*l*p-o*b*p-d*l*m+o*f*m,v=_*f*c-u*b*c-_*l*p+a*b*p+u*l*m-a*f*m,E=u*y*c-_*d*c+_*o*p-a*y*p-u*o*m+a*d*m,O=_*d*l-u*y*l-_*o*f+a*y*f+u*o*b-a*d*b,L=t*w+n*v+i*E+r*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return e[0]=w*k,e[1]=(y*f*r-d*b*r-y*i*p+n*b*p+d*i*m-n*f*m)*k,e[2]=(o*b*r-y*l*r+y*i*c-n*b*c-o*i*m+n*l*m)*k,e[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*p-n*l*p)*k,e[4]=v*k,e[5]=(u*b*r-_*f*r+_*i*p-t*b*p-u*i*m+t*f*m)*k,e[6]=(_*l*r-a*b*r-_*i*c+t*b*c+a*i*m-t*l*m)*k,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*p+t*l*p)*k,e[8]=E*k,e[9]=(_*d*r-u*y*r-_*n*p+t*y*p+u*n*m-t*d*m)*k,e[10]=(a*y*r-_*o*r+_*n*c-t*y*c-a*n*m+t*o*m)*k,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*p-t*o*p)*k,e[12]=O*k,e[13]=(u*y*i-_*d*i+_*n*f-t*y*f-u*n*b+t*d*b)*k,e[14]=(_*o*i-a*y*i-_*n*l+t*y*l+a*n*b-t*o*b)*k,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*f+t*o*f)*k,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,_=r*d,y=a*u,b=a*d,m=o*d,w=l*c,v=l*u,E=l*d,O=n.x,L=n.y,k=n.z;return i[0]=(1-(y+m))*O,i[1]=(p+E)*O,i[2]=(_-v)*O,i[3]=0,i[4]=(p-E)*L,i[5]=(1-(f+m))*L,i[6]=(b+w)*L,i[7]=0,i[8]=(_+v)*k,i[9]=(b-w)*k,i[10]=(1-(f+y))*k,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=sr.set(i[0],i[1],i[2]).length(),a=sr.set(i[4],i[5],i[6]).length(),o=sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);let c=1/r,u=1/a,d=1/o;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Oi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,_;if(o===Oi)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===bl)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Oi){let l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-r),f=(t+e)*c,p=(n+i)*u,_,y;if(o===Oi)_=(a+r)*d,y=-2*d;else if(o===bl)_=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sr=new D,ci=new ot,d0=new D(0,0,0),f0=new D(1,1,1),ts=new D,Lo=new D,jn=new D,Ef=new ot,wf=new mn,Ei=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ef,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},p0=0,Tf=new D,rr=new mn,Di=new ot,ko=new D,ma=new D,m0=new D,g0=new mn,Af=new D(1,0,0),Rf=new D(0,1,0),Cf=new D(0,0,1),Pf={type:"added"},b0={type:"removed"},ar={type:"childadded",child:null},Fc={type:"childremoved",child:null},$t=class s extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new Ei,n=new mn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new xt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Af,e)}rotateY(e){return this.rotateOnAxis(Rf,e)}rotateZ(e){return this.rotateOnAxis(Cf,e)}translateOnAxis(e,t){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Af,e)}translateY(e){return this.translateOnAxis(Rf,e)}translateZ(e){return this.translateOnAxis(Cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ma,ko,this.up):Di.lookAt(ko,ma,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(Di),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pf),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b0),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pf),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};$t.DEFAULT_UP=new D(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=new D,Li=new D,zc=new D,ki=new D,or=new D,lr=new D,If=new D,Bc=new D,Hc=new D,Gc=new D,Vc=new Ot,Wc=new Ot,Xc=new Ot,rs=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){hi.subVectors(i,t),Li.subVectors(n,t),zc.subVectors(e,t);let a=hi.dot(hi),o=hi.dot(Li),l=hi.dot(zc),c=Li.dot(Li),u=Li.dot(zc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Vc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Vc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Vc,r.x),a.addScaledVector(Wc,r.y),a.addScaledVector(Xc,r.z),a}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),Li.subVectors(e,t),hi.cross(Li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),hi.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;or.subVectors(i,n),lr.subVectors(r,n),Bc.subVectors(e,n);let l=or.dot(Bc),c=lr.dot(Bc);if(l<=0&&c<=0)return t.copy(n);Hc.subVectors(e,i);let u=or.dot(Hc),d=lr.dot(Hc);if(u>=0&&d<=u)return t.copy(i);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(or,a);Gc.subVectors(e,r);let p=or.dot(Gc),_=lr.dot(Gc);if(_>=0&&p<=_)return t.copy(r);let y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(lr,o);let b=u*_-p*d;if(b<=0&&d-u>=0&&p-_>=0)return If.subVectors(r,i),o=(d-u)/(d-u+(p-_)),t.copy(i).addScaledVector(If,o);let m=1/(b+y+f);return a=y*m,o=f*m,t.copy(n).addScaledVector(or,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},No={h:0,s:0,l:0};function qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=It.workingColorSpace){if(e=Zu(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qc(a,r,e+1/3),this.g=qc(a,r,e),this.b=qc(a,r,e-1/3)}return It.toWorkingColorSpace(this,i),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=Yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return It.fromWorkingColorSpace(In.copy(this),e),Math.round(un(In.r*255,0,255))*65536+Math.round(un(In.g*255,0,255))*256+Math.round(un(In.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(In.copy(this),t);let n=In.r,i=In.g,r=In.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=an){It.fromWorkingColorSpace(In.copy(this),e);let t=In.r,n=In.g,i=In.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(No);let n=Aa(ns.h,No.h,t),i=Aa(ns.s,No.s,t),r=Aa(ns.l,No.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new tt;tt.NAMES=Yp;var _0=0,Un=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Sr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=dh,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uh&&(n.blendSrc=this.blendSrc),this.blendDst!==dh&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},jt=class extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hn=new D,Uo=new ue,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yh,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}};var yl=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var vl=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},x0=0,$n=new ot,jc=new $t,cr=new D,Yn=new gn,ga=new gn,Mn=new D,Kt=class s extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?vl:yl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(Yn.min,ga.min),Yn.expandByPoint(Mn),Mn.addVectors(Yn.max,ga.max),Yn.expandByPoint(Mn)):(Yn.expandByPoint(ga.min),Yn.expandByPoint(ga.max))}Yn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Mn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mn.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(e,c),Mn.add(cr)),i=Math.max(i,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new D,l[z]=new D;let c=new D,u=new D,d=new D,f=new ue,p=new ue,_=new ue,y=new D,b=new D;function m(z,ie,M){c.fromBufferAttribute(n,z),u.fromBufferAttribute(n,ie),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,ie),_.fromBufferAttribute(r,M),u.sub(c),d.sub(c),p.sub(f),_.sub(f);let A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(A),b.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(A),o[z].add(y),o[ie].add(y),o[M].add(y),l[z].add(b),l[ie].add(b),l[M].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,ie=w.length;z<ie;++z){let M=w[z],A=M.start,Y=M.count;for(let K=A,J=A+Y;K<J;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let v=new D,E=new D,O=new D,L=new D;function k(z){O.fromBufferAttribute(i,z),L.copy(O);let ie=o[z];v.copy(ie),v.sub(O.multiplyScalar(O.dot(ie))).normalize(),E.crossVectors(L,ie);let A=E.dot(l[z])<0?-1:1;a.setXYZW(z,v.x,v.y,v.z,A)}for(let z=0,ie=w.length;z<ie;++z){let M=w[z],A=M.start,Y=M.count;for(let K=A,J=A+Y;K<J;K+=3)k(e.getX(K+0)),k(e.getX(K+1)),k(e.getX(K+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){let _=e.getX(f+0),y=e.getX(f+1),b=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,b),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,b),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,_=0;for(let y=0,b=l.length;y<b;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let m=0;m<u;m++)f[_++]=c[p++]}return new Jt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Df=new ot,Rs=new Fi,Oo=new Kn,Lf=new D,Fo=new D,zo=new D,Bo=new D,Yc=new D,Ho=new D,kf=new D,Go=new D,ce=class extends $t{constructor(e=new Kt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Yc.fromBufferAttribute(d,e),a?Ho.addScaledVector(Yc,u):Ho.addScaledVector(Yc.sub(t),u))}t.add(Ho)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Oo.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Oo,Lf)===null||Rs.origin.distanceToSquared(Lf)>(e.far-e.near)**2))&&(Df.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Df),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let b=f[_],m=a[b.materialIndex],w=Math.max(b.start,p.start),v=Math.min(o.count,Math.min(b.start+b.count,p.start+p.count));for(let E=w,O=v;E<O;E+=3){let L=o.getX(E),k=o.getX(E+1),z=o.getX(E+2);i=Vo(this,m,e,n,c,u,d,L,k,z),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let b=_,m=y;b<m;b+=3){let w=o.getX(b),v=o.getX(b+1),E=o.getX(b+2);i=Vo(this,a,e,n,c,u,d,w,v,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let b=f[_],m=a[b.materialIndex],w=Math.max(b.start,p.start),v=Math.min(l.count,Math.min(b.start+b.count,p.start+p.count));for(let E=w,O=v;E<O;E+=3){let L=E,k=E+1,z=E+2;i=Vo(this,m,e,n,c,u,d,L,k,z),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let b=_,m=y;b<m;b+=3){let w=b,v=b+1,E=b+2;i=Vo(this,a,e,n,c,u,d,w,v,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}};function y0(s,e,t,n,i,r,a,o){let l;if(e.side===Dn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Mi,o),l===null)return null;Go.copy(o),Go.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:s}}function Vo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Fo),s.getVertexPosition(l,zo),s.getVertexPosition(c,Bo);let u=y0(s,e,t,n,Fo,zo,Bo,kf);if(u){let d=new D;rs.getBarycoord(kf,Fo,zo,Bo,d),i&&(u.uv=rs.getInterpolatedAttribute(i,o,l,c,d,new ue)),r&&(u.uv1=rs.getInterpolatedAttribute(r,o,l,c,d,new ue)),a&&(u.normal=rs.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};rs.getNormal(Fo,zo,Bo,f.normal),u.face=f,u.barycoord=d}return u}var ct=class s extends Kt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2));function _(y,b,m,w,v,E,O,L,k,z,ie){let M=E/k,A=O/z,Y=E/2,K=O/2,J=L/2,de=k+1,Z=z+1,ye=0,oe=0,G=new D;for(let F=0;F<Z;F++){let $=F*A-K;for(let le=0;le<de;le++){let ge=le*M-Y;G[y]=ge*w,G[b]=$*v,G[m]=J,c.push(G.x,G.y,G.z),G[y]=0,G[b]=0,G[m]=L>0?1:-1,u.push(G.x,G.y,G.z),d.push(le/k),d.push(1-F/z),ye+=1}}for(let F=0;F<z;F++)for(let $=0;$<k;$++){let le=f+$+de*F,ge=f+$+de*(F+1),B=f+($+1)+de*(F+1),U=f+($+1)+de*F;l.push(le,ge,U),l.push(ge,B,U),oe+=6}o.addGroup(p,oe,ie),p+=oe,f+=ye}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Lr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nn(s){let e={};for(let t=0;t<s.length;t++){let n=Lr(s[t]);for(let i in n)e[i]=n[i]}return e}function v0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Kp(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}var Vn={clone:Lr,merge:Nn},M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ml=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},is=new D,Nf=new ue,Uf=new ue,dn=class extends Ml{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,Nf,Uf),t.subVectors(Uf,Nf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,ur=1,$h=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new dn(hr,ur,e,t);i.layers=this.layers,this.add(i);let r=new dn(hr,ur,e,t);r.layers=this.layers,this.add(r);let a=new dn(hr,ur,e,t);a.layers=this.layers,this.add(a);let o=new dn(hr,ur,e,t);o.layers=this.layers,this.add(o);let l=new dn(hr,ur,e,t);l.layers=this.layers,this.add(l);let c=new dn(hr,ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Sl=class extends Sn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qh=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Sl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ct(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:pn});r.uniforms.tEquirect.value=t;let a=new ce(i,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=zn),new $h(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Kc=new D,E0=new D,w0=new xt,di=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Kc.subVectors(n,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Kc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||w0.getNormalMatrix(e),i=this.coplanarPoint(Kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cs=new Kn,Wo=new D,Na=class{constructor(e=new di,t=new di,n=new di,i=new di,r=new di,a=new di){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Oi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],p=i[8],_=i[9],y=i[10],b=i[11],m=i[12],w=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-r,f-c,b-p,E-m).normalize(),n[1].setComponents(l+r,f+c,b+p,E+m).normalize(),n[2].setComponents(l+a,f+u,b+_,E+w).normalize(),n[3].setComponents(l-a,f-u,b-_,E-w).normalize(),n[4].setComponents(l-o,f-d,b-y,E-v).normalize(),t===Oi)n[5].setComponents(l+o,f+d,b+y,E+v).normalize();else if(t===bl)n[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Wo.x=i.normal.x>0?e.max.x:e.min.x,Wo.y=i.normal.y>0?e.max.y:e.min.y,Wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function T0(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let y=d[p];s.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var wn=class s extends Kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,p=[],_=[],y=[],b=[];for(let m=0;m<u;m++){let w=m*f-a;for(let v=0;v<c;v++){let E=v*d-r;_.push(E,-w,0),y.push(0,0,1),b.push(v/o),b.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let v=w+c*m,E=w+c*(m+1),O=w+1+c*(m+1),L=w+1+c*m;p.push(v,E,L),p.push(E,O,L)}this.setIndex(p),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`
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
}`,rb=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
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
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
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
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eb=`PhysicalMaterial material;
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
#endif`,wb=`struct PhysicalMaterial {
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
}`,Tb=`
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
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ub=`#if defined( USE_POINTS_UV )
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
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`#ifdef USE_MORPHTARGETS
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
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
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
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u_=`float getShadowMask() {
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
}`,d_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,p_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,T_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A_=`uniform sampler2D t2D;
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
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
}`,L_=`#if DEPTH_PACKING == 3200
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
}`,k_=`#define DISTANCE
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
}`,N_=`#define DISTANCE
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
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`uniform float scale;
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
}`,z_=`uniform vec3 diffuse;
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
}`,B_=`#include <common>
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
}`,H_=`uniform vec3 diffuse;
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
}`,G_=`#define LAMBERT
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
}`,V_=`#define LAMBERT
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
}`,W_=`#define MATCAP
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
}`,X_=`#define MATCAP
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
}`,q_=`#define NORMAL
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
}`,j_=`#define NORMAL
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
}`,Y_=`#define PHONG
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
}`,K_=`#define PHONG
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
}`,Z_=`#define STANDARD
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
}`,J_=`#define STANDARD
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
}`,$_=`#define TOON
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
}`,Q_=`#define TOON
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
}`,ex=`uniform float size;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 color;
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
}`,sx=`uniform float rotation;
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
}`,rx=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:A0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:P0,alphatest_fragment:I0,alphatest_pars_fragment:D0,aomap_fragment:L0,aomap_pars_fragment:k0,batching_pars_vertex:N0,batching_vertex:U0,begin_vertex:O0,beginnormal_vertex:F0,bsdfs:z0,iridescence_fragment:B0,bumpmap_pars_fragment:H0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:q0,color_pars_fragment:j0,color_pars_vertex:Y0,color_vertex:K0,common:Z0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:$0,displacementmap_pars_vertex:Q0,displacementmap_vertex:eb,emissivemap_fragment:tb,emissivemap_pars_fragment:nb,colorspace_fragment:ib,colorspace_pars_fragment:sb,envmap_fragment:rb,envmap_common_pars_fragment:ab,envmap_pars_fragment:ob,envmap_pars_vertex:lb,envmap_physical_pars_fragment:xb,envmap_vertex:cb,fog_vertex:hb,fog_pars_vertex:ub,fog_fragment:db,fog_pars_fragment:fb,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:bb,lights_pars_begin:_b,lights_toon_fragment:yb,lights_toon_pars_fragment:vb,lights_phong_fragment:Mb,lights_phong_pars_fragment:Sb,lights_physical_fragment:Eb,lights_physical_pars_fragment:wb,lights_fragment_begin:Tb,lights_fragment_maps:Ab,lights_fragment_end:Rb,logdepthbuf_fragment:Cb,logdepthbuf_pars_fragment:Pb,logdepthbuf_pars_vertex:Ib,logdepthbuf_vertex:Db,map_fragment:Lb,map_pars_fragment:kb,map_particle_fragment:Nb,map_particle_pars_fragment:Ub,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:Fb,morphinstance_vertex:zb,morphcolor_vertex:Bb,morphnormal_vertex:Hb,morphtarget_pars_vertex:Gb,morphtarget_vertex:Vb,normal_fragment_begin:Wb,normal_fragment_maps:Xb,normal_pars_fragment:qb,normal_pars_vertex:jb,normal_vertex:Yb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:Qb,opaque_fragment:e_,packing:t_,premultiplied_alpha_fragment:n_,project_vertex:i_,dithering_fragment:s_,dithering_pars_fragment:r_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:l_,shadowmap_pars_vertex:c_,shadowmap_vertex:h_,shadowmask_pars_fragment:u_,skinbase_vertex:d_,skinning_pars_vertex:f_,skinning_vertex:p_,skinnormal_vertex:m_,specularmap_fragment:g_,specularmap_pars_fragment:b_,tonemapping_fragment:__,tonemapping_pars_fragment:x_,transmission_fragment:y_,transmission_pars_fragment:v_,uv_pars_fragment:M_,uv_pars_vertex:S_,uv_vertex:E_,worldpos_vertex:w_,background_vert:T_,background_frag:A_,backgroundCube_vert:R_,backgroundCube_frag:C_,cube_vert:P_,cube_frag:I_,depth_vert:D_,depth_frag:L_,distanceRGBA_vert:k_,distanceRGBA_frag:N_,equirect_vert:U_,equirect_frag:O_,linedashed_vert:F_,linedashed_frag:z_,meshbasic_vert:B_,meshbasic_frag:H_,meshlambert_vert:G_,meshlambert_frag:V_,meshmatcap_vert:W_,meshmatcap_frag:X_,meshnormal_vert:q_,meshnormal_frag:j_,meshphong_vert:Y_,meshphong_frag:K_,meshphysical_vert:Z_,meshphysical_frag:J_,meshtoon_vert:$_,meshtoon_frag:Q_,points_vert:ex,points_frag:tx,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:rx},He={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},yi={basic:{uniforms:Nn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Nn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new tt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Nn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Nn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Nn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new tt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Nn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Nn([He.points,He.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Nn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Nn([He.common,He.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Nn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Nn([He.sprite,He.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:Nn([He.common,He.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:Nn([He.lights,He.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};yi.physical={uniforms:Nn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var Xo={r:0,b:0,g:0},Ps=new Ei,ax=new ot;function ox(s,e,t,n,i,r,a){let o=new tt(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function _(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function y(w){let v=!1,E=_(w);E===null?m(o,l):E&&E.isColor&&(m(E,1),v=!0);let O=s.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(w,v){let E=_(v);E&&(E.isCubeTexture||E.mapping===Zl)?(u===void 0&&(u=new ce(new ct(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Lr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ps.copy(v.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Ps)),u.material.toneMapped=It.getTransfer(E.colorSpace)!==Xt,(d!==E||f!==E.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,p=s.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ce(new wn(2,2),new Zt({name:"BackgroundMaterial",uniforms:Lr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=It.getTransfer(E.colorSpace)!==Xt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,v){w.getRGB(Xo,Kp(s)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(w,v=1){o.set(w),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(o,l)},render:y,addToRenderList:b}}function lx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(M,A,Y,K,J){let de=!1,Z=d(K,Y,A);r!==Z&&(r=Z,c(r.object)),de=p(M,K,Y,J),de&&_(M,K,Y,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(de||a)&&(a=!1,E(M,A,Y,K),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function d(M,A,Y){let K=Y.wireframe===!0,J=n[M.id];J===void 0&&(J={},n[M.id]=J);let de=J[A.id];de===void 0&&(de={},J[A.id]=de);let Z=de[K];return Z===void 0&&(Z=f(l()),de[K]=Z),Z}function f(M){let A=[],Y=[],K=[];for(let J=0;J<t;J++)A[J]=0,Y[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:Y,attributeDivisors:K,object:M,attributes:{},index:null}}function p(M,A,Y,K){let J=r.attributes,de=A.attributes,Z=0,ye=Y.getAttributes();for(let oe in ye)if(ye[oe].location>=0){let F=J[oe],$=de[oe];if($===void 0&&(oe==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),oe==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),F===void 0||F.attribute!==$||$&&F.data!==$.data)return!0;Z++}return r.attributesNum!==Z||r.index!==K}function _(M,A,Y,K){let J={},de=A.attributes,Z=0,ye=Y.getAttributes();for(let oe in ye)if(ye[oe].location>=0){let F=de[oe];F===void 0&&(oe==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),oe==="instanceColor"&&M.instanceColor&&(F=M.instanceColor));let $={};$.attribute=F,F&&F.data&&($.data=F.data),J[oe]=$,Z++}r.attributes=J,r.attributesNum=Z,r.index=K}function y(){let M=r.newAttributes;for(let A=0,Y=M.length;A<Y;A++)M[A]=0}function b(M){m(M,0)}function m(M,A){let Y=r.newAttributes,K=r.enabledAttributes,J=r.attributeDivisors;Y[M]=1,K[M]===0&&(s.enableVertexAttribArray(M),K[M]=1),J[M]!==A&&(s.vertexAttribDivisor(M,A),J[M]=A)}function w(){let M=r.newAttributes,A=r.enabledAttributes;for(let Y=0,K=A.length;Y<K;Y++)A[Y]!==M[Y]&&(s.disableVertexAttribArray(Y),A[Y]=0)}function v(M,A,Y,K,J,de,Z){Z===!0?s.vertexAttribIPointer(M,A,Y,J,de):s.vertexAttribPointer(M,A,Y,K,J,de)}function E(M,A,Y,K){y();let J=K.attributes,de=Y.getAttributes(),Z=A.defaultAttributeValues;for(let ye in de){let oe=de[ye];if(oe.location>=0){let G=J[ye];if(G===void 0&&(ye==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),ye==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){let F=G.normalized,$=G.itemSize,le=e.get(G);if(le===void 0)continue;let ge=le.buffer,B=le.type,U=le.bytesPerElement,ee=B===s.INT||B===s.UNSIGNED_INT||G.gpuType===zu;if(G.isInterleavedBufferAttribute){let Q=G.data,fe=Q.stride,be=G.offset;if(Q.isInstancedInterleavedBuffer){for(let Te=0;Te<oe.locationSize;Te++)m(oe.location+Te,Q.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Te=0;Te<oe.locationSize;Te++)b(oe.location+Te);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Te=0;Te<oe.locationSize;Te++)v(oe.location+Te,$/oe.locationSize,B,F,fe*U,(be+$/oe.locationSize*Te)*U,ee)}else{if(G.isInstancedBufferAttribute){for(let Q=0;Q<oe.locationSize;Q++)m(oe.location+Q,G.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Q=0;Q<oe.locationSize;Q++)b(oe.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Q=0;Q<oe.locationSize;Q++)v(oe.location+Q,$/oe.locationSize,B,F,$*U,$/oe.locationSize*Q*U,ee)}}else if(Z!==void 0){let F=Z[ye];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(oe.location,F);break;case 3:s.vertexAttrib3fv(oe.location,F);break;case 4:s.vertexAttrib4fv(oe.location,F);break;default:s.vertexAttrib1fv(oe.location,F)}}}}w()}function O(){z();for(let M in n){let A=n[M];for(let Y in A){let K=A[Y];for(let J in K)u(K[J].object),delete K[J];delete A[Y]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;let A=n[M.id];for(let Y in A){let K=A[Y];for(let J in K)u(K[J].object),delete K[J];delete A[Y]}delete n[M.id]}function k(M){for(let A in n){let Y=n[A];if(Y[M.id]===void 0)continue;let K=Y[M.id];for(let J in K)u(K[J].object),delete K[J];delete Y[M.id]}}function z(){ie(),a=!0,r!==i&&(r=i,c(r.object))}function ie(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:z,resetDefaultState:ie,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:b,disableUnusedAttributes:w}}function cx(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,n,1)}function l(c,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=u[y];for(let y=0;y<f.length;y++)t.update(_,n,f[y])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let k=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(k){return!(k!==Bn&&n.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(k){let z=k===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==mi&&n.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==pi&&!z)}function l(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let k=e.get("EXT_clip_control");k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT)}let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:b,maxAttributes:m,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:O,maxSamples:L}}function ux(s){let e=this,t=null,n=0,i=!1,r=!1,a=new di,o=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,y=d.clipIntersection,b=d.clipShadows,m=s.get(d);if(!i||_===null||_.length===0||r&&!b)r?u(null):c();else{let w=r?0:n,v=w*4,E=m.clippingState||null;l.value=E,E=u(_,f,v,p);for(let O=0;O!==v;++O)E[O]=t[O];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,_){let y=d!==null?d.length:0,b=null;if(y!==0){if(b=l.value,_!==!0||b===null){let m=p+y*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(b===null||b.length<m)&&(b=new Float32Array(m));for(let v=0,E=p;v!==y;++v,E+=4)a.copy(d[v]).applyMatrix4(w,o),a.normal.toArray(b,E),b[E+3]=a.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,b}}function dx(s){let e=new WeakMap;function t(a,o){return o===yh?a.mapping=Rr:o===vh&&(a.mapping=Cr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===yh||o===vh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var us=class extends Ml{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vr=4,Of=[.125,.215,.35,.446,.526,.582],Ls=20,Zc=new us,Ff=new tt,Jc=null,$c=0,Qc=0,eh=!1,Ds=(1+Math.sqrt(5))/2,dr=1/Ds,zf=[new D(-Ds,dr,0),new D(Ds,dr,0),new D(-dr,0,Ds),new D(dr,0,Ds),new D(0,Ds,-dr),new D(0,Ds,dr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Jc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,$c,Qc),this._renderer.xr.enabled=eh,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Gn,format:Bn,colorSpace:Tn,depthBuffer:!1},i=Bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fx(r)),this._blurMaterial=px(r,e,t)}return i}_compileMaterial(e){let t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,Zc)}_sceneToCubeUV(e,t,n,i){let o=new dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ff),u.toneMapping=os,u.autoClear=!1;let p=new jt({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),_=new ce(new ct,p),y=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,y=!0):(p.color.copy(Ff),y=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):w===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;qo(i,w*v,m>2?v:0,v,v),u.setRenderTarget(i),y&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Rr||e.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Zc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zf[(i-r-1)%zf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ce(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ls-1),y=r/_,b=isFinite(r)?1+Math.floor(u*y):Ls;b>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ls}`);let m=[],w=0;for(let k=0;k<Ls;++k){let z=k/y,ie=Math.exp(-z*z/2);m.push(ie),k===0?w+=ie:k<b&&(w+=2*ie)}for(let k=0;k<m.length;k++)m[k]=m[k]/w;f.envMap.value=e.texture,f.samples.value=b,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;let E=this._sizeLods[i],O=3*E*(i>v-vr?i-v+vr:0),L=4*(this._cubeSize-E);qo(t,O,L,3*E,2*E),l.setRenderTarget(t),l.render(d,Zc)}};function fx(s){let e=[],t=[],n=[],i=s,r=s-vr+1+Of.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-vr?l=Of[a-s+vr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,y=3,b=2,m=1,w=new Float32Array(y*_*p),v=new Float32Array(b*_*p),E=new Float32Array(m*_*p);for(let L=0;L<p;L++){let k=L%3*2/3-1,z=L>2?0:-1,ie=[k,z,0,k+2/3,z,0,k+2/3,z+1,0,k,z,0,k+2/3,z+1,0,k,z+1,0];w.set(ie,y*_*L),v.set(f,b*_*L);let M=[L,L,L,L,L,L];E.set(M,m*_*L)}let O=new Kt;O.setAttribute("position",new Jt(w,y)),O.setAttribute("uv",new Jt(v,b)),O.setAttribute("faceIndex",new Jt(E,m)),e.push(O),i>vr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bf(s,e,t){let n=new En(s,e,t);return n.texture.mapping=Zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function px(s,e,t){let n=new Float32Array(Ls),i=new D(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Hf(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Gf(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}function mx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===yh||l===vh,u=l===Rr||l===Cr;if(c||u){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new kr(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new kr(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&dl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bx(s,e,t,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let y=f.morphAttributes[_];for(let b=0,m=y.length;b<m;b++)e.remove(y[b])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)e.update(f[_],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let _ in p){let y=p[_];for(let b=0,m=y.length;b<m;b++)e.update(y[b],s.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,_=d.attributes.position,y=0;if(p!==null){let w=p.array;y=p.version;for(let v=0,E=w.length;v<E;v+=3){let O=w[v+0],L=w[v+1],k=w[v+2];f.push(O,L,L,k,k,O)}}else if(_!==void 0){let w=_.array;y=_.version;for(let v=0,E=w.length/3-1;v<E;v+=3){let O=v+0,L=v+1,k=v+2;f.push(O,L,L,k,k,O)}}else return;let b=new(jp(f)?vl:yl)(f,1);b.version=y;let m=r.get(d);m&&e.remove(m),r.set(d,b)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function _x(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,f*a,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let b=0;for(let m=0;m<_;m++)b+=p[m];t.update(b,n,1)}function d(f,p,_,y){if(_===0)return;let b=e.get("WEBGL_multi_draw");if(b===null)for(let m=0;m<f.length;m++)c(f[m]/a,p[m],y[m]);else{b.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,_);let m=0;for(let w=0;w<_;w++)m+=p[w];for(let w=0;w<y.length;w++)t.update(m,n,y[w])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yx(s,e,t){let n=new WeakMap,i=new Ot;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let ie=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",ie)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],v=0;p===!0&&(v=1),_===!0&&(v=2),y===!0&&(v=3);let E=o.attributes.position.count*v,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let L=new Float32Array(E*O*4*d),k=new xl(L,E,O,d);k.type=pi,k.needsUpdate=!0;let z=v*4;for(let M=0;M<d;M++){let A=b[M],Y=m[M],K=w[M],J=E*O*4*M;for(let de=0;de<A.count;de++){let Z=de*z;p===!0&&(i.fromBufferAttribute(A,de),L[J+Z+0]=i.x,L[J+Z+1]=i.y,L[J+Z+2]=i.z,L[J+Z+3]=0),_===!0&&(i.fromBufferAttribute(Y,de),L[J+Z+4]=i.x,L[J+Z+5]=i.y,L[J+Z+6]=i.z,L[J+Z+7]=0),y===!0&&(i.fromBufferAttribute(K,de),L[J+Z+8]=i.x,L[J+Z+9]=i.y,L[J+Z+10]=i.z,L[J+Z+11]=K.itemSize===4?i.w:1)}}f={count:d,texture:k,size:new ue(E,O)},n.set(o,f),o.addEventListener("dispose",ie)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function vx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Nr=class extends Sn{constructor(e,t,n,i,r,a,o,l,c,u=Er){if(u!==Er&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Er&&(n=Ns),n===void 0&&u===hs&&(n=cs),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jp=new Sn,Vf=new Nr(1,1),$p=new xl,Qp=new Jh,em=new Sl,Wf=[],Xf=[],qf=new Float32Array(16),jf=new Float32Array(9),Yf=new Float32Array(4);function Yr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Wf[i];if(r===void 0&&(r=new Float32Array(i),Wf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function bn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ec(s,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Mx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Sx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function Ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function Tx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(bn(t,n))return;Yf.set(n),s.uniformMatrix2fv(this.addr,!1,Yf),_n(t,n)}}function Ax(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(bn(t,n))return;jf.set(n),s.uniformMatrix3fv(this.addr,!1,jf),_n(t,n)}}function Rx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(bn(t,n))return;qf.set(n),s.uniformMatrix4fv(this.addr,!1,qf),_n(t,n)}}function Cx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Px(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function Ix(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function Dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function Lx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function Nx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function Ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function Ox(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Vf.compareFunction=qp,r=Vf):r=Jp,t.setTexture2D(e||r,i)}function Fx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qp,i)}function zx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||em,i)}function Bx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$p,i)}function Hx(s){switch(s){case 5126:return Mx;case 35664:return Sx;case 35665:return Ex;case 35666:return wx;case 35674:return Tx;case 35675:return Ax;case 35676:return Rx;case 5124:case 35670:return Cx;case 35667:case 35671:return Px;case 35668:case 35672:return Ix;case 35669:case 35673:return Dx;case 5125:return Lx;case 36294:return kx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Bx}}function Gx(s,e){s.uniform1fv(this.addr,e)}function Vx(s,e){let t=Yr(e,this.size,2);s.uniform2fv(this.addr,t)}function Wx(s,e){let t=Yr(e,this.size,3);s.uniform3fv(this.addr,t)}function Xx(s,e){let t=Yr(e,this.size,4);s.uniform4fv(this.addr,t)}function qx(s,e){let t=Yr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jx(s,e){let t=Yr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Yx(s,e){let t=Yr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Kx(s,e){s.uniform1iv(this.addr,e)}function Zx(s,e){s.uniform2iv(this.addr,e)}function Jx(s,e){s.uniform3iv(this.addr,e)}function $x(s,e){s.uniform4iv(this.addr,e)}function Qx(s,e){s.uniform1uiv(this.addr,e)}function ey(s,e){s.uniform2uiv(this.addr,e)}function ty(s,e){s.uniform3uiv(this.addr,e)}function ny(s,e){s.uniform4uiv(this.addr,e)}function iy(s,e,t){let n=this.cache,i=e.length,r=ec(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Jp,r[a])}function sy(s,e,t){let n=this.cache,i=e.length,r=ec(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qp,r[a])}function ry(s,e,t){let n=this.cache,i=e.length,r=ec(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||em,r[a])}function ay(s,e,t){let n=this.cache,i=e.length,r=ec(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||$p,r[a])}function oy(s){switch(s){case 5126:return Gx;case 35664:return Vx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return jx;case 35676:return Yx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return $x;case 5125:return Qx;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}var eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hx(t.type)}},tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}},nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},th=/(\w+)(\])?(\[|\.)?/g;function Kf(s,e){s.seq.push(e),s.map[e.id]=e}function ly(s,e,t){let n=s.name,i=n.length;for(th.lastIndex=0;;){let r=th.exec(n),a=th.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Kf(t,c===void 0?new eu(o,s,e):new tu(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new nu(o),Kf(t,d)),t=d}}}var Tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ly(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Zf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var cy=37297,hy=0;function uy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function dy(s){let e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(s),n;switch(e===t?n="":e===gl&&t===ml?n="LinearDisplayP3ToLinearSRGB":e===ml&&t===gl&&(n="LinearSRGBToLinearDisplayP3"),s){case Tn:case $l:return[n,"LinearTransferOETF"];case an:case Ku:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Jf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+uy(s.getShaderSource(e),a)}else return i}function fy(s,e){let t=dy(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function py(s,e){let t;switch(e){case Lu:t="Linear";break;case ku:t="Reinhard";break;case Nu:t="Cineon";break;case Uu:t="ACESFilmic";break;case Ou:t="AgX";break;case Ja:t="Neutral";break;case Ag:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new D;function my(){It.getLuminanceCoefficients(jo);let s=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function by(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _y(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ea(s){return s!==""}function $f(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(s){return s.replace(xy,vy)}var yy=new Map;function vy(s,e){let t=At[e];if(t===void 0){let n=yy.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return iu(t)}var My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(s){return s.replace(My,Sy)}function Sy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Ey(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function wy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ty(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ay(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kp:e="ENVMAP_BLENDING_MULTIPLY";break;case wg:e="ENVMAP_BLENDING_MIX";break;case Tg:e="ENVMAP_BLENDING_ADD";break}return e}function Ry(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cy(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ey(t),c=wy(t),u=Ty(t),d=Ay(t),f=Ry(t),p=gy(t),_=by(r),y=i.createProgram(),b,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ea).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ea).join(`
`),m.length>0&&(m+=`
`)):(b=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),m=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?At.tonemapping_pars_fragment:"",t.toneMapping!==os?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,fy("linearToOutputTexel",t.outputColorSpace),my(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),a=iu(a),a=$f(a,t),a=Qf(a,t),o=iu(o),o=$f(o,t),o=Qf(o,t),a=ep(a),o=ep(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,b=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===_f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=w+b+a,E=w+m+o,O=Zf(i,i.VERTEX_SHADER,v),L=Zf(i,i.FRAGMENT_SHADER,E);i.attachShader(y,O),i.attachShader(y,L),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function k(A){if(s.debug.checkShaderErrors){let Y=i.getProgramInfoLog(y).trim(),K=i.getShaderInfoLog(O).trim(),J=i.getShaderInfoLog(L).trim(),de=!0,Z=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,O,L);else{let ye=Jf(i,O,"vertex"),oe=Jf(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+Y+`
`+ye+`
`+oe)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(K===""||J==="")&&(Z=!1);Z&&(A.diagnostics={runnable:de,programLog:Y,vertexShader:{log:K,prefix:b},fragmentShader:{log:J,prefix:m}})}i.deleteShader(O),i.deleteShader(L),z=new Tr(i,y),ie=_y(i,y)}let z;this.getUniforms=function(){return z===void 0&&k(this),z};let ie;this.getAttributes=function(){return ie===void 0&&k(this),ie};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(y,cy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=L,this}var Py=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ru(e),t.set(e,n)),n}},ru=class{constructor(e){this.id=Py++,this.code=e,this.usedTimes=0}};function Iy(s,e,t,n,i,r,a){let o=new ka,l=new su,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,_=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,A,Y,K,J){let de=K.fog,Z=J.geometry,ye=M.isMeshStandardMaterial?K.environment:null,oe=(M.isMeshStandardMaterial?t:e).get(M.envMap||ye),G=oe&&oe.mapping===Zl?oe.image.height:null,F=y[M.type];M.precision!==null&&(_=i.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));let $=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=$!==void 0?$.length:0,ge=0;Z.morphAttributes.position!==void 0&&(ge=1),Z.morphAttributes.normal!==void 0&&(ge=2),Z.morphAttributes.color!==void 0&&(ge=3);let B,U,ee,Q;if(F){let An=yi[F];B=An.vertexShader,U=An.fragmentShader}else B=M.vertexShader,U=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);let fe=s.getRenderTarget(),be=J.isInstancedMesh===!0,Te=J.isBatchedMesh===!0,De=!!M.map,re=!!M.matcap,I=!!oe,Ae=!!M.aoMap,we=!!M.lightMap,Me=!!M.bumpMap,Ce=!!M.normalMap,We=!!M.displacementMap,Se=!!M.emissiveMap,P=!!M.metalnessMap,T=!!M.roughnessMap,j=M.anisotropy>0,te=M.clearcoat>0,me=M.dispersion>0,pe=M.iridescence>0,ze=M.sheen>0,Pe=M.transmission>0,Ge=j&&!!M.anisotropyMap,bt=te&&!!M.clearcoatMap,Ee=te&&!!M.clearcoatNormalMap,Ve=te&&!!M.clearcoatRoughnessMap,ht=pe&&!!M.iridescenceMap,lt=pe&&!!M.iridescenceThicknessMap,Ke=ze&&!!M.sheenColorMap,yt=ze&&!!M.sheenRoughnessMap,at=!!M.specularMap,pt=!!M.specularColorMap,H=!!M.specularIntensityMap,Be=Pe&&!!M.transmissionMap,he=Pe&&!!M.thicknessMap,xe=!!M.gradientMap,Xe=!!M.alphaMap,Re=M.alphaTest>0,mt=!!M.alphaHash,nn=!!M.extensions,yn=os;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(yn=s.toneMapping);let Dt={shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:U,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:Te,batchingColor:Te&&J._colorsTexture!==null,instancing:be,instancingColor:be&&J.instanceColor!==null,instancingMorph:be&&J.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Tn,alphaToCoverage:!!M.alphaToCoverage,map:De,matcap:re,envMap:I,envMapMode:I&&oe.mapping,envMapCubeUVHeight:G,aoMap:Ae,lightMap:we,bumpMap:Me,normalMap:Ce,displacementMap:p&&We,emissiveMap:Se,normalMapObjectSpace:Ce&&M.normalMapType===kg,normalMapTangentSpace:Ce&&M.normalMapType===Yu,metalnessMap:P,roughnessMap:T,anisotropy:j,anisotropyMap:Ge,clearcoat:te,clearcoatMap:bt,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ve,dispersion:me,iridescence:pe,iridescenceMap:ht,iridescenceThicknessMap:lt,sheen:ze,sheenColorMap:Ke,sheenRoughnessMap:yt,specularMap:at,specularColorMap:pt,specularIntensityMap:H,transmission:Pe,transmissionMap:Be,thicknessMap:he,gradientMap:xe,opaque:M.transparent===!1&&M.blending===Sr&&M.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Re,alphaHash:mt,combine:M.combine,mapUv:De&&b(M.map.channel),aoMapUv:Ae&&b(M.aoMap.channel),lightMapUv:we&&b(M.lightMap.channel),bumpMapUv:Me&&b(M.bumpMap.channel),normalMapUv:Ce&&b(M.normalMap.channel),displacementMapUv:We&&b(M.displacementMap.channel),emissiveMapUv:Se&&b(M.emissiveMap.channel),metalnessMapUv:P&&b(M.metalnessMap.channel),roughnessMapUv:T&&b(M.roughnessMap.channel),anisotropyMapUv:Ge&&b(M.anisotropyMap.channel),clearcoatMapUv:bt&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:yt&&b(M.sheenRoughnessMap.channel),specularMapUv:at&&b(M.specularMap.channel),specularColorMapUv:pt&&b(M.specularColorMap.channel),specularIntensityMapUv:H&&b(M.specularIntensityMap.channel),transmissionMapUv:Be&&b(M.transmissionMap.channel),thicknessMapUv:he&&b(M.thicknessMap.channel),alphaMapUv:Xe&&b(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ce||j),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Z.attributes.uv&&(De||Xe),fog:!!de,useFog:M.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:yn,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&It.getTransfer(M.map.colorSpace)===Xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:nn&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nn&&M.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function w(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let Y in M.defines)A.push(Y),A.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(v(A,M),E(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function v(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function E(M,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),M.push(o.mask)}function O(M){let A=y[M.type],Y;if(A){let K=yi[A];Y=Vn.clone(K.uniforms)}else Y=M.uniforms;return Y}function L(M,A){let Y;for(let K=0,J=u.length;K<J;K++){let de=u[K];if(de.cacheKey===A){Y=de,++Y.usedTimes;break}}return Y===void 0&&(Y=new Cy(s,A,M,r),u.push(Y)),Y}function k(M){if(--M.usedTimes===0){let A=u.indexOf(M);u[A]=u[u.length-1],u.pop(),M.destroy()}}function z(M){l.remove(M)}function ie(){l.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:O,acquireProgram:L,releaseProgram:k,releaseShaderCache:z,programs:u,dispose:ie}}function Dy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ly(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function np(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ip(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,p,_,y,b){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:b},s[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=y,m.group=b),e++,m}function o(d,f,p,_,y,b){let m=a(d,f,p,_,y,b);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(d,f,p,_,y,b){let m=a(d,f,p,_,y,b);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||Ly),n.length>1&&n.sort(f||np),i.length>1&&i.sort(f||np)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function ky(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new ip,s.set(n,[a])):i>=r.length?(a=new ip,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ny(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new tt};break;case"SpotLight":t={position:new D,direction:new D,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Uy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Oy=0;function Fy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zy(s){let e=new Ny,t=Uy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,r=new ot,a=new ot;function o(c){let u=0,d=0,f=0;for(let ie=0;ie<9;ie++)n.probe[ie].set(0,0,0);let p=0,_=0,y=0,b=0,m=0,w=0,v=0,E=0,O=0,L=0,k=0;c.sort(Fy);for(let ie=0,M=c.length;ie<M;ie++){let A=c[ie],Y=A.color,K=A.intensity,J=A.distance,de=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=Y.r*K,d+=Y.g*K,f+=Y.b*K;else if(A.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(A.sh.coefficients[Z],K);k++}else if(A.isDirectionalLight){let Z=e.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ye=A.shadow,oe=t.get(A);oe.shadowIntensity=ye.intensity,oe.shadowBias=ye.bias,oe.shadowNormalBias=ye.normalBias,oe.shadowRadius=ye.radius,oe.shadowMapSize=ye.mapSize,n.directionalShadow[p]=oe,n.directionalShadowMap[p]=de,n.directionalShadowMatrix[p]=A.shadow.matrix,w++}n.directional[p]=Z,p++}else if(A.isSpotLight){let Z=e.get(A);Z.position.setFromMatrixPosition(A.matrixWorld),Z.color.copy(Y).multiplyScalar(K),Z.distance=J,Z.coneCos=Math.cos(A.angle),Z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Z.decay=A.decay,n.spot[y]=Z;let ye=A.shadow;if(A.map&&(n.spotLightMap[O]=A.map,O++,ye.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[y]=ye.matrix,A.castShadow){let oe=t.get(A);oe.shadowIntensity=ye.intensity,oe.shadowBias=ye.bias,oe.shadowNormalBias=ye.normalBias,oe.shadowRadius=ye.radius,oe.shadowMapSize=ye.mapSize,n.spotShadow[y]=oe,n.spotShadowMap[y]=de,E++}y++}else if(A.isRectAreaLight){let Z=e.get(A);Z.color.copy(Y).multiplyScalar(K),Z.halfWidth.set(A.width*.5,0,0),Z.halfHeight.set(0,A.height*.5,0),n.rectArea[b]=Z,b++}else if(A.isPointLight){let Z=e.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),Z.distance=A.distance,Z.decay=A.decay,A.castShadow){let ye=A.shadow,oe=t.get(A);oe.shadowIntensity=ye.intensity,oe.shadowBias=ye.bias,oe.shadowNormalBias=ye.normalBias,oe.shadowRadius=ye.radius,oe.shadowMapSize=ye.mapSize,oe.shadowCameraNear=ye.camera.near,oe.shadowCameraFar=ye.camera.far,n.pointShadow[_]=oe,n.pointShadowMap[_]=de,n.pointShadowMatrix[_]=A.shadow.matrix,v++}n.point[_]=Z,_++}else if(A.isHemisphereLight){let Z=e.get(A);Z.skyColor.copy(A.color).multiplyScalar(K),Z.groundColor.copy(A.groundColor).multiplyScalar(K),n.hemi[m]=Z,m++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==p||z.pointLength!==_||z.spotLength!==y||z.rectAreaLength!==b||z.hemiLength!==m||z.numDirectionalShadows!==w||z.numPointShadows!==v||z.numSpotShadows!==E||z.numSpotMaps!==O||z.numLightProbes!==k)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=b,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=E+O-L,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,z.directionalLength=p,z.pointLength=_,z.spotLength=y,z.rectAreaLength=b,z.hemiLength=m,z.numDirectionalShadows=w,z.numPointShadows=v,z.numSpotShadows=E,z.numSpotMaps=O,z.numLightProbes=k,n.version=Oy++)}function l(c,u){let d=0,f=0,p=0,_=0,y=0,b=u.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let v=c[m];if(v.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),d++}else if(v.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(b),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),p++}else if(v.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(b),a.identity(),r.copy(v.matrixWorld),r.premultiply(b),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(b),f++}else if(v.isHemisphereLight){let E=n.hemi[y];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(b),y++}}}return{setup:o,setupView:l,state:n}}function sp(s){let e=new zy(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function By(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new sp(s),e.set(i,[o])):r>=a.length?(o=new sp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var au=class extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ou=class extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
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
}`;function Vy(s,e,t){let n=new Na,i=new ue,r=new ue,a=new Ot,o=new au({depthPacking:Lg}),l=new ou,c={},u=t.maxTextureSize,d={[Mi]:Dn,[Dn]:Mi,[on]:on},f=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Hy,fragmentShader:Gy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Kt;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ce(_,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lp;let m=this.type;this.render=function(L,k,z){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;let ie=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(pn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let K=m!==ui&&this.type===ui,J=m===ui&&this.type!==ui;for(let de=0,Z=L.length;de<Z;de++){let ye=L[de],oe=ye.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;i.copy(oe.mapSize);let G=oe.getFrameExtents();if(i.multiply(G),r.copy(oe.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/G.x),i.x=r.x*G.x,oe.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/G.y),i.y=r.y*G.y,oe.mapSize.y=r.y)),oe.map===null||K===!0||J===!0){let $=this.type!==ui?{minFilter:fn,magFilter:fn}:{};oe.map!==null&&oe.map.dispose(),oe.map=new En(i.x,i.y,$),oe.map.texture.name=ye.name+".shadowMap",oe.camera.updateProjectionMatrix()}s.setRenderTarget(oe.map),s.clear();let F=oe.getViewportCount();for(let $=0;$<F;$++){let le=oe.getViewport($);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),Y.viewport(a),oe.updateMatrices(ye,$),n=oe.getFrustum(),E(k,z,oe.camera,ye,this.type)}oe.isPointLightShadow!==!0&&this.type===ui&&w(oe,z),oe.needsUpdate=!1}m=this.type,b.needsUpdate=!1,s.setRenderTarget(ie,M,A)};function w(L,k){let z=e.update(y);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new En(i.x,i.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(k,null,z,f,y,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(k,null,z,p,y,null)}function v(L,k,z,ie){let M=null,A=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)M=A;else if(M=z.isPointLight===!0?l:o,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){let Y=M.uuid,K=k.uuid,J=c[Y];J===void 0&&(J={},c[Y]=J);let de=J[K];de===void 0&&(de=M.clone(),J[K]=de,k.addEventListener("dispose",O)),M=de}if(M.visible=k.visible,M.wireframe=k.wireframe,ie===ui?M.side=k.shadowSide!==null?k.shadowSide:k.side:M.side=k.shadowSide!==null?k.shadowSide:d[k.side],M.alphaMap=k.alphaMap,M.alphaTest=k.alphaTest,M.map=k.map,M.clipShadows=k.clipShadows,M.clippingPlanes=k.clippingPlanes,M.clipIntersection=k.clipIntersection,M.displacementMap=k.displacementMap,M.displacementScale=k.displacementScale,M.displacementBias=k.displacementBias,M.wireframeLinewidth=k.wireframeLinewidth,M.linewidth=k.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let Y=s.properties.get(M);Y.light=z}return M}function E(L,k,z,ie,M){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===ui)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);let K=e.update(L),J=L.material;if(Array.isArray(J)){let de=K.groups;for(let Z=0,ye=de.length;Z<ye;Z++){let oe=de[Z],G=J[oe.materialIndex];if(G&&G.visible){let F=v(L,G,ie,M);L.onBeforeShadow(s,L,k,z,K,F,oe),s.renderBufferDirect(z,null,K,F,L,oe),L.onAfterShadow(s,L,k,z,K,F,oe)}}}else if(J.visible){let de=v(L,J,ie,M);L.onBeforeShadow(s,L,k,z,K,de,null),s.renderBufferDirect(z,null,K,de,L,null),L.onAfterShadow(s,L,k,z,K,de,null)}}let Y=L.children;for(let K=0,J=Y.length;K<J;K++)E(Y[K],k,z,ie,M)}function O(L){L.target.removeEventListener("dispose",O);for(let z in c){let ie=c[z],M=L.target.uuid;M in ie&&(ie[M].dispose(),delete ie[M])}}}var Wy={[fh]:ph,[mh]:_h,[gh]:xh,[Ar]:bh,[ph]:fh,[_h]:mh,[xh]:gh,[bh]:Ar};function Xy(s){function e(){let H=!1,Be=new Ot,he=null,xe=new Ot(0,0,0,0);return{setMask:function(Xe){he!==Xe&&!H&&(s.colorMask(Xe,Xe,Xe,Xe),he=Xe)},setLocked:function(Xe){H=Xe},setClear:function(Xe,Re,mt,nn,yn){yn===!0&&(Xe*=nn,Re*=nn,mt*=nn),Be.set(Xe,Re,mt,nn),xe.equals(Be)===!1&&(s.clearColor(Xe,Re,mt,nn),xe.copy(Be))},reset:function(){H=!1,he=null,xe.set(-1,0,0,0)}}}function t(){let H=!1,Be=!1,he=null,xe=null,Xe=null;return{setReversed:function(Re){Be=Re},setTest:function(Re){Re?ee(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(Re){he!==Re&&!H&&(s.depthMask(Re),he=Re)},setFunc:function(Re){if(Be&&(Re=Wy[Re]),xe!==Re){switch(Re){case fh:s.depthFunc(s.NEVER);break;case ph:s.depthFunc(s.ALWAYS);break;case mh:s.depthFunc(s.LESS);break;case Ar:s.depthFunc(s.LEQUAL);break;case gh:s.depthFunc(s.EQUAL);break;case bh:s.depthFunc(s.GEQUAL);break;case _h:s.depthFunc(s.GREATER);break;case xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=Re}},setLocked:function(Re){H=Re},setClear:function(Re){Xe!==Re&&(s.clearDepth(Re),Xe=Re)},reset:function(){H=!1,he=null,xe=null,Xe=null}}}function n(){let H=!1,Be=null,he=null,xe=null,Xe=null,Re=null,mt=null,nn=null,yn=null;return{setTest:function(Dt){H||(Dt?ee(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(Dt){Be!==Dt&&!H&&(s.stencilMask(Dt),Be=Dt)},setFunc:function(Dt,An,Nt){(he!==Dt||xe!==An||Xe!==Nt)&&(s.stencilFunc(Dt,An,Nt),he=Dt,xe=An,Xe=Nt)},setOp:function(Dt,An,Nt){(Re!==Dt||mt!==An||nn!==Nt)&&(s.stencilOp(Dt,An,Nt),Re=Dt,mt=An,nn=Nt)},setLocked:function(Dt){H=Dt},setClear:function(Dt){yn!==Dt&&(s.clearStencil(Dt),yn=Dt)},reset:function(){H=!1,Be=null,he=null,xe=null,Xe=null,Re=null,mt=null,nn=null,yn=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},u={},d=new WeakMap,f=[],p=null,_=!1,y=null,b=null,m=null,w=null,v=null,E=null,O=null,L=new tt(0,0,0),k=0,z=!1,ie=null,M=null,A=null,Y=null,K=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),de=!1,Z=0,ye=s.getParameter(s.VERSION);ye.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ye)[1]),de=Z>=1):ye.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ye)[1]),de=Z>=2);let oe=null,G={},F=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),le=new Ot().fromArray(F),ge=new Ot().fromArray($);function B(H,Be,he,xe){let Xe=new Uint8Array(4),Re=s.createTexture();s.bindTexture(H,Re),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<he;mt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Be,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Xe):s.texImage2D(Be+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Xe);return Re}let U={};U[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),U[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),U[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ee(s.DEPTH_TEST),r.setFunc(Ar),we(!1),Me(ff),ee(s.CULL_FACE),I(pn);function ee(H){c[H]!==!0&&(s.enable(H),c[H]=!0)}function Q(H){c[H]!==!1&&(s.disable(H),c[H]=!1)}function fe(H,Be){return u[H]!==Be?(s.bindFramebuffer(H,Be),u[H]=Be,H===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Be),H===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Be),!0):!1}function be(H,Be){let he=f,xe=!1;if(H){he=d.get(Be),he===void 0&&(he=[],d.set(Be,he));let Xe=H.textures;if(he.length!==Xe.length||he[0]!==s.COLOR_ATTACHMENT0){for(let Re=0,mt=Xe.length;Re<mt;Re++)he[Re]=s.COLOR_ATTACHMENT0+Re;he.length=Xe.length,xe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,xe=!0);xe&&s.drawBuffers(he)}function Te(H){return p!==H?(s.useProgram(H),p=H,!0):!1}let De={[Qn]:s.FUNC_ADD,[ug]:s.FUNC_SUBTRACT,[dg]:s.FUNC_REVERSE_SUBTRACT};De[fg]=s.MIN,De[pg]=s.MAX;let re={[jr]:s.ZERO,[mg]:s.ONE,[gg]:s.SRC_COLOR,[uh]:s.SRC_ALPHA,[yg]:s.SRC_ALPHA_SATURATE,[Kl]:s.DST_COLOR,[Yl]:s.DST_ALPHA,[bg]:s.ONE_MINUS_SRC_COLOR,[dh]:s.ONE_MINUS_SRC_ALPHA,[xg]:s.ONE_MINUS_DST_COLOR,[_g]:s.ONE_MINUS_DST_ALPHA,[vg]:s.CONSTANT_COLOR,[Mg]:s.ONE_MINUS_CONSTANT_COLOR,[Sg]:s.CONSTANT_ALPHA,[Eg]:s.ONE_MINUS_CONSTANT_ALPHA};function I(H,Be,he,xe,Xe,Re,mt,nn,yn,Dt){if(H===pn){_===!0&&(Q(s.BLEND),_=!1);return}if(_===!1&&(ee(s.BLEND),_=!0),H!==Du){if(H!==y||Dt!==z){if((b!==Qn||v!==Qn)&&(s.blendEquation(s.FUNC_ADD),b=Qn,v=Qn),Dt)switch(H){case Sr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ks:s.blendFunc(s.ONE,s.ONE);break;case pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ks:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,w=null,E=null,O=null,L.set(0,0,0),k=0,y=H,z=Dt}return}Xe=Xe||Be,Re=Re||he,mt=mt||xe,(Be!==b||Xe!==v)&&(s.blendEquationSeparate(De[Be],De[Xe]),b=Be,v=Xe),(he!==m||xe!==w||Re!==E||mt!==O)&&(s.blendFuncSeparate(re[he],re[xe],re[Re],re[mt]),m=he,w=xe,E=Re,O=mt),(nn.equals(L)===!1||yn!==k)&&(s.blendColor(nn.r,nn.g,nn.b,yn),L.copy(nn),k=yn),y=H,z=!1}function Ae(H,Be){H.side===on?Q(s.CULL_FACE):ee(s.CULL_FACE);let he=H.side===Dn;Be&&(he=!he),we(he),H.blending===Sr&&H.transparent===!1?I(pn):I(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),i.setMask(H.colorWrite);let xe=H.stencilWrite;a.setTest(xe),xe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),We(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function we(H){ie!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),ie=H)}function Me(H){H!==lg?(ee(s.CULL_FACE),H!==M&&(H===ff?s.cullFace(s.BACK):H===cg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),M=H}function Ce(H){H!==A&&(de&&s.lineWidth(H),A=H)}function We(H,Be,he){H?(ee(s.POLYGON_OFFSET_FILL),(Y!==Be||K!==he)&&(s.polygonOffset(Be,he),Y=Be,K=he)):Q(s.POLYGON_OFFSET_FILL)}function Se(H){H?ee(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function P(H){H===void 0&&(H=s.TEXTURE0+J-1),oe!==H&&(s.activeTexture(H),oe=H)}function T(H,Be,he){he===void 0&&(oe===null?he=s.TEXTURE0+J-1:he=oe);let xe=G[he];xe===void 0&&(xe={type:void 0,texture:void 0},G[he]=xe),(xe.type!==H||xe.texture!==Be)&&(oe!==he&&(s.activeTexture(he),oe=he),s.bindTexture(H,Be||U[H]),xe.type=H,xe.texture=Be)}function j(){let H=G[oe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(H){le.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),le.copy(H))}function Ke(H){ge.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),ge.copy(H))}function yt(H,Be){let he=l.get(Be);he===void 0&&(he=new WeakMap,l.set(Be,he));let xe=he.get(H);xe===void 0&&(xe=s.getUniformBlockIndex(Be,H.name),he.set(H,xe))}function at(H,Be){let xe=l.get(Be).get(H);o.get(Be)!==xe&&(s.uniformBlockBinding(Be,xe,H.__bindingPointIndex),o.set(Be,xe))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},oe=null,G={},u={},d=new WeakMap,f=[],p=null,_=!1,y=null,b=null,m=null,w=null,v=null,E=null,O=null,L=new tt(0,0,0),k=0,z=!1,ie=null,M=null,A=null,Y=null,K=null,le.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ee,disable:Q,bindFramebuffer:fe,drawBuffers:be,useProgram:Te,setBlending:I,setMaterial:Ae,setFlipSided:we,setCullFace:Me,setLineWidth:Ce,setPolygonOffset:We,setScissorTest:Se,activeTexture:P,bindTexture:T,unbindTexture:j,compressedTexImage2D:te,compressedTexImage3D:me,texImage2D:Ve,texImage3D:ht,updateUBOMapping:yt,uniformBlockBinding:at,texStorage2D:bt,texStorage3D:Ee,texSubImage2D:pe,texSubImage3D:ze,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ge,scissor:lt,viewport:Ke,reset:pt}}function rp(s,e,t,n){let i=qy(n);switch(t){case zp:return s*e;case Hp:return s*e;case Gp:return s*e*2;case Gu:return s*e/i.components*i.byteLength;case Vu:return s*e/i.components*i.byteLength;case Vp:return s*e*2/i.components*i.byteLength;case Wu:return s*e*2/i.components*i.byteLength;case Bp:return s*e*3/i.components*i.byteLength;case Bn:return s*e*4/i.components*i.byteLength;case Xu:return s*e*4/i.components*i.byteLength;case ol:case ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cl:case hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:case wh:return Math.max(s,16)*Math.max(e,8)/4;case Mh:case Eh:return Math.max(s,8)*Math.max(e,8)/2;case Th:case Ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ul:case Vh:case Wh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wp:case Xh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qh:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qy(s){switch(s){case mi:case Up:return{byteLength:1,components:1};case Da:case Op:case Gn:return{byteLength:2,components:1};case Bu:case Hu:return{byteLength:2,components:4};case Ns:case zu:case pi:return{byteLength:4,components:1};case Fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function jy(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return p?new OffscreenCanvas(P,T):La("canvas")}function y(P,T,j){let te=1,me=Se(P);if((me.width>j||me.height>j)&&(te=j/Math.max(me.width,me.height)),te<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let pe=Math.floor(te*me.width),ze=Math.floor(te*me.height);d===void 0&&(d=_(pe,ze));let Pe=T?_(pe,ze):d;return Pe.width=pe,Pe.height=ze,Pe.getContext("2d").drawImage(P,0,0,pe,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+pe+"x"+ze+")."),Pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function b(P){return P.generateMipmaps&&P.minFilter!==fn&&P.minFilter!==zn}function m(P){s.generateMipmap(P)}function w(P,T,j,te,me=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=T;if(T===s.RED&&(j===s.FLOAT&&(pe=s.R32F),j===s.HALF_FLOAT&&(pe=s.R16F),j===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.R8UI),j===s.UNSIGNED_SHORT&&(pe=s.R16UI),j===s.UNSIGNED_INT&&(pe=s.R32UI),j===s.BYTE&&(pe=s.R8I),j===s.SHORT&&(pe=s.R16I),j===s.INT&&(pe=s.R32I)),T===s.RG&&(j===s.FLOAT&&(pe=s.RG32F),j===s.HALF_FLOAT&&(pe=s.RG16F),j===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RG8UI),j===s.UNSIGNED_SHORT&&(pe=s.RG16UI),j===s.UNSIGNED_INT&&(pe=s.RG32UI),j===s.BYTE&&(pe=s.RG8I),j===s.SHORT&&(pe=s.RG16I),j===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),j===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),j===s.UNSIGNED_INT&&(pe=s.RGB32UI),j===s.BYTE&&(pe=s.RGB8I),j===s.SHORT&&(pe=s.RGB16I),j===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),j===s.UNSIGNED_INT&&(pe=s.RGBA32UI),j===s.BYTE&&(pe=s.RGBA8I),j===s.SHORT&&(pe=s.RGBA16I),j===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){let ze=me?pl:It.getTransfer(te);j===s.FLOAT&&(pe=s.RGBA32F),j===s.HALF_FLOAT&&(pe=s.RGBA16F),j===s.UNSIGNED_BYTE&&(pe=ze===Xt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function v(P,T){let j;return P?T===null||T===Ns||T===cs?j=s.DEPTH24_STENCIL8:T===pi?j=s.DEPTH32F_STENCIL8:T===Da&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ns||T===cs?j=s.DEPTH_COMPONENT24:T===pi?j=s.DEPTH_COMPONENT32F:T===Da&&(j=s.DEPTH_COMPONENT16),j}function E(P,T){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==zn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function O(P){let T=P.target;T.removeEventListener("dispose",O),k(T),T.isVideoTexture&&u.delete(T)}function L(P){let T=P.target;T.removeEventListener("dispose",L),ie(T)}function k(P){let T=n.get(P);if(T.__webglInit===void 0)return;let j=P.source,te=f.get(j);if(te){let me=te[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&z(P),Object.keys(te).length===0&&f.delete(j)}n.remove(P)}function z(P){let T=n.get(P);s.deleteTexture(T.__webglTexture);let j=P.source,te=f.get(j);delete te[T.__cacheKey],a.memory.textures--}function ie(P){let T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let me=0;me<T.__webglFramebuffer[te].length;me++)s.deleteFramebuffer(T.__webglFramebuffer[te][me]);else s.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)s.deleteFramebuffer(T.__webglFramebuffer[te]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=P.textures;for(let te=0,me=j.length;te<me;te++){let pe=n.get(j[te]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(j[te])}n.remove(P)}let M=0;function A(){M=0}function Y(){let P=M;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),M+=1,P}function K(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function J(P,T){let j=n.get(P);if(P.isVideoTexture&&Ce(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){let te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(j,P,T);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function de(P,T){let j=n.get(P);if(P.version>0&&j.__version!==P.version){ge(j,P,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function Z(P,T){let j=n.get(P);if(P.version>0&&j.__version!==P.version){ge(j,P,T);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function ye(P,T){let j=n.get(P);if(P.version>0&&j.__version!==P.version){B(j,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}let oe={[ln]:s.REPEAT,[Ui]:s.CLAMP_TO_EDGE,[Ia]:s.MIRRORED_REPEAT},G={[fn]:s.NEAREST,[Fu]:s.NEAREST_MIPMAP_NEAREST,[_r]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[wa]:s.LINEAR_MIPMAP_NEAREST,[vi]:s.LINEAR_MIPMAP_LINEAR},F={[Ng]:s.NEVER,[Hg]:s.ALWAYS,[Ug]:s.LESS,[qp]:s.LEQUAL,[Og]:s.EQUAL,[Bg]:s.GEQUAL,[Fg]:s.GREATER,[zg]:s.NOTEQUAL};function $(P,T){if(T.type===pi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===zn||T.magFilter===wa||T.magFilter===_r||T.magFilter===vi||T.minFilter===zn||T.minFilter===wa||T.minFilter===_r||T.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,oe[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,oe[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,oe[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,G[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,G[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fn||T.minFilter!==_r&&T.minFilter!==vi||T.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function le(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",O));let te=T.source,me=f.get(te);me===void 0&&(me={},f.set(te,me));let pe=K(T);if(pe!==P.__cacheKey){me[pe]===void 0&&(me[pe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),me[pe].usedTimes++;let ze=me[P.__cacheKey];ze!==void 0&&(me[P.__cacheKey].usedTimes--,ze.usedTimes===0&&z(T)),P.__cacheKey=pe,P.__webglTexture=me[pe].texture}return j}function ge(P,T,j){let te=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=s.TEXTURE_3D);let me=le(P,T),pe=T.source;t.bindTexture(te,P.__webglTexture,s.TEXTURE0+j);let ze=n.get(pe);if(pe.version!==ze.__version||me===!0){t.activeTexture(s.TEXTURE0+j);let Pe=It.getPrimaries(It.workingColorSpace),Ge=T.colorSpace===ss?null:It.getPrimaries(T.colorSpace),bt=T.colorSpace===ss||Pe===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Ee=y(T.image,!1,i.maxTextureSize);Ee=We(T,Ee);let Ve=r.convert(T.format,T.colorSpace),ht=r.convert(T.type),lt=w(T.internalFormat,Ve,ht,T.colorSpace,T.isVideoTexture);$(te,T);let Ke,yt=T.mipmaps,at=T.isVideoTexture!==!0,pt=ze.__version===void 0||me===!0,H=pe.dataReady,Be=E(T,Ee);if(T.isDepthTexture)lt=v(T.format===hs,T.type),pt&&(at?t.texStorage2D(s.TEXTURE_2D,1,lt,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,lt,Ee.width,Ee.height,0,Ve,ht,null));else if(T.isDataTexture)if(yt.length>0){at&&pt&&t.texStorage2D(s.TEXTURE_2D,Be,lt,yt[0].width,yt[0].height);for(let he=0,xe=yt.length;he<xe;he++)Ke=yt[he],at?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ke.width,Ke.height,Ve,ht,Ke.data):t.texImage2D(s.TEXTURE_2D,he,lt,Ke.width,Ke.height,0,Ve,ht,Ke.data);T.generateMipmaps=!1}else at?(pt&&t.texStorage2D(s.TEXTURE_2D,Be,lt,Ee.width,Ee.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ve,ht,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,lt,Ee.width,Ee.height,0,Ve,ht,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,lt,yt[0].width,yt[0].height,Ee.depth);for(let he=0,xe=yt.length;he<xe;he++)if(Ke=yt[he],T.format!==Bn)if(Ve!==null)if(at){if(H)if(T.layerUpdates.size>0){let Xe=rp(Ke.width,Ke.height,T.format,T.type);for(let Re of T.layerUpdates){let mt=Ke.data.subarray(Re*Xe/Ke.data.BYTES_PER_ELEMENT,(Re+1)*Xe/Ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,Re,Ke.width,Ke.height,1,Ve,mt,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ke.width,Ke.height,Ee.depth,Ve,Ke.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,lt,Ke.width,Ke.height,Ee.depth,0,Ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ke.width,Ke.height,Ee.depth,Ve,ht,Ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,lt,Ke.width,Ke.height,Ee.depth,0,Ve,ht,Ke.data)}else{at&&pt&&t.texStorage2D(s.TEXTURE_2D,Be,lt,yt[0].width,yt[0].height);for(let he=0,xe=yt.length;he<xe;he++)Ke=yt[he],T.format!==Bn?Ve!==null?at?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ke.width,Ke.height,Ve,Ke.data):t.compressedTexImage2D(s.TEXTURE_2D,he,lt,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ke.width,Ke.height,Ve,ht,Ke.data):t.texImage2D(s.TEXTURE_2D,he,lt,Ke.width,Ke.height,0,Ve,ht,Ke.data)}else if(T.isDataArrayTexture)if(at){if(pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,lt,Ee.width,Ee.height,Ee.depth),H)if(T.layerUpdates.size>0){let he=rp(Ee.width,Ee.height,T.format,T.type);for(let xe of T.layerUpdates){let Xe=Ee.data.subarray(xe*he/Ee.data.BYTES_PER_ELEMENT,(xe+1)*he/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,Ve,ht,Xe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ve,ht,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,lt,Ee.width,Ee.height,Ee.depth,0,Ve,ht,Ee.data);else if(T.isData3DTexture)at?(pt&&t.texStorage3D(s.TEXTURE_3D,Be,lt,Ee.width,Ee.height,Ee.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ve,ht,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,lt,Ee.width,Ee.height,Ee.depth,0,Ve,ht,Ee.data);else if(T.isFramebufferTexture){if(pt)if(at)t.texStorage2D(s.TEXTURE_2D,Be,lt,Ee.width,Ee.height);else{let he=Ee.width,xe=Ee.height;for(let Xe=0;Xe<Be;Xe++)t.texImage2D(s.TEXTURE_2D,Xe,lt,he,xe,0,Ve,ht,null),he>>=1,xe>>=1}}else if(yt.length>0){if(at&&pt){let he=Se(yt[0]);t.texStorage2D(s.TEXTURE_2D,Be,lt,he.width,he.height)}for(let he=0,xe=yt.length;he<xe;he++)Ke=yt[he],at?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ve,ht,Ke):t.texImage2D(s.TEXTURE_2D,he,lt,Ve,ht,Ke);T.generateMipmaps=!1}else if(at){if(pt){let he=Se(Ee);t.texStorage2D(s.TEXTURE_2D,Be,lt,he.width,he.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,ht,Ee)}else t.texImage2D(s.TEXTURE_2D,0,lt,Ve,ht,Ee);b(T)&&m(te),ze.__version=pe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function B(P,T,j){if(T.image.length!==6)return;let te=le(P,T),me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);let pe=n.get(me);if(me.version!==pe.__version||te===!0){t.activeTexture(s.TEXTURE0+j);let ze=It.getPrimaries(It.workingColorSpace),Pe=T.colorSpace===ss?null:It.getPrimaries(T.colorSpace),Ge=T.colorSpace===ss||ze===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let bt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Ve=[];for(let xe=0;xe<6;xe++)!bt&&!Ee?Ve[xe]=y(T.image[xe],!0,i.maxCubemapSize):Ve[xe]=Ee?T.image[xe].image:T.image[xe],Ve[xe]=We(T,Ve[xe]);let ht=Ve[0],lt=r.convert(T.format,T.colorSpace),Ke=r.convert(T.type),yt=w(T.internalFormat,lt,Ke,T.colorSpace),at=T.isVideoTexture!==!0,pt=pe.__version===void 0||te===!0,H=me.dataReady,Be=E(T,ht);$(s.TEXTURE_CUBE_MAP,T);let he;if(bt){at&&pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,yt,ht.width,ht.height);for(let xe=0;xe<6;xe++){he=Ve[xe].mipmaps;for(let Xe=0;Xe<he.length;Xe++){let Re=he[Xe];T.format!==Bn?lt!==null?at?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,Re.width,Re.height,lt,Re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,yt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,Re.width,Re.height,lt,Ke,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,yt,Re.width,Re.height,0,lt,Ke,Re.data)}}}else{if(he=T.mipmaps,at&&pt){he.length>0&&Be++;let xe=Se(Ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,yt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){at?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ve[xe].width,Ve[xe].height,lt,Ke,Ve[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,yt,Ve[xe].width,Ve[xe].height,0,lt,Ke,Ve[xe].data);for(let Xe=0;Xe<he.length;Xe++){let mt=he[Xe].image[xe].image;at?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,mt.width,mt.height,lt,Ke,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,yt,mt.width,mt.height,0,lt,Ke,mt.data)}}else{at?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,lt,Ke,Ve[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,yt,lt,Ke,Ve[xe]);for(let Xe=0;Xe<he.length;Xe++){let Re=he[Xe];at?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,lt,Ke,Re.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,yt,lt,Ke,Re.image[xe])}}}b(T)&&m(s.TEXTURE_CUBE_MAP),pe.__version=me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function U(P,T,j,te,me,pe){let ze=r.convert(j.format,j.colorSpace),Pe=r.convert(j.type),Ge=w(j.internalFormat,ze,Pe,j.colorSpace);if(!n.get(T).__hasExternalTextures){let Ee=Math.max(1,T.width>>pe),Ve=Math.max(1,T.height>>pe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,pe,Ge,Ee,Ve,T.depth,0,ze,Pe,null):t.texImage2D(me,pe,Ge,Ee,Ve,0,ze,Pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Me(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,me,n.get(j).__webglTexture,0,we(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,me,n.get(j).__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(P,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){let te=T.depthTexture,me=te&&te.isDepthTexture?te.type:null,pe=v(T.stencilBuffer,me),ze=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=we(T);Me(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,pe,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,P)}else{let te=T.textures;for(let me=0;me<te.length;me++){let pe=te[me],ze=r.convert(pe.format,pe.colorSpace),Pe=r.convert(pe.type),Ge=w(pe.internalFormat,ze,Pe,pe.colorSpace),bt=we(T);j&&Me(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,Ge,T.width,T.height):Me(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,Ge,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Q(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);let te=n.get(T.depthTexture).__webglTexture,me=we(T);if(T.depthTexture.format===Er)Me(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(T.depthTexture.format===hs)Me(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function fe(P){let T=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let te=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),te){let me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,te.removeEventListener("dispose",me)};te.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=te}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Q(T.__webglFramebuffer,P)}else if(j){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]===void 0)T.__webglDepthbuffer[te]=s.createRenderbuffer(),ee(T.__webglDepthbuffer[te],P,!1);else{let me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ee(T.__webglDepthbuffer,P,!1);else{let te=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(P,T,j){let te=n.get(P);T!==void 0&&U(te.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&fe(P)}function Te(P){let T=P.texture,j=n.get(P),te=n.get(T);P.addEventListener("dispose",L);let me=P.textures,pe=P.isWebGLCubeRenderTarget===!0,ze=me.length>1;if(ze||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=T.version,a.memory.textures++),pe){j.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Pe]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)j.__webglFramebuffer[Pe][Ge]=s.createFramebuffer()}else j.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)j.__webglFramebuffer[Pe]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Pe=0,Ge=me.length;Pe<Ge;Pe++){let bt=n.get(me[Pe]);bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Me(P)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Pe=0;Pe<me.length;Pe++){let Ge=me[Pe];j.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Pe]);let bt=r.convert(Ge.format,Ge.colorSpace),Ee=r.convert(Ge.type),Ve=w(Ge.internalFormat,bt,Ee,Ge.colorSpace,P.isXRRenderTarget===!0),ht=we(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Ve,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,j.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),$(s.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)U(j.__webglFramebuffer[Pe][Ge],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ge);else U(j.__webglFramebuffer[Pe],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);b(T)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Pe=0,Ge=me.length;Pe<Ge;Pe++){let bt=me[Pe],Ee=n.get(bt);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),$(s.TEXTURE_2D,bt),U(j.__webglFramebuffer,P,bt,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),b(bt)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,te.__webglTexture),$(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)U(j.__webglFramebuffer[Ge],P,T,s.COLOR_ATTACHMENT0,Pe,Ge);else U(j.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,Pe,0);b(T)&&m(Pe),t.unbindTexture()}P.depthBuffer&&fe(P)}function De(P){let T=P.textures;for(let j=0,te=T.length;j<te;j++){let me=T[j];if(b(me)){let pe=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ze=n.get(me).__webglTexture;t.bindTexture(pe,ze),m(pe),t.unbindTexture()}}}let re=[],I=[];function Ae(P){if(P.samples>0){if(Me(P)===!1){let T=P.textures,j=P.width,te=P.height,me=s.COLOR_BUFFER_BIT,pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=n.get(P),Pe=T.length>1;if(Pe)for(let Ge=0;Ge<T.length;Ge++)t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ge=0;Ge<T.length;Ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ge]);let bt=n.get(T[Ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,j,te,0,0,j,te,me,s.NEAREST),l===!0&&(re.length=0,I.length=0,re.push(s.COLOR_ATTACHMENT0+Ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(pe),I.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Ge=0;Ge<T.length;Ge++){t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ge]);let bt=n.get(T[Ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,bt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function we(P){return Math.min(i.maxSamples,P.samples)}function Me(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(P){let T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function We(P,T){let j=P.colorSpace,te=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Tn&&j!==ss&&(It.getTransfer(j)===Xt?(te!==Bn||me!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Se(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=A,this.setTexture2D=J,this.setTexture2DArray=de,this.setTexture3D=Z,this.setTextureCube=ye,this.rebindTextures=be,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=U,this.useMultisampledRTT=Me}function Yy(s,e){function t(n,i=ss){let r,a=It.getTransfer(i);if(n===mi)return s.UNSIGNED_BYTE;if(n===Bu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Up)return s.BYTE;if(n===Op)return s.SHORT;if(n===Da)return s.UNSIGNED_SHORT;if(n===zu)return s.INT;if(n===Ns)return s.UNSIGNED_INT;if(n===pi)return s.FLOAT;if(n===Gn)return s.HALF_FLOAT;if(n===zp)return s.ALPHA;if(n===Bp)return s.RGB;if(n===Bn)return s.RGBA;if(n===Hp)return s.LUMINANCE;if(n===Gp)return s.LUMINANCE_ALPHA;if(n===Er)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===Gu)return s.RED;if(n===Vu)return s.RED_INTEGER;if(n===Vp)return s.RG;if(n===Wu)return s.RG_INTEGER;if(n===Xu)return s.RGBA_INTEGER;if(n===ol||n===ll||n===cl||n===hl)if(a===Xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mh||n===Sh||n===Eh||n===wh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Th||n===Ah||n===Rh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Th||n===Ah)return a===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ch||n===Ph||n===Ih||n===Dh||n===Lh||n===kh||n===Nh||n===Uh||n===Oh||n===Fh||n===zh||n===Bh||n===Hh||n===Gh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ch)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ph)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ih)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===Vh||n===Wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ul)return a===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wp||n===Xh||n===qh||n===jh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var lu=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ky={type:"move"},Ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let b=t.getJointPose(y,n),m=this._getHandJoint(c,y);b!==null&&(m.matrix.fromArray(b.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=b.radius),m.visible=b!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jy=`
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

}`,cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Sn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zt({vertexShader:Zy,fragmentShader:Jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hu=class extends Si{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null,y=new cu,b=t.getContextAttributes(),m=null,w=null,v=[],E=[],O=new ue,L=null,k=new dn;k.layers.enable(1),k.viewport=new Ot;let z=new dn;z.layers.enable(2),z.viewport=new Ot;let ie=[k,z],M=new lu;M.layers.enable(1),M.layers.enable(2);let A=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let U=v[B];return U===void 0&&(U=new Ra,v[B]=U),U.getTargetRaySpace()},this.getControllerGrip=function(B){let U=v[B];return U===void 0&&(U=new Ra,v[B]=U),U.getGripSpace()},this.getHand=function(B){let U=v[B];return U===void 0&&(U=new Ra,v[B]=U),U.getHandSpace()};function K(B){let U=E.indexOf(B.inputSource);if(U===-1)return;let ee=v[U];ee!==void 0&&(ee.update(B.inputSource,B.frame,c||a),ee.dispatchEvent({type:B.type,data:B.inputSource}))}function J(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",de);for(let B=0;B<v.length;B++){let U=E[B];U!==null&&(E[B]=null,v[B].disconnect(U))}A=null,Y=null,y.reset(),e.setRenderTarget(m),p=null,f=null,d=null,i=null,w=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",J),i.addEventListener("inputsourceschange",de),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){let U={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new En(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let U=null,ee=null,Q=null;b.depth&&(Q=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=b.stencil?hs:Er,ee=b.stencil?cs:Ns);let fe={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new En(f.textureWidth,f.textureHeight,{format:Bn,type:mi,depthTexture:new Nr(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ge.setContext(i),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function de(B){for(let U=0;U<B.removed.length;U++){let ee=B.removed[U],Q=E.indexOf(ee);Q>=0&&(E[Q]=null,v[Q].disconnect(ee))}for(let U=0;U<B.added.length;U++){let ee=B.added[U],Q=E.indexOf(ee);if(Q===-1){for(let be=0;be<v.length;be++)if(be>=E.length){E.push(ee),Q=be;break}else if(E[be]===null){E[be]=ee,Q=be;break}if(Q===-1)break}let fe=v[Q];fe&&fe.connect(ee)}}let Z=new D,ye=new D;function oe(B,U,ee){Z.setFromMatrixPosition(U.matrixWorld),ye.setFromMatrixPosition(ee.matrixWorld);let Q=Z.distanceTo(ye),fe=U.projectionMatrix.elements,be=ee.projectionMatrix.elements,Te=fe[14]/(fe[10]-1),De=fe[14]/(fe[10]+1),re=(fe[9]+1)/fe[5],I=(fe[9]-1)/fe[5],Ae=(fe[8]-1)/fe[0],we=(be[8]+1)/be[0],Me=Te*Ae,Ce=Te*we,We=Q/(-Ae+we),Se=We*-Ae;if(U.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Se),B.translateZ(We),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),fe[10]===-1)B.projectionMatrix.copy(U.projectionMatrix),B.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let P=Te+We,T=De+We,j=Me-Se,te=Ce+(Q-Se),me=re*De/T*P,pe=I*De/T*P;B.projectionMatrix.makePerspective(j,te,me,pe,P,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function G(B,U){U===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(U.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let U=B.near,ee=B.far;y.texture!==null&&(y.depthNear>0&&(U=y.depthNear),y.depthFar>0&&(ee=y.depthFar)),M.near=z.near=k.near=U,M.far=z.far=k.far=ee,(A!==M.near||Y!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,Y=M.far);let Q=B.parent,fe=M.cameras;G(M,Q);for(let be=0;be<fe.length;be++)G(fe[be],Q);fe.length===2?oe(M,k,z):M.projectionMatrix.copy(k.projectionMatrix),F(B,M,Q)};function F(B,U,ee){ee===null?B.matrix.copy(U.matrixWorld):(B.matrix.copy(ee.matrixWorld),B.matrix.invert(),B.matrix.multiply(U.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(U.projectionMatrix),B.projectionMatrixInverse.copy(U.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Dr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let $=null;function le(B,U){if(u=U.getViewerPose(c||a),_=U,u!==null){let ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Q=!1;ee.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let be=0;be<ee.length;be++){let Te=ee[be],De=null;if(p!==null)De=p.getViewport(Te);else{let I=d.getViewSubImage(f,Te);De=I.viewport,be===0&&(e.setRenderTargetTextures(w,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(w))}let re=ie[be];re===void 0&&(re=new dn,re.layers.enable(be),re.viewport=new Ot,ie[be]=re),re.matrix.fromArray(Te.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Te.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(De.x,De.y,De.width,De.height),be===0&&(M.matrix.copy(re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push(re)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")){let be=d.getDepthInformation(ee[0]);be&&be.isValid&&be.texture&&y.init(e,be,i.renderState)}}for(let ee=0;ee<v.length;ee++){let Q=E[ee],fe=v[ee];Q!==null&&fe!==void 0&&fe.update(Q,U,c||a)}$&&$(B,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),_=null}let ge=new Zp;ge.setAnimationLoop(le),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}},Is=new Ei,$y=new ot;function Qy(s,e){function t(b,m){b.matrixAutoUpdate===!0&&b.updateMatrix(),m.value.copy(b.matrix)}function n(b,m){m.color.getRGB(b.fogColor.value,Kp(s)),m.isFog?(b.fogNear.value=m.near,b.fogFar.value=m.far):m.isFogExp2&&(b.fogDensity.value=m.density)}function i(b,m,w,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(b,m):m.isMeshToonMaterial?(r(b,m),d(b,m)):m.isMeshPhongMaterial?(r(b,m),u(b,m)):m.isMeshStandardMaterial?(r(b,m),f(b,m),m.isMeshPhysicalMaterial&&p(b,m,E)):m.isMeshMatcapMaterial?(r(b,m),_(b,m)):m.isMeshDepthMaterial?r(b,m):m.isMeshDistanceMaterial?(r(b,m),y(b,m)):m.isMeshNormalMaterial?r(b,m):m.isLineBasicMaterial?(a(b,m),m.isLineDashedMaterial&&o(b,m)):m.isPointsMaterial?l(b,m,w,v):m.isSpriteMaterial?c(b,m):m.isShadowMaterial?(b.color.value.copy(m.color),b.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(b,m){b.opacity.value=m.opacity,m.color&&b.diffuse.value.copy(m.color),m.emissive&&b.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.bumpMap&&(b.bumpMap.value=m.bumpMap,t(m.bumpMap,b.bumpMapTransform),b.bumpScale.value=m.bumpScale,m.side===Dn&&(b.bumpScale.value*=-1)),m.normalMap&&(b.normalMap.value=m.normalMap,t(m.normalMap,b.normalMapTransform),b.normalScale.value.copy(m.normalScale),m.side===Dn&&b.normalScale.value.negate()),m.displacementMap&&(b.displacementMap.value=m.displacementMap,t(m.displacementMap,b.displacementMapTransform),b.displacementScale.value=m.displacementScale,b.displacementBias.value=m.displacementBias),m.emissiveMap&&(b.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,b.emissiveMapTransform)),m.specularMap&&(b.specularMap.value=m.specularMap,t(m.specularMap,b.specularMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest);let w=e.get(m),v=w.envMap,E=w.envMapRotation;v&&(b.envMap.value=v,Is.copy(E),Is.x*=-1,Is.y*=-1,Is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),b.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(Is)),b.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=m.reflectivity,b.ior.value=m.ior,b.refractionRatio.value=m.refractionRatio),m.lightMap&&(b.lightMap.value=m.lightMap,b.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,b.lightMapTransform)),m.aoMap&&(b.aoMap.value=m.aoMap,b.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,b.aoMapTransform))}function a(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform))}function o(b,m){b.dashSize.value=m.dashSize,b.totalSize.value=m.dashSize+m.gapSize,b.scale.value=m.scale}function l(b,m,w,v){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.size.value=m.size*w,b.scale.value=v*.5,m.map&&(b.map.value=m.map,t(m.map,b.uvTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function c(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.rotation.value=m.rotation,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function u(b,m){b.specular.value.copy(m.specular),b.shininess.value=Math.max(m.shininess,1e-4)}function d(b,m){m.gradientMap&&(b.gradientMap.value=m.gradientMap)}function f(b,m){b.metalness.value=m.metalness,m.metalnessMap&&(b.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,b.metalnessMapTransform)),b.roughness.value=m.roughness,m.roughnessMap&&(b.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,b.roughnessMapTransform)),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)}function p(b,m,w){b.ior.value=m.ior,m.sheen>0&&(b.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),b.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(b.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,b.sheenColorMapTransform)),m.sheenRoughnessMap&&(b.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,b.sheenRoughnessMapTransform))),m.clearcoat>0&&(b.clearcoat.value=m.clearcoat,b.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(b.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,b.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(b.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&b.clearcoatNormalScale.value.negate())),m.dispersion>0&&(b.dispersion.value=m.dispersion),m.iridescence>0&&(b.iridescence.value=m.iridescence,b.iridescenceIOR.value=m.iridescenceIOR,b.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(b.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,b.iridescenceMapTransform)),m.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),m.transmission>0&&(b.transmission.value=m.transmission,b.transmissionSamplerMap.value=w.texture,b.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(b.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,b.transmissionMapTransform)),b.thickness.value=m.thickness,m.thicknessMap&&(b.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=m.attenuationDistance,b.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(b.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(b.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=m.specularIntensity,b.specularColor.value.copy(m.specularColor),m.specularColorMap&&(b.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,b.specularColorMapTransform)),m.specularIntensityMap&&(b.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,b.specularIntensityMapTransform))}function _(b,m){m.matcap&&(b.matcap.value=m.matcap)}function y(b,m){let w=e.get(m).light;b.referencePosition.value.setFromMatrixPosition(w.matrixWorld),b.nearDistance.value=w.shadow.camera.near,b.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ev(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,v){let E=v.program;n.uniformBlockBinding(w,E)}function c(w,v){let E=i[w.id];E===void 0&&(_(w),E=u(w),i[w.id]=E,w.addEventListener("dispose",b));let O=v.program;n.updateUBOMapping(w,O);let L=e.render.frame;r[w.id]!==L&&(f(w),r[w.id]=L)}function u(w){let v=d();w.__bindingPointIndex=v;let E=s.createBuffer(),O=w.__size,L=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,O,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,E),E}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let v=i[w.id],E=w.uniforms,O=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let L=0,k=E.length;L<k;L++){let z=Array.isArray(E[L])?E[L]:[E[L]];for(let ie=0,M=z.length;ie<M;ie++){let A=z[ie];if(p(A,L,ie,O)===!0){let Y=A.__offset,K=Array.isArray(A.value)?A.value:[A.value],J=0;for(let de=0;de<K.length;de++){let Z=K[de],ye=y(Z);typeof Z=="number"||typeof Z=="boolean"?(A.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,Y+J,A.__data)):Z.isMatrix3?(A.__data[0]=Z.elements[0],A.__data[1]=Z.elements[1],A.__data[2]=Z.elements[2],A.__data[3]=0,A.__data[4]=Z.elements[3],A.__data[5]=Z.elements[4],A.__data[6]=Z.elements[5],A.__data[7]=0,A.__data[8]=Z.elements[6],A.__data[9]=Z.elements[7],A.__data[10]=Z.elements[8],A.__data[11]=0):(Z.toArray(A.__data,J),J+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,v,E,O){let L=w.value,k=v+"_"+E;if(O[k]===void 0)return typeof L=="number"||typeof L=="boolean"?O[k]=L:O[k]=L.clone(),!0;{let z=O[k];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return O[k]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function _(w){let v=w.uniforms,E=0,O=16;for(let k=0,z=v.length;k<z;k++){let ie=Array.isArray(v[k])?v[k]:[v[k]];for(let M=0,A=ie.length;M<A;M++){let Y=ie[M],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let J=0,de=K.length;J<de;J++){let Z=K[J],ye=y(Z),oe=E%O,G=oe%ye.boundary,F=oe+G;E+=G,F!==0&&O-F<ye.storage&&(E+=O-F),Y.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=ye.storage}}}let L=E%O;return L>0&&(E+=O-L),w.__size=E,w.__cache={},this}function y(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function b(w){let v=w.target;v.removeEventListener("dispose",b);let E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var El=class{constructor(e={}){let{canvas:t=s0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),_=new Int32Array(4),y=null,b=null,m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=os,this.toneMappingExposure=1;let v=this,E=!1,O=0,L=0,k=null,z=-1,ie=null,M=new Ot,A=new Ot,Y=null,K=new tt(0),J=0,de=t.width,Z=t.height,ye=1,oe=null,G=null,F=new Ot(0,0,de,Z),$=new Ot(0,0,de,Z),le=!1,ge=new Na,B=!1,U=!1,ee=new ot,Q=new ot,fe=new D,be=new Ot,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function re(){return k===null?ye:1}let I=n;function Ae(C,X){return t.getContext(C,X)}try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Iu}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Re,!1),I===null){let X="webgl2";if(I=Ae(X,C),I===null)throw Ae(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let we,Me,Ce,We,Se,P,T,j,te,me,pe,ze,Pe,Ge,bt,Ee,Ve,ht,lt,Ke,yt,at,pt,H;function Be(){we=new gx(I),we.init(),at=new Yy(I,we),Me=new hx(I,we,e,at),Ce=new Xy(I),Me.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),We=new xx(I),Se=new Dy,P=new jy(I,we,Ce,Se,Me,at,We),T=new dx(v),j=new mx(v),te=new T0(I),pt=new lx(I,te),me=new bx(I,te,We,pt),pe=new vx(I,me,te,We),lt=new yx(I,Me,P),Ee=new ux(Se),ze=new Iy(v,T,j,we,Me,pt,Ee),Pe=new Qy(v,Se),Ge=new ky,bt=new By(we),ht=new ox(v,T,j,Ce,pe,f,l),Ve=new Vy(v,pe,Me),H=new ev(I,We,Me,Ce),Ke=new cx(I,we,We),yt=new _x(I,we,We),We.programs=ze.programs,v.capabilities=Me,v.extensions=we,v.properties=Se,v.renderLists=Ge,v.shadowMap=Ve,v.state=Ce,v.info=We}Be();let he=new hu(v,I);this.xr=he,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(C){C!==void 0&&(ye=C,this.setSize(de,Z,!1))},this.getSize=function(C){return C.set(de,Z)},this.setSize=function(C,X,ne=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,Z=X,t.width=Math.floor(C*ye),t.height=Math.floor(X*ye),ne===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(de*ye,Z*ye).floor()},this.setDrawingBufferSize=function(C,X,ne){de=C,Z=X,ye=ne,t.width=Math.floor(C*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,X,ne,se){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,X,ne,se),Ce.viewport(M.copy(F).multiplyScalar(ye).round())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,X,ne,se){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,X,ne,se),Ce.scissor(A.copy($).multiplyScalar(ye).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){Ce.setScissorTest(le=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){G=C},this.getClearColor=function(C){return C.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(C=!0,X=!0,ne=!0){let se=0;if(C){let q=!1;if(k!==null){let Le=k.texture.format;q=Le===Xu||Le===Wu||Le===Vu}if(q){let Le=k.texture.type,je=Le===mi||Le===Ns||Le===Da||Le===cs||Le===Bu||Le===Hu,$e=ht.getClearColor(),Qe=ht.getClearAlpha(),ae=$e.r,nt=$e.g,it=$e.b;je?(p[0]=ae,p[1]=nt,p[2]=it,p[3]=Qe,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=ae,_[1]=nt,_[2]=it,_[3]=Qe,I.clearBufferiv(I.COLOR,0,_))}else se|=I.COLOR_BUFFER_BIT}X&&(se|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ne&&(se|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ge.dispose(),bt.dispose(),Se.dispose(),T.dispose(),j.dispose(),pe.dispose(),pt.dispose(),H.dispose(),ze.dispose(),he.dispose(),he.removeEventListener("sessionstart",$r),he.removeEventListener("sessionend",gi),Ai.stop()};function xe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=We.autoReset,X=Ve.enabled,ne=Ve.autoUpdate,se=Ve.needsUpdate,q=Ve.type;Be(),We.autoReset=C,Ve.enabled=X,Ve.autoUpdate=ne,Ve.needsUpdate=se,Ve.type=q}function Re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function mt(C){let X=C.target;X.removeEventListener("dispose",mt),nn(X)}function nn(C){yn(C),Se.remove(C)}function yn(C){let X=Se.get(C).programs;X!==void 0&&(X.forEach(function(ne){ze.releaseProgram(ne)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ne,se,q,Le){X===null&&(X=Te);let je=q.isMesh&&q.matrixWorld.determinant()<0,$e=mc(C,X,ne,se,q);Ce.setMaterial(se,je);let Qe=ne.index,ae=1;if(se.wireframe===!0){if(Qe=me.getWireframeAttribute(ne),Qe===void 0)return;ae=2}let nt=ne.drawRange,it=ne.attributes.position,vt=nt.start*ae,Lt=(nt.start+nt.count)*ae;Le!==null&&(vt=Math.max(vt,Le.start*ae),Lt=Math.min(Lt,(Le.start+Le.count)*ae)),Qe!==null?(vt=Math.max(vt,0),Lt=Math.min(Lt,Qe.count)):it!=null&&(vt=Math.max(vt,0),Lt=Math.min(Lt,it.count));let Yt=Lt-vt;if(Yt<0||Yt===1/0)return;pt.setup(q,se,$e,ne,Qe);let Cn,Ue=Ke;if(Qe!==null&&(Cn=te.get(Qe),Ue=yt,Ue.setIndex(Cn)),q.isMesh)se.wireframe===!0?(Ce.setLineWidth(se.wireframeLinewidth*re()),Ue.setMode(I.LINES)):Ue.setMode(I.TRIANGLES);else if(q.isLine){let Oe=se.linewidth;Oe===void 0&&(Oe=1),Ce.setLineWidth(Oe*re()),q.isLineSegments?Ue.setMode(I.LINES):q.isLineLoop?Ue.setMode(I.LINE_LOOP):Ue.setMode(I.LINE_STRIP)}else q.isPoints?Ue.setMode(I.POINTS):q.isSprite&&Ue.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ue.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Ue.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Oe=q._multiDrawStarts,zt=q._multiDrawCounts,ut=q._multiDrawCount,Xn=Qe?te.get(Qe).bytesPerElement:1,en=Se.get(se).currentProgram.getUniforms();for(let vn=0;vn<ut;vn++)en.setValue(I,"_gl_DrawID",vn),Ue.render(Oe[vn]/Xn,zt[vn])}else if(q.isInstancedMesh)Ue.renderInstances(vt,Yt,q.count);else if(ne.isInstancedBufferGeometry){let Oe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,zt=Math.min(ne.instanceCount,Oe);Ue.renderInstances(vt,Yt,zt)}else Ue.render(vt,Yt)};function Dt(C,X,ne){C.transparent===!0&&C.side===on&&C.forceSinglePass===!1?(C.side=Dn,C.needsUpdate=!0,Fn(C,X,ne),C.side=Mi,C.needsUpdate=!0,Fn(C,X,ne),C.side=on):Fn(C,X,ne)}this.compile=function(C,X,ne=null){ne===null&&(ne=C),b=bt.get(ne),b.init(X),w.push(b),ne.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),C!==ne&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights();let se=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Le=q.material;if(Le)if(Array.isArray(Le))for(let je=0;je<Le.length;je++){let $e=Le[je];Dt($e,ne,q),se.add($e)}else Dt(Le,ne,q),se.add(Le)}),w.pop(),b=null,se},this.compileAsync=function(C,X,ne=null){let se=this.compile(C,X,ne);return new Promise(q=>{function Le(){if(se.forEach(function(je){Se.get(je).currentProgram.isReady()&&se.delete(je)}),se.size===0){q(C);return}setTimeout(Le,10)}we.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let An=null;function Nt(C){An&&An(C)}function $r(){Ai.stop()}function gi(){Ai.start()}let Ai=new Zp;Ai.setAnimationLoop(Nt),typeof self!="undefined"&&Ai.setContext(self),this.setAnimationLoop=function(C){An=C,he.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},he.addEventListener("sessionstart",$r),he.addEventListener("sessionend",gi),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(X),X=he.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,X,k),b=bt.get(C,w.length),b.init(X),w.push(b),Q.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ge.setFromProjectionMatrix(Q),U=this.localClippingEnabled,B=Ee.init(this.clippingPlanes,U),y=Ge.get(C,m.length),y.init(),m.push(y),he.enabled===!0&&he.isPresenting===!0){let Le=v.xr.getDepthSensingMesh();Le!==null&&Xi(Le,X,-1/0,v.sortObjects)}Xi(C,X,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(oe,G),De=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,De&&ht.addToRenderList(y,C),this.info.render.frame++,B===!0&&Ee.beginShadows();let ne=b.state.shadowsArray;Ve.render(ne,C,X),B===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=y.opaque,q=y.transmissive;if(b.setupLights(),X.isArrayCamera){let Le=X.cameras;if(q.length>0)for(let je=0,$e=Le.length;je<$e;je++){let Qe=Le[je];ao(se,q,C,Qe)}De&&ht.render(C);for(let je=0,$e=Le.length;je<$e;je++){let Qe=Le[je];qi(y,C,Qe,Qe.viewport)}}else q.length>0&&ao(se,q,C,X),De&&ht.render(C),qi(y,C,X);k!==null&&(P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(v,C,X),pt.resetDefaultState(),z=-1,ie=null,w.pop(),w.length>0?(b=w[w.length-1],B===!0&&Ee.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Xi(C,X,ne,se){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ge.intersectsSprite(C)){se&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);let je=pe.update(C),$e=C.material;$e.visible&&y.push(C,je,$e,ne,be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ge.intersectsObject(C))){let je=pe.update(C),$e=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),be.copy(je.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(Q)),Array.isArray($e)){let Qe=je.groups;for(let ae=0,nt=Qe.length;ae<nt;ae++){let it=Qe[ae],vt=$e[it.materialIndex];vt&&vt.visible&&y.push(C,je,vt,ne,be.z,it)}}else $e.visible&&y.push(C,je,$e,ne,be.z,null)}}let Le=C.children;for(let je=0,$e=Le.length;je<$e;je++)Xi(Le[je],X,ne,se)}function qi(C,X,ne,se){let q=C.opaque,Le=C.transmissive,je=C.transparent;b.setupLightsView(ne),B===!0&&Ee.setGlobalState(v.clippingPlanes,ne),se&&Ce.viewport(M.copy(se)),q.length>0&&ji(q,X,ne),Le.length>0&&ji(Le,X,ne),je.length>0&&ji(je,X,ne),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ao(C,X,ne,se){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[se.id]===void 0&&(b.state.transmissionRenderTarget[se.id]=new En(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?Gn:mi,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));let Le=b.state.transmissionRenderTarget[se.id],je=se.viewport||M;Le.setSize(je.z,je.w);let $e=v.getRenderTarget();v.setRenderTarget(Le),v.getClearColor(K),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),De&&ht.render(ne);let Qe=v.toneMapping;v.toneMapping=os;let ae=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),b.setupLightsView(se),B===!0&&Ee.setGlobalState(v.clippingPlanes,se),ji(C,ne,se),P.updateMultisampleRenderTarget(Le),P.updateRenderTargetMipmap(Le),we.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let it=0,vt=X.length;it<vt;it++){let Lt=X[it],Yt=Lt.object,Cn=Lt.geometry,Ue=Lt.material,Oe=Lt.group;if(Ue.side===on&&Yt.layers.test(se.layers)){let zt=Ue.side;Ue.side=Dn,Ue.needsUpdate=!0,Qr(Yt,ne,se,Cn,Ue,Oe),Ue.side=zt,Ue.needsUpdate=!0,nt=!0}}nt===!0&&(P.updateMultisampleRenderTarget(Le),P.updateRenderTargetMipmap(Le))}v.setRenderTarget($e),v.setClearColor(K,J),ae!==void 0&&(se.viewport=ae),v.toneMapping=Qe}function ji(C,X,ne){let se=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Le=C.length;q<Le;q++){let je=C[q],$e=je.object,Qe=je.geometry,ae=se===null?je.material:se,nt=je.group;$e.layers.test(ne.layers)&&Qr($e,X,ne,Qe,ae,nt)}}function Qr(C,X,ne,se,q,Le){C.onBeforeRender(v,X,ne,se,q,Le),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(v,X,ne,se,C,Le),q.transparent===!0&&q.side===on&&q.forceSinglePass===!1?(q.side=Dn,q.needsUpdate=!0,v.renderBufferDirect(ne,X,se,q,C,Le),q.side=Mi,q.needsUpdate=!0,v.renderBufferDirect(ne,X,se,q,C,Le),q.side=on):v.renderBufferDirect(ne,X,se,q,C,Le),C.onAfterRender(v,X,ne,se,q,Le)}function Fn(C,X,ne){X.isScene!==!0&&(X=Te);let se=Se.get(C),q=b.state.lights,Le=b.state.shadowsArray,je=q.state.version,$e=ze.getParameters(C,q.state,Le,X,ne),Qe=ze.getProgramCacheKey($e),ae=se.programs;se.environment=C.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(C.isMeshStandardMaterial?j:T).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,ae===void 0&&(C.addEventListener("dispose",mt),ae=new Map,se.programs=ae);let nt=ae.get(Qe);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===je)return js(C,$e),nt}else $e.uniforms=ze.getUniforms(C),C.onBeforeCompile($e,v),nt=ze.acquireProgram($e,Qe),ae.set(Qe,nt),se.uniforms=$e.uniforms;let it=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=Ee.uniform),js(C,$e),se.needsLights=Ri(C),se.lightsStateVersion=je,se.needsLights&&(it.ambientLightColor.value=q.state.ambient,it.lightProbe.value=q.state.probe,it.directionalLights.value=q.state.directional,it.directionalLightShadows.value=q.state.directionalShadow,it.spotLights.value=q.state.spot,it.spotLightShadows.value=q.state.spotShadow,it.rectAreaLights.value=q.state.rectArea,it.ltc_1.value=q.state.rectAreaLTC1,it.ltc_2.value=q.state.rectAreaLTC2,it.pointLights.value=q.state.point,it.pointLightShadows.value=q.state.pointShadow,it.hemisphereLights.value=q.state.hemi,it.directionalShadowMap.value=q.state.directionalShadowMap,it.directionalShadowMatrix.value=q.state.directionalShadowMatrix,it.spotShadowMap.value=q.state.spotShadowMap,it.spotLightMatrix.value=q.state.spotLightMatrix,it.spotLightMap.value=q.state.spotLightMap,it.pointShadowMap.value=q.state.pointShadowMap,it.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function oo(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=Tr.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function js(C,X){let ne=Se.get(C);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function mc(C,X,ne,se,q){X.isScene!==!0&&(X=Te),P.resetTextureUnits();let Le=X.fog,je=se.isMeshStandardMaterial?X.environment:null,$e=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Tn,Qe=(se.isMeshStandardMaterial?j:T).get(se.envMap||je),ae=se.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),it=!!ne.morphAttributes.position,vt=!!ne.morphAttributes.normal,Lt=!!ne.morphAttributes.color,Yt=os;se.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Yt=v.toneMapping);let Cn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ue=Cn!==void 0?Cn.length:0,Oe=Se.get(se),zt=b.state.lights;if(B===!0&&(U===!0||C!==ie)){let sn=C===ie&&se.id===z;Ee.setState(se,C,sn)}let ut=!1;se.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==zt.state.version||Oe.outputColorSpace!==$e||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==Qe||se.fog===!0&&Oe.fog!==Le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ee.numPlanes||Oe.numIntersection!==Ee.numIntersection)||Oe.vertexAlphas!==ae||Oe.vertexTangents!==nt||Oe.morphTargets!==it||Oe.morphNormals!==vt||Oe.morphColors!==Lt||Oe.toneMapping!==Yt||Oe.morphTargetsCount!==Ue)&&(ut=!0):(ut=!0,Oe.__version=se.version);let Xn=Oe.currentProgram;ut===!0&&(Xn=Fn(se,X,q));let en=!1,vn=!1,qn=!1,Vt=Xn.getUniforms(),ai=Oe.uniforms;if(Ce.useProgram(Xn.program)&&(en=!0,vn=!0,qn=!0),se.id!==z&&(z=se.id,vn=!0),en||ie!==C){Me.reverseDepthBuffer?(ee.copy(C.projectionMatrix),a0(ee),o0(ee),Vt.setValue(I,"projectionMatrix",ee)):Vt.setValue(I,"projectionMatrix",C.projectionMatrix),Vt.setValue(I,"viewMatrix",C.matrixWorldInverse);let sn=Vt.map.cameraPosition;sn!==void 0&&sn.setValue(I,fe.setFromMatrixPosition(C.matrixWorld)),Me.logarithmicDepthBuffer&&Vt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Vt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),ie!==C&&(ie=C,vn=!0,qn=!0)}if(q.isSkinnedMesh){Vt.setOptional(I,q,"bindMatrix"),Vt.setOptional(I,q,"bindMatrixInverse");let sn=q.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Vt.setValue(I,"boneTexture",sn.boneTexture,P))}q.isBatchedMesh&&(Vt.setOptional(I,q,"batchingTexture"),Vt.setValue(I,"batchingTexture",q._matricesTexture,P),Vt.setOptional(I,q,"batchingIdTexture"),Vt.setValue(I,"batchingIdTexture",q._indirectTexture,P),Vt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Vt.setValue(I,"batchingColorTexture",q._colorsTexture,P));let ys=ne.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&lt.update(q,ne,Xn),(vn||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,Vt.setValue(I,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(ai.envMap.value=Qe,ai.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(ai.envMapIntensity.value=X.environmentIntensity),vn&&(Vt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&gc(ai,qn),Le&&se.fog===!0&&Pe.refreshFogUniforms(ai,Le),Pe.refreshMaterialUniforms(ai,se,ye,Z,b.state.transmissionRenderTarget[C.id]),Tr.upload(I,oo(Oe),ai,P)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Tr.upload(I,oo(Oe),ai,P),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Vt.setValue(I,"center",q.center),Vt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Vt.setValue(I,"normalMatrix",q.normalMatrix),Vt.setValue(I,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let sn=se.uniformsGroups;for(let vs=0,lo=sn.length;vs<lo;vs++){let Yi=sn[vs];H.update(Yi,Xn),H.bind(Yi,Xn)}}return Xn}function gc(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Ri(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,X,ne){Se.get(C.texture).__webglTexture=X,Se.get(C.depthTexture).__webglTexture=ne;let se=Se.get(C);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ne===void 0,se.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){let ne=Se.get(C);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ne=0){k=C,O=X,L=ne;let se=!0,q=null,Le=!1,je=!1;if(C){let Qe=Se.get(C);if(Qe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(I.FRAMEBUFFER,null),se=!1;else if(Qe.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Qe.__hasExternalTextures)P.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let it=C.depthTexture;if(Qe.__boundDepthTexture!==it){if(it!==null&&Se.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}let ae=C.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(je=!0);let nt=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?q=nt[X][ne]:q=nt[X],Le=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?q=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[ne]:q=nt,M.copy(C.viewport),A.copy(C.scissor),Y=C.scissorTest}else M.copy(F).multiplyScalar(ye).floor(),A.copy($).multiplyScalar(ye).floor(),Y=le;if(Ce.bindFramebuffer(I.FRAMEBUFFER,q)&&se&&Ce.drawBuffers(C,q),Ce.viewport(M),Ce.scissor(A),Ce.setScissorTest(Y),Le){let Qe=Se.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Qe.__webglTexture,ne)}else if(je){let Qe=Se.get(C.texture),ae=X||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.__webglTexture,ne||0,ae)}z=-1},this.readRenderTargetPixels=function(C,X,ne,se,q,Le,je){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e){Ce.bindFramebuffer(I.FRAMEBUFFER,$e);try{let Qe=C.texture,ae=Qe.format,nt=Qe.type;if(!Me.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-se&&ne>=0&&ne<=C.height-q&&I.readPixels(X,ne,se,q,at.convert(ae),at.convert(nt),Le)}finally{let Qe=k!==null?Se.get(k).__webglFramebuffer:null;Ce.bindFramebuffer(I.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(C,X,ne,se,q,Le,je){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e){let Qe=C.texture,ae=Qe.format,nt=Qe.type;if(!Me.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-se&&ne>=0&&ne<=C.height-q){Ce.bindFramebuffer(I.FRAMEBUFFER,$e);let it=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.bufferData(I.PIXEL_PACK_BUFFER,Le.byteLength,I.STREAM_READ),I.readPixels(X,ne,se,q,at.convert(ae),at.convert(nt),0);let vt=k!==null?Se.get(k).__webglFramebuffer:null;Ce.bindFramebuffer(I.FRAMEBUFFER,vt);let Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await r0(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Le),I.deleteBuffer(it),I.deleteSync(Lt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,ne=0){C.isTexture!==!0&&(dl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);let se=Math.pow(2,-ne),q=Math.floor(C.image.width*se),Le=Math.floor(C.image.height*se),je=X!==null?X.x:0,$e=X!==null?X.y:0;P.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,ne,0,0,je,$e,q,Le),Ce.unbindTexture()},this.copyTextureToTexture=function(C,X,ne=null,se=null,q=0){C.isTexture!==!0&&(dl("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,C=arguments[1],X=arguments[2],q=arguments[3]||0,ne=null);let Le,je,$e,Qe,ae,nt;ne!==null?(Le=ne.max.x-ne.min.x,je=ne.max.y-ne.min.y,$e=ne.min.x,Qe=ne.min.y):(Le=C.image.width,je=C.image.height,$e=0,Qe=0),se!==null?(ae=se.x,nt=se.y):(ae=0,nt=0);let it=at.convert(X.format),vt=at.convert(X.type);P.setTexture2D(X,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);let Lt=I.getParameter(I.UNPACK_ROW_LENGTH),Yt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ue=I.getParameter(I.UNPACK_SKIP_ROWS),Oe=I.getParameter(I.UNPACK_SKIP_IMAGES),zt=C.isCompressedTexture?C.mipmaps[q]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,zt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,q,ae,nt,Le,je,it,vt,zt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,q,ae,nt,zt.width,zt.height,it,zt.data):I.texSubImage2D(I.TEXTURE_2D,q,ae,nt,Le,je,it,vt,zt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oe),q===0&&X.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ne=null,se=null,q=0){C.isTexture!==!0&&(dl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,se=arguments[1]||null,C=arguments[2],X=arguments[3],q=arguments[4]||0);let Le,je,$e,Qe,ae,nt,it,vt,Lt,Yt=C.isCompressedTexture?C.mipmaps[q]:C.image;ne!==null?(Le=ne.max.x-ne.min.x,je=ne.max.y-ne.min.y,$e=ne.max.z-ne.min.z,Qe=ne.min.x,ae=ne.min.y,nt=ne.min.z):(Le=Yt.width,je=Yt.height,$e=Yt.depth,Qe=0,ae=0,nt=0),se!==null?(it=se.x,vt=se.y,Lt=se.z):(it=0,vt=0,Lt=0);let Cn=at.convert(X.format),Ue=at.convert(X.type),Oe;if(X.isData3DTexture)P.setTexture3D(X,0),Oe=I.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)P.setTexture2DArray(X,0),Oe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);let zt=I.getParameter(I.UNPACK_ROW_LENGTH),ut=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xn=I.getParameter(I.UNPACK_SKIP_PIXELS),en=I.getParameter(I.UNPACK_SKIP_ROWS),vn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,nt),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Oe,q,it,vt,Lt,Le,je,$e,Cn,Ue,Yt.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Oe,q,it,vt,Lt,Le,je,$e,Cn,Yt.data):I.texSubImage3D(Oe,q,it,vt,Lt,Le,je,$e,Cn,Ue,Yt),I.pixelStorei(I.UNPACK_ROW_LENGTH,zt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xn),I.pixelStorei(I.UNPACK_SKIP_ROWS,en),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vn),q===0&&X.generateMipmaps&&I.generateMipmap(Oe),Ce.unbindTexture()},this.initRenderTarget=function(C){Se.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){O=0,L=0,k=null,Ce.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ku?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===$l?"display-p3":"srgb"}};var wl=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ur=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yh,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kn=new D,Us=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=class extends Un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fr,ba=new D,pr=new D,mr=new D,gr=new ue,_a=new ue,tm=new ot,Yo=new D,xa=new D,Ko=new D,ap=new ue,nh=new ue,op=new ue,Ua=class extends $t{constructor(e=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new Kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Or(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new Us(n,3,0,!1)),fr.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=fr,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),tm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Zo(Yo.set(-.5,-.5,0),mr,a,pr,i,r),Zo(xa.set(.5,-.5,0),mr,a,pr,i,r),Zo(Ko.set(.5,.5,0),mr,a,pr,i,r),ap.set(0,0),nh.set(1,0),op.set(1,1);let o=e.ray.intersectTriangle(Yo,xa,Ko,!1,ba);if(o===null&&(Zo(xa.set(-.5,.5,0),mr,a,pr,i,r),nh.set(0,1),o=e.ray.intersectTriangle(Yo,Ko,xa,!1,ba),o===null))return;let l=e.ray.origin.distanceTo(ba);l<e.near||l>e.far||t.push({distance:l,point:ba.clone(),uv:rs.getInterpolation(ba,Yo,xa,Ko,ap,nh,op,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Zo(s,e,t,n,i,r){gr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(_a.x=r*gr.x-i*gr.y,_a.y=i*gr.x+r*gr.y):_a.copy(gr),s.copy(e),s.x+=_a.x,s.y+=_a.y,s.applyMatrix4(tm)}var lp=new D,cp=new Ot,hp=new Ot,tv=new D,up=new ot,Jo=new D,ih=new Kn,dp=new ot,sh=new Fi,Tl=class extends ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gf,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ih.copy(this.boundingSphere),ih.applyMatrix4(i),e.ray.intersectsSphere(ih)!==!1&&(dp.copy(i).invert(),sh.copy(e.ray).applyMatrix4(dp),!(this.boundingBox!==null&&sh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;cp.fromBufferAttribute(i.attributes.skinIndex,e),hp.fromBufferAttribute(i.attributes.skinWeight,e),lp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=hp.getComponent(r);if(a!==0){let o=cp.getComponent(r);up.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tv.copy(lp).applyMatrix4(up),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Oa=class extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}},ds=class extends Sn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=fn,u=fn,d,f){super(null,a,o,l,c,u,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fp=new ot,nv=new ot,Al=class s{constructor(e=[],t=[]){this.uuid=ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:nv;fp.multiplyMatrices(o,t[r]),fp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ds(t,e,e,Bn,pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Oa),this.bones.push(a),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Os=class extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new ot,pp=new ot,$o=[],mp=new gn,iv=new ot,ya=new ce,va=new Kn,Rl=class extends ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,iv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),mp.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(mp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),va.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(n),e.ray.intersectsSphere(va)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,br),pp.multiplyMatrices(n,br),ya.matrixWorld=pp,ya.raycast(e,$o);for(let a=0,o=$o.length;a<o;a++){let l=$o[a];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ds(new Float32Array(i*this.count),i,this.count,Gu,pi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Fa=class extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cl=new D,Pl=new D,gp=new ot,Ma=new Fi,Qo=new Kn,rh=new D,bp=new D,zr=class extends $t{constructor(e=new Kt,t=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Cl.fromBufferAttribute(t,i-1),Pl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Cl.distanceTo(Pl);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(i),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;gp.copy(i).invert(),Ma.copy(e.ray).applyMatrix4(gp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=p,b=_-1;y<b;y+=c){let m=u.getX(y),w=u.getX(y+1),v=el(this,e,Ma,l,m,w);v&&t.push(v)}if(this.isLineLoop){let y=u.getX(_-1),b=u.getX(p),m=el(this,e,Ma,l,y,b);m&&t.push(m)}}else{let p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=p,b=_-1;y<b;y+=c){let m=el(this,e,Ma,l,y,y+1);m&&t.push(m)}if(this.isLineLoop){let y=el(this,e,Ma,l,_-1,p);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function el(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(Cl.fromBufferAttribute(a,i),Pl.fromBufferAttribute(a,r),t.distanceSqToSegment(Cl,Pl,rh,bp)>n)return;rh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(rh);if(!(l<e.near||l>e.far))return{distance:l,point:bp.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var _p=new D,xp=new D,Il=class extends zr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)_p.fromBufferAttribute(t,i),xp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_p.distanceTo(xp);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Dl=class extends zr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Fs=class extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yp=new ot,uu=new Fi,tl=new Kn,nl=new D,Br=class extends $t{constructor(e=new Kt,t=new Fs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(i),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;yp.copy(i).invert(),uu.copy(e.ray).applyMatrix4(yp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,y=p;_<y;_++){let b=c.getX(_);nl.fromBufferAttribute(d,b),vp(nl,b,l,i,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,y=p;_<y;_++)nl.fromBufferAttribute(d,_),vp(nl,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vp(s,e,t,n,i,r,a){let o=uu.distanceSqToPoint(s);if(o<t){let l=new D;uu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ll=class extends Sn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let u=n[i],f=n[i+1]-u,p=(a-u)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ue:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],r=[],a=[],o=new D,l=new ot;for(let p=0;p<=e;p++){let _=p/e;i[p]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(un(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(un(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},za=class extends ti{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},du=class extends za{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function $u(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,p*=u,i(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var il=new D,ah=new $u,oh=new $u,lh=new $u,Ba=class extends ti{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(il.subVectors(i[0],i[1]).add(i[0]),c=il);let d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(il.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=il),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),b=Math.pow(f.distanceToSquared(u),p);y<1e-4&&(y=1),_<1e-4&&(_=y),b<1e-4&&(b=y),ah.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,_,y,b),oh.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,_,y,b),lh.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,_,y,b)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),oh.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),lh.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(ah.calc(l),oh.calc(l),lh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mp(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function sv(s,e){let t=1-s;return t*t*e}function rv(s,e){return 2*(1-s)*s*e}function av(s,e){return s*s*e}function Ca(s,e,t,n){return sv(s,e)+rv(s,t)+av(s,n)}function ov(s,e){let t=1-s;return t*t*t*e}function lv(s,e){let t=1-s;return 3*t*t*s*e}function cv(s,e){return 3*(1-s)*s*s*e}function hv(s,e){return s*s*s*e}function Pa(s,e,t,n,i){return ov(s,e)+lv(s,t)+cv(s,n)+hv(s,i)}var kl=class extends ti{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pa(e,i.x,r.x,a.x,o.x),Pa(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fu=class extends ti{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pa(e,i.x,r.x,a.x,o.x),Pa(e,i.y,r.y,a.y,o.y),Pa(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends ti{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pu=class extends ti{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends ti{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ca(e,i.x,r.x,a.x),Ca(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fs=class extends ti{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ca(e,i.x,r.x,a.x),Ca(e,i.y,r.y,a.y),Ca(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Mp(o,l.x,c.x,u.x,d.x),Mp(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ue().fromArray(i))}return this}},Fl=Object.freeze({__proto__:null,ArcCurve:du,CatmullRomCurve3:Ba,CubicBezierCurve:kl,CubicBezierCurve3:fu,EllipseCurve:za,LineCurve:Nl,LineCurve3:pu,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:fs,SplineCurve:Ol}),mu=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Fl[i.type]().fromJSON(i))}return this}},zl=class extends mu{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Nl(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ul(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new kl(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ol(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new za(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wi=class s extends Kt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=un(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new D,f=new ue,p=new D,_=new D,y=new D,b=0,m=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:b=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,p.x=m*1,p.y=-b,p.z=m*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:b=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,p.x=m*1,p.y=-b,p.z=m*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let w=0;w<=t;w++){let v=n+w*u*i,E=Math.sin(v),O=Math.cos(v);for(let L=0;L<=e.length-1;L++){d.x=e[L].x*E,d.y=e[L].y,d.z=e[L].x*O,a.push(d.x,d.y,d.z),f.x=w/t,f.y=L/(e.length-1),o.push(f.x,f.y);let k=l[3*L+0]*E,z=l[3*L+1],ie=l[3*L+0]*O;c.push(k,z,ie)}}for(let w=0;w<t;w++)for(let v=0;v<e.length-1;v++){let E=v+w*e.length,O=E,L=E+e.length,k=E+e.length+1,z=E+1;r.push(O,L,z),r.push(k,z,L)}this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("uv",new Ct(o,2)),this.setAttribute("normal",new Ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ft=class s extends Kt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],f=[],p=[],_=0,y=[],b=n/2,m=0;w(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(p,2));function w(){let E=new D,O=new D,L=0,k=(t-e)/n;for(let z=0;z<=r;z++){let ie=[],M=z/r,A=M*(t-e)+e;for(let Y=0;Y<=i;Y++){let K=Y/i,J=K*l+o,de=Math.sin(J),Z=Math.cos(J);O.x=A*de,O.y=-M*n+b,O.z=A*Z,d.push(O.x,O.y,O.z),E.set(de,k,Z).normalize(),f.push(E.x,E.y,E.z),p.push(K,1-M),ie.push(_++)}y.push(ie)}for(let z=0;z<i;z++)for(let ie=0;ie<r;ie++){let M=y[ie][z],A=y[ie+1][z],Y=y[ie+1][z+1],K=y[ie][z+1];e>0&&(u.push(M,A,K),L+=3),t>0&&(u.push(A,Y,K),L+=3)}c.addGroup(m,L,0),m+=L}function v(E){let O=_,L=new ue,k=new D,z=0,ie=E===!0?e:t,M=E===!0?1:-1;for(let Y=1;Y<=i;Y++)d.push(0,b*M,0),f.push(0,M,0),p.push(.5,.5),_++;let A=_;for(let Y=0;Y<=i;Y++){let J=Y/i*l+o,de=Math.cos(J),Z=Math.sin(J);k.x=ie*Z,k.y=b*M,k.z=ie*de,d.push(k.x,k.y,k.z),f.push(0,M,0),L.x=de*.5+.5,L.y=Z*.5*M+.5,p.push(L.x,L.y),_++}for(let Y=0;Y<i;Y++){let K=O+Y,J=A+Y;E===!0?u.push(J,J+1,K):u.push(J+1,J,K),z+=3}c.addGroup(m,z,E===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ha=class s extends Ft{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var zi=class extends zl{constructor(e){super(e),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new zl().fromJSON(i))}return this}},uv={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=nm(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,f,p;if(n&&(r=gv(s,e,r,t)),s.length>80*t){o=c=s[0],l=u=s[1];for(let _=t;_<i;_+=t)d=s[_],f=s[_+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Ga(r,a,t,o,l,p,0),a}};function nm(s,e,t,n,i){let r,a;if(i===Av(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Sp(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Sp(r,s[r],s[r+1],a);return a&&tc(a,a.next)&&(Wa(a),a=a.next),a}function zs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(tc(t,t.next)||tn(t.prev,t,t.next)===0)){if(Wa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ga(s,e,t,n,i,r,a){if(!s)return;!a&&r&&vv(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?fv(s,n,i,r):dv(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Wa(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=pv(zs(s),e,t),Ga(s,e,t,n,i,r,2)):a===2&&mv(s,e,t,n,i,r):Ga(zs(s),e,t,n,i,r,1);break}}}function dv(s){let e=s.prev,t=s,n=s.next;if(tn(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<r?i<a?i:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=d&&_.y<=p&&Mr(i,o,r,l,a,c,_.x,_.y)&&tn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function fv(s,e,t,n){let i=s.prev,r=s,a=s.next;if(tn(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,u=i.y,d=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,_=u<d?u<f?u:f:d<f?d:f,y=o>l?o>c?o:c:l>c?l:c,b=u>d?u>f?u:f:d>f?d:f,m=gu(p,_,e,t,n),w=gu(y,b,e,t,n),v=s.prevZ,E=s.nextZ;for(;v&&v.z>=m&&E&&E.z<=w;){if(v.x>=p&&v.x<=y&&v.y>=_&&v.y<=b&&v!==i&&v!==a&&Mr(o,u,l,d,c,f,v.x,v.y)&&tn(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=p&&E.x<=y&&E.y>=_&&E.y<=b&&E!==i&&E!==a&&Mr(o,u,l,d,c,f,E.x,E.y)&&tn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=y&&v.y>=_&&v.y<=b&&v!==i&&v!==a&&Mr(o,u,l,d,c,f,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=w;){if(E.x>=p&&E.x<=y&&E.y>=_&&E.y<=b&&E!==i&&E!==a&&Mr(o,u,l,d,c,f,E.x,E.y)&&tn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function pv(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!tc(i,r)&&im(i,n,n.next,r)&&Va(i,r)&&Va(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Wa(n),Wa(n.next),n=s=r),n=n.next}while(n!==s);return zs(n)}function mv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ev(a,o)){let l=sm(a,o);a=zs(a,a.next),l=zs(l,l.next),Ga(a,e,t,n,i,r,0),Ga(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function gv(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=nm(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Sv(c));for(i.sort(bv),r=0;r<i.length;r++)t=_v(i[r],t);return t}function bv(s,e){return s.x-e.x}function _v(s,e){let t=xv(s,e);if(!t)return e;let n=sm(t,s);return zs(n,n.next),zs(t,t.next)}function xv(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,u=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Mr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Va(t,s)&&(d<u||d===u&&(t.x>i.x||t.x===i.x&&yv(i,t)))&&(i=t,u=d)),t=t.next;while(t!==o);return i}function yv(s,e){return tn(s.prev,s,e.prev)<0&&tn(e.next,s,s.next)<0}function vv(s,e,t,n){let i=s;do i.z===0&&(i.z=gu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Mv(i)}function Mv(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function gu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Sv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Mr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Ev(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!wv(s,e)&&(Va(s,e)&&Va(e,s)&&Tv(s,e)&&(tn(s.prev,s,e.prev)||tn(s,e.prev,e))||tc(s,e)&&tn(s.prev,s,s.next)>0&&tn(e.prev,e,e.next)>0)}function tn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function tc(s,e){return s.x===e.x&&s.y===e.y}function im(s,e,t,n){let i=rl(tn(s,e,t)),r=rl(tn(s,e,n)),a=rl(tn(t,n,s)),o=rl(tn(t,n,e));return!!(i!==r&&a!==o||i===0&&sl(s,t,e)||r===0&&sl(s,n,e)||a===0&&sl(t,s,n)||o===0&&sl(t,e,n))}function sl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function rl(s){return s>0?1:s<0?-1:0}function wv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&im(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Va(s,e){return tn(s.prev,s,s.next)<0?tn(s,e,s.next)>=0&&tn(s,s.prev,e)>=0:tn(s,e,s.prev)<0||tn(s,s.next,e)<0}function Tv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function sm(s,e){let t=new bu(s.i,s.x,s.y),n=new bu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sp(s,e,t,n){let i=new bu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Wa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Av(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var ls=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Ep(e),wp(n,e);let a=e.length;t.forEach(Ep);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,wp(n,t[l]);let o=uv.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ep(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function wp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Hr=class s extends Kt{constructor(e=new zi([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ct(i,3)),this.setAttribute("uv",new Ct(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Rv,v,E=!1,O,L,k,z;m&&(v=m.getSpacedPoints(u),E=!0,f=!1,O=m.computeFrenetFrames(u,!1),L=new D,k=new D,z=new D),f||(b=0,p=0,_=0,y=0);let ie=o.extractPoints(c),M=ie.shape,A=ie.holes;if(!ls.isClockWise(M)){M=M.reverse();for(let re=0,I=A.length;re<I;re++){let Ae=A[re];ls.isClockWise(Ae)&&(A[re]=Ae.reverse())}}let K=ls.triangulateShape(M,A),J=M;for(let re=0,I=A.length;re<I;re++){let Ae=A[re];M=M.concat(Ae)}function de(re,I,Ae){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(I,Ae)}let Z=M.length,ye=K.length;function oe(re,I,Ae){let we,Me,Ce,We=re.x-I.x,Se=re.y-I.y,P=Ae.x-re.x,T=Ae.y-re.y,j=We*We+Se*Se,te=We*T-Se*P;if(Math.abs(te)>Number.EPSILON){let me=Math.sqrt(j),pe=Math.sqrt(P*P+T*T),ze=I.x-Se/me,Pe=I.y+We/me,Ge=Ae.x-T/pe,bt=Ae.y+P/pe,Ee=((Ge-ze)*T-(bt-Pe)*P)/(We*T-Se*P);we=ze+We*Ee-re.x,Me=Pe+Se*Ee-re.y;let Ve=we*we+Me*Me;if(Ve<=2)return new ue(we,Me);Ce=Math.sqrt(Ve/2)}else{let me=!1;We>Number.EPSILON?P>Number.EPSILON&&(me=!0):We<-Number.EPSILON?P<-Number.EPSILON&&(me=!0):Math.sign(Se)===Math.sign(T)&&(me=!0),me?(we=-Se,Me=We,Ce=Math.sqrt(j)):(we=We,Me=Se,Ce=Math.sqrt(j/2))}return new ue(we/Ce,Me/Ce)}let G=[];for(let re=0,I=J.length,Ae=I-1,we=re+1;re<I;re++,Ae++,we++)Ae===I&&(Ae=0),we===I&&(we=0),G[re]=oe(J[re],J[Ae],J[we]);let F=[],$,le=G.concat();for(let re=0,I=A.length;re<I;re++){let Ae=A[re];$=[];for(let we=0,Me=Ae.length,Ce=Me-1,We=we+1;we<Me;we++,Ce++,We++)Ce===Me&&(Ce=0),We===Me&&(We=0),$[we]=oe(Ae[we],Ae[Ce],Ae[We]);F.push($),le=le.concat($)}for(let re=0;re<b;re++){let I=re/b,Ae=p*Math.cos(I*Math.PI/2),we=_*Math.sin(I*Math.PI/2)+y;for(let Me=0,Ce=J.length;Me<Ce;Me++){let We=de(J[Me],G[Me],we);Q(We.x,We.y,-Ae)}for(let Me=0,Ce=A.length;Me<Ce;Me++){let We=A[Me];$=F[Me];for(let Se=0,P=We.length;Se<P;Se++){let T=de(We[Se],$[Se],we);Q(T.x,T.y,-Ae)}}}let ge=_+y;for(let re=0;re<Z;re++){let I=f?de(M[re],le[re],ge):M[re];E?(k.copy(O.normals[0]).multiplyScalar(I.x),L.copy(O.binormals[0]).multiplyScalar(I.y),z.copy(v[0]).add(k).add(L),Q(z.x,z.y,z.z)):Q(I.x,I.y,0)}for(let re=1;re<=u;re++)for(let I=0;I<Z;I++){let Ae=f?de(M[I],le[I],ge):M[I];E?(k.copy(O.normals[re]).multiplyScalar(Ae.x),L.copy(O.binormals[re]).multiplyScalar(Ae.y),z.copy(v[re]).add(k).add(L),Q(z.x,z.y,z.z)):Q(Ae.x,Ae.y,d/u*re)}for(let re=b-1;re>=0;re--){let I=re/b,Ae=p*Math.cos(I*Math.PI/2),we=_*Math.sin(I*Math.PI/2)+y;for(let Me=0,Ce=J.length;Me<Ce;Me++){let We=de(J[Me],G[Me],we);Q(We.x,We.y,d+Ae)}for(let Me=0,Ce=A.length;Me<Ce;Me++){let We=A[Me];$=F[Me];for(let Se=0,P=We.length;Se<P;Se++){let T=de(We[Se],$[Se],we);E?Q(T.x,T.y+v[u-1].y,v[u-1].x+Ae):Q(T.x,T.y,d+Ae)}}}B(),U();function B(){let re=i.length/3;if(f){let I=0,Ae=Z*I;for(let we=0;we<ye;we++){let Me=K[we];fe(Me[2]+Ae,Me[1]+Ae,Me[0]+Ae)}I=u+b*2,Ae=Z*I;for(let we=0;we<ye;we++){let Me=K[we];fe(Me[0]+Ae,Me[1]+Ae,Me[2]+Ae)}}else{for(let I=0;I<ye;I++){let Ae=K[I];fe(Ae[2],Ae[1],Ae[0])}for(let I=0;I<ye;I++){let Ae=K[I];fe(Ae[0]+Z*u,Ae[1]+Z*u,Ae[2]+Z*u)}}n.addGroup(re,i.length/3-re,0)}function U(){let re=i.length/3,I=0;ee(J,I),I+=J.length;for(let Ae=0,we=A.length;Ae<we;Ae++){let Me=A[Ae];ee(Me,I),I+=Me.length}n.addGroup(re,i.length/3-re,1)}function ee(re,I){let Ae=re.length;for(;--Ae>=0;){let we=Ae,Me=Ae-1;Me<0&&(Me=re.length-1);for(let Ce=0,We=u+b*2;Ce<We;Ce++){let Se=Z*Ce,P=Z*(Ce+1),T=I+we+Se,j=I+Me+Se,te=I+Me+P,me=I+we+P;be(T,j,te,me)}}}function Q(re,I,Ae){l.push(re),l.push(I),l.push(Ae)}function fe(re,I,Ae){Te(re),Te(I),Te(Ae);let we=i.length/3,Me=w.generateTopUV(n,i,we-3,we-2,we-1);De(Me[0]),De(Me[1]),De(Me[2])}function be(re,I,Ae,we){Te(re),Te(I),Te(we),Te(I),Te(Ae),Te(we);let Me=i.length/3,Ce=w.generateSideWallUV(n,i,Me-6,Me-3,Me-2,Me-1);De(Ce[0]),De(Ce[1]),De(Ce[3]),De(Ce[1]),De(Ce[2]),De(Ce[3])}function Te(re){i.push(l[re*3+0]),i.push(l[re*3+1]),i.push(l[re*3+2])}function De(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Fl[i.type]().fromJSON(i)),new s(n,e.options)}},Rv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ue(r,a),new ue(o,l),new ue(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[i*3],p=e[i*3+1],_=e[i*3+2],y=e[r*3],b=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-d),new ue(f,1-_),new ue(y,1-m)]:[new ue(o,1-l),new ue(u,1-d),new ue(p,1-_),new ue(b,1-m)]}};function Cv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Xa=class s extends Kt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],d=e,f=(t-e)/i,p=new D,_=new ue;for(let y=0;y<=i;y++){for(let b=0;b<=n;b++){let m=r+b/n*a;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let y=0;y<i;y++){let b=y*(n+1);for(let m=0;m<n;m++){let w=m+b,v=w,E=w+n+1,O=w+n+2,L=w+1;o.push(v,E,L),o.push(E,O,L)}}this.setIndex(o),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},qa=class s extends Kt{constructor(e=new zi([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ct(i,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(a,2));function c(u){let d=i.length/3,f=u.extractPoints(t),p=f.shape,_=f.holes;ls.isClockWise(p)===!1&&(p=p.reverse());for(let b=0,m=_.length;b<m;b++){let w=_[b];ls.isClockWise(w)===!0&&(_[b]=w.reverse())}let y=ls.triangulateShape(p,_);for(let b=0,m=_.length;b<m;b++){let w=_[b];p=p.concat(w)}for(let b=0,m=p.length;b<m;b++){let w=p[b];i.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let b=0,m=y.length;b<m;b++){let w=y[b],v=w[0]+d,E=w[1]+d,O=w[2]+d;n.push(v,E,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Pv(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function Pv(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Hn=class s extends Kt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new D,f=new D,p=[],_=[],y=[],b=[];for(let m=0;m<=n;m++){let w=[],v=m/n,E=0;m===0&&a===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let O=0;O<=t;O++){let L=O/t;d.x=-e*Math.cos(i+L*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+L*r)*Math.sin(a+v*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),b.push(L+E,1-v),w.push(c++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){let v=u[m][w+1],E=u[m][w],O=u[m+1][w],L=u[m+1][w+1];(m!==0||a>0)&&p.push(v,E,L),(m!==n-1||l<Math.PI)&&p.push(E,O,L)}this.setIndex(p),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gr=class s extends Kt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],u=new D,d=new D,f=new D;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){let y=_/i*r,b=p/n*Math.PI*2;d.x=(e+t*Math.cos(b))*Math.cos(y),d.y=(e+t*Math.cos(b))*Math.sin(y),d.z=t*Math.sin(b),o.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){let y=(i+1)*p+_-1,b=(i+1)*(p-1)+_-1,m=(i+1)*(p-1)+_,w=(i+1)*p+_;a.push(y,b,w),a.push(b,m,w)}this.setIndex(a),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bs=class s extends Kt{constructor(e=new fs(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new ue,u=new D,d=[],f=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(p,2));function y(){for(let v=0;v<t;v++)b(v);b(r===!1?t:0),w(),m()}function b(v){u=e.getPointAt(v/t,u);let E=a.normals[v],O=a.binormals[v];for(let L=0;L<=i;L++){let k=L/i*Math.PI*2,z=Math.sin(k),ie=-Math.cos(k);l.x=ie*E.x+z*O.x,l.y=ie*E.y+z*O.y,l.z=ie*E.z+z*O.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=t;v++)for(let E=1;E<=i;E++){let O=(i+1)*(v-1)+(E-1),L=(i+1)*v+(E-1),k=(i+1)*v+E,z=(i+1)*(v-1)+E;_.push(O,L,z),_.push(L,k,z)}}function w(){for(let v=0;v<=t;v++)for(let E=0;E<=i;E++)c.x=v/t,c.y=E/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Fl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Bl=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Je=class extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yu,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zn=class extends Je{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Hl=class extends Un{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yu,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function al(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Iv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Dv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function rm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ps=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_u=class extends ps{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xr,endingEnd:xr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case yr:r=e,o=2*t-n;break;case fl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yr:a=e,l=2*n-t;break;case fl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),y=_*_,b=y*_,m=-f*b+2*f*y-f*_,w=(1+f)*b+(-1.5-2*f)*y+(-.5+f)*_+1,v=(-1-p)*b+(1.5+p)*y+.5*_,E=p*b-p*y;for(let O=0;O!==o;++O)r[O]=m*a[u+O]+w*a[c+O]+v*a[l+O]+E*a[d+O];return r}},Gl=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},xu=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ni=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=al(t,this.TimeBufferType),this.values=al(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:al(e.times,Array),values:al(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _u(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case Rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Iv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){let y=t[d+_];if(y!==t[f+_]||y!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Ir;var ms=class extends ni{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Pr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends ni{};Vl.prototype.ValueTypeName="color";var Bi=class extends ni{};Bi.prototype.ValueTypeName="number";var yu=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hi=class extends ni{InterpolantFactoryMethodLinear(e){return new yu(this.times,this.values,this.getValueSize(),e)}};Hi.prototype.ValueTypeName="quaternion";Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends ni{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Pr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends ni{};Gi.prototype.ValueTypeName="vector";var Vr=class{constructor(e="",t=-1,n=[],i=ju){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ei(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(kv(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ni.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Dv(l);l=Tp(l,1,u),c=Tp(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Bi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],f=i[d];f||(i[d]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,f,p,_,y){if(p.length!==0){let b=[],m=[];rm(p,b,m,_),b.length!==0&&y.push(new d(f,b,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let y=0;y<f[_].morphTargets.length;y++)p[f[_].morphTargets[y]]=-1;for(let y in p){let b=[],m=[];for(let w=0;w!==f[_].morphTargets.length;++w){let v=f[_];b.push(v.time),m.push(v.morphTarget===y?1:0)}i.push(new Bi(".morphTargetInfluence["+y+"]",b,m))}l=p.length*a}else{let p=".bones["+t[d].name+"]";n(Gi,p+".position",f,"pos",i),n(Hi,p+".quaternion",f,"rot",i),n(Gi,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Lv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bi;case"vector":case"vector2":case"vector3":case"vector4":return Gi;case"color":return Vl;case"quaternion":return Hi;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function kv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Lv(s.type);if(s.times===void 0){let t=[],n=[];rm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var as={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},vu=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},Nv=new vu,Vi=class{constructor(e){this.manager=e!==void 0?e:Nv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ni={},Mu=class extends Error{constructor(e,t){super(e),this.response=t}},ja=class extends Vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=as.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:i});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ni[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0,y=0,b=new ReadableStream({start(m){w();function w(){d.read().then(({done:v,value:E})=>{if(v)m.close();else{y+=E.byteLength;let O=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let L=0,k=u.length;L<k;L++){let z=u[L];z.onProgress&&z.onProgress(O)}m.enqueue(E),w()}},v=>{m.error(v)})}}});return new Response(b)}else throw new Mu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{as.add(e,c);let u=Ni[e];delete Ni[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Su=class extends Vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=as.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=La("img");function l(){u(),as.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Hs=class extends Vi{constructor(e){super(e)}load(e,t,n,i){let r=new Sn,a=new Su(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Wr=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Wl=class extends Wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ch=new ot,Ap=new D,Rp=new D,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ap.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ap),Rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rp),t.updateMatrixWorld(),ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Eu=class extends Ya{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Dr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xl=class extends Wr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Eu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Cp=new ot,Sa=new D,hh=new D,wu=class extends Ya{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sa),hh.copy(n.position),hh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hh),n.updateMatrixWorld(),i.makeTranslation(-Sa.x,-Sa.y,-Sa.z),Cp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cp)}},ii=class extends Wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tu=class extends Ya{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Tu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var bs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ql=class extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=as.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return as.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),as.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});as.add(e,l),r.manager.itemStart(e)}};var Xr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Pp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Pp(){return performance.now()}var Au=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){mn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;mn.multiplyQuaternionsFlat(e,a,e,t,e,n),mn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Qu="\\[\\]\\.:\\/",Uv=new RegExp("["+Qu+"]","g"),ed="[^"+Qu+"]",Ov="[^"+Qu.replace("\\.","")+"]",Fv=/((?:WC+[\/:])*)/.source.replace("WC",ed),zv=/(WCOD+)?/.source.replace("WCOD",Ov),Bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ed),Hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ed),Gv=new RegExp("^"+Fv+zv+Bv+Hv+"$"),Vv=["material","materials","bones","map"],Ru=class{constructor(e,t,n){let i=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uv,"")}static parseTrackName(e){let t=Gv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Vv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=Ru;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cu=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:xr,endingEnd:xr};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ig:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case ju:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Pg;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===qu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=yr,i.endingEnd=yr):(e?i.endingStart=this.zeroSlopeAtStart?yr:xr:i.endingStart=fl,t?i.endingEnd=this.zeroSlopeAtEnd?yr:xr:i.endingEnd=fl)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},Wv=new Float32Array(1),qr=class extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){let f=i[d],p=f.name,_=u[p];if(_!==void 0)++_.referenceCount,a[d]=_;else{if(_=a[d],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}let y=t&&t._propertyBindings[d].binding.parsedPath;_=new Au(qt.create(n,p,y),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),a[d]=_}o[d].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Gl(new Float32Array(2),new Float32Array(2),1,Wv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Vr.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ju),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new Cu(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Vr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ip=new ot,Ka=class{constructor(e,t,n=0,i=1/0){this.ray=new Fi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ip.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ip),this}intersectObject(e,t=!0,n=[]){return Pu(e,this,n,t),n.sort(Dp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Pu(e[i],this,n,t);return n.sort(Dp),n}};function Dp(s,e){return s.distance-e.distance}function Pu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Pu(r[a],e,t,!0)}}var Za=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var jl=class extends Si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);function td(s,e){if(e===Xp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===$a||e===Jl){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===$a)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var nc=class extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Md(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=bs.extractUrlBase(e);a=bs.resolveURL(c,this.path)}else a=bs.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ja(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===um){try{a[Pt.KHR_BINARY_GLTF]=new Sd(e)}catch(d){i&&i(d);return}r=JSON.parse(a[Pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Pd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case Pt.KHR_MATERIALS_UNLIT:a[d]=new ad;break;case Pt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ed(r,this.dracoLoader);break;case Pt.KHR_TEXTURE_TRANSFORM:a[d]=new wd;break;case Pt.KHR_MESH_QUANTIZATION:a[d]=new Td;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Xv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},rd=class{constructor(e){this.parser=e,this.name=Pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new tt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Tn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ii(u),c.distance=d;break;case"spot":c=new Xl(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},ad=class{constructor(){this.name=Pt.KHR_MATERIALS_UNLIT}getMaterialType(){return jt}extendParams(e,t,n){let i=[];e.color=new tt(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,an))}return Promise.all(i)}},od=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ld=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(o,o)}return Promise.all(r)}},cd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},ud=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Tn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,an)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},dd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},fd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(o[0],o[1],o[2],Tn),Promise.all(r)}},pd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},md=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(o[0],o[1],o[2],Tn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,an)),Promise.all(r)}},gd=class{constructor(e){this.parser=e,this.name=Pt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},bd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},_d=class{constructor(e){this.parser=e,this.name=Pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},xd=class{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},yd=class{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},vd=class{constructor(e){this.name=Pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,f,i.mode,i.filter),p})})}else return null}},Md=class{constructor(e){this.name=Pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let _ of d){let y=new ot,b=new D,m=new mn,w=new D(1,1,1),v=new Rl(_.geometry,_.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&b.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&w.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,y.compose(b,m,w));for(let E in l)if(E==="_COLOR_0"){let O=l[E];v.instanceColor=new Os(O.array,O.itemSize,O.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,l[E]);$t.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},um="glTF",Qa=12,om={JSON:1313821514,BIN:5130562},Sd=class{constructor(e){this.name=Pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==um)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Qa,r=new DataView(e,Qa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===om.JSON){let c=new Uint8Array(e,Qa+a,o);this.content=n.decode(c)}else if(l===om.BIN){let c=Qa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ed=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=Rd[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=Rd[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=Kr[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(p){for(let _ in p.attributes){let y=p.attributes[_],b=l[_];b!==void 0&&(y.normalized=b)}d(p)},o,c,Tn,f)})})}},wd=class{constructor(){this.name=Pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Td=class{constructor(){this.name=Pt.KHR_MESH_QUANTIZATION}},ic=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,f=d*d,p=f*d,_=e*c,y=_-c,b=-2*p+3*f,m=p-f,w=1-b,v=m-f+d;for(let E=0;E!==o;E++){let O=a[y+E+o],L=a[y+E+l]*u,k=a[_+E+o],z=a[_+E]*u;r[E]=w*O+v*L+b*k+m*z}return r}},qv=new mn,Ad=class extends ic{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return qv.fromArray(r).normalize().toArray(r),r}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lm={9728:fn,9729:zn,9984:Fu,9985:wa,9986:_r,9987:vi},cm={33071:Ui,33648:Ia,10497:ln},nd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jv={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Pr},id={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Je({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),s.DefaultMaterial}function Xs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Zv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jv(s){let e,t=s.extensions&&s.extensions[Pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sd(t.attributes):e=s.indices+":"+sd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+sd(s.targets[n]);return e}function sd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Cd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $v(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Qv=new ot,Pd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&a<98?this.textureLoader=new Hs(this.options.manager):this.textureLoader=new ql(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ja(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Xs(r,o,i),Wi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Pt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(bs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=nd[i.type],o=Kr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Jt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=nd[i.type],c=Kr[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,y,b;if(p&&p!==d){let m=Math.floor(f/p),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=t.cache.get(w);v||(y=new c(o,m*p,i.count*p/u),v=new Or(y,p/u),t.cache.add(w,v)),b=new Us(v,l,f%p/u,_)}else o===null?y=new c(i.count*l):y=new c(o,f,i.count*l),b=new Jt(y,l,_);if(i.sparse!==void 0){let m=nd.SCALAR,w=Kr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,O=new w(a[1],v,i.sparse.count*m),L=new c(a[2],E,i.sparse.count*l);o!==null&&(b=new Jt(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let k=0,z=O.length;k<z;k++){let ie=O[k];if(b.setX(ie,L[k*l]),l>=2&&b.setY(ie,L[k*l+1]),l>=3&&b.setZ(ie,L[k*l+2]),l>=4&&b.setW(ie,L[k*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=_}return b})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=lm[f.magFilter]||zn,u.minFilter=lm[f.minFilter]||vi,u.wrapS=cm[f.wrapS]||ln,u.wrapT=cm[f.wrapT]||ln,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(y){let b=new Sn(y);b.needsUpdate=!0,f(b)}),t.load(bs.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Wi(d,a),d.userData.mimeType=a.mimeType||$v(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Pt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Fs,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Fa,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Je}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Pt.KHR_MATERIALS_UNLIT]){let d=i[Pt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new tt(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Tn),o.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,an)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);let u=r.alphaMode||id.OPAQUE;if(u===id.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===id.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==jt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==jt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==jt){let d=r.emissiveFactor;o.emissive=new tt().setRGB(d[0],d[1],d[2],Tn)}return r.emissiveTexture!==void 0&&a!==jt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,an)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Wi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Xs(i,d,r),d})}createUniqueName(e){let t=qt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return hm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Jv(c),d=i[u];if(d)a.push(d.promise);else{let f;c.extensions&&c.extensions[Pt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=hm(new Kt,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Yv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,_=u.length;p<_;p++){let y=u[p],b=a[p],m,w=c[p];if(b.mode===si.TRIANGLES||b.mode===si.TRIANGLE_STRIP||b.mode===si.TRIANGLE_FAN||b.mode===void 0)m=r.isSkinnedMesh===!0?new Tl(y,w):new ce(y,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),b.mode===si.TRIANGLE_STRIP?m.geometry=td(m.geometry,Jl):b.mode===si.TRIANGLE_FAN&&(m.geometry=td(m.geometry,$a));else if(b.mode===si.LINES)m=new Il(y,w);else if(b.mode===si.LINE_STRIP)m=new zr(y,w);else if(b.mode===si.LINE_LOOP)m=new Dl(y,w);else if(b.mode===si.POINTS)m=new Br(y,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(m.geometry.morphAttributes).length>0&&Zv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Wi(m,r),b.extensions&&Xs(i,m,b),t.assignFinalMaterial(m),d.push(m)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Xs(i,d[0],r),d[0];let f=new st;r.extensions&&Xs(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(Ql.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new us(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let f=new ot;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Al(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){let p=i.channels[d],_=i.samplers[p.sampler],y=p.target,b=y.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,w=i.parameters!==void 0?i.parameters[_.output]:_.output;y.node!==void 0&&(a.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",w)),c.push(_),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let f=d[0],p=d[1],_=d[2],y=d[3],b=d[4],m=[];for(let w=0,v=f.length;w<v;w++){let E=f[w],O=p[w],L=_[w],k=y[w],z=b[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let ie=n._createAnimationTracks(E,O,L,k,z);if(ie)for(let M=0;M<ie.length;M++)m.push(ie[M])}return new Vr(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Qv)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Oa:c.length>1?u=new st:c.length===1?u=c[0]:u=new $t,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Wi(u,r),r.extensions&&Xs(n,u,r),r.matrix!==void 0){let d=new ot;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new st;n.name&&(r.name=i.createUniqueName(n.name)),Wi(r,n),n.extensions&&Xs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[f,p]of i.associations)(f instanceof Un||f instanceof Sn)&&d.set(f,p);return u.traverse(f=>{let p=i.associations.get(f);p!=null&&d.set(f,p)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];_s[r.path]===_s.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(_s[r.path]){case _s.weights:c=Bi;break;case _s.rotation:c=Hi;break;case _s.position:case _s.scale:c=Gi;break;default:switch(n.itemSize){case 1:c=Bi;break;case 2:case 3:default:c=Gi;break}break}let u=i.interpolation!==void 0?jv[i.interpolation]:Ir,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let _=new c(l[f]+"."+_s[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Cd(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Hi?Ad:ic;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function eM(s,e,t){let n=e.attributes,i=new gn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let u=Cd(Kr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){let y=Cd(Kr[f.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Kn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function hm(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Rd[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return It.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${It.workingColorSpace}" not supported.`),Wi(s,e),eM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Kv(s,e.targets,t):s})}var dm={type:"change"},Dd={type:"start"},pm={type:"end"},sc=new Fi,fm=new di,tM=Math.cos(70*Ql.DEG2RAD),xn=new D,Wn=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6,rc=class extends jl{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new mn,this._lastTargetPosition=new D,this._quat=new mn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Za,this._sphericalDelta=new Za,this._scale=1,this._panOffset=new D,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new D,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iM.bind(this),this._onPointerDown=nM.bind(this),this._onPointerUp=sM.bind(this),this._onContextMenu=uM.bind(this),this._onMouseWheel=oM.bind(this),this._onKeyDown=lM.bind(this),this._onTouchStart=cM.bind(this),this._onTouchMove=hM.bind(this),this._onMouseDown=rM.bind(this),this._onMouseMove=aM.bind(this),this._interceptControlDown=dM.bind(this),this._interceptControlUp=fM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dm),this.update(),this.state=Gt.NONE}update(e=null){let t=this.object.position;xn.copy(t).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Wn:n>Math.PI&&(n-=Wn),i<-Math.PI?i+=Wn:i>Math.PI&&(i-=Wn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),t.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=xn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(sc.origin.copy(this.object.position),sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sc.direction))<tM?this.object.lookAt(this.target):(fm.setFromNormalAndCoplanarPoint(this.object.up,this.target),sc.intersectPlane(fm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(dm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xn.setFromMatrixColumn(t,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,t){this.screenSpacePanning===!0?xn.setFromMatrixColumn(t,1):(xn.setFromMatrixColumn(t,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;xn.copy(i).sub(this.target);let r=xn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function nM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function iM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function sM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pm),this.state=Gt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Gt.DOLLY;break;case Vs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Gt.ROTATE}break;case Vs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Dd)}function aM(s){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function oM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(s.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(pm))}function lM(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function cM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Gt.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Gt.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Dd)}function hM(s){switch(this._trackPointer(s),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Gt.NONE}}function uM(s){this.enabled!==!1&&s.preventDefault()}function dM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var mm=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var w=new Uint8Array(m.length),v=0;v<m.length;++v){var E=m.charCodeAt(v);w[v]=E>96?E-97:E>64?E-39:E+4}for(var O=0,v=0;v<m.length;++v)w[O++]=w[v]<60?n[w[v]]:(w[v]-60)*64+w[++v];return w.buffer.slice(0,O)}function l(m,w,v,E,O,L){var k=r.exports.sbrk,z=v+3&-4,ie=k(z*E),M=k(O.length),A=new Uint8Array(r.exports.memory.buffer);A.set(O,M);var Y=m(ie,v,E,M,O.length);if(Y==0&&L&&L(ie,z,E),w.set(A.subarray(ie,ie+v*E)),k(ie-k(0)),Y!=0)throw new Error("Malformed buffer data: "+Y)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function p(m){var w={object:new Worker(m),pending:0,requests:{}};return w.object.onmessage=function(v){var E=v.data;w.pending-=E.count,w.requests[E.id][E.action](E.value),delete w.requests[E.id]},w}function _(m){for(var w="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+b.toString(),v=new Blob([w],{type:"text/javascript"}),E=URL.createObjectURL(v),O=0;O<m;++O)d[O]=p(E);URL.revokeObjectURL(E)}function y(m,w,v,E,O){for(var L=d[0],k=1;k<d.length;++k)d[k].pending<L.pending&&(L=d[k]);return new Promise(function(z,ie){var M=new Uint8Array(v),A=f++;L.pending+=m,L.requests[A]={resolve:z,reject:ie},L.object.postMessage({id:A,count:m,size:w,source:M,mode:E,filter:O},[M.buffer])})}function b(m){a.then(function(){var w=m.data;try{var v=new Uint8Array(w.count*w.size);l(r.exports[w.mode],v,w.count,w.size,w.source,r.exports[w.filter]),self.postMessage({id:w.id,count:w.count,action:"resolve",value:v},[v.buffer])}catch(E){self.postMessage({id:w.id,count:w.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(m){_(m)},decodeVertexBuffer:function(m,w,v,E,O){l(r.exports.meshopt_decodeVertexBuffer,m,w,v,E,r.exports[c[O]])},decodeIndexBuffer:function(m,w,v,E){l(r.exports.meshopt_decodeIndexBuffer,m,w,v,E)},decodeIndexSequence:function(m,w,v,E){l(r.exports.meshopt_decodeIndexSequence,m,w,v,E)},decodeGltfBuffer:function(m,w,v,E,O,L){l(r.exports[u[O]],m,w,v,E,r.exports[c[L]])},decodeGltfBufferAsync:function(m,w,v,E,O){return d.length>0?y(m,w,v,u[E],c[O]):a.then(function(){var L=new Uint8Array(m*w);return l(r.exports[u[E]],L,m,w,v,r.exports[c[O]]),L})}}}();var ac=class extends Ur{constructor(){super();let e=new ct;e.deleteAttribute("uv");let t=new Je({side:Dn}),n=new Je,i=new ii(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new ce(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ce(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new ce(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new ce(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ce(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new ce(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let d=new ce(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let f=new ce(e,Zr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let p=new ce(e,Zr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let _=new ce(e,Zr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let y=new ce(e,Zr(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let b=new ce(e,Zr(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,.1),this.add(b);let m=new ce(e,Zr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zr(s){let e=new jt;return e.color.setScalar(s),e}var xs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},pM=new us(-1,1,1,-1,0,1),Ld=class extends Kt{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}},mM=new Ld,Ti=class{constructor(e){this._mesh=new ce(mM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var oc=class extends On{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vn.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ti(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var eo=class extends On{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},lc=class extends On{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var cc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oc(xs),this.copyPass.material.blending=pn,this.clock=new Xr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}eo!==void 0&&(a instanceof eo?n=!0:a instanceof lc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hc=class extends On{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var to={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ot},cameraProjectionMatrixInverse:{value:new ot},cameraWorldMatrix:{value:new ot},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},no={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},uc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function gm(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=gM(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new ds(i,e,e);return r.wrapS=ln,r.wrapT=ln,r.needsUpdate=!0,r}function gM(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var io={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:kd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraProjectionMatrixInverse:{value:new ot},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function kd(s,e,t){let n=bM(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function bM(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new D(Math.cos(r),Math.sin(r),a))}return n}var dc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(l+c)*u,f=l-d,p=c-d,_=e-f,y=t-p,b,m;_>y?(b=1,m=0):(b=0,m=1);let w=_-b+u,v=y-m+u,E=_-1+2*u,O=y-1+2*u,L=l&255,k=c&255,z=this.perm[L+this.perm[k]]%12,ie=this.perm[L+b+this.perm[k+m]]%12,M=this.perm[L+1+this.perm[k+1]]%12,A=.5-_*_-y*y;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[z],_,y));let Y=.5-w*w-v*v;Y<0?i=0:(Y*=Y,i=Y*Y*this.dot(this.grad3[ie],w,v));let K=.5-E*E-O*O;return K<0?r=0:(K*=K,r=K*K*this.dot(this.grad3[M],E,O)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(n+c),p=1/6,_=(u+d+f)*p,y=u-_,b=d-_,m=f-_,w=e-y,v=t-b,E=n-m,O,L,k,z,ie,M;w>=v?v>=E?(O=1,L=0,k=0,z=1,ie=1,M=0):w>=E?(O=1,L=0,k=0,z=1,ie=0,M=1):(O=0,L=0,k=1,z=1,ie=0,M=1):v<E?(O=0,L=0,k=1,z=0,ie=1,M=1):w<E?(O=0,L=1,k=0,z=0,ie=1,M=1):(O=0,L=1,k=0,z=1,ie=1,M=0);let A=w-O+p,Y=v-L+p,K=E-k+p,J=w-z+2*p,de=v-ie+2*p,Z=E-M+2*p,ye=w-1+3*p,oe=v-1+3*p,G=E-1+3*p,F=u&255,$=d&255,le=f&255,ge=this.perm[F+this.perm[$+this.perm[le]]]%12,B=this.perm[F+O+this.perm[$+L+this.perm[le+k]]]%12,U=this.perm[F+z+this.perm[$+ie+this.perm[le+M]]]%12,ee=this.perm[F+1+this.perm[$+1+this.perm[le+1]]]%12,Q=.6-w*w-v*v-E*E;Q<0?i=0:(Q*=Q,i=Q*Q*this.dot3(this.grad3[ge],w,v,E));let fe=.6-A*A-Y*Y-K*K;fe<0?r=0:(fe*=fe,r=fe*fe*this.dot3(this.grad3[B],A,Y,K));let be=.6-J*J-de*de-Z*Z;be<0?a=0:(be*=be,a=be*be*this.dot3(this.grad3[U],J,de,Z));let Te=.6-ye*ye-oe*oe-G*G;return Te<0?o=0:(Te*=Te,o=Te*Te*this.dot3(this.grad3[ee],ye,oe,G)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,d,f,p,_,y=(e+t+n+i)*l,b=Math.floor(e+y),m=Math.floor(t+y),w=Math.floor(n+y),v=Math.floor(i+y),E=(b+m+w+v)*c,O=b-E,L=m-E,k=w-E,z=v-E,ie=e-O,M=t-L,A=n-k,Y=i-z,K=ie>M?32:0,J=ie>A?16:0,de=M>A?8:0,Z=ie>Y?4:0,ye=M>Y?2:0,oe=A>Y?1:0,G=K+J+de+Z+ye+oe,F=a[G][0]>=3?1:0,$=a[G][1]>=3?1:0,le=a[G][2]>=3?1:0,ge=a[G][3]>=3?1:0,B=a[G][0]>=2?1:0,U=a[G][1]>=2?1:0,ee=a[G][2]>=2?1:0,Q=a[G][3]>=2?1:0,fe=a[G][0]>=1?1:0,be=a[G][1]>=1?1:0,Te=a[G][2]>=1?1:0,De=a[G][3]>=1?1:0,re=ie-F+c,I=M-$+c,Ae=A-le+c,we=Y-ge+c,Me=ie-B+2*c,Ce=M-U+2*c,We=A-ee+2*c,Se=Y-Q+2*c,P=ie-fe+3*c,T=M-be+3*c,j=A-Te+3*c,te=Y-De+3*c,me=ie-1+4*c,pe=M-1+4*c,ze=A-1+4*c,Pe=Y-1+4*c,Ge=b&255,bt=m&255,Ee=w&255,Ve=v&255,ht=o[Ge+o[bt+o[Ee+o[Ve]]]]%32,lt=o[Ge+F+o[bt+$+o[Ee+le+o[Ve+ge]]]]%32,Ke=o[Ge+B+o[bt+U+o[Ee+ee+o[Ve+Q]]]]%32,yt=o[Ge+fe+o[bt+be+o[Ee+Te+o[Ve+De]]]]%32,at=o[Ge+1+o[bt+1+o[Ee+1+o[Ve+1]]]]%32,pt=.6-ie*ie-M*M-A*A-Y*Y;pt<0?u=0:(pt*=pt,u=pt*pt*this.dot4(r[ht],ie,M,A,Y));let H=.6-re*re-I*I-Ae*Ae-we*we;H<0?d=0:(H*=H,d=H*H*this.dot4(r[lt],re,I,Ae,we));let Be=.6-Me*Me-Ce*Ce-We*We-Se*Se;Be<0?f=0:(Be*=Be,f=Be*Be*this.dot4(r[Ke],Me,Ce,We,Se));let he=.6-P*P-T*T-j*j-te*te;he<0?p=0:(he*=he,p=he*he*this.dot4(r[yt],P,T,j,te));let xe=.6-me*me-pe*pe-ze*ze-Pe*Pe;return xe<0?_=0:(xe*=xe,_=xe*xe*this.dot4(r[at],me,pe,ze,Pe)),27*(u+d+f+p+_)}};var so=class s extends On{constructor(e,t,n,i,r,a,o){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=gm(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new En(this.width,this.height,{type:Gn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Zt({defines:Object.assign({},to.defines),uniforms:Vn.clone(to.uniforms),vertexShader:to.vertexShader,fragmentShader:to.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Hl,this.normalMaterial.blending=pn,this.pdMaterial=new Zt({defines:Object.assign({},io.defines),uniforms:Vn.clone(io.uniforms),vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Zt({defines:Object.assign({},no.defines),uniforms:Vn.clone(no.uniforms),vertexShader:no.vertexShader,fragmentShader:no.fragmentShader,blending:pn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Zt({uniforms:Vn.clone(xs.uniforms),vertexShader:xs.vertexShader,fragmentShader:xs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Kl,blendDst:jr,blendEquation:Qn,blendSrcAlpha:Yl,blendDstAlpha:jr,blendEquationAlpha:Qn}),this.blendMaterial=new Zt({uniforms:Vn.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Du,blendSrc:Kl,blendDst:jr,blendEquation:Qn,blendSrcAlpha:Yl,blendDstAlpha:jr,blendEquationAlpha:Qn}),this.fsQuad=new Ti(null),this.originalClearColor=new tt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Nr,this.depthTexture.format=hs,this.depthTexture.type=cs,this.normalRenderTarget=new En(this.width,this.height,{minFilter:fn,magFilter:fn,type:Gn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=kd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new dc,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ds(i,e,e,Bn,mi);return r.wrapS=ln,r.wrapT=ln,r.needsUpdate=!0,r}};so.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var bm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Jr=class s extends On{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new En(r,a,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new En(r,a,{type:Gn});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new En(r,a,{type:Gn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=bm;this.highPassUniforms=Vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ue(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=xs;this.copyUniforms=Vn.clone(u.uniforms),this.blendMaterial=new Zt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ks,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new tt,this.oldClearAlpha=1,this.basic=new jt,this.fsQuad=new Ti(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Jr.BlurDirectionX=new ue(1,0);Jr.BlurDirectionY=new ue(0,1);var _m={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var fc=class extends On{constructor(){super();let e=_m;this.uniforms=Vn.clone(e.uniforms),this.material=new Bl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ti(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},It.getTransfer(this._outputColorSpace)===Xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ku?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ja&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function xm(s){let{characters:e,me:t,Vec3:n,Quat:i,stand:r,findPath:a,lineClear:o,pointClear:l,broadcast:c,hearts:u,focus:d,reward:f,save:p,hint:_,sameRoom:y}=s,b=()=>!1,m=null,w=!1,v=0,E=new Map,O=new Set,L=U=>{let ee=Math.max(0,Math.min(1,U));return ee*ee*(3-2*ee)},k=()=>[e.A,e.B],z=U=>[U.g.position.x,U.g.position.z],ie=(U,ee)=>Math.hypot(U[0]-ee[0],U[1]-ee[1]),M=(U,ee,Q)=>{let fe=Math.atan2(Math.sin(ee-U.g.rotation.y),Math.cos(ee-U.g.rotation.y));U.g.rotation.y+=fe*Q};function A(){E.forEach((U,ee)=>ee.quaternion.copy(U)),E.clear()}function Y(U){U.token=(U.token||0)+1,U.path=[],U.sonra=null,U.hedefYer=null}function K(U=!1){var Q;v++;let ee=m;m=null,w=!1,A();for(let fe of k())fe.hugLock=!1,Y(fe),fe.durum="ayakta",fe.oyna("Idle");U&&ee&&ee.owner===t.rol&&f(),ee&&(p(),(Q=ee.resolve)==null||Q.call(ee,U))}function J(U){E.has(U)||E.set(U,U.quaternion.clone())}function de(U,ee){let Q;return U.root.traverse(fe=>{!Q&&fe.isBone&&ee.includes(fe.name.toLowerCase().replace(/[^a-z0-9]/g,""))&&(Q=fe)}),Q}let Z=new Map;for(let U of k()){let ee=[];for(let[fe,be]of[["L","l"],["R","r"]]){let Te=de(U,["upperarm"+be]),De=de(U,["lowerarm"+be,"forearm"+be]),re=de(U,["wrist"+be,"hand"+be]);Te&&De&&re&&ee.push({side:fe,upper:Te,lower:De,hand:re})}let Q=[];U.root.traverse(fe=>{fe.isBone&&/^(upperleg|lowerleg|foot|toes|thigh|shin)[lr]$/.test(fe.name.toLowerCase().replace(/[^a-z0-9]/g,""))&&Q.push({bone:fe,rest:fe.quaternion.clone()})}),Z.set(U,{arms:ee,legs:Q,head:de(U,["head"])})}function ye(U,ee,Q,fe){let be=U.getWorldPosition(new n),Te=ee.getWorldPosition(new n).sub(be),De=Q.clone().sub(be);if(Te.lengthSq()<1e-8||De.lengthSq()<1e-8)return;let re=U.getWorldQuaternion(new i),I=new i().setFromUnitVectors(Te.normalize(),De.normalize()),we=U.parent.getWorldQuaternion(new i).invert().multiply(I.multiply(re));J(U),U.quaternion.slerp(we,fe),U.updateWorldMatrix(!1,!0)}function oe(U,ee,Q){let fe=Z.get(U);if(!fe||Q<=0)return;for(let{bone:re,rest:I}of fe.legs)J(re),re.quaternion.slerp(I,Q);U.g.updateWorldMatrix(!0,!0),ee.g.updateWorldMatrix(!0,!0);let be=ee.g.position.clone().sub(U.g.position);if(be.y=0,be.lengthSq()<1e-6)return;be.normalize();let Te=new n(be.z,0,-be.x),De=Math.min(U.boy,ee.boy);for(let re of fe.arms){let I=re.side==="L"?1:-1,Ae=re.upper.getWorldPosition(new n),we=re.lower.getWorldPosition(new n),Me=re.hand.getWorldPosition(new n),Ce=Ae.distanceTo(we),We=we.distanceTo(Me),Se=ee.g.position.clone().addScaledVector(be,De*.065).addScaledVector(Te,I*De*.1);Se.y=ee.g.position.y+De*(U.rol==="A"?.64:.57);let P=Se.clone().sub(Ae),T=Math.min(P.length(),(Ce+We)*.97);P.normalize();let j=(Ce*Ce-We*We+T*T)/(2*Math.max(T,1e-5)),te=Math.sqrt(Math.max(0,Ce*Ce-j*j)),me=Te.clone().multiplyScalar(I).add(new n(0,-.8,0));me.addScaledVector(P,-me.dot(P)).normalize();let pe=Ae.clone().addScaledVector(P,j).addScaledVector(me,te);ye(re.upper,re.lower,pe,Q),ye(re.lower,re.hand,Se,Q)}if(fe.head){J(fe.head);let re=new i().setFromAxisAngle(new n(0,0,1),U.rol==="A"?-.065:.065);fe.head.quaternion.multiply(new i().slerp(re,Q))}}function G(U){return U&&typeof U.id=="string"&&U.id.length<100&&["A","B"].includes(U.actor)&&Number.isFinite(U.at)&&Number.isFinite(U.travel)&&U.travel>=0&&U.travel<25&&Array.isArray(U.path)&&U.path.length>=2&&U.path.length<=256&&U.path.every(ee=>Array.isArray(ee)&&ee.length===2&&ee.every(Q=>Number.isFinite(Q)&&Math.abs(Q)<160))&&Array.isArray(U.target)&&U.target.length===2&&U.target.every(ee=>Number.isFinite(ee)&&Math.abs(ee)<160)&&Math.abs(Date.now()-U.at)<3e4}function F(U,ee,Q){let fe=e[U.actor],be=e[U.actor==="A"?"B":"A"];for(let De of k())Y(De),De.hugLock=!0,De.durum="sariliyor",De.oyna(De===fe&&U.travel>.05?"Walking_A":"Idle");be.g.position.set(U.target[0],0,U.target[1]);let Te=U.path.slice(1).map((De,re)=>ie(De,U.path[re]));m={plan:U,actor:fe,partner:be,owner:ee,resolve:Q,lengths:Te,length:Te.reduce((De,re)=>De+re,0),arrived:!1,effects:!1},O.add(U.id),O.size>100&&O.delete(O.values().next().value)}async function $(U){var fe;if(m||w)return!1;if(!b()&&!((fe=Z.get(U))!=null&&fe.arms.length))return _("Karakterin kol iskeleti bulunamad\u0131."),!1;let ee=U===e.A?e.B:e.A;if(y&&!y(U,ee))return _("Sar\u0131lmak i\xE7in \xF6nce ayn\u0131 odaya gelin \u{1F917}"),!1;w=!0;let Q=++v;k().forEach(be=>{Y(be),be.hugLock=!0});try{if(await Promise.all(k().map(r)),Q!==v)return!1;let be=z(U),Te=z(ee),De=Math.atan2(be[0]-Te[0],be[1]-Te[1]),re=Math.min(U.boy,ee.boy)*.25,I=null;for(let we of[0,.45,-.45,.9,-.9,Math.PI/2,-Math.PI/2,Math.PI]){let Me=De+we,Ce=[Te[0]+Math.sin(Me)*re,Te[1]+Math.cos(Me)*re];if(!l(...Ce))continue;let We=[be,...a(be,Ce)];if(ie(We[We.length-1],Ce)>.08||We.some((P,T)=>T&&!o(We[T-1],P)))continue;let Se=We.slice(1).reduce((P,T,j)=>P+ie(We[j],T),0);(!I||Se<I.length)&&(I={path:We,length:Se})}if(!I)return K(),_("Sar\u0131lmak i\xE7in ikinizin de yan\u0131nda biraz bo\u015F alan olsun \u{1F917}"),!1;let Ae={id:Date.now()+"-"+U.rol+"-"+Math.random().toString(36).slice(2,8),actor:U.rol,at:Date.now()+180,travel:I.length/1.8,path:I.path,target:Te};return w=!1,await new Promise(we=>{F(Ae,U.rol,we),c({t:"hug",plan:Ae})})}catch{return Q===v&&K(),_("Sar\u0131lma ba\u015Flat\u0131lamad\u0131, tekrar deneyebilirsin."),!1}}async function le(U,ee){if(!G(U)||U.actor!==ee||O.has(U.id)||m&&m.plan.id<U.id)return!1;(m||w)&&K(),w=!0;let Q=++v;k().forEach(fe=>{Y(fe),fe.hugLock=!0});try{return await Promise.all(k().map(r)),Q!==v?!1:(w=!1,F(U,null),!0)}catch{return Q===v&&K(),!1}}function ge(){if(A(),!m)return;let U=m,{plan:ee,actor:Q,partner:fe}=U,be=Math.max(0,(Date.now()-ee.at)/1e3),Te=Math.min(1,be/Math.max(.001,ee.travel))*U.length,De=0;for(;De<U.lengths.length-1&&Te>U.lengths[De];)Te-=U.lengths[De++];let re=ee.path[De],I=ee.path[De+1],Ae=U.lengths[De]?Math.min(1,Te/U.lengths[De]):1;if(Q.g.position.set(re[0]+(I[0]-re[0])*Ae,0,re[1]+(I[1]-re[1])*Ae),be<ee.travel)M(Q,Math.atan2(I[0]-re[0],I[1]-re[1]),.2);else{U.arrived||(U.arrived=!0,b()?(Q.oyna("Hug",.3),fe.oyna("Hug",.3)):Q.oyna("Idle",.18));let we=Math.atan2(fe.g.position.x-Q.g.position.x,fe.g.position.z-Q.g.position.z);if(M(Q,we,.25),M(fe,we+Math.PI,.25),!U.effects&&be>=ee.travel+.65){U.effects=!0;let Me=(Q.g.position.x+fe.g.position.x)/2,Ce=(Q.g.position.z+fe.g.position.z)/2;u(Me,Ce,16),d(Me,Math.min(Q.boy,fe.boy)*.62,Ce,4.4,.8,3.2)}}be>ee.travel+4.6&&K(!0)}function B(){if(!m&&window.__hugTest){let Q=window.__hugTest.w;oe(e.A,e.B,Q),oe(e.B,e.A,Q);return}if(!m||b())return;let U=(Date.now()-m.plan.at)/1e3-m.plan.travel-.25,ee=L(U/.85)*L((4.1-U)/.85);oe(m.actor,m.partner,ee),oe(m.partner,m.actor,ee)}return{request:$,receive:le,beforeFrame:ge,afterFrame:B,cancel:()=>K(),get busy(){return!!m||w},get plan(){return(m==null?void 0:m.plan)||null}}}var ro=new D;function ri(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;ro.copy(e),ro[n]=0,ro.normalize();let c=.5*a/(a+o),u=1-ro.angleTo(s)/l;return Math.sign(ro[t])===1?u*c:o/(a+o)+c+c*(1-u)}var pc=class extends ct{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new D,l=new D,c=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,_=new D,y=.5/i;for(let b=0,m=0;b<u.length;b+=3,m+=2)switch(o.fromArray(u,b),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),u[b+0]=c.x*Math.sign(o.x)+l.x*r,u[b+1]=c.y*Math.sign(o.y)+l.y*r,u[b+2]=c.z*Math.sign(o.z)+l.z*r,d[b+0]=l.x,d[b+1]=l.y,d[b+2]=l.z,Math.floor(b/p)){case 0:_.set(1,0,0),f[m+0]=ri(_,l,"z","y",r,n),f[m+1]=1-ri(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[m+0]=1-ri(_,l,"z","y",r,n),f[m+1]=1-ri(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[m+0]=1-ri(_,l,"x","z",r,e),f[m+1]=ri(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[m+0]=1-ri(_,l,"x","z",r,e),f[m+1]=1-ri(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[m+0]=1-ri(_,l,"x","y",r,e),f[m+1]=1-ri(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[m+0]=ri(_,l,"x","y",r,e),f[m+1]=1-ri(_,l,"y","x",r,t);break}}};function ym({dokuYukle:s,canvasTex:e}){let t={kumas:.45,ahsap:.9,mermer:1.1,dokuma:.5,jut:.6},n=e(256,256,(G,F,$)=>{G.fillStyle="#ececea",G.fillRect(0,0,F,$);for(let le=0;le<$;le+=4)for(let ge=0;ge<F;ge+=4){let B=225+Math.random()*30-((ge/4+le/4)%2?8:0);G.fillStyle=`rgb(${B},${B},${B-2})`,G.fillRect(ge,le,4,4)}for(let le=0;le<600;le++)G.fillStyle=`rgba(255,255,255,${Math.random()*.25})`,G.fillRect(Math.random()*F,Math.random()*$,1+Math.random()*3,1)});n.wrapS=n.wrapT=ln;let i=e(256,256,(G,F,$)=>{G.fillStyle="#c9a979",G.fillRect(0,0,F,$);for(let le=0;le<$;le+=8)for(let ge=0;ge<F;ge+=8){let B=le/8%2?4:0;G.fillStyle=`hsl(35,${35+Math.random()*10}%,${55+Math.random()*12}%)`,G.beginPath(),G.ellipse(ge+B+4,le+4,4.2,3,.6,0,7),G.fill(),G.strokeStyle="rgba(90,60,30,.25)",G.stroke()}});i.wrapS=i.wrapT=ln;let r={kumas:()=>s("kumas"),ahsap:()=>s("ahsap"),mermer:()=>s("mermer"),dokuma:()=>n,jut:()=>i},a={};function o(G,F="#ffffff",$={}){let le=G+F+JSON.stringify($);return a[le]||(a[le]=new Je(Object.assign({color:F,roughness:G==="mermer"?.2:G==="ahsap"?.55:.92,metalness:0,map:G?r[G]():null},$))),a[le]}function l(G,F){let $=G.attributes.position,le=G.attributes.normal,ge=new Float32Array($.count*2);for(let B=0;B<$.count;B++){let U=Math.abs(le.getX(B)),ee=Math.abs(le.getY(B)),Q=Math.abs(le.getZ(B)),fe,be;ee>=U&&ee>=Q?(fe=$.getX(B),be=$.getZ(B)):U>=Q?(fe=$.getZ(B),be=$.getY(B)):(fe=$.getX(B),be=$.getY(B)),ge[B*2]=fe/F,ge[B*2+1]=be/F}return G.setAttribute("uv",new Jt(ge,2)),G}function c(G,F,$,le,ge,B,U,ee,Q,fe,be){let Te=ge>0?new pc(F,$,le,3,Math.min(ge,F/2,$/2,le/2)):new ct(F,$,le);B&&l(Te,t[B]);let De=new ce(Te,o(B,U,be));return De.position.set(ee,Q,fe),De.castShadow=!0,De.receiveShadow=!0,G.add(De),De}function u(G,F,$,le,ge,B,U,ee,Q,fe=24,be){let Te=new Ft(F,$,le,fe);ge&&l(Te,t[ge]);let De=new ce(Te,o(ge,B,be));return De.position.set(U,ee,Q),De.castShadow=!0,De.receiveShadow=!0,G.add(De),De}let d=["","#232323",{roughness:.35,metalness:.6}],f=["","#c8a46a",{roughness:.3,metalness:.85}];function p(G,F,$,le,ge="ahsap",B=.1,U=.028){for(let ee of[-1,1])for(let Q of[-1,1])if(ge==="ahsap"){let fe=u(G,U,U*.7,le,"ahsap","#ffffff",ee*(F/2-B),le/2,Q*($/2-B),10);fe.rotation.z=ee*.06,fe.rotation.x=-Q*.06}else u(G,U*.7,U*.7,le,...d.slice(0,2),ee*(F/2-B),le/2,Q*($/2-B),8,d[2])}let _=G=>G==="boucle"?["kumas","#ffffff"]:["dokuma",G];function y(G,F,$="ahsap"){let le=new st,[ge,B]=_(F),U=G*.74+.36,ee=1,Q=.18;c(le,U,.18,ee-.04,.05,ge,B,0,.21,-.02),c(le,U,.62,.24,.08,ge,B,0,.46,-ee/2+.12);for(let be of[-1,1])c(le,Q,.46,ee,.08,ge,B,be*(U/2-Q/2),.35,0);let fe=(U-Q*2)/G;for(let be=0;be<G;be++){let Te=-U/2+Q+fe*(be+.5);c(le,fe-.02,.16,ee-.26,.07,ge,B,Te,.37,.12);let De=c(le,fe-.06,.44,.2,.09,ge,B,Te,.66,-ee/2+.32);De.rotation.x=-.12}return p(le,U-.1,ee-.1,.13,$),le}function b(G){let F=new st,[$,le]=_(G),ge=2.6,B=1,U=1.75,ee=.18;c(F,ge,.18,B,.05,$,le,0,.21,0),c(F,B,.18,U-B,.05,$,le,ge/2-B/2,.21,B/2+(U-B)/2),c(F,ge,.62,.24,.08,$,le,0,.46,-B/2+.12),c(F,ee,.46,B,.08,$,le,-ge/2+ee/2,.35,0);for(let Q=0;Q<3;Q++){let fe=-ge/2+ee+.72*(Q+.5);c(F,.7,.16,B-.26,.07,$,le,fe,.37,.12);let be=c(F,.66,.44,.2,.09,$,le,fe,.66,-B/2+.32);be.rotation.x=-.12}return c(F,B-.1,.16,U-.32,.07,$,le,ge/2-B/2+.02,.37,(U-.3)/2+.05),p(F,ge-.1,B-.1,.13,"siyah"),F}function m(G){let F=new st,[$,le]=_(G);c(F,.95,.2,.9,.1,$,le,0,.24,0),c(F,.95,.55,.26,.13,$,le,0,.58,-.32);for(let ge of[-1,1])c(F,.2,.36,.82,.1,$,le,ge*.4,.45,0);return c(F,.58,.12,.62,.06,$,le,0,.39,.08),p(F,.85,.8,.14,"ahsap",.08,.025),F}function w(G){let F=new st,[$,le]=_(G),ge=u(F,.32,.34,.44,$,le,0,.22,0,32);return ge.geometry=l(new Ft(.32,.34,.44,32,1),t[$]),F}function v(G){let F=new st;if(G==="iskandinav"){p(F,.44,.44,.42,"ahsap",.04,.022),c(F,.46,.05,.46,.02,null,"#f2efe9",0,.44,0,{roughness:.45});let $=c(F,.46,.3,.04,.02,null,"#f2efe9",0,.74,-.22,{roughness:.45});$.rotation.x=-.12;for(let le of[-1,1]){let ge=u(F,.014,.014,.36,"ahsap","#ffffff",le*.17,.62,-.2,8);ge.rotation.x=-.12}}else p(F,.44,.44,.4,"siyah",.04,.022),c(F,.48,.1,.48,.04,"dokuma","#d9cfc1",0,.42,0),c(F,.48,.42,.08,.04,"dokuma","#d9cfc1",0,.72,-.22).rotation.x=-.1;return F}function E(G){let F=new st;return G==="mese"?(c(F,1.7,.05,.9,.02,"ahsap","#ffffff",0,.76,0),p(F,1.6,.8,.74,"ahsap",.08,.032)):(u(F,.6,.6,.04,"mermer","#ffffff",0,.77,0,48),u(F,.07,.09,.72,...f.slice(0,2),0,.38,0,16,f[2]),u(F,.32,.34,.04,...f.slice(0,2),0,.02,0,32,f[2])),F}function O(G){let F=new st;return G==="mermer"?(u(F,.5,.5,.04,"mermer","#ffffff",0,.38,0,48),u(F,.36,.36,.34,"ahsap","#ffffff",0,.18,0,32)):(c(F,1.2,.05,.62,.015,"ahsap","#ffffff",0,.38,0),c(F,1.1,.03,.54,.01,"ahsap","#ffffff",0,.12,0),p(F,1.18,.6,.36,"siyah",.04,.02)),F}function L(){let G=new st;c(G,1.9,.42,.42,.02,"ahsap","#e9e2da",0,.33,0);for(let $=0;$<3;$++)c(G,.6,.36,.01,.005,"ahsap","#ffffff",-.62+$*.62,.33,.212);p(G,1.85,.38,.12,"siyah",.06,.02),c(G,1.36,.78,.04,.01,null,"#111114",0,.95,-.05,{roughness:.2,metalness:.3}),c(G,.3,.03,.18,.01,null,"#1a1a1a",0,.555,-.05);let F=new ce(new wn(1.3,.72),new jt({color:"#f3e3e7"}));return F.position.set(0,.95,-.028),G.add(F),F.userData.oran=1.3/.72,G.userData.foto=F,G}let k=G=>e(512,384,(F,$,le)=>{if(G==="berber"){F.fillStyle="#efe8dc",F.fillRect(0,0,$,le);for(let ge=0;ge<9e3;ge++)F.fillStyle=`rgba(255,255,255,${Math.random()*.4})`,F.fillRect(Math.random()*$,Math.random()*le,2,2);F.strokeStyle="#3a3330",F.lineWidth=3;for(let ge=-le;ge<$+le;ge+=64)F.beginPath(),F.moveTo(ge,0),F.lineTo(ge+le*.7,le),F.stroke(),F.beginPath(),F.moveTo(ge+le*.7,0),F.lineTo(ge,le),F.stroke()}else if(G==="geo"){F.fillStyle="#e9ddcf",F.fillRect(0,0,$,le);let ge=["#c07a5a","#d9a58a","#8f9d7c","#e7c9a9"];for(let B=0;B<14;B++){F.fillStyle=ge[B%4],F.beginPath();let U=Math.random()*$,ee=Math.random()*le,Q=30+Math.random()*90;B%3?F.arc(U,ee,Q/2,0,B%2?Math.PI:7):F.rect(U,ee,Q,Q*.6),F.fill()}for(let B=0;B<6e3;B++)F.fillStyle=`rgba(255,255,255,${Math.random()*.25})`,F.fillRect(Math.random()*$,Math.random()*le,2,2)}else{F.fillStyle="#9d9a96",F.fillRect(0,0,$,le);for(let ge=0;ge<16e3;ge++){let B=130+Math.random()*60;F.fillStyle=`rgba(${B},${B},${B-4},.6)`,F.fillRect(Math.random()*$,Math.random()*le,1,3)}}F.strokeStyle="rgba(0,0,0,.08)",F.lineWidth=8,F.strokeRect(4,4,$-8,le-8)});function z(G){let F=new st;if(G==="jut"){let ge=new ce(new Ft(1.05,1.05,.02,48),o("jut","#ffffff",{roughness:1}));return l(ge.geometry,t.jut),ge.position.y=.011,ge.receiveShadow=!0,F.add(ge),F}let $=k(G),le=new ce(new ct(2.6,.02,1.85),[o(null,"#d8d0c4"),o(null,"#d8d0c4"),new Je({map:$,roughness:1}),o(null,"#d8d0c4"),o(null,"#d8d0c4"),o(null,"#d8d0c4")]);return le.position.y=.011,le.receiveShadow=!0,F.add(le),F}function ie(G){let F=new st,[$,le]=_(G);c(F,1.9,.32,2.2,.06,$,le,0,.26,0),c(F,2,1.15,.14,.07,$,le,0,.58,-1.1),c(F,1.78,.2,2.05,.08,"dokuma","#f7f4ef",0,.5,.05),c(F,1.82,.1,1.3,.05,"dokuma","#f2ede6",0,.62,.42),c(F,1.86,.12,.45,.05,"dokuma","#b9a58c",0,.64,.82);for(let ge of[-1,1])c(F,.7,.14,.36,.07,"dokuma","#ffffff",ge*.42,.66,-.82);return p(F,1.85,2.1,.1,"ahsap",.1,.03),F}function M(){let G=new st;u(G,.17,.19,.05,"mermer","#ffffff",0,.025,0,32);let F=new fs(new D(0,.05,0),new D(.1,2.4,0),new D(1.05,1.75,0)),$=new ce(new Bs(F,40,.016,8),o(...f.slice(0,2),f[2]));$.castShadow=!0,G.add($);let le=new ce(new Hn(.24,24,12,0,Math.PI*2,0,Math.PI/2),o(...f.slice(0,2),Object.assign({side:on},f[2])));le.position.set(1.05,1.62,0),le.castShadow=!0,G.add(le);let ge=new ce(new Hn(.06,12,8),new jt({color:"#fff3d6"}));return ge.position.set(1.05,1.6,0),G.add(ge),G}function A(){let G=new st;u(G,.24,.19,.42,null,"#efece6",0,.21,0,28,{roughness:.6}),u(G,.22,.22,.02,null,"#4a3a2c",0,.41,0,24);let F=new zi;F.moveTo(0,0),F.bezierCurveTo(-.22,.05,-.26,.3,-.02,.42),F.lineTo(0,.38),F.bezierCurveTo(.26,.3,.22,.05,0,0);let $=new qa(F,10),le=new Je({color:"#2f6b3a",roughness:.6,side:on});for(let ge=0;ge<11;ge++){let B=ge/11*Math.PI*2+Math.random()*.3,U=.55+Math.random()*.55,ee=Math.sin(B)*.25*U,Q=Math.cos(B)*.25*U,fe=.4+U,be=new ce(new Ft(.008,.01,U,5),o(null,"#3d7a40"));be.position.set(ee/2,.4+U/2,Q/2),be.lookAt(ee,fe,Q),be.rotateX(Math.PI/2),G.add(be);let Te=new ce($,le);Te.position.set(ee,fe,Q),Te.rotation.set(-.9-Math.random()*.4,B,0),Te.scale.setScalar(1.1+Math.random()*.5),Te.castShadow=!0,G.add(Te)}return G}function Y(){let G=new st,F=1.2,$=1.9,le=.36;for(let B of[-1,1])c(G,.04,$,le,.01,"ahsap","#ffffff",B*(F/2-.02),$/2,0);for(let B=0;B<5;B++)c(G,F,.035,le,.01,"ahsap","#ffffff",0,.05+B*.45,0);let ge=["#d9cfc1","#8f9d7c","#c07a5a","#3c4a6b","#efe8dc","#b9a58c"];for(let B=0;B<4;B++){let U=-F/2+.08,ee=.07+B*.45,Q=4+Math.floor(Math.random()*6);for(let fe=0;fe<Q&&U<F/2-.25;fe++){let be=.03+Math.random()*.03,Te=.22+Math.random()*.1;c(G,be,Te,.22,.004,null,ge[(B*3+fe)%ge.length],U+be/2,ee+Te/2,0),U+=be+.005}B%2?u(G,.06,.045,.2,null,"#f2efe9",F/2-.18,ee+.1,0,16,{roughness:.4}):c(G,.16,.12,.16,.03,null,"#c8b8a2",F/2-.2,ee+.06,0)}return G}function K(){let G=new st,F=new zi,$=.62,le=1.75;F.moveTo(-$/2,0),F.lineTo(-$/2,le-$/2),F.absarc(0,le-$/2,$/2,Math.PI,0,!0),F.lineTo($/2,0),F.lineTo(-$/2,0);let ge=new ce(new Hr(F,{depth:.04,bevelEnabled:!1,curveSegments:24}),o(...f.slice(0,2),f[2]));ge.position.set(0,.02,-.02),ge.rotation.x=-.08,ge.castShadow=!0,G.add(ge);let B=F.clone(),U=new ce(new qa(B,24),new Je({color:"#dfe7ea",metalness:1,roughness:.04}));return U.scale.set(.9,.95,1),U.position.set(0,.06,.025),U.rotation.x=-.08,G.add(U),G}let J=(G,F=0)=>({act:"otur",yerler:G,yon:F}),de=.12,Z={md_kanepe3_bej:["\u{1F6CB}\uFE0F","Kanepe \xB7 bej bukle",140,"Modern",J([[-.74,de],[0,de],[.74,de]])],md_kanepe3_gri:["\u{1F6CB}\uFE0F","Kanepe \xB7 a\xE7\u0131k gri",140,"Modern",J([[-.74,de],[0,de],[.74,de]])],md_kanepe2_yesil:["\u{1F6CB}\uFE0F","\u0130kili kanepe \xB7 ada\xE7ay\u0131",110,"Modern",J([[-.37,de],[.37,de]])],md_kanepe2_krem:["\u{1F6CB}\uFE0F","\u0130kili kanepe \xB7 krem",110,"Modern",J([[-.37,de],[.37,de]])],md_kose:["\u{1F6CB}\uFE0F","K\xF6\u015Fe koltuk \xB7 grej",190,"Modern",J([[-.76,de],[-.04,de],[.68,de]])],md_berjer_krem:["\u{1F4BA}","Berjer \xB7 krem",60,"Modern",J([[0,.08]])],md_berjer_terra:["\u{1F4BA}","Berjer \xB7 kiremit",60,"Modern",J([[0,.08]])],md_puf:["\u26AA","Puf \xB7 bukle",25,"Modern",J([[0,0]])],md_sandalye_isk:["\u{1FA91}","\u0130skandinav sandalye",30,"Modern",J([[0,.02]])],md_sandalye_kumas:["\u{1FA91}","Kuma\u015F sandalye",35,"Modern",J([[0,.02]])],md_masa_mese:["\u{1F37D}\uFE0F","Me\u015Fe yemek masas\u0131",90,"Modern",{masa:!0}],md_masa_mermer:["\u{1F37D}\uFE0F","Mermer yuvarlak masa",100,"Modern",{masa:!0}],md_sehpa_mermer:["\u26AA","Mermer sehpa",45,"Modern",{}],md_sehpa_mese:["\u{1F7EB}","Me\u015Fe sehpa",40,"Modern",{}],md_tv:["\u{1F4FA}","TV \xFCnitesi (foto\u011Fraflar\u0131m\u0131z)",80,"Modern",{act:"foto"}],md_hali_berber:["\u{1F7EB}","Berber hal\u0131",45,"Modern",{zemin:!0}],md_hali_geo:["\u{1F7E7}","Geometrik hal\u0131",45,"Modern",{zemin:!0}],md_hali_gri:["\u2B1C","Gri yumu\u015Fak hal\u0131",40,"Modern",{zemin:!0}],md_hali_jut:["\u{1F7E4}","Yuvarlak j\xFCt hal\u0131",35,"Modern",{zemin:!0}],md_yatak:["\u{1F6CF}\uFE0F","Modern yatak",160,"Modern",{act:"yat",yerler:[[-.42,-.47],[.42,-.47]],yon:0}],md_lambader:["\u{1F4A1}","Ark lambader",45,"Modern",{act:"lamba"}],md_monstera:["\u{1FAB4}","Monstera",30,"Modern",{}],md_kitaplik:["\u{1F4DA}","Me\u015Fe kitapl\u0131k",70,"Modern",{}],md_ayna:["\u{1FA9E}","Ayakl\u0131 ayna",40,"Modern",{}]},ye={md_kanepe3_bej:()=>y(3,"boucle"),md_kanepe3_gri:()=>y(3,"#b9b8b4","siyah"),md_kanepe2_yesil:()=>y(2,"#9aa887"),md_kanepe2_krem:()=>y(2,"#f3ece2"),md_kose:()=>b("#c9c1b5"),md_berjer_krem:()=>m("#f1e9dc"),md_berjer_terra:()=>m("#c98262"),md_puf:()=>w("boucle"),md_sandalye_isk:()=>v("iskandinav"),md_sandalye_kumas:()=>v("kumas"),md_masa_mese:()=>E("mese"),md_masa_mermer:()=>E("mermer"),md_sehpa_mermer:()=>O("mermer"),md_sehpa_mese:()=>O("mese"),md_tv:L,md_hali_berber:()=>z("berber"),md_hali_geo:()=>z("geo"),md_hali_gri:()=>z("gri"),md_hali_jut:()=>z("jut"),md_yatak:()=>ie("#cfc4b4"),md_lambader:M,md_monstera:A,md_kitaplik:Y,md_ayna:K},oe=[["md_hali_berber",.6,-1.55,0],["md_kanepe3_bej",.6,-2.9,0],["md_sehpa_mermer",.6,-1.45,0],["md_berjer_krem",2.75,-1.35,-Math.PI/2],["md_puf",-1.35,-1.25,0],["md_lambader",-1.2,-3.05,0],["md_monstera",3.9,-2.95,0],["md_kitaplik",-4.2,-1.3,Math.PI/2],["md_tv",.6,1.45,Math.PI],["md_masa_mese",-2.55,1.45,0],["md_sandalye_isk",-3,.8,0],["md_sandalye_isk",-2.1,.8,0],["md_sandalye_isk",-3,2.1,Math.PI],["md_sandalye_isk",-2.1,2.1,Math.PI],["md_ayna",3.95,.6,-Math.PI/2]];return{KAT:Z,YAP:ye,SALON:oe}}var Ne={w:9,d:7},_M=1.04,xM=1.4,yM={otur:[0,0],yat:[-.015,.174],yer:[0,-.04]},vM={otur:.11,yat:.12,yer:.1};var MM=.75,vm={A:1.78,B:1.65},qs=.25,Mm=(window.__leHiz||1)*1.9,SM=.25,EM=()=>{var e;let s=(e=window.__leSaat)!=null?e:Em();return s>=21||s<6},Em=()=>{try{return+new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Istanbul",hour:"2-digit",hourCycle:"h23"}).format(new Date)}catch{return new Date().getHours()}},Qt=s=>document.querySelector(s);function ke(s,e,...t){let n=document.createElement(s);for(let i in e||{})i==="class"?n.className=e[i]:i.startsWith("on")?n[i]=e[i]:n.setAttribute(i,e[i]);return t.flat().forEach(i=>i!=null&&i!==!1&&n.append(i)),n}function Rn(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"),s,e);let i=new Ll(n);return i.colorSpace=an,i.anisotropy=4,i}var wM=(s,e,t)=>{let n=(e-s+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),s+n*t};function TM(s){return Rn(512,512,(e,t,n)=>{e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255,255,255,.35)";for(let i=0;i<t;i+=64)for(let r=0;r<n;r+=64){let a=r/64%2?32:0;e.save(),e.translate(i+a+32,r+32),e.beginPath(),e.moveTo(0,-9),e.bezierCurveTo(7,-9,8,0,0,7),e.bezierCurveTo(-8,0,-7,-9,0,-9),e.fill(),e.restore()}})}function Sm(s){return Rn(512,384,(e,t,n)=>{let i=s>=21||s<6,r=s>=17&&s<21,a=s>=6&&s<9,o=e.createLinearGradient(0,0,0,n);if(i?(o.addColorStop(0,"#120a24"),o.addColorStop(1,"#3a1d3f")):r?(o.addColorStop(0,"#6b4fa0"),o.addColorStop(.55,"#f08a6c"),o.addColorStop(1,"#ffd29a")):a?(o.addColorStop(0,"#a7d3f2"),o.addColorStop(1,"#ffe2c9")):(o.addColorStop(0,"#8fc8f0"),o.addColorStop(1,"#e8f4ff")),e.fillStyle=o,e.fillRect(0,0,t,n),i){for(let l=0;l<70;l++)e.fillStyle=`rgba(255,240,220,${.4+Math.random()*.6})`,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.7,Math.random()*1.6+.4,0,7),e.fill();e.fillStyle="#fff4d6",e.beginPath(),e.arc(t*.75,n*.25,22,0,7),e.fill()}else e.fillStyle=r?"rgba(255,220,170,.9)":"rgba(255,250,220,.95)",e.beginPath(),e.arc(t*.72,r?n*.7:n*.28,r?34:26,0,7),e.fill(),e.fillStyle="rgba(255,255,255,.75)",[[.2,.3],[.45,.2],[.3,.45]].forEach(([l,c])=>{e.beginPath(),e.ellipse(t*l,n*c,46,14,0,0,7),e.fill()});e.fillStyle=i?"#1d1838":r?"#7a5a8c":"#5b9cc4",e.fillRect(0,n*.74,t,n*.26),e.fillStyle=i?"rgba(255,230,180,.35)":"rgba(255,255,255,.35)";for(let l=0;l<18;l++)e.fillRect(Math.random()*t,n*(.76+Math.random()*.2),18+Math.random()*30,2);e.fillStyle=i?"#120d22":r?"#4b3560":"#7d9db3",e.beginPath(),e.moveTo(0,n*.74);for(let l=0;l<=t;l+=32)e.lineTo(l,n*(.7+Math.sin(l*.03)*.02));e.lineTo(t,n*.74),e.fill()})}function Nd(){let s=new st,e=new ce(new wi([[0,0],[.14,0],[.17,.08],[.13,.26],[.09,.34],[.11,.38]].map(i=>new ue(i[0],i[1])),24),new Je({color:"#f4f1ec",roughness:.25}));e.castShadow=!0,s.add(e);let t=["#C9233F","#E8577A","#C9233F","#F7A8BE","#E8577A"],n=new Je({color:"#4E8B57",roughness:.8});return t.forEach((i,r)=>{let a=r/t.length*Math.PI*2,o=.05,l=.25+Math.random()*.15,c=.45+Math.random()*.12,u=new fs(new D(0,.3,0),new D(Math.cos(a)*o,.3+c*.6,Math.sin(a)*o),new D(Math.cos(a)*l*.5,.3+c,Math.sin(a)*l*.5));s.add(new ce(new Bs(u,8,.012,5),n));let d=new ce(new wi([[0,-.02],[.05,0],[.075,.06],[.07,.12],[.045,.16],[.05,.17]].map(f=>new ue(f[0],f[1])),16),new Je({color:i,roughness:.45,side:on}));d.position.copy(u.getPoint(1)),d.castShadow=!0,s.add(d)}),s}function AM(){let s=new st,e=new ce(new ct(.62,.14,.48),new Je({color:"#8a5a3c",roughness:.5}));e.position.y=.07,e.castShadow=!0,s.add(e);let t=new ce(new Ft(.19,.19,.015,32),new Je({color:"#1b1214",roughness:.25}));t.position.set(-.06,.15,0),s.add(t);let n=new ce(new Ft(.06,.06,.017,24),new Je({color:"#C9233F"}));n.position.copy(t.position),s.add(n);let i=new ce(new ct(.03,.03,.3),new Je({color:"#d9d2c8",metalness:.6,roughness:.3}));return i.position.set(.22,.17,-.02),i.rotation.y=.3,s.add(i),s.userData.plak=[t,n],s}function RM(s){let e=new st,t=new ce(new ct(.34,.26,.34),new Je({color:s,roughness:.45}));t.position.y=.13,t.castShadow=!0,e.add(t);let n=new Je({color:"#fff4d6",roughness:.4}),i=new ce(new ct(.36,.27,.06),n);i.position.y=.13,e.add(i);let r=new ce(new ct(.06,.27,.36),n);r.position.y=.13,e.add(r);let a=new st;a.position.y=.26,e.add(a);let o=new ce(new ct(.38,.06,.38),new Je({color:s,roughness:.45}));return o.position.y=.03,o.castShadow=!0,a.add(o),[-1,1].forEach(l=>{let c=new ce(new Gr(.06,.02,8,16),n);c.position.set(l*.05,.1,0),c.rotation.y=Math.PI/2,c.rotation.x=l*.6,a.add(c)}),e.userData.kapak=a,e}function CM(){let s=new st,e=new Je({color:"#d9a441",metalness:.85,roughness:.28}),t=new ce(new wi([[0,0],[.12,0],[.13,.03],[.1,.06],[.16,.14],[.17,.3],[.12,.42],[.07,.44],[.07,.48],[0,.48]].map(o=>new ue(o[0],o[1])),24),e);t.castShadow=!0,s.add(t);let n=new ce(new wi([[0,0],[.07,0],[.1,.05],[.09,.12],[.05,.15],[.05,.17],[0,.17]].map(o=>new ue(o[0],o[1])),18),new Je({color:"#fbf6ef",roughness:.3}));n.position.y=.48,n.castShadow=!0,s.add(n),[[-1,0],[1,0]].forEach(([o])=>{let l=new ce(new Gr(.05,.012,6,12,Math.PI),e);l.position.set(o*.17,.3,0),l.rotation.z=o*Math.PI/2,s.add(l)});let i=new ce(new Ft(.012,.012,.1,6),e);i.rotation.x=Math.PI/2,i.position.set(0,.12,.17),s.add(i);let r=new ce(new Ft(.32,.3,.62,20),new Je({color:"#8a5a3c",roughness:.6}));r.position.y=.31,r.castShadow=!0;let a=new st;return a.add(r),s.position.y=.62,a.add(s),a.userData.buhar=new D(0,1.3,0),a}function PM(){let s=new st,e=new ce(new wi([[0,0],[.035,0],[.032,.03],[.024,.06],[.032,.1],[.036,.11]].map(i=>new ue(i[0],i[1])),16),new Je({color:"#ffffff",transparent:!0,opacity:.35,roughness:.05})),t=new ce(new wi([[0,.005],[.032,.005],[.029,.03],[.022,.06],[.029,.092],[0,.092]].map(i=>new ue(i[0],i[1])),16),new Je({color:"#a8321a",transparent:!0,opacity:.85,roughness:.2})),n=new ce(new Ft(.06,.055,.01,18),new Je({color:"#C9233F",roughness:.4}));return s.add(n,t,e),s}function IM(){let s=new st,e=new Je({color:"#34131F",roughness:.4,metalness:.3}),t=new Je({color:"#d9a441",metalness:.8,roughness:.3});[0,2.09,4.19].forEach(r=>{let a=new ce(new Ft(.02,.025,1.05,6),e);a.position.set(Math.sin(r)*.22,.5,Math.cos(r)*.22),a.rotation.set(Math.cos(r)*.22,0,-Math.sin(r)*.22),a.castShadow=!0,s.add(a)});let n=new ce(new Ft(.07,.055,.9,16),t);n.position.set(0,1.15,.1),n.rotation.x=-1.05,n.castShadow=!0,s.add(n);let i=new ce(new Ft(.08,.08,.08,16),e);return i.position.set(0,1.42,.48),i.rotation.x=-1.05,s.add(i),s}function DM(){let s=new st,e=new ce(new Ft(.2,.15,.32,18),new Je({color:"#c9714a",roughness:.8}));e.position.y=.16,e.castShadow=!0,s.add(e);let t=Nd();return t.children[0].visible=!1,t.position.y=.06,t.scale.setScalar(1.3),s.add(t),s}function LM(s){let e=new st,t=new ce(new Ft(.035,.045,1.1,8),new Je({color:"#3a2a2e",roughness:.5}));t.position.y=.55,t.castShadow=!0,e.add(t);let n=new ce(new Hn(.11,16,12),new Je({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:s?2.2:.15}));if(n.position.y=1.16,e.add(n),s){let i=new ii("#ffcf7a",2.2,4,1.8);i.position.y=1.15,e.add(i)}return e}function kM(s){return Rn(2048,640,(e,t,n)=>{let i=s>=21||s<6,r=s>=17&&s<21,a=e.createLinearGradient(0,0,0,n);if(i?(a.addColorStop(0,"#0d0820"),a.addColorStop(.7,"#2c1838"),a.addColorStop(1,"#3a1d3f")):r?(a.addColorStop(0,"#5b4096"),a.addColorStop(.55,"#f08a6c"),a.addColorStop(1,"#ffd29a")):(a.addColorStop(0,"#7fbde9"),a.addColorStop(1,"#e6f3ff")),e.fillStyle=a,e.fillRect(0,0,t,n),i){for(let f=0;f<260;f++)e.fillStyle=`rgba(255,240,220,${.3+Math.random()*.7})`,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.55,Math.random()*1.8+.3,0,7),e.fill();e.fillStyle="#fff4d6",e.beginPath(),e.arc(t*.8,n*.18,30,0,7),e.fill()}else e.fillStyle=r?"rgba(255,214,160,.95)":"rgba(255,252,230,.95)",e.beginPath(),e.arc(t*.3,r?n*.62:n*.2,r?52:36,0,7),e.fill();let o=n*.78;e.fillStyle=i?"#16122b":r?"#7a5a8c":"#4f93bd",e.fillRect(0,o,t,n-o);let l=i?"#1a1128":r?"#3b2850":"#6f8ea6";e.fillStyle=l;let c=o-2;e.beginPath(),e.moveTo(0,c);for(let f=0;f<=t;f+=12)e.lineTo(f,c-18-Math.sin(f*.011)*10-Math.sin(f*.037)*6);e.lineTo(t,o),e.lineTo(0,o),e.fill();let u=(f,p,_)=>{e.beginPath(),e.arc(f,c-30,p,Math.PI,0),e.fill(),e.fillRect(f-p,c-30,p*2,30);for(let y of[-1,1])for(let b=0;b<_;b++){let m=f+y*(p+14+b*22);e.fillRect(m-3,c-30-p*1.9,6,p*1.9+30),e.beginPath(),e.moveTo(m-5,c-30-p*1.9),e.lineTo(m,c-30-p*2.3),e.lineTo(m+5,c-30-p*1.9),e.fill()}[-.55,.55].forEach(y=>{e.beginPath(),e.arc(f+y*p*1.3,c-22,p*.45,Math.PI,0),e.fill()})};u(t*.2,46,2),u(t*.44,34,1),u(t*.86,40,2);let d=t*.64;if(e.fillRect(d-16,c-150,32,150),e.beginPath(),e.moveTo(d-22,c-150),e.lineTo(d,c-210),e.lineTo(d+22,c-150),e.fill(),e.fillRect(d-22,c-156,44,10),e.strokeStyle=l,e.lineWidth=5,e.beginPath(),e.moveTo(t*.02,o-8),e.quadraticCurveTo(t*.12,o-60,t*.24,o-8),e.stroke(),i||r){for(let f=0;f<160;f++)e.fillStyle=`rgba(255,${200+Math.random()*40},140,${.5+Math.random()*.5})`,e.fillRect(Math.random()*t,c-8-Math.random()*40,2.4,2.4);for(let f=0;f<60;f++)e.fillStyle="rgba(255,214,150,.35)",e.fillRect(Math.random()*t,o+6+Math.random()*(n-o-10),10+Math.random()*30,2)}else{e.fillStyle="rgba(255,255,255,.4)";for(let f=0;f<30;f++)e.fillRect(Math.random()*t,o+6+Math.random()*(n-o-10),14+Math.random()*30,2)}e.fillStyle=i?"#2a1d3a":"#fffaf6",e.beginPath(),e.moveTo(t*.53,o+26),e.lineTo(t*.6,o+26),e.lineTo(t*.595,o+36),e.lineTo(t*.535,o+36),e.fill(),e.fillRect(t*.555,o+14,18,12)})}async function wm(s){var uf,df;let e=s.el,t=(s.me||"misafir").toLowerCase(),n=s.names||{},i=s.sb||null,r=h=>(n[h]||"").toLocaleLowerCase("tr")==="beyza"?"B":n[h]?"A":null,a=r(t)||"A",o={A:"Ahmet",B:"Beyza"},l=new El({antialias:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(2,devicePixelRatio||1)),l.shadowMap.enabled=!0,l.shadowMap.type=ui,l.outputColorSpace=an,l.toneMapping=Ja,l.toneMappingExposure=EM()?1:.92,e.append(l.domElement);let c=new Ur,u=(uf=window.__leSaat)!=null?uf:Em(),d=u>=21||u<6,f=u>=17&&u<21;c.background=new tt(d?"#2a1420":"#FDF1F3"),document.body.classList.toggle("le-gece",d),document.body.style.background=d?"#2a1420":"#FDF1F3",c.fog=new wl(c.background,24,44);let p=new dn(32,1,.1,100);p.position.set(11.5,12.5,15.5);let _=new rc(p,l.domElement);_.target.set(0,.6,1.6),_.enablePan=!1,_.enableDamping=!0,_.dampingFactor=.08,_.minDistance=4,_.maxDistance=26,_.minPolarAngle=.55,_.maxPolarAngle=1.2,_.minAzimuthAngle=-.15,_.maxAzimuthAngle=1.55,_.rotateSpeed=.6;let y=new kr(l);c.environment=y.fromScene(new ac,.04).texture,c.environmentIntensity=d?.2:f?.3:.35;let b=new Wl(d?"#8d7bb8":"#fff4f0",d?"#3a2030":"#e9c9b8",d?.6:.45);c.add(b);let m=new Gs(d?"#9db0ff":f?"#ffb27a":"#fff1de",d?.35:f?1.5:1.75);{let h=Math.max(6,Math.min(20,u)),g=(h-6)/14;m.position.set(-7+g*12,d?9:4+Math.sin(g*Math.PI)*7,-7)}m.target.position.set(0,0,1.6),c.add(m.target),m.castShadow=!0,m.shadow.mapSize.set(2048,2048),m.shadow.bias=-4e-4,m.shadow.normalBias=.03,m.shadow.radius=5,m.shadow.blurSamples=12,Object.assign(m.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:40}),c.add(m);let w=new Gs("#ffe6ee",d?.2:.5);w.position.set(8,6,6),c.add(w);let v=new ii("#ffc98a",0,7,1.6);v.castShadow=!0,v.shadow.mapSize.set(512,512),c.add(v);let E=new Hs;function O(h,g=1,x=1,S=0){let R=E.load(s.base+"doku/"+h+".webp?v=1");return R.colorSpace=an,R.wrapS=R.wrapT=ln,R.anisotropy=8,R.repeat.set(g,x),R.channel=S,R}let L={ahsap:{tile:.9,mat:()=>({map:O("ahsap",1,1,1),roughness:.55})},kumas:{tile:.45,mat:()=>({map:O("kumas",1,1,1),roughness:.95})},yastik:{tile:.5,mat:()=>({map:O("hali",1,1,1),roughness:.95})},hali:{tile:1.6,mat:()=>({map:O("hali",1,1,1),roughness:1})},mermer:{tile:1.2,mat:()=>({map:O("mermer",1,1,1),roughness:.22})},beyaz:{tile:1,mat:()=>({color:"#f3f1ec",roughness:.35})},inoks:{tile:1,mat:()=>({color:"#e4e6e6",metalness:.45,roughness:.3})},pirinc:{tile:1,mat:()=>({color:"#c8a46a",metalness:.8,roughness:.35})}},k={},z=h=>k[h]||(k[h]=new Je(Object.assign({metalness:0},L[h].mat()))),ie=/^(couch|couch_pillows|armchair|armchair_pillows|chair_A|chair_B|chair_C|chair_stool)$/;function M(h){if(/^rug_/.test(h))return()=>"hali";if(/^m_kitchen(counter|cabinet)/.test(h))return(x,S)=>S>=13?x===13?"mermer":x===12?"pirinc":x===10||x>=14?"beyaz":null:null;if(/^m_fridge/.test(h))return(x,S)=>(x===4||x===5)&&S>=4&&S<=6?"inoks":null;if(/^m_(table_round|chair)/.test(h))return(x,S)=>x>=12&&x<=13&&(S<=3||S>=12&&S<=14)?"ahsap":null;if(h.startsWith("m_"))return null;let g=ie.test(h);return(x,S,R)=>S<=3&&x<=9?"ahsap":S<=3&&(x===10||x===11)?"beyaz":g&&S>=4&&S<=7&&x<=7?(x<=3?"O":"B")===R?"kumas":"yastik":null}function A(h){let g=M(h.name);if(!g)return;h.updateMatrixWorld(!0);let x=new ot().copy(h.matrixWorld).invert();h.traverse(S=>{if(!S.isMesh||S.userData.dokulu||Array.isArray(S.material))return;S.userData.dokulu=!0;let R=S.geometry,N=R.attributes.uv,V=R.attributes.position,W=R.attributes.normal;if(!N||!W)return;let _e=R.index?Array.from(R.index.array):[...Array(V.count).keys()],ve=_e.length,Ie=Ze=>[Math.floor(N.getX(Ze)*16),Math.floor(N.getY(Ze)*16)],qe=0,dt=0;for(let Ze=0;Ze<ve;Ze+=3){let[Wt,kt]=Ie(_e[Ze]);kt>=4&&kt<=7&&Wt<=7&&(Wt<=3?qe++:dt++)}let et=qe>=dt?"O":"B",gt=[];for(let Ze=0;Ze<ve;Ze+=3){let[Wt,kt]=Ie(_e[Ze]);gt.push(g(Wt,kt,et))}let St=[...new Set(gt.filter(Boolean))];if(!St.length)return;let Fe=new ot().multiplyMatrices(x,S.matrixWorld),Ye=new xt().getNormalMatrix(Fe),rt=new Float32Array(V.count*2),Et=new D,_t=new D,wt=new Array(V.count);for(let Ze=0;Ze<ve;Ze+=3){let Wt=gt[Ze/3];if(Wt)for(let kt=0;kt<3;kt++)wt[_e[Ze+kt]]=Wt}for(let Ze=0;Ze<V.count;Ze++){if(!wt[Ze])continue;let Wt=L[wt[Ze]].tile;Et.fromBufferAttribute(V,Ze).applyMatrix4(Fe),_t.fromBufferAttribute(W,Ze).applyMatrix3(Ye);let kt=Math.abs(_t.x),rn=Math.abs(_t.y),cn=Math.abs(_t.z),Ci,ws;rn>=kt&&rn>=cn?(Ci=Et.x,ws=Et.z):kt>=cn?(Ci=Et.z,ws=Et.y):(Ci=Et.x,ws=Et.y),rt[Ze*2]=Ci/Wt,rt[Ze*2+1]=ws/Wt}let ft=R.clone();ft.setAttribute("uv1",new Jt(rt,2));let Tt=[null,...St],Ut=[];ft.clearGroups(),Tt.forEach((Ze,Wt)=>{let kt=Ut.length;for(let rn=0;rn<ve;rn+=3)gt[rn/3]===Ze&&Ut.push(_e[rn],_e[rn+1],_e[rn+2]);Ut.length>kt&&ft.addGroup(kt,Ut.length-kt,Wt)}),ft.setIndex(Ut),S.geometry=ft,S.material=[S.material,...St.map(z)]})}let Y=ym({dokuYukle:O,canvasTex:Rn}),K=O("parke",Ne.w/1.8,Ne.d/1.8),J=new ce(new ct(Ne.w,.2,Ne.d),new Je({map:K,roughness:.5,metalness:0}));J.position.y=-.1,J.receiveShadow=!0,J.name="zemin",c.add(J);let de=new Je({roughness:.9}),Z=3.2,ye=new ce(new ct(Ne.w+.3,Z,.3),de.clone());ye.material.map=O("duvar",(Ne.w+.3)/2.2,Z/2.2),ye.position.set(0,Z/2-.2,-Ne.d/2-.15),ye.receiveShadow=!0,c.add(ye);let oe=new ce(new ct(.3,Z,Ne.d),de.clone());oe.material.map=O("duvar",Ne.d/2.2,Z/2.2),oe.position.set(-Ne.w/2-.15,Z/2-.2,0),oe.receiveShadow=!0,c.add(oe);let G=new Je({color:"#fffaf6",roughness:.6}),F=new ce(new ct(Ne.w,.16,.06),G);F.position.set(0,.08,-Ne.d/2+.03),c.add(F);let $=new ce(new ct(.06,.16,Ne.d),G);$.position.set(-Ne.w/2+.03,.08,0),c.add($);{let h=new ce(new ct(Ne.w+.3,.12,.14),G);h.position.set(0,Z-.26,-Ne.d/2+.02),c.add(h);let g=new ce(new ct(.14,.12,Ne.d),G);g.position.set(-Ne.w/2+.02,Z-.26,0),c.add(g)}let le=new st;le.position.set(1.2,1.55,-Ne.d/2+.02),c.add(le);let ge=new ce(new wn(2.2,1.5),new jt({map:Sm(u)}));le.add(ge);let B=new Je({color:"#ffffff",roughness:.5});[[0,.78,2.4,.1],[0,-.78,2.5,.14],[-1.15,0,.1,1.66],[1.15,0,.1,1.66],[0,0,.06,1.5],[0,0,2.2,.06]].forEach(([h,g,x,S])=>{let R=new ce(new ct(x,S,.1),B);R.position.set(h,g,.03),R.castShadow=!0,le.add(R)});let U=[],ee=new Je({color:"#e6dccd",roughness:.95,side:on});[-1.45,1.45].forEach(h=>{let g=new ce(new Ft(.16,.22,2.1,10,1,!0,0,Math.PI),ee);g.position.set(h,-.15,.12),g.rotation.y=Math.PI,g.castShadow=!0,U.push(g),le.add(g)});let Q=new ce(new ct(.08,2.2,1.1),new Je({color:"#9b6a4a",roughness:.6}));Q.position.set(-Ne.w/2+.05,1.1,2.2),c.add(Q);let fe=new ce(new Hn(.05,12,12),new Je({color:"#e6c36a",metalness:.8,roughness:.3}));fe.position.set(-Ne.w/2+.12,1.05,1.8),c.add(fe);let be=Rn(64,256,(h,g,x)=>{let S=h.createLinearGradient(0,0,0,x);S.addColorStop(0,"rgba(255,236,200,.9)"),S.addColorStop(1,"rgba(255,236,200,0)"),h.fillStyle=S,h.fillRect(0,0,g,x)}),Te=new ce(new wn(2.1,3.4),new jt({map:be,transparent:!0,opacity:d?.05:f?.2:.13,blending:ks,depthWrite:!1,side:on,color:f?"#ffb27a":d?"#9db0ff":"#fff1de"}));Te.position.set(1.2,1,-Ne.d/2+1.3),Te.rotation.x=-.75,c.add(Te);let De=70,re=new Kt,I=new Float32Array(De*3);for(let h=0;h<De;h++)I[h*3]=.2+Math.random()*2,I[h*3+1]=.3+Math.random()*2.2,I[h*3+2]=-Ne.d/2+.3+Math.random()*2.2;re.setAttribute("position",new Jt(I,3)),c.add(new Br(re,new Fs({color:d?"#c9d4ff":"#fff3dc",size:.035,transparent:!0,opacity:d?.35:.7,depthWrite:!1,blending:ks})));let Ae=new nc;Ae.setMeshoptDecoder(mm);let we={"ahmet3.glb?v=1":"ahmet.glb?v=2","beyza3.glb?v=1":"beyza.glb?v=2"},[Me,Ce,We]=await Promise.all(["mobilya.glb?v=3","ahmet3.glb?v=1","beyza3.glb?v=1"].map(h=>Ae.loadAsync(s.base+h).catch(g=>we[h]?Ae.loadAsync(s.base+we[h]):Promise.reject(g)))),Se={};Me.scene.children.slice().forEach(h=>{Se[h.name]=h,A(h),h.scale.multiplyScalar(MM)});let P=Ne.d/2,T=Ne.d/2+3.6,j=[{id:"salon",ad:"Salon",em:"\u{1F6CB}\uFE0F",ox:0,fiyat:0},{id:"yatak",ad:"Yatak odas\u0131",em:"\u{1F6CF}\uFE0F",ox:40,fiyat:150,duvar:"#E6DDF6",yer:"yatak odas\u0131nda"},{id:"mutfak",ad:"Mutfak",em:"\u{1F373}",ox:80,fiyat:200,duvar:"#FFF0D9",yer:"mutfakta"},{id:"teras",ad:"Teras",em:"\u{1F319}",ox:120,fiyat:250,yer:"terasta"}];j[0].yer="salonda";let te=h=>j.find(g=>Math.abs(h-g.ox)<20)||j[0],me={x0:-Ne.w/2,x1:120+Ne.w/2,z0:-Ne.d/2,z1:T},pe=new Set,ze=(h,g=0)=>({act:"otur",yerler:h,yon:g}),Pe={...Y.KAT,kanvas_foto:["\u{1F5BC}\uFE0F","B\xFCy\xFCk kanvas foto\u011Fraf\u0131m\u0131z",45,"Bizim",{act:"foto",asili:!0,zemin:!0,kucuk:!0}],polaroid_ip:["\u{1F4F8}","Polaroid ipi (5 foto\u011Fraf)",40,"Bizim",{act:"foto",asili:!0,zemin:!0,kucuk:!0}],tarih_cerceve:["\u{1F4C5}","26 Ocak \xE7er\xE7evesi",25,"Bizim",{asili:!0,zemin:!0,kucuk:!0}],harita_cerceve:["\u{1F5FA}\uFE0F","Bizim \u0130stanbul haritas\u0131",30,"Bizim",{asili:!0,zemin:!0,kucuk:!0}],plak_duvar:["\u{1F4BF}","Bizim \u015Fark\u0131m\u0131z pla\u011F\u0131",25,"Bizim",{act:"muzik",asili:!0,zemin:!0,kucuk:!0}],harf_yastik:["\u{1F171}\uFE0F","B & A minderleri",30,"Bizim",{act:"yer",yerler:[[-.45,0],[.45,0]],yon:0}],kupa_sehpa:["\u2615","\u0130simli kupalar",30,"Bizim",{}],paspas:["\u{1F6AA}",'"Bizim Ev" paspas\u0131',15,"Bizim",{zemin:!0}],mum_set:["\u{1F56F}\uFE0F","Mum tepsisi",20,"Bizim",{kucuk:!0}],balon_kalp:["\u{1F388}","Kalp balonlar",20,"Bizim",{kucuk:!0,zemin:!0}],lale_buket:["\u{1F490}","B\xFCy\xFCk lale buketi",35,"Bizim",{kucuk:!0}],couch_pillows:["\u{1F6CB}\uFE0F","Yast\u0131kl\u0131 koltuk",120,"Oturma",ze([[-.55,.2],[.55,.2]])],couch:["\u{1F6CB}\uFE0F","Sade koltuk",90,"Oturma",ze([[-.55,.2],[.55,.2]])],armchair_pillows:["\u{1F4BA}","Yast\u0131kl\u0131 berjer",60,"Oturma",ze([[0,.2]])],armchair:["\u{1F4BA}","Berjer",45,"Oturma",ze([[0,.2]])],chair_A_wood:["\u{1FA91}","Ah\u015Fap sandalye",20,"Oturma",ze([[0,.02]])],chair_A:["\u{1FA91}","Sandalye",20,"Oturma",ze([[0,.02]])],chair_B_wood:["\u{1FA91}","Oval ah\u015Fap sandalye",25,"Oturma",ze([[0,.02]])],chair_B:["\u{1FA91}","Oval sandalye",25,"Oturma",ze([[0,.02]])],chair_C:["\u{1FA91}","Modern sandalye",30,"Oturma",ze([[0,.02]])],chair_stool_wood:["\u{1FAB5}","Ah\u015Fap tabure",12,"Oturma",ze([[0,0]])],chair_stool:["\u{1FAB5}","Tabure",12,"Oturma",ze([[0,0]])],pillow_A:["\u{1F7EA}","Yer minderi",10,"Oturma",{act:"yer",yerler:[[0,0]],yon:0}],pillow_B:["\u{1F7E6}","Yer minderi (mavi)",10,"Oturma",{act:"yer",yerler:[[0,0]],yon:0}],bed_double_A:["\u{1F6CF}\uFE0F","\xC7ift ki\u015Filik yatak",150,"Yatak",{act:"yat",yerler:[[-.45,-.15],[.45,-.15]],yon:0}],bed_double_B:["\u{1F6CF}\uFE0F","\xC7ift ki\u015Filik yatak (B)",150,"Yatak",{act:"yat",yerler:[[-.45,-.15],[.45,-.15]],yon:0}],bed_single_A:["\u{1F6CF}\uFE0F","Tek ki\u015Filik yatak",80,"Yatak",{act:"yat",yerler:[[0,-.15]],yon:0}],bed_single_B:["\u{1F6CF}\uFE0F","Tek ki\u015Filik yatak (B)",80,"Yatak",{act:"yat",yerler:[[0,-.15]],yon:0}],sehpa_lale:["\u{1F337}","Laleli sehpa",40,"Masa",{}],table_low:["\u{1F7EB}","Sehpa",30,"Masa",{}],table_small:["\u{1F7EB}","K\xFC\xE7\xFCk masa",25,"Masa",{}],table_medium:["\u{1F37D}\uFE0F","Yemek masas\u0131",50,"Masa",{}],table_medium_long:["\u{1F37D}\uFE0F","Uzun masa",70,"Masa",{}],shelf_B_large_decorated:["\u{1F4DA}","Dolu kitapl\u0131k",90,"Depolama",{}],shelf_B_small_decorated:["\u{1F4DA}","K\xFC\xE7\xFCk kitapl\u0131k",45,"Depolama",{}],shelf_A_big:["\u{1F5C4}\uFE0F","B\xFCy\xFCk raf",60,"Depolama",{}],shelf_A_small:["\u{1F5C4}\uFE0F","K\xFC\xE7\xFCk raf",30,"Depolama",{}],cabinet_medium_decorated:["\u{1F5C3}\uFE0F","Dolap",60,"Depolama",{}],cabinet_small_decorated:["\u{1F5C3}\uFE0F","Komodin",35,"Depolama",{}],lamp_standing:["\u{1F4A1}","Lambader",35,"S\xFCs",{act:"lamba"}],pikap:["\u{1F3B5}","Pikap",50,"S\xFCs",{act:"muzik"}],pictureframe_standing_A:["\u{1F5BC}\uFE0F","Ayakl\u0131 \xE7er\xE7eve",15,"S\xFCs",{act:"foto"}],pictureframe_standing_B:["\u{1F5BC}\uFE0F","Ayakl\u0131 \xE7er\xE7eve (B)",15,"S\xFCs",{act:"foto"}],book_set:["\u{1F4D6}","Kitap y\u0131\u011F\u0131n\u0131",8,"S\xFCs",{}],cactus_medium_A:["\u{1F335}","Kakt\xFCs",15,"Bitki",{}],cactus_medium_B:["\u{1F335}","Kakt\xFCs (B)",15,"Bitki",{}],cactus_small_A:["\u{1F335}","Minik kakt\xFCs",10,"Bitki",{}],cactus_small_B:["\u{1F335}","Minik kakt\xFCs (B)",10,"Bitki",{}],rug_rectangle_stripes_A:["\u{1F7E5}","\xC7izgili hal\u0131",40,"Hal\u0131",{zemin:!0}],rug_rectangle_stripes_B:["\u{1F7E5}","\xC7izgili hal\u0131 (B)",40,"Hal\u0131",{zemin:!0}],rug_rectangle_A:["\u{1F7E7}","Hal\u0131",35,"Hal\u0131",{zemin:!0}],rug_rectangle_B:["\u{1F7E7}","Hal\u0131 (B)",35,"Hal\u0131",{zemin:!0}],rug_oval_A:["\u{1F7E3}","Oval hal\u0131",35,"Hal\u0131",{zemin:!0}],rug_oval_B:["\u{1F7E3}","Oval hal\u0131 (B)",35,"Hal\u0131",{zemin:!0}],m_fridge_A_decorated:["\u{1F9CA}","Buzdolab\u0131",80,"Mutfak",{act:"buzdolabi",s:.8}],m_fridge_B:["\u{1F9CA}","Sade buzdolab\u0131",70,"Mutfak",{act:"buzdolabi",s:.8}],ocak:["\u{1F525}","Ocak",70,"Mutfak",{act:"pisir"}],m_kitchencounter_sink_backsplash:["\u{1F6B0}","Eviye",50,"Mutfak",{s:.8}],m_kitchencounter_straight_A_decorated:["\u{1F9C2}","Dolu tezg\xE2h",45,"Mutfak",{s:.8}],m_kitchencounter_straight_B_backsplash:["\u{1F7EB}","Tezg\xE2h",35,"Mutfak",{s:.8}],m_kitchencounter_straight_A_backsplash:["\u{1F7EB}","Tezg\xE2h (A)",35,"Mutfak",{s:.8}],m_kitchencabinet:["\u{1F5C4}\uFE0F","\xDCst dolap",30,"Mutfak",{s:.8,duvar:!0,zemin:!0}],semaver:["\u{1FAD6}","Semaver",30,"Mutfak",{act:"cay"}],m_table_round_A_small:["\u{1F37D}\uFE0F","Yuvarlak masa",45,"Mutfak",{s:.75,masa:!0}],m_dishrack_plates:["\u{1F37D}\uFE0F","Tabakl\u0131k",15,"Mutfak",{s:.6}],m_crate_tomatoes:["\u{1F345}","Domates kasas\u0131",12,"Mutfak",{s:.4}],m_crate_onions:["\u{1F9C5}","So\u011Fan kasas\u0131",12,"Mutfak",{s:.4}],teleskop:["\u{1F52D}","Teleskop",60,"Teras",{act:"yildiz"}],saksi_lale:["\u{1F337}","Saks\u0131da lale",20,"Bitki",{}],fener_ayak:["\u{1F3EE}","Ayakl\u0131 fener",25,"Teras",{}]},Ge={yatak:[["bed_double_B",0,-1.9,0],["cabinet_small_decorated",-2.05,-2.9,0],["cabinet_small_decorated",2.05,-2.9,0],["lamp_standing",3.4,-2.9,0],["rug_oval_B",0,.6,0],["armchair_pillows",3.3,.9,-Math.PI/2],["shelf_B_small_decorated",-4.15,-.6,Math.PI/2],["pillow_A",-2.4,1.6,0],["pillow_B",-1.6,2.1,0],["cactus_medium_B",4,2.9,0],["saksi_lale",-3.9,2.9,0],["pictureframe_standing_B",3.9,-1.6,-Math.PI/2]],mutfak:[["m_fridge_A_decorated",-3.55,-2.7,0],["m_kitchencounter_sink_backsplash",-1.95,-2.75,0],["m_kitchencounter_straight_A_decorated",-.35,-2.75,0],["ocak",1.25,-2.75,0],["m_kitchencounter_straight_B_backsplash",2.85,-2.75,0],["m_kitchencabinet",-1.95,-3.5,0],["m_kitchencabinet",-.35,-3.5,0],["m_kitchencabinet",2.85,-3.5,0],["semaver",3.85,-1.2,-Math.PI/2],["m_table_round_A_small",.6,.9,0],["chair_A_wood",.6,1.75,Math.PI],["chair_A_wood",.6,.05,0],["rug_rectangle_B",.6,.9,0],["m_crate_tomatoes",-3.9,1.6,0],["m_crate_onions",-3.9,2.6,0],["cactus_small_A",3.95,2.9,0]],teras:[["rug_rectangle_stripes_B",0,.3,0],["m_table_round_A_small",0,.2,0],["chair_B_wood",0,1.05,Math.PI],["chair_B_wood",0,-.65,0],["teleskop",3,-2.2,-.6],["saksi_lale",-3.6,-2.8,0],["saksi_lale",-2.6,-2.95,0],["cactus_medium_A",3.9,2.8,0],["fener_ayak",-3.8,2.6,0],["fener_ayak",3.9,-.2,0],["pillow_A",-2,1.8,0],["pillow_B",-1.2,2.3,0]]},bt=()=>({v:1,harcanan:0,toplanan:0,depo:[],hediyeler:[],bahce:Array.from({length:8},()=>({})),esyalar:[{id:"e1",t:"rug_rectangle_stripes_A",x:.6,z:.7,r:0},{id:"e2",t:"rug_oval_A",x:-2.6,z:-1.6,r:0},{id:"e3",t:"couch_pillows",x:.6,z:-1.95,r:0},{id:"e4",t:"sehpa_lale",x:.6,z:.55,r:0},{id:"e5",t:"armchair_pillows",x:3.25,z:.3,r:-Math.PI/2},{id:"e6",t:"bed_double_A",x:-2.9,z:-1.9,r:0},{id:"e7",t:"shelf_B_large_decorated",x:-4.15,z:.6,r:Math.PI/2},{id:"e8",t:"lamp_standing",x:2.9,z:-2.9,r:0},{id:"e9",t:"cabinet_medium_decorated",x:3.6,z:-2.95,r:0},{id:"e10",t:"pikap",x:-1.2,z:-3,r:0},{id:"e11",t:"cactus_medium_A",x:3.95,z:2.9,r:0},{id:"e12",t:"cactus_small_B",x:4.05,z:1.7,r:0},{id:"e13",t:"table_medium",x:-2.5,z:2.3,r:0},{id:"e14",t:"chair_A_wood",x:-2.5,z:1.3,r:0},{id:"e15",t:"chair_A_wood",x:-2.5,z:3.3,r:Math.PI}]}),Ee=(window.__MANIFEST||[]).filter(h=>h.kind!=="video"&&/\.(jpe?g|png|webp)\.bin$/i.test(h.src||"")),Ve=new Hs,ht=(df=window.__leFotoBas)!=null?df:Math.floor(Math.random()*Math.max(1,Ee.length));async function lt(h){if(!Ee.length||!s.decUrl)return;let g=Ee[ht++%Ee.length];try{let x=await s.decUrl(String(g.src).replace(/^enc:/,""));Ve.load(x,S=>{S.colorSpace=an;let R=h.userData.oran||1,N=S.image.width/S.image.height;S.repeat.set(Math.min(1,R/N),Math.min(1,N/R)),S.offset.set((1-S.repeat.x)/2,(1-S.repeat.y)/2),h.material.map&&h.material.map.dispose(),h.material.map=S,h.material.color.set("#ffffff"),h.material.needsUpdate=!0,h.userData.tarih=g.date})}catch{}}function Ke(h){h.updateMatrixWorld(!0);let g=new ot().copy(h.matrixWorld).invert(),x=new gn().setFromObject(h).applyMatrix4(g),S=x.getSize(new D),R=x.getCenter(new D),N=S.x<S.z?"x":"z",V=N==="x"?S.z:S.x,W=S.y,_e=new ce(new wn(V*.72,W*.72),new Je({color:"#f3e3e7",roughness:.55}));return _e.userData.oran=V/W,N==="x"?(_e.position.set(x.max.x+.004,R.y,R.z),_e.rotation.y=Math.PI/2):_e.position.set(R.x,R.y,x.max.z+.004),h.add(_e),h.userData.foto=_e,lt(_e),_e}function yt(h,g,x,S,R){let N=Se[h].clone(!0);return N.position.set(g,R,x),N.rotation.y=S,N.traverse(V=>{V.isMesh&&(V.castShadow=!0)}),c.add(N),N}let at=[yt("pictureframe_large_A",-1,-Ne.d/2+.1,0,1.5),yt("pictureframe_medium",-Ne.w/2+.1,-.4,Math.PI/2,1.5),yt("pictureframe_small_A",-2,-Ne.d/2+.1,0,1.75),yt("pictureframe_small_B",-Ne.w/2+.1,.6,Math.PI/2,2.15)].filter(Boolean);at.forEach(h=>{Ke(h),h.userData.act="foto",h.userData.id="duvar"+at.indexOf(h),h.userData.ad=h.userData.id});let pt=h=>h==="salon"||!!(ae&&ae.odalar&&ae.odalar[h]),H=[];Q.userData={act:"kapi",id:"kapi-salon",ad:"kapi-salon"},H.push(Q);function Be(h){return Rn(512,512,(g,x,S)=>{if(h==="mutfak"){let N=x/8;for(let V=0;V<8;V++)for(let W=0;W<8;W++)g.fillStyle=(V+W)%2?"#f5ebe0":"#d97b5f",g.fillRect(V*N,W*N,N,N);g.strokeStyle="rgba(0,0,0,.08)",g.lineWidth=2;for(let V=0;V<=8;V++)g.beginPath(),g.moveTo(V*N,0),g.lineTo(V*N,S),g.stroke(),g.beginPath(),g.moveTo(0,V*N),g.lineTo(x,V*N),g.stroke()}else if(h==="teras"){let N=S/10;for(let V=0;V<10;V++){g.fillStyle=`hsl(25,${32+Math.random()*8}%,${52+Math.random()*8}%)`,g.fillRect(0,V*N,x,N-4),g.fillStyle="rgba(60,30,20,.35)",g.fillRect(0,V*N+N-4,x,4);for(let W=0;W<6;W++)g.fillStyle="rgba(90,50,30,.15)",g.fillRect(Math.random()*x,V*N+Math.random()*N,40+Math.random()*80,1.5)}}else{g.fillStyle="#efe4dc",g.fillRect(0,0,x,S);for(let R=0;R<5e3;R++)g.fillStyle=`rgba(${150+Math.random()*60},${120+Math.random()*50},${150+Math.random()*60},.12)`,g.fillRect(Math.random()*x,Math.random()*S,2,2)}})}function he(h){if(h.kuruldu||h.id==="salon"){h.kuruldu=!0;return}h.kuruldu=!0;let g=new st;g.position.x=h.ox,c.add(g),h.g=g;let x;h.id==="mutfak"?x=O("mzemin",Ne.w/2.4,Ne.d/2.4):(x=Be(h.id),x.wrapS=x.wrapT=ln,x.repeat.set(1.6,1.3));let S=new ce(new ct(Ne.w,.2,Ne.d),new Je({map:x,roughness:h.id==="mutfak"?.35:.8}));if(S.position.y=-.1,S.receiveShadow=!0,g.add(S),pe.add(S),h.id!=="teras"){let R=TM(h.duvar);R.wrapS=R.wrapT=ln;let N=h.id==="mutfak"?3.4:Z,V=h.id==="mutfak",W=new ce(new ct(Ne.w+.3,N,.3),new Je({map:V?O("fayans",(Ne.w+.3)/1.4,N/1.4):R,roughness:V?.25:.9}));V||W.material.map.repeat.set(3,1.1),W.position.set(0,N/2-.2,-Ne.d/2-.15),W.receiveShadow=!0,g.add(W);let _e=R.clone();_e.repeat.set(2.4,1.1),_e.needsUpdate=!0;let ve=new ce(new ct(.3,N,Ne.d),new Je({map:V?O("fayans",Ne.d/1.4,N/1.4):_e,roughness:V?.25:.9}));ve.position.set(-Ne.w/2-.15,N/2-.2,0),ve.receiveShadow=!0,g.add(ve),[[Ne.w,.16,.06,0,.08,-Ne.d/2+.03],[.06,.16,Ne.d,-Ne.w/2+.03,.08,0],[Ne.w+.3,.12,.14,0,N-.26,-Ne.d/2+.02],[.14,.12,Ne.d,-Ne.w/2+.02,N-.26,0]].forEach(([gt,St,Fe,Ye,rt,Et])=>{let _t=new ce(new ct(gt,St,Fe),G);_t.position.set(Ye,rt,Et),g.add(_t)});let Ie=new st;g.add(Ie),h.id==="mutfak"?(Ie.position.set(-Ne.w/2+.02,1.6,-.4),Ie.rotation.y=Math.PI/2):Ie.position.set(2.6,1.7,-Ne.d/2+.02),Ie.add(new ce(new wn(1.8,1.3),new jt({map:Sm(u)}))),[[0,.68,2,.1],[0,-.68,2.1,.14],[-.95,0,.1,1.46],[.95,0,.1,1.46],[0,0,.06,1.3]].forEach(([gt,St,Fe,Ye])=>{let rt=new ce(new ct(Fe,Ye,.1),B);rt.position.set(gt,St,.03),Ie.add(rt)});let qe=new Je({color:h.id==="yatak"?"#9C7BD3":"#ddd2c0",roughness:.9,side:on});[-1.2,1.2].forEach(gt=>{let St=new ce(new Ft(.14,.2,1.8,10,1,!0,0,Math.PI),qe);St.position.set(gt,-.1,.12),St.rotation.y=Math.PI,U.push(St),Ie.add(St)});let dt=new ce(new ct(.08,2.2,1.1),new Je({color:"#9b6a4a",roughness:.6}));dt.position.set(h.ox-Ne.w/2+.05,1.1,2.2),c.add(dt),dt.userData={act:"kapi",id:"kapi-"+h.id,ad:"kapi-"+h.id},H.push(dt);let et=fe.clone();et.position.x=h.ox-Ne.w/2+.12,c.add(et),h.id==="yatak"&&[[-.75,2.05,"pictureframe_medium"],[.75,2.05,"pictureframe_medium"]].forEach(([gt,St,Fe])=>{let Ye=Se[Fe].clone(!0);Ye.position.set(h.ox+gt,St,-Ne.d/2+.1),c.add(Ye),Ke(Ye),Ye.userData.act="foto",Ye.userData.id="duvar-y"+gt,Ye.userData.ad=Ye.userData.id,at.push(Ye)})}else{let R=new Je({color:"#8a5a3c",roughness:.6}),N=new Je({color:"#cfe8ff",transparent:!0,opacity:.22,roughness:.05}),V=(gt,St,Fe,Ye)=>{let rt=Math.hypot(Fe-gt,Ye-St),Et=Math.atan2(Fe-gt,Ye-St),_t=Math.round(rt/1.1);for(let Tt=0;Tt<=_t;Tt++){let Ut=new ce(new ct(.08,1,.08),R);Ut.position.set(gt+(Fe-gt)*Tt/_t,.5,St+(Ye-St)*Tt/_t),Ut.castShadow=!0,g.add(Ut)}let wt=new ce(new ct(.1,.08,rt),R);wt.position.set((gt+Fe)/2,1.02,(St+Ye)/2),wt.rotation.y=Et,g.add(wt);let ft=new ce(new ct(.02,.8,rt),N);ft.position.set((gt+Fe)/2,.5,(St+Ye)/2),ft.rotation.y=Et,g.add(ft)};V(-Ne.w/2+.05,-Ne.d/2+.05,Ne.w/2-.05,-Ne.d/2+.05),V(-Ne.w/2+.05,-Ne.d/2+.05,-Ne.w/2+.05,1.3);let W=kM(u),_e=new ce(new wn(52,20),new jt({map:W,fog:!1}));_e.position.set(4,-.2,-15),g.add(_e);let ve=new ce(new wn(46,20),new jt({map:W,fog:!1}));ve.position.set(-17,-.2,4),ve.rotation.y=Math.PI/2,g.add(ve);let Ie=new st;Ie.position.set(-Ne.w/2+.1,0,2.4),g.add(Ie),[[0,1.15,-.6,.1,2.3,.1],[0,1.15,.6,.1,2.3,.1],[0,2.3,0,.1,.1,1.3]].forEach(([gt,St,Fe,Ye,rt,Et])=>{let _t=new ce(new ct(Ye,rt,Et),R);_t.position.set(gt,St,Fe),Ie.add(_t)});let qe=new ce(new ct(.06,2.2,1.1),new Je({color:"#cfe8ff",transparent:!0,opacity:.35}));qe.position.set(h.ox-Ne.w/2+.1,1.1,2.4),c.add(qe),qe.userData={act:"kapi",id:"kapi-teras",ad:"kapi-teras"},H.push(qe);let dt=(gt,St)=>{let Fe=new ce(new Ft(.04,.05,2.6,8),R);Fe.position.set(gt,1.3,St),Fe.castShadow=!0,g.add(Fe)},et=(gt,St)=>{for(let Ye=0;Ye<=16;Ye++){let rt=Ye/16,Et=gt[0]+(St[0]-gt[0])*rt,_t=gt[1]+(St[1]-gt[1])*rt,wt=2.5-Math.sin(rt*Math.PI)*.45,ft=new ce(new Hn(.045,8,6),new Je({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:d||f?3:.4}));ft.position.set(Et,wt,_t),g.add(ft)}};if(dt(-4.2,-3.2),dt(4.2,-3.2),dt(-4.2,3.2),et([-4.2,-3.2],[4.2,-3.2]),et([-4.2,-3.2],[-4.2,3.2]),d||f){let gt=new ii("#ffcf7a",2.5,9,1.6);gt.position.set(0,2.3,-2.6),g.add(gt)}}}let xe=null;function Xe(){return xe||(xe=Ae.loadAsync(s.base+"mutfak.glb?v=1").then(h=>{h.scene.children.slice().forEach(g=>{Se[g.name]=g,A(g)})})),xe}let Re=h=>new Je(Object.assign({roughness:.7},h)),mt=(h,g)=>`${h} ${g}px "Young Serif", Georgia, "Times New Roman", serif`;function nn(h,g,x="#3b2a22",S=.05){let R=new st,N=Re({color:x,roughness:.5});[[0,g/2+S/2,h+S*2,S],[0,-g/2-S/2,h+S*2,S],[-h/2-S/2,0,S,g],[h/2+S/2,0,S,g]].forEach(([W,_e,ve,Ie])=>{let qe=new ce(new ct(ve,Ie,.05),N);qe.position.set(W,_e,.025),qe.castShadow=!0,R.add(qe)});let V=new ce(new ct(h,g,.015),Re({color:"#efe6dc"}));return V.position.z=.008,R.add(V),R}function yn(h,g,x,S,R){let N=new st,V=nn(h,g,R);V.position.y=x,N.add(V);let W=new ce(new wn(h,g),Re({map:Rn(Math.round(512*h/Math.max(h,g))*2,Math.round(512*g/Math.max(h,g))*2,S),roughness:.85}));return W.position.set(0,x,.02),N.add(W),N}function Dt(h=1){let g=new zi;return g.moveTo(0,-.5*h),g.bezierCurveTo(-.15*h,-.32*h,-.5*h,-.15*h,-.5*h,.12*h),g.bezierCurveTo(-.5*h,.4*h,-.15*h,.5*h,0,.28*h),g.bezierCurveTo(.15*h,.5*h,.5*h,.4*h,.5*h,.12*h),g.bezierCurveTo(.5*h,-.15*h,.15*h,-.32*h,0,-.5*h),g}let An={tarih_cerceve:()=>yn(.62,.82,1.62,(h,g,x)=>{h.fillStyle="#fbf6ef",h.fillRect(0,0,g,x),h.textAlign="center",h.fillStyle="#b8325a",h.font=mt("400",g*.2),h.fillText("26",g/2,x*.36),h.fillStyle="#34131F",h.font=mt("400",g*.1),h.fillText("Ocak 2026",g/2,x*.5),h.strokeStyle="#d9b9a6",h.lineWidth=3,h.beginPath(),h.moveTo(g*.3,x*.57),h.lineTo(g*.7,x*.57),h.stroke(),h.font=mt("italic 400",g*.075),h.fillStyle="#8A6473",h.fillText(`${o.B} & ${o.A}`,g/2,x*.67),h.font=mt("italic 400",g*.055),h.fillText("her \u015Fey burada ba\u015Flad\u0131",g/2,x*.76),h.font=`${g*.09}px serif`,h.fillText("\u{1F337}",g/2,x*.9)}),harita_cerceve:()=>yn(.95,.7,1.62,(h,g,x)=>{h.fillStyle="#cfe3ef",h.fillRect(0,0,g,x),h.fillStyle="#f1e6d2",h.beginPath(),h.moveTo(0,0),h.lineTo(g*.52,0),h.bezierCurveTo(g*.5,x*.25,g*.44,x*.4,g*.47,x*.58),h.bezierCurveTo(g*.5,x*.75,g*.42,x*.85,g*.35,x),h.lineTo(0,x),h.fill(),h.beginPath(),h.moveTo(g,0),h.lineTo(g*.6,0),h.bezierCurveTo(g*.58,x*.25,g*.53,x*.42,g*.56,x*.6),h.bezierCurveTo(g*.6,x*.78,g*.55,x*.9,g*.5,x),h.lineTo(g,x),h.fill(),h.strokeStyle="rgba(120,90,70,.25)",h.lineWidth=2;for(let R=0;R<26;R++){let N=Math.random()*g,V=Math.random()*x;h.beginPath(),h.moveTo(N,V),h.lineTo(N+30+Math.random()*40,V+(Math.random()-.5)*20),h.stroke()}let S=(R,N,V,W)=>{h.fillStyle=W,h.beginPath(),h.moveTo(R,N+V*.9),h.bezierCurveTo(R-V*1.6,N-V*.2,R-V*.6,N-V*1.3,R,N-V*.45),h.bezierCurveTo(R+V*.6,N-V*1.3,R+V*1.6,N-V*.2,R,N+V*.9),h.fill()};S(g*.27,x*.42,g*.035,"#b8325a"),S(g*.72,x*.55,g*.03,"#E8577A"),h.setLineDash([8,8]),h.strokeStyle="#b8325a",h.lineWidth=3,h.beginPath(),h.moveTo(g*.27,x*.42),h.quadraticCurveTo(g*.5,x*.25,g*.72,x*.55),h.stroke(),h.setLineDash([]),h.fillStyle="#34131F",h.textAlign="center",h.font=mt("italic 400",g*.06),h.fillText("Bizim \u0130stanbul",g/2,x*.92)},"#e8e1d6"),plak_duvar:()=>yn(.62,.62,1.7,(g,x,S)=>{g.fillStyle="#f4ece4",g.fillRect(0,0,x,S);let R=x/2,N=S*.46,V=x*.36;g.fillStyle="#141014",g.beginPath(),g.arc(R,N,V,0,7),g.fill(),g.strokeStyle="rgba(255,255,255,.07)";for(let W=8;W<V;W+=5)g.beginPath(),g.arc(R,N,W,0,7),g.stroke();g.fillStyle="#E8577A",g.beginPath(),g.arc(R,N,V*.33,0,7),g.fill(),g.fillStyle="#fff",g.textAlign="center",g.font=mt("400",V*.1),g.fillText("Bizim",R,N-V*.05),g.fillText("\u015Eark\u0131m\u0131z",R,N+V*.1),g.fillStyle="#34131F",g.font=mt("italic 400",x*.06),g.fillText(`${o.B} & ${o.A}`,x/2,S*.94)},"#1c1c1c"),kanvas_foto:()=>{let h=new st,g=1.68,x=new ce(new ct(1.34,.98,.05),Re({color:"#fbf8f4"}));x.position.set(0,g,.025),x.castShadow=!0,h.add(x);let S=new ce(new wn(1.26,.9),Re({color:"#f3e3e7",roughness:.55}));return S.position.set(0,g,.052),S.userData.oran=1.26/.9,h.add(S),h.userData.foto=S,h},polaroid_ip:()=>{let h=new st,g=1.95,x=5,S=1.9;h.userData.fotolar=[];let R=new Ba([...Array(9)].map((N,V)=>new D(-S/2+S*V/8,g-Math.sin(V/8*Math.PI)*.12,.03)));h.add(new ce(new Bs(R,40,.006,5),Re({color:"#c8a46a",roughness:.6}))),[-1,1].forEach(N=>{let V=new ce(new Hn(.02,8,6),Re({color:"#c8a46a"}));V.position.set(N*S/2,g,.03),h.add(V)});for(let N=0;N<x;N++){let V=(N+.5)/x,W=-S/2+S*V,_e=g-Math.sin(V*Math.PI)*.12,ve=new st;ve.position.set(W,_e-.2,.035),ve.rotation.z=(Math.random()-.5)*.2;let Ie=new ce(new ct(.26,.31,.006),Re({color:"#fffdf8",roughness:.9}));Ie.castShadow=!0,ve.add(Ie);let qe=new ce(new wn(.22,.22),Re({color:"#f3e3e7",roughness:.6}));qe.position.set(0,.025,.004),ve.add(qe),h.userData.fotolar.push(qe);let dt=new ce(new ct(.025,.06,.015),Re({color:"#E8577A"}));dt.position.set(0,.16,.008),ve.add(dt),h.add(ve)}return h},harf_yastik:()=>{let h=new st;return[[-.45,"#7a1f2e","B"],[.45,"#1f2a4d","A"]].forEach(([g,x,S])=>{let R=new Ft(.36,.38,.16,28),N=Rn(256,256,(W,_e,ve)=>{W.fillStyle=x,W.fillRect(0,0,_e,ve),W.strokeStyle="rgba(255,255,255,.35)",W.lineWidth=6,W.setLineDash([10,8]),W.beginPath(),W.arc(_e/2,ve/2,_e*.4,0,7),W.stroke(),W.setLineDash([]),W.fillStyle="#fbe9dc",W.textAlign="center",W.textBaseline="middle",W.font=mt("400",130),W.fillText(S,_e/2,ve/2+6)}),V=new ce(R,[Re({color:x,roughness:.95}),Re({map:N,roughness:.95}),Re({color:x})]);V.position.set(g,.08,0),V.scale.y=.9,V.castShadow=!0,V.receiveShadow=!0,h.add(V)}),h},paspas:()=>{let h=new ce(new ct(1,.02,.6),[Re({color:"#b98d5f"}),Re({color:"#b98d5f"}),Re({map:Rn(512,300,(x,S,R)=>{x.fillStyle="#c99f6e",x.fillRect(0,0,S,R);for(let N=0;N<2500;N++)x.fillStyle=`rgba(90,60,30,${Math.random()*.18})`,x.fillRect(Math.random()*S,Math.random()*R,2,5);x.strokeStyle="#5a3a22",x.lineWidth=6,x.strokeRect(16,16,S-32,R-32),x.fillStyle="#4a2c1a",x.textAlign="center",x.textBaseline="middle",x.font=mt("400",86),x.fillText("Bizim Ev",S/2,R*.45),x.font=mt("italic 400",34),x.fillText(`${o.B} & ${o.A}`,S/2,R*.74)}),roughness:1}),Re({color:"#b98d5f"}),Re({color:"#b98d5f"}),Re({color:"#b98d5f"})]);h.position.y=.011,h.receiveShadow=!0;let g=new st;return g.add(h),g},kupa_sehpa:()=>{let h=new st,g=Se.table_small.clone(!0);h.add(g);let x=new gn().setFromObject(g).max.y;return h.userData.ustY=x,[[-.12,"#7a1f2e","B"],[.12,"#1f2a4d","A"]].forEach(([S,R,N])=>{let V=Rn(256,128,(ve,Ie,qe)=>{ve.fillStyle="#fbf6ef",ve.fillRect(0,0,Ie,qe),ve.fillStyle=R,ve.textAlign="center",ve.textBaseline="middle",ve.font=mt("400",70),ve.fillText(N,Ie*.25,qe/2),ve.fillText("\u2665",Ie*.75,qe/2)}),W=new ce(new Ft(.055,.05,.12,20),[Re({map:V,roughness:.3}),Re({color:"#4a2c1a",roughness:.2}),Re({color:"#fbf6ef"})]);W.position.set(S,x+.06,0),W.rotation.y=S<0?.4:-.4,W.castShadow=!0,h.add(W);let _e=new ce(new Gr(.03,.009,6,14),Re({color:"#fbf6ef",roughness:.3}));_e.position.set(S+(S<0?-.06:.06),x+.065,0),_e.rotation.y=Math.PI/2,h.add(_e)}),h},mum_set:()=>{let h=new st,g=[],x=new ce(new Ft(.24,.24,.02,24),Re({color:"#c8a46a",metalness:.7,roughness:.3}));if(x.position.y=.01,h.add(x),[[-.1,.2,.04],[.08,.14,-.06],[.02,.26,.1]].forEach(([S,R,N])=>{let V=new ce(new Ft(.045,.045,R,16),Re({color:"#fbf3e6",roughness:.6}));V.position.set(S,.02+R/2,N),V.castShadow=!0,h.add(V);let W=new ce(new Hn(.018,8,8),new jt({color:"#ffcf7a"}));W.scale.y=1.8,W.position.set(S,.02+R+.03,N),h.add(W),g.push(W)}),d||f){let S=new ii("#ffb26b",1.2,2.5,2);S.position.y=.45,h.add(S)}return h.userData.anim=(S,R)=>g.forEach((N,V)=>{let W=1+Math.sin(R*13+V*2)*.12+Math.sin(R*23+V)*.08;N.scale.set(W,1.8*W,W)}),h},balon_kalp:()=>{let h=new st,g=[],x=new ce(new Ft(.05,.06,.05,12),Re({color:"#c8a46a",metalness:.6,roughness:.3}));return x.position.y=.025,h.add(x),[[-.12,1.75,"#E8577A"],[.14,1.9,"#b8325a"],[0,2.1,"#f39ab4"]].forEach(([S,R,N],V)=>{let W=new Hr(Dt(.36),{depth:.06,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:4,curveSegments:18});W.center();let _e=new ce(W,Re({color:N,roughness:.25,metalness:.15}));_e.position.set(S,R,0),_e.castShadow=!0,h.add(_e);let ve=new ce(new Ft(.003,.003,R-.2,4),Re({color:"#ffffff"}));ve.position.set(S/2,(R-.2)/2+.05,0),ve.rotation.z=Math.atan2(S,R)*.5,h.add(ve),g.push([_e,R,V])}),h.userData.anim=(S,R)=>g.forEach(([N,V,W])=>{N.position.y=V+Math.sin(R*1.3+W*2)*.04,N.rotation.y=Math.sin(R*.7+W)*.35}),h},lale_buket:()=>{let h=new st,g=Nd();return g.scale.setScalar(1.6),h.add(g),h}},Nt=new Map;function $r(h){let g=Pe[h.t];if(!g)return null;let x;if((h.t.startsWith("m_")||h.t==="ocak")&&!Se.m_kitchencounter_straight_A)return null;if(h.t==="pikap"){x=new st;let S=Se.table_small.clone(!0);x.add(S);let R=new gn().setFromObject(S).max.y,N=AM();N.position.y=R,x.add(N),x.userData.plak=N.userData.plak}else if(h.t==="sehpa_lale"){x=new st;let S=Se.table_low.clone(!0);x.add(S);let R=new gn().setFromObject(S).max.y,N=Nd();N.position.y=R,N.scale.setScalar(1.15),x.add(N),x.userData.ustY=R}else if(h.t==="ocak"){if(x=new st,Se.m_kitchencounter_straight_A&&Se.m_stove_multi_countertop){let S=Se.m_kitchencounter_straight_A.clone(!0),R=Se.m_stove_multi_countertop.clone(!0),N=Se.m_extractorhood.clone(!0);N.position.z=-1,[S,R,N].forEach(V=>x.add(V)),x.scale.setScalar(.8)}}else if(h.t==="semaver")x=CM();else if(h.t==="teleskop")x=IM();else if(h.t==="saksi_lale")x=DM();else if(h.t==="fener_ayak")x=LM(d||f);else if(An[h.t])x=An[h.t]();else if(Y.YAP[h.t])x=Y.YAP[h.t]();else{if(!Se[h.t])return null;x=Se[h.t].clone(!0),g[4].duvar&&(x.userData.duvar=!0)}return g[4].s&&!x.userData.olcekli&&(x.scale.setScalar(g[4].s),x.userData.olcekli=!0),x.traverse(S=>{S.isMesh&&(S.castShadow=!g[4].zemin,S.receiveShadow=!0)}),Object.assign(x.userData,g[4],{id:h.id,tip:h.t,ad:h.t}),c.add(x),Nt.set(h.id,x),gi(x,h),g[4].act==="foto"&&(x.userData.fotolar?x.userData.fotolar.forEach(lt):x.userData.foto?lt(x.userData.foto):Ke(x)),x}function gi(h,g){h.position.set(g.x,g.y||0,g.z),h.rotation.y=g.r||0,h.updateMatrixWorld(!0);let x=new gn().setFromObject(h);h.userData.kutu={x0:x.min.x,x1:x.max.x,z0:x.min.z,z1:x.max.z,y1:x.max.y}}function Ai(h){let g=h.userData,x=h.rotation.y,S=Math.cos(x),R=Math.sin(x),N=h.scale.x||1;return(g.yerler||[]).map(([V,W])=>[h.position.x+(V*S+W*R)*N,h.position.z+(-V*R+W*S)*N])}let Xi=Rn(512,256,(h,g,x)=>{h.fillStyle="#9fcf7a",h.fillRect(0,0,g,x);for(let S=0;S<2600;S++){h.strokeStyle=`hsl(${95+Math.random()*25},${40+Math.random()*20}%,${48+Math.random()*18}%)`,h.lineWidth=1.2;let R=Math.random()*g,N=Math.random()*x;h.beginPath(),h.moveTo(R,N),h.lineTo(R+(Math.random()-.5)*4,N-4-Math.random()*6),h.stroke()}});Xi.wrapS=Xi.wrapT=ln,Xi.repeat.set(3,1.2);let qi=new ce(new ct(Ne.w,.2,T-P),new Je({map:Xi,roughness:1}));qi.position.set(0,-.11,(P+T)/2),qi.receiveShadow=!0,qi.name="zemin",c.add(qi),pe.add(J),pe.add(qi);let ao=new Je({color:"#e9e1d6",roughness:.9});for(let h=0;h<4;h++){let g=new ce(new Ft(.22,.24,.05,14),ao);g.position.set(-3.6+h%2*.25,0,P+.45+h*.8),g.receiveShadow=!0,c.add(g)}let ji=new Je({color:"#fffaf6",roughness:.7}),Qr=(h,g)=>{let x=new ce(new ct(.08,.55,.08),ji);x.position.set(h,.27,g),x.castShadow=!0,c.add(x);let S=new ce(new Ha(.06,.1,4),ji);S.position.set(h,.6,g),S.rotation.y=Math.PI/4,c.add(S)};for(let h=-Ne.w/2;h<=Ne.w/2+.01;h+=.45)Qr(h,T);for(let h=P+.3;h<T;h+=.45)Qr(Ne.w/2,h);[[0,T,Ne.w,.05],[Ne.w/2,(P+T)/2,.05,T-P]].forEach(([h,g,x,S])=>[.18,.4].forEach(R=>{let N=new ce(new ct(x,.06,S),ji);N.position.set(h,R,g),N.castShadow=!0,c.add(N)}));let Fn=new st;Fn.position.set(-4.1,0,T-.4),c.add(Fn);{let h=new ce(new Ft(.04,.05,1.3,8),new Je({color:"#3a2a2e",roughness:.5}));h.position.y=.65,h.castShadow=!0,Fn.add(h);let g=new ce(new Hn(.13,16,12),new Je({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:d||f?2.2:.15}));if(g.position.y=1.38,Fn.add(g),d||f){let x=new ii("#ffcf7a",3.5,5,1.8);x.position.y=1.35,Fn.add(x)}}let oo=[-3.15,-1.05,1.05,3.15].flatMap(h=>[P+1.05,P+2.5].map(g=>[h,g])),js=new Je({color:"#7a5034",roughness:1}),mc=new Je({color:"#a77d5a",roughness:1}),gc=new Je({color:"#b98a5e",roughness:.8}),Ri=oo.map(([h,g],x)=>{let S=new st;S.position.set(h,0,g),c.add(S);let R=new ce(new ct(1.4,.16,.95),gc);R.position.y=.06,R.castShadow=!0,R.receiveShadow=!0,S.add(R);let N=new ce(new ct(1.25,.05,.8),js);N.position.y=.14,N.receiveShadow=!0,S.add(N);let V=new st;return V.position.y=.16,S.add(V),S.userData={act:"bahce",i:x,top:N,bit:V,ad:"parsel"+x,id:"parsel"+x},S}),C=["#C9233F","#E8577A","#F7A8BE","#fff1f4","#9C7BD3","#f5a524"],X=new Je({color:"#5b9e5a",roughness:.8,side:on}),ne=36e5,se=6*ne;function q(h){if(!h||!h.ekim)return-1;let g=(Date.now()-h.ekim)/se;return g<1/3?0:g<2/3?1:g<1?2:3}let Le=h=>!!(h&&h.ekim)&&q(h)<3&&Date.now()-(h.su||h.ekim)>3*ne,je=h=>{let g=se-(Date.now()-h.ekim);if(g<=0)return"a\xE7t\u0131";let x=Math.ceil(g/6e4);return x>=60?`${Math.floor(x/60)} sa ${x%60} dk sonra a\xE7ar`:`${x} dk sonra a\xE7ar`};function $e(h,g){let x=h.userData.bit;x.clear();let S=q(g);if(h.userData.top.material=S>=0&&Le(g)?mc:js,S<0)return;let R=Le(g)?.55:0;[[-.35,-.1],[0,.12],[.35,-.08]].forEach(([N,V],W)=>{let _e=new st;if(_e.position.set(N,0,V),_e.rotation.z=R*(W-1||.6),x.add(_e),S===0){let qe=new ce(new Hn(.07,8,6),js);qe.scale.y=.5,_e.add(qe);let dt=new ce(new Ha(.02,.08,5),X);dt.position.y=.05,_e.add(dt);return}let ve=S===1?.18:S===2?.4:.55,Ie=new ce(new Ft(.015,.018,ve,6),X);if(Ie.position.y=ve/2,_e.add(Ie),[-1,1].forEach(qe=>{let dt=new ce(new wn(.08,ve*.7),X);dt.position.set(qe*.04,ve*.3,0),dt.rotation.z=-qe*.35,dt.rotation.y=W,_e.add(dt)}),S>=2){let qe=S===2?.045:.075,dt=g.renk||C[0],et=new ce(new wi([[0,-.02],[qe*.7,0],[qe,qe*.8],[qe*.92,qe*1.6],[qe*.6,qe*2.1],[qe*.65,qe*2.2]].map(gt=>new ue(gt[0],gt[1])),14),new Je({color:dt,roughness:.45,side:on}));et.position.y=ve,et.castShadow=!0,S===2&&et.scale.set(.8,1.1,.8),_e.add(et)}})}let Qe=()=>{try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Istanbul"}).format(new Date)}catch{return new Date().toISOString().slice(0,10)}},ae=bt(),nt={},it=()=>{let h=nt[t];return h||(h=nt[t]={kazanc:0}),h.gun!==Qe()&&(h.gun=Qe(),h.al={}),h.al=h.al||{},h},vt=()=>Object.values(nt).reduce((h,g)=>h+(g.kazanc||0),0)-(ae.harcanan||0),Lt=t==="misafir"||!i,Yt=0,Cn=0,Ue=null,Oe=null,zt=null;function ut(){Vt(),clearTimeout(Yt),Yt=setTimeout(()=>{if(Lt){try{localStorage.setItem("le-ev",JSON.stringify(ae))}catch{}return}i.from("state").upsert({scope:"oyun_ev",id:"ev",value:ae},{onConflict:"scope,id"}).then(()=>{},()=>{})},500),Jn({t:"ev",ev:ae})}function Xn(){ca(),clearTimeout(Cn),Cn=setTimeout(()=>{if(Lt){try{localStorage.setItem("le-puan",JSON.stringify(nt[t]))}catch{}return}i.from("state").upsert({scope:"oyun_puan",id:t,value:nt[t]},{onConflict:"scope,id"}).then(()=>{},()=>{})},500),Jn({t:"puan",v:nt[t]})}function en(h,g,x,S=1){let R=it();if(x){let N=R.al[x]||0;if(N>=S)return!1;R.al[x]=N+1}return R.kazanc=(R.kazanc||0)+h,Xn(),tg(h,g),!0}function vn(h){return vt()<h?(Mt(`\u{1F337} ${h} lale puan\u0131 laz\u0131m, ${vt()} var`),!1):(ae.harcanan=(ae.harcanan||0)+h,ca(),!0)}let qn=new Map;function Vt(){for(ae.depo=ae.depo||[],ae.hediyeler=ae.hediyeler||[],ae.bahce=ae.bahce||[];ae.bahce.length<8;)ae.bahce.push({});ae.odalar=ae.odalar||{},j.forEach(x=>{pt(x.id)&&he(x)});let h=new Set(ae.esyalar.map(x=>x.id));for(let[x,S]of Nt)h.has(x)||([Ue&&Ue.A,Ue&&Ue.B].forEach(R=>{R&&R.yer&&R.yer.m===S&&Bd(R)}),c.remove(S),Nt.delete(x),Oe===S&&bo());ae.esyalar.forEach(x=>{let S=Nt.get(x.id);S?(S.position.x!==x.x||S.position.z!==x.z||S.rotation.y!==(x.r||0))&&([Ue&&Ue.A,Ue&&Ue.B].forEach(R=>{R&&R.yer&&R.yer.m===S&&Bd(R)}),gi(S,x)):$r(x)});let g=ae.hediyeler.filter(x=>!x.acildi);for(let[x,S]of qn)g.some(R=>R.id===x)||(c.remove(S),qn.delete(x));g.forEach(x=>{if(qn.has(x.id))return;let S=RM(x.renk||"#C9233F");S.position.set(x.x,x.y||0,x.z),S.rotation.y=x.r||0,S.userData=Object.assign(S.userData,{act:"hediye",id:x.id,ad:x.id}),S.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),c.add(S),qn.set(x.id,S)}),ai(),Tm(),Ri.forEach((x,S)=>$e(x,ae.bahce[S])),ca(),km(),xo()}function ai(){let h=Ue?te(Rt.g.position.x).ox:0,g=[...Nt.values()].find(x=>x.userData.act==="lamba"&&te(x.position.x).ox===h);if(g){let x=g.userData.kutu;v.position.set((x.x0+x.x1)/2,x.y1-.2,(x.z0+x.z1)/2)}else v.position.set(0,-10,0)}let ys=d,sn=Math.round((me.x1-me.x0)/qs),vs=Math.round((me.z1-me.z0)/qs),lo=new Uint8Array(sn*vs),Yi=(h,g)=>[Math.floor((h-me.x0)/qs),Math.floor((g-me.z0)/qs)],bc=(h,g)=>[me.x0+(h+.5)*qs,me.z0+(g+.5)*qs];function Tm(){let h=[...Nt.values()].filter(g=>!g.userData.zemin&&!g.userData.kucuk).map(g=>g.userData.kutu);Ri.forEach(g=>h.push({x0:g.position.x-.7,x1:g.position.x+.7,z0:g.position.z-.48,z1:g.position.z+.48})),h.push({x0:Fn.position.x-.15,x1:Fn.position.x+.15,z0:Fn.position.z-.15,z1:Fn.position.z+.15});for(let g=0;g<sn;g++)for(let x=0;x<vs;x++){let[S,R]=bc(g,x),N=0,V=te(S);(!pt(V.id)||Math.abs(S-V.ox)>Ne.w/2-.3||R<me.z0+.3||R>(V.id==="salon"?me.z1:Ne.d/2)-.3||h.some(W=>S>W.x0-.12&&S<W.x1+.12&&R>W.z0-.12&&R<W.z1+.12))&&(N=1),lo[x*sn+g]=N}}let Ki=(h,g)=>h>=0&&g>=0&&h<sn&&g<vs&&!lo[g*sn+h];function Ud(h,g){if(Ki(h,g))return[h,g];for(let x=1;x<14;x++)for(let S=-x;S<=x;S++)for(let R=-x;R<=x;R++)if(Math.max(Math.abs(S),Math.abs(R))===x&&Ki(h+S,g+R))return[h+S,g+R];return[h,g]}function Od(h,g){let x=Math.ceil(Math.hypot(g[0]-h[0],g[1]-h[1])/(qs*.5));for(let S=0;S<=x;S++){let R=h[0]+(g[0]-h[0])*S/x,N=h[1]+(g[1]-h[1])*S/x,[V,W]=Yi(R,N);if(!Ki(V,W))return!1}return!0}function Fd(h,g){var Fe;let[x,S]=Ud(...Yi(h[0],h[1])),[R,N]=Ud(...Yi(g[0],g[1])),V=(Ye,rt)=>rt*sn+Ye,W=new Map([[V(x,S),0]]),_e=new Map,ve=[[0,x,S]],Ie=new Set;for(;ve.length;){ve.sort((_t,wt)=>_t[0]-wt[0]);let[,Ye,rt]=ve.shift(),Et=V(Ye,rt);if(!Ie.has(Et)){if(Ie.add(Et),Ye===R&&rt===N)break;for(let[_t,wt]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let ft=Ye+_t,Tt=rt+wt;if(!Ki(ft,Tt)||_t&&wt&&(!Ki(Ye+_t,rt)||!Ki(Ye,rt+wt)))continue;let Ut=V(ft,Tt),Ze=W.get(Et)+(_t&&wt?1.414:1);Ze<((Fe=W.get(Ut))!=null?Fe:1e9)&&(W.set(Ut,Ze),_e.set(Ut,Et),ve.push([Ze+Math.hypot(R-ft,N-Tt),ft,Tt]))}}}let qe=[],dt=V(R,N);if(!_e.has(dt)&&dt!==V(x,S))return[bc(R,N)];for(;dt!==void 0&&dt!==V(x,S);)qe.unshift(bc(dt%sn,Math.floor(dt/sn))),dt=_e.get(dt);let et=[h,...qe];Ki(...Yi(g[0],g[1]))&&et.push(g);let gt=[et[0]],St=0;for(;St<et.length-1;){let Ye=et.length-1;for(;Ye>St+1&&!Od(et[St],et[Ye]);)Ye--;gt.push(et[Ye]),St=Ye}return gt.slice(1)}function zd(h,g){let x=h.scene,S=h.animations.some(Fe=>/_Rig$/.test(Fe.name));x.traverse(Fe=>{Fe.isMesh&&(Fe.castShadow=!0,Fe.receiveShadow=!1,Fe.material=Fe.material.clone(),S&&(Fe.material.roughness=.85,Fe.material.metalness=0,Fe.frustumCulled=!1))});let R=!S&&h.animations.some(Fe=>Fe.name==="Hug");x.traverse(Fe=>{Fe.isSkinnedMesh&&(Fe.frustumCulled=!1)});let N=new gn().setFromObject(x),V=S?_M*xM*vm[g]/1.55:vm[g]/(N.max.y-N.min.y);x.scale.setScalar(V);let W=new st;W.add(x),c.add(W);let _e=new qr(x),ve={};h.animations.forEach(Fe=>{ve[Fe.name.replace(/_Rig$/,"")]=_e.clipAction(Fe)}),["Sit_Chair_Down","Lie_Down","Sit_Chair_StandUp","Lie_StandUp","Cheer","Interact","PickUp","Sit_Floor_Down"].forEach(Fe=>{ve[Fe]&&(ve[Fe].setLoop(qu),ve[Fe].clampWhenFinished=!0)});let Ie={boy:(N.max.y-N.min.y)*V,rol:g,g:W,root:x,mixer:_e,acts:ve,cur:null,path:[],durum:"ayakta",yer:null,online:!1,hiz:Mm},qe=null;x.traverse(Fe=>{!qe&&Fe.isBone&&/^hips$/i.test(Fe.name)&&(qe=Fe)}),Ie.kalca={};let dt=(Fe,Ye)=>{let rt=ve[Fe];if(!rt||!qe)return null;let Et=new qr(x);return Et.clipAction(rt.getClip()).play(),Et.setTime(Ye==null?rt.getClip().duration*.5:Ye),x.updateMatrixWorld(!0),{v:qe.getWorldPosition(new D),tm:Et}},et={},gt=Fe=>Fe.toLowerCase().replace(/[^a-z]/g,"");x.traverse(Fe=>{if(!Fe.isBone)return;let Ye=gt(Fe.name);Ye==="hips"?et.kalca=Fe:Ye==="chest"?et.gogus=Fe:Ye==="head"?et.bas=Fe:/^(shin|lowerleg)[lr]$/.test(Ye)?et["diz"+Ye.slice(-1)]=Fe:/^(foot)[lr]$/.test(Ye)&&(et["ayak"+Ye.slice(-1)]=Fe)}),Ie.poz={};for(let[Fe,Ye]of[["otur","Sit_Chair_Idle"],["yat","Lie_Idle"],["yer","Sit_Floor_Idle"]]){let rt=dt(Ye);if(rt){Ie.kalca[Fe]=[rt.v.x,rt.v.y,rt.v.z];let Et={};for(let _t in et){let wt=et[_t].getWorldPosition(new D);Et[_t]=[wt.x,wt.y,wt.z]}Ie.poz[Fe]=Et,rt.tm.stopAllAction(),rt.tm.uncacheRoot(x)}}if(ve.Walking_A){let Fe=null;if(x.traverse(Ye=>{!Fe&&Ye.isBone&&/^(foot[._]?l|foot_l)$/i.test(Ye.name)&&(Fe=Ye)}),Fe){let Ye=ve.Walking_A.getClip().duration,rt=9,Et=-9,_t=new qr(x);_t.clipAction(ve.Walking_A.getClip()).play();for(let ft=0;ft<24;ft++){_t.setTime(Ye*ft/24),x.updateMatrixWorld(!0);let Tt=Fe.getWorldPosition(new D).z;rt=Math.min(rt,Tt),Et=Math.max(Et,Tt)}_t.stopAllAction(),_t.uncacheRoot(x);let wt=2*(Et-rt);if(wt>.1){let ft=Mm/(window.__leHiz||1)*Ye/wt;ft>1.5&&(ft=1.5,Ie.hiz=(window.__leHiz||1)*wt*ft/Ye),ve.Walking_A.timeScale=Math.max(.7,ft)}}}Ie.oyna=(Fe,Ye=SM)=>{let rt=ve[Fe];return!rt||Ie.cur===rt||(rt.reset().setEffectiveWeight(1).fadeIn(Ye).play(),Ie.cur&&Ie.cur.fadeOut(Ye),Ie.cur=rt),rt},Ie.bir=Fe=>new Promise(Ye=>{let rt=Ie.oyna(Fe,.2);if(!rt)return Ye();let Et=_t=>{_t.action===rt&&(_e.removeEventListener("finished",Et),Ye())};_e.addEventListener("finished",Et),setTimeout(()=>{_e.removeEventListener("finished",Et),Ye()},rt.getClip().duration/(window.__leHiz||1)*1e3+4e3)}),Ie.oyna("Idle",0);let St=ke("div",{class:"le-tag "+(g==="B"?"b":"a")},ke("b",null,o[g]),ke("i"));return Qt("#leTags").append(St),Ie.tag=St,Ie}Ue={A:zd(Ce,"A"),B:zd(We,"B")},Ue.A.g.position.set(1.8,0,1.8),Ue.B.g.position.set(-.6,0,1.9),Ue.B.g.rotation.y=.6,Ue.A.g.rotation.y=-.6;let Rt=Ue[a],Bt=Ue[a==="A"?"B":"A"],Ms=xm({characters:Ue,me:Rt,Vec3:D,Quat:mn,stand:h=>co(h),findPath:(h,g)=>Fd(h,g),lineClear:(h,g)=>Od(h,g),pointClear:(h,g)=>Ki(...Yi(h,g)),sameRoom:(h,g)=>te(h.g.position.x).id===te(g.g.position.x).id,broadcast:h=>Jn(h),hearts:(h,g,x)=>Ks(h,g,x),focus:(...h)=>aa(...h),reward:()=>en(3,"Sar\u0131ld\u0131n \u{1F917}","saril",5),save:()=>{vo(),Jn(Object.assign({t:"durum"},oa(Rt)))},hint:h=>Mt(h)});function Bd(h){h.yer&&(h.g.position.set(h.yer.cik[0],0,h.yer.cik[1]),h.yer=null,h.durum="ayakta",h.oyna("Idle"))}async function co(h){h.durum==="oturuyor"?(h.durum="kalkiyor",await h.bir("Sit_Chair_StandUp")):h.durum==="yatiyor"?(h.durum="kalkiyor",await h.bir("Lie_StandUp")):h.durum==="yerde"&&(h.durum="kalkiyor"),h.yer&&(h.g.position.set(h.yer.cik[0],0,h.yer.cik[1]),h.yer=null),h.durum="ayakta"}async function bi(h,g,x,S,R){if(h.hugLock)return;h.token=(h.token||0)+1,h.kosu=!1;let N=h.token;h.hedefYer=null,h.durum!=="ayakta"&&await co(h),N===h.token&&(h.path=Fd([h.g.position.x,h.g.position.z],[g,x]),h.sonra=S||null,h.path.length?(h.kosu=!!R&&!!h.acts.Running,h.oyna(h.kosu?"Running":"Walking_A")):S&&(h.sonra=null,S()))}function Hd(h,g){let x=g.userData,S=Ai(g),R=new Set([Ue.A,Ue.B].filter(Ie=>Ie!==h).map(Ie=>Ie.yer||Ie.hedefYer).filter(Ie=>Ie&&Ie.m===g).map(Ie=>Ie.i)),N=S.findIndex((Ie,qe)=>!R.has(qe));N<0&&(N=0);let[V,W]=S[N],_e=(x.yon||0)+g.rotation.y,ve=x.act==="yat"?[Math.sin(g.rotation.y)*1.25,Math.cos(g.rotation.y)*1.25]:[Math.sin(_e)*(x.act==="yer"?.55:.75),Math.cos(_e)*(x.act==="yer"?.55:.75)];return{m:g,i:N,sx:V,sz:W,yon:_e,cik:[V+ve[0],W+ve[1]]}}let Gd=new Ka,Am=new D(0,-1,0);function Zi(h,g,x){Gd.set(new D(g,3,x),Am);let S=Gd.intersectObject(h,!0).filter(R=>R.object.visible&&!R.object.userData.yazi);return Math.max(0,S.length?S[0].point.y:0)}function ho(h,g,x,S,R=0){let N=g.m,V=N.scale.x||1,W=yM[x],_e=Math.sin(g.yon),ve=Math.cos(g.yon),Ie=h.boy/1.55;N.updateMatrixWorld(!0);let qe=g.sx+(W[0]*ve+W[1]*_e)*V,dt=g.sz+(-W[0]*_e+W[1]*ve)*V,et=h.poz[x],gt=h.kalca[x]||[0,.4,0],St=wt=>[wt[0]*ve+wt[2]*_e,-wt[0]*_e+wt[2]*ve];if(x==="otur"){let wt=Math.min(...[0,.06,.12].map(Tt=>Zi(N,qe+_e*Tt,dt+ve*Tt))),ft=null;for(let Tt=-.3;Tt<=.7;Tt+=.02)if(Zi(N,qe-_e*Tt,dt-ve*Tt)>wt+.16){ft=Tt;break}if(ft!==null){let Tt=Math.max(-.35,Math.min(.35,ft-.12*Ie));qe-=_e*Tt,dt-=ve*Tt}if(et&&et.dizl&&et.kalca){let Tt=null;for(let Ze=0;Ze<=1.3;Ze+=.02)if(Zi(N,qe+_e*Ze,dt+ve*Ze)<wt-.25){Tt=Ze;break}let Ut=(et.dizl[2]+et.dizr[2])/2-et.kalca[2];if(Tt!==null&&Ut<Tt-.02){let Ze=Math.min(.45,Tt-.02-Ut);qe+=_e*Ze,dt+=ve*Ze}}}if(x==="yat"&&et&&et.bas&&et.gogus){let wt=Zi(N,qe,dt),ft=null;for(let Ut=-.6;Ut<=1.4;Ut+=.02)if(Zi(N,qe-_e*Ut,dt-ve*Ut)>wt+.06){ft=Ut;break}let Tt=(et.kalca[2]-et.gogus[2]+(et.kalca[2]-et.bas[2]))/2;if(ft!==null){let Ut=Math.max(-.6,Math.min(.6,ft-Tt));qe-=_e*Ut,dt-=ve*Ut}}let[Fe,Ye]=St(gt),rt=qe-Fe,Et=dt-Ye,_t=-1e9;if(et){let wt=[],ft=(Ze,Wt)=>{Ze&&wt.push([Ze,Wt])},Tt=(Ze,Wt,kt)=>Ze&&Wt&&[Ze[0]+(Wt[0]-Ze[0])*kt,Ze[1]+(Wt[1]-Ze[1])*kt,Ze[2]+(Wt[2]-Ze[2])*kt];if(x==="yat"){ft(et.kalca,.1*Ie),ft(et.gogus,.1*Ie),ft(Tt(et.kalca,et.gogus,.5),.1*Ie),ft(et.bas,-.05*Ie);for(let Ze of["l","r"])ft(et["diz"+Ze],.06*Ie),ft(Tt(et.kalca,et["diz"+Ze],.5),.075*Ie)}else{ft(et.kalca,.1*Ie);for(let Ze of["l","r"]){for(let Wt of[.3,.55,.8])ft(Tt(et.kalca,et["diz"+Ze],Wt),.075*Ie);ft(et["diz"+Ze],.06*Ie)}}for(let Ze of["l","r"])et["ayak"+Ze]&&(_t=Math.max(_t,.02-et["ayak"+Ze][1]));let Ut=[];for(let[Ze,Wt]of wt){let[kt,rn]=St(Ze),cn=Zi(N,rt+kt,Et+rn);Ut.push([+kt.toFixed(2),+rn.toFixed(2),+Ze[1].toFixed(2),+cn.toFixed(2),+(cn+Wt-Ze[1]).toFixed(2)]),_t=Math.max(_t,cn+Wt-Ze[1])}window.__yerDbg=Ut}else _t=Zi(N,qe+_e*.14,dt+ve*.14)+vM[x]*Ie-gt[1];if(h.g.position.set(rt,_t,Et),h.g.rotation.y=g.yon,x==="otur"&&et&&et.gogus&&R<2){let[wt,ft]=St(et.gogus),Tt=rt+wt+_e*.16*Ie,Ut=Et+ft+ve*.16*Ie,Ze=_t+et.kalca[1]+.05,Wt=(kt,rn,cn)=>rn>kt.x0&&rn<kt.x1&&cn>kt.z0&&cn<kt.z1;for(let kt of Nt.values()){if(kt===N||kt.userData.zemin||kt.userData.asili)continue;let rn=kt.userData.kutu;if(!rn||rn.y1<Ze||rn.y1>Ze+.7||!Wt(rn,Tt,Ut))continue;let cn=0;for(;cn<1.2&&Wt(rn,Tt-_e*cn,Ut-ve*cn);)cn+=.03;let Ci=_o(N);if(!Ci)break;Ci.x+=-_e*(cn+.05),Ci.z+=-ve*(cn+.05),gi(N,Ci),S||ut();let ws=Object.assign({},g,{sx:g.sx-_e*(cn+.05),sz:g.sz-ve*(cn+.05),cik:[g.cik[0]-_e*(cn+.05),g.cik[1]-ve*(cn+.05)]});return h.yer=ws,ho(h,ws,x,S,R+1)}}}let _c=(h,g,x)=>{h.g.rotation.y=Math.atan2(g-h.g.position.x,x-h.g.position.z)},Rm=(h,g=.6)=>{let x=h.userData.kutu||{x0:h.position.x-.2,x1:h.position.x+.2,z0:h.position.z-.2,z1:h.position.z+.2},S=(x.x0+x.x1)/2,R=(x.z0+x.z1)/2;return[S,R,x.z1+g]};async function ea(h,g,x){if(h.hugLock)return;let S=g.userData;if(S.act==="otur"||S.act==="yat"||S.act==="yer"){let R=Hd(h,g),N=bi(h,R.cik[0],R.cik[1],async()=>{if(h.hedefYer=null,h.yer=R,S.act==="yat"){if(ho(h,R,"yat",x),h.durum="yatiyor",await h.bir("Lie_Down"),h.durum==="yatiyor"&&h.oyna("Lie_Idle"),!x){let V=Ue.A.yer,W=Ue.B.yer;V&&W&&V.m===W.m&&Ue.A.durum==="yatiyor"&&Ue.B.durum==="yatiyor"&&(en(10,"\u0130yi geceler \u{1F319}","iyigece"),oi())}}else S.act==="yer"?(ho(h,R,"yer",x),h.durum="yerde",await h.bir("Sit_Floor_Down"),h.durum==="yerde"&&h.oyna("Sit_Floor_Idle")):(ho(h,R,"otur",x),h.durum="oturuyor",await h.bir("Sit_Chair_Down"),h.durum==="oturuyor"&&h.oyna("Sit_Chair_Idle"),x||Pm());x||vo()});h.hedefYer=R,await N}else if(S.act==="lamba"||S.act==="muzik"||S.act==="foto"||S.act==="pisir"||S.act==="cay"||S.act==="buzdolabi"||S.act==="yildiz"){let[R,N,V]=Rm(g,.55);if(S.asili){let W=S.kutu;Math.abs(Math.sin(g.rotation.y))>.5?(R=W.x1+.75,V=(W.z0+W.z1)/2):V=W.z1+.75}else if(S.kutu&&!at.includes(g)){let W=S.kutu,_e=g.rotation.y,ve=Math.sin(_e),Ie=Math.cos(_e),qe=(Math.abs(ve)*(W.x1-W.x0)+Math.abs(Ie)*(W.z1-W.z0))/2+.55;R=(W.x0+W.x1)/2+ve*qe,V=(W.z0+W.z1)/2+Ie*qe}if(g.parent&&at.includes(g)){let W=g.rotation.y?[g.position.x+1.1,g.position.z]:[g.position.x,g.position.z+1.1];R=W[0],V=W[1],N=g.position.z}await bi(h,(S.act==="foto"&&at.includes(g),R),V,async()=>{if(_c(h,g.position.x,g.position.z),await h.bir("Interact"),h.oyna("Idle"),S.act==="lamba")ys=!ys;else if(S.act==="muzik"&&!x)Vm();else if(S.act==="foto"&&S.fotolar)for(let W of S.fotolar)await lt(W);else S.act==="foto"&&S.foto?(await lt(S.foto),x||setTimeout(()=>S.foto.userData.tarih&&Mt("\u{1F4F7} "+Vd(S.foto.userData.tarih)),600)):S.act==="pisir"?(Xd(g,7),x||Dm()):S.act==="cay"?(Xd(g,4),x||Lm()):S.act==="buzdolabi"&&!x?qd():S.act==="yildiz"&&(Um(g),x||(en(3,"Dilek tuttun \u{1F320}","yildiz"),oi()))})}else if(S.act==="bahce"){await Om(h,g,x);return}else if(S.act==="hediye"){await Gm(h,g,x);return}else if(S.act==="kapi"){x||sa();return}x||Jn({t:"kullan",id:S.id})}let Cm=["Ocak","\u015Eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011Fustos","Eyl\xFCl","Ekim","Kas\u0131m","Aral\u0131k"],Vd=h=>{let[g,x,S]=String(h).split("-").map(Number);return`${S} ${Cm[x-1]} ${g}`};function Pm(){let h=Ue.A.yer,g=Ue.B.yer;h&&g&&h.m===g.m&&Ue.A.durum==="oturuyor"&&Ue.B.durum==="oturuyor"&&en(10,"Yan yana oturdunuz \u{1F6CB}\uFE0F","yanyana");let x=ae.mutfak;x&&x.yemek&&!x.yendi&&Date.now()-x.at>6e3&&te(Rt.g.position.x).id==="mutfak"&&Rt.durum==="oturuyor"&&(h&&g&&Ue.A.durum==="oturuyor"&&Ue.B.durum==="oturuyor"&&te(Ue.A.g.position.x).id==="mutfak"&&te(Ue.B.g.position.x).id==="mutfak"?(x.yendi=Date.now(),ut(),Ks(Rt.g.position.x,Rt.g.position.z,10),en(15,`${x.yemek} birlikte yendi, afiyet olsun \u{1F60B}`,"yemek"),oi()):Mt(`\u{1F372} Masada ${x.yemek} var \xB7 ${o[Bt.rol]} de otursun, birlikte yiyin`))}let Wd=["Menemen","Mant\u0131","Karn\u0131yar\u0131k","\u0130skender","Mercimek \xE7orbas\u0131","Kuru fasulye pilav","Lahmacun","Yaprak sarma","Su b\xF6re\u011Fi","K\xFCnefe","Kumpir","F\u0131r\u0131n makarna","Tavuk sote","K\xF6fte patates"],Im=Rn(64,64,h=>{let g=h.createRadialGradient(32,32,2,32,32,30);g.addColorStop(0,"rgba(255,255,255,.9)"),g.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=g,h.fillRect(0,0,64,64)});function Xd(h,g){let x=h.userData.kutu||{x0:h.position.x,x1:h.position.x,z0:h.position.z,z1:h.position.z,y1:1},S=(x.x0+x.x1)/2,R=(x.z0+x.z1)/2,N=Math.min(x.y1,1.3),V=0,W=setInterval(()=>{for(let _e=0;_e<2;_e++)uo(Im,S+(Math.random()-.5)*.4,N,R+(Math.random()-.5)*.3,.25+Math.random()*.2,{vy:.35+Math.random()*.2,vx:(Math.random()-.5)*.1,omur:1.8});++V>g*5&&clearInterval(W)},200)}function Dm(){let h=ae.mutfak;if(h&&h.yemek&&!h.yendi){Mt(`\u{1F372} Masada zaten ${h.yemek} var, \xF6nce yiyin`);return}let g=Wd[Math.floor(Math.random()*Wd.length)];ae.mutfak=Object.assign(ae.mutfak||{},{yemek:g,at:Date.now(),pisiren:t,yendi:0}),Mt(`\u{1F525} ${g} pi\u015Fiyor\u2026`),en(5,`${g} pi\u015Firdin \u{1F373}`,"pisir"),setTimeout(()=>{ut(),Mt(`\u{1F372} ${g} haz\u0131r! Masaya oturun`),oi()},6500)}function Lm(){ae.mutfak=Object.assign(ae.mutfak||{},{cay:Date.now()}),ut(),en(2,"\xC7ay demledin \u{1FAD6}","cay"),oi(),setTimeout(()=>Mt("\u2615 \xC7aylar masada, tav\u015Fan kan\u0131"),1200)}let Ys=[];function km(){Ys.forEach(S=>S.parent&&S.parent.remove(S)),Ys.length=0;let h=ae.mutfak||{};[...Nt.values()].filter(S=>S.userData.masa).forEach(S=>{let R=S.userData.kutu,N=(R.x0+R.x1)/2,V=(R.z0+R.z1)/2,W=R.y1;if(h.yemek&&!h.yendi&&Date.now()-(h.at||0)>6e3&&te(N).id==="mutfak"&&(Se.m_food_stew||Se.m_stew_bowl)){let _e=(Se.m_food_stew||Se.m_stew_bowl).clone(!0);_e.scale.setScalar(.4),_e.position.set(N,W,V),_e.traverse(ve=>{ve.isMesh&&(ve.castShadow=!0)}),c.add(_e),Ys.push(_e)}h.cay&&Date.now()-h.cay<3*ne&&[[-.32,.1],[.32,-.1]].forEach(([_e,ve])=>{let Ie=PM();Ie.position.set(N+_e,W,V+ve),Ie.scale.setScalar(1.4),c.add(Ie),Ys.push(Ie)})});let x=[...Nt.values()].find(S=>S.userData.act==="buzdolabi");if(x&&ae.buzNot&&ae.buzNot.t){let S=new ce(new wn(.32,.32),new Je({color:ae.buzNot.kimden===t?"#ffe89a":"#ffc9d8",roughness:.8})),R=x.userData.kutu;S.position.set((R.x0+R.x1)/2+.15,1.25,R.z1+.01),S.rotation.z=.08,c.add(S),Ys.push(S);let N=new ce(new Hn(.03,8,6),new Je({color:"#C9233F"}));N.position.copy(S.position).add(new D(0,.13,.02)),c.add(N),Ys.push(N)}}function qd(){let h=Qt("#leBuz"),g=ae.buzNot,x=ke("textarea",{rows:3,maxlength:140,placeholder:"Buzdolab\u0131na bir not as\u2026 (s\xFCt bitti, seni seviyorum\u2026)"}),S=ke("button",{type:"button",class:"le-ana"},"\u{1F9F2} Notu as");S.onclick=()=>{let R=x.value.trim();if(!R){x.focus();return}ae.buzNot={kimden:t,t:R,at:Date.now()},ut(),h.classList.remove("on"),Mt("\u{1F9F2} Not buzdolab\u0131nda")},h.replaceChildren(...[ke("div",{class:"le-sh"},ke("h3",null,"Buzdolab\u0131"),ke("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),g&&g.t?ke("div",{class:"le-buznot"+(g.kimden===t?" ben":"")},ke("p",null,g.t),ke("small",null,`${g.kimden===t?"Senin notun":o[Bt.rol]} \xB7 ${sf(new Date(g.at).toISOString())}`)):ke("p",{class:"le-sub"},"Buzdolab\u0131nda not yok."),ke("p",{class:"le-sub"},`Bug\xFCn buzdolab\u0131nda: ${["s\xFCt","yo\u011Furt","beyaz peynir","zeytin","domates","\xE7ilek","ayran","sucuk","ka\u015Far","yumurta"].sort(()=>Math.random()-.5).slice(0,4).join(", ")} \u{1F9C0}`),x,S].filter(Boolean)),h.classList.add("on")}let Nm=Rn(256,32,h=>{let g=h.createLinearGradient(0,0,256,0);g.addColorStop(0,"rgba(255,255,255,0)"),g.addColorStop(1,"rgba(255,248,220,1)"),h.fillStyle=g,h.fillRect(0,12,256,8),h.fillStyle="#fff",h.beginPath(),h.arc(246,16,7,0,7),h.fill()});function Um(h){let g=new Ua(new Fr({map:Nm,transparent:!0,depthWrite:!1,rotation:-.35,fog:!1}));g.position.set(h.position.x-6,6.5,-9),g.scale.set(3.2,.4,1),g.userData={vx:9,vy:-2.6,vz:0,g:0,t:0,omur:1.4},c.add(g),ta.push(g),aa(h.position.x-1,2.4,h.position.z-2,7,1,2.2)}async function Om(h,g,x){let S=g.userData.i,R=ae.bahce[S]||(ae.bahce[S]={});await bi(h,g.position.x,g.position.z-.9,async()=>{if(_c(h,g.position.x,g.position.z),x){await h.bir("PickUp"),h.oyna("Idle");return}let N=q(R);if(N<0){if(!vn(5))return;await h.bir("PickUp"),h.oyna("Idle"),ae.bahce[S]={ekim:Date.now(),su:Date.now(),renk:C[Math.floor(Math.random()*C.length)],eken:t},ut(),Mt("\u{1F331} Lale ektin! 6 saatte a\xE7ar, arada sula \u{1F4A7}"),oi()}else N===3?(await h.bir("PickUp"),h.oyna("Idle"),ae.bahce[S]={},ae.toplanan=(ae.toplanan||0)+1,ut(),Ks(g.position.x,g.position.z,8),en(15,"Lale toplad\u0131n \u{1F337}"),oi()):Date.now()-(R.su||0)>2*ne?(await h.bir("Interact"),h.oyna("Idle"),Hm(g.position.x,g.position.z),R.su=Date.now(),ut(),en(1,"Sulad\u0131n \u{1F4A7}","sula",8),oi()):(await h.bir("Interact"),h.oyna("Idle"),Mt(`\u{1F4A7} Sulanm\u0131\u015F \xB7 ${je(R)}`));Jn({t:"kullan",id:g.userData.id})})}let ta=[],Fm=Rn(64,64,h=>{h.font="52px serif",h.textAlign="center",h.textBaseline="middle",h.fillText("\u{1F497}",32,36)}),zm=Rn(32,32,h=>{h.fillStyle="#7cc7ff",h.beginPath(),h.arc(16,18,9,0,7),h.fill()}),NM=Rn(64,64,h=>{h.font="bold 40px sans-serif",h.fillStyle="#9C7BD3",h.textAlign="center",h.textBaseline="middle",h.fillText("z",32,34)}),Bm=Rn(16,16,h=>{h.fillStyle="#fff",h.fillRect(0,0,16,10)});function uo(h,g,x,S,R,N,V){let W=new Ua(new Fr({map:h,transparent:!0,depthWrite:!1,color:V||"#ffffff"}));return W.position.set(g,x,S),W.scale.setScalar(R),W.userData=Object.assign({vx:0,vy:0,vz:0,g:0,t:0,omur:1.6},N),c.add(W),ta.push(W),W}function Ks(h,g,x=10,S=1.6){for(let R=0;R<x;R++)uo(Fm,h+(Math.random()-.5)*.6,S+Math.random()*.3,g+(Math.random()-.5)*.6,.28+Math.random()*.2,{vy:.5+Math.random()*.6,vx:(Math.random()-.5)*.3})}function Hm(h,g){for(let x=0;x<14;x++)uo(zm,h+(Math.random()-.5)*1.1,1.2+Math.random()*.4,g+(Math.random()-.5)*.6,.09,{vy:-1.6-Math.random(),omur:.8})}function xc(h,g,x,S=40){let R=["#C9233F","#E8577A","#F7A8BE","#f5a524","#9C7BD3","#5b9e5a"];for(let N=0;N<S;N++){let V=Math.random()*6.283,W=1+Math.random()*1.6;uo(Bm,h,g,x,.07,{vx:Math.cos(V)*(.5+Math.random()),vz:Math.sin(V)*(.5+Math.random()),vy:W*1.8,g:4.5,omur:1.8},R[N%R.length])}}async function Gm(h,g,x){let S=ae.hediyeler.find(R=>R.id===g.userData.id);if(S){if(!x&&S.kimden===t){Mt(`\u{1F381} Bu hediye ${o[Bt.rol]} i\xE7in, o a\xE7acak`);return}await bi(h,g.position.x,g.position.z+.6,async()=>{_c(h,g.position.x,g.position.z),await h.bir("PickUp"),h.oyna("Idle");let R=g.userData.kapak,N=performance.now(),V=()=>{let W=Math.min(1,(performance.now()-N)/700);R.position.y=.26+W*.35,R.rotation.z=W*.9,W<1&&requestAnimationFrame(V)};V(),xc(g.position.x,(S.y||0)+.4,g.position.z,50),Ks(g.position.x,g.position.z,10,1.1),!x&&(S.acildi=Date.now(),S.acan=t,setTimeout(()=>{ut()},1600),en(5,"Hediye a\xE7t\u0131n \u{1F381}"),jd(S))})}}let fo=[["\u{1F337}","Lale","#C9233F"],["\u{1F36B}","\xC7ikolata","#7a4a2c"],["\u{1F48C}","Mektup","#E8577A"],["\u{1F9F8}","Ay\u0131c\u0131k","#c99561"],["\u2615","Kahve","#34131F"],["\u{1F48D}","S\xFCrpriz","#9C7BD3"]];function jd(h){let g=fo.find(S=>S[0]===h.tur)||fo[0],x=Qt("#leKart");x.replaceChildren(ke("div",{class:"le-kart-ic"},ke("span",{class:"le-kart-em"},g[0]),ke("small",null,`${o[r(h.kimden)||"A"]} sana ${g[1].toLocaleLowerCase("tr")} b\u0131rakt\u0131`),ke("p",null,h.not||"\u{1F90D}"),ke("em",null,Vd(new Date(h.at).toISOString().slice(0,10))),ke("button",{type:"button",onclick:()=>x.classList.remove("on")},"Kapat \u{1F90D}"))),x.classList.add("on")}function Yd(){let h=Qt("#leHediye"),g=fo[0],x=ae.hediyeler.filter(W=>W.kimden===t&&!W.acildi),S=ae.hediyeler.filter(W=>W.kimden!==t).slice(-6).reverse(),R=ke("textarea",{rows:3,maxlength:160,placeholder:`${o[Bt.rol]} hediyeyi a\xE7\u0131nca bunu okuyacak\u2026`}),N=ke("div",{class:"le-turlar"},...fo.map(W=>{let _e=ke("button",{type:"button",class:W===g?"on":"",onclick:()=>{g=W,N.querySelectorAll("button").forEach(ve=>ve.classList.remove("on")),_e.classList.add("on")}},ke("span",null,W[0]),W[1]);return _e})),V=ke("button",{type:"button",class:"le-ana"},"Hediyeyi b\u0131rak \xB7 \u{1F337} 10");V.onclick=()=>{if(x.length>=3){Mt("\u{1F381} A\xE7\u0131lmam\u0131\u015F 3 hediyen var, \xF6nce onlar\u0131 a\xE7s\u0131n");return}if(!vn(10))return;let W=[...Nt.values()].find(qe=>qe.userData.ustY),_e,ve,Ie=0;W&&!ae.hediyeler.some(qe=>!qe.acildi&&qe.y)?(_e=W.position.x+.42,ve=W.position.z+.05,Ie=W.userData.ustY):(_e=Rt.g.position.x+.5,ve=Rt.g.position.z+.3),ae.hediyeler.push({id:"h"+Date.now().toString(36),kimden:t,tur:g[0],renk:g[2],not:R.value.trim(),x:_e,z:ve,y:Ie,r:Math.random()*1.5,at:Date.now()}),ae.hediyeler=ae.hediyeler.slice(-30),ut(),h.classList.remove("on"),Mt(`\u{1F381} Hediye b\u0131rak\u0131ld\u0131, ${o[Bt.rol]} a\xE7\u0131nca haberin olacak`),Ks(_e,ve,6,1)},h.replaceChildren(...[ke("div",{class:"le-sh"},ke("h3",null,"Hediye b\u0131rak"),ke("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),ke("p",{class:"le-sub"},`${o[Bt.rol]} oyuna girince sehpada bulacak. A\xE7\u0131nca konfeti patlar, notunu okur.`),N,R,V,S.length?ke("div",{class:"le-gecmis"},ke("p",{class:"le-sub"},"Sana gelen hediyeler"),...S.map(W=>ke("button",{type:"button",class:"le-gh",onclick:()=>W.acildi&&jd(W)},ke("span",null,W.tur),ke("b",null,W.not?W.not.slice(0,40)+(W.not.length>40?"\u2026":""):"Notsuz"),ke("em",null,W.acildi?"\u2713":"evde, a\xE7\u0131lmad\u0131")))):null].filter(Boolean)),h.classList.add("on")}let Zs=null,po=!1,mo=0,yc=[["Yal\u0131n \xB7 Yeniden","muzik/yeniden.mp3.bin"],["Yal\u0131n \xB7 Ben Bilmem","muzik/ben-bilmem.mp3.bin"]];async function Vm(){if(!s.decUrl){Mt("M\xFCzik i\xE7in siteden giri\u015F gerekli");return}if(po){Zs.pause(),po=!1,mo=(mo+1)%yc.length,Mt("\u23F8 M\xFCzik durdu");return}try{Zs=Zs||new Audio,Zs.loop=!0,Zs.src=await s.decUrl(yc[mo][1]),await Zs.play(),po=!0,Mt("\u{1F3B5} "+yc[mo][0])}catch{Mt("M\xFCzik a\xE7\u0131lamad\u0131")}}async function go(h,g,x){if(g==="saril")return x?void 0:(na&&ua(!1),Ms.request(h));if(!h.hugLock){if(g==="sevin")await co(h),Ks(h.g.position.x,h.g.position.z,6),await h.bir("Cheer"),h.oyna("Idle");else if(g==="selam")await co(h),await h.bir("Interact"),h.oyna("Idle");else if(g==="kos"){let S=me.x0+1+Math.random()*7,R=P+.6+Math.random()*2.6;await bi(h,S,R,null,!0)}x||Jn({t:"emote",tur:g})}}let na=!1,Js=!1,_i=new ce(new Xa(.5,.56,48),new jt({color:"#E8577A",transparent:!0,opacity:.9,depthWrite:!1}));_i.rotation.x=-Math.PI/2,_i.position.y=.03,_i.visible=!1,c.add(_i);function bo(){Oe=null,Js=!1,_i.visible=!1,ha()}function ia(h){Oe=h,Js=!1;let g=h.userData.kutu;_i.position.set((g.x0+g.x1)/2,.03,(g.z0+g.z1)/2),_i.scale.setScalar(Math.max(g.x1-g.x0,g.z1-g.z0)*.95+.3),_i.visible=!0,ha()}let _o=h=>ae.esyalar.find(g=>g.id===h.userData.id);function vc(h,g){let x=g.userData.kutu,S=x.x1-x.x0,R=x.z1-x.z0,N=h.x+((x.x0+x.x1)/2-g.position.x),V=h.z+((x.z0+x.z1)/2-g.position.z),W={x0:N-S/2,x1:N+S/2,z0:V-R/2,z1:V+R/2},_e=te(g.position.x);if(W.x0<_e.ox-Ne.w/2+.05||W.x1>_e.ox+Ne.w/2-.05||W.z0<-Ne.d/2+.05||W.z1>Ne.d/2+.2||te(h.x)!==_e)return"Odan\u0131n d\u0131\u015F\u0131na ta\u015F\u0131yor";if(g.userData.zemin)return"";for(let ve of Nt.values()){if(ve===g||ve.userData.zemin)continue;let Ie=ve.userData.kutu;if(W.x0<Ie.x1-.02&&W.x1>Ie.x0+.02&&W.z0<Ie.z1-.02&&W.z1>Ie.z0+.02)return"Burada ba\u015Fka e\u015Fya var"}return""}function Kd(h,g){let x=te(h),S=x.ox-Ne.w/2,R=(N,V,W)=>Math.max(V,Math.min(W,N));return h-S<g+Ne.d/2?{x:S+.12,z:Math.round(R(g,-Ne.d/2+1,Ne.d/2-1.2)*4)/4,r:Math.PI/2}:{x:Math.round(R(h,S+1,x.ox+Ne.w/2-1)*4)/4,z:-Ne.d/2+.12,r:0}}function Wm(h,g){let x=_o(Oe);if(!x)return;if(Oe.userData.asili){Object.assign(x,Kd(h,g)),gi(Oe,x),ut(),ia(Oe),Mt("\u2713 Duvara as\u0131ld\u0131");return}let S={x:Math.round(h*4)/4,z:Math.round(g*4)/4},R=vc(S,Oe);if(R){Mt("\u{1F645} "+R);return}Object.assign(x,S),ut(),ia(Oe),Mt("\u2713 Yerle\u015Fti")}function Xm(){let h=_o(Oe);if(!h)return;if(Oe.userData.asili){Mt("\u{1F5BC}\uFE0F Duvar s\xFCs\xFC: ta\u015F\u0131y\u0131nca en yak\u0131n duvara as\u0131l\u0131r");return}let g=h.r||0;if(h.r=(g+Math.PI/2)%(Math.PI*2),gi(Oe,h),vc(h,Oe)){h.r=g,gi(Oe,h),Mt("\u{1F645} D\xF6nd\xFCr\xFCnce s\u0131\u011Fm\u0131yor");return}ut(),ia(Oe)}function qm(){let h=_o(Oe);h&&(ae.esyalar=ae.esyalar.filter(g=>g!==h),ae.depo.push(h.t),bo(),ut(),Mt("\u{1F4E6} Depoya kald\u0131r\u0131ld\u0131"))}function jm(h){let[g,x]=[Rt.g.position.x,Rt.g.position.z],S=te(g).ox;h.position.x=S;for(let R=0;R<8;R+=.5)for(let N=0;N<16;N++){let V=Math.max(S-3.8,Math.min(S+3.8,g+Math.cos(N/16*6.283)*R)),W=Math.max(-3,Math.min(3,x+Math.sin(N/16*6.283)*R)),_e={x:Math.round(V*4)/4,z:Math.round(W*4)/4};if(!vc(_e,h))return _e}return null}function Mc(h,g){let x=Pe[h];if(!x)return;if(g&&vt()<x[2]){Mt(`\u{1F337} ${x[2]} lale puan\u0131 laz\u0131m, ${vt()} var`);return}let S={id:"e"+Date.now().toString(36),t:h,x:0,z:0,r:0},R=$r(S),N=R.userData.asili?Kd(Rt.g.position.x,Rt.g.position.z):jm(R);if(!N){c.remove(R),Nt.delete(S.id),Mt("\u{1F645} Odada yer kalmad\u0131, bir \u015Feyi depoya kald\u0131r");return}if(g)vn(x[2]);else{let V=ae.depo.indexOf(h);V>=0&&ae.depo.splice(V,1)}Object.assign(S,N),gi(R,S),ae.esyalar.push(S),ut(),Eo(),ua(!0),ia(R),Js=!0,ha(),Mt("Yeni yerine dokun \xB7 \u21BB ile \xE7evir")}let Ym=h=>new D(h.ox,.6,h.id==="salon"?1.6:0),Km=m.position.x;function Sc(h,g){let x=Ym(h),S=p.position.clone().sub(_.target);g?(_.target.copy(x),p.position.copy(x).add(S)):Ln={t0:performance.now(),sure:700,ft:_.target.clone(),fp:p.position.clone(),tt:x,tp:x.clone().add(S)},m.position.x=Km+h.ox,m.target.position.x=h.ox,Te.visible=h.id==="salon",ai(),xo()}function Zm(h){let g=Qt("#lePerde");if(!g)return h();g.classList.add("on"),setTimeout(()=>{h(),setTimeout(()=>g.classList.remove("on"),120)},280)}async function $s(h,g,x){if(h.hugLock)return;let S=j.find(N=>N.id===g);if(!S)return;if(!pt(g)){x||sa();return}if(te(h.g.position.x)===S){h===Rt&&Sc(S);return}h.token=(h.token||0)+1,h.path=[],h.sonra=null;let R=async()=>{h.durum!=="ayakta"&&(h.durum="ayakta",h.yer=null,h.oyna("Idle")),h.g.position.set(S.ox-Ne.w/2+.75,0,S.id==="teras"?2.4:2.2),h.g.rotation.y=Math.PI/2,h===Rt&&Sc(S,!0)};h===Rt?Zm(R):await R(),x||(Jn({t:"oda",id:g}),vo()),h===Rt&&setTimeout(()=>Mt(`${S.em} ${S.ad}`),400)}async function Zd(h){let g=j.find(S=>S.id===h);if(!g||pt(h)||!vn(g.fiyat))return;h==="mutfak"&&await Xe(),ae.odalar=ae.odalar||{},ae.odalar[h]=!0,(Ge[h]||[]).forEach(([S,R,N,V],W)=>ae.esyalar.push({id:"o"+h+W+Date.now().toString(36).slice(-3),t:S,x:g.ox+R,z:N,r:V})),ut(),xc(Rt.g.position.x,1.5,Rt.g.position.z,60),Mt(`\u{1F389} ${g.ad} a\xE7\u0131ld\u0131!`);let x=Qt("#leOdaSec");x&&x.classList.remove("on"),Eo(),setTimeout(()=>$s(Rt,h),900)}function xo(){let h=Qt("#leOdalar");if(!h||!Ue)return;let g=te(Rt.g.position.x).id,x=te(Bt.g.position.x).id;h.replaceChildren(...j.map(S=>ke("button",{type:"button",class:(S.id===g?"on ":"")+(pt(S.id)?"":"kilit"),onclick:()=>pt(S.id)?$s(Rt,S.id):sa()},S.em+" "+S.ad,pt(S.id)?S.id===x&&Bt.online?ke("i",{class:"o"},o[Bt.rol][0]):null:ke("i",null,"\u{1F512}"))))}function sa(){let h=Qt("#leOdaSec");h.replaceChildren(ke("div",{class:"le-sh"},ke("h3",null,"Evimiz"),ke("span",{class:"le-pp"},"\u{1F337} "+vt()),ke("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),ke("p",{class:"le-sub"},"Odalara git ya da lale puan\u0131yla yeni oda a\xE7. Her odan\u0131n kendine \xF6zel \u015Feyleri var."),ke("div",{class:"le-odalist"},...j.map(g=>ke("div",{class:"le-oda"+(pt(g.id)?"":" kilit")},ke("span",null,g.em),ke("div",null,ke("b",null,g.ad),ke("small",null,{salon:"Koltuk, pikap, bah\xE7e ve laleler",yatak:'\xC7ift ki\u015Filik yatak, foto\u011Fraflar\u0131m\u0131z \xB7 birlikte yat\u0131nca "\u0130yi geceler"',mutfak:"Ocakta yemek pi\u015Fir, birlikte ye, semaverde \xE7ay demle, buzdolab\u0131na not as",teras:"\u0130stanbul manzaras\u0131, ip lambalar, teleskopla kayan y\u0131ld\u0131za dilek tut"}[g.id])),pt(g.id)?ke("button",{type:"button",class:"le-git",onclick:()=>{h.classList.remove("on"),$s(Rt,g.id)}},te(Rt.g.position.x)===g?"Buradas\u0131n":"Git"):ke("button",{type:"button",class:"le-git ac"+(vt()<g.fiyat?" pahali":""),onclick:()=>Zd(g.id)},`A\xE7 \xB7 \u{1F337} ${g.fiyat}`))))),h.classList.add("on")}let Jd=new Ka,$d=new ue,ra=null;l.domElement.addEventListener("pointerdown",h=>{ra=[h.clientX,h.clientY,performance.now()],Ln&&!Ln.geri&&(Ln=null)});let yo=h=>{let g=h.object;for(;g;){if(pe.has(g)||H.includes(g)||Ri.includes(g)||at.includes(g)||qn.has(g.userData&&g.userData.id)||Nt.get(g.userData&&g.userData.id)===g||g===Ue.A.g||g===Ue.B.g)return g;g=g.parent}return null};l.domElement.addEventListener("pointerup",h=>{if(!ra||Math.hypot(h.clientX-ra[0],h.clientY-ra[1])>8||performance.now()-ra[2]>450)return;let g=l.domElement.getBoundingClientRect();$d.set((h.clientX-g.left)/g.width*2-1,-(h.clientY-g.top)/g.height*2+1),Jd.setFromCamera($d,p);let x=Jd.intersectObjects([...Nt.values(),...Ri,...at,...qn.values(),Ue.A.g,Ue.B.g,...H,...pe],!0);if(na){let S=x.find(N=>pe.has(yo(N)));if(Oe&&Js){S&&Wm(S.point.x,S.point.z);return}let R=x.find(N=>{let V=yo(N);return V&&Nt.get(V.userData.id)===V});R?ia(yo(R)):bo();return}for(let S of x){let R=yo(S);if(R){if(R===Ue.A.g||R===Ue.B.g){let N=R===Ue.A.g?Ue.A:Ue.B;if(N===Rt){aa(N.g.position.x,N.boy*.6,N.g.position.z,4.6);return}go(Rt,"saril");return}if(pe.has(R)){if(te(S.point.x)!==te(Rt.g.position.x))return;bi(Rt,S.point.x,S.point.z,()=>vo()),Qd(S.point.x,S.point.z),Jn({t:"git",x:S.point.x,z:S.point.z});return}if(R.userData.act){ea(Rt,R),Qd(R.position.x,R.position.z);return}}}});let xi=new ce(new Xa(.18,.26,32),new jt({color:"#E8577A",transparent:!0,opacity:0,depthWrite:!1}));xi.rotation.x=-Math.PI/2,xi.position.y=.02,c.add(xi);function Qd(h,g){xi.position.x=h,xi.position.z=g,xi.material.opacity=.9,xi.scale.setScalar(.6)}let Ln=null;function aa(h,g,x,S=5.2,R=.9,N=0){let V=p.position.clone().sub(_.target).normalize().multiplyScalar(S),W=N?{t:_.target.clone(),p:p.position.clone()}:null;Ln={t0:performance.now(),sure:R*1e3,ft:_.target.clone(),fp:p.position.clone(),tt:new D(h,g,x),tp:new D(h,g,x).add(V),geri:N,eski:W}}function Jm(){if(!Ln)return;let h=Math.min(1,(performance.now()-Ln.t0)/Ln.sure),g=h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;if(_.target.lerpVectors(Ln.ft,Ln.tt,g),p.position.lerpVectors(Ln.fp,Ln.tp,g),h>=1){let x=Ln;Ln=null,x.geri&&x.eski&&setTimeout(()=>{Ln={t0:performance.now(),sure:900,ft:_.target.clone(),fp:p.position.clone(),tt:x.eski.t,tp:x.eski.p}},x.geri*1e3)}}let $m=()=>{let h=te(Rt.g.position.x);aa(h.ox,.6,h.id==="salon"?1.6:0,p.aspect<1?h.id==="salon"?24:20:h.id==="salon"?19:16)},oa=h=>({x:+h.g.position.x.toFixed(2),z:+h.g.position.z.toFixed(2),r:+h.g.rotation.y.toFixed(2),d:h.durum,yer:h.yer?{id:h.yer.m.userData.id}:null});function Jn(h){zt&&zt.send({type:"broadcast",event:"m",payload:Object.assign({who:t,rol:a},h)})}let ef=h=>Nt.get(h)||Ri.find(g=>g.userData.id===h)||at.find(g=>g.userData.id===h)||qn.get(h);function tf(h,g,x){if(!h.hugLock&&g){if(g.yer){let S=ef(g.yer.id);if(S){x&&h.g.position.set(g.x,0,g.z),ea(h,S,!0);return}}x?(h.g.position.set(g.x,0,g.z),h.g.rotation.y=g.r||0):bi(h,g.x,g.z)}}let nf=0;function vo(){Lt||(clearTimeout(nf),nf=setTimeout(()=>{i.from("state").upsert({scope:"oyun",id:t,value:Object.assign(oa(Rt),{at:new Date().toISOString()})},{onConflict:"scope,id"}).then(()=>{},()=>{})},1200))}addEventListener("pagehide",()=>{Lt||i.from("state").upsert({scope:"oyun",id:t,value:Object.assign(oa(Rt),{at:new Date().toISOString()})},{onConflict:"scope,id"})});function Mo(h,g){Bt.online=h,Bt.tag.classList.toggle("off",!h),Bt.tag.querySelector("i").textContent=h?"":g?"\u{1F4A4}":"";let x=Qt("#leDurum");x&&(x.textContent=h?`${o[Bt.rol]} ${te(Bt.g.position.x).yer} \u{1F7E2}`:`${o[Bt.rol]} \u015Fu an yok`+(g?" \xB7 "+g:""),x.classList.toggle("on",h)),h&&en(10,`${o[Bt.rol]} ile ayn\u0131 anda evdesiniz \u{1F3E1}`,"birlikte")}let sf=h=>{let g=(Date.now()-Date.parse(h))/6e4;return g>=0?g<2?"az \xF6nce":g<60?Math.round(g)+" dk \xF6nce":g<1440?Math.round(g/60)+" sa \xF6nce":Math.round(g/1440)+" g\xFCn \xF6nce":""};if(Lt)try{let h=JSON.parse(localStorage.getItem("le-ev")||"null");h&&h.esyalar&&(ae=h);let g=JSON.parse(localStorage.getItem("le-puan")||"null");g&&(nt[t]=g)}catch{}else try{let{data:h}=await i.from("state").select("scope,id,value").in("scope",["oyun_ev","oyun_puan"]);(h||[]).forEach(g=>{g.scope==="oyun_ev"&&g.value&&g.value.esyalar&&(ae=g.value),g.scope==="oyun_puan"&&(nt[g.id.toLowerCase()]=g.value||{})})}catch{}if(nt[t]||(nt[t]={kazanc:30}),ae.odalar&&ae.odalar.mutfak)try{await Xe()}catch{}ae.sandalye2||(ae.sandalye2=!0,ae.esyalar.forEach(h=>{if(!/^chair_[AB]_wood$/.test(h.t))return;let g=te(h.x),x=h.x-g.ox;(g.id==="mutfak"&&Math.abs(x-.6)<.01&&(Math.abs(h.z-1.75)<.01||Math.abs(h.z-.05)<.01)||g.id==="teras"&&Math.abs(x)<.01&&(Math.abs(h.z-1.05)<.01||Math.abs(h.z+.65)<.01))&&(h.r=((h.r||0)+Math.PI)%(Math.PI*2))})),ae.esyalar.forEach(h=>{h.t==="chair_A_wood"&&Math.abs(h.x+2.5)<.01&&(Math.abs(h.z-1.55)<.01?h.z=1.3:Math.abs(h.z-3.05)<.01&&(h.z=3.3))}),ae.esyalar=ae.esyalar.filter(h=>Pe[h.t]),ae.depo=(ae.depo||[]).filter(h=>Pe[h]),delete ae.kedi;let rf=!1;if(ae.bizim1||(ae.bizim1=!0,ae.depo.push("polaroid_ip","tarih_cerceve"),rf=!0),Vt(),Lt)Mo(!1,"");else{try{let{data:h}=await i.from("state").select("id,value").eq("scope","oyun"),g=null;(h||[]).forEach(S=>{let R=S.id.toLowerCase(),N=R===t?Rt:Bt;R!==t&&(g=S.value&&S.value.at),tf(N,S.value,!0)});let x=[...Nt.values()].find(S=>S.userData.act==="yat");if(g&&Date.now()-Date.parse(g)>30*6e4&&x){let S=Hd(Bt,x);Bt.g.position.set(S.cik[0],0,S.cik[1]),ea(Bt,x,!0)}Mo(!1,g?sf(g):"")}catch{}try{zt=i.channel("lale-evi",{config:{presence:{key:t},broadcast:{self:!1}}}),zt.on("broadcast",{event:"m"},({payload:h})=>{if(!h||h.who===t)return;let g=Ue[h.rol]||Bt;if(h.t==="hug"){Ms.receive(h.plan,h.rol);return}if(h.t==="git")te(h.x)!==te(g.g.position.x)?$s(g,te(h.x).id,!0).then(()=>bi(g,h.x,h.z)):bi(g,h.x,h.z);else if(h.t==="oda")$s(g,h.id,!0),xo();else if(h.t==="kullan"){let x=ef(h.id);x&&ea(g,x,!0)}else if(h.t==="emote")go(g,h.tur,!0);else if(h.t==="selam?")Jn(Object.assign({t:"durum"},oa(Rt)));else if(h.t==="durum")tf(g,h,!1);else if(h.t==="ev"&&h.ev&&h.ev.esyalar){let x=(h.ev.hediyeler||[]).filter(S=>!S.acildi&&S.kimden!==t&&!ae.hediyeler.some(R=>R.id===S.id));ae=h.ev,Vt(),x.length&&Mt(`\u{1F381} ${o[Bt.rol]} sana hediye b\u0131rakt\u0131!`)}else h.t==="puan"&&h.v&&(nt[h.who]=h.v,ca())}),zt.on("presence",{event:"sync"},()=>{let h=zt.presenceState();Mo(Object.keys(h).some(g=>g!==t),"")}),zt.on("presence",{event:"join"},({key:h})=>{h!==t&&(Mt(`${o[Bt.rol]} eve geldi \u{1F3E1}`),Jn(Object.assign({t:"durum"},oa(Rt))))}),zt.on("presence",{event:"leave"},({key:h})=>{h!==t&&(Ms.cancel(),Mo(!1,"az \xF6nce"))}),zt.subscribe(h=>{h==="SUBSCRIBED"&&(zt.track({at:Date.now()}),Jn({t:"selam?"}))})}catch{zt=null}}Sc(te(Rt.g.position.x),!0),setInterval(()=>{if(xo(),Bt.online){let h=Qt("#leDurum");h&&(h.textContent=`${o[Bt.rol]} ${te(Bt.g.position.x).yer} \u{1F7E2}`)}},2500);{let h=ae.hediyeler.filter(g=>!g.acildi&&g.kimden!==t);h.length&&setTimeout(()=>Mt(`\u{1F381} Sehpada senin i\xE7in ${h.length>1?h.length+" hediye":"bir hediye"} var!`),3200)}let la={soru:!1,duygu:!1,not:!1};async function Qm(){if(Lt)return;let h=Qe();try{let g=await i.from("soru_cevap").select("day").eq("day",h).eq("author",t);la.soru=!!(g.data&&g.data.length)}catch{}try{((await i.from("state").select("scope,updated_at").in("scope",["duygu","not"]).eq("updated_by",t).gte("updated_at",h+"T00:00:00+03:00")).data||[]).forEach(x=>{la[x.scope]=!0})}catch{}la.soru&&en(10,"G\xFCn\xFCn sorusunu cevaplad\u0131n \u2753","soru"),la.duygu&&en(5,"Duygunu se\xE7tin \u{1F3A8}","duygu"),la.not&&en(5,"Not b\u0131rakt\u0131n \u{1F4CC}","not"),oi()}let af=()=>{let h=it(),g=h.al||{},x=ae.bahce.filter(N=>N.ekim&&q(N)<3&&Date.now()-(N.su||0)>2*ne).length,S=ae.bahce.filter(N=>q(N)===3).length,R=ae.hediyeler.filter(N=>!N.acildi&&N.kimden!==t).length;return[["\u{1F3E1}","Eve u\u011Fra",10,!!g.giris],["\u2753","Sitede g\xFCn\xFCn sorusunu cevapla",10,!!g.soru],["\u{1F3A8}","Sitede bug\xFCnk\xFC duygunu se\xE7",5,!!g.duygu],["\u{1F4CC}",`${o[Bt.rol]} i\xE7in sitede not b\u0131rak`,5,!!g.not],["\u{1F4A7}",x?`${x} lale su bekliyor`:"Laleleri sula","1 / lale",x===0&&ae.bahce.some(N=>N.ekim)],["\u{1F337}",S?`${S} lale a\xE7t\u0131, topla!`:"A\xE7an laleyi topla",15,!1],["\u{1F381}",R?`Sehpada ${R} hediye var, a\xE7!`:"Hediye gelirse a\xE7",5,R===0],["\u{1F917}",`Sar\u0131l (${g.saril||0}/5)`,3,(g.saril||0)>=5],["\u{1F6CB}\uFE0F","Ayn\u0131 koltukta yan yana otur",10,!!g.yanyana],["\u{1F3E0}",`${o[Bt.rol]} ile ayn\u0131 anda evde ol`,10,!!g.birlikte],...pt("mutfak")?[["\u{1F373}","Mutfakta yemek pi\u015Fir",5,!!g.pisir],["\u{1F60B}","Mutfak masas\u0131nda birlikte ye",15,!!g.yemek],["\u{1FAD6}","Semaverde \xE7ay demle",2,!!g.cay]]:[["\u{1F373}","Mutfa\u011F\u0131 a\xE7 (Evimiz)","",!1]],...pt("yatak")?[["\u{1F319}",'Ayn\u0131 yatakta "iyi geceler"',10,!!g.iyigece]]:[],...pt("teras")?[["\u{1F320}","Terasta teleskopla dilek tut",3,!!g.yildiz]]:[]]};function oi(){let h=Qt("#leIsBtn");if(h){let g=af().filter(S=>!S[3]).length,x=h.querySelector("i");x&&(x.textContent=g||"\u2713")}Qt("#leIsler")&&Qt("#leIsler").classList.contains("on")&&Ec()}function Ec(){let h=Qt("#leIsler");h.replaceChildren(ke("div",{class:"le-sh"},ke("h3",null,"G\xFCn\xFCn i\u015Fleri"),ke("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),ke("p",{class:"le-sub"},`Ortak lale puan\u0131n\u0131z: \u{1F337} ${vt()} \xB7 Toplanan lale: ${ae.toplanan||0}`),ke("ul",{class:"le-is"},...af().map(([g,x,S,R])=>ke("li",{class:R?"ok":""},ke("span",null,g),ke("b",null,x),ke("em",null,R?"\u2713":"+"+S)))),ke("p",{class:"le-sub"},"Puanlar ikinizin ortak kumbaras\u0131. Ma\u011Fazadan e\u015Fya al\u0131n, bah\xE7eye lale ekin, birbirinize hediye b\u0131rak\u0131n.")),h.classList.add("on")}let So="Modern";function Eo(){let h=Qt("#leMagaza");h&&h.classList.remove("on")}function eg(){if(!confirm("Salondaki mobilyalar depoya kald\u0131r\u0131l\u0131p modern tak\u0131m yerle\u015Ftirilsin mi? (Depodan istedi\u011Fin zaman geri koyabilirsin)"))return;let h=x=>x==="pikap"||Pe[x]&&Pe[x][3]==="Bizim";ae.esyalar=ae.esyalar.filter(x=>te(x.x).id!=="salon"||h(x.t)?!0:(ae.depo.push(x.t),!1));let g=ae.esyalar.find(x=>x.t==="pikap"&&te(x.x).id==="salon");g&&Object.assign(g,{x:-3.9,z:-3,r:0}),Y.SALON.forEach(([x,S,R,N],V)=>{let W=ae.depo.indexOf(x);W>=0&&ae.depo.splice(W,1),ae.esyalar.push({id:"md"+Date.now().toString(36)+V,t:x,x:S,z:R,r:N})}),Eo(),ut(),[Ue.A,Ue.B].forEach(x=>{te(x.g.position.x).id==="salon"&&x.durum==="ayakta"&&(x.path=[],x.g.position.set(.6,0,-.2))}),xc(.6,1,-1),Mt("\u2728 Salon modern d\xF6\u015Fendi \xB7 eski e\u015Fyalar depoda")}function wc(){let h=Qt("#leMagaza"),g=[...new Set(Object.values(Pe).map(S=>S[3]))].filter(S=>S!=="Mutfak"||Se.m_fridge_A_decorated),x={};ae.depo.forEach(S=>{x[S]=(x[S]||0)+1}),h.replaceChildren(...[ke("div",{class:"le-sh"},ke("h3",null,"Ma\u011Faza"),ke("span",{class:"le-pp"},"\u{1F337} "+vt()),ke("button",{type:"button",class:"le-x",onclick:Eo},"\xD7")),Object.keys(x).length?ke("div",{class:"le-depo"},ke("p",{class:"le-sub"},"\u{1F4E6} Depoda"),ke("div",{class:"le-grid"},...Object.entries(x).map(([S,R])=>ke("button",{type:"button",class:"le-urun",onclick:()=>Mc(S,!1)},ke("span",null,Pe[S][0]),ke("b",null,Pe[S][1]+(R>1?" \xD7"+R:"")),ke("em",null,"Yerle\u015Ftir"))))):null,So==="Modern"?ke("button",{type:"button",class:"le-hazir",onclick:eg},"\u2728 Salonu haz\u0131r modern tak\u0131mla d\xF6\u015Fe (\xFCcretsiz)"):null,ke("div",{class:"le-tabs"},...g.map(S=>ke("button",{type:"button",class:S===So?"on":"",onclick:()=>{So=S,wc()}},S))),ke("div",{class:"le-grid"},...Object.entries(Pe).filter(([,S])=>S[3]===So).map(([S,R])=>ke("button",{type:"button",class:"le-urun"+(vt()<R[2]?" pahali":""),onclick:()=>Mc(S,!0)},ke("span",null,R[0]),ke("b",null,R[1]),ke("em",null,"\u{1F337} "+R[2]))))].filter(Boolean)),h.classList.add("on")}function Mt(h){let g=Qt("#leIpucu");g&&(g.textContent=h,g.classList.add("on"),clearTimeout(g._t),g._t=setTimeout(()=>g.classList.remove("on"),2800))}function tg(h,g){let x=Qt("#lePuan");x&&(x.classList.remove("pop"),x.offsetWidth,x.classList.add("pop")),Mt(`+${h} \u{1F337} ${g}`)}function ca(){let h=Qt("#lePuan");h&&(h.textContent="\u{1F337} "+vt())}function ha(){let h=Qt("#leDuzen");if(!h)return;h.hidden=!na;let g=Oe?Pe[Oe.userData.tip]:null;h.replaceChildren(Oe&&g?ke("div",{class:"le-dz"},ke("b",null,g[0]+" "+g[1]),ke("button",{type:"button",onclick:()=>{Js=!0,ha(),Mt("Yeni yerine dokun")},class:Js?"on":""},"\u270B Ta\u015F\u0131"),ke("button",{type:"button",onclick:Xm},"\u21BB \xC7evir"),ke("button",{type:"button",onclick:qm},"\u{1F4E6} Kald\u0131r")):ke("div",{class:"le-dz"},ke("b",null,"Bir e\u015Fyaya dokun")),ke("button",{type:"button",class:"le-bitti",onclick:()=>ua(!1)},"\u2713 Bitti"))}function ua(h){Ms.busy||(na=h,document.body.classList.toggle("le-duzende",h),h?(Rt.path=[],ha(),Oe||Mt("D\xFCzenleme: e\u015Fyaya dokun, sonra ta\u015F\u0131 veya \xE7evir")):bo())}let Ji=(h,g)=>{let x=Qt(h);x&&(x.onclick=g)};document.querySelectorAll("[data-emote]").forEach(h=>h.onclick=()=>{go(Rt,h.dataset.emote);let g=Qt("#leSevgi");g&&g.classList.remove("on")}),Ji("#leSevgiBtn",()=>{let h=Qt("#leSevgi");h&&h.classList.toggle("on")}),Ji("#leMagazaBtn",wc),Ji("#leDuzenBtn",()=>ua(!na)),Ji("#leIsBtn",Ec),Ji("#leHediyeBtn",Yd),Ji("#leKameraBtn",$m),Ji("#leEvBtn",sa),ca(),setTimeout(()=>{en(10,"Eve ho\u015F geldin","giris"),Qm(),oi()},1500),setInterval(()=>{Ri.forEach((h,g)=>$e(h,ae.bahce[g])),oi()},6e4),rf&&(ut(),setTimeout(()=>Mt("\u{1F381} Depoya 2 ki\u015Fisel e\u015Fya geldi \xB7 Ma\u011Faza \u2192 \u{1F4E6} Depoda"),3500)),Mt("Dokun, y\xFCr\xFC. E\u015Fyalara, bah\xE7eye ve duvardaki foto\u011Fraflara dokun \u{1F337}");let Tc=/Android|iPhone|iPad/i.test(navigator.userAgent),Ss="yuksek";try{Ss=localStorage.getItem("le-kalite")||((navigator.hardwareConcurrency||4)<4?"dusuk":"yuksek")}catch{}let Es=new cc(l);Es.setPixelRatio(Math.min(Tc?1.5:2,devicePixelRatio||1)),Es.addPass(new hc(c,p));let wo=new so(c,p,300,300);wo.blendIntensity=.85,wo.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.2,scale:1,samples:Tc?10:16}),wo.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:Tc?8:16}),Es.addPass(wo),Es.addPass(new Jr(new ue(300,300),d?.55:.12,.4,d?.7:1.05)),Es.addPass(new fc);function To(h){Ss=h;try{localStorage.setItem("le-kalite",h)}catch{}let g=Qt("#leKalite");g&&(g.textContent=h==="yuksek"?"\u2728":"\u26A1");let x=h==="yuksek"?2048:1024;m.shadow.mapSize.set(x,x),m.shadow.map&&(m.shadow.map.dispose(),m.shadow.map=null)}Ji("#leKalite",()=>{To(Ss==="yuksek"?"dusuk":"yuksek"),Mt(Ss==="yuksek"?"\u2728 Y\xFCksek g\xF6r\xFCnt\xFC kalitesi":"\u26A1 H\u0131zl\u0131 mod (pil dostu)")}),To(Ss);let of=0,Ac=0,lf=Ss==="yuksek"&&!window.__leHiz;function ng(h){if(lf&&(of++,Ac+=h,Ac>4)){let g=of/Ac;lf=!1,g<24&&(To("dusuk"),Mt("\u26A1 Telefonun i\xE7in h\u0131zl\u0131 moda ge\xE7tim \xB7 \u2728 ile de\u011Fi\u015Ftirebilirsin"))}}let ig=new Xr,Ao=new D,cf=!0;function sg(h,g,x,S){Ao.set(g,x,S).project(p);let R=l.domElement.getBoundingClientRect();h.style.transform=`translate(${(Ao.x*.5+.5)*R.width}px, ${(-Ao.y*.5+.5)*R.height}px) translate(-50%,-100%)`,h.style.visibility=Ao.z<1?"visible":"hidden"}function hf(){let h=e.clientWidth,g=e.clientHeight;l.setSize(h,g,!1),Es.setSize(h,g),p.aspect=h/g,p.fov=h<g?42:30,p.updateProjectionMatrix(),cf&&(cf=!1,h<g&&p.position.set(10.5,14.5,15.5))}new ResizeObserver(hf).observe(e),hf(),l.setAnimationLoop(()=>{let h=Math.min(.1,ig.getDelta()),g=performance.now()/1e3,x=window.__leHiz||1;Ms.beforeFrame();for(let R of[Ue.A,Ue.B]){if(R.path.length&&R.durum==="ayakta"){let[N,V]=R.path[0],W=R.g.position,_e=N-W.x,ve=V-W.z,Ie=Math.hypot(_e,ve);if(Ie<.05){if(R.path.shift(),!R.path.length){R.kosu=!1,R.oyna("Idle");let qe=R.sonra;R.sonra=null,qe&&qe()}}else{let qe=Math.min(Ie,(R.kosu?R.hiz*1.7:R.hiz)*h);W.x+=_e/Ie*qe,W.z+=ve/Ie*qe,R.g.rotation.y=wM(R.g.rotation.y,Math.atan2(_e,ve),Math.min(1,h*12))}}R.mixer.update(h*x),sg(R.tag,R.g.position.x,R.g.position.y+(R.durum==="yatiyor"?.9:R.durum==="oturuyor"||R.durum==="yerde"?R.boy*.82+.15:R.boy+.25),R.g.position.z)}Ms.afterFrame();for(let R=ta.length-1;R>=0;R--){let N=ta[R],V=N.userData;V.t+=h,V.vy-=V.g*h,N.position.x+=V.vx*h,N.position.y+=V.vy*h,N.position.z+=V.vz*h,N.material.opacity=Math.max(0,1-V.t/V.omur),(V.t>V.omur||N.position.y<-.2)&&(c.remove(N),N.material.dispose(),ta.splice(R,1))}xi.material.opacity>0&&(xi.material.opacity-=h*1.5,xi.scale.multiplyScalar(1+h*1.2)),_i.visible&&(_i.material.opacity=.55+Math.sin(g*4)*.35),Nt.forEach(R=>R.userData.anim&&R.userData.anim(h,g)),qn.forEach(R=>{let N=ae.hediyeler.find(V=>V.id===R.userData.id);N&&(R.position.y=(N.y||0)+Math.abs(Math.sin(g*2.2))*.04),R.rotation.y+=h*.3}),v.intensity+=((ys?6:0)-v.intensity)*Math.min(1,h*6),po&&Nt.forEach(R=>R.userData.plak&&R.userData.plak.forEach(N=>N.rotation.y+=h*3.5)),U.forEach((R,N)=>{R.rotation.z=Math.sin(g*.9+N*1.7)*.035,R.scale.x=1+Math.sin(g*1.3+N)*.04});let S=re.attributes.position;for(let R=0;R<De;R++){let N=S.getY(R)+h*(.04+R%5*.01);N>2.6&&(N=.3),S.setY(R,N),S.setX(R,S.getX(R)+Math.sin(g*.5+R)*h*.03)}S.needsUpdate=!0,ng(h),Jm(),_.update(),Ss==="yuksek"?Es.render():l.render(c,p)});let rg=(h,g,x,S=0)=>{let R={id:"tst"+Math.random().toString(36).slice(2,7),t:h,x:g,z:x,r:S};return ae.esyalar.push(R),Vt(),Nt.get(R.id)},ag=()=>{ae.esyalar=ae.esyalar.filter(h=>te(h.x).id!=="salon"),Vt()},og=h=>{h.updateMatrixWorld(!0);let g=[];for(let x=-.7;x<=.71;x+=.05)g.push([+x.toFixed(2),+Zi(h,h.position.x,h.position.z+x).toFixed(2)]);return g};return window.__le={testKoy:rg,testTemizle:ag,testProfil:og,odaGit:$s,odaAc:Zd,odaSecAc:sa,ODA:j,odaOf:te,buzAc:qd,K:Ue,ben:Rt,o:Bt,git:bi,kullan:ea,emote:go,scene:c,camera:p,controls:_,EV:()=>ae,PUAN:nt,puan:vt,ekle:Mc,duzenAc:ua,magazaAc:wc,islerAc:Ec,hediyeBirakAc:Yd,parsel:Ri,esyaObj:Nt,kazan:en,hug:Ms,duvarFoto:at,hediyeObj:qn,kameraOdak:aa,kaliteAyarla:To},window.__le}window.LaleEvi={start:wm};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
