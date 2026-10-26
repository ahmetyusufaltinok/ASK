(()=>{var zu="169",Ks={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xg=0,Sf=1,yg=2;var Vp=1,vg=2,gi=3,Ti=0,Ln=1,on=2,pn=0,Rr=1,Bs=2,Ef=3,wf=4,Bu=5,ii=100,Mg=101,Sg=102,Eg=103,wg=104,$r=200,Tg=201,Ag=202,Rg=203,xh=204,yh=205,tc=206,Cg=207,nc=208,Pg=209,Ig=210,Dg=211,Lg=212,kg=213,Ng=214,vh=0,Mh=1,Sh=2,Dr=3,Eh=4,wh=5,Th=6,Ah=7,Wp=0,Ug=1,Og=2,fs=0,Hu=1,Gu=2,Vu=3,Wu=4,Fg=5,Xu=6,ro=7,Tf="attached",zg="detached",Xp=300,Lr=301,kr=302,Rh=303,Ch=304,ic=306,ln=1e3,Hi=1001,Fa=1002,fn=1003,qu=1004;var Sr=1005;var Hn=1006,Da=1007;var wi=1008;var xi=1009,qp=1010,jp=1011,za=1012,ju=1013,Hs=1014,_i=1015,Wn=1016,Yu=1017,Ku=1018,ms=1020,Yp=35902,Kp=1021,Zp=1022,Gn=1023,Jp=1024,$p=1025,Cr=1026,gs=1027,Zu=1028,Ju=1029,Qp=1030,$u=1031;var Qu=1033,ml=33776,gl=33777,bl=33778,_l=33779,Ph=35840,Ih=35841,Dh=35842,Lh=35843,kh=36196,Nh=37492,Uh=37496,Oh=37808,Fh=37809,zh=37810,Bh=37811,Hh=37812,Gh=37813,Vh=37814,Wh=37815,Xh=37816,qh=37817,jh=37818,Yh=37819,Kh=37820,Zh=37821,xl=36492,Jh=36494,$h=36495,em=36283,Qh=36284,eu=36285,tu=36286,ed=2200,Bg=2201,Hg=2202,Nr=2300,Ur=2301,Uc=2302,Er=2400,wr=2401,vl=2402,td=2500,Gg=2501,tm=0,sc=1,ao=2,Vg=3200,Wg=3201;var nd=0,Xg=1,hs="",sn="srgb",An="srgb-linear",id="display-p3",rc="display-p3-linear",Ml="linear",Xt="srgb",Sl="rec709",El="p3";var sr=7680;var Af=519,qg=512,jg=513,Yg=514,nm=515,Kg=516,Zg=517,Jg=518,$g=519,nu=35044;var Rf="300 es",Gi=2e3,wl=2001,Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cf=1234567,La=Math.PI/180,Or=180/Math.PI;function si(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function un(s,e,t){return Math.max(e,Math.min(t,s))}function sd(s,e){return(s%e+e)%e}function Qg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function e0(s,e,t){return s!==e?(t-s)/(e-s):0}function ka(s,e,t){return(1-t)*s+t*e}function t0(s,e,t,n){return ka(s,e,1-Math.exp(-t*n))}function n0(s,e=1){return e-Math.abs(sd(s,e*2)-e)}function i0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function s0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function r0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function a0(s,e){return s+Math.random()*(e-s)}function o0(s){return s*(.5-Math.random())}function l0(s){s!==void 0&&(Cf=s);let e=Cf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c0(s){return s*La}function h0(s){return s*Or}function u0(s){return(s&s-1)===0&&s!==0}function d0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function f0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function p0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*_,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*_,o*c);break;case"ZYZ":s.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ac={DEG2RAD:La,RAD2DEG:Or,generateUUID:si,clamp:un,euclideanModulo:sd,mapLinear:Qg,inverseLerp:e0,lerp:ka,damp:t0,pingpong:n0,smoothstep:i0,smootherstep:s0,randInt:r0,randFloat:a0,randFloatSpread:o0,seededRandom:l0,degToRad:c0,radToDeg:h0,isPowerOfTwo:u0,ceilPowerOfTwo:d0,floorPowerOfTwo:f0,setQuaternionFromProperEuler:p0,normalize:Ht,denormalize:bi},ue=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vt=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],_=n[8],v=i[0],b=i[3],g=i[6],w=i[1],M=i[4],E=i[7],O=i[2],L=i[5],k=i[8];return r[0]=a*v+o*w+l*O,r[3]=a*b+o*M+l*L,r[6]=a*g+o*E+l*k,r[1]=c*v+u*w+d*O,r[4]=c*b+u*M+d*L,r[7]=c*g+u*E+d*k,r[2]=f*v+p*w+_*O,r[5]=f*b+p*M+_*L,r[8]=f*g+p*E+_*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=t*d+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=d*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oc=new vt;function im(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ba(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function m0(){let s=Ba("canvas");return s.style.display="block",s}var Pf={};function yl(s){s in Pf||(Pf[s]=!0,console.warn(s))}function g0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function b0(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _0(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var If=new vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Df=new vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xa={[An]:{transfer:Ml,primaries:Sl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[sn]:{transfer:Xt,primaries:Sl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[rc]:{transfer:Ml,primaries:El,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Df),fromReference:s=>s.applyMatrix3(If)},[id]:{transfer:Xt,primaries:El,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Df),fromReference:s=>s.applyMatrix3(If).convertLinearToSRGB()}},x0=new Set([An,rc]),It={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!x0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=xa[e].toReference,i=xa[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return xa[s].primaries},getTransfer:function(s){return s===hs?Ml:xa[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(xa[e].luminanceCoefficients)}};function Pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var rr,iu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Ba("canvas")),rr.width=e.width,rr.height=e.height;let n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ba("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Pr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pr(t[n]/255)*255):t[n]=Pr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y0=0,Tl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(zc(i[a].image)):r.push(zc(i[a]))}else r=zc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function zc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?iu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var v0=0,wn=class s extends Ai{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Hi,i=Hi,r=Hn,a=wi,o=Gn,l=xi,c=s.DEFAULT_ANISOTROPY,u=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=si(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ln:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ln:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Xp;wn.DEFAULT_ANISOTROPY=1;var Ot=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],b=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-b)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+b)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,E=(p+1)/2,O=(g+1)/2,L=(u+f)/4,k=(d+v)/4,B=(_+b)/4;return M>E&&M>O?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=L/n,r=k/n):E>O?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=L/i,r=B/i):O<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(O),n=k/r,i=B/r),this.set(n,i,r,t),this}let w=Math.sqrt((b-_)*(b-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(b-_)/w,this.y=(d-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},su=class extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new wn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends su{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Al=class extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ru=class extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==p||u!==_){let b=1-o,g=l*f+c*p+u*_+d*v,w=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){let O=Math.sqrt(M),L=Math.atan2(O,g*w);b=Math.sin(b*L)/O,o=Math.sin(o*L)/O}let E=o*w;if(l=l*b+f*E,c=c*b+p*E,u=u*b+_*E,d=d*b+v*E,b===1-o){let O=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=O,c*=O,u*=O,d*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-o*p,e[t+2]=c*_+u*p+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),f=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new D,Lf=new mn,gn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Oo.subVectors(this.max,ya),ar.subVectors(e.a,ya),or.subVectors(e.b,ya),lr.subVectors(e.c,ya),ss.subVectors(or,ar),rs.subVectors(lr,or),Ds.subVectors(ar,lr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ds.z,Ds.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ds.z,0,-Ds.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ds.y,Ds.x,0];return!Hc(t,ar,or,lr,Oo)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,ar,or,lr,Oo))?!1:(Fo.crossVectors(ss,rs),t=[Fo.x,Fo.y,Fo.z],Hc(t,ar,or,lr,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ni=[new D,new D,new D,new D,new D,new D,new D,new D],fi=new D,Uo=new gn,ar=new D,or=new D,lr=new D,ss=new D,rs=new D,Ds=new D,ya=new D,Oo=new D,Fo=new D,Ls=new D;function Hc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ls.fromArray(s,r);let o=i.x*Math.abs(Ls.x)+i.y*Math.abs(Ls.y)+i.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),u=n.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var M0=new gn,va=new D,Gc=new D,$n=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):M0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);let t=va.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(va,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(Gc)),this.expandByPoint(va.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ui=new D,Vc=new D,zo=new D,as=new D,Wc=new D,Bo=new D,Xc=new D,Vi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vc.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),as.copy(this.origin).sub(Vc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(zo),o=as.dot(this.direction),l=-as.dot(zo),c=as.lengthSq(),u=Math.abs(1-a*a),d,f,p,_;if(u>0)if(d=a*l-o,f=a*o-l,_=r*u,d>=0)if(f>=-_)if(f<=_){let v=1/u;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Vc).addScaledVector(zo,f),p}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);let n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,i,r){Wc.subVectors(t,e),Bo.subVectors(n,e),Xc.crossVectors(Wc,Bo);let a=this.direction.dot(Xc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;as.subVectors(this.origin,e);let l=o*this.direction.dot(Bo.crossVectors(as,Bo));if(l<0)return null;let c=o*this.direction.dot(Wc.cross(as));if(c<0||l+c>a)return null;let u=-o*as.dot(Xc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class s{constructor(e,t,n,i,r,a,o,l,c,u,d,f,p,_,v,b){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,f,p,_,v,b)}set(e,t,n,i,r,a,o,l,c,u,d,f,p,_,v,b){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=p,g[7]=_,g[11]=v,g[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*d,_=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f+v*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*d,_=o*u,v=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){let f=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,E0)}lookAt(e,t,n){let i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),os.crossVectors(n,Kn),os.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),os.crossVectors(n,Kn)),os.normalize(),Ho.crossVectors(Kn,os),i[0]=os.x,i[4]=Ho.x,i[8]=Kn.x,i[1]=os.y,i[5]=Ho.y,i[9]=Kn.y,i[2]=os.z,i[6]=Ho.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],_=n[2],v=n[6],b=n[10],g=n[14],w=n[3],M=n[7],E=n[11],O=n[15],L=i[0],k=i[4],B=i[8],ie=i[12],S=i[1],R=i[5],Y=i[9],K=i[13],J=i[2],de=i[6],Z=i[10],ve=i[14],oe=i[3],V=i[7],F=i[11],$=i[15];return r[0]=a*L+o*S+l*J+c*oe,r[4]=a*k+o*R+l*de+c*V,r[8]=a*B+o*Y+l*Z+c*F,r[12]=a*ie+o*K+l*ve+c*$,r[1]=u*L+d*S+f*J+p*oe,r[5]=u*k+d*R+f*de+p*V,r[9]=u*B+d*Y+f*Z+p*F,r[13]=u*ie+d*K+f*ve+p*$,r[2]=_*L+v*S+b*J+g*oe,r[6]=_*k+v*R+b*de+g*V,r[10]=_*B+v*Y+b*Z+g*F,r[14]=_*ie+v*K+b*ve+g*$,r[3]=w*L+M*S+E*J+O*oe,r[7]=w*k+M*R+E*de+O*V,r[11]=w*B+M*Y+E*Z+O*F,r[15]=w*ie+M*K+E*ve+O*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],b=e[11],g=e[15];return _*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+b*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+g*(-i*o*u-t*l*d+t*o*f+i*a*d-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],b=e[14],g=e[15],w=d*b*c-v*f*c+v*l*p-o*b*p-d*l*g+o*f*g,M=_*f*c-u*b*c-_*l*p+a*b*p+u*l*g-a*f*g,E=u*v*c-_*d*c+_*o*p-a*v*p-u*o*g+a*d*g,O=_*d*l-u*v*l-_*o*f+a*v*f+u*o*b-a*d*b,L=t*w+n*M+i*E+r*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return e[0]=w*k,e[1]=(v*f*r-d*b*r-v*i*p+n*b*p+d*i*g-n*f*g)*k,e[2]=(o*b*r-v*l*r+v*i*c-n*b*c-o*i*g+n*l*g)*k,e[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*p-n*l*p)*k,e[4]=M*k,e[5]=(u*b*r-_*f*r+_*i*p-t*b*p-u*i*g+t*f*g)*k,e[6]=(_*l*r-a*b*r-_*i*c+t*b*c+a*i*g-t*l*g)*k,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*p+t*l*p)*k,e[8]=E*k,e[9]=(_*d*r-u*v*r-_*n*p+t*v*p+u*n*g-t*d*g)*k,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*g+t*o*g)*k,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*p-t*o*p)*k,e[12]=O*k,e[13]=(u*v*i-_*d*i+_*n*f-t*v*f-u*n*b+t*d*b)*k,e[14]=(_*o*i-a*v*i-_*n*l+t*v*l+a*n*b-t*o*b)*k,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*f+t*o*f)*k,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,_=r*d,v=a*u,b=a*d,g=o*d,w=l*c,M=l*u,E=l*d,O=n.x,L=n.y,k=n.z;return i[0]=(1-(v+g))*O,i[1]=(p+E)*O,i[2]=(_-M)*O,i[3]=0,i[4]=(p-E)*L,i[5]=(1-(f+g))*L,i[6]=(b+w)*L,i[7]=0,i[8]=(_+M)*k,i[9]=(b-w)*k,i[10]=(1-(f+v))*k,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=cr.set(i[0],i[1],i[2]).length(),a=cr.set(i[4],i[5],i[6]).length(),o=cr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);let c=1/r,u=1/a,d=1/o;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,t.setFromRotationMatrix(pi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Gi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,_;if(o===Gi)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===wl)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Gi){let l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-r),f=(t+e)*c,p=(n+i)*u,_,v;if(o===Gi)_=(a+r)*d,v=-2*d;else if(o===wl)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new D,pi=new lt,S0=new D(0,0,0),E0=new D(1,1,1),os=new D,Ho=new D,Kn=new D,kf=new lt,Nf=new mn,Ri=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},w0=0,Uf=new D,hr=new mn,Oi=new lt,Go=new D,Ma=new D,T0=new D,A0=new mn,Of=new D(1,0,0),Ff=new D(0,1,0),zf=new D(0,0,1),Bf={type:"added"},R0={type:"removed"},ur={type:"childadded",child:null},qc={type:"childremoved",child:null},$t=class s extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new Ri,n=new mn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new vt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Of,e)}rotateY(e){return this.rotateOnAxis(Ff,e)}rotateZ(e){return this.rotateOnAxis(zf,e)}translateOnAxis(e,t){return Uf.copy(e).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Of,e)}translateY(e){return this.translateOnAxis(Ff,e)}translateZ(e){return this.translateOnAxis(zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Ma,Go,this.up):Oi.lookAt(Go,Ma,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Oi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bf),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bf),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,T0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,A0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};$t.DEFAULT_UP=new D(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new D,Fi=new D,jc=new D,zi=new D,dr=new D,fr=new D,Hf=new D,Yc=new D,Kc=new D,Zc=new D,Jc=new Ot,$c=new Ot,Qc=new Ot,us=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mi.subVectors(i,t),Fi.subVectors(n,t),jc.subVectors(e,t);let a=mi.dot(mi),o=mi.dot(Fi),l=mi.dot(jc),c=Fi.dot(Fi),u=Fi.dot(jc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Jc.setScalar(0),$c.setScalar(0),Qc.setScalar(0),Jc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),Qc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Jc,r.x),a.addScaledVector($c,r.y),a.addScaledVector(Qc,r.z),a}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Fi.subVectors(e,t),mi.cross(Fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),mi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;dr.subVectors(i,n),fr.subVectors(r,n),Yc.subVectors(e,n);let l=dr.dot(Yc),c=fr.dot(Yc);if(l<=0&&c<=0)return t.copy(n);Kc.subVectors(e,i);let u=dr.dot(Kc),d=fr.dot(Kc);if(u>=0&&d<=u)return t.copy(i);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(dr,a);Zc.subVectors(e,r);let p=dr.dot(Zc),_=fr.dot(Zc);if(_>=0&&p<=_)return t.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(fr,o);let b=u*_-p*d;if(b<=0&&d-u>=0&&p-_>=0)return Hf.subVectors(r,i),o=(d-u)/(d-u+(p-_)),t.copy(i).addScaledVector(Hf,o);let g=1/(b+v+f);return a=v*g,o=f*g,t.copy(n).addScaledVector(dr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function eh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=It.workingColorSpace){if(e=sd(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=eh(a,r,e+1/3),this.g=eh(a,r,e),this.b=eh(a,r,e-1/3)}return It.toWorkingColorSpace(this,i),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let n=sm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return It.fromWorkingColorSpace(Dn.copy(this),e),Math.round(un(Dn.r*255,0,255))*65536+Math.round(un(Dn.g*255,0,255))*256+Math.round(un(Dn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Dn.copy(this),t);let n=Dn.r,i=Dn.g,r=Dn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=sn){It.fromWorkingColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,i=Dn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Vo);let n=ka(ls.h,Vo.h,t),i=ka(ls.s,Vo.s,t),r=ka(ls.l,Vo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new tt;tt.NAMES=sm;var C0=0,Fn=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Rr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=yh,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xh&&(n.blendSrc=this.blendSrc),this.blendDst!==yh&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Af&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},jt=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hn=new D,Wo=new ue,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}};var Rl=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cl=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},P0=0,ni=new lt,th=new $t,pr=new D,Zn=new gn,Sa=new gn,En=new D,Kt=class s extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(im(e)?Cl:Rl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sa.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(Zn.min,Sa.min),Zn.expandByPoint(En),En.addVectors(Zn.max,Sa.max),Zn.expandByPoint(En)):(Zn.expandByPoint(Sa.min),Zn.expandByPoint(Sa.max))}Zn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)En.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(En));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)En.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(e,c),En.add(pr)),i=Math.max(i,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new D,l[B]=new D;let c=new D,u=new D,d=new D,f=new ue,p=new ue,_=new ue,v=new D,b=new D;function g(B,ie,S){c.fromBufferAttribute(n,B),u.fromBufferAttribute(n,ie),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,B),p.fromBufferAttribute(r,ie),_.fromBufferAttribute(r,S),u.sub(c),d.sub(c),p.sub(f),_.sub(f);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(R),b.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(R),o[B].add(v),o[ie].add(v),o[S].add(v),l[B].add(b),l[ie].add(b),l[S].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let B=0,ie=w.length;B<ie;++B){let S=w[B],R=S.start,Y=S.count;for(let K=R,J=R+Y;K<J;K+=3)g(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let M=new D,E=new D,O=new D,L=new D;function k(B){O.fromBufferAttribute(i,B),L.copy(O);let ie=o[B];M.copy(ie),M.sub(O.multiplyScalar(O.dot(ie))).normalize(),E.crossVectors(L,ie);let R=E.dot(l[B])<0?-1:1;a.setXYZW(B,M.x,M.y,M.z,R)}for(let B=0,ie=w.length;B<ie;++B){let S=w[B],R=S.start,Y=S.count;for(let K=R,J=R+Y;K<J;K+=3)k(e.getX(K+0)),k(e.getX(K+1)),k(e.getX(K+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){let _=e.getX(f+0),v=e.getX(f+1),b=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,b),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,b),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,_=0;for(let v=0,b=l.length;v<b;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let g=0;g<u;g++)f[_++]=c[p++]}return new Jt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gf=new lt,ks=new Vi,Xo=new $n,Vf=new D,qo=new D,jo=new D,Yo=new D,nh=new D,Ko=new D,Wf=new D,Zo=new D,ce=class extends $t{constructor(e=new Kt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(nh.fromBufferAttribute(d,e),a?Ko.addScaledVector(nh,u):Ko.addScaledVector(nh.sub(t),u))}t.add(Ko)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(Xo.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Xo,Vf)===null||ks.origin.distanceToSquared(Vf)>(e.far-e.near)**2))&&(Gf.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Gf),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let b=f[_],g=a[b.materialIndex],w=Math.max(b.start,p.start),M=Math.min(o.count,Math.min(b.start+b.count,p.start+p.count));for(let E=w,O=M;E<O;E+=3){let L=o.getX(E),k=o.getX(E+1),B=o.getX(E+2);i=Jo(this,g,e,n,c,u,d,L,k,B),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let b=_,g=v;b<g;b+=3){let w=o.getX(b),M=o.getX(b+1),E=o.getX(b+2);i=Jo(this,a,e,n,c,u,d,w,M,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let b=f[_],g=a[b.materialIndex],w=Math.max(b.start,p.start),M=Math.min(l.count,Math.min(b.start+b.count,p.start+p.count));for(let E=w,O=M;E<O;E+=3){let L=E,k=E+1,B=E+2;i=Jo(this,g,e,n,c,u,d,L,k,B),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let b=_,g=v;b<g;b+=3){let w=b,M=b+1,E=b+2;i=Jo(this,a,e,n,c,u,d,w,M,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}};function I0(s,e,t,n,i,r,a,o){let l;if(e.side===Ln?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Ti,o),l===null)return null;Zo.copy(o),Zo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Zo);return c<t.near||c>t.far?null:{distance:c,point:Zo.clone(),object:s}}function Jo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,qo),s.getVertexPosition(l,jo),s.getVertexPosition(c,Yo);let u=I0(s,e,t,n,qo,jo,Yo,Wf);if(u){let d=new D;us.getBarycoord(Wf,qo,jo,Yo,d),i&&(u.uv=us.getInterpolatedAttribute(i,o,l,c,d,new ue)),r&&(u.uv1=us.getInterpolatedAttribute(r,o,l,c,d,new ue)),a&&(u.normal=us.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};us.getNormal(qo,jo,Yo,f.normal),u.face=f,u.barycoord=d}return u}var ut=class s extends Kt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2));function _(v,b,g,w,M,E,O,L,k,B,ie){let S=E/k,R=O/B,Y=E/2,K=O/2,J=L/2,de=k+1,Z=B+1,ve=0,oe=0,V=new D;for(let F=0;F<Z;F++){let $=F*R-K;for(let le=0;le<de;le++){let be=le*S-Y;V[v]=be*w,V[b]=$*M,V[g]=J,c.push(V.x,V.y,V.z),V[v]=0,V[b]=0,V[g]=L>0?1:-1,u.push(V.x,V.y,V.z),d.push(le/k),d.push(1-F/B),ve+=1}}for(let F=0;F<B;F++)for(let $=0;$<k;$++){let le=f+$+de*F,be=f+$+de*(F+1),H=f+($+1)+de*(F+1),U=f+($+1)+de*F;l.push(le,be,U),l.push(be,H,U),oe+=6}o.addGroup(p,oe,ie),p+=oe,f+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(s){let e={};for(let t=0;t<s.length;t++){let n=Fr(s[t]);for(let i in n)e[i]=n[i]}return e}function D0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rm(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}var Xn={clone:Fr,merge:On},L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pl=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cs=new D,Xf=new ue,qf=new ue,dn=class extends Pl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,qf),t.subVectors(qf,Xf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(La*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,gr=1,au=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new dn(mr,gr,e,t);i.layers=this.layers,this.add(i);let r=new dn(mr,gr,e,t);r.layers=this.layers,this.add(r);let a=new dn(mr,gr,e,t);a.layers=this.layers,this.add(a);let o=new dn(mr,gr,e,t);o.layers=this.layers,this.add(o);let l=new dn(mr,gr,e,t);l.layers=this.layers,this.add(l);let c=new dn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Il=class extends wn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ou=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Il(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ut(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:pn});r.uniforms.tEquirect.value=t;let a=new ce(i,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Hn),new au(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},ih=new D,N0=new D,U0=new vt,Jn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ih.subVectors(n,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ih),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||U0.getNormalMatrix(e),i=this.coplanarPoint(ih).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ns=new $n,$o=new D,Ga=class{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],p=i[8],_=i[9],v=i[10],b=i[11],g=i[12],w=i[13],M=i[14],E=i[15];if(n[0].setComponents(l-r,f-c,b-p,E-g).normalize(),n[1].setComponents(l+r,f+c,b+p,E+g).normalize(),n[2].setComponents(l+a,f+u,b+_,E+w).normalize(),n[3].setComponents(l-a,f-u,b-_,E-w).normalize(),n[4].setComponents(l-o,f-d,b-v,E-M).normalize(),t===Gi)n[5].setComponents(l+o,f+d,b+v,E+M).normalize();else if(t===wl)n[5].setComponents(o,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if($o.x=i.normal.x>0?e.max.x:e.min.x,$o.y=i.normal.y>0?e.max.y:e.min.y,$o.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function am(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function O0(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let v=d[p];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var bn=class s extends Kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,p=[],_=[],v=[],b=[];for(let g=0;g<u;g++){let w=g*f-a;for(let M=0;M<c;M++){let E=M*d-r;_.push(E,-w,0),v.push(0,0,1),b.push(M/o),b.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<o;w++){let M=w+c*g,E=w+c*(g+1),O=w+1+c*(g+1),L=w+1+c*g;p.push(M,E,L),p.push(E,O,L)}this.setIndex(p),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},F0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z0=`#ifdef USE_ALPHAHASH
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
#endif`,B0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W0=`#ifdef USE_AOMAP
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
#endif`,X0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J0=`#ifdef USE_IRIDESCENCE
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
#endif`,$0=`#ifdef USE_BUMPMAP
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ob=`#define PI 3.141592653589793
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
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cb=`vec3 transformedNormal = objectNormal;
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
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`
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
}`,gb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wb=`#ifdef USE_GRADIENTMAP
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
}`,Tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
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
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nb=`PhysicalMaterial material;
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
#endif`,Ub=`struct PhysicalMaterial {
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
}`,Ob=`
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jb=`#if defined( USE_POINTS_UV )
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
#endif`,Yb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`#ifdef USE_MORPHTARGETS
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
#endif`,e_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M_=`float getShadowMask() {
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
}`,S_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,A_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F_=`uniform sampler2D t2D;
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,W_=`#if DEPTH_PACKING == 3200
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
}`,X_=`#define DISTANCE
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
}`,q_=`#define DISTANCE
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,$_=`uniform vec3 diffuse;
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
}`,Q_=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define MATCAP
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
}`,nx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,sx=`#define NORMAL
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
}`,rx=`#define PHONG
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
}`,ax=`#define PHONG
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
}`,ox=`#define STANDARD
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
}`,lx=`#define STANDARD
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
}`,cx=`#define TOON
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
}`,hx=`#define TOON
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
}`,ux=`uniform float size;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,mx=`uniform float rotation;
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
}`,gx=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:F0,alphahash_pars_fragment:z0,alphamap_fragment:B0,alphamap_pars_fragment:H0,alphatest_fragment:G0,alphatest_pars_fragment:V0,aomap_fragment:W0,aomap_pars_fragment:X0,batching_pars_vertex:q0,batching_vertex:j0,begin_vertex:Y0,beginnormal_vertex:K0,bsdfs:Z0,iridescence_fragment:J0,bumpmap_pars_fragment:$0,clipping_planes_fragment:Q0,clipping_planes_pars_fragment:eb,clipping_planes_pars_vertex:tb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:sb,color_pars_vertex:rb,color_vertex:ab,common:ob,cube_uv_reflection_fragment:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:hb,displacementmap_vertex:ub,emissivemap_fragment:db,emissivemap_pars_fragment:fb,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:bb,envmap_pars_fragment:_b,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Pb,envmap_vertex:yb,fog_vertex:vb,fog_pars_vertex:Mb,fog_fragment:Sb,fog_pars_fragment:Eb,gradientmap_pars_fragment:wb,lightmap_pars_fragment:Tb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Ib,lights_toon_pars_fragment:Db,lights_phong_fragment:Lb,lights_phong_pars_fragment:kb,lights_physical_fragment:Nb,lights_physical_pars_fragment:Ub,lights_fragment_begin:Ob,lights_fragment_maps:Fb,lights_fragment_end:zb,logdepthbuf_fragment:Bb,logdepthbuf_pars_fragment:Hb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Vb,map_fragment:Wb,map_pars_fragment:Xb,map_particle_fragment:qb,map_particle_pars_fragment:jb,metalnessmap_fragment:Yb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Zb,morphcolor_vertex:Jb,morphnormal_vertex:$b,morphtarget_pars_vertex:Qb,morphtarget_vertex:e_,normal_fragment_begin:t_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:l_,clearcoat_pars_fragment:c_,iridescence_pars_fragment:h_,opaque_fragment:u_,packing:d_,premultiplied_alpha_fragment:f_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:y_,shadowmap_vertex:v_,shadowmask_pars_fragment:M_,skinbase_vertex:S_,skinning_pars_vertex:E_,skinning_vertex:w_,skinnormal_vertex:T_,specularmap_fragment:A_,specularmap_pars_fragment:R_,tonemapping_fragment:C_,tonemapping_pars_fragment:P_,transmission_fragment:I_,transmission_pars_fragment:D_,uv_pars_fragment:L_,uv_pars_vertex:k_,uv_vertex:N_,worldpos_vertex:U_,background_vert:O_,background_frag:F_,backgroundCube_vert:z_,backgroundCube_frag:B_,cube_vert:H_,cube_frag:G_,depth_vert:V_,depth_frag:W_,distanceRGBA_vert:X_,distanceRGBA_frag:q_,equirect_vert:j_,equirect_frag:Y_,linedashed_vert:K_,linedashed_frag:Z_,meshbasic_vert:J_,meshbasic_frag:$_,meshlambert_vert:Q_,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ax,meshphysical_vert:ox,meshphysical_frag:lx,meshtoon_vert:cx,meshtoon_frag:hx,points_vert:ux,points_frag:dx,shadow_vert:fx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},Ge={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ei={basic:{uniforms:On([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:On([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:On([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:On([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:On([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:On([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:On([Ge.points,Ge.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:On([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:On([Ge.common,Ge.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:On([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:On([Ge.sprite,Ge.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:On([Ge.common,Ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:On([Ge.lights,Ge.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Ei.physical={uniforms:On([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var Qo={r:0,b:0,g:0},Us=new Ri,bx=new lt;function _x(s,e,t,n,i,r,a){let o=new tt(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function _(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function v(w){let M=!1,E=_(w);E===null?g(o,l):E&&E.isColor&&(g(E,1),M=!0);let O=s.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(w,M){let E=_(M);E&&(E.isCubeTexture||E.mapping===ic)?(u===void 0&&(u=new ce(new ut(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Fr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Us.copy(M.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(Us)),u.material.toneMapped=It.getTransfer(E.colorSpace)!==Xt,(d!==E||f!==E.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,p=s.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ce(new bn(2,2),new Zt({name:"BackgroundMaterial",uniforms:Fr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=It.getTransfer(E.colorSpace)!==Xt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,M){w.getRGB(Qo,rm(s)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(w,M=1){o.set(w),l=M,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,g(o,l)},render:v,addToRenderList:b}}function xx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(S,R,Y,K,J){let de=!1,Z=d(K,Y,R);r!==Z&&(r=Z,c(r.object)),de=p(S,K,Y,J),de&&_(S,K,Y,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(de||a)&&(a=!1,E(S,R,Y,K),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function d(S,R,Y){let K=Y.wireframe===!0,J=n[S.id];J===void 0&&(J={},n[S.id]=J);let de=J[R.id];de===void 0&&(de={},J[R.id]=de);let Z=de[K];return Z===void 0&&(Z=f(l()),de[K]=Z),Z}function f(S){let R=[],Y=[],K=[];for(let J=0;J<t;J++)R[J]=0,Y[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:Y,attributeDivisors:K,object:S,attributes:{},index:null}}function p(S,R,Y,K){let J=r.attributes,de=R.attributes,Z=0,ve=Y.getAttributes();for(let oe in ve)if(ve[oe].location>=0){let F=J[oe],$=de[oe];if($===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),F===void 0||F.attribute!==$||$&&F.data!==$.data)return!0;Z++}return r.attributesNum!==Z||r.index!==K}function _(S,R,Y,K){let J={},de=R.attributes,Z=0,ve=Y.getAttributes();for(let oe in ve)if(ve[oe].location>=0){let F=de[oe];F===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&(F=S.instanceColor));let $={};$.attribute=F,F&&F.data&&($.data=F.data),J[oe]=$,Z++}r.attributes=J,r.attributesNum=Z,r.index=K}function v(){let S=r.newAttributes;for(let R=0,Y=S.length;R<Y;R++)S[R]=0}function b(S){g(S,0)}function g(S,R){let Y=r.newAttributes,K=r.enabledAttributes,J=r.attributeDivisors;Y[S]=1,K[S]===0&&(s.enableVertexAttribArray(S),K[S]=1),J[S]!==R&&(s.vertexAttribDivisor(S,R),J[S]=R)}function w(){let S=r.newAttributes,R=r.enabledAttributes;for(let Y=0,K=R.length;Y<K;Y++)R[Y]!==S[Y]&&(s.disableVertexAttribArray(Y),R[Y]=0)}function M(S,R,Y,K,J,de,Z){Z===!0?s.vertexAttribIPointer(S,R,Y,J,de):s.vertexAttribPointer(S,R,Y,K,J,de)}function E(S,R,Y,K){v();let J=K.attributes,de=Y.getAttributes(),Z=R.defaultAttributeValues;for(let ve in de){let oe=de[ve];if(oe.location>=0){let V=J[ve];if(V===void 0&&(ve==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),ve==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){let F=V.normalized,$=V.itemSize,le=e.get(V);if(le===void 0)continue;let be=le.buffer,H=le.type,U=le.bytesPerElement,ee=H===s.INT||H===s.UNSIGNED_INT||V.gpuType===ju;if(V.isInterleavedBufferAttribute){let Q=V.data,fe=Q.stride,_e=V.offset;if(Q.isInstancedInterleavedBuffer){for(let Re=0;Re<oe.locationSize;Re++)g(oe.location+Re,Q.meshPerAttribute);S.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<oe.locationSize;Re++)b(oe.location+Re);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Re=0;Re<oe.locationSize;Re++)M(oe.location+Re,$/oe.locationSize,H,F,fe*U,(_e+$/oe.locationSize*Re)*U,ee)}else{if(V.isInstancedBufferAttribute){for(let Q=0;Q<oe.locationSize;Q++)g(oe.location+Q,V.meshPerAttribute);S.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Q=0;Q<oe.locationSize;Q++)b(oe.location+Q);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Q=0;Q<oe.locationSize;Q++)M(oe.location+Q,$/oe.locationSize,H,F,$*U,$/oe.locationSize*Q*U,ee)}}else if(Z!==void 0){let F=Z[ve];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(oe.location,F);break;case 3:s.vertexAttrib3fv(oe.location,F);break;case 4:s.vertexAttrib4fv(oe.location,F);break;default:s.vertexAttrib1fv(oe.location,F)}}}}w()}function O(){B();for(let S in n){let R=n[S];for(let Y in R){let K=R[Y];for(let J in K)u(K[J].object),delete K[J];delete R[Y]}delete n[S]}}function L(S){if(n[S.id]===void 0)return;let R=n[S.id];for(let Y in R){let K=R[Y];for(let J in K)u(K[J].object),delete K[J];delete R[Y]}delete n[S.id]}function k(S){for(let R in n){let Y=n[R];if(Y[S.id]===void 0)continue;let K=Y[S.id];for(let J in K)u(K[J].object),delete K[J];delete Y[S.id]}}function B(){ie(),a=!0,r!==i&&(r=i,c(r.object))}function ie(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:B,resetDefaultState:ie,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:b,disableUnusedAttributes:w}}function yx(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,n,1)}function l(c,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];for(let v=0;v<f.length;v++)t.update(_,n,f[v])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let k=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(k){return!(k!==Gn&&n.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(k){let B=k===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==xi&&n.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==_i&&!B)}function l(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let k=e.get("EXT_clip_control");k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT)}let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:b,maxAttributes:g,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:O,maxSamples:L}}function Mx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Jn,o=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,v=d.clipIntersection,b=d.clipShadows,g=s.get(d);if(!i||_===null||_.length===0||r&&!b)r?u(null):c();else{let w=r?0:n,M=w*4,E=g.clippingState||null;l.value=E,E=u(_,f,M,p);for(let O=0;O!==M;++O)E[O]=t[O];g.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,_){let v=d!==null?d.length:0,b=null;if(v!==0){if(b=l.value,_!==!0||b===null){let g=p+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(b===null||b.length<g)&&(b=new Float32Array(g));for(let M=0,E=p;M!==v;++M,E+=4)a.copy(d[M]).applyMatrix4(w,o),a.normal.toArray(b,E),b[E+3]=a.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,b}}function Sx(s){let e=new WeakMap;function t(a,o){return o===Rh?a.mapping=Lr:o===Ch&&(a.mapping=kr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Rh||o===Ch)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ou(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var bs=class extends Pl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tr=4,jf=[.125,.215,.35,.446,.526,.582],zs=20,sh=new bs,Yf=new tt,rh=null,ah=0,oh=0,lh=!1,Fs=(1+Math.sqrt(5))/2,br=1/Fs,Kf=[new D(-Fs,br,0),new D(Fs,br,0),new D(-br,0,Fs),new D(br,0,Fs),new D(0,Fs,-br),new D(0,Fs,br),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,ah,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Wn,format:Gn,colorSpace:An,depthBuffer:!1},i=Zf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(r)),this._blurMaterial=wx(r,e,t)}return i}_compileMaterial(e){let t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,sh)}_sceneToCubeUV(e,t,n,i){let o=new dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Yf),u.toneMapping=fs,u.autoClear=!1;let p=new jt({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),_=new ce(new ut,p),v=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,v=!0):(p.color.copy(Yf),v=!0);for(let g=0;g<6;g++){let w=g%3;w===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):w===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let M=this._cubeSize;el(i,w*M,g>2?M:0,M,M),u.setRenderTarget(i),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Lr||e.mapping===kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;el(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,sh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kf[(i-r-1)%Kf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ce(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zs-1),v=r/_,b=isFinite(r)?1+Math.floor(u*v):zs;b>zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${zs}`);let g=[],w=0;for(let k=0;k<zs;++k){let B=k/v,ie=Math.exp(-B*B/2);g.push(ie),k===0?w+=ie:k<b&&(w+=2*ie)}for(let k=0;k<g.length;k++)g[k]=g[k]/w;f.envMap.value=e.texture,f.samples.value=b,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;let E=this._sizeLods[i],O=3*E*(i>M-Tr?i-M+Tr:0),L=4*(this._cubeSize-E);el(t,O,L,3*E,2*E),l.setRenderTarget(t),l.render(d,sh)}};function Ex(s){let e=[],t=[],n=[],i=s,r=s-Tr+1+jf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Tr?l=jf[a-s+Tr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,b=2,g=1,w=new Float32Array(v*_*p),M=new Float32Array(b*_*p),E=new Float32Array(g*_*p);for(let L=0;L<p;L++){let k=L%3*2/3-1,B=L>2?0:-1,ie=[k,B,0,k+2/3,B,0,k+2/3,B+1,0,k,B,0,k+2/3,B+1,0,k,B+1,0];w.set(ie,v*_*L),M.set(f,b*_*L);let S=[L,L,L,L,L,L];E.set(S,g*_*L)}let O=new Kt;O.setAttribute("position",new Jt(w,v)),O.setAttribute("uv",new Jt(M,b)),O.setAttribute("faceIndex",new Jt(E,g)),e.push(O),i>Tr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zf(s,e,t){let n=new Tn(s,e,t);return n.texture.mapping=ic,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function el(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function wx(s,e,t){let n=new Float32Array(zs),i=new D(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rd(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Jf(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function $f(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function rd(){return`

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
	`}function Tx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Rh||l===Ch,u=l===Lr||l===kr;if(c||u){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new zr(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new zr(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ax(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&yl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rx(s,e,t,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let v=f.morphAttributes[_];for(let b=0,g=v.length;b<g;b++)e.remove(v[b])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)e.update(f[_],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let _ in p){let v=p[_];for(let b=0,g=v.length;b<g;b++)e.update(v[b],s.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,_=d.attributes.position,v=0;if(p!==null){let w=p.array;v=p.version;for(let M=0,E=w.length;M<E;M+=3){let O=w[M+0],L=w[M+1],k=w[M+2];f.push(O,L,L,k,k,O)}}else if(_!==void 0){let w=_.array;v=_.version;for(let M=0,E=w.length/3-1;M<E;M+=3){let O=M+0,L=M+1,k=M+2;f.push(O,L,L,k,k,O)}}else return;let b=new(im(f)?Cl:Rl)(f,1);b.version=v;let g=r.get(d);g&&e.remove(g),r.set(d,b)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Cx(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,f*a,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let b=0;for(let g=0;g<_;g++)b+=p[g];t.update(b,n,1)}function d(f,p,_,v){if(_===0)return;let b=e.get("WEBGL_multi_draw");if(b===null)for(let g=0;g<f.length;g++)c(f[g]/a,p[g],v[g]);else{b.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,_);let g=0;for(let w=0;w<_;w++)g+=p[w];for(let w=0;w<v.length;w++)t.update(g,n,v[w])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Px(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ix(s,e,t){let n=new WeakMap,i=new Ot;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let ie=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",ie)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],M=0;p===!0&&(M=1),_===!0&&(M=2),v===!0&&(M=3);let E=o.attributes.position.count*M,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let L=new Float32Array(E*O*4*d),k=new Al(L,E,O,d);k.type=_i,k.needsUpdate=!0;let B=M*4;for(let S=0;S<d;S++){let R=b[S],Y=g[S],K=w[S],J=E*O*4*S;for(let de=0;de<R.count;de++){let Z=de*B;p===!0&&(i.fromBufferAttribute(R,de),L[J+Z+0]=i.x,L[J+Z+1]=i.y,L[J+Z+2]=i.z,L[J+Z+3]=0),_===!0&&(i.fromBufferAttribute(Y,de),L[J+Z+4]=i.x,L[J+Z+5]=i.y,L[J+Z+6]=i.z,L[J+Z+7]=0),v===!0&&(i.fromBufferAttribute(K,de),L[J+Z+8]=i.x,L[J+Z+9]=i.y,L[J+Z+10]=i.z,L[J+Z+11]=K.itemSize===4?i.w:1)}}f={count:d,texture:k,size:new ue(E,O)},n.set(o,f),o.addEventListener("dispose",ie)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Dx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Br=class extends wn{constructor(e,t,n,i,r,a,o,l,c,u=Cr){if(u!==Cr&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cr&&(n=Hs),n===void 0&&u===gs&&(n=ms),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},om=new wn,Qf=new Br(1,1),lm=new Al,cm=new ru,hm=new Il,ep=[],tp=[],np=new Float32Array(16),ip=new Float32Array(9),sp=new Float32Array(4);function Qr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ep[i];if(r===void 0&&(r=new Float32Array(i),ep[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function _n(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function oc(s,e){let t=tp[e];t===void 0&&(t=new Int32Array(e),tp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Lx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function Nx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function Ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function Ox(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;sp.set(n),s.uniformMatrix2fv(this.addr,!1,sp),xn(t,n)}}function Fx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;ip.set(n),s.uniformMatrix3fv(this.addr,!1,ip),xn(t,n)}}function zx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;np.set(n),s.uniformMatrix4fv(this.addr,!1,np),xn(t,n)}}function Bx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Hx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function Gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function Vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function Wx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function Yx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Qf.compareFunction=nm,r=Qf):r=om,t.setTexture2D(e||r,i)}function Kx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cm,i)}function Zx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hm,i)}function Jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lm,i)}function $x(s){switch(s){case 5126:return Lx;case 35664:return kx;case 35665:return Nx;case 35666:return Ux;case 35674:return Ox;case 35675:return Fx;case 35676:return zx;case 5124:case 35670:return Bx;case 35667:case 35671:return Hx;case 35668:case 35672:return Gx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}function Qx(s,e){s.uniform1fv(this.addr,e)}function ey(s,e){let t=Qr(e,this.size,2);s.uniform2fv(this.addr,t)}function ty(s,e){let t=Qr(e,this.size,3);s.uniform3fv(this.addr,t)}function ny(s,e){let t=Qr(e,this.size,4);s.uniform4fv(this.addr,t)}function iy(s,e){let t=Qr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function sy(s,e){let t=Qr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ry(s,e){let t=Qr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ay(s,e){s.uniform1iv(this.addr,e)}function oy(s,e){s.uniform2iv(this.addr,e)}function ly(s,e){s.uniform3iv(this.addr,e)}function cy(s,e){s.uniform4iv(this.addr,e)}function hy(s,e){s.uniform1uiv(this.addr,e)}function uy(s,e){s.uniform2uiv(this.addr,e)}function dy(s,e){s.uniform3uiv(this.addr,e)}function fy(s,e){s.uniform4uiv(this.addr,e)}function py(s,e,t){let n=this.cache,i=e.length,r=oc(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||om,r[a])}function my(s,e,t){let n=this.cache,i=e.length,r=oc(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cm,r[a])}function gy(s,e,t){let n=this.cache,i=e.length,r=oc(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||hm,r[a])}function by(s,e,t){let n=this.cache,i=e.length,r=oc(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lm,r[a])}function _y(s){switch(s){case 5126:return Qx;case 35664:return ey;case 35665:return ty;case 35666:return ny;case 35674:return iy;case 35675:return sy;case 35676:return ry;case 5124:case 35670:return ay;case 35667:case 35671:return oy;case 35668:case 35672:return ly;case 35669:case 35673:return cy;case 5125:return hy;case 36294:return uy;case 36295:return dy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return by}}var lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$x(t.type)}},cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_y(t.type)}},hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},ch=/(\w+)(\])?(\[|\.)?/g;function rp(s,e){s.seq.push(e),s.map[e.id]=e}function xy(s,e,t){let n=s.name,i=n.length;for(ch.lastIndex=0;;){let r=ch.exec(n),a=ch.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){rp(t,c===void 0?new lu(o,s,e):new cu(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new hu(o),rp(t,d)),t=d}}}var Ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);xy(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function ap(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var yy=37297,vy=0;function My(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Sy(s){let e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(s),n;switch(e===t?n="":e===El&&t===Sl?n="LinearDisplayP3ToLinearSRGB":e===Sl&&t===El&&(n="LinearSRGBToLinearDisplayP3"),s){case An:case rc:return[n,"LinearTransferOETF"];case sn:case id:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function op(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+My(s.getShaderSource(e),a)}else return i}function Ey(s,e){let t=Sy(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wy(s,e){let t;switch(e){case Hu:t="Linear";break;case Gu:t="Reinhard";break;case Vu:t="Cineon";break;case Wu:t="ACESFilmic";break;case Xu:t="AgX";break;case ro:t="Neutral";break;case Fg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tl=new D;function Ty(){It.getLuminanceCoefficients(tl);let s=tl.x.toFixed(4),e=tl.y.toFixed(4),t=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ay(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function Ry(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cy(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ia(s){return s!==""}function lp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(s){return s.replace(Py,Dy)}var Iy=new Map;function Dy(s,e){let t=At[e];if(t===void 0){let n=Iy.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uu(t)}var Ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(s){return s.replace(Ly,ky)}function ky(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function up(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Ny(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Uy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Lr:case kr:e="ENVMAP_TYPE_CUBE";break;case ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Oy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wp:e="ENVMAP_BLENDING_MULTIPLY";break;case Ug:e="ENVMAP_BLENDING_MIX";break;case Og:e="ENVMAP_BLENDING_ADD";break}return e}function zy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function By(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ny(t),c=Uy(t),u=Oy(t),d=Fy(t),f=zy(t),p=Ay(t),_=Ry(r),v=i.createProgram(),b,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ia).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ia).join(`
`),g.length>0&&(g+=`
`)):(b=[up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),g=[up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fs?"#define TONE_MAPPING":"",t.toneMapping!==fs?At.tonemapping_pars_fragment:"",t.toneMapping!==fs?wy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,Ey("linearToOutputTexel",t.outputColorSpace),Ty(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),a=uu(a),a=lp(a,t),a=cp(a,t),o=uu(o),o=lp(o,t),o=cp(o,t),a=hp(a),o=hp(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,b=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===Rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=w+b+a,E=w+g+o,O=ap(i,i.VERTEX_SHADER,M),L=ap(i,i.FRAGMENT_SHADER,E);i.attachShader(v,O),i.attachShader(v,L),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function k(R){if(s.debug.checkShaderErrors){let Y=i.getProgramInfoLog(v).trim(),K=i.getShaderInfoLog(O).trim(),J=i.getShaderInfoLog(L).trim(),de=!0,Z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,O,L);else{let ve=op(i,O,"vertex"),oe=op(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+ve+`
`+oe)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(K===""||J==="")&&(Z=!1);Z&&(R.diagnostics={runnable:de,programLog:Y,vertexShader:{log:K,prefix:b},fragmentShader:{log:J,prefix:g}})}i.deleteShader(O),i.deleteShader(L),B=new Ir(i,v),ie=Cy(i,v)}let B;this.getUniforms=function(){return B===void 0&&k(this),B};let ie;this.getAttributes=function(){return ie===void 0&&k(this),ie};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,yy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=L,this}var Hy=0,du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fu(e),t.set(e,n)),n}},fu=class{constructor(e){this.id=Hy++,this.code=e,this.usedTimes=0}};function Gy(s,e,t,n,i,r,a){let o=new Ha,l=new du,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,_=i.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,R,Y,K,J){let de=K.fog,Z=J.geometry,ve=S.isMeshStandardMaterial?K.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||ve),V=oe&&oe.mapping===ic?oe.image.height:null,F=v[S.type];S.precision!==null&&(_=i.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));let $=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=$!==void 0?$.length:0,be=0;Z.morphAttributes.position!==void 0&&(be=1),Z.morphAttributes.normal!==void 0&&(be=2),Z.morphAttributes.color!==void 0&&(be=3);let H,U,ee,Q;if(F){let Rn=Ei[F];H=Rn.vertexShader,U=Rn.fragmentShader}else H=S.vertexShader,U=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);let fe=s.getRenderTarget(),_e=J.isInstancedMesh===!0,Re=J.isBatchedMesh===!0,ke=!!S.map,re=!!S.matcap,I=!!oe,Ce=!!S.aoMap,Ae=!!S.lightMap,Me=!!S.bumpMap,Ie=!!S.normalMap,Xe=!!S.displacementMap,Se=!!S.emissiveMap,P=!!S.metalnessMap,T=!!S.roughnessMap,j=S.anisotropy>0,te=S.clearcoat>0,me=S.dispersion>0,pe=S.iridescence>0,Be=S.sheen>0,Le=S.transmission>0,Ve=j&&!!S.anisotropyMap,_t=te&&!!S.clearcoatMap,Ee=te&&!!S.clearcoatNormalMap,We=te&&!!S.clearcoatRoughnessMap,dt=pe&&!!S.iridescenceMap,ct=pe&&!!S.iridescenceThicknessMap,Ke=Be&&!!S.sheenColorMap,Mt=Be&&!!S.sheenRoughnessMap,at=!!S.specularMap,mt=!!S.specularColorMap,G=!!S.specularIntensityMap,He=Le&&!!S.transmissionMap,he=Le&&!!S.thicknessMap,xe=!!S.gradientMap,qe=!!S.alphaMap,Pe=S.alphaTest>0,gt=!!S.alphaHash,nn=!!S.extensions,vn=fs;S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(vn=s.toneMapping);let Lt={shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:U,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Re,batchingColor:Re&&J._colorsTexture!==null,instancing:_e,instancingColor:_e&&J.instanceColor!==null,instancingMorph:_e&&J.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:An,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:re,envMap:I,envMapMode:I&&oe.mapping,envMapCubeUVHeight:V,aoMap:Ce,lightMap:Ae,bumpMap:Me,normalMap:Ie,displacementMap:p&&Xe,emissiveMap:Se,normalMapObjectSpace:Ie&&S.normalMapType===Xg,normalMapTangentSpace:Ie&&S.normalMapType===nd,metalnessMap:P,roughnessMap:T,anisotropy:j,anisotropyMap:Ve,clearcoat:te,clearcoatMap:_t,clearcoatNormalMap:Ee,clearcoatRoughnessMap:We,dispersion:me,iridescence:pe,iridescenceMap:dt,iridescenceThicknessMap:ct,sheen:Be,sheenColorMap:Ke,sheenRoughnessMap:Mt,specularMap:at,specularColorMap:mt,specularIntensityMap:G,transmission:Le,transmissionMap:He,thicknessMap:he,gradientMap:xe,opaque:S.transparent===!1&&S.blending===Rr&&S.alphaToCoverage===!1,alphaMap:qe,alphaTest:Pe,alphaHash:gt,combine:S.combine,mapUv:ke&&b(S.map.channel),aoMapUv:Ce&&b(S.aoMap.channel),lightMapUv:Ae&&b(S.lightMap.channel),bumpMapUv:Me&&b(S.bumpMap.channel),normalMapUv:Ie&&b(S.normalMap.channel),displacementMapUv:Xe&&b(S.displacementMap.channel),emissiveMapUv:Se&&b(S.emissiveMap.channel),metalnessMapUv:P&&b(S.metalnessMap.channel),roughnessMapUv:T&&b(S.roughnessMap.channel),anisotropyMapUv:Ve&&b(S.anisotropyMap.channel),clearcoatMapUv:_t&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&b(S.sheenRoughnessMap.channel),specularMapUv:at&&b(S.specularMap.channel),specularColorMapUv:mt&&b(S.specularColorMap.channel),specularIntensityMapUv:G&&b(S.specularIntensityMap.channel),transmissionMapUv:He&&b(S.transmissionMap.channel),thicknessMapUv:he&&b(S.thicknessMap.channel),alphaMapUv:qe&&b(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ie||j),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Z.attributes.uv&&(ke||qe),fog:!!de,useFog:S.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:be,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:vn,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&It.getTransfer(S.map.colorSpace)===Xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===Ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:nn&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nn&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function w(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let Y in S.defines)R.push(Y),R.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(M(R,S),E(R,S),R.push(s.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function M(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function E(S,R){o.disableAll(),R.supportsVertexTextures&&o.enable(0),R.instancing&&o.enable(1),R.instancingColor&&o.enable(2),R.instancingMorph&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),R.dispersion&&o.enable(20),R.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reverseDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),S.push(o.mask)}function O(S){let R=v[S.type],Y;if(R){let K=Ei[R];Y=Xn.clone(K.uniforms)}else Y=S.uniforms;return Y}function L(S,R){let Y;for(let K=0,J=u.length;K<J;K++){let de=u[K];if(de.cacheKey===R){Y=de,++Y.usedTimes;break}}return Y===void 0&&(Y=new By(s,R,S,r),u.push(Y)),Y}function k(S){if(--S.usedTimes===0){let R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),S.destroy()}}function B(S){l.remove(S)}function ie(){l.dispose()}return{getParameters:g,getProgramCacheKey:w,getUniforms:O,acquireProgram:L,releaseProgram:k,releaseShaderCache:B,programs:u,dispose:ie}}function Vy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Wy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function dp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,p,_,v,b){let g=s[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:b},s[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=p,g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=v,g.group=b),e++,g}function o(d,f,p,_,v,b){let g=a(d,f,p,_,v,b);p.transmission>0?n.push(g):p.transparent===!0?i.push(g):t.push(g)}function l(d,f,p,_,v,b){let g=a(d,f,p,_,v,b);p.transmission>0?n.unshift(g):p.transparent===!0?i.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||Wy),n.length>1&&n.sort(f||dp),i.length>1&&i.sort(f||dp)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Xy(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new fp,s.set(n,[a])):i>=r.length?(a=new fp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function qy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new tt};break;case"SpotLight":t={position:new D,direction:new D,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function jy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Yy=0;function Ky(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Zy(s){let e=new qy,t=jy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,r=new lt,a=new lt;function o(c){let u=0,d=0,f=0;for(let ie=0;ie<9;ie++)n.probe[ie].set(0,0,0);let p=0,_=0,v=0,b=0,g=0,w=0,M=0,E=0,O=0,L=0,k=0;c.sort(Ky);for(let ie=0,S=c.length;ie<S;ie++){let R=c[ie],Y=R.color,K=R.intensity,J=R.distance,de=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=Y.r*K,d+=Y.g*K,f+=Y.b*K;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(R.sh.coefficients[Z],K);k++}else if(R.isDirectionalLight){let Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ve=R.shadow,oe=t.get(R);oe.shadowIntensity=ve.intensity,oe.shadowBias=ve.bias,oe.shadowNormalBias=ve.normalBias,oe.shadowRadius=ve.radius,oe.shadowMapSize=ve.mapSize,n.directionalShadow[p]=oe,n.directionalShadowMap[p]=de,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=Z,p++}else if(R.isSpotLight){let Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(Y).multiplyScalar(K),Z.distance=J,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,n.spot[v]=Z;let ve=R.shadow;if(R.map&&(n.spotLightMap[O]=R.map,O++,ve.updateMatrices(R),R.castShadow&&L++),n.spotLightMatrix[v]=ve.matrix,R.castShadow){let oe=t.get(R);oe.shadowIntensity=ve.intensity,oe.shadowBias=ve.bias,oe.shadowNormalBias=ve.normalBias,oe.shadowRadius=ve.radius,oe.shadowMapSize=ve.mapSize,n.spotShadow[v]=oe,n.spotShadowMap[v]=de,E++}v++}else if(R.isRectAreaLight){let Z=e.get(R);Z.color.copy(Y).multiplyScalar(K),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=Z,b++}else if(R.isPointLight){let Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){let ve=R.shadow,oe=t.get(R);oe.shadowIntensity=ve.intensity,oe.shadowBias=ve.bias,oe.shadowNormalBias=ve.normalBias,oe.shadowRadius=ve.radius,oe.shadowMapSize=ve.mapSize,oe.shadowCameraNear=ve.camera.near,oe.shadowCameraFar=ve.camera.far,n.pointShadow[_]=oe,n.pointShadowMap[_]=de,n.pointShadowMatrix[_]=R.shadow.matrix,M++}n.point[_]=Z,_++}else if(R.isHemisphereLight){let Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar(K),Z.groundColor.copy(R.groundColor).multiplyScalar(K),n.hemi[g]=Z,g++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let B=n.hash;(B.directionalLength!==p||B.pointLength!==_||B.spotLength!==v||B.rectAreaLength!==b||B.hemiLength!==g||B.numDirectionalShadows!==w||B.numPointShadows!==M||B.numSpotShadows!==E||B.numSpotMaps!==O||B.numLightProbes!==k)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=b,n.point.length=_,n.hemi.length=g,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+O-L,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,B.directionalLength=p,B.pointLength=_,B.spotLength=v,B.rectAreaLength=b,B.hemiLength=g,B.numDirectionalShadows=w,B.numPointShadows=M,B.numSpotShadows=E,B.numSpotMaps=O,B.numLightProbes=k,n.version=Yy++)}function l(c,u){let d=0,f=0,p=0,_=0,v=0,b=u.matrixWorldInverse;for(let g=0,w=c.length;g<w;g++){let M=c[g];if(M.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),d++}else if(M.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(b),E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),p++}else if(M.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(b),a.identity(),r.copy(M.matrixWorld),r.premultiply(b),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(b),f++}else if(M.isHemisphereLight){let E=n.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(b),v++}}}return{setup:o,setupView:l,state:n}}function pp(s){let e=new Zy(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Jy(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new pp(s),e.set(i,[o])):r>=a.length?(o=new pp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var pu=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mu=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},$y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qy=`uniform sampler2D shadow_pass;
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
}`;function ev(s,e,t){let n=new Ga,i=new ue,r=new ue,a=new Ot,o=new pu({depthPacking:Wg}),l=new mu,c={},u=t.maxTextureSize,d={[Ti]:Ln,[Ln]:Ti,[on]:on},f=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:$y,fragmentShader:Qy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Kt;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ce(_,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let g=this.type;this.render=function(L,k,B){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;let ie=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(pn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let K=g!==gi&&this.type===gi,J=g===gi&&this.type!==gi;for(let de=0,Z=L.length;de<Z;de++){let ve=L[de],oe=ve.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;i.copy(oe.mapSize);let V=oe.getFrameExtents();if(i.multiply(V),r.copy(oe.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,oe.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,oe.mapSize.y=r.y)),oe.map===null||K===!0||J===!0){let $=this.type!==gi?{minFilter:fn,magFilter:fn}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Tn(i.x,i.y,$),oe.map.texture.name=ve.name+".shadowMap",oe.camera.updateProjectionMatrix()}s.setRenderTarget(oe.map),s.clear();let F=oe.getViewportCount();for(let $=0;$<F;$++){let le=oe.getViewport($);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),Y.viewport(a),oe.updateMatrices(ve,$),n=oe.getFrustum(),E(k,B,oe.camera,ve,this.type)}oe.isPointLightShadow!==!0&&this.type===gi&&w(oe,B),oe.needsUpdate=!1}g=this.type,b.needsUpdate=!1,s.setRenderTarget(ie,S,R)};function w(L,k){let B=e.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Tn(i.x,i.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(k,null,B,f,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(k,null,B,p,v,null)}function M(L,k,B,ie){let S=null,R=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)S=R;else if(S=B.isPointLight===!0?l:o,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){let Y=S.uuid,K=k.uuid,J=c[Y];J===void 0&&(J={},c[Y]=J);let de=J[K];de===void 0&&(de=S.clone(),J[K]=de,k.addEventListener("dispose",O)),S=de}if(S.visible=k.visible,S.wireframe=k.wireframe,ie===gi?S.side=k.shadowSide!==null?k.shadowSide:k.side:S.side=k.shadowSide!==null?k.shadowSide:d[k.side],S.alphaMap=k.alphaMap,S.alphaTest=k.alphaTest,S.map=k.map,S.clipShadows=k.clipShadows,S.clippingPlanes=k.clippingPlanes,S.clipIntersection=k.clipIntersection,S.displacementMap=k.displacementMap,S.displacementScale=k.displacementScale,S.displacementBias=k.displacementBias,S.wireframeLinewidth=k.wireframeLinewidth,S.linewidth=k.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Y=s.properties.get(S);Y.light=B}return S}function E(L,k,B,ie,S){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===gi)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);let K=e.update(L),J=L.material;if(Array.isArray(J)){let de=K.groups;for(let Z=0,ve=de.length;Z<ve;Z++){let oe=de[Z],V=J[oe.materialIndex];if(V&&V.visible){let F=M(L,V,ie,S);L.onBeforeShadow(s,L,k,B,K,F,oe),s.renderBufferDirect(B,null,K,F,L,oe),L.onAfterShadow(s,L,k,B,K,F,oe)}}}else if(J.visible){let de=M(L,J,ie,S);L.onBeforeShadow(s,L,k,B,K,de,null),s.renderBufferDirect(B,null,K,de,L,null),L.onAfterShadow(s,L,k,B,K,de,null)}}let Y=L.children;for(let K=0,J=Y.length;K<J;K++)E(Y[K],k,B,ie,S)}function O(L){L.target.removeEventListener("dispose",O);for(let B in c){let ie=c[B],S=L.target.uuid;S in ie&&(ie[S].dispose(),delete ie[S])}}}var tv={[vh]:Mh,[Sh]:Th,[Eh]:Ah,[Dr]:wh,[Mh]:vh,[Th]:Sh,[Ah]:Eh,[wh]:Dr};function nv(s){function e(){let G=!1,He=new Ot,he=null,xe=new Ot(0,0,0,0);return{setMask:function(qe){he!==qe&&!G&&(s.colorMask(qe,qe,qe,qe),he=qe)},setLocked:function(qe){G=qe},setClear:function(qe,Pe,gt,nn,vn){vn===!0&&(qe*=nn,Pe*=nn,gt*=nn),He.set(qe,Pe,gt,nn),xe.equals(He)===!1&&(s.clearColor(qe,Pe,gt,nn),xe.copy(He))},reset:function(){G=!1,he=null,xe.set(-1,0,0,0)}}}function t(){let G=!1,He=!1,he=null,xe=null,qe=null;return{setReversed:function(Pe){He=Pe},setTest:function(Pe){Pe?ee(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(Pe){he!==Pe&&!G&&(s.depthMask(Pe),he=Pe)},setFunc:function(Pe){if(He&&(Pe=tv[Pe]),xe!==Pe){switch(Pe){case vh:s.depthFunc(s.NEVER);break;case Mh:s.depthFunc(s.ALWAYS);break;case Sh:s.depthFunc(s.LESS);break;case Dr:s.depthFunc(s.LEQUAL);break;case Eh:s.depthFunc(s.EQUAL);break;case wh:s.depthFunc(s.GEQUAL);break;case Th:s.depthFunc(s.GREATER);break;case Ah:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){qe!==Pe&&(s.clearDepth(Pe),qe=Pe)},reset:function(){G=!1,he=null,xe=null,qe=null}}}function n(){let G=!1,He=null,he=null,xe=null,qe=null,Pe=null,gt=null,nn=null,vn=null;return{setTest:function(Lt){G||(Lt?ee(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(Lt){He!==Lt&&!G&&(s.stencilMask(Lt),He=Lt)},setFunc:function(Lt,Rn,Dt){(he!==Lt||xe!==Rn||qe!==Dt)&&(s.stencilFunc(Lt,Rn,Dt),he=Lt,xe=Rn,qe=Dt)},setOp:function(Lt,Rn,Dt){(Pe!==Lt||gt!==Rn||nn!==Dt)&&(s.stencilOp(Lt,Rn,Dt),Pe=Lt,gt=Rn,nn=Dt)},setLocked:function(Lt){G=Lt},setClear:function(Lt){vn!==Lt&&(s.clearStencil(Lt),vn=Lt)},reset:function(){G=!1,He=null,he=null,xe=null,qe=null,Pe=null,gt=null,nn=null,vn=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},u={},d=new WeakMap,f=[],p=null,_=!1,v=null,b=null,g=null,w=null,M=null,E=null,O=null,L=new tt(0,0,0),k=0,B=!1,ie=null,S=null,R=null,Y=null,K=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),de=!1,Z=0,ve=s.getParameter(s.VERSION);ve.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ve)[1]),de=Z>=1):ve.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),de=Z>=2);let oe=null,V={},F=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),le=new Ot().fromArray(F),be=new Ot().fromArray($);function H(G,He,he,xe){let qe=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(G,Pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let gt=0;gt<he;gt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(He,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,qe):s.texImage2D(He+gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,qe);return Pe}let U={};U[s.TEXTURE_2D]=H(s.TEXTURE_2D,s.TEXTURE_2D,1),U[s.TEXTURE_CUBE_MAP]=H(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[s.TEXTURE_2D_ARRAY]=H(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),U[s.TEXTURE_3D]=H(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ee(s.DEPTH_TEST),r.setFunc(Dr),Ae(!1),Me(Sf),ee(s.CULL_FACE),I(pn);function ee(G){c[G]!==!0&&(s.enable(G),c[G]=!0)}function Q(G){c[G]!==!1&&(s.disable(G),c[G]=!1)}function fe(G,He){return u[G]!==He?(s.bindFramebuffer(G,He),u[G]=He,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=He),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=He),!0):!1}function _e(G,He){let he=f,xe=!1;if(G){he=d.get(He),he===void 0&&(he=[],d.set(He,he));let qe=G.textures;if(he.length!==qe.length||he[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,gt=qe.length;Pe<gt;Pe++)he[Pe]=s.COLOR_ATTACHMENT0+Pe;he.length=qe.length,xe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,xe=!0);xe&&s.drawBuffers(he)}function Re(G){return p!==G?(s.useProgram(G),p=G,!0):!1}let ke={[ii]:s.FUNC_ADD,[Mg]:s.FUNC_SUBTRACT,[Sg]:s.FUNC_REVERSE_SUBTRACT};ke[Eg]=s.MIN,ke[wg]=s.MAX;let re={[$r]:s.ZERO,[Tg]:s.ONE,[Ag]:s.SRC_COLOR,[xh]:s.SRC_ALPHA,[Ig]:s.SRC_ALPHA_SATURATE,[nc]:s.DST_COLOR,[tc]:s.DST_ALPHA,[Rg]:s.ONE_MINUS_SRC_COLOR,[yh]:s.ONE_MINUS_SRC_ALPHA,[Pg]:s.ONE_MINUS_DST_COLOR,[Cg]:s.ONE_MINUS_DST_ALPHA,[Dg]:s.CONSTANT_COLOR,[Lg]:s.ONE_MINUS_CONSTANT_COLOR,[kg]:s.CONSTANT_ALPHA,[Ng]:s.ONE_MINUS_CONSTANT_ALPHA};function I(G,He,he,xe,qe,Pe,gt,nn,vn,Lt){if(G===pn){_===!0&&(Q(s.BLEND),_=!1);return}if(_===!1&&(ee(s.BLEND),_=!0),G!==Bu){if(G!==v||Lt!==B){if((b!==ii||M!==ii)&&(s.blendEquation(s.FUNC_ADD),b=ii,M=ii),Lt)switch(G){case Rr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bs:s.blendFunc(s.ONE,s.ONE);break;case Ef:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Rr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ef:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}g=null,w=null,E=null,O=null,L.set(0,0,0),k=0,v=G,B=Lt}return}qe=qe||He,Pe=Pe||he,gt=gt||xe,(He!==b||qe!==M)&&(s.blendEquationSeparate(ke[He],ke[qe]),b=He,M=qe),(he!==g||xe!==w||Pe!==E||gt!==O)&&(s.blendFuncSeparate(re[he],re[xe],re[Pe],re[gt]),g=he,w=xe,E=Pe,O=gt),(nn.equals(L)===!1||vn!==k)&&(s.blendColor(nn.r,nn.g,nn.b,vn),L.copy(nn),k=vn),v=G,B=!1}function Ce(G,He){G.side===on?Q(s.CULL_FACE):ee(s.CULL_FACE);let he=G.side===Ln;He&&(he=!he),Ae(he),G.blending===Rr&&G.transparent===!1?I(pn):I(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),i.setMask(G.colorWrite);let xe=G.stencilWrite;a.setTest(xe),xe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Xe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(G){ie!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),ie=G)}function Me(G){G!==xg?(ee(s.CULL_FACE),G!==S&&(G===Sf?s.cullFace(s.BACK):G===yg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),S=G}function Ie(G){G!==R&&(de&&s.lineWidth(G),R=G)}function Xe(G,He,he){G?(ee(s.POLYGON_OFFSET_FILL),(Y!==He||K!==he)&&(s.polygonOffset(He,he),Y=He,K=he)):Q(s.POLYGON_OFFSET_FILL)}function Se(G){G?ee(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function P(G){G===void 0&&(G=s.TEXTURE0+J-1),oe!==G&&(s.activeTexture(G),oe=G)}function T(G,He,he){he===void 0&&(oe===null?he=s.TEXTURE0+J-1:he=oe);let xe=V[he];xe===void 0&&(xe={type:void 0,texture:void 0},V[he]=xe),(xe.type!==G||xe.texture!==He)&&(oe!==he&&(s.activeTexture(he),oe=he),s.bindTexture(G,He||U[G]),xe.type=G,xe.texture=He)}function j(){let G=V[oe];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(G){le.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),le.copy(G))}function Ke(G){be.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),be.copy(G))}function Mt(G,He){let he=l.get(He);he===void 0&&(he=new WeakMap,l.set(He,he));let xe=he.get(G);xe===void 0&&(xe=s.getUniformBlockIndex(He,G.name),he.set(G,xe))}function at(G,He){let xe=l.get(He).get(G);o.get(He)!==xe&&(s.uniformBlockBinding(He,xe,G.__bindingPointIndex),o.set(He,xe))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},oe=null,V={},u={},d=new WeakMap,f=[],p=null,_=!1,v=null,b=null,g=null,w=null,M=null,E=null,O=null,L=new tt(0,0,0),k=0,B=!1,ie=null,S=null,R=null,Y=null,K=null,le.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ee,disable:Q,bindFramebuffer:fe,drawBuffers:_e,useProgram:Re,setBlending:I,setMaterial:Ce,setFlipSided:Ae,setCullFace:Me,setLineWidth:Ie,setPolygonOffset:Xe,setScissorTest:Se,activeTexture:P,bindTexture:T,unbindTexture:j,compressedTexImage2D:te,compressedTexImage3D:me,texImage2D:We,texImage3D:dt,updateUBOMapping:Mt,uniformBlockBinding:at,texStorage2D:_t,texStorage3D:Ee,texSubImage2D:pe,texSubImage3D:Be,compressedTexSubImage2D:Le,compressedTexSubImage3D:Ve,scissor:ct,viewport:Ke,reset:mt}}function mp(s,e,t,n){let i=iv(n);switch(t){case Kp:return s*e;case Jp:return s*e;case $p:return s*e*2;case Zu:return s*e/i.components*i.byteLength;case Ju:return s*e/i.components*i.byteLength;case Qp:return s*e*2/i.components*i.byteLength;case $u:return s*e*2/i.components*i.byteLength;case Zp:return s*e*3/i.components*i.byteLength;case Gn:return s*e*4/i.components*i.byteLength;case Qu:return s*e*4/i.components*i.byteLength;case ml:case gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bl:case _l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:case Lh:return Math.max(s,16)*Math.max(e,8)/4;case Ph:case Dh:return Math.max(s,8)*Math.max(e,8)/2;case kh:case Nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case xl:case Jh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*16;case em:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case eu:case tu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iv(s){switch(s){case xi:case qp:return{byteLength:1,components:1};case za:case jp:case Wn:return{byteLength:2,components:1};case Yu:case Ku:return{byteLength:2,components:4};case Hs:case ju:case _i:return{byteLength:4,components:1};case Yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function sv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return p?new OffscreenCanvas(P,T):Ba("canvas")}function v(P,T,j){let te=1,me=Se(P);if((me.width>j||me.height>j)&&(te=j/Math.max(me.width,me.height)),te<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let pe=Math.floor(te*me.width),Be=Math.floor(te*me.height);d===void 0&&(d=_(pe,Be));let Le=T?_(pe,Be):d;return Le.width=pe,Le.height=Be,Le.getContext("2d").drawImage(P,0,0,pe,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+pe+"x"+Be+")."),Le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function b(P){return P.generateMipmaps&&P.minFilter!==fn&&P.minFilter!==Hn}function g(P){s.generateMipmap(P)}function w(P,T,j,te,me=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=T;if(T===s.RED&&(j===s.FLOAT&&(pe=s.R32F),j===s.HALF_FLOAT&&(pe=s.R16F),j===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.R8UI),j===s.UNSIGNED_SHORT&&(pe=s.R16UI),j===s.UNSIGNED_INT&&(pe=s.R32UI),j===s.BYTE&&(pe=s.R8I),j===s.SHORT&&(pe=s.R16I),j===s.INT&&(pe=s.R32I)),T===s.RG&&(j===s.FLOAT&&(pe=s.RG32F),j===s.HALF_FLOAT&&(pe=s.RG16F),j===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RG8UI),j===s.UNSIGNED_SHORT&&(pe=s.RG16UI),j===s.UNSIGNED_INT&&(pe=s.RG32UI),j===s.BYTE&&(pe=s.RG8I),j===s.SHORT&&(pe=s.RG16I),j===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),j===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),j===s.UNSIGNED_INT&&(pe=s.RGB32UI),j===s.BYTE&&(pe=s.RGB8I),j===s.SHORT&&(pe=s.RGB16I),j===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),j===s.UNSIGNED_INT&&(pe=s.RGBA32UI),j===s.BYTE&&(pe=s.RGBA8I),j===s.SHORT&&(pe=s.RGBA16I),j===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){let Be=me?Ml:It.getTransfer(te);j===s.FLOAT&&(pe=s.RGBA32F),j===s.HALF_FLOAT&&(pe=s.RGBA16F),j===s.UNSIGNED_BYTE&&(pe=Be===Xt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function M(P,T){let j;return P?T===null||T===Hs||T===ms?j=s.DEPTH24_STENCIL8:T===_i?j=s.DEPTH32F_STENCIL8:T===za&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hs||T===ms?j=s.DEPTH_COMPONENT24:T===_i?j=s.DEPTH_COMPONENT32F:T===za&&(j=s.DEPTH_COMPONENT16),j}function E(P,T){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function O(P){let T=P.target;T.removeEventListener("dispose",O),k(T),T.isVideoTexture&&u.delete(T)}function L(P){let T=P.target;T.removeEventListener("dispose",L),ie(T)}function k(P){let T=n.get(P);if(T.__webglInit===void 0)return;let j=P.source,te=f.get(j);if(te){let me=te[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&B(P),Object.keys(te).length===0&&f.delete(j)}n.remove(P)}function B(P){let T=n.get(P);s.deleteTexture(T.__webglTexture);let j=P.source,te=f.get(j);delete te[T.__cacheKey],a.memory.textures--}function ie(P){let T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let me=0;me<T.__webglFramebuffer[te].length;me++)s.deleteFramebuffer(T.__webglFramebuffer[te][me]);else s.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)s.deleteFramebuffer(T.__webglFramebuffer[te]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=P.textures;for(let te=0,me=j.length;te<me;te++){let pe=n.get(j[te]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(j[te])}n.remove(P)}let S=0;function R(){S=0}function Y(){let P=S;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),S+=1,P}function K(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function J(P,T){let j=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){let te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(j,P,T);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function de(P,T){let j=n.get(P);if(P.version>0&&j.__version!==P.version){be(j,P,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function Z(P,T){let j=n.get(P);if(P.version>0&&j.__version!==P.version){be(j,P,T);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function ve(P,T){let j=n.get(P);if(P.version>0&&j.__version!==P.version){H(j,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}let oe={[ln]:s.REPEAT,[Hi]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},V={[fn]:s.NEAREST,[qu]:s.NEAREST_MIPMAP_NEAREST,[Sr]:s.NEAREST_MIPMAP_LINEAR,[Hn]:s.LINEAR,[Da]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},F={[qg]:s.NEVER,[$g]:s.ALWAYS,[jg]:s.LESS,[nm]:s.LEQUAL,[Yg]:s.EQUAL,[Jg]:s.GEQUAL,[Kg]:s.GREATER,[Zg]:s.NOTEQUAL};function $(P,T){if(T.type===_i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===Da||T.magFilter===Sr||T.magFilter===wi||T.minFilter===Hn||T.minFilter===Da||T.minFilter===Sr||T.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,oe[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,oe[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,oe[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,V[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,V[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fn||T.minFilter!==Sr&&T.minFilter!==wi||T.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function le(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",O));let te=T.source,me=f.get(te);me===void 0&&(me={},f.set(te,me));let pe=K(T);if(pe!==P.__cacheKey){me[pe]===void 0&&(me[pe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),me[pe].usedTimes++;let Be=me[P.__cacheKey];Be!==void 0&&(me[P.__cacheKey].usedTimes--,Be.usedTimes===0&&B(T)),P.__cacheKey=pe,P.__webglTexture=me[pe].texture}return j}function be(P,T,j){let te=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=s.TEXTURE_3D);let me=le(P,T),pe=T.source;t.bindTexture(te,P.__webglTexture,s.TEXTURE0+j);let Be=n.get(pe);if(pe.version!==Be.__version||me===!0){t.activeTexture(s.TEXTURE0+j);let Le=It.getPrimaries(It.workingColorSpace),Ve=T.colorSpace===hs?null:It.getPrimaries(T.colorSpace),_t=T.colorSpace===hs||Le===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Ee=v(T.image,!1,i.maxTextureSize);Ee=Xe(T,Ee);let We=r.convert(T.format,T.colorSpace),dt=r.convert(T.type),ct=w(T.internalFormat,We,dt,T.colorSpace,T.isVideoTexture);$(te,T);let Ke,Mt=T.mipmaps,at=T.isVideoTexture!==!0,mt=Be.__version===void 0||me===!0,G=pe.dataReady,He=E(T,Ee);if(T.isDepthTexture)ct=M(T.format===gs,T.type),mt&&(at?t.texStorage2D(s.TEXTURE_2D,1,ct,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,ct,Ee.width,Ee.height,0,We,dt,null));else if(T.isDataTexture)if(Mt.length>0){at&&mt&&t.texStorage2D(s.TEXTURE_2D,He,ct,Mt[0].width,Mt[0].height);for(let he=0,xe=Mt.length;he<xe;he++)Ke=Mt[he],at?G&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ke.width,Ke.height,We,dt,Ke.data):t.texImage2D(s.TEXTURE_2D,he,ct,Ke.width,Ke.height,0,We,dt,Ke.data);T.generateMipmaps=!1}else at?(mt&&t.texStorage2D(s.TEXTURE_2D,He,ct,Ee.width,Ee.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,We,dt,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,ct,Ee.width,Ee.height,0,We,dt,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ct,Mt[0].width,Mt[0].height,Ee.depth);for(let he=0,xe=Mt.length;he<xe;he++)if(Ke=Mt[he],T.format!==Gn)if(We!==null)if(at){if(G)if(T.layerUpdates.size>0){let qe=mp(Ke.width,Ke.height,T.format,T.type);for(let Pe of T.layerUpdates){let gt=Ke.data.subarray(Pe*qe/Ke.data.BYTES_PER_ELEMENT,(Pe+1)*qe/Ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,Pe,Ke.width,Ke.height,1,We,gt,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ke.width,Ke.height,Ee.depth,We,Ke.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,ct,Ke.width,Ke.height,Ee.depth,0,Ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ke.width,Ke.height,Ee.depth,We,dt,Ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,ct,Ke.width,Ke.height,Ee.depth,0,We,dt,Ke.data)}else{at&&mt&&t.texStorage2D(s.TEXTURE_2D,He,ct,Mt[0].width,Mt[0].height);for(let he=0,xe=Mt.length;he<xe;he++)Ke=Mt[he],T.format!==Gn?We!==null?at?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ke.width,Ke.height,We,Ke.data):t.compressedTexImage2D(s.TEXTURE_2D,he,ct,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?G&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ke.width,Ke.height,We,dt,Ke.data):t.texImage2D(s.TEXTURE_2D,he,ct,Ke.width,Ke.height,0,We,dt,Ke.data)}else if(T.isDataArrayTexture)if(at){if(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ct,Ee.width,Ee.height,Ee.depth),G)if(T.layerUpdates.size>0){let he=mp(Ee.width,Ee.height,T.format,T.type);for(let xe of T.layerUpdates){let qe=Ee.data.subarray(xe*he/Ee.data.BYTES_PER_ELEMENT,(xe+1)*he/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,We,dt,qe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,We,dt,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ct,Ee.width,Ee.height,Ee.depth,0,We,dt,Ee.data);else if(T.isData3DTexture)at?(mt&&t.texStorage3D(s.TEXTURE_3D,He,ct,Ee.width,Ee.height,Ee.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,We,dt,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,ct,Ee.width,Ee.height,Ee.depth,0,We,dt,Ee.data);else if(T.isFramebufferTexture){if(mt)if(at)t.texStorage2D(s.TEXTURE_2D,He,ct,Ee.width,Ee.height);else{let he=Ee.width,xe=Ee.height;for(let qe=0;qe<He;qe++)t.texImage2D(s.TEXTURE_2D,qe,ct,he,xe,0,We,dt,null),he>>=1,xe>>=1}}else if(Mt.length>0){if(at&&mt){let he=Se(Mt[0]);t.texStorage2D(s.TEXTURE_2D,He,ct,he.width,he.height)}for(let he=0,xe=Mt.length;he<xe;he++)Ke=Mt[he],at?G&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,We,dt,Ke):t.texImage2D(s.TEXTURE_2D,he,ct,We,dt,Ke);T.generateMipmaps=!1}else if(at){if(mt){let he=Se(Ee);t.texStorage2D(s.TEXTURE_2D,He,ct,he.width,he.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,We,dt,Ee)}else t.texImage2D(s.TEXTURE_2D,0,ct,We,dt,Ee);b(T)&&g(te),Be.__version=pe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function H(P,T,j){if(T.image.length!==6)return;let te=le(P,T),me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);let pe=n.get(me);if(me.version!==pe.__version||te===!0){t.activeTexture(s.TEXTURE0+j);let Be=It.getPrimaries(It.workingColorSpace),Le=T.colorSpace===hs?null:It.getPrimaries(T.colorSpace),Ve=T.colorSpace===hs||Be===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let _t=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,We=[];for(let xe=0;xe<6;xe++)!_t&&!Ee?We[xe]=v(T.image[xe],!0,i.maxCubemapSize):We[xe]=Ee?T.image[xe].image:T.image[xe],We[xe]=Xe(T,We[xe]);let dt=We[0],ct=r.convert(T.format,T.colorSpace),Ke=r.convert(T.type),Mt=w(T.internalFormat,ct,Ke,T.colorSpace),at=T.isVideoTexture!==!0,mt=pe.__version===void 0||te===!0,G=me.dataReady,He=E(T,dt);$(s.TEXTURE_CUBE_MAP,T);let he;if(_t){at&&mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,He,Mt,dt.width,dt.height);for(let xe=0;xe<6;xe++){he=We[xe].mipmaps;for(let qe=0;qe<he.length;qe++){let Pe=he[qe];T.format!==Gn?ct!==null?at?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,0,0,Pe.width,Pe.height,ct,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,Mt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,0,0,Pe.width,Pe.height,ct,Ke,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,Mt,Pe.width,Pe.height,0,ct,Ke,Pe.data)}}}else{if(he=T.mipmaps,at&&mt){he.length>0&&He++;let xe=Se(We[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,He,Mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){at?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,We[xe].width,We[xe].height,ct,Ke,We[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Mt,We[xe].width,We[xe].height,0,ct,Ke,We[xe].data);for(let qe=0;qe<he.length;qe++){let gt=he[qe].image[xe].image;at?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,0,0,gt.width,gt.height,ct,Ke,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,Mt,gt.width,gt.height,0,ct,Ke,gt.data)}}else{at?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ct,Ke,We[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Mt,ct,Ke,We[xe]);for(let qe=0;qe<he.length;qe++){let Pe=he[qe];at?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,0,0,ct,Ke,Pe.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,Mt,ct,Ke,Pe.image[xe])}}}b(T)&&g(s.TEXTURE_CUBE_MAP),pe.__version=me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function U(P,T,j,te,me,pe){let Be=r.convert(j.format,j.colorSpace),Le=r.convert(j.type),Ve=w(j.internalFormat,Be,Le,j.colorSpace);if(!n.get(T).__hasExternalTextures){let Ee=Math.max(1,T.width>>pe),We=Math.max(1,T.height>>pe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,pe,Ve,Ee,We,T.depth,0,Be,Le,null):t.texImage2D(me,pe,Ve,Ee,We,0,Be,Le,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Me(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,me,n.get(j).__webglTexture,0,Ae(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,me,n.get(j).__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(P,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){let te=T.depthTexture,me=te&&te.isDepthTexture?te.type:null,pe=M(T.stencilBuffer,me),Be=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=Ae(T);Me(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,pe,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,P)}else{let te=T.textures;for(let me=0;me<te.length;me++){let pe=te[me],Be=r.convert(pe.format,pe.colorSpace),Le=r.convert(pe.type),Ve=w(pe.internalFormat,Be,Le,pe.colorSpace),_t=Ae(T);j&&Me(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,Ve,T.width,T.height):Me(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,Ve,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Q(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);let te=n.get(T.depthTexture).__webglTexture,me=Ae(T);if(T.depthTexture.format===Cr)Me(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(T.depthTexture.format===gs)Me(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function fe(P){let T=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let te=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),te){let me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,te.removeEventListener("dispose",me)};te.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=te}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Q(T.__webglFramebuffer,P)}else if(j){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]===void 0)T.__webglDepthbuffer[te]=s.createRenderbuffer(),ee(T.__webglDepthbuffer[te],P,!1);else{let me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ee(T.__webglDepthbuffer,P,!1);else{let te=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(P,T,j){let te=n.get(P);T!==void 0&&U(te.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&fe(P)}function Re(P){let T=P.texture,j=n.get(P),te=n.get(T);P.addEventListener("dispose",L);let me=P.textures,pe=P.isWebGLCubeRenderTarget===!0,Be=me.length>1;if(Be||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=T.version,a.memory.textures++),pe){j.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Le]=[];for(let Ve=0;Ve<T.mipmaps.length;Ve++)j.__webglFramebuffer[Le][Ve]=s.createFramebuffer()}else j.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)j.__webglFramebuffer[Le]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Be)for(let Le=0,Ve=me.length;Le<Ve;Le++){let _t=n.get(me[Le]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Me(P)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Le=0;Le<me.length;Le++){let Ve=me[Le];j.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Le]);let _t=r.convert(Ve.format,Ve.colorSpace),Ee=r.convert(Ve.type),We=w(Ve.internalFormat,_t,Ee,Ve.colorSpace,P.isXRRenderTarget===!0),dt=Ae(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,We,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,j.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),$(s.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)U(j.__webglFramebuffer[Le][Ve],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ve);else U(j.__webglFramebuffer[Le],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);b(T)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Le=0,Ve=me.length;Le<Ve;Le++){let _t=me[Le],Ee=n.get(_t);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),$(s.TEXTURE_2D,_t),U(j.__webglFramebuffer,P,_t,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,0),b(_t)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let Le=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Le,te.__webglTexture),$(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)U(j.__webglFramebuffer[Ve],P,T,s.COLOR_ATTACHMENT0,Le,Ve);else U(j.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,Le,0);b(T)&&g(Le),t.unbindTexture()}P.depthBuffer&&fe(P)}function ke(P){let T=P.textures;for(let j=0,te=T.length;j<te;j++){let me=T[j];if(b(me)){let pe=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Be=n.get(me).__webglTexture;t.bindTexture(pe,Be),g(pe),t.unbindTexture()}}}let re=[],I=[];function Ce(P){if(P.samples>0){if(Me(P)===!1){let T=P.textures,j=P.width,te=P.height,me=s.COLOR_BUFFER_BIT,pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=n.get(P),Le=T.length>1;if(Le)for(let Ve=0;Ve<T.length;Ve++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ve=0;Ve<T.length;Ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);let _t=n.get(T[Ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_t,0)}s.blitFramebuffer(0,0,j,te,0,0,j,te,me,s.NEAREST),l===!0&&(re.length=0,I.length=0,re.push(s.COLOR_ATTACHMENT0+Ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(pe),I.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let Ve=0;Ve<T.length;Ve++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);let _t=n.get(T[Ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,_t,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ae(P){return Math.min(i.maxSamples,P.samples)}function Me(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ie(P){let T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Xe(P,T){let j=P.colorSpace,te=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==An&&j!==hs&&(It.getTransfer(j)===Xt?(te!==Gn||me!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Se(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=R,this.setTexture2D=J,this.setTexture2DArray=de,this.setTexture3D=Z,this.setTextureCube=ve,this.rebindTextures=_e,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=U,this.useMultisampledRTT=Me}function rv(s,e){function t(n,i=hs){let r,a=It.getTransfer(i);if(n===xi)return s.UNSIGNED_BYTE;if(n===Yu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ku)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qp)return s.BYTE;if(n===jp)return s.SHORT;if(n===za)return s.UNSIGNED_SHORT;if(n===ju)return s.INT;if(n===Hs)return s.UNSIGNED_INT;if(n===_i)return s.FLOAT;if(n===Wn)return s.HALF_FLOAT;if(n===Kp)return s.ALPHA;if(n===Zp)return s.RGB;if(n===Gn)return s.RGBA;if(n===Jp)return s.LUMINANCE;if(n===$p)return s.LUMINANCE_ALPHA;if(n===Cr)return s.DEPTH_COMPONENT;if(n===gs)return s.DEPTH_STENCIL;if(n===Zu)return s.RED;if(n===Ju)return s.RED_INTEGER;if(n===Qp)return s.RG;if(n===$u)return s.RG_INTEGER;if(n===Qu)return s.RGBA_INTEGER;if(n===ml||n===gl||n===bl||n===_l)if(a===Xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ml)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_l)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ph||n===Ih||n===Dh||n===Lh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ih)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kh||n===Nh||n===Uh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kh||n===Nh)return a===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oh||n===Fh||n===zh||n===Bh||n===Hh||n===Gh||n===Vh||n===Wh||n===Xh||n===qh||n===jh||n===Yh||n===Kh||n===Zh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zh)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xl||n===Jh||n===$h)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xl)return a===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===em||n===Qh||n===eu||n===tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var gu=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},av={type:"move"},Na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let b=t.getJointPose(v,n),g=this._getHandJoint(c,v);b!==null&&(g.matrix.fromArray(b.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=b.radius),g.visible=b!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(av)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new wn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zt({vertexShader:ov,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends Ai{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null,v=new bu,b=t.getContextAttributes(),g=null,w=null,M=[],E=[],O=new ue,L=null,k=new dn;k.layers.enable(1),k.viewport=new Ot;let B=new dn;B.layers.enable(2),B.viewport=new Ot;let ie=[k,B],S=new gu;S.layers.enable(1),S.layers.enable(2);let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let U=M[H];return U===void 0&&(U=new Na,M[H]=U),U.getTargetRaySpace()},this.getControllerGrip=function(H){let U=M[H];return U===void 0&&(U=new Na,M[H]=U),U.getGripSpace()},this.getHand=function(H){let U=M[H];return U===void 0&&(U=new Na,M[H]=U),U.getHandSpace()};function K(H){let U=E.indexOf(H.inputSource);if(U===-1)return;let ee=M[U];ee!==void 0&&(ee.update(H.inputSource,H.frame,c||a),ee.dispatchEvent({type:H.type,data:H.inputSource}))}function J(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",de);for(let H=0;H<M.length;H++){let U=E[H];U!==null&&(E[H]=null,M[H].disconnect(U))}R=null,Y=null,v.reset(),e.setRenderTarget(g),p=null,f=null,d=null,i=null,w=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",J),i.addEventListener("inputsourceschange",de),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){let U={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Tn(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let U=null,ee=null,Q=null;b.depth&&(Q=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=b.stencil?gs:Cr,ee=b.stencil?ms:Hs);let fe={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Tn(f.textureWidth,f.textureHeight,{format:Gn,type:xi,depthTexture:new Br(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function de(H){for(let U=0;U<H.removed.length;U++){let ee=H.removed[U],Q=E.indexOf(ee);Q>=0&&(E[Q]=null,M[Q].disconnect(ee))}for(let U=0;U<H.added.length;U++){let ee=H.added[U],Q=E.indexOf(ee);if(Q===-1){for(let _e=0;_e<M.length;_e++)if(_e>=E.length){E.push(ee),Q=_e;break}else if(E[_e]===null){E[_e]=ee,Q=_e;break}if(Q===-1)break}let fe=M[Q];fe&&fe.connect(ee)}}let Z=new D,ve=new D;function oe(H,U,ee){Z.setFromMatrixPosition(U.matrixWorld),ve.setFromMatrixPosition(ee.matrixWorld);let Q=Z.distanceTo(ve),fe=U.projectionMatrix.elements,_e=ee.projectionMatrix.elements,Re=fe[14]/(fe[10]-1),ke=fe[14]/(fe[10]+1),re=(fe[9]+1)/fe[5],I=(fe[9]-1)/fe[5],Ce=(fe[8]-1)/fe[0],Ae=(_e[8]+1)/_e[0],Me=Re*Ce,Ie=Re*Ae,Xe=Q/(-Ce+Ae),Se=Xe*-Ce;if(U.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Se),H.translateZ(Xe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),fe[10]===-1)H.projectionMatrix.copy(U.projectionMatrix),H.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let P=Re+Xe,T=ke+Xe,j=Me-Se,te=Ie+(Q-Se),me=re*ke/T*P,pe=I*ke/T*P;H.projectionMatrix.makePerspective(j,te,me,pe,P,T),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function V(H,U){U===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(U.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let U=H.near,ee=H.far;v.texture!==null&&(v.depthNear>0&&(U=v.depthNear),v.depthFar>0&&(ee=v.depthFar)),S.near=B.near=k.near=U,S.far=B.far=k.far=ee,(R!==S.near||Y!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,Y=S.far);let Q=H.parent,fe=S.cameras;V(S,Q);for(let _e=0;_e<fe.length;_e++)V(fe[_e],Q);fe.length===2?oe(S,k,B):S.projectionMatrix.copy(k.projectionMatrix),F(H,S,Q)};function F(H,U,ee){ee===null?H.matrix.copy(U.matrixWorld):(H.matrix.copy(ee.matrixWorld),H.matrix.invert(),H.matrix.multiply(U.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(U.projectionMatrix),H.projectionMatrixInverse.copy(U.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Or*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let $=null;function le(H,U){if(u=U.getViewerPose(c||a),_=U,u!==null){let ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Q=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,Q=!0);for(let _e=0;_e<ee.length;_e++){let Re=ee[_e],ke=null;if(p!==null)ke=p.getViewport(Re);else{let I=d.getViewSubImage(f,Re);ke=I.viewport,_e===0&&(e.setRenderTargetTextures(w,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(w))}let re=ie[_e];re===void 0&&(re=new dn,re.layers.enable(_e),re.viewport=new Ot,ie[_e]=re),re.matrix.fromArray(Re.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Re.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ke.x,ke.y,ke.width,ke.height),_e===0&&(S.matrix.copy(re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Q===!0&&S.cameras.push(re)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")){let _e=d.getDepthInformation(ee[0]);_e&&_e.isValid&&_e.texture&&v.init(e,_e,i.renderState)}}for(let ee=0;ee<M.length;ee++){let Q=E[ee],fe=M[ee];Q!==null&&fe!==void 0&&fe.update(Q,U,c||a)}$&&$(H,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),_=null}let be=new am;be.setAnimationLoop(le),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}},Os=new Ri,cv=new lt;function hv(s,e){function t(b,g){b.matrixAutoUpdate===!0&&b.updateMatrix(),g.value.copy(b.matrix)}function n(b,g){g.color.getRGB(b.fogColor.value,rm(s)),g.isFog?(b.fogNear.value=g.near,b.fogFar.value=g.far):g.isFogExp2&&(b.fogDensity.value=g.density)}function i(b,g,w,M,E){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(b,g):g.isMeshToonMaterial?(r(b,g),d(b,g)):g.isMeshPhongMaterial?(r(b,g),u(b,g)):g.isMeshStandardMaterial?(r(b,g),f(b,g),g.isMeshPhysicalMaterial&&p(b,g,E)):g.isMeshMatcapMaterial?(r(b,g),_(b,g)):g.isMeshDepthMaterial?r(b,g):g.isMeshDistanceMaterial?(r(b,g),v(b,g)):g.isMeshNormalMaterial?r(b,g):g.isLineBasicMaterial?(a(b,g),g.isLineDashedMaterial&&o(b,g)):g.isPointsMaterial?l(b,g,w,M):g.isSpriteMaterial?c(b,g):g.isShadowMaterial?(b.color.value.copy(g.color),b.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(b,g){b.opacity.value=g.opacity,g.color&&b.diffuse.value.copy(g.color),g.emissive&&b.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(b.map.value=g.map,t(g.map,b.mapTransform)),g.alphaMap&&(b.alphaMap.value=g.alphaMap,t(g.alphaMap,b.alphaMapTransform)),g.bumpMap&&(b.bumpMap.value=g.bumpMap,t(g.bumpMap,b.bumpMapTransform),b.bumpScale.value=g.bumpScale,g.side===Ln&&(b.bumpScale.value*=-1)),g.normalMap&&(b.normalMap.value=g.normalMap,t(g.normalMap,b.normalMapTransform),b.normalScale.value.copy(g.normalScale),g.side===Ln&&b.normalScale.value.negate()),g.displacementMap&&(b.displacementMap.value=g.displacementMap,t(g.displacementMap,b.displacementMapTransform),b.displacementScale.value=g.displacementScale,b.displacementBias.value=g.displacementBias),g.emissiveMap&&(b.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,b.emissiveMapTransform)),g.specularMap&&(b.specularMap.value=g.specularMap,t(g.specularMap,b.specularMapTransform)),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest);let w=e.get(g),M=w.envMap,E=w.envMapRotation;M&&(b.envMap.value=M,Os.copy(E),Os.x*=-1,Os.y*=-1,Os.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),b.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(Os)),b.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=g.reflectivity,b.ior.value=g.ior,b.refractionRatio.value=g.refractionRatio),g.lightMap&&(b.lightMap.value=g.lightMap,b.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,b.lightMapTransform)),g.aoMap&&(b.aoMap.value=g.aoMap,b.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,b.aoMapTransform))}function a(b,g){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,g.map&&(b.map.value=g.map,t(g.map,b.mapTransform))}function o(b,g){b.dashSize.value=g.dashSize,b.totalSize.value=g.dashSize+g.gapSize,b.scale.value=g.scale}function l(b,g,w,M){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,b.size.value=g.size*w,b.scale.value=M*.5,g.map&&(b.map.value=g.map,t(g.map,b.uvTransform)),g.alphaMap&&(b.alphaMap.value=g.alphaMap,t(g.alphaMap,b.alphaMapTransform)),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest)}function c(b,g){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,b.rotation.value=g.rotation,g.map&&(b.map.value=g.map,t(g.map,b.mapTransform)),g.alphaMap&&(b.alphaMap.value=g.alphaMap,t(g.alphaMap,b.alphaMapTransform)),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest)}function u(b,g){b.specular.value.copy(g.specular),b.shininess.value=Math.max(g.shininess,1e-4)}function d(b,g){g.gradientMap&&(b.gradientMap.value=g.gradientMap)}function f(b,g){b.metalness.value=g.metalness,g.metalnessMap&&(b.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,b.metalnessMapTransform)),b.roughness.value=g.roughness,g.roughnessMap&&(b.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,b.roughnessMapTransform)),g.envMap&&(b.envMapIntensity.value=g.envMapIntensity)}function p(b,g,w){b.ior.value=g.ior,g.sheen>0&&(b.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),b.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(b.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,b.sheenColorMapTransform)),g.sheenRoughnessMap&&(b.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,b.sheenRoughnessMapTransform))),g.clearcoat>0&&(b.clearcoat.value=g.clearcoat,b.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(b.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,b.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(b.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&b.clearcoatNormalScale.value.negate())),g.dispersion>0&&(b.dispersion.value=g.dispersion),g.iridescence>0&&(b.iridescence.value=g.iridescence,b.iridescenceIOR.value=g.iridescenceIOR,b.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(b.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,b.iridescenceMapTransform)),g.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),g.transmission>0&&(b.transmission.value=g.transmission,b.transmissionSamplerMap.value=w.texture,b.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(b.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,b.transmissionMapTransform)),b.thickness.value=g.thickness,g.thicknessMap&&(b.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=g.attenuationDistance,b.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(b.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(b.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=g.specularIntensity,b.specularColor.value.copy(g.specularColor),g.specularColorMap&&(b.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,b.specularColorMapTransform)),g.specularIntensityMap&&(b.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,b.specularIntensityMapTransform))}function _(b,g){g.matcap&&(b.matcap.value=g.matcap)}function v(b,g){let w=e.get(g).light;b.referencePosition.value.setFromMatrixPosition(w.matrixWorld),b.nearDistance.value=w.shadow.camera.near,b.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uv(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){let E=M.program;n.uniformBlockBinding(w,E)}function c(w,M){let E=i[w.id];E===void 0&&(_(w),E=u(w),i[w.id]=E,w.addEventListener("dispose",b));let O=M.program;n.updateUBOMapping(w,O);let L=e.render.frame;r[w.id]!==L&&(f(w),r[w.id]=L)}function u(w){let M=d();w.__bindingPointIndex=M;let E=s.createBuffer(),O=w.__size,L=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,O,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,E),E}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let M=i[w.id],E=w.uniforms,O=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let L=0,k=E.length;L<k;L++){let B=Array.isArray(E[L])?E[L]:[E[L]];for(let ie=0,S=B.length;ie<S;ie++){let R=B[ie];if(p(R,L,ie,O)===!0){let Y=R.__offset,K=Array.isArray(R.value)?R.value:[R.value],J=0;for(let de=0;de<K.length;de++){let Z=K[de],ve=v(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,Y+J,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,J),J+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,M,E,O){let L=w.value,k=M+"_"+E;if(O[k]===void 0)return typeof L=="number"||typeof L=="boolean"?O[k]=L:O[k]=L.clone(),!0;{let B=O[k];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return O[k]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function _(w){let M=w.uniforms,E=0,O=16;for(let k=0,B=M.length;k<B;k++){let ie=Array.isArray(M[k])?M[k]:[M[k]];for(let S=0,R=ie.length;S<R;S++){let Y=ie[S],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let J=0,de=K.length;J<de;J++){let Z=K[J],ve=v(Z),oe=E%O,V=oe%ve.boundary,F=oe+V;E+=V,F!==0&&O-F<ve.storage&&(E+=O-F),Y.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=ve.storage}}}let L=E%O;return L>0&&(E+=O-L),w.__size=E,w.__cache={},this}function v(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function b(w){let M=w.target;M.removeEventListener("dispose",b);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(let w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}var Dl=class{constructor(e={}){let{canvas:t=m0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),_=new Int32Array(4),v=null,b=null,g=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=fs,this.toneMappingExposure=1;let M=this,E=!1,O=0,L=0,k=null,B=-1,ie=null,S=new Ot,R=new Ot,Y=null,K=new tt(0),J=0,de=t.width,Z=t.height,ve=1,oe=null,V=null,F=new Ot(0,0,de,Z),$=new Ot(0,0,de,Z),le=!1,be=new Ga,H=!1,U=!1,ee=new lt,Q=new lt,fe=new D,_e=new Ot,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function re(){return k===null?ve:1}let I=n;function Ce(C,X){return t.getContext(C,X)}try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zu}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),I===null){let X="webgl2";if(I=Ce(X,C),I===null)throw Ce(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ae,Me,Ie,Xe,Se,P,T,j,te,me,pe,Be,Le,Ve,_t,Ee,We,dt,ct,Ke,Mt,at,mt,G;function He(){Ae=new Ax(I),Ae.init(),at=new rv(I,Ae),Me=new vx(I,Ae,e,at),Ie=new nv(I),Me.reverseDepthBuffer&&Ie.buffers.depth.setReversed(!0),Xe=new Px(I),Se=new Vy,P=new sv(I,Ae,Ie,Se,Me,at,Xe),T=new Sx(M),j=new Tx(M),te=new O0(I),mt=new xx(I,te),me=new Rx(I,te,Xe,mt),pe=new Dx(I,me,te,Xe),ct=new Ix(I,Me,P),Ee=new Mx(Se),Be=new Gy(M,T,j,Ae,Me,mt,Ee),Le=new hv(M,Se),Ve=new Xy,_t=new Jy(Ae),dt=new _x(M,T,j,Ie,pe,f,l),We=new ev(M,pe,Me),G=new uv(I,Xe,Me,Ie),Ke=new yx(I,Ae,Xe),Mt=new Cx(I,Ae,Xe),Xe.programs=Be.programs,M.capabilities=Me,M.extensions=Ae,M.properties=Se,M.renderLists=Ve,M.shadowMap=We,M.state=Ie,M.info=Xe}He();let he=new _u(M,I);this.xr=he,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(C){C!==void 0&&(ve=C,this.setSize(de,Z,!1))},this.getSize=function(C){return C.set(de,Z)},this.setSize=function(C,X,ne=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,Z=X,t.width=Math.floor(C*ve),t.height=Math.floor(X*ve),ne===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(de*ve,Z*ve).floor()},this.setDrawingBufferSize=function(C,X,ne){de=C,Z=X,ve=ne,t.width=Math.floor(C*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,X,ne,se){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,X,ne,se),Ie.viewport(S.copy(F).multiplyScalar(ve).round())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,X,ne,se){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,X,ne,se),Ie.scissor(R.copy($).multiplyScalar(ve).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){Ie.setScissorTest(le=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){V=C},this.getClearColor=function(C){return C.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(C=!0,X=!0,ne=!0){let se=0;if(C){let q=!1;if(k!==null){let Ne=k.texture.format;q=Ne===Qu||Ne===$u||Ne===Ju}if(q){let Ne=k.texture.type,Ye=Ne===xi||Ne===Hs||Ne===za||Ne===ms||Ne===Yu||Ne===Ku,Qe=dt.getClearColor(),et=dt.getClearAlpha(),ae=Qe.r,nt=Qe.g,it=Qe.b;Ye?(p[0]=ae,p[1]=nt,p[2]=it,p[3]=et,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=ae,_[1]=nt,_[2]=it,_[3]=et,I.clearBufferiv(I.COLOR,0,_))}else se|=I.COLOR_BUFFER_BIT}X&&(se|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ne&&(se|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ve.dispose(),_t.dispose(),Se.dispose(),T.dispose(),j.dispose(),pe.dispose(),mt.dispose(),G.dispose(),Be.dispose(),he.dispose(),he.removeEventListener("sessionstart",ia),he.removeEventListener("sessionend",kn),Ii.stop()};function xe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=Xe.autoReset,X=We.enabled,ne=We.autoUpdate,se=We.needsUpdate,q=We.type;He(),Xe.autoReset=C,We.enabled=X,We.autoUpdate=ne,We.needsUpdate=se,We.type=q}function Pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function gt(C){let X=C.target;X.removeEventListener("dispose",gt),nn(X)}function nn(C){vn(C),Se.remove(C)}function vn(C){let X=Se.get(C).programs;X!==void 0&&(X.forEach(function(ne){Be.releaseProgram(ne)}),C.isShaderMaterial&&Be.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ne,se,q,Ne){X===null&&(X=Re);let Ye=q.isMesh&&q.matrixWorld.determinant()<0,Qe=Mc(C,X,ne,se,q);Ie.setMaterial(se,Ye);let et=ne.index,ae=1;if(se.wireframe===!0){if(et=me.getWireframeAttribute(ne),et===void 0)return;ae=2}let nt=ne.drawRange,it=ne.attributes.position,St=nt.start*ae,kt=(nt.start+nt.count)*ae;Ne!==null&&(St=Math.max(St,Ne.start*ae),kt=Math.min(kt,(Ne.start+Ne.count)*ae)),et!==null?(St=Math.max(St,0),kt=Math.min(kt,et.count)):it!=null&&(St=Math.max(St,0),kt=Math.min(kt,it.count));let Yt=kt-St;if(Yt<0||Yt===1/0)return;mt.setup(q,se,Qe,ne,et);let Pn,Fe=Ke;if(et!==null&&(Pn=te.get(et),Fe=Mt,Fe.setIndex(Pn)),q.isMesh)se.wireframe===!0?(Ie.setLineWidth(se.wireframeLinewidth*re()),Fe.setMode(I.LINES)):Fe.setMode(I.TRIANGLES);else if(q.isLine){let ze=se.linewidth;ze===void 0&&(ze=1),Ie.setLineWidth(ze*re()),q.isLineSegments?Fe.setMode(I.LINES):q.isLineLoop?Fe.setMode(I.LINE_LOOP):Fe.setMode(I.LINE_STRIP)}else q.isPoints?Fe.setMode(I.POINTS):q.isSprite&&Fe.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Fe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Fe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let ze=q._multiDrawStarts,zt=q._multiDrawCounts,ht=q._multiDrawCount,jn=et?te.get(et).bytesPerElement:1,en=Se.get(se).currentProgram.getUniforms();for(let Mn=0;Mn<ht;Mn++)en.setValue(I,"_gl_DrawID",Mn),Fe.render(ze[Mn]/jn,zt[Mn])}else if(q.isInstancedMesh)Fe.renderInstances(St,Yt,q.count);else if(ne.isInstancedBufferGeometry){let ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,zt=Math.min(ne.instanceCount,ze);Fe.renderInstances(St,Yt,zt)}else Fe.render(St,Yt)};function Lt(C,X,ne){C.transparent===!0&&C.side===on&&C.forceSinglePass===!1?(C.side=Ln,C.needsUpdate=!0,Bn(C,X,ne),C.side=Ti,C.needsUpdate=!0,Bn(C,X,ne),C.side=on):Bn(C,X,ne)}this.compile=function(C,X,ne=null){ne===null&&(ne=C),b=_t.get(ne),b.init(X),w.push(b),ne.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),C!==ne&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights();let se=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ne=q.material;if(Ne)if(Array.isArray(Ne))for(let Ye=0;Ye<Ne.length;Ye++){let Qe=Ne[Ye];Lt(Qe,ne,q),se.add(Qe)}else Lt(Ne,ne,q),se.add(Ne)}),w.pop(),b=null,se},this.compileAsync=function(C,X,ne=null){let se=this.compile(C,X,ne);return new Promise(q=>{function Ne(){if(se.forEach(function(Ye){Se.get(Ye).currentProgram.isReady()&&se.delete(Ye)}),se.size===0){q(C);return}setTimeout(Ne,10)}Ae.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Rn=null;function Dt(C){Rn&&Rn(C)}function ia(){Ii.stop()}function kn(){Ii.start()}let Ii=new am;Ii.setAnimationLoop(Dt),typeof self!="undefined"&&Ii.setContext(self),this.setAnimationLoop=function(C){Rn=C,he.setAnimationLoop(C),C===null?Ii.stop():Ii.start()},he.addEventListener("sessionstart",ia),he.addEventListener("sessionend",kn),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(X),X=he.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,X,k),b=_t.get(C,w.length),b.init(X),w.push(b),Q.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),be.setFromProjectionMatrix(Q),U=this.localClippingEnabled,H=Ee.init(this.clippingPlanes,U),v=Ve.get(C,g.length),v.init(),g.push(v),he.enabled===!0&&he.isPresenting===!0){let Ne=M.xr.getDepthSensingMesh();Ne!==null&&Zi(Ne,X,-1/0,M.sortObjects)}Zi(C,X,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(oe,V),ke=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ke&&dt.addToRenderList(v,C),this.info.render.frame++,H===!0&&Ee.beginShadows();let ne=b.state.shadowsArray;We.render(ne,C,X),H===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=v.opaque,q=v.transmissive;if(b.setupLights(),X.isArrayCamera){let Ne=X.cameras;if(q.length>0)for(let Ye=0,Qe=Ne.length;Ye<Qe;Ye++){let et=Ne[Ye];mo(se,q,C,et)}ke&&dt.render(C);for(let Ye=0,Qe=Ne.length;Ye<Qe;Ye++){let et=Ne[Ye];Ji(v,C,et,et.viewport)}}else q.length>0&&mo(se,q,C,X),ke&&dt.render(C),Ji(v,C,X);k!==null&&(P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(M,C,X),mt.resetDefaultState(),B=-1,ie=null,w.pop(),w.length>0?(b=w[w.length-1],H===!0&&Ee.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Zi(C,X,ne,se){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||be.intersectsSprite(C)){se&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);let Ye=pe.update(C),Qe=C.material;Qe.visible&&v.push(C,Ye,Qe,ne,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||be.intersectsObject(C))){let Ye=pe.update(C),Qe=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),_e.copy(Ye.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(Q)),Array.isArray(Qe)){let et=Ye.groups;for(let ae=0,nt=et.length;ae<nt;ae++){let it=et[ae],St=Qe[it.materialIndex];St&&St.visible&&v.push(C,Ye,St,ne,_e.z,it)}}else Qe.visible&&v.push(C,Ye,Qe,ne,_e.z,null)}}let Ne=C.children;for(let Ye=0,Qe=Ne.length;Ye<Qe;Ye++)Zi(Ne[Ye],X,ne,se)}function Ji(C,X,ne,se){let q=C.opaque,Ne=C.transmissive,Ye=C.transparent;b.setupLightsView(ne),H===!0&&Ee.setGlobalState(M.clippingPlanes,ne),se&&Ie.viewport(S.copy(se)),q.length>0&&$i(q,X,ne),Ne.length>0&&$i(Ne,X,ne),Ye.length>0&&$i(Ye,X,ne),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function mo(C,X,ne,se){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[se.id]===void 0&&(b.state.transmissionRenderTarget[se.id]=new Tn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Wn:xi,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));let Ne=b.state.transmissionRenderTarget[se.id],Ye=se.viewport||S;Ne.setSize(Ye.z,Ye.w);let Qe=M.getRenderTarget();M.setRenderTarget(Ne),M.getClearColor(K),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),ke&&dt.render(ne);let et=M.toneMapping;M.toneMapping=fs;let ae=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),b.setupLightsView(se),H===!0&&Ee.setGlobalState(M.clippingPlanes,se),$i(C,ne,se),P.updateMultisampleRenderTarget(Ne),P.updateRenderTargetMipmap(Ne),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let it=0,St=X.length;it<St;it++){let kt=X[it],Yt=kt.object,Pn=kt.geometry,Fe=kt.material,ze=kt.group;if(Fe.side===on&&Yt.layers.test(se.layers)){let zt=Fe.side;Fe.side=Ln,Fe.needsUpdate=!0,sa(Yt,ne,se,Pn,Fe,ze),Fe.side=zt,Fe.needsUpdate=!0,nt=!0}}nt===!0&&(P.updateMultisampleRenderTarget(Ne),P.updateRenderTargetMipmap(Ne))}M.setRenderTarget(Qe),M.setClearColor(K,J),ae!==void 0&&(se.viewport=ae),M.toneMapping=et}function $i(C,X,ne){let se=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ne=C.length;q<Ne;q++){let Ye=C[q],Qe=Ye.object,et=Ye.geometry,ae=se===null?Ye.material:se,nt=Ye.group;Qe.layers.test(ne.layers)&&sa(Qe,X,ne,et,ae,nt)}}function sa(C,X,ne,se,q,Ne){C.onBeforeRender(M,X,ne,se,q,Ne),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(M,X,ne,se,C,Ne),q.transparent===!0&&q.side===on&&q.forceSinglePass===!1?(q.side=Ln,q.needsUpdate=!0,M.renderBufferDirect(ne,X,se,q,C,Ne),q.side=Ti,q.needsUpdate=!0,M.renderBufferDirect(ne,X,se,q,C,Ne),q.side=on):M.renderBufferDirect(ne,X,se,q,C,Ne),C.onAfterRender(M,X,ne,se,q,Ne)}function Bn(C,X,ne){X.isScene!==!0&&(X=Re);let se=Se.get(C),q=b.state.lights,Ne=b.state.shadowsArray,Ye=q.state.version,Qe=Be.getParameters(C,q.state,Ne,X,ne),et=Be.getProgramCacheKey(Qe),ae=se.programs;se.environment=C.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(C.isMeshStandardMaterial?j:T).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,ae===void 0&&(C.addEventListener("dispose",gt),ae=new Map,se.programs=ae);let nt=ae.get(et);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===Ye)return $s(C,Qe),nt}else Qe.uniforms=Be.getUniforms(C),C.onBeforeCompile(Qe,M),nt=Be.acquireProgram(Qe,et),ae.set(et,nt),se.uniforms=Qe.uniforms;let it=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=Ee.uniform),$s(C,Qe),se.needsLights=Di(C),se.lightsStateVersion=Ye,se.needsLights&&(it.ambientLightColor.value=q.state.ambient,it.lightProbe.value=q.state.probe,it.directionalLights.value=q.state.directional,it.directionalLightShadows.value=q.state.directionalShadow,it.spotLights.value=q.state.spot,it.spotLightShadows.value=q.state.spotShadow,it.rectAreaLights.value=q.state.rectArea,it.ltc_1.value=q.state.rectAreaLTC1,it.ltc_2.value=q.state.rectAreaLTC2,it.pointLights.value=q.state.point,it.pointLightShadows.value=q.state.pointShadow,it.hemisphereLights.value=q.state.hemi,it.directionalShadowMap.value=q.state.directionalShadowMap,it.directionalShadowMatrix.value=q.state.directionalShadowMatrix,it.spotShadowMap.value=q.state.spotShadowMap,it.spotLightMatrix.value=q.state.spotLightMatrix,it.spotLightMap.value=q.state.spotLightMap,it.pointShadowMap.value=q.state.pointShadowMap,it.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function go(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=Ir.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function $s(C,X){let ne=Se.get(C);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function Mc(C,X,ne,se,q){X.isScene!==!0&&(X=Re),P.resetTextureUnits();let Ne=X.fog,Ye=se.isMeshStandardMaterial?X.environment:null,Qe=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:An,et=(se.isMeshStandardMaterial?j:T).get(se.envMap||Ye),ae=se.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),it=!!ne.morphAttributes.position,St=!!ne.morphAttributes.normal,kt=!!ne.morphAttributes.color,Yt=fs;se.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Yt=M.toneMapping);let Pn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Fe=Pn!==void 0?Pn.length:0,ze=Se.get(se),zt=b.state.lights;if(H===!0&&(U===!0||C!==ie)){let rn=C===ie&&se.id===B;Ee.setState(se,C,rn)}let ht=!1;se.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==zt.state.version||ze.outputColorSpace!==Qe||q.isBatchedMesh&&ze.batching===!1||!q.isBatchedMesh&&ze.batching===!0||q.isBatchedMesh&&ze.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ze.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ze.instancing===!1||!q.isInstancedMesh&&ze.instancing===!0||q.isSkinnedMesh&&ze.skinning===!1||!q.isSkinnedMesh&&ze.skinning===!0||q.isInstancedMesh&&ze.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ze.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ze.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ze.instancingMorph===!1&&q.morphTexture!==null||ze.envMap!==et||se.fog===!0&&ze.fog!==Ne||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ee.numPlanes||ze.numIntersection!==Ee.numIntersection)||ze.vertexAlphas!==ae||ze.vertexTangents!==nt||ze.morphTargets!==it||ze.morphNormals!==St||ze.morphColors!==kt||ze.toneMapping!==Yt||ze.morphTargetsCount!==Fe)&&(ht=!0):(ht=!0,ze.__version=se.version);let jn=ze.currentProgram;ht===!0&&(jn=Bn(se,X,q));let en=!1,Mn=!1,Yn=!1,Vt=jn.getUniforms(),hi=ze.uniforms;if(Ie.useProgram(jn.program)&&(en=!0,Mn=!0,Yn=!0),se.id!==B&&(B=se.id,Mn=!0),en||ie!==C){Me.reverseDepthBuffer?(ee.copy(C.projectionMatrix),b0(ee),_0(ee),Vt.setValue(I,"projectionMatrix",ee)):Vt.setValue(I,"projectionMatrix",C.projectionMatrix),Vt.setValue(I,"viewMatrix",C.matrixWorldInverse);let rn=Vt.map.cameraPosition;rn!==void 0&&rn.setValue(I,fe.setFromMatrixPosition(C.matrixWorld)),Me.logarithmicDepthBuffer&&Vt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Vt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),ie!==C&&(ie=C,Mn=!0,Yn=!0)}if(q.isSkinnedMesh){Vt.setOptional(I,q,"bindMatrix"),Vt.setOptional(I,q,"bindMatrixInverse");let rn=q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Vt.setValue(I,"boneTexture",rn.boneTexture,P))}q.isBatchedMesh&&(Vt.setOptional(I,q,"batchingTexture"),Vt.setValue(I,"batchingTexture",q._matricesTexture,P),Vt.setOptional(I,q,"batchingIdTexture"),Vt.setValue(I,"batchingIdTexture",q._indirectTexture,P),Vt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Vt.setValue(I,"batchingColorTexture",q._colorsTexture,P));let Ts=ne.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&ct.update(q,ne,jn),(Mn||ze.receiveShadow!==q.receiveShadow)&&(ze.receiveShadow=q.receiveShadow,Vt.setValue(I,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(hi.envMap.value=et,hi.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(hi.envMapIntensity.value=X.environmentIntensity),Mn&&(Vt.setValue(I,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&Sc(hi,Yn),Ne&&se.fog===!0&&Le.refreshFogUniforms(hi,Ne),Le.refreshMaterialUniforms(hi,se,ve,Z,b.state.transmissionRenderTarget[C.id]),Ir.upload(I,go(ze),hi,P)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ir.upload(I,go(ze),hi,P),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Vt.setValue(I,"center",q.center),Vt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Vt.setValue(I,"normalMatrix",q.normalMatrix),Vt.setValue(I,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let rn=se.uniformsGroups;for(let As=0,bo=rn.length;As<bo;As++){let Qi=rn[As];G.update(Qi,jn),G.bind(Qi,jn)}}return jn}function Sc(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Di(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,X,ne){Se.get(C.texture).__webglTexture=X,Se.get(C.depthTexture).__webglTexture=ne;let se=Se.get(C);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ne===void 0,se.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){let ne=Se.get(C);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ne=0){k=C,O=X,L=ne;let se=!0,q=null,Ne=!1,Ye=!1;if(C){let et=Se.get(C);if(et.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(I.FRAMEBUFFER,null),se=!1;else if(et.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(et.__hasExternalTextures)P.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let it=C.depthTexture;if(et.__boundDepthTexture!==it){if(it!==null&&Se.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}let ae=C.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Ye=!0);let nt=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?q=nt[X][ne]:q=nt[X],Ne=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?q=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[ne]:q=nt,S.copy(C.viewport),R.copy(C.scissor),Y=C.scissorTest}else S.copy(F).multiplyScalar(ve).floor(),R.copy($).multiplyScalar(ve).floor(),Y=le;if(Ie.bindFramebuffer(I.FRAMEBUFFER,q)&&se&&Ie.drawBuffers(C,q),Ie.viewport(S),Ie.scissor(R),Ie.setScissorTest(Y),Ne){let et=Se.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,et.__webglTexture,ne)}else if(Ye){let et=Se.get(C.texture),ae=X||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,et.__webglTexture,ne||0,ae)}B=-1},this.readRenderTargetPixels=function(C,X,ne,se,q,Ne,Ye){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){Ie.bindFramebuffer(I.FRAMEBUFFER,Qe);try{let et=C.texture,ae=et.format,nt=et.type;if(!Me.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-se&&ne>=0&&ne<=C.height-q&&I.readPixels(X,ne,se,q,at.convert(ae),at.convert(nt),Ne)}finally{let et=k!==null?Se.get(k).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(C,X,ne,se,q,Ne,Ye){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){let et=C.texture,ae=et.format,nt=et.type;if(!Me.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-se&&ne>=0&&ne<=C.height-q){Ie.bindFramebuffer(I.FRAMEBUFFER,Qe);let it=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.bufferData(I.PIXEL_PACK_BUFFER,Ne.byteLength,I.STREAM_READ),I.readPixels(X,ne,se,q,at.convert(ae),at.convert(nt),0);let St=k!==null?Se.get(k).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,St);let kt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await g0(I,kt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ne),I.deleteBuffer(it),I.deleteSync(kt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,ne=0){C.isTexture!==!0&&(yl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);let se=Math.pow(2,-ne),q=Math.floor(C.image.width*se),Ne=Math.floor(C.image.height*se),Ye=X!==null?X.x:0,Qe=X!==null?X.y:0;P.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,ne,0,0,Ye,Qe,q,Ne),Ie.unbindTexture()},this.copyTextureToTexture=function(C,X,ne=null,se=null,q=0){C.isTexture!==!0&&(yl("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,C=arguments[1],X=arguments[2],q=arguments[3]||0,ne=null);let Ne,Ye,Qe,et,ae,nt;ne!==null?(Ne=ne.max.x-ne.min.x,Ye=ne.max.y-ne.min.y,Qe=ne.min.x,et=ne.min.y):(Ne=C.image.width,Ye=C.image.height,Qe=0,et=0),se!==null?(ae=se.x,nt=se.y):(ae=0,nt=0);let it=at.convert(X.format),St=at.convert(X.type);P.setTexture2D(X,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);let kt=I.getParameter(I.UNPACK_ROW_LENGTH),Yt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Pn=I.getParameter(I.UNPACK_SKIP_PIXELS),Fe=I.getParameter(I.UNPACK_SKIP_ROWS),ze=I.getParameter(I.UNPACK_SKIP_IMAGES),zt=C.isCompressedTexture?C.mipmaps[q]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,zt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,q,ae,nt,Ne,Ye,it,St,zt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,q,ae,nt,zt.width,zt.height,it,zt.data):I.texSubImage2D(I.TEXTURE_2D,q,ae,nt,Ne,Ye,it,St,zt),I.pixelStorei(I.UNPACK_ROW_LENGTH,kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ze),q===0&&X.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ne=null,se=null,q=0){C.isTexture!==!0&&(yl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,se=arguments[1]||null,C=arguments[2],X=arguments[3],q=arguments[4]||0);let Ne,Ye,Qe,et,ae,nt,it,St,kt,Yt=C.isCompressedTexture?C.mipmaps[q]:C.image;ne!==null?(Ne=ne.max.x-ne.min.x,Ye=ne.max.y-ne.min.y,Qe=ne.max.z-ne.min.z,et=ne.min.x,ae=ne.min.y,nt=ne.min.z):(Ne=Yt.width,Ye=Yt.height,Qe=Yt.depth,et=0,ae=0,nt=0),se!==null?(it=se.x,St=se.y,kt=se.z):(it=0,St=0,kt=0);let Pn=at.convert(X.format),Fe=at.convert(X.type),ze;if(X.isData3DTexture)P.setTexture3D(X,0),ze=I.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)P.setTexture2DArray(X,0),ze=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);let zt=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),jn=I.getParameter(I.UNPACK_SKIP_PIXELS),en=I.getParameter(I.UNPACK_SKIP_ROWS),Mn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,et),I.pixelStorei(I.UNPACK_SKIP_ROWS,ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,nt),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(ze,q,it,St,kt,Ne,Ye,Qe,Pn,Fe,Yt.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(ze,q,it,St,kt,Ne,Ye,Qe,Pn,Yt.data):I.texSubImage3D(ze,q,it,St,kt,Ne,Ye,Qe,Pn,Fe,Yt),I.pixelStorei(I.UNPACK_ROW_LENGTH,zt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,jn),I.pixelStorei(I.UNPACK_SKIP_ROWS,en),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mn),q===0&&X.generateMipmaps&&I.generateMipmap(ze),Ie.unbindTexture()},this.initRenderTarget=function(C){Se.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Ie.unbindTexture()},this.resetState=function(){O=0,L=0,k=null,Ie.reset(),mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===id?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===rc?"display-p3":"srgb"}};var Ll=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hr=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nu,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Un=new D,Gs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vr=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_r,Ea=new D,xr=new D,yr=new D,vr=new ue,wa=new ue,um=new lt,nl=new D,Ta=new D,il=new D,gp=new ue,hh=new ue,bp=new ue,Va=class extends $t{constructor(e=new Vr){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new Kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gr(t,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new Gs(n,3,0,!1)),_r.setAttribute("uv",new Gs(n,2,3,!1))}this.geometry=_r,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),um.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-yr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;sl(nl.set(-.5,-.5,0),yr,a,xr,i,r),sl(Ta.set(.5,-.5,0),yr,a,xr,i,r),sl(il.set(.5,.5,0),yr,a,xr,i,r),gp.set(0,0),hh.set(1,0),bp.set(1,1);let o=e.ray.intersectTriangle(nl,Ta,il,!1,Ea);if(o===null&&(sl(Ta.set(-.5,.5,0),yr,a,xr,i,r),hh.set(0,1),o=e.ray.intersectTriangle(nl,il,Ta,!1,Ea),o===null))return;let l=e.ray.origin.distanceTo(Ea);l<e.near||l>e.far||t.push({distance:l,point:Ea.clone(),uv:us.getInterpolation(Ea,nl,Ta,il,gp,hh,bp,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function sl(s,e,t,n,i,r){vr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(wa.x=r*vr.x-i*vr.y,wa.y=i*vr.x+r*vr.y):wa.copy(vr),s.copy(e),s.x+=wa.x,s.y+=wa.y,s.applyMatrix4(um)}var _p=new D,xp=new Ot,yp=new Ot,dv=new D,vp=new lt,rl=new D,uh=new $n,Mp=new lt,dh=new Vi,kl=class extends ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tf,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingBox.expandByPoint(rl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingSphere.expandByPoint(rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uh.copy(this.boundingSphere),uh.applyMatrix4(i),e.ray.intersectsSphere(uh)!==!1&&(Mp.copy(i).invert(),dh.copy(e.ray).applyMatrix4(Mp),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;xp.fromBufferAttribute(i.attributes.skinIndex,e),yp.fromBufferAttribute(i.attributes.skinWeight,e),_p.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=yp.getComponent(r);if(a!==0){let o=xp.getComponent(r);vp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(dv.copy(_p).applyMatrix4(vp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Wa=class extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}},_s=class extends wn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=fn,u=fn,d,f){super(null,a,o,l,c,u,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sp=new lt,fv=new lt,Nl=class s{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:fv;Sp.multiplyMatrices(o,t[r]),Sp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _s(t,e,e,Gn,_i);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Wa),this.bones.push(a),this.boneInverses.push(new lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Vs=class extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new lt,Ep=new lt,al=[],wp=new gn,pv=new lt,Aa=new ce,Ra=new $n,Ul=class extends ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),wp.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(wp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Ra.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(Ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(n),e.ray.intersectsSphere(Ra)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mr),Ep.multiplyMatrices(n,Mr),Aa.matrixWorld=Ep,Aa.raycast(e,al);for(let a=0,o=al.length;a<o;a++){let l=al[a];l.instanceId=r,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(i*this.count),i,this.count,Zu,_i));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Xa=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ol=new D,Fl=new D,Tp=new lt,Ca=new Vi,ol=new $n,fh=new D,Ap=new D,Wr=class extends $t{constructor(e=new Kt,t=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ol.fromBufferAttribute(t,i-1),Fl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ol.distanceTo(Fl);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(i),ol.radius+=r,e.ray.intersectsSphere(ol)===!1)return;Tp.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Tp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,b=_-1;v<b;v+=c){let g=u.getX(v),w=u.getX(v+1),M=ll(this,e,Ca,l,g,w);M&&t.push(M)}if(this.isLineLoop){let v=u.getX(_-1),b=u.getX(p),g=ll(this,e,Ca,l,v,b);g&&t.push(g)}}else{let p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=p,b=_-1;v<b;v+=c){let g=ll(this,e,Ca,l,v,v+1);g&&t.push(g)}if(this.isLineLoop){let v=ll(this,e,Ca,l,_-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ll(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(Ol.fromBufferAttribute(a,i),Fl.fromBufferAttribute(a,r),t.distanceSqToSegment(Ol,Fl,fh,Ap)>n)return;fh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(fh);if(!(l<e.near||l>e.far))return{distance:l,point:Ap.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Rp=new D,Cp=new D,zl=class extends Wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Rp.fromBufferAttribute(t,i),Cp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rp.distanceTo(Cp);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Bl=class extends Wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ws=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pp=new lt,xu=new Vi,cl=new $n,hl=new D,Xr=class extends $t{constructor(e=new Kt,t=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(i),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;Pp.copy(i).invert(),xu.copy(e.ray).applyMatrix4(Pp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,v=p;_<v;_++){let b=c.getX(_);hl.fromBufferAttribute(d,b),Ip(hl,b,l,i,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,v=p;_<v;_++)hl.fromBufferAttribute(d,_),Ip(hl,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ip(s,e,t,n,i,r,a){let o=xu.distanceSqToPoint(s);if(o<t){let l=new D;xu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var qa=class extends wn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let u=n[i],f=n[i+1]-u,p=(a-u)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ue:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],r=[],a=[],o=new D,l=new lt;for(let p=0;p<=e;p++){let _=p/e;i[p]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(un(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(un(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ja=class extends ri{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yu=class extends ja{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ad(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,p*=u,i(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var ul=new D,ph=new ad,mh=new ad,gh=new ad,Ya=class extends ri{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(ul.subVectors(i[0],i[1]).add(i[0]),c=ul);let d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(ul.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ul),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),b=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),_<1e-4&&(_=v),b<1e-4&&(b=v),ph.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,_,v,b),mh.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,_,v,b),gh.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,_,v,b)}else this.curveType==="catmullrom"&&(ph.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),mh.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),gh.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(ph.calc(l),mh.calc(l),gh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dp(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function mv(s,e){let t=1-s;return t*t*e}function gv(s,e){return 2*(1-s)*s*e}function bv(s,e){return s*s*e}function Ua(s,e,t,n){return mv(s,e)+gv(s,t)+bv(s,n)}function _v(s,e){let t=1-s;return t*t*t*e}function xv(s,e){let t=1-s;return 3*t*t*s*e}function yv(s,e){return 3*(1-s)*s*s*e}function vv(s,e){return s*s*s*e}function Oa(s,e,t,n,i){return _v(s,e)+xv(s,t)+yv(s,n)+vv(s,i)}var Hl=class extends ri{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,i.x,r.x,a.x,o.x),Oa(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vu=class extends ri{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,i.x,r.x,a.x,o.x),Oa(e,i.y,r.y,a.y,o.y),Oa(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gl=class extends ri{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mu=class extends ri{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vl=class extends ri{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ua(e,i.x,r.x,a.x),Ua(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xs=class extends ri{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ua(e,i.x,r.x,a.x),Ua(e,i.y,r.y,a.y),Ua(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Dp(o,l.x,c.x,u.x,d.x),Dp(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ue().fromArray(i))}return this}},Xl=Object.freeze({__proto__:null,ArcCurve:yu,CatmullRomCurve3:Ya,CubicBezierCurve:Hl,CubicBezierCurve3:vu,EllipseCurve:ja,LineCurve:Gl,LineCurve3:Mu,QuadraticBezierCurve:Vl,QuadraticBezierCurve3:xs,SplineCurve:Wl}),Su=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Xl[i.type]().fromJSON(i))}return this}},ql=class extends Su{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gl(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Vl(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Hl(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new ja(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ci=class s extends Kt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=un(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new D,f=new ue,p=new D,_=new D,v=new D,b=0,g=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:b=e[w+1].x-e[w].x,g=e[w+1].y-e[w].y,p.x=g*1,p.y=-b,p.z=g*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:b=e[w+1].x-e[w].x,g=e[w+1].y-e[w].y,p.x=g*1,p.y=-b,p.z=g*0,_.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(_)}for(let w=0;w<=t;w++){let M=n+w*u*i,E=Math.sin(M),O=Math.cos(M);for(let L=0;L<=e.length-1;L++){d.x=e[L].x*E,d.y=e[L].y,d.z=e[L].x*O,a.push(d.x,d.y,d.z),f.x=w/t,f.y=L/(e.length-1),o.push(f.x,f.y);let k=l[3*L+0]*E,B=l[3*L+1],ie=l[3*L+0]*O;c.push(k,B,ie)}}for(let w=0;w<t;w++)for(let M=0;M<e.length-1;M++){let E=M+w*e.length,O=E,L=E+e.length,k=E+e.length+1,B=E+1;r.push(O,L,B),r.push(k,B,L)}this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("uv",new Ct(o,2)),this.setAttribute("normal",new Ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ft=class s extends Kt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],f=[],p=[],_=0,v=[],b=n/2,g=0;w(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(p,2));function w(){let E=new D,O=new D,L=0,k=(t-e)/n;for(let B=0;B<=r;B++){let ie=[],S=B/r,R=S*(t-e)+e;for(let Y=0;Y<=i;Y++){let K=Y/i,J=K*l+o,de=Math.sin(J),Z=Math.cos(J);O.x=R*de,O.y=-S*n+b,O.z=R*Z,d.push(O.x,O.y,O.z),E.set(de,k,Z).normalize(),f.push(E.x,E.y,E.z),p.push(K,1-S),ie.push(_++)}v.push(ie)}for(let B=0;B<i;B++)for(let ie=0;ie<r;ie++){let S=v[ie][B],R=v[ie+1][B],Y=v[ie+1][B+1],K=v[ie][B+1];e>0&&(u.push(S,R,K),L+=3),t>0&&(u.push(R,Y,K),L+=3)}c.addGroup(g,L,0),g+=L}function M(E){let O=_,L=new ue,k=new D,B=0,ie=E===!0?e:t,S=E===!0?1:-1;for(let Y=1;Y<=i;Y++)d.push(0,b*S,0),f.push(0,S,0),p.push(.5,.5),_++;let R=_;for(let Y=0;Y<=i;Y++){let J=Y/i*l+o,de=Math.cos(J),Z=Math.sin(J);k.x=ie*Z,k.y=b*S,k.z=ie*de,d.push(k.x,k.y,k.z),f.push(0,S,0),L.x=de*.5+.5,L.y=Z*.5*S+.5,p.push(L.x,L.y),_++}for(let Y=0;Y<i;Y++){let K=O+Y,J=R+Y;E===!0?u.push(J,J+1,K):u.push(J+1,J,K),B+=3}c.addGroup(g,B,E===!0?1:2),g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ka=class s extends Ft{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Wi=class extends ql{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ql().fromJSON(i))}return this}},Mv={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=dm(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,f,p;if(n&&(r=Av(s,e,r,t)),s.length>80*t){o=c=s[0],l=u=s[1];for(let _=t;_<i;_+=t)d=s[_],f=s[_+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Za(r,a,t,o,l,p,0),a}};function dm(s,e,t,n,i){let r,a;if(i===Fv(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Lp(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Lp(r,s[r],s[r+1],a);return a&&lc(a,a.next)&&($a(a),a=a.next),a}function Xs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(lc(t,t.next)||tn(t.prev,t,t.next)===0)){if($a(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Za(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Dv(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ev(s,n,i,r):Sv(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),$a(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=wv(Xs(s),e,t),Za(s,e,t,n,i,r,2)):a===2&&Tv(s,e,t,n,i,r):Za(Xs(s),e,t,n,i,r,1);break}}}function Sv(s){let e=s.prev,t=s,n=s.next;if(tn(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<r?i<a?i:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=d&&_.y<=p&&Ar(i,o,r,l,a,c,_.x,_.y)&&tn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Ev(s,e,t,n){let i=s.prev,r=s,a=s.next;if(tn(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,u=i.y,d=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,_=u<d?u<f?u:f:d<f?d:f,v=o>l?o>c?o:c:l>c?l:c,b=u>d?u>f?u:f:d>f?d:f,g=Eu(p,_,e,t,n),w=Eu(v,b,e,t,n),M=s.prevZ,E=s.nextZ;for(;M&&M.z>=g&&E&&E.z<=w;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=b&&M!==i&&M!==a&&Ar(o,u,l,d,c,f,M.x,M.y)&&tn(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=p&&E.x<=v&&E.y>=_&&E.y<=b&&E!==i&&E!==a&&Ar(o,u,l,d,c,f,E.x,E.y)&&tn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=g;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=b&&M!==i&&M!==a&&Ar(o,u,l,d,c,f,M.x,M.y)&&tn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=w;){if(E.x>=p&&E.x<=v&&E.y>=_&&E.y<=b&&E!==i&&E!==a&&Ar(o,u,l,d,c,f,E.x,E.y)&&tn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function wv(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!lc(i,r)&&fm(i,n,n.next,r)&&Ja(i,r)&&Ja(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$a(n),$a(n.next),n=s=r),n=n.next}while(n!==s);return Xs(n)}function Tv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nv(a,o)){let l=pm(a,o);a=Xs(a,a.next),l=Xs(l,l.next),Za(a,e,t,n,i,r,0),Za(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Av(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=dm(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(kv(c));for(i.sort(Rv),r=0;r<i.length;r++)t=Cv(i[r],t);return t}function Rv(s,e){return s.x-e.x}function Cv(s,e){let t=Pv(s,e);if(!t)return e;let n=pm(t,s);return Xs(n,n.next),Xs(t,t.next)}function Pv(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,u=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ar(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Ja(t,s)&&(d<u||d===u&&(t.x>i.x||t.x===i.x&&Iv(i,t)))&&(i=t,u=d)),t=t.next;while(t!==o);return i}function Iv(s,e){return tn(s.prev,s,e.prev)<0&&tn(e.next,s,s.next)<0}function Dv(s,e,t,n){let i=s;do i.z===0&&(i.z=Eu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Lv(i)}function Lv(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Eu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function kv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ar(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Nv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Uv(s,e)&&(Ja(s,e)&&Ja(e,s)&&Ov(s,e)&&(tn(s.prev,s,e.prev)||tn(s,e.prev,e))||lc(s,e)&&tn(s.prev,s,s.next)>0&&tn(e.prev,e,e.next)>0)}function tn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function lc(s,e){return s.x===e.x&&s.y===e.y}function fm(s,e,t,n){let i=fl(tn(s,e,t)),r=fl(tn(s,e,n)),a=fl(tn(t,n,s)),o=fl(tn(t,n,e));return!!(i!==r&&a!==o||i===0&&dl(s,t,e)||r===0&&dl(s,n,e)||a===0&&dl(t,s,n)||o===0&&dl(t,e,n))}function dl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function fl(s){return s>0?1:s<0?-1:0}function Uv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&fm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ja(s,e){return tn(s.prev,s,s.next)<0?tn(s,e,s.next)>=0&&tn(s,s.prev,e)>=0:tn(s,e,s.prev)<0||tn(s,s.next,e)<0}function Ov(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function pm(s,e){let t=new wu(s.i,s.x,s.y),n=new wu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lp(s,e,t,n){let i=new wu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $a(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fv(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var ps=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];kp(e),Np(n,e);let a=e.length;t.forEach(kp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Np(n,t[l]);let o=Mv.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function kp(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Np(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var qr=class s extends Kt{constructor(e=new Wi([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ct(i,3)),this.setAttribute("uv",new Ct(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:zv,M,E=!1,O,L,k,B;g&&(M=g.getSpacedPoints(u),E=!0,f=!1,O=g.computeFrenetFrames(u,!1),L=new D,k=new D,B=new D),f||(b=0,p=0,_=0,v=0);let ie=o.extractPoints(c),S=ie.shape,R=ie.holes;if(!ps.isClockWise(S)){S=S.reverse();for(let re=0,I=R.length;re<I;re++){let Ce=R[re];ps.isClockWise(Ce)&&(R[re]=Ce.reverse())}}let K=ps.triangulateShape(S,R),J=S;for(let re=0,I=R.length;re<I;re++){let Ce=R[re];S=S.concat(Ce)}function de(re,I,Ce){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(I,Ce)}let Z=S.length,ve=K.length;function oe(re,I,Ce){let Ae,Me,Ie,Xe=re.x-I.x,Se=re.y-I.y,P=Ce.x-re.x,T=Ce.y-re.y,j=Xe*Xe+Se*Se,te=Xe*T-Se*P;if(Math.abs(te)>Number.EPSILON){let me=Math.sqrt(j),pe=Math.sqrt(P*P+T*T),Be=I.x-Se/me,Le=I.y+Xe/me,Ve=Ce.x-T/pe,_t=Ce.y+P/pe,Ee=((Ve-Be)*T-(_t-Le)*P)/(Xe*T-Se*P);Ae=Be+Xe*Ee-re.x,Me=Le+Se*Ee-re.y;let We=Ae*Ae+Me*Me;if(We<=2)return new ue(Ae,Me);Ie=Math.sqrt(We/2)}else{let me=!1;Xe>Number.EPSILON?P>Number.EPSILON&&(me=!0):Xe<-Number.EPSILON?P<-Number.EPSILON&&(me=!0):Math.sign(Se)===Math.sign(T)&&(me=!0),me?(Ae=-Se,Me=Xe,Ie=Math.sqrt(j)):(Ae=Xe,Me=Se,Ie=Math.sqrt(j/2))}return new ue(Ae/Ie,Me/Ie)}let V=[];for(let re=0,I=J.length,Ce=I-1,Ae=re+1;re<I;re++,Ce++,Ae++)Ce===I&&(Ce=0),Ae===I&&(Ae=0),V[re]=oe(J[re],J[Ce],J[Ae]);let F=[],$,le=V.concat();for(let re=0,I=R.length;re<I;re++){let Ce=R[re];$=[];for(let Ae=0,Me=Ce.length,Ie=Me-1,Xe=Ae+1;Ae<Me;Ae++,Ie++,Xe++)Ie===Me&&(Ie=0),Xe===Me&&(Xe=0),$[Ae]=oe(Ce[Ae],Ce[Ie],Ce[Xe]);F.push($),le=le.concat($)}for(let re=0;re<b;re++){let I=re/b,Ce=p*Math.cos(I*Math.PI/2),Ae=_*Math.sin(I*Math.PI/2)+v;for(let Me=0,Ie=J.length;Me<Ie;Me++){let Xe=de(J[Me],V[Me],Ae);Q(Xe.x,Xe.y,-Ce)}for(let Me=0,Ie=R.length;Me<Ie;Me++){let Xe=R[Me];$=F[Me];for(let Se=0,P=Xe.length;Se<P;Se++){let T=de(Xe[Se],$[Se],Ae);Q(T.x,T.y,-Ce)}}}let be=_+v;for(let re=0;re<Z;re++){let I=f?de(S[re],le[re],be):S[re];E?(k.copy(O.normals[0]).multiplyScalar(I.x),L.copy(O.binormals[0]).multiplyScalar(I.y),B.copy(M[0]).add(k).add(L),Q(B.x,B.y,B.z)):Q(I.x,I.y,0)}for(let re=1;re<=u;re++)for(let I=0;I<Z;I++){let Ce=f?de(S[I],le[I],be):S[I];E?(k.copy(O.normals[re]).multiplyScalar(Ce.x),L.copy(O.binormals[re]).multiplyScalar(Ce.y),B.copy(M[re]).add(k).add(L),Q(B.x,B.y,B.z)):Q(Ce.x,Ce.y,d/u*re)}for(let re=b-1;re>=0;re--){let I=re/b,Ce=p*Math.cos(I*Math.PI/2),Ae=_*Math.sin(I*Math.PI/2)+v;for(let Me=0,Ie=J.length;Me<Ie;Me++){let Xe=de(J[Me],V[Me],Ae);Q(Xe.x,Xe.y,d+Ce)}for(let Me=0,Ie=R.length;Me<Ie;Me++){let Xe=R[Me];$=F[Me];for(let Se=0,P=Xe.length;Se<P;Se++){let T=de(Xe[Se],$[Se],Ae);E?Q(T.x,T.y+M[u-1].y,M[u-1].x+Ce):Q(T.x,T.y,d+Ce)}}}H(),U();function H(){let re=i.length/3;if(f){let I=0,Ce=Z*I;for(let Ae=0;Ae<ve;Ae++){let Me=K[Ae];fe(Me[2]+Ce,Me[1]+Ce,Me[0]+Ce)}I=u+b*2,Ce=Z*I;for(let Ae=0;Ae<ve;Ae++){let Me=K[Ae];fe(Me[0]+Ce,Me[1]+Ce,Me[2]+Ce)}}else{for(let I=0;I<ve;I++){let Ce=K[I];fe(Ce[2],Ce[1],Ce[0])}for(let I=0;I<ve;I++){let Ce=K[I];fe(Ce[0]+Z*u,Ce[1]+Z*u,Ce[2]+Z*u)}}n.addGroup(re,i.length/3-re,0)}function U(){let re=i.length/3,I=0;ee(J,I),I+=J.length;for(let Ce=0,Ae=R.length;Ce<Ae;Ce++){let Me=R[Ce];ee(Me,I),I+=Me.length}n.addGroup(re,i.length/3-re,1)}function ee(re,I){let Ce=re.length;for(;--Ce>=0;){let Ae=Ce,Me=Ce-1;Me<0&&(Me=re.length-1);for(let Ie=0,Xe=u+b*2;Ie<Xe;Ie++){let Se=Z*Ie,P=Z*(Ie+1),T=I+Ae+Se,j=I+Me+Se,te=I+Me+P,me=I+Ae+P;_e(T,j,te,me)}}}function Q(re,I,Ce){l.push(re),l.push(I),l.push(Ce)}function fe(re,I,Ce){Re(re),Re(I),Re(Ce);let Ae=i.length/3,Me=w.generateTopUV(n,i,Ae-3,Ae-2,Ae-1);ke(Me[0]),ke(Me[1]),ke(Me[2])}function _e(re,I,Ce,Ae){Re(re),Re(I),Re(Ae),Re(I),Re(Ce),Re(Ae);let Me=i.length/3,Ie=w.generateSideWallUV(n,i,Me-6,Me-3,Me-2,Me-1);ke(Ie[0]),ke(Ie[1]),ke(Ie[3]),ke(Ie[1]),ke(Ie[2]),ke(Ie[3])}function Re(re){i.push(l[re*3+0]),i.push(l[re*3+1]),i.push(l[re*3+2])}function ke(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Xl[i.type]().fromJSON(i)),new s(n,e.options)}},zv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ue(r,a),new ue(o,l),new ue(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[i*3],p=e[i*3+1],_=e[i*3+2],v=e[r*3],b=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-d),new ue(f,1-_),new ue(v,1-g)]:[new ue(o,1-l),new ue(u,1-d),new ue(p,1-_),new ue(b,1-g)]}};function Bv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qa=class s extends Kt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],d=e,f=(t-e)/i,p=new D,_=new ue;for(let v=0;v<=i;v++){for(let b=0;b<=n;b++){let g=r+b/n*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let v=0;v<i;v++){let b=v*(n+1);for(let g=0;g<n;g++){let w=g+b,M=w,E=w+n+1,O=w+n+2,L=w+1;o.push(M,E,L),o.push(E,O,L)}}this.setIndex(o),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},eo=class s extends Kt{constructor(e=new Wi([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ct(i,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(a,2));function c(u){let d=i.length/3,f=u.extractPoints(t),p=f.shape,_=f.holes;ps.isClockWise(p)===!1&&(p=p.reverse());for(let b=0,g=_.length;b<g;b++){let w=_[b];ps.isClockWise(w)===!0&&(_[b]=w.reverse())}let v=ps.triangulateShape(p,_);for(let b=0,g=_.length;b<g;b++){let w=_[b];p=p.concat(w)}for(let b=0,g=p.length;b<g;b++){let w=p[b];i.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let b=0,g=v.length;b<g;b++){let w=v[b],M=w[0]+d,E=w[1]+d,O=w[2]+d;n.push(M,E,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Hv(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function Hv(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Vn=class s extends Kt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new D,f=new D,p=[],_=[],v=[],b=[];for(let g=0;g<=n;g++){let w=[],M=g/n,E=0;g===0&&a===0?E=.5/t:g===n&&l===Math.PI&&(E=-.5/t);for(let O=0;O<=t;O++){let L=O/t;d.x=-e*Math.cos(i+L*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(i+L*r)*Math.sin(a+M*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),b.push(L+E,1-M),w.push(c++)}u.push(w)}for(let g=0;g<n;g++)for(let w=0;w<t;w++){let M=u[g][w+1],E=u[g][w],O=u[g+1][w],L=u[g+1][w+1];(g!==0||a>0)&&p.push(M,E,L),(g!==n-1||l<Math.PI)&&p.push(E,O,L)}this.setIndex(p),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jr=class s extends Kt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],u=new D,d=new D,f=new D;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){let v=_/i*r,b=p/n*Math.PI*2;d.x=(e+t*Math.cos(b))*Math.cos(v),d.y=(e+t*Math.cos(b))*Math.sin(v),d.z=t*Math.sin(b),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){let v=(i+1)*p+_-1,b=(i+1)*(p-1)+_-1,g=(i+1)*(p-1)+_,w=(i+1)*p+_;a.push(v,b,w),a.push(b,g,w)}this.setIndex(a),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var qs=class s extends Kt{constructor(e=new xs(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new ue,u=new D,d=[],f=[],p=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(p,2));function v(){for(let M=0;M<t;M++)b(M);b(r===!1?t:0),w(),g()}function b(M){u=e.getPointAt(M/t,u);let E=a.normals[M],O=a.binormals[M];for(let L=0;L<=i;L++){let k=L/i*Math.PI*2,B=Math.sin(k),ie=-Math.cos(k);l.x=ie*E.x+B*O.x,l.y=ie*E.y+B*O.y,l.z=ie*E.z+B*O.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=t;M++)for(let E=1;E<=i;E++){let O=(i+1)*(M-1)+(E-1),L=(i+1)*M+(E-1),k=(i+1)*M+E,B=(i+1)*(M-1)+E;_.push(O,L,B),_.push(L,k,B)}}function w(){for(let M=0;M<=t;M++)for(let E=0;E<=i;E++)c.x=M/t,c.y=E/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Xl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var jl=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$e=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qn=class extends $e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Yl=class extends Fn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function pl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Gv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Up(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function mm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ys=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tu=class extends ys{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Er,endingEnd:Er}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wr:r=e,o=2*t-n;break;case vl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wr:a=e,l=2*n-t;break;case vl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),v=_*_,b=v*_,g=-f*b+2*f*v-f*_,w=(1+f)*b+(-1.5-2*f)*v+(-.5+f)*_+1,M=(-1-p)*b+(1.5+p)*v+.5*_,E=p*b-p*v;for(let O=0;O!==o;++O)r[O]=g*a[u+O]+w*a[c+O]+M*a[l+O]+E*a[d+O];return r}},Kl=class extends ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},Au=class extends ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ai=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pl(t,this.TimeBufferType),this.values=pl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pl(e.times,Array),values:pl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Ur:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Gv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Uc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){let v=t[d+_];if(v!==t[f+_]||v!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Ur;var vs=class extends ai{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Nr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends ai{};Zl.prototype.ValueTypeName="color";var Xi=class extends ai{};Xi.prototype.ValueTypeName="number";var Ru=class extends ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},qi=class extends ai{InterpolantFactoryMethodLinear(e){return new Ru(this.times,this.values,this.getValueSize(),e)}};qi.prototype.ValueTypeName="quaternion";qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends ai{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Nr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends ai{};ji.prototype.ValueTypeName="vector";var Yr=class{constructor(e="",t=-1,n=[],i=td){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Xv(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ai.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Vv(l);l=Up(l,1,u),c=Up(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Xi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],f=i[d];f||(i[d]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,f,p,_,v){if(p.length!==0){let b=[],g=[];mm(p,b,g,_),b.length!==0&&v.push(new d(f,b,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)p[f[_].morphTargets[v]]=-1;for(let v in p){let b=[],g=[];for(let w=0;w!==f[_].morphTargets.length;++w){let M=f[_];b.push(M.time),g.push(M.morphTarget===v?1:0)}i.push(new Xi(".morphTargetInfluence["+v+"]",b,g))}l=p.length*a}else{let p=".bones["+t[d].name+"]";n(ji,p+".position",f,"pos",i),n(qi,p+".quaternion",f,"rot",i),n(ji,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Wv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return Zl;case"quaternion":return qi;case"bool":case"boolean":return vs;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Xv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Wv(s.type);if(s.times===void 0){let t=[],n=[];mm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var ds={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Cu=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},qv=new Cu,Yi=class{constructor(e){this.manager=e!==void 0?e:qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi={},Pu=class extends Error{constructor(e,t){super(e),this.response=t}},to=class extends Yi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:i});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Bi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0,v=0,b=new ReadableStream({start(g){w();function w(){d.read().then(({done:M,value:E})=>{if(M)g.close();else{v+=E.byteLength;let O=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let L=0,k=u.length;L<k;L++){let B=u[L];B.onProgress&&B.onProgress(O)}g.enqueue(E),w()}},M=>{g.error(M)})}}});return new Response(b)}else throw new Pu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{ds.add(e,c);let u=Bi[e];delete Bi[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Iu=class extends Yi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ds.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ba("img");function l(){u(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var js=class extends Yi{constructor(e){super(e)}load(e,t,n,i){let r=new wn,a=new Iu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Kr=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Jl=class extends Kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bh=new lt,Op=new D,Fp=new D,no=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Op.setFromMatrixPosition(e.matrixWorld),t.position.copy(Op),Fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fp),t.updateMatrixWorld(),bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Du=class extends no{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Or*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$l=class extends Kr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Du}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zp=new lt,Pa=new D,_h=new D,Lu=class extends no{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pa),_h.copy(n.position),_h.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_h),n.updateMatrixWorld(),i.makeTranslation(-Pa.x,-Pa.y,-Pa.z),zp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}},oi=class extends Kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ku=class extends no{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ys=class extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new ku}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ss=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ql=class extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ds.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ds.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ds.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ds.add(e,l),r.manager.itemStart(e)}};var Zr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Bp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Bp(){return performance.now()}var Nu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){mn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;mn.multiplyQuaternionsFlat(e,a,e,t,e,n),mn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},od="\\[\\]\\.:\\/",jv=new RegExp("["+od+"]","g"),ld="[^"+od+"]",Yv="[^"+od.replace("\\.","")+"]",Kv=/((?:WC+[\/:])*)/.source.replace("WC",ld),Zv=/(WCOD+)?/.source.replace("WCOD",Yv),Jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ld),$v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ld),Qv=new RegExp("^"+Kv+Zv+Jv+$v+"$"),eM=["material","materials","bones","map"],Uu=class{constructor(e,t,n){let i=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jv,"")}static parseTrackName(e){let t=Qv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);eM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=Uu;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ou=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Er,endingEnd:Er};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Bg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gg:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case td:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Hg;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===ed){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=wr,i.endingEnd=wr):(e?i.endingStart=this.zeroSlopeAtStart?wr:Er:i.endingStart=vl,t?i.endingEnd=this.zeroSlopeAtEnd?wr:Er:i.endingEnd=vl)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},tM=new Float32Array(1),Jr=class extends Ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){let f=i[d],p=f.name,_=u[p];if(_!==void 0)++_.referenceCount,a[d]=_;else{if(_=a[d],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}let v=t&&t._propertyBindings[d].binding.parsedPath;_=new Nu(qt.create(n,p,v),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),a[d]=_}o[d].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Kl(new Float32Array(2),new Float32Array(2),1,tM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Yr.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=td),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new Ou(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Yr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Hp=new lt,io=class{constructor(e,t,n=0,i=1/0){this.ray=new Vi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hp),this}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(Gp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Fu(e[i],this,n,t);return n.sort(Gp),n}};function Gp(s,e){return s.distance-e.distance}function Fu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Fu(r[a],e,t,!0)}}var so=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ec=class extends Ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zu);function cd(s,e){if(e===tm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ao||e===sc){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ao)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var cc=class extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Pd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ss.extractUrlBase(e);a=Ss.resolveURL(c,this.path)}else a=Ss.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new to(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vm){try{a[Pt.KHR_BINARY_GLTF]=new Id(e)}catch(d){i&&i(d);return}r=JSON.parse(a[Pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Fd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case Pt.KHR_MATERIALS_UNLIT:a[d]=new pd;break;case Pt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Dd(r,this.dracoLoader);break;case Pt.KHR_TEXTURE_TRANSFORM:a[d]=new Ld;break;case Pt.KHR_MESH_QUANTIZATION:a[d]=new kd;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function nM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fd=class{constructor(e){this.parser=e,this.name=Pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new tt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],An);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ys(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new oi(u),c.distance=d;break;case"spot":c=new $l(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},pd=class{constructor(){this.name=Pt.KHR_MATERIALS_UNLIT}getMaterialType(){return jt}extendParams(e,t,n){let i=[];e.color=new tt(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],An),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,sn))}return Promise.all(i)}},md=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},gd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(o,o)}return Promise.all(r)}},bd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},_d=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},xd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],An)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,sn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},yd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},vd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(o[0],o[1],o[2],An),Promise.all(r)}},Md=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Sd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(o[0],o[1],o[2],An),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,sn)),Promise.all(r)}},Ed=class{constructor(e){this.parser=e,this.name=Pt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},wd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Td=class{constructor(e){this.parser=e,this.name=Pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ad=class{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Rd=class{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Cd=class{constructor(e){this.name=Pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,f,i.mode,i.filter),p})})}else return null}},Pd=class{constructor(e){this.name=Pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==li.TRIANGLES&&c.mode!==li.TRIANGLE_STRIP&&c.mode!==li.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let _ of d){let v=new lt,b=new D,g=new mn,w=new D(1,1,1),M=new Ul(_.geometry,_.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&b.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,E),l.SCALE&&w.fromBufferAttribute(l.SCALE,E),M.setMatrixAt(E,v.compose(b,g,w));for(let E in l)if(E==="_COLOR_0"){let O=l[E];M.instanceColor=new Vs(O.array,O.itemSize,O.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,l[E]);$t.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},vm="glTF",oo=12,bm={JSON:1313821514,BIN:5130562},Id=class{constructor(e){this.name=Pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,oo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-oo,r=new DataView(e,oo),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===bm.JSON){let c=new Uint8Array(e,oo+a,o);this.content=n.decode(c)}else if(l===bm.BIN){let c=oo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Dd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=Ud[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=Ud[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=ea[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(p){for(let _ in p.attributes){let v=p.attributes[_],b=l[_];b!==void 0&&(v.normalized=b)}d(p)},o,c,An,f)})})}},Ld=class{constructor(){this.name=Pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},kd=class{constructor(){this.name=Pt.KHR_MESH_QUANTIZATION}},hc=class extends ys{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,f=d*d,p=f*d,_=e*c,v=_-c,b=-2*p+3*f,g=p-f,w=1-b,M=g-f+d;for(let E=0;E!==o;E++){let O=a[v+E+o],L=a[v+E+l]*u,k=a[_+E+o],B=a[_+E]*u;r[E]=w*O+M*L+b*k+g*B}return r}},iM=new mn,Nd=class extends hc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return iM.fromArray(r).normalize().toArray(r),r}},li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_m={9728:fn,9729:Hn,9984:qu,9985:Da,9986:Sr,9987:wi},xm={33071:Hi,33648:Fa,10497:ln},hd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ud={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sM={CUBICSPLINE:void 0,LINEAR:Ur,STEP:Nr},ud={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new $e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),s.DefaultMaterial}function Js(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ki(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function oM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lM(s){let e,t=s.extensions&&s.extensions[Pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dd(t.attributes):e=s.indices+":"+dd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+dd(s.targets[n]);return e}function dd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Od(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var hM=new lt,Fd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&a<98?this.textureLoader=new js(this.options.manager):this.textureLoader=new Ql(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new to(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Js(r,o,i),Ki(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Pt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ss.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=hd[i.type],o=ea[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Jt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=hd[i.type],c=ea[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,v,b;if(p&&p!==d){let g=Math.floor(f/p),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,M=t.cache.get(w);M||(v=new c(o,g*p,i.count*p/u),M=new Gr(v,p/u),t.cache.add(w,M)),b=new Gs(M,l,f%p/u,_)}else o===null?v=new c(i.count*l):v=new c(o,f,i.count*l),b=new Jt(v,l,_);if(i.sparse!==void 0){let g=hd.SCALAR,w=ea[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,O=new w(a[1],M,i.sparse.count*g),L=new c(a[2],E,i.sparse.count*l);o!==null&&(b=new Jt(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let k=0,B=O.length;k<B;k++){let ie=O[k];if(b.setX(ie,L[k*l]),l>=2&&b.setY(ie,L[k*l+1]),l>=3&&b.setZ(ie,L[k*l+2]),l>=4&&b.setW(ie,L[k*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=_}return b})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=_m[f.magFilter]||Hn,u.minFilter=_m[f.minFilter]||wi,u.wrapS=xm[f.wrapS]||ln,u.wrapT=xm[f.wrapT]||ln,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(v){let b=new wn(v);b.needsUpdate=!0,f(b)}),t.load(Ss.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Ki(d,a),d.userData.mimeType=a.mimeType||cM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Pt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ws,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Xa,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return $e}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Pt.KHR_MATERIALS_UNLIT]){let d=i[Pt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new tt(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],An),o.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,sn)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);let u=r.alphaMode||ud.OPAQUE;if(u===ud.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ud.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==jt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==jt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==jt){let d=r.emissiveFactor;o.emissive=new tt().setRGB(d[0],d[1],d[2],An)}return r.emissiveTexture!==void 0&&a!==jt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,sn)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Ki(d,r),t.associations.set(d,{materials:e}),r.extensions&&Js(i,d,r),d})}createUniqueName(e){let t=qt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ym(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=lM(c),d=i[u];if(d)a.push(d.promise);else{let f;c.extensions&&c.extensions[Pt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=ym(new Kt,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?rM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,_=u.length;p<_;p++){let v=u[p],b=a[p],g,w=c[p];if(b.mode===li.TRIANGLES||b.mode===li.TRIANGLE_STRIP||b.mode===li.TRIANGLE_FAN||b.mode===void 0)g=r.isSkinnedMesh===!0?new kl(v,w):new ce(v,w),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),b.mode===li.TRIANGLE_STRIP?g.geometry=cd(g.geometry,sc):b.mode===li.TRIANGLE_FAN&&(g.geometry=cd(g.geometry,ao));else if(b.mode===li.LINES)g=new zl(v,w);else if(b.mode===li.LINE_STRIP)g=new Wr(v,w);else if(b.mode===li.LINE_LOOP)g=new Bl(v,w);else if(b.mode===li.POINTS)g=new Xr(v,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(g.geometry.morphAttributes).length>0&&oM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ki(g,r),b.extensions&&Js(i,g,b),t.assignFinalMaterial(g),d.push(g)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Js(i,d[0],r),d[0];let f=new st;r.extensions&&Js(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(ac.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new bs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let f=new lt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Nl(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){let p=i.channels[d],_=i.samplers[p.sampler],v=p.target,b=v.node,g=i.parameters!==void 0?i.parameters[_.input]:_.input,w=i.parameters!==void 0?i.parameters[_.output]:_.output;v.node!==void 0&&(a.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",w)),c.push(_),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let f=d[0],p=d[1],_=d[2],v=d[3],b=d[4],g=[];for(let w=0,M=f.length;w<M;w++){let E=f[w],O=p[w],L=_[w],k=v[w],B=b[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let ie=n._createAnimationTracks(E,O,L,k,B);if(ie)for(let S=0;S<ie.length;S++)g.push(ie[S])}return new Yr(r,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,hM)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Wa:c.length>1?u=new st:c.length===1?u=c[0]:u=new $t,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Ki(u,r),r.extensions&&Js(n,u,r),r.matrix!==void 0){let d=new lt;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new st;n.name&&(r.name=i.createUniqueName(n.name)),Ki(r,n),n.extensions&&Js(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[f,p]of i.associations)(f instanceof Fn||f instanceof wn)&&d.set(f,p);return u.traverse(f=>{let p=i.associations.get(f);p!=null&&d.set(f,p)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];Es[r.path]===Es.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Es[r.path]){case Es.weights:c=Xi;break;case Es.rotation:c=qi;break;case Es.position:case Es.scale:c=ji;break;default:switch(n.itemSize){case 1:c=Xi;break;case 2:case 3:default:c=ji;break}break}let u=i.interpolation!==void 0?sM[i.interpolation]:Ur,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let _=new c(l[f]+"."+Es[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Od(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof qi?Nd:hc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function uM(s,e,t){let n=e.attributes,i=new gn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let u=Od(ea[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){let v=Od(ea[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new $n;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function ym(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Ud[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return It.workingColorSpace!==An&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${It.workingColorSpace}" not supported.`),Ki(s,e),uM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?aM(s,e.targets,t):s})}var Mm={type:"change"},Bd={type:"start"},Em={type:"end"},uc=new Vi,Sm=new Jn,dM=Math.cos(70*ac.DEG2RAD),yn=new D,qn=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zd=1e-6,dc=class extends ec{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:Zs.ROTATE,TWO:Zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new mn,this._lastTargetPosition=new D,this._quat=new mn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new so,this._sphericalDelta=new so,this._scale=1,this._panOffset=new D,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new D,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pM.bind(this),this._onPointerDown=fM.bind(this),this._onPointerUp=mM.bind(this),this._onContextMenu=MM.bind(this),this._onMouseWheel=_M.bind(this),this._onKeyDown=xM.bind(this),this._onTouchStart=yM.bind(this),this._onTouchMove=vM.bind(this),this._onMouseDown=gM.bind(this),this._onMouseMove=bM.bind(this),this._interceptControlDown=SM.bind(this),this._interceptControlUp=EM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mm),this.update(),this.state=Gt.NONE}update(e=null){let t=this.object.position;yn.copy(t).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=qn:n>Math.PI&&(n-=qn),i<-Math.PI?i+=qn:i>Math.PI&&(i-=qn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),t.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=yn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(uc.origin.copy(this.object.position),uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uc.direction))<dM?this.object.lookAt(this.target):(Sm.setFromNormalAndCoplanarPoint(this.object.up,this.target),uc.intersectPlane(Sm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zd||this._lastTargetPosition.distanceToSquared(this.target)>zd?(this.dispatchEvent(Mm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yn.setFromMatrixColumn(t,0),yn.multiplyScalar(-e),this._panOffset.add(yn)}_panUp(e,t){this.screenSpacePanning===!0?yn.setFromMatrixColumn(t,1):(yn.setFromMatrixColumn(t,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(e),this._panOffset.add(yn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;yn.copy(i).sub(this.target);let r=yn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(qn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-qn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(qn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-qn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function fM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function pM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function mM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Em),this.state=Gt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Gt.DOLLY;break;case Ks.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Gt.ROTATE}break;case Ks.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Bd)}function bM(s){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function _M(s){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(s.preventDefault(),this.dispatchEvent(Bd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Em))}function xM(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function yM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Gt.TOUCH_ROTATE;break;case Zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case Zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Gt.TOUCH_DOLLY_PAN;break;case Zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Bd)}function vM(s){switch(this._trackPointer(s),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Gt.NONE}}function MM(s){this.enabled!==!1&&s.preventDefault()}function SM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function EM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var wm=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var w=new Uint8Array(g.length),M=0;M<g.length;++M){var E=g.charCodeAt(M);w[M]=E>96?E-97:E>64?E-39:E+4}for(var O=0,M=0;M<g.length;++M)w[O++]=w[M]<60?n[w[M]]:(w[M]-60)*64+w[++M];return w.buffer.slice(0,O)}function l(g,w,M,E,O,L){var k=r.exports.sbrk,B=M+3&-4,ie=k(B*E),S=k(O.length),R=new Uint8Array(r.exports.memory.buffer);R.set(O,S);var Y=g(ie,M,E,S,O.length);if(Y==0&&L&&L(ie,B,E),w.set(R.subarray(ie,ie+M*E)),k(ie-k(0)),Y!=0)throw new Error("Malformed buffer data: "+Y)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function p(g){var w={object:new Worker(g),pending:0,requests:{}};return w.object.onmessage=function(M){var E=M.data;w.pending-=E.count,w.requests[E.id][E.action](E.value),delete w.requests[E.id]},w}function _(g){for(var w="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+b.toString(),M=new Blob([w],{type:"text/javascript"}),E=URL.createObjectURL(M),O=0;O<g;++O)d[O]=p(E);URL.revokeObjectURL(E)}function v(g,w,M,E,O){for(var L=d[0],k=1;k<d.length;++k)d[k].pending<L.pending&&(L=d[k]);return new Promise(function(B,ie){var S=new Uint8Array(M),R=f++;L.pending+=g,L.requests[R]={resolve:B,reject:ie},L.object.postMessage({id:R,count:g,size:w,source:S,mode:E,filter:O},[S.buffer])})}function b(g){a.then(function(){var w=g.data;try{var M=new Uint8Array(w.count*w.size);l(r.exports[w.mode],M,w.count,w.size,w.source,r.exports[w.filter]),self.postMessage({id:w.id,count:w.count,action:"resolve",value:M},[M.buffer])}catch(E){self.postMessage({id:w.id,count:w.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(g){_(g)},decodeVertexBuffer:function(g,w,M,E,O){l(r.exports.meshopt_decodeVertexBuffer,g,w,M,E,r.exports[c[O]])},decodeIndexBuffer:function(g,w,M,E){l(r.exports.meshopt_decodeIndexBuffer,g,w,M,E)},decodeIndexSequence:function(g,w,M,E){l(r.exports.meshopt_decodeIndexSequence,g,w,M,E)},decodeGltfBuffer:function(g,w,M,E,O,L){l(r.exports[u[O]],g,w,M,E,r.exports[c[L]])},decodeGltfBufferAsync:function(g,w,M,E,O){return d.length>0?v(g,w,M,u[E],c[O]):a.then(function(){var L=new Uint8Array(g*w);return l(r.exports[u[E]],L,g,w,M,r.exports[c[O]]),L})}}}();var fc=class extends Hr{constructor(){super();let e=new ut;e.deleteAttribute("uv");let t=new $e({side:Ln}),n=new $e,i=new oi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new ce(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ce(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new ce(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new ce(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ce(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new ce(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let d=new ce(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let f=new ce(e,ta(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let p=new ce(e,ta(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let _=new ce(e,ta(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let v=new ce(e,ta(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let b=new ce(e,ta(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,.1),this.add(b);let g=new ce(e,ta(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ta(s){let e=new jt;return e.color.setScalar(s),e}var ws={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wM=new bs(-1,1,1,-1,0,1),Hd=class extends Kt{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}},TM=new Hd,Pi=class{constructor(e){this._mesh=new ce(TM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var pc=class extends zn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xn.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var lo=class extends zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},mc=class extends zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var gc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new Tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pc(ws),this.copyPass.material.blending=pn,this.clock=new Zr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lo!==void 0&&(a instanceof lo?n=!0:a instanceof mc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var bc=class extends zn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var co={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new lt},cameraProjectionMatrixInverse:{value:new lt},cameraWorldMatrix:{value:new lt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},ho={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},_c={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Tm(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=AM(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new _s(i,e,e);return r.wrapS=ln,r.wrapT=ln,r.needsUpdate=!0,r}function AM(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var uo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Gd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraProjectionMatrixInverse:{value:new lt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Gd(s,e,t){let n=RM(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function RM(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new D(Math.cos(r),Math.sin(r),a))}return n}var xc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(l+c)*u,f=l-d,p=c-d,_=e-f,v=t-p,b,g;_>v?(b=1,g=0):(b=0,g=1);let w=_-b+u,M=v-g+u,E=_-1+2*u,O=v-1+2*u,L=l&255,k=c&255,B=this.perm[L+this.perm[k]]%12,ie=this.perm[L+b+this.perm[k+g]]%12,S=this.perm[L+1+this.perm[k+1]]%12,R=.5-_*_-v*v;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[B],_,v));let Y=.5-w*w-M*M;Y<0?i=0:(Y*=Y,i=Y*Y*this.dot(this.grad3[ie],w,M));let K=.5-E*E-O*O;return K<0?r=0:(K*=K,r=K*K*this.dot(this.grad3[S],E,O)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(n+c),p=1/6,_=(u+d+f)*p,v=u-_,b=d-_,g=f-_,w=e-v,M=t-b,E=n-g,O,L,k,B,ie,S;w>=M?M>=E?(O=1,L=0,k=0,B=1,ie=1,S=0):w>=E?(O=1,L=0,k=0,B=1,ie=0,S=1):(O=0,L=0,k=1,B=1,ie=0,S=1):M<E?(O=0,L=0,k=1,B=0,ie=1,S=1):w<E?(O=0,L=1,k=0,B=0,ie=1,S=1):(O=0,L=1,k=0,B=1,ie=1,S=0);let R=w-O+p,Y=M-L+p,K=E-k+p,J=w-B+2*p,de=M-ie+2*p,Z=E-S+2*p,ve=w-1+3*p,oe=M-1+3*p,V=E-1+3*p,F=u&255,$=d&255,le=f&255,be=this.perm[F+this.perm[$+this.perm[le]]]%12,H=this.perm[F+O+this.perm[$+L+this.perm[le+k]]]%12,U=this.perm[F+B+this.perm[$+ie+this.perm[le+S]]]%12,ee=this.perm[F+1+this.perm[$+1+this.perm[le+1]]]%12,Q=.6-w*w-M*M-E*E;Q<0?i=0:(Q*=Q,i=Q*Q*this.dot3(this.grad3[be],w,M,E));let fe=.6-R*R-Y*Y-K*K;fe<0?r=0:(fe*=fe,r=fe*fe*this.dot3(this.grad3[H],R,Y,K));let _e=.6-J*J-de*de-Z*Z;_e<0?a=0:(_e*=_e,a=_e*_e*this.dot3(this.grad3[U],J,de,Z));let Re=.6-ve*ve-oe*oe-V*V;return Re<0?o=0:(Re*=Re,o=Re*Re*this.dot3(this.grad3[ee],ve,oe,V)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,d,f,p,_,v=(e+t+n+i)*l,b=Math.floor(e+v),g=Math.floor(t+v),w=Math.floor(n+v),M=Math.floor(i+v),E=(b+g+w+M)*c,O=b-E,L=g-E,k=w-E,B=M-E,ie=e-O,S=t-L,R=n-k,Y=i-B,K=ie>S?32:0,J=ie>R?16:0,de=S>R?8:0,Z=ie>Y?4:0,ve=S>Y?2:0,oe=R>Y?1:0,V=K+J+de+Z+ve+oe,F=a[V][0]>=3?1:0,$=a[V][1]>=3?1:0,le=a[V][2]>=3?1:0,be=a[V][3]>=3?1:0,H=a[V][0]>=2?1:0,U=a[V][1]>=2?1:0,ee=a[V][2]>=2?1:0,Q=a[V][3]>=2?1:0,fe=a[V][0]>=1?1:0,_e=a[V][1]>=1?1:0,Re=a[V][2]>=1?1:0,ke=a[V][3]>=1?1:0,re=ie-F+c,I=S-$+c,Ce=R-le+c,Ae=Y-be+c,Me=ie-H+2*c,Ie=S-U+2*c,Xe=R-ee+2*c,Se=Y-Q+2*c,P=ie-fe+3*c,T=S-_e+3*c,j=R-Re+3*c,te=Y-ke+3*c,me=ie-1+4*c,pe=S-1+4*c,Be=R-1+4*c,Le=Y-1+4*c,Ve=b&255,_t=g&255,Ee=w&255,We=M&255,dt=o[Ve+o[_t+o[Ee+o[We]]]]%32,ct=o[Ve+F+o[_t+$+o[Ee+le+o[We+be]]]]%32,Ke=o[Ve+H+o[_t+U+o[Ee+ee+o[We+Q]]]]%32,Mt=o[Ve+fe+o[_t+_e+o[Ee+Re+o[We+ke]]]]%32,at=o[Ve+1+o[_t+1+o[Ee+1+o[We+1]]]]%32,mt=.6-ie*ie-S*S-R*R-Y*Y;mt<0?u=0:(mt*=mt,u=mt*mt*this.dot4(r[dt],ie,S,R,Y));let G=.6-re*re-I*I-Ce*Ce-Ae*Ae;G<0?d=0:(G*=G,d=G*G*this.dot4(r[ct],re,I,Ce,Ae));let He=.6-Me*Me-Ie*Ie-Xe*Xe-Se*Se;He<0?f=0:(He*=He,f=He*He*this.dot4(r[Ke],Me,Ie,Xe,Se));let he=.6-P*P-T*T-j*j-te*te;he<0?p=0:(he*=he,p=he*he*this.dot4(r[Mt],P,T,j,te));let xe=.6-me*me-pe*pe-Be*Be-Le*Le;return xe<0?_=0:(xe*=xe,_=xe*xe*this.dot4(r[at],me,pe,Be,Le)),27*(u+d+f+p+_)}};var fo=class s extends zn{constructor(e,t,n,i,r,a,o){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Tm(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Tn(this.width,this.height,{type:Wn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Zt({defines:Object.assign({},co.defines),uniforms:Xn.clone(co.uniforms),vertexShader:co.vertexShader,fragmentShader:co.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Yl,this.normalMaterial.blending=pn,this.pdMaterial=new Zt({defines:Object.assign({},uo.defines),uniforms:Xn.clone(uo.uniforms),vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Zt({defines:Object.assign({},ho.defines),uniforms:Xn.clone(ho.uniforms),vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader,blending:pn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Zt({uniforms:Xn.clone(ws.uniforms),vertexShader:ws.vertexShader,fragmentShader:ws.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:nc,blendDst:$r,blendEquation:ii,blendSrcAlpha:tc,blendDstAlpha:$r,blendEquationAlpha:ii}),this.blendMaterial=new Zt({uniforms:Xn.clone(_c.uniforms),vertexShader:_c.vertexShader,fragmentShader:_c.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Bu,blendSrc:nc,blendDst:$r,blendEquation:ii,blendSrcAlpha:tc,blendDstAlpha:$r,blendEquationAlpha:ii}),this.fsQuad=new Pi(null),this.originalClearColor=new tt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Br,this.depthTexture.format=gs,this.depthTexture.type=ms,this.normalRenderTarget=new Tn(this.width,this.height,{minFilter:fn,magFilter:fn,type:Wn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new xc,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new _s(i,e,e,Gn,xi);return r.wrapS=ln,r.wrapT=ln,r.needsUpdate=!0,r}};fo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Am={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var na=class s extends zn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Tn(r,a,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new Tn(r,a,{type:Wn});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Tn(r,a,{type:Wn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Am;this.highPassUniforms=Xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ue(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ws;this.copyUniforms=Xn.clone(u.uniforms),this.blendMaterial=new Zt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Bs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new tt,this.oldClearAlpha=1,this.basic=new jt,this.fsQuad=new Pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};na.BlurDirectionX=new ue(1,0);na.BlurDirectionY=new ue(0,1);var Rm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var yc=class extends zn{constructor(){super();let e=Rm;this.uniforms=Xn.clone(e.uniforms),this.material=new jl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},It.getTransfer(this._outputColorSpace)===Xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ro&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Cm(s){let{characters:e,me:t,Vec3:n,Quat:i,stand:r,findPath:a,lineClear:o,pointClear:l,broadcast:c,hearts:u,focus:d,reward:f,save:p,hint:_,sameRoom:v}=s,b=()=>!1,g=null,w=!1,M=0,E=new Map,O=new Set,L=U=>{let ee=Math.max(0,Math.min(1,U));return ee*ee*(3-2*ee)},k=()=>[e.A,e.B],B=U=>[U.g.position.x,U.g.position.z],ie=(U,ee)=>Math.hypot(U[0]-ee[0],U[1]-ee[1]),S=(U,ee,Q)=>{let fe=Math.atan2(Math.sin(ee-U.g.rotation.y),Math.cos(ee-U.g.rotation.y));U.g.rotation.y+=fe*Q};function R(){E.forEach((U,ee)=>ee.quaternion.copy(U)),E.clear()}function Y(U){U.token=(U.token||0)+1,U.path=[],U.sonra=null,U.hedefYer=null}function K(U=!1){var Q;M++;let ee=g;g=null,w=!1,R();for(let fe of k())fe.hugLock=!1,Y(fe),fe.durum="ayakta",fe.oyna("Idle");U&&ee&&ee.owner===t.rol&&f(),ee&&(p(),(Q=ee.resolve)==null||Q.call(ee,U))}function J(U){E.has(U)||E.set(U,U.quaternion.clone())}function de(U,ee){let Q;return U.root.traverse(fe=>{!Q&&fe.isBone&&ee.includes(fe.name.toLowerCase().replace(/[^a-z0-9]/g,""))&&(Q=fe)}),Q}let Z=new Map;for(let U of k()){let ee=[];for(let[fe,_e]of[["L","l"],["R","r"]]){let Re=de(U,["upperarm"+_e]),ke=de(U,["lowerarm"+_e,"forearm"+_e]),re=de(U,["wrist"+_e,"hand"+_e]);Re&&ke&&re&&ee.push({side:fe,upper:Re,lower:ke,hand:re})}let Q=[];U.root.traverse(fe=>{fe.isBone&&/^(upperleg|lowerleg|foot|toes|thigh|shin)[lr]$/.test(fe.name.toLowerCase().replace(/[^a-z0-9]/g,""))&&Q.push({bone:fe,rest:fe.quaternion.clone()})}),Z.set(U,{arms:ee,legs:Q,head:de(U,["head"])})}function ve(U,ee,Q,fe){let _e=U.getWorldPosition(new n),Re=ee.getWorldPosition(new n).sub(_e),ke=Q.clone().sub(_e);if(Re.lengthSq()<1e-8||ke.lengthSq()<1e-8)return;let re=U.getWorldQuaternion(new i),I=new i().setFromUnitVectors(Re.normalize(),ke.normalize()),Ae=U.parent.getWorldQuaternion(new i).invert().multiply(I.multiply(re));J(U),U.quaternion.slerp(Ae,fe),U.updateWorldMatrix(!1,!0)}function oe(U,ee,Q){let fe=Z.get(U);if(!fe||Q<=0)return;for(let{bone:re,rest:I}of fe.legs)J(re),re.quaternion.slerp(I,Q);U.g.updateWorldMatrix(!0,!0),ee.g.updateWorldMatrix(!0,!0);let _e=ee.g.position.clone().sub(U.g.position);if(_e.y=0,_e.lengthSq()<1e-6)return;_e.normalize();let Re=new n(_e.z,0,-_e.x),ke=Math.min(U.boy,ee.boy);for(let re of fe.arms){let I=re.side==="L"?1:-1,Ce=re.upper.getWorldPosition(new n),Ae=re.lower.getWorldPosition(new n),Me=re.hand.getWorldPosition(new n),Ie=Ce.distanceTo(Ae),Xe=Ae.distanceTo(Me),Se=ee.g.position.clone().addScaledVector(_e,ke*.065).addScaledVector(Re,I*ke*.1);Se.y=ee.g.position.y+ke*(U.rol==="A"?.64:.57);let P=Se.clone().sub(Ce),T=Math.min(P.length(),(Ie+Xe)*.97);P.normalize();let j=(Ie*Ie-Xe*Xe+T*T)/(2*Math.max(T,1e-5)),te=Math.sqrt(Math.max(0,Ie*Ie-j*j)),me=Re.clone().multiplyScalar(I).add(new n(0,-.8,0));me.addScaledVector(P,-me.dot(P)).normalize();let pe=Ce.clone().addScaledVector(P,j).addScaledVector(me,te);ve(re.upper,re.lower,pe,Q),ve(re.lower,re.hand,Se,Q)}if(fe.head){J(fe.head);let re=new i().setFromAxisAngle(new n(0,0,1),U.rol==="A"?-.065:.065);fe.head.quaternion.multiply(new i().slerp(re,Q))}}function V(U){return U&&typeof U.id=="string"&&U.id.length<100&&["A","B"].includes(U.actor)&&Number.isFinite(U.at)&&Number.isFinite(U.travel)&&U.travel>=0&&U.travel<25&&Array.isArray(U.path)&&U.path.length>=2&&U.path.length<=256&&U.path.every(ee=>Array.isArray(ee)&&ee.length===2&&ee.every(Q=>Number.isFinite(Q)&&Math.abs(Q)<160))&&Array.isArray(U.target)&&U.target.length===2&&U.target.every(ee=>Number.isFinite(ee)&&Math.abs(ee)<160)&&Math.abs(Date.now()-U.at)<3e4}function F(U,ee,Q){let fe=e[U.actor],_e=e[U.actor==="A"?"B":"A"];for(let ke of k())Y(ke),ke.hugLock=!0,ke.durum="sariliyor",ke.oyna(ke===fe&&U.travel>.05?"Walking_A":"Idle");_e.g.position.set(U.target[0],0,U.target[1]);let Re=U.path.slice(1).map((ke,re)=>ie(ke,U.path[re]));g={plan:U,actor:fe,partner:_e,owner:ee,resolve:Q,lengths:Re,length:Re.reduce((ke,re)=>ke+re,0),arrived:!1,effects:!1},O.add(U.id),O.size>100&&O.delete(O.values().next().value)}async function $(U){var fe;if(g||w)return!1;if(!b()&&!((fe=Z.get(U))!=null&&fe.arms.length))return _("Karakterin kol iskeleti bulunamad\u0131."),!1;let ee=U===e.A?e.B:e.A;if(v&&!v(U,ee))return _("Sar\u0131lmak i\xE7in \xF6nce ayn\u0131 odaya gelin \u{1F917}"),!1;w=!0;let Q=++M;k().forEach(_e=>{Y(_e),_e.hugLock=!0});try{if(await Promise.all(k().map(r)),Q!==M)return!1;let _e=B(U),Re=B(ee),ke=Math.atan2(_e[0]-Re[0],_e[1]-Re[1]),re=Math.min(U.boy,ee.boy)*.25,I=null;for(let Ae of[0,.45,-.45,.9,-.9,Math.PI/2,-Math.PI/2,Math.PI]){let Me=ke+Ae,Ie=[Re[0]+Math.sin(Me)*re,Re[1]+Math.cos(Me)*re];if(!l(...Ie))continue;let Xe=[_e,...a(_e,Ie)];if(ie(Xe[Xe.length-1],Ie)>.08||Xe.some((P,T)=>T&&!o(Xe[T-1],P)))continue;let Se=Xe.slice(1).reduce((P,T,j)=>P+ie(Xe[j],T),0);(!I||Se<I.length)&&(I={path:Xe,length:Se})}if(!I)return K(),_("Sar\u0131lmak i\xE7in ikinizin de yan\u0131nda biraz bo\u015F alan olsun \u{1F917}"),!1;let Ce={id:Date.now()+"-"+U.rol+"-"+Math.random().toString(36).slice(2,8),actor:U.rol,at:Date.now()+180,travel:I.length/1.8,path:I.path,target:Re};return w=!1,await new Promise(Ae=>{F(Ce,U.rol,Ae),c({t:"hug",plan:Ce})})}catch{return Q===M&&K(),_("Sar\u0131lma ba\u015Flat\u0131lamad\u0131, tekrar deneyebilirsin."),!1}}async function le(U,ee){if(!V(U)||U.actor!==ee||O.has(U.id)||g&&g.plan.id<U.id)return!1;(g||w)&&K(),w=!0;let Q=++M;k().forEach(fe=>{Y(fe),fe.hugLock=!0});try{return await Promise.all(k().map(r)),Q!==M?!1:(w=!1,F(U,null),!0)}catch{return Q===M&&K(),!1}}function be(){if(R(),!g)return;let U=g,{plan:ee,actor:Q,partner:fe}=U,_e=Math.max(0,(Date.now()-ee.at)/1e3),Re=Math.min(1,_e/Math.max(.001,ee.travel))*U.length,ke=0;for(;ke<U.lengths.length-1&&Re>U.lengths[ke];)Re-=U.lengths[ke++];let re=ee.path[ke],I=ee.path[ke+1],Ce=U.lengths[ke]?Math.min(1,Re/U.lengths[ke]):1;if(Q.g.position.set(re[0]+(I[0]-re[0])*Ce,0,re[1]+(I[1]-re[1])*Ce),_e<ee.travel)S(Q,Math.atan2(I[0]-re[0],I[1]-re[1]),.2);else{U.arrived||(U.arrived=!0,b()?(Q.oyna("Hug",.3),fe.oyna("Hug",.3)):Q.oyna("Idle",.18));let Ae=Math.atan2(fe.g.position.x-Q.g.position.x,fe.g.position.z-Q.g.position.z);if(S(Q,Ae,.25),S(fe,Ae+Math.PI,.25),!U.effects&&_e>=ee.travel+.65){U.effects=!0;let Me=(Q.g.position.x+fe.g.position.x)/2,Ie=(Q.g.position.z+fe.g.position.z)/2;u(Me,Ie,16),d(Me,Math.min(Q.boy,fe.boy)*.62,Ie,4.4,.8,3.2)}}_e>ee.travel+4.6&&K(!0)}function H(){if(!g&&window.__hugTest){let Q=window.__hugTest.w;oe(e.A,e.B,Q),oe(e.B,e.A,Q);return}if(!g||b())return;let U=(Date.now()-g.plan.at)/1e3-g.plan.travel-.25,ee=L(U/.85)*L((4.1-U)/.85);oe(g.actor,g.partner,ee),oe(g.partner,g.actor,ee)}return{request:$,receive:le,beforeFrame:be,afterFrame:H,cancel:()=>K(),get busy(){return!!g||w},get plan(){return(g==null?void 0:g.plan)||null}}}var po=new D;function ci(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;po.copy(e),po[n]=0,po.normalize();let c=.5*a/(a+o),u=1-po.angleTo(s)/l;return Math.sign(po[t])===1?u*c:o/(a+o)+c+c*(1-u)}var vc=class extends ut{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new D,l=new D,c=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,_=new D,v=.5/i;for(let b=0,g=0;b<u.length;b+=3,g+=2)switch(o.fromArray(u,b),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[b+0]=c.x*Math.sign(o.x)+l.x*r,u[b+1]=c.y*Math.sign(o.y)+l.y*r,u[b+2]=c.z*Math.sign(o.z)+l.z*r,d[b+0]=l.x,d[b+1]=l.y,d[b+2]=l.z,Math.floor(b/p)){case 0:_.set(1,0,0),f[g+0]=ci(_,l,"z","y",r,n),f[g+1]=1-ci(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[g+0]=1-ci(_,l,"z","y",r,n),f[g+1]=1-ci(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[g+0]=1-ci(_,l,"x","z",r,e),f[g+1]=ci(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[g+0]=1-ci(_,l,"x","z",r,e),f[g+1]=1-ci(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[g+0]=1-ci(_,l,"x","y",r,e),f[g+1]=1-ci(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[g+0]=ci(_,l,"x","y",r,e),f[g+1]=1-ci(_,l,"y","x",r,t);break}}};function Pm({dokuYukle:s,canvasTex:e}){let t={kumas:.45,ahsap:.9,mermer:1.1,dokuma:.5,jut:.6},n=e(256,256,(V,F,$)=>{V.fillStyle="#ececea",V.fillRect(0,0,F,$);for(let le=0;le<$;le+=4)for(let be=0;be<F;be+=4){let H=225+Math.random()*30-((be/4+le/4)%2?8:0);V.fillStyle=`rgb(${H},${H},${H-2})`,V.fillRect(be,le,4,4)}for(let le=0;le<600;le++)V.fillStyle=`rgba(255,255,255,${Math.random()*.25})`,V.fillRect(Math.random()*F,Math.random()*$,1+Math.random()*3,1)});n.wrapS=n.wrapT=ln;let i=e(256,256,(V,F,$)=>{V.fillStyle="#c9a979",V.fillRect(0,0,F,$);for(let le=0;le<$;le+=8)for(let be=0;be<F;be+=8){let H=le/8%2?4:0;V.fillStyle=`hsl(35,${35+Math.random()*10}%,${55+Math.random()*12}%)`,V.beginPath(),V.ellipse(be+H+4,le+4,4.2,3,.6,0,7),V.fill(),V.strokeStyle="rgba(90,60,30,.25)",V.stroke()}});i.wrapS=i.wrapT=ln;let r={kumas:()=>s("kumas"),ahsap:()=>s("ahsap"),mermer:()=>s("mermer"),dokuma:()=>n,jut:()=>i},a={};function o(V,F="#ffffff",$={}){let le=V+F+JSON.stringify($);return a[le]||(a[le]=new $e(Object.assign({color:F,roughness:V==="mermer"?.2:V==="ahsap"?.55:.92,metalness:0,map:V?r[V]():null},$))),a[le]}function l(V,F){let $=V.attributes.position,le=V.attributes.normal,be=new Float32Array($.count*2);for(let H=0;H<$.count;H++){let U=Math.abs(le.getX(H)),ee=Math.abs(le.getY(H)),Q=Math.abs(le.getZ(H)),fe,_e;ee>=U&&ee>=Q?(fe=$.getX(H),_e=$.getZ(H)):U>=Q?(fe=$.getZ(H),_e=$.getY(H)):(fe=$.getX(H),_e=$.getY(H)),be[H*2]=fe/F,be[H*2+1]=_e/F}return V.setAttribute("uv",new Jt(be,2)),V}function c(V,F,$,le,be,H,U,ee,Q,fe,_e){let Re=be>0?new vc(F,$,le,3,Math.min(be,F/2,$/2,le/2)):new ut(F,$,le);H&&l(Re,t[H]);let ke=new ce(Re,o(H,U,_e));return ke.position.set(ee,Q,fe),ke.castShadow=!0,ke.receiveShadow=!0,V.add(ke),ke}function u(V,F,$,le,be,H,U,ee,Q,fe=24,_e){let Re=new Ft(F,$,le,fe);be&&l(Re,t[be]);let ke=new ce(Re,o(be,H,_e));return ke.position.set(U,ee,Q),ke.castShadow=!0,ke.receiveShadow=!0,V.add(ke),ke}let d=["","#232323",{roughness:.35,metalness:.6}],f=["","#c8a46a",{roughness:.3,metalness:.85}];function p(V,F,$,le,be="ahsap",H=.1,U=.028){for(let ee of[-1,1])for(let Q of[-1,1])if(be==="ahsap"){let fe=u(V,U,U*.7,le,"ahsap","#ffffff",ee*(F/2-H),le/2,Q*($/2-H),10);fe.rotation.z=ee*.06,fe.rotation.x=-Q*.06}else u(V,U*.7,U*.7,le,...d.slice(0,2),ee*(F/2-H),le/2,Q*($/2-H),8,d[2])}let _=V=>V==="boucle"?["kumas","#ffffff"]:["dokuma",V];function v(V,F,$="ahsap"){let le=new st,[be,H]=_(F),U=V*.74+.36,ee=1,Q=.18;c(le,U,.18,ee-.04,.05,be,H,0,.21,-.02),c(le,U,.62,.24,.08,be,H,0,.46,-ee/2+.12);for(let _e of[-1,1])c(le,Q,.46,ee,.08,be,H,_e*(U/2-Q/2),.35,0);let fe=(U-Q*2)/V;for(let _e=0;_e<V;_e++){let Re=-U/2+Q+fe*(_e+.5);c(le,fe-.02,.16,ee-.26,.07,be,H,Re,.37,.12);let ke=c(le,fe-.06,.44,.2,.09,be,H,Re,.66,-ee/2+.32);ke.rotation.x=-.12}return p(le,U-.1,ee-.1,.13,$),le}function b(V){let F=new st,[$,le]=_(V),be=2.6,H=1,U=1.75,ee=.18;c(F,be,.18,H,.05,$,le,0,.21,0),c(F,H,.18,U-H,.05,$,le,be/2-H/2,.21,H/2+(U-H)/2),c(F,be,.62,.24,.08,$,le,0,.46,-H/2+.12),c(F,ee,.46,H,.08,$,le,-be/2+ee/2,.35,0);for(let Q=0;Q<3;Q++){let fe=-be/2+ee+.72*(Q+.5);c(F,.7,.16,H-.26,.07,$,le,fe,.37,.12);let _e=c(F,.66,.44,.2,.09,$,le,fe,.66,-H/2+.32);_e.rotation.x=-.12}return c(F,H-.1,.16,U-.32,.07,$,le,be/2-H/2+.02,.37,(U-.3)/2+.05),p(F,be-.1,H-.1,.13,"siyah"),F}function g(V){let F=new st,[$,le]=_(V);c(F,.95,.2,.9,.1,$,le,0,.24,0),c(F,.95,.55,.26,.13,$,le,0,.58,-.32);for(let be of[-1,1])c(F,.2,.36,.82,.1,$,le,be*.4,.45,0);return c(F,.58,.12,.62,.06,$,le,0,.39,.08),p(F,.85,.8,.14,"ahsap",.08,.025),F}function w(V){let F=new st,[$,le]=_(V),be=u(F,.32,.34,.44,$,le,0,.22,0,32);return be.geometry=l(new Ft(.32,.34,.44,32,1),t[$]),F}function M(V){let F=new st;if(V==="iskandinav"){p(F,.44,.44,.42,"ahsap",.04,.022),c(F,.46,.05,.46,.02,null,"#f2efe9",0,.44,0,{roughness:.45});let $=c(F,.46,.3,.04,.02,null,"#f2efe9",0,.74,-.22,{roughness:.45});$.rotation.x=-.12;for(let le of[-1,1]){let be=u(F,.014,.014,.36,"ahsap","#ffffff",le*.17,.62,-.2,8);be.rotation.x=-.12}}else p(F,.44,.44,.4,"siyah",.04,.022),c(F,.48,.1,.48,.04,"dokuma","#d9cfc1",0,.42,0),c(F,.48,.42,.08,.04,"dokuma","#d9cfc1",0,.72,-.22).rotation.x=-.1;return F}function E(V){let F=new st;return V==="mese"?(c(F,1.7,.05,.9,.02,"ahsap","#ffffff",0,.76,0),p(F,1.6,.8,.74,"ahsap",.08,.032)):(u(F,.6,.6,.04,"mermer","#ffffff",0,.77,0,48),u(F,.07,.09,.72,...f.slice(0,2),0,.38,0,16,f[2]),u(F,.32,.34,.04,...f.slice(0,2),0,.02,0,32,f[2])),F}function O(V){let F=new st;return V==="mermer"?(u(F,.5,.5,.04,"mermer","#ffffff",0,.38,0,48),u(F,.36,.36,.34,"ahsap","#ffffff",0,.18,0,32)):(c(F,1.2,.05,.62,.015,"ahsap","#ffffff",0,.38,0),c(F,1.1,.03,.54,.01,"ahsap","#ffffff",0,.12,0),p(F,1.18,.6,.36,"siyah",.04,.02)),F}function L(){let V=new st;c(V,1.9,.42,.42,.02,"ahsap","#e9e2da",0,.33,0);for(let $=0;$<3;$++)c(V,.6,.36,.01,.005,"ahsap","#ffffff",-.62+$*.62,.33,.212);p(V,1.85,.38,.12,"siyah",.06,.02),c(V,1.36,.78,.04,.01,null,"#111114",0,.95,-.05,{roughness:.2,metalness:.3}),c(V,.3,.03,.18,.01,null,"#1a1a1a",0,.555,-.05);let F=new ce(new bn(1.3,.72),new jt({color:"#f3e3e7"}));return F.position.set(0,.95,-.028),V.add(F),F.userData.oran=1.3/.72,V.userData.foto=F,V}let k=V=>e(512,384,(F,$,le)=>{if(V==="berber"){F.fillStyle="#efe8dc",F.fillRect(0,0,$,le);for(let be=0;be<9e3;be++)F.fillStyle=`rgba(255,255,255,${Math.random()*.4})`,F.fillRect(Math.random()*$,Math.random()*le,2,2);F.strokeStyle="#3a3330",F.lineWidth=3;for(let be=-le;be<$+le;be+=64)F.beginPath(),F.moveTo(be,0),F.lineTo(be+le*.7,le),F.stroke(),F.beginPath(),F.moveTo(be+le*.7,0),F.lineTo(be,le),F.stroke()}else if(V==="geo"){F.fillStyle="#e9ddcf",F.fillRect(0,0,$,le);let be=["#c07a5a","#d9a58a","#8f9d7c","#e7c9a9"];for(let H=0;H<14;H++){F.fillStyle=be[H%4],F.beginPath();let U=Math.random()*$,ee=Math.random()*le,Q=30+Math.random()*90;H%3?F.arc(U,ee,Q/2,0,H%2?Math.PI:7):F.rect(U,ee,Q,Q*.6),F.fill()}for(let H=0;H<6e3;H++)F.fillStyle=`rgba(255,255,255,${Math.random()*.25})`,F.fillRect(Math.random()*$,Math.random()*le,2,2)}else{F.fillStyle="#9d9a96",F.fillRect(0,0,$,le);for(let be=0;be<16e3;be++){let H=130+Math.random()*60;F.fillStyle=`rgba(${H},${H},${H-4},.6)`,F.fillRect(Math.random()*$,Math.random()*le,1,3)}}F.strokeStyle="rgba(0,0,0,.08)",F.lineWidth=8,F.strokeRect(4,4,$-8,le-8)});function B(V){let F=new st;if(V==="jut"){let be=new ce(new Ft(1.05,1.05,.02,48),o("jut","#ffffff",{roughness:1}));return l(be.geometry,t.jut),be.position.y=.011,be.receiveShadow=!0,F.add(be),F}let $=k(V),le=new ce(new ut(2.6,.02,1.85),[o(null,"#d8d0c4"),o(null,"#d8d0c4"),new $e({map:$,roughness:1}),o(null,"#d8d0c4"),o(null,"#d8d0c4"),o(null,"#d8d0c4")]);return le.position.y=.011,le.receiveShadow=!0,F.add(le),F}function ie(V){let F=new st,[$,le]=_(V);c(F,1.9,.32,2.2,.06,$,le,0,.26,0),c(F,2,1.15,.14,.07,$,le,0,.58,-1.1),c(F,1.78,.2,2.05,.08,"dokuma","#f7f4ef",0,.5,.05),c(F,1.82,.1,1.3,.05,"dokuma","#f2ede6",0,.62,.42),c(F,1.86,.12,.45,.05,"dokuma","#b9a58c",0,.64,.82);for(let be of[-1,1])c(F,.7,.14,.36,.07,"dokuma","#ffffff",be*.42,.66,-.82);return p(F,1.85,2.1,.1,"ahsap",.1,.03),F}function S(){let V=new st;u(V,.17,.19,.05,"mermer","#ffffff",0,.025,0,32);let F=new xs(new D(0,.05,0),new D(.1,2.4,0),new D(1.05,1.75,0)),$=new ce(new qs(F,40,.016,8),o(...f.slice(0,2),f[2]));$.castShadow=!0,V.add($);let le=new ce(new Vn(.24,24,12,0,Math.PI*2,0,Math.PI/2),o(...f.slice(0,2),Object.assign({side:on},f[2])));le.position.set(1.05,1.62,0),le.castShadow=!0,V.add(le);let be=new ce(new Vn(.06,12,8),new jt({color:"#fff3d6"}));return be.position.set(1.05,1.6,0),V.add(be),V}function R(){let V=new st;u(V,.24,.19,.42,null,"#efece6",0,.21,0,28,{roughness:.6}),u(V,.22,.22,.02,null,"#4a3a2c",0,.41,0,24);let F=new Wi;F.moveTo(0,0),F.bezierCurveTo(-.22,.05,-.26,.3,-.02,.42),F.lineTo(0,.38),F.bezierCurveTo(.26,.3,.22,.05,0,0);let $=new eo(F,10),le=new $e({color:"#2f6b3a",roughness:.6,side:on});for(let be=0;be<11;be++){let H=be/11*Math.PI*2+Math.random()*.3,U=.55+Math.random()*.55,ee=Math.sin(H)*.25*U,Q=Math.cos(H)*.25*U,fe=.4+U,_e=new ce(new Ft(.008,.01,U,5),o(null,"#3d7a40"));_e.position.set(ee/2,.4+U/2,Q/2),_e.lookAt(ee,fe,Q),_e.rotateX(Math.PI/2),V.add(_e);let Re=new ce($,le);Re.position.set(ee,fe,Q),Re.rotation.set(-.9-Math.random()*.4,H,0),Re.scale.setScalar(1.1+Math.random()*.5),Re.castShadow=!0,V.add(Re)}return V}function Y(){let V=new st,F=1.2,$=1.9,le=.36;for(let H of[-1,1])c(V,.04,$,le,.01,"ahsap","#ffffff",H*(F/2-.02),$/2,0);for(let H=0;H<5;H++)c(V,F,.035,le,.01,"ahsap","#ffffff",0,.05+H*.45,0);let be=["#d9cfc1","#8f9d7c","#c07a5a","#3c4a6b","#efe8dc","#b9a58c"];for(let H=0;H<4;H++){let U=-F/2+.08,ee=.07+H*.45,Q=4+Math.floor(Math.random()*6);for(let fe=0;fe<Q&&U<F/2-.25;fe++){let _e=.03+Math.random()*.03,Re=.22+Math.random()*.1;c(V,_e,Re,.22,.004,null,be[(H*3+fe)%be.length],U+_e/2,ee+Re/2,0),U+=_e+.005}H%2?u(V,.06,.045,.2,null,"#f2efe9",F/2-.18,ee+.1,0,16,{roughness:.4}):c(V,.16,.12,.16,.03,null,"#c8b8a2",F/2-.2,ee+.06,0)}return V}function K(){let V=new st,F=new Wi,$=.62,le=1.75;F.moveTo(-$/2,0),F.lineTo(-$/2,le-$/2),F.absarc(0,le-$/2,$/2,Math.PI,0,!0),F.lineTo($/2,0),F.lineTo(-$/2,0);let be=new ce(new qr(F,{depth:.04,bevelEnabled:!1,curveSegments:24}),o(...f.slice(0,2),f[2]));be.position.set(0,.02,-.02),be.rotation.x=-.08,be.castShadow=!0,V.add(be);let H=F.clone(),U=new ce(new eo(H,24),new $e({color:"#dfe7ea",metalness:1,roughness:.04}));return U.scale.set(.9,.95,1),U.position.set(0,.06,.025),U.rotation.x=-.08,V.add(U),V}let J=(V,F=0)=>({act:"otur",yerler:V,yon:F}),de=.12,Z={md_kanepe3_bej:["\u{1F6CB}\uFE0F","Kanepe \xB7 bej bukle",140,"Modern",J([[-.74,de],[0,de],[.74,de]])],md_kanepe3_gri:["\u{1F6CB}\uFE0F","Kanepe \xB7 a\xE7\u0131k gri",140,"Modern",J([[-.74,de],[0,de],[.74,de]])],md_kanepe2_yesil:["\u{1F6CB}\uFE0F","\u0130kili kanepe \xB7 ada\xE7ay\u0131",110,"Modern",J([[-.37,de],[.37,de]])],md_kanepe2_krem:["\u{1F6CB}\uFE0F","\u0130kili kanepe \xB7 krem",110,"Modern",J([[-.37,de],[.37,de]])],md_kose:["\u{1F6CB}\uFE0F","K\xF6\u015Fe koltuk \xB7 grej",190,"Modern",J([[-.76,de],[-.04,de],[.68,de]])],md_berjer_krem:["\u{1F4BA}","Berjer \xB7 krem",60,"Modern",J([[0,.08]])],md_berjer_terra:["\u{1F4BA}","Berjer \xB7 kiremit",60,"Modern",J([[0,.08]])],md_puf:["\u26AA","Puf \xB7 bukle",25,"Modern",J([[0,0]])],md_sandalye_isk:["\u{1FA91}","\u0130skandinav sandalye",30,"Modern",J([[0,.02]])],md_sandalye_kumas:["\u{1FA91}","Kuma\u015F sandalye",35,"Modern",J([[0,.02]])],md_masa_mese:["\u{1F37D}\uFE0F","Me\u015Fe yemek masas\u0131",90,"Modern",{masa:!0}],md_masa_mermer:["\u{1F37D}\uFE0F","Mermer yuvarlak masa",100,"Modern",{masa:!0}],md_sehpa_mermer:["\u26AA","Mermer sehpa",45,"Modern",{}],md_sehpa_mese:["\u{1F7EB}","Me\u015Fe sehpa",40,"Modern",{}],md_tv:["\u{1F4FA}","TV \xFCnitesi (foto\u011Fraflar\u0131m\u0131z)",80,"Modern",{act:"foto"}],md_hali_berber:["\u{1F7EB}","Berber hal\u0131",45,"Modern",{zemin:!0}],md_hali_geo:["\u{1F7E7}","Geometrik hal\u0131",45,"Modern",{zemin:!0}],md_hali_gri:["\u2B1C","Gri yumu\u015Fak hal\u0131",40,"Modern",{zemin:!0}],md_hali_jut:["\u{1F7E4}","Yuvarlak j\xFCt hal\u0131",35,"Modern",{zemin:!0}],md_yatak:["\u{1F6CF}\uFE0F","Modern yatak",160,"Modern",{act:"yat",yerler:[[-.42,-.47],[.42,-.47]],yon:0}],md_lambader:["\u{1F4A1}","Ark lambader",45,"Modern",{act:"lamba"}],md_monstera:["\u{1FAB4}","Monstera",30,"Modern",{}],md_kitaplik:["\u{1F4DA}","Me\u015Fe kitapl\u0131k",70,"Modern",{}],md_ayna:["\u{1FA9E}","Ayakl\u0131 ayna",40,"Modern",{}]},ve={md_kanepe3_bej:()=>v(3,"boucle"),md_kanepe3_gri:()=>v(3,"#b9b8b4","siyah"),md_kanepe2_yesil:()=>v(2,"#9aa887"),md_kanepe2_krem:()=>v(2,"#f3ece2"),md_kose:()=>b("#c9c1b5"),md_berjer_krem:()=>g("#f1e9dc"),md_berjer_terra:()=>g("#c98262"),md_puf:()=>w("boucle"),md_sandalye_isk:()=>M("iskandinav"),md_sandalye_kumas:()=>M("kumas"),md_masa_mese:()=>E("mese"),md_masa_mermer:()=>E("mermer"),md_sehpa_mermer:()=>O("mermer"),md_sehpa_mese:()=>O("mese"),md_tv:L,md_hali_berber:()=>B("berber"),md_hali_geo:()=>B("geo"),md_hali_gri:()=>B("gri"),md_hali_jut:()=>B("jut"),md_yatak:()=>ie("#cfc4b4"),md_lambader:S,md_monstera:R,md_kitaplik:Y,md_ayna:K},oe=[["md_hali_berber",.6,-1.55,0],["md_kanepe3_bej",.6,-2.9,0],["md_sehpa_mermer",.6,-1.45,0],["md_berjer_krem",2.75,-1.35,-Math.PI/2],["md_puf",-1.35,-1.25,0],["md_lambader",-1.2,-3.05,0],["md_monstera",3.9,-2.95,0],["md_kitaplik",-4.2,-1.3,Math.PI/2],["md_tv",.6,1.45,Math.PI],["md_masa_mese",-2.55,1.45,0],["md_sandalye_isk",-3,.8,0],["md_sandalye_isk",-2.1,.8,0],["md_sandalye_isk",-3,2.1,Math.PI],["md_sandalye_isk",-2.1,2.1,Math.PI],["md_ayna",3.95,.6,-Math.PI/2]];return{KAT:Z,YAP:ve,SALON:oe}}var Te={w:9,d:7},CM=1.04,PM=1.4,IM={otur:[0,0],yat:[-.015,.174],yer:[0,-.04]},DM={otur:.11,yat:.12,yer:.1};var LM=.75,Im={A:1.78,B:1.65},ei=.25,Dm=(window.__leHiz||1)*1.9,kM=.25,NM=()=>{var e;let s=(e=window.__leSaat)!=null?e:km();return s>=21||s<6},km=()=>{try{return+new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Istanbul",hour:"2-digit",hourCycle:"h23"}).format(new Date)}catch{return new Date().getHours()}},Qt=s=>document.querySelector(s);function Ue(s,e,...t){let n=document.createElement(s);for(let i in e||{})i==="class"?n.className=e[i]:i.startsWith("on")?n[i]=e[i]:n.setAttribute(i,e[i]);return t.flat().forEach(i=>i!=null&&i!==!1&&n.append(i)),n}function Cn(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"),s,e);let i=new qa(n);return i.colorSpace=sn,i.anisotropy=4,i}var UM=(s,e,t)=>{let n=(e-s+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),s+n*t};function OM(s){return Cn(512,512,(e,t,n)=>{e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255,255,255,.35)";for(let i=0;i<t;i+=64)for(let r=0;r<n;r+=64){let a=r/64%2?32:0;e.save(),e.translate(i+a+32,r+32),e.beginPath(),e.moveTo(0,-9),e.bezierCurveTo(7,-9,8,0,0,7),e.bezierCurveTo(-8,0,-7,-9,0,-9),e.fill(),e.restore()}})}function Lm(s){return Cn(512,384,(e,t,n)=>{let i=s>=21||s<6,r=s>=17&&s<21,a=s>=6&&s<9,o=e.createLinearGradient(0,0,0,n);if(i?(o.addColorStop(0,"#120a24"),o.addColorStop(1,"#3a1d3f")):r?(o.addColorStop(0,"#6b4fa0"),o.addColorStop(.55,"#f08a6c"),o.addColorStop(1,"#ffd29a")):a?(o.addColorStop(0,"#a7d3f2"),o.addColorStop(1,"#ffe2c9")):(o.addColorStop(0,"#8fc8f0"),o.addColorStop(1,"#e8f4ff")),e.fillStyle=o,e.fillRect(0,0,t,n),i){for(let l=0;l<70;l++)e.fillStyle=`rgba(255,240,220,${.4+Math.random()*.6})`,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.7,Math.random()*1.6+.4,0,7),e.fill();e.fillStyle="#fff4d6",e.beginPath(),e.arc(t*.75,n*.25,22,0,7),e.fill()}else e.fillStyle=r?"rgba(255,220,170,.9)":"rgba(255,250,220,.95)",e.beginPath(),e.arc(t*.72,r?n*.7:n*.28,r?34:26,0,7),e.fill(),e.fillStyle="rgba(255,255,255,.75)",[[.2,.3],[.45,.2],[.3,.45]].forEach(([l,c])=>{e.beginPath(),e.ellipse(t*l,n*c,46,14,0,0,7),e.fill()});e.fillStyle=i?"#1d1838":r?"#7a5a8c":"#5b9cc4",e.fillRect(0,n*.74,t,n*.26),e.fillStyle=i?"rgba(255,230,180,.35)":"rgba(255,255,255,.35)";for(let l=0;l<18;l++)e.fillRect(Math.random()*t,n*(.76+Math.random()*.2),18+Math.random()*30,2);e.fillStyle=i?"#120d22":r?"#4b3560":"#7d9db3",e.beginPath(),e.moveTo(0,n*.74);for(let l=0;l<=t;l+=32)e.lineTo(l,n*(.7+Math.sin(l*.03)*.02));e.lineTo(t,n*.74),e.fill()})}function Vd(){let s=new st,e=new ce(new Ci([[0,0],[.14,0],[.17,.08],[.13,.26],[.09,.34],[.11,.38]].map(i=>new ue(i[0],i[1])),24),new $e({color:"#f4f1ec",roughness:.25}));e.castShadow=!0,s.add(e);let t=["#C9233F","#E8577A","#C9233F","#F7A8BE","#E8577A"],n=new $e({color:"#4E8B57",roughness:.8});return t.forEach((i,r)=>{let a=r/t.length*Math.PI*2,o=.05,l=.25+Math.random()*.15,c=.45+Math.random()*.12,u=new xs(new D(0,.3,0),new D(Math.cos(a)*o,.3+c*.6,Math.sin(a)*o),new D(Math.cos(a)*l*.5,.3+c,Math.sin(a)*l*.5));s.add(new ce(new qs(u,8,.012,5),n));let d=new ce(new Ci([[0,-.02],[.05,0],[.075,.06],[.07,.12],[.045,.16],[.05,.17]].map(f=>new ue(f[0],f[1])),16),new $e({color:i,roughness:.45,side:on}));d.position.copy(u.getPoint(1)),d.castShadow=!0,s.add(d)}),s}function FM(){let s=new st,e=new ce(new ut(.62,.14,.48),new $e({color:"#8a5a3c",roughness:.5}));e.position.y=.07,e.castShadow=!0,s.add(e);let t=new ce(new Ft(.19,.19,.015,32),new $e({color:"#1b1214",roughness:.25}));t.position.set(-.06,.15,0),s.add(t);let n=new ce(new Ft(.06,.06,.017,24),new $e({color:"#C9233F"}));n.position.copy(t.position),s.add(n);let i=new ce(new ut(.03,.03,.3),new $e({color:"#d9d2c8",metalness:.6,roughness:.3}));return i.position.set(.22,.17,-.02),i.rotation.y=.3,s.add(i),s.userData.plak=[t,n],s}function zM(s){let e=new st,t=new ce(new ut(.34,.26,.34),new $e({color:s,roughness:.45}));t.position.y=.13,t.castShadow=!0,e.add(t);let n=new $e({color:"#fff4d6",roughness:.4}),i=new ce(new ut(.36,.27,.06),n);i.position.y=.13,e.add(i);let r=new ce(new ut(.06,.27,.36),n);r.position.y=.13,e.add(r);let a=new st;a.position.y=.26,e.add(a);let o=new ce(new ut(.38,.06,.38),new $e({color:s,roughness:.45}));return o.position.y=.03,o.castShadow=!0,a.add(o),[-1,1].forEach(l=>{let c=new ce(new jr(.06,.02,8,16),n);c.position.set(l*.05,.1,0),c.rotation.y=Math.PI/2,c.rotation.x=l*.6,a.add(c)}),e.userData.kapak=a,e}function BM(){let s=new st,e=new $e({color:"#d9a441",metalness:.85,roughness:.28}),t=new ce(new Ci([[0,0],[.12,0],[.13,.03],[.1,.06],[.16,.14],[.17,.3],[.12,.42],[.07,.44],[.07,.48],[0,.48]].map(o=>new ue(o[0],o[1])),24),e);t.castShadow=!0,s.add(t);let n=new ce(new Ci([[0,0],[.07,0],[.1,.05],[.09,.12],[.05,.15],[.05,.17],[0,.17]].map(o=>new ue(o[0],o[1])),18),new $e({color:"#fbf6ef",roughness:.3}));n.position.y=.48,n.castShadow=!0,s.add(n),[[-1,0],[1,0]].forEach(([o])=>{let l=new ce(new jr(.05,.012,6,12,Math.PI),e);l.position.set(o*.17,.3,0),l.rotation.z=o*Math.PI/2,s.add(l)});let i=new ce(new Ft(.012,.012,.1,6),e);i.rotation.x=Math.PI/2,i.position.set(0,.12,.17),s.add(i);let r=new ce(new Ft(.32,.3,.62,20),new $e({color:"#8a5a3c",roughness:.6}));r.position.y=.31,r.castShadow=!0;let a=new st;return a.add(r),s.position.y=.62,a.add(s),a.userData.buhar=new D(0,1.3,0),a}function HM(){let s=new st,e=new ce(new Ci([[0,0],[.035,0],[.032,.03],[.024,.06],[.032,.1],[.036,.11]].map(i=>new ue(i[0],i[1])),16),new $e({color:"#ffffff",transparent:!0,opacity:.35,roughness:.05})),t=new ce(new Ci([[0,.005],[.032,.005],[.029,.03],[.022,.06],[.029,.092],[0,.092]].map(i=>new ue(i[0],i[1])),16),new $e({color:"#a8321a",transparent:!0,opacity:.85,roughness:.2})),n=new ce(new Ft(.06,.055,.01,18),new $e({color:"#C9233F",roughness:.4}));return s.add(n,t,e),s}function GM(){let s=new st,e=new $e({color:"#34131F",roughness:.4,metalness:.3}),t=new $e({color:"#d9a441",metalness:.8,roughness:.3});[0,2.09,4.19].forEach(r=>{let a=new ce(new Ft(.02,.025,1.05,6),e);a.position.set(Math.sin(r)*.22,.5,Math.cos(r)*.22),a.rotation.set(Math.cos(r)*.22,0,-Math.sin(r)*.22),a.castShadow=!0,s.add(a)});let n=new ce(new Ft(.07,.055,.9,16),t);n.position.set(0,1.15,.1),n.rotation.x=-1.05,n.castShadow=!0,s.add(n);let i=new ce(new Ft(.08,.08,.08,16),e);return i.position.set(0,1.42,.48),i.rotation.x=-1.05,s.add(i),s}function VM(){let s=new st,e=new ce(new Ft(.2,.15,.32,18),new $e({color:"#c9714a",roughness:.8}));e.position.y=.16,e.castShadow=!0,s.add(e);let t=Vd();return t.children[0].visible=!1,t.position.y=.06,t.scale.setScalar(1.3),s.add(t),s}function WM(s){let e=new st,t=new ce(new Ft(.035,.045,1.1,8),new $e({color:"#3a2a2e",roughness:.5}));t.position.y=.55,t.castShadow=!0,e.add(t);let n=new ce(new Vn(.11,16,12),new $e({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:s?2.2:.15}));if(n.position.y=1.16,e.add(n),s){let i=new oi("#ffcf7a",2.2,4,1.8);i.position.y=1.15,e.add(i)}return e}function XM(s){return Cn(2048,640,(e,t,n)=>{let i=s>=21||s<6,r=s>=17&&s<21,a=e.createLinearGradient(0,0,0,n);if(i?(a.addColorStop(0,"#0d0820"),a.addColorStop(.7,"#2c1838"),a.addColorStop(1,"#3a1d3f")):r?(a.addColorStop(0,"#5b4096"),a.addColorStop(.55,"#f08a6c"),a.addColorStop(1,"#ffd29a")):(a.addColorStop(0,"#7fbde9"),a.addColorStop(1,"#e6f3ff")),e.fillStyle=a,e.fillRect(0,0,t,n),i){for(let f=0;f<260;f++)e.fillStyle=`rgba(255,240,220,${.3+Math.random()*.7})`,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.55,Math.random()*1.8+.3,0,7),e.fill();e.fillStyle="#fff4d6",e.beginPath(),e.arc(t*.8,n*.18,30,0,7),e.fill()}else e.fillStyle=r?"rgba(255,214,160,.95)":"rgba(255,252,230,.95)",e.beginPath(),e.arc(t*.3,r?n*.62:n*.2,r?52:36,0,7),e.fill();let o=n*.78;e.fillStyle=i?"#16122b":r?"#7a5a8c":"#4f93bd",e.fillRect(0,o,t,n-o);let l=i?"#1a1128":r?"#3b2850":"#6f8ea6";e.fillStyle=l;let c=o-2;e.beginPath(),e.moveTo(0,c);for(let f=0;f<=t;f+=12)e.lineTo(f,c-18-Math.sin(f*.011)*10-Math.sin(f*.037)*6);e.lineTo(t,o),e.lineTo(0,o),e.fill();let u=(f,p,_)=>{e.beginPath(),e.arc(f,c-30,p,Math.PI,0),e.fill(),e.fillRect(f-p,c-30,p*2,30);for(let v of[-1,1])for(let b=0;b<_;b++){let g=f+v*(p+14+b*22);e.fillRect(g-3,c-30-p*1.9,6,p*1.9+30),e.beginPath(),e.moveTo(g-5,c-30-p*1.9),e.lineTo(g,c-30-p*2.3),e.lineTo(g+5,c-30-p*1.9),e.fill()}[-.55,.55].forEach(v=>{e.beginPath(),e.arc(f+v*p*1.3,c-22,p*.45,Math.PI,0),e.fill()})};u(t*.2,46,2),u(t*.44,34,1),u(t*.86,40,2);let d=t*.64;if(e.fillRect(d-16,c-150,32,150),e.beginPath(),e.moveTo(d-22,c-150),e.lineTo(d,c-210),e.lineTo(d+22,c-150),e.fill(),e.fillRect(d-22,c-156,44,10),e.strokeStyle=l,e.lineWidth=5,e.beginPath(),e.moveTo(t*.02,o-8),e.quadraticCurveTo(t*.12,o-60,t*.24,o-8),e.stroke(),i||r){for(let f=0;f<160;f++)e.fillStyle=`rgba(255,${200+Math.random()*40},140,${.5+Math.random()*.5})`,e.fillRect(Math.random()*t,c-8-Math.random()*40,2.4,2.4);for(let f=0;f<60;f++)e.fillStyle="rgba(255,214,150,.35)",e.fillRect(Math.random()*t,o+6+Math.random()*(n-o-10),10+Math.random()*30,2)}else{e.fillStyle="rgba(255,255,255,.4)";for(let f=0;f<30;f++)e.fillRect(Math.random()*t,o+6+Math.random()*(n-o-10),14+Math.random()*30,2)}e.fillStyle=i?"#2a1d3a":"#fffaf6",e.beginPath(),e.moveTo(t*.53,o+26),e.lineTo(t*.6,o+26),e.lineTo(t*.595,o+36),e.lineTo(t*.535,o+36),e.fill(),e.fillRect(t*.555,o+14,18,12)})}async function Nm(s){var vf,Mf;let e=s.el,t=(s.me||"misafir").toLowerCase(),n=s.names||{},i=s.sb||null,r=h=>(n[h]||"").toLocaleLowerCase("tr")==="beyza"?"B":n[h]?"A":null,a=r(t)||"A",o={A:"Ahmet",B:"Beyza"},l=new Dl({antialias:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(2,devicePixelRatio||1)),l.shadowMap.enabled=!0,l.shadowMap.type=gi,l.outputColorSpace=sn,l.toneMapping=ro,l.toneMappingExposure=NM()?1:.92,e.append(l.domElement);let c=new Hr,u=(vf=window.__leSaat)!=null?vf:km(),d=u>=21||u<6,f=u>=17&&u<21;c.background=new tt(d?"#2a1420":"#FDF1F3"),document.body.classList.toggle("le-gece",d),document.body.style.background=d?"#2a1420":"#FDF1F3",c.fog=new Ll(c.background,24,44);let p=new dn(32,1,.1,100);p.position.set(11.5,12.5,15.5);let _=new dc(p,l.domElement);_.target.set(0,.6,1.6),_.enablePan=!1,_.enableDamping=!0,_.dampingFactor=.08,_.minDistance=4,_.maxDistance=26,_.minPolarAngle=.55,_.maxPolarAngle=1.2,_.minAzimuthAngle=-.15,_.maxAzimuthAngle=1.55,_.rotateSpeed=.6;let v=new zr(l);c.environment=v.fromScene(new fc,.04).texture,c.environmentIntensity=d?.2:f?.3:.35;let b=new Jl(d?"#8d7bb8":"#fff4f0",d?"#3a2030":"#e9c9b8",d?.6:.45);c.add(b);let g=new Ys(d?"#9db0ff":f?"#ffb27a":"#fff1de",d?.35:f?1.5:1.75);{let h=Math.max(6,Math.min(20,u)),m=(h-6)/14;g.position.set(-7+m*12,d?9:4+Math.sin(m*Math.PI)*7,-7)}g.target.position.set(0,0,1.6),c.add(g.target),g.castShadow=!0,g.shadow.mapSize.set(2048,2048),g.shadow.bias=-4e-4,g.shadow.normalBias=.03,g.shadow.radius=5,g.shadow.blurSamples=12,Object.assign(g.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:40}),c.add(g);let w=new Ys("#ffe6ee",d?.2:.5);w.position.set(8,6,6),c.add(w);let M=new oi("#ffc98a",0,7,1.6);M.castShadow=!0,M.shadow.mapSize.set(512,512),c.add(M);let E=new js;function O(h,m=1,x=1,y=0){let A=E.load(s.base+"doku/"+h+".webp?v=1");return A.colorSpace=sn,A.wrapS=A.wrapT=ln,A.anisotropy=8,A.repeat.set(m,x),A.channel=y,A}let L={ahsap:{tile:.9,mat:()=>({map:O("ahsap",1,1,1),roughness:.55})},kumas:{tile:.45,mat:()=>({map:O("kumas",1,1,1),roughness:.95})},yastik:{tile:.5,mat:()=>({map:O("hali",1,1,1),roughness:.95})},hali:{tile:1.6,mat:()=>({map:O("hali",1,1,1),roughness:1})},mermer:{tile:1.2,mat:()=>({map:O("mermer",1,1,1),roughness:.22})},beyaz:{tile:1,mat:()=>({color:"#f3f1ec",roughness:.35})},inoks:{tile:1,mat:()=>({color:"#e4e6e6",metalness:.45,roughness:.3})},pirinc:{tile:1,mat:()=>({color:"#c8a46a",metalness:.8,roughness:.35})}},k={},B=h=>k[h]||(k[h]=new $e(Object.assign({metalness:0},L[h].mat()))),ie=/^(couch|couch_pillows|armchair|armchair_pillows|chair_A|chair_B|chair_C|chair_stool)$/;function S(h){if(/^rug_/.test(h))return()=>"hali";if(/^m_kitchen(counter|cabinet)/.test(h))return(x,y)=>y>=13?x===13?"mermer":x===12?"pirinc":x===10||x>=14?"beyaz":null:null;if(/^m_fridge/.test(h))return(x,y)=>(x===4||x===5)&&y>=4&&y<=6?"inoks":null;if(/^m_(table_round|chair)/.test(h))return(x,y)=>x>=12&&x<=13&&(y<=3||y>=12&&y<=14)?"ahsap":null;if(h.startsWith("m_"))return null;let m=ie.test(h);return(x,y,A)=>y<=3&&x<=9?"ahsap":y<=3&&(x===10||x===11)?"beyaz":m&&y>=4&&y<=7&&x<=7?(x<=3?"O":"B")===A?"kumas":"yastik":null}function R(h){let m=S(h.name);if(!m)return;h.updateMatrixWorld(!0);let x=new lt().copy(h.matrixWorld).invert();h.traverse(y=>{if(!y.isMesh||y.userData.dokulu||Array.isArray(y.material))return;y.userData.dokulu=!0;let A=y.geometry,N=A.attributes.uv,z=A.attributes.position,W=A.attributes.normal;if(!N||!W)return;let ge=A.index?Array.from(A.index.array):[...Array(z.count).keys()],ye=ge.length,De=Je=>[Math.floor(N.getX(Je)*16),Math.floor(N.getY(Je)*16)],we=0,ot=0;for(let Je=0;Je<ye;Je+=3){let[Wt,Nt]=De(ge[Je]);Nt>=4&&Nt<=7&&Wt<=7&&(Wt<=3?we++:ot++)}let Ze=we>=ot?"O":"B",ft=[];for(let Je=0;Je<ye;Je+=3){let[Wt,Nt]=De(ge[Je]);ft.push(m(Wt,Nt,Ze))}let bt=[...new Set(ft.filter(Boolean))];if(!bt.length)return;let Oe=new lt().multiplyMatrices(x,y.matrixWorld),je=new vt().getNormalMatrix(Oe),rt=new Float32Array(z.count*2),Et=new D,yt=new D,wt=new Array(z.count);for(let Je=0;Je<ye;Je+=3){let Wt=ft[Je/3];if(Wt)for(let Nt=0;Nt<3;Nt++)wt[ge[Je+Nt]]=Wt}for(let Je=0;Je<z.count;Je++){if(!wt[Je])continue;let Wt=L[wt[Je]].tile;Et.fromBufferAttribute(z,Je).applyMatrix4(Oe),yt.fromBufferAttribute(W,Je).applyMatrix3(je);let Nt=Math.abs(yt.x),an=Math.abs(yt.y),cn=Math.abs(yt.z),ki,Is;an>=Nt&&an>=cn?(ki=Et.x,Is=Et.z):Nt>=cn?(ki=Et.z,Is=Et.y):(ki=Et.x,Is=Et.y),rt[Je*2]=ki/Wt,rt[Je*2+1]=Is/Wt}let pt=A.clone();pt.setAttribute("uv1",new Jt(rt,2));let Tt=[null,...bt],Ut=[];pt.clearGroups(),Tt.forEach((Je,Wt)=>{let Nt=Ut.length;for(let an=0;an<ye;an+=3)ft[an/3]===Je&&Ut.push(ge[an],ge[an+1],ge[an+2]);Ut.length>Nt&&pt.addGroup(Nt,Ut.length-Nt,Wt)}),pt.setIndex(Ut),y.geometry=pt,y.material=[y.material,...bt.map(B)]})}let Y=Pm({dokuYukle:O,canvasTex:Cn}),K=O("parke",Te.w/1.8,Te.d/1.8),J=new ce(new ut(Te.w,.2,Te.d),new $e({map:K,roughness:.5,metalness:0}));J.position.y=-.1,J.receiveShadow=!0,J.name="zemin",c.add(J);let de=new $e({roughness:.9}),Z=3.2,ve=new ce(new ut(Te.w+.3,Z,.3),de.clone());ve.material.map=O("duvar",(Te.w+.3)/2.2,Z/2.2),ve.position.set(0,Z/2-.2,-Te.d/2-.15),ve.receiveShadow=!0,c.add(ve);let oe=new ce(new ut(.3,Z,Te.d),de.clone());oe.material.map=O("duvar",Te.d/2.2,Z/2.2),oe.position.set(-Te.w/2-.15,Z/2-.2,0),oe.receiveShadow=!0,c.add(oe);let V=new $e({color:"#fffaf6",roughness:.6}),F=new ce(new ut(Te.w,.16,.06),V);F.position.set(0,.08,-Te.d/2+.03),c.add(F);let $=new ce(new ut(.06,.16,Te.d),V);$.position.set(-Te.w/2+.03,.08,0),c.add($);{let h=new ce(new ut(Te.w+.3,.12,.14),V);h.position.set(0,Z-.26,-Te.d/2+.02),c.add(h);let m=new ce(new ut(.14,.12,Te.d),V);m.position.set(-Te.w/2+.02,Z-.26,0),c.add(m)}let le=new st;le.position.set(1.2,1.55,-Te.d/2+.02),c.add(le);let be=new ce(new bn(2.2,1.5),new jt({map:Lm(u)}));le.add(be);let H=new $e({color:"#ffffff",roughness:.5});[[0,.78,2.4,.1],[0,-.78,2.5,.14],[-1.15,0,.1,1.66],[1.15,0,.1,1.66],[0,0,.06,1.5],[0,0,2.2,.06]].forEach(([h,m,x,y])=>{let A=new ce(new ut(x,y,.1),H);A.position.set(h,m,.03),A.castShadow=!0,le.add(A)});let U=[],ee=new $e({color:"#e6dccd",roughness:.95,side:on});[-1.45,1.45].forEach(h=>{let m=new ce(new Ft(.16,.22,2.1,10,1,!0,0,Math.PI),ee);m.position.set(h,-.15,.12),m.rotation.y=Math.PI,m.castShadow=!0,U.push(m),le.add(m)});let Q=new ce(new ut(.08,2.2,1.1),new $e({color:"#9b6a4a",roughness:.6}));Q.position.set(-Te.w/2+.05,1.1,2.2),c.add(Q);let fe=new ce(new Vn(.05,12,12),new $e({color:"#e6c36a",metalness:.8,roughness:.3}));fe.position.set(-Te.w/2+.12,1.05,1.8),c.add(fe);let _e=Cn(64,256,(h,m,x)=>{let y=h.createLinearGradient(0,0,0,x);y.addColorStop(0,"rgba(255,236,200,.9)"),y.addColorStop(1,"rgba(255,236,200,0)"),h.fillStyle=y,h.fillRect(0,0,m,x)}),Re=new ce(new bn(2.1,3.4),new jt({map:_e,transparent:!0,opacity:d?.05:f?.2:.13,blending:Bs,depthWrite:!1,side:on,color:f?"#ffb27a":d?"#9db0ff":"#fff1de"}));Re.position.set(1.2,1,-Te.d/2+1.3),Re.rotation.x=-.75,c.add(Re);let ke=70,re=new Kt,I=new Float32Array(ke*3);for(let h=0;h<ke;h++)I[h*3]=.2+Math.random()*2,I[h*3+1]=.3+Math.random()*2.2,I[h*3+2]=-Te.d/2+.3+Math.random()*2.2;re.setAttribute("position",new Jt(I,3)),c.add(new Xr(re,new Ws({color:d?"#c9d4ff":"#fff3dc",size:.035,transparent:!0,opacity:d?.35:.7,depthWrite:!1,blending:Bs})));let Ce=new cc;Ce.setMeshoptDecoder(wm);let Ae={"ahmet3.glb?v=1":"ahmet.glb?v=2","beyza3.glb?v=1":"beyza.glb?v=2"},[Me,Ie,Xe]=await Promise.all(["mobilya.glb?v=3","ahmet3.glb?v=1","beyza3.glb?v=1"].map(h=>Ce.loadAsync(s.base+h).catch(m=>Ae[h]?Ce.loadAsync(s.base+Ae[h]):Promise.reject(m)))),Se={};Me.scene.children.slice().forEach(h=>{Se[h.name]=h,R(h),h.scale.multiplyScalar(LM)});let P=Te.d/2,T=Te.d/2+3.6,j=[{id:"salon",ad:"Salon",em:"\u{1F6CB}\uFE0F",ox:0,fiyat:0},{id:"yatak",ad:"Yatak odas\u0131",em:"\u{1F6CF}\uFE0F",ox:40,fiyat:150,duvar:"#E6DDF6",yer:"yatak odas\u0131nda"},{id:"mutfak",ad:"Mutfak",em:"\u{1F373}",ox:80,fiyat:200,duvar:"#FFF0D9",yer:"mutfakta"},{id:"teras",ad:"Teras",em:"\u{1F319}",ox:120,fiyat:250,yer:"terasta"}];j[0].yer="salonda";let te=h=>j.find(m=>Math.abs(h-m.ox)<20)||j[0],me={x0:-Te.w/2,x1:120+Te.w/2,z0:-Te.d/2,z1:T},pe=new Set,Be=(h,m=0)=>({act:"otur",yerler:h,yon:m}),Le={...Y.KAT,kanvas_foto:["\u{1F5BC}\uFE0F","B\xFCy\xFCk kanvas foto\u011Fraf\u0131m\u0131z",45,"Bizim",{act:"foto",asili:!0,zemin:!0,kucuk:!0}],polaroid_ip:["\u{1F4F8}","Polaroid ipi (5 foto\u011Fraf)",40,"Bizim",{act:"foto",asili:!0,zemin:!0,kucuk:!0}],tarih_cerceve:["\u{1F4C5}","26 Ocak \xE7er\xE7evesi",25,"Bizim",{asili:!0,zemin:!0,kucuk:!0}],harita_cerceve:["\u{1F5FA}\uFE0F","Bizim \u0130stanbul haritas\u0131",30,"Bizim",{asili:!0,zemin:!0,kucuk:!0}],plak_duvar:["\u{1F4BF}","Bizim \u015Fark\u0131m\u0131z pla\u011F\u0131",25,"Bizim",{act:"muzik",asili:!0,zemin:!0,kucuk:!0}],harf_yastik:["\u{1F171}\uFE0F","B & A minderleri",30,"Bizim",{act:"yer",yerler:[[-.45,0],[.45,0]],yon:0}],kupa_sehpa:["\u2615","\u0130simli kupalar",30,"Bizim",{}],paspas:["\u{1F6AA}",'"Bizim Ev" paspas\u0131',15,"Bizim",{zemin:!0}],mum_set:["\u{1F56F}\uFE0F","Mum tepsisi",20,"Bizim",{kucuk:!0}],balon_kalp:["\u{1F388}","Kalp balonlar",20,"Bizim",{kucuk:!0,zemin:!0}],lale_buket:["\u{1F490}","B\xFCy\xFCk lale buketi",35,"Bizim",{kucuk:!0}],couch_pillows:["\u{1F6CB}\uFE0F","Yast\u0131kl\u0131 koltuk",120,"Oturma",Be([[-.55,.2],[.55,.2]])],couch:["\u{1F6CB}\uFE0F","Sade koltuk",90,"Oturma",Be([[-.55,.2],[.55,.2]])],armchair_pillows:["\u{1F4BA}","Yast\u0131kl\u0131 berjer",60,"Oturma",Be([[0,.2]])],armchair:["\u{1F4BA}","Berjer",45,"Oturma",Be([[0,.2]])],chair_A_wood:["\u{1FA91}","Ah\u015Fap sandalye",20,"Oturma",Be([[0,.02]])],chair_A:["\u{1FA91}","Sandalye",20,"Oturma",Be([[0,.02]])],chair_B_wood:["\u{1FA91}","Oval ah\u015Fap sandalye",25,"Oturma",Be([[0,.02]])],chair_B:["\u{1FA91}","Oval sandalye",25,"Oturma",Be([[0,.02]])],chair_C:["\u{1FA91}","Modern sandalye",30,"Oturma",Be([[0,.02]])],chair_stool_wood:["\u{1FAB5}","Ah\u015Fap tabure",12,"Oturma",Be([[0,0]])],chair_stool:["\u{1FAB5}","Tabure",12,"Oturma",Be([[0,0]])],pillow_A:["\u{1F7EA}","Yer minderi",10,"Oturma",{act:"yer",yerler:[[0,0]],yon:0}],pillow_B:["\u{1F7E6}","Yer minderi (mavi)",10,"Oturma",{act:"yer",yerler:[[0,0]],yon:0}],bed_double_A:["\u{1F6CF}\uFE0F","\xC7ift ki\u015Filik yatak",150,"Yatak",{act:"yat",yerler:[[-.45,-.15],[.45,-.15]],yon:0}],bed_double_B:["\u{1F6CF}\uFE0F","\xC7ift ki\u015Filik yatak (B)",150,"Yatak",{act:"yat",yerler:[[-.45,-.15],[.45,-.15]],yon:0}],bed_single_A:["\u{1F6CF}\uFE0F","Tek ki\u015Filik yatak",80,"Yatak",{act:"yat",yerler:[[0,-.15]],yon:0}],bed_single_B:["\u{1F6CF}\uFE0F","Tek ki\u015Filik yatak (B)",80,"Yatak",{act:"yat",yerler:[[0,-.15]],yon:0}],sehpa_lale:["\u{1F337}","Laleli sehpa",40,"Masa",{}],table_low:["\u{1F7EB}","Sehpa",30,"Masa",{}],table_small:["\u{1F7EB}","K\xFC\xE7\xFCk masa",25,"Masa",{}],table_medium:["\u{1F37D}\uFE0F","Yemek masas\u0131",50,"Masa",{}],table_medium_long:["\u{1F37D}\uFE0F","Uzun masa",70,"Masa",{}],shelf_B_large_decorated:["\u{1F4DA}","Dolu kitapl\u0131k",90,"Depolama",{}],shelf_B_small_decorated:["\u{1F4DA}","K\xFC\xE7\xFCk kitapl\u0131k",45,"Depolama",{}],shelf_A_big:["\u{1F5C4}\uFE0F","B\xFCy\xFCk raf",60,"Depolama",{}],shelf_A_small:["\u{1F5C4}\uFE0F","K\xFC\xE7\xFCk raf",30,"Depolama",{}],cabinet_medium_decorated:["\u{1F5C3}\uFE0F","Dolap",60,"Depolama",{}],cabinet_small_decorated:["\u{1F5C3}\uFE0F","Komodin",35,"Depolama",{}],lamp_standing:["\u{1F4A1}","Lambader",35,"S\xFCs",{act:"lamba"}],pikap:["\u{1F3B5}","Pikap",50,"S\xFCs",{act:"muzik"}],pictureframe_standing_A:["\u{1F5BC}\uFE0F","Ayakl\u0131 \xE7er\xE7eve",15,"S\xFCs",{act:"foto"}],pictureframe_standing_B:["\u{1F5BC}\uFE0F","Ayakl\u0131 \xE7er\xE7eve (B)",15,"S\xFCs",{act:"foto"}],book_set:["\u{1F4D6}","Kitap y\u0131\u011F\u0131n\u0131",8,"S\xFCs",{}],cactus_medium_A:["\u{1F335}","Kakt\xFCs",15,"Bitki",{}],cactus_medium_B:["\u{1F335}","Kakt\xFCs (B)",15,"Bitki",{}],cactus_small_A:["\u{1F335}","Minik kakt\xFCs",10,"Bitki",{}],cactus_small_B:["\u{1F335}","Minik kakt\xFCs (B)",10,"Bitki",{}],rug_rectangle_stripes_A:["\u{1F7E5}","\xC7izgili hal\u0131",40,"Hal\u0131",{zemin:!0}],rug_rectangle_stripes_B:["\u{1F7E5}","\xC7izgili hal\u0131 (B)",40,"Hal\u0131",{zemin:!0}],rug_rectangle_A:["\u{1F7E7}","Hal\u0131",35,"Hal\u0131",{zemin:!0}],rug_rectangle_B:["\u{1F7E7}","Hal\u0131 (B)",35,"Hal\u0131",{zemin:!0}],rug_oval_A:["\u{1F7E3}","Oval hal\u0131",35,"Hal\u0131",{zemin:!0}],rug_oval_B:["\u{1F7E3}","Oval hal\u0131 (B)",35,"Hal\u0131",{zemin:!0}],m_fridge_A_decorated:["\u{1F9CA}","Buzdolab\u0131",80,"Mutfak",{act:"buzdolabi",s:.8}],m_fridge_B:["\u{1F9CA}","Sade buzdolab\u0131",70,"Mutfak",{act:"buzdolabi",s:.8}],ocak:["\u{1F525}","Ocak",70,"Mutfak",{act:"pisir"}],m_kitchencounter_sink_backsplash:["\u{1F6B0}","Eviye",50,"Mutfak",{s:.8}],m_kitchencounter_straight_A_decorated:["\u{1F9C2}","Dolu tezg\xE2h",45,"Mutfak",{s:.8}],m_kitchencounter_straight_B_backsplash:["\u{1F7EB}","Tezg\xE2h",35,"Mutfak",{s:.8}],m_kitchencounter_straight_A_backsplash:["\u{1F7EB}","Tezg\xE2h (A)",35,"Mutfak",{s:.8}],m_kitchencabinet:["\u{1F5C4}\uFE0F","\xDCst dolap",30,"Mutfak",{s:.8,duvar:!0,zemin:!0}],semaver:["\u{1FAD6}","Semaver",30,"Mutfak",{act:"cay"}],m_table_round_A_small:["\u{1F37D}\uFE0F","Yuvarlak masa",45,"Mutfak",{s:.75,masa:!0}],m_dishrack_plates:["\u{1F37D}\uFE0F","Tabakl\u0131k",15,"Mutfak",{s:.6}],m_crate_tomatoes:["\u{1F345}","Domates kasas\u0131",12,"Mutfak",{s:.4}],m_crate_onions:["\u{1F9C5}","So\u011Fan kasas\u0131",12,"Mutfak",{s:.4}],teleskop:["\u{1F52D}","Teleskop",60,"Teras",{act:"yildiz"}],saksi_lale:["\u{1F337}","Saks\u0131da lale",20,"Bitki",{}],fener_ayak:["\u{1F3EE}","Ayakl\u0131 fener",25,"Teras",{}]},Ve={yatak:[["bed_double_B",0,-1.9,0],["cabinet_small_decorated",-2.05,-2.9,0],["cabinet_small_decorated",2.05,-2.9,0],["lamp_standing",3.4,-2.9,0],["rug_oval_B",0,.6,0],["armchair_pillows",3.3,.9,-Math.PI/2],["shelf_B_small_decorated",-4.15,-.6,Math.PI/2],["pillow_A",-2.4,1.6,0],["pillow_B",-1.6,2.1,0],["cactus_medium_B",4,2.9,0],["saksi_lale",-3.9,2.9,0],["pictureframe_standing_B",3.9,-1.6,-Math.PI/2]],mutfak:[["m_fridge_A_decorated",-3.55,-2.7,0],["m_kitchencounter_sink_backsplash",-1.95,-2.75,0],["m_kitchencounter_straight_A_decorated",-.35,-2.75,0],["ocak",1.25,-2.75,0],["m_kitchencounter_straight_B_backsplash",2.85,-2.75,0],["m_kitchencabinet",-1.95,-3.5,0],["m_kitchencabinet",-.35,-3.5,0],["m_kitchencabinet",2.85,-3.5,0],["semaver",3.85,-1.2,-Math.PI/2],["m_table_round_A_small",.6,.9,0],["chair_A_wood",.6,1.75,Math.PI],["chair_A_wood",.6,.05,0],["rug_rectangle_B",.6,.9,0],["m_crate_tomatoes",-3.9,1.6,0],["m_crate_onions",-3.9,2.6,0],["cactus_small_A",3.95,2.9,0]],teras:[["rug_rectangle_stripes_B",0,.3,0],["m_table_round_A_small",0,.2,0],["chair_B_wood",0,1.05,Math.PI],["chair_B_wood",0,-.65,0],["teleskop",3,-2.2,-.6],["saksi_lale",-3.6,-2.8,0],["saksi_lale",-2.6,-2.95,0],["cactus_medium_A",3.9,2.8,0],["fener_ayak",-3.8,2.6,0],["fener_ayak",3.9,-.2,0],["pillow_A",-2,1.8,0],["pillow_B",-1.2,2.3,0]]},_t=()=>({v:1,harcanan:0,toplanan:0,depo:[],hediyeler:[],bahce:Array.from({length:8},()=>({})),esyalar:[{id:"e1",t:"rug_rectangle_stripes_A",x:.6,z:.7,r:0},{id:"e2",t:"rug_oval_A",x:-2.6,z:-1.6,r:0},{id:"e3",t:"couch_pillows",x:.6,z:-1.95,r:0},{id:"e4",t:"sehpa_lale",x:.6,z:.55,r:0},{id:"e5",t:"armchair_pillows",x:3.25,z:.3,r:-Math.PI/2},{id:"e6",t:"bed_double_A",x:-2.9,z:-1.9,r:0},{id:"e7",t:"shelf_B_large_decorated",x:-4.15,z:.6,r:Math.PI/2},{id:"e8",t:"lamp_standing",x:2.9,z:-2.9,r:0},{id:"e9",t:"cabinet_medium_decorated",x:3.6,z:-2.95,r:0},{id:"e10",t:"pikap",x:-1.2,z:-3,r:0},{id:"e11",t:"cactus_medium_A",x:3.95,z:2.9,r:0},{id:"e12",t:"cactus_small_B",x:4.05,z:1.7,r:0},{id:"e13",t:"table_medium",x:-2.5,z:2.3,r:0},{id:"e14",t:"chair_A_wood",x:-2.5,z:1.3,r:0},{id:"e15",t:"chair_A_wood",x:-2.5,z:3.3,r:Math.PI}]}),Ee=(window.__MANIFEST||[]).filter(h=>h.kind!=="video"&&/\.(jpe?g|png|webp)\.bin$/i.test(h.src||"")),We=new js,dt=(Mf=window.__leFotoBas)!=null?Mf:Math.floor(Math.random()*Math.max(1,Ee.length));async function ct(h){if(!Ee.length||!s.decUrl)return;let m=Ee[dt++%Ee.length];try{let x=await s.decUrl(String(m.src).replace(/^enc:/,""));We.load(x,y=>{y.colorSpace=sn;let A=h.userData.oran||1,N=y.image.width/y.image.height;y.repeat.set(Math.min(1,A/N),Math.min(1,N/A)),y.offset.set((1-y.repeat.x)/2,(1-y.repeat.y)/2),h.material.map&&h.material.map.dispose(),h.material.map=y,h.material.color.set("#ffffff"),h.material.needsUpdate=!0,h.userData.tarih=m.date})}catch{}}function Ke(h){h.updateMatrixWorld(!0);let m=new lt().copy(h.matrixWorld).invert(),x=new gn().setFromObject(h).applyMatrix4(m),y=x.getSize(new D),A=x.getCenter(new D),N=y.x<y.z?"x":"z",z=N==="x"?y.z:y.x,W=y.y,ge=new ce(new bn(z*.72,W*.72),new $e({color:"#f3e3e7",roughness:.55}));return ge.userData.oran=z/W,N==="x"?(ge.position.set(x.max.x+.004,A.y,A.z),ge.rotation.y=Math.PI/2):ge.position.set(A.x,A.y,x.max.z+.004),h.add(ge),h.userData.foto=ge,ct(ge),ge}function Mt(h,m,x,y,A){let N=Se[h].clone(!0);return N.position.set(m,A,x),N.rotation.y=y,N.traverse(z=>{z.isMesh&&(z.castShadow=!0)}),c.add(N),N}let at=[Mt("pictureframe_large_A",-1,-Te.d/2+.1,0,1.5),Mt("pictureframe_medium",-Te.w/2+.1,-.4,Math.PI/2,1.5),Mt("pictureframe_small_A",-2,-Te.d/2+.1,0,1.75),Mt("pictureframe_small_B",-Te.w/2+.1,.6,Math.PI/2,2.15)].filter(Boolean);at.forEach(h=>{Ke(h),h.userData.act="foto",h.userData.id="duvar"+at.indexOf(h),h.userData.ad=h.userData.id});let mt=h=>h==="salon"||!!(ae&&ae.odalar&&ae.odalar[h]),G=[];Q.userData={act:"kapi",id:"kapi-salon",ad:"kapi-salon"},G.push(Q);function He(h){return Cn(512,512,(m,x,y)=>{if(h==="mutfak"){let N=x/8;for(let z=0;z<8;z++)for(let W=0;W<8;W++)m.fillStyle=(z+W)%2?"#f5ebe0":"#d97b5f",m.fillRect(z*N,W*N,N,N);m.strokeStyle="rgba(0,0,0,.08)",m.lineWidth=2;for(let z=0;z<=8;z++)m.beginPath(),m.moveTo(z*N,0),m.lineTo(z*N,y),m.stroke(),m.beginPath(),m.moveTo(0,z*N),m.lineTo(x,z*N),m.stroke()}else if(h==="teras"){let N=y/10;for(let z=0;z<10;z++){m.fillStyle=`hsl(25,${32+Math.random()*8}%,${52+Math.random()*8}%)`,m.fillRect(0,z*N,x,N-4),m.fillStyle="rgba(60,30,20,.35)",m.fillRect(0,z*N+N-4,x,4);for(let W=0;W<6;W++)m.fillStyle="rgba(90,50,30,.15)",m.fillRect(Math.random()*x,z*N+Math.random()*N,40+Math.random()*80,1.5)}}else{m.fillStyle="#efe4dc",m.fillRect(0,0,x,y);for(let A=0;A<5e3;A++)m.fillStyle=`rgba(${150+Math.random()*60},${120+Math.random()*50},${150+Math.random()*60},.12)`,m.fillRect(Math.random()*x,Math.random()*y,2,2)}})}function he(h){if(h.kuruldu||h.id==="salon"){h.kuruldu=!0;return}h.kuruldu=!0;let m=new st;m.position.x=h.ox,c.add(m),h.g=m;let x;h.id==="mutfak"?x=O("mzemin",Te.w/2.4,Te.d/2.4):(x=He(h.id),x.wrapS=x.wrapT=ln,x.repeat.set(1.6,1.3));let y=new ce(new ut(Te.w,.2,Te.d),new $e({map:x,roughness:h.id==="mutfak"?.35:.8}));if(y.position.y=-.1,y.receiveShadow=!0,m.add(y),pe.add(y),h.id!=="teras"){let A=OM(h.duvar);A.wrapS=A.wrapT=ln;let N=h.id==="mutfak"?3.4:Z,z=h.id==="mutfak",W=new ce(new ut(Te.w+.3,N,.3),new $e({map:z?O("fayans",(Te.w+.3)/1.4,N/1.4):A,roughness:z?.25:.9}));z||W.material.map.repeat.set(3,1.1),W.position.set(0,N/2-.2,-Te.d/2-.15),W.receiveShadow=!0,m.add(W);let ge=A.clone();ge.repeat.set(2.4,1.1),ge.needsUpdate=!0;let ye=new ce(new ut(.3,N,Te.d),new $e({map:z?O("fayans",Te.d/1.4,N/1.4):ge,roughness:z?.25:.9}));ye.position.set(-Te.w/2-.15,N/2-.2,0),ye.receiveShadow=!0,m.add(ye),[[Te.w,.16,.06,0,.08,-Te.d/2+.03],[.06,.16,Te.d,-Te.w/2+.03,.08,0],[Te.w+.3,.12,.14,0,N-.26,-Te.d/2+.02],[.14,.12,Te.d,-Te.w/2+.02,N-.26,0]].forEach(([ft,bt,Oe,je,rt,Et])=>{let yt=new ce(new ut(ft,bt,Oe),V);yt.position.set(je,rt,Et),m.add(yt)});let De=new st;m.add(De),h.id==="mutfak"?(De.position.set(-Te.w/2+.02,1.6,-.4),De.rotation.y=Math.PI/2):De.position.set(2.6,1.7,-Te.d/2+.02),De.add(new ce(new bn(1.8,1.3),new jt({map:Lm(u)}))),[[0,.68,2,.1],[0,-.68,2.1,.14],[-.95,0,.1,1.46],[.95,0,.1,1.46],[0,0,.06,1.3]].forEach(([ft,bt,Oe,je])=>{let rt=new ce(new ut(Oe,je,.1),H);rt.position.set(ft,bt,.03),De.add(rt)});let we=new $e({color:h.id==="yatak"?"#9C7BD3":"#ddd2c0",roughness:.9,side:on});[-1.2,1.2].forEach(ft=>{let bt=new ce(new Ft(.14,.2,1.8,10,1,!0,0,Math.PI),we);bt.position.set(ft,-.1,.12),bt.rotation.y=Math.PI,U.push(bt),De.add(bt)});let ot=new ce(new ut(.08,2.2,1.1),new $e({color:"#9b6a4a",roughness:.6}));ot.position.set(h.ox-Te.w/2+.05,1.1,2.2),c.add(ot),ot.userData={act:"kapi",id:"kapi-"+h.id,ad:"kapi-"+h.id},G.push(ot);let Ze=fe.clone();Ze.position.x=h.ox-Te.w/2+.12,c.add(Ze),h.id==="yatak"&&[[-.75,2.05,"pictureframe_medium"],[.75,2.05,"pictureframe_medium"]].forEach(([ft,bt,Oe])=>{let je=Se[Oe].clone(!0);je.position.set(h.ox+ft,bt,-Te.d/2+.1),c.add(je),Ke(je),je.userData.act="foto",je.userData.id="duvar-y"+ft,je.userData.ad=je.userData.id,at.push(je)})}else{let A=new $e({color:"#8a5a3c",roughness:.6}),N=new $e({color:"#cfe8ff",transparent:!0,opacity:.22,roughness:.05}),z=(ft,bt,Oe,je)=>{let rt=Math.hypot(Oe-ft,je-bt),Et=Math.atan2(Oe-ft,je-bt),yt=Math.round(rt/1.1);for(let Tt=0;Tt<=yt;Tt++){let Ut=new ce(new ut(.08,1,.08),A);Ut.position.set(ft+(Oe-ft)*Tt/yt,.5,bt+(je-bt)*Tt/yt),Ut.castShadow=!0,m.add(Ut)}let wt=new ce(new ut(.1,.08,rt),A);wt.position.set((ft+Oe)/2,1.02,(bt+je)/2),wt.rotation.y=Et,m.add(wt);let pt=new ce(new ut(.02,.8,rt),N);pt.position.set((ft+Oe)/2,.5,(bt+je)/2),pt.rotation.y=Et,m.add(pt)};z(-Te.w/2+.05,-Te.d/2+.05,Te.w/2-.05,-Te.d/2+.05),z(-Te.w/2+.05,-Te.d/2+.05,-Te.w/2+.05,1.3);let W=XM(u),ge=new ce(new bn(52,20),new jt({map:W,fog:!1}));ge.position.set(4,-.2,-15),m.add(ge);let ye=new ce(new bn(46,20),new jt({map:W,fog:!1}));ye.position.set(-17,-.2,4),ye.rotation.y=Math.PI/2,m.add(ye);let De=new st;De.position.set(-Te.w/2+.1,0,2.4),m.add(De),[[0,1.15,-.6,.1,2.3,.1],[0,1.15,.6,.1,2.3,.1],[0,2.3,0,.1,.1,1.3]].forEach(([ft,bt,Oe,je,rt,Et])=>{let yt=new ce(new ut(je,rt,Et),A);yt.position.set(ft,bt,Oe),De.add(yt)});let we=new ce(new ut(.06,2.2,1.1),new $e({color:"#cfe8ff",transparent:!0,opacity:.35}));we.position.set(h.ox-Te.w/2+.1,1.1,2.4),c.add(we),we.userData={act:"kapi",id:"kapi-teras",ad:"kapi-teras"},G.push(we);let ot=(ft,bt)=>{let Oe=new ce(new Ft(.04,.05,2.6,8),A);Oe.position.set(ft,1.3,bt),Oe.castShadow=!0,m.add(Oe)},Ze=(ft,bt)=>{for(let je=0;je<=16;je++){let rt=je/16,Et=ft[0]+(bt[0]-ft[0])*rt,yt=ft[1]+(bt[1]-ft[1])*rt,wt=2.5-Math.sin(rt*Math.PI)*.45,pt=new ce(new Vn(.045,8,6),new $e({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:d||f?3:.4}));pt.position.set(Et,wt,yt),m.add(pt)}};if(ot(-4.2,-3.2),ot(4.2,-3.2),ot(-4.2,3.2),Ze([-4.2,-3.2],[4.2,-3.2]),Ze([-4.2,-3.2],[-4.2,3.2]),d||f){let ft=new oi("#ffcf7a",2.5,9,1.6);ft.position.set(0,2.3,-2.6),m.add(ft)}}}let xe=null;function qe(){return xe||(xe=Ce.loadAsync(s.base+"mutfak.glb?v=1").then(h=>{h.scene.children.slice().forEach(m=>{Se[m.name]=m,R(m)})})),xe}let Pe=h=>new $e(Object.assign({roughness:.7},h)),gt=(h,m)=>`${h} ${m}px "Young Serif", Georgia, "Times New Roman", serif`;function nn(h,m,x="#3b2a22",y=.05){let A=new st,N=Pe({color:x,roughness:.5});[[0,m/2+y/2,h+y*2,y],[0,-m/2-y/2,h+y*2,y],[-h/2-y/2,0,y,m],[h/2+y/2,0,y,m]].forEach(([W,ge,ye,De])=>{let we=new ce(new ut(ye,De,.05),N);we.position.set(W,ge,.025),we.castShadow=!0,A.add(we)});let z=new ce(new ut(h,m,.015),Pe({color:"#efe6dc"}));return z.position.z=.008,A.add(z),A}function vn(h,m,x,y,A){let N=new st,z=nn(h,m,A);z.position.y=x,N.add(z);let W=new ce(new bn(h,m),Pe({map:Cn(Math.round(512*h/Math.max(h,m))*2,Math.round(512*m/Math.max(h,m))*2,y),roughness:.85}));return W.position.set(0,x,.02),N.add(W),N}function Lt(h=1){let m=new Wi;return m.moveTo(0,-.5*h),m.bezierCurveTo(-.15*h,-.32*h,-.5*h,-.15*h,-.5*h,.12*h),m.bezierCurveTo(-.5*h,.4*h,-.15*h,.5*h,0,.28*h),m.bezierCurveTo(.15*h,.5*h,.5*h,.4*h,.5*h,.12*h),m.bezierCurveTo(.5*h,-.15*h,.15*h,-.32*h,0,-.5*h),m}let Rn={tarih_cerceve:()=>vn(.62,.82,1.62,(h,m,x)=>{h.fillStyle="#fbf6ef",h.fillRect(0,0,m,x),h.textAlign="center",h.fillStyle="#b8325a",h.font=gt("400",m*.2),h.fillText("26",m/2,x*.36),h.fillStyle="#34131F",h.font=gt("400",m*.1),h.fillText("Ocak 2026",m/2,x*.5),h.strokeStyle="#d9b9a6",h.lineWidth=3,h.beginPath(),h.moveTo(m*.3,x*.57),h.lineTo(m*.7,x*.57),h.stroke(),h.font=gt("italic 400",m*.075),h.fillStyle="#8A6473",h.fillText(`${o.B} & ${o.A}`,m/2,x*.67),h.font=gt("italic 400",m*.055),h.fillText("her \u015Fey burada ba\u015Flad\u0131",m/2,x*.76),h.font=`${m*.09}px serif`,h.fillText("\u{1F337}",m/2,x*.9)}),harita_cerceve:()=>vn(.95,.7,1.62,(h,m,x)=>{h.fillStyle="#cfe3ef",h.fillRect(0,0,m,x),h.fillStyle="#f1e6d2",h.beginPath(),h.moveTo(0,0),h.lineTo(m*.52,0),h.bezierCurveTo(m*.5,x*.25,m*.44,x*.4,m*.47,x*.58),h.bezierCurveTo(m*.5,x*.75,m*.42,x*.85,m*.35,x),h.lineTo(0,x),h.fill(),h.beginPath(),h.moveTo(m,0),h.lineTo(m*.6,0),h.bezierCurveTo(m*.58,x*.25,m*.53,x*.42,m*.56,x*.6),h.bezierCurveTo(m*.6,x*.78,m*.55,x*.9,m*.5,x),h.lineTo(m,x),h.fill(),h.strokeStyle="rgba(120,90,70,.25)",h.lineWidth=2;for(let A=0;A<26;A++){let N=Math.random()*m,z=Math.random()*x;h.beginPath(),h.moveTo(N,z),h.lineTo(N+30+Math.random()*40,z+(Math.random()-.5)*20),h.stroke()}let y=(A,N,z,W)=>{h.fillStyle=W,h.beginPath(),h.moveTo(A,N+z*.9),h.bezierCurveTo(A-z*1.6,N-z*.2,A-z*.6,N-z*1.3,A,N-z*.45),h.bezierCurveTo(A+z*.6,N-z*1.3,A+z*1.6,N-z*.2,A,N+z*.9),h.fill()};y(m*.27,x*.42,m*.035,"#b8325a"),y(m*.72,x*.55,m*.03,"#E8577A"),h.setLineDash([8,8]),h.strokeStyle="#b8325a",h.lineWidth=3,h.beginPath(),h.moveTo(m*.27,x*.42),h.quadraticCurveTo(m*.5,x*.25,m*.72,x*.55),h.stroke(),h.setLineDash([]),h.fillStyle="#34131F",h.textAlign="center",h.font=gt("italic 400",m*.06),h.fillText("Bizim \u0130stanbul",m/2,x*.92)},"#e8e1d6"),plak_duvar:()=>vn(.62,.62,1.7,(m,x,y)=>{m.fillStyle="#f4ece4",m.fillRect(0,0,x,y);let A=x/2,N=y*.46,z=x*.36;m.fillStyle="#141014",m.beginPath(),m.arc(A,N,z,0,7),m.fill(),m.strokeStyle="rgba(255,255,255,.07)";for(let W=8;W<z;W+=5)m.beginPath(),m.arc(A,N,W,0,7),m.stroke();m.fillStyle="#E8577A",m.beginPath(),m.arc(A,N,z*.33,0,7),m.fill(),m.fillStyle="#fff",m.textAlign="center",m.font=gt("400",z*.1),m.fillText("Bizim",A,N-z*.05),m.fillText("\u015Eark\u0131m\u0131z",A,N+z*.1),m.fillStyle="#34131F",m.font=gt("italic 400",x*.06),m.fillText(`${o.B} & ${o.A}`,x/2,y*.94)},"#1c1c1c"),kanvas_foto:()=>{let h=new st,m=1.68,x=new ce(new ut(1.34,.98,.05),Pe({color:"#fbf8f4"}));x.position.set(0,m,.025),x.castShadow=!0,h.add(x);let y=new ce(new bn(1.26,.9),Pe({color:"#f3e3e7",roughness:.55}));return y.position.set(0,m,.052),y.userData.oran=1.26/.9,h.add(y),h.userData.foto=y,h},polaroid_ip:()=>{let h=new st,m=1.95,x=5,y=1.9;h.userData.fotolar=[];let A=new Ya([...Array(9)].map((N,z)=>new D(-y/2+y*z/8,m-Math.sin(z/8*Math.PI)*.12,.03)));h.add(new ce(new qs(A,40,.006,5),Pe({color:"#c8a46a",roughness:.6}))),[-1,1].forEach(N=>{let z=new ce(new Vn(.02,8,6),Pe({color:"#c8a46a"}));z.position.set(N*y/2,m,.03),h.add(z)});for(let N=0;N<x;N++){let z=(N+.5)/x,W=-y/2+y*z,ge=m-Math.sin(z*Math.PI)*.12,ye=new st;ye.position.set(W,ge-.2,.035),ye.rotation.z=(Math.random()-.5)*.2;let De=new ce(new ut(.26,.31,.006),Pe({color:"#fffdf8",roughness:.9}));De.castShadow=!0,ye.add(De);let we=new ce(new bn(.22,.22),Pe({color:"#f3e3e7",roughness:.6}));we.position.set(0,.025,.004),ye.add(we),h.userData.fotolar.push(we);let ot=new ce(new ut(.025,.06,.015),Pe({color:"#E8577A"}));ot.position.set(0,.16,.008),ye.add(ot),h.add(ye)}return h},harf_yastik:()=>{let h=new st;return[[-.45,"#7a1f2e","B"],[.45,"#1f2a4d","A"]].forEach(([m,x,y])=>{let A=new Ft(.36,.38,.16,28),N=Cn(256,256,(W,ge,ye)=>{W.fillStyle=x,W.fillRect(0,0,ge,ye),W.strokeStyle="rgba(255,255,255,.35)",W.lineWidth=6,W.setLineDash([10,8]),W.beginPath(),W.arc(ge/2,ye/2,ge*.4,0,7),W.stroke(),W.setLineDash([]),W.fillStyle="#fbe9dc",W.textAlign="center",W.textBaseline="middle",W.font=gt("400",130),W.fillText(y,ge/2,ye/2+6)}),z=new ce(A,[Pe({color:x,roughness:.95}),Pe({map:N,roughness:.95}),Pe({color:x})]);z.position.set(m,.08,0),z.scale.y=.9,z.castShadow=!0,z.receiveShadow=!0,h.add(z)}),h},paspas:()=>{let h=new ce(new ut(1,.02,.6),[Pe({color:"#b98d5f"}),Pe({color:"#b98d5f"}),Pe({map:Cn(512,300,(x,y,A)=>{x.fillStyle="#c99f6e",x.fillRect(0,0,y,A);for(let N=0;N<2500;N++)x.fillStyle=`rgba(90,60,30,${Math.random()*.18})`,x.fillRect(Math.random()*y,Math.random()*A,2,5);x.strokeStyle="#5a3a22",x.lineWidth=6,x.strokeRect(16,16,y-32,A-32),x.fillStyle="#4a2c1a",x.textAlign="center",x.textBaseline="middle",x.font=gt("400",86),x.fillText("Bizim Ev",y/2,A*.45),x.font=gt("italic 400",34),x.fillText(`${o.B} & ${o.A}`,y/2,A*.74)}),roughness:1}),Pe({color:"#b98d5f"}),Pe({color:"#b98d5f"}),Pe({color:"#b98d5f"})]);h.position.y=.011,h.receiveShadow=!0;let m=new st;return m.add(h),m},kupa_sehpa:()=>{let h=new st,m=Se.table_small.clone(!0);h.add(m);let x=new gn().setFromObject(m).max.y;return h.userData.ustY=x,[[-.12,"#7a1f2e","B"],[.12,"#1f2a4d","A"]].forEach(([y,A,N])=>{let z=Cn(256,128,(ye,De,we)=>{ye.fillStyle="#fbf6ef",ye.fillRect(0,0,De,we),ye.fillStyle=A,ye.textAlign="center",ye.textBaseline="middle",ye.font=gt("400",70),ye.fillText(N,De*.25,we/2),ye.fillText("\u2665",De*.75,we/2)}),W=new ce(new Ft(.055,.05,.12,20),[Pe({map:z,roughness:.3}),Pe({color:"#4a2c1a",roughness:.2}),Pe({color:"#fbf6ef"})]);W.position.set(y,x+.06,0),W.rotation.y=y<0?.4:-.4,W.castShadow=!0,h.add(W);let ge=new ce(new jr(.03,.009,6,14),Pe({color:"#fbf6ef",roughness:.3}));ge.position.set(y+(y<0?-.06:.06),x+.065,0),ge.rotation.y=Math.PI/2,h.add(ge)}),h},mum_set:()=>{let h=new st,m=[],x=new ce(new Ft(.24,.24,.02,24),Pe({color:"#c8a46a",metalness:.7,roughness:.3}));if(x.position.y=.01,h.add(x),[[-.1,.2,.04],[.08,.14,-.06],[.02,.26,.1]].forEach(([y,A,N])=>{let z=new ce(new Ft(.045,.045,A,16),Pe({color:"#fbf3e6",roughness:.6}));z.position.set(y,.02+A/2,N),z.castShadow=!0,h.add(z);let W=new ce(new Vn(.018,8,8),new jt({color:"#ffcf7a"}));W.scale.y=1.8,W.position.set(y,.02+A+.03,N),h.add(W),m.push(W)}),d||f){let y=new oi("#ffb26b",1.2,2.5,2);y.position.y=.45,h.add(y)}return h.userData.anim=(y,A)=>m.forEach((N,z)=>{let W=1+Math.sin(A*13+z*2)*.12+Math.sin(A*23+z)*.08;N.scale.set(W,1.8*W,W)}),h},balon_kalp:()=>{let h=new st,m=[],x=new ce(new Ft(.05,.06,.05,12),Pe({color:"#c8a46a",metalness:.6,roughness:.3}));return x.position.y=.025,h.add(x),[[-.12,1.75,"#E8577A"],[.14,1.9,"#b8325a"],[0,2.1,"#f39ab4"]].forEach(([y,A,N],z)=>{let W=new qr(Lt(.36),{depth:.06,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:4,curveSegments:18});W.center();let ge=new ce(W,Pe({color:N,roughness:.25,metalness:.15}));ge.position.set(y,A,0),ge.castShadow=!0,h.add(ge);let ye=new ce(new Ft(.003,.003,A-.2,4),Pe({color:"#ffffff"}));ye.position.set(y/2,(A-.2)/2+.05,0),ye.rotation.z=Math.atan2(y,A)*.5,h.add(ye),m.push([ge,A,z])}),h.userData.anim=(y,A)=>m.forEach(([N,z,W])=>{N.position.y=z+Math.sin(A*1.3+W*2)*.04,N.rotation.y=Math.sin(A*.7+W)*.35}),h},lale_buket:()=>{let h=new st,m=Vd();return m.scale.setScalar(1.6),h.add(m),h}},Dt=new Map;function ia(h){let m=Le[h.t];if(!m)return null;let x;if((h.t.startsWith("m_")||h.t==="ocak")&&!Se.m_kitchencounter_straight_A)return null;if(h.t==="pikap"){x=new st;let y=Se.table_small.clone(!0);x.add(y);let A=new gn().setFromObject(y).max.y,N=FM();N.position.y=A,x.add(N),x.userData.plak=N.userData.plak}else if(h.t==="sehpa_lale"){x=new st;let y=Se.table_low.clone(!0);x.add(y);let A=new gn().setFromObject(y).max.y,N=Vd();N.position.y=A,N.scale.setScalar(1.15),x.add(N),x.userData.ustY=A}else if(h.t==="ocak"){if(x=new st,Se.m_kitchencounter_straight_A&&Se.m_stove_multi_countertop){let y=Se.m_kitchencounter_straight_A.clone(!0),A=Se.m_stove_multi_countertop.clone(!0),N=Se.m_extractorhood.clone(!0);N.position.z=-1,[y,A,N].forEach(z=>x.add(z)),x.scale.setScalar(.8)}}else if(h.t==="semaver")x=BM();else if(h.t==="teleskop")x=GM();else if(h.t==="saksi_lale")x=VM();else if(h.t==="fener_ayak")x=WM(d||f);else if(Rn[h.t])x=Rn[h.t]();else if(Y.YAP[h.t])x=Y.YAP[h.t]();else{if(!Se[h.t])return null;x=Se[h.t].clone(!0),m[4].duvar&&(x.userData.duvar=!0)}return m[4].s&&!x.userData.olcekli&&(x.scale.setScalar(m[4].s),x.userData.olcekli=!0),x.traverse(y=>{y.isMesh&&(y.castShadow=!m[4].zemin,y.receiveShadow=!0)}),Object.assign(x.userData,m[4],{id:h.id,tip:h.t,ad:h.t}),c.add(x),Dt.set(h.id,x),kn(x,h),m[4].act==="foto"&&(x.userData.fotolar?x.userData.fotolar.forEach(ct):x.userData.foto?ct(x.userData.foto):Ke(x)),x}function kn(h,m){h.position.set(m.x,m.y||0,m.z),h.rotation.y=m.r||0,h.updateMatrixWorld(!0);let x=new gn().setFromObject(h);h.userData.kutu={x0:x.min.x,x1:x.max.x,z0:x.min.z,z1:x.max.z,y1:x.max.y}}function Ii(h){let m=h.userData,x=h.rotation.y,y=Math.cos(x),A=Math.sin(x),N=h.scale.x||1;return(m.yerler||[]).map(([z,W])=>[h.position.x+(z*y+W*A)*N,h.position.z+(-z*A+W*y)*N])}let Zi=Cn(512,256,(h,m,x)=>{h.fillStyle="#9fcf7a",h.fillRect(0,0,m,x);for(let y=0;y<2600;y++){h.strokeStyle=`hsl(${95+Math.random()*25},${40+Math.random()*20}%,${48+Math.random()*18}%)`,h.lineWidth=1.2;let A=Math.random()*m,N=Math.random()*x;h.beginPath(),h.moveTo(A,N),h.lineTo(A+(Math.random()-.5)*4,N-4-Math.random()*6),h.stroke()}});Zi.wrapS=Zi.wrapT=ln,Zi.repeat.set(3,1.2);let Ji=new ce(new ut(Te.w,.2,T-P),new $e({map:Zi,roughness:1}));Ji.position.set(0,-.11,(P+T)/2),Ji.receiveShadow=!0,Ji.name="zemin",c.add(Ji),pe.add(J),pe.add(Ji);let mo=new $e({color:"#e9e1d6",roughness:.9});for(let h=0;h<4;h++){let m=new ce(new Ft(.22,.24,.05,14),mo);m.position.set(-3.6+h%2*.25,0,P+.45+h*.8),m.receiveShadow=!0,c.add(m)}let $i=new $e({color:"#fffaf6",roughness:.7}),sa=(h,m)=>{let x=new ce(new ut(.08,.55,.08),$i);x.position.set(h,.27,m),x.castShadow=!0,c.add(x);let y=new ce(new Ka(.06,.1,4),$i);y.position.set(h,.6,m),y.rotation.y=Math.PI/4,c.add(y)};for(let h=-Te.w/2;h<=Te.w/2+.01;h+=.45)sa(h,T);for(let h=P+.3;h<T;h+=.45)sa(Te.w/2,h);[[0,T,Te.w,.05],[Te.w/2,(P+T)/2,.05,T-P]].forEach(([h,m,x,y])=>[.18,.4].forEach(A=>{let N=new ce(new ut(x,.06,y),$i);N.position.set(h,A,m),N.castShadow=!0,c.add(N)}));let Bn=new st;Bn.position.set(-4.1,0,T-.4),c.add(Bn);{let h=new ce(new Ft(.04,.05,1.3,8),new $e({color:"#3a2a2e",roughness:.5}));h.position.y=.65,h.castShadow=!0,Bn.add(h);let m=new ce(new Vn(.13,16,12),new $e({color:"#fff3d1",emissive:"#ffcf7a",emissiveIntensity:d||f?2.2:.15}));if(m.position.y=1.38,Bn.add(m),d||f){let x=new oi("#ffcf7a",3.5,5,1.8);x.position.y=1.35,Bn.add(x)}}let go=[-3.15,-1.05,1.05,3.15].flatMap(h=>[P+1.05,P+2.5].map(m=>[h,m])),$s=new $e({color:"#7a5034",roughness:1}),Mc=new $e({color:"#a77d5a",roughness:1}),Sc=new $e({color:"#b98a5e",roughness:.8}),Di=go.map(([h,m],x)=>{let y=new st;y.position.set(h,0,m),c.add(y);let A=new ce(new ut(1.4,.16,.95),Sc);A.position.y=.06,A.castShadow=!0,A.receiveShadow=!0,y.add(A);let N=new ce(new ut(1.25,.05,.8),$s);N.position.y=.14,N.receiveShadow=!0,y.add(N);let z=new st;return z.position.y=.16,y.add(z),y.userData={act:"bahce",i:x,top:N,bit:z,ad:"parsel"+x,id:"parsel"+x},y}),C=["#C9233F","#E8577A","#F7A8BE","#fff1f4","#9C7BD3","#f5a524"],X=new $e({color:"#5b9e5a",roughness:.8,side:on}),ne=36e5,se=6*ne;function q(h){if(!h||!h.ekim)return-1;let m=(Date.now()-h.ekim)/se;return m<1/3?0:m<2/3?1:m<1?2:3}let Ne=h=>!!(h&&h.ekim)&&q(h)<3&&Date.now()-(h.su||h.ekim)>3*ne,Ye=h=>{let m=se-(Date.now()-h.ekim);if(m<=0)return"a\xE7t\u0131";let x=Math.ceil(m/6e4);return x>=60?`${Math.floor(x/60)} sa ${x%60} dk sonra a\xE7ar`:`${x} dk sonra a\xE7ar`};function Qe(h,m){let x=h.userData.bit;x.clear();let y=q(m);if(h.userData.top.material=y>=0&&Ne(m)?Mc:$s,y<0)return;let A=Ne(m)?.55:0;[[-.35,-.1],[0,.12],[.35,-.08]].forEach(([N,z],W)=>{let ge=new st;if(ge.position.set(N,0,z),ge.rotation.z=A*(W-1||.6),x.add(ge),y===0){let we=new ce(new Vn(.07,8,6),$s);we.scale.y=.5,ge.add(we);let ot=new ce(new Ka(.02,.08,5),X);ot.position.y=.05,ge.add(ot);return}let ye=y===1?.18:y===2?.4:.55,De=new ce(new Ft(.015,.018,ye,6),X);if(De.position.y=ye/2,ge.add(De),[-1,1].forEach(we=>{let ot=new ce(new bn(.08,ye*.7),X);ot.position.set(we*.04,ye*.3,0),ot.rotation.z=-we*.35,ot.rotation.y=W,ge.add(ot)}),y>=2){let we=y===2?.045:.075,ot=m.renk||C[0],Ze=new ce(new Ci([[0,-.02],[we*.7,0],[we,we*.8],[we*.92,we*1.6],[we*.6,we*2.1],[we*.65,we*2.2]].map(ft=>new ue(ft[0],ft[1])),14),new $e({color:ot,roughness:.45,side:on}));Ze.position.y=ye,Ze.castShadow=!0,y===2&&Ze.scale.set(.8,1.1,.8),ge.add(Ze)}})}let et=()=>{try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Istanbul"}).format(new Date)}catch{return new Date().toISOString().slice(0,10)}},ae=_t(),nt={},it=()=>{let h=nt[t];return h||(h=nt[t]={kazanc:0}),h.gun!==et()&&(h.gun=et(),h.al={}),h.al=h.al||{},h},St=()=>Object.values(nt).reduce((h,m)=>h+(m.kazanc||0),0)-(ae.harcanan||0),kt=t==="misafir"||!i,Yt=0,Pn=0,Fe=null,ze=null,zt=null;function ht(){Vt(),clearTimeout(Yt),Yt=setTimeout(()=>{if(kt){try{localStorage.setItem("le-ev",JSON.stringify(ae))}catch{}return}i.from("state").upsert({scope:"oyun_ev",id:"ev",value:ae},{onConflict:"scope,id"}).then(()=>{},()=>{})},500),ti({t:"ev",ev:ae})}function jn(){ga(),clearTimeout(Pn),Pn=setTimeout(()=>{if(kt){try{localStorage.setItem("le-puan",JSON.stringify(nt[t]))}catch{}return}i.from("state").upsert({scope:"oyun_puan",id:t,value:nt[t]},{onConflict:"scope,id"}).then(()=>{},()=>{})},500),ti({t:"puan",v:nt[t]})}function en(h,m,x,y=1){let A=it();if(x){let N=A.al[x]||0;if(N>=y)return!1;A.al[x]=N+1}return A.kazanc=(A.kazanc||0)+h,jn(),dg(h,m),!0}function Mn(h){return St()<h?(xt(`\u{1F337} ${h} lale puan\u0131 laz\u0131m, ${St()} var`),!1):(ae.harcanan=(ae.harcanan||0)+h,ga(),!0)}let Yn=new Map;function Vt(){for(ae.depo=ae.depo||[],ae.hediyeler=ae.hediyeler||[],ae.bahce=ae.bahce||[];ae.bahce.length<8;)ae.bahce.push({});ae.odalar=ae.odalar||{},j.forEach(x=>{mt(x.id)&&he(x)});let h=new Set(ae.esyalar.map(x=>x.id));for(let[x,y]of Dt)h.has(x)||([Fe&&Fe.A,Fe&&Fe.B].forEach(A=>{A&&A.yer&&A.yer.m===y&&Yd(A)}),c.remove(y),Dt.delete(x),ze===y&&wo());ae.esyalar.forEach(x=>{let y=Dt.get(x.id);y?(y.position.x!==x.x||y.position.z!==x.z||y.rotation.y!==(x.r||0))&&([Fe&&Fe.A,Fe&&Fe.B].forEach(A=>{A&&A.yer&&A.yer.m===y&&Yd(A)}),kn(y,x)):ia(x)});let m=ae.hediyeler.filter(x=>!x.acildi);for(let[x,y]of Yn)m.some(A=>A.id===x)||(c.remove(y),Yn.delete(x));m.forEach(x=>{if(Yn.has(x.id))return;let y=zM(x.renk||"#C9233F");y.position.set(x.x,x.y||0,x.z),y.rotation.y=x.r||0,y.userData=Object.assign(y.userData,{act:"hediye",id:x.id,ad:x.id}),y.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),c.add(y),Yn.set(x.id,y)}),hi(),Um(),Di.forEach((x,y)=>Qe(x,ae.bahce[y])),ga(),Wm(),Ao()}function hi(){let h=Fe?te(Rt.g.position.x).ox:0,m=[...Dt.values()].find(x=>x.userData.act==="lamba"&&te(x.position.x).ox===h);if(m){let x=m.userData.kutu;M.position.set((x.x0+x.x1)/2,x.y1-.2,(x.z0+x.z1)/2)}else M.position.set(0,-10,0)}let Ts=d,rn=Math.round((me.x1-me.x0)/ei),As=Math.round((me.z1-me.z0)/ei),bo=new Uint8Array(rn*As),Qi=(h,m)=>[Math.floor((h-me.x0)/ei),Math.floor((m-me.z0)/ei)],Ec=(h,m)=>[me.x0+(h+.5)*ei,me.z0+(m+.5)*ei];function Um(){let h=[...Dt.values()].filter(m=>!m.userData.zemin&&!m.userData.kucuk).map(m=>m.userData.kutu);Di.forEach(m=>h.push({x0:m.position.x-.7,x1:m.position.x+.7,z0:m.position.z-.48,z1:m.position.z+.48})),h.push({x0:Bn.position.x-.15,x1:Bn.position.x+.15,z0:Bn.position.z-.15,z1:Bn.position.z+.15});for(let m=0;m<rn;m++)for(let x=0;x<As;x++){let[y,A]=Ec(m,x),N=0,z=te(y);(!mt(z.id)||Math.abs(y-z.ox)>Te.w/2-.3||A<me.z0+.3||A>(z.id==="salon"?me.z1:Te.d/2)-.3||h.some(W=>y>W.x0-.12&&y<W.x1+.12&&A>W.z0-.12&&A<W.z1+.12))&&(N=1),bo[x*rn+m]=N}}let es=(h,m)=>h>=0&&m>=0&&h<rn&&m<As&&!bo[m*rn+h];function Wd(h,m){if(es(h,m))return[h,m];for(let x=1;x<14;x++)for(let y=-x;y<=x;y++)for(let A=-x;A<=x;A++)if(Math.max(Math.abs(y),Math.abs(A))===x&&es(h+y,m+A))return[h+y,m+A];return[h,m]}function Xd(h,m){let x=Math.ceil(Math.hypot(m[0]-h[0],m[1]-h[1])/(ei*.5));for(let y=0;y<=x;y++){let A=h[0]+(m[0]-h[0])*y/x,N=h[1]+(m[1]-h[1])*y/x,[z,W]=Qi(A,N);if(!es(z,W))return!1}return!0}function qd(h,m){var Oe;let[x,y]=Wd(...Qi(h[0],h[1])),[A,N]=Wd(...Qi(m[0],m[1])),z=(je,rt)=>rt*rn+je,W=new Map([[z(x,y),0]]),ge=new Map,ye=[[0,x,y]],De=new Set;for(;ye.length;){ye.sort((yt,wt)=>yt[0]-wt[0]);let[,je,rt]=ye.shift(),Et=z(je,rt);if(!De.has(Et)){if(De.add(Et),je===A&&rt===N)break;for(let[yt,wt]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let pt=je+yt,Tt=rt+wt;if(!es(pt,Tt)||yt&&wt&&(!es(je+yt,rt)||!es(je,rt+wt)))continue;let Ut=z(pt,Tt),Je=W.get(Et)+(yt&&wt?1.414:1);Je<((Oe=W.get(Ut))!=null?Oe:1e9)&&(W.set(Ut,Je),ge.set(Ut,Et),ye.push([Je+Math.hypot(A-pt,N-Tt),pt,Tt]))}}}let we=[],ot=z(A,N);if(!ge.has(ot)&&ot!==z(x,y))return[Ec(A,N)];for(;ot!==void 0&&ot!==z(x,y);)we.unshift(Ec(ot%rn,Math.floor(ot/rn))),ot=ge.get(ot);let Ze=[h,...we];es(...Qi(m[0],m[1]))&&Ze.push(m);let ft=[Ze[0]],bt=0;for(;bt<Ze.length-1;){let je=Ze.length-1;for(;je>bt+1&&!Xd(Ze[bt],Ze[je]);)je--;ft.push(Ze[je]),bt=je}return ft.slice(1)}function jd(h,m){let x=h.scene,y=h.animations.some(Oe=>/_Rig$/.test(Oe.name));x.traverse(Oe=>{Oe.isMesh&&(Oe.castShadow=!0,Oe.receiveShadow=!1,Oe.material=Oe.material.clone(),y&&(Oe.material.roughness=.85,Oe.material.metalness=0,Oe.frustumCulled=!1))});let A=!y&&h.animations.some(Oe=>Oe.name==="Hug");x.traverse(Oe=>{Oe.isSkinnedMesh&&(Oe.frustumCulled=!1)});let N=new gn().setFromObject(x),z=y?CM*PM*Im[m]/1.55:Im[m]/(N.max.y-N.min.y);x.scale.setScalar(z);let W=new st;W.add(x),c.add(W);let ge=new Jr(x),ye={};h.animations.forEach(Oe=>{ye[Oe.name.replace(/_Rig$/,"")]=ge.clipAction(Oe)}),["Sit_Chair_Down","Lie_Down","Sit_Chair_StandUp","Lie_StandUp","Cheer","Interact","PickUp","Sit_Floor_Down"].forEach(Oe=>{ye[Oe]&&(ye[Oe].setLoop(ed),ye[Oe].clampWhenFinished=!0)});let De={boy:(N.max.y-N.min.y)*z,rol:m,g:W,root:x,mixer:ge,acts:ye,cur:null,path:[],durum:"ayakta",yer:null,online:!1,hiz:Dm},we=null;x.traverse(Oe=>{!we&&Oe.isBone&&/^hips$/i.test(Oe.name)&&(we=Oe)}),De.kalca={};let ot=(Oe,je)=>{let rt=ye[Oe];if(!rt||!we)return null;let Et=new Jr(x);return Et.clipAction(rt.getClip()).play(),Et.setTime(je==null?rt.getClip().duration*.5:je),x.updateMatrixWorld(!0),{v:we.getWorldPosition(new D),tm:Et}},Ze={},ft=Oe=>Oe.toLowerCase().replace(/[^a-z]/g,"");x.traverse(Oe=>{if(!Oe.isBone)return;let je=ft(Oe.name);je==="hips"?Ze.kalca=Oe:je==="chest"?Ze.gogus=Oe:je==="head"?Ze.bas=Oe:/^(shin|lowerleg)[lr]$/.test(je)?Ze["diz"+je.slice(-1)]=Oe:/^(foot)[lr]$/.test(je)&&(Ze["ayak"+je.slice(-1)]=Oe)}),De.poz={};for(let[Oe,je]of[["otur","Sit_Chair_Idle"],["yat","Lie_Idle"],["yer","Sit_Floor_Idle"]]){let rt=ot(je);if(rt){De.kalca[Oe]=[rt.v.x,rt.v.y,rt.v.z];let Et={};for(let yt in Ze){let wt=Ze[yt].getWorldPosition(new D);Et[yt]=[wt.x,wt.y,wt.z]}De.poz[Oe]=Et,rt.tm.stopAllAction(),rt.tm.uncacheRoot(x)}}if(ye.Walking_A){let Oe=null;if(x.traverse(je=>{!Oe&&je.isBone&&/^(foot[._]?l|foot_l)$/i.test(je.name)&&(Oe=je)}),Oe){let je=ye.Walking_A.getClip().duration,rt=9,Et=-9,yt=new Jr(x);yt.clipAction(ye.Walking_A.getClip()).play();for(let pt=0;pt<24;pt++){yt.setTime(je*pt/24),x.updateMatrixWorld(!0);let Tt=Oe.getWorldPosition(new D).z;rt=Math.min(rt,Tt),Et=Math.max(Et,Tt)}yt.stopAllAction(),yt.uncacheRoot(x);let wt=2*(Et-rt);if(wt>.1){let pt=Dm/(window.__leHiz||1)*je/wt;pt>1.5&&(pt=1.5,De.hiz=(window.__leHiz||1)*wt*pt/je),ye.Walking_A.timeScale=Math.max(.7,pt)}}}De.oyna=(Oe,je=kM)=>{let rt=ye[Oe];return!rt||De.cur===rt||(rt.reset().setEffectiveWeight(1).fadeIn(je).play(),De.cur&&De.cur.fadeOut(je),De.cur=rt),rt},De.bir=Oe=>new Promise(je=>{let rt=De.oyna(Oe,.2);if(!rt)return je();let Et=yt=>{yt.action===rt&&(ge.removeEventListener("finished",Et),je())};ge.addEventListener("finished",Et),setTimeout(()=>{ge.removeEventListener("finished",Et),je()},rt.getClip().duration/(window.__leHiz||1)*1e3+4e3)}),De.oyna("Idle",0);let bt=Ue("div",{class:"le-tag "+(m==="B"?"b":"a")},Ue("b",null,o[m]),Ue("i"));return Qt("#leTags").append(bt),De.tag=bt,De}Fe={A:jd(Ie,"A"),B:jd(Xe,"B")},Fe.A.g.position.set(1.8,0,1.8),Fe.B.g.position.set(-.6,0,1.9),Fe.B.g.rotation.y=.6,Fe.A.g.rotation.y=-.6;let Rt=Fe[a],Bt=Fe[a==="A"?"B":"A"],Rs=Cm({characters:Fe,me:Rt,Vec3:D,Quat:mn,stand:h=>_o(h),findPath:(h,m)=>qd(h,m),lineClear:(h,m)=>Xd(h,m),pointClear:(h,m)=>es(...Qi(h,m)),sameRoom:(h,m)=>te(h.g.position.x).id===te(m.g.position.x).id,broadcast:h=>ti(h),hearts:(h,m,x)=>er(h,m,x),focus:(...h)=>fa(...h),reward:()=>en(3,"Sar\u0131ld\u0131n \u{1F917}","saril",5),save:()=>{Co(),ti(Object.assign({t:"durum"},pa(Rt)))},hint:h=>xt(h)});function Yd(h){h.yer&&(h.g.position.set(h.yer.cik[0],0,h.yer.cik[1]),h.yer=null,h.durum="ayakta",h.oyna("Idle"))}async function _o(h){h.durum==="oturuyor"?(h.durum="kalkiyor",await h.bir("Sit_Chair_StandUp")):h.durum==="yatiyor"?(h.durum="kalkiyor",await h.bir("Lie_StandUp")):h.durum==="yerde"&&(h.durum="kalkiyor"),h.yer&&(h.g.position.set(h.yer.cik[0],0,h.yer.cik[1]),h.yer=null),h.durum="ayakta"}async function yi(h,m,x,y,A){if(h.hugLock)return;h.token=(h.token||0)+1,h.kosu=!1;let N=h.token;h.hedefYer=null,h.durum!=="ayakta"&&await _o(h),N===h.token&&(h.path=qd([h.g.position.x,h.g.position.z],[m,x]),h.sonra=y||null,h.path.length?(h.kosu=!!A&&!!h.acts.Running,h.oyna(h.kosu?"Running":"Walking_A")):y&&(h.sonra=null,y()))}function Kd(h,m){let x=m.userData,y=Ii(m),A=new Set([Fe.A,Fe.B].filter(De=>De!==h).map(De=>De.yer||De.hedefYer).filter(De=>De&&De.m===m).map(De=>De.i)),N=y.findIndex((De,we)=>!A.has(we));N<0&&(N=0);let[z,W]=y[N],ge=(x.yon||0)+m.rotation.y,ye=x.act==="yat"?[Math.sin(m.rotation.y)*1.25,Math.cos(m.rotation.y)*1.25]:[Math.sin(ge)*(x.act==="yer"?.55:.75),Math.cos(ge)*(x.act==="yer"?.55:.75)];return{m,i:N,sx:z,sz:W,yon:ge,cik:[z+ye[0],W+ye[1]]}}let Zd=new io,Om=new D(0,-1,0);function ts(h,m,x){Zd.set(new D(m,3,x),Om);let y=Zd.intersectObject(h,!0).filter(A=>A.object.visible&&!A.object.userData.yazi);return Math.max(0,y.length?y[0].point.y:0)}function xo(h,m,x,y,A=0){let N=m.m,z=N.scale.x||1,W=IM[x],ge=Math.sin(m.yon),ye=Math.cos(m.yon),De=h.boy/1.55;N.updateMatrixWorld(!0);let we=m.sx+(W[0]*ye+W[1]*ge)*z,ot=m.sz+(-W[0]*ge+W[1]*ye)*z,Ze=h.poz[x],ft=h.kalca[x]||[0,.4,0],bt=wt=>[wt[0]*ye+wt[2]*ge,-wt[0]*ge+wt[2]*ye];if(x==="otur"){let wt=Math.min(...[0,.06,.12].map(Tt=>ts(N,we+ge*Tt,ot+ye*Tt))),pt=null;for(let Tt=-.3;Tt<=.7;Tt+=.02)if(ts(N,we-ge*Tt,ot-ye*Tt)>wt+.16){pt=Tt;break}if(pt!==null){let Tt=Math.max(-.35,Math.min(.35,pt-.12*De));we-=ge*Tt,ot-=ye*Tt}if(Ze&&Ze.dizl&&Ze.kalca){let Tt=null;for(let Je=0;Je<=1.3;Je+=.02)if(ts(N,we+ge*Je,ot+ye*Je)<wt-.25){Tt=Je;break}let Ut=(Ze.dizl[2]+Ze.dizr[2])/2-Ze.kalca[2];if(Tt!==null&&Ut<Tt-.02){let Je=Math.min(.45,Tt-.02-Ut);we+=ge*Je,ot+=ye*Je}}}if(x==="yat"&&Ze&&Ze.bas&&Ze.gogus){let wt=ts(N,we,ot),pt=null;for(let Ut=-.6;Ut<=1.4;Ut+=.02)if(ts(N,we-ge*Ut,ot-ye*Ut)>wt+.06){pt=Ut;break}let Tt=(Ze.kalca[2]-Ze.gogus[2]+(Ze.kalca[2]-Ze.bas[2]))/2;if(pt!==null){let Ut=Math.max(-.6,Math.min(.6,pt-Tt));we-=ge*Ut,ot-=ye*Ut}}let[Oe,je]=bt(ft),rt=we-Oe,Et=ot-je,yt=-1e9;if(Ze){let wt=[],pt=(Je,Wt)=>{Je&&wt.push([Je,Wt])},Tt=(Je,Wt,Nt)=>Je&&Wt&&[Je[0]+(Wt[0]-Je[0])*Nt,Je[1]+(Wt[1]-Je[1])*Nt,Je[2]+(Wt[2]-Je[2])*Nt];if(x==="yat"){pt(Ze.kalca,.1*De),pt(Ze.gogus,.1*De),pt(Tt(Ze.kalca,Ze.gogus,.5),.1*De),pt(Ze.bas,-.05*De);for(let Je of["l","r"])pt(Ze["diz"+Je],.06*De),pt(Tt(Ze.kalca,Ze["diz"+Je],.5),.075*De)}else{pt(Ze.kalca,.1*De);for(let Je of["l","r"]){for(let Wt of[.3,.55,.8])pt(Tt(Ze.kalca,Ze["diz"+Je],Wt),.075*De);pt(Ze["diz"+Je],.06*De)}}for(let Je of["l","r"])Ze["ayak"+Je]&&(yt=Math.max(yt,.02-Ze["ayak"+Je][1]));let Ut=[];for(let[Je,Wt]of wt){let[Nt,an]=bt(Je),cn=ts(N,rt+Nt,Et+an);Ut.push([+Nt.toFixed(2),+an.toFixed(2),+Je[1].toFixed(2),+cn.toFixed(2),+(cn+Wt-Je[1]).toFixed(2)]),yt=Math.max(yt,cn+Wt-Je[1])}window.__yerDbg=Ut}else yt=ts(N,we+ge*.14,ot+ye*.14)+DM[x]*De-ft[1];if(h.g.position.set(rt,yt,Et),h.g.rotation.y=m.yon,x==="otur"&&Ze&&Ze.gogus&&A<2){let[wt,pt]=bt(Ze.gogus),Tt=rt+wt+ge*.16*De,Ut=Et+pt+ye*.16*De,Je=yt+Ze.kalca[1]+.05,Wt=(Nt,an,cn)=>an>Nt.x0&&an<Nt.x1&&cn>Nt.z0&&cn<Nt.z1;for(let Nt of Dt.values()){if(Nt===N||Nt.userData.zemin||Nt.userData.asili)continue;let an=Nt.userData.kutu;if(!an||an.y1<Je||an.y1>Je+.7||!Wt(an,Tt,Ut))continue;let cn=0;for(;cn<1.2&&Wt(an,Tt-ge*cn,Ut-ye*cn);)cn+=.03;let ki=la(N);if(!ki)break;ki.x+=-ge*(cn+.05),ki.z+=-ye*(cn+.05),kn(N,ki),y||ht();let Is=Object.assign({},m,{sx:m.sx-ge*(cn+.05),sz:m.sz-ye*(cn+.05),cik:[m.cik[0]-ge*(cn+.05),m.cik[1]-ye*(cn+.05)]});return h.yer=Is,xo(h,Is,x,y,A+1)}}}let wc=(h,m,x)=>{h.g.rotation.y=Math.atan2(m-h.g.position.x,x-h.g.position.z)},Fm=(h,m=.6)=>{let x=h.userData.kutu||{x0:h.position.x-.2,x1:h.position.x+.2,z0:h.position.z-.2,z1:h.position.z+.2},y=(x.x0+x.x1)/2,A=(x.z0+x.z1)/2;return[y,A,x.z1+m]};async function ra(h,m,x){if(h.hugLock)return;let y=m.userData;if(y.act==="otur"||y.act==="yat"||y.act==="yer"){let A=Kd(h,m),N=yi(h,A.cik[0],A.cik[1],async()=>{if(h.hedefYer=null,h.yer=A,y.act==="yat"){if(xo(h,A,"yat",x),h.durum="yatiyor",await h.bir("Lie_Down"),h.durum==="yatiyor"&&h.oyna("Lie_Idle"),!x){let z=Fe.A.yer,W=Fe.B.yer;z&&W&&z.m===W.m&&Fe.A.durum==="yatiyor"&&Fe.B.durum==="yatiyor"&&(en(10,"\u0130yi geceler \u{1F319}","iyigece"),di())}}else y.act==="yer"?(xo(h,A,"yer",x),h.durum="yerde",await h.bir("Sit_Floor_Down"),h.durum==="yerde"&&h.oyna("Sit_Floor_Idle")):(xo(h,A,"otur",x),h.durum="oturuyor",await h.bir("Sit_Chair_Down"),h.durum==="oturuyor"&&h.oyna("Sit_Chair_Idle"),x||Bm());x||Co()});h.hedefYer=A,await N}else if(y.act==="lamba"||y.act==="muzik"||y.act==="foto"||y.act==="pisir"||y.act==="cay"||y.act==="buzdolabi"||y.act==="yildiz"){let[A,N,z]=Fm(m,.55);if(y.asili){let W=y.kutu;Math.abs(Math.sin(m.rotation.y))>.5?(A=W.x1+.75,z=(W.z0+W.z1)/2):z=W.z1+.75}else if(y.kutu&&!at.includes(m)){let W=y.kutu,ge=m.rotation.y,ye=Math.sin(ge),De=Math.cos(ge),we=(Math.abs(ye)*(W.x1-W.x0)+Math.abs(De)*(W.z1-W.z0))/2+.55;A=(W.x0+W.x1)/2+ye*we,z=(W.z0+W.z1)/2+De*we}if(m.parent&&at.includes(m)){let W=m.rotation.y?[m.position.x+1.1,m.position.z]:[m.position.x,m.position.z+1.1];A=W[0],z=W[1],N=m.position.z}await yi(h,(y.act==="foto"&&at.includes(m),A),z,async()=>{if(wc(h,m.position.x,m.position.z),await h.bir("Interact"),h.oyna("Idle"),y.act==="lamba")Ts=!Ts;else if(y.act==="muzik"&&!x)Qm();else if(y.act==="foto"&&y.fotolar)for(let W of y.fotolar)await ct(W);else y.act==="foto"&&y.foto?(await ct(y.foto),x||setTimeout(()=>y.foto.userData.tarih&&xt("\u{1F4F7} "+Jd(y.foto.userData.tarih)),600)):y.act==="pisir"?(Qd(m,7),x||Gm()):y.act==="cay"?(Qd(m,4),x||Vm()):y.act==="buzdolabi"&&!x?ef():y.act==="yildiz"&&(qm(m),x||(en(3,"Dilek tuttun \u{1F320}","yildiz"),di()))})}else if(y.act==="bahce"){await jm(h,m,x);return}else if(y.act==="hediye"){await $m(h,m,x);return}else if(y.act==="kapi"){x||ca();return}x||ti({t:"kullan",id:y.id})}let zm=["Ocak","\u015Eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011Fustos","Eyl\xFCl","Ekim","Kas\u0131m","Aral\u0131k"],Jd=h=>{let[m,x,y]=String(h).split("-").map(Number);return`${y} ${zm[x-1]} ${m}`};function Bm(){let h=Fe.A.yer,m=Fe.B.yer;h&&m&&h.m===m.m&&Fe.A.durum==="oturuyor"&&Fe.B.durum==="oturuyor"&&en(10,"Yan yana oturdunuz \u{1F6CB}\uFE0F","yanyana");let x=ae.mutfak;x&&x.yemek&&!x.yendi&&Date.now()-x.at>6e3&&te(Rt.g.position.x).id==="mutfak"&&Rt.durum==="oturuyor"&&(h&&m&&Fe.A.durum==="oturuyor"&&Fe.B.durum==="oturuyor"&&te(Fe.A.g.position.x).id==="mutfak"&&te(Fe.B.g.position.x).id==="mutfak"?(x.yendi=Date.now(),ht(),er(Rt.g.position.x,Rt.g.position.z,10),en(15,`${x.yemek} birlikte yendi, afiyet olsun \u{1F60B}`,"yemek"),di()):xt(`\u{1F372} Masada ${x.yemek} var \xB7 ${o[Bt.rol]} de otursun, birlikte yiyin`))}let $d=["Menemen","Mant\u0131","Karn\u0131yar\u0131k","\u0130skender","Mercimek \xE7orbas\u0131","Kuru fasulye pilav","Lahmacun","Yaprak sarma","Su b\xF6re\u011Fi","K\xFCnefe","Kumpir","F\u0131r\u0131n makarna","Tavuk sote","K\xF6fte patates"],Hm=Cn(64,64,h=>{let m=h.createRadialGradient(32,32,2,32,32,30);m.addColorStop(0,"rgba(255,255,255,.9)"),m.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=m,h.fillRect(0,0,64,64)});function Qd(h,m){let x=h.userData.kutu||{x0:h.position.x,x1:h.position.x,z0:h.position.z,z1:h.position.z,y1:1},y=(x.x0+x.x1)/2,A=(x.z0+x.z1)/2,N=Math.min(x.y1,1.3),z=0,W=setInterval(()=>{for(let ge=0;ge<2;ge++)yo(Hm,y+(Math.random()-.5)*.4,N,A+(Math.random()-.5)*.3,.25+Math.random()*.2,{vy:.35+Math.random()*.2,vx:(Math.random()-.5)*.1,omur:1.8});++z>m*5&&clearInterval(W)},200)}function Gm(){let h=ae.mutfak;if(h&&h.yemek&&!h.yendi){xt(`\u{1F372} Masada zaten ${h.yemek} var, \xF6nce yiyin`);return}let m=$d[Math.floor(Math.random()*$d.length)];ae.mutfak=Object.assign(ae.mutfak||{},{yemek:m,at:Date.now(),pisiren:t,yendi:0}),xt(`\u{1F525} ${m} pi\u015Fiyor\u2026`),en(5,`${m} pi\u015Firdin \u{1F373}`,"pisir"),setTimeout(()=>{ht(),xt(`\u{1F372} ${m} haz\u0131r! Masaya oturun`),di()},6500)}function Vm(){ae.mutfak=Object.assign(ae.mutfak||{},{cay:Date.now()}),ht(),en(2,"\xC7ay demledin \u{1FAD6}","cay"),di(),setTimeout(()=>xt("\u2615 \xC7aylar masada, tav\u015Fan kan\u0131"),1200)}let Qs=[];function Wm(){Qs.forEach(y=>y.parent&&y.parent.remove(y)),Qs.length=0;let h=ae.mutfak||{};[...Dt.values()].filter(y=>y.userData.masa).forEach(y=>{let A=y.userData.kutu,N=(A.x0+A.x1)/2,z=(A.z0+A.z1)/2,W=A.y1;if(h.yemek&&!h.yendi&&Date.now()-(h.at||0)>6e3&&te(N).id==="mutfak"&&(Se.m_food_stew||Se.m_stew_bowl)){let ge=(Se.m_food_stew||Se.m_stew_bowl).clone(!0);ge.scale.setScalar(.4),ge.position.set(N,W,z),ge.traverse(ye=>{ye.isMesh&&(ye.castShadow=!0)}),c.add(ge),Qs.push(ge)}h.cay&&Date.now()-h.cay<3*ne&&[[-.32,.1],[.32,-.1]].forEach(([ge,ye])=>{let De=HM();De.position.set(N+ge,W,z+ye),De.scale.setScalar(1.4),c.add(De),Qs.push(De)})});let x=[...Dt.values()].find(y=>y.userData.act==="buzdolabi");if(x&&ae.buzNot&&ae.buzNot.t){let y=new ce(new bn(.32,.32),new $e({color:ae.buzNot.kimden===t?"#ffe89a":"#ffc9d8",roughness:.8})),A=x.userData.kutu;y.position.set((A.x0+A.x1)/2+.15,1.25,A.z1+.01),y.rotation.z=.08,c.add(y),Qs.push(y);let N=new ce(new Vn(.03,8,6),new $e({color:"#C9233F"}));N.position.copy(y.position).add(new D(0,.13,.02)),c.add(N),Qs.push(N)}}function ef(){let h=Qt("#leBuz"),m=ae.buzNot,x=Ue("textarea",{rows:3,maxlength:140,placeholder:"Buzdolab\u0131na bir not as\u2026 (s\xFCt bitti, seni seviyorum\u2026)"}),y=Ue("button",{type:"button",class:"le-ana"},"\u{1F9F2} Notu as");y.onclick=()=>{let A=x.value.trim();if(!A){x.focus();return}ae.buzNot={kimden:t,t:A,at:Date.now()},ht(),h.classList.remove("on"),xt("\u{1F9F2} Not buzdolab\u0131nda")},h.replaceChildren(...[Ue("div",{class:"le-sh"},Ue("h3",null,"Buzdolab\u0131"),Ue("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),m&&m.t?Ue("div",{class:"le-buznot"+(m.kimden===t?" ben":"")},Ue("p",null,m.t),Ue("small",null,`${m.kimden===t?"Senin notun":o[Bt.rol]} \xB7 ${pf(new Date(m.at).toISOString())}`)):Ue("p",{class:"le-sub"},"Buzdolab\u0131nda not yok."),Ue("p",{class:"le-sub"},`Bug\xFCn buzdolab\u0131nda: ${["s\xFCt","yo\u011Furt","beyaz peynir","zeytin","domates","\xE7ilek","ayran","sucuk","ka\u015Far","yumurta"].sort(()=>Math.random()-.5).slice(0,4).join(", ")} \u{1F9C0}`),x,y].filter(Boolean)),h.classList.add("on")}let Xm=Cn(256,32,h=>{let m=h.createLinearGradient(0,0,256,0);m.addColorStop(0,"rgba(255,255,255,0)"),m.addColorStop(1,"rgba(255,248,220,1)"),h.fillStyle=m,h.fillRect(0,12,256,8),h.fillStyle="#fff",h.beginPath(),h.arc(246,16,7,0,7),h.fill()});function qm(h){let m=new Va(new Vr({map:Xm,transparent:!0,depthWrite:!1,rotation:-.35,fog:!1}));m.position.set(h.position.x-6,6.5,-9),m.scale.set(3.2,.4,1),m.userData={vx:9,vy:-2.6,vz:0,g:0,t:0,omur:1.4},c.add(m),aa.push(m),fa(h.position.x-1,2.4,h.position.z-2,7,1,2.2)}async function jm(h,m,x){let y=m.userData.i,A=ae.bahce[y]||(ae.bahce[y]={});await yi(h,m.position.x,m.position.z-.9,async()=>{if(wc(h,m.position.x,m.position.z),x){await h.bir("PickUp"),h.oyna("Idle");return}let N=q(A);if(N<0){if(!Mn(5))return;await h.bir("PickUp"),h.oyna("Idle"),ae.bahce[y]={ekim:Date.now(),su:Date.now(),renk:C[Math.floor(Math.random()*C.length)],eken:t},ht(),xt("\u{1F331} Lale ektin! 6 saatte a\xE7ar, arada sula \u{1F4A7}"),di()}else N===3?(await h.bir("PickUp"),h.oyna("Idle"),ae.bahce[y]={},ae.toplanan=(ae.toplanan||0)+1,ht(),er(m.position.x,m.position.z,8),en(15,"Lale toplad\u0131n \u{1F337}"),di()):Date.now()-(A.su||0)>2*ne?(await h.bir("Interact"),h.oyna("Idle"),Jm(m.position.x,m.position.z),A.su=Date.now(),ht(),en(1,"Sulad\u0131n \u{1F4A7}","sula",8),di()):(await h.bir("Interact"),h.oyna("Idle"),xt(`\u{1F4A7} Sulanm\u0131\u015F \xB7 ${Ye(A)}`));ti({t:"kullan",id:m.userData.id})})}let aa=[],Ym=Cn(64,64,h=>{h.font="52px serif",h.textAlign="center",h.textBaseline="middle",h.fillText("\u{1F497}",32,36)}),Km=Cn(32,32,h=>{h.fillStyle="#7cc7ff",h.beginPath(),h.arc(16,18,9,0,7),h.fill()}),qM=Cn(64,64,h=>{h.font="bold 40px sans-serif",h.fillStyle="#9C7BD3",h.textAlign="center",h.textBaseline="middle",h.fillText("z",32,34)}),Zm=Cn(16,16,h=>{h.fillStyle="#fff",h.fillRect(0,0,16,10)});function yo(h,m,x,y,A,N,z){let W=new Va(new Vr({map:h,transparent:!0,depthWrite:!1,color:z||"#ffffff"}));return W.position.set(m,x,y),W.scale.setScalar(A),W.userData=Object.assign({vx:0,vy:0,vz:0,g:0,t:0,omur:1.6},N),c.add(W),aa.push(W),W}function er(h,m,x=10,y=1.6){for(let A=0;A<x;A++)yo(Ym,h+(Math.random()-.5)*.6,y+Math.random()*.3,m+(Math.random()-.5)*.6,.28+Math.random()*.2,{vy:.5+Math.random()*.6,vx:(Math.random()-.5)*.3})}function Jm(h,m){for(let x=0;x<14;x++)yo(Km,h+(Math.random()-.5)*1.1,1.2+Math.random()*.4,m+(Math.random()-.5)*.6,.09,{vy:-1.6-Math.random(),omur:.8})}function Tc(h,m,x,y=40){let A=["#C9233F","#E8577A","#F7A8BE","#f5a524","#9C7BD3","#5b9e5a"];for(let N=0;N<y;N++){let z=Math.random()*6.283,W=1+Math.random()*1.6;yo(Zm,h,m,x,.07,{vx:Math.cos(z)*(.5+Math.random()),vz:Math.sin(z)*(.5+Math.random()),vy:W*1.8,g:4.5,omur:1.8},A[N%A.length])}}async function $m(h,m,x){let y=ae.hediyeler.find(A=>A.id===m.userData.id);if(y){if(!x&&y.kimden===t){xt(`\u{1F381} Bu hediye ${o[Bt.rol]} i\xE7in, o a\xE7acak`);return}await yi(h,m.position.x,m.position.z+.6,async()=>{wc(h,m.position.x,m.position.z),await h.bir("PickUp"),h.oyna("Idle");let A=m.userData.kapak,N=performance.now(),z=()=>{let W=Math.min(1,(performance.now()-N)/700);A.position.y=.26+W*.35,A.rotation.z=W*.9,W<1&&requestAnimationFrame(z)};z(),Tc(m.position.x,(y.y||0)+.4,m.position.z,50),er(m.position.x,m.position.z,10,1.1),!x&&(y.acildi=Date.now(),y.acan=t,setTimeout(()=>{ht()},1600),en(5,"Hediye a\xE7t\u0131n \u{1F381}"),tf(y))})}}let vo=[["\u{1F337}","Lale","#C9233F"],["\u{1F36B}","\xC7ikolata","#7a4a2c"],["\u{1F48C}","Mektup","#E8577A"],["\u{1F9F8}","Ay\u0131c\u0131k","#c99561"],["\u2615","Kahve","#34131F"],["\u{1F48D}","S\xFCrpriz","#9C7BD3"]];function tf(h){let m=vo.find(y=>y[0]===h.tur)||vo[0],x=Qt("#leKart");x.replaceChildren(Ue("div",{class:"le-kart-ic"},Ue("span",{class:"le-kart-em"},m[0]),Ue("small",null,`${o[r(h.kimden)||"A"]} sana ${m[1].toLocaleLowerCase("tr")} b\u0131rakt\u0131`),Ue("p",null,h.not||"\u{1F90D}"),Ue("em",null,Jd(new Date(h.at).toISOString().slice(0,10))),Ue("button",{type:"button",onclick:()=>x.classList.remove("on")},"Kapat \u{1F90D}"))),x.classList.add("on")}function nf(){let h=Qt("#leHediye"),m=vo[0],x=ae.hediyeler.filter(W=>W.kimden===t&&!W.acildi),y=ae.hediyeler.filter(W=>W.kimden!==t).slice(-6).reverse(),A=Ue("textarea",{rows:3,maxlength:160,placeholder:`${o[Bt.rol]} hediyeyi a\xE7\u0131nca bunu okuyacak\u2026`}),N=Ue("div",{class:"le-turlar"},...vo.map(W=>{let ge=Ue("button",{type:"button",class:W===m?"on":"",onclick:()=>{m=W,N.querySelectorAll("button").forEach(ye=>ye.classList.remove("on")),ge.classList.add("on")}},Ue("span",null,W[0]),W[1]);return ge})),z=Ue("button",{type:"button",class:"le-ana"},"Hediyeyi b\u0131rak \xB7 \u{1F337} 10");z.onclick=()=>{if(x.length>=3){xt("\u{1F381} A\xE7\u0131lmam\u0131\u015F 3 hediyen var, \xF6nce onlar\u0131 a\xE7s\u0131n");return}if(!Mn(10))return;let W=[...Dt.values()].find(we=>we.userData.ustY),ge,ye,De=0;W&&!ae.hediyeler.some(we=>!we.acildi&&we.y)?(ge=W.position.x+.42,ye=W.position.z+.05,De=W.userData.ustY):(ge=Rt.g.position.x+.5,ye=Rt.g.position.z+.3),ae.hediyeler.push({id:"h"+Date.now().toString(36),kimden:t,tur:m[0],renk:m[2],not:A.value.trim(),x:ge,z:ye,y:De,r:Math.random()*1.5,at:Date.now()}),ae.hediyeler=ae.hediyeler.slice(-30),ht(),h.classList.remove("on"),xt(`\u{1F381} Hediye b\u0131rak\u0131ld\u0131, ${o[Bt.rol]} a\xE7\u0131nca haberin olacak`),er(ge,ye,6,1)},h.replaceChildren(...[Ue("div",{class:"le-sh"},Ue("h3",null,"Hediye b\u0131rak"),Ue("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),Ue("p",{class:"le-sub"},`${o[Bt.rol]} oyuna girince sehpada bulacak. A\xE7\u0131nca konfeti patlar, notunu okur.`),N,A,z,y.length?Ue("div",{class:"le-gecmis"},Ue("p",{class:"le-sub"},"Sana gelen hediyeler"),...y.map(W=>Ue("button",{type:"button",class:"le-gh",onclick:()=>W.acildi&&tf(W)},Ue("span",null,W.tur),Ue("b",null,W.not?W.not.slice(0,40)+(W.not.length>40?"\u2026":""):"Notsuz"),Ue("em",null,W.acildi?"\u2713":"evde, a\xE7\u0131lmad\u0131")))):null].filter(Boolean)),h.classList.add("on")}let tr=null,Mo=!1,So=0,Ac=[["Yal\u0131n \xB7 Yeniden","muzik/yeniden.mp3.bin"],["Yal\u0131n \xB7 Ben Bilmem","muzik/ben-bilmem.mp3.bin"]];async function Qm(){if(!s.decUrl){xt("M\xFCzik i\xE7in siteden giri\u015F gerekli");return}if(Mo){tr.pause(),Mo=!1,So=(So+1)%Ac.length,xt("\u23F8 M\xFCzik durdu");return}try{tr=tr||new Audio,tr.loop=!0,tr.src=await s.decUrl(Ac[So][1]),await tr.play(),Mo=!0,xt("\u{1F3B5} "+Ac[So][0])}catch{xt("M\xFCzik a\xE7\u0131lamad\u0131")}}async function Eo(h,m,x){if(m==="saril")return x?void 0:(nr&&_a(!1),Rs.request(h));if(!h.hugLock){if(m==="sevin")await _o(h),er(h.g.position.x,h.g.position.z,6),await h.bir("Cheer"),h.oyna("Idle");else if(m==="selam")await _o(h),await h.bir("Interact"),h.oyna("Idle");else if(m==="kos"){let y=me.x0+1+Math.random()*7,A=P+.6+Math.random()*2.6;await yi(h,y,A,null,!0)}x||ti({t:"emote",tur:m})}}let nr=!1,oa=!1,ui=new ce(new Qa(.5,.56,48),new jt({color:"#E8577A",transparent:!0,opacity:.9,depthWrite:!1}));ui.rotation.x=-Math.PI/2,ui.position.y=.03,ui.visible=!1,c.add(ui);let vi=24,Mi=document.createElement("canvas");Mi.width=Te.w/ei*vi,Mi.height=Te.d/ei*vi;let Rc=new qa(Mi);Rc.colorSpace=sn;let Li=new ce(new bn(Te.w,Te.d),new jt({map:Rc,transparent:!0,depthWrite:!1,toneMapped:!1}));Li.rotation.x=-Math.PI/2,Li.position.y=.025,Li.renderOrder=5,Li.visible=!1,c.add(Li);function sf(h){if(!h||h.userData.asili){Li.visible=!1;return}let m=te(h.position.x),x=m.ox-Te.w/2,y=-Te.d/2,A=Te.w/ei,N=Te.d/ei,z=Mi.getContext("2d");Li.position.x=m.ox,Li.visible=!0,z.clearRect(0,0,Mi.width,Mi.height);let W=[...Dt.values()].filter(we=>we!==h&&!we.userData.zemin&&!we.userData.asili&&te(we.position.x)===m).map(we=>we.userData.kutu),ge=h.userData.kutu,ye=(we,ot,Ze)=>ot>we.x0+.02&&ot<we.x1-.02&&Ze>we.z0+.02&&Ze<we.z1-.02;for(let we=0;we<A;we++)for(let ot=0;ot<N;ot++){let Ze=x+(we+.5)*ei,ft=y+(ot+.5)*ei,bt=W.some(je=>ye(je,Ze,ft)),Oe=ye(ge,Ze,ft);z.fillStyle=Oe?bt&&!h.userData.zemin?"rgba(229,57,70,.72)":"rgba(46,190,96,.62)":bt?"rgba(229,57,70,.2)":"rgba(255,255,255,0)",z.fillRect(we*vi,ot*vi,vi,vi)}let De=ge.x0<x+.05||ge.x1>x+Te.w-.05||ge.z0<y+.05||ge.z1>Te.d/2+.2;z.strokeStyle="rgba(255,255,255,.55)",z.lineWidth=1;for(let we=0;we<=A;we++)z.beginPath(),z.moveTo(we*vi+.5,0),z.lineTo(we*vi+.5,Mi.height),z.stroke();for(let we=0;we<=N;we++)z.beginPath(),z.moveTo(0,we*vi+.5),z.lineTo(Mi.width,we*vi+.5),z.stroke();De&&(z.strokeStyle="rgba(229,57,70,.95)",z.lineWidth=6,z.strokeRect(3,3,Mi.width-6,Mi.height-6)),Rc.needsUpdate=!0}function wo(){ze=null,oa=!1,ui.visible=!1,Li.visible=!1,ba()}function ns(h){ze=h,oa=!1;let m=h.userData.kutu;ui.position.set((m.x0+m.x1)/2,.03,(m.z0+m.z1)/2),ui.scale.setScalar(Math.max(m.x1-m.x0,m.z1-m.z0)*.95+.3),ui.visible=!0,sf(h),ba()}let la=h=>ae.esyalar.find(m=>m.id===h.userData.id);function To(h,m){let x=m.userData.kutu,y=x.x1-x.x0,A=x.z1-x.z0,N=h.x+((x.x0+x.x1)/2-m.position.x),z=h.z+((x.z0+x.z1)/2-m.position.z),W={x0:N-y/2,x1:N+y/2,z0:z-A/2,z1:z+A/2},ge=te(m.position.x);if(W.x0<ge.ox-Te.w/2+.05||W.x1>ge.ox+Te.w/2-.05||W.z0<-Te.d/2+.05||W.z1>Te.d/2+.2||te(h.x)!==ge)return"Odan\u0131n d\u0131\u015F\u0131na ta\u015F\u0131yor";if(m.userData.zemin)return"";for(let ye of Dt.values()){if(ye===m||ye.userData.zemin)continue;let De=ye.userData.kutu;if(W.x0<De.x1-.02&&W.x1>De.x0+.02&&W.z0<De.z1-.02&&W.z1>De.z0+.02)return"Burada ba\u015Fka e\u015Fya var"}return""}function Cc(h,m){let x=te(h),y=x.ox-Te.w/2,A=(N,z,W)=>Math.max(z,Math.min(W,N));return h-y<m+Te.d/2?{x:y+.12,z:Math.round(A(m,-Te.d/2+1,Te.d/2-1.2)*4)/4,r:Math.PI/2}:{x:Math.round(A(h,y+1,x.ox+Te.w/2-1)*4)/4,z:-Te.d/2+.12,r:0}}function eg(h,m){let x=la(ze);if(!x)return;if(ze.userData.asili){Object.assign(x,Cc(h,m)),kn(ze,x),ht(),ns(ze),xt("\u2713 Duvara as\u0131ld\u0131");return}let y={x:Math.round(h*4)/4,z:Math.round(m*4)/4},A=To(y,ze);if(A){xt("\u{1F645} "+A);return}Object.assign(x,y),ht(),ns(ze),xt("\u2713 Yerle\u015Fti")}function tg(){let h=la(ze);if(!h)return;if(ze.userData.asili){xt("\u{1F5BC}\uFE0F Duvar s\xFCs\xFC: ta\u015F\u0131y\u0131nca en yak\u0131n duvara as\u0131l\u0131r");return}let m=h.r||0;if(h.r=(m+Math.PI/2)%(Math.PI*2),kn(ze,h),To(h,ze)){h.r=m,kn(ze,h),xt("\u{1F645} D\xF6nd\xFCr\xFCnce s\u0131\u011Fm\u0131yor");return}ht(),ns(ze)}function ng(){let h=la(ze);h&&(ae.esyalar=ae.esyalar.filter(m=>m!==h),ae.depo.push(h.t),wo(),ht(),xt("\u{1F4E6} Depoya kald\u0131r\u0131ld\u0131"))}function ig(h){let[m,x]=[Rt.g.position.x,Rt.g.position.z],y=te(m).ox,A=[];for(let N=y-Te.w/2+.25;N<=y+Te.w/2-.25;N+=.25)for(let z=-Te.d/2+.25;z<=Te.d/2-.25;z+=.25)A.push([Math.hypot(N-m,z-x),N,z]);A.sort((N,z)=>N[0]-z[0]);for(let N of[0,Math.PI/2]){kn(h,{x:y,z:0,r:N});for(let[,z,W]of A){let ge={x:Math.round(z*4)/4,z:Math.round(W*4)/4};if(!To(ge,h))return Object.assign(ge,{r:N})}}return null}function Pc(h,m){let x=Le[h];if(!x)return;if(m&&St()<x[2]){xt(`\u{1F337} ${x[2]} lale puan\u0131 laz\u0131m, ${St()} var`);return}let y={id:"e"+Date.now().toString(36),t:h,x:0,z:0,r:0},A=ia(y),N=A.userData.asili?Cc(Rt.g.position.x,Rt.g.position.z):ig(A);if(!N){c.remove(A),Dt.delete(y.id),xt("\u{1F645} Odada yer kalmad\u0131, bir \u015Feyi depoya kald\u0131r");return}if(m)Mn(x[2]);else{let z=ae.depo.indexOf(h);z>=0&&ae.depo.splice(z,1)}Object.assign(y,N),kn(A,y),ae.esyalar.push(y),ht(),Do(),_a(!0),ns(A),ba(),xt("E\u015Fyay\u0131 s\xFCr\xFCkleyerek yerle\u015Ftir \xB7 ye\u015Fil bo\u015F, k\u0131rm\u0131z\u0131 dolu \xB7 \u21BB \xE7evir")}let sg=h=>new D(h.ox,.6,h.id==="salon"?1.6:0),rg=g.position.x;function Ic(h,m){let x=sg(h),y=p.position.clone().sub(_.target);m?(_.target.copy(x),p.position.copy(x).add(y)):Nn={t0:performance.now(),sure:700,ft:_.target.clone(),fp:p.position.clone(),tt:x,tp:x.clone().add(y)},g.position.x=rg+h.ox,g.target.position.x=h.ox,Re.visible=h.id==="salon",hi(),Ao()}function ag(h){let m=Qt("#lePerde");if(!m)return h();m.classList.add("on"),setTimeout(()=>{h(),setTimeout(()=>m.classList.remove("on"),120)},280)}async function ir(h,m,x){if(h.hugLock)return;let y=j.find(N=>N.id===m);if(!y)return;if(!mt(m)){x||ca();return}if(te(h.g.position.x)===y){h===Rt&&Ic(y);return}h.token=(h.token||0)+1,h.path=[],h.sonra=null;let A=async()=>{h.durum!=="ayakta"&&(h.durum="ayakta",h.yer=null,h.oyna("Idle")),h.g.position.set(y.ox-Te.w/2+.75,0,y.id==="teras"?2.4:2.2),h.g.rotation.y=Math.PI/2,h===Rt&&Ic(y,!0)};h===Rt?ag(A):await A(),x||(ti({t:"oda",id:m}),Co()),h===Rt&&setTimeout(()=>xt(`${y.em} ${y.ad}`),400)}async function rf(h){let m=j.find(y=>y.id===h);if(!m||mt(h)||!Mn(m.fiyat))return;h==="mutfak"&&await qe(),ae.odalar=ae.odalar||{},ae.odalar[h]=!0,(Ve[h]||[]).forEach(([y,A,N,z],W)=>ae.esyalar.push({id:"o"+h+W+Date.now().toString(36).slice(-3),t:y,x:m.ox+A,z:N,r:z})),ht(),Tc(Rt.g.position.x,1.5,Rt.g.position.z,60),xt(`\u{1F389} ${m.ad} a\xE7\u0131ld\u0131!`);let x=Qt("#leOdaSec");x&&x.classList.remove("on"),Do(),setTimeout(()=>ir(Rt,h),900)}function Ao(){let h=Qt("#leOdalar");if(!h||!Fe)return;let m=te(Rt.g.position.x).id,x=te(Bt.g.position.x).id;h.replaceChildren(...j.map(y=>Ue("button",{type:"button",class:(y.id===m?"on ":"")+(mt(y.id)?"":"kilit"),onclick:()=>mt(y.id)?ir(Rt,y.id):ca()},y.em+" "+y.ad,mt(y.id)?y.id===x&&Bt.online?Ue("i",{class:"o"},o[Bt.rol][0]):null:Ue("i",null,"\u{1F512}"))))}function ca(){let h=Qt("#leOdaSec");h.replaceChildren(Ue("div",{class:"le-sh"},Ue("h3",null,"Evimiz"),Ue("span",{class:"le-pp"},"\u{1F337} "+St()),Ue("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),Ue("p",{class:"le-sub"},"Odalara git ya da lale puan\u0131yla yeni oda a\xE7. Her odan\u0131n kendine \xF6zel \u015Feyleri var."),Ue("div",{class:"le-odalist"},...j.map(m=>Ue("div",{class:"le-oda"+(mt(m.id)?"":" kilit")},Ue("span",null,m.em),Ue("div",null,Ue("b",null,m.ad),Ue("small",null,{salon:"Koltuk, pikap, bah\xE7e ve laleler",yatak:'\xC7ift ki\u015Filik yatak, foto\u011Fraflar\u0131m\u0131z \xB7 birlikte yat\u0131nca "\u0130yi geceler"',mutfak:"Ocakta yemek pi\u015Fir, birlikte ye, semaverde \xE7ay demle, buzdolab\u0131na not as",teras:"\u0130stanbul manzaras\u0131, ip lambalar, teleskopla kayan y\u0131ld\u0131za dilek tut"}[m.id])),mt(m.id)?Ue("button",{type:"button",class:"le-git",onclick:()=>{h.classList.remove("on"),ir(Rt,m.id)}},te(Rt.g.position.x)===m?"Buradas\u0131n":"Git"):Ue("button",{type:"button",class:"le-git ac"+(St()<m.fiyat?" pahali":""),onclick:()=>rf(m.id)},`A\xE7 \xB7 \u{1F337} ${m.fiyat}`))))),h.classList.add("on")}let ha=new io,Ro=new ue,ua=null,og=new Jn(new D(0,1,0),0),af=new D,of=h=>{let m=l.domElement.getBoundingClientRect();Ro.set((h.clientX-m.left)/m.width*2-1,-(h.clientY-m.top)/m.height*2+1),ha.setFromCamera(Ro,p)},lf=h=>(of(h),ha.ray.intersectPlane(og,af)?af.clone():null),Sn=null;l.domElement.addEventListener("pointerdown",h=>{if(ua=[h.clientX,h.clientY,performance.now()],Nn&&!Nn.geri&&(Nn=null),!nr)return;of(h);let m=ha.intersectObjects([...Dt.values()],!0)[0],x=m&&da(m);if(!x||Dt.get(x.userData.id)!==x)return;let y=la(x),A=lf(h);!y||!A||(ze!==x&&ns(x),Sn={m:x,es:y,eski:{x:y.x,z:y.z,r:y.r||0},dx:y.x-A.x,dz:y.z-A.z,bas:[h.clientX,h.clientY],aktif:!1,aday:null},_.enabled=!1)}),l.domElement.addEventListener("pointermove",h=>{if(!Sn)return;if(!Sn.aktif){if(Math.hypot(h.clientX-Sn.bas[0],h.clientY-Sn.bas[1])<6)return;Sn.aktif=!0,ui.visible=!1}let m=lf(h);if(!m)return;let x=Sn.m,y={x:Math.round((m.x+Sn.dx)*4)/4,z:Math.round((m.z+Sn.dz)*4)/4,r:Sn.eski.r},A=te(Sn.eski.x);y.x=Math.max(A.ox-Te.w/2-1,Math.min(A.ox+Te.w/2+1,y.x)),x.userData.asili&&(y=Cc(y.x,y.z)),Sn.aday=y,kn(x,Object.assign({},Sn.es,y)),x.position.y=(Sn.es.y||0)+.06,sf(x)});let cf=()=>{if(!Sn)return;let{m:h,es:m,eski:x,aktif:y,aday:A}=Sn;if(Sn=null,_.enabled=!0,!y||!A)return;kn(h,Object.assign({},m,A));let N=h.userData.asili?"":To(A,h);if(N){kn(h,m),ns(h),xt("\u{1F645} "+N+" \xB7 eski yerine d\xF6nd\xFC");return}Object.assign(m,A),kn(h,m),ht(),ns(h),xt(h.userData.asili?"\u2713 Duvara as\u0131ld\u0131":"\u2713 Yerle\u015Fti")};l.domElement.addEventListener("pointerup",cf),l.domElement.addEventListener("pointercancel",cf);let da=h=>{let m=h.object;for(;m;){if(pe.has(m)||G.includes(m)||Di.includes(m)||at.includes(m)||Yn.has(m.userData&&m.userData.id)||Dt.get(m.userData&&m.userData.id)===m||m===Fe.A.g||m===Fe.B.g)return m;m=m.parent}return null};l.domElement.addEventListener("pointerup",h=>{if(!ua||Math.hypot(h.clientX-ua[0],h.clientY-ua[1])>8||performance.now()-ua[2]>450)return;let m=l.domElement.getBoundingClientRect();Ro.set((h.clientX-m.left)/m.width*2-1,-(h.clientY-m.top)/m.height*2+1),ha.setFromCamera(Ro,p);let x=ha.intersectObjects([...Dt.values(),...Di,...at,...Yn.values(),Fe.A.g,Fe.B.g,...G,...pe],!0);if(nr){let y=x.find(N=>pe.has(da(N)));if(ze&&oa){y&&eg(y.point.x,y.point.z);return}let A=x.find(N=>{let z=da(N);return z&&Dt.get(z.userData.id)===z});A?ns(da(A)):wo();return}for(let y of x){let A=da(y);if(A){if(A===Fe.A.g||A===Fe.B.g){let N=A===Fe.A.g?Fe.A:Fe.B;if(N===Rt){fa(N.g.position.x,N.boy*.6,N.g.position.z,4.6);return}Eo(Rt,"saril");return}if(pe.has(A)){if(te(y.point.x)!==te(Rt.g.position.x))return;yi(Rt,y.point.x,y.point.z,()=>Co()),hf(y.point.x,y.point.z),ti({t:"git",x:y.point.x,z:y.point.z});return}if(A.userData.act){ra(Rt,A),hf(A.position.x,A.position.z);return}}}});let Si=new ce(new Qa(.18,.26,32),new jt({color:"#E8577A",transparent:!0,opacity:0,depthWrite:!1}));Si.rotation.x=-Math.PI/2,Si.position.y=.02,c.add(Si);function hf(h,m){Si.position.x=h,Si.position.z=m,Si.material.opacity=.9,Si.scale.setScalar(.6)}let Nn=null;function fa(h,m,x,y=5.2,A=.9,N=0){let z=p.position.clone().sub(_.target).normalize().multiplyScalar(y),W=N?{t:_.target.clone(),p:p.position.clone()}:null;Nn={t0:performance.now(),sure:A*1e3,ft:_.target.clone(),fp:p.position.clone(),tt:new D(h,m,x),tp:new D(h,m,x).add(z),geri:N,eski:W}}function lg(){if(!Nn)return;let h=Math.min(1,(performance.now()-Nn.t0)/Nn.sure),m=h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;if(_.target.lerpVectors(Nn.ft,Nn.tt,m),p.position.lerpVectors(Nn.fp,Nn.tp,m),h>=1){let x=Nn;Nn=null,x.geri&&x.eski&&setTimeout(()=>{Nn={t0:performance.now(),sure:900,ft:_.target.clone(),fp:p.position.clone(),tt:x.eski.t,tp:x.eski.p}},x.geri*1e3)}}let cg=()=>{let h=te(Rt.g.position.x);fa(h.ox,.6,h.id==="salon"?1.6:0,p.aspect<1?h.id==="salon"?24:20:h.id==="salon"?19:16)},pa=h=>({x:+h.g.position.x.toFixed(2),z:+h.g.position.z.toFixed(2),r:+h.g.rotation.y.toFixed(2),d:h.durum,yer:h.yer?{id:h.yer.m.userData.id}:null});function ti(h){zt&&zt.send({type:"broadcast",event:"m",payload:Object.assign({who:t,rol:a},h)})}let uf=h=>Dt.get(h)||Di.find(m=>m.userData.id===h)||at.find(m=>m.userData.id===h)||Yn.get(h);function df(h,m,x){if(!h.hugLock&&m){if(m.yer){let y=uf(m.yer.id);if(y){x&&h.g.position.set(m.x,0,m.z),ra(h,y,!0);return}}x?(h.g.position.set(m.x,0,m.z),h.g.rotation.y=m.r||0):yi(h,m.x,m.z)}}let ff=0;function Co(){kt||(clearTimeout(ff),ff=setTimeout(()=>{i.from("state").upsert({scope:"oyun",id:t,value:Object.assign(pa(Rt),{at:new Date().toISOString()})},{onConflict:"scope,id"}).then(()=>{},()=>{})},1200))}addEventListener("pagehide",()=>{kt||i.from("state").upsert({scope:"oyun",id:t,value:Object.assign(pa(Rt),{at:new Date().toISOString()})},{onConflict:"scope,id"})});function Po(h,m){Bt.online=h,Bt.tag.classList.toggle("off",!h),Bt.tag.querySelector("i").textContent=h?"":m?"\u{1F4A4}":"";let x=Qt("#leDurum");x&&(x.textContent=h?`${o[Bt.rol]} ${te(Bt.g.position.x).yer} \u{1F7E2}`:`${o[Bt.rol]} \u015Fu an yok`+(m?" \xB7 "+m:""),x.classList.toggle("on",h)),h&&en(10,`${o[Bt.rol]} ile ayn\u0131 anda evdesiniz \u{1F3E1}`,"birlikte")}let pf=h=>{let m=(Date.now()-Date.parse(h))/6e4;return m>=0?m<2?"az \xF6nce":m<60?Math.round(m)+" dk \xF6nce":m<1440?Math.round(m/60)+" sa \xF6nce":Math.round(m/1440)+" g\xFCn \xF6nce":""};if(kt)try{let h=JSON.parse(localStorage.getItem("le-ev")||"null");h&&h.esyalar&&(ae=h);let m=JSON.parse(localStorage.getItem("le-puan")||"null");m&&(nt[t]=m)}catch{}else try{let{data:h}=await i.from("state").select("scope,id,value").in("scope",["oyun_ev","oyun_puan"]);(h||[]).forEach(m=>{m.scope==="oyun_ev"&&m.value&&m.value.esyalar&&(ae=m.value),m.scope==="oyun_puan"&&(nt[m.id.toLowerCase()]=m.value||{})})}catch{}if(nt[t]||(nt[t]={kazanc:30}),ae.odalar&&ae.odalar.mutfak)try{await qe()}catch{}ae.sandalye2||(ae.sandalye2=!0,ae.esyalar.forEach(h=>{if(!/^chair_[AB]_wood$/.test(h.t))return;let m=te(h.x),x=h.x-m.ox;(m.id==="mutfak"&&Math.abs(x-.6)<.01&&(Math.abs(h.z-1.75)<.01||Math.abs(h.z-.05)<.01)||m.id==="teras"&&Math.abs(x)<.01&&(Math.abs(h.z-1.05)<.01||Math.abs(h.z+.65)<.01))&&(h.r=((h.r||0)+Math.PI)%(Math.PI*2))})),ae.esyalar.forEach(h=>{h.t==="chair_A_wood"&&Math.abs(h.x+2.5)<.01&&(Math.abs(h.z-1.55)<.01?h.z=1.3:Math.abs(h.z-3.05)<.01&&(h.z=3.3))}),ae.esyalar=ae.esyalar.filter(h=>Le[h.t]),ae.depo=(ae.depo||[]).filter(h=>Le[h]),delete ae.kedi;let mf=!1;if(ae.bizim1||(ae.bizim1=!0,ae.depo.push("polaroid_ip","tarih_cerceve"),mf=!0),Vt(),kt)Po(!1,"");else{try{let{data:h}=await i.from("state").select("id,value").eq("scope","oyun"),m=null;(h||[]).forEach(y=>{let A=y.id.toLowerCase(),N=A===t?Rt:Bt;A!==t&&(m=y.value&&y.value.at),df(N,y.value,!0)});let x=[...Dt.values()].find(y=>y.userData.act==="yat");if(m&&Date.now()-Date.parse(m)>30*6e4&&x){let y=Kd(Bt,x);Bt.g.position.set(y.cik[0],0,y.cik[1]),ra(Bt,x,!0)}Po(!1,m?pf(m):"")}catch{}try{zt=i.channel("lale-evi",{config:{presence:{key:t},broadcast:{self:!1}}}),zt.on("broadcast",{event:"m"},({payload:h})=>{if(!h||h.who===t)return;let m=Fe[h.rol]||Bt;if(h.t==="hug"){Rs.receive(h.plan,h.rol);return}if(h.t==="git")te(h.x)!==te(m.g.position.x)?ir(m,te(h.x).id,!0).then(()=>yi(m,h.x,h.z)):yi(m,h.x,h.z);else if(h.t==="oda")ir(m,h.id,!0),Ao();else if(h.t==="kullan"){let x=uf(h.id);x&&ra(m,x,!0)}else if(h.t==="emote")Eo(m,h.tur,!0);else if(h.t==="selam?")ti(Object.assign({t:"durum"},pa(Rt)));else if(h.t==="durum")df(m,h,!1);else if(h.t==="ev"&&h.ev&&h.ev.esyalar){let x=(h.ev.hediyeler||[]).filter(y=>!y.acildi&&y.kimden!==t&&!ae.hediyeler.some(A=>A.id===y.id));ae=h.ev,Vt(),x.length&&xt(`\u{1F381} ${o[Bt.rol]} sana hediye b\u0131rakt\u0131!`)}else h.t==="puan"&&h.v&&(nt[h.who]=h.v,ga())}),zt.on("presence",{event:"sync"},()=>{let h=zt.presenceState();Po(Object.keys(h).some(m=>m!==t),"")}),zt.on("presence",{event:"join"},({key:h})=>{h!==t&&(xt(`${o[Bt.rol]} eve geldi \u{1F3E1}`),ti(Object.assign({t:"durum"},pa(Rt))))}),zt.on("presence",{event:"leave"},({key:h})=>{h!==t&&(Rs.cancel(),Po(!1,"az \xF6nce"))}),zt.subscribe(h=>{h==="SUBSCRIBED"&&(zt.track({at:Date.now()}),ti({t:"selam?"}))})}catch{zt=null}}Ic(te(Rt.g.position.x),!0),setInterval(()=>{if(Ao(),Bt.online){let h=Qt("#leDurum");h&&(h.textContent=`${o[Bt.rol]} ${te(Bt.g.position.x).yer} \u{1F7E2}`)}},2500);{let h=ae.hediyeler.filter(m=>!m.acildi&&m.kimden!==t);h.length&&setTimeout(()=>xt(`\u{1F381} Sehpada senin i\xE7in ${h.length>1?h.length+" hediye":"bir hediye"} var!`),3200)}let ma={soru:!1,duygu:!1,not:!1};async function hg(){if(kt)return;let h=et();try{let m=await i.from("soru_cevap").select("day").eq("day",h).eq("author",t);ma.soru=!!(m.data&&m.data.length)}catch{}try{((await i.from("state").select("scope,updated_at").in("scope",["duygu","not"]).eq("updated_by",t).gte("updated_at",h+"T00:00:00+03:00")).data||[]).forEach(x=>{ma[x.scope]=!0})}catch{}ma.soru&&en(10,"G\xFCn\xFCn sorusunu cevaplad\u0131n \u2753","soru"),ma.duygu&&en(5,"Duygunu se\xE7tin \u{1F3A8}","duygu"),ma.not&&en(5,"Not b\u0131rakt\u0131n \u{1F4CC}","not"),di()}let gf=()=>{let h=it(),m=h.al||{},x=ae.bahce.filter(N=>N.ekim&&q(N)<3&&Date.now()-(N.su||0)>2*ne).length,y=ae.bahce.filter(N=>q(N)===3).length,A=ae.hediyeler.filter(N=>!N.acildi&&N.kimden!==t).length;return[["\u{1F3E1}","Eve u\u011Fra",10,!!m.giris],["\u2753","Sitede g\xFCn\xFCn sorusunu cevapla",10,!!m.soru],["\u{1F3A8}","Sitede bug\xFCnk\xFC duygunu se\xE7",5,!!m.duygu],["\u{1F4CC}",`${o[Bt.rol]} i\xE7in sitede not b\u0131rak`,5,!!m.not],["\u{1F4A7}",x?`${x} lale su bekliyor`:"Laleleri sula","1 / lale",x===0&&ae.bahce.some(N=>N.ekim)],["\u{1F337}",y?`${y} lale a\xE7t\u0131, topla!`:"A\xE7an laleyi topla",15,!1],["\u{1F381}",A?`Sehpada ${A} hediye var, a\xE7!`:"Hediye gelirse a\xE7",5,A===0],["\u{1F917}",`Sar\u0131l (${m.saril||0}/5)`,3,(m.saril||0)>=5],["\u{1F6CB}\uFE0F","Ayn\u0131 koltukta yan yana otur",10,!!m.yanyana],["\u{1F3E0}",`${o[Bt.rol]} ile ayn\u0131 anda evde ol`,10,!!m.birlikte],...mt("mutfak")?[["\u{1F373}","Mutfakta yemek pi\u015Fir",5,!!m.pisir],["\u{1F60B}","Mutfak masas\u0131nda birlikte ye",15,!!m.yemek],["\u{1FAD6}","Semaverde \xE7ay demle",2,!!m.cay]]:[["\u{1F373}","Mutfa\u011F\u0131 a\xE7 (Evimiz)","",!1]],...mt("yatak")?[["\u{1F319}",'Ayn\u0131 yatakta "iyi geceler"',10,!!m.iyigece]]:[],...mt("teras")?[["\u{1F320}","Terasta teleskopla dilek tut",3,!!m.yildiz]]:[]]};function di(){let h=Qt("#leIsBtn");if(h){let m=gf().filter(y=>!y[3]).length,x=h.querySelector("i");x&&(x.textContent=m||"\u2713")}Qt("#leIsler")&&Qt("#leIsler").classList.contains("on")&&Dc()}function Dc(){let h=Qt("#leIsler");h.replaceChildren(Ue("div",{class:"le-sh"},Ue("h3",null,"G\xFCn\xFCn i\u015Fleri"),Ue("button",{type:"button",class:"le-x",onclick:()=>h.classList.remove("on")},"\xD7")),Ue("p",{class:"le-sub"},`Ortak lale puan\u0131n\u0131z: \u{1F337} ${St()} \xB7 Toplanan lale: ${ae.toplanan||0}`),Ue("ul",{class:"le-is"},...gf().map(([m,x,y,A])=>Ue("li",{class:A?"ok":""},Ue("span",null,m),Ue("b",null,x),Ue("em",null,A?"\u2713":"+"+y)))),Ue("p",{class:"le-sub"},"Puanlar ikinizin ortak kumbaras\u0131. Ma\u011Fazadan e\u015Fya al\u0131n, bah\xE7eye lale ekin, birbirinize hediye b\u0131rak\u0131n.")),h.classList.add("on")}let Io="Modern";function Do(){let h=Qt("#leMagaza");h&&h.classList.remove("on")}function ug(){if(!confirm("Salondaki mobilyalar depoya kald\u0131r\u0131l\u0131p modern tak\u0131m yerle\u015Ftirilsin mi? (Depodan istedi\u011Fin zaman geri koyabilirsin)"))return;let h=x=>x==="pikap"||Le[x]&&Le[x][3]==="Bizim";ae.esyalar=ae.esyalar.filter(x=>te(x.x).id!=="salon"||h(x.t)?!0:(ae.depo.push(x.t),!1));let m=ae.esyalar.find(x=>x.t==="pikap"&&te(x.x).id==="salon");m&&Object.assign(m,{x:-3.9,z:-3,r:0}),Y.SALON.forEach(([x,y,A,N],z)=>{let W=ae.depo.indexOf(x);W>=0&&ae.depo.splice(W,1),ae.esyalar.push({id:"md"+Date.now().toString(36)+z,t:x,x:y,z:A,r:N})}),Do(),ht(),[Fe.A,Fe.B].forEach(x=>{te(x.g.position.x).id==="salon"&&x.durum==="ayakta"&&(x.path=[],x.g.position.set(.6,0,-.2))}),Tc(.6,1,-1),xt("\u2728 Salon modern d\xF6\u015Fendi \xB7 eski e\u015Fyalar depoda")}function Lc(){let h=Qt("#leMagaza"),m=[...new Set(Object.values(Le).map(y=>y[3]))].filter(y=>y!=="Mutfak"||Se.m_fridge_A_decorated),x={};ae.depo.forEach(y=>{x[y]=(x[y]||0)+1}),h.replaceChildren(...[Ue("div",{class:"le-sh"},Ue("h3",null,"Ma\u011Faza"),Ue("span",{class:"le-pp"},"\u{1F337} "+St()),Ue("button",{type:"button",class:"le-x",onclick:Do},"\xD7")),Object.keys(x).length?Ue("div",{class:"le-depo"},Ue("p",{class:"le-sub"},"\u{1F4E6} Depoda"),Ue("div",{class:"le-grid"},...Object.entries(x).map(([y,A])=>Ue("button",{type:"button",class:"le-urun",onclick:()=>Pc(y,!1)},Ue("span",null,Le[y][0]),Ue("b",null,Le[y][1]+(A>1?" \xD7"+A:"")),Ue("em",null,"Yerle\u015Ftir"))))):null,Io==="Modern"?Ue("button",{type:"button",class:"le-hazir",onclick:ug},"\u2728 Salonu haz\u0131r modern tak\u0131mla d\xF6\u015Fe (\xFCcretsiz)"):null,Ue("div",{class:"le-tabs"},...m.map(y=>Ue("button",{type:"button",class:y===Io?"on":"",onclick:()=>{Io=y,Lc()}},y))),Ue("div",{class:"le-grid"},...Object.entries(Le).filter(([,y])=>y[3]===Io).map(([y,A])=>Ue("button",{type:"button",class:"le-urun"+(St()<A[2]?" pahali":""),onclick:()=>Pc(y,!0)},Ue("span",null,A[0]),Ue("b",null,A[1]),Ue("em",null,"\u{1F337} "+A[2]))))].filter(Boolean)),h.classList.add("on")}function xt(h){let m=Qt("#leIpucu");m&&(m.textContent=h,m.classList.add("on"),clearTimeout(m._t),m._t=setTimeout(()=>m.classList.remove("on"),2800))}function dg(h,m){let x=Qt("#lePuan");x&&(x.classList.remove("pop"),x.offsetWidth,x.classList.add("pop")),xt(`+${h} \u{1F337} ${m}`)}function ga(){let h=Qt("#lePuan");h&&(h.textContent="\u{1F337} "+St())}function ba(){let h=Qt("#leDuzen");if(!h)return;h.hidden=!nr;let m=ze?Le[ze.userData.tip]:null;h.replaceChildren(ze&&m?Ue("div",{class:"le-dz"},Ue("b",null,m[0]+" "+m[1]),Ue("button",{type:"button",onclick:()=>{oa=!0,ba(),xt("Yeni yerine dokun")},class:oa?"on":""},"\u270B Ta\u015F\u0131"),Ue("button",{type:"button",onclick:tg},"\u21BB \xC7evir"),Ue("button",{type:"button",onclick:ng},"\u{1F4E6} Kald\u0131r")):Ue("div",{class:"le-dz"},Ue("b",null,"Bir e\u015Fyaya dokun")),Ue("button",{type:"button",class:"le-bitti",onclick:()=>_a(!1)},"\u2713 Bitti"))}function _a(h){Rs.busy||(nr=h,document.body.classList.toggle("le-duzende",h),h?(Rt.path=[],ba(),ze||xt("D\xFCzenleme: e\u015Fyay\u0131 tutup s\xFCr\xFCkle \xB7 \u21BB ile \xE7evir")):(wo(),Sn=null,_.enabled=!0))}let is=(h,m)=>{let x=Qt(h);x&&(x.onclick=m)};document.querySelectorAll("[data-emote]").forEach(h=>h.onclick=()=>{Eo(Rt,h.dataset.emote);let m=Qt("#leSevgi");m&&m.classList.remove("on")}),is("#leSevgiBtn",()=>{let h=Qt("#leSevgi");h&&h.classList.toggle("on")}),is("#leMagazaBtn",Lc),is("#leDuzenBtn",()=>_a(!nr)),is("#leIsBtn",Dc),is("#leHediyeBtn",nf),is("#leKameraBtn",cg),is("#leEvBtn",ca),ga(),setTimeout(()=>{en(10,"Eve ho\u015F geldin","giris"),hg(),di()},1500),setInterval(()=>{Di.forEach((h,m)=>Qe(h,ae.bahce[m])),di()},6e4),mf&&(ht(),setTimeout(()=>xt("\u{1F381} Depoya 2 ki\u015Fisel e\u015Fya geldi \xB7 Ma\u011Faza \u2192 \u{1F4E6} Depoda"),3500)),xt("Dokun, y\xFCr\xFC. E\u015Fyalara, bah\xE7eye ve duvardaki foto\u011Fraflara dokun \u{1F337}");let kc=/Android|iPhone|iPad/i.test(navigator.userAgent),Cs="yuksek";try{Cs=localStorage.getItem("le-kalite")||((navigator.hardwareConcurrency||4)<4?"dusuk":"yuksek")}catch{}let Ps=new gc(l);Ps.setPixelRatio(Math.min(kc?1.5:2,devicePixelRatio||1)),Ps.addPass(new bc(c,p));let Lo=new fo(c,p,300,300);Lo.blendIntensity=.85,Lo.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.2,scale:1,samples:kc?10:16}),Lo.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:kc?8:16}),Ps.addPass(Lo),Ps.addPass(new na(new ue(300,300),d?.55:.12,.4,d?.7:1.05)),Ps.addPass(new yc);function ko(h){Cs=h;try{localStorage.setItem("le-kalite",h)}catch{}let m=Qt("#leKalite");m&&(m.textContent=h==="yuksek"?"\u2728":"\u26A1");let x=h==="yuksek"?2048:1024;g.shadow.mapSize.set(x,x),g.shadow.map&&(g.shadow.map.dispose(),g.shadow.map=null)}is("#leKalite",()=>{ko(Cs==="yuksek"?"dusuk":"yuksek"),xt(Cs==="yuksek"?"\u2728 Y\xFCksek g\xF6r\xFCnt\xFC kalitesi":"\u26A1 H\u0131zl\u0131 mod (pil dostu)")}),ko(Cs);let bf=0,Nc=0,_f=Cs==="yuksek"&&!window.__leHiz;function fg(h){if(_f&&(bf++,Nc+=h,Nc>4)){let m=bf/Nc;_f=!1,m<24&&(ko("dusuk"),xt("\u26A1 Telefonun i\xE7in h\u0131zl\u0131 moda ge\xE7tim \xB7 \u2728 ile de\u011Fi\u015Ftirebilirsin"))}}let pg=new Zr,No=new D,xf=!0;function mg(h,m,x,y){No.set(m,x,y).project(p);let A=l.domElement.getBoundingClientRect();h.style.transform=`translate(${(No.x*.5+.5)*A.width}px, ${(-No.y*.5+.5)*A.height}px) translate(-50%,-100%)`,h.style.visibility=No.z<1?"visible":"hidden"}function yf(){let h=e.clientWidth,m=e.clientHeight;l.setSize(h,m,!1),Ps.setSize(h,m),p.aspect=h/m,p.fov=h<m?42:30,p.updateProjectionMatrix(),xf&&(xf=!1,h<m&&p.position.set(10.5,14.5,15.5))}new ResizeObserver(yf).observe(e),yf(),l.setAnimationLoop(()=>{let h=Math.min(.1,pg.getDelta()),m=performance.now()/1e3,x=window.__leHiz||1;Rs.beforeFrame();for(let A of[Fe.A,Fe.B]){if(A.path.length&&A.durum==="ayakta"){let[N,z]=A.path[0],W=A.g.position,ge=N-W.x,ye=z-W.z,De=Math.hypot(ge,ye);if(De<.05){if(A.path.shift(),!A.path.length){A.kosu=!1,A.oyna("Idle");let we=A.sonra;A.sonra=null,we&&we()}}else{let we=Math.min(De,(A.kosu?A.hiz*1.7:A.hiz)*h);W.x+=ge/De*we,W.z+=ye/De*we,A.g.rotation.y=UM(A.g.rotation.y,Math.atan2(ge,ye),Math.min(1,h*12))}}A.mixer.update(h*x),mg(A.tag,A.g.position.x,A.g.position.y+(A.durum==="yatiyor"?.9:A.durum==="oturuyor"||A.durum==="yerde"?A.boy*.82+.15:A.boy+.25),A.g.position.z)}Rs.afterFrame();for(let A=aa.length-1;A>=0;A--){let N=aa[A],z=N.userData;z.t+=h,z.vy-=z.g*h,N.position.x+=z.vx*h,N.position.y+=z.vy*h,N.position.z+=z.vz*h,N.material.opacity=Math.max(0,1-z.t/z.omur),(z.t>z.omur||N.position.y<-.2)&&(c.remove(N),N.material.dispose(),aa.splice(A,1))}Si.material.opacity>0&&(Si.material.opacity-=h*1.5,Si.scale.multiplyScalar(1+h*1.2)),ui.visible&&(ui.material.opacity=.55+Math.sin(m*4)*.35),Dt.forEach(A=>A.userData.anim&&A.userData.anim(h,m)),Yn.forEach(A=>{let N=ae.hediyeler.find(z=>z.id===A.userData.id);N&&(A.position.y=(N.y||0)+Math.abs(Math.sin(m*2.2))*.04),A.rotation.y+=h*.3}),M.intensity+=((Ts?6:0)-M.intensity)*Math.min(1,h*6),Mo&&Dt.forEach(A=>A.userData.plak&&A.userData.plak.forEach(N=>N.rotation.y+=h*3.5)),U.forEach((A,N)=>{A.rotation.z=Math.sin(m*.9+N*1.7)*.035,A.scale.x=1+Math.sin(m*1.3+N)*.04});let y=re.attributes.position;for(let A=0;A<ke;A++){let N=y.getY(A)+h*(.04+A%5*.01);N>2.6&&(N=.3),y.setY(A,N),y.setX(A,y.getX(A)+Math.sin(m*.5+A)*h*.03)}y.needsUpdate=!0,fg(h),lg(),_.update(),Cs==="yuksek"?Ps.render():l.render(c,p)});let gg=(h,m,x,y=0)=>{let A={id:"tst"+Math.random().toString(36).slice(2,7),t:h,x:m,z:x,r:y};return ae.esyalar.push(A),Vt(),Dt.get(A.id)},bg=()=>{ae.esyalar=ae.esyalar.filter(h=>te(h.x).id!=="salon"),Vt()},_g=h=>{h.updateMatrixWorld(!0);let m=[];for(let x=-.7;x<=.71;x+=.05)m.push([+x.toFixed(2),+ts(h,h.position.x,h.position.z+x).toFixed(2)]);return m};return window.__le={testKoy:gg,testTemizle:bg,testProfil:_g,odaGit:ir,odaAc:rf,odaSecAc:ca,ODA:j,odaOf:te,buzAc:ef,K:Fe,ben:Rt,o:Bt,git:yi,kullan:ra,emote:Eo,scene:c,camera:p,controls:_,EV:()=>ae,PUAN:nt,puan:St,ekle:Pc,duzenAc:_a,magazaAc:Lc,islerAc:Dc,hediyeBirakAc:nf,parsel:Di,esyaObj:Dt,kazan:en,hug:Rs,duvarFoto:at,hediyeObj:Yn,kameraOdak:fa,kaliteAyarla:ko},window.__le}window.LaleEvi={start:Nm};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
