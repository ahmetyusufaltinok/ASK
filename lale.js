(()=>{var Su="169",Is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qm=0,af=1,jm=2;var Tp=1,Ym=2,oi=3,_i=0,Tn=1,un=2,sn=0,pr=1,Ss=2,of=3,lf=4,Eu=5,Zn=100,Km=101,Zm=102,Jm=103,$m=104,Fr=200,Qm=201,eg=202,tg=203,ih=204,sh=205,zl=206,ng=207,Hl=208,ig=209,sg=210,rg=211,ag=212,og=213,lg=214,rh=0,ah=1,oh=2,_r=3,lh=4,ch=5,hh=6,uh=7,Ap=0,cg=1,hg=2,Qi=0,wu=1,Tu=2,Au=3,Ru=4,ug=5,Cu=6,Va=7,cf="attached",dg="detached",Rp=300,xr=301,yr=302,dh=303,fh=304,Gl=306,dn=1e3,ki=1001,Sa=1002,nn=1003,Pu=1004;var cr=1005;var kn=1006,ga=1007;var bi=1008;var ui=1009,Cp=1010,Pp=1011,Ea=1012,Iu=1013,Es=1014,hi=1015,Un=1016,Du=1017,Lu=1018,es=1020,Ip=35902,Dp=1021,Lp=1022,Nn=1023,kp=1024,Np=1025,mr=1026,ts=1027,ku=1028,Nu=1029,Up=1030,Uu=1031;var Ou=1033,Jo=33776,$o=33777,Qo=33778,el=33779,ph=35840,mh=35841,gh=35842,bh=35843,_h=36196,xh=37492,yh=37496,vh=37808,Mh=37809,Sh=37810,Eh=37811,wh=37812,Th=37813,Ah=37814,Rh=37815,Ch=37816,Ph=37817,Ih=37818,Dh=37819,Lh=37820,kh=37821,tl=36492,Nh=36494,Uh=36495,Op=36283,Oh=36284,Fh=36285,Bh=36286,Fu=2200,fg=2201,pg=2202,vr=2300,Mr=2301,yc=2302,hr=2400,ur=2401,il=2402,Bu=2500,mg=2501,Fp=0,Vl=1,Wa=2,gg=3200,bg=3201;var zu=0,_g=1,Zi="",Zt="srgb",mn="srgb-linear",Hu="display-p3",Wl="display-p3-linear",sl="linear",Ut="srgb",rl="rec709",al="p3";var Ws=7680;var hf=519,xg=512,yg=513,vg=514,Bp=515,Mg=516,Sg=517,Eg=518,wg=519,zh=35044;var uf="300 es",Ni=2e3,ol=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],df=1234567,ba=Math.PI/180,Sr=180/Math.PI;function Jn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function $t(s,e,t){return Math.max(e,Math.min(t,s))}function Gu(s,e){return(s%e+e)%e}function Tg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ag(s,e,t){return s!==e?(t-s)/(e-s):0}function _a(s,e,t){return(1-t)*s+t*e}function Rg(s,e,t,n){return _a(s,e,1-Math.exp(-t*n))}function Cg(s,e=1){return e-Math.abs(Gu(s,e*2)-e)}function Pg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ig(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Dg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Lg(s,e){return s+Math.random()*(e-s)}function kg(s){return s*(.5-Math.random())}function Ng(s){s!==void 0&&(df=s);let e=df+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ug(s){return s*ba}function Og(s){return s*Sr}function Fg(s){return(s&s-1)===0&&s!==0}function Bg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hg(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*_,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*_,o*c);break;case"ZYZ":s.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Xl={DEG2RAD:ba,RAD2DEG:Sr,generateUUID:Jn,clamp:$t,euclideanModulo:Gu,mapLinear:Tg,inverseLerp:Ag,lerp:_a,damp:Rg,pingpong:Cg,smoothstep:Pg,smootherstep:Ig,randInt:Dg,randFloat:Lg,randFloatSpread:kg,seededRandom:Ng,degToRad:Ug,radToDeg:Og,isPowerOfTwo:Fg,ceilPowerOfTwo:Bg,floorPowerOfTwo:zg,setQuaternionFromProperEuler:Hg,normalize:Lt,denormalize:ci},oe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],_=n[8],v=i[0],b=i[3],m=i[6],T=i[1],y=i[4],E=i[7],U=i[2],D=i[5],L=i[8];return r[0]=a*v+o*T+l*U,r[3]=a*b+o*y+l*D,r[6]=a*m+o*E+l*L,r[1]=c*v+u*T+d*U,r[4]=c*b+u*y+d*D,r[7]=c*m+u*E+d*L,r[2]=f*v+p*T+_*U,r[5]=f*b+p*y+_*D,r[8]=f*m+p*E+_*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=t*d+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=d*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vc.makeScale(e,t)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,t){return this.premultiply(vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vc=new pt;function zp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gg(){let s=wa("canvas");return s.style.display="block",s}var ff={};function nl(s){s in ff||(ff[s]=!0,console.warn(s))}function Vg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wg(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xg(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var pf=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mf=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[mn]:{transfer:sl,primaries:rl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Zt]:{transfer:Ut,primaries:rl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Wl]:{transfer:sl,primaries:al,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(mf),fromReference:s=>s.applyMatrix3(pf)},[Hu]:{transfer:Ut,primaries:al,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(mf),fromReference:s=>s.applyMatrix3(pf).convertLinearToSRGB()}},qg=new Set([mn,Wl]),St={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!qg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=ia[e].toReference,i=ia[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ia[s].primaries},getTransfer:function(s){return s===Zi?sl:ia[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(ia[e].luminanceCoefficients)}};function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xs,Hh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=wa("canvas")),Xs.width=e.width,Xs.height=e.height;let n=Xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=wa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=gr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gr(t[n]/255)*255):t[n]=gr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jg=0,ll=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Sc(i[a].image)):r.push(Sc(i[a]))}else r=Sc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Sc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Hh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yg=0,fn=class s extends xi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ki,i=ki,r=kn,a=bi,o=Nn,l=ui,c=s.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Jn(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dn:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dn:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Rp;fn.DEFAULT_ANISOTROPY=1;var Pt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],b=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-b)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+b)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,E=(p+1)/2,U=(m+1)/2,D=(u+f)/4,L=(d+v)/4,O=(_+b)/4;return y>E&&y>U?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=D/n,r=L/n):E>U?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=D/i,r=O/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=L/r,i=O/r),this.set(n,i,r,t),this}let T=Math.sqrt((b-_)*(b-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(b-_)/T,this.y=(d-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gh=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ll(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Gh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cl=class extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vh=class extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==p||u!==_){let b=1-o,m=l*f+c*p+u*_+d*v,T=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let U=Math.sqrt(y),D=Math.atan2(U,m*T);b=Math.sin(b*D)/U,o=Math.sin(o*D)/U}let E=o*T;if(l=l*b+f*E,c=c*b+p*E,u=u*b+_*E,d=d*b+v*E,b===1-o){let U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-o*p,e[t+2]=c*_+u*p+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),f=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ec=new k,gf=new rn,an=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),xo.subVectors(this.max,sa),qs.subVectors(e.a,sa),js.subVectors(e.b,sa),Ys.subVectors(e.c,sa),Wi.subVectors(js,qs),Xi.subVectors(Ys,js),ms.subVectors(qs,Ys);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ms.z,ms.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ms.z,0,-ms.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ms.y,ms.x,0];return!wc(t,qs,js,Ys,xo)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,qs,js,Ys,xo))?!1:(yo.crossVectors(Wi,Xi),t=[yo.x,yo.y,yo.z],wc(t,qs,js,Ys,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ri=[new k,new k,new k,new k,new k,new k,new k,new k],si=new k,_o=new an,qs=new k,js=new k,Ys=new k,Wi=new k,Xi=new k,ms=new k,sa=new k,xo=new k,yo=new k,gs=new k;function wc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){gs.fromArray(s,r);let o=i.x*Math.abs(gs.x)+i.y*Math.abs(gs.y)+i.z*Math.abs(gs.z),l=e.dot(gs),c=t.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Kg=new an,ra=new k,Tc=new k,Gn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);let t=ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ra,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Tc)),this.expandByPoint(ra.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new k,Ac=new k,vo=new k,qi=new k,Rc=new k,Mo=new k,Cc=new k,Ui=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ac.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Ac);let r=e.distanceTo(t)*.5,a=-this.direction.dot(vo),o=qi.dot(this.direction),l=-qi.dot(vo),c=qi.lengthSq(),u=Math.abs(1-a*a),d,f,p,_;if(u>0)if(d=a*l-o,f=a*o-l,_=r*u,d>=0)if(f>=-_)if(f<=_){let v=1/u;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ac).addScaledVector(vo,f),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,i,r){Rc.subVectors(t,e),Mo.subVectors(n,e),Cc.crossVectors(Rc,Mo);let a=this.direction.dot(Cc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);let l=o*this.direction.dot(Mo.crossVectors(qi,Mo));if(l<0)return null;let c=o*this.direction.dot(Rc.cross(qi));if(c<0||l+c>a)return null;let u=-o*qi.dot(Cc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class s{constructor(e,t,n,i,r,a,o,l,c,u,d,f,p,_,v,b){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,f,p,_,v,b)}set(e,t,n,i,r,a,o,l,c,u,d,f,p,_,v,b){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=v,m[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),a=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*d,_=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f+v*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*d,_=o*u,v=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){let f=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Jg)}lookAt(e,t,n){let i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ji.crossVectors(n,zn),ji.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ji.crossVectors(n,zn)),ji.normalize(),So.crossVectors(zn,ji),i[0]=ji.x,i[4]=So.x,i[8]=zn.x,i[1]=ji.y,i[5]=So.y,i[9]=zn.y,i[2]=ji.z,i[6]=So.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],_=n[2],v=n[6],b=n[10],m=n[14],T=n[3],y=n[7],E=n[11],U=n[15],D=i[0],L=i[4],O=i[8],Z=i[12],M=i[1],R=i[5],q=i[9],X=i[13],K=i[2],ce=i[6],j=i[10],fe=i[14],ee=i[3],Se=i[7],Pe=i[11],Re=i[15];return r[0]=a*D+o*M+l*K+c*ee,r[4]=a*L+o*R+l*ce+c*Se,r[8]=a*O+o*q+l*j+c*Pe,r[12]=a*Z+o*X+l*fe+c*Re,r[1]=u*D+d*M+f*K+p*ee,r[5]=u*L+d*R+f*ce+p*Se,r[9]=u*O+d*q+f*j+p*Pe,r[13]=u*Z+d*X+f*fe+p*Re,r[2]=_*D+v*M+b*K+m*ee,r[6]=_*L+v*R+b*ce+m*Se,r[10]=_*O+v*q+b*j+m*Pe,r[14]=_*Z+v*X+b*fe+m*Re,r[3]=T*D+y*M+E*K+U*ee,r[7]=T*L+y*R+E*ce+U*Se,r[11]=T*O+y*q+E*j+U*Pe,r[15]=T*Z+y*X+E*fe+U*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],b=e[11],m=e[15];return _*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+b*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+m*(-i*o*u-t*l*d+t*o*f+i*a*d-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],b=e[14],m=e[15],T=d*b*c-v*f*c+v*l*p-o*b*p-d*l*m+o*f*m,y=_*f*c-u*b*c-_*l*p+a*b*p+u*l*m-a*f*m,E=u*v*c-_*d*c+_*o*p-a*v*p-u*o*m+a*d*m,U=_*d*l-u*v*l-_*o*f+a*v*f+u*o*b-a*d*b,D=t*T+n*y+i*E+r*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/D;return e[0]=T*L,e[1]=(v*f*r-d*b*r-v*i*p+n*b*p+d*i*m-n*f*m)*L,e[2]=(o*b*r-v*l*r+v*i*c-n*b*c-o*i*m+n*l*m)*L,e[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*p-n*l*p)*L,e[4]=y*L,e[5]=(u*b*r-_*f*r+_*i*p-t*b*p-u*i*m+t*f*m)*L,e[6]=(_*l*r-a*b*r-_*i*c+t*b*c+a*i*m-t*l*m)*L,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*p+t*l*p)*L,e[8]=E*L,e[9]=(_*d*r-u*v*r-_*n*p+t*v*p+u*n*m-t*d*m)*L,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*m+t*o*m)*L,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*p-t*o*p)*L,e[12]=U*L,e[13]=(u*v*i-_*d*i+_*n*f-t*v*f-u*n*b+t*d*b)*L,e[14]=(_*o*i-a*v*i-_*n*l+t*v*l+a*n*b-t*o*b)*L,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*f+t*o*f)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,_=r*d,v=a*u,b=a*d,m=o*d,T=l*c,y=l*u,E=l*d,U=n.x,D=n.y,L=n.z;return i[0]=(1-(v+m))*U,i[1]=(p+E)*U,i[2]=(_-y)*U,i[3]=0,i[4]=(p-E)*D,i[5]=(1-(f+m))*D,i[6]=(b+T)*D,i[7]=0,i[8]=(_+y)*L,i[9]=(b-T)*L,i[10]=(1-(f+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ks.set(i[0],i[1],i[2]).length(),a=Ks.set(i[4],i[5],i[6]).length(),o=Ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ri.copy(this);let c=1/r,u=1/a,d=1/o;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ni){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,_;if(o===Ni)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ol)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ni){let l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-r),f=(t+e)*c,p=(n+i)*u,_,v;if(o===Ni)_=(a+r)*d,v=-2*d;else if(o===ol)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ks=new k,ri=new Qe,Zg=new k(0,0,0),Jg=new k(1,1,1),ji=new k,So=new k,zn=new k,bf=new Qe,_f=new rn,yi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _f.setFromEuler(this),this.setFromQuaternion(_f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$g=0,xf=new k,Zs=new rn,Pi=new Qe,Eo=new k,aa=new k,Qg=new k,e0=new rn,yf=new k(1,0,0),vf=new k(0,1,0),Mf=new k(0,0,1),Sf={type:"added"},t0={type:"removed"},Js={type:"childadded",child:null},Pc={type:"childremoved",child:null},Vt=class s extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new k,t=new yi,n=new rn,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new pt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(yf,e)}rotateY(e){return this.rotateOnAxis(vf,e)}rotateZ(e){return this.rotateOnAxis(Mf,e)}translateOnAxis(e,t){return xf.copy(e).applyQuaternion(this.quaternion),this.position.add(xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yf,e)}translateY(e){return this.translateOnAxis(vf,e)}translateZ(e){return this.translateOnAxis(Mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(aa,Eo,this.up):Pi.lookAt(Eo,aa,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),Zs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sf),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t0),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sf),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,Qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Vt.DEFAULT_UP=new k(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new k,Ii=new k,Ic=new k,Di=new k,$s=new k,Qs=new k,Ef=new k,Dc=new k,Lc=new k,kc=new k,Nc=new Pt,Uc=new Pt,Oc=new Pt,Ji=class s{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ai.subVectors(e,t),i.cross(ai);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ai.subVectors(i,t),Ii.subVectors(n,t),Ic.subVectors(e,t);let a=ai.dot(ai),o=ai.dot(Ii),l=ai.dot(Ic),c=Ii.dot(Ii),u=Ii.dot(Ic),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Nc.setScalar(0),Uc.setScalar(0),Oc.setScalar(0),Nc.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Nc,r.x),a.addScaledVector(Uc,r.y),a.addScaledVector(Oc,r.z),a}static isFrontFacing(e,t,n,i){return ai.subVectors(n,t),Ii.subVectors(e,t),ai.cross(Ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ai.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;$s.subVectors(i,n),Qs.subVectors(r,n),Dc.subVectors(e,n);let l=$s.dot(Dc),c=Qs.dot(Dc);if(l<=0&&c<=0)return t.copy(n);Lc.subVectors(e,i);let u=$s.dot(Lc),d=Qs.dot(Lc);if(u>=0&&d<=u)return t.copy(i);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector($s,a);kc.subVectors(e,r);let p=$s.dot(kc),_=Qs.dot(kc);if(_>=0&&p<=_)return t.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Qs,o);let b=u*_-p*d;if(b<=0&&d-u>=0&&p-_>=0)return Ef.subVectors(r,i),o=(d-u)/(d-u+(p-_)),t.copy(i).addScaledVector(Ef,o);let m=1/(b+v+f);return a=v*m,o=f*m,t.copy(n).addScaledVector($s,a).addScaledVector(Qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Fc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=Gu(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fc(a,r,e+1/3),this.g=Fc(a,r,e),this.b=Fc(a,r,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=Hp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Mc(e.r),this.g=Mc(e.g),this.b=Mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return St.fromWorkingColorSpace(wn.copy(this),e),Math.round($t(wn.r*255,0,255))*65536+Math.round($t(wn.g*255,0,255))*256+Math.round($t(wn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,r=wn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Zt){St.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,i=wn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(wo);let n=_a(Yi.h,wo.h,t),i=_a(Yi.s,wo.s,t),r=_a(Yi.l,wo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Ke;Ke.NAMES=Hp;var n0=0,Dn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=pr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ih&&(n.blendSrc=this.blendSrc),this.blendDst!==sh&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wt=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new k,To=new oe,Kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zh&&(e.usage=this.usage),e}};var hl=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ul=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Et=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},i0=0,Kn=new Qe,Bc=new Vt,er=new k,Hn=new an,oa=new an,hn=new k,Xt=class s extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zp(e)?ul:hl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Hn.min,oa.min),Hn.expandByPoint(hn),hn.addVectors(Hn.max,oa.max),Hn.expandByPoint(hn)):(Hn.expandByPoint(oa.min),Hn.expandByPoint(oa.max))}Hn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)hn.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),hn.add(er)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new k,l[O]=new k;let c=new k,u=new k,d=new k,f=new oe,p=new oe,_=new oe,v=new k,b=new k;function m(O,Z,M){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,Z),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,O),p.fromBufferAttribute(r,Z),_.fromBufferAttribute(r,M),u.sub(c),d.sub(c),p.sub(f),_.sub(f);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(R),b.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(R),o[O].add(v),o[Z].add(v),o[M].add(v),l[O].add(b),l[Z].add(b),l[M].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,Z=T.length;O<Z;++O){let M=T[O],R=M.start,q=M.count;for(let X=R,K=R+q;X<K;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let y=new k,E=new k,U=new k,D=new k;function L(O){U.fromBufferAttribute(i,O),D.copy(U);let Z=o[O];y.copy(Z),y.sub(U.multiplyScalar(U.dot(Z))).normalize(),E.crossVectors(D,Z);let R=E.dot(l[O])<0?-1:1;a.setXYZW(O,y.x,y.y,y.z,R)}for(let O=0,Z=T.length;O<Z;++O){let M=T[O],R=M.start,q=M.count;for(let X=R,K=R+q;X<K;X+=3)L(e.getX(X+0)),L(e.getX(X+1)),L(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let _=e.getX(f+0),v=e.getX(f+1),b=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,b),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,b),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,_=0;for(let v=0,b=l.length;v<b;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let m=0;m<u;m++)f[_++]=c[p++]}return new Kt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wf=new Qe,bs=new Ui,Ao=new Gn,Tf=new k,Ro=new k,Co=new k,Po=new k,zc=new k,Io=new k,Af=new k,Do=new k,ae=class extends Vt{constructor(e=new Xt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(zc.fromBufferAttribute(d,e),a?Io.addScaledVector(zc,u):Io.addScaledVector(zc.sub(t),u))}t.add(Io)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(Ao.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ao,Tf)===null||bs.origin.distanceToSquared(Tf)>(e.far-e.near)**2))&&(wf.copy(r).invert(),bs.copy(e.ray).applyMatrix4(wf),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let b=f[_],m=a[b.materialIndex],T=Math.max(b.start,p.start),y=Math.min(o.count,Math.min(b.start+b.count,p.start+p.count));for(let E=T,U=y;E<U;E+=3){let D=o.getX(E),L=o.getX(E+1),O=o.getX(E+2);i=Lo(this,m,e,n,c,u,d,D,L,O),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let b=_,m=v;b<m;b+=3){let T=o.getX(b),y=o.getX(b+1),E=o.getX(b+2);i=Lo(this,a,e,n,c,u,d,T,y,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let b=f[_],m=a[b.materialIndex],T=Math.max(b.start,p.start),y=Math.min(l.count,Math.min(b.start+b.count,p.start+p.count));for(let E=T,U=y;E<U;E+=3){let D=E,L=E+1,O=E+2;i=Lo(this,m,e,n,c,u,d,D,L,O),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let b=_,m=v;b<m;b+=3){let T=b,y=b+1,E=b+2;i=Lo(this,a,e,n,c,u,d,T,y,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}};function s0(s,e,t,n,i,r,a,o){let l;if(e.side===Tn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===_i,o),l===null)return null;Do.copy(o),Do.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:s}}function Lo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ro),s.getVertexPosition(l,Co),s.getVertexPosition(c,Po);let u=s0(s,e,t,n,Ro,Co,Po,Af);if(u){let d=new k;Ji.getBarycoord(Af,Ro,Co,Po,d),i&&(u.uv=Ji.getInterpolatedAttribute(i,o,l,c,d,new oe)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,o,l,c,d,new oe)),a&&(u.normal=Ji.getInterpolatedAttribute(a,o,l,c,d,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new k,materialIndex:0};Ji.getNormal(Ro,Co,Po,f.normal),u.face=f,u.barycoord=d}return u}var ct=class s extends Xt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function _(v,b,m,T,y,E,U,D,L,O,Z){let M=E/L,R=U/O,q=E/2,X=U/2,K=D/2,ce=L+1,j=O+1,fe=0,ee=0,Se=new k;for(let Pe=0;Pe<j;Pe++){let Re=Pe*R-X;for(let at=0;at<ce;at++){let dt=at*M-q;Se[v]=dt*T,Se[b]=Re*y,Se[m]=K,c.push(Se.x,Se.y,Se.z),Se[v]=0,Se[b]=0,Se[m]=D>0?1:-1,u.push(Se.x,Se.y,Se.z),d.push(at/L),d.push(1-Pe/O),fe+=1}}for(let Pe=0;Pe<O;Pe++)for(let Re=0;Re<L;Re++){let at=f+Re+ce*Pe,dt=f+Re+ce*(Pe+1),le=f+(Re+1)+ce*(Pe+1),F=f+(Re+1)+ce*Pe;l.push(at,dt,F),l.push(dt,le,F),ee+=6}o.addGroup(p,ee,Z),p+=ee,f+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Er(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function In(s){let e={};for(let t=0;t<s.length;t++){let n=Er(s[t]);for(let i in n)e[i]=n[i]}return e}function r0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gp(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}var On={clone:Er,merge:In},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},dl=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new k,Rf=new oe,Cf=new oe,tn=class extends dl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tr=-90,nr=1,Wh=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new tn(tr,nr,e,t);i.layers=this.layers,this.add(i);let r=new tn(tr,nr,e,t);r.layers=this.layers,this.add(r);let a=new tn(tr,nr,e,t);a.layers=this.layers,this.add(a);let o=new tn(tr,nr,e,t);o.layers=this.layers,this.add(o);let l=new tn(tr,nr,e,t);l.layers=this.layers,this.add(l);let c=new tn(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},fl=class extends fn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xh=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ct(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:sn});r.uniforms.tEquirect.value=t;let a=new ae(i,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=kn),new Wh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Hc=new k,l0=new k,c0=new pt,li=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Hc.subVectors(n,t).cross(l0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Hc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||c0.getNormalMatrix(e),i=this.coplanarPoint(Hc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new Gn,ko=new k,Aa=class{constructor(e=new li,t=new li,n=new li,i=new li,r=new li,a=new li){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],p=i[8],_=i[9],v=i[10],b=i[11],m=i[12],T=i[13],y=i[14],E=i[15];if(n[0].setComponents(l-r,f-c,b-p,E-m).normalize(),n[1].setComponents(l+r,f+c,b+p,E+m).normalize(),n[2].setComponents(l+a,f+u,b+_,E+T).normalize(),n[3].setComponents(l-a,f-u,b-_,E-T).normalize(),n[4].setComponents(l-o,f-d,b-v,E-y).normalize(),t===Ni)n[5].setComponents(l+o,f+d,b+v,E+y).normalize();else if(t===ol)n[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ko.x=i.normal.x>0?e.max.x:e.min.x,ko.y=i.normal.y>0?e.max.y:e.min.y,ko.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function h0(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let v=d[p];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var xn=class s extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,p=[],_=[],v=[],b=[];for(let m=0;m<u;m++){let T=m*f-a;for(let y=0;y<c;y++){let E=y*d-r;_.push(E,-T,0),v.push(0,0,1),b.push(y/o),b.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){let y=T+c*m,E=T+c*(m+1),U=T+1+c*(m+1),D=T+1+c*m;p.push(y,E,D),p.push(E,U,D)}this.setIndex(p),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,k0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`
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
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nb=`uniform bool receiveShadow;
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
#endif`,ib=`#ifdef USE_ENVMAP
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
#endif`,sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lb=`PhysicalMaterial material;
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
#endif`,cb=`struct PhysicalMaterial {
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
}`,hb=`
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
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
#endif`,db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yb=`#if defined( USE_POINTS_UV )
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
#endif`,vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lb=`#ifdef USE_NORMALMAP
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
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kb=`float getShadowMask() {
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
}`,Zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qb=`#ifdef USE_SKINNING
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
#endif`,e_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`#include <common>
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
}`,b_=`#if DEPTH_PACKING == 3200
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
}`,__=`#define DISTANCE
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
}`,x_=`#define DISTANCE
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`uniform float scale;
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
}`,S_=`uniform vec3 diffuse;
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
}`,E_=`#include <common>
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
}`,w_=`uniform vec3 diffuse;
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
}`,T_=`#define LAMBERT
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
}`,A_=`#define LAMBERT
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
}`,R_=`#define MATCAP
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
}`,C_=`#define MATCAP
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
}`,P_=`#define NORMAL
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
}`,I_=`#define NORMAL
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
}`,D_=`#define PHONG
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
}`,L_=`#define PHONG
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
}`,k_=`#define STANDARD
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
}`,N_=`#define STANDARD
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
}`,U_=`#define TOON
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
}`,O_=`#define TOON
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
}`,F_=`uniform float size;
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,H_=`uniform vec3 color;
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
}`,G_=`uniform float rotation;
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
}`,V_=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:u0,alphahash_pars_fragment:d0,alphamap_fragment:f0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:b0,aomap_pars_fragment:_0,batching_pars_vertex:x0,batching_vertex:y0,begin_vertex:v0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:E0,bumpmap_pars_fragment:w0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:I0,color_pars_vertex:D0,color_vertex:L0,common:k0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:U0,displacementmap_pars_vertex:O0,displacementmap_vertex:F0,emissivemap_fragment:B0,emissivemap_pars_fragment:z0,colorspace_fragment:H0,colorspace_pars_fragment:G0,envmap_fragment:V0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:ib,envmap_vertex:j0,fog_vertex:Y0,fog_pars_vertex:K0,fog_fragment:Z0,fog_pars_fragment:J0,gradientmap_pars_fragment:$0,lightmap_pars_fragment:Q0,lights_lambert_fragment:eb,lights_lambert_pars_fragment:tb,lights_pars_begin:nb,lights_toon_fragment:sb,lights_toon_pars_fragment:rb,lights_phong_fragment:ab,lights_phong_pars_fragment:ob,lights_physical_fragment:lb,lights_physical_pars_fragment:cb,lights_fragment_begin:hb,lights_fragment_maps:ub,lights_fragment_end:db,logdepthbuf_fragment:fb,logdepthbuf_pars_fragment:pb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:gb,map_fragment:bb,map_pars_fragment:_b,map_particle_fragment:xb,map_particle_pars_fragment:yb,metalnessmap_fragment:vb,metalnessmap_pars_fragment:Mb,morphinstance_vertex:Sb,morphcolor_vertex:Eb,morphnormal_vertex:wb,morphtarget_pars_vertex:Tb,morphtarget_vertex:Ab,normal_fragment_begin:Rb,normal_fragment_maps:Cb,normal_pars_fragment:Pb,normal_pars_vertex:Ib,normal_vertex:Db,normalmap_pars_fragment:Lb,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Ub,iridescence_pars_fragment:Ob,opaque_fragment:Fb,packing:Bb,premultiplied_alpha_fragment:zb,project_vertex:Hb,dithering_fragment:Gb,dithering_pars_fragment:Vb,roughnessmap_fragment:Wb,roughnessmap_pars_fragment:Xb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:jb,shadowmap_vertex:Yb,shadowmask_pars_fragment:Kb,skinbase_vertex:Zb,skinning_pars_vertex:Jb,skinning_vertex:$b,skinnormal_vertex:Qb,specularmap_fragment:e_,specularmap_pars_fragment:t_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:s_,transmission_pars_fragment:r_,uv_pars_fragment:a_,uv_pars_vertex:o_,uv_vertex:l_,worldpos_vertex:c_,background_vert:h_,background_frag:u_,backgroundCube_vert:d_,backgroundCube_frag:f_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:b_,distanceRGBA_vert:__,distanceRGBA_frag:x_,equirect_vert:y_,equirect_frag:v_,linedashed_vert:M_,linedashed_frag:S_,meshbasic_vert:E_,meshbasic_frag:w_,meshlambert_vert:T_,meshlambert_frag:A_,meshmatcap_vert:R_,meshmatcap_frag:C_,meshnormal_vert:P_,meshnormal_frag:I_,meshphong_vert:D_,meshphong_frag:L_,meshphysical_vert:k_,meshphysical_frag:N_,meshtoon_vert:U_,meshtoon_frag:O_,points_vert:F_,points_frag:B_,shadow_vert:z_,shadow_frag:H_,sprite_vert:G_,sprite_frag:V_},Oe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},gi={basic:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:In([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:In([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:In([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:In([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:In([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:In([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:In([Oe.common,Oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:In([Oe.lights,Oe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};gi.physical={uniforms:In([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var No={r:0,b:0,g:0},xs=new yi,W_=new Qe;function X_(s,e,t,n,i,r,a){let o=new Ke(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function v(T){let y=!1,E=_(T);E===null?m(o,l):E&&E.isColor&&(m(E,1),y=!0);let U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(T,y){let E=_(y);E&&(E.isCubeTexture||E.mapping===Gl)?(u===void 0&&(u=new ae(new ct(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Er(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xs.copy(y.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(xs)),u.material.toneMapped=St.getTransfer(E.colorSpace)!==Ut,(d!==E||f!==E.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,p=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ae(new xn(2,2),new Ht({name:"BackgroundMaterial",uniforms:Er(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=St.getTransfer(E.colorSpace)!==Ut,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,p=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,y){T.getRGB(No,Gp(s)),n.buffers.color.setClear(No.r,No.g,No.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(o,l)},render:v,addToRenderList:b}}function q_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(M,R,q,X,K){let ce=!1,j=d(X,q,R);r!==j&&(r=j,c(r.object)),ce=p(M,X,q,K),ce&&_(M,X,q,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(ce||a)&&(a=!1,E(M,R,q,X),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function d(M,R,q){let X=q.wireframe===!0,K=n[M.id];K===void 0&&(K={},n[M.id]=K);let ce=K[R.id];ce===void 0&&(ce={},K[R.id]=ce);let j=ce[X];return j===void 0&&(j=f(l()),ce[X]=j),j}function f(M){let R=[],q=[],X=[];for(let K=0;K<t;K++)R[K]=0,q[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:q,attributeDivisors:X,object:M,attributes:{},index:null}}function p(M,R,q,X){let K=r.attributes,ce=R.attributes,j=0,fe=q.getAttributes();for(let ee in fe)if(fe[ee].location>=0){let Pe=K[ee],Re=ce[ee];if(Re===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(Re=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(Re=M.instanceColor)),Pe===void 0||Pe.attribute!==Re||Re&&Pe.data!==Re.data)return!0;j++}return r.attributesNum!==j||r.index!==X}function _(M,R,q,X){let K={},ce=R.attributes,j=0,fe=q.getAttributes();for(let ee in fe)if(fe[ee].location>=0){let Pe=ce[ee];Pe===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(Pe=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(Pe=M.instanceColor));let Re={};Re.attribute=Pe,Pe&&Pe.data&&(Re.data=Pe.data),K[ee]=Re,j++}r.attributes=K,r.attributesNum=j,r.index=X}function v(){let M=r.newAttributes;for(let R=0,q=M.length;R<q;R++)M[R]=0}function b(M){m(M,0)}function m(M,R){let q=r.newAttributes,X=r.enabledAttributes,K=r.attributeDivisors;q[M]=1,X[M]===0&&(s.enableVertexAttribArray(M),X[M]=1),K[M]!==R&&(s.vertexAttribDivisor(M,R),K[M]=R)}function T(){let M=r.newAttributes,R=r.enabledAttributes;for(let q=0,X=R.length;q<X;q++)R[q]!==M[q]&&(s.disableVertexAttribArray(q),R[q]=0)}function y(M,R,q,X,K,ce,j){j===!0?s.vertexAttribIPointer(M,R,q,K,ce):s.vertexAttribPointer(M,R,q,X,K,ce)}function E(M,R,q,X){v();let K=X.attributes,ce=q.getAttributes(),j=R.defaultAttributeValues;for(let fe in ce){let ee=ce[fe];if(ee.location>=0){let Se=K[fe];if(Se===void 0&&(fe==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),fe==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),Se!==void 0){let Pe=Se.normalized,Re=Se.itemSize,at=e.get(Se);if(at===void 0)continue;let dt=at.buffer,le=at.type,F=at.bytesPerElement,re=le===s.INT||le===s.UNSIGNED_INT||Se.gpuType===Iu;if(Se.isInterleavedBufferAttribute){let ne=Se.data,pe=ne.stride,xe=Se.offset;if(ne.isInstancedInterleavedBuffer){for(let Le=0;Le<ee.locationSize;Le++)m(ee.location+Le,ne.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Le=0;Le<ee.locationSize;Le++)b(ee.location+Le);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let Le=0;Le<ee.locationSize;Le++)y(ee.location+Le,Re/ee.locationSize,le,Pe,pe*F,(xe+Re/ee.locationSize*Le)*F,re)}else{if(Se.isInstancedBufferAttribute){for(let ne=0;ne<ee.locationSize;ne++)m(ee.location+ne,Se.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ne=0;ne<ee.locationSize;ne++)b(ee.location+ne);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let ne=0;ne<ee.locationSize;ne++)y(ee.location+ne,Re/ee.locationSize,le,Pe,Re*F,Re/ee.locationSize*ne*F,re)}}else if(j!==void 0){let Pe=j[fe];if(Pe!==void 0)switch(Pe.length){case 2:s.vertexAttrib2fv(ee.location,Pe);break;case 3:s.vertexAttrib3fv(ee.location,Pe);break;case 4:s.vertexAttrib4fv(ee.location,Pe);break;default:s.vertexAttrib1fv(ee.location,Pe)}}}}T()}function U(){O();for(let M in n){let R=n[M];for(let q in R){let X=R[q];for(let K in X)u(X[K].object),delete X[K];delete R[q]}delete n[M]}}function D(M){if(n[M.id]===void 0)return;let R=n[M.id];for(let q in R){let X=R[q];for(let K in X)u(X[K].object),delete X[K];delete R[q]}delete n[M.id]}function L(M){for(let R in n){let q=n[R];if(q[M.id]===void 0)continue;let X=q[M.id];for(let K in X)u(X[K].object),delete X[K];delete q[M.id]}}function O(){Z(),a=!0,r!==i&&(r=i,c(r.object))}function Z(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:O,resetDefaultState:Z,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:b,disableUnusedAttributes:T}}function j_(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,n,1)}function l(c,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];for(let v=0;v<f.length;v++)t.update(_,n,f[v])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Y_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==Nn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let O=L===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ui&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==hi&&!O)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let L=e.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:b,maxAttributes:m,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:U,maxSamples:D}}function K_(s){let e=this,t=null,n=0,i=!1,r=!1,a=new li,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,v=d.clipIntersection,b=d.clipShadows,m=s.get(d);if(!i||_===null||_.length===0||r&&!b)r?u(null):c();else{let T=r?0:n,y=T*4,E=m.clippingState||null;l.value=E,E=u(_,f,y,p);for(let U=0;U!==y;++U)E[U]=t[U];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,_){let v=d!==null?d.length:0,b=null;if(v!==0){if(b=l.value,_!==!0||b===null){let m=p+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(b===null||b.length<m)&&(b=new Float32Array(m));for(let y=0,E=p;y!==v;++y,E+=4)a.copy(d[y]).applyMatrix4(T,o),a.normal.toArray(b,E),b[E+3]=a.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,b}}function Z_(s){let e=new WeakMap;function t(a,o){return o===dh?a.mapping=xr:o===fh&&(a.mapping=yr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===dh||o===fh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Xh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=class extends dl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dr=4,Pf=[.125,.215,.35,.446,.526,.582],Ms=20,Gc=new ns,If=new Ke,Vc=null,Wc=0,Xc=0,qc=!1,vs=(1+Math.sqrt(5))/2,ir=1/vs,Df=[new k(-vs,ir,0),new k(vs,ir,0),new k(-ir,0,vs),new k(ir,0,vs),new k(0,vs,-ir),new k(0,vs,ir),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Wc,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Un,format:Nn,colorSpace:mn,depthBuffer:!1},i=Lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J_(r)),this._blurMaterial=$_(r,e,t)}return i}_compileMaterial(e){let t=new ae(this._lodPlanes[0],e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,n,i){let o=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(If),u.toneMapping=Qi,u.autoClear=!1;let p=new Wt({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new ae(new ct,p),v=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,v=!0):(p.color.copy(If),v=!0);for(let m=0;m<6;m++){let T=m%3;T===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):T===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let y=this._cubeSize;Uo(i,T*y,m>2?y:0,y,y),u.setRenderTarget(i),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===xr||e.mapping===yr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Gc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Df[(i-r-1)%Df.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ae(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),v=r/_,b=isFinite(r)?1+Math.floor(u*v):Ms;b>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ms}`);let m=[],T=0;for(let L=0;L<Ms;++L){let O=L/v,Z=Math.exp(-O*O/2);m.push(Z),L===0?T+=Z:L<b&&(T+=2*Z)}for(let L=0;L<m.length;L++)m[L]=m[L]/T;f.envMap.value=e.texture,f.samples.value=b,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;let E=this._sizeLods[i],U=3*E*(i>y-dr?i-y+dr:0),D=4*(this._cubeSize-E);Uo(t,U,D,3*E,2*E),l.setRenderTarget(t),l.render(d,Gc)}};function J_(s){let e=[],t=[],n=[],i=s,r=s-dr+1+Pf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-dr?l=Pf[a-s+dr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,b=2,m=1,T=new Float32Array(v*_*p),y=new Float32Array(b*_*p),E=new Float32Array(m*_*p);for(let D=0;D<p;D++){let L=D%3*2/3-1,O=D>2?0:-1,Z=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];T.set(Z,v*_*D),y.set(f,b*_*D);let M=[D,D,D,D,D,D];E.set(M,m*_*D)}let U=new Xt;U.setAttribute("position",new Kt(T,v)),U.setAttribute("uv",new Kt(y,b)),U.setAttribute("faceIndex",new Kt(E,m)),e.push(U),i>dr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lf(s,e,t){let n=new pn(s,e,t);return n.texture.mapping=Gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function $_(s,e,t){let n=new Float32Array(Ms),i=new k(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function kf(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Nf(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Vu(){return`

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
	`}function Q_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===dh||l===fh,u=l===xr||l===yr;if(c||u){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new wr(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new wr(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ex(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&nl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tx(s,e,t,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let v=f.morphAttributes[_];for(let b=0,m=v.length;b<m;b++)e.remove(v[b])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)e.update(f[_],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let _ in p){let v=p[_];for(let b=0,m=v.length;b<m;b++)e.update(v[b],s.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,_=d.attributes.position,v=0;if(p!==null){let T=p.array;v=p.version;for(let y=0,E=T.length;y<E;y+=3){let U=T[y+0],D=T[y+1],L=T[y+2];f.push(U,D,D,L,L,U)}}else if(_!==void 0){let T=_.array;v=_.version;for(let y=0,E=T.length/3-1;y<E;y+=3){let U=y+0,D=y+1,L=y+2;f.push(U,D,D,L,L,U)}}else return;let b=new(zp(f)?ul:hl)(f,1);b.version=v;let m=r.get(d);m&&e.remove(m),r.set(d,b)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function nx(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,f*a,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let b=0;for(let m=0;m<_;m++)b+=p[m];t.update(b,n,1)}function d(f,p,_,v){if(_===0)return;let b=e.get("WEBGL_multi_draw");if(b===null)for(let m=0;m<f.length;m++)c(f[m]/a,p[m],v[m]);else{b.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,_);let m=0;for(let T=0;T<_;T++)m+=p[T];for(let T=0;T<v.length;T++)t.update(m,n,v[T])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ix(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sx(s,e,t){let n=new WeakMap,i=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let Z=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",Z)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),v===!0&&(y=3);let E=o.attributes.position.count*y,U=1;E>e.maxTextureSize&&(U=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let D=new Float32Array(E*U*4*d),L=new cl(D,E,U,d);L.type=hi,L.needsUpdate=!0;let O=y*4;for(let M=0;M<d;M++){let R=b[M],q=m[M],X=T[M],K=E*U*4*M;for(let ce=0;ce<R.count;ce++){let j=ce*O;p===!0&&(i.fromBufferAttribute(R,ce),D[K+j+0]=i.x,D[K+j+1]=i.y,D[K+j+2]=i.z,D[K+j+3]=0),_===!0&&(i.fromBufferAttribute(q,ce),D[K+j+4]=i.x,D[K+j+5]=i.y,D[K+j+6]=i.z,D[K+j+7]=0),v===!0&&(i.fromBufferAttribute(X,ce),D[K+j+8]=i.x,D[K+j+9]=i.y,D[K+j+10]=i.z,D[K+j+11]=X.itemSize===4?i.w:1)}}f={count:d,texture:L,size:new oe(E,U)},n.set(o,f),o.addEventListener("dispose",Z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function rx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Tr=class extends fn{constructor(e,t,n,i,r,a,o,l,c,u=mr){if(u!==mr&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mr&&(n=Es),n===void 0&&u===ts&&(n=es),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wp=new fn,Uf=new Tr(1,1),Xp=new cl,qp=new Vh,jp=new fl,Of=[],Ff=[],Bf=new Float32Array(16),zf=new Float32Array(9),Hf=new Float32Array(4);function Br(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Of[i];if(r===void 0&&(r=new Float32Array(i),Of[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ql(s,e){let t=Ff[e];t===void 0&&(t=new Int32Array(e),Ff[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ax(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function lx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function cx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function hx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Hf.set(n),s.uniformMatrix2fv(this.addr,!1,Hf),ln(t,n)}}function ux(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;zf.set(n),s.uniformMatrix3fv(this.addr,!1,zf),ln(t,n)}}function dx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Bf.set(n),s.uniformMatrix4fv(this.addr,!1,Bf),ln(t,n)}}function fx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function px(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function mx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function bx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function _x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function vx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uf.compareFunction=Bp,r=Uf):r=Wp,t.setTexture2D(e||r,i)}function Mx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qp,i)}function Sx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jp,i)}function Ex(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xp,i)}function wx(s){switch(s){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return bx;case 36294:return _x;case 36295:return xx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Tx(s,e){s.uniform1fv(this.addr,e)}function Ax(s,e){let t=Br(e,this.size,2);s.uniform2fv(this.addr,t)}function Rx(s,e){let t=Br(e,this.size,3);s.uniform3fv(this.addr,t)}function Cx(s,e){let t=Br(e,this.size,4);s.uniform4fv(this.addr,t)}function Px(s,e){let t=Br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ix(s,e){let t=Br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Dx(s,e){let t=Br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Lx(s,e){s.uniform1iv(this.addr,e)}function kx(s,e){s.uniform2iv(this.addr,e)}function Nx(s,e){s.uniform3iv(this.addr,e)}function Ux(s,e){s.uniform4iv(this.addr,e)}function Ox(s,e){s.uniform1uiv(this.addr,e)}function Fx(s,e){s.uniform2uiv(this.addr,e)}function Bx(s,e){s.uniform3uiv(this.addr,e)}function zx(s,e){s.uniform4uiv(this.addr,e)}function Hx(s,e,t){let n=this.cache,i=e.length,r=ql(t,i);on(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wp,r[a])}function Gx(s,e,t){let n=this.cache,i=e.length,r=ql(t,i);on(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||qp,r[a])}function Vx(s,e,t){let n=this.cache,i=e.length,r=ql(t,i);on(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||jp,r[a])}function Wx(s,e,t){let n=this.cache,i=e.length,r=ql(t,i);on(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xp,r[a])}function Xx(s){switch(s){case 5126:return Tx;case 35664:return Ax;case 35665:return Rx;case 35666:return Cx;case 35674:return Px;case 35675:return Ix;case 35676:return Dx;case 5124:case 35670:return Lx;case 35667:case 35671:return kx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return Ox;case 36294:return Fx;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Wx}}var qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wx(t.type)}},jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xx(t.type)}},Yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},jc=/(\w+)(\])?(\[|\.)?/g;function Gf(s,e){s.seq.push(e),s.map[e.id]=e}function qx(s,e,t){let n=s.name,i=n.length;for(jc.lastIndex=0;;){let r=jc.exec(n),a=jc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gf(t,c===void 0?new qh(o,s,e):new jh(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Yh(o),Gf(t,d)),t=d}}}var br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);qx(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Vf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var jx=37297,Yx=0;function Kx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Zx(s){let e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(s),n;switch(e===t?n="":e===al&&t===rl?n="LinearDisplayP3ToLinearSRGB":e===rl&&t===al&&(n="LinearSRGBToLinearDisplayP3"),s){case mn:case Wl:return[n,"LinearTransferOETF"];case Zt:case Hu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Wf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Kx(s.getShaderSource(e),a)}else return i}function Jx(s,e){let t=Zx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $x(s,e){let t;switch(e){case wu:t="Linear";break;case Tu:t="Reinhard";break;case Au:t="Cineon";break;case Ru:t="ACESFilmic";break;case Cu:t="AgX";break;case Va:t="Neutral";break;case ug:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oo=new k;function Qx(){St.getLuminanceCoefficients(Oo);let s=Oo.x.toFixed(4),e=Oo.y.toFixed(4),t=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ey(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function ty(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ny(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ma(s){return s!==""}function Xf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(s){return s.replace(iy,ry)}var sy=new Map;function ry(s,e){let t=mt[e];if(t===void 0){let n=sy.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kh(t)}var ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jf(s){return s.replace(ay,oy)}function oy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function ly(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ym?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function cy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function uy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ap:e="ENVMAP_BLENDING_MULTIPLY";break;case cg:e="ENVMAP_BLENDING_MIX";break;case hg:e="ENVMAP_BLENDING_ADD";break}return e}function dy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fy(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ly(t),c=cy(t),u=hy(t),d=uy(t),f=dy(t),p=ey(t),_=ty(r),v=i.createProgram(),b,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ma).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ma).join(`
`),m.length>0&&(m+=`
`)):(b=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),m=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?$x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),Qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=Kh(a),a=Xf(a,t),a=qf(a,t),o=Kh(o),o=Xf(o,t),o=qf(o,t),a=jf(a),o=jf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,b=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=T+b+a,E=T+m+o,U=Vf(i,i.VERTEX_SHADER,y),D=Vf(i,i.FRAGMENT_SHADER,E);i.attachShader(v,U),i.attachShader(v,D),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function L(R){if(s.debug.checkShaderErrors){let q=i.getProgramInfoLog(v).trim(),X=i.getShaderInfoLog(U).trim(),K=i.getShaderInfoLog(D).trim(),ce=!0,j=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,U,D);else{let fe=Wf(i,U,"vertex"),ee=Wf(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+q+`
`+fe+`
`+ee)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(X===""||K==="")&&(j=!1);j&&(R.diagnostics={runnable:ce,programLog:q,vertexShader:{log:X,prefix:b},fragmentShader:{log:K,prefix:m}})}i.deleteShader(U),i.deleteShader(D),O=new br(i,v),Z=ny(i,v)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let Z;this.getAttributes=function(){return Z===void 0&&L(this),Z};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,jx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=D,this}var py=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jh(e),t.set(e,n)),n}},Jh=class{constructor(e){this.id=py++,this.code=e,this.usedTimes=0}};function my(s,e,t,n,i,r,a){let o=new Ta,l=new Zh,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,_=i.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,R,q,X,K){let ce=X.fog,j=K.geometry,fe=M.isMeshStandardMaterial?X.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||fe),Se=ee&&ee.mapping===Gl?ee.image.height:null,Pe=v[M.type];M.precision!==null&&(_=i.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));let Re=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,at=Re!==void 0?Re.length:0,dt=0;j.morphAttributes.position!==void 0&&(dt=1),j.morphAttributes.normal!==void 0&&(dt=2),j.morphAttributes.color!==void 0&&(dt=3);let le,F,re,ne;if(Pe){let Tt=gi[Pe];le=Tt.vertexShader,F=Tt.fragmentShader}else le=M.vertexShader,F=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),ne=l.getFragmentShaderID(M);let pe=s.getRenderTarget(),xe=K.isInstancedMesh===!0,Le=K.isBatchedMesh===!0,Ne=!!M.map,J=!!M.matcap,I=!!ee,ye=!!M.aoMap,be=!!M.lightMap,de=!!M.bumpMap,ve=!!M.normalMap,Me=!!M.displacementMap,we=!!M.emissiveMap,P=!!M.metalnessMap,w=!!M.roughnessMap,B=M.anisotropy>0,ie=M.clearcoat>0,he=M.dispersion>0,se=M.iridescence>0,ze=M.sheen>0,Ie=M.transmission>0,Fe=B&&!!M.anisotropyMap,ht=ie&&!!M.clearcoatMap,_e=ie&&!!M.clearcoatNormalMap,Be=ie&&!!M.clearcoatRoughnessMap,et=se&&!!M.iridescenceMap,it=se&&!!M.iridescenceThicknessMap,Xe=ze&&!!M.sheenColorMap,lt=ze&&!!M.sheenRoughnessMap,$e=!!M.specularMap,_t=!!M.specularColorMap,z=!!M.specularIntensityMap,Ue=Ie&&!!M.transmissionMap,te=Ie&&!!M.thicknessMap,ue=!!M.gradientMap,ge=!!M.alphaMap,De=M.alphaTest>0,yt=!!M.alphaHash,Gt=!!M.extensions,vn=Qi;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(vn=s.toneMapping);let wt={shaderID:Pe,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:F,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:Le,batchingColor:Le&&K._colorsTexture!==null,instancing:xe,instancingColor:xe&&K.instanceColor!==null,instancingMorph:xe&&K.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:mn,alphaToCoverage:!!M.alphaToCoverage,map:Ne,matcap:J,envMap:I,envMapMode:I&&ee.mapping,envMapCubeUVHeight:Se,aoMap:ye,lightMap:be,bumpMap:de,normalMap:ve,displacementMap:p&&Me,emissiveMap:we,normalMapObjectSpace:ve&&M.normalMapType===_g,normalMapTangentSpace:ve&&M.normalMapType===zu,metalnessMap:P,roughnessMap:w,anisotropy:B,anisotropyMap:Fe,clearcoat:ie,clearcoatMap:ht,clearcoatNormalMap:_e,clearcoatRoughnessMap:Be,dispersion:he,iridescence:se,iridescenceMap:et,iridescenceThicknessMap:it,sheen:ze,sheenColorMap:Xe,sheenRoughnessMap:lt,specularMap:$e,specularColorMap:_t,specularIntensityMap:z,transmission:Ie,transmissionMap:Ue,thicknessMap:te,gradientMap:ue,opaque:M.transparent===!1&&M.blending===pr&&M.alphaToCoverage===!1,alphaMap:ge,alphaTest:De,alphaHash:yt,combine:M.combine,mapUv:Ne&&b(M.map.channel),aoMapUv:ye&&b(M.aoMap.channel),lightMapUv:be&&b(M.lightMap.channel),bumpMapUv:de&&b(M.bumpMap.channel),normalMapUv:ve&&b(M.normalMap.channel),displacementMapUv:Me&&b(M.displacementMap.channel),emissiveMapUv:we&&b(M.emissiveMap.channel),metalnessMapUv:P&&b(M.metalnessMap.channel),roughnessMapUv:w&&b(M.roughnessMap.channel),anisotropyMapUv:Fe&&b(M.anisotropyMap.channel),clearcoatMapUv:ht&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:lt&&b(M.sheenRoughnessMap.channel),specularMapUv:$e&&b(M.specularMap.channel),specularColorMapUv:_t&&b(M.specularColorMap.channel),specularIntensityMapUv:z&&b(M.specularIntensityMap.channel),transmissionMapUv:Ue&&b(M.transmissionMap.channel),thicknessMapUv:te&&b(M.thicknessMap.channel),alphaMapUv:ge&&b(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ve||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(Ne||ge),fog:!!ce,useFog:M.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:dt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:vn,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&St.getTransfer(M.map.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===Tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Gt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&M.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function T(M){let R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(let q in M.defines)R.push(q),R.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(y(R,M),E(R,M),R.push(s.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function y(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function E(M,R){o.disableAll(),R.supportsVertexTextures&&o.enable(0),R.instancing&&o.enable(1),R.instancingColor&&o.enable(2),R.instancingMorph&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),R.dispersion&&o.enable(20),R.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reverseDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),M.push(o.mask)}function U(M){let R=v[M.type],q;if(R){let X=gi[R];q=On.clone(X.uniforms)}else q=M.uniforms;return q}function D(M,R){let q;for(let X=0,K=u.length;X<K;X++){let ce=u[X];if(ce.cacheKey===R){q=ce,++q.usedTimes;break}}return q===void 0&&(q=new fy(s,R,M,r),u.push(q)),q}function L(M){if(--M.usedTimes===0){let R=u.indexOf(M);u[R]=u[u.length-1],u.pop(),M.destroy()}}function O(M){l.remove(M)}function Z(){l.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:U,acquireProgram:D,releaseProgram:L,releaseShaderCache:O,programs:u,dispose:Z}}function gy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function by(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Kf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,p,_,v,b){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:b},s[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=v,m.group=b),e++,m}function o(d,f,p,_,v,b){let m=a(d,f,p,_,v,b);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(d,f,p,_,v,b){let m=a(d,f,p,_,v,b);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||by),n.length>1&&n.sort(f||Kf),i.length>1&&i.sort(f||Kf)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function _y(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Zf,s.set(n,[a])):i>=r.length?(a=new Zf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function xy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ke};break;case"SpotLight":t={position:new k,direction:new k,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function yy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var vy=0;function My(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Sy(s){let e=new xy,t=yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,r=new Qe,a=new Qe;function o(c){let u=0,d=0,f=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let p=0,_=0,v=0,b=0,m=0,T=0,y=0,E=0,U=0,D=0,L=0;c.sort(My);for(let Z=0,M=c.length;Z<M;Z++){let R=c[Z],q=R.color,X=R.intensity,K=R.distance,ce=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=q.r*X,d+=q.g*X,f+=q.b*X;else if(R.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(R.sh.coefficients[j],X);L++}else if(R.isDirectionalLight){let j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let fe=R.shadow,ee=t.get(R);ee.shadowIntensity=fe.intensity,ee.shadowBias=fe.bias,ee.shadowNormalBias=fe.normalBias,ee.shadowRadius=fe.radius,ee.shadowMapSize=fe.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=ce,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=j,p++}else if(R.isSpotLight){let j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(q).multiplyScalar(X),j.distance=K,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,n.spot[v]=j;let fe=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,fe.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[v]=fe.matrix,R.castShadow){let ee=t.get(R);ee.shadowIntensity=fe.intensity,ee.shadowBias=fe.bias,ee.shadowNormalBias=fe.normalBias,ee.shadowRadius=fe.radius,ee.shadowMapSize=fe.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=ce,E++}v++}else if(R.isRectAreaLight){let j=e.get(R);j.color.copy(q).multiplyScalar(X),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=j,b++}else if(R.isPointLight){let j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),j.distance=R.distance,j.decay=R.decay,R.castShadow){let fe=R.shadow,ee=t.get(R);ee.shadowIntensity=fe.intensity,ee.shadowBias=fe.bias,ee.shadowNormalBias=fe.normalBias,ee.shadowRadius=fe.radius,ee.shadowMapSize=fe.mapSize,ee.shadowCameraNear=fe.camera.near,ee.shadowCameraFar=fe.camera.far,n.pointShadow[_]=ee,n.pointShadowMap[_]=ce,n.pointShadowMatrix[_]=R.shadow.matrix,y++}n.point[_]=j,_++}else if(R.isHemisphereLight){let j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(X),j.groundColor.copy(R.groundColor).multiplyScalar(X),n.hemi[m]=j,m++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let O=n.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==b||O.hemiLength!==m||O.numDirectionalShadows!==T||O.numPointShadows!==y||O.numSpotShadows!==E||O.numSpotMaps!==U||O.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=b,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+U-D,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=L,O.directionalLength=p,O.pointLength=_,O.spotLength=v,O.rectAreaLength=b,O.hemiLength=m,O.numDirectionalShadows=T,O.numPointShadows=y,O.numSpotShadows=E,O.numSpotMaps=U,O.numLightProbes=L,n.version=vy++)}function l(c,u){let d=0,f=0,p=0,_=0,v=0,b=u.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){let y=c[m];if(y.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),d++}else if(y.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(b),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),p++}else if(y.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(b),a.identity(),r.copy(y.matrixWorld),r.premultiply(b),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(b),f++}else if(y.isHemisphereLight){let E=n.hemi[v];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(b),v++}}}return{setup:o,setupView:l,state:n}}function Jf(s){let e=new Sy(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ey(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Jf(s),e.set(i,[o])):r>=a.length?(o=new Jf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var $h=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qh=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ty=`uniform sampler2D shadow_pass;
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
}`;function Ay(s,e,t){let n=new Aa,i=new oe,r=new oe,a=new Pt,o=new $h({depthPacking:bg}),l=new Qh,c={},u=t.maxTextureSize,d={[_i]:Tn,[Tn]:_i,[un]:un},f=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:wy,fragmentShader:Ty}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Xt;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ae(_,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tp;let m=this.type;this.render=function(D,L,O){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||D.length===0)return;let Z=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),q=s.state;q.setBlending(sn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let X=m!==oi&&this.type===oi,K=m===oi&&this.type!==oi;for(let ce=0,j=D.length;ce<j;ce++){let fe=D[ce],ee=fe.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);let Se=ee.getFrameExtents();if(i.multiply(Se),r.copy(ee.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Se.x),i.x=r.x*Se.x,ee.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Se.y),i.y=r.y*Se.y,ee.mapSize.y=r.y)),ee.map===null||X===!0||K===!0){let Re=this.type!==oi?{minFilter:nn,magFilter:nn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new pn(i.x,i.y,Re),ee.map.texture.name=fe.name+".shadowMap",ee.camera.updateProjectionMatrix()}s.setRenderTarget(ee.map),s.clear();let Pe=ee.getViewportCount();for(let Re=0;Re<Pe;Re++){let at=ee.getViewport(Re);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),q.viewport(a),ee.updateMatrices(fe,Re),n=ee.getFrustum(),E(L,O,ee.camera,fe,this.type)}ee.isPointLightShadow!==!0&&this.type===oi&&T(ee,O),ee.needsUpdate=!1}m=this.type,b.needsUpdate=!1,s.setRenderTarget(Z,M,R)};function T(D,L){let O=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new pn(i.x,i.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(L,null,O,f,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(L,null,O,p,v,null)}function y(D,L,O,Z){let M=null,R=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)M=R;else if(M=O.isPointLight===!0?l:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let q=M.uuid,X=L.uuid,K=c[q];K===void 0&&(K={},c[q]=K);let ce=K[X];ce===void 0&&(ce=M.clone(),K[X]=ce,L.addEventListener("dispose",U)),M=ce}if(M.visible=L.visible,M.wireframe=L.wireframe,Z===oi?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let q=s.properties.get(M);q.light=O}return M}function E(D,L,O,Z,M){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===oi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);let X=e.update(D),K=D.material;if(Array.isArray(K)){let ce=X.groups;for(let j=0,fe=ce.length;j<fe;j++){let ee=ce[j],Se=K[ee.materialIndex];if(Se&&Se.visible){let Pe=y(D,Se,Z,M);D.onBeforeShadow(s,D,L,O,X,Pe,ee),s.renderBufferDirect(O,null,X,Pe,D,ee),D.onAfterShadow(s,D,L,O,X,Pe,ee)}}}else if(K.visible){let ce=y(D,K,Z,M);D.onBeforeShadow(s,D,L,O,X,ce,null),s.renderBufferDirect(O,null,X,ce,D,null),D.onAfterShadow(s,D,L,O,X,ce,null)}}let q=D.children;for(let X=0,K=q.length;X<K;X++)E(q[X],L,O,Z,M)}function U(D){D.target.removeEventListener("dispose",U);for(let O in c){let Z=c[O],M=D.target.uuid;M in Z&&(Z[M].dispose(),delete Z[M])}}}var Ry={[rh]:ah,[oh]:hh,[lh]:uh,[_r]:ch,[ah]:rh,[hh]:oh,[uh]:lh,[ch]:_r};function Cy(s){function e(){let z=!1,Ue=new Pt,te=null,ue=new Pt(0,0,0,0);return{setMask:function(ge){te!==ge&&!z&&(s.colorMask(ge,ge,ge,ge),te=ge)},setLocked:function(ge){z=ge},setClear:function(ge,De,yt,Gt,vn){vn===!0&&(ge*=Gt,De*=Gt,yt*=Gt),Ue.set(ge,De,yt,Gt),ue.equals(Ue)===!1&&(s.clearColor(ge,De,yt,Gt),ue.copy(Ue))},reset:function(){z=!1,te=null,ue.set(-1,0,0,0)}}}function t(){let z=!1,Ue=!1,te=null,ue=null,ge=null;return{setReversed:function(De){Ue=De},setTest:function(De){De?re(s.DEPTH_TEST):ne(s.DEPTH_TEST)},setMask:function(De){te!==De&&!z&&(s.depthMask(De),te=De)},setFunc:function(De){if(Ue&&(De=Ry[De]),ue!==De){switch(De){case rh:s.depthFunc(s.NEVER);break;case ah:s.depthFunc(s.ALWAYS);break;case oh:s.depthFunc(s.LESS);break;case _r:s.depthFunc(s.LEQUAL);break;case lh:s.depthFunc(s.EQUAL);break;case ch:s.depthFunc(s.GEQUAL);break;case hh:s.depthFunc(s.GREATER);break;case uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=De}},setLocked:function(De){z=De},setClear:function(De){ge!==De&&(s.clearDepth(De),ge=De)},reset:function(){z=!1,te=null,ue=null,ge=null}}}function n(){let z=!1,Ue=null,te=null,ue=null,ge=null,De=null,yt=null,Gt=null,vn=null;return{setTest:function(wt){z||(wt?re(s.STENCIL_TEST):ne(s.STENCIL_TEST))},setMask:function(wt){Ue!==wt&&!z&&(s.stencilMask(wt),Ue=wt)},setFunc:function(wt,Tt,Wn){(te!==wt||ue!==Tt||ge!==Wn)&&(s.stencilFunc(wt,Tt,Wn),te=wt,ue=Tt,ge=Wn)},setOp:function(wt,Tt,Wn){(De!==wt||yt!==Tt||Gt!==Wn)&&(s.stencilOp(wt,Tt,Wn),De=wt,yt=Tt,Gt=Wn)},setLocked:function(wt){z=wt},setClear:function(wt){vn!==wt&&(s.clearStencil(wt),vn=wt)},reset:function(){z=!1,Ue=null,te=null,ue=null,ge=null,De=null,yt=null,Gt=null,vn=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},u={},d=new WeakMap,f=[],p=null,_=!1,v=null,b=null,m=null,T=null,y=null,E=null,U=null,D=new Ke(0,0,0),L=0,O=!1,Z=null,M=null,R=null,q=null,X=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ce=!1,j=0,fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(fe)[1]),ce=j>=1):fe.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),ce=j>=2);let ee=null,Se={},Pe=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),at=new Pt().fromArray(Pe),dt=new Pt().fromArray(Re);function le(z,Ue,te,ue){let ge=new Uint8Array(4),De=s.createTexture();s.bindTexture(z,De),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let yt=0;yt<te;yt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(Ue+yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return De}let F={};F[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),F[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),F[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),re(s.DEPTH_TEST),r.setFunc(_r),be(!1),de(af),re(s.CULL_FACE),I(sn);function re(z){c[z]!==!0&&(s.enable(z),c[z]=!0)}function ne(z){c[z]!==!1&&(s.disable(z),c[z]=!1)}function pe(z,Ue){return u[z]!==Ue?(s.bindFramebuffer(z,Ue),u[z]=Ue,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ue),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function xe(z,Ue){let te=f,ue=!1;if(z){te=d.get(Ue),te===void 0&&(te=[],d.set(Ue,te));let ge=z.textures;if(te.length!==ge.length||te[0]!==s.COLOR_ATTACHMENT0){for(let De=0,yt=ge.length;De<yt;De++)te[De]=s.COLOR_ATTACHMENT0+De;te.length=ge.length,ue=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,ue=!0);ue&&s.drawBuffers(te)}function Le(z){return p!==z?(s.useProgram(z),p=z,!0):!1}let Ne={[Zn]:s.FUNC_ADD,[Km]:s.FUNC_SUBTRACT,[Zm]:s.FUNC_REVERSE_SUBTRACT};Ne[Jm]=s.MIN,Ne[$m]=s.MAX;let J={[Fr]:s.ZERO,[Qm]:s.ONE,[eg]:s.SRC_COLOR,[ih]:s.SRC_ALPHA,[sg]:s.SRC_ALPHA_SATURATE,[Hl]:s.DST_COLOR,[zl]:s.DST_ALPHA,[tg]:s.ONE_MINUS_SRC_COLOR,[sh]:s.ONE_MINUS_SRC_ALPHA,[ig]:s.ONE_MINUS_DST_COLOR,[ng]:s.ONE_MINUS_DST_ALPHA,[rg]:s.CONSTANT_COLOR,[ag]:s.ONE_MINUS_CONSTANT_COLOR,[og]:s.CONSTANT_ALPHA,[lg]:s.ONE_MINUS_CONSTANT_ALPHA};function I(z,Ue,te,ue,ge,De,yt,Gt,vn,wt){if(z===sn){_===!0&&(ne(s.BLEND),_=!1);return}if(_===!1&&(re(s.BLEND),_=!0),z!==Eu){if(z!==v||wt!==O){if((b!==Zn||y!==Zn)&&(s.blendEquation(s.FUNC_ADD),b=Zn,y=Zn),wt)switch(z){case pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ss:s.blendFunc(s.ONE,s.ONE);break;case of:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ss:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case of:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,T=null,E=null,U=null,D.set(0,0,0),L=0,v=z,O=wt}return}ge=ge||Ue,De=De||te,yt=yt||ue,(Ue!==b||ge!==y)&&(s.blendEquationSeparate(Ne[Ue],Ne[ge]),b=Ue,y=ge),(te!==m||ue!==T||De!==E||yt!==U)&&(s.blendFuncSeparate(J[te],J[ue],J[De],J[yt]),m=te,T=ue,E=De,U=yt),(Gt.equals(D)===!1||vn!==L)&&(s.blendColor(Gt.r,Gt.g,Gt.b,vn),D.copy(Gt),L=vn),v=z,O=!1}function ye(z,Ue){z.side===un?ne(s.CULL_FACE):re(s.CULL_FACE);let te=z.side===Tn;Ue&&(te=!te),be(te),z.blending===pr&&z.transparent===!1?I(sn):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),i.setMask(z.colorWrite);let ue=z.stencilWrite;a.setTest(ue),ue&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Me(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(z){Z!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),Z=z)}function de(z){z!==qm?(re(s.CULL_FACE),z!==M&&(z===af?s.cullFace(s.BACK):z===jm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ne(s.CULL_FACE),M=z}function ve(z){z!==R&&(ce&&s.lineWidth(z),R=z)}function Me(z,Ue,te){z?(re(s.POLYGON_OFFSET_FILL),(q!==Ue||X!==te)&&(s.polygonOffset(Ue,te),q=Ue,X=te)):ne(s.POLYGON_OFFSET_FILL)}function we(z){z?re(s.SCISSOR_TEST):ne(s.SCISSOR_TEST)}function P(z){z===void 0&&(z=s.TEXTURE0+K-1),ee!==z&&(s.activeTexture(z),ee=z)}function w(z,Ue,te){te===void 0&&(ee===null?te=s.TEXTURE0+K-1:te=ee);let ue=Se[te];ue===void 0&&(ue={type:void 0,texture:void 0},Se[te]=ue),(ue.type!==z||ue.texture!==Ue)&&(ee!==te&&(s.activeTexture(te),ee=te),s.bindTexture(z,Ue||F[z]),ue.type=z,ue.texture=Ue)}function B(){let z=Se[ee];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(z){at.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),at.copy(z))}function Xe(z){dt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),dt.copy(z))}function lt(z,Ue){let te=l.get(Ue);te===void 0&&(te=new WeakMap,l.set(Ue,te));let ue=te.get(z);ue===void 0&&(ue=s.getUniformBlockIndex(Ue,z.name),te.set(z,ue))}function $e(z,Ue){let ue=l.get(Ue).get(z);o.get(Ue)!==ue&&(s.uniformBlockBinding(Ue,ue,z.__bindingPointIndex),o.set(Ue,ue))}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},ee=null,Se={},u={},d=new WeakMap,f=[],p=null,_=!1,v=null,b=null,m=null,T=null,y=null,E=null,U=null,D=new Ke(0,0,0),L=0,O=!1,Z=null,M=null,R=null,q=null,X=null,at.set(0,0,s.canvas.width,s.canvas.height),dt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:re,disable:ne,bindFramebuffer:pe,drawBuffers:xe,useProgram:Le,setBlending:I,setMaterial:ye,setFlipSided:be,setCullFace:de,setLineWidth:ve,setPolygonOffset:Me,setScissorTest:we,activeTexture:P,bindTexture:w,unbindTexture:B,compressedTexImage2D:ie,compressedTexImage3D:he,texImage2D:Be,texImage3D:et,updateUBOMapping:lt,uniformBlockBinding:$e,texStorage2D:ht,texStorage3D:_e,texSubImage2D:se,texSubImage3D:ze,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Fe,scissor:it,viewport:Xe,reset:_t}}function $f(s,e,t,n){let i=Py(n);switch(t){case Dp:return s*e;case kp:return s*e;case Np:return s*e*2;case ku:return s*e/i.components*i.byteLength;case Nu:return s*e/i.components*i.byteLength;case Up:return s*e*2/i.components*i.byteLength;case Uu:return s*e*2/i.components*i.byteLength;case Lp:return s*e*3/i.components*i.byteLength;case Nn:return s*e*4/i.components*i.byteLength;case Ou:return s*e*4/i.components*i.byteLength;case Jo:case $o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qo:case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mh:case bh:return Math.max(s,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(s,8)*Math.max(e,8)/2;case _h:case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case tl:case Nh:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Op:case Oh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Py(s){switch(s){case ui:case Cp:return{byteLength:1,components:1};case Ea:case Pp:case Un:return{byteLength:2,components:1};case Du:case Lu:return{byteLength:2,components:4};case Es:case Iu:case hi:return{byteLength:4,components:1};case Ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Iy(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,w){return p?new OffscreenCanvas(P,w):wa("canvas")}function v(P,w,B){let ie=1,he=we(P);if((he.width>B||he.height>B)&&(ie=B/Math.max(he.width,he.height)),ie<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let se=Math.floor(ie*he.width),ze=Math.floor(ie*he.height);d===void 0&&(d=_(se,ze));let Ie=w?_(se,ze):d;return Ie.width=se,Ie.height=ze,Ie.getContext("2d").drawImage(P,0,0,se,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+ze+")."),Ie}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),P;return P}function b(P){return P.generateMipmaps&&P.minFilter!==nn&&P.minFilter!==kn}function m(P){s.generateMipmap(P)}function T(P,w,B,ie,he=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=w;if(w===s.RED&&(B===s.FLOAT&&(se=s.R32F),B===s.HALF_FLOAT&&(se=s.R16F),B===s.UNSIGNED_BYTE&&(se=s.R8)),w===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(se=s.R8UI),B===s.UNSIGNED_SHORT&&(se=s.R16UI),B===s.UNSIGNED_INT&&(se=s.R32UI),B===s.BYTE&&(se=s.R8I),B===s.SHORT&&(se=s.R16I),B===s.INT&&(se=s.R32I)),w===s.RG&&(B===s.FLOAT&&(se=s.RG32F),B===s.HALF_FLOAT&&(se=s.RG16F),B===s.UNSIGNED_BYTE&&(se=s.RG8)),w===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(se=s.RG8UI),B===s.UNSIGNED_SHORT&&(se=s.RG16UI),B===s.UNSIGNED_INT&&(se=s.RG32UI),B===s.BYTE&&(se=s.RG8I),B===s.SHORT&&(se=s.RG16I),B===s.INT&&(se=s.RG32I)),w===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(se=s.RGB8UI),B===s.UNSIGNED_SHORT&&(se=s.RGB16UI),B===s.UNSIGNED_INT&&(se=s.RGB32UI),B===s.BYTE&&(se=s.RGB8I),B===s.SHORT&&(se=s.RGB16I),B===s.INT&&(se=s.RGB32I)),w===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),B===s.UNSIGNED_INT&&(se=s.RGBA32UI),B===s.BYTE&&(se=s.RGBA8I),B===s.SHORT&&(se=s.RGBA16I),B===s.INT&&(se=s.RGBA32I)),w===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),w===s.RGBA){let ze=he?sl:St.getTransfer(ie);B===s.FLOAT&&(se=s.RGBA32F),B===s.HALF_FLOAT&&(se=s.RGBA16F),B===s.UNSIGNED_BYTE&&(se=ze===Ut?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function y(P,w){let B;return P?w===null||w===Es||w===es?B=s.DEPTH24_STENCIL8:w===hi?B=s.DEPTH32F_STENCIL8:w===Ea&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Es||w===es?B=s.DEPTH_COMPONENT24:w===hi?B=s.DEPTH_COMPONENT32F:w===Ea&&(B=s.DEPTH_COMPONENT16),B}function E(P,w){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function U(P){let w=P.target;w.removeEventListener("dispose",U),L(w),w.isVideoTexture&&u.delete(w)}function D(P){let w=P.target;w.removeEventListener("dispose",D),Z(w)}function L(P){let w=n.get(P);if(w.__webglInit===void 0)return;let B=P.source,ie=f.get(B);if(ie){let he=ie[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(P),Object.keys(ie).length===0&&f.delete(B)}n.remove(P)}function O(P){let w=n.get(P);s.deleteTexture(w.__webglTexture);let B=P.source,ie=f.get(B);delete ie[w.__cacheKey],a.memory.textures--}function Z(P){let w=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let he=0;he<w.__webglFramebuffer[ie].length;he++)s.deleteFramebuffer(w.__webglFramebuffer[ie][he]);else s.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)s.deleteFramebuffer(w.__webglFramebuffer[ie]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let B=P.textures;for(let ie=0,he=B.length;ie<he;ie++){let se=n.get(B[ie]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(B[ie])}n.remove(P)}let M=0;function R(){M=0}function q(){let P=M;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),M+=1,P}function X(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function K(P,w){let B=n.get(P);if(P.isVideoTexture&&ve(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){let ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(B,P,w);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+w)}function ce(P,w){let B=n.get(P);if(P.version>0&&B.__version!==P.version){dt(B,P,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+w)}function j(P,w){let B=n.get(P);if(P.version>0&&B.__version!==P.version){dt(B,P,w);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+w)}function fe(P,w){let B=n.get(P);if(P.version>0&&B.__version!==P.version){le(B,P,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+w)}let ee={[dn]:s.REPEAT,[ki]:s.CLAMP_TO_EDGE,[Sa]:s.MIRRORED_REPEAT},Se={[nn]:s.NEAREST,[Pu]:s.NEAREST_MIPMAP_NEAREST,[cr]:s.NEAREST_MIPMAP_LINEAR,[kn]:s.LINEAR,[ga]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},Pe={[xg]:s.NEVER,[wg]:s.ALWAYS,[yg]:s.LESS,[Bp]:s.LEQUAL,[vg]:s.EQUAL,[Eg]:s.GEQUAL,[Mg]:s.GREATER,[Sg]:s.NOTEQUAL};function Re(P,w){if(w.type===hi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===ga||w.magFilter===cr||w.magFilter===bi||w.minFilter===kn||w.minFilter===ga||w.minFilter===cr||w.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ee[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ee[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ee[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Se[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==cr&&w.minFilter!==bi||w.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function at(P,w){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",U));let ie=w.source,he=f.get(ie);he===void 0&&(he={},f.set(ie,he));let se=X(w);if(se!==P.__cacheKey){he[se]===void 0&&(he[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),he[se].usedTimes++;let ze=he[P.__cacheKey];ze!==void 0&&(he[P.__cacheKey].usedTimes--,ze.usedTimes===0&&O(w)),P.__cacheKey=se,P.__webglTexture=he[se].texture}return B}function dt(P,w,B){let ie=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=s.TEXTURE_3D);let he=at(P,w),se=w.source;t.bindTexture(ie,P.__webglTexture,s.TEXTURE0+B);let ze=n.get(se);if(se.version!==ze.__version||he===!0){t.activeTexture(s.TEXTURE0+B);let Ie=St.getPrimaries(St.workingColorSpace),Fe=w.colorSpace===Zi?null:St.getPrimaries(w.colorSpace),ht=w.colorSpace===Zi||Ie===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let _e=v(w.image,!1,i.maxTextureSize);_e=Me(w,_e);let Be=r.convert(w.format,w.colorSpace),et=r.convert(w.type),it=T(w.internalFormat,Be,et,w.colorSpace,w.isVideoTexture);Re(ie,w);let Xe,lt=w.mipmaps,$e=w.isVideoTexture!==!0,_t=ze.__version===void 0||he===!0,z=se.dataReady,Ue=E(w,_e);if(w.isDepthTexture)it=y(w.format===ts,w.type),_t&&($e?t.texStorage2D(s.TEXTURE_2D,1,it,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,it,_e.width,_e.height,0,Be,et,null));else if(w.isDataTexture)if(lt.length>0){$e&&_t&&t.texStorage2D(s.TEXTURE_2D,Ue,it,lt[0].width,lt[0].height);for(let te=0,ue=lt.length;te<ue;te++)Xe=lt[te],$e?z&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Xe.width,Xe.height,Be,et,Xe.data):t.texImage2D(s.TEXTURE_2D,te,it,Xe.width,Xe.height,0,Be,et,Xe.data);w.generateMipmaps=!1}else $e?(_t&&t.texStorage2D(s.TEXTURE_2D,Ue,it,_e.width,_e.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e.width,_e.height,Be,et,_e.data)):t.texImage2D(s.TEXTURE_2D,0,it,_e.width,_e.height,0,Be,et,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$e&&_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,it,lt[0].width,lt[0].height,_e.depth);for(let te=0,ue=lt.length;te<ue;te++)if(Xe=lt[te],w.format!==Nn)if(Be!==null)if($e){if(z)if(w.layerUpdates.size>0){let ge=$f(Xe.width,Xe.height,w.format,w.type);for(let De of w.layerUpdates){let yt=Xe.data.subarray(De*ge/Xe.data.BYTES_PER_ELEMENT,(De+1)*ge/Xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,De,Xe.width,Xe.height,1,Be,yt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Xe.width,Xe.height,_e.depth,Be,Xe.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,it,Xe.width,Xe.height,_e.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Xe.width,Xe.height,_e.depth,Be,et,Xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,it,Xe.width,Xe.height,_e.depth,0,Be,et,Xe.data)}else{$e&&_t&&t.texStorage2D(s.TEXTURE_2D,Ue,it,lt[0].width,lt[0].height);for(let te=0,ue=lt.length;te<ue;te++)Xe=lt[te],w.format!==Nn?Be!==null?$e?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,Xe.width,Xe.height,Be,Xe.data):t.compressedTexImage2D(s.TEXTURE_2D,te,it,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?z&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Xe.width,Xe.height,Be,et,Xe.data):t.texImage2D(s.TEXTURE_2D,te,it,Xe.width,Xe.height,0,Be,et,Xe.data)}else if(w.isDataArrayTexture)if($e){if(_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,it,_e.width,_e.height,_e.depth),z)if(w.layerUpdates.size>0){let te=$f(_e.width,_e.height,w.format,w.type);for(let ue of w.layerUpdates){let ge=_e.data.subarray(ue*te/_e.data.BYTES_PER_ELEMENT,(ue+1)*te/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,Be,et,ge)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Be,et,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,it,_e.width,_e.height,_e.depth,0,Be,et,_e.data);else if(w.isData3DTexture)$e?(_t&&t.texStorage3D(s.TEXTURE_3D,Ue,it,_e.width,_e.height,_e.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Be,et,_e.data)):t.texImage3D(s.TEXTURE_3D,0,it,_e.width,_e.height,_e.depth,0,Be,et,_e.data);else if(w.isFramebufferTexture){if(_t)if($e)t.texStorage2D(s.TEXTURE_2D,Ue,it,_e.width,_e.height);else{let te=_e.width,ue=_e.height;for(let ge=0;ge<Ue;ge++)t.texImage2D(s.TEXTURE_2D,ge,it,te,ue,0,Be,et,null),te>>=1,ue>>=1}}else if(lt.length>0){if($e&&_t){let te=we(lt[0]);t.texStorage2D(s.TEXTURE_2D,Ue,it,te.width,te.height)}for(let te=0,ue=lt.length;te<ue;te++)Xe=lt[te],$e?z&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Be,et,Xe):t.texImage2D(s.TEXTURE_2D,te,it,Be,et,Xe);w.generateMipmaps=!1}else if($e){if(_t){let te=we(_e);t.texStorage2D(s.TEXTURE_2D,Ue,it,te.width,te.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,et,_e)}else t.texImage2D(s.TEXTURE_2D,0,it,Be,et,_e);b(w)&&m(ie),ze.__version=se.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function le(P,w,B){if(w.image.length!==6)return;let ie=at(P,w),he=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+B);let se=n.get(he);if(he.version!==se.__version||ie===!0){t.activeTexture(s.TEXTURE0+B);let ze=St.getPrimaries(St.workingColorSpace),Ie=w.colorSpace===Zi?null:St.getPrimaries(w.colorSpace),Fe=w.colorSpace===Zi||ze===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ht=w.isCompressedTexture||w.image[0].isCompressedTexture,_e=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let ue=0;ue<6;ue++)!ht&&!_e?Be[ue]=v(w.image[ue],!0,i.maxCubemapSize):Be[ue]=_e?w.image[ue].image:w.image[ue],Be[ue]=Me(w,Be[ue]);let et=Be[0],it=r.convert(w.format,w.colorSpace),Xe=r.convert(w.type),lt=T(w.internalFormat,it,Xe,w.colorSpace),$e=w.isVideoTexture!==!0,_t=se.__version===void 0||ie===!0,z=he.dataReady,Ue=E(w,et);Re(s.TEXTURE_CUBE_MAP,w);let te;if(ht){$e&&_t&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,lt,et.width,et.height);for(let ue=0;ue<6;ue++){te=Be[ue].mipmaps;for(let ge=0;ge<te.length;ge++){let De=te[ge];w.format!==Nn?it!==null?$e?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge,0,0,De.width,De.height,it,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge,lt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge,0,0,De.width,De.height,it,Xe,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge,lt,De.width,De.height,0,it,Xe,De.data)}}}else{if(te=w.mipmaps,$e&&_t){te.length>0&&Ue++;let ue=we(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,lt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){$e?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Be[ue].width,Be[ue].height,it,Xe,Be[ue].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,lt,Be[ue].width,Be[ue].height,0,it,Xe,Be[ue].data);for(let ge=0;ge<te.length;ge++){let yt=te[ge].image[ue].image;$e?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge+1,0,0,yt.width,yt.height,it,Xe,yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge+1,lt,yt.width,yt.height,0,it,Xe,yt.data)}}else{$e?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,it,Xe,Be[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,lt,it,Xe,Be[ue]);for(let ge=0;ge<te.length;ge++){let De=te[ge];$e?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge+1,0,0,it,Xe,De.image[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge+1,lt,it,Xe,De.image[ue])}}}b(w)&&m(s.TEXTURE_CUBE_MAP),se.__version=he.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function F(P,w,B,ie,he,se){let ze=r.convert(B.format,B.colorSpace),Ie=r.convert(B.type),Fe=T(B.internalFormat,ze,Ie,B.colorSpace);if(!n.get(w).__hasExternalTextures){let _e=Math.max(1,w.width>>se),Be=Math.max(1,w.height>>se);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,se,Fe,_e,Be,w.depth,0,ze,Ie,null):t.texImage2D(he,se,Fe,_e,Be,0,ze,Ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),de(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,he,n.get(B).__webglTexture,0,be(w)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,he,n.get(B).__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(P,w,B){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){let ie=w.depthTexture,he=ie&&ie.isDepthTexture?ie.type:null,se=y(w.stencilBuffer,he),ze=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=be(w);de(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,se,w.width,w.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,se,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,se,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,P)}else{let ie=w.textures;for(let he=0;he<ie.length;he++){let se=ie[he],ze=r.convert(se.format,se.colorSpace),Ie=r.convert(se.type),Fe=T(se.internalFormat,ze,Ie,se.colorSpace),ht=be(w);B&&de(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Fe,w.width,w.height):de(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ne(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);let ie=n.get(w.depthTexture).__webglTexture,he=be(w);if(w.depthTexture.format===mr)de(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(w.depthTexture.format===ts)de(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function pe(P){let w=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let ie=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){let he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",he)};ie.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=ie}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ne(w.__webglFramebuffer,P)}else if(B){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=s.createRenderbuffer(),re(w.__webglDepthbuffer[ie],P,!1);else{let he=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,se)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),re(w.__webglDepthbuffer,P,!1);else{let ie=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,he)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(P,w,B){let ie=n.get(P);w!==void 0&&F(ie.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&pe(P)}function Le(P){let w=P.texture,B=n.get(P),ie=n.get(w);P.addEventListener("dispose",D);let he=P.textures,se=P.isWebGLCubeRenderTarget===!0,ze=he.length>1;if(ze||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=w.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[Ie]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)B.__webglFramebuffer[Ie][Fe]=s.createFramebuffer()}else B.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)B.__webglFramebuffer[Ie]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Ie=0,Fe=he.length;Ie<Fe;Ie++){let ht=n.get(he[Ie]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&de(P)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ie=0;Ie<he.length;Ie++){let Fe=he[Ie];B.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Ie]);let ht=r.convert(Fe.format,Fe.colorSpace),_e=r.convert(Fe.type),Be=T(Fe.internalFormat,ht,_e,Fe.colorSpace,P.isXRRenderTarget===!0),et=be(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Be,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,B.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),re(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Re(s.TEXTURE_CUBE_MAP,w);for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)F(B.__webglFramebuffer[Ie][Fe],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Fe);else F(B.__webglFramebuffer[Ie],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);b(w)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ie=0,Fe=he.length;Ie<Fe;Ie++){let ht=he[Ie],_e=n.get(ht);t.bindTexture(s.TEXTURE_2D,_e.__webglTexture),Re(s.TEXTURE_2D,ht),F(B.__webglFramebuffer,P,ht,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),b(ht)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ie=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,ie.__webglTexture),Re(Ie,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)F(B.__webglFramebuffer[Fe],P,w,s.COLOR_ATTACHMENT0,Ie,Fe);else F(B.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,Ie,0);b(w)&&m(Ie),t.unbindTexture()}P.depthBuffer&&pe(P)}function Ne(P){let w=P.textures;for(let B=0,ie=w.length;B<ie;B++){let he=w[B];if(b(he)){let se=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ze=n.get(he).__webglTexture;t.bindTexture(se,ze),m(se),t.unbindTexture()}}}let J=[],I=[];function ye(P){if(P.samples>0){if(de(P)===!1){let w=P.textures,B=P.width,ie=P.height,he=s.COLOR_BUFFER_BIT,se=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=n.get(P),Ie=w.length>1;if(Ie)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Fe]);let ht=n.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,B,ie,0,0,B,ie,he,s.NEAREST),l===!0&&(J.length=0,I.length=0,J.push(s.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(J.push(se),I.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Fe]);let ht=n.get(w[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function be(P){return Math.min(i.maxSamples,P.samples)}function de(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ve(P){let w=a.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Me(P,w){let B=P.colorSpace,ie=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==mn&&B!==Zi&&(St.getTransfer(B)===Ut?(ie!==Nn||he!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function we(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=R,this.setTexture2D=K,this.setTexture2DArray=ce,this.setTexture3D=j,this.setTextureCube=fe,this.rebindTextures=xe,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=F,this.useMultisampledRTT=de}function Dy(s,e){function t(n,i=Zi){let r,a=St.getTransfer(i);if(n===ui)return s.UNSIGNED_BYTE;if(n===Du)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ip)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Cp)return s.BYTE;if(n===Pp)return s.SHORT;if(n===Ea)return s.UNSIGNED_SHORT;if(n===Iu)return s.INT;if(n===Es)return s.UNSIGNED_INT;if(n===hi)return s.FLOAT;if(n===Un)return s.HALF_FLOAT;if(n===Dp)return s.ALPHA;if(n===Lp)return s.RGB;if(n===Nn)return s.RGBA;if(n===kp)return s.LUMINANCE;if(n===Np)return s.LUMINANCE_ALPHA;if(n===mr)return s.DEPTH_COMPONENT;if(n===ts)return s.DEPTH_STENCIL;if(n===ku)return s.RED;if(n===Nu)return s.RED_INTEGER;if(n===Up)return s.RG;if(n===Uu)return s.RG_INTEGER;if(n===Ou)return s.RGBA_INTEGER;if(n===Jo||n===$o||n===Qo||n===el)if(a===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ph||n===mh||n===gh||n===bh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_h||n===xh||n===yh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_h||n===xh)return a===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vh||n===Mh||n===Sh||n===Eh||n===wh||n===Th||n===Ah||n===Rh||n===Ch||n===Ph||n===Ih||n===Dh||n===Lh||n===kh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Th)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ah)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ch)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ph)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tl||n===Nh||n===Uh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tl)return a===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Op||n===Oh||n===Fh||n===Bh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var eu=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ut=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ly={type:"move"},xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let b=t.getJointPose(v,n),m=this._getHandJoint(c,v);b!==null&&(m.matrix.fromArray(b.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=b.radius),m.visible=b!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ny=`
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

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new fn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ht({vertexShader:ky,fragmentShader:Ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends xi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null,v=new tu,b=t.getContextAttributes(),m=null,T=null,y=[],E=[],U=new oe,D=null,L=new tn;L.layers.enable(1),L.viewport=new Pt;let O=new tn;O.layers.enable(2),O.viewport=new Pt;let Z=[L,O],M=new eu;M.layers.enable(1),M.layers.enable(2);let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let F=y[le];return F===void 0&&(F=new xa,y[le]=F),F.getTargetRaySpace()},this.getControllerGrip=function(le){let F=y[le];return F===void 0&&(F=new xa,y[le]=F),F.getGripSpace()},this.getHand=function(le){let F=y[le];return F===void 0&&(F=new xa,y[le]=F),F.getHandSpace()};function X(le){let F=E.indexOf(le.inputSource);if(F===-1)return;let re=y[F];re!==void 0&&(re.update(le.inputSource,le.frame,c||a),re.dispatchEvent({type:le.type,data:le.inputSource}))}function K(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",ce);for(let le=0;le<y.length;le++){let F=E[le];F!==null&&(E[le]=null,y[le].disconnect(F))}R=null,q=null,v.reset(),e.setRenderTarget(m),p=null,f=null,d=null,i=null,T=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(le){if(i=le,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",K),i.addEventListener("inputsourceschange",ce),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){let F={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new pn(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let F=null,re=null,ne=null;b.depth&&(ne=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=b.stencil?ts:mr,re=b.stencil?es:Es);let pe={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(pe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new pn(f.textureWidth,f.textureHeight,{format:Nn,type:ui,depthTexture:new Tr(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ce(le){for(let F=0;F<le.removed.length;F++){let re=le.removed[F],ne=E.indexOf(re);ne>=0&&(E[ne]=null,y[ne].disconnect(re))}for(let F=0;F<le.added.length;F++){let re=le.added[F],ne=E.indexOf(re);if(ne===-1){for(let xe=0;xe<y.length;xe++)if(xe>=E.length){E.push(re),ne=xe;break}else if(E[xe]===null){E[xe]=re,ne=xe;break}if(ne===-1)break}let pe=y[ne];pe&&pe.connect(re)}}let j=new k,fe=new k;function ee(le,F,re){j.setFromMatrixPosition(F.matrixWorld),fe.setFromMatrixPosition(re.matrixWorld);let ne=j.distanceTo(fe),pe=F.projectionMatrix.elements,xe=re.projectionMatrix.elements,Le=pe[14]/(pe[10]-1),Ne=pe[14]/(pe[10]+1),J=(pe[9]+1)/pe[5],I=(pe[9]-1)/pe[5],ye=(pe[8]-1)/pe[0],be=(xe[8]+1)/xe[0],de=Le*ye,ve=Le*be,Me=ne/(-ye+be),we=Me*-ye;if(F.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(we),le.translateZ(Me),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),pe[10]===-1)le.projectionMatrix.copy(F.projectionMatrix),le.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let P=Le+Me,w=Ne+Me,B=de-we,ie=ve+(ne-we),he=J*Ne/w*P,se=I*Ne/w*P;le.projectionMatrix.makePerspective(B,ie,he,se,P,w),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Se(le,F){F===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(F.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(i===null)return;let F=le.near,re=le.far;v.texture!==null&&(v.depthNear>0&&(F=v.depthNear),v.depthFar>0&&(re=v.depthFar)),M.near=O.near=L.near=F,M.far=O.far=L.far=re,(R!==M.near||q!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,q=M.far);let ne=le.parent,pe=M.cameras;Se(M,ne);for(let xe=0;xe<pe.length;xe++)Se(pe[xe],ne);pe.length===2?ee(M,L,O):M.projectionMatrix.copy(L.projectionMatrix),Pe(le,M,ne)};function Pe(le,F,re){re===null?le.matrix.copy(F.matrixWorld):(le.matrix.copy(re.matrixWorld),le.matrix.invert(),le.matrix.multiply(F.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(F.projectionMatrix),le.projectionMatrixInverse.copy(F.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Sr*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Re=null;function at(le,F){if(u=F.getViewerPose(c||a),_=F,u!==null){let re=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let ne=!1;re.length!==M.cameras.length&&(M.cameras.length=0,ne=!0);for(let xe=0;xe<re.length;xe++){let Le=re[xe],Ne=null;if(p!==null)Ne=p.getViewport(Le);else{let I=d.getViewSubImage(f,Le);Ne=I.viewport,xe===0&&(e.setRenderTargetTextures(T,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(T))}let J=Z[xe];J===void 0&&(J=new tn,J.layers.enable(xe),J.viewport=new Pt,Z[xe]=J),J.matrix.fromArray(Le.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Le.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),xe===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ne===!0&&M.cameras.push(J)}let pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")){let xe=d.getDepthInformation(re[0]);xe&&xe.isValid&&xe.texture&&v.init(e,xe,i.renderState)}}for(let re=0;re<y.length;re++){let ne=E[re],pe=y[re];ne!==null&&pe!==void 0&&pe.update(ne,F,c||a)}Re&&Re(le,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),_=null}let dt=new Vp;dt.setAnimationLoop(at),this.setAnimationLoop=function(le){Re=le},this.dispose=function(){}}},ys=new yi,Uy=new Qe;function Oy(s,e){function t(b,m){b.matrixAutoUpdate===!0&&b.updateMatrix(),m.value.copy(b.matrix)}function n(b,m){m.color.getRGB(b.fogColor.value,Gp(s)),m.isFog?(b.fogNear.value=m.near,b.fogFar.value=m.far):m.isFogExp2&&(b.fogDensity.value=m.density)}function i(b,m,T,y,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(b,m):m.isMeshToonMaterial?(r(b,m),d(b,m)):m.isMeshPhongMaterial?(r(b,m),u(b,m)):m.isMeshStandardMaterial?(r(b,m),f(b,m),m.isMeshPhysicalMaterial&&p(b,m,E)):m.isMeshMatcapMaterial?(r(b,m),_(b,m)):m.isMeshDepthMaterial?r(b,m):m.isMeshDistanceMaterial?(r(b,m),v(b,m)):m.isMeshNormalMaterial?r(b,m):m.isLineBasicMaterial?(a(b,m),m.isLineDashedMaterial&&o(b,m)):m.isPointsMaterial?l(b,m,T,y):m.isSpriteMaterial?c(b,m):m.isShadowMaterial?(b.color.value.copy(m.color),b.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(b,m){b.opacity.value=m.opacity,m.color&&b.diffuse.value.copy(m.color),m.emissive&&b.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.bumpMap&&(b.bumpMap.value=m.bumpMap,t(m.bumpMap,b.bumpMapTransform),b.bumpScale.value=m.bumpScale,m.side===Tn&&(b.bumpScale.value*=-1)),m.normalMap&&(b.normalMap.value=m.normalMap,t(m.normalMap,b.normalMapTransform),b.normalScale.value.copy(m.normalScale),m.side===Tn&&b.normalScale.value.negate()),m.displacementMap&&(b.displacementMap.value=m.displacementMap,t(m.displacementMap,b.displacementMapTransform),b.displacementScale.value=m.displacementScale,b.displacementBias.value=m.displacementBias),m.emissiveMap&&(b.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,b.emissiveMapTransform)),m.specularMap&&(b.specularMap.value=m.specularMap,t(m.specularMap,b.specularMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest);let T=e.get(m),y=T.envMap,E=T.envMapRotation;y&&(b.envMap.value=y,ys.copy(E),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),b.envMapRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(ys)),b.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=m.reflectivity,b.ior.value=m.ior,b.refractionRatio.value=m.refractionRatio),m.lightMap&&(b.lightMap.value=m.lightMap,b.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,b.lightMapTransform)),m.aoMap&&(b.aoMap.value=m.aoMap,b.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,b.aoMapTransform))}function a(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform))}function o(b,m){b.dashSize.value=m.dashSize,b.totalSize.value=m.dashSize+m.gapSize,b.scale.value=m.scale}function l(b,m,T,y){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.size.value=m.size*T,b.scale.value=y*.5,m.map&&(b.map.value=m.map,t(m.map,b.uvTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function c(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.rotation.value=m.rotation,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function u(b,m){b.specular.value.copy(m.specular),b.shininess.value=Math.max(m.shininess,1e-4)}function d(b,m){m.gradientMap&&(b.gradientMap.value=m.gradientMap)}function f(b,m){b.metalness.value=m.metalness,m.metalnessMap&&(b.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,b.metalnessMapTransform)),b.roughness.value=m.roughness,m.roughnessMap&&(b.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,b.roughnessMapTransform)),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)}function p(b,m,T){b.ior.value=m.ior,m.sheen>0&&(b.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),b.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(b.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,b.sheenColorMapTransform)),m.sheenRoughnessMap&&(b.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,b.sheenRoughnessMapTransform))),m.clearcoat>0&&(b.clearcoat.value=m.clearcoat,b.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(b.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,b.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(b.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&b.clearcoatNormalScale.value.negate())),m.dispersion>0&&(b.dispersion.value=m.dispersion),m.iridescence>0&&(b.iridescence.value=m.iridescence,b.iridescenceIOR.value=m.iridescenceIOR,b.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(b.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,b.iridescenceMapTransform)),m.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),m.transmission>0&&(b.transmission.value=m.transmission,b.transmissionSamplerMap.value=T.texture,b.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(b.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,b.transmissionMapTransform)),b.thickness.value=m.thickness,m.thicknessMap&&(b.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=m.attenuationDistance,b.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(b.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(b.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=m.specularIntensity,b.specularColor.value.copy(m.specularColor),m.specularColorMap&&(b.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,b.specularColorMapTransform)),m.specularIntensityMap&&(b.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,b.specularIntensityMapTransform))}function _(b,m){m.matcap&&(b.matcap.value=m.matcap)}function v(b,m){let T=e.get(m).light;b.referencePosition.value.setFromMatrixPosition(T.matrixWorld),b.nearDistance.value=T.shadow.camera.near,b.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fy(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){let E=y.program;n.uniformBlockBinding(T,E)}function c(T,y){let E=i[T.id];E===void 0&&(_(T),E=u(T),i[T.id]=E,T.addEventListener("dispose",b));let U=y.program;n.updateUBOMapping(T,U);let D=e.render.frame;r[T.id]!==D&&(f(T),r[T.id]=D)}function u(T){let y=d();T.__bindingPointIndex=y;let E=s.createBuffer(),U=T.__size,D=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,U,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,E),E}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let y=i[T.id],E=T.uniforms,U=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let D=0,L=E.length;D<L;D++){let O=Array.isArray(E[D])?E[D]:[E[D]];for(let Z=0,M=O.length;Z<M;Z++){let R=O[Z];if(p(R,D,Z,U)===!0){let q=R.__offset,X=Array.isArray(R.value)?R.value:[R.value],K=0;for(let ce=0;ce<X.length;ce++){let j=X[ce],fe=v(j);typeof j=="number"||typeof j=="boolean"?(R.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,q+K,R.__data)):j.isMatrix3?(R.__data[0]=j.elements[0],R.__data[1]=j.elements[1],R.__data[2]=j.elements[2],R.__data[3]=0,R.__data[4]=j.elements[3],R.__data[5]=j.elements[4],R.__data[6]=j.elements[5],R.__data[7]=0,R.__data[8]=j.elements[6],R.__data[9]=j.elements[7],R.__data[10]=j.elements[8],R.__data[11]=0):(j.toArray(R.__data,K),K+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,y,E,U){let D=T.value,L=y+"_"+E;if(U[L]===void 0)return typeof D=="number"||typeof D=="boolean"?U[L]=D:U[L]=D.clone(),!0;{let O=U[L];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return U[L]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function _(T){let y=T.uniforms,E=0,U=16;for(let L=0,O=y.length;L<O;L++){let Z=Array.isArray(y[L])?y[L]:[y[L]];for(let M=0,R=Z.length;M<R;M++){let q=Z[M],X=Array.isArray(q.value)?q.value:[q.value];for(let K=0,ce=X.length;K<ce;K++){let j=X[K],fe=v(j),ee=E%U,Se=ee%fe.boundary,Pe=ee+Se;E+=Se,Pe!==0&&U-Pe<fe.storage&&(E+=U-Pe),q.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=fe.storage}}}let D=E%U;return D>0&&(E+=U-D),T.__size=E,T.__cache={},this}function v(T){let y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function b(T){let y=T.target;y.removeEventListener("dispose",b);let E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(let T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var pl=class{constructor(e={}){let{canvas:t=Gg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),_=new Int32Array(4),v=null,b=null,m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=Qi,this.toneMappingExposure=1;let y=this,E=!1,U=0,D=0,L=null,O=-1,Z=null,M=new Pt,R=new Pt,q=null,X=new Ke(0),K=0,ce=t.width,j=t.height,fe=1,ee=null,Se=null,Pe=new Pt(0,0,ce,j),Re=new Pt(0,0,ce,j),at=!1,dt=new Aa,le=!1,F=!1,re=new Qe,ne=new Qe,pe=new k,xe=new Pt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function J(){return L===null?fe:1}let I=n;function ye(C,H){return t.getContext(C,H)}try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Su}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",De,!1),I===null){let H="webgl2";if(I=ye(H,C),I===null)throw ye(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let be,de,ve,Me,we,P,w,B,ie,he,se,ze,Ie,Fe,ht,_e,Be,et,it,Xe,lt,$e,_t,z;function Ue(){be=new ex(I),be.init(),$e=new Dy(I,be),de=new Y_(I,be,e,$e),ve=new Cy(I),de.reverseDepthBuffer&&ve.buffers.depth.setReversed(!0),Me=new ix(I),we=new gy,P=new Iy(I,be,ve,we,de,$e,Me),w=new Z_(y),B=new Q_(y),ie=new h0(I),_t=new q_(I,ie),he=new tx(I,ie,Me,_t),se=new rx(I,he,ie,Me),it=new sx(I,de,P),_e=new K_(we),ze=new my(y,w,B,be,de,_t,_e),Ie=new Oy(y,we),Fe=new _y,ht=new Ey(be),et=new X_(y,w,B,ve,se,f,l),Be=new Ay(y,se,de),z=new Fy(I,Me,de,ve),Xe=new j_(I,be,Me),lt=new nx(I,be,Me),Me.programs=ze.programs,y.capabilities=de,y.extensions=be,y.properties=we,y.renderLists=Fe,y.shadowMap=Be,y.state=ve,y.info=Me}Ue();let te=new nu(y,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(ce,j,!1))},this.getSize=function(C){return C.set(ce,j)},this.setSize=function(C,H,Y=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,j=H,t.width=Math.floor(C*fe),t.height=Math.floor(H*fe),Y===!0&&(t.style.width=C+"px",t.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(ce*fe,j*fe).floor()},this.setDrawingBufferSize=function(C,H,Y){ce=C,j=H,fe=Y,t.width=Math.floor(C*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(Pe)},this.setViewport=function(C,H,Y,$){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,H,Y,$),ve.viewport(M.copy(Pe).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(Re)},this.setScissor=function(C,H,Y,$){C.isVector4?Re.set(C.x,C.y,C.z,C.w):Re.set(C,H,Y,$),ve.scissor(R.copy(Re).multiplyScalar(fe).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(C){ve.setScissorTest(at=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){Se=C},this.getClearColor=function(C){return C.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(C=!0,H=!0,Y=!0){let $=0;if(C){let V=!1;if(L!==null){let Te=L.texture.format;V=Te===Ou||Te===Uu||Te===Nu}if(V){let Te=L.texture.type,He=Te===ui||Te===Es||Te===Ea||Te===es||Te===Du||Te===Lu,Q=et.getClearColor(),Ge=et.getClearAlpha(),st=Q.r,Ze=Q.g,je=Q.b;He?(p[0]=st,p[1]=Ze,p[2]=je,p[3]=Ge,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=st,_[1]=Ze,_[2]=je,_[3]=Ge,I.clearBufferiv(I.COLOR,0,_))}else $|=I.COLOR_BUFFER_BIT}H&&($|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),ht.dispose(),we.dispose(),w.dispose(),B.dispose(),se.dispose(),_t.dispose(),z.dispose(),ze.dispose(),te.dispose(),te.removeEventListener("sessionstart",Si),te.removeEventListener("sessionend",Ja),Xn.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=Me.autoReset,H=Be.enabled,Y=Be.autoUpdate,$=Be.needsUpdate,V=Be.type;Ue(),Me.autoReset=C,Be.enabled=H,Be.autoUpdate=Y,Be.needsUpdate=$,Be.type=V}function De(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function yt(C){let H=C.target;H.removeEventListener("dispose",yt),Gt(H)}function Gt(C){vn(C),we.remove(C)}function vn(C){let H=we.get(C).programs;H!==void 0&&(H.forEach(function(Y){ze.releaseProgram(Y)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,Y,$,V,Te){H===null&&(H=Le);let He=V.isMesh&&V.matrixWorld.determinant()<0,Q=ac(C,H,Y,$,V);ve.setMaterial($,He);let Ge=Y.index,st=1;if($.wireframe===!0){if(Ge=he.getWireframeAttribute(Y),Ge===void 0)return;st=2}let Ze=Y.drawRange,je=Y.attributes.position,Rt=Ze.start*st,kt=(Ze.start+Ze.count)*st;Te!==null&&(Rt=Math.max(Rt,Te.start*st),kt=Math.min(kt,(Te.start+Te.count)*st)),Ge!==null?(Rt=Math.max(Rt,0),kt=Math.min(kt,Ge.count)):je!=null&&(Rt=Math.max(Rt,0),kt=Math.min(kt,je.count));let qe=kt-Rt;if(qe<0||qe===1/0)return;_t.setup(V,$,Q,Y,Ge);let vt,ft=Xe;if(Ge!==null&&(vt=ie.get(Ge),ft=lt,ft.setIndex(vt)),V.isMesh)$.wireframe===!0?(ve.setLineWidth($.wireframeLinewidth*J()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(V.isLine){let Ve=$.linewidth;Ve===void 0&&(Ve=1),ve.setLineWidth(Ve*J()),V.isLineSegments?ft.setMode(I.LINES):V.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else V.isPoints?ft.setMode(I.POINTS):V.isSprite&&ft.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ft.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ve=V._multiDrawStarts,Qt=V._multiDrawCounts,ot=V._multiDrawCount,Mn=Ge?ie.get(Ge).bytesPerElement:1,Sn=we.get($).currentProgram.getUniforms();for(let gn=0;gn<ot;gn++)Sn.setValue(I,"_gl_DrawID",gn),ft.render(Ve[gn]/Mn,Qt[gn])}else if(V.isInstancedMesh)ft.renderInstances(Rt,qe,V.count);else if(Y.isInstancedBufferGeometry){let Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Qt=Math.min(Y.instanceCount,Ve);ft.renderInstances(Rt,qe,Qt)}else ft.render(Rt,qe)};function wt(C,H,Y){C.transparent===!0&&C.side===un&&C.forceSinglePass===!1?(C.side=Tn,C.needsUpdate=!0,Us(C,H,Y),C.side=_i,C.needsUpdate=!0,Us(C,H,Y),C.side=un):Us(C,H,Y)}this.compile=function(C,H,Y=null){Y===null&&(Y=C),b=ht.get(Y),b.init(H),T.push(b),Y.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),C!==Y&&C.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();let $=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Te=V.material;if(Te)if(Array.isArray(Te))for(let He=0;He<Te.length;He++){let Q=Te[He];wt(Q,Y,V),$.add(Q)}else wt(Te,Y,V),$.add(Te)}),T.pop(),b=null,$},this.compileAsync=function(C,H,Y=null){let $=this.compile(C,H,Y);return new Promise(V=>{function Te(){if($.forEach(function(He){we.get(He).currentProgram.isReady()&&$.delete(He)}),$.size===0){V(C);return}setTimeout(Te,10)}be.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Tt=null;function Wn(C){Tt&&Tt(C)}function Si(){Xn.stop()}function Ja(){Xn.start()}let Xn=new Vp;Xn.setAnimationLoop(Wn),typeof self!="undefined"&&Xn.setContext(self),this.setAnimationLoop=function(C){Tt=C,te.setAnimationLoop(C),C===null?Xn.stop():Xn.start()},te.addEventListener("sessionstart",Si),te.addEventListener("sessionend",Ja),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(H),H=te.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,H,L),b=ht.get(C,T.length),b.init(H),T.push(b),ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),dt.setFromProjectionMatrix(ne),F=this.localClippingEnabled,le=_e.init(this.clippingPlanes,F),v=Fe.get(C,m.length),v.init(),m.push(v),te.enabled===!0&&te.isPresenting===!0){let Te=y.xr.getDepthSensingMesh();Te!==null&&Ei(Te,H,-1/0,y.sortObjects)}Ei(C,H,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(ee,Se),Ne=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ne&&et.addToRenderList(v,C),this.info.render.frame++,le===!0&&_e.beginShadows();let Y=b.state.shadowsArray;Be.render(Y,C,H),le===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=v.opaque,V=v.transmissive;if(b.setupLights(),H.isArrayCamera){let Te=H.cameras;if(V.length>0)for(let He=0,Q=Te.length;He<Q;He++){let Ge=Te[He];Ns($,V,C,Ge)}Ne&&et.render(C);for(let He=0,Q=Te.length;He<Q;He++){let Ge=Te[He];$a(v,C,Ge,Ge.viewport)}}else V.length>0&&Ns($,V,C,H),Ne&&et.render(C),$a(v,C,H);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(y,C,H),_t.resetDefaultState(),O=-1,Z=null,T.pop(),T.length>0?(b=T[T.length-1],le===!0&&_e.setGlobalState(y.clippingPlanes,b.state.camera)):b=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Ei(C,H,Y,$){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||dt.intersectsSprite(C)){$&&xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ne);let He=se.update(C),Q=C.material;Q.visible&&v.push(C,He,Q,Y,xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||dt.intersectsObject(C))){let He=se.update(C),Q=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xe.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),xe.copy(He.boundingSphere.center)),xe.applyMatrix4(C.matrixWorld).applyMatrix4(ne)),Array.isArray(Q)){let Ge=He.groups;for(let st=0,Ze=Ge.length;st<Ze;st++){let je=Ge[st],Rt=Q[je.materialIndex];Rt&&Rt.visible&&v.push(C,He,Rt,Y,xe.z,je)}}else Q.visible&&v.push(C,He,Q,Y,xe.z,null)}}let Te=C.children;for(let He=0,Q=Te.length;He<Q;He++)Ei(Te[He],H,Y,$)}function $a(C,H,Y,$){let V=C.opaque,Te=C.transmissive,He=C.transparent;b.setupLightsView(Y),le===!0&&_e.setGlobalState(y.clippingPlanes,Y),$&&ve.viewport(M.copy($)),V.length>0&&hs(V,H,Y),Te.length>0&&hs(Te,H,Y),He.length>0&&hs(He,H,Y),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ns(C,H,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[$.id]===void 0&&(b.state.transmissionRenderTarget[$.id]=new pn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Un:ui,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));let Te=b.state.transmissionRenderTarget[$.id],He=$.viewport||M;Te.setSize(He.z,He.w);let Q=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor(X),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&et.render(Y);let Ge=y.toneMapping;y.toneMapping=Qi;let st=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),b.setupLightsView($),le===!0&&_e.setGlobalState(y.clippingPlanes,$),hs(C,Y,$),P.updateMultisampleRenderTarget(Te),P.updateRenderTargetMipmap(Te),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let je=0,Rt=H.length;je<Rt;je++){let kt=H[je],qe=kt.object,vt=kt.geometry,ft=kt.material,Ve=kt.group;if(ft.side===un&&qe.layers.test($.layers)){let Qt=ft.side;ft.side=Tn,ft.needsUpdate=!0,qn(qe,Y,$,vt,ft,Ve),ft.side=Qt,ft.needsUpdate=!0,Ze=!0}}Ze===!0&&(P.updateMultisampleRenderTarget(Te),P.updateRenderTargetMipmap(Te))}y.setRenderTarget(Q),y.setClearColor(X,K),st!==void 0&&($.viewport=st),y.toneMapping=Ge}function hs(C,H,Y){let $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Te=C.length;V<Te;V++){let He=C[V],Q=He.object,Ge=He.geometry,st=$===null?He.material:$,Ze=He.group;Q.layers.test(Y.layers)&&qn(Q,H,Y,Ge,st,Ze)}}function qn(C,H,Y,$,V,Te){C.onBeforeRender(y,H,Y,$,V,Te),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(y,H,Y,$,C,Te),V.transparent===!0&&V.side===un&&V.forceSinglePass===!1?(V.side=Tn,V.needsUpdate=!0,y.renderBufferDirect(Y,H,$,V,C,Te),V.side=_i,V.needsUpdate=!0,y.renderBufferDirect(Y,H,$,V,C,Te),V.side=un):y.renderBufferDirect(Y,H,$,V,C,Te),C.onAfterRender(y,H,Y,$,V,Te)}function Us(C,H,Y){H.isScene!==!0&&(H=Le);let $=we.get(C),V=b.state.lights,Te=b.state.shadowsArray,He=V.state.version,Q=ze.getParameters(C,V.state,Te,H,Y),Ge=ze.getProgramCacheKey(Q),st=$.programs;$.environment=C.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(C.isMeshStandardMaterial?B:w).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,st===void 0&&(C.addEventListener("dispose",yt),st=new Map,$.programs=st);let Ze=st.get(Ge);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===He)return Qa(C,Q),Ze}else Q.uniforms=ze.getUniforms(C),C.onBeforeCompile(Q,y),Ze=ze.acquireProgram(Q,Ge),st.set(Ge,Ze),$.uniforms=Q.uniforms;let je=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=_e.uniform),Qa(C,Q),$.needsLights=Vr(C),$.lightsStateVersion=He,$.needsLights&&(je.ambientLightColor.value=V.state.ambient,je.lightProbe.value=V.state.probe,je.directionalLights.value=V.state.directional,je.directionalLightShadows.value=V.state.directionalShadow,je.spotLights.value=V.state.spot,je.spotLightShadows.value=V.state.spotShadow,je.rectAreaLights.value=V.state.rectArea,je.ltc_1.value=V.state.rectAreaLTC1,je.ltc_2.value=V.state.rectAreaLTC2,je.pointLights.value=V.state.point,je.pointLightShadows.value=V.state.pointShadow,je.hemisphereLights.value=V.state.hemi,je.directionalShadowMap.value=V.state.directionalShadowMap,je.directionalShadowMatrix.value=V.state.directionalShadowMatrix,je.spotShadowMap.value=V.state.spotShadowMap,je.spotLightMatrix.value=V.state.spotLightMatrix,je.spotLightMap.value=V.state.spotLightMap,je.pointShadowMap.value=V.state.pointShadowMap,je.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Ze,$.uniformsList=null,Ze}function Os(C){if(C.uniformsList===null){let H=C.currentProgram.getUniforms();C.uniformsList=br.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Qa(C,H){let Y=we.get(C);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function ac(C,H,Y,$,V){H.isScene!==!0&&(H=Le),P.resetTextureUnits();let Te=H.fog,He=$.isMeshStandardMaterial?H.environment:null,Q=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:mn,Ge=($.isMeshStandardMaterial?B:w).get($.envMap||He),st=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ze=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),je=!!Y.morphAttributes.position,Rt=!!Y.morphAttributes.normal,kt=!!Y.morphAttributes.color,qe=Qi;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(qe=y.toneMapping);let vt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=vt!==void 0?vt.length:0,Ve=we.get($),Qt=b.state.lights;if(le===!0&&(F===!0||C!==Z)){let An=C===Z&&$.id===O;_e.setState($,C,An)}let ot=!1;$.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Qt.state.version||Ve.outputColorSpace!==Q||V.isBatchedMesh&&Ve.batching===!1||!V.isBatchedMesh&&Ve.batching===!0||V.isBatchedMesh&&Ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ve.instancing===!1||!V.isInstancedMesh&&Ve.instancing===!0||V.isSkinnedMesh&&Ve.skinning===!1||!V.isSkinnedMesh&&Ve.skinning===!0||V.isInstancedMesh&&Ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ve.instancingMorph===!1&&V.morphTexture!==null||Ve.envMap!==Ge||$.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==_e.numPlanes||Ve.numIntersection!==_e.numIntersection)||Ve.vertexAlphas!==st||Ve.vertexTangents!==Ze||Ve.morphTargets!==je||Ve.morphNormals!==Rt||Ve.morphColors!==kt||Ve.toneMapping!==qe||Ve.morphTargetsCount!==ft)&&(ot=!0):(ot=!0,Ve.__version=$.version);let Mn=Ve.currentProgram;ot===!0&&(Mn=Us($,H,V));let Sn=!1,gn=!1,Fs=!1,zt=Mn.getUniforms(),bn=Ve.uniforms;if(ve.useProgram(Mn.program)&&(Sn=!0,gn=!0,Fs=!0),$.id!==O&&(O=$.id,gn=!0),Sn||Z!==C){de.reverseDepthBuffer?(re.copy(C.projectionMatrix),Wg(re),Xg(re),zt.setValue(I,"projectionMatrix",re)):zt.setValue(I,"projectionMatrix",C.projectionMatrix),zt.setValue(I,"viewMatrix",C.matrixWorldInverse);let An=zt.map.cameraPosition;An!==void 0&&An.setValue(I,pe.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&zt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&zt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),Z!==C&&(Z=C,gn=!0,Fs=!0)}if(V.isSkinnedMesh){zt.setOptional(I,V,"bindMatrix"),zt.setOptional(I,V,"bindMatrixInverse");let An=V.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),zt.setValue(I,"boneTexture",An.boneTexture,P))}V.isBatchedMesh&&(zt.setOptional(I,V,"batchingTexture"),zt.setValue(I,"batchingTexture",V._matricesTexture,P),zt.setOptional(I,V,"batchingIdTexture"),zt.setValue(I,"batchingIdTexture",V._indirectTexture,P),zt.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&zt.setValue(I,"batchingColorTexture",V._colorsTexture,P));let us=Y.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&it.update(V,Y,Mn),(gn||Ve.receiveShadow!==V.receiveShadow)&&(Ve.receiveShadow=V.receiveShadow,zt.setValue(I,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bn.envMap.value=Ge,bn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(bn.envMapIntensity.value=H.environmentIntensity),gn&&(zt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&wi(bn,Fs),Te&&$.fog===!0&&Ie.refreshFogUniforms(bn,Te),Ie.refreshMaterialUniforms(bn,$,fe,j,b.state.transmissionRenderTarget[C.id]),br.upload(I,Os(Ve),bn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(br.upload(I,Os(Ve),bn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&zt.setValue(I,"center",V.center),zt.setValue(I,"modelViewMatrix",V.modelViewMatrix),zt.setValue(I,"normalMatrix",V.normalMatrix),zt.setValue(I,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let An=$.uniformsGroups;for(let Ti=0,Wr=An.length;Ti<Wr;Ti++){let eo=An[Ti];z.update(eo,Mn),z.bind(eo,Mn)}}return Mn}function wi(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Vr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,H,Y){we.get(C.texture).__webglTexture=H,we.get(C.depthTexture).__webglTexture=Y;let $=we.get(C);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,H){let Y=we.get(C);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,Y=0){L=C,U=H,D=Y;let $=!0,V=null,Te=!1,He=!1;if(C){let Ge=we.get(C);if(Ge.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Ge.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Ge.__hasExternalTextures)P.rebindTextures(C,we.get(C.texture).__webglTexture,we.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let je=C.depthTexture;if(Ge.__boundDepthTexture!==je){if(je!==null&&we.has(je)&&(C.width!==je.image.width||C.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}let st=C.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(He=!0);let Ze=we.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[H])?V=Ze[H][Y]:V=Ze[H],Te=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?V=we.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?V=Ze[Y]:V=Ze,M.copy(C.viewport),R.copy(C.scissor),q=C.scissorTest}else M.copy(Pe).multiplyScalar(fe).floor(),R.copy(Re).multiplyScalar(fe).floor(),q=at;if(ve.bindFramebuffer(I.FRAMEBUFFER,V)&&$&&ve.drawBuffers(C,V),ve.viewport(M),ve.scissor(R),ve.setScissorTest(q),Te){let Ge=we.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ge.__webglTexture,Y)}else if(He){let Ge=we.get(C.texture),st=H||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ge.__webglTexture,Y||0,st)}O=-1},this.readRenderTargetPixels=function(C,H,Y,$,V,Te,He){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Q=we.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Q=Q[He]),Q){ve.bindFramebuffer(I.FRAMEBUFFER,Q);try{let Ge=C.texture,st=Ge.format,Ze=Ge.type;if(!de.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-$&&Y>=0&&Y<=C.height-V&&I.readPixels(H,Y,$,V,$e.convert(st),$e.convert(Ze),Te)}finally{let Ge=L!==null?we.get(L).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,H,Y,$,V,Te,He){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Q=we.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Q=Q[He]),Q){let Ge=C.texture,st=Ge.format,Ze=Ge.type;if(!de.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=C.width-$&&Y>=0&&Y<=C.height-V){ve.bindFramebuffer(I.FRAMEBUFFER,Q);let je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),I.readPixels(H,Y,$,V,$e.convert(st),$e.convert(Ze),0);let Rt=L!==null?we.get(L).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Rt);let kt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Vg(I,kt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.deleteBuffer(je),I.deleteSync(kt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,H=null,Y=0){C.isTexture!==!0&&(nl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1]);let $=Math.pow(2,-Y),V=Math.floor(C.image.width*$),Te=Math.floor(C.image.height*$),He=H!==null?H.x:0,Q=H!==null?H.y:0;P.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,He,Q,V,Te),ve.unbindTexture()},this.copyTextureToTexture=function(C,H,Y=null,$=null,V=0){C.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1],H=arguments[2],V=arguments[3]||0,Y=null);let Te,He,Q,Ge,st,Ze;Y!==null?(Te=Y.max.x-Y.min.x,He=Y.max.y-Y.min.y,Q=Y.min.x,Ge=Y.min.y):(Te=C.image.width,He=C.image.height,Q=0,Ge=0),$!==null?(st=$.x,Ze=$.y):(st=0,Ze=0);let je=$e.convert(H.format),Rt=$e.convert(H.type);P.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);let kt=I.getParameter(I.UNPACK_ROW_LENGTH),qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vt=I.getParameter(I.UNPACK_SKIP_PIXELS),ft=I.getParameter(I.UNPACK_SKIP_ROWS),Ve=I.getParameter(I.UNPACK_SKIP_IMAGES),Qt=C.isCompressedTexture?C.mipmaps[V]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Qt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Q),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,st,Ze,Te,He,je,Rt,Qt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,st,Ze,Qt.width,Qt.height,je,Qt.data):I.texSubImage2D(I.TEXTURE_2D,V,st,Ze,Te,He,je,Rt,Qt),I.pixelStorei(I.UNPACK_ROW_LENGTH,kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),V===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(C,H,Y=null,$=null,V=0){C.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,C=arguments[2],H=arguments[3],V=arguments[4]||0);let Te,He,Q,Ge,st,Ze,je,Rt,kt,qe=C.isCompressedTexture?C.mipmaps[V]:C.image;Y!==null?(Te=Y.max.x-Y.min.x,He=Y.max.y-Y.min.y,Q=Y.max.z-Y.min.z,Ge=Y.min.x,st=Y.min.y,Ze=Y.min.z):(Te=qe.width,He=qe.height,Q=qe.depth,Ge=0,st=0,Ze=0),$!==null?(je=$.x,Rt=$.y,kt=$.z):(je=0,Rt=0,kt=0);let vt=$e.convert(H.format),ft=$e.convert(H.type),Ve;if(H.isData3DTexture)P.setTexture3D(H,0),Ve=I.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)P.setTexture2DArray(H,0),Ve=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);let Qt=I.getParameter(I.UNPACK_ROW_LENGTH),ot=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mn=I.getParameter(I.UNPACK_SKIP_PIXELS),Sn=I.getParameter(I.UNPACK_SKIP_ROWS),gn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,qe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,st),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Ve,V,je,Rt,kt,Te,He,Q,vt,ft,qe.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(Ve,V,je,Rt,kt,Te,He,Q,vt,qe.data):I.texSubImage3D(Ve,V,je,Rt,kt,Te,He,Q,vt,ft,qe),I.pixelStorei(I.UNPACK_ROW_LENGTH,Qt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,gn),V===0&&H.generateMipmaps&&I.generateMipmap(Ve),ve.unbindTexture()},this.initRenderTarget=function(C){we.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){U=0,D=0,L=null,ve.reset(),_t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Hu?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===Wl?"display-p3":"srgb"}};var ml=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ar=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zh,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new k,ws=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cr=class extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sr,la=new k,rr=new k,ar=new k,or=new oe,ca=new oe,Yp=new Qe,Fo=new k,ha=new k,Bo=new k,Qf=new oe,Yc=new oe,ep=new oe,Ra=class extends Vt{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rr(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new ws(n,3,0,!1)),sr.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=sr,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-ar.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;zo(Fo.set(-.5,-.5,0),ar,a,rr,i,r),zo(ha.set(.5,-.5,0),ar,a,rr,i,r),zo(Bo.set(.5,.5,0),ar,a,rr,i,r),Qf.set(0,0),Yc.set(1,0),ep.set(1,1);let o=e.ray.intersectTriangle(Fo,ha,Bo,!1,la);if(o===null&&(zo(ha.set(-.5,.5,0),ar,a,rr,i,r),Yc.set(0,1),o=e.ray.intersectTriangle(Fo,Bo,ha,!1,la),o===null))return;let l=e.ray.origin.distanceTo(la);l<e.near||l>e.far||t.push({distance:l,point:la.clone(),uv:Ji.getInterpolation(la,Fo,ha,Bo,Qf,Yc,ep,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function zo(s,e,t,n,i,r){or.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ca.x=r*or.x-i*or.y,ca.y=i*or.x+r*or.y):ca.copy(or),s.copy(e),s.x+=ca.x,s.y+=ca.y,s.applyMatrix4(Yp)}var tp=new k,np=new Pt,ip=new Pt,By=new k,sp=new Qe,Ho=new k,Kc=new Gn,rp=new Qe,Zc=new Ui,gl=class extends ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cf,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingBox.expandByPoint(Ho)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingSphere.expandByPoint(Ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kc.copy(this.boundingSphere),Kc.applyMatrix4(i),e.ray.intersectsSphere(Kc)!==!1&&(rp.copy(i).invert(),Zc.copy(e.ray).applyMatrix4(rp),!(this.boundingBox!==null&&Zc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;np.fromBufferAttribute(i.attributes.skinIndex,e),ip.fromBufferAttribute(i.attributes.skinWeight,e),tp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=ip.getComponent(r);if(a!==0){let o=np.getComponent(r);sp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(By.copy(tp).applyMatrix4(sp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ca=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},is=class extends fn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=nn,u=nn,d,f){super(null,a,o,l,c,u,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ap=new Qe,zy=new Qe,bl=class s{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:zy;ap.multiplyMatrices(o,t[r]),ap.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new is(t,e,e,Nn,hi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ca),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ts=class extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lr=new Qe,op=new Qe,Go=[],lp=new an,Hy=new Qe,ua=new ae,da=new Gn,_l=class extends ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),lp.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(lp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),da.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(n),e.ray.intersectsSphere(da)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,lr),op.multiplyMatrices(n,lr),ua.matrixWorld=op,ua.raycast(e,Go);for(let a=0,o=Go.length;a<o;a++){let l=Go[a];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new is(new Float32Array(i*this.count),i,this.count,ku,hi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Pa=class extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xl=new k,yl=new k,cp=new Qe,fa=new Ui,Vo=new Gn,Jc=new k,hp=new k,Pr=class extends Vt{constructor(e=new Xt,t=new Pa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xl.fromBufferAttribute(t,i-1),yl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xl.distanceTo(yl);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;cp.copy(i).invert(),fa.copy(e.ray).applyMatrix4(cp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,b=_-1;v<b;v+=c){let m=u.getX(v),T=u.getX(v+1),y=Wo(this,e,fa,l,m,T);y&&t.push(y)}if(this.isLineLoop){let v=u.getX(_-1),b=u.getX(p),m=Wo(this,e,fa,l,v,b);m&&t.push(m)}}else{let p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=p,b=_-1;v<b;v+=c){let m=Wo(this,e,fa,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=Wo(this,e,fa,l,_-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wo(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(xl.fromBufferAttribute(a,i),yl.fromBufferAttribute(a,r),t.distanceSqToSegment(xl,yl,Jc,hp)>n)return;Jc.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Jc);if(!(l<e.near||l>e.far))return{distance:l,point:hp.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var up=new k,dp=new k,vl=class extends Pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)up.fromBufferAttribute(t,i),dp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+up.distanceTo(dp);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ml=class extends Pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},As=class extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fp=new Qe,iu=new Ui,Xo=new Gn,qo=new k,Ir=class extends Vt{constructor(e=new Xt,t=new As){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(i),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;fp.copy(i).invert(),iu.copy(e.ray).applyMatrix4(fp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,v=p;_<v;_++){let b=c.getX(_);qo.fromBufferAttribute(d,b),pp(qo,b,l,i,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,v=p;_<v;_++)qo.fromBufferAttribute(d,_),pp(qo,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function pp(s,e,t,n,i,r,a){let o=iu.distanceSqToPoint(s);if(o<t){let l=new k;iu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Sl=class extends fn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let u=n[i],f=n[i+1]-u,p=(a-u)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new oe:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,i=[],r=[],a=[],o=new k,l=new Qe;for(let p=0;p<=e;p++){let _=p/e;i[p]=this.getTangentAt(_,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos($t(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos($t(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ia=class extends $n{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},su=class extends Ia{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wu(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,p*=u,i(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var jo=new k,$c=new Wu,Qc=new Wu,eh=new Wu,Da=class extends $n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new k){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(jo.subVectors(i[0],i[1]).add(i[0]),c=jo);let d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(jo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=jo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),b=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),_<1e-4&&(_=v),b<1e-4&&(b=v),$c.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,_,v,b),Qc.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,_,v,b),eh.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,_,v,b)}else this.curveType==="catmullrom"&&($c.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Qc.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),eh.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set($c.calc(l),Qc.calc(l),eh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new k().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mp(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Gy(s,e){let t=1-s;return t*t*e}function Vy(s,e){return 2*(1-s)*s*e}function Wy(s,e){return s*s*e}function ya(s,e,t,n){return Gy(s,e)+Vy(s,t)+Wy(s,n)}function Xy(s,e){let t=1-s;return t*t*t*e}function qy(s,e){let t=1-s;return 3*t*t*s*e}function jy(s,e){return 3*(1-s)*s*s*e}function Yy(s,e){return s*s*s*e}function va(s,e,t,n,i){return Xy(s,e)+qy(s,t)+jy(s,n)+Yy(s,i)}var El=class extends $n{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(va(e,i.x,r.x,a.x,o.x),va(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ru=class extends $n{constructor(e=new k,t=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new k){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(va(e,i.x,r.x,a.x,o.x),va(e,i.y,r.y,a.y,o.y),va(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wl=class extends $n{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},au=class extends $n{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends $n{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,i.x,r.x,a.x),ya(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends $n{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,i.x,r.x,a.x),ya(e,i.y,r.y,a.y),ya(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Al=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(mp(o,l.x,c.x,u.x,d.x),mp(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new oe().fromArray(i))}return this}},Rl=Object.freeze({__proto__:null,ArcCurve:su,CatmullRomCurve3:Da,CubicBezierCurve:El,CubicBezierCurve3:ru,EllipseCurve:Ia,LineCurve:wl,LineCurve3:au,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:Dr,SplineCurve:Al}),ou=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Rl[i.type]().fromJSON(i))}return this}},Cl=class extends ou{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wl(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Tl(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new El(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Al(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Ia(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vi=class s extends Xt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=$t(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new k,f=new oe,p=new k,_=new k,v=new k,b=0,m=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:b=e[T+1].x-e[T].x,m=e[T+1].y-e[T].y,p.x=m*1,p.y=-b,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:b=e[T+1].x-e[T].x,m=e[T+1].y-e[T].y,p.x=m*1,p.y=-b,p.z=m*0,_.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(_)}for(let T=0;T<=t;T++){let y=n+T*u*i,E=Math.sin(y),U=Math.cos(y);for(let D=0;D<=e.length-1;D++){d.x=e[D].x*E,d.y=e[D].y,d.z=e[D].x*U,a.push(d.x,d.y,d.z),f.x=T/t,f.y=D/(e.length-1),o.push(f.x,f.y);let L=l[3*D+0]*E,O=l[3*D+1],Z=l[3*D+0]*U;c.push(L,O,Z)}}for(let T=0;T<t;T++)for(let y=0;y<e.length-1;y++){let E=y+T*e.length,U=E,D=E+e.length,L=E+e.length+1,O=E+1;r.push(U,D,O),r.push(L,O,D)}this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("uv",new Et(o,2)),this.setAttribute("normal",new Et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Bt=class s extends Xt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],f=[],p=[],_=0,v=[],b=n/2,m=0;T(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(p,2));function T(){let E=new k,U=new k,D=0,L=(t-e)/n;for(let O=0;O<=r;O++){let Z=[],M=O/r,R=M*(t-e)+e;for(let q=0;q<=i;q++){let X=q/i,K=X*l+o,ce=Math.sin(K),j=Math.cos(K);U.x=R*ce,U.y=-M*n+b,U.z=R*j,d.push(U.x,U.y,U.z),E.set(ce,L,j).normalize(),f.push(E.x,E.y,E.z),p.push(X,1-M),Z.push(_++)}v.push(Z)}for(let O=0;O<i;O++)for(let Z=0;Z<r;Z++){let M=v[Z][O],R=v[Z+1][O],q=v[Z+1][O+1],X=v[Z][O+1];e>0&&(u.push(M,R,X),D+=3),t>0&&(u.push(R,q,X),D+=3)}c.addGroup(m,D,0),m+=D}function y(E){let U=_,D=new oe,L=new k,O=0,Z=E===!0?e:t,M=E===!0?1:-1;for(let q=1;q<=i;q++)d.push(0,b*M,0),f.push(0,M,0),p.push(.5,.5),_++;let R=_;for(let q=0;q<=i;q++){let K=q/i*l+o,ce=Math.cos(K),j=Math.sin(K);L.x=Z*j,L.y=b*M,L.z=Z*ce,d.push(L.x,L.y,L.z),f.push(0,M,0),D.x=ce*.5+.5,D.y=j*.5*M+.5,p.push(D.x,D.y),_++}for(let q=0;q<i;q++){let X=U+q,K=R+q;E===!0?u.push(K,K+1,X):u.push(K+1,K,X),O+=3}c.addGroup(m,O,E===!0?1:2),m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},La=class s extends Bt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ka=class extends Cl{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Cl().fromJSON(i))}return this}},Ky={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Kp(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,f,p;if(n&&(r=ev(s,e,r,t)),s.length>80*t){o=c=s[0],l=u=s[1];for(let _=t;_<i;_+=t)d=s[_],f=s[_+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Na(r,a,t,o,l,p,0),a}};function Kp(s,e,t,n,i){let r,a;if(i===uv(s,e,t,n)>0)for(r=e;r<t;r+=n)a=gp(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=gp(r,s[r],s[r+1],a);return a&&jl(a,a.next)&&(Oa(a),a=a.next),a}function Rs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(jl(t,t.next)||Yt(t.prev,t,t.next)===0)){if(Oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Na(s,e,t,n,i,r,a){if(!s)return;!a&&r&&rv(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Jy(s,n,i,r):Zy(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Oa(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=$y(Rs(s),e,t),Na(s,e,t,n,i,r,2)):a===2&&Qy(s,e,t,n,i,r):Na(Rs(s),e,t,n,i,r,1);break}}}function Zy(s){let e=s.prev,t=s,n=s.next;if(Yt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<r?i<a?i:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=d&&_.y<=p&&fr(i,o,r,l,a,c,_.x,_.y)&&Yt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Jy(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Yt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,u=i.y,d=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,_=u<d?u<f?u:f:d<f?d:f,v=o>l?o>c?o:c:l>c?l:c,b=u>d?u>f?u:f:d>f?d:f,m=lu(p,_,e,t,n),T=lu(v,b,e,t,n),y=s.prevZ,E=s.nextZ;for(;y&&y.z>=m&&E&&E.z<=T;){if(y.x>=p&&y.x<=v&&y.y>=_&&y.y<=b&&y!==i&&y!==a&&fr(o,u,l,d,c,f,y.x,y.y)&&Yt(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=p&&E.x<=v&&E.y>=_&&E.y<=b&&E!==i&&E!==a&&fr(o,u,l,d,c,f,E.x,E.y)&&Yt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=m;){if(y.x>=p&&y.x<=v&&y.y>=_&&y.y<=b&&y!==i&&y!==a&&fr(o,u,l,d,c,f,y.x,y.y)&&Yt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=T;){if(E.x>=p&&E.x<=v&&E.y>=_&&E.y<=b&&E!==i&&E!==a&&fr(o,u,l,d,c,f,E.x,E.y)&&Yt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function $y(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!jl(i,r)&&Zp(i,n,n.next,r)&&Ua(i,r)&&Ua(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Oa(n),Oa(n.next),n=s=r),n=n.next}while(n!==s);return Rs(n)}function Qy(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lv(a,o)){let l=Jp(a,o);a=Rs(a,a.next),l=Rs(l,l.next),Na(a,e,t,n,i,r,0),Na(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function ev(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Kp(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ov(c));for(i.sort(tv),r=0;r<i.length;r++)t=nv(i[r],t);return t}function tv(s,e){return s.x-e.x}function nv(s,e){let t=iv(s,e);if(!t)return e;let n=Jp(t,s);return Rs(n,n.next),Rs(t,t.next)}function iv(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,u=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&fr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Ua(t,s)&&(d<u||d===u&&(t.x>i.x||t.x===i.x&&sv(i,t)))&&(i=t,u=d)),t=t.next;while(t!==o);return i}function sv(s,e){return Yt(s.prev,s,e.prev)<0&&Yt(e.next,s,s.next)<0}function rv(s,e,t,n){let i=s;do i.z===0&&(i.z=lu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,av(i)}function av(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function lu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ov(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function fr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function lv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!cv(s,e)&&(Ua(s,e)&&Ua(e,s)&&hv(s,e)&&(Yt(s.prev,s,e.prev)||Yt(s,e.prev,e))||jl(s,e)&&Yt(s.prev,s,s.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function jl(s,e){return s.x===e.x&&s.y===e.y}function Zp(s,e,t,n){let i=Ko(Yt(s,e,t)),r=Ko(Yt(s,e,n)),a=Ko(Yt(t,n,s)),o=Ko(Yt(t,n,e));return!!(i!==r&&a!==o||i===0&&Yo(s,t,e)||r===0&&Yo(s,n,e)||a===0&&Yo(t,s,n)||o===0&&Yo(t,e,n))}function Yo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ko(s){return s>0?1:s<0?-1:0}function cv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ua(s,e){return Yt(s.prev,s,s.next)<0?Yt(s,e,s.next)>=0&&Yt(s,s.prev,e)>=0:Yt(s,e,s.prev)<0||Yt(s,s.next,e)<0}function hv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Jp(s,e){let t=new cu(s.i,s.x,s.y),n=new cu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function gp(s,e,t,n){let i=new cu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Oa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uv(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Ma=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];bp(e),_p(n,e);let a=e.length;t.forEach(bp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,_p(n,t[l]);let o=Ky.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function bp(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function _p(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Pl=class s extends Xt{constructor(e=new ka([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Et(i,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:dv,y,E=!1,U,D,L,O;m&&(y=m.getSpacedPoints(u),E=!0,f=!1,U=m.computeFrenetFrames(u,!1),D=new k,L=new k,O=new k),f||(b=0,p=0,_=0,v=0);let Z=o.extractPoints(c),M=Z.shape,R=Z.holes;if(!Ma.isClockWise(M)){M=M.reverse();for(let J=0,I=R.length;J<I;J++){let ye=R[J];Ma.isClockWise(ye)&&(R[J]=ye.reverse())}}let X=Ma.triangulateShape(M,R),K=M;for(let J=0,I=R.length;J<I;J++){let ye=R[J];M=M.concat(ye)}function ce(J,I,ye){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(I,ye)}let j=M.length,fe=X.length;function ee(J,I,ye){let be,de,ve,Me=J.x-I.x,we=J.y-I.y,P=ye.x-J.x,w=ye.y-J.y,B=Me*Me+we*we,ie=Me*w-we*P;if(Math.abs(ie)>Number.EPSILON){let he=Math.sqrt(B),se=Math.sqrt(P*P+w*w),ze=I.x-we/he,Ie=I.y+Me/he,Fe=ye.x-w/se,ht=ye.y+P/se,_e=((Fe-ze)*w-(ht-Ie)*P)/(Me*w-we*P);be=ze+Me*_e-J.x,de=Ie+we*_e-J.y;let Be=be*be+de*de;if(Be<=2)return new oe(be,de);ve=Math.sqrt(Be/2)}else{let he=!1;Me>Number.EPSILON?P>Number.EPSILON&&(he=!0):Me<-Number.EPSILON?P<-Number.EPSILON&&(he=!0):Math.sign(we)===Math.sign(w)&&(he=!0),he?(be=-we,de=Me,ve=Math.sqrt(B)):(be=Me,de=we,ve=Math.sqrt(B/2))}return new oe(be/ve,de/ve)}let Se=[];for(let J=0,I=K.length,ye=I-1,be=J+1;J<I;J++,ye++,be++)ye===I&&(ye=0),be===I&&(be=0),Se[J]=ee(K[J],K[ye],K[be]);let Pe=[],Re,at=Se.concat();for(let J=0,I=R.length;J<I;J++){let ye=R[J];Re=[];for(let be=0,de=ye.length,ve=de-1,Me=be+1;be<de;be++,ve++,Me++)ve===de&&(ve=0),Me===de&&(Me=0),Re[be]=ee(ye[be],ye[ve],ye[Me]);Pe.push(Re),at=at.concat(Re)}for(let J=0;J<b;J++){let I=J/b,ye=p*Math.cos(I*Math.PI/2),be=_*Math.sin(I*Math.PI/2)+v;for(let de=0,ve=K.length;de<ve;de++){let Me=ce(K[de],Se[de],be);ne(Me.x,Me.y,-ye)}for(let de=0,ve=R.length;de<ve;de++){let Me=R[de];Re=Pe[de];for(let we=0,P=Me.length;we<P;we++){let w=ce(Me[we],Re[we],be);ne(w.x,w.y,-ye)}}}let dt=_+v;for(let J=0;J<j;J++){let I=f?ce(M[J],at[J],dt):M[J];E?(L.copy(U.normals[0]).multiplyScalar(I.x),D.copy(U.binormals[0]).multiplyScalar(I.y),O.copy(y[0]).add(L).add(D),ne(O.x,O.y,O.z)):ne(I.x,I.y,0)}for(let J=1;J<=u;J++)for(let I=0;I<j;I++){let ye=f?ce(M[I],at[I],dt):M[I];E?(L.copy(U.normals[J]).multiplyScalar(ye.x),D.copy(U.binormals[J]).multiplyScalar(ye.y),O.copy(y[J]).add(L).add(D),ne(O.x,O.y,O.z)):ne(ye.x,ye.y,d/u*J)}for(let J=b-1;J>=0;J--){let I=J/b,ye=p*Math.cos(I*Math.PI/2),be=_*Math.sin(I*Math.PI/2)+v;for(let de=0,ve=K.length;de<ve;de++){let Me=ce(K[de],Se[de],be);ne(Me.x,Me.y,d+ye)}for(let de=0,ve=R.length;de<ve;de++){let Me=R[de];Re=Pe[de];for(let we=0,P=Me.length;we<P;we++){let w=ce(Me[we],Re[we],be);E?ne(w.x,w.y+y[u-1].y,y[u-1].x+ye):ne(w.x,w.y,d+ye)}}}le(),F();function le(){let J=i.length/3;if(f){let I=0,ye=j*I;for(let be=0;be<fe;be++){let de=X[be];pe(de[2]+ye,de[1]+ye,de[0]+ye)}I=u+b*2,ye=j*I;for(let be=0;be<fe;be++){let de=X[be];pe(de[0]+ye,de[1]+ye,de[2]+ye)}}else{for(let I=0;I<fe;I++){let ye=X[I];pe(ye[2],ye[1],ye[0])}for(let I=0;I<fe;I++){let ye=X[I];pe(ye[0]+j*u,ye[1]+j*u,ye[2]+j*u)}}n.addGroup(J,i.length/3-J,0)}function F(){let J=i.length/3,I=0;re(K,I),I+=K.length;for(let ye=0,be=R.length;ye<be;ye++){let de=R[ye];re(de,I),I+=de.length}n.addGroup(J,i.length/3-J,1)}function re(J,I){let ye=J.length;for(;--ye>=0;){let be=ye,de=ye-1;de<0&&(de=J.length-1);for(let ve=0,Me=u+b*2;ve<Me;ve++){let we=j*ve,P=j*(ve+1),w=I+be+we,B=I+de+we,ie=I+de+P,he=I+be+P;xe(w,B,ie,he)}}}function ne(J,I,ye){l.push(J),l.push(I),l.push(ye)}function pe(J,I,ye){Le(J),Le(I),Le(ye);let be=i.length/3,de=T.generateTopUV(n,i,be-3,be-2,be-1);Ne(de[0]),Ne(de[1]),Ne(de[2])}function xe(J,I,ye,be){Le(J),Le(I),Le(be),Le(I),Le(ye),Le(be);let de=i.length/3,ve=T.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);Ne(ve[0]),Ne(ve[1]),Ne(ve[3]),Ne(ve[1]),Ne(ve[2]),Ne(ve[3])}function Le(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Ne(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Rl[i.type]().fromJSON(i)),new s(n,e.options)}},dv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new oe(r,a),new oe(o,l),new oe(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[i*3],p=e[i*3+1],_=e[i*3+2],v=e[r*3],b=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-d),new oe(f,1-_),new oe(v,1-m)]:[new oe(o,1-l),new oe(u,1-d),new oe(p,1-_),new oe(b,1-m)]}};function fv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fa=class s extends Xt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],d=e,f=(t-e)/i,p=new k,_=new oe;for(let v=0;v<=i;v++){for(let b=0;b<=n;b++){let m=r+b/n*a;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let v=0;v<i;v++){let b=v*(n+1);for(let m=0;m<n;m++){let T=m+b,y=T,E=T+n+1,U=T+n+2,D=T+1;o.push(y,E,D),o.push(E,U,D)}}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var di=class s extends Xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new k,f=new k,p=[],_=[],v=[],b=[];for(let m=0;m<=n;m++){let T=[],y=m/n,E=0;m===0&&a===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let U=0;U<=t;U++){let D=U/t;d.x=-e*Math.cos(i+D*r)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(i+D*r)*Math.sin(a+y*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),b.push(D+E,1-y),T.push(c++)}u.push(T)}for(let m=0;m<n;m++)for(let T=0;T<t;T++){let y=u[m][T+1],E=u[m][T],U=u[m+1][T],D=u[m+1][T+1];(m!==0||a>0)&&p.push(y,E,D),(m!==n-1||l<Math.PI)&&p.push(E,U,D)}this.setIndex(p),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Lr=class s extends Xt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],u=new k,d=new k,f=new k;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){let v=_/i*r,b=p/n*Math.PI*2;d.x=(e+t*Math.cos(b))*Math.cos(v),d.y=(e+t*Math.cos(b))*Math.sin(v),d.z=t*Math.sin(b),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){let v=(i+1)*p+_-1,b=(i+1)*(p-1)+_-1,m=(i+1)*(p-1)+_,T=(i+1)*p+_;a.push(v,b,T),a.push(b,m,T)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ba=class s extends Xt{constructor(e=new Dr(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new k,l=new k,c=new oe,u=new k,d=[],f=[],p=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(p,2));function v(){for(let y=0;y<t;y++)b(y);b(r===!1?t:0),T(),m()}function b(y){u=e.getPointAt(y/t,u);let E=a.normals[y],U=a.binormals[y];for(let D=0;D<=i;D++){let L=D/i*Math.PI*2,O=Math.sin(L),Z=-Math.cos(L);l.x=Z*E.x+O*U.x,l.y=Z*E.y+O*U.y,l.z=Z*E.z+O*U.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=t;y++)for(let E=1;E<=i;E++){let U=(i+1)*(y-1)+(E-1),D=(i+1)*y+(E-1),L=(i+1)*y+E,O=(i+1)*(y-1)+E;_.push(U,D,O),_.push(D,L,O)}}function T(){for(let y=0;y<=t;y++)for(let E=0;E<=i;E++)c.x=y/t,c.y=E/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Rl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Il=class extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ye=class extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vn=class extends Ye{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Dl=class extends Dn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Zo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function pv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function mv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function xp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function $p(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ss=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hu=class extends ss{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hr,endingEnd:hr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ur:r=e,o=2*t-n;break;case il:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ur:a=e,l=2*n-t;break;case il:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),v=_*_,b=v*_,m=-f*b+2*f*v-f*_,T=(1+f)*b+(-1.5-2*f)*v+(-.5+f)*_+1,y=(-1-p)*b+(1.5+p)*v+.5*_,E=p*b-p*v;for(let U=0;U!==o;++U)r[U]=m*a[u+U]+T*a[c+U]+y*a[l+U]+E*a[d+U];return r}},Ll=class extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},uu=class extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case yc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&pv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){let v=t[d+_];if(v!==t[f+_]||v!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Mr;var rs=class extends Qn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=vr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Qn{};kl.prototype.ValueTypeName="color";var Oi=class extends Qn{};Oi.prototype.ValueTypeName="number";var du=class extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Fi=class extends Qn{InterpolantFactoryMethodLinear(e){return new du(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Qn{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=vr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Qn{};Bi.prototype.ValueTypeName="vector";var kr=class{constructor(e="",t=-1,n=[],i=Bu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Jn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(bv(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=mv(l);l=xp(l,1,u),c=xp(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Oi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],f=i[d];f||(i[d]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,f,p,_,v){if(p.length!==0){let b=[],m=[];$p(p,b,m,_),b.length!==0&&v.push(new d(f,b,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)p[f[_].morphTargets[v]]=-1;for(let v in p){let b=[],m=[];for(let T=0;T!==f[_].morphTargets.length;++T){let y=f[_];b.push(y.time),m.push(y.morphTarget===v?1:0)}i.push(new Oi(".morphTargetInfluence["+v+"]",b,m))}l=p.length*a}else{let p=".bones["+t[d].name+"]";n(Bi,p+".position",f,"pos",i),n(Fi,p+".quaternion",f,"rot",i),n(Bi,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function gv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return kl;case"quaternion":return Fi;case"bool":case"boolean":return rs;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function bv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gv(s.type);if(s.times===void 0){let t=[],n=[];$p(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var $i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},fu=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},_v=new fu,zi=class{constructor(e){this.manager=e!==void 0?e:_v,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Li={},pu=class extends Error{constructor(e,t){super(e),this.response=t}},za=class extends zi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:i});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Li[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0,v=0,b=new ReadableStream({start(m){T();function T(){d.read().then(({done:y,value:E})=>{if(y)m.close();else{v+=E.byteLength;let U=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let D=0,L=u.length;D<L;D++){let O=u[D];O.onProgress&&O.onProgress(U)}m.enqueue(E),T()}},y=>{m.error(y)})}}});return new Response(b)}else throw new pu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{$i.add(e,c);let u=Li[e];delete Li[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Li[e];if(u===void 0)throw this.manager.itemError(e),c;delete Li[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var mu=class extends zi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$i.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=wa("img");function l(){u(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Cs=class extends zi{constructor(e){super(e)}load(e,t,n,i){let r=new fn,a=new mu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Nr=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Nl=class extends Nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},th=new Qe,yp=new k,vp=new k,Ha=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(yp),vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vp),t.updateMatrixWorld(),th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gu=class extends Ha{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ul=class extends Nr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Mp=new Qe,pa=new k,nh=new k,bu=class extends Ha{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pa.setFromMatrixPosition(e.matrixWorld),n.position.copy(pa),nh.copy(n.position),nh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nh),n.updateMatrixWorld(),i.makeTranslation(-pa.x,-pa.y,-pa.z),Mp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mp)}},ei=class extends Nr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_u=class extends Ha{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends Nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new _u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var os=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ol=class extends zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$i.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return $i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,l),r.manager.itemStart(e)}};var Ur=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Sp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Sp(){return performance.now()}var xu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){rn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;rn.multiplyQuaternionsFlat(e,a,e,t,e,n),rn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Xu="\\[\\]\\.:\\/",xv=new RegExp("["+Xu+"]","g"),qu="[^"+Xu+"]",yv="[^"+Xu.replace("\\.","")+"]",vv=/((?:WC+[\/:])*)/.source.replace("WC",qu),Mv=/(WCOD+)?/.source.replace("WCOD",yv),Sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qu),Ev=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qu),wv=new RegExp("^"+vv+Mv+Sv+Ev+"$"),Tv=["material","materials","bones","map"],yu=class{constructor(e,t,n){let i=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xv,"")}static parseTrackName(e){let t=wv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Tv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=yu;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vu=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:hr,endingEnd:hr};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=fg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case mg:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Bu:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===pg;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Fu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ur,i.endingEnd=ur):(e?i.endingStart=this.zeroSlopeAtStart?ur:hr:i.endingStart=il,t?i.endingEnd=this.zeroSlopeAtEnd?ur:hr:i.endingEnd=il)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},Av=new Float32Array(1),Or=class extends xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){let f=i[d],p=f.name,_=u[p];if(_!==void 0)++_.referenceCount,a[d]=_;else{if(_=a[d],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}let v=t&&t._propertyBindings[d].binding.parsedPath;_=new xu(Ot.create(n,p,v),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),a[d]=_}o[d].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ll(new Float32Array(2),new Float32Array(2),1,Av),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?kr.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Bu),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new vu(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?kr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ep=new Qe,Fl=class{constructor(e,t,n=0,i=1/0){this.ray=new Ui(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ep.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ep),this}intersectObject(e,t=!0,n=[]){return Mu(e,this,n,t),n.sort(wp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Mu(e[i],this,n,t);return n.sort(wp),n}};function wp(s,e){return s.distance-e.distance}function Mu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Mu(r[a],e,t,!0)}}var Ga=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bl=class extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);function ju(s,e){if(e===Fp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Wa||e===Vl){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Wa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Yl=class extends zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=os.extractUrlBase(e);a=os.resolveURL(c,this.path)}else a=os.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new za(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===im){try{a[xt.KHR_BINARY_GLTF]=new md(e)}catch(d){i&&i(d);return}r=JSON.parse(a[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Md(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case xt.KHR_MATERIALS_UNLIT:a[d]=new $u;break;case xt.KHR_DRACO_MESH_COMPRESSION:a[d]=new gd(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:a[d]=new bd;break;case xt.KHR_MESH_QUANTIZATION:a[d]=new _d;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Cv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ju=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],mn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ps(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ei(u),c.distance=d;break;case"spot":c=new Ul(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},$u=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){let i=[];e.color=new Ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],mn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Zt))}return Promise.all(i)}},Qu=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(o,o)}return Promise.all(r)}},td=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},nd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},id=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],mn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Zt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},sd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},rd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(o[0],o[1],o[2],mn),Promise.all(r)}},ad=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},od=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(o[0],o[1],o[2],mn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Zt)),Promise.all(r)}},ld=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},cd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},hd=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ud=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},dd=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},fd=class{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,f,i.mode,i.filter),p})})}else return null}},pd=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==ti.TRIANGLES&&c.mode!==ti.TRIANGLE_STRIP&&c.mode!==ti.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let _ of d){let v=new Qe,b=new k,m=new rn,T=new k(1,1,1),y=new _l(_.geometry,_.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&b.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&T.fromBufferAttribute(l.SCALE,E),y.setMatrixAt(E,v.compose(b,m,T));for(let E in l)if(E==="_COLOR_0"){let U=l[E];y.instanceColor=new Ts(U.array,U.itemSize,U.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,l[E]);Vt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},im="glTF",Xa=12,Qp={JSON:1313821514,BIN:5130562},md=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Xa,r=new DataView(e,Xa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Qp.JSON){let c=new Uint8Array(e,Xa+a,o);this.content=n.decode(c)}else if(l===Qp.BIN){let c=Xa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},gd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=yd[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=yd[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=zr[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(p){for(let _ in p.attributes){let v=p.attributes[_],b=l[_];b!==void 0&&(v.normalized=b)}d(p)},o,c,mn,f)})})}},bd=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},_d=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},Kl=class extends ss{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,f=d*d,p=f*d,_=e*c,v=_-c,b=-2*p+3*f,m=p-f,T=1-b,y=m-f+d;for(let E=0;E!==o;E++){let U=a[v+E+o],D=a[v+E+l]*u,L=a[_+E+o],O=a[_+E]*u;r[E]=T*U+y*D+b*L+m*O}return r}},Pv=new rn,xd=class extends Kl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Pv.fromArray(r).normalize().toArray(r),r}},ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},em={9728:nn,9729:kn,9984:Pu,9985:ga,9986:cr,9987:bi},tm={33071:ki,33648:Sa,10497:dn},Yu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iv={CUBICSPLINE:void 0,LINEAR:Mr,STEP:vr},Ku={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Dv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),s.DefaultMaterial}function Ls(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Lv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function kv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nv(s){let e,t=s.extensions&&s.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zu(t.attributes):e=s.indices+":"+Zu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Zu(s.targets[n]);return e}function Zu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Uv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Ov=new Qe,Md=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&a<98?this.textureLoader=new Cs(this.options.manager):this.textureLoader=new Ol(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new za(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ls(r,o,i),Hi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(os.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Yu[i.type],o=zr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Kt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Yu[i.type],c=zr[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,v,b;if(p&&p!==d){let m=Math.floor(f/p),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,y=t.cache.get(T);y||(v=new c(o,m*p,i.count*p/u),y=new Rr(v,p/u),t.cache.add(T,y)),b=new ws(y,l,f%p/u,_)}else o===null?v=new c(i.count*l):v=new c(o,f,i.count*l),b=new Kt(v,l,_);if(i.sparse!==void 0){let m=Yu.SCALAR,T=zr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,U=new T(a[1],y,i.sparse.count*m),D=new c(a[2],E,i.sparse.count*l);o!==null&&(b=new Kt(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let L=0,O=U.length;L<O;L++){let Z=U[L];if(b.setX(Z,D[L*l]),l>=2&&b.setY(Z,D[L*l+1]),l>=3&&b.setZ(Z,D[L*l+2]),l>=4&&b.setW(Z,D[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=_}return b})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=em[f.magFilter]||kn,u.minFilter=em[f.minFilter]||bi,u.wrapS=tm[f.wrapS]||dn,u.wrapT=tm[f.wrapT]||dn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(v){let b=new fn(v);b.needsUpdate=!0,f(b)}),t.load(os.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Hi(d,a),d.userData.mimeType=a.mimeType||Uv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new As,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Pa,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ye}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){let d=i[xt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Ke(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],mn),o.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Zt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=un);let u=r.alphaMode||Ku.OPAQUE;if(u===Ku.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ku.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wt){let d=r.emissiveFactor;o.emissive=new Ke().setRGB(d[0],d[1],d[2],mn)}return r.emissiveTexture!==void 0&&a!==Wt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Zt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Hi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ls(i,d,r),d})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return nm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Nv(c),d=i[u];if(d)a.push(d.promise);else{let f;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=nm(new Xt,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Dv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,_=u.length;p<_;p++){let v=u[p],b=a[p],m,T=c[p];if(b.mode===ti.TRIANGLES||b.mode===ti.TRIANGLE_STRIP||b.mode===ti.TRIANGLE_FAN||b.mode===void 0)m=r.isSkinnedMesh===!0?new gl(v,T):new ae(v,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),b.mode===ti.TRIANGLE_STRIP?m.geometry=ju(m.geometry,Vl):b.mode===ti.TRIANGLE_FAN&&(m.geometry=ju(m.geometry,Wa));else if(b.mode===ti.LINES)m=new vl(v,T);else if(b.mode===ti.LINE_STRIP)m=new Pr(v,T);else if(b.mode===ti.LINE_LOOP)m=new Ml(v,T);else if(b.mode===ti.POINTS)m=new Ir(v,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(m.geometry.morphAttributes).length>0&&kv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Hi(m,r),b.extensions&&Ls(i,m,b),t.assignFinalMaterial(m),d.push(m)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Ls(i,d[0],r),d[0];let f=new ut;r.extensions&&Ls(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(Xl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ns(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let f=new Qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new bl(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){let p=i.channels[d],_=i.samplers[p.sampler],v=p.target,b=v.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,T=i.parameters!==void 0?i.parameters[_.output]:_.output;v.node!==void 0&&(a.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",T)),c.push(_),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let f=d[0],p=d[1],_=d[2],v=d[3],b=d[4],m=[];for(let T=0,y=f.length;T<y;T++){let E=f[T],U=p[T],D=_[T],L=v[T],O=b[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let Z=n._createAnimationTracks(E,U,D,L,O);if(Z)for(let M=0;M<Z.length;M++)m.push(Z[M])}return new kr(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Ov)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Ca:c.length>1?u=new ut:c.length===1?u=c[0]:u=new Vt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Hi(u,r),r.extensions&&Ls(n,u,r),r.matrix!==void 0){let d=new Qe;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new ut;n.name&&(r.name=i.createUniqueName(n.name)),Hi(r,n),n.extensions&&Ls(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[f,p]of i.associations)(f instanceof Dn||f instanceof fn)&&d.set(f,p);return u.traverse(f=>{let p=i.associations.get(f);p!=null&&d.set(f,p)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];ls[r.path]===ls.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(ls[r.path]){case ls.weights:c=Oi;break;case ls.rotation:c=Fi;break;case ls.position:case ls.scale:c=Bi;break;default:switch(n.itemSize){case 1:c=Oi;break;case 2:case 3:default:c=Bi;break}break}let u=i.interpolation!==void 0?Iv[i.interpolation]:Mr,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let _=new c(l[f]+"."+ls[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=vd(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Fi?xd:Kl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Fv(s,e,t){let n=e.attributes,i=new an;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){let u=vd(zr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new k,l=new k;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){let v=vd(zr[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Gn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function nm(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=yd[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return St.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),Hi(s,e),Fv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Lv(s,e.targets,t):s})}var sm={type:"change"},Ed={type:"start"},am={type:"end"},Zl=new Ui,rm=new li,Bv=Math.cos(70*Xl.DEG2RAD),cn=new k,Fn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sd=1e-6,Jl=class extends Bl{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ds.ROTATE,TWO:Ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new rn,this._lastTargetPosition=new k,this._quat=new rn().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ga,this._sphericalDelta=new Ga,this._scale=1,this._panOffset=new k,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new k,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hv.bind(this),this._onPointerDown=zv.bind(this),this._onPointerUp=Gv.bind(this),this._onContextMenu=Kv.bind(this),this._onMouseWheel=Xv.bind(this),this._onKeyDown=qv.bind(this),this._onTouchStart=jv.bind(this),this._onTouchMove=Yv.bind(this),this._onMouseDown=Vv.bind(this),this._onMouseMove=Wv.bind(this),this._interceptControlDown=Zv.bind(this),this._interceptControlUp=Jv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sm),this.update(),this.state=Nt.NONE}update(e=null){let t=this.object.position;cn.copy(t).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Fn:n>Math.PI&&(n-=Fn),i<-Math.PI?i+=Fn:i>Math.PI&&(i-=Fn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=cn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zl.origin.copy(this.object.position),Zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zl.direction))<Bv?this.object.lookAt(this.target):(rm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zl.intersectPlane(rm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sd||this._lastTargetPosition.distanceToSquared(this.target)>Sd?(this.dispatchEvent(sm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){cn.setFromMatrixColumn(t,0),cn.multiplyScalar(-e),this._panOffset.add(cn)}_panUp(e,t){this.screenSpacePanning===!0?cn.setFromMatrixColumn(t,1):(cn.setFromMatrixColumn(t,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(e),this._panOffset.add(cn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;cn.copy(i).sub(this.target);let r=cn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function zv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Hv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Gv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(am),this.state=Nt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vv(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Nt.DOLLY;break;case Is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}break;case Is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Ed)}function Wv(s){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Xv(s){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(s.preventDefault(),this.dispatchEvent(Ed),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(am))}function qv(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function jv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Nt.TOUCH_ROTATE;break;case Ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case Ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Nt.TOUCH_DOLLY_PAN;break;case Ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Ed)}function Yv(s){switch(this._trackPointer(s),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Nt.NONE}}function Kv(s){this.enabled!==!1&&s.preventDefault()}function Zv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var om=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var T=new Uint8Array(m.length),y=0;y<m.length;++y){var E=m.charCodeAt(y);T[y]=E>96?E-97:E>64?E-39:E+4}for(var U=0,y=0;y<m.length;++y)T[U++]=T[y]<60?n[T[y]]:(T[y]-60)*64+T[++y];return T.buffer.slice(0,U)}function l(m,T,y,E,U,D){var L=r.exports.sbrk,O=y+3&-4,Z=L(O*E),M=L(U.length),R=new Uint8Array(r.exports.memory.buffer);R.set(U,M);var q=m(Z,y,E,M,U.length);if(q==0&&D&&D(Z,O,E),T.set(R.subarray(Z,Z+y*E)),L(Z-L(0)),q!=0)throw new Error("Malformed buffer data: "+q)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function p(m){var T={object:new Worker(m),pending:0,requests:{}};return T.object.onmessage=function(y){var E=y.data;T.pending-=E.count,T.requests[E.id][E.action](E.value),delete T.requests[E.id]},T}function _(m){for(var T="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+b.toString(),y=new Blob([T],{type:"text/javascript"}),E=URL.createObjectURL(y),U=0;U<m;++U)d[U]=p(E);URL.revokeObjectURL(E)}function v(m,T,y,E,U){for(var D=d[0],L=1;L<d.length;++L)d[L].pending<D.pending&&(D=d[L]);return new Promise(function(O,Z){var M=new Uint8Array(y),R=f++;D.pending+=m,D.requests[R]={resolve:O,reject:Z},D.object.postMessage({id:R,count:m,size:T,source:M,mode:E,filter:U},[M.buffer])})}function b(m){a.then(function(){var T=m.data;try{var y=new Uint8Array(T.count*T.size);l(r.exports[T.mode],y,T.count,T.size,T.source,r.exports[T.filter]),self.postMessage({id:T.id,count:T.count,action:"resolve",value:y},[y.buffer])}catch(E){self.postMessage({id:T.id,count:T.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(m){_(m)},decodeVertexBuffer:function(m,T,y,E,U){l(r.exports.meshopt_decodeVertexBuffer,m,T,y,E,r.exports[c[U]])},decodeIndexBuffer:function(m,T,y,E){l(r.exports.meshopt_decodeIndexBuffer,m,T,y,E)},decodeIndexSequence:function(m,T,y,E){l(r.exports.meshopt_decodeIndexSequence,m,T,y,E)},decodeGltfBuffer:function(m,T,y,E,U,D){l(r.exports[u[U]],m,T,y,E,r.exports[c[D]])},decodeGltfBufferAsync:function(m,T,y,E,U){return d.length>0?v(m,T,y,u[E],c[U]):a.then(function(){var D=new Uint8Array(m*T);return l(r.exports[u[E]],D,m,T,y,r.exports[c[U]]),D})}}}();var $l=class extends Ar{constructor(){super();let e=new ct;e.deleteAttribute("uv");let t=new Ye({side:Tn}),n=new Ye,i=new ei(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ae(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new ae(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new ae(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ae(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new ae(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let d=new ae(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let f=new ae(e,Hr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let p=new ae(e,Hr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let _=new ae(e,Hr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let v=new ae(e,Hr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let b=new ae(e,Hr(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,.1),this.add(b);let m=new ae(e,Hr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Hr(s){let e=new Wt;return e.color.setScalar(s),e}var cs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$v=new ns(-1,1,1,-1,0,1),wd=class extends Xt{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}},Qv=new wd,Mi=class{constructor(e){this._mesh=new ae(Qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$v)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ql=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=On.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Mi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qa=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},ec=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var tc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ql(cs),this.copyPass.material.blending=sn,this.clock=new Ur}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}qa!==void 0&&(a instanceof qa?n=!0:a instanceof ec&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nc=class extends Ln{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ke}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var ja={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qe},cameraProjectionMatrixInverse:{value:new Qe},cameraWorldMatrix:{value:new Qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},Ya={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ic={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function lm(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=eM(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new k(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new is(i,e,e);return r.wrapS=dn,r.wrapT=dn,r.needsUpdate=!0,r}function eM(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var Ka={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Td(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new Qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Td(s,e,t){let n=tM(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function tM(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new k(Math.cos(r),Math.sin(r),a))}return n}var sc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(l+c)*u,f=l-d,p=c-d,_=e-f,v=t-p,b,m;_>v?(b=1,m=0):(b=0,m=1);let T=_-b+u,y=v-m+u,E=_-1+2*u,U=v-1+2*u,D=l&255,L=c&255,O=this.perm[D+this.perm[L]]%12,Z=this.perm[D+b+this.perm[L+m]]%12,M=this.perm[D+1+this.perm[L+1]]%12,R=.5-_*_-v*v;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[O],_,v));let q=.5-T*T-y*y;q<0?i=0:(q*=q,i=q*q*this.dot(this.grad3[Z],T,y));let X=.5-E*E-U*U;return X<0?r=0:(X*=X,r=X*X*this.dot(this.grad3[M],E,U)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(n+c),p=1/6,_=(u+d+f)*p,v=u-_,b=d-_,m=f-_,T=e-v,y=t-b,E=n-m,U,D,L,O,Z,M;T>=y?y>=E?(U=1,D=0,L=0,O=1,Z=1,M=0):T>=E?(U=1,D=0,L=0,O=1,Z=0,M=1):(U=0,D=0,L=1,O=1,Z=0,M=1):y<E?(U=0,D=0,L=1,O=0,Z=1,M=1):T<E?(U=0,D=1,L=0,O=0,Z=1,M=1):(U=0,D=1,L=0,O=1,Z=1,M=0);let R=T-U+p,q=y-D+p,X=E-L+p,K=T-O+2*p,ce=y-Z+2*p,j=E-M+2*p,fe=T-1+3*p,ee=y-1+3*p,Se=E-1+3*p,Pe=u&255,Re=d&255,at=f&255,dt=this.perm[Pe+this.perm[Re+this.perm[at]]]%12,le=this.perm[Pe+U+this.perm[Re+D+this.perm[at+L]]]%12,F=this.perm[Pe+O+this.perm[Re+Z+this.perm[at+M]]]%12,re=this.perm[Pe+1+this.perm[Re+1+this.perm[at+1]]]%12,ne=.6-T*T-y*y-E*E;ne<0?i=0:(ne*=ne,i=ne*ne*this.dot3(this.grad3[dt],T,y,E));let pe=.6-R*R-q*q-X*X;pe<0?r=0:(pe*=pe,r=pe*pe*this.dot3(this.grad3[le],R,q,X));let xe=.6-K*K-ce*ce-j*j;xe<0?a=0:(xe*=xe,a=xe*xe*this.dot3(this.grad3[F],K,ce,j));let Le=.6-fe*fe-ee*ee-Se*Se;return Le<0?o=0:(Le*=Le,o=Le*Le*this.dot3(this.grad3[re],fe,ee,Se)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,d,f,p,_,v=(e+t+n+i)*l,b=Math.floor(e+v),m=Math.floor(t+v),T=Math.floor(n+v),y=Math.floor(i+v),E=(b+m+T+y)*c,U=b-E,D=m-E,L=T-E,O=y-E,Z=e-U,M=t-D,R=n-L,q=i-O,X=Z>M?32:0,K=Z>R?16:0,ce=M>R?8:0,j=Z>q?4:0,fe=M>q?2:0,ee=R>q?1:0,Se=X+K+ce+j+fe+ee,Pe=a[Se][0]>=3?1:0,Re=a[Se][1]>=3?1:0,at=a[Se][2]>=3?1:0,dt=a[Se][3]>=3?1:0,le=a[Se][0]>=2?1:0,F=a[Se][1]>=2?1:0,re=a[Se][2]>=2?1:0,ne=a[Se][3]>=2?1:0,pe=a[Se][0]>=1?1:0,xe=a[Se][1]>=1?1:0,Le=a[Se][2]>=1?1:0,Ne=a[Se][3]>=1?1:0,J=Z-Pe+c,I=M-Re+c,ye=R-at+c,be=q-dt+c,de=Z-le+2*c,ve=M-F+2*c,Me=R-re+2*c,we=q-ne+2*c,P=Z-pe+3*c,w=M-xe+3*c,B=R-Le+3*c,ie=q-Ne+3*c,he=Z-1+4*c,se=M-1+4*c,ze=R-1+4*c,Ie=q-1+4*c,Fe=b&255,ht=m&255,_e=T&255,Be=y&255,et=o[Fe+o[ht+o[_e+o[Be]]]]%32,it=o[Fe+Pe+o[ht+Re+o[_e+at+o[Be+dt]]]]%32,Xe=o[Fe+le+o[ht+F+o[_e+re+o[Be+ne]]]]%32,lt=o[Fe+pe+o[ht+xe+o[_e+Le+o[Be+Ne]]]]%32,$e=o[Fe+1+o[ht+1+o[_e+1+o[Be+1]]]]%32,_t=.6-Z*Z-M*M-R*R-q*q;_t<0?u=0:(_t*=_t,u=_t*_t*this.dot4(r[et],Z,M,R,q));let z=.6-J*J-I*I-ye*ye-be*be;z<0?d=0:(z*=z,d=z*z*this.dot4(r[it],J,I,ye,be));let Ue=.6-de*de-ve*ve-Me*Me-we*we;Ue<0?f=0:(Ue*=Ue,f=Ue*Ue*this.dot4(r[Xe],de,ve,Me,we));let te=.6-P*P-w*w-B*B-ie*ie;te<0?p=0:(te*=te,p=te*te*this.dot4(r[lt],P,w,B,ie));let ue=.6-he*he-se*se-ze*ze-Ie*Ie;return ue<0?_=0:(ue*=ue,_=ue*ue*this.dot4(r[$e],he,se,ze,Ie)),27*(u+d+f+p+_)}};var Za=class s extends Ln{constructor(e,t,n,i,r,a,o){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=lm(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new pn(this.width,this.height,{type:Un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ht({defines:Object.assign({},ja.defines),uniforms:On.clone(ja.uniforms),vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Dl,this.normalMaterial.blending=sn,this.pdMaterial=new Ht({defines:Object.assign({},Ka.defines),uniforms:On.clone(Ka.uniforms),vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ht({defines:Object.assign({},Ya.defines),uniforms:On.clone(Ya.uniforms),vertexShader:Ya.vertexShader,fragmentShader:Ya.fragmentShader,blending:sn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ht({uniforms:On.clone(cs.uniforms),vertexShader:cs.vertexShader,fragmentShader:cs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Hl,blendDst:Fr,blendEquation:Zn,blendSrcAlpha:zl,blendDstAlpha:Fr,blendEquationAlpha:Zn}),this.blendMaterial=new Ht({uniforms:On.clone(ic.uniforms),vertexShader:ic.vertexShader,fragmentShader:ic.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Eu,blendSrc:Hl,blendDst:Fr,blendEquation:Zn,blendSrcAlpha:zl,blendDstAlpha:Fr,blendEquationAlpha:Zn}),this.fsQuad=new Mi(null),this.originalClearColor=new Ke,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Tr,this.depthTexture.format=ts,this.depthTexture.type=es,this.normalRenderTarget=new pn(this.width,this.height,{minFilter:nn,magFilter:nn,type:Un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Td(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new sc,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new is(i,e,e,Nn,ui);return r.wrapS=dn,r.wrapT=dn,r.needsUpdate=!0,r}};Za.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var cm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Gr=class s extends Ln{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(r,a,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new pn(r,a,{type:Un});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new pn(r,a,{type:Un});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=cm;this.highPassUniforms=On.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=cs;this.copyUniforms=On.clone(u.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ss,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ke,this.oldClearAlpha=1,this.basic=new Wt,this.fsQuad=new Mi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Gr.BlurDirectionX=new oe(1,0);Gr.BlurDirectionY=new oe(0,1);var hm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var rc=class extends Ln{constructor(){super();let e=hm;this.uniforms=On.clone(e.uniforms),this.material=new Il({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ru?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Va&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function um(s){let{characters:e,me:t,Vec3:n,Quat:i,stand:r,findPath:a,lineClear:o,pointClear:l,broadcast:c,hearts:u,focus:d,reward:f,save:p,hint:_,sameRoom:v}=s,b=()=>!1,m=null,T=!1,y=0,E=new Map,U=new Set,D=F=>{let re=Math.max(0,Math.min(1,F));return re*re*(3-2*re)},L=()=>[e.A,e.B],O=F=>[F.g.position.x,F.g.position.z],Z=(F,re)=>Math.hypot(F[0]-re[0],F[1]-re[1]),M=(F,re,ne)=>{let pe=Math.atan2(Math.sin(re-F.g.rotation.y),Math.cos(re-F.g.rotation.y));F.g.rotation.y+=pe*ne};function R(){E.forEach((F,re)=>re.quaternion.copy(F)),E.clear()}function q(F){F.token=(F.token||0)+1,F.path=[],F.sonra=null,F.hedefYer=null}function X(F=!1){var ne;y++;let re=m;m=null,T=!1,R();for(let pe of L())pe.hugLock=!1,q(pe),pe.durum="ayakta",pe.oyna("Idle");F&&re&&re.owner===t.rol&&f(),re&&(p(),(ne=re.resolve)==null||ne.call(re,F))}function K(F){E.has(F)||E.set(F,F.quaternion.clone())}function ce(F,re){let ne;return F.root.traverse(pe=>{!ne&&pe.isBone&&re.includes(pe.name.toLowerCase().replace(/[^a-z0-9]/g,""))&&(ne=pe)}),ne}let j=new Map;for(let F of L()){let re=[];for(let[pe,xe]of[["L","l"],["R","r"]]){let Le=ce(F,["upperarm"+xe]),Ne=ce(F,["lowerarm"+xe,"forearm"+xe]),J=ce(F,["wrist"+xe,"hand"+xe]);Le&&Ne&&J&&re.push({side:pe,upper:Le,lower:Ne,hand:J})}let ne=[];F.root.traverse(pe=>{pe.isBone&&/^(upperleg|lowerleg|foot|toes|thigh|shin)[lr]$/.test(pe.name.toLowerCase().replace(/[^a-z0-9]/g,""))&&ne.push({bone:pe,rest:pe.quaternion.clone()})}),j.set(F,{arms:re,legs:ne,head:ce(F,["head"])})}function fe(F,re,ne,pe){let xe=F.getWorldPosition(new n),Le=re.getWorldPosition(new n).sub(xe),Ne=ne.clone().sub(xe);if(Le.lengthSq()<1e-8||Ne.lengthSq()<1e-8)return;let J=F.getWorldQuaternion(new i),I=new i().setFromUnitVectors(Le.normalize(),Ne.normalize()),be=F.parent.getWorldQuaternion(new i).invert().multiply(I.multiply(J));K(F),F.quaternion.slerp(be,pe),F.updateWorldMatrix(!1,!0)}function ee(F,re,ne){let pe=j.get(F);if(!pe||ne<=0)return;for(let{bone:J,rest:I}of pe.legs)K(J),J.quaternion.slerp(I,ne);F.g.updateWorldMatrix(!0,!0),re.g.updateWorldMatrix(!0,!0);let xe=re.g.position.clone().sub(F.g.position);if(xe.y=0,xe.lengthSq()<1e-6)return;xe.normalize();let Le=new n(xe.z,0,-xe.x),Ne=Math.min(F.boy,re.boy);for(let J of pe.arms){let I=J.side==="L"?1:-1,ye=J.upper.getWorldPosition(new n),be=J.lower.getWorldPosition(new n),de=J.hand.getWorldPosition(new n),ve=ye.distanceTo(be),Me=be.distanceTo(de),we=re.g.position.clone().addScaledVector(xe,Ne*.065).addScaledVector(Le,I*Ne*.1);we.y=re.g.position.y+Ne*(F.rol==="A"?.64:.57);let P=we.clone().sub(ye),w=Math.min(P.length(),(ve+Me)*.97);P.normalize();let B=(ve*ve-Me*Me+w*w)/(2*Math.max(w,1e-5)),ie=Math.sqrt(Math.max(0,ve*ve-B*B)),he=Le.clone().multiplyScalar(I).add(new n(0,-.8,0));he.addScaledVector(P,-he.dot(P)).normalize();let se=ye.clone().addScaledVector(P,B).addScaledVector(he,ie);fe(J.upper,J.lower,se,ne),fe(J.lower,J.hand,we,ne)}if(pe.head){K(pe.head);let J=new i().setFromAxisAngle(new n(0,0,1),F.rol==="A"?-.065:.065);pe.head.quaternion.multiply(new i().slerp(J,ne))}}function Se(F){return F&&typeof F.id=="string"&&F.id.length<100&&["A","B"].includes(F.actor)&&Number.isFinite(F.at)&&Number.isFinite(F.travel)&&F.travel>=0&&F.travel<25&&Array.isArray(F.path)&&F.path.length>=2&&F.path.length<=256&&F.path.every(re=>Array.isArray(re)&&re.length===2&&re.every(ne=>Number.isFinite(ne)&&Math.abs(ne)<160))&&Array.isArray(F.target)&&F.target.length===2&&F.target.every(re=>Number.isFinite(re)&&Math.abs(re)<160)&&Math.abs(Date.now()-F.at)<3e4}function Pe(F,re,ne){let pe=e[F.actor],xe=e[F.actor==="A"?"B":"A"];for(let Ne of L())q(Ne),Ne.hugLock=!0,Ne.durum="sariliyor",Ne.oyna(Ne===pe&&F.travel>.05?"Walking_A":"Idle");xe.g.position.set(F.target[0],0,F.target[1]);let Le=F.path.slice(1).map((Ne,J)=>Z(Ne,F.path[J]));m={plan:F,actor:pe,partner:xe,owner:re,resolve:ne,lengths:Le,length:Le.reduce((Ne,J)=>Ne+J,0),arrived:!1,effects:!1},U.add(F.id),U.size>100&&U.delete(U.values().next().value)}async function Re(F){var pe;if(m||T)return!1;if(!b()&&!((pe=j.get(F))!=null&&pe.arms.length))return _("Karakterin kol iskeleti bulunamad\u0131."),!1;let re=F===e.A?e.B:e.A;if(v&&!v(F,re))return _("Sar\u0131lmak i\xE7in \xF6nce ayn\u0131 odaya gelin \u{1F917}"),!1;T=!0;let ne=++y;L().forEach(xe=>{q(xe),xe.hugLock=!0});try{if(await Promise.all(L().map(r)),ne!==y)return!1;let xe=O(F),Le=O(re),Ne=Math.atan2(xe[0]-Le[0],xe[1]-Le[1]),J=Math.min(F.boy,re.boy)*.25,I=null;for(let be of[0,.45,-.45,.9,-.9,Math.PI/2,-Math.PI/2,Math.PI]){let de=Ne+be,ve=[Le[0]+Math.sin(de)*J,Le[1]+Math.cos(de)*J];if(!l(...ve))continue;let Me=[xe,...a(xe,ve)];if(Z(Me[Me.length-1],ve)>.08||Me.some((P,w)=>w&&!o(Me[w-1],P)))continue;let we=Me.slice(1).reduce((P,w,B)=>P+Z(Me[B],w),0);(!I||we<I.length)&&(I={path:Me,length:we})}if(!I)return X(),_("Sar\u0131lmak i\xE7in ikinizin de yan\u0131nda biraz bo\u015F alan olsun \u{1F917}"),!1;let ye={id:Date.now()+"-"+F.rol+"-"+Math.random().toString(36).slice(2,8),actor:F.rol,at:Date.now()+180,travel:I.length/1.8,path:I.path,target:Le};return T=!1,await new Promise(be=>{Pe(ye,F.rol,be),c({t:"hug",plan:ye})})}catch{return ne===y&&X(),_("Sar\u0131lma ba\u015Flat\u0131lamad\u0131, tekrar deneyebilirsin."),!1}}async function at(F,re){if(!Se(F)||F.actor!==re||U.has(F.id)||m&&m.plan.id<F.id)return!1;(m||T)&&X(),T=!0;let ne=++y;L().forEach(pe=>{q(pe),pe.hugLock=!0});try{return await Promise.all(L().map(r)),ne!==y?!1:(T=!1,Pe(F,null),!0)}catch{return ne===y&&X(),!1}}function dt(){if(R(),!m)return;let F=m,{plan:re,actor:ne,partner:pe}=F,xe=Math.max(0,(Date.now()-re.at)/1e3),Le=Math.min(1,xe/Math.max(.001,re.travel))*F.length,Ne=0;for(;Ne<F.lengths.length-1&&Le>F.lengths[Ne];)Le-=F.lengths[Ne++];let J=re.path[Ne],I=re.path[Ne+1],ye=F.lengths[Ne]?Math.min(1,Le/F.lengths[Ne]):1;if(ne.g.position.set(J[0]+(I[0]-J[0])*ye,0,J[1]+(I[1]-J[1])*ye),xe<re.travel)M(ne,Math.atan2(I[0]-J[0],I[1]-J[1]),.2);else{F.arrived||(F.arrived=!0,b()?(ne.oyna("Hug",.3),pe.oyna("Hug",.3)):ne.oyna("Idle",.18));let be=Math.atan2(pe.g.position.x-ne.g.position.x,pe.g.position.z-ne.g.position.z);if(M(ne,be,.25),M(pe,be+Math.PI,.25),!F.effects&&xe>=re.travel+.65){F.effects=!0;let de=(ne.g.position.x+pe.g.position.x)/2,ve=(ne.g.position.z+pe.g.position.z)/2;u(de,ve,16),d(de,Math.min(ne.boy,pe.boy)*.62,ve,4.4,.8,3.2)}}xe>re.travel+4.6&&X(!0)}function le(){if(!m&&window.__hugTest){let ne=window.__hugTest.w;ee(e.A,e.B,ne),ee(e.B,e.A,ne);return}if(!m||b())return;let F=(Date.now()-m.plan.at)/1e3-m.plan.travel-.25,re=D(F/.85)*D((4.1-F)/.85);ee(m.actor,m.partner,re),ee(m.partner,m.actor,re)}return{request:Re,receive:at,beforeFrame:dt,afterFrame:le,cancel:()=>X(),get busy(){return!!m||T},get plan(){return(m==null?void 0:m.plan)||null}}}var Ce={w:9,d:7},nM=1.04,iM=1.4,sM={otur:[0,.63,-.41],yat:[-.015,.795,.174],yer:[0,.223,.175]},ks=.25,dm=(window.__leHiz||1)*1.9,rM=.25,aM=()=>{var e;let s=(e=window.__leSaat)!=null?e:pm();return s>=21||s<6},pm=()=>{try{return+new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Istanbul",hour:"2-digit",hourCycle:"h23"}).format(new Date)}catch{return new Date().getHours()}},qt=s=>document.querySelector(s);function Ae(s,e,...t){let n=document.createElement(s);for(let i in e||{})i==="class"?n.className=e[i]:i.startsWith("on")?n[i]=e[i]:n.setAttribute(i,e[i]);return t.flat().forEach(i=>i!=null&&i!==!1&&n.append(i)),n}function yn(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"),s,e);let i=new Sl(n);return i.colorSpace=Zt,i.anisotropy=4,i}var oM=(s,e,t)=>{let n=(e-s+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),s+n*t};function lM(s){return yn(512,512,(e,t,n)=>{e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255,255,255,.35)";for(let i=0;i<t;i+=64)for(let r=0;r<n;r+=64){let a=r/64%2?32:0;e.save(),e.translate(i+a+32,r+32),e.beginPath(),e.moveTo(0,-9),e.bezierCurveTo(7,-9,8,0,0,7),e.bezierCurveTo(-8,0,-7,-9,0,-9),e.fill(),e.restore()}})}function fm(s){return yn(512,384,(e,t,n)=>{let i=s>=21||s<6,r=s>=17&&s<21,a=s>=6&&s<9,o=e.createLinearGradient(0,0,0,n);if(i?(o.addColorStop(0,"#120a24"),o.addColorStop(1,"#3a1d3f")):r?(o.addColorStop(0,"#6b4fa0"),o.addColorStop(.55,"#f08a6c"),o.addColorStop(1,"#ffd29a")):a?(o.addColorStop(0,"#a7d3f2"),o.addColorStop(1,"#ffe2c9")):(o.addColorStop(0,"#8fc8f0"),o.addColorStop(1,"#e8f4ff")),e.fillStyle=o,e.fillRect(0,0,t,n),i){for(let l=0;l<70;l++)e.fillStyle=`rgba(255,240,220,${.4+Math.random()*.6})`,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.7,Math.random()*1.6+.4,0,7),e.fill();e.fillStyle="#fff4d6",e.beginPath(),e.arc(t*.75,n*.25,22,0,7),e.fill()}else e.fillStyle=r?"rgba(255,220,170,.9)":"rgba(255,250,220,.95)",e.beginPath(),e.arc(t*.72,r?n*.7:n*.28,r?34:26,0,7),e.fill(),e.fillStyle="rgba(255,255,255,.75)",[[.2,.3],[.45,.2],[.3,.45]].forEach(([l,c])=>{e.beginPath(),e.ellipse(t*l,n*c,46,14,0,0,7),e.fill()});e.fillStyle=i?"#1d1838":r?"#7a5a8c":"#5b9cc4",e.fillRect(0,n*.74,t,n*.26),e.fillStyle=i?"rgba(255,230,180,.35)":"rgba(255,255,255,.35)";for(let l=0;l<18;l++)e.fillRect(Math.random()*t,n*(.76+Math.random()*.2),18+Math.random()*30,2);e.fillStyle=i?"#120d22":r?"#4b3560":"#7d9db3",e.beginPath(),e.moveTo(0,n*.74);for(let l=0;l<=t;l+=32)e.lineTo(l,n*(.7+Math.sin(l*.03)*.02));e.lineTo(t,n*.74),e.fill()})}function Ad(){let s=new ut,e=new ae(new vi([[0,0],[.14,0],[.17,.08],[.13,.26],[.09,.34],[.11,.38]].map(i=>new oe(i[0],i[1])),24),new Ye({color:"#f4f1ec",roughness:.25}));e.castShadow=!0,s.add(e);let t=["#C9233F","#E8577A","#C9233F","#F7A8BE","#E8577A"],n=new Ye({color:"#4E8B57",roughness:.8});return t.forEach((i,r)=>{let a=r/t.length*Math.PI*2,o=.05,l=.25+Math.random()*.15,c=.45+Math.random()*.12,u=new Dr(new k(0,.3,0),new k(Math.cos(a)*o,.3+c*.6,Math.sin(a)*o),new k(Math.cos(a)*l*.5,.3+c,Math.sin(a)*l*.5));s.add(new ae(new Ba(u,8,.012,5),n));let d=new ae(new vi([[0,-.02],[.05,0],[.075,.06],[.07,.12],[.045,.16],[.05,.17]].map(f=>new oe(f[0],f[1])),16),new Ye({color:i,roughness:.45,side:un}));d.position.copy(u.getPoint(1)),d.castShadow=!0,s.add(d)}),s}function cM(){let s=new ut,e=new ae(new ct(.62,.14,.48),new Ye({color:"#8a5a3c",roughness:.5}));e.position.y=.07,e.castShadow=!0,s.add(e);let t=new ae(new Bt(.19,.19,.015,32),new Ye({color:"#1b1214",roughness:.25}));t.position.set(-.06,.15,0),s.add(t);let n=new ae(new Bt(.06,.06,.017,24),new Ye({color:"#C9233F"}));n.position.copy(t.position),s.add(n);let i=new ae(new ct(.03,.03,.3),new Ye({color:"#d9d2c8",metalness:.6,roughness:.3}));return i.position.set(.22,.17,-.02),i.rotation.y=.3,s.add(i),s.userData.plak=[t,n],s}function hM(s){let e=new ut,t=new ae(new ct(.34,.26,.34),new Ye({color:s,roughness:.45}));t.position.y=.13,t.castShadow=!0,e.add(t);let n=new Ye({color:"#fff4d6",roughness:.4}),i=new ae(new ct(.36,.27,.06),n);i.position.y=.13,e.add(i);let r=new ae(new ct(.06,.27,.36),n);r.position.y=.13,e.add(r);let a=new ut;a.position.y=.26,e.add(a);let o=new ae(new ct(.38,.06,.38),new Ye({color:s,roughness:.45}));return o.position.y=.03,o.castShadow=!0,a.add(o),[-1,1].forEach(l=>{let c=new ae(new Lr(.06,.02,8,16),n);c.position.set(l*.05,.1,0),c.rotation.y=Math.PI/2,c.rotation.x=l*.6,a.add(c)}),e.userData.kapak=a,e}function uM(){let s=new ut,e=new Ye({color:"#d9a441",metalness:.85,roughness:.28}),t=new ae(new vi([[0,0],[.12,0],[.13,.03],[.1,.06],[.16,.14],[.17,.3],[.12,.42],[.07,.44],[.07,.48],[0,.48]].map(o=>new oe(o[0],o[1])),24),e);t.castShadow=!0,s.add(t);let n=new ae(new vi([[0,0],[.07,0],[.1,.05],[.09,.12],[.05,.15],[.05,.17],[0,.17]].map(o=>new oe(o[0],o[1])),18),new Ye({color:"#fbf6ef",roughness:.3}));n.position.y=.48,n.castShadow=!0,s.add(n),[[-1,0],[1,0]].forEach(([o])=>{let l=new ae(new Lr(.05,.012,6,12,Math.PI),e);l.position.set(o*.17,.3,0),l.rotation.z=o*Math.PI/2,s.add(l)});let i=new ae(new Bt(.012,.012,.1,6),e);i.rotation.x=Math.PI/2,i.position.set(0,.12,.17),s.add(i);let r=new ae(new Bt(.32,.3,.62,20),new Ye({color:"#8a5a3c",roughness:.6}));r.position.y=.31,r.castShadow=!0;let a=new ut;return a.add(r),s.position.y=.62,a.add(s),a.userData.buhar=new k(0,1.3,0),a}function dM(){let s=new ut,e=new ae(new vi([[0,0],[.035,0],[.032,.03],[.024,.06],[.032,.1],[.036,.11]].map(i=>new oe(i[0],i[1])),16),new Ye({color:"#ffffff",transparent:!0,opacity:.35,roughness:.05})),t=new ae(new vi([[0,.005],[.032,.005],[.029,.03],[.022,.06],[.029,.092],[0,.092]].map(i=>new oe(i[0],i[1])),16),new Ye({color:"#a8321a",transparent:!0,opacity:.85,roughness:.2})),n=new ae(new Bt(.06,.055,.01,18),new Ye({color:"#C9233F",roughness:.4}));return s.add(n,t,e),s}function fM(){let s=new ut,e=new Ye({color:"#34131F",roughness:.4,metalness:.3}),t=new Ye({color:"#d9a441",metalness:.8,roughness:.3});[0,2.09,4.19].forEach(r=>{let a=new ae(new Bt(.02,.025,1.05,6),e);a.position.set(Math.sin(r)*.22,.5,Math.cos(r)*.22),a.rotation.set(Math.cos(r)*.22,0,-Math.sin(r)*.22),a.castShadow=!0,s.add(a)});let n=new ae(new Bt(.07,.055,.9,16),t);n.position.set(0,1.15,.1),n.rotation.x=-1.05,n.castShadow=!0,s.add(n);let i=new ae(new Bt(.08,.08,.08,16),e);return i.position.set(0,1.42,.48),i.rotation.x=-1.05,s.add(i),s}function pM(){let s=new ut,e=new ae(new Bt(.2,.15,.32,18),new Ye({color:"#c9714a",roughness:.8}));e.position.y=.16,e.castShadow=!0,s.add(e);let t=Ad();return t.children[0].visible=!1,t.position.y=.06,t.scale.setScalar(1.3),s.add(t),s}function mM(s){let e=new ut,t=new ae(new Bt(.035,.045,1.1,8),new Ye({color:"#3a2a2e",roughness:.5}));t.position.y=.55,t.castShadow=!0,e.add(t);let n=new ae(new di(.11,16,12),new Ye({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:s?2.2:.15}));if(n.position.y=1.16,e.add(n),s){let i=new ei("#ffcf7a",2.2,4,1.8);i.position.y=1.15,e.add(i)}return e}function gM(s){return yn(2048,640,(e,t,n)=>{let i=s>=21||s<6,r=s>=17&&s<21,a=e.createLinearGradient(0,0,0,n);if(i?(a.addColorStop(0,"#0d0820"),a.addColorStop(.7,"#2c1838"),a.addColorStop(1,"#3a1d3f")):r?(a.addColorStop(0,"#5b4096"),a.addColorStop(.55,"#f08a6c"),a.addColorStop(1,"#ffd29a")):(a.addColorStop(0,"#7fbde9"),a.addColorStop(1,"#e6f3ff")),e.fillStyle=a,e.fillRect(0,0,t,n),i){for(let f=0;f<260;f++)e.fillStyle=`rgba(255,240,220,${.3+Math.random()*.7})`,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.55,Math.random()*1.8+.3,0,7),e.fill();e.fillStyle="#fff4d6",e.beginPath(),e.arc(t*.8,n*.18,30,0,7),e.fill()}else e.fillStyle=r?"rgba(255,214,160,.95)":"rgba(255,252,230,.95)",e.beginPath(),e.arc(t*.3,r?n*.62:n*.2,r?52:36,0,7),e.fill();let o=n*.78;e.fillStyle=i?"#16122b":r?"#7a5a8c":"#4f93bd",e.fillRect(0,o,t,n-o);let l=i?"#1a1128":r?"#3b2850":"#6f8ea6";e.fillStyle=l;let c=o-2;e.beginPath(),e.moveTo(0,c);for(let f=0;f<=t;f+=12)e.lineTo(f,c-18-Math.sin(f*.011)*10-Math.sin(f*.037)*6);e.lineTo(t,o),e.lineTo(0,o),e.fill();let u=(f,p,_)=>{e.beginPath(),e.arc(f,c-30,p,Math.PI,0),e.fill(),e.fillRect(f-p,c-30,p*2,30);for(let v of[-1,1])for(let b=0;b<_;b++){let m=f+v*(p+14+b*22);e.fillRect(m-3,c-30-p*1.9,6,p*1.9+30),e.beginPath(),e.moveTo(m-5,c-30-p*1.9),e.lineTo(m,c-30-p*2.3),e.lineTo(m+5,c-30-p*1.9),e.fill()}[-.55,.55].forEach(v=>{e.beginPath(),e.arc(f+v*p*1.3,c-22,p*.45,Math.PI,0),e.fill()})};u(t*.2,46,2),u(t*.44,34,1),u(t*.86,40,2);let d=t*.64;if(e.fillRect(d-16,c-150,32,150),e.beginPath(),e.moveTo(d-22,c-150),e.lineTo(d,c-210),e.lineTo(d+22,c-150),e.fill(),e.fillRect(d-22,c-156,44,10),e.strokeStyle=l,e.lineWidth=5,e.beginPath(),e.moveTo(t*.02,o-8),e.quadraticCurveTo(t*.12,o-60,t*.24,o-8),e.stroke(),i||r){for(let f=0;f<160;f++)e.fillStyle=`rgba(255,${200+Math.random()*40},140,${.5+Math.random()*.5})`,e.fillRect(Math.random()*t,c-8-Math.random()*40,2.4,2.4);for(let f=0;f<60;f++)e.fillStyle="rgba(255,214,150,.35)",e.fillRect(Math.random()*t,o+6+Math.random()*(n-o-10),10+Math.random()*30,2)}else{e.fillStyle="rgba(255,255,255,.4)";for(let f=0;f<30;f++)e.fillRect(Math.random()*t,o+6+Math.random()*(n-o-10),14+Math.random()*30,2)}e.fillStyle=i?"#2a1d3a":"#fffaf6",e.beginPath(),e.moveTo(t*.53,o+26),e.lineTo(t*.6,o+26),e.lineTo(t*.595,o+36),e.lineTo(t*.535,o+36),e.fill(),e.fillRect(t*.555,o+14,18,12)})}async function mm(s){var nf,sf;let e=s.el,t=(s.me||"misafir").toLowerCase(),n=s.names||{},i=s.sb||null,r=h=>(n[h]||"").toLocaleLowerCase("tr")==="beyza"?"B":n[h]?"A":null,a=r(t)||"A",o={A:"Ahmet",B:"Beyza"},l=new pl({antialias:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(2,devicePixelRatio||1)),l.shadowMap.enabled=!0,l.shadowMap.type=oi,l.outputColorSpace=Zt,l.toneMapping=Va,l.toneMappingExposure=aM()?1:.92,e.append(l.domElement);let c=new Ar,u=(nf=window.__leSaat)!=null?nf:pm(),d=u>=21||u<6,f=u>=17&&u<21;c.background=new Ke(d?"#2a1420":"#FDF1F3"),document.body.classList.toggle("le-gece",d),document.body.style.background=d?"#2a1420":"#FDF1F3",c.fog=new ml(c.background,24,44);let p=new tn(32,1,.1,100);p.position.set(11.5,12.5,15.5);let _=new Jl(p,l.domElement);_.target.set(0,.6,1.6),_.enablePan=!1,_.enableDamping=!0,_.dampingFactor=.08,_.minDistance=4,_.maxDistance=26,_.minPolarAngle=.55,_.maxPolarAngle=1.2,_.minAzimuthAngle=-.15,_.maxAzimuthAngle=1.55,_.rotateSpeed=.6;let v=new wr(l);c.environment=v.fromScene(new $l,.04).texture,c.environmentIntensity=d?.2:f?.3:.35;let b=new Nl(d?"#8d7bb8":"#fff4f0",d?"#3a2030":"#e9c9b8",d?.6:.45);c.add(b);let m=new Ps(d?"#9db0ff":f?"#ffb27a":"#fff1de",d?.35:f?1.5:1.75);{let h=Math.max(6,Math.min(20,u)),g=(h-6)/14;m.position.set(-7+g*12,d?9:4+Math.sin(g*Math.PI)*7,-7)}m.target.position.set(0,0,1.6),c.add(m.target),m.castShadow=!0,m.shadow.mapSize.set(2048,2048),m.shadow.bias=-4e-4,m.shadow.normalBias=.03,m.shadow.radius=5,m.shadow.blurSamples=12,Object.assign(m.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:40}),c.add(m);let T=new Ps("#ffe6ee",d?.2:.5);T.position.set(8,6,6),c.add(T);let y=new ei("#ffc98a",0,7,1.6);y.castShadow=!0,y.shadow.mapSize.set(512,512),c.add(y);let E=new Cs;function U(h,g=1,x=1,S=0){let A=E.load(s.base+"doku/"+h+".webp?v=1");return A.colorSpace=Zt,A.wrapS=A.wrapT=dn,A.anisotropy=8,A.repeat.set(g,x),A.channel=S,A}let D={ahsap:{tile:.9,mat:()=>({map:U("ahsap",1,1,1),roughness:.55})},kumas:{tile:.45,mat:()=>({map:U("kumas",1,1,1),roughness:.95})},yastik:{tile:.5,mat:()=>({map:U("hali",1,1,1),roughness:.95})},hali:{tile:1.6,mat:()=>({map:U("hali",1,1,1),roughness:1})},mermer:{tile:1.2,mat:()=>({map:U("mermer",1,1,1),roughness:.22})},beyaz:{tile:1,mat:()=>({color:"#f3f1ec",roughness:.35})},inoks:{tile:1,mat:()=>({color:"#e4e6e6",metalness:.45,roughness:.3})},pirinc:{tile:1,mat:()=>({color:"#c8a46a",metalness:.8,roughness:.35})}},L={},O=h=>L[h]||(L[h]=new Ye(Object.assign({metalness:0},D[h].mat()))),Z=/^(couch|couch_pillows|armchair|armchair_pillows|chair_A|chair_B|chair_C|chair_stool)$/;function M(h){if(/^rug_/.test(h))return()=>"hali";if(/^m_kitchen(counter|cabinet)/.test(h))return(x,S)=>S>=13?x===13?"mermer":x===12?"pirinc":x===10||x>=14?"beyaz":null:null;if(/^m_fridge/.test(h))return(x,S)=>(x===4||x===5)&&S>=4&&S<=6?"inoks":null;if(/^m_(table_round|chair)/.test(h))return(x,S)=>x>=12&&x<=13&&(S<=3||S>=12&&S<=14)?"ahsap":null;if(h.startsWith("m_"))return null;let g=Z.test(h);return(x,S,A)=>S<=3&&x<=9?"ahsap":S<=3&&(x===10||x===11)?"beyaz":g&&S>=4&&S<=7&&x<=7?(x<=3?"O":"B")===A?"kumas":"yastik":null}function R(h){let g=M(h.name);if(!g)return;h.updateMatrixWorld(!0);let x=new Qe().copy(h.matrixWorld).invert();h.traverse(S=>{if(!S.isMesh||S.userData.dokulu||Array.isArray(S.material))return;S.userData.dokulu=!0;let A=S.geometry,N=A.attributes.uv,G=A.attributes.position,W=A.attributes.normal;if(!N||!W)return;let me=A.index?Array.from(A.index.array):[...Array(G.count).keys()],Ee=me.length,We=It=>[Math.floor(N.getX(It)*16),Math.floor(N.getY(It)*16)],Je=0,Mt=0;for(let It=0;It<Ee;It+=3){let[Yn,Cn]=We(me[It]);Cn>=4&&Cn<=7&&Yn<=7&&(Yn<=3?Je++:Mt++)}let jt=Je>=Mt?"O":"B",ke=[];for(let It=0;It<Ee;It+=3){let[Yn,Cn]=We(me[It]);ke.push(g(Yn,Cn,jt))}let tt=[...new Set(ke.filter(Boolean))];if(!tt.length)return;let rt=new Qe().multiplyMatrices(x,S.matrixWorld),nt=new pt().getNormalMatrix(rt),At=new Float32Array(G.count*2),Ft=new k,Ct=new k,en=new Array(G.count);for(let It=0;It<Ee;It+=3){let Yn=ke[It/3];if(Yn)for(let Cn=0;Cn<3;Cn++)en[me[It+Cn]]=Yn}for(let It=0;It<G.count;It++){if(!en[It])continue;let Yn=D[en[It]].tile;Ft.fromBufferAttribute(G,It).applyMatrix4(rt),Ct.fromBufferAttribute(W,It).applyMatrix3(nt);let Cn=Math.abs(Ct.x),Ai=Math.abs(Ct.y),rf=Math.abs(Ct.z),go,bo;Ai>=Cn&&Ai>=rf?(go=Ft.x,bo=Ft.z):Cn>=rf?(go=Ft.z,bo=Ft.y):(go=Ft.x,bo=Ft.y),At[It*2]=go/Yn,At[It*2+1]=bo/Yn}let _n=A.clone();_n.setAttribute("uv1",new Kt(At,2));let ii=[null,...tt],Bn=[];_n.clearGroups(),ii.forEach((It,Yn)=>{let Cn=Bn.length;for(let Ai=0;Ai<Ee;Ai+=3)ke[Ai/3]===It&&Bn.push(me[Ai],me[Ai+1],me[Ai+2]);Bn.length>Cn&&_n.addGroup(Cn,Bn.length-Cn,Yn)}),_n.setIndex(Bn),S.geometry=_n,S.material=[S.material,...tt.map(O)]})}let q=U("parke",Ce.w/1.8,Ce.d/1.8),X=new ae(new ct(Ce.w,.2,Ce.d),new Ye({map:q,roughness:.5,metalness:0}));X.position.y=-.1,X.receiveShadow=!0,X.name="zemin",c.add(X);let K=new Ye({roughness:.9}),ce=3.2,j=new ae(new ct(Ce.w+.3,ce,.3),K.clone());j.material.map=U("duvar",(Ce.w+.3)/2.2,ce/2.2),j.position.set(0,ce/2-.2,-Ce.d/2-.15),j.receiveShadow=!0,c.add(j);let fe=new ae(new ct(.3,ce,Ce.d),K.clone());fe.material.map=U("duvar",Ce.d/2.2,ce/2.2),fe.position.set(-Ce.w/2-.15,ce/2-.2,0),fe.receiveShadow=!0,c.add(fe);let ee=new Ye({color:"#fffaf6",roughness:.6}),Se=new ae(new ct(Ce.w,.16,.06),ee);Se.position.set(0,.08,-Ce.d/2+.03),c.add(Se);let Pe=new ae(new ct(.06,.16,Ce.d),ee);Pe.position.set(-Ce.w/2+.03,.08,0),c.add(Pe);{let h=new ae(new ct(Ce.w+.3,.12,.14),ee);h.position.set(0,ce-.26,-Ce.d/2+.02),c.add(h);let g=new ae(new ct(.14,.12,Ce.d),ee);g.position.set(-Ce.w/2+.02,ce-.26,0),c.add(g)}let Re=new ut;Re.position.set(1.2,1.55,-Ce.d/2+.02),c.add(Re);let at=new ae(new xn(2.2,1.5),new Wt({map:fm(u)}));Re.add(at);let dt=new Ye({color:"#ffffff",roughness:.5});[[0,.78,2.4,.1],[0,-.78,2.5,.14],[-1.15,0,.1,1.66],[1.15,0,.1,1.66],[0,0,.06,1.5],[0,0,2.2,.06]].forEach(([h,g,x,S])=>{let A=new ae(new ct(x,S,.1),dt);A.position.set(h,g,.03),A.castShadow=!0,Re.add(A)});let le=[],F=new Ye({color:"#e6dccd",roughness:.95,side:un});[-1.45,1.45].forEach(h=>{let g=new ae(new Bt(.16,.22,2.1,10,1,!0,0,Math.PI),F);g.position.set(h,-.15,.12),g.rotation.y=Math.PI,g.castShadow=!0,le.push(g),Re.add(g)});let re=new ae(new ct(.08,2.2,1.1),new Ye({color:"#9b6a4a",roughness:.6}));re.position.set(-Ce.w/2+.05,1.1,2.2),c.add(re);let ne=new ae(new di(.05,12,12),new Ye({color:"#e6c36a",metalness:.8,roughness:.3}));ne.position.set(-Ce.w/2+.12,1.05,1.8),c.add(ne);let pe=yn(64,256,(h,g,x)=>{let S=h.createLinearGradient(0,0,0,x);S.addColorStop(0,"rgba(255,236,200,.9)"),S.addColorStop(1,"rgba(255,236,200,0)"),h.fillStyle=S,h.fillRect(0,0,g,x)}),xe=new ae(new xn(2.1,3.4),new Wt({map:pe,transparent:!0,opacity:d?.05:f?.2:.13,blending:Ss,depthWrite:!1,side:un,color:f?"#ffb27a":d?"#9db0ff":"#fff1de"}));xe.position.set(1.2,1,-Ce.d/2+1.3),xe.rotation.x=-.75,c.add(xe);let Le=70,Ne=new Xt,J=new Float32Array(Le*3);for(let h=0;h<Le;h++)J[h*3]=.2+Math.random()*2,J[h*3+1]=.3+Math.random()*2.2,J[h*3+2]=-Ce.d/2+.3+Math.random()*2.2;Ne.setAttribute("position",new Kt(J,3)),c.add(new Ir(Ne,new As({color:d?"#c9d4ff":"#fff3dc",size:.035,transparent:!0,opacity:d?.35:.7,depthWrite:!1,blending:Ss})));let I=new Yl;I.setMeshoptDecoder(om);let ye={"ahmet3.glb?v=1":"ahmet.glb?v=2","beyza3.glb?v=1":"beyza.glb?v=2"},[be,de,ve]=await Promise.all(["mobilya.glb?v=3","ahmet3.glb?v=1","beyza3.glb?v=1"].map(h=>I.loadAsync(s.base+h).catch(g=>ye[h]?I.loadAsync(s.base+ye[h]):Promise.reject(g)))),Me={};be.scene.children.slice().forEach(h=>{Me[h.name]=h,R(h)});let we=Ce.d/2,P=Ce.d/2+3.6,w=[{id:"salon",ad:"Salon",em:"\u{1F6CB}\uFE0F",ox:0,fiyat:0},{id:"yatak",ad:"Yatak odas\u0131",em:"\u{1F6CF}\uFE0F",ox:40,fiyat:150,duvar:"#E6DDF6",yer:"yatak odas\u0131nda"},{id:"mutfak",ad:"Mutfak",em:"\u{1F373}",ox:80,fiyat:200,duvar:"#FFF0D9",yer:"mutfakta"},{id:"teras",ad:"Teras",em:"\u{1F319}",ox:120,fiyat:250,yer:"terasta"}];w[0].yer="salonda";let B=h=>w.find(g=>Math.abs(h-g.ox)<20)||w[0],ie={x0:-Ce.w/2,x1:120+Ce.w/2,z0:-Ce.d/2,z1:P},he=new Set,se=(h,g=0)=>({act:"otur",yerler:h,yon:g}),ze={neon_isim:["\u{1F497}","Neon isim tabelas\u0131",60,"Bizim",{asili:!0,zemin:!0,kucuk:!0}],kanvas_foto:["\u{1F5BC}\uFE0F","B\xFCy\xFCk kanvas foto\u011Fraf\u0131m\u0131z",45,"Bizim",{act:"foto",asili:!0,zemin:!0,kucuk:!0}],polaroid_ip:["\u{1F4F8}","Polaroid ipi (5 foto\u011Fraf)",40,"Bizim",{act:"foto",asili:!0,zemin:!0,kucuk:!0}],tarih_cerceve:["\u{1F4C5}","26 Ocak \xE7er\xE7evesi",25,"Bizim",{asili:!0,zemin:!0,kucuk:!0}],harita_cerceve:["\u{1F5FA}\uFE0F","Bizim \u0130stanbul haritas\u0131",30,"Bizim",{asili:!0,zemin:!0,kucuk:!0}],plak_duvar:["\u{1F4BF}","Bizim \u015Fark\u0131m\u0131z pla\u011F\u0131",25,"Bizim",{act:"muzik",asili:!0,zemin:!0,kucuk:!0}],harf_yastik:["\u{1F171}\uFE0F","B & A minderleri",30,"Bizim",{act:"yer",yerler:[[-.45,0],[.45,0]],yon:0}],kupa_sehpa:["\u2615","\u0130simli kupalar",30,"Bizim",{}],paspas:["\u{1F6AA}",'"Bizim Ev" paspas\u0131',15,"Bizim",{zemin:!0}],mum_set:["\u{1F56F}\uFE0F","Mum tepsisi",20,"Bizim",{kucuk:!0}],balon_kalp:["\u{1F388}","Kalp balonlar",20,"Bizim",{kucuk:!0,zemin:!0}],lale_buket:["\u{1F490}","B\xFCy\xFCk lale buketi",35,"Bizim",{kucuk:!0}],couch_pillows:["\u{1F6CB}\uFE0F","Yast\u0131kl\u0131 koltuk",120,"Oturma",se([[-.55,.2],[.55,.2]])],couch:["\u{1F6CB}\uFE0F","Sade koltuk",90,"Oturma",se([[-.55,.2],[.55,.2]])],armchair_pillows:["\u{1F4BA}","Yast\u0131kl\u0131 berjer",60,"Oturma",se([[0,.2]])],armchair:["\u{1F4BA}","Berjer",45,"Oturma",se([[0,.2]])],chair_A_wood:["\u{1FA91}","Ah\u015Fap sandalye",20,"Oturma",se([[0,-.05]],Math.PI)],chair_A:["\u{1FA91}","Sandalye",20,"Oturma",se([[0,-.05]],Math.PI)],chair_B_wood:["\u{1FA91}","Oval ah\u015Fap sandalye",25,"Oturma",se([[0,-.05]],Math.PI)],chair_B:["\u{1FA91}","Oval sandalye",25,"Oturma",se([[0,-.05]],Math.PI)],chair_C:["\u{1FA91}","Modern sandalye",30,"Oturma",se([[0,-.05]],Math.PI)],chair_stool_wood:["\u{1FAB5}","Ah\u015Fap tabure",12,"Oturma",se([[0,0]])],chair_stool:["\u{1FAB5}","Tabure",12,"Oturma",se([[0,0]])],pillow_A:["\u{1F7EA}","Yer minderi",10,"Oturma",{act:"yer",yerler:[[0,0]],yon:0}],pillow_B:["\u{1F7E6}","Yer minderi (mavi)",10,"Oturma",{act:"yer",yerler:[[0,0]],yon:0}],bed_double_A:["\u{1F6CF}\uFE0F","\xC7ift ki\u015Filik yatak",150,"Yatak",{act:"yat",yerler:[[-.45,-.15],[.45,-.15]],yon:0}],bed_double_B:["\u{1F6CF}\uFE0F","\xC7ift ki\u015Filik yatak (B)",150,"Yatak",{act:"yat",yerler:[[-.45,-.15],[.45,-.15]],yon:0}],bed_single_A:["\u{1F6CF}\uFE0F","Tek ki\u015Filik yatak",80,"Yatak",{act:"yat",yerler:[[0,-.15]],yon:0}],bed_single_B:["\u{1F6CF}\uFE0F","Tek ki\u015Filik yatak (B)",80,"Yatak",{act:"yat",yerler:[[0,-.15]],yon:0}],sehpa_lale:["\u{1F337}","Laleli sehpa",40,"Masa",{}],table_low:["\u{1F7EB}","Sehpa",30,"Masa",{}],table_small:["\u{1F7EB}","K\xFC\xE7\xFCk masa",25,"Masa",{}],table_medium:["\u{1F37D}\uFE0F","Yemek masas\u0131",50,"Masa",{}],table_medium_long:["\u{1F37D}\uFE0F","Uzun masa",70,"Masa",{}],shelf_B_large_decorated:["\u{1F4DA}","Dolu kitapl\u0131k",90,"Depolama",{}],shelf_B_small_decorated:["\u{1F4DA}","K\xFC\xE7\xFCk kitapl\u0131k",45,"Depolama",{}],shelf_A_big:["\u{1F5C4}\uFE0F","B\xFCy\xFCk raf",60,"Depolama",{}],shelf_A_small:["\u{1F5C4}\uFE0F","K\xFC\xE7\xFCk raf",30,"Depolama",{}],cabinet_medium_decorated:["\u{1F5C3}\uFE0F","Dolap",60,"Depolama",{}],cabinet_small_decorated:["\u{1F5C3}\uFE0F","Komodin",35,"Depolama",{}],lamp_standing:["\u{1F4A1}","Lambader",35,"S\xFCs",{act:"lamba"}],pikap:["\u{1F3B5}","Pikap",50,"S\xFCs",{act:"muzik"}],pictureframe_standing_A:["\u{1F5BC}\uFE0F","Ayakl\u0131 \xE7er\xE7eve",15,"S\xFCs",{act:"foto"}],pictureframe_standing_B:["\u{1F5BC}\uFE0F","Ayakl\u0131 \xE7er\xE7eve (B)",15,"S\xFCs",{act:"foto"}],book_set:["\u{1F4D6}","Kitap y\u0131\u011F\u0131n\u0131",8,"S\xFCs",{}],cactus_medium_A:["\u{1F335}","Kakt\xFCs",15,"Bitki",{}],cactus_medium_B:["\u{1F335}","Kakt\xFCs (B)",15,"Bitki",{}],cactus_small_A:["\u{1F335}","Minik kakt\xFCs",10,"Bitki",{}],cactus_small_B:["\u{1F335}","Minik kakt\xFCs (B)",10,"Bitki",{}],rug_rectangle_stripes_A:["\u{1F7E5}","\xC7izgili hal\u0131",40,"Hal\u0131",{zemin:!0}],rug_rectangle_stripes_B:["\u{1F7E5}","\xC7izgili hal\u0131 (B)",40,"Hal\u0131",{zemin:!0}],rug_rectangle_A:["\u{1F7E7}","Hal\u0131",35,"Hal\u0131",{zemin:!0}],rug_rectangle_B:["\u{1F7E7}","Hal\u0131 (B)",35,"Hal\u0131",{zemin:!0}],rug_oval_A:["\u{1F7E3}","Oval hal\u0131",35,"Hal\u0131",{zemin:!0}],rug_oval_B:["\u{1F7E3}","Oval hal\u0131 (B)",35,"Hal\u0131",{zemin:!0}],m_fridge_A_decorated:["\u{1F9CA}","Buzdolab\u0131",80,"Mutfak",{act:"buzdolabi",s:.8}],m_fridge_B:["\u{1F9CA}","Sade buzdolab\u0131",70,"Mutfak",{act:"buzdolabi",s:.8}],ocak:["\u{1F525}","Ocak",70,"Mutfak",{act:"pisir"}],m_kitchencounter_sink_backsplash:["\u{1F6B0}","Eviye",50,"Mutfak",{s:.8}],m_kitchencounter_straight_A_decorated:["\u{1F9C2}","Dolu tezg\xE2h",45,"Mutfak",{s:.8}],m_kitchencounter_straight_B_backsplash:["\u{1F7EB}","Tezg\xE2h",35,"Mutfak",{s:.8}],m_kitchencounter_straight_A_backsplash:["\u{1F7EB}","Tezg\xE2h (A)",35,"Mutfak",{s:.8}],m_kitchencabinet:["\u{1F5C4}\uFE0F","\xDCst dolap",30,"Mutfak",{s:.8,duvar:!0,zemin:!0}],semaver:["\u{1FAD6}","Semaver",30,"Mutfak",{act:"cay"}],m_table_round_A_small:["\u{1F37D}\uFE0F","Yuvarlak masa",45,"Mutfak",{s:.9,masa:!0}],m_dishrack_plates:["\u{1F37D}\uFE0F","Tabakl\u0131k",15,"Mutfak",{s:.6}],m_crate_tomatoes:["\u{1F345}","Domates kasas\u0131",12,"Mutfak",{s:.4}],m_crate_onions:["\u{1F9C5}","So\u011Fan kasas\u0131",12,"Mutfak",{s:.4}],teleskop:["\u{1F52D}","Teleskop",60,"Teras",{act:"yildiz"}],saksi_lale:["\u{1F337}","Saks\u0131da lale",20,"Bitki",{}],fener_ayak:["\u{1F3EE}","Ayakl\u0131 fener",25,"Teras",{}]},Ie={yatak:[["bed_double_B",0,-1.9,0],["cabinet_small_decorated",-2.05,-2.9,0],["cabinet_small_decorated",2.05,-2.9,0],["lamp_standing",3.4,-2.9,0],["rug_oval_B",0,.6,0],["armchair_pillows",3.3,.9,-Math.PI/2],["shelf_B_small_decorated",-4.15,-.6,Math.PI/2],["pillow_A",-2.4,1.6,0],["pillow_B",-1.6,2.1,0],["cactus_medium_B",4,2.9,0],["saksi_lale",-3.9,2.9,0],["pictureframe_standing_B",3.9,-1.6,-Math.PI/2]],mutfak:[["m_fridge_A_decorated",-3.55,-2.7,0],["m_kitchencounter_sink_backsplash",-1.95,-2.75,0],["m_kitchencounter_straight_A_decorated",-.35,-2.75,0],["ocak",1.25,-2.75,0],["m_kitchencounter_straight_B_backsplash",2.85,-2.75,0],["m_kitchencabinet",-1.95,-3.5,0],["m_kitchencabinet",-.35,-3.5,0],["m_kitchencabinet",2.85,-3.5,0],["semaver",3.85,-1.2,-Math.PI/2],["m_table_round_A_small",.6,.9,0],["chair_A_wood",.6,1.75,0],["chair_A_wood",.6,.05,Math.PI],["rug_rectangle_B",.6,.9,0],["m_crate_tomatoes",-3.9,1.6,0],["m_crate_onions",-3.9,2.6,0],["cactus_small_A",3.95,2.9,0]],teras:[["rug_rectangle_stripes_B",0,.3,0],["m_table_round_A_small",0,.2,0],["chair_B_wood",0,1.05,0],["chair_B_wood",0,-.65,Math.PI],["teleskop",3,-2.2,-.6],["saksi_lale",-3.6,-2.8,0],["saksi_lale",-2.6,-2.95,0],["cactus_medium_A",3.9,2.8,0],["fener_ayak",-3.8,2.6,0],["fener_ayak",3.9,-.2,0],["pillow_A",-2,1.8,0],["pillow_B",-1.2,2.3,0]]},Fe=()=>({v:1,harcanan:0,toplanan:0,depo:[],hediyeler:[],bahce:Array.from({length:8},()=>({})),esyalar:[{id:"e1",t:"rug_rectangle_stripes_A",x:.6,z:.7,r:0},{id:"e2",t:"rug_oval_A",x:-2.6,z:-1.6,r:0},{id:"e3",t:"couch_pillows",x:.6,z:-1.95,r:0},{id:"e4",t:"sehpa_lale",x:.6,z:.55,r:0},{id:"e5",t:"armchair_pillows",x:3.25,z:.3,r:-Math.PI/2},{id:"e6",t:"bed_double_A",x:-2.9,z:-1.9,r:0},{id:"e7",t:"shelf_B_large_decorated",x:-4.15,z:.6,r:Math.PI/2},{id:"e8",t:"lamp_standing",x:2.9,z:-2.9,r:0},{id:"e9",t:"cabinet_medium_decorated",x:3.6,z:-2.95,r:0},{id:"e10",t:"pikap",x:-1.2,z:-3,r:0},{id:"e11",t:"cactus_medium_A",x:3.95,z:2.9,r:0},{id:"e12",t:"cactus_small_B",x:4.05,z:1.7,r:0},{id:"e13",t:"table_medium",x:-2.5,z:2.3,r:0},{id:"e14",t:"chair_A_wood",x:-2.5,z:1.55,r:0},{id:"e15",t:"chair_A_wood",x:-2.5,z:3.05,r:Math.PI}]}),ht=(window.__MANIFEST||[]).filter(h=>h.kind!=="video"&&/\.(jpe?g|png|webp)\.bin$/i.test(h.src||"")),_e=new Cs,Be=(sf=window.__leFotoBas)!=null?sf:Math.floor(Math.random()*Math.max(1,ht.length));async function et(h){if(!ht.length||!s.decUrl)return;let g=ht[Be++%ht.length];try{let x=await s.decUrl(String(g.src).replace(/^enc:/,""));_e.load(x,S=>{S.colorSpace=Zt;let A=h.userData.oran||1,N=S.image.width/S.image.height;S.repeat.set(Math.min(1,A/N),Math.min(1,N/A)),S.offset.set((1-S.repeat.x)/2,(1-S.repeat.y)/2),h.material.map&&h.material.map.dispose(),h.material.map=S,h.material.color.set("#ffffff"),h.material.needsUpdate=!0,h.userData.tarih=g.date})}catch{}}function it(h){h.updateMatrixWorld(!0);let g=new Qe().copy(h.matrixWorld).invert(),x=new an().setFromObject(h).applyMatrix4(g),S=x.getSize(new k),A=x.getCenter(new k),N=S.x<S.z?"x":"z",G=N==="x"?S.z:S.x,W=S.y,me=new ae(new xn(G*.72,W*.72),new Ye({color:"#f3e3e7",roughness:.55}));return me.userData.oran=G/W,N==="x"?(me.position.set(x.max.x+.004,A.y,A.z),me.rotation.y=Math.PI/2):me.position.set(A.x,A.y,x.max.z+.004),h.add(me),h.userData.foto=me,et(me),me}function Xe(h,g,x,S,A){let N=Me[h].clone(!0);return N.position.set(g,A,x),N.rotation.y=S,N.traverse(G=>{G.isMesh&&(G.castShadow=!0)}),c.add(N),N}let lt=[Xe("pictureframe_large_A",-1,-Ce.d/2+.1,0,1.5),Xe("pictureframe_medium",-Ce.w/2+.1,-.4,Math.PI/2,1.5),Xe("pictureframe_small_A",-2,-Ce.d/2+.1,0,1.75),Xe("pictureframe_small_B",-Ce.w/2+.1,.6,Math.PI/2,2.15)].filter(Boolean);lt.forEach(h=>{it(h),h.userData.act="foto",h.userData.id="duvar"+lt.indexOf(h),h.userData.ad=h.userData.id});let $e=h=>h==="salon"||!!(Q&&Q.odalar&&Q.odalar[h]),_t=[];re.userData={act:"kapi",id:"kapi-salon",ad:"kapi-salon"},_t.push(re);function z(h){return yn(512,512,(g,x,S)=>{if(h==="mutfak"){let N=x/8;for(let G=0;G<8;G++)for(let W=0;W<8;W++)g.fillStyle=(G+W)%2?"#f5ebe0":"#d97b5f",g.fillRect(G*N,W*N,N,N);g.strokeStyle="rgba(0,0,0,.08)",g.lineWidth=2;for(let G=0;G<=8;G++)g.beginPath(),g.moveTo(G*N,0),g.lineTo(G*N,S),g.stroke(),g.beginPath(),g.moveTo(0,G*N),g.lineTo(x,G*N),g.stroke()}else if(h==="teras"){let N=S/10;for(let G=0;G<10;G++){g.fillStyle=`hsl(25,${32+Math.random()*8}%,${52+Math.random()*8}%)`,g.fillRect(0,G*N,x,N-4),g.fillStyle="rgba(60,30,20,.35)",g.fillRect(0,G*N+N-4,x,4);for(let W=0;W<6;W++)g.fillStyle="rgba(90,50,30,.15)",g.fillRect(Math.random()*x,G*N+Math.random()*N,40+Math.random()*80,1.5)}}else{g.fillStyle="#efe4dc",g.fillRect(0,0,x,S);for(let A=0;A<5e3;A++)g.fillStyle=`rgba(${150+Math.random()*60},${120+Math.random()*50},${150+Math.random()*60},.12)`,g.fillRect(Math.random()*x,Math.random()*S,2,2)}})}function Ue(h){if(h.kuruldu||h.id==="salon"){h.kuruldu=!0;return}h.kuruldu=!0;let g=new ut;g.position.x=h.ox,c.add(g),h.g=g;let x;h.id==="mutfak"?x=U("mzemin",Ce.w/2.4,Ce.d/2.4):(x=z(h.id),x.wrapS=x.wrapT=dn,x.repeat.set(1.6,1.3));let S=new ae(new ct(Ce.w,.2,Ce.d),new Ye({map:x,roughness:h.id==="mutfak"?.35:.8}));if(S.position.y=-.1,S.receiveShadow=!0,g.add(S),he.add(S),h.id!=="teras"){let A=lM(h.duvar);A.wrapS=A.wrapT=dn;let N=h.id==="mutfak"?3.4:ce,G=h.id==="mutfak",W=new ae(new ct(Ce.w+.3,N,.3),new Ye({map:G?U("fayans",(Ce.w+.3)/1.4,N/1.4):A,roughness:G?.25:.9}));G||W.material.map.repeat.set(3,1.1),W.position.set(0,N/2-.2,-Ce.d/2-.15),W.receiveShadow=!0,g.add(W);let me=A.clone();me.repeat.set(2.4,1.1),me.needsUpdate=!0;let Ee=new ae(new ct(.3,N,Ce.d),new Ye({map:G?U("fayans",Ce.d/1.4,N/1.4):me,roughness:G?.25:.9}));Ee.position.set(-Ce.w/2-.15,N/2-.2,0),Ee.receiveShadow=!0,g.add(Ee),[[Ce.w,.16,.06,0,.08,-Ce.d/2+.03],[.06,.16,Ce.d,-Ce.w/2+.03,.08,0],[Ce.w+.3,.12,.14,0,N-.26,-Ce.d/2+.02],[.14,.12,Ce.d,-Ce.w/2+.02,N-.26,0]].forEach(([ke,tt,rt,nt,At,Ft])=>{let Ct=new ae(new ct(ke,tt,rt),ee);Ct.position.set(nt,At,Ft),g.add(Ct)});let We=new ut;g.add(We),h.id==="mutfak"?(We.position.set(-Ce.w/2+.02,1.6,-.4),We.rotation.y=Math.PI/2):We.position.set(2.6,1.7,-Ce.d/2+.02),We.add(new ae(new xn(1.8,1.3),new Wt({map:fm(u)}))),[[0,.68,2,.1],[0,-.68,2.1,.14],[-.95,0,.1,1.46],[.95,0,.1,1.46],[0,0,.06,1.3]].forEach(([ke,tt,rt,nt])=>{let At=new ae(new ct(rt,nt,.1),dt);At.position.set(ke,tt,.03),We.add(At)});let Je=new Ye({color:h.id==="yatak"?"#9C7BD3":"#ddd2c0",roughness:.9,side:un});[-1.2,1.2].forEach(ke=>{let tt=new ae(new Bt(.14,.2,1.8,10,1,!0,0,Math.PI),Je);tt.position.set(ke,-.1,.12),tt.rotation.y=Math.PI,le.push(tt),We.add(tt)});let Mt=new ae(new ct(.08,2.2,1.1),new Ye({color:"#9b6a4a",roughness:.6}));Mt.position.set(h.ox-Ce.w/2+.05,1.1,2.2),c.add(Mt),Mt.userData={act:"kapi",id:"kapi-"+h.id,ad:"kapi-"+h.id},_t.push(Mt);let jt=ne.clone();jt.position.x=h.ox-Ce.w/2+.12,c.add(jt),h.id==="yatak"&&[[-.75,2.05,"pictureframe_medium"],[.75,2.05,"pictureframe_medium"]].forEach(([ke,tt,rt])=>{let nt=Me[rt].clone(!0);nt.position.set(h.ox+ke,tt,-Ce.d/2+.1),c.add(nt),it(nt),nt.userData.act="foto",nt.userData.id="duvar-y"+ke,nt.userData.ad=nt.userData.id,lt.push(nt)})}else{let A=new Ye({color:"#8a5a3c",roughness:.6}),N=new Ye({color:"#cfe8ff",transparent:!0,opacity:.22,roughness:.05}),G=(ke,tt,rt,nt)=>{let At=Math.hypot(rt-ke,nt-tt),Ft=Math.atan2(rt-ke,nt-tt),Ct=Math.round(At/1.1);for(let ii=0;ii<=Ct;ii++){let Bn=new ae(new ct(.08,1,.08),A);Bn.position.set(ke+(rt-ke)*ii/Ct,.5,tt+(nt-tt)*ii/Ct),Bn.castShadow=!0,g.add(Bn)}let en=new ae(new ct(.1,.08,At),A);en.position.set((ke+rt)/2,1.02,(tt+nt)/2),en.rotation.y=Ft,g.add(en);let _n=new ae(new ct(.02,.8,At),N);_n.position.set((ke+rt)/2,.5,(tt+nt)/2),_n.rotation.y=Ft,g.add(_n)};G(-Ce.w/2+.05,-Ce.d/2+.05,Ce.w/2-.05,-Ce.d/2+.05),G(-Ce.w/2+.05,-Ce.d/2+.05,-Ce.w/2+.05,1.3);let W=gM(u),me=new ae(new xn(52,20),new Wt({map:W,fog:!1}));me.position.set(4,-.2,-15),g.add(me);let Ee=new ae(new xn(46,20),new Wt({map:W,fog:!1}));Ee.position.set(-17,-.2,4),Ee.rotation.y=Math.PI/2,g.add(Ee);let We=new ut;We.position.set(-Ce.w/2+.1,0,2.4),g.add(We),[[0,1.15,-.6,.1,2.3,.1],[0,1.15,.6,.1,2.3,.1],[0,2.3,0,.1,.1,1.3]].forEach(([ke,tt,rt,nt,At,Ft])=>{let Ct=new ae(new ct(nt,At,Ft),A);Ct.position.set(ke,tt,rt),We.add(Ct)});let Je=new ae(new ct(.06,2.2,1.1),new Ye({color:"#cfe8ff",transparent:!0,opacity:.35}));Je.position.set(h.ox-Ce.w/2+.1,1.1,2.4),c.add(Je),Je.userData={act:"kapi",id:"kapi-teras",ad:"kapi-teras"},_t.push(Je);let Mt=(ke,tt)=>{let rt=new ae(new Bt(.04,.05,2.6,8),A);rt.position.set(ke,1.3,tt),rt.castShadow=!0,g.add(rt)},jt=(ke,tt)=>{for(let nt=0;nt<=16;nt++){let At=nt/16,Ft=ke[0]+(tt[0]-ke[0])*At,Ct=ke[1]+(tt[1]-ke[1])*At,en=2.5-Math.sin(At*Math.PI)*.45,_n=new ae(new di(.045,8,6),new Ye({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:d||f?3:.4}));_n.position.set(Ft,en,Ct),g.add(_n)}};if(Mt(-4.2,-3.2),Mt(4.2,-3.2),Mt(-4.2,3.2),jt([-4.2,-3.2],[4.2,-3.2]),jt([-4.2,-3.2],[-4.2,3.2]),d||f){let ke=new ei("#ffcf7a",2.5,9,1.6);ke.position.set(0,2.3,-2.6),g.add(ke)}}}let te=null;function ue(){return te||(te=I.loadAsync(s.base+"mutfak.glb?v=1").then(h=>{h.scene.children.slice().forEach(g=>{Me[g.name]=g,R(g)})})),te}let ge=h=>new Ye(Object.assign({roughness:.7},h)),De=(h,g)=>`${h} ${g}px "Young Serif", Georgia, "Times New Roman", serif`;function yt(h,g,x="#3b2a22",S=.05){let A=new ut,N=ge({color:x,roughness:.5});[[0,g/2+S/2,h+S*2,S],[0,-g/2-S/2,h+S*2,S],[-h/2-S/2,0,S,g],[h/2+S/2,0,S,g]].forEach(([W,me,Ee,We])=>{let Je=new ae(new ct(Ee,We,.05),N);Je.position.set(W,me,.025),Je.castShadow=!0,A.add(Je)});let G=new ae(new ct(h,g,.015),ge({color:"#efe6dc"}));return G.position.z=.008,A.add(G),A}function Gt(h,g,x,S,A){let N=new ut,G=yt(h,g,A);G.position.y=x,N.add(G);let W=new ae(new xn(h,g),ge({map:yn(Math.round(512*h/Math.max(h,g))*2,Math.round(512*g/Math.max(h,g))*2,S),roughness:.85}));return W.position.set(0,x,.02),N.add(W),N}function vn(h=1){let g=new ka;return g.moveTo(0,-.5*h),g.bezierCurveTo(-.15*h,-.32*h,-.5*h,-.15*h,-.5*h,.12*h),g.bezierCurveTo(-.5*h,.4*h,-.15*h,.5*h,0,.28*h),g.bezierCurveTo(.15*h,.5*h,.5*h,.4*h,.5*h,.12*h),g.bezierCurveTo(.5*h,-.15*h,.15*h,-.32*h,0,-.5*h),g}let wt={neon_isim:()=>{let h=new ut,g=yn(1024,300,(A,N,G)=>{A.clearRect(0,0,N,G),A.textAlign="center",A.textBaseline="middle",A.font=De("italic 400",132);let W=`${o.B} \u2665 ${o.A}`;A.shadowColor="#ff3d7f";for(let[me,Ee]of[[46,"#ff7aa8"],[22,"#ffc2d8"],[6,"#fff3f7"]])A.shadowBlur=me,A.fillStyle=Ee,A.fillText(W,N/2,G/2)}),x=new ae(new ct(1.95,.62,.03),new Ye({color:"#ffffff",transparent:!0,opacity:.12,roughness:.1}));x.position.set(0,2.05,.02),h.add(x);let S=new ae(new xn(1.95,.57),new Wt({map:g,transparent:!0,depthWrite:!1,color:d||f?"#ffffff":"#f2c9d6"}));return S.position.set(0,2.05,.04),h.add(S),h},tarih_cerceve:()=>Gt(.62,.82,1.62,(h,g,x)=>{h.fillStyle="#fbf6ef",h.fillRect(0,0,g,x),h.textAlign="center",h.fillStyle="#b8325a",h.font=De("400",g*.2),h.fillText("26",g/2,x*.36),h.fillStyle="#34131F",h.font=De("400",g*.1),h.fillText("Ocak 2026",g/2,x*.5),h.strokeStyle="#d9b9a6",h.lineWidth=3,h.beginPath(),h.moveTo(g*.3,x*.57),h.lineTo(g*.7,x*.57),h.stroke(),h.font=De("italic 400",g*.075),h.fillStyle="#8A6473",h.fillText(`${o.B} & ${o.A}`,g/2,x*.67),h.font=De("italic 400",g*.055),h.fillText("her \u015Fey burada ba\u015Flad\u0131",g/2,x*.76),h.font=`${g*.09}px serif`,h.fillText("\u{1F337}",g/2,x*.9)}),harita_cerceve:()=>Gt(.95,.7,1.62,(h,g,x)=>{h.fillStyle="#cfe3ef",h.fillRect(0,0,g,x),h.fillStyle="#f1e6d2",h.beginPath(),h.moveTo(0,0),h.lineTo(g*.52,0),h.bezierCurveTo(g*.5,x*.25,g*.44,x*.4,g*.47,x*.58),h.bezierCurveTo(g*.5,x*.75,g*.42,x*.85,g*.35,x),h.lineTo(0,x),h.fill(),h.beginPath(),h.moveTo(g,0),h.lineTo(g*.6,0),h.bezierCurveTo(g*.58,x*.25,g*.53,x*.42,g*.56,x*.6),h.bezierCurveTo(g*.6,x*.78,g*.55,x*.9,g*.5,x),h.lineTo(g,x),h.fill(),h.strokeStyle="rgba(120,90,70,.25)",h.lineWidth=2;for(let A=0;A<26;A++){let N=Math.random()*g,G=Math.random()*x;h.beginPath(),h.moveTo(N,G),h.lineTo(N+30+Math.random()*40,G+(Math.random()-.5)*20),h.stroke()}let S=(A,N,G,W)=>{h.fillStyle=W,h.beginPath(),h.moveTo(A,N+G*.9),h.bezierCurveTo(A-G*1.6,N-G*.2,A-G*.6,N-G*1.3,A,N-G*.45),h.bezierCurveTo(A+G*.6,N-G*1.3,A+G*1.6,N-G*.2,A,N+G*.9),h.fill()};S(g*.27,x*.42,g*.035,"#b8325a"),S(g*.72,x*.55,g*.03,"#E8577A"),h.setLineDash([8,8]),h.strokeStyle="#b8325a",h.lineWidth=3,h.beginPath(),h.moveTo(g*.27,x*.42),h.quadraticCurveTo(g*.5,x*.25,g*.72,x*.55),h.stroke(),h.setLineDash([]),h.fillStyle="#34131F",h.textAlign="center",h.font=De("italic 400",g*.06),h.fillText("Bizim \u0130stanbul",g/2,x*.92)},"#e8e1d6"),plak_duvar:()=>Gt(.62,.62,1.7,(g,x,S)=>{g.fillStyle="#f4ece4",g.fillRect(0,0,x,S);let A=x/2,N=S*.46,G=x*.36;g.fillStyle="#141014",g.beginPath(),g.arc(A,N,G,0,7),g.fill(),g.strokeStyle="rgba(255,255,255,.07)";for(let W=8;W<G;W+=5)g.beginPath(),g.arc(A,N,W,0,7),g.stroke();g.fillStyle="#E8577A",g.beginPath(),g.arc(A,N,G*.33,0,7),g.fill(),g.fillStyle="#fff",g.textAlign="center",g.font=De("400",G*.1),g.fillText("Bizim",A,N-G*.05),g.fillText("\u015Eark\u0131m\u0131z",A,N+G*.1),g.fillStyle="#34131F",g.font=De("italic 400",x*.06),g.fillText(`${o.B} & ${o.A}`,x/2,S*.94)},"#1c1c1c"),kanvas_foto:()=>{let h=new ut,g=1.68,x=new ae(new ct(1.34,.98,.05),ge({color:"#fbf8f4"}));x.position.set(0,g,.025),x.castShadow=!0,h.add(x);let S=new ae(new xn(1.26,.9),ge({color:"#f3e3e7",roughness:.55}));return S.position.set(0,g,.052),S.userData.oran=1.26/.9,h.add(S),h.userData.foto=S,h},polaroid_ip:()=>{let h=new ut,g=1.95,x=5,S=1.9;h.userData.fotolar=[];let A=new Da([...Array(9)].map((N,G)=>new k(-S/2+S*G/8,g-Math.sin(G/8*Math.PI)*.12,.03)));h.add(new ae(new Ba(A,40,.006,5),ge({color:"#c8a46a",roughness:.6}))),[-1,1].forEach(N=>{let G=new ae(new di(.02,8,6),ge({color:"#c8a46a"}));G.position.set(N*S/2,g,.03),h.add(G)});for(let N=0;N<x;N++){let G=(N+.5)/x,W=-S/2+S*G,me=g-Math.sin(G*Math.PI)*.12,Ee=new ut;Ee.position.set(W,me-.2,.035),Ee.rotation.z=(Math.random()-.5)*.2;let We=new ae(new ct(.26,.31,.006),ge({color:"#fffdf8",roughness:.9}));We.castShadow=!0,Ee.add(We);let Je=new ae(new xn(.22,.22),ge({color:"#f3e3e7",roughness:.6}));Je.position.set(0,.025,.004),Ee.add(Je),h.userData.fotolar.push(Je);let Mt=new ae(new ct(.025,.06,.015),ge({color:"#E8577A"}));Mt.position.set(0,.16,.008),Ee.add(Mt),h.add(Ee)}return h},harf_yastik:()=>{let h=new ut;return[[-.45,"#7a1f2e","B"],[.45,"#1f2a4d","A"]].forEach(([g,x,S])=>{let A=new Bt(.36,.38,.16,28),N=yn(256,256,(W,me,Ee)=>{W.fillStyle=x,W.fillRect(0,0,me,Ee),W.strokeStyle="rgba(255,255,255,.35)",W.lineWidth=6,W.setLineDash([10,8]),W.beginPath(),W.arc(me/2,Ee/2,me*.4,0,7),W.stroke(),W.setLineDash([]),W.fillStyle="#fbe9dc",W.textAlign="center",W.textBaseline="middle",W.font=De("400",130),W.fillText(S,me/2,Ee/2+6)}),G=new ae(A,[ge({color:x,roughness:.95}),ge({map:N,roughness:.95}),ge({color:x})]);G.position.set(g,.08,0),G.scale.y=.9,G.castShadow=!0,G.receiveShadow=!0,h.add(G)}),h},paspas:()=>{let h=new ae(new ct(1,.02,.6),[ge({color:"#b98d5f"}),ge({color:"#b98d5f"}),ge({map:yn(512,300,(x,S,A)=>{x.fillStyle="#c99f6e",x.fillRect(0,0,S,A);for(let N=0;N<2500;N++)x.fillStyle=`rgba(90,60,30,${Math.random()*.18})`,x.fillRect(Math.random()*S,Math.random()*A,2,5);x.strokeStyle="#5a3a22",x.lineWidth=6,x.strokeRect(16,16,S-32,A-32),x.fillStyle="#4a2c1a",x.textAlign="center",x.textBaseline="middle",x.font=De("400",86),x.fillText("Bizim Ev",S/2,A*.45),x.font=De("italic 400",34),x.fillText(`${o.B} & ${o.A}`,S/2,A*.74)}),roughness:1}),ge({color:"#b98d5f"}),ge({color:"#b98d5f"}),ge({color:"#b98d5f"})]);h.position.y=.011,h.receiveShadow=!0;let g=new ut;return g.add(h),g},kupa_sehpa:()=>{let h=new ut,g=Me.table_small.clone(!0);h.add(g);let x=new an().setFromObject(g).max.y;return h.userData.ustY=x,[[-.12,"#7a1f2e","B"],[.12,"#1f2a4d","A"]].forEach(([S,A,N])=>{let G=yn(256,128,(Ee,We,Je)=>{Ee.fillStyle="#fbf6ef",Ee.fillRect(0,0,We,Je),Ee.fillStyle=A,Ee.textAlign="center",Ee.textBaseline="middle",Ee.font=De("400",70),Ee.fillText(N,We*.25,Je/2),Ee.fillText("\u2665",We*.75,Je/2)}),W=new ae(new Bt(.055,.05,.12,20),[ge({map:G,roughness:.3}),ge({color:"#4a2c1a",roughness:.2}),ge({color:"#fbf6ef"})]);W.position.set(S,x+.06,0),W.rotation.y=S<0?.4:-.4,W.castShadow=!0,h.add(W);let me=new ae(new Lr(.03,.009,6,14),ge({color:"#fbf6ef",roughness:.3}));me.position.set(S+(S<0?-.06:.06),x+.065,0),me.rotation.y=Math.PI/2,h.add(me)}),h},mum_set:()=>{let h=new ut,g=[],x=new ae(new Bt(.24,.24,.02,24),ge({color:"#c8a46a",metalness:.7,roughness:.3}));if(x.position.y=.01,h.add(x),[[-.1,.2,.04],[.08,.14,-.06],[.02,.26,.1]].forEach(([S,A,N])=>{let G=new ae(new Bt(.045,.045,A,16),ge({color:"#fbf3e6",roughness:.6}));G.position.set(S,.02+A/2,N),G.castShadow=!0,h.add(G);let W=new ae(new di(.018,8,8),new Wt({color:"#ffcf7a"}));W.scale.y=1.8,W.position.set(S,.02+A+.03,N),h.add(W),g.push(W)}),d||f){let S=new ei("#ffb26b",1.2,2.5,2);S.position.y=.45,h.add(S)}return h.userData.anim=(S,A)=>g.forEach((N,G)=>{let W=1+Math.sin(A*13+G*2)*.12+Math.sin(A*23+G)*.08;N.scale.set(W,1.8*W,W)}),h},balon_kalp:()=>{let h=new ut,g=[],x=new ae(new Bt(.05,.06,.05,12),ge({color:"#c8a46a",metalness:.6,roughness:.3}));return x.position.y=.025,h.add(x),[[-.12,1.75,"#E8577A"],[.14,1.9,"#b8325a"],[0,2.1,"#f39ab4"]].forEach(([S,A,N],G)=>{let W=new Pl(vn(.36),{depth:.06,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:4,curveSegments:18});W.center();let me=new ae(W,ge({color:N,roughness:.25,metalness:.15}));me.position.set(S,A,0),me.castShadow=!0,h.add(me);let Ee=new ae(new Bt(.003,.003,A-.2,4),ge({color:"#ffffff"}));Ee.position.set(S/2,(A-.2)/2+.05,0),Ee.rotation.z=Math.atan2(S,A)*.5,h.add(Ee),g.push([me,A,G])}),h.userData.anim=(S,A)=>g.forEach(([N,G,W])=>{N.position.y=G+Math.sin(A*1.3+W*2)*.04,N.rotation.y=Math.sin(A*.7+W)*.35}),h},lale_buket:()=>{let h=new ut,g=Ad();return g.scale.setScalar(1.6),h.add(g),h}},Tt=new Map;function Wn(h){let g=ze[h.t];if(!g)return null;let x;if((h.t.startsWith("m_")||h.t==="ocak")&&!Me.m_kitchencounter_straight_A)return null;if(h.t==="pikap"){x=new ut;let S=Me.table_small.clone(!0);x.add(S);let A=new an().setFromObject(S).max.y,N=cM();N.position.y=A,x.add(N),x.userData.plak=N.userData.plak}else if(h.t==="sehpa_lale"){x=new ut;let S=Me.table_low.clone(!0);x.add(S);let A=new an().setFromObject(S).max.y,N=Ad();N.position.y=A,N.scale.setScalar(1.15),x.add(N),x.userData.ustY=A}else if(h.t==="ocak"){if(x=new ut,Me.m_kitchencounter_straight_A&&Me.m_stove_multi_countertop){let S=Me.m_kitchencounter_straight_A.clone(!0),A=Me.m_stove_multi_countertop.clone(!0),N=Me.m_extractorhood.clone(!0);N.position.z=-1,[S,A,N].forEach(G=>x.add(G)),x.scale.setScalar(.8)}}else if(h.t==="semaver")x=uM();else if(h.t==="teleskop")x=fM();else if(h.t==="saksi_lale")x=pM();else if(h.t==="fener_ayak")x=mM(d||f);else if(wt[h.t])x=wt[h.t]();else{if(!Me[h.t])return null;x=Me[h.t].clone(!0),g[4].duvar&&(x.userData.duvar=!0)}return g[4].s&&!x.userData.olcekli&&(x.scale.setScalar(g[4].s),x.userData.olcekli=!0),x.traverse(S=>{S.isMesh&&(S.castShadow=!g[4].zemin,S.receiveShadow=!0)}),Object.assign(x.userData,g[4],{id:h.id,tip:h.t,ad:h.t}),c.add(x),Tt.set(h.id,x),Si(x,h),g[4].act==="foto"&&(x.userData.fotolar?x.userData.fotolar.forEach(et):x.userData.foto?et(x.userData.foto):it(x)),x}function Si(h,g){h.position.set(g.x,g.y||0,g.z),h.rotation.y=g.r||0,h.updateMatrixWorld(!0);let x=new an().setFromObject(h);h.userData.kutu={x0:x.min.x,x1:x.max.x,z0:x.min.z,z1:x.max.z,y1:x.max.y}}function Ja(h){let g=h.userData,x=h.rotation.y,S=Math.cos(x),A=Math.sin(x);return(g.yerler||[]).map(([N,G])=>[h.position.x+N*S+G*A,h.position.z-N*A+G*S])}let Xn=yn(512,256,(h,g,x)=>{h.fillStyle="#9fcf7a",h.fillRect(0,0,g,x);for(let S=0;S<2600;S++){h.strokeStyle=`hsl(${95+Math.random()*25},${40+Math.random()*20}%,${48+Math.random()*18}%)`,h.lineWidth=1.2;let A=Math.random()*g,N=Math.random()*x;h.beginPath(),h.moveTo(A,N),h.lineTo(A+(Math.random()-.5)*4,N-4-Math.random()*6),h.stroke()}});Xn.wrapS=Xn.wrapT=dn,Xn.repeat.set(3,1.2);let Ei=new ae(new ct(Ce.w,.2,P-we),new Ye({map:Xn,roughness:1}));Ei.position.set(0,-.11,(we+P)/2),Ei.receiveShadow=!0,Ei.name="zemin",c.add(Ei),he.add(X),he.add(Ei);let $a=new Ye({color:"#e9e1d6",roughness:.9});for(let h=0;h<4;h++){let g=new ae(new Bt(.22,.24,.05,14),$a);g.position.set(-3.6+h%2*.25,0,we+.45+h*.8),g.receiveShadow=!0,c.add(g)}let Ns=new Ye({color:"#fffaf6",roughness:.7}),hs=(h,g)=>{let x=new ae(new ct(.08,.55,.08),Ns);x.position.set(h,.27,g),x.castShadow=!0,c.add(x);let S=new ae(new La(.06,.1,4),Ns);S.position.set(h,.6,g),S.rotation.y=Math.PI/4,c.add(S)};for(let h=-Ce.w/2;h<=Ce.w/2+.01;h+=.45)hs(h,P);for(let h=we+.3;h<P;h+=.45)hs(Ce.w/2,h);[[0,P,Ce.w,.05],[Ce.w/2,(we+P)/2,.05,P-we]].forEach(([h,g,x,S])=>[.18,.4].forEach(A=>{let N=new ae(new ct(x,.06,S),Ns);N.position.set(h,A,g),N.castShadow=!0,c.add(N)}));let qn=new ut;qn.position.set(-4.1,0,P-.4),c.add(qn);{let h=new ae(new Bt(.04,.05,1.3,8),new Ye({color:"#3a2a2e",roughness:.5}));h.position.y=.65,h.castShadow=!0,qn.add(h);let g=new ae(new di(.13,16,12),new Ye({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:d||f?2.2:.15}));if(g.position.y=1.38,qn.add(g),d||f){let x=new ei("#ffcf7a",3.5,5,1.8);x.position.y=1.35,qn.add(x)}}let Us=[-3.15,-1.05,1.05,3.15].flatMap(h=>[we+1.05,we+2.5].map(g=>[h,g])),Os=new Ye({color:"#7a5034",roughness:1}),Qa=new Ye({color:"#a77d5a",roughness:1}),ac=new Ye({color:"#b98a5e",roughness:.8}),wi=Us.map(([h,g],x)=>{let S=new ut;S.position.set(h,0,g),c.add(S);let A=new ae(new ct(1.4,.16,.95),ac);A.position.y=.06,A.castShadow=!0,A.receiveShadow=!0,S.add(A);let N=new ae(new ct(1.25,.05,.8),Os);N.position.y=.14,N.receiveShadow=!0,S.add(N);let G=new ut;return G.position.y=.16,S.add(G),S.userData={act:"bahce",i:x,top:N,bit:G,ad:"parsel"+x,id:"parsel"+x},S}),Vr=["#C9233F","#E8577A","#F7A8BE","#fff1f4","#9C7BD3","#f5a524"],C=new Ye({color:"#5b9e5a",roughness:.8,side:un}),H=36e5;function Y(h){if(!h||!h.ekim)return-1;let g=(Math.min(Date.now(),(h.su||h.ekim)+48*H)-h.ekim)/(24*H);return g<1?0:g<2?1:g<3?2:3}let $=h=>!!(h&&h.ekim)&&Y(h)<3&&Date.now()-(h.su||h.ekim)>24*H,V=h=>{let g=72*H-(Math.min(Date.now(),(h.su||h.ekim)+48*H)-h.ekim);if(g<=0)return"a\xE7t\u0131";let x=Math.ceil(g/H);return x>=24?`${Math.floor(x/24)} g\xFCn ${x%24} sa sonra a\xE7ar`:`${x} saat sonra a\xE7ar`};function Te(h,g){let x=h.userData.bit;x.clear();let S=Y(g);if(h.userData.top.material=S>=0&&$(g)?Qa:Os,S<0)return;let A=$(g)?.55:0;[[-.35,-.1],[0,.12],[.35,-.08]].forEach(([N,G],W)=>{let me=new ut;if(me.position.set(N,0,G),me.rotation.z=A*(W-1||.6),x.add(me),S===0){let Je=new ae(new di(.07,8,6),Os);Je.scale.y=.5,me.add(Je);let Mt=new ae(new La(.02,.08,5),C);Mt.position.y=.05,me.add(Mt);return}let Ee=S===1?.18:S===2?.4:.55,We=new ae(new Bt(.015,.018,Ee,6),C);if(We.position.y=Ee/2,me.add(We),[-1,1].forEach(Je=>{let Mt=new ae(new xn(.08,Ee*.7),C);Mt.position.set(Je*.04,Ee*.3,0),Mt.rotation.z=-Je*.35,Mt.rotation.y=W,me.add(Mt)}),S>=2){let Je=S===2?.045:.075,Mt=g.renk||Vr[0],jt=new ae(new vi([[0,-.02],[Je*.7,0],[Je,Je*.8],[Je*.92,Je*1.6],[Je*.6,Je*2.1],[Je*.65,Je*2.2]].map(ke=>new oe(ke[0],ke[1])),14),new Ye({color:Mt,roughness:.45,side:un}));jt.position.y=Ee,jt.castShadow=!0,S===2&&jt.scale.set(.8,1.1,.8),me.add(jt)}})}let He=()=>{try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Istanbul"}).format(new Date)}catch{return new Date().toISOString().slice(0,10)}},Q=Fe(),Ge={},st=()=>{let h=Ge[t];return h||(h=Ge[t]={kazanc:0}),h.gun!==He()&&(h.gun=He(),h.al={}),h.al=h.al||{},h},Ze=()=>Object.values(Ge).reduce((h,g)=>h+(g.kazanc||0),0)-(Q.harcanan||0),je=t==="misafir"||!i,Rt=0,kt=0,qe=null,vt=null,ft=null;function Ve(){gn(),clearTimeout(Rt),Rt=setTimeout(()=>{if(je){try{localStorage.setItem("le-ev",JSON.stringify(Q))}catch{}return}i.from("state").upsert({scope:"oyun_ev",id:"ev",value:Q},{onConflict:"scope,id"}).then(()=>{},()=>{})},500),jn({t:"ev",ev:Q})}function Qt(){ea(),clearTimeout(kt),kt=setTimeout(()=>{if(je){try{localStorage.setItem("le-puan",JSON.stringify(Ge[t]))}catch{}return}i.from("state").upsert({scope:"oyun_puan",id:t,value:Ge[t]},{onConflict:"scope,id"}).then(()=>{},()=>{})},500),jn({t:"puan",v:Ge[t]})}function ot(h,g,x,S=1){let A=st();if(x){let N=A.al[x]||0;if(N>=S)return!1;A.al[x]=N+1}return A.kazanc=(A.kazanc||0)+h,Qt(),Gm(h,g),!0}function Mn(h){return Ze()<h?(bt(`\u{1F337} ${h} lale puan\u0131 laz\u0131m, ${Ze()} var`),!1):(Q.harcanan=(Q.harcanan||0)+h,ea(),!0)}let Sn=new Map;function gn(){for(Q.depo=Q.depo||[],Q.hediyeler=Q.hediyeler||[],Q.bahce=Q.bahce||[];Q.bahce.length<8;)Q.bahce.push({});Q.odalar=Q.odalar||{},w.forEach(x=>{$e(x.id)&&Ue(x)});let h=new Set(Q.esyalar.map(x=>x.id));for(let[x,S]of Tt)h.has(x)||([qe&&qe.A,qe&&qe.B].forEach(A=>{A&&A.yer&&A.yer.m===S&&Dd(A)}),c.remove(S),Tt.delete(x),vt===S&&oo());Q.esyalar.forEach(x=>{let S=Tt.get(x.id);S?(S.position.x!==x.x||S.position.z!==x.z||S.rotation.y!==(x.r||0))&&([qe&&qe.A,qe&&qe.B].forEach(A=>{A&&A.yer&&A.yer.m===S&&Dd(A)}),Si(S,x)):Wn(x)});let g=Q.hediyeler.filter(x=>!x.acildi);for(let[x,S]of Sn)g.some(A=>A.id===x)||(c.remove(S),Sn.delete(x));g.forEach(x=>{if(Sn.has(x.id))return;let S=hM(x.renk||"#C9233F");S.position.set(x.x,x.y||0,x.z),S.rotation.y=x.r||0,S.userData=Object.assign(S.userData,{act:"hediye",id:x.id,ad:x.id}),S.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),c.add(S),Sn.set(x.id,S)}),Fs(),eo(),wi.forEach((x,S)=>Te(x,Q.bahce[S])),ea(),Mm(),lo()}function Fs(){let h=qe?B(gt.g.position.x).ox:0,g=[...Tt.values()].find(x=>x.userData.act==="lamba"&&B(x.position.x).ox===h);if(g){let x=g.userData.kutu;y.position.set((x.x0+x.x1)/2,x.y1-.2,(x.z0+x.z1)/2)}else y.position.set(0,-10,0)}let zt=d,bn=Math.round((ie.x1-ie.x0)/ks),us=Math.round((ie.z1-ie.z0)/ks),An=new Uint8Array(bn*us),Ti=(h,g)=>[Math.floor((h-ie.x0)/ks),Math.floor((g-ie.z0)/ks)],Wr=(h,g)=>[ie.x0+(h+.5)*ks,ie.z0+(g+.5)*ks];function eo(){let h=[...Tt.values()].filter(g=>!g.userData.zemin&&!g.userData.kucuk).map(g=>g.userData.kutu);wi.forEach(g=>h.push({x0:g.position.x-.7,x1:g.position.x+.7,z0:g.position.z-.48,z1:g.position.z+.48})),h.push({x0:qn.position.x-.15,x1:qn.position.x+.15,z0:qn.position.z-.15,z1:qn.position.z+.15});for(let g=0;g<bn;g++)for(let x=0;x<us;x++){let[S,A]=Wr(g,x),N=0,G=B(S);(!$e(G.id)||Math.abs(S-G.ox)>Ce.w/2-.3||A<ie.z0+.3||A>(G.id==="salon"?ie.z1:Ce.d/2)-.3||h.some(W=>S>W.x0-.12&&S<W.x1+.12&&A>W.z0-.12&&A<W.z1+.12))&&(N=1),An[x*bn+g]=N}}let Gi=(h,g)=>h>=0&&g>=0&&h<bn&&g<us&&!An[g*bn+h];function Rd(h,g){if(Gi(h,g))return[h,g];for(let x=1;x<14;x++)for(let S=-x;S<=x;S++)for(let A=-x;A<=x;A++)if(Math.max(Math.abs(S),Math.abs(A))===x&&Gi(h+S,g+A))return[h+S,g+A];return[h,g]}function Cd(h,g){let x=Math.ceil(Math.hypot(g[0]-h[0],g[1]-h[1])/(ks*.5));for(let S=0;S<=x;S++){let A=h[0]+(g[0]-h[0])*S/x,N=h[1]+(g[1]-h[1])*S/x,[G,W]=Ti(A,N);if(!Gi(G,W))return!1}return!0}function Pd(h,g){var rt;let[x,S]=Rd(...Ti(h[0],h[1])),[A,N]=Rd(...Ti(g[0],g[1])),G=(nt,At)=>At*bn+nt,W=new Map([[G(x,S),0]]),me=new Map,Ee=[[0,x,S]],We=new Set;for(;Ee.length;){Ee.sort((Ct,en)=>Ct[0]-en[0]);let[,nt,At]=Ee.shift(),Ft=G(nt,At);if(!We.has(Ft)){if(We.add(Ft),nt===A&&At===N)break;for(let[Ct,en]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let _n=nt+Ct,ii=At+en;if(!Gi(_n,ii)||Ct&&en&&(!Gi(nt+Ct,At)||!Gi(nt,At+en)))continue;let Bn=G(_n,ii),It=W.get(Ft)+(Ct&&en?1.414:1);It<((rt=W.get(Bn))!=null?rt:1e9)&&(W.set(Bn,It),me.set(Bn,Ft),Ee.push([It+Math.hypot(A-_n,N-ii),_n,ii]))}}}let Je=[],Mt=G(A,N);if(!me.has(Mt)&&Mt!==G(x,S))return[Wr(A,N)];for(;Mt!==void 0&&Mt!==G(x,S);)Je.unshift(Wr(Mt%bn,Math.floor(Mt/bn))),Mt=me.get(Mt);let jt=[h,...Je];Gi(...Ti(g[0],g[1]))&&jt.push(g);let ke=[jt[0]],tt=0;for(;tt<jt.length-1;){let nt=jt.length-1;for(;nt>tt+1&&!Cd(jt[tt],jt[nt]);)nt--;ke.push(jt[nt]),tt=nt}return ke.slice(1)}function Id(h,g){let x=h.scene,S=h.animations.some(ke=>/_Rig$/.test(ke.name));x.traverse(ke=>{ke.isMesh&&(ke.castShadow=!0,ke.receiveShadow=!1,ke.material=ke.material.clone(),S&&(ke.material.roughness=.85,ke.material.metalness=0,ke.frustumCulled=!1))});let A=!S&&h.animations.some(ke=>ke.name==="Hug");x.traverse(ke=>{ke.isSkinnedMesh&&(ke.frustumCulled=!1)});let N=new an().setFromObject(x),G=S?nM*iM:A?1:1.55/(N.max.y-N.min.y);x.scale.setScalar(G);let W=new ut;W.add(x),c.add(W);let me=new Or(x),Ee={};h.animations.forEach(ke=>{Ee[ke.name.replace(/_Rig$/,"")]=me.clipAction(ke)}),["Sit_Chair_Down","Lie_Down","Sit_Chair_StandUp","Lie_StandUp","Cheer","Interact","PickUp","Sit_Floor_Down"].forEach(ke=>{Ee[ke]&&(Ee[ke].setLoop(Fu),Ee[ke].clampWhenFinished=!0)});let We={boy:(N.max.y-N.min.y)*G,rol:g,g:W,root:x,mixer:me,acts:Ee,cur:null,path:[],durum:"ayakta",yer:null,online:!1,hiz:dm},Je=null;x.traverse(ke=>{!Je&&ke.isBone&&/^hips$/i.test(ke.name)&&(Je=ke)}),We.kalca={};let Mt=(ke,tt)=>{let rt=Ee[ke];if(!rt||!Je)return null;let nt=new Or(x);return nt.clipAction(rt.getClip()).play(),nt.setTime(tt==null?rt.getClip().duration*.5:tt),x.updateMatrixWorld(!0),{v:Je.getWorldPosition(new k),tm:nt}};for(let[ke,tt]of[["otur","Sit_Chair_Idle"],["yat","Lie_Idle"],["yer","Sit_Floor_Idle"]]){let rt=Mt(tt);rt&&(We.kalca[ke]=[rt.v.x,rt.v.y,rt.v.z],rt.tm.stopAllAction(),rt.tm.uncacheRoot(x))}if(Ee.Walking_A){let ke=null;if(x.traverse(tt=>{!ke&&tt.isBone&&/^(foot[._]?l|foot_l)$/i.test(tt.name)&&(ke=tt)}),ke){let tt=Ee.Walking_A.getClip().duration,rt=9,nt=-9,At=new Or(x);At.clipAction(Ee.Walking_A.getClip()).play();for(let Ct=0;Ct<24;Ct++){At.setTime(tt*Ct/24),x.updateMatrixWorld(!0);let en=ke.getWorldPosition(new k).z;rt=Math.min(rt,en),nt=Math.max(nt,en)}At.stopAllAction(),At.uncacheRoot(x);let Ft=2*(nt-rt);if(Ft>.1){let Ct=dm/(window.__leHiz||1)*tt/Ft;Ct>1.5&&(Ct=1.5,We.hiz=(window.__leHiz||1)*Ft*Ct/tt),Ee.Walking_A.timeScale=Math.max(.7,Ct)}}}We.oyna=(ke,tt=rM)=>{let rt=Ee[ke];return!rt||We.cur===rt||(rt.reset().setEffectiveWeight(1).fadeIn(tt).play(),We.cur&&We.cur.fadeOut(tt),We.cur=rt),rt},We.bir=ke=>new Promise(tt=>{let rt=We.oyna(ke,.2);if(!rt)return tt();let nt=At=>{At.action===rt&&(me.removeEventListener("finished",nt),tt())};me.addEventListener("finished",nt),setTimeout(()=>{me.removeEventListener("finished",nt),tt()},rt.getClip().duration/(window.__leHiz||1)*1e3+4e3)}),We.oyna("Idle",0);let jt=Ae("div",{class:"le-tag "+(g==="B"?"b":"a")},Ae("b",null,o[g]),Ae("i"));return qt("#leTags").append(jt),We.tag=jt,We}qe={A:Id(de,"A"),B:Id(ve,"B")},qe.A.g.position.set(1.8,0,1.8),qe.B.g.position.set(-.6,0,1.9),qe.B.g.rotation.y=.6,qe.A.g.rotation.y=-.6;let gt=qe[a],Dt=qe[a==="A"?"B":"A"],ds=um({characters:qe,me:gt,Vec3:k,Quat:rn,stand:h=>to(h),findPath:(h,g)=>Pd(h,g),lineClear:(h,g)=>Cd(h,g),pointClear:(h,g)=>Gi(...Ti(h,g)),sameRoom:(h,g)=>B(h.g.position.x).id===B(g.g.position.x).id,broadcast:h=>jn(h),hearts:(h,g,x)=>zs(h,g,x),focus:(...h)=>Jr(...h),reward:()=>ot(3,"Sar\u0131ld\u0131n \u{1F917}","saril",5),save:()=>{ho(),jn(Object.assign({t:"durum"},$r(gt)))},hint:h=>bt(h)});function Dd(h){h.yer&&(h.g.position.set(h.yer.cik[0],0,h.yer.cik[1]),h.yer=null,h.durum="ayakta",h.oyna("Idle"))}async function to(h){h.durum==="oturuyor"?(h.durum="kalkiyor",await h.bir("Sit_Chair_StandUp")):h.durum==="yatiyor"?(h.durum="kalkiyor",await h.bir("Lie_StandUp")):h.durum==="yerde"&&(h.durum="kalkiyor"),h.yer&&(h.g.position.set(h.yer.cik[0],0,h.yer.cik[1]),h.yer=null),h.durum="ayakta"}async function fi(h,g,x,S,A){if(h.hugLock)return;h.token=(h.token||0)+1,h.kosu=!1;let N=h.token;h.hedefYer=null,h.durum!=="ayakta"&&await to(h),N===h.token&&(h.path=Pd([h.g.position.x,h.g.position.z],[g,x]),h.sonra=S||null,h.path.length?(h.kosu=!!A&&!!h.acts.Running,h.oyna(h.kosu?"Running":"Walking_A")):S&&(h.sonra=null,S()))}function Ld(h,g){let x=g.userData,S=Ja(g),A=new Set([qe.A,qe.B].filter(We=>We!==h).map(We=>We.yer||We.hedefYer).filter(We=>We&&We.m===g).map(We=>We.i)),N=S.findIndex((We,Je)=>!A.has(Je));N<0&&(N=0);let[G,W]=S[N],me=(x.yon||0)+g.rotation.y,Ee=x.act==="yat"?[Math.sin(g.rotation.y)*1.25,Math.cos(g.rotation.y)*1.25]:[Math.sin(me)*(x.act==="yer"?.55:.75),Math.cos(me)*(x.act==="yer"?.55:.75)];return{m:g,i:N,sx:G,sz:W,yon:me,cik:[G+Ee[0],W+Ee[1]]}}function oc(h,g,x){let S=sM[x],A=h.kalca[x]||[0,S[1],0],N=S[0]-A[0],G=S[1]-A[1],W=S[2]-A[2],me=Math.sin(g.yon),Ee=Math.cos(g.yon);h.g.position.set(g.sx+N*Ee+W*me,G,g.sz-N*me+W*Ee),h.g.rotation.y=g.yon}let lc=(h,g,x)=>{h.g.rotation.y=Math.atan2(g-h.g.position.x,x-h.g.position.z)},gm=(h,g=.6)=>{let x=h.userData.kutu||{x0:h.position.x-.2,x1:h.position.x+.2,z0:h.position.z-.2,z1:h.position.z+.2},S=(x.x0+x.x1)/2,A=(x.z0+x.z1)/2;return[S,A,x.z1+g]};async function Xr(h,g,x){if(h.hugLock)return;let S=g.userData;if(S.act==="otur"||S.act==="yat"||S.act==="yer"){let A=Ld(h,g),N=fi(h,A.cik[0],A.cik[1],async()=>{if(h.hedefYer=null,h.yer=A,S.act==="yat"){if(oc(h,A,"yat"),h.durum="yatiyor",await h.bir("Lie_Down"),h.durum==="yatiyor"&&h.oyna("Lie_Idle"),!x){let G=qe.A.yer,W=qe.B.yer;G&&W&&G.m===W.m&&qe.A.durum==="yatiyor"&&qe.B.durum==="yatiyor"&&(ot(10,"\u0130yi geceler \u{1F319}","iyigece"),ni())}}else S.act==="yer"?(oc(h,A,"yer"),h.durum="yerde",await h.bir("Sit_Floor_Down"),h.durum==="yerde"&&h.oyna("Sit_Floor_Idle")):(oc(h,A,"otur"),h.durum="oturuyor",await h.bir("Sit_Chair_Down"),h.durum==="oturuyor"&&h.oyna("Sit_Chair_Idle"),x||_m());x||ho()});h.hedefYer=A,await N}else if(S.act==="lamba"||S.act==="muzik"||S.act==="foto"||S.act==="pisir"||S.act==="cay"||S.act==="buzdolabi"||S.act==="yildiz"){let[A,N,G]=gm(g,.55);if(S.asili){let W=S.kutu;Math.abs(Math.sin(g.rotation.y))>.5?(A=W.x1+.75,G=(W.z0+W.z1)/2):G=W.z1+.75}if(g.parent&&lt.includes(g)){let W=g.rotation.y?[g.position.x+1.1,g.position.z]:[g.position.x,g.position.z+1.1];A=W[0],G=W[1],N=g.position.z}await fi(h,(S.act==="foto"&&lt.includes(g),A),G,async()=>{if(lc(h,g.position.x,g.position.z),await h.bir("Interact"),h.oyna("Idle"),S.act==="lamba")zt=!zt;else if(S.act==="muzik"&&!x)Im();else if(S.act==="foto"&&S.fotolar)for(let W of S.fotolar)await et(W);else S.act==="foto"&&S.foto?(await et(S.foto),x||setTimeout(()=>S.foto.userData.tarih&&bt("\u{1F4F7} "+kd(S.foto.userData.tarih)),600)):S.act==="pisir"?(Ud(g,7),x||ym()):S.act==="cay"?(Ud(g,4),x||vm()):S.act==="buzdolabi"&&!x?Od():S.act==="yildiz"&&(Em(g),x||(ot(3,"Dilek tuttun \u{1F320}","yildiz"),ni()))})}else if(S.act==="bahce"){await wm(h,g,x);return}else if(S.act==="hediye"){await Pm(h,g,x);return}else if(S.act==="kapi"){x||Kr();return}x||jn({t:"kullan",id:S.id})}let bm=["Ocak","\u015Eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011Fustos","Eyl\xFCl","Ekim","Kas\u0131m","Aral\u0131k"],kd=h=>{let[g,x,S]=String(h).split("-").map(Number);return`${S} ${bm[x-1]} ${g}`};function _m(){let h=qe.A.yer,g=qe.B.yer;h&&g&&h.m===g.m&&qe.A.durum==="oturuyor"&&qe.B.durum==="oturuyor"&&ot(10,"Yan yana oturdunuz \u{1F6CB}\uFE0F","yanyana");let x=Q.mutfak;x&&x.yemek&&!x.yendi&&Date.now()-x.at>6e3&&B(gt.g.position.x).id==="mutfak"&&gt.durum==="oturuyor"&&(h&&g&&qe.A.durum==="oturuyor"&&qe.B.durum==="oturuyor"&&B(qe.A.g.position.x).id==="mutfak"&&B(qe.B.g.position.x).id==="mutfak"?(x.yendi=Date.now(),Ve(),zs(gt.g.position.x,gt.g.position.z,10),ot(15,`${x.yemek} birlikte yendi, afiyet olsun \u{1F60B}`,"yemek"),ni()):bt(`\u{1F372} Masada ${x.yemek} var \xB7 ${o[Dt.rol]} de otursun, birlikte yiyin`))}let Nd=["Menemen","Mant\u0131","Karn\u0131yar\u0131k","\u0130skender","Mercimek \xE7orbas\u0131","Kuru fasulye pilav","Lahmacun","Yaprak sarma","Su b\xF6re\u011Fi","K\xFCnefe","Kumpir","F\u0131r\u0131n makarna","Tavuk sote","K\xF6fte patates"],xm=yn(64,64,h=>{let g=h.createRadialGradient(32,32,2,32,32,30);g.addColorStop(0,"rgba(255,255,255,.9)"),g.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=g,h.fillRect(0,0,64,64)});function Ud(h,g){let x=h.userData.kutu||{x0:h.position.x,x1:h.position.x,z0:h.position.z,z1:h.position.z,y1:1},S=(x.x0+x.x1)/2,A=(x.z0+x.z1)/2,N=Math.min(x.y1,1.3),G=0,W=setInterval(()=>{for(let me=0;me<2;me++)no(xm,S+(Math.random()-.5)*.4,N,A+(Math.random()-.5)*.3,.25+Math.random()*.2,{vy:.35+Math.random()*.2,vx:(Math.random()-.5)*.1,omur:1.8});++G>g*5&&clearInterval(W)},200)}function ym(){let h=Q.mutfak;if(h&&h.yemek&&!h.yendi){bt(`\u{1F372} Masada zaten ${h.yemek} var, \xF6nce yiyin`);return}let g=Nd[Math.floor(Math.random()*Nd.length)];Q.mutfak=Object.assign(Q.mutfak||{},{yemek:g,at:Date.now(),pisiren:t,yendi:0}),bt(`\u{1F525} ${g} pi\u015Fiyor\u2026`),ot(5,`${g} pi\u015Firdin \u{1F373}`,"pisir"),setTimeout(()=>{Ve(),bt(`\u{1F372} ${g} haz\u0131r! Masaya oturun`),ni()},6500)}function vm(){Q.mutfak=Object.assign(Q.mutfak||{},{cay:Date.now()}),Ve(),ot(2,"\xC7ay demledin \u{1FAD6}","cay"),ni(),setTimeout(()=>bt("\u2615 \xC7aylar masada, tav\u015Fan kan\u0131"),1200)}let Bs=[];function Mm(){Bs.forEach(S=>S.parent&&S.parent.remove(S)),Bs.length=0;let h=Q.mutfak||{};[...Tt.values()].filter(S=>S.userData.masa).forEach(S=>{let A=S.userData.kutu,N=(A.x0+A.x1)/2,G=(A.z0+A.z1)/2,W=A.y1;if(h.yemek&&!h.yendi&&Date.now()-(h.at||0)>6e3&&B(N).id==="mutfak"&&(Me.m_food_stew||Me.m_stew_bowl)){let me=(Me.m_food_stew||Me.m_stew_bowl).clone(!0);me.scale.setScalar(.4),me.position.set(N,W,G),me.traverse(Ee=>{Ee.isMesh&&(Ee.castShadow=!0)}),c.add(me),Bs.push(me)}h.cay&&Date.now()-h.cay<3*H&&[[-.32,.1],[.32,-.1]].forEach(([me,Ee])=>{let We=dM();We.position.set(N+me,W,G+Ee),We.scale.setScalar(1.4),c.add(We),Bs.push(We)})});let x=[...Tt.values()].find(S=>S.userData.act==="buzdolabi");if(x&&Q.buzNot&&Q.buzNot.t){let S=new ae(new xn(.32,.32),new Ye({color:Q.buzNot.kimden===t?"#ffe89a":"#ffc9d8",roughness:.8})),A=x.userData.kutu;S.position.set((A.x0+A.x1)/2+.15,1.25,A.z1+.01),S.rotation.z=.08,c.add(S),Bs.push(S);let N=new ae(new di(.03,8,6),new Ye({color:"#C9233F"}));N.position.copy(S.position).add(new k(0,.13,.02)),c.add(N),Bs.push(N)}}function Od(){let h=qt("#leBuz"),g=Q.buzNot,x=Ae("textarea",{rows:3,maxlength:140,placeholder:"Buzdolab\u0131na bir not as\u2026 (s\xFCt bitti, seni seviyorum\u2026)"}),S=Ae("button",{type:"button",class:"le-ana"},"\u{1F9F2} Notu as");S.onclick=()=>{let A=x.value.trim();if(!A){x.focus();return}Q.buzNot={kimden:t,t:A,at:Date.now()},Ve(),h.classList.remove("on"),bt("\u{1F9F2} Not buzdolab\u0131nda")},h.replaceChildren(...[Ae("div",{class:"le-sh"},Ae("h3",null,"Buzdolab\u0131"),Ae("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),g&&g.t?Ae("div",{class:"le-buznot"+(g.kimden===t?" ben":"")},Ae("p",null,g.t),Ae("small",null,`${g.kimden===t?"Senin notun":o[Dt.rol]} \xB7 ${Kd(new Date(g.at).toISOString())}`)):Ae("p",{class:"le-sub"},"Buzdolab\u0131nda not yok."),Ae("p",{class:"le-sub"},`Bug\xFCn buzdolab\u0131nda: ${["s\xFCt","yo\u011Furt","beyaz peynir","zeytin","domates","\xE7ilek","ayran","sucuk","ka\u015Far","yumurta"].sort(()=>Math.random()-.5).slice(0,4).join(", ")} \u{1F9C0}`),x,S].filter(Boolean)),h.classList.add("on")}let Sm=yn(256,32,h=>{let g=h.createLinearGradient(0,0,256,0);g.addColorStop(0,"rgba(255,255,255,0)"),g.addColorStop(1,"rgba(255,248,220,1)"),h.fillStyle=g,h.fillRect(0,12,256,8),h.fillStyle="#fff",h.beginPath(),h.arc(246,16,7,0,7),h.fill()});function Em(h){let g=new Ra(new Cr({map:Sm,transparent:!0,depthWrite:!1,rotation:-.35,fog:!1}));g.position.set(h.position.x-6,6.5,-9),g.scale.set(3.2,.4,1),g.userData={vx:9,vy:-2.6,vz:0,g:0,t:0,omur:1.4},c.add(g),qr.push(g),Jr(h.position.x-1,2.4,h.position.z-2,7,1,2.2)}async function wm(h,g,x){let S=g.userData.i,A=Q.bahce[S]||(Q.bahce[S]={});await fi(h,g.position.x,g.position.z-.9,async()=>{if(lc(h,g.position.x,g.position.z),x){await h.bir("PickUp"),h.oyna("Idle");return}let N=Y(A);if(N<0){if(!Mn(5))return;await h.bir("PickUp"),h.oyna("Idle"),Q.bahce[S]={ekim:Date.now(),su:Date.now(),renk:Vr[Math.floor(Math.random()*Vr.length)],eken:t},Ve(),bt("\u{1F331} Lale ektin! Her g\xFCn sula, 3 g\xFCnde a\xE7ar"),ni()}else N===3?(await h.bir("PickUp"),h.oyna("Idle"),Q.bahce[S]={},Q.toplanan=(Q.toplanan||0)+1,Ve(),zs(g.position.x,g.position.z,8),ot(15,"Lale toplad\u0131n \u{1F337}"),ni()):Date.now()-(A.su||0)>12*H?(await h.bir("Interact"),h.oyna("Idle"),Cm(g.position.x,g.position.z),A.su=Date.now(),Ve(),ot(1,"Sulad\u0131n \u{1F4A7}","sula",8),ni()):(await h.bir("Interact"),h.oyna("Idle"),bt(`\u{1F4A7} Sulanm\u0131\u015F \xB7 ${V(A)}`));jn({t:"kullan",id:g.userData.id})})}let qr=[],Tm=yn(64,64,h=>{h.font="52px serif",h.textAlign="center",h.textBaseline="middle",h.fillText("\u{1F497}",32,36)}),Am=yn(32,32,h=>{h.fillStyle="#7cc7ff",h.beginPath(),h.arc(16,18,9,0,7),h.fill()}),bM=yn(64,64,h=>{h.font="bold 40px sans-serif",h.fillStyle="#9C7BD3",h.textAlign="center",h.textBaseline="middle",h.fillText("z",32,34)}),Rm=yn(16,16,h=>{h.fillStyle="#fff",h.fillRect(0,0,16,10)});function no(h,g,x,S,A,N,G){let W=new Ra(new Cr({map:h,transparent:!0,depthWrite:!1,color:G||"#ffffff"}));return W.position.set(g,x,S),W.scale.setScalar(A),W.userData=Object.assign({vx:0,vy:0,vz:0,g:0,t:0,omur:1.6},N),c.add(W),qr.push(W),W}function zs(h,g,x=10,S=1.6){for(let A=0;A<x;A++)no(Tm,h+(Math.random()-.5)*.6,S+Math.random()*.3,g+(Math.random()-.5)*.6,.28+Math.random()*.2,{vy:.5+Math.random()*.6,vx:(Math.random()-.5)*.3})}function Cm(h,g){for(let x=0;x<14;x++)no(Am,h+(Math.random()-.5)*1.1,1.2+Math.random()*.4,g+(Math.random()-.5)*.6,.09,{vy:-1.6-Math.random(),omur:.8})}function Fd(h,g,x,S=40){let A=["#C9233F","#E8577A","#F7A8BE","#f5a524","#9C7BD3","#5b9e5a"];for(let N=0;N<S;N++){let G=Math.random()*6.283,W=1+Math.random()*1.6;no(Rm,h,g,x,.07,{vx:Math.cos(G)*(.5+Math.random()),vz:Math.sin(G)*(.5+Math.random()),vy:W*1.8,g:4.5,omur:1.8},A[N%A.length])}}async function Pm(h,g,x){let S=Q.hediyeler.find(A=>A.id===g.userData.id);if(S){if(!x&&S.kimden===t){bt(`\u{1F381} Bu hediye ${o[Dt.rol]} i\xE7in, o a\xE7acak`);return}await fi(h,g.position.x,g.position.z+.6,async()=>{lc(h,g.position.x,g.position.z),await h.bir("PickUp"),h.oyna("Idle");let A=g.userData.kapak,N=performance.now(),G=()=>{let W=Math.min(1,(performance.now()-N)/700);A.position.y=.26+W*.35,A.rotation.z=W*.9,W<1&&requestAnimationFrame(G)};G(),Fd(g.position.x,(S.y||0)+.4,g.position.z,50),zs(g.position.x,g.position.z,10,1.1),!x&&(S.acildi=Date.now(),S.acan=t,setTimeout(()=>{Ve()},1600),ot(5,"Hediye a\xE7t\u0131n \u{1F381}"),Bd(S))})}}let io=[["\u{1F337}","Lale","#C9233F"],["\u{1F36B}","\xC7ikolata","#7a4a2c"],["\u{1F48C}","Mektup","#E8577A"],["\u{1F9F8}","Ay\u0131c\u0131k","#c99561"],["\u2615","Kahve","#34131F"],["\u{1F48D}","S\xFCrpriz","#9C7BD3"]];function Bd(h){let g=io.find(S=>S[0]===h.tur)||io[0],x=qt("#leKart");x.replaceChildren(Ae("div",{class:"le-kart-ic"},Ae("span",{class:"le-kart-em"},g[0]),Ae("small",null,`${o[r(h.kimden)||"A"]} sana ${g[1].toLocaleLowerCase("tr")} b\u0131rakt\u0131`),Ae("p",null,h.not||"\u{1F90D}"),Ae("em",null,kd(new Date(h.at).toISOString().slice(0,10))),Ae("button",{type:"button",onclick:()=>x.classList.remove("on")},"Kapat \u{1F90D}"))),x.classList.add("on")}function zd(){let h=qt("#leHediye"),g=io[0],x=Q.hediyeler.filter(W=>W.kimden===t&&!W.acildi),S=Q.hediyeler.filter(W=>W.kimden!==t).slice(-6).reverse(),A=Ae("textarea",{rows:3,maxlength:160,placeholder:`${o[Dt.rol]} hediyeyi a\xE7\u0131nca bunu okuyacak\u2026`}),N=Ae("div",{class:"le-turlar"},...io.map(W=>{let me=Ae("button",{type:"button",class:W===g?"on":"",onclick:()=>{g=W,N.querySelectorAll("button").forEach(Ee=>Ee.classList.remove("on")),me.classList.add("on")}},Ae("span",null,W[0]),W[1]);return me})),G=Ae("button",{type:"button",class:"le-ana"},"Hediyeyi b\u0131rak \xB7 \u{1F337} 10");G.onclick=()=>{if(x.length>=3){bt("\u{1F381} A\xE7\u0131lmam\u0131\u015F 3 hediyen var, \xF6nce onlar\u0131 a\xE7s\u0131n");return}if(!Mn(10))return;let W=[...Tt.values()].find(Je=>Je.userData.ustY),me,Ee,We=0;W&&!Q.hediyeler.some(Je=>!Je.acildi&&Je.y)?(me=W.position.x+.42,Ee=W.position.z+.05,We=W.userData.ustY):(me=gt.g.position.x+.5,Ee=gt.g.position.z+.3),Q.hediyeler.push({id:"h"+Date.now().toString(36),kimden:t,tur:g[0],renk:g[2],not:A.value.trim(),x:me,z:Ee,y:We,r:Math.random()*1.5,at:Date.now()}),Q.hediyeler=Q.hediyeler.slice(-30),Ve(),h.classList.remove("on"),bt(`\u{1F381} Hediye b\u0131rak\u0131ld\u0131, ${o[Dt.rol]} a\xE7\u0131nca haberin olacak`),zs(me,Ee,6,1)},h.replaceChildren(...[Ae("div",{class:"le-sh"},Ae("h3",null,"Hediye b\u0131rak"),Ae("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),Ae("p",{class:"le-sub"},`${o[Dt.rol]} oyuna girince sehpada bulacak. A\xE7\u0131nca konfeti patlar, notunu okur.`),N,A,G,S.length?Ae("div",{class:"le-gecmis"},Ae("p",{class:"le-sub"},"Sana gelen hediyeler"),...S.map(W=>Ae("button",{type:"button",class:"le-gh",onclick:()=>W.acildi&&Bd(W)},Ae("span",null,W.tur),Ae("b",null,W.not?W.not.slice(0,40)+(W.not.length>40?"\u2026":""):"Notsuz"),Ae("em",null,W.acildi?"\u2713":"evde, a\xE7\u0131lmad\u0131")))):null].filter(Boolean)),h.classList.add("on")}let Hs=null,so=!1,ro=0,cc=[["Yal\u0131n \xB7 Yeniden","muzik/yeniden.mp3.bin"],["Yal\u0131n \xB7 Ben Bilmem","muzik/ben-bilmem.mp3.bin"]];async function Im(){if(!s.decUrl){bt("M\xFCzik i\xE7in siteden giri\u015F gerekli");return}if(so){Hs.pause(),so=!1,ro=(ro+1)%cc.length,bt("\u23F8 M\xFCzik durdu");return}try{Hs=Hs||new Audio,Hs.loop=!0,Hs.src=await s.decUrl(cc[ro][1]),await Hs.play(),so=!0,bt("\u{1F3B5} "+cc[ro][0])}catch{bt("M\xFCzik a\xE7\u0131lamad\u0131")}}async function ao(h,g,x){if(g==="saril")return x?void 0:(jr&&na(!1),ds.request(h));if(!h.hugLock){if(g==="sevin")await to(h),zs(h.g.position.x,h.g.position.z,6),await h.bir("Cheer"),h.oyna("Idle");else if(g==="selam")await to(h),await h.bir("Interact"),h.oyna("Idle");else if(g==="kos"){let S=ie.x0+1+Math.random()*7,A=we+.6+Math.random()*2.6;await fi(h,S,A,null,!0)}x||jn({t:"emote",tur:g})}}let jr=!1,Gs=!1,pi=new ae(new Fa(.5,.56,48),new Wt({color:"#E8577A",transparent:!0,opacity:.9,depthWrite:!1}));pi.rotation.x=-Math.PI/2,pi.position.y=.03,pi.visible=!1,c.add(pi);function oo(){vt=null,Gs=!1,pi.visible=!1,ta()}function Yr(h){vt=h,Gs=!1;let g=h.userData.kutu;pi.position.set((g.x0+g.x1)/2,.03,(g.z0+g.z1)/2),pi.scale.setScalar(Math.max(g.x1-g.x0,g.z1-g.z0)*.95+.3),pi.visible=!0,ta()}let hc=h=>Q.esyalar.find(g=>g.id===h.userData.id);function uc(h,g){let x=g.userData.kutu,S=x.x1-x.x0,A=x.z1-x.z0,N=h.x+((x.x0+x.x1)/2-g.position.x),G=h.z+((x.z0+x.z1)/2-g.position.z),W={x0:N-S/2,x1:N+S/2,z0:G-A/2,z1:G+A/2},me=B(g.position.x);if(W.x0<me.ox-Ce.w/2+.05||W.x1>me.ox+Ce.w/2-.05||W.z0<-Ce.d/2+.05||W.z1>Ce.d/2+.2||B(h.x)!==me)return"Odan\u0131n d\u0131\u015F\u0131na ta\u015F\u0131yor";if(g.userData.zemin)return"";for(let Ee of Tt.values()){if(Ee===g||Ee.userData.zemin)continue;let We=Ee.userData.kutu;if(W.x0<We.x1-.02&&W.x1>We.x0+.02&&W.z0<We.z1-.02&&W.z1>We.z0+.02)return"Burada ba\u015Fka e\u015Fya var"}return""}function Hd(h,g){let x=B(h),S=x.ox-Ce.w/2,A=(N,G,W)=>Math.max(G,Math.min(W,N));return h-S<g+Ce.d/2?{x:S+.12,z:Math.round(A(g,-Ce.d/2+1,Ce.d/2-1.2)*4)/4,r:Math.PI/2}:{x:Math.round(A(h,S+1,x.ox+Ce.w/2-1)*4)/4,z:-Ce.d/2+.12,r:0}}function Dm(h,g){let x=hc(vt);if(!x)return;if(vt.userData.asili){Object.assign(x,Hd(h,g)),Si(vt,x),Ve(),Yr(vt),bt("\u2713 Duvara as\u0131ld\u0131");return}let S={x:Math.round(h*4)/4,z:Math.round(g*4)/4},A=uc(S,vt);if(A){bt("\u{1F645} "+A);return}Object.assign(x,S),Ve(),Yr(vt),bt("\u2713 Yerle\u015Fti")}function Lm(){let h=hc(vt);if(!h)return;if(vt.userData.asili){bt("\u{1F5BC}\uFE0F Duvar s\xFCs\xFC: ta\u015F\u0131y\u0131nca en yak\u0131n duvara as\u0131l\u0131r");return}let g=h.r||0;if(h.r=(g+Math.PI/2)%(Math.PI*2),Si(vt,h),uc(h,vt)){h.r=g,Si(vt,h),bt("\u{1F645} D\xF6nd\xFCr\xFCnce s\u0131\u011Fm\u0131yor");return}Ve(),Yr(vt)}function km(){let h=hc(vt);h&&(Q.esyalar=Q.esyalar.filter(g=>g!==h),Q.depo.push(h.t),oo(),Ve(),bt("\u{1F4E6} Depoya kald\u0131r\u0131ld\u0131"))}function Nm(h){let[g,x]=[gt.g.position.x,gt.g.position.z],S=B(g).ox;h.position.x=S;for(let A=0;A<8;A+=.5)for(let N=0;N<16;N++){let G=Math.max(S-3.8,Math.min(S+3.8,g+Math.cos(N/16*6.283)*A)),W=Math.max(-3,Math.min(3,x+Math.sin(N/16*6.283)*A)),me={x:Math.round(G*4)/4,z:Math.round(W*4)/4};if(!uc(me,h))return me}return null}function dc(h,g){let x=ze[h];if(!x)return;if(g&&Ze()<x[2]){bt(`\u{1F337} ${x[2]} lale puan\u0131 laz\u0131m, ${Ze()} var`);return}let S={id:"e"+Date.now().toString(36),t:h,x:0,z:0,r:0},A=Wn(S),N=A.userData.asili?Hd(gt.g.position.x,gt.g.position.z):Nm(A);if(!N){c.remove(A),Tt.delete(S.id),bt("\u{1F645} Odada yer kalmad\u0131, bir \u015Feyi depoya kald\u0131r");return}if(g)Mn(x[2]);else{let G=Q.depo.indexOf(h);G>=0&&Q.depo.splice(G,1)}Object.assign(S,N),Si(A,S),Q.esyalar.push(S),Ve(),gc(),na(!0),Yr(A),Gs=!0,ta(),bt("Yeni yerine dokun \xB7 \u21BB ile \xE7evir")}let Um=h=>new k(h.ox,.6,h.id==="salon"?1.6:0),Om=m.position.x;function fc(h,g){let x=Um(h),S=p.position.clone().sub(_.target);g?(_.target.copy(x),p.position.copy(x).add(S)):Rn={t0:performance.now(),sure:700,ft:_.target.clone(),fp:p.position.clone(),tt:x,tp:x.clone().add(S)},m.position.x=Om+h.ox,m.target.position.x=h.ox,xe.visible=h.id==="salon",Fs(),lo()}function Fm(h){let g=qt("#lePerde");if(!g)return h();g.classList.add("on"),setTimeout(()=>{h(),setTimeout(()=>g.classList.remove("on"),120)},280)}async function Vs(h,g,x){if(h.hugLock)return;let S=w.find(N=>N.id===g);if(!S)return;if(!$e(g)){x||Kr();return}if(B(h.g.position.x)===S){h===gt&&fc(S);return}h.token=(h.token||0)+1,h.path=[],h.sonra=null;let A=async()=>{h.durum!=="ayakta"&&(h.durum="ayakta",h.yer=null,h.oyna("Idle")),h.g.position.set(S.ox-Ce.w/2+.75,0,S.id==="teras"?2.4:2.2),h.g.rotation.y=Math.PI/2,h===gt&&fc(S,!0)};h===gt?Fm(A):await A(),x||(jn({t:"oda",id:g}),ho()),h===gt&&setTimeout(()=>bt(`${S.em} ${S.ad}`),400)}async function Gd(h){let g=w.find(S=>S.id===h);if(!g||$e(h)||!Mn(g.fiyat))return;h==="mutfak"&&await ue(),Q.odalar=Q.odalar||{},Q.odalar[h]=!0,(Ie[h]||[]).forEach(([S,A,N,G],W)=>Q.esyalar.push({id:"o"+h+W+Date.now().toString(36).slice(-3),t:S,x:g.ox+A,z:N,r:G})),Ve(),Fd(gt.g.position.x,1.5,gt.g.position.z,60),bt(`\u{1F389} ${g.ad} a\xE7\u0131ld\u0131!`);let x=qt("#leOdaSec");x&&x.classList.remove("on"),gc(),setTimeout(()=>Vs(gt,h),900)}function lo(){let h=qt("#leOdalar");if(!h||!qe)return;let g=B(gt.g.position.x).id,x=B(Dt.g.position.x).id;h.replaceChildren(...w.map(S=>Ae("button",{type:"button",class:(S.id===g?"on ":"")+($e(S.id)?"":"kilit"),onclick:()=>$e(S.id)?Vs(gt,S.id):Kr()},S.em+" "+S.ad,$e(S.id)?S.id===x&&Dt.online?Ae("i",{class:"o"},o[Dt.rol][0]):null:Ae("i",null,"\u{1F512}"))))}function Kr(){let h=qt("#leOdaSec");h.replaceChildren(Ae("div",{class:"le-sh"},Ae("h3",null,"Evimiz"),Ae("span",{class:"le-pp"},"\u{1F337} "+Ze()),Ae("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),Ae("p",{class:"le-sub"},"Odalara git ya da lale puan\u0131yla yeni oda a\xE7. Her odan\u0131n kendine \xF6zel \u015Feyleri var."),Ae("div",{class:"le-odalist"},...w.map(g=>Ae("div",{class:"le-oda"+($e(g.id)?"":" kilit")},Ae("span",null,g.em),Ae("div",null,Ae("b",null,g.ad),Ae("small",null,{salon:"Koltuk, pikap, bah\xE7e ve laleler",yatak:'\xC7ift ki\u015Filik yatak, foto\u011Fraflar\u0131m\u0131z \xB7 birlikte yat\u0131nca "\u0130yi geceler"',mutfak:"Ocakta yemek pi\u015Fir, birlikte ye, semaverde \xE7ay demle, buzdolab\u0131na not as",teras:"\u0130stanbul manzaras\u0131, ip lambalar, teleskopla kayan y\u0131ld\u0131za dilek tut"}[g.id])),$e(g.id)?Ae("button",{type:"button",class:"le-git",onclick:()=>{h.classList.remove("on"),Vs(gt,g.id)}},B(gt.g.position.x)===g?"Buradas\u0131n":"Git"):Ae("button",{type:"button",class:"le-git ac"+(Ze()<g.fiyat?" pahali":""),onclick:()=>Gd(g.id)},`A\xE7 \xB7 \u{1F337} ${g.fiyat}`))))),h.classList.add("on")}let Vd=new Fl,Wd=new oe,Zr=null;l.domElement.addEventListener("pointerdown",h=>{Zr=[h.clientX,h.clientY,performance.now()],Rn&&!Rn.geri&&(Rn=null)});let co=h=>{let g=h.object;for(;g;){if(he.has(g)||_t.includes(g)||wi.includes(g)||lt.includes(g)||Sn.has(g.userData&&g.userData.id)||Tt.get(g.userData&&g.userData.id)===g||g===qe.A.g||g===qe.B.g)return g;g=g.parent}return null};l.domElement.addEventListener("pointerup",h=>{if(!Zr||Math.hypot(h.clientX-Zr[0],h.clientY-Zr[1])>8||performance.now()-Zr[2]>450)return;let g=l.domElement.getBoundingClientRect();Wd.set((h.clientX-g.left)/g.width*2-1,-(h.clientY-g.top)/g.height*2+1),Vd.setFromCamera(Wd,p);let x=Vd.intersectObjects([...Tt.values(),...wi,...lt,...Sn.values(),qe.A.g,qe.B.g,..._t,...he],!0);if(jr){let S=x.find(N=>he.has(co(N)));if(vt&&Gs){S&&Dm(S.point.x,S.point.z);return}let A=x.find(N=>{let G=co(N);return G&&Tt.get(G.userData.id)===G});A?Yr(co(A)):oo();return}for(let S of x){let A=co(S);if(A){if(A===qe.A.g||A===qe.B.g){let N=A===qe.A.g?qe.A:qe.B;if(N===gt){Jr(N.g.position.x,N.boy*.6,N.g.position.z,4.6);return}ao(gt,"saril");return}if(he.has(A)){if(B(S.point.x)!==B(gt.g.position.x))return;fi(gt,S.point.x,S.point.z,()=>ho()),Xd(S.point.x,S.point.z),jn({t:"git",x:S.point.x,z:S.point.z});return}if(A.userData.act){Xr(gt,A),Xd(A.position.x,A.position.z);return}}}});let mi=new ae(new Fa(.18,.26,32),new Wt({color:"#E8577A",transparent:!0,opacity:0,depthWrite:!1}));mi.rotation.x=-Math.PI/2,mi.position.y=.02,c.add(mi);function Xd(h,g){mi.position.x=h,mi.position.z=g,mi.material.opacity=.9,mi.scale.setScalar(.6)}let Rn=null;function Jr(h,g,x,S=5.2,A=.9,N=0){let G=p.position.clone().sub(_.target).normalize().multiplyScalar(S),W=N?{t:_.target.clone(),p:p.position.clone()}:null;Rn={t0:performance.now(),sure:A*1e3,ft:_.target.clone(),fp:p.position.clone(),tt:new k(h,g,x),tp:new k(h,g,x).add(G),geri:N,eski:W}}function Bm(){if(!Rn)return;let h=Math.min(1,(performance.now()-Rn.t0)/Rn.sure),g=h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;if(_.target.lerpVectors(Rn.ft,Rn.tt,g),p.position.lerpVectors(Rn.fp,Rn.tp,g),h>=1){let x=Rn;Rn=null,x.geri&&x.eski&&setTimeout(()=>{Rn={t0:performance.now(),sure:900,ft:_.target.clone(),fp:p.position.clone(),tt:x.eski.t,tp:x.eski.p}},x.geri*1e3)}}let zm=()=>{let h=B(gt.g.position.x);Jr(h.ox,.6,h.id==="salon"?1.6:0,p.aspect<1?h.id==="salon"?24:20:h.id==="salon"?19:16)},$r=h=>({x:+h.g.position.x.toFixed(2),z:+h.g.position.z.toFixed(2),r:+h.g.rotation.y.toFixed(2),d:h.durum,yer:h.yer?{id:h.yer.m.userData.id}:null});function jn(h){ft&&ft.send({type:"broadcast",event:"m",payload:Object.assign({who:t,rol:a},h)})}let qd=h=>Tt.get(h)||wi.find(g=>g.userData.id===h)||lt.find(g=>g.userData.id===h)||Sn.get(h);function jd(h,g,x){if(!h.hugLock&&g){if(g.yer){let S=qd(g.yer.id);if(S){x&&h.g.position.set(g.x,0,g.z),Xr(h,S,!0);return}}x?(h.g.position.set(g.x,0,g.z),h.g.rotation.y=g.r||0):fi(h,g.x,g.z)}}let Yd=0;function ho(){je||(clearTimeout(Yd),Yd=setTimeout(()=>{i.from("state").upsert({scope:"oyun",id:t,value:Object.assign($r(gt),{at:new Date().toISOString()})},{onConflict:"scope,id"}).then(()=>{},()=>{})},1200))}addEventListener("pagehide",()=>{je||i.from("state").upsert({scope:"oyun",id:t,value:Object.assign($r(gt),{at:new Date().toISOString()})},{onConflict:"scope,id"})});function uo(h,g){Dt.online=h,Dt.tag.classList.toggle("off",!h),Dt.tag.querySelector("i").textContent=h?"":g?"\u{1F4A4}":"";let x=qt("#leDurum");x&&(x.textContent=h?`${o[Dt.rol]} ${B(Dt.g.position.x).yer} \u{1F7E2}`:`${o[Dt.rol]} \u015Fu an yok`+(g?" \xB7 "+g:""),x.classList.toggle("on",h)),h&&ot(10,`${o[Dt.rol]} ile ayn\u0131 anda evdesiniz \u{1F3E1}`,"birlikte")}let Kd=h=>{let g=(Date.now()-Date.parse(h))/6e4;return g>=0?g<2?"az \xF6nce":g<60?Math.round(g)+" dk \xF6nce":g<1440?Math.round(g/60)+" sa \xF6nce":Math.round(g/1440)+" g\xFCn \xF6nce":""};if(je)try{let h=JSON.parse(localStorage.getItem("le-ev")||"null");h&&h.esyalar&&(Q=h);let g=JSON.parse(localStorage.getItem("le-puan")||"null");g&&(Ge[t]=g)}catch{}else try{let{data:h}=await i.from("state").select("scope,id,value").in("scope",["oyun_ev","oyun_puan"]);(h||[]).forEach(g=>{g.scope==="oyun_ev"&&g.value&&g.value.esyalar&&(Q=g.value),g.scope==="oyun_puan"&&(Ge[g.id.toLowerCase()]=g.value||{})})}catch{}if(Ge[t]||(Ge[t]={kazanc:30}),Q.odalar&&Q.odalar.mutfak)try{await ue()}catch{}Q.esyalar=Q.esyalar.filter(h=>ze[h.t]),Q.depo=(Q.depo||[]).filter(h=>ze[h]),delete Q.kedi;let Zd=!1;if(Q.bizim1||(Q.bizim1=!0,Q.depo.push("neon_isim","polaroid_ip","tarih_cerceve"),Zd=!0),gn(),je)uo(!1,"");else{try{let{data:h}=await i.from("state").select("id,value").eq("scope","oyun"),g=null;(h||[]).forEach(S=>{let A=S.id.toLowerCase(),N=A===t?gt:Dt;A!==t&&(g=S.value&&S.value.at),jd(N,S.value,!0)});let x=[...Tt.values()].find(S=>S.userData.act==="yat");if(g&&Date.now()-Date.parse(g)>30*6e4&&x){let S=Ld(Dt,x);Dt.g.position.set(S.cik[0],0,S.cik[1]),Xr(Dt,x,!0)}uo(!1,g?Kd(g):"")}catch{}try{ft=i.channel("lale-evi",{config:{presence:{key:t},broadcast:{self:!1}}}),ft.on("broadcast",{event:"m"},({payload:h})=>{if(!h||h.who===t)return;let g=qe[h.rol]||Dt;if(h.t==="hug"){ds.receive(h.plan,h.rol);return}if(h.t==="git")B(h.x)!==B(g.g.position.x)?Vs(g,B(h.x).id,!0).then(()=>fi(g,h.x,h.z)):fi(g,h.x,h.z);else if(h.t==="oda")Vs(g,h.id,!0),lo();else if(h.t==="kullan"){let x=qd(h.id);x&&Xr(g,x,!0)}else if(h.t==="emote")ao(g,h.tur,!0);else if(h.t==="selam?")jn(Object.assign({t:"durum"},$r(gt)));else if(h.t==="durum")jd(g,h,!1);else if(h.t==="ev"&&h.ev&&h.ev.esyalar){let x=(h.ev.hediyeler||[]).filter(S=>!S.acildi&&S.kimden!==t&&!Q.hediyeler.some(A=>A.id===S.id));Q=h.ev,gn(),x.length&&bt(`\u{1F381} ${o[Dt.rol]} sana hediye b\u0131rakt\u0131!`)}else h.t==="puan"&&h.v&&(Ge[h.who]=h.v,ea())}),ft.on("presence",{event:"sync"},()=>{let h=ft.presenceState();uo(Object.keys(h).some(g=>g!==t),"")}),ft.on("presence",{event:"join"},({key:h})=>{h!==t&&(bt(`${o[Dt.rol]} eve geldi \u{1F3E1}`),jn(Object.assign({t:"durum"},$r(gt))))}),ft.on("presence",{event:"leave"},({key:h})=>{h!==t&&(ds.cancel(),uo(!1,"az \xF6nce"))}),ft.subscribe(h=>{h==="SUBSCRIBED"&&(ft.track({at:Date.now()}),jn({t:"selam?"}))})}catch{ft=null}}fc(B(gt.g.position.x),!0),setInterval(()=>{if(lo(),Dt.online){let h=qt("#leDurum");h&&(h.textContent=`${o[Dt.rol]} ${B(Dt.g.position.x).yer} \u{1F7E2}`)}},2500);{let h=Q.hediyeler.filter(g=>!g.acildi&&g.kimden!==t);h.length&&setTimeout(()=>bt(`\u{1F381} Sehpada senin i\xE7in ${h.length>1?h.length+" hediye":"bir hediye"} var!`),3200)}let Qr={soru:!1,duygu:!1,not:!1};async function Hm(){if(je)return;let h=He();try{let g=await i.from("soru_cevap").select("day").eq("day",h).eq("author",t);Qr.soru=!!(g.data&&g.data.length)}catch{}try{((await i.from("state").select("scope,updated_at").in("scope",["duygu","not"]).eq("updated_by",t).gte("updated_at",h+"T00:00:00+03:00")).data||[]).forEach(x=>{Qr[x.scope]=!0})}catch{}Qr.soru&&ot(10,"G\xFCn\xFCn sorusunu cevaplad\u0131n \u2753","soru"),Qr.duygu&&ot(5,"Duygunu se\xE7tin \u{1F3A8}","duygu"),Qr.not&&ot(5,"Not b\u0131rakt\u0131n \u{1F4CC}","not"),ni()}let Jd=()=>{let h=st(),g=h.al||{},x=Q.bahce.filter(N=>N.ekim&&Y(N)<3&&Date.now()-(N.su||0)>12*H).length,S=Q.bahce.filter(N=>Y(N)===3).length,A=Q.hediyeler.filter(N=>!N.acildi&&N.kimden!==t).length;return[["\u{1F3E1}","Eve u\u011Fra",10,!!g.giris],["\u2753","Sitede g\xFCn\xFCn sorusunu cevapla",10,!!g.soru],["\u{1F3A8}","Sitede bug\xFCnk\xFC duygunu se\xE7",5,!!g.duygu],["\u{1F4CC}",`${o[Dt.rol]} i\xE7in sitede not b\u0131rak`,5,!!g.not],["\u{1F4A7}",x?`${x} lale su bekliyor`:"Laleleri sula","1 / lale",x===0&&Q.bahce.some(N=>N.ekim)],["\u{1F337}",S?`${S} lale a\xE7t\u0131, topla!`:"A\xE7an laleyi topla",15,!1],["\u{1F381}",A?`Sehpada ${A} hediye var, a\xE7!`:"Hediye gelirse a\xE7",5,A===0],["\u{1F917}",`Sar\u0131l (${g.saril||0}/5)`,3,(g.saril||0)>=5],["\u{1F6CB}\uFE0F","Ayn\u0131 koltukta yan yana otur",10,!!g.yanyana],["\u{1F3E0}",`${o[Dt.rol]} ile ayn\u0131 anda evde ol`,10,!!g.birlikte],...$e("mutfak")?[["\u{1F373}","Mutfakta yemek pi\u015Fir",5,!!g.pisir],["\u{1F60B}","Mutfak masas\u0131nda birlikte ye",15,!!g.yemek],["\u{1FAD6}","Semaverde \xE7ay demle",2,!!g.cay]]:[["\u{1F373}","Mutfa\u011F\u0131 a\xE7 (Evimiz)","",!1]],...$e("yatak")?[["\u{1F319}",'Ayn\u0131 yatakta "iyi geceler"',10,!!g.iyigece]]:[],...$e("teras")?[["\u{1F320}","Terasta teleskopla dilek tut",3,!!g.yildiz]]:[]]};function ni(){let h=qt("#leIsBtn");if(h){let g=Jd().filter(S=>!S[3]).length,x=h.querySelector("i");x&&(x.textContent=g||"\u2713")}qt("#leIsler")&&qt("#leIsler").classList.contains("on")&&pc()}function pc(){let h=qt("#leIsler");h.replaceChildren(Ae("div",{class:"le-sh"},Ae("h3",null,"G\xFCn\xFCn i\u015Fleri"),Ae("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),Ae("p",{class:"le-sub"},`Ortak lale puan\u0131n\u0131z: \u{1F337} ${Ze()} \xB7 Toplanan lale: ${Q.toplanan||0}`),Ae("ul",{class:"le-is"},...Jd().map(([g,x,S,A])=>Ae("li",{class:A?"ok":""},Ae("span",null,g),Ae("b",null,x),Ae("em",null,A?"\u2713":"+"+S)))),Ae("p",{class:"le-sub"},"Puanlar ikinizin ortak kumbaras\u0131. Ma\u011Fazadan e\u015Fya al\u0131n, bah\xE7eye lale ekin, birbirinize hediye b\u0131rak\u0131n.")),h.classList.add("on")}let mc="Bizim";function gc(){let h=qt("#leMagaza");h&&h.classList.remove("on")}function bc(){let h=qt("#leMagaza"),g=[...new Set(Object.values(ze).map(S=>S[3]))].filter(S=>S!=="Mutfak"||Me.m_fridge_A_decorated),x={};Q.depo.forEach(S=>{x[S]=(x[S]||0)+1}),h.replaceChildren(...[Ae("div",{class:"le-sh"},Ae("h3",null,"Ma\u011Faza"),Ae("span",{class:"le-pp"},"\u{1F337} "+Ze()),Ae("button",{type:"button",class:"le-x",onclick:gc},"\xD7")),Object.keys(x).length?Ae("div",{class:"le-depo"},Ae("p",{class:"le-sub"},"\u{1F4E6} Depoda"),Ae("div",{class:"le-grid"},...Object.entries(x).map(([S,A])=>Ae("button",{type:"button",class:"le-urun",onclick:()=>dc(S,!1)},Ae("span",null,ze[S][0]),Ae("b",null,ze[S][1]+(A>1?" \xD7"+A:"")),Ae("em",null,"Yerle\u015Ftir"))))):null,Ae("div",{class:"le-tabs"},...g.map(S=>Ae("button",{type:"button",class:S===mc?"on":"",onclick:()=>{mc=S,bc()}},S))),Ae("div",{class:"le-grid"},...Object.entries(ze).filter(([,S])=>S[3]===mc).map(([S,A])=>Ae("button",{type:"button",class:"le-urun"+(Ze()<A[2]?" pahali":""),onclick:()=>dc(S,!0)},Ae("span",null,A[0]),Ae("b",null,A[1]),Ae("em",null,"\u{1F337} "+A[2]))))].filter(Boolean)),h.classList.add("on")}function bt(h){let g=qt("#leIpucu");g&&(g.textContent=h,g.classList.add("on"),clearTimeout(g._t),g._t=setTimeout(()=>g.classList.remove("on"),2800))}function Gm(h,g){let x=qt("#lePuan");x&&(x.classList.remove("pop"),x.offsetWidth,x.classList.add("pop")),bt(`+${h} \u{1F337} ${g}`)}function ea(){let h=qt("#lePuan");h&&(h.textContent="\u{1F337} "+Ze())}function ta(){let h=qt("#leDuzen");if(!h)return;h.hidden=!jr;let g=vt?ze[vt.userData.tip]:null;h.replaceChildren(vt&&g?Ae("div",{class:"le-dz"},Ae("b",null,g[0]+" "+g[1]),Ae("button",{type:"button",onclick:()=>{Gs=!0,ta(),bt("Yeni yerine dokun")},class:Gs?"on":""},"\u270B Ta\u015F\u0131"),Ae("button",{type:"button",onclick:Lm},"\u21BB \xC7evir"),Ae("button",{type:"button",onclick:km},"\u{1F4E6} Kald\u0131r")):Ae("div",{class:"le-dz"},Ae("b",null,"Bir e\u015Fyaya dokun")),Ae("button",{type:"button",class:"le-bitti",onclick:()=>na(!1)},"\u2713 Bitti"))}function na(h){ds.busy||(jr=h,document.body.classList.toggle("le-duzende",h),h?(gt.path=[],ta(),vt||bt("D\xFCzenleme: e\u015Fyaya dokun, sonra ta\u015F\u0131 veya \xE7evir")):oo())}let Vi=(h,g)=>{let x=qt(h);x&&(x.onclick=g)};document.querySelectorAll("[data-emote]").forEach(h=>h.onclick=()=>{ao(gt,h.dataset.emote);let g=qt("#leSevgi");g&&g.classList.remove("on")}),Vi("#leSevgiBtn",()=>{let h=qt("#leSevgi");h&&h.classList.toggle("on")}),Vi("#leMagazaBtn",bc),Vi("#leDuzenBtn",()=>na(!jr)),Vi("#leIsBtn",pc),Vi("#leHediyeBtn",zd),Vi("#leKameraBtn",zm),Vi("#leEvBtn",Kr),ea(),setTimeout(()=>{ot(10,"Eve ho\u015F geldin","giris"),Hm(),ni()},1500),setInterval(()=>{wi.forEach((h,g)=>Te(h,Q.bahce[g])),ni()},6e4),Zd&&(Ve(),setTimeout(()=>bt("\u{1F381} Depoya 3 ki\u015Fisel e\u015Fya geldi \xB7 Ma\u011Faza \u2192 \u{1F4E6} Depoda"),3500)),bt("Dokun, y\xFCr\xFC. E\u015Fyalara, bah\xE7eye ve duvardaki foto\u011Fraflara dokun \u{1F337}");let _c=/Android|iPhone|iPad/i.test(navigator.userAgent),fs="yuksek";try{fs=localStorage.getItem("le-kalite")||((navigator.hardwareConcurrency||4)<4?"dusuk":"yuksek")}catch{}let ps=new tc(l);ps.setPixelRatio(Math.min(_c?1.5:2,devicePixelRatio||1)),ps.addPass(new nc(c,p));let fo=new Za(c,p,300,300);fo.blendIntensity=.85,fo.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.2,scale:1,samples:_c?10:16}),fo.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:_c?8:16}),ps.addPass(fo),ps.addPass(new Gr(new oe(300,300),d?.55:.12,.4,d?.7:1.05)),ps.addPass(new rc);function po(h){fs=h;try{localStorage.setItem("le-kalite",h)}catch{}let g=qt("#leKalite");g&&(g.textContent=h==="yuksek"?"\u2728":"\u26A1");let x=h==="yuksek"?2048:1024;m.shadow.mapSize.set(x,x),m.shadow.map&&(m.shadow.map.dispose(),m.shadow.map=null)}Vi("#leKalite",()=>{po(fs==="yuksek"?"dusuk":"yuksek"),bt(fs==="yuksek"?"\u2728 Y\xFCksek g\xF6r\xFCnt\xFC kalitesi":"\u26A1 H\u0131zl\u0131 mod (pil dostu)")}),po(fs);let $d=0,xc=0,Qd=fs==="yuksek"&&!window.__leHiz;function Vm(h){if(Qd&&($d++,xc+=h,xc>4)){let g=$d/xc;Qd=!1,g<24&&(po("dusuk"),bt("\u26A1 Telefonun i\xE7in h\u0131zl\u0131 moda ge\xE7tim \xB7 \u2728 ile de\u011Fi\u015Ftirebilirsin"))}}let Wm=new Ur,mo=new k,ef=!0;function Xm(h,g,x,S){mo.set(g,x,S).project(p);let A=l.domElement.getBoundingClientRect();h.style.transform=`translate(${(mo.x*.5+.5)*A.width}px, ${(-mo.y*.5+.5)*A.height}px) translate(-50%,-100%)`,h.style.visibility=mo.z<1?"visible":"hidden"}function tf(){let h=e.clientWidth,g=e.clientHeight;l.setSize(h,g,!1),ps.setSize(h,g),p.aspect=h/g,p.fov=h<g?42:30,p.updateProjectionMatrix(),ef&&(ef=!1,h<g&&p.position.set(10.5,14.5,15.5))}return new ResizeObserver(tf).observe(e),tf(),l.setAnimationLoop(()=>{let h=Math.min(.1,Wm.getDelta()),g=performance.now()/1e3,x=window.__leHiz||1;ds.beforeFrame();for(let A of[qe.A,qe.B]){if(A.path.length&&A.durum==="ayakta"){let[N,G]=A.path[0],W=A.g.position,me=N-W.x,Ee=G-W.z,We=Math.hypot(me,Ee);if(We<.05){if(A.path.shift(),!A.path.length){A.kosu=!1,A.oyna("Idle");let Je=A.sonra;A.sonra=null,Je&&Je()}}else{let Je=Math.min(We,(A.kosu?A.hiz*1.7:A.hiz)*h);W.x+=me/We*Je,W.z+=Ee/We*Je,A.g.rotation.y=oM(A.g.rotation.y,Math.atan2(me,Ee),Math.min(1,h*12))}}A.mixer.update(h*x),Xm(A.tag,A.g.position.x,A.g.position.y+(A.durum==="yatiyor"?.9:A.durum==="oturuyor"||A.durum==="yerde"?A.boy*.82+.15:A.boy+.25),A.g.position.z)}ds.afterFrame();for(let A=qr.length-1;A>=0;A--){let N=qr[A],G=N.userData;G.t+=h,G.vy-=G.g*h,N.position.x+=G.vx*h,N.position.y+=G.vy*h,N.position.z+=G.vz*h,N.material.opacity=Math.max(0,1-G.t/G.omur),(G.t>G.omur||N.position.y<-.2)&&(c.remove(N),N.material.dispose(),qr.splice(A,1))}mi.material.opacity>0&&(mi.material.opacity-=h*1.5,mi.scale.multiplyScalar(1+h*1.2)),pi.visible&&(pi.material.opacity=.55+Math.sin(g*4)*.35),Tt.forEach(A=>A.userData.anim&&A.userData.anim(h,g)),Sn.forEach(A=>{let N=Q.hediyeler.find(G=>G.id===A.userData.id);N&&(A.position.y=(N.y||0)+Math.abs(Math.sin(g*2.2))*.04),A.rotation.y+=h*.3}),y.intensity+=((zt?6:0)-y.intensity)*Math.min(1,h*6),so&&Tt.forEach(A=>A.userData.plak&&A.userData.plak.forEach(N=>N.rotation.y+=h*3.5)),le.forEach((A,N)=>{A.rotation.z=Math.sin(g*.9+N*1.7)*.035,A.scale.x=1+Math.sin(g*1.3+N)*.04});let S=Ne.attributes.position;for(let A=0;A<Le;A++){let N=S.getY(A)+h*(.04+A%5*.01);N>2.6&&(N=.3),S.setY(A,N),S.setX(A,S.getX(A)+Math.sin(g*.5+A)*h*.03)}S.needsUpdate=!0,Vm(h),Bm(),_.update(),fs==="yuksek"?ps.render():l.render(c,p)}),window.__le={odaGit:Vs,odaAc:Gd,odaSecAc:Kr,ODA:w,odaOf:B,buzAc:Od,K:qe,ben:gt,o:Dt,git:fi,kullan:Xr,emote:ao,scene:c,camera:p,controls:_,EV:()=>Q,PUAN:Ge,puan:Ze,ekle:dc,duzenAc:na,magazaAc:bc,islerAc:pc,hediyeBirakAc:zd,parsel:wi,esyaObj:Tt,kazan:ot,hug:ds,duvarFoto:lt,hediyeObj:Sn,kameraOdak:Jr,kaliteAyarla:po},window.__le}window.LaleEvi={start:mm};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
